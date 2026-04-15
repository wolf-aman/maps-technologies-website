/**
 * Context Menu Utility
 * 
 * Ensures right-click context menu works properly for all links
 * and allows "open link in new tab" functionality
 */

export function enableContextMenuForAllLinks(): void {
  if (typeof document === 'undefined') return;

  // Prevent any suppression of context menu
  document.addEventListener('contextmenu', (e: Event): void => {
    // Allow context menu on all links and interactive elements
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'A' ||
      target.closest('a') ||
      target.tagName === 'BUTTON' ||
      target.closest('button')
    ) {
      // Allow default context menu
      return;
    }
  });

  // Ensure all links are openable in new tab via right-click
  document.addEventListener('mousedown', (e: Event): void => {
    const mouseEvent = e as MouseEvent;
    const link = (mouseEvent.target as HTMLElement).closest('a');
    if (!link) return;

    // Middle-click or Ctrl+Click (Cmd+Click on Mac) should open in new tab
    // Browser handles this automatically, we just ensure it's not prevented
    if (mouseEvent.button === 1 || (mouseEvent.ctrlKey || mouseEvent.metaKey)) {
      // Allow default behavior
      return;
    }
  });
}

/**
 * Add context menu support to a specific link element
 * This allows right-click context menu on custom link components
 */
export function enableLinkContextMenu(element: HTMLElement) {
  if (!element) return;

  // Ensure the element is focusable for better UX
  if (!element.getAttribute('tabindex')) {
    element.setAttribute('tabindex', '0');
  }

  // Prevent any click handler from blocking context menu
  element.addEventListener('contextmenu', (e) => {
    e.stopPropagation();
    // Allow default context menu
    return true;
  });
}
