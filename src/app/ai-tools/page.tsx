/**
 * AI Tools Directory - Main Page
 * Curated AI tools for students and professionals
 */

import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Star,
  ArrowRight,
  GraduationCap,
  Zap,
  Shield,
  Users,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AI_TOOLS,
  getFeaturedTools,
  getPopularTools,
  getFreeTools,
  getToolsForStudents,
} from '@/data/ai-tools/ai-tools-data';
import { AI_TOOL_CATEGORIES } from '@/data/ai-tools/categories';

export const metadata: Metadata = {
  title: 'Best AI Tools for Students & Professionals 2024 | Sproutern',
  description:
    'Discover the best AI tools handpicked for students. Free AI writing assistants, presentation makers, coding helpers, and productivity apps. Honest reviews & comparisons.',
  keywords: [
    'ai tools for students',
    'free ai tools',
    'best ai apps',
    'ai writing tools',
    'ai study tools',
  ],
  openGraph: {
    title: 'Best AI Tools for Students 2024 | Free & Paid Options',
    description:
      'Curated collection of AI tools to boost your productivity. Perfect for students, researchers, and professionals.',
    type: 'website',
  },
};

export default function AIToolsPage() {
  const featuredTools = getFeaturedTools().slice(0, 6);
  const popularTools = getPopularTools();
  const freeTools = getFreeTools();
  const studentTools = getToolsForStudents();

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Tools Directory',
    description: 'Best AI tools curated for students and professionals',
    url: 'https://www.sproutern.com/ai-tools',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: AI_TOOLS.length,
      itemListElement: AI_TOOLS.slice(0, 10).map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: tool.name,
          description: tool.shortDescription,
          url: `https://www.sproutern.com/ai-tools/${tool.slug}`,
          applicationCategory: 'AI Tool',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: tool.rating,
            reviewCount: tool.reviewCount,
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Curated for Students & Professionals
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
                AI Tools That Actually{' '}
                <span className="text-primary">Help You Learn</span>
              </h1>

              <p className="mb-8 text-lg text-muted-foreground">
                We test and review AI tools so you don&apos;t waste time on bad
                ones. Every tool here is handpicked for quality, usefulness, and
                student-friendliness.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="#featured">
                  <Button
                    size="lg"
                    className="gap-2"
                  >
                    <Zap className="h-4 w-4" />
                    Browse Tools
                  </Button>
                </Link>
                <Link href="/ai-tools/best/students">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    For Students
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                {
                  icon: Shield,
                  label: 'Verified Tools',
                  value: `${AI_TOOLS.length}+`,
                },
                { icon: Star, label: 'Avg Rating', value: '4.7★' },
                { icon: Users, label: 'Users Trust Us', value: '50K+' },
                {
                  icon: CheckCircle,
                  label: 'Free Options',
                  value: `${freeTools.length}`,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border bg-card p-4 text-center"
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section
          id="featured"
          className="py-16"
        >
          <div className="container">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Top Rated AI Tools</h2>
                <p className="text-muted-foreground">
                  Highest rated by our community
                </p>
              </div>
              <Link href="/ai-tools/best/free">
                <Button
                  variant="ghost"
                  className="gap-2"
                >
                  See all free tools
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredTools.map((tool) => (
                <Card
                  key={tool.id}
                  className="group transition-all hover:shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{tool.name}</CardTitle>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {tool.category}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5 text-sm font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        {tool.rating}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                      {tool.shortDescription}
                    </p>

                    {/* Price Badge */}
                    <div className="mb-4">
                      {tool.pricing.freeTier ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          ✓ Free tier available
                        </span>
                      ) : (
                        <span className="text-sm font-medium">
                          From {tool.pricing.startingPrice}
                        </span>
                      )}
                    </div>

                    {/* Best For Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {tool.bestFor.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href={`/ai-tools/${tool.slug}`}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full"
                        >
                          Learn More
                        </Button>
                      </Link>
                      <a
                        href={tool.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full gap-2">
                          Try It
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-y bg-muted/30 py-16">
          <div className="container">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">Browse by Category</h2>
              <p className="text-muted-foreground">
                Find the perfect AI tool for your needs
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {AI_TOOL_CATEGORIES.slice(0, 8).map((category) => {
                const toolCount = AI_TOOLS.filter(
                  (t) => t.category === category.id,
                ).length;
                return (
                  <Link
                    key={category.id}
                    href={`/ai-tools/${category.slug}`}
                    className="group rounded-xl border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
                  >
                    <div className="mb-4 text-4xl">{category.icon}</div>
                    <h3 className="mb-1 font-semibold group-hover:text-primary">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {toolCount} tools
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Student Section */}
        <section className="py-16">
          <div className="container">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 lg:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-primary">
                  <GraduationCap className="h-4 w-4" />
                  Made for Students
                </div>

                <h2 className="mb-4 text-3xl font-bold">
                  Student-Friendly AI Tools
                </h2>

                <p className="mb-8 text-muted-foreground">
                  We prioritize tools with free tiers, student discounts, and
                  educational value. No overpriced subscriptions – just tools
                  that help you succeed.
                </p>

                <div className="mb-8 grid gap-4 text-left sm:grid-cols-3">
                  {[
                    {
                      title: 'Free Tiers',
                      desc: 'Most tools offer generous free plans',
                    },
                    {
                      title: 'Student Discounts',
                      desc: 'Many offer .edu discounts up to 50%',
                    },
                    {
                      title: 'Easy to Use',
                      desc: 'No technical skills required',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-lg bg-background/60 p-4"
                    >
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <Link href="/ai-tools/best/students">
                  <Button
                    size="lg"
                    className="gap-2"
                  >
                    View Student Tools
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All Tools Quick List */}
        <section className="border-t py-16">
          <div className="container">
            <div className="mb-10">
              <h2 className="text-3xl font-bold">All AI Tools</h2>
              <p className="text-muted-foreground">
                Complete directory of verified AI tools
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AI_TOOLS.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/ai-tools/${tool.slug}`}
                  className="flex items-center justify-between rounded-lg border p-4 transition-all hover:border-primary hover:bg-accent/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                      {tool.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-medium">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {tool.pricing.freeTier && (
                      <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Free
                      </span>
                    )}
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Simple CTA */}
        <section className="border-t bg-muted/30 py-12">
          <div className="container text-center">
            <p className="text-muted-foreground">
              Can&apos;t find what you need?{' '}
              <a
                href="mailto:hello@sproutern.com"
                className="font-medium text-primary hover:underline"
              >
                Request a tool review
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
