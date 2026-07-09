/**
 * Individual AI Tool Page
 * Clean, credible design with honest reviews
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Star,
  Check,
  X,
  ExternalLink,
  ArrowLeft,
  Shield,
  Users,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AI_TOOLS,
  getToolBySlug,
  getToolsByCategory,
} from '@/data/ai-tools/ai-tools-data';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return { title: 'Tool Not Found' };
  }

  return {
    title: tool.seo.metaTitle,
    description: tool.seo.metaDescription,
    keywords: tool.seo.keywords,
    openGraph: {
      title: tool.seo.metaTitle,
      description: tool.seo.metaDescription,
      type: 'website',
      url: `https://www.sproutern.com/ai-tools/${tool.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return AI_TOOLS.map((tool) => ({ slug: tool.slug }));
}

export default async function AIToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = getToolsByCategory(tool.category)
    .filter((t) => t.id !== tool.id)
    .slice(0, 3);

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.longDescription,
    url: tool.website,
    applicationCategory: 'AIApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: tool.pricing.freeTier
        ? '0'
        : tool.pricing.startingPrice?.replace(/[^0-9.]/g, ''),
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating,
      reviewCount: tool.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const faqJsonLd = tool.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: tool.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="container py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                href="/ai-tools"
                className="hover:text-foreground"
              >
                AI Tools
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="capitalize">{tool.category}</span>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-foreground">{tool.name}</span>
            </div>
          </div>
        </div>

        <div className="container py-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-3xl font-bold text-primary">
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold lg:text-4xl">
                      {tool.name}
                    </h1>
                    <p className="capitalize text-muted-foreground">
                      {tool.category} Tool
                    </p>
                  </div>
                </div>

                {/* Rating & Trust */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{tool.rating}</span>
                    <span className="text-muted-foreground">
                      ({tool.reviewCount.toLocaleString()} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-green-600" />
                    Verified Tool
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Updated {tool.lastUpdated}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {tool.longDescription}
                </p>
              </div>

              {/* Best For */}
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">Best For</h2>
                <div className="flex flex-wrap gap-2">
                  {tool.bestFor.map((audience) => (
                    <span
                      key={audience}
                      className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {tool.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2"
                      >
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Pros & Cons */}
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <Check className="h-5 w-5" />
                      What We Like
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tool.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-2"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-500">
                      <X className="h-5 w-5" />
                      What Could Be Better
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tool.cons.map((con) => (
                        <li
                          key={con}
                          className="flex items-start gap-2"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ */}
              {tool.faqs && tool.faqs.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {tool.faqs.map((faq, index) => (
                        <div key={index}>
                          <h3 className="mb-2 font-semibold">{faq.question}</h3>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      {tool.pricing.freeTier ? (
                        <div className="mb-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          ✓ Free Tier Available
                        </div>
                      ) : null}
                      <p className="text-3xl font-bold">
                        {tool.pricing.freeTier
                          ? 'Free'
                          : tool.pricing.startingPrice}
                      </p>
                      {tool.pricing.freeTier && tool.pricing.startingPrice && (
                        <p className="text-sm text-muted-foreground">
                          Paid plans from {tool.pricing.startingPrice}
                        </p>
                      )}
                    </div>

                    {tool.pricing.plans && (
                      <div className="mb-6 space-y-3">
                        {tool.pricing.plans.map((plan) => (
                          <div
                            key={plan.name}
                            className="rounded-lg border p-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{plan.name}</span>
                              <span className="text-sm font-bold">
                                {plan.price}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <a
                      href={tool.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        className="w-full gap-2"
                        size="lg"
                      >
                        Try {tool.name}
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>

                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      Opens official website in new tab
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Category</dt>
                        <dd className="font-medium capitalize">
                          {tool.category}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Pricing Model</dt>
                        <dd className="font-medium capitalize">
                          {tool.pricing.model}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Rating</dt>
                        <dd className="flex items-center gap-1 font-medium">
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                          {tool.rating}/5
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Reviews</dt>
                        <dd className="font-medium">
                          {tool.reviewCount.toLocaleString()}
                        </dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>

                {/* Related Tools */}
                {relatedTools.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Similar Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {relatedTools.map((related) => (
                          <Link
                            key={related.id}
                            href={`/ai-tools/${related.slug}`}
                            className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                              {related.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{related.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {related.pricing.freeTier
                                  ? 'Free'
                                  : related.pricing.startingPrice}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-12 border-t pt-8">
            <Link href="/ai-tools">
              <Button
                variant="ghost"
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
