'use client';

import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  example?: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export function FAQSection({
  title = 'Frequently Asked Questions',
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="not-prose my-10">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
        <HelpCircle className="h-6 w-6 text-primary" />
        {title}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <h3 className="pr-4 text-base font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary" />
              ) : (
                <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary" />
              )}
            </button>

            {openIndex === index && (
              <div className="border-t border-gray-200 p-4 dark:border-gray-700">
                <div className="prose prose-sm max-w-none">
                  <p className="mb-3 text-muted-foreground">{faq.answer}</p>
                  {faq.example && (
                    <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                      <p className="text-sm">
                        <strong>Example:</strong> {faq.example}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  faq.answer + (faq.example ? ` Example: ${faq.example}` : ''),
              },
            })),
          }),
        }}
      />
    </section>
  );
}
