import React from 'react';
import { Metadata } from 'next';
import { ServicePricingCard } from '@/components/services/ServicePricingCard';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Rocket, Server, LineChart } from 'lucide-react';
import Link from 'next/link';

import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('services');

export default function ServicesPage() {
  const schemas = getPageSchema('services');
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div
          className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] absolute inset-0 bg-[bottom_1px_center] dark:border-b dark:border-slate-800 dark:bg-bottom"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black)',
          }}
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-8 text-center">
            <div className="inline-flex items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Available for Hire (1 Spot Left This Month)
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Fast, Scalable MVPs Built by a{' '}
              <span className="text-primary">Solo Developer</span>.
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
              I build production-ready applications for startups. Skip the
              agency bloat and communicate directly with the engineer building
              your product using Next.js and Firebase.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                asChild
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="#services">View Service Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        id="services"
        className="bg-muted/40 py-20 dark:bg-slate-900/40"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Productized Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Fixed scoping, no billing surprises. Delivered on time.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 place-items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <ServicePricingCard
              title="Technical SEO Audit"
              description="A complete teardown and implementation plan to fix your organic traffic using Next.js specific strategies."
              price="$500"
              features={[
                'Comprehensive Lighthouse & Speed Audit',
                'Schema Markup (JSON-LD) implementation guide',
                'IndexNow & Server-Side Rendering setup',
                'Actionable 10-page implementation PDF',
                '30-minute consultation call',
              ]}
              ctaText="Book Audit"
              ctaLink="/services/technical-seo-audit"
            />

            {/* Service 2 */}
            <ServicePricingCard
              title="30-Day Startup MVP"
              description="From idea to production in 30 days. Perfect for early-stage founders needing a robust web app to test traction."
              price="$3,500"
              isPopular={true}
              features={[
                'Full Stack Next.js & Firebase Build',
                'Authentication & Database Setup',
                'Responsive Tailwind/Shadcn UI Design',
                'Vercel or Firebase Hosting Deployment',
                '30 Days of post-launch bug fixes',
              ]}
              ctaText="Apply for Build Slot"
              ctaLink="/services/mvp-development"
            />

            {/* Service 3 */}
            <ServicePricingCard
              title="Fractional CTO"
              description="Technical leadership without a full-time hire. I review code, manage freelance teams, and set architecture."
              price="$1,500"
              features={[
                '10 Hours of dedicated work per week',
                'Weekly Founder Sync Call',
                'Code Reviews & Pipeline Management',
                'Tech Stack (Next.js/React) Architecture',
                'Priority Slack/Email Support',
              ]}
              ctaText="Discuss Retainer"
              ctaLink="/services/fractional-cto"
            />

            {/* Service 4 */}
            <ServicePricingCard
              title="Custom Web App Development"
              description="Scalable, secure, and blazing-fast web applications built with Next.js, React, and modern backends."
              price="Custom Quote"
              features={[
                'Full-Stack Next.js or React Architecture',
                'SQL/NoSQL Database & Auth Setup',
                'Responsive, Mobile-First UI/UX',
                'Performance & SEO Optimization',
                'Vercel/AWS Cloud Deployment',
              ]}
              ctaText="Discuss Project"
              ctaLink="/services/web-development"
            />

            {/* Service 5 */}
            <ServicePricingCard
              title="Mobile App Development"
              description="Cross-platform iOS and Android applications built natively with React Native for maximum performance."
              price="Custom Quote"
              features={[
                'iOS & Android App from one codebase',
                'React Native / Expo Architecture',
                'Native Device Features & APIs',
                'App Store & Play Store Publishing',
                'Real-time Backend Integration',
              ]}
              ctaText="Start App Build"
              ctaLink="/services/mobile-app-development"
            />

            {/* Service 6 */}
            <ServicePricingCard
              title="AI & LLM Integration"
              description="Supercharge your product with GenAI. From OpenAI integrations to autonomous agents and RAG systems."
              price="Custom Quote"
              features={[
                'OpenAI / Claude API Integrations',
                'Custom RAG (Retrieval-Augmented Gen)',
                'Autonomous AI Workflows',
                'Vector Databases Setup',
                'Prompt Engineering & Fine-tuning',
              ]}
              ctaText="Explore AI Solutions"
              ctaLink="/services/ai-integration"
            />

            {/* Service 7 */}
            <ServicePricingCard
              title="MCP Server Development"
              description="Connect private enterprise data to AI assistants securely through custom Model Context Protocol servers."
              price="Custom Quote"
              features={[
                'Custom MCP Server Architecture',
                'Secure DB Connections (SQL/NoSQL)',
                'Claude Desktop App Integration',
                'Local & Cloud Managed Deployment',
                'Read/Write AI Tooling Capabilities',
              ]}
              ctaText="Build MCP Server"
              ctaLink="/services/mcp-development"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="border-y border-border bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-10 text-2xl font-bold">
            Built on modern, scalable infrastructure
          </h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-70 md:gap-16">
            <div className="flex flex-col items-center gap-2">
              <Code2 className="h-8 w-8 text-foreground" />
              <span className="text-sm font-semibold">
                Next.js (App Router)
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <LineChart className="h-8 w-8 text-foreground" />
              <span className="text-sm font-semibold">Programmatic SEO</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Server className="h-8 w-8 text-foreground" />
              <span className="text-sm font-semibold">
                Firebase / Serverless
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Rocket className="h-8 w-8 text-foreground" />
              <span className="text-sm font-semibold">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ />
    </div>
  );
}
