/**
 * Simplified Search Configuration
 * 
 * Contains all searchable website content organized by type
 */

export interface SearchItem {
  id: string;
  type: 'product' | 'domain' | 'page';
  label: string;
  href: string;
  category?: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  // ===== PRODUCTS =====
  {
    id: 'product-op-amp',
    type: 'product',
    label: 'Op-Amp Circuits',
    href: '/products',
    category: 'Analog',
    keywords: ['op-amp', 'opamp', 'operational amplifier', 'analog'],
  },
  {
    id: 'product-ac-dc',
    type: 'product',
    label: 'AC-DC Converter',
    href: '/products',
    category: 'Power Supply',
    keywords: ['ac-dc', 'converter', 'power'],
  },
  {
    id: 'product-wireless',
    type: 'product',
    label: 'Wireless Geophone',
    href: '/products',
    category: 'Communication',
    keywords: ['wireless', 'geophone', 'communication'],
  },
  {
    id: 'product-8bit',
    type: 'product',
    label: '8-Bit Microcontroller',
    href: '/products',
    category: 'Micro-controller',
    keywords: ['8-bit', 'microcontroller', 'mcu'],
  },
  {
    id: 'product-lithium',
    type: 'product',
    label: 'Lithium Battery Module',
    href: '/products',
    category: 'Battery',
    keywords: ['lithium', 'battery', 'power'],
  },

  // ===== DOMAINS =====
  {
    id: 'domain-medical',
    type: 'domain',
    label: 'Medical Electronics',
    href: '/domains/medical-electronics',
    keywords: ['medical', 'healthcare', 'medical electronics'],
  },
  {
    id: 'domain-automotive',
    type: 'domain',
    label: 'Automotive',
    href: '/domains/automotive',
    keywords: ['automotive', 'vehicle', 'automotive electronics'],
  },
  {
    id: 'domain-industrial',
    type: 'domain',
    label: 'Industrial IoT',
    href: '/domains/industrial-iot',
    keywords: ['industrial', 'iot', 'internet of things'],
  },
  {
    id: 'domain-consumer',
    type: 'domain',
    label: 'Consumer Electronics',
    href: '/domains/consumer-electronics',
    keywords: ['consumer', 'consumer electronics', 'home'],
  },
  {
    id: 'domain-aerospace',
    type: 'domain',
    label: 'Aerospace & Defense',
    href: '/domains/aerospace-defense',
    keywords: ['aerospace', 'defense', 'aviation'],
  },

  // ===== PAGES =====
  {
    id: 'page-home',
    type: 'page',
    label: 'Home',
    href: '/',
    keywords: ['home', 'welcome', 'start'],
  },
  {
    id: 'page-products',
    type: 'page',
    label: 'Products',
    href: '/products',
    keywords: ['products', 'catalog', 'solutions'],
  },
  {
    id: 'page-about',
    type: 'page',
    label: 'About Us',
    href: '/about-us',
    keywords: ['about', 'company', 'history', 'team'],
  },
  {
    id: 'page-services',
    type: 'page',
    label: 'Services',
    href: '/#explore-services',
    keywords: ['services', 'design', 'pcb', 'testing', 'training'],
  },
  {
    id: 'page-career',
    type: 'page',
    label: 'Career',
    href: '/career',
    keywords: ['career', 'jobs', 'employment', 'hiring'],
  },
  {
    id: 'page-contact',
    type: 'page',
    label: 'Contact Us',
    href: '/#contact',
    keywords: ['contact', 'email', 'support', 'reach out'],
  },
  {
    id: 'page-privacy',
    type: 'page',
    label: 'Privacy Policy',
    href: '/privacy-policy',
    keywords: ['privacy', 'data protection', 'legal'],
  },
  {
    id: 'page-terms',
    type: 'page',
    label: 'Terms & Conditions',
    href: '/terms-and-conditions',
    keywords: ['terms', 'conditions', 'legal'],
  },
];

/**
 * Simple search function
 * Filters by: label, category, and keywords
 */
export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const q = query.toLowerCase().trim();

  return searchIndex.filter(item => {
    // Search label
    if (item.label.toLowerCase().includes(q)) return true;
    
    // Search category
    if (item.category?.toLowerCase().includes(q)) return true;
    
    // Search keywords
    if (item.keywords.some(keyword => keyword.toLowerCase().includes(q))) {
      return true;
    }

    return false;
  });
}

