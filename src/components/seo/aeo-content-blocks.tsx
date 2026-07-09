'use client';

import React from 'react';
import { Lightbulb, CheckCircle, HelpCircle } from 'lucide-react';

/**
 * TL;DR Summary Block - Optimized for AI extraction
 * This component creates a visually distinct summary that AI crawlers prioritize
 */
interface TLDRProps {
  summary: string;
  className?: string;
}

export function TLDR({ summary, className = '' }: TLDRProps) {
  return (
    <div
      className={`tldr-summary rounded-xl border-l-4 border-primary bg-primary/5 p-4 ${className}`}
      data-ai-summary="true"
      role="note"
      aria-label="Quick Summary"
    >
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
        <div>
          <span className="font-semibold text-primary">TL;DR: </span>
          <span className="text-foreground">{summary}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Key Takeaways Block - Optimized for featured snippets and AI extraction
 */
interface KeyTakeawaysProps {
  takeaways: string[];
  title?: string;
  className?: string;
}

export function KeyTakeaways({
  takeaways,
  title = 'Key Takeaways',
  className = '',
}: KeyTakeawaysProps) {
  return (
    <div
      className={`key-takeaways rounded-xl border bg-muted/50 p-6 ${className}`}
      data-ai-key-points="true"
      role="region"
      aria-label="Key Takeaways"
    >
      <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
        <CheckCircle className="h-5 w-5 text-green-600" />
        {title}
      </h2>
      <ul className="space-y-2">
        {takeaways.map((takeaway, index) => (
          <li
            key={index}
            className="key-takeaway flex items-start gap-2 text-sm"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            <span>{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * FAQ Answer Block - Optimized for direct answers in AI search
 */
interface FAQAnswerProps {
  question: string;
  answer: string;
  lastUpdated?: string;
}

export function FAQAnswer({ question, answer, lastUpdated }: FAQAnswerProps) {
  return (
    <div
      className="faq-item rounded-lg border p-4"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <h3
        className="mb-2 flex items-start gap-2 font-semibold"
        itemProp="name"
      >
        <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
        {question}
      </h3>
      <div
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p
          className="faq-answer text-sm leading-relaxed text-muted-foreground"
          itemProp="text"
        >
          {answer}
        </p>
        {lastUpdated && (
          <meta
            itemProp="dateModified"
            content={lastUpdated}
          />
        )}
      </div>
    </div>
  );
}

/**
 * FAQ Section - Complete FAQ block with schema markup
 */
interface FAQSectionProps {
  faqs: FAQAnswerProps[];
  title?: string;
  className?: string;
}

export function AEOFAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
}: FAQSectionProps) {
  return (
    <section
      className={`faq-section ${className}`}
      itemScope
      itemType="https://schema.org/FAQPage"
      aria-label="Frequently Asked Questions"
    >
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQAnswer
            key={index}
            {...faq}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * Quick Answer Box - For featured snippet optimization
 */
interface QuickAnswerProps {
  question: string;
  answer: string;
  source?: string;
}

export function QuickAnswer({ question, answer, source }: QuickAnswerProps) {
  return (
    <div
      className="quick-answer rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-6"
      data-ai-featured-answer="true"
    >
      <p className="mb-2 text-sm font-medium text-muted-foreground">
        {question}
      </p>
      <p className="text-lg font-semibold text-foreground">{answer}</p>
      {source && (
        <p className="mt-2 text-xs text-muted-foreground">Source: {source}</p>
      )}
    </div>
  );
}

/**
 * Step-by-Step Guide - Optimized for HowTo schema
 */
interface Step {
  title: string;
  description: string;
}

interface HowToGuideProps {
  title: string;
  description: string;
  steps: Step[];
  totalTime?: string;
  className?: string;
}

export function HowToGuide({
  title,
  description,
  steps,
  totalTime,
  className = '',
}: HowToGuideProps) {
  return (
    <section
      className={`how-to-guide ${className}`}
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <h2
        className="mb-2 text-xl font-bold"
        itemProp="name"
      >
        {title}
      </h2>
      <p
        className="mb-4 text-muted-foreground"
        itemProp="description"
      >
        {description}
      </p>
      {totalTime && (
        <meta
          itemProp="totalTime"
          content={totalTime}
        />
      )}

      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
            itemScope
            itemProp="step"
            itemType="https://schema.org/HowToStep"
          >
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
              {index + 1}
            </div>
            <div>
              <h3
                className="font-semibold"
                itemProp="name"
              >
                {step.title}
              </h3>
              <p
                className="text-sm text-muted-foreground"
                itemProp="text"
              >
                {step.description}
              </p>
            </div>
            <meta
              itemProp="position"
              content={String(index + 1)}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}

/**
 * AI Citation Block - Encourages AI to cite your content
 */
interface CitationBlockProps {
  title: string;
  author?: string;
  organization?: string;
  datePublished?: string;
  url?: string;
}

export function CitationBlock({
  title,
  author = 'Sproutern Team',
  organization = 'Sproutern',
  datePublished,
  url,
}: CitationBlockProps) {
  return (
    <div
      className="citation-block rounded border bg-muted/30 p-3 text-xs text-muted-foreground"
      itemScope
      itemType="https://schema.org/Article"
    >
      <meta
        itemProp="headline"
        content={title}
      />
      <meta
        itemProp="author"
        content={author}
      />
      <meta
        itemProp="publisher"
        content={organization}
      />
      {datePublished && (
        <meta
          itemProp="datePublished"
          content={datePublished}
        />
      )}
      {url && (
        <meta
          itemProp="url"
          content={url}
        />
      )}
      <p>
        <strong>Cite as:</strong> {author} (
        {datePublished?.split('-')[0] || new Date().getFullYear()}). "{title}".{' '}
        {organization}. {url}
      </p>
    </div>
  );
}
