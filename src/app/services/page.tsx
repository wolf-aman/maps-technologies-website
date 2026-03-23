"use client";

import { useState } from 'react';
import Link from 'next/link';
import PageNavigation from '@/components/PageNavigation';
import TechnicalPopup from '@/components/TechnicalPopup';

export default function ServicesPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const services = [
    {
      title: 'Design',
      slug: 'design',
      description: 'Custom electronic design services from concept to prototype, ensuring optimal performance and efficiency.',
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'PCB Layout',
      slug: 'pcb-layout',
      description: 'Professional PCB layout and routing with multi-layer support, focused on signal integrity and manufacturability.',
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: 'EMI/EMC',
      slug: 'emi-emc',
      description: 'Comprehensive EMI/EMC testing and mitigation strategies to meet regulatory standards.',
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Specialized Training',
      slug: 'training',
      description: 'Expert-led training programs on electronic design tools and methodologies for engineers.',
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          <circle cx="16" cy="8" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h1>
          <p className="text-gray-600 max-w-3xl">
            Professional electronic engineering services to bring your ideas to life. From design to testing and training.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed text-center flex-grow">
                {service.description}
              </p>
              
              {/* Link */}
              <span className="text-blue-600 font-medium text-sm inline-flex items-center justify-center group-hover:text-blue-700">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-blue-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Need Consulting & Compliance Support?</h2>
          <p className="mb-6">Share your challenge and our engineering team will review your brief within 24 hours.</p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Submit Consultation Brief for Review
          </button>
        </div>
      </div>

      <TechnicalPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        capabilityKey="consulting"
      />
    </div>
  );
}
