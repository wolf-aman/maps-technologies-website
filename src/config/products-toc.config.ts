/**
 * Products Table of Contents Configuration
 * 
 * Defines the hierarchical structure for product categories and items
 */

import { TocStructure } from '@/types/toc.types';

export const productsTocStructure: TocStructure = {
  title: 'Products',
  description: [
    'A modular Hardware platform built on a Arm® Cortex®-M4 microcontroller, unifying sensing, connectivity, and power into one scalable system.',
    'Mechanically and Electrically compatible with Raspberry Pi and HATs for flexible integration and expansion.',
  ],
  items: [
    {
      id: 'analog-category',
      label: 'Analog',
      slug: 'analog',
      children: [
        {
          id: 'analog-op-amp',
          label: 'Op-Amp Circuits',
          slug: 'op-amp',
        },
      ],
    },
    {
      id: 'power-supply-category',
      label: 'Power Supply',
      slug: 'power-supply',
      children: [
        {
          id: 'ps-ac-dc',
          label: 'AC/DC Converters',
          slug: 'ac-dc-converter',
        },
      ],
    },
    {
      id: 'communication-category',
      label: 'Communication',
      slug: 'communication',
      children: [
        {
          id: 'comm-wireless',
          label: 'Wireless Modules',
          slug: 'wireless',
        },
      ],
    },
    {
      id: 'micro-controller-category',
      label: 'Microcontroller',
      slug: 'micro-controller',
      children: [
        {
          id: 'mc-8bit',
          label: '8-bit Microcontrollers',
          slug: '8-bit',
        },
      ],
    },
    {
      id: 'Others-category',
      label: 'Others',
      slug: 'other',
      children: [
        {
          id: 'batt-lithium',
          label: 'Lithium Batteries',
          slug: 'lithium',
        },
      ],
    },
  ],
};

/**
 * Helper function to flatten TOC structure for easier searching
 */
export function flattenProductsToc() {
  const flattened: Array<{ id: string; label: string; slug?: string; parentId?: string }> = [];

  function traverse(item: typeof productsTocStructure.items[0], parentId?: string) {
    flattened.push({
      id: item.id,
      label: item.label,
      slug: item.slug,
      parentId,
    });
    if (item.children) {
      item.children.forEach((child) => traverse(child, item.id));
    }
  }

  productsTocStructure.items.forEach((item) => traverse(item));
  return flattened;
}

/**
 * Helper function to find a TOC item by slug
 */
export function findProductTocBySlug(slug: string) {
  const flattened = flattenProductsToc();
  return flattened.find((item) => item.slug === slug);
}
