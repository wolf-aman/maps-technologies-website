/**
 * Home Page - MAPS Technologies
 */

import Hero from '@/components/Hero';
import CompanyInfoSection from '@/components/CompanyInfoSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* Hero */}
      <Hero />

      {/* Floating company card */}
      <CompanyInfoSection
        companyName="MAPS Technologies"
        companyInfo={{
          address:
            '57, Officers Campus Ext.\nSirsi Road, Jaipur, India, (302012)',
          phone: '+91 9145890775',
          email: 'info@mapstech.co.in',
          LastUpdated: 'March, 2026',
        }}
        capabilitiesLinks={[
          { label: 'Embedded Systems', href: '/services/design' },
          { label: 'Hardware & PCB Design', href: '/services/pcb-layout' },
          { label: 'Firmware Development', href: '/services/training' },
          { label: 'Sensing & Instrumentation', href: '/products/communication' },
          { label: 'Technical Consulting', href: '/services' },
        ]}
        domainLinks={[
          { label: 'Medical Electronics', href: '/products/other' },
          { label: 'Industrial Systems', href: '/products/communication' },
          { label: 'Custom Product Development', href: '/services/design' },
          { label: 'Vibration / Geophone Systems', href: '/products/analog' },
          { label: 'Metering and IoT Devices', href: '/products/micro-controller' },
        ]}
      />

      {/* Footer */}
      <Footer />

    </main>
  );
}