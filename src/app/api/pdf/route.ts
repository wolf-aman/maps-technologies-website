import { NextRequest, NextResponse } from 'next/server';
import { stat, open } from 'fs/promises';
import path from 'path';

/**
 * GET /api/pdf?path=...
 * 
 * Serves PDF files with proper headers to force inline display instead of download.
 * This ensures consistent PDF viewing behavior across all browsers and systems.
 * 
 * Features:
 * - Sets Content-Disposition: inline to force browser display
 * - Proper Content-Type: application/pdf header
 * - Full HTTP 206 Range Request support (critical for PDF seeking/scrubbing)
 * - RFC 5987 compliant filename encoding in Content-Disposition
 * - Secure path validation to prevent directory traversal
 * - Streaming for large files (memory efficient)
 * - Proper caching headers
 * - Cross-browser compatibility (no X-Frame-Options to avoid iframe issues)
 * 
 * Query Parameters:
 * - path: The relative path to the PDF file from public directory
 *   Example: ?path=pdfs/products/analog/op-amp.pdf
 * 
 * Why Range Requests Matter:
 * Most modern PDF viewers (including browser native and PDF.js) need HTTP 206
 * range request support to efficiently load and seek through PDFs. Without it:
 * - Some browsers try to download entire PDF instead of displaying inline
 * - Seeking/scrubbing in PDF viewer fails
 * - Memory usage increases dramatically for large PDFs
 * - Mobile devices often fail to render PDFs
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const pdfPath = searchParams.get('path');

    if (!pdfPath) {
      return NextResponse.json(
        { error: 'Missing required parameter: path' },
        { status: 400 }
      );
    }

    // Validate path to prevent directory traversal attacks
    if (pdfPath.includes('..') || pdfPath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid path' },
        { status: 400 }
      );
    }

    // Ensure the file is a PDF
    if (!pdfPath.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    // Construct the full file path
    const publicDir = path.join(process.cwd(), 'public');
    const fullPath = path.join(publicDir, pdfPath);

    // Ensure the file is within the public directory (prevent directory traversal)
    if (!fullPath.startsWith(publicDir)) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    // Get file stats for size and range request handling
    const fileStats = await stat(fullPath);
    const fileSize = fileStats.size;
    const fileName = path.basename(pdfPath);

    // RFC 5987 compliant filename encoding for Content-Disposition
    // Handles special characters properly across all browsers
    const encodedFileName = encodeURIComponent(fileName).replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

    // Parse Range header if present (HTTP 206 Partial Content)
    const rangeHeader = request.headers.get('range');
    
    if (rangeHeader) {
      // Parse range header: "bytes=start-end"
      const rangeMatch = rangeHeader.match(/bytes=(\d+)-(\d*)/);
      
      if (rangeMatch) {
        const start = parseInt(rangeMatch[1], 10);
        const end = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : fileSize - 1;

        // Validate range
        if (start < 0 || end >= fileSize || start > end) {
          return new NextResponse(null, {
            status: 416,
            headers: {
              'Content-Range': `bytes */${fileSize}`,
            },
          });
        }

        // Stream the range
        const fileHandle = await open(fullPath);
        const stream = fileHandle.createReadStream({ start, end });

        return new NextResponse(stream as any, {
          status: 206,
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Length': (end - start + 1).toString(),
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'public, max-age=31536000, immutable',
            'X-Content-Type-Options': 'nosniff',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Range',
            // Use filename* for RFC 5987 encoding
            'Content-Disposition': `inline; filename="${fileName}"; filename*=UTF-8''${encodedFileName}`,
          },
        });
      }
    }

    // No range request - send full file
    const fileHandle = await open(fullPath);
    const stream = fileHandle.createReadStream();

    const response = new NextResponse(stream as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': fileSize.toString(),
        'Accept-Ranges': 'bytes',
        // Use filename* for RFC 5987 encoding
        'Content-Disposition': `inline; filename="${fileName}"; filename*=UTF-8''${encodedFileName}`,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Range',
        // Removed X-Frame-Options from API response - should only be on pages
        // This prevents iframe loading issues in some browsers
      },
    });

    return response;
  } catch (error) {
    console.error('PDF serving error:', error);

    // Return 404 if file not found
    if (error instanceof Error && error.message.includes('ENOENT')) {
      return NextResponse.json(
        { error: 'PDF file not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to serve PDF' },
      { status: 500 }
    );
  }
}
