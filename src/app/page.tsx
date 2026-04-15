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
    // Handle hash-based scroll on page load or hash change
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#explore-services') {
        // Highlight the section
        setHighlightExploreServices(true);
        setTimeout(() => setHighlightExploreServices(false), 2000);
        
        // Try multiple times to scroll to element (in case DOM isn't ready)
        let attempts = 0;
        const tryScroll = () => {
          attempts++;
          const element = document.getElementById('explore-services');
          
          if (element) {
            // Scroll to the element
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          } else if (attempts < 5) {
            // Element not ready yet, retry
            setTimeout(tryScroll, 100);
          }
        };
        
        tryScroll();
      }
    };

    // Check on initial mount
    handleHashChange();
    
    // Listen for hash changes (navigation via Services link)
    window.addEventListener('hashchange', handleHashChange);
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