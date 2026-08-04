import Script from 'next/script';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
}

/**
 * Generate comprehensive structured data for SEO
 */
export function generateStructuredData({
  title,
  description,
  canonical,
  image,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  breadcrumbs,
  faq,
}: SEOHeadProps) {
  const baseUrl = 'https://sproutern.dpdns.org';
  const schemas: object[] = [];

  // BreadcrumbList schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
      })),
    });
  }

  // FAQ schema
  if (faq && faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  // Article schema for blog posts
  if (publishedTime) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      image: image || `${baseUrl}/opengraph.jpg`,
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      author: {
        '@type': 'Person',
        name: author || 'Sproutern Team',
        url: `${baseUrl}/founder`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Sproutern',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.jpg`,
          creditText: 'Sproutern',
          creator: {
            '@type': 'Organization',
            name: 'Sproutern',
          },
          copyrightNotice: '© 2026 Sproutern. All rights reserved.',
          license: 'https://sproutern.dpdns.org/terms',
          acquireLicensePage: 'https://sproutern.dpdns.org/contact',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical || baseUrl,
      },
      articleSection: section || 'Career Guidance',
      keywords: tags?.join(', '),
      inLanguage: 'en',
    });
  }

  // Speakable schema for voice search
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: canonical || baseUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['article', 'h1', 'h2', '.content', '.summary'],
    },
    isAccessibleForFree: true,
    inLanguage: 'en',
  });

  return schemas;
}

/**
 * SEO Head Component with comprehensive structured data
 */
export function SEOHead(props: SEOHeadProps) {
  const schemas = generateStructuredData(props);

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="afterInteractive"
        />
      ))}
    </>
  );
}

/**
 * Generate meta tags for international targeting
 */
export function generateInternationalMeta(region: string = 'en-US') {
  const regionData: Record<
    string,
    { currency: string; language: string; country: string }
  > = {
    'en-US': { currency: 'USD', language: 'en', country: 'US' },
    'en-GB': { currency: 'GBP', language: 'en', country: 'GB' },
    'en-IN': { currency: 'INR', language: 'en', country: 'IN' },
    'en-AU': { currency: 'AUD', language: 'en', country: 'AU' },
    'en-CA': { currency: 'CAD', language: 'en', country: 'CA' },
    'en-SG': { currency: 'SGD', language: 'en', country: 'SG' },
    'en-DE': { currency: 'EUR', language: 'en', country: 'DE' },
    'en-FR': { currency: 'EUR', language: 'en', country: 'FR' },
    'en-JP': { currency: 'JPY', language: 'en', country: 'JP' },
  };

  return regionData[region] || regionData['en-US'];
}

export default SEOHead;
