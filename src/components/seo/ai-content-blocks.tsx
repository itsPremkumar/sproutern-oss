'use client';

import { FC, ReactNode } from 'react';
import { CheckCircle, Lightbulb, Quote, AlertCircle, Info } from 'lucide-react';

/**
 * AI Content Blocks for Generative Engine Optimization
 * These components are optimized for AI citation and extraction
 */

/**
 * Key Takeaway Block - AI engines prioritize these for citations
 * Use at the top of articles for quick answer extraction
 */
export const KeyTakeaway: FC<{
  children: ReactNode;
  question?: string;
  variant?: 'default' | 'success' | 'warning' | 'info';
}> = ({ children, question, variant = 'default' }) => {
  const variantStyles = {
    default: 'border-primary bg-primary/5',
    success: 'border-green-500 bg-green-500/5',
    warning: 'border-yellow-500 bg-yellow-500/5',
    info: 'border-blue-500 bg-blue-500/5',
  };

  const iconMap = {
    default: <Lightbulb className="h-5 w-5 text-primary" />,
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    warning: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
  };

  return (
    <div
      className={`key-takeaway my-6 rounded-lg border-l-4 p-6 ${variantStyles[variant]}`}
      data-ai-summary="true"
      role="note"
      aria-label={question || 'Key Takeaway'}
    >
      <div className="mb-3 flex items-center gap-2">
        {iconMap[variant]}
        <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {question || 'Key Takeaway'}
        </h4>
      </div>
      <div className="text-base font-medium leading-relaxed">{children}</div>
    </div>
  );
};

/**
 * Definitive Answer Block - For prompt-style content
 * Format: "What is X? X is..." structure for AI extraction
 */
export const DefinitiveAnswer: FC<{
  question: string;
  answer: string;
  citation?: string;
  expanded?: ReactNode;
}> = ({ question, answer, citation, expanded }) => (
  <div
    className="definitive-answer my-6"
    itemScope
    itemType="https://schema.org/Question"
  >
    <h3
      className="mb-3 text-xl font-bold"
      itemProp="name"
    >
      {question}
    </h3>
    <div
      itemScope
      itemType="https://schema.org/Answer"
      itemProp="acceptedAnswer"
    >
      <p
        className="mb-2 text-lg leading-relaxed text-foreground"
        itemProp="text"
      >
        {answer}
      </p>
      {expanded && <div className="mt-4 text-muted-foreground">{expanded}</div>}
      {citation && (
        <cite className="mt-3 block text-sm italic text-muted-foreground/70">
          Source: {citation}
        </cite>
      )}
    </div>
  </div>
);

/**
 * TL;DR Summary - AI engines extract this for quick answers
 * Place at the top of long-form content
 */
