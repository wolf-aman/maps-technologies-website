/**
 * Dropdown Component
 * 
 * Reusable dropdown menu component for navigation items.
 * Supports both desktop (hover/click) and mobile (click) interactions.
 * 
 * Features:
 * - Accessible keyboard navigation
 * - Click outside to close
 * - Smooth animations
 * - Error boundary protection
 * - Mobile-responsive
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { NavigationItem } from '@/types/navigation.types';
import NavLink from './NavLink';
import Link from 'next/link';

interface DropdownProps {
  /** Label for the dropdown trigger */
  label: string;
  /** Navigation items to display in dropdown */
  items: NavigationItem[];
  /** Parent item href (for main link) */
  href: string;
  /** Link type for parent */
  type: NavigationItem['type'];
  /** Whether it's in mobile view */
  isMobile?: boolean;
  /** Callback when dropdown item is clicked */
  onItemClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export default function Dropdown({
  label,
  items,
  href,
  type,
  isMobile = false,
  onItemClick,
  className = '',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
    return undefined;
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
    return undefined;
  }, [isOpen]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Handle mouse enter with immediate open
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick?.();
  };

  try {
    // Mobile dropdown (accordion style)
    if (isMobile) {
      return (
        <div className={`${className}`}>
          {/* Main category link */}
          <Link
            href={href}
            className="w-full flex items-center text-base font-medium text-gray-600 hover:text-blue-600 transition-colors px-2 py-2 rounded-lg hover:bg-gray-50"
            onClick={onItemClick}
          >
            <span>{label}</span>
          </Link>
          
          {/* Accordion toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors px-2 py-1"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <span className="text-xs">View {label} subcategories</span>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isOpen && (
            <div className="pl-4 mt-2 space-y-2">
              {items.map((item, index) => (
                <NavLink
                  key={`${item.href}-${index}`}
                  item={item}
                  className="block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors px-2 py-2 rounded-lg hover:bg-gray-50"
                  onClick={handleItemClick}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    // Desktop dropdown (hover/click menu)
    return (
      <div
        ref={dropdownRef}
        className={`relative ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main category link with dropdown indicator */}
        <Link
          href={href}
          className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors group"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span>{label}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>

        {/* Dropdown menu */}
        {isOpen && (
          <div 
            className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-fadeIn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {items.map((item, index) => (
              <NavLink
                key={`${item.href}-${index}`}
                item={item}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={handleItemClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    // Error boundary: log error and render fallback
    console.error(`Dropdown error for ${label}:`, error);
    
    // Fallback: render as simple link
    return (
      <NavLink
        item={{ label, href, type, description: label }}
        className={isMobile ? 'block text-base font-medium text-gray-600 hover:text-blue-600 transition-colors px-2 py-2 rounded-lg hover:bg-gray-50' : 'text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors'}
      />
    );
  }
}
