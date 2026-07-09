'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Server,
  CheckCircle2,
  Shield,
  Zap,
  Database,
  Globe,
  Network,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export default function MCPDevelopmentPage() {
  const schemas = getPageSchema('servicesMCPDevelopment');

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
              Custom <span className="text-primary">MCP Server</span>{' '}
              Development
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300 md:text-2xl">
              Connect your private data to AI assistants like Claude Desktop
              with custom Model Context Protocol (MCP) servers. Expert
              integration for deep, secure context.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 bg-primary px-8 text-lg font-bold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/contact?service=mcp-development">
                  Build Your MCP Server
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-slate-700 px-8 text-lg text-white hover:bg-slate-800"
                asChild
              >
                <a href="#what-is-mcp">Explain MCP</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/20 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/2 rounded-full bg-secondary/20 opacity-50 blur-3xl" />
      </section>

      {/* What is MCP Section */}
      <section
        className="bg-white py-20"
        id="what-is-mcp"
      >
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What is Model Context Protocol?
            </h2>
            <p className="text-lg text-slate-600">
              MCP is an open standard that allows AI assistants (like Claude) to
              securely connect to your organization's tools, databases, and
              APIs. It gives the AI "context" to do meaningful work without
              exposing sensitive data directly to the LLM provider.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Direct Data Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Allow your AI tools to query your PostgreSQL, MongoDB, or
                  Snowflake databases securely, keeping humans in the loop for
                  sensitive writes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Internal API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Expose bespoke internal tools to conversational interfaces.
                  The AI can view customer records, trigger workflows, and fetch
                  internal reports.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Total Control & Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The MCP server runs on your infrastructure. You control
                  exactly what data the AI can see and what actions it can take.
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
            Bridge the Gap Between Data and AI
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Ready to give your team unprecedented capabilities by connecting
            Claude to your internal systems?
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="h-14 px-8 text-lg font-bold"
            asChild
          >
            <Link href="/contact?service=mcp-development">
              Discuss Your MCP Strategy
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
