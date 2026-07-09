'use client';

/**
 * Game SEO Content Component
 * Renders comprehensive, SEO-optimized content for game pages
 */

import React from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  GraduationCap,
  Brain,
  Target,
  BookOpen,
  Users,
  Lightbulb,
  CheckCircle,
  ChevronRight,
  Share2,
} from 'lucide-react';
import { EnhancedGameSEO, gameCategories } from '@/lib/seo/game-seo-content';
import { allGamesSEO } from '@/lib/seo/games-seo';
import { ShareButtons } from '@/components/social/ShareButtons';
import { GameAEOContent } from './GameAEOContent';
import { GameGEOContent } from './GameGEOContent';

/**
 * Parse markdown-style formatting into React elements
 * Handles **bold** text and • bullet points
 */
function parseMarkdown(text: string): React.ReactNode {
  // Split by **text** pattern to extract bold sections
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    // Check if this part is bold (wrapped in **)
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return (
        <strong
          key={index}
          className="font-semibold text-foreground"
        >
          {boldText}
        </strong>
      );
    }
    return part;
  });
}

/**
 * Render a paragraph with markdown parsing
 */
function MarkdownParagraph({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return <p className={className}>{parseMarkdown(children)}</p>;
}

interface GameSEOContentProps {
  gameSlug: string;
  enhancedContent: EnhancedGameSEO;
}

export function GameSEOContent({
  gameSlug,
  enhancedContent,
}: GameSEOContentProps) {
  const baseGame = allGamesSEO[gameSlug];
  const category = baseGame?.category;
  const categoryInfo = category ? gameCategories[category] : null;
  const gameTitle = baseGame?.title?.split(' - ')[0] || 'Brain Training Game';

  return (
    <div className="mt-16 space-y-12">
      {/* Social Share Section */}
      <section className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 p-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Share2 className="h-5 w-5 text-primary" />
          <span className="font-medium">
            Found this game helpful? Share it with friends!
          </span>
        </div>
        <ShareButtons
          title={`Play ${gameTitle} - Free Brain Training Game`}
          description={
            baseGame?.description || 'Train your brain with free online games'
          }
          hashtags={
            [
              'BrainTraining',
              'FreeGames',
              'Sproutern',
              category?.charAt(0).toUpperCase() + category?.slice(1),
            ].filter(Boolean) as string[]
          }
          className="flex-wrap justify-center"
        />
      </section>

      {/* GEO Targeted Content */}
      <GameGEOContent
        gameSlug={gameSlug}
        category={category || 'memory'}
      />

      {/* AEO Optimized Content */}
      <GameAEOContent gameSlug={gameSlug} />

      {/* What is This Game Section */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="flex items-center gap-3 text-2xl font-bold">
          <BookOpen className="h-6 w-6 text-primary" />
          What is {baseGame?.title?.split(' - ')[0]}?
        </h2>
        <div className="leading-relaxed text-muted-foreground">
          {enhancedContent.content.introduction
            .split('\n\n')
            .map((para, idx) => (
              <MarkdownParagraph key={idx}>{para}</MarkdownParagraph>
            ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="rounded-2xl bg-muted/30 p-8">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
          <Target className="h-6 w-6 text-primary" />
          How It Works
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {enhancedContent.content.howItWorks.split('\n\n').map((para, idx) => (
            <MarkdownParagraph
              key={idx}
              className="text-muted-foreground"
            >
              {para}
            </MarkdownParagraph>
          ))}
        </div>

        {/* How to Play Steps */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {enhancedContent.howToSteps.map((step) => (
            <div
              key={step.step}
              className="flex gap-4 rounded-xl bg-background p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.step}
              </div>
              <div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cognitive Skills Section */}
      <section>
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
          <Brain className="h-6 w-6 text-primary" />
          Cognitive Skills You'll Develop
        </h2>
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {enhancedContent.skillsGained.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-3"
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {enhancedContent.content.cognitiveSkills
            .split('\n\n')
            .map((para, idx) => (
              <MarkdownParagraph
                key={idx}
                className="text-muted-foreground"
              >
                {para}
              </MarkdownParagraph>
            ))}
        </div>
      </section>

      {/* Exam Preparation Benefits */}
      <section className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
          <GraduationCap className="h-6 w-6 text-primary" />
          Exam Preparation Benefits
        </h2>

        {/* Exam Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {enhancedContent.examBenefits.map((exam, idx) => (
            <span
              key={idx}
              className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              {exam}
            </span>
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {enhancedContent.content.examPreparation
            .split('\n\n')
            .map((para, idx) => (
              <MarkdownParagraph
                key={idx}
                className="text-muted-foreground"
              >
                {para}
              </MarkdownParagraph>
            ))}
        </div>
      </section>

      {/* Who Should Play */}
      <section>
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
          <Users className="h-6 w-6 text-primary" />
          Who Should Play This Game?
        </h2>
        <div className="mb-4 flex flex-wrap gap-3">
          <span className="rounded-lg bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Age: {enhancedContent.targetAgeRange}
          </span>
          {enhancedContent.educationalLevel.map((level, idx) => (
            <span
              key={idx}
              className="rounded-lg bg-green-100 px-3 py-1.5 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300"
            >
              {level}
            </span>
          ))}
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {enhancedContent.content.whoShouldPlay
            .split('\n\n')
            .map((para, idx) => (
              <MarkdownParagraph
                key={idx}
                className="text-muted-foreground"
              >
                {para}
              </MarkdownParagraph>
            ))}
        </div>
      </section>

      {/* Scientific Basis */}
      <section className="rounded-2xl bg-muted/30 p-8">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
          <Lightbulb className="h-6 w-6 text-primary" />
          The Science Behind It
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {enhancedContent.content.scientificBasis
            .split('\n\n')
            .map((para, idx) => (
              <MarkdownParagraph
                key={idx}
                className="text-muted-foreground"
              >
                {para}
              </MarkdownParagraph>
            ))}
        </div>
      </section>

      {/* Pro Tips */}
      {enhancedContent.content.proTips &&
        enhancedContent.content.proTips.length > 0 && (
          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
              <Target className="h-6 w-6 text-primary" />
              Pro Tips for Better Scores
            </h2>
            <div className="grid gap-3">
              {enhancedContent.content.proTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 rounded-lg bg-muted/50 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {idx + 1}
                  </span>
                  <p className="text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      {/* People Also Ask (PAA) Section */}
      <section id="faq">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
          <BookOpen className="h-6 w-6 text-primary" />
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {enhancedContent.paaQuestions.map((qa, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
            >
              <AccordionTrigger className="text-left font-medium">
                {qa.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {qa.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Related Games */}
      <section className="rounded-2xl bg-muted/30 p-8">
        <h2 className="mb-6 text-2xl font-bold">
          Related Brain Training Games
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enhancedContent.relatedGames.slice(0, 6).map((relatedSlug) => {
            const relatedGame = allGamesSEO[relatedSlug];
            if (!relatedGame) return null;
            return (
              <Link
                key={relatedSlug}
                href={`/games/${relatedSlug}`}
                className="group flex items-center justify-between rounded-xl bg-background p-4 transition-all hover:shadow-md"
              >
                <div>
                  <h3 className="font-semibold group-hover:text-primary">
                    {relatedGame.title.split(' - ')[0]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {relatedGame.category.charAt(0).toUpperCase() +
                      relatedGame.category.slice(1)}{' '}
                    • {relatedGame.difficulty}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            );
          })}
        </div>

        {/* Category Link */}
        {categoryInfo && (
          <div className="mt-6 text-center">
            <Link
              href={categoryInfo.hubUrl}
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View all {categoryInfo.name}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default GameSEOContent;
