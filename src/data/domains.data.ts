/**
 * Domain Content Data
 * Contains detailed information for each domain/application area
 */

export interface DomainContent {
  id: string;
  label: string;
  slug: string;
  description: string;
  imageUrl?: string;
}

export const domainsData: DomainContent[] = [
  {
    id: 'medical-electronics',
    label: 'Medical Electronics',
    slug: 'medical-electronics',
    description: 'Minimally invasive surgery (MIS) has transformed modern healthcare by enabling complex procedures through small incisions, guided by advanced medical electronics and high-fidelity imaging systems. High-definition cameras, precision-controlled instruments, and real-time signal processing allow surgeons to operate with enhanced accuracy, reduced trauma, and improved patient safety. Embedded systems play a critical role in integrating visualization, control, and data acquisition, ensuring low-latency performance and reliable operation in demanding clinical environments. As technology continues to evolve—incorporating robotics, AI-assisted guidance, and smart sensing—medical electronics is driving MIS toward faster recovery times, lower risk of complications, and consistently better surgical outcomes, while enabling next-generation, precision-driven surgical platforms.',
    imageUrl: '/images/domains/medical-electronics.png',
  },
  {
    id: 'vibration-geophone',
    label: 'Vibration / Geophone Systems',
    slug: 'vibration-geophone-systems',
    description: 'Advanced vibration sensing and geophone systems for seismic monitoring, structural health assessment, and industrial applications.',
    imageUrl: '/images/domains/vibration-geophone.png',
  },
  {
    id: 'metering-iot',
    label: 'Metering and IoT Devices',
    slug: 'metering-iot-devices',
    description: 'Smart metering solutions and IoT devices for energy management, data acquisition, and remote monitoring.',
    imageUrl: '/images/domains/metering-iot.png',
  },
  {
    id: 'industrial-systems',
    label: 'Industrial Systems',
    slug: 'industrial-systems',
    description: 'Robust industrial control systems, automation solutions, and process monitoring for manufacturing environments.',
    imageUrl: '/images/domains/industrial-systems.png',
  },
  {
    id: 'custom-development',
    label: 'Custom Product Development',
    slug: 'custom-product-development',
    description: 'Tailored solutions and custom product development for specialized applications and unique technical challenges.',
    imageUrl: '/images/domains/custom-development.png',
  },
];

/**
 * Helper function to find domain by slug
 */
export function getDomainBySlug(slug: string): DomainContent | undefined {
  return domainsData.find(domain => domain.slug === slug);
}

/**
 * Helper function to get all domain slugs for dynamic routes
 */
export function getAllDomainSlugs(): string[] {
  return domainsData.map(domain => domain.slug);
}
