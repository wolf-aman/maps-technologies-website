/**
 * PDF Viewer Component
 * 
 * Renders an embedded PDF viewer with iframe for reliable cross-browser PDF display.
 * Fully responsive design supporting desktop, tablet, and mobile devices.
 * 
 * PDFs are served through the /api/pdf endpoint to ensure proper HTTP headers
 * (Content-Disposition: inline), which forces browsers to display PDFs inline
 * instead of downloading them. This resolves cross-browser inconsistencies.
 * 
 * Features:
 * - Mobile-responsive sizing (400px on mobile, 600px on tablet, 800px on desktop)
 * - Fullscreen capability (native browser PDF viewer)
 * - Consistent styling and borders
 * - Loading state via iframe
 * - Proper headers for inline display (not download)
 * - Range request support for efficient PDF seeking
 * - Touch-friendly on mobile devices
 * 
 * Responsive Breakpoints:
 * - Mobile (< 640px): min-height 400px
 * - Tablet (640px - 1024px): min-height 600px
 * - Desktop (> 1024px): min-height 800px
 * 
 * Under the hood:
 * The PDFPath is passed to /api/pdf endpoint which serves the PDF from
 * public directory with correct headers to force inline display.
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

  return (
    <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
      <iframe
        src={apiUrl}
        title={label}
        className="w-full h-auto min-h-[400px] sm:min-h-[600px] lg:min-h-[800px]"
        allow="fullscreen"
      />
    </div>
  );
}
