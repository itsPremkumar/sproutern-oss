import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  DollarSign,
  GraduationCap,
  Building2,
  TrendingUp,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Germany Career Guide for International Students | Sproutern',
  description:
    'Complete guide to finding jobs in Germany. Learn about EU Blue Card, Job Seeker Visa, German work culture, and top engineering hubs.',
  alternates: {
    canonical: 'https://sproutern.dpdns.org/global-career-guide/germany',
  },
};

export default function GermanyCareerGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Button
          asChild
          variant="ghost"
          className="mb-8"
        >
          <Link href="/global-career-guide">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Global Guide
          </Link>
        </Button>

        <article className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900">
          {/* Hero Section */}
          <div className="relative bg-black px-8 py-12 text-white">
            <div className="flex items-center gap-4 text-yellow-400">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-semibold uppercase tracking-wide">
                Germany
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Europe's Innovation Hub
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Launch your career in Europe's largest economy. Engineering
              excellence meets high quality of life.
            </p>
          </div>

          <div className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                  Job Market Overview
                </h2>
                <p>
                  Germany is Europe's economic engine and a major destination
                  for international talent, particularly in engineering and
                  technology. The market values precision, formal
                  qualifications, and long-term stability.
                </p>
                <div className="my-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Key Hubs
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Berlin (Startups), Munich (Tech/Auto), Frankfurt
                      (Finance), Hamburg (Logistics)
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Central Location
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Perfect base for careers spanning the entire European
                      Union.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              {/* Industries */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Building2 className="h-6 w-6 text-red-600" />
                  In-Demand Skills
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="mt-1 h-5 w-5 text-yellow-600" />
                    <div>
                      <h4 className="font-bold">Engineering</h4>
                      <p className="text-sm">
                        Foundational to the economy. Automotive, Mechanical, and
                        increasingly Software Engineering.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Lightbulb className="mt-1 h-5 w-5 text-yellow-600" />
                    <div>
                      <h4 className="font-bold">Renewable Energy</h4>
                      <p className="text-sm">
                        Major growth area supported by government policy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Lightbulb className="mt-1 h-5 w-5 text-yellow-600" />
                    <div>
                      <h4 className="font-bold">IT & Data</h4>
                      <p className="text-sm">
                        Digital transformation (Industrie 4.0) is creating huge
                        demand for tech talent.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Salary */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  Compensation
                </h2>
                <p>
                  Salaries are strong but taxed progressively. However, you
                  receive excellent public services, free education, and
                  healthcare. Cost of living in Berlin is rising but still lower
                  than London or Paris. Munich is expensive.
                </p>
              </section>

              {/* Visa */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <GraduationCap className="h-6 w-6 text-orange-600" />
                  Immigration (EU Blue Card)
                </h2>
                <p className="mb-4">
                  Germany has liberalized immigration for skilled workers.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
                    <h3 className="font-bold text-blue-900 dark:text-blue-100">
                      EU Blue Card
                    </h3>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      For university graduates with a job offer earning above a
                      threshold. Fast track to permanent residence.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">
                      Job Seeker Visa
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Allows you to come to Germany for 6 months to look for a
                      job (requires qualifications and funds).
                    </p>
                  </div>
                </div>
              </section>

              {/* Language */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                  Language Requirements
                </h2>
                <p>
                  While many startups and tech companies in Berlin speak
                  English, <strong>learning German (B1/B2 level)</strong> is a
                  massive advantage for career growth and daily life
                  integration.
                </p>
              </section>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
