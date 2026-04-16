/**
 * PDF Viewer Component
 * 
 * Renders an embedded PDF viewer with iframe for reliable cross-browser PDF display.
 * Fully responsive design supporting desktop, tablet, and mobile devices.
 * 
 * PDFs are served through the /api/pdf endpoint with:
 * - Content-Disposition: inline (forces display, not download)
 * - HTTP 206 Range Request support (enables PDF seeking/scrubbing)
 * - Proper RFC 5987 filename encoding
 * - Memory-efficient streaming for large files
 * 
 * This ensures consistent behavior across all browsers and devices.
 * 
 * Features:
 * - Mobile-responsive sizing (400px on mobile, 600px on tablet, 800px on desktop)
 * - Fullscreen capability (native browser PDF viewer)
 * - Consistent styling and borders
 * - HTTP Range Request support for efficient PDF seeking
 * - Touch-friendly on mobile devices
 * - Fallback download link for unsupported browsers
 * - Cross-browser tested (Chrome, Firefox, Safari, Edge)
 * 
 * Responsive Breakpoints:
 * - Mobile (< 640px): min-height 400px
 * - Tablet (640px - 1024px): min-height 600px
 * - Desktop (> 1024px): min-height 800px
 * 
 * How it works:
 * 1. Component constructs PDF path from slug and category
 * 2. PDFViewer passes to /api/pdf endpoint with proper query encoding
 * 3. API endpoint validates path (security), reads file, and streams with correct headers
 * 4. Browser displays PDF inline in iframe
 * 5. Fallback download link provided if iframe fails on any device
 * 
 * @component
 * @example
 * <PDFViewer 
 *   slug="op-amp" 
 *   label="Op-Amp Circuits" 
 *   category="products/analog" 
 * />
 */

'use client';

/**
 * Props for PDFViewer component
 */
interface PDFViewerProps {
  /** PDF file slug (e.g., 'op-amp') - used to construct PDF path */
  slug: string;
  /** Product or document label for display and accessibility */
  label: string;
  /** Optional category path for organizing PDFs (e.g., 'products/analog') */
  category?: string;
}

export default function PDFViewer({ slug, label, category }: PDFViewerProps) {
  // Construct the PDF path and encode it for the API route
  const pdfPath = category ? `pdfs/${category}/${slug}.pdf` : `pdfs/${slug}.pdf`;
  const apiUrl = `/api/pdf?path=${encodeURIComponent(pdfPath)}`;
  
  // Direct PDF path for fallback download link
  // Note: This uses the API endpoint to ensure proper headers even for downloads
  const downloadUrl = apiUrl;

  return (
    <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
      <iframe
        src={apiUrl}
        title={label}
        className="w-full h-auto min-h-[400px] sm:min-h-[600px] lg:min-h-[800px]"
        allow="fullscreen"
      />
      
      {/* Fallback download link for browsers with iframe issues */}
      <div className="absolute bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity">
        <a
          href={downloadUrl}
          download={`${slug}.pdf`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          title={`Download ${label} as PDF`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  );
}
