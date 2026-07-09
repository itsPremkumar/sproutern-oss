'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Smartphone,
  CheckCircle2,
  Zap,
  Palette,
  Layers,
  Code,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export default function MobileAppDevelopmentPage() {
  const schemas = getPageSchema('servicesMobileAppDevelopment');

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
              Cross-Platform <span className="text-primary">Mobile App</span>{' '}
              Development
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300 md:text-2xl">
              Launch beautiful, high-performance mobile apps for iOS and Android
              simultaneously using React Native. Reaching your users anywhere.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 bg-primary px-8 text-lg font-bold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/contact?service=mobile-app-development">
                  Start Your App Project
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-slate-700 px-8 text-lg text-white hover:bg-slate-800"
                asChild
              >
                <a href="#benefits">See the Benefits</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/20 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/2 rounded-full bg-secondary/20 opacity-50 blur-3xl" />
      </section>

      {/* Benefits Section */}
      <section
        className="bg-white py-20"
        id="benefits"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why React Native?
            </h2>
            <p className="text-lg text-slate-600">
              We leverage React Native to deliver native-quality mobile
              experiences while significantly reducing development time and
              costs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Faster Time to Market</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Shared codebase means we build once and deploy to both the
                  Apple App Store and Google Play Store simultaneously.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Native Look & Feel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  React Native uses native UI components, ensuring your app
                  feels 100% natural on both iOS and Android platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 max-w-fit items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cost Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Cut development and maintenance costs. You only need one team
                  to manage both iOS and Android applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Development Process
            </h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-6">
            {[
              'Requirements Gathering & UI/UX Design',
              'Cross-Platform Architecture Setup',
              'Iterative Agile Development & Syncs',
              'Native API Integrations (Camera, GPS, Push Notifications)',
              'Rigorous Testing (Emulators & Physical Devices)',
              'App Store Sytle Verification & Submission (Apple & Google Play)',
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-lg border border-slate-100 bg-white p-4 shadow-sm"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  {idx + 1}
                </div>
                <span className="text-lg font-medium text-slate-700">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Let's Build Your Mobile App
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Ready to bring your mobile app vision to life? Let's discuss your
            requirements.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="h-14 px-8 text-lg font-bold"
            asChild
          >
            <Link href="/contact?service=mobile-app-development">
              Contact Us Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
