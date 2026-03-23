/**
 * Footer Component
 *
 * Site footer with company info, capabilities, and domains.
 * Responsive layout that stacks on mobile.
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import TechnicalPopup from '@/components/TechnicalPopup';
import { CapabilityType } from '@/lib/popupConfig';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  companyName?: string;
  companyInfo?: {
    address?: string;
    phone?: string;
    email?: string;
    LastUpdated?: string | Date;
  };
  capabilitiesLinks?: FooterLink[];
  domainLinks?: FooterLink[];
}

export default function Footer({
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
    { label: 'Medical Electronics', href: '/products/other' },
    { label: 'Industrial Systems', href: '/products/communication' },
    { label: 'Custom Product Development', href: '/services/design' },
    { label: 'Vibration / Geophone Systems', href: '/products/analog' },
  ],
}: FooterProps) {
  const [activeCapability, setActiveCapability] = useState<CapabilityType | null>(null);

  const capabilityKeyByHref: Record<string, CapabilityType> = {
    '/services/design': 'embedded',
    '/services/pcb-layout': 'pcb',
    '/services/training': 'firmware',
    '/products/communication': 'sensing',
    '/services': 'consulting',
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8">
            {/* Company Info */}
            <div className="pb-6 md:pb-0 md:pr-8 md:border-r md:border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{companyName}</h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              {companyInfo.address && (
                <p className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="whitespace-pre-line">{companyInfo.address}</span>
                </p>
              )}
              {companyInfo.phone && (
                <p className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>
                    <span className="font-medium">Phone:</span> {companyInfo.phone}
                  </span>
                </p>
              )}
              {companyInfo.email && (
                <p className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    <span className="font-medium">Email:</span>{' '}
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {companyInfo.email}
                    </a>
                  </span>
                </p>
              )}
              {companyInfo.LastUpdated && (
                <p className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    <span className="font-medium">Last Updated:</span>{' '}
                    {companyInfo.LastUpdated instanceof Date
                      ? companyInfo.LastUpdated.toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })
                      : companyInfo.LastUpdated}
                  </span>
                </p>
              )}
              </div>
            </div>

            {/* Capabilities */}
            <div className="py-6 md:py-0 md:px-8 md:border-r md:border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Capabilities</h3>
              <ul className="space-y-3">
                {capabilitiesLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => setActiveCapability(capabilityKeyByHref[link.href] ?? 'consulting')}
                      className="text-base text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      &#187; {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Domains */}
            <div className="pt-6 md:pt-0 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Domains</h3>
              <ul className="space-y-3">
                {domainLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      &#187; {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright and Legal Links */}
          <div className="border-t border-gray-200 bg-gray-50 px-6 md:px-8 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <p className="text-sm md:text-base text-gray-600 text-left">
                © {new Date().getFullYear()} {companyName}. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:text-base text-gray-600 md:justify-end">
                <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="hover:text-blue-600 transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/about-us" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
                <Link href="/career" className="hover:text-blue-600 transition-colors">
                  Careers
                </Link>
              </div>
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
    </footer>
  );
}
