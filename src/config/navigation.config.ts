/**
 * Navigation Configuration
 * 
 * Centralized configuration for all navigation items.
 * Modify this file to add, remove, or update navigation items.
 * 
 * Benefits:
 * - Single source of truth for navigation
 * - Easy to maintain and update
 * - Type-safe with TypeScript
 * - Supports internal routes, external links, and PDFs
 */

import { NavigationConfig } from '@/types/navigation.types';

export const navigationConfig: NavigationConfig = {
  items: [
    {
      label: 'Home',
      href: '/',
      type: 'internal',
      description: 'Navigate to home page',
    },
    {
      label: 'Products',
      href: '/products',
      type: 'internal',
      description: 'Browse our products',
      dropdown: [
        {
          label: 'Power Supply',
          href: '/products/power-supply',
          type: 'internal',
          description: 'Power supply solutions',
        },
        {
          label: 'Micro Controller',
          href: '/products/micro-controller',
          type: 'internal',
          description: 'Microcontroller products',
        },
        {
          label: 'Analog',
          href: '/products/analog',
          type: 'internal',
          description: 'Analog components',
        },
        {
          label: 'Communication',
          href: '/products/communication',
          type: 'internal',
          description: 'Communication modules',
        },
        {
          label: 'Other',
          href: '/products/other',
          type: 'internal',
          description: 'Other products',
        },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      type: 'internal',
      description: 'Our professional services',
      dropdown: [
        {
          label: 'Design',
          href: '/services/design',
          type: 'internal',
          description: 'Design services',
        },
        {
          label: 'PCB Layout',
          href: '/services/pcb-layout',
          type: 'internal',
          description: 'PCB layout services',
        },
        {
          label: 'EMI/EMC',
          href: '/services/emi-emc',
          type: 'internal',
          description: 'EMI/EMC testing and solutions',
        },
        {
          label: 'Specialized Training',
          href: '/services/training',
          type: 'internal',
          description: 'Professional training programs',
        },
      ],
    },
    {
      label: 'Useful Links',
      href: '#useful-links',
      type: 'hash',
      description: 'Quick access to useful resources',
    },
    {
      label: 'Contact Us',
      href: '#contact',
      type: 'hash',
      description: 'Get in touch with us',
    },
  ],
};

/**
 * Example: How to add external links or PDFs
 * 
 * For external website:
 * {
 *   label: 'Documentation',
 *   href: 'https://docs.example.com',
 *   type: 'external',
 *   description: 'View documentation',
 * }
 * 
 * For PDF document:
 * {
 *   label: 'Product Catalog',
 *   href: '/documents/catalog.pdf',
 *   type: 'pdf',
 *   description: 'Download product catalog',
 * }
 */

/**
 * Helper function to get navigation items
 * Useful for server-side rendering or dynamic content
 */
export function getNavigationItems() {
  return navigationConfig.items;
}

/**
 * Helper function to find a navigation item by href
 */
export function findNavigationItem(href: string) {
  for (const item of navigationConfig.items) {
    if (item.href === href) {
      return item;
    }
    if (item.dropdown) {
      const found = item.dropdown.find((child) => child.href === href);
      if (found) return found;
    }
  }
  return null;
}
