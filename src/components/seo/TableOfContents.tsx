/**
 * Table of Contents Component
 * Auto-generates from heading elements with smooth scroll
 */

'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
  title?: string;
}

export function TableOfContents({
  className,
  title = 'Table of Contents',
}: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Generate TOC from headings
    const headings = Array.from(
      document.querySelectorAll('article h2, article h3'),
    ) as HTMLHeadingElement[];

    const tocItems: TocItem[] = headings.map((heading) => {
      // Ensure heading has an ID
      if (!heading.id) {
        const id =
          heading.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || '';
        heading.id = id;
      }

      return {
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1)),
      };
    });

    setToc(tocItems);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66% 0px',
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (toc.length === 0) return null;

  return (
    <nav
      className={cn('space-y-2', className)}
      aria-label="Table of contents"
    >
      <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <ul className="space-y-2 text-sm">
        {toc.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className={cn(
                'block py-1 transition-colors hover:text-primary',
                activeId === item.id
                  ? 'font-medium text-primary'
                  : 'text-muted-foreground',
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Sticky TOC for desktop
 */
export function StickyTableOfContents() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-lg border bg-card p-6">
        <TableOfContents />
      </div>
    </aside>
  );
}
