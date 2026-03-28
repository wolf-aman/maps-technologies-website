"use client";

import { useState } from 'react';
import Link from 'next/link';
import PageNavigation from '@/components/PageNavigation';
import TableOfContents from '@/components/TableOfContents';
import TechnicalPopup from '@/components/TechnicalPopup';
import { servicesTocStructure } from '@/config/services-toc.config';

export default function ServicesPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {servicesTocStructure.title}
          </h1>
          <p className="text-lg text-gray-600">
            {servicesTocStructure.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Table of Contents */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Service Categories</h2>
              <TableOfContents
                items={servicesTocStructure.items}
                onItemSelect={(_item) => {
                  // Item selected
                }}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {servicesTocStructure.items.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group flex flex-col"
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10h8M13 14h8M3 12h.01M7 12h.01M3 6h.01M7 6h.01M3 18h.01M7 18h.01" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {service.label}
                  </h3>
                  
                  {/* Description preview */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed text-center flex-grow">
                    {service.children && `${service.children.length} specializations available`}
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

            {/* Consulting Section */}
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Need Consulting & Compliance Support?</h2>
              <p className="mb-6">Share your challenge and our engineering team will review your brief within 24 hours.</p>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Submit Consultation Brief for Review
              </button>
            </div>
          </main>
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
