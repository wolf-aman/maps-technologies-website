'use client';

import { useState } from 'react';
import TableOfContents from '@/components/TableOfContents';
import PDFViewer from '@/components/PDFViewer';
import { productsTocStructure } from '@/config/products-toc.config';
import type { TocItem } from '@/types/toc.types';

export default function ProductsPage() {
  const [selectedItem, setSelectedItem] = useState<TocItem | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-products.png')"}}
      />

      {/* Overlay to reduce background transparency */}
      <div className="absolute inset-0 bg-white/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {productsTocStructure.title}
          </h1>
          {Array.isArray(productsTocStructure.description) ? (
            <div className="space-y-3">
              {productsTocStructure.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-600">
              {productsTocStructure.description}
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Sidebar - Table of Contents */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-transparent rounded-lg border border-gray-400/50 p-6 sticky top-24 h-full overflow-y-auto">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
              <TableOfContents
                items={productsTocStructure.items}
                currentSlug={selectedItem?.slug}
                onItemSelect={setSelectedItem}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {selectedItem?.slug && !selectedItem?.children ? (
              // Display PDF viewer for selected leaf item (product)
              <PDFViewer slug={selectedItem.slug} label={selectedItem.label} />
            ) : (
              // Display showcase image by default
              <div
                className="relative w-full max-w-[1400px] aspect-[16/9] bg-center bg-no-repeat rounded-xl"
                style={{
                  backgroundImage: "url('/images/products/products-showcase.png')",
                  backgroundSize: 'contain',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue via-transparent to-transparent rounded-xl"></div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
