/**
 * Dynamic Search Configuration
 * 
 * Generates searchable content from actual site data
 * Supports products, domains, applications, services, and pages
 */

import { productsTocStructure } from './products-toc.config';
import { applicationsTocStructure } from './applications-toc.config';
import { careersTocStructure } from './careers-toc.config';
import { domainsData } from '@/data/domains.data';

export interface SearchItem {
  id: string;
  type: 'product' | 'domain' | 'application' | 'service' | 'page';
  label: string;
  href: string;
  category?: string;
  keywords: string[];
  relevance?: number; // For ranking
}

/**
 * Extract all products from products TOC structure
 */
function extractProducts(): SearchItem[] {
  const products: SearchItem[] = [];

  productsTocStructure.items.forEach(category => {
    const categoryLabel = category.label;
    if (category.children) {
      category.children.forEach(product => {
        products.push({
          id: `product-${product.slug}`,
          type: 'product',
          label: product.label,
          href: '/products',
          category: categoryLabel,
          keywords: [
            product.label.toLowerCase(),
            categoryLabel.toLowerCase(),
            ...product.label.toLowerCase().split(' '),
            ...generateKeywords(product.label),
          ],
        });
      });
    }
  });

  return products;
}

/**
 * Extract all applications from applications TOC structure
 */
function extractApplications(): SearchItem[] {
  return applicationsTocStructure.items.map(app => ({
    id: `application-${app.slug}`,
    type: 'application',
    label: app.label,
    href: '/application',
    keywords: [
      app.label.toLowerCase(),
      ...app.label.toLowerCase().split(' '),
      ...generateKeywords(app.label),
      'application',
      'use case',
    ],
  }));
}

/**
 * Extract all domains from domains data
 */
function extractDomains(): SearchItem[] {
  return domainsData.map(domain => ({
    id: `domain-${domain.slug}`,
    type: 'domain',
    label: domain.label,
    href: `/domains/${domain.slug}`,
    keywords: [
      domain.label.toLowerCase(),
      domain.slug.toLowerCase(),
      ...domain.label.toLowerCase().split(' '),
      ...generateKeywords(domain.label),
      'domain',
      'industry',
    ],
  }));
}

/**
 * Extract career items from careers TOC structure
 */
function extractCareers(): SearchItem[] {
  const careers: SearchItem[] = [];

  careersTocStructure.items.forEach(category => {
    const categoryLabel = category.label;
    if (category.children) {
      category.children.forEach(career => {
        careers.push({
          id: `career-${career.slug}`,
          type: 'page',
          label: career.label,
          href: '/career',
          category: categoryLabel,
          keywords: [
            career.label.toLowerCase(),
            categoryLabel.toLowerCase(),
            ...career.label.toLowerCase().split(' '),
            'career',
            'opportunity',
            'position',
          ],
        });
      });
    }
  });

  return careers;
}

/**
 * Service offerings
 */
function getServiceItems(): SearchItem[] {
  return [
    {
      id: 'service-pcb-design',
      type: 'service',
      label: 'PCB Design',
      href: '/#explore-services',
      keywords: ['pcb', 'design', 'circuit board', 'schematic', 'layout'],
    },
    {
      id: 'service-embedded-systems',
      type: 'service',
      label: 'Embedded Systems',
      href: '/#explore-services',
      keywords: ['embedded', 'firmware', 'microcontroller', 'development'],
    },
    {
      id: 'service-emi-emc-testing',
      type: 'service',
      label: 'EMI/EMC Testing',
      href: '/#explore-services',
      keywords: ['emi', 'emc', 'testing', 'compliance', 'electromagnetic'],
    },
    {
      id: 'service-consulting',
      type: 'service',
      label: 'Technical Consulting',
      href: '/#explore-services',
      keywords: ['consulting', 'technical', 'advisory', 'expertise', 'support'],
    },
  ];
}

/**
 * Static pages
 */
