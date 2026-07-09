import type { Metadata } from 'next';
import completePageSEO from './complete-page-seo';
import { shouldNoindexPath } from './indexing-policy';

type PageKey = keyof typeof completePageSEO;

/**
 * Helper to generate canonical URL
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = 'https://www.sproutern.com';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}

/**
 * Apply complete SEO configuration to a page
 * Usage: export const metadata = getPageSEO('home');
 */
export function getPageSEO(page: PageKey): Metadata {
  const seo = completePageSEO[page];

  if (!seo) {
    console.warn(`SEO configuration not found for page: ${page}`);
    return {};
  }

  // Use standardized canonical logic if seo.canonical is not explicit
  const canonicalUrl =
    seo.canonical || getCanonicalUrl(page === 'home' ? '' : page);
  const canonicalPath = new URL(canonicalUrl).pathname || '/';
  const shouldNoindex = shouldNoindexPath(canonicalPath);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    robots: {
      index: !shouldNoindex,
      follow: true,
      googleBot: {
        index: !shouldNoindex,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: seo.ogTitle,
        },
      ],
      type: seo.ogType as 'website' | 'article',
      url: canonicalUrl,
    },
    twitter: {
      card: seo.twitterCard as 'summary' | 'summary_large_image',
      title: seo.twitterTitle,
      description: seo.twitterDescription,
      images: [seo.twitterImage],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'en-GB': canonicalUrl,
        'en-IN': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
  };
}

/**
 * Get schema markup for a page
 * Usage: const schema = getPageSchema('home');
 */
export function getPageSchema(page: PageKey) {
  const seo = completePageSEO[page];
  return seo?.schema || [];
}

/**
 * Get hreflang tags for a page
 * Usage: const hreflang = getPageHreflang('home');
 */
export function getPageHreflang(page: PageKey) {
  const seo = completePageSEO[page];
  return seo?.hreflang || [];
}

/**
 * Generate JSON-LD schema markup
 */
export function generateJsonLdSchema(schemas: any[]) {
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemas,
    }),
  };
}

/**
 * Apply SEO to layout or page component
 * Usage in layout.tsx or page.tsx:
 *
 * import { getPageSEO, getPageSchema } from '@/lib/seo/apply-complete-seo';
 *
 * export const metadata = getPageSEO('home');
 *
 * export default function Page() {
 * const schemas = getPageSchema('home');
 * return (
 * <>
 * <script
 * type="application/ld+json"
 * dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
 * />
 *
 * </>
 * );
 * }
 */

/**
 * Get all available page keys for type safety
 */
export const availablePages = Object.keys(completePageSEO) as PageKey[];

/**
 * Batch apply SEO to multiple pages
 */
export function getMultiplePagesSEO(pages: PageKey[]) {
  return pages.reduce(
    (acc, page) => {
      acc[page] = getPageSEO(page);
      return acc;
    },
    {} as Record<PageKey, Metadata>,
  );
}
