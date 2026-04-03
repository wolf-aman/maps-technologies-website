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
