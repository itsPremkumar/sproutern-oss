'use client';

/**
 * Focus Trap Component for Accessibility
 *
 * Traps keyboard focus within a container element, typically used for:
 * - Modal dialogs
 * - Dropdown menus
 * - Side drawers
 *
 * WCAG 2.1 AA Requirements:
 * - 2.1.2 No Keyboard Trap (paradoxically, proper modals need focus trapping)
 * - 2.4.3 Focus Order
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
 */

import {
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
  type KeyboardEvent,
} from 'react';

// Focusable elements selector
const FOCUSABLE_ELEMENTS = [
  'a[href]:not([disabled]):not([tabindex="-1"])',
  'button:not([disabled]):not([tabindex="-1"])',
  'textarea:not([disabled]):not([tabindex="-1"])',
  'input:not([disabled]):not([tabindex="-1"])',
  'select:not([disabled]):not([tabindex="-1"])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]',
].join(', ');

export interface FocusTrapProps {
  /** Content to render inside the focus trap */
  children: ReactNode;
  /** Whether the focus trap is active */
  isActive?: boolean;
  /** Called when user presses Escape */
  onEscape?: () => void;
  /** Called when user clicks outside the focus trap */
  onClickOutside?: () => void;
  /** Whether to return focus to the previously focused element on unmount */
  restoreFocus?: boolean;
  /** Whether to auto-focus the first focusable element */
  autoFocus?: boolean;
  /** Custom element to focus initially */
  initialFocusRef?: React.RefObject<HTMLElement>;
  /** Custom element to restore focus to */
  finalFocusRef?: React.RefObject<HTMLElement>;
  /** Additional CSS classes */
  className?: string;
  /** ARIA label for the trap container */
  'aria-label'?: string;
  /** ARIA labelledby for the trap container */
  'aria-labelledby'?: string;
  /** Role of the container */
  role?: 'dialog' | 'alertdialog' | 'menu' | 'listbox';
}

export function FocusTrap({
  children,
  isActive = true,
  onEscape,
  onClickOutside,
  restoreFocus = true,
  autoFocus = true,
  initialFocusRef,
  finalFocusRef,
  className = '',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  role = 'dialog',
}: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  /**
   * Get all focusable elements within the container
   */
  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!containerRef.current) return [];
    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS),
    ).filter((el) => el.offsetParent !== null); // Filter out hidden elements
  }, []);

  /**
   * Focus the first focusable element
   */
  const focusFirstElement = useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
      return;
    }

    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else if (containerRef.current) {
      // If no focusable elements, focus the container itself
      containerRef.current.setAttribute('tabindex', '-1');
      containerRef.current.focus();
    }
  }, [getFocusableElements, initialFocusRef]);

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!isActive) return;

      // Handle Escape key
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onEscape?.();
        return;
      }

      // Handle Tab key for focus trapping
      if (event.key === 'Tab') {
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement as HTMLElement;

        // Shift + Tab from first element -> go to last
        if (event.shiftKey && activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        // Tab from last element -> go to first
        else if (!event.shiftKey && activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    },
    [isActive, getFocusableElements, onEscape],
  );

  /**
   * Handle clicks outside the container
   */
  useEffect(() => {
    if (!isActive || !onClickOutside) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isActive, onClickOutside]);

  /**
   * Save previously focused element and set initial focus
   */
  useEffect(() => {
    if (!isActive) return;

    // Save currently focused element
    previouslyFocusedRef.current = document.activeElement as HTMLElement;

    // Focus first element after render
    if (autoFocus) {
      // Small delay to ensure DOM is ready
      const timeoutId = setTimeout(focusFirstElement, 10);
      return () => clearTimeout(timeoutId);
    }
  }, [isActive, autoFocus, focusFirstElement]);

  /**
   * Restore focus on unmount or deactivation
   */
  useEffect(() => {
    const finalFocusElement = finalFocusRef?.current;
    return () => {
      if (restoreFocus) {
        const elementToFocus =
          finalFocusElement || previouslyFocusedRef.current;
        if (elementToFocus && typeof elementToFocus.focus === 'function') {
          elementToFocus.focus();
        }
      }
    };
  }, [restoreFocus, finalFocusRef]);

  /**
   * Prevent focus from leaving the trap
   */
  useEffect(() => {
    if (!isActive) return;

    const handleFocusIn = (event: FocusEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        event.preventDefault();
        focusFirstElement();
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, [isActive, focusFirstElement]);

  if (!isActive) {
    return <>{children}</>;
  }

  return (
    <div
      ref={containerRef}
      role={role}
      aria-modal="true"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      onKeyDown={handleKeyDown}
      className={className}
    >
      {children}
    </div>
  );
}

/**
 * Hook for imperative focus trap control
 */
export function useFocusTrap(isActive: boolean = true) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement;

    return () => {
      if (previouslyFocusedRef.current) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [isActive]);

  const trapFocus = useCallback((container: HTMLElement | null) => {
    if (!container) return;

    const focusableElements =
      container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }, []);

  return { containerRef, trapFocus };
}

export default FocusTrap;
