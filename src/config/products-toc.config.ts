/**
 * Products Table of Contents Configuration
 * 
 * Defines the hierarchical structure for product categories and items
 */

import { TocStructure } from '@/types/toc.types';

export const productsTocStructure: TocStructure = {
  title: 'Our Products',
  description: 'Explore our comprehensive range of electronic components and solutions designed for reliability and performance.',
  items: [
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
        {
          id: 'ps-dc-dc',
          label: 'DC/DC Converters',
          slug: 'dc-dc-converter',
        },
        {
          id: 'ps-linear',
          label: 'Linear Regulators',
          slug: 'linear-regulator',
        },
      ],
    },
    {
      id: 'micro-controller-category',
      label: 'Micro Controller',
      slug: 'micro-controller',
      children: [
        {
          id: 'mc-8bit',
          label: '8-bit Microcontrollers',
          slug: '8-bit',
        },
        {
          id: 'mc-32bit',
          label: '32-bit Microcontrollers',
          slug: '32-bit',
        },
        {
          id: 'mc-dsp',
          label: 'DSP Controllers',
          slug: 'dsp',
        },
      ],
    },
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
        {
          id: 'analog-adc-dac',
          label: 'ADC/DAC Converters',
          slug: 'adc-dac',
        },
        {
          id: 'analog-integrated',
          label: 'Integrated Circuits',
          slug: 'integrated-circuits',
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
        {
          id: 'comm-wired',
          label: 'Wired Communication',
          slug: 'wired',
        },
        {
          id: 'comm-rf',
          label: 'RF Components',
          slug: 'rf',
        },
      ],
    },
    {
      id: 'battery-category',
      label: 'Battery & Power Management',
      slug: 'other',
      children: [
        {
          id: 'batt-lithium',
          label: 'Lithium Batteries',
          slug: 'lithium',
        },
        {
          id: 'batt-charger',
          label: 'Battery Chargers',
          slug: 'chargers',
        },
        {
          id: 'batt-protection',
          label: 'Protection Circuits',
          slug: 'protection',
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
