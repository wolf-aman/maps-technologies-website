/**
 * Services Table of Contents Configuration
 * 
 * Defines the hierarchical structure for service categories and items
 */

import { TocStructure } from '@/types/toc.types';

export const servicesTocStructure: TocStructure = {
  title: 'Our Services',
  description: 'Professional electronic engineering services to bring your ideas to life. From design to testing and training.',
  items: [
    {
      id: 'design-category',
      label: 'Design Services',
      slug: 'design',
      children: [
        {
          id: 'ds-schematic',
          label: 'Schematic Design',
          slug: 'schematic-design',
        },
        {
          id: 'ds-prototype',
          label: 'Prototype Development',
          slug: 'prototype-development',
        },
        {
          id: 'ds-feasibility',
          label: 'Feasibility Studies',
          slug: 'feasibility-studies',
        },
        {
          id: 'ds-optimization',
          label: 'Circuit Optimization',
          slug: 'circuit-optimization',
        },
      ],
    },
    {
      id: 'pcb-category',
      label: 'PCB Layout & Design',
      slug: 'pcb-layout',
      children: [
        {
          id: 'pcb-multilayer',
          label: 'Multi-layer PCB Design',
          slug: 'multi-layer',
        },
        {
          id: 'pcb-routing',
          label: 'Signal Integrity & Routing',
          slug: 'signal-integrity',
        },
        {
          id: 'pcb-thermal',
          label: 'Thermal Management',
          slug: 'thermal-management',
        },
        {
          id: 'pcb-manufacturing',
          label: 'Manufacturing Support',
          slug: 'manufacturing-support',
        },
      ],
    },
    {
      id: 'emc-category',
      label: 'EMI/EMC Testing & Solutions',
      slug: 'emi-emc',
      children: [
        {
          id: 'emc-testing',
          label: 'EMI/EMC Testing',
          slug: 'emc-testing',
        },
        {
          id: 'emc-mitigation',
          label: 'EMI Mitigation Strategies',
          slug: 'emc-mitigation',
        },
        {
          id: 'emc-compliance',
          label: 'Regulatory Compliance',
          slug: 'emc-compliance',
        },
        {
          id: 'emc-filtering',
          label: 'Filtering & Shielding',
          slug: 'emc-filtering',
        },
      ],
    },
    {
      id: 'training-category',
      label: 'Specialized Training',
      slug: 'training',
      children: [
        {
          id: 'tr-design-tools',
          label: 'Design Tools Training',
          slug: 'design-tools',
        },
        {
          id: 'tr-pcb-design',
          label: 'PCB Design Methodology',
          slug: 'pcb-methodology',
        },
        {
          id: 'tr-embedded',
          label: 'Embedded Systems',
          slug: 'embedded-systems',
        },
        {
          id: 'tr-testing',
          label: 'Testing & Debugging',
          slug: 'testing-debugging',
        },
      ],
    },
  ],
};

/**
 * Helper function to flatten TOC structure for easier searching
 */
export function flattenServicesToc() {
  const flattened: Array<{ id: string; label: string; slug?: string; parentId?: string }> = [];

  function traverse(item: typeof servicesTocStructure.items[0], parentId?: string) {
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

  servicesTocStructure.items.forEach((item) => traverse(item));
  return flattened;
}

/**
 * Helper function to find a TOC item by slug
 */
export function findServiceTocBySlug(slug: string) {
  const flattened = flattenServicesToc();
  return flattened.find((item) => item.slug === slug);
}
