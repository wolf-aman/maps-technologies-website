/**
 * PDF Viewer Component
 * 
 * Renders an embedded PDF viewer with iframe for reliable cross-browser PDF display.
 * Supports fullscreen mode and responsive sizing.
 * 
 * PDFs are loaded from the public directory:
 * - Products: /public/pdfs/products/{category}/{slug}.pdf
 * - Other: /public/pdfs/{slug}.pdf
 * 
 * Features:
 * - Responsive sizing (min-height 600px)
 * - Fullscreen capability (native browser PDF viewer)
 * - Consistent styling and borders
 * - Loading state via iframe
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
  const pdfPath = category ? `/pdfs/${category}/${slug}.pdf` : `/pdfs/${slug}.pdf`;

  return (
    <div className="relative w-full flex-1 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
      <iframe
        src={pdfPath}
        title={label}
        className="w-full h-full min-h-[600px]"
        allow="fullscreen"
      />
    </div>
  );
}
