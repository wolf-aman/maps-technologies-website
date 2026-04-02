'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import TechnicalPopup from '@/components/TechnicalPopup';
import { CapabilityType } from '@/lib/popupConfig';

interface SectionLink {
  label: string;
  href: string;
}

interface CompanyInfoProps {
  companyName?: string;
  companyInfo?: {
    address?: string;
    phone?: string;
    email?: string;
    LastUpdated?: string | Date;
  };
  capabilitiesLinks?: SectionLink[];
  domainLinks?: SectionLink[];
}

export default function CompanyInfoSection({
  companyName = 'MAPS Technologies',
  companyInfo = {
    phone: '+91 9145890775',
    email: 'info@mapstech.co.in',
    LastUpdated: 'March, 2026',
  },
  capabilitiesLinks = [
    { label: 'Embedded Systems', href: '/services/design' },
    { label: 'Hardware & PCB Design', href: '/services/pcb-layout' },
    { label: 'Firmware Development', href: '/services/training' },
    { label: 'Sensing & Instrumentation', href: '/products/communication' },
    { label: 'Technical Consulting', href: '/services' },
  ],
  domainLinks = [
    { label: 'Medical Electronics', href: '/domains/medical-electronics' },
    { label: 'Vibration / Geophone Systems', href: '/domains/vibration-geophone-systems' },
    { label: 'Metering and IoT Devices', href: '/domains/metering-iot-devices' },
    { label: 'Product Development and Services', href: '/domains/product-development-and-services' },
  ],
}: CompanyInfoProps) {

  const [activeCapability, setActiveCapability] = useState<CapabilityType | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        // Scroll to contact section smoothly
        if (sectionRef.current) {
          setTimeout(() => {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 0);
        }
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 2000);
      } else if (window.location.hash === '#explore-services') {
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 2000);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const capabilityKeyByHref: Record<string, CapabilityType> = {
    '/services/design': 'embedded',
    '/services/pcb-layout': 'pcb',
    '/services/training': 'firmware',
    '/products/communication': 'sensing',
    '/services': 'consulting',
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`bg-gray-100 pt-6 pb-0 md:pt-8 md:pb-0 rounded-lg transition-all ${
        isHighlighted ? 'highlight-target' : ''
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">

            {/* Company Info */}
            <div className="md:border-r md:border-gray-200 md:pr-6">

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {companyName}
              </h3>

              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">

                {companyInfo.address && (
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span className="whitespace-pre-line">{companyInfo.address}</span>
                  </p>
                )}

                {companyInfo.phone && (
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>{companyInfo.phone}</span>
                  </p>
                )}

                {companyInfo.email && (
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                    </svg>
                    <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:text-blue-800">
                      {companyInfo.email}
                    </a>
                  </p>
                )}

                {companyInfo.LastUpdated && (
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>
                      Last Updated: {typeof companyInfo.LastUpdated === 'string'
                        ? companyInfo.LastUpdated
                        : new Date(companyInfo.LastUpdated || '').toLocaleDateString()}
                    </span>
                  </p>
                )}

              </div>
            </div>

            {/* Explore Services */}
            <div className="md:border-r md:border-gray-200 md:px-6">

              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Explore Services
                </h3>
                <p className="text-xs sm:text-sm text-blue-600 italic tracking-wide">
                  Select a Service
                </p>
                
              </div>

              <ul className="space-y-2">
                {capabilitiesLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveCapability(capabilityKeyByHref[link.href] || null)}
                      className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm text-left"
                    >
                      {">"} {link.label}
                    </button>
                  </li>
                ))}
              </ul>

            </div>

            {/* Domains */}
            <div className="md:border-r md:border-gray-200 md:px-6">

              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Domain
                </h3>
                
              </div>

              <ul className="space-y-2">
                {domainLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm"
                    >
                      {">"} {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </div>

      {activeCapability && (
        <TechnicalPopup
          isOpen={Boolean(activeCapability)}
          onClose={() => setActiveCapability(null)}
          capabilityKey={activeCapability}
        />
      )}
    </section>
  );
}