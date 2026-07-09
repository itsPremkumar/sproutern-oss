/**
 * Breadcrumbs Component for SEO and Navigation
 * Includes JSON-LD schema markup
 */

'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/lib/seo/schema-generators';
import Script from 'next/script';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null;

  const pathParts = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', url: '/' }];

  let accumulatedPath = '';
  pathParts.forEach((part, index) => {
    accumulatedPath += `/${part}`;
    const name = formatBreadcrumbName(part);
    breadcrumbs.push({
      name,
      url: accumulatedPath,
    });
  });

  // Generate schema markup
  const schema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        strategy="afterInteractive"
      />

      {/* Visual Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="mb-4 overflow-x-auto"
      >
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li
                key={breadcrumb.url}
                className="flex items-center"
              >
                {index > 0 && (
                  <ChevronRight
                    className="mx-2 h-4 w-4"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.url}
                    className="flex items-center gap-1 transition-colors hover:text-foreground"
                  >
                    {index === 0 && <Home className="h-4 w-4" />}
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/**
 * Format URL slug to readable breadcrumb name
 */
function formatBreadcrumbName(slug: string): string {
  // Handle special cases
  const specialCases: Record<string, string> = {
    'cgpa-converter': 'CGPA Converter',
    'gpa-converter': 'GPA Converter',
    usa: 'USA',
    uk: 'UK',
    'ai-ml-career-path': 'AI/ML Career Path',
    'dsa-preparation-roadmap': 'DSA Preparation Roadmap',
  };

  if (specialCases[slug]) {
    return specialCases[slug];
  }

  // Default formatting: capitalize each word
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
