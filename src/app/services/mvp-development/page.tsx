'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Rocket,
  CheckCircle2,
  Zap,
  Shield,
  Code,
  Layout,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export default function MVPDevelopmentPage() {
  const schemas = getPageSchema('servicesMVP');

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
              30-Day Startup <span className="text-primary">MVP Build</span>
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300 md:text-2xl">
              Why wait 6 months when you can launch in 4 weeks? I build
              production-ready, scalable MVPs tailored for founders who need to
              move fast.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 bg-primary px-8 text-lg font-bold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/contact?service=mvp">Book Your MVP Build</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-slate-700 px-8 text-lg text-white hover:bg-slate-800"
                asChild
              >
                <a href="#process">How It Works</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/20 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/2 rounded-full bg-secondary/20 opacity-50 blur-3xl" />
      </section>

      {/* Value Props Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-muted/30 p-8">
              <Zap className="mb-6 h-10 w-10 text-primary" />
              <h3 className="mb-4 text-xl font-bold">Speed to Market</h3>
              <p className="text-muted-foreground">
                Don't over-engineer. I focus on the core value proposition that
                allows you to start collecting user feedback immediately.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-muted/30 p-8">
              <Shield className="mb-6 h-10 w-10 text-primary" />
              <h3 className="mb-4 text-xl font-bold">Scalable Foundation</h3>
              <p className="text-muted-foreground">
                Built with Next.js and Firebase/Supabase, your MVP won't need a
                rewrite when you hit your first 10,000 users.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-muted/30 p-8">
              <Code className="mb-6 h-10 w-10 text-primary" />
              <h3 className="mb-4 text-xl font-bold">Solo Dev Efficiency</h3>
              <p className="text-muted-foreground">
                No project managers or middlemen. You work directly with the
                developer building your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-muted/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              The Battle-Tested <span className="text-primary">Tech Stack</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              I use modern, high-performance tools that allow for rapid
              iteration without sacrificing quality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Frontend',
                items: [
                  'Next.js 15 (App Router)',
                  'React',
                  'TypeScript',
                  'Tailwind CSS',
                ],
                icon: Layout,
              },
              {
                title: 'Backend/DB',
                items: ['Firebase', 'Supabase', 'PostgreSQL', 'Edge Functions'],
                icon: Database,
              },
              {
                title: 'Authentication',
                items: ['Clerk', 'NextAuth.js', 'Firebase Auth'],
                icon: Shield,
              },
              {
                title: 'Payments/AI',
                items: [
                  'Stripe Integration',
                  'OpenAI / Claude API',
                  'LangChain',
                ],
                icon: Rocket,
              },
            ].map((col, idx) => (
              <Card
                key={idx}
                className="border-none bg-white shadow-md dark:bg-slate-900"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <col.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{col.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {col.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-3 w-3 text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="bg-background py-20 text-foreground"
      >
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-16 text-center text-3xl font-black md:text-5xl">
            The 4-Week <span className="text-primary">Process</span>
          </h2>

          <div className="space-y-12">
            {[
              {
                week: 'Week 1',
                title: 'Strategy & Design',
                desc: "We define the core features (the 'Minimum' in MVP) and map out the user experience and UI design.",
              },
              {
                week: 'Week 2',
                title: 'Core Development',
                desc: 'Setting up the database architecture, authentication, and building the primary functional components.',
              },
              {
                week: 'Week 3',
                title: 'Refinement & Integration',
                desc: 'Adding secondary features, styling, and integrating third-party APIs (Stripe, AI, Email).',
              },
              {
                week: 'Week 4',
                title: 'Testing & Launch',
                desc: 'Rigorous bug hunting, performance optimization, and finally deploying to production.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex gap-6 md:gap-10"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {idx + 1}
                  </div>
                  {idx < 3 && <div className="my-2 h-full w-0.5 bg-border" />}
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold">
                    {step.week}: {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-black md:text-5xl">
            Ready to Build Your <span className="text-primary">Vision</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-300">
            Currently accepting only 1 MVP project per month to ensure maximum
            focus and quality.
          </p>
          <Button
            size="lg"
            className="h-16 bg-primary px-12 text-xl font-bold text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/contact?service=mvp">Secure Your Spot</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