export const TLDRSummary: FC<{
  points: string[];
  title?: string;
}> = ({ points, title = 'TL;DR - Quick Summary' }) => (
  <div
    className="tldr-summary my-8 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6"
    data-ai-tldr="true"
    role="region"
    aria-label="Summary"
  >
    <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
      <Lightbulb className="h-5 w-5 text-primary" />
      {title}
    </h2>
    <ul className="space-y-3">
      {points.map((point, i) => (
        <li
          key={i}
          className="flex items-start gap-3"
        >
          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          <span className="text-base">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Expert Quote Block - E-E-A-T signal for AI credibility
 */
export const ExpertQuote: FC<{
  quote: string;
  author: string;
  credentials: string;
  source?: string;
  image?: string;
}> = ({ quote, author, credentials, source, image }) => (
  <blockquote
    className="expert-quote my-8 overflow-hidden rounded-xl border bg-muted/30"
    itemScope
    itemType="https://schema.org/Quotation"
  >
    <div className="flex items-start gap-4 p-6">
      <Quote className="h-8 w-8 flex-shrink-0 text-primary/40" />
      <div>
        <p
          className="mb-4 text-lg italic leading-relaxed"
          itemProp="text"
        >
          "{quote}"
        </p>
        <footer className="flex items-center gap-3">
          {image && (
            <img
              src={image}
              alt={author}
              className="h-10 w-10 rounded-full object-cover"
            />
          )}
          <div>
            <span
              itemProp="creator"
              itemScope
              itemType="https://schema.org/Person"
            >
              <strong
                itemProp="name"
                className="text-foreground"
              >
                {author}
              </strong>
              <span
                itemProp="jobTitle"
                className="ml-1 text-muted-foreground"
              >
                , {credentials}
              </span>
            </span>
            {source && (
              <div className="text-sm text-muted-foreground/70">
                via {source}
              </div>
            )}
          </div>
        </footer>
      </div>
    </div>
  </blockquote>
);

/**
 * Comparison Table - AI engines love structured comparisons
 */
export const ComparisonTable: FC<{
  headers: string[];
  rows: { label: string; values: (string | ReactNode)[] }[];
  caption?: string;
}> = ({ headers, rows, caption }) => (
  <figure className="comparison-table my-8">
    {caption && (
      <figcaption className="mb-3 text-sm font-medium text-muted-foreground">
        {caption}
      </figcaption>
    )}
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse">
        <thead className="bg-muted">
          <tr>
            <th className="border-b p-4 text-left font-semibold">Criteria</th>
            {headers.map((h, i) => (
              <th
                key={i}
                className="border-b p-4 text-left font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}
            >
              <td className="border-b p-4 font-medium">{row.label}</td>
              {row.values.map((v, j) => (
                <td
                  key={j}
                  className="border-b p-4"
                >
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </figure>
);

/**
 * Step-by-Step Guide - For HowTo schema compatibility
 */
export const StepByStepGuide: FC<{
  title: string;
  steps: { title: string; description: string; tip?: string }[];
  totalTime?: string;
}> = ({ title, steps, totalTime }) => (
  <div
    className="step-guide my-8"
    itemScope
    itemType="https://schema.org/HowTo"
  >
    <h3
      className="mb-2 text-xl font-bold"
      itemProp="name"
    >
      {title}
    </h3>
    {totalTime && (
      <p className="mb-4 text-sm text-muted-foreground">
        ⏱️ Estimated time: <span itemProp="totalTime">{totalTime}</span>
      </p>
    )}
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li
          key={i}
          className="flex gap-4 rounded-lg border bg-muted/20 p-4"
          itemScope
          itemType="https://schema.org/HowToStep"
          itemProp="step"
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {i + 1}
          </div>
          <div className="flex-1">
            <h4
              className="mb-1 font-semibold"
              itemProp="name"
            >
              {step.title}
            </h4>
            <p
              className="text-muted-foreground"
              itemProp="text"
            >
              {step.description}
            </p>
            {step.tip && (
              <p className="mt-2 text-sm text-primary">💡 Tip: {step.tip}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  </div>
);

/**
 * FAQ Accordion Item - For structured FAQ content
 */
export const FAQItem: FC<{
  question: string;
  answer: string | ReactNode;
  isOpen?: boolean;
}> = ({ question, answer, isOpen = false }) => (
  <details
    className="faq-item group rounded-lg border"
    open={isOpen}
    itemScope
    itemType="https://schema.org/Question"
  >
    <summary
      className="flex cursor-pointer items-center justify-between p-4 font-semibold hover:bg-muted/50"
      itemProp="name"
    >
      {question}
      <span className="text-muted-foreground transition-transform group-open:rotate-180">
        ▼
      </span>
    </summary>
    <div
      className="border-t p-4 text-muted-foreground"
      itemScope
      itemType="https://schema.org/Answer"
      itemProp="acceptedAnswer"
    >
      <div itemProp="text">{answer}</div>
    </div>
  </details>
);

/**
 * Pro Tip Block - Highlighted advice
 */
export const ProTip: FC<{
  children: ReactNode;
  title?: string;
}> = ({ children, title = 'Pro Tip' }) => (
  <div className="pro-tip my-6 flex gap-4 rounded-lg border-l-4 border-accent bg-accent/5 p-4">
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-lg">
      💡
    </div>
    <div>
      <h4 className="mb-1 font-semibold text-accent">{title}</h4>
      <div className="text-muted-foreground">{children}</div>
    </div>
  </div>
);

/**
 * Statistic Block - For data visualization
 */
export const StatisticBlock: FC<{
  stats: { value: string; label: string; description?: string }[];
}> = ({ stats }) => (
  <div className="statistic-block my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {stats.map((stat, i) => (
      <div
        key={i}
        className="rounded-xl border bg-gradient-to-br from-primary/5 to-transparent p-6 text-center"
      >
        <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
        <div className="mt-1 font-semibold">{stat.label}</div>
        {stat.description && (
          <div className="mt-2 text-sm text-muted-foreground">
            {stat.description}
          </div>
        )}
      </div>
    ))}
  </div>
);

/**
 * Citation Block - For referencing sources
 */
export const CitationBlock: FC<{
  title: string;
  url: string;
  source: string;
  date?: string;
}> = ({ title, url, source, date }) => (
  <div className="citation-block my-4 rounded border-l-2 border-muted-foreground/30 bg-muted/20 p-3 text-sm">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      {title}
    </a>
    <span className="text-muted-foreground">
      {' '}
      — {source}
      {date && `, ${date}`}
    </span>
  </div>
);

export default {
  KeyTakeaway,
  DefinitiveAnswer,
  TLDRSummary,
  ExpertQuote,
  ComparisonTable,
  StepByStepGuide,
  FAQItem,
  ProTip,
  StatisticBlock,
  CitationBlock,
};
