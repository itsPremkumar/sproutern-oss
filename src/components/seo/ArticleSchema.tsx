import Script from 'next/script';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  authorUrl?: string;
  keywords?: string[];
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = 'Sproutern Team',
  authorUrl = 'https://sproutern.dpdns.org/about',
  keywords = [],
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
      jobTitle: 'Editorial Team',
      affiliation: {
        '@type': 'Organization',
        name: 'Sproutern',
        url: 'https://sproutern.dpdns.org',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sproutern.dpdns.org/logo.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: keywords.join(', '),
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
