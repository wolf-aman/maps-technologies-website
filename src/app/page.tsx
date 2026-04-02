/**
 * Home Page - MAPS Technologies
 */

'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import CompanyInfoSection from '@/components/CompanyInfoSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [highlightExploreServices, setHighlightExploreServices] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#explore-services') {
        setHighlightExploreServices(true);
        setTimeout(() => setHighlightExploreServices(false), 2000);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main className="flex flex-col">

      {/* Hero */}
      <Hero />

      {/* Floating company card */}
      <div 
        id="explore-services" 
        className={`transition-all ${highlightExploreServices ? 'highlight-target' : ''}`}
      >
        <CompanyInfoSection
          companyName="MAPS Technologies"
          companyInfo={{
            address:
              '57, Officers Campus Ext.\nSirsi Road, Jaipur, India, 302012',
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
            { label: 'Medical Electronics', href: '/domains/medical-electronics' },
            { label: 'Vibration / Geophone Systems', href: '/domains/vibration-geophone-systems' },
            { label: 'Metering and IoT Devices', href: '/domains/metering-iot-devices' },
            { label: 'Product Development and Services', href: '/domains/product-development-and-services' },
          ]}
        />
      </div>

      {/* Footer */}
      <Footer />

    </main>
  );
}