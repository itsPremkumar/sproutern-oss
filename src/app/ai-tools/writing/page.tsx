/**
 * AI Writing Tools Category Page
 * Lists all AI tools in the writing category
 */

import { Metadata } from 'next';
import Link from 'next/link';
import {
  PenTool,
  Star,
  ArrowRight,
  Check,
  FileText,
  MessageSquare,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  PartnerCTA,
  QuickCompare,
  ComparisonTable,
} from '@/components/partner';
import { AI_TOOLS, getToolsByCategory } from '@/data/ai-tools/ai-tools-data';
import { getCategoryBySlug } from '@/data/ai-tools/categories';

export const metadata: Metadata = {
  title: 'Best AI Writing Tools 2025 - Content Creation & Copywriting',
  description:
    'Discover the best AI writing tools for content creation, copywriting, and blogging. Compare ChatGPT, Jasper, Grammarly, and more. Find your perfect AI writing assistant.',
  keywords: [
    'AI writing tools',
    'AI content writer',
    'AI copywriting',
    'best AI writer',
    'AI blog writer',
    'AI article generator',
  ],
};

export default function AIWritingToolsPage() {
  const category = getCategoryBySlug('writing');
  const writingTools = getToolsByCategory('writing');
  const chatbots = AI_TOOLS.filter((t) => t.category === 'chatbots');

  // Combine writing tools and chatbots (which are also used for writing)
  const allWritingTools = [
    ...writingTools,
    ...chatbots.filter((t) => !writingTools.some((w) => w.id === t.id)),
  ];

  const freeWritingTools = allWritingTools.filter((t) => t.pricing.freeTier);

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link
          href="/ai-tools"
          className="hover:text-primary"
        >
          AI Tools
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Writing Tools</span>
      </nav>

      {/* Hero */}
      <section className="mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          <PenTool className="h-4 w-4" />
          Writing Category
        </div>
        <h1 className="mb-4 text-4xl font-extrabold">
          Best AI Writing Tools 2025
        </h1>
        <p className="mb-6 max-w-2xl text-xl text-muted-foreground">
          {category?.description ||
            'AI-powered writing assistants for content creation, copywriting, and more.'}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{allWritingTools.length} tools</span>
          <span>•</span>
          <span>{freeWritingTools.length} free options</span>
        </div>
      </section>

      {/* Top Picks */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">🏆 Top Writing Tools</h2>
        <QuickCompare tools={allWritingTools.slice(0, 6)} />
      </section>

      {/* Comparison Table */}
      {allWritingTools.length >= 2 && (
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">
            📊 Side-by-Side Comparison
          </h2>
          <ComparisonTable tools={allWritingTools.slice(0, 4)} />
        </section>
      )}

      {/* All Writing Tools */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">All AI Writing Tools</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allWritingTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/ai-tools/${tool.slug}`}
            >
              <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle>{tool.name}</CardTitle>
                    {tool.pricing.freeTier && (
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                        FREE
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                    {tool.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tool.rating}</span>
                    </div>
                    <span className="text-sm text-primary">
                      {tool.pricing.freeTier
                        ? 'Free'
                        : `From ${tool.pricing.startingPrice}`}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Writing Use Cases</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Blog Posts', icon: FileText },
            { title: 'Social Media', icon: MessageSquare },
            { title: 'Email Marketing', icon: PenTool },
            { title: 'Academic Writing', icon: FileText },
            { title: 'Copywriting', icon: PenTool },
            { title: 'Documentation', icon: FileText },
          ].map((useCase) => (
            <Card key={useCase.title}>
              <CardContent className="flex items-center gap-4 p-4">
                <useCase.icon className="h-6 w-6 text-primary" />
                <span className="font-medium">{useCase.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Start Writing with AI Today</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <PartnerCTA
            href="https://chat.openai.com"
            variant="primary"
            size="lg"
            toolName="ChatGPT"
          >
            Try ChatGPT Free
          </PartnerCTA>
          <Link href="/ai-tools">
            <Button
              variant="outline"
              size="lg"
            >
              Browse All Categories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
