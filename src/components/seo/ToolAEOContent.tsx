'use client';

/**
 * ToolAEOContent Component
 * Renders AEO-optimized content blocks for tool pages
 * Designed for AI extraction (Google SGE, Featured Snippets) and Voice Search
 */

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Lightbulb,
  Volume2,
  HelpCircle,
  CheckCircle,
  Table,
} from 'lucide-react';
import { getToolAEOConfig } from '@/lib/seo/tool-aeo-optimization';

interface ToolAEOContentProps {
  toolSlug: string;
  className?: string;
}

/**
 * TL;DR Section - Target for direct answer snippets
 */
function TLDRSection({ tldr }: { tldr: string }) {
  return (
    <section
      className="tool-tldr mb-8 rounded-xl border-l-4 border-indigo-500 bg-indigo-50/50 p-6 dark:border-indigo-400 dark:bg-indigo-950/20"
      aria-labelledby="tldr-heading"
    >
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
        <div>
          <h3
            id="tldr-heading"
            className="mb-2 text-lg font-bold text-indigo-900 dark:text-indigo-100"
          >
            Quick Summary
          </h3>
          <p className="text-muted-foreground">{tldr}</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Key Takeaways - Target for bulleted list snippets
 */
function KeyTakeawaysSection({ takeaways }: { takeaways: string[] }) {
  return (
    <section
      className="key-takeaways mb-8 rounded-xl bg-muted/30 p-6"
      aria-labelledby="takeaways-heading"
    >
      <h3
        id="takeaways-heading"
        className="mb-4 flex items-center gap-2 text-lg font-bold"
      >
        <CheckCircle className="h-5 w-5 text-green-600" />
        Key Features
      </h3>
      <ul className="grid gap-2 sm:grid-cols-2">
        {takeaways.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Featured Snippet Table - Target for table snippets
 */
function FeaturedTable({ data }: { data: { row: string; value: string }[] }) {
  return (
    <section className="mb-8 overflow-hidden rounded-xl border bg-background">
      <div className="border-b bg-muted/50 px-6 py-3">
        <h3 className="flex items-center gap-2 font-semibold">
          <Table className="h-4 w-4" />
          Quick Reference
        </h3>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b last:border-0 hover:bg-muted/20"
            >
              <td className="w-1/3 px-6 py-3 font-medium text-muted-foreground">
                {item.row}
              </td>
              <td className="px-6 py-3 font-semibold">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

/**
 * Voice Search Section - Target for voice assistants
 */
function VoiceSearchSection({
  answers,
}: {
  answers: { question: string; speakableAnswer: string }[];
}) {
  return (
    <section
      className="voice-answers mb-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 dark:from-blue-950/20 dark:to-cyan-950/20"
      aria-labelledby="voice-heading"
    >
      <h3
        id="voice-heading"
        className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800 dark:text-blue-300"
      >
        <Volume2 className="h-5 w-5" />
        Common Questions
      </h3>
      <div className="space-y-4">
        {answers.map((item, index) => (
          <div key={index}>
            <p className="mb-1 font-medium text-foreground">
              "{item.question}"
            </p>
            <p className="text-sm text-muted-foreground">
              → {item.speakableAnswer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * People Also Ask Section - Target for "People also ask" accordion
 */
function PeopleAlsoAskSection({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  return (
    <section
      className="people-also-ask mb-8"
      aria-labelledby="paa-heading"
    >
      <h3
        id="paa-heading"
        className="mb-4 flex items-center gap-2 text-lg font-bold"
      >
        <HelpCircle className="h-5 w-5 text-purple-600" />
        People Also Ask
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        {questions.map((paa, index) => (
          <AccordionItem
            key={index}
            value={`paa-${index}`}
          >
            <AccordionTrigger className="text-left font-medium">
              {paa.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {paa.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

/**
 * Main ToolAEOContent Component
 */
export function ToolAEOContent({
  toolSlug,
  className = '',
}: ToolAEOContentProps) {
  const config = getToolAEOConfig(toolSlug);

  if (!config) {
    return null;
  }

  return (
    <div className={`tool-aeo-content mt-8 ${className}`}>
      {/* 1. TL;DR Summary */}
      <TLDRSection tldr={config.tldr} />

      {/* 2. Key Takeaways */}
      <KeyTakeawaysSection takeaways={config.keyTakeaways} />

      {/* 3. Comparison Table (if available) */}
      {config.featuredSnippetContent?.table && (
        <FeaturedTable data={config.featuredSnippetContent.table} />
      )}

      {/* 4. Voice Search Answers */}
      {config.voiceSearchAnswers?.length > 0 && (
        <VoiceSearchSection answers={config.voiceSearchAnswers} />
      )}

      {/* 5. People Also Ask */}
      {config.paaQuestions?.length > 0 && (
        <PeopleAlsoAskSection questions={config.paaQuestions} />
      )}

      {/* Hidden structured data hints for AI crawlers */}
      <div
        className="sr-only"
        aria-hidden="true"
      >
        <p data-ai-primary-answer>{config.primaryAnswer}</p>
        <p data-target-audience>{config.targetAudience.join(', ')}</p>
        <p data-topic>{config.primaryTopic}</p>
      </div>
    </div>
  );
}

export default ToolAEOContent;
