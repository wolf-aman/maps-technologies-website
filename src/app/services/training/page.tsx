"use client";

import { useState } from 'react';
import PageNavigation from '@/components/PageNavigation';
import TechnicalPopup from '@/components/TechnicalPopup';

export default function TrainingServicePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const courses = [
    {
      title: 'Embedded Systems Fundamentals',
      duration: '3 Days',
      level: 'Beginner to Intermediate',
      topics: ['Microcontroller basics', 'GPIO and peripherals', 'Interrupt handling', 'Communication protocols'],
    },
    {
      title: 'PCB Design Masterclass',
      duration: '2 Days',
      level: 'Intermediate',
      topics: ['Schematic capture', 'Multi-layer routing', 'DFM guidelines', 'Signal integrity'],
    },
    {
      title: 'IoT Development Workshop',
      duration: '4 Days',
      level: 'Intermediate to Advanced',
      topics: ['WiFi and BLE protocols', 'Cloud integration', 'Security best practices', 'Power optimization'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Specialized Training Programs</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Expert-led training programs designed to enhance your team&apos;s skills in electronics, embedded systems, and IoT development.
          </p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h2>
        <div className="space-y-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 border border-gray-200"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>📅 {course.duration}</span>
                  <span>📊 {course.level}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Topics Covered:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Training Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What&apos;s Included</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hands-on practical exercises
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Course materials and resources
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certificate of completion
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Development kits (where applicable)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Training Formats</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  On-site corporate training
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Public workshops
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom curriculum available
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Group discounts available
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Explore Our Training Programs</h3>
          <p className="mb-6">Discover how our expert-led training programs can enhance your team&apos;s skills.</p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Submit Firmware Brief for Review
          </button>
        </div>
      </div>

      <TechnicalPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        capabilityKey="firmware"
      />
    </div>
  );
}
