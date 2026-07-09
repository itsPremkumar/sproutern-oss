/**
 * Free AI Tools Landing Page
 * Curated list of the best free AI tools
 */

import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Check,
  Star,
  ArrowRight,
  Gift,
  Zap,
  Shield,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PartnerCTA, QuickCompare } from '@/components/partner';
import { AI_TOOLS } from '@/data/ai-tools/ai-tools-data';

export const metadata: Metadata = {
  title: 'Best Free AI Tools 2025 - No Credit Card Required',
  description:
    'Discover the best free AI tools in 2025. ChatGPT, Claude, Canva AI, Grammarly, and more - powerful AI without paying a dime. Updated daily.',
  keywords: [
    'free AI tools',
    'best free AI',
    'free ChatGPT',
    'free AI writing',
    'free AI image generator',
    'AI tools no credit card',
  ],
};

export default function FreeAIToolsPage() {
  const freeTools = AI_TOOLS.filter((t) => t.pricing.freeTier);

  // Group by category
  const toolsByCategory = freeTools.reduce(
    (acc, tool) => {
      const cat = tool.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(tool);
      return acc;
    },
    {} as Record<string, typeof freeTools>,
  );

  return (
    <div className="container py-8">
      {/* Hero */}
      <section className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 text-sm font-semibold text-green-700 dark:from-green-900 dark:to-emerald-900 dark:text-green-300">
          <Gift className="h-4 w-4" />
          100% Free
        </div>
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Best Free AI Tools in 2025
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
          Powerful AI tools that don&apos;t cost a penny. No credit card, no
          hidden fees - just free AI to boost your productivity.
        </p>

        <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold">{freeTools.length} Free Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="font-semibold">No Credit Card</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            <span className="font-semibold">Verified Free</span>
          </div>
        </div>
      </section>

      {/* Top Free Tools */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">🏆 Top Free AI Tools</h2>
        <QuickCompare tools={freeTools.slice(0, 6)} />
      </section>

      {/* Free Tools by Category */}
      {Object.entries(toolsByCategory).map(([category, tools]) => (
        <section
          key={category}
          className="mb-12"
        >
          <h2 className="mb-6 text-xl font-bold capitalize">
            Free {category} Tools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={`/ai-tools/${tool.slug}`}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                        FREE
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                      {tool.shortDescription}
                    </p>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tool.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({tool.reviewCount.toLocaleString()})
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Are these AI tools really free?',
              a: "Yes! All tools listed here have generous free tiers. Some offer limited usage on free plans, but they're enough for personal and educational use.",
            },
            {
              q: 'Do I need a credit card to sign up?',
              a: "Most tools on this list don't require a credit card for the free tier. We've verified each one.",
            },
            {
              q: "What's the best free AI for writing?",
              a: 'ChatGPT (free tier with GPT-3.5) and Claude are excellent for writing. Grammarly offers free grammar checking.',
            },
          ].map((faq) => (
            <Card key={faq.q}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Start Using Free AI Today</h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
          No excuses - these powerful AI tools are completely free to try.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <PartnerCTA
            href="https://chat.openai.com"
            variant="primary"
            size="lg"
            icon="sparkles"
            toolName="ChatGPT"
          >
            Try ChatGPT Free
          </PartnerCTA>
          <Link href="/ai-tools">
            <Button
              variant="outline"
              size="lg"
            >
              Browse All Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
