import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

/**
 * GET /api/pdf?path=...
 * 
 * Serves PDF files with proper headers to force inline display instead of download.
 * This ensures consistent PDF viewing behavior across browsers and systems.
 * 
 * Features:
 * - Sets Content-Disposition: inline to force browser display
 * - Proper Content-Type: application/pdf header
 * - Support for range requests (enables seeking/scrubbing in PDF viewer)
 * - Secure path validation to prevent directory traversal
 * - Proper caching headers
 * 
 * Query Parameters:
 * - path: The relative path to the PDF file from public directory
 *   Example: ?path=pdfs/products/analog/op-amp.pdf
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

    // Read the PDF file
    const fileBuffer = await readFile(fullPath);

    // Create response with proper headers
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        // Force inline display instead of download
        'Content-Disposition': 'inline; filename="' + path.basename(pdfPath) + '"',
        'Content-Type': 'application/pdf',
        'Content-Length': fileBuffer.length.toString(),
        
        // Support for range requests (allows PDF viewers to seek/scrub)
        'Accept-Ranges': 'bytes',
        
        // Cache control - cache PDFs for 1 year (they're static assets)
        'Cache-Control': 'public, max-age=31536000, immutable',
        
        // Security headers
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
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
