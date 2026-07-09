'use client';

import React from 'react';
import {
  CheckCircle,
  TrendingUp,
  Lightbulb,
  User,
  Award,
  ChevronRight,
} from 'lucide-react';

/**
 * SGE Primary Answer Block
 * This is the main answer block that Google SGE will likely extract
 */
interface PrimaryAnswerProps {
  question?: string;
  answer: string;
  className?: string;
}

export function SGEPrimaryAnswer({
  question,
  answer,
  className = '',
}: PrimaryAnswerProps) {
  return (
    <div
      className={`sge-primary-answer primary-answer rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 p-6 ${className}`}
      data-sge-primary="true"
      data-ai-featured="true"
    >
      {question && (
        <p className="mb-2 text-sm font-medium text-muted-foreground">
          {question}
        </p>
      )}
      <p className="text-xl font-bold leading-relaxed text-foreground">
        {answer}
      </p>
    </div>
  );
}

/**
 * SGE Comparison Table
 * Google SGE loves structured comparison data
 */
interface ComparisonRow {
  [key: string]: string | number;
}

interface SGEComparisonTableProps {
  title: string;
  headers: string[];
  rows: ComparisonRow[];
  highlightColumn?: string;
  className?: string;
}

export function SGEComparisonTable({
  title,
  headers,
  rows,
  highlightColumn,
  className = '',
}: SGEComparisonTableProps) {
  const keys = Object.keys(rows[0] || {});

  return (
    <div
      className={`sge-comparison ${className}`}
      data-sge-comparison="true"
    >
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
        <TrendingUp className="h-5 w-5 text-primary" />
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary/10">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="border p-3 text-left text-sm font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-muted/30' : ''}
              >
                {keys.map((key, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border p-3 text-sm ${
                      highlightColumn && key === highlightColumn
                        ? 'font-bold text-primary'
                        : ''
                    }`}
                  >
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * SGE Expert Perspective
 * Shows expert opinion with E-E-A-T signals
 */
interface ExpertPerspectiveProps {
  author: string;
  credential: string;
  insight: string;
  avatarUrl?: string;
  className?: string;
}

export function SGEExpertPerspective({
  author,
  credential,
  insight,
  avatarUrl,
  className = '',
}: ExpertPerspectiveProps) {
  return (
    <div
      className={`sge-expert-perspective rounded-xl border bg-muted/30 p-5 ${className}`}
      data-sge-expert="true"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={author}
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <User className="h-5 w-5 text-primary" />
          )}
        </div>
        <div>
          <p
            className="font-semibold"
            itemProp="name"
          >
            {author}
          </p>
          <p
            className="text-xs text-muted-foreground"
            itemProp="jobTitle"
          >
            {credential}
          </p>
        </div>
        <Award className="ml-auto h-5 w-5 text-primary" />
      </div>
      <blockquote className="border-l-2 border-primary/50 pl-4 text-sm italic">
        "{insight}"
      </blockquote>
    </div>
  );
}

/**
 * SGE Related Questions
 * Shows follow-up questions that SGE might ask
 */
interface RelatedQuestion {
  question: string;
  answer: string;
}

interface SGERelatedQuestionsProps {
  questions: RelatedQuestion[];
  title?: string;
  className?: string;
}

export function SGERelatedQuestions({
  questions,
  title = 'People Also Ask',
  className = '',
}: SGERelatedQuestionsProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div
      className={`sge-related-questions ${className}`}
      data-sge-paa="true"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
        <Lightbulb className="h-5 w-5 text-primary" />
        {title}
      </h3>
      <div className="space-y-2">
        {questions.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50"
            >
              <span
                className="font-medium"
                itemProp="name"
              >
                {item.question}
              </span>
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  openIndex === index ? 'rotate-90' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div
                className="border-t bg-muted/30 p-4"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p
                  className="text-sm"
                  itemProp="text"
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * SGE Quick Facts Box
 * Displays key facts in a scannable format for SGE
 */
interface QuickFact {
  label: string;
  value: string;
}

interface SGEQuickFactsProps {
  title: string;
  facts: QuickFact[];
  className?: string;
}

export function SGEQuickFacts({
  title,
  facts,
  className = '',
}: SGEQuickFactsProps) {
  return (
    <div
      className={`sge-quick-facts rounded-xl border bg-muted/30 p-5 ${className}`}
      data-sge-facts="true"
    >
      <h3 className="mb-4 font-bold">{title}</h3>
      <dl className="space-y-3">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <dt className="text-sm text-muted-foreground">{fact.label}</dt>
            <dd className="font-semibold text-primary">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * SGE Source Card
 * Shows source credibility for E-E-A-T
 */
interface SGESourceCardProps {
  siteName: string;
  description: string;
  lastUpdated: string;
  trustSignals: string[];
  className?: string;
}

export function SGESourceCard({
  siteName,
  description,
  lastUpdated,
  trustSignals,
  className = '',
}: SGESourceCardProps) {
  return (
    <div
      className={`sge-source-card rounded-lg border bg-muted/20 p-4 ${className}`}
      data-sge-source="true"
    >
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/20">
          <span className="text-xs font-bold text-primary">S</span>
        </div>
        <span className="font-semibold">{siteName}</span>
      </div>
      <p className="mb-3 text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {trustSignals.map((signal, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900 dark:text-green-300"
          >
            <CheckCircle className="h-3 w-3" />
            {signal}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Last updated: {lastUpdated}
      </p>
    </div>
  );
}
