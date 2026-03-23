"use client";

import { useState } from 'react';
import PageNavigation from '@/components/PageNavigation';
import TechnicalPopup from '@/components/TechnicalPopup';

export default function DesignServicePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const features = [
    {
      title: 'Schematic Design',
      description: 'Complete circuit design with component selection and optimization',
      details: ['Power distribution planning', 'Signal integrity analysis', 'Component footprint creation'],
    },
    {
      title: 'Prototype Development',
      description: 'Rapid prototyping from concept to working hardware',
      details: ['Breadboard prototyping', 'PCB assembly', 'Functional testing'],
    },
    {
      title: 'Design Validation',
      description: 'Thorough testing and validation of your designs',
      details: ['Performance testing', 'Environmental testing', 'Compliance verification'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Design Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Transform your ideas into reality with our expert electronic design services. We handle everything from concept to production-ready designs.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Have Questions About Our Design Services?</h3>
          <p className="mb-6">Contact us to learn more about how we can help with your project.</p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Submit Systems Brief for Review
          </button>
        </div>
      </div>

      <TechnicalPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        capabilityKey="embedded"
      />
    </div>
  );
}