function getPageItems(): SearchItem[] {
  return [
    {
      id: 'page-home',
      type: 'page',
      label: 'Home',
      href: '/',
      keywords: ['home', 'welcome', 'start', 'main'],
    },
    {
      id: 'page-products',
      type: 'page',
      label: 'Products',
      href: '/products',
      keywords: ['products', 'catalog', 'solutions', 'hardware', 'modules'],
    },
    {
      id: 'page-applications',
      type: 'page',
      label: 'Applications',
      href: '/application',
      keywords: ['applications', 'use cases', 'implementation', 'examples'],
    },
    {
      id: 'page-about',
      type: 'page',
      label: 'About Us',
      href: '/about-us',
      keywords: ['about', 'company', 'history', 'team', 'organization'],
    },
    {
      id: 'page-services',
      type: 'page',
      label: 'Services',
      href: '/#explore-services',
      keywords: ['services', 'consulting', 'design', 'development', 'testing'],
    },
    {
      id: 'page-careers',
      type: 'page',
      label: 'Careers',
      href: '/career',
      keywords: ['careers', 'jobs', 'employment', 'opportunities', 'hiring'],
    },
    {
      id: 'page-contact',
      type: 'page',
      label: 'Contact Us',
      href: '/#contact',
      keywords: ['contact', 'email', 'support', 'reach out', 'inquiry'],
    },
    {
      id: 'page-privacy',
      type: 'page',
      label: 'Privacy Policy',
      href: '/privacy-policy',
      keywords: ['privacy', 'data protection', 'legal', 'policy'],
    },
    {
      id: 'page-terms',
      type: 'page',
      label: 'Terms & Conditions',
      href: '/terms-and-conditions',
      keywords: ['terms', 'conditions', 'legal', 'agreement'],
    },
  ];
}

/**
 * Helper function to generate keywords from text
 */
function generateKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[\s\-_,\.]+/)
    .filter(word => word.length > 2);
}

/**
 * Build complete search index from all sources
 */
export function buildSearchIndex(): SearchItem[] {
  return [
    ...extractProducts(),
    ...extractApplications(),
    ...extractDomains(),
    ...extractCareers(),
    ...getServiceItems(),
    ...getPageItems(),
  ];
}

// Generate search index (cached at runtime)
export const searchIndex: SearchItem[] = buildSearchIndex();

/**
 * Enhanced search function with ranking
 * - Exact matches ranked highest
 * - Prefix matches ranked second
 * - Contains matches ranked third
 * - Matches are scored by relevance
 */
export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const q = query.toLowerCase().trim();
  const queryWords = q.split(/\s+/);

  const results: Array<SearchItem & { score: number }> = [];

  searchIndex.forEach(item => {
    let score = 0;

    // Check label
    const labelLower = item.label.toLowerCase();
    if (labelLower === q) {
      score += 100; // Exact match
    } else if (labelLower.startsWith(q)) {
      score += 50; // Prefix match
    } else if (labelLower.includes(q)) {
      score += 25; // Contains match
    }

    // Check category
    if (item.category) {
      const categoryLower = item.category.toLowerCase();
      if (categoryLower === q) score += 30;
      else if (categoryLower.includes(q)) score += 10;
    }

    // Check keywords
    item.keywords.forEach(keyword => {
      if (keyword === q) {
        score += 40; // Exact keyword match
      } else if (keyword.startsWith(q)) {
        score += 20; // Keyword prefix match
      } else if (keyword.includes(q)) {
        score += 5; // Keyword contains match
      }
    });

    // Check multi-word queries - boost if multiple query words match
    if (queryWords.length > 1) {
      const matchedWords = queryWords.filter(word => {
        return (
          labelLower.includes(word) ||
          item.category?.toLowerCase().includes(word) ||
          item.keywords.some(k => k.includes(word))
        );
      });

      if (matchedWords.length > 1) {
        score += matchedWords.length * 5; // Bonus for multiple matches
      }
    }

    if (score > 0) {
      results.push({ ...item, score });
    }
  });

  // Sort by score (descending) and return top results
  return results
    .sort((a, b) => b.score - a.score)
    .map(({ score, ...item }) => item);
}

