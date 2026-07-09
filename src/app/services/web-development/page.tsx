'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Code2,
  CheckCircle2,
  Zap,
  Shield,
  MonitorSmartphone,
  LayoutTemplate,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export default function WebDevelopmentPage() {
  const schemas = getPageSchema('servicesWebDevelopment');

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
              Custom <span className="text-primary">Web Application</span>{' '}
              Development
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300 md:text-2xl">
              We build fast, scalable, and secure web applications using Next.js
              and React. Empower your business with enterprise-grade web
              solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 bg-primary px-8 text-lg font-bold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/contact?service=web-development">
                  Start Your Project
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-slate-700 px-8 text-lg text-white hover:bg-slate-800"
                asChild
              >
                <a href="#features">Explore Features</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/20 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/2 rounded-full bg-secondary/20 opacity-50 blur-3xl" />
      </section>

      {/* Value Proposition */}
      <section
        className="bg-white py-20"
        id="features"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Our Web Dev Services?
            </h2>
            <p className="text-lg text-slate-600">
              We don't just write code; we architect solutions that drive
              growth, ensure security, and provide exceptional user experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Built on Next.js, our applications leverage Server-Side
                  Rendering (SSR) and Static Site Generation (SSG) for unmatched
                  performance and core web vitals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Scalable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Enterprise-grade security practices and scalable cloud
                  architectures ensure your application grows seamlessly with
                  your user base.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <MonitorSmartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Flawless user experiences across all devices. We build
                  mobile-first, ensuring your web app looks and functions
                  perfectly everywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Our Modern Tech Stack
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: LayoutTemplate, name: 'Next.js 15' },
              { icon: Code2, name: 'React' },
              { icon: Code2, name: 'TypeScript' },
              { icon: LayoutTemplate, name: 'Tailwind CSS' },
              { icon: Database, name: 'PostgreSQL / Firebase' },
              { icon: Zap, name: 'Prisma ORM' },
              { icon: Shield, name: 'NextAuth' },
              { icon: Zap, name: 'Vercel / AWS' },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <tech.icon className="mb-3 h-10 w-10 text-primary" />
                <span className="font-medium text-slate-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Build Your Web App?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Let's discuss your project requirements and build a high-performance
            web application tailored to your needs.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="h-14 px-8 text-lg font-bold"
            asChild
          >
            <Link href="/contact?service=web-development">
              Get a Quote Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
