'use client';

/**
 * Tool SEO Content Component
 * Renders comprehensive, SEO-optimized content for tool pages
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
  Lightbulb,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Settings,
  Target,
  Users,
  ChevronRight,
  Share2,
} from 'lucide-react';
import { EnhancedToolSEO, toolCategories } from '@/lib/seo/tool-seo-content';
import { ShareButtons } from '@/components/social/ShareButtons';
import { SoftwareApplicationSchema } from './SoftwareApplicationSchema';
import { ToolAEOContent } from './ToolAEOContent';
import { ToolGEOContent } from './ToolGEOContent';

interface ToolSEOContentProps {
  toolSlug: string;
  enhancedContent: EnhancedToolSEO;
}

export function ToolSEOContent({
  toolSlug,
  enhancedContent,
}: ToolSEOContentProps) {
  // Infer title from props or context
  const toolTitle = toolSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="mt-16 space-y-12">
      {/* Inject Enhanced Schema */}
      <SoftwareApplicationSchema
        name={toolTitle}
        description={enhancedContent.content.introduction.substring(0, 160)}
        url={`https://www.sproutern.com/tools/${toolSlug}`}
        applicationCategory="UtilityApplication"
        slug={toolSlug}
        howToSteps={enhancedContent.howToSteps}
      />

      {/* Social Share Section */}
      <section className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 p-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Share2 className="h-5 w-5 text-primary" />
          <span className="font-medium">
            Find this tool useful? Share it with your network!
          </span>
        </div>
        <ShareButtons
          title={`${toolTitle} - Free Online Tool | Sproutern`}
          description={
            enhancedContent.content.introduction.substring(0, 100) + '...'
          }
          hashtags={['Tools', 'Productivity', 'FreeTools', 'Sproutern']}
          className="flex-wrap justify-center"
        />
      </section>

      {/* GEO Targeted Content */}
      <ToolGEOContent toolSlug={toolSlug} />

      {/* AEO Optimized Content */}
      <ToolAEOContent toolSlug={toolSlug} />

      {/* Introduction */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="flex items-center gap-3 text-2xl font-bold">
          <BookOpen className="h-6 w-6 text-primary" />
          What is {toolTitle}?
        </h2>
        <div className="leading-relaxed text-muted-foreground">
          {enhancedContent.content.introduction
            .split('\n\n')
            .map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
        </div>
      </section>

      {/* How It Works & Steps */}
      <section className="rounded-2xl bg-muted/30 p-8">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
          <Settings className="h-6 w-6 text-primary" />
          How to Use {toolTitle}
        </h2>

        {/* Steps */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
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

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {enhancedContent.content.howItWorks.split('\n\n').map((para, idx) => (
            <p
              key={idx}
              className="text-muted-foreground"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Features & Benefits */}
      <section>
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
          <Target className="h-6 w-6 text-primary" />
          Why Use This Tool?
        </h2>
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {enhancedContent.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-3"
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {enhancedContent.content.benefits.split('\n\n').map((para, idx) => (
            <p
              key={idx}
              className="text-muted-foreground"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Use Cases & Audience */}
      <section className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
          <Users className="h-6 w-6 text-primary" />
          Who Is This For?
        </h2>

        {/* Audience Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {enhancedContent.targetAudience.map((audience, idx) => (
            <span
              key={idx}
              className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              {audience}
            </span>
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {enhancedContent.content.useCases.split('\n\n').map((para, idx) => (
            <p
              key={idx}
              className="text-muted-foreground"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Technology / Deep Dive */}
      {enhancedContent.content.technology && (
        <section className="rounded-2xl bg-muted/30 p-8">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Lightbulb className="h-6 w-6 text-primary" />
            Behind the Technology
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {enhancedContent.content.technology
              .split('\n\n')
              .map((para, idx) => (
                <p
                  key={idx}
                  className="text-muted-foreground"
                >
                  {para}
                </p>
              ))}
          </div>
        </section>
      )}

      {/* Pro Tips */}
      {enhancedContent.content.proTips &&
        enhancedContent.content.proTips.length > 0 && (
          <section>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
              <Target className="h-6 w-6 text-primary" />
              Tips for Best Results
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
          <HelpCircle className="h-6 w-6 text-primary" />
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

      {/* Related Tools */}
      <section className="rounded-2xl bg-muted/30 p-8">
        <h2 className="mb-6 text-2xl font-bold">Explore Related Tools</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enhancedContent.relatedTools.slice(0, 6).map((relatedSlug) => (
            <Link
              key={relatedSlug}
              href={`/tools/${relatedSlug}`}
              className="group flex items-center justify-between rounded-xl bg-background p-4 transition-all hover:shadow-md"
            >
              <div>
                <h3 className="font-semibold group-hover:text-primary">
                  {relatedSlug
                    .split('-')
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' ')}
                </h3>
                <p className="text-sm text-muted-foreground">Try this tool</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ToolSEOContent;
