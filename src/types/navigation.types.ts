/**
 * Navigation Types
 * Type definitions for the navigation system
 */

/**
 * Link type - determines how the link should be handled
 * - internal: Next.js Link component (client-side navigation)
 * - external: Standard anchor tag (opens in new tab)
 * - pdf: Direct link to PDF document
 * - hash: Anchor link to section on same page
 */
export type LinkType = 'internal' | 'external' | 'pdf' | 'hash';

/**
 * Base navigation item interface
 */
export interface NavigationItem {
  /** Display label */
  label: string;
  /** URL or route path */
  href: string;
  /** Type of link */
  type: LinkType;
  /** Optional icon name or component */
  icon?: string;
  /** Optional description for accessibility */
  description?: string;
}

/**
 * Navigation item that can have dropdown children
 */
export interface NavigationItemWithDropdown extends NavigationItem {
  /** Child items for dropdown */
  dropdown?: NavigationItem[];
}

/**
 * Complete navigation configuration
 */
export interface NavigationConfig {
  /** Main navigation items */
  items: NavigationItemWithDropdown[];
  /** Optional mobile-specific items */
  mobileOnly?: NavigationItem[];
}

/**
 * Dropdown state management
 */
export interface DropdownState {
  isOpen: boolean;
  openDropdownId: string | null;
}
