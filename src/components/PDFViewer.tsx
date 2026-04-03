'use client';

interface PDFViewerProps {
  /** PDF file slug (e.g., 'op-amp') */
  slug: string;
  /** Product label for display */
  label: string;
}

/**
 * PDFViewer Component
 * 
 * Renders an embedded PDF viewer with:
 * - iframe for reliable PDF display
 * - Fullscreen button to open in new tab
 * - Responsive sizing
 * 
 * PDFs should be stored in: public/pdfs/{slug}.pdf
 */
export default function PDFViewer({ slug, label }: PDFViewerProps) {
  const pdfPath = `/pdfs/${slug}.pdf`;

  return (
    <div className="flex flex-col w-full h-full gap-3">
      {/* Header with Title and Fullscreen Button */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{label}</h3>
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
          title="Open PDF in fullscreen"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6v12h12v-6m0 0V4m0 0h6m-6 6L4 4"
            />
          </svg>
          Fullscreen
        </a>
      </div>

      {/* PDF Viewer using iframe */}
      <div className="relative w-full flex-1 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
        <iframe
          src={pdfPath}
          title={label}
          className="w-full h-full min-h-[600px]"
          allow="fullscreen"
        />
      </div>

      {/* Info text */}
      <p className="text-sm text-gray-600">
        💡 Click "Fullscreen" to view in your browser's native PDF viewer for better controls (zoom, print, download).
      </p>
    </div>
  );
}
