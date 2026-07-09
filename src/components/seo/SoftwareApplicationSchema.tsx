import { generateCompleteToolAEOSchema } from '@/lib/seo/tool-aeo-optimization';
import { generateToolSGESchemas } from '@/lib/seo/tool-sge-optimization';
import {
  generateToolHrefLangTags,
  toolRegions,
  ToolRegion,
} from '@/lib/seo/tool-geo-seo';

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  slug?: string; // New prop for enhanced schemas
  howToSteps?: { title: string; description: string }[]; // New prop for HowTo schema
  region?: ToolRegion; // New prop for Geo targeting
}

export function SoftwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory,
  operatingSystem = 'Web Browser',
  offers = { price: '0', priceCurrency: 'INR' },
  aggregateRating,
  slug,
  howToSteps = [],
  region = 'IN',
}: SoftwareApplicationSchemaProps) {
  const allSchemas: object[] = [];

  // 1. Base SoftwareApplication Schema
  const regionInfo = toolRegions[region] || toolRegions['IN'];
  const currency = regionInfo ? regionInfo.currency : offers.priceCurrency;

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    offers: {
      '@type': 'Offer',
      price: offers.price,
      priceCurrency: currency,
    },
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
    }),
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: regionInfo?.countryName || 'India',
      },
    },
  };
  allSchemas.push(baseSchema);

  // 2. Enhanced Schemas (if slug provided)
  if (slug) {
    // AEO Schemas (Speakable, FAQ)
    const aeoSchemas = generateCompleteToolAEOSchema(slug);
    if (aeoSchemas) {
      if (aeoSchemas.speakable) allSchemas.push(aeoSchemas.speakable);
      if (aeoSchemas.faq) allSchemas.push(aeoSchemas.faq);
    }

    // SGE Schemas (HowTo, Perspective)
    const sgeSchemas = generateToolSGESchemas(
      slug,
      name,
      applicationCategory,
      howToSteps,
    );
    if (sgeSchemas) {
      if (sgeSchemas.howTo) allSchemas.push(sgeSchemas.howTo);
      if (sgeSchemas.perspective) allSchemas.push(sgeSchemas.perspective);
    }
  }

  return (
    <script
      id={`software-schema-${slug || name.replace(/\s+/g, '-').toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
    />
  );
}
