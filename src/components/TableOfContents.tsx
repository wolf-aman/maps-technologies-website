/**
 * TableOfContents Sidebar Component
 * 
 * A reusable component for creating index-style navigation sidebars
 * with expandable categories and sub-items.
 * 
 * Features:
 * - Hierarchical navigation structure
 * - Expandable/collapsible categories
 * - Smooth animations
 * - Active state highlighting
 * - Mobile-responsive
 */

'use client';

import { useState, useEffect } from 'react';
import { TocItem } from '@/types/toc.types';

interface TableOfContentsProps {
  /** Array of TOC items */
  items: TocItem[];
  /** URL slug to determine currently selected item */
  currentSlug?: string;
  /** Callback when an item is selected */
  onItemSelect?: (item: TocItem) => void;
  /** CSS class for custom styling */
  className?: string;
}

interface ExpandedState {
  [key: string]: boolean;
}

export default function TableOfContents({
  items,
  currentSlug,
  onItemSelect,
  className = '',
}: TableOfContentsProps) {
  const [expandedItems, setExpandedItems] = useState<ExpandedState>({});

  // Expand category if current slug matches one of its children
  useEffect(() => {
    if (currentSlug) {
      const newExpanded: ExpandedState = {};
      items.forEach((item) => {
        if (item.children?.some((child) => child.slug === currentSlug)) {
          newExpanded[item.id] = true;
        }
      });
      setExpandedItems(newExpanded);
    }
  }, [currentSlug, items]);

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const renderTocItem = (item: TocItem, level: number = 0): JSX.Element => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.id];
    const isActive = item.slug === currentSlug;

    return (
      <div key={item.id} className={`${className}`}>
        {/* Item container */}
        <div className="flex items-start gap-0">
          {/* Expand/collapse button (only if has children) */}
          {hasChildren ? (
            <button
              onClick={() => toggleExpand(item.id)}
              className="flex-shrink-0 p-1 mr-1 rounded hover:bg-gray-100 transition-colors"
              aria-expanded={isExpanded}
              aria-label={`Toggle ${item.label}`}
            >
              <svg
                className={`w-4 h-4 text-gray-600 transition-transform ${
                  isExpanded ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ) : (
            <span className="flex-shrink-0 p-1 mr-1" />
          )}

          {/* Item label/link */}
          <div className="flex-1 min-w-0">
            {hasChildren ? (
              // If has children, it's clickable as a button to expand/collapse ONLY
              <button
                onClick={() => {
                  toggleExpand(item.id);
                }}
                className={`w-full text-left py-2 px-3 rounded-md font-medium text-sm transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ) : (
              // If no children, it's a clickable button that loads content
              <button
                onClick={() => onItemSelect?.(item)}
                className={`w-full text-left py-2 px-3 rounded-md font-medium text-sm transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            )}
          </div>
        </div>

        {/* Nested items */}
        {hasChildren && isExpanded && (
          <div className="ml-5 border-l border-gray-200 pl-0">
            {item.children?.map((child) => renderTocItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      className="space-y-1"
      aria-label="Table of contents"
    >
      {items.map((item) => renderTocItem(item))}
    </nav>
  );
}
