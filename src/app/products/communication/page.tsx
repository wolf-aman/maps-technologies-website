"use client";

import { useState } from 'react';
import PageNavigation from '@/components/PageNavigation';
import TechnicalPopup from '@/components/TechnicalPopup';

export default function CommunicationPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'WiFi Module ESP32',
      model: 'COM-ESP32',
      specs: '2.4GHz WiFi + Bluetooth, Dual Core',
      features: ['WiFi 802.11 b/g/n', 'Bluetooth 4.2', 'Dual-core processor', 'Integrated antenna'],
      description: 'Powerful WiFi and Bluetooth module with integrated antenna and rich peripherals.',
    },
    {
      id: 2,
      name: 'LoRa Transceiver',
      model: 'COM-LORA-915',
      specs: '915MHz, Long Range, Low Power',
      features: ['Long-range communication', 'Low power consumption', 'High sensitivity', 'Suitable for IoT'],
      description: 'Long-range wireless transceiver perfect for IoT and remote monitoring.',
    },
    {
      id: 3,
      name: 'RS485 Interface Module',
      model: 'COM-RS485',
      specs: 'Half/Full Duplex, Industrial Grade',
      features: ['Industrial grade', 'ESD protection', 'Wide voltage range', 'Reliable communication'],
      description: 'Robust serial communication module for industrial automation networks.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Communication Modules</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Wireless and wired communication solutions for IoT, industrial automation, and remote monitoring systems.
          </p>
        </div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">Model: {product.model}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Specifications:</h3>
                <p className="text-gray-600">{product.specs}</p>
              </div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Sensing & Instrumentation Solution?</h3>
          <p className="mb-6">Share your technical requirements for a focused engineering review.</p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Submit Instrumentation Brief for Review
          </button>
        </div>
      </div>

      <TechnicalPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        capabilityKey="sensing"
      />
    </div>
  );
}
