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
    },
    {
      label: 'Applications',
      href: '/application',
      type: 'internal',
      description: 'Explore use cases and applications',
    },
    {
      label: 'Services',
      href: '/#explore-services',
      type: 'hash',
      description: 'Explore our professional services',
    },
    {
      label: 'Useful Links',
      href: '#useful-links',
      type: 'hash',
      description: 'Quick access to useful resources',
    },
    {
      label: 'Contact Us',
      href: '/#contact',
      type: 'internal',
      description: 'Get in touch with us',
    },
  ],
};
