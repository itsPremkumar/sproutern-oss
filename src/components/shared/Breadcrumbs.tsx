'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-6 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="h-4 w-4" />
        </li>
        {items.map((item, index) => (
          <li
            key={item.href}
            className="flex items-center gap-2"
          >
            {index === items.length - 1 ? (
              <span
                className="font-medium text-foreground"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Function to generate JSON-LD for breadcrumbs (for SEO)
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  baseUrl: string = 'https://sproutern.dpdns.org',
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  };
}
