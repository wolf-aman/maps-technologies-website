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
      children: [
        {
          label: 'Stack Overflow',
          href: 'https://www.stackoverflow.com',
          type: 'external',
          description: 'Q&A for developers',
        },
        {
          label: 'Beningo',
          href: 'https://www.beningo.com',
          type: 'external',
          description: 'Embedded systems resources',
        },
        {
          label: 'Embedded.com',
          href: 'https://www.embedded.com',
          type: 'external',
          description: 'Embedded systems news and articles',
        },
        {
          label: 'Controllers Tech',
          href: 'https://controllerstech.com',
          type: 'external',
          description: 'Microcontroller tutorials',
        },
        {
          label: 'Voltage Divider Calculator',
          href: 'https://ohmslawcalculator.com/voltage-divider-calculator',
          type: 'external',
          description: 'Online voltage divider calculator',
        },
        {
          label: 'Asserts in Embedded Systems',
          href: 'https://interrupt.memfault.com/blog/asserts-in-embedded-systems',
          type: 'external',
          description: 'Best practices for asserts',
        },
      ],
    },
    {
      label: 'Contact Us',
      href: '/#contact',
      type: 'internal',
      description: 'Get in touch with us',
    },
  ],
};
