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
          id: 'Geophone Data Acquisition Board',
          label: 'Geophone Data Acquisition Board',
          slug: 'Geophone Data Acquisition Board',
        }
      ],
    },
    {
      id: 'power-supply-category',
      label: 'Power',
      slug: 'power',
      children: [
        {
          id: 'charger-cum-power',
          label: 'Charger-cum-Power',
          slug: 'charger-cum-power',
        },
      ],
    },
    {
      id: 'communication-category',
      label: 'Communication',
      slug: 'communication',
      children: [
        {
          id: 'GSM GPRS Communication Board',
          label: 'GSM GPRS Communication Board',
          slug: 'GSM GPRS Communication Board',
        },
        {
          id: 'WIFI LORA ISM Communication Board',
          label: 'WIFI LORA ISM Communication Board',
          slug: 'WIFI LORA ISM Communication Board',
        },
      ],
    },
    {
      id: 'micro-controller-category',
      label: 'Microcontroller',
      slug: 'micro-controller',
      children: [
        {
          id: 'DAQ Processing Engine Board',
          label: 'DAQ Processing Engine Board',
          slug: 'DAQ Processing Engine Board',
        },
      ],
    },
    {
      id: 'other-category',
      label: 'Other',
      slug: 'other',
      children: [
        {
          id: 'add',
          label: 'add',
          slug: 'add',
        },
      ],
    },
  ],
};
