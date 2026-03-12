'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PageNavigation from '@/components/PageNavigation';

export default function ProductsPage() {
  const pathname = usePathname();
  
  const categories = [
    { name: 'Power Supply', slug: 'power-supply' },
    { name: 'Micro Controller', slug: 'micro-controller' },
    { name: 'Analog', slug: 'analog' },
    { name: 'Communication', slug: 'communication' },
    { name: 'Other', slug: 'other' },
  ];

  const productCategories = [
    {
      title: 'Power Supply',
      slug: 'power-supply',
      description: 'High-efficiency power supply solutions for various applications',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Micro Controller',
      slug: 'micro-controller',
      description: 'Advanced microcontroller units for embedded systems',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'Analog',
      slug: 'analog',
      description: 'Precision analog components and integrated circuits',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Communication',
      slug: 'communication',
      description: 'Wireless and wired communication modules',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
    },
    {
      title: 'Battery',
      slug: 'other',
      description: 'Power management and battery solutions',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Target',
      slug: 'other',
      description: 'Additional electronic components and accessories',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Product Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Product Categories</h2>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/products/${category.slug}`}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      pathname === `/products/${category.slug}`
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-200'
                    }`}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Our Products</h1>
              <p className="text-gray-600">
                Explore our comprehensive range of electronic components and solutions designed for reliability and performance.
              </p>
            </div>

            {/* Product Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    {product.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Link */}
                  <span className="text-blue-600 font-medium text-sm inline-flex items-center group-hover:text-blue-700">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
