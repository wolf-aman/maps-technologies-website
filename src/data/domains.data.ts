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
    description: 'Our vibration monitoring solutions leverage high-sensitivity geophones and precision accelerometers to detect microseismic activity and structural shifts with high fidelity. Engineered for mission-critical environments, the system incorporates low-noise signal acquisition and edge processing to isolate subtle precursors of landslides, unauthorized blasting and mining, and structural degradation.From protecting heritage structures and monitoring slope stability in remote terrains to ensuring the integrity of buildings near metro corridors, our distributed sensor networks enable reliable, real-time monitoring. With robust wireless connectivity and low-power design, the systems are suited for continuous operation in challenging and inaccessible locations.',
    imageUrl: '/images/domains/vibration-geophone.png',
  },
  {
    id: 'metering-iot',
    label: 'Metering and IoT Devices',
    slug: 'metering-iot-devices',
    description: 'Our metering and IoT solutions deliver high-precision measurement and seamless connectivity across electricity, water, and gas systems. Built on robust embedded architectures, the devices integrate precision analog front ends, calibration-aware measurement, and secure edge processing to ensure data integrity and long-term stability in demanding field conditions. From smart energy meters to water and gas flow monitoring, the systems leverage low-power wireless protocols and scalable cloud integration to provide reliable, real-time insights. With support for secure communication and tamper-aware operation, they bridge physical sensing and digital intelligence—enabling utilities and enterprises to optimize resource management, reduce operational losses, and build resilient, connected infrastructure.',
    imageUrl: '/images/domains/metering-iot.png',
  },
  {
    id: 'product-development-and-services',
    label: 'Product Development and Services',
    slug: 'product-development-and-services',
    description: 'Our product services cover the complete lifecycle of electronic systems—from concept to production-ready solutions. By integrating hardware, firmware, and mechanical design, we deliver systems optimized for manufacturability, regulatory compliance, and long-term reliability in mission-critical environments.\nWe also specialize in the reverse engineering of legacy designs, along with field failure analysis and root-cause investigation to resolve field issues.\nWe also work as a technical partner to strengthen in-house teams through design reviews, guidance, and hands-on mentoring. This includes early risk identification, scalable hardware and firmware design. With experience in high-speed digital design, medical video systems, metering solutions, and compliance frameworks such as IEC 60601, we bring expertise to complex product development challenges.',
    imageUrl: '/images/domains/product-development-and-services.png',
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
