/**
 * NavLink Component
 * 
 * Smart link component that handles different link types:
 * - internal: Next.js client-side navigation
 * - external: Opens in new tab
 * - pdf: Opens PDF in new tab
 * - hash: Anchor link on same page
 * 
 * Includes error boundary protection to prevent link failures from breaking the app
 */

'use client';

import Link from 'next/link';
import { NavigationItem } from '@/types/navigation.types';
import { ReactNode } from 'react';

interface NavLinkProps {
  item: NavigationItem;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function NavLink({ item, className = '', children, onClick }: NavLinkProps) {
  const { href, type, label, description } = item;

  // Content to display (use children if provided, otherwise label)
  const content = children || label;

  // Common props for all link types
  const commonProps = {
    className,
    'aria-label': description || label,
    onClick,
  };

  try {
    // Internal Next.js route
    if (type === 'internal') {
      return (
        <Link href={href} {...commonProps}>
          {content}
        </Link>
      );
    }

    // Hash/anchor link (same page)
    if (type === 'hash') {
      return (
        <a href={href} {...commonProps}>
          {content}
        </a>
      );
    }

    // External link (opens in new tab)
    if (type === 'external') {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...commonProps}
        >
          {content}
          {/* Optional: Add external link icon */}
          <span className="sr-only">(opens in new tab)</span>
        </a>
      );
    }

    // PDF or document link (opens in new tab)
    if (type === 'pdf') {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...commonProps}
        >
          {content}
          {/* Optional: Add PDF icon */}
          <span className="sr-only">(opens PDF in new tab)</span>
        </a>
      );
    }

    // Fallback: treat as regular anchor
    return (
      <a href={href} {...commonProps}>
        {content}
      </a>
    );
  } catch (error) {
    // Error boundary: log error but don't break the UI
    console.error(`NavLink error for ${href}:`, error);
    
    // Fallback to simple anchor tag
    return (
      <a href={href} className={className} onClick={onClick}>
        {content}
      </a>
    );
  }
}
