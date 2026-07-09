/**
 * GEO - Generative Engine Optimization Components
 * Optimizes content for AI search engines (ChatGPT, Perplexity, Google SGE, Claude)
 * Makes content easily citable and extractable by AI systems
 */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Quote,
  Lightbulb,
  CheckCircle,
  Info,
  Zap,
  Target,
  BookOpen,
  MessageSquare,
  Star,
  TrendingUp,
} from 'lucide-react';

/**
 * AI-Citable Quick Answer Block
 * Designed to be extracted by AI search engines as the primary answer
 */
export function QuickAnswer({
  question,
  answer,
  source = 'Sproutern Research',
  lastUpdated,
  className = '',
}: {
  question: string;
  answer: string;
  source?: string;
  lastUpdated?: string;
  className?: string;
}) {
  return (
    <>
      {/* Speakable Schema for Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.quick-answer-text'],
            },
          }),
        }}
      />
      <div
        className={cn(
          'quick-answer rounded-lg border-2 border-primary/20 bg-primary/5 p-6',
          className,
        )}
        role="region"
        aria-label="Quick Answer"
      >
        <div className="mb-2 flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-primary">
            Quick Answer
          </span>
        </div>
        <h3 className="mb-3 text-lg font-bold">{question}</h3>
        <p className="quick-answer-text text-base leading-relaxed">{answer}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>Source: {source}</span>
          {lastUpdated && <span>Updated: {lastUpdated}</span>}
        </div>
      </div>
    </>
  );
}

/**
 * AI-Optimized Definition Block
 * Perfect for "What is X?" queries in AI search
 */
export function AIDefinition({
  term,
  definition,
  examples,
  related,
}: {
  term: string;
  definition: string;
  examples?: string[];
  related?: string[];
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DefinedTerm',
            name: term,
            description: definition,
          }),
        }}
      />
      <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
              What is {term}?
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-blue-700 dark:text-blue-300">{definition}</p>
          {examples && examples.length > 0 && (
            <div className="mb-3">
              <p className="mb-1 text-sm font-semibold text-blue-800 dark:text-blue-200">
                Examples:
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-blue-600 dark:text-blue-400">
                {examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          )}
          {related && related.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Badge
                  key={r}
                  variant="secondary"
                >
                  {r}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

/**
 * Citable Statistic Block
 * Makes statistics easy to cite with proper attribution
 */
export function CitableStat({
  statistic,
  context,
  source,
  year = '2026',
  trend,
}: {
  statistic: string;
  context: string;
  source: string;
  year?: string;
  trend?: 'up' | 'down' | 'stable';
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-lg border bg-card p-4">
      {trend && (
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full',
            trend === 'up' && 'bg-green-100 text-green-600',
            trend === 'down' && 'bg-red-100 text-red-600',
            trend === 'stable' && 'bg-gray-100 text-gray-600',
          )}
        >
          <TrendingUp
            className={cn('h-5 w-5', trend === 'down' && 'rotate-180')}
          />
        </div>
      )}
      <div>
        <p className="text-2xl font-bold text-primary">{statistic}</p>
        <p className="text-sm text-muted-foreground">{context}</p>
        <p className="text-xs text-muted-foreground">
          Source: {source} ({year})
        </p>
      </div>
    </div>
  );
}

/**
 * Expert Quote Block
 * Adds credibility and E-E-A-T signals
 */
export function ExpertQuoteBlock({
  quote,
  author,
  title,
  company,
  image,
}: {
  quote: string;
  author: string;
  title: string;
  company?: string;
  image?: string;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quotation',
            text: quote,
            creator: {
              '@type': 'Person',
              name: author,
              jobTitle: title,
              worksFor: company
                ? { '@type': 'Organization', name: company }
                : undefined,
            },
          }),
        }}
      />
      <blockquote className="relative rounded-lg border-l-4 border-primary bg-muted/50 p-6 italic">
        <Quote className="absolute right-4 top-4 h-8 w-8 text-muted-foreground/20" />
        <p className="mb-4 text-lg leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <footer className="flex items-center gap-3">
          {image && (
            <img
              src={image}
              alt={author}
              className="h-10 w-10 rounded-full object-cover"
            />
          )}
          <div>
            <cite className="font-semibold not-italic">{author}</cite>
            <p className="text-sm text-muted-foreground">
              {title}
              {company && `, ${company}`}
            </p>
          </div>
        </footer>
      </blockquote>
    </>
  );
}

/**
 * Key Takeaways Block
 * Perfect for AI to extract main points
 */
export function KeyTakeaways({
  title = 'Key Takeaways',
  takeaways,
}: {
  title?: string;
  takeaways: string[];
}) {
  return (
    <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-green-600" />
          <CardTitle className="text-green-800 dark:text-green-200">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {takeaways.map((t, i) => (
            <li
              key={i}
              className="flex items-start gap-2"
            >
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              <span className="text-green-700 dark:text-green-300">{t}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

/**
 * Comparison Matrix for AI
 * Structured data that AI can easily parse and present
 */
export function AIComparisonMatrix({
  title,
  items,
  criteria,
}: {
  title: string;
  items: string[];
  criteria: {
    name: string;
    values: (string | number | boolean)[];
  }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <caption className="mb-4 text-lg font-bold">{title}</caption>
        <thead>
          <tr className="border-b bg-muted">
            <th className="p-3 text-left font-semibold">Criteria</th>
            {items.map((item) => (
              <th
                key={item}
                className="p-3 text-center font-semibold"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((c) => (
            <tr
              key={c.name}
              className="border-b"
            >
              <td className="p-3 font-medium">{c.name}</td>
              {c.values.map((v, i) => (
                <td
                  key={i}
                  className="p-3 text-center"
                >
                  {typeof v === 'boolean' ? (
                    v ? (
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )
                  ) : (
                    v
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Pro Tip Block
 * Highlighted advice that AI can extract as actionable tips
 */
export function ProTipBlock({
  tip,
  category,
}: {
  tip: string;
  category?: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950">
      <Star className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
      <div>
        <p className="font-semibold text-yellow-800 dark:text-yellow-200">
          {category ? `Pro Tip: ${category}` : 'Pro Tip'}
        </p>
        <p className="text-yellow-700 dark:text-yellow-300">{tip}</p>
      </div>
    </div>
  );
}

/**
 * Step-by-Step Guide
 * Numbered steps that AI can extract for HowTo queries
 */
export function AIStepGuide({
  title,
  steps,
  totalTime,
}: {
  title: string;
  steps: { title: string; description: string; tip?: string }[];
  totalTime?: string;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: title,
            totalTime: totalTime || 'PT30M',
            step: steps.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.title,
              text: s.description,
            })),
          }),
        }}
      />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            {title}
          </CardTitle>
          {totalTime && (
            <p className="text-sm text-muted-foreground">
              Estimated time: {totalTime}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                  {step.tip && (
                    <p className="mt-1 text-sm text-primary">💡 {step.tip}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </>
  );
}

export default {
  QuickAnswer,
  AIDefinition,
  CitableStat,
  ExpertQuoteBlock,
  KeyTakeaways,
  AIComparisonMatrix,
  ProTipBlock,
  AIStepGuide,
};
