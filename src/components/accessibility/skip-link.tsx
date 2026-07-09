'use client';

/**
 * Skip Link Component for Accessibility
 *
 * Provides a "Skip to main content" link that becomes visible on focus.
 * This is essential for keyboard and screen reader users to bypass
 * repetitive navigation elements.
 *
 * WCAG 2.1 AA Requirement: 2.4.1 Bypass Blocks
 * @see https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html
 */

import { useCallback, useState } from 'react';

export interface SkipLinkProps {
  /** ID of the main content element to skip to */
  mainContentId?: string;
  /** Custom label for the skip link */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

export function SkipLink({
  mainContentId = 'main-content',
  label = 'Skip to main content',
  className = '',
}: SkipLinkProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const mainContent = document.getElementById(mainContentId);
      if (mainContent) {
        // Set focus to the main content
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus({ preventScroll: false });
        mainContent.scrollIntoView({ behavior: 'smooth' });

        // Remove tabindex after blur to avoid messing with tab order
        mainContent.addEventListener(
          'blur',
          () => {
            mainContent.removeAttribute('tabindex');
          },
          { once: true },
        );
      }
    },
    [mainContentId],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const mainContent = document.getElementById(mainContentId);
        if (mainContent) {
          mainContent.setAttribute('tabindex', '-1');
          mainContent.focus({ preventScroll: false });
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    [mainContentId],
  );

  return (
    <a
      href={`#${mainContentId}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`fixed left-4 z-[9999] rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
        isFocused
          ? 'top-4 translate-y-0 opacity-100'
          : '-top-16 -translate-y-full opacity-0'
      } ${className} `}
      aria-label={label}
    >
      {label}
    </a>
  );
}

/**
 * Skip Link Navigation Component
 *
 * Extended version with multiple skip targets
 */
export interface SkipLinkItem {
  id: string;
  label: string;
}

export interface SkipLinksProps {
  links?: SkipLinkItem[];
  className?: string;
}

export function SkipLinks({
  links = [
    { id: 'main-content', label: 'Skip to main content' },
    { id: 'footer', label: 'Skip to footer' },
  ],
  className = '',
}: SkipLinksProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: false });
        target.scrollIntoView({ behavior: 'smooth' });
        target.addEventListener(
          'blur',
          () => target.removeAttribute('tabindex'),
          { once: true },
        );
      }
    },
    [],
  );

  return (
    <nav
      aria-label="Skip links"
      className={`fixed left-4 top-4 z-[9999] flex flex-col gap-2 ${className}`}
    >
      {links.map((link, index) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => handleClick(e, link.id)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
          className={`rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
            focusedIndex === index
              ? 'translate-x-0 opacity-100'
              : 'pointer-events-none -translate-x-full opacity-0'
          } `}
          tabIndex={0}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default SkipLink;
