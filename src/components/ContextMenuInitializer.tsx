/**
 * Context Menu Initializer
 * 
 * Initializes context menu support on mount
 * Must be used as a client component
 */

'use client';

import { useEffect } from 'react';
import { enableContextMenuForAllLinks } from '@/lib/contextMenu';

export default function ContextMenuInitializer() {
  useEffect(() => {
    // Enable context menu for all links on mount
    enableContextMenuForAllLinks();
  }, []);

  // This component doesn't render anything
  return null;
}
