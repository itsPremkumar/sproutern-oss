'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  BrainCircuit,
  CheckCircle2,
  Bot,
  Sparkles,
  Workflow,
  Zap,
  Network,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export default function AIIntegrationPage() {
  const schemas = getPageSchema('servicesAIIntegration');

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
              Custom <span className="text-primary">AI & LLM Integration</span>{' '}
              Services
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300 md:text-2xl">
              Supercharge your operations with GenAI. From integrating OpenAI
              models to building autonomous GenAI agents and complex RAG
              pipelines.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 bg-primary px-8 text-lg font-bold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/contact?service=ai-integration">
                  Discuss AI Solutions
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-slate-700 px-8 text-lg text-white hover:bg-slate-800"
                asChild
              >
                <a href="#services">Our Capabilities</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/20 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/2 rounded-full bg-secondary/20 opacity-50 blur-3xl" />
      </section>

      {/* Services Section */}
      <section
        className="bg-white py-20"
        id="services"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our AI Engineering Capabilities
            </h2>
            <p className="text-lg text-slate-600">
              We leverage cutting edge AI models like GPT-4o, Claude 3.5 Sonnet,
              and open source LLMs to deliver real business value.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>RAG Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Retrieval-Augmented Generation architectures allowing AI
                  models to accurately answer questions based exclusively on
                  your private company data and documents.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Autonomous Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Intelligent agents capable of planning, executing autonomous
                  steps, calling external APIs, and completing multi-step
                  workflows with minimal human oversight.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>LLM Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Direct API integrations of OpenAI, Anthropic, or local
                  open-source models straight into your existing software
                  products and dashboards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Future-Proof Your Business with AI
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Don't get left behind. Contact us to explore how custom AI solutions
            can save you thousands of hours.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="h-14 px-8 text-lg font-bold"
            asChild
          >
            <Link href="/contact?service=ai-integration">
              Get a Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
