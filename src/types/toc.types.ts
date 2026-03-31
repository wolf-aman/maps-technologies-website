/**
 * Table of Contents (TOC) Types
 * Defines the structure for hierarchical TOC navigation used in Products and Services pages
 */

/**
 * Content section with detailed information
 */
export interface ContentSection {
  /** Unique identifier */
  id: string;
  /** Display title */
  title: string;
  /** Content HTML or text */
  content: string;
  /** Optional icon or visual element */
  icon?: React.ReactNode;
}

/**
 * TOC Item - can represent a main category or sub-item
 */
export interface TocItem {
  /** Unique identifier within the TOC */
  id: string;
  /** Display label */
  label: string;
  /** URL slug (e.g., 'power-supply') */
  slug?: string;
  /** Child items for hierarchical structure */
  children?: TocItem[];
  /** Associated content */
  content?: ContentSection;
  /** Icon or visual representation */
  icon?: React.ReactNode;
}

/**
 * Root TOC structure
 */
export interface TocStructure {
  /** Title of the section (e.g., 'Products', 'Services') */
  title: string;
  /** Description - can be a single string or array of paragraph strings */
  description: string | string[];
  /** Main TOC items */
  items: TocItem[];
}
