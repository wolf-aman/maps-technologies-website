/**
 * Navbar Component
 * 
 * Modular, configuration-based navigation bar.
 * 
 * Architecture:
 * - Uses centralized navigation config (src/config/navigation.config.ts)
 * - Supports dropdown menus with Products and Services
 * - Handles internal routes, external links, and PDFs
 * - Mobile-responsive with accordion dropdowns
 * - Error boundary protection for fault isolation
 * 
 * To modify navigation:
 * 1. Edit src/config/navigation.config.ts
 * 2. No need to touch this component
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { navigationConfig } from '@/config/navigation.config';
import NavLink from './NavLink';
import Dropdown from './Dropdown';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get navigation items from config
  const navItems = navigationConfig.items;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-24 h-8">
                <Image
                  src="/images/logo.jpg"
                  alt="MAPS Logo"
                  width={96}
                  height={32}
                  style={{ width: 'auto', height: 'auto' }}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-black tracking-wide text-[#205a99] uppercase">
                Technologies
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              // Render dropdown if item has children
              if (item.dropdown && item.dropdown.length > 0) {
                return (
                  <Dropdown
                    key={`${item.href}-${index}`}
                    label={item.label}
                    href={item.href}
                    type={item.type}
                    items={item.dropdown}
                  />
                );
              }

              // Render regular link
              return (
                <NavLink
                  key={`${item.href}-${index}`}
                  item={item}
                  className={`text-sm font-medium ${
                    item.href === '/' 
                      ? 'text-gray-900 hover:text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  } transition-colors`}
                />
              );
            })}
          </div>

          {/* Mobile menu button and Search Icon */}
          <div className="flex items-center space-x-2">
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                // Render mobile dropdown if item has children
                if (item.dropdown && item.dropdown.length > 0) {
                  return (
                    <Dropdown
                      key={`mobile-${item.href}-${index}`}
                      label={item.label}
                      href={item.href}
                      type={item.type}
                      items={item.dropdown}
                      isMobile={true}
                      onItemClick={() => setMobileMenuOpen(false)}
                    />
                  );
                }

                // Render regular mobile link
                return (
                  <NavLink
                    key={`mobile-${item.href}-${index}`}
                    item={item}
                    className={`text-base font-medium ${
                      item.href === '/' 
                        ? 'text-gray-900 hover:text-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    } transition-colors px-2 py-2 rounded-lg hover:bg-gray-50`}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}