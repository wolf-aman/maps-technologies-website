'use client';

import Link from 'next/link';
import PageNavigation from '@/components/PageNavigation';
import TableOfContents from '@/components/TableOfContents';
import { productsTocStructure } from '@/config/products-toc.config';

export default function ProductsPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {productsTocStructure.title}
          </h1>
          <p className="text-lg text-gray-600">
            {productsTocStructure.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Table of Contents */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
              <TableOfContents
                items={productsTocStructure.items}
                onItemSelect={(_item) => {
                  // Item selected
                }}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">

            {/* Product Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsTocStructure.items.map((product, index) => (
                <Link
                  key={`${product.slug}-${product.label}-${index}`}
                  href={`/products/${product.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
                >
                  {/* Icon placeholder */}
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10h8M13 14h8M3 12h.01M7 12h.01M3 6h.01M7 6h.01M3 18h.01M7 18h.01" />
                    </svg>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.children?.length ? `${product.children.length} product types available` : 'Explore our offerings'}
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
