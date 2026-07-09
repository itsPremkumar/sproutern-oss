'use client';

/**
 * GameAEOContent Component
 * Renders AEO-optimized content blocks for game pages
 * Designed for AI extraction, voice search, and featured snippets
 */

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Lightbulb, Volume2, HelpCircle, CheckCircle } from 'lucide-react';
import {
  getGameAEOConfig,
  GameAEOConfig,
} from '@/lib/seo/game-aeo-optimization';

interface GameAEOContentProps {
  gameSlug: string;
  className?: string;
}

/**
 * TL;DR Section - Featured snippet target
 */
function TLDRSection({ tldr }: { tldr: string }) {
  return (
    <section
      className="game-tldr mb-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6"
      aria-labelledby="tldr-heading"
    >
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
        <div>
          <h3
            id="tldr-heading"
            className="mb-2 text-lg font-bold text-primary"
          >
            TL;DR
          </h3>
          <p className="text-muted-foreground">{tldr}</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Key Takeaways Section - List snippet target
 */
function KeyTakeawaysSection({ takeaways }: { takeaways: string[] }) {
  return (
    <section
      className="key-takeaways mb-8 rounded-xl bg-muted/50 p-6"
      aria-labelledby="takeaways-heading"
    >
      <h3
        id="takeaways-heading"
        className="mb-4 flex items-center gap-2 text-lg font-bold"
      >
        <CheckCircle className="h-5 w-5 text-green-600" />
        Key Takeaways
      </h3>
      <ul className="space-y-2">
        {takeaways.map((point, index) => (
          <li
            key={index}
            className="key-takeaway flex items-start gap-2 text-muted-foreground"
          >
            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {index + 1}
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Voice Search Section - Speakable content
 */
function VoiceSearchSection({
  answers,
}: {
  answers: { question: string; speakableAnswer: string }[];
}) {
  if (!answers || answers.length === 0) return null;

  return (
    <section
      className="voice-answers mb-8 rounded-xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-900 dark:bg-blue-950/20"
      aria-labelledby="voice-heading"
    >
      <h3
        id="voice-heading"
        className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-700 dark:text-blue-400"
      >
        <Volume2 className="h-5 w-5" />
        Quick Answers
      </h3>
      <div className="space-y-4">
        {answers.map((item, index) => (
          <div
            key={index}
            className="speakable-answer"
          >
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
 * People Also Ask Section - FAQ snippet target
 */
function PeopleAlsoAskSection({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  if (!questions || questions.length === 0) return null;

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
            className="border-b border-border/50"
          >
            <AccordionTrigger className="text-left font-medium hover:no-underline">
              {paa.question}
            </AccordionTrigger>
            <AccordionContent className="faq-answer text-muted-foreground">
              {paa.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

/**
 * Featured Snippet Target - Table format
 */
function ComparisonTable({ data }: { data: { row: string; value: string }[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section
      className="comparison-table mb-8"
      aria-labelledby="comparison-heading"
    >
      <h3
        id="comparison-heading"
        className="mb-4 text-lg font-bold"
      >
        Quick Reference
      </h3>
      <div className="overflow-hidden rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Level
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-t"
              >
                <td className="px-4 py-3 text-sm font-medium">{item.row}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/**
 * Main GameAEOContent Component
 */
export function GameAEOContent({
  gameSlug,
  className = '',
}: GameAEOContentProps) {
  const config = getGameAEOConfig(gameSlug);

  if (!config) {
    return null;
  }

  return (
    <div className={`game-aeo-content mt-12 ${className}`}>
      {/* TL;DR - Always show */}
      <TLDRSection tldr={config.tldr} />

      {/* Key Takeaways - Always show */}
      <KeyTakeawaysSection takeaways={config.keyTakeaways} />

      {/* Featured Snippet Table - Show if available */}
      {config.featuredSnippetContent?.table && (
        <ComparisonTable data={config.featuredSnippetContent.table} />
      )}

      {/* Voice Search Quick Answers */}
      <VoiceSearchSection answers={config.voiceSearchAnswers} />

      {/* People Also Ask FAQ */}
      <PeopleAlsoAskSection questions={config.paaQuestions} />

      {/* Hidden structured data for AI extraction */}
      <div
        className="sr-only"
        aria-hidden="true"
      >
        <p data-ai-answer>{config.primaryAnswer}</p>
        <p data-target-audience>{config.targetAudience.join(', ')}</p>
        <p data-primary-topic>{config.primaryTopic}</p>
      </div>
    </div>
  );
}

export default GameAEOContent;
