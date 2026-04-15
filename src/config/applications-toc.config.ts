/**
 * Applications Table of Contents Configuration
 * 
 * Defines the flat structure for application use cases
 * No categories - direct items only
 */

import { TocStructure } from '@/types/toc.types';

export const applicationsTocStructure: TocStructure = {
  title: 'Applications',
  description: [
    'Explore real-world use cases and applications for our products.',
    'Discover how our solutions can be integrated into your projects and workflows.',
  ],
  items: [
    {
      id: 'Multi-Sensor Monitoring Solution',
      label: 'Multi-Sensor Monitoring Solution',
      slug: 'Multi-Sensor Monitoring Solution',
    },
    {
      id: 'Dual-Sensor Vibration Analysis',
      label: 'Dual-Sensor Vibration Analysis',
      slug: 'Dual-Sensor Vibration Analysis',
    },
  ],
};
