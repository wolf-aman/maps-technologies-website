/**
 * NavLink Component
 * 
 * Smart link component that handles different link types:
 * - internal: Next.js client-side navigation
 * - external: Opens in new tab
 * - pdf: Opens PDF in new tab
 * - hash: Anchor link or hash-based navigation
 * 
 * Features:
 * - Right-click context menu support for all links
 * - Middle-click and Ctrl+Click to open internal links in new tab
 */

'use client';

import Link from 'next/link';
import { NavigationItem } from '@/types/navigation.types';
import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { enableLinkContextMenu } from '@/lib/contextMenu';
import { useRef, useEffect } from 'react';

interface NavLinkProps {
  item: NavigationItem;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function NavLink({ item, className = '', children, onClick }: NavLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { href, type, label, description } = item;
  const linkRef = useRef<HTMLAnchorElement>(null);

  const content = children || label;

  // Enable context menu on mount
  useEffect(() => {
    if (linkRef.current) {
      enableLinkContextMenu(linkRef.current);
    }
  }, []);

  // Check if this is a special click (middle-click, ctrl+click, etc)
  const isSpecialClick = (e: React.MouseEvent) => {
    return e.button === 1 || e.button === 2 || e.ctrlKey || e.metaKey;
  };

  // Handle home link navigation - clear hash and scroll to top
  const handleHomeLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow right-click, middle-click, and ctrl+click for native context menu
    if (isSpecialClick(e)) {
      return; // Let browser handle it
    }

    e.preventDefault();
    
    // If already on home page
    if (pathname === '/') {
      // If there's a hash, clear it and scroll to top
      if (window.location.hash) {
        window.history.replaceState(null, '', '/');
      }
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home
      router.push('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    
    onClick?.();
  };

  // Handle hash links that point to home (e.g., /#explore-services)
  const handleHashToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow right-click, middle-click, and ctrl+click for native context menu
    if (isSpecialClick(e)) {
      return; // Let browser handle it
    }

    e.preventDefault();
    
    const hashMatch = href.match(/^(\/#)(.+)$/);
    if (!hashMatch) return;
    
    const targetId = hashMatch[2];
    
    // If not on home, navigate to home first
    if (pathname !== '/') {
      router.push('/');
      
      // Use multiple attempts to find and scroll to element
      let attempts = 0;
      const maxAttempts = 10;
      
      const scrollToElement = () => {
        attempts++;
        const element = document.getElementById(targetId);
        
        if (element) {
          // Element found, scroll to it
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < maxAttempts) {
          // Element not found yet, try again
          setTimeout(scrollToElement, 150);
        }
      };
      
      // Start trying to scroll after initial delay
      setTimeout(scrollToElement, 250);
    } else {
      // Already on home, scroll immediately
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    onClick?.();
  };

  try {
    // Home link - special handling to clear hash and scroll to top
    if (type === 'internal' && href === '/') {
      return (
        <a
          ref={linkRef}
          href={href}
          className={className}
          onClick={handleHomeLink}
          aria-label={description || label}
        >
          {content}
        </a>
      );
    }

    // Hash link pointing to home (/#explore-services)
    if (type === 'hash' && href.startsWith('/#')) {
      return (
        <a
          ref={linkRef}
          href={href}
          className={className}
          onClick={handleHashToHome}
          aria-label={description || label}
        >
          {content}
        </a>
      );
    }

    // Internal Next.js route (non-home)
    if (type === 'internal') {
      const handleInternalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Allow right-click, middle-click, and ctrl+click for native context menu
        if (isSpecialClick(e)) {
          return; // Let browser handle it and open in new tab
        }
        onClick?.();
      };

      return (
        <Link
          ref={linkRef}
          href={href}
          className={className}
          onClick={handleInternalClick}
          aria-label={description || label}
        >
          {content}
        </Link>
      );
    }

    // Hash/anchor link (same page only)
    if (type === 'hash') {
      return (
        <a
          ref={linkRef}
          href={href}
          className={className}
          onClick={onClick}
          aria-label={description || label}
        >
          {content}
        </a>
      );
    }

    // External link
    if (type === 'external') {
      return (
        <a
          ref={linkRef}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={onClick}
          aria-label={description || label}
        >
          {content}
          <span className="sr-only">(opens in new tab)</span>
        </a>
      );
    }

    // PDF link
    if (type === 'pdf') {
      return (
        <a
          ref={linkRef}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={onClick}
          aria-label={description || label}
        >
          {content}
          <span className="sr-only">(opens PDF in new tab)</span>
        </a>
      );
    }

    // Fallback
    return (
      <a
        ref={linkRef}
        href={href}
        className={className}
        onClick={onClick}
        aria-label={description || label}
      >
        {content}
      </a>
    );
  } catch (error) {
    console.error(`NavLink error for ${href}:`, error);
    return (
      <a href={href} className={className} onClick={onClick} aria-label={description || label}>
        {content}
      </a>
    );
  }
}
