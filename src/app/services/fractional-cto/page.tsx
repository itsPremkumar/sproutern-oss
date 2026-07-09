'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Users,
  CheckCircle2,
  Shield,
  TrendingUp,
  Users2,
  Code2,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export default function FractionalCTOPage() {
  const schemas = getPageSchema('servicesFractionalCTO');

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
              Fractional <span className="text-primary">CTO</span> Advisory
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300 md:text-2xl">
              High-level technical leadership for non-technical founders. From
              architecture review to team building—get the CTO experience
              without the full-time cost.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 bg-primary px-8 text-lg font-bold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/contact?service=cto">Book Strategy Call</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-slate-700 px-8 text-lg text-white hover:bg-slate-800"
                asChild
              >
                <a href="#how-i-help">How I Help Founders</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-20 text-foreground">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              Engineering <span className="text-primary">Leadership</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Scale your product and your team with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <TrendingUp className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Architecture Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Technical due diligence and roadmap planning to ensure your
                  stack can scale with your user growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <Users2 className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Team Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Screening developers, interviewing candidates, and setting up
                  engineering processes that work.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Code Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular code reviews, CI/CD pipeline setup, and ensuring best
                  practices across the codebase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Offering */}
      <section
        id="how-i-help"
        className="bg-muted/20 py-20"
      >
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-border bg-white p-10 shadow-xl dark:bg-slate-900 md:p-16">
            <h2 className="mb-10 text-center text-3xl font-black">
              Monthly Retainer Includes
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Weekly Strategy Call',
                  desc: '1-hour dedicated sync with founders to review roadmap and technical challenges.',
                },
                {
                  title: 'Technical Roadmap',
                  desc: 'A live document mapping out your tech milestones for the next 6-12 months.',
                },
                {
                  title: 'Hiring Advisory',
                  desc: 'I help you draft JDs and perform final-round technical interviews for key hires.',
                },
                {
                  title: 'On-Call Support',
                  desc: 'Priority access via Slack for urgent technical questions or outages.',
                },
                {
                  title: 'Architecture Reviews',
                  desc: 'Monthly deep-dives into your infrastructure to proactively find bottlenecks.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-10 text-center">
              <span className="text-2xl font-bold">$1,500 / month</span>
              <p className="mt-1 text-sm text-muted-foreground">
                Starting price • 10 hours/week allocation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-black md:text-5xl">
            Focus on Your <span className="text-primary">Business</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-300">
            Let an expert handle the technical heavy lifting while you focus on
            sales and growth.
          </p>
          <Button
            size="lg"
            className="h-16 bg-primary px-12 text-xl font-bold text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/contact?service=cto">Apply for CTO Retainer</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
