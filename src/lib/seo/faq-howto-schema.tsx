/**
 * SEO Schema Generators for FAQ and HowTo pages
 * These generate JSON-LD structured data for better SEO
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export interface HowToSchema {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration format (e.g., "PT30M" for 30 minutes)
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
  image?: string;
}

/**
 * Generate FAQPage schema for Google Rich Results
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate HowTo schema for Google Rich Results
 * @see https://developers.google.com/search/docs/appearance/structured-data/how-to
 */
export function generateHowToSchema(howTo: HowToSchema) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
  };

  if (howTo.totalTime) {
    schema.totalTime = howTo.totalTime;
  }

  if (howTo.estimatedCost) {
    schema.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: howTo.estimatedCost.currency,
      value: howTo.estimatedCost.value,
    };
  }

  if (howTo.supply && howTo.supply.length > 0) {
    schema.supply = howTo.supply.map((item) => ({
      '@type': 'HowToSupply',
      name: item,
    }));
  }

  if (howTo.tool && howTo.tool.length > 0) {
    schema.tool = howTo.tool.map((item) => ({
      '@type': 'HowToTool',
      name: item,
    }));
  }

  if (howTo.image) {
    schema.image = howTo.image;
  }

  return schema;
}

/**
 * Generate JSON string for embedding in script tags
 */
export function generateJsonLd(schema: Record<string, any>): string {
  return JSON.stringify(schema);
}

/**
 * React component for FAQ schema script tag
 */
export function FAQSchemaScript({ faqs }: { faqs: FAQItem[] }) {
  const schema = generateFAQSchema(faqs);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: generateJsonLd(schema) }}
    />
  );
}

/**
 * React component for HowTo schema script tag
 */
export function HowToSchemaScript({ howTo }: { howTo: HowToSchema }) {
  const schema = generateHowToSchema(howTo);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: generateJsonLd(schema) }}
    />
  );
}
