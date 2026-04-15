/**
 * Careers Table of Contents Configuration
 * 
 * Defines the flat structure for career opportunities
 * No categories - direct items only
 */

import { TocStructure } from '@/types/toc.types';

export const careersTocStructure: TocStructure = {
  title: 'Careers',
  description: [
    'Join our team and be part of an innovative company shaping the future of technology.',
    'Explore exciting career opportunities at MAPS Technologies.',
  ],
  items: [
    {
      id: 'Internship',
      label: 'Internship',
      slug: 'Internship',
    },
  ],
};
