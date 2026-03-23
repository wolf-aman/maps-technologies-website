"use client";

import { useState } from 'react';
import PageNavigation from '@/components/PageNavigation';
import TechnicalPopup from '@/components/TechnicalPopup';

export default function PCBLayoutServicePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const capabilities = [
    {
      title: 'Multi-Layer PCB Design',
      description: 'Up to 12-layer PCB layouts with complex routing',
      specs: ['High-speed digital design', 'Impedance controlled traces', 'Blind and buried vias'],
    },
    {
      title: 'RF and Analog Layout',
      description: 'Specialized layout for sensitive RF and analog circuits',
      specs: ['Controlled impedance', 'EMI/EMC considerations', 'Shielding strategies'],
    },
    {
      title: 'Design for Manufacturing',
      description: 'Optimized layouts for cost-effective production',
      specs: ['DFM rule checking', 'Automated assembly ready', 'Test point placement'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PCB Layout Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Professional PCB layout services with expertise in high-speed digital, RF, and mixed-signal designs.
          </p>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Capabilities</h2>
        <div className="space-y-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 mb-4">{capability.description}</p>
              <ul className="space-y-2">
                {capability.specs.map((spec, idx) => (
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
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {['Schematic Review', 'Layout Planning', 'Routing & Design', 'DRC & Output'].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {idx + 1}
                </div>
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Interested in PCB Layout Services?</h3>
          <p className="mb-6">Learn more about our PCB layout capabilities and how we can assist you.</p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Submit Design Brief for Review
          </button>
        </div>
      </div>

      <TechnicalPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        capabilityKey="pcb"
      />
    </div>
  );
}
