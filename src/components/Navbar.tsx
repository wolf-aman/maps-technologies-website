/**
 * Navbar Component
 * 
 * Modular, configuration-based navigation bar.
 * 
 * Architecture:
 * - Uses centralized navigation config (src/config/navigation.config.ts)
 * - Supports dropdown menus with Products
 * - Handles internal routes, external links, and PDFs
 * - Mobile-responsive with accordion dropdowns
 * - Includes search functionality for products
 * - Back button for easy navigation
 * 
 * To modify navigation:
 * 1. Edit src/config/navigation.config.ts
 * 2. No need to touch this component
 */

'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { navigationConfig } from '@/config/navigation.config';
import { searchContent, type SearchItem } from '@/config/search.config';
import NavLink from './NavLink';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchDropdownRef = useRef<HTMLDivElement>(null);

  const navItems = navigationConfig.items;

  // Handle search input - updates state and filters results in real-time
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === '') {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    const results = searchContent(value);
    setSearchResults(results.slice(0, 8)); // Max 8 results
    setShowSearchDropdown(true);
  };

  // Navigate to search result - clear state then navigate
  const handleResultClick = (href: string) => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchDropdown(false);
    
    // Handle hash links to home (/#explore-services)
    if (href.startsWith('/#')) {
      const hashId = href.substring(2);
      if (pathname === '/') {
        // Already on home, scroll to section
        const element = document.getElementById(hashId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home first
        router.push('/');
        
        // Try multiple times to find and scroll to element
        let attempts = 0;
        const scrollToElement = () => {
          attempts++;
          const element = document.getElementById(hashId);
          
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (attempts < 8) {
            setTimeout(scrollToElement, 150);
          }
        };
        
        setTimeout(scrollToElement, 300);
      }
    } else if (href === '/') {
      // Navigate to home - clear hash and scroll to top
      if (pathname === '/') {
        // Already on home
        if (window.location.hash) {
          window.history.replaceState(null, '', '/');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Navigate from another page
        router.push(href);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Regular navigation
      router.push(href);
    }
  };

  // Handle back button - let browser handle naturally
  const handleBack = () => {
    if (typeof window === 'undefined') return;
    window.history.back();
  };

  // Handle home click - use button not Link
  const handleHomeClick = () => {
    if (pathname === '/') {
      // Already on home, clear hash if present and scroll to top
      if (window.location.hash) {
        window.history.replaceState(null, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home then scroll
      router.push('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false);
      }
    };

    if (!showSearchDropdown) {
      return;
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSearchDropdown]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Back Button + Logo and Brand */}
          <div className="flex items-center space-x-4">
            {/* Back Button */}
            <button 
              onClick={handleBack}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
              aria-label="Go back"
              title="Go back"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Logo and Brand */}
            <button 
              onClick={handleHomeClick}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              aria-label="MAPS Technologies Home"
            >
              <div className="relative w-24 h-8">
                <Image
                  src="/images/logo.jpg"
                  alt="MAPS Logo"
                  fill
                  sizes="96px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-black tracking-wide text-[#205a99] uppercase hidden sm:inline">
                Technologies
              </span>
            </button>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
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

          {/* Right: Search Bar (Desktop) + Mobile Menu */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Desktop Search */}
            <div className="hidden md:block relative w-48">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInput}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Search Dropdown */}
              {showSearchDropdown && searchResults.length > 0 && (
                <div ref={searchDropdownRef} className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                    {searchResults.map((result) => {
                      // Determine badge styling based on result type
                      const getTypeBadgeStyles = () => {
                        switch(result.type) {
                          case 'product':
                            return 'bg-blue-100 text-blue-700';
                          case 'domain':
                            return 'bg-purple-100 text-purple-700';
                          case 'application':
                            return 'bg-green-100 text-green-700';
                          case 'service':
                            return 'bg-orange-100 text-orange-700';
                          case 'page':
                          default:
                            return 'bg-gray-100 text-gray-700';
                        }
                      };

                      const getTypeLabel = () => {
                        switch(result.type) {
                          case 'product':
                            return 'Product';
                          case 'domain':
                            return 'Domain';
                          case 'application':
                            return 'Use Case';
                          case 'service':
                            return 'Service';
                          case 'page':
                          default:
                            return 'Page';
                        }
                      };

                      return (
                        <button
                          key={result.id}
                          onClick={() => handleResultClick(result.href)}
                          className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors group flex items-center justify-between"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 group-hover:text-blue-600 truncate">
                              {result.label}
                            </p>
                            {result.category && (
                              <p className="text-xs text-gray-500 truncate">
                                {result.category}
                              </p>
                            )}
                          </div>
                          <span className={`text-xs px-2 py-1 rounded font-medium ml-2 flex-shrink-0 ${getTypeBadgeStyles()}`}>
                            {getTypeLabel()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {/* Mobile Search */}
            <div className="px-4 mb-4">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInput}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Search Results */}
              {showSearchDropdown && searchResults.length > 0 && (
                <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto divide-y divide-gray-100">
                  {searchResults.map((result) => {
                    // Determine badge styling based on result type
                    const getTypeBadgeStyles = () => {
                      switch(result.type) {
                        case 'product':
                          return 'bg-blue-100 text-blue-700';
                        case 'domain':
                          return 'bg-purple-100 text-purple-700';
                        case 'application':
                          return 'bg-green-100 text-green-700';
                        case 'service':
                          return 'bg-orange-100 text-orange-700';
                        case 'page':
                        default:
                          return 'bg-gray-100 text-gray-700';
                      }
                    };

                    const getTypeLabel = () => {
                      switch(result.type) {
                        case 'product':
                          return 'Product';
                        case 'domain':
                          return 'Domain';
                        case 'application':
                          return 'Use Case';
                        case 'service':
                          return 'Service';
                        case 'page':
                        default:
                          return 'Page';
                      }
                    };

                    return (
                      <button
                        key={result.id}
                        onClick={() => {
                          handleResultClick(result.href);
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900">{result.label}</p>
                          {result.category && (
                            <p className="text-xs text-gray-500">{result.category}</p>
                          )}
                        </div>
                        <span className={`text-xs px-2 py-1 rounded font-medium ml-2 flex-shrink-0 ${getTypeBadgeStyles()}`}>
                          {getTypeLabel()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={`mobile-${item.href}-${index}`}
                  item={item}
                  className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors px-2 py-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}