'use client';

import { useEffect, useState } from 'react';
import { AlignLeft, X, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Helper to slugify heading text
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

interface TableOfContentsProps {
  isDesktop?: boolean; // Legacy prop, treats as sidebar if true
  variant?: 'sidebar' | 'drawer' | 'inline';
}

export function TableOfContents({
  isDesktop = false,
  variant,
  className,
}: TableOfContentsProps & { className?: string }) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  // Determine effective variant
  const effectiveVariant = variant || (isDesktop ? 'sidebar' : 'drawer');

  useEffect(() => {
    // Client-side heading extraction with retry
    const findHeadings = () => {
      const elements = Array.from(
        document.querySelectorAll('article h2, article h3'),
      );
      if (elements.length === 0) return false;

      const usedIds = new Set<string>();
      const items = elements.map((elem) => {
        let id = elem.id;

        if (!id) {
          id = slugify(elem.textContent || '');
        }

        // Ensure uniqueness
        let uniqueId = id;
        let counter = 1;

        while (usedIds.has(uniqueId)) {
          uniqueId = `${id}-${counter}`;
          counter++;
        }

        usedIds.add(uniqueId);

        // Update the DOM element ID
        elem.id = uniqueId;

        return {
          id: uniqueId,
          text: elem.textContent || '',
          level: Number(elem.tagName.substring(1)),
        };
      });

      setHeadings(items);

      // Scroll listener for active state
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: '-20% 0px -35% 0px' },
      );

      elements.forEach((elem) => observer.observe(elem));
      return true; // Found headings
    };

    // Initial attempt
    if (!findHeadings()) {
      // Retry mechanism for dynamic content
      const interval = setInterval(() => {
        if (findHeadings()) {
          clearInterval(interval);
        }
      }, 500);

      // Timeout after 3 seconds
      setTimeout(() => clearInterval(interval), 3000);
    }
  }, []);

  if (headings.length === 0) {
    if (effectiveVariant === 'sidebar') {
      return (
        <div className="text-xs text-muted-foreground">Loading TOC...</div>
      );
    }
    return null;
  }

  // INLINE RENDER (Top of article)
  if (effectiveVariant === 'inline') {
    return (
      <nav className={cn('mb-8 rounded-lg border bg-muted/30 p-6', className)}>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
          <List className="h-5 w-5" />
          On this page
        </h3>
        <div className="flex flex-col space-y-2">
          {headings.map((heading, index) => (
            <a
              key={`toc-${heading.id}-${index}`}
              href={`#${heading.id}`}
              className={cn(
                'text-sm text-muted-foreground transition-colors hover:text-primary',
                heading.level === 3 && 'pl-4',
              )}
            >
              {heading.text}
            </a>
          ))}
        </div>
      </nav>
    );
  }

  // DESKTOP/SIDEBAR RENDER (Simple Sidebar Content)
  // Parent component handles sticky positioning and layout
  if (effectiveVariant === 'sidebar') {
    return (
      <nav className={cn('space-y-1', className)}>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          On this page
        </h3>
        {headings.map((heading, index) => (
          <a
            key={`toc-${heading.id}-${index}`}
            href={`#${heading.id}`}
            className={cn(
              'block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted hover:text-primary',
              activeId === heading.id
                ? 'bg-primary/10 font-medium text-primary'
                : 'text-muted-foreground',
              heading.level === 3 && 'pl-4',
            )}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    );
  }

  // MOBILE DRAWER RENDER (Fixed Drawer + Toggle)
  // Hidden on Desktop via parent or CSS, but we ensure it doesn't force itself visible with lg:block
  return (
    <>
      {/* Mobile Toggle Button (Floating) */}
      <div className={cn('fixed bottom-20 right-4 z-40 lg:hidden', className)}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          {isOpen ? <X /> : <AlignLeft />}
        </Button>
      </div>

      {/* Mobile Drawer Container */}
      <aside
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-64 transform overflow-y-auto bg-background p-6 shadow-2xl transition-transform duration-300 lg:hidden', // Explicitly hidden on desktop
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">Table of Contents</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="space-y-1">
          {headings.map((heading, index) => (
            <a
              key={`toc-${heading.id}-${index}`}
              href={`#${heading.id}`}
              onClick={() => setIsOpen(false)} // Close on click (mobile)
              className={cn(
                'block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted hover:text-primary',
                activeId === heading.id
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'text-muted-foreground',
                heading.level === 3 && 'pl-4',
              )}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
