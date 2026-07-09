import React from 'react';
import Script from 'next/script';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  showUI?: boolean;
}

export function FAQSchema({ faqs, showUI = true }: FAQSchemaProps) {
  const faqSchema = {
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

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      {showUI && (
        <div className="faq-section my-12">
          <h2 className="mb-6 text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item border-b pb-6 last:border-b-0"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="faq-answer leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
