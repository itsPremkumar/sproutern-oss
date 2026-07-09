'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  LineChart,
  CheckCircle2,
  Search,
  Zap,
  Globe,
  BarChart,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export default function SEOAuditPage() {
  const schemas = getPageSchema('servicesSEO');

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Technical <span className="text-primary">SEO Audit</span> for
              Startups
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300 md:text-2xl">
              Stop guessing why your traffic is flat. Get a comprehensive
              technical audit tailored for Next.js applications and modern
              frontend stacks.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 bg-primary px-8 text-lg font-bold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/contact?service=seo">Book Your Audit</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-slate-700 px-8 text-lg text-white hover:bg-slate-800"
                asChild
              >
                <a href="#whats-included">See What's Included</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              Focusing on <span className="text-primary">Performance</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              I don't just find problems; I provide the specific code snippets
              and configuration changes needed to fix them.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Core Web Vitals',
                desc: 'LCP, FID, and CLS optimization. I analyze your waterfall and provide image, font, and script loading strategies.',
                icon: Zap,
              },
              {
                title: 'Indexability',
                desc: 'Sitemap optimization, Robots.txt, Canonical logic, and IndexNow integration to ensure Google finds your content.',
                icon: Search,
              },
              {
                title: 'Semantic HTML',
                desc: 'Reviewing heading hierarchy, ARIA labels, and structured data (JSON-LD) implementation for Rich Results.',
                icon: Globe,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-muted/30 p-8 transition-all hover:shadow-lg"
              >
                <item.icon className="mb-6 h-10 w-10 text-primary" />
                <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Card */}
      <section
        id="whats-included"
        className="bg-muted/10 py-20"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <Card className="overflow-hidden border-none shadow-2xl">
            <div className="bg-primary px-8 py-6 text-primary-foreground">
              <h2 className="text-2xl font-bold">The Complete Audit Package</h2>
            </div>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                    <BarChart className="h-5 w-5 text-primary" /> Analysis Phase
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Full crawl of up to 500 pages',
                      'Google Search Console error analysis',
                      'Competitor SEO benchmarking',
                      'Keyword gap analysis',
                      'Mobile usability check',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                    <Shield className="h-5 w-5 text-primary" /> Deliverables
                  </h3>
                  <ul className="space-y-4">
                    {[
                      '10+ Page Technical Audit PDF',
                      'Next.js specific code recommendations',
                      'Custom JSON-LD schema templates',
                      "Actionable 'Fix-it' priority list",
                      '30-minute implementation sync call',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-black md:text-5xl">
            Ready to Dominate <span className="text-primary">Search</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-300">
            Don't let technical debt hold back your growth. Get clarity on your
            SEO today.
          </p>
          <Button
            size="lg"
            className="h-16 bg-primary px-12 text-xl font-bold text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/contact?service=seo">Book Your Audit ($499)</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
