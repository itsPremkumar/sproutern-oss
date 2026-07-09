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
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'UK Career Guide for Students & Professionals | Sproutern',
  description:
    'Complete guide to finding jobs in the UK. Learn about Skilled Worker Visa, Graduate Route, top industries in London, and British work culture.',
  alternates: {
    canonical: 'https://www.sproutern.com/global-career-guide/uk',
  },
};

export default function UKCareerGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
          <div className="relative bg-red-900 px-8 py-12 text-white">
            <div className="flex items-center gap-4 text-red-100">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-semibold uppercase tracking-wide">
                United Kingdom
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              The Global Gateway: Your Career in the UK
            </h1>
            <p className="mt-4 text-xl text-red-100">
              Navigate the post-Brexit landscape and discover opportunities in
              one of the world's financial capitals.
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
                  Despite Brexit, the UK remains a major global financial and
                  business center. London continues to attract international
                  talent across finance, technology, creative industries, and
                  professional services.
                </p>
                <div className="my-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Major Hubs
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      London (Finance/Tech), Manchester (Media/Tech), Edinburgh
                      (Finance), Bristol
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Work Culture
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Polite & Indirect formulation, Formal structure, Strong
                      professional networks
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              {/* Industries */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Building2 className="h-6 w-6 text-red-600" />
                  In-Demand Skills & Industries
                </h2>
                <div className="mt-6 rounded-lg bg-red-50 p-6 dark:bg-red-950/30">
                  <ul className="space-y-3 text-red-900 dark:text-red-100">
                    <li className="flex items-start gap-2">
                      <strong>• Financial Services:</strong> Banking, Fintech,
                      Insurance (London is a global leader).
                    </li>
                    <li className="flex items-start gap-2">
                      <strong>• Technology:</strong> AI, Cybersecurity, Digital
                      Health.
                    </li>
                    <li className="flex items-start gap-2">
                      <strong>• Creative Industries:</strong> Film, Gaming,
                      Advertising, Media.
                    </li>
                    <li className="flex items-start gap-2">
                      <strong>• Life Sciences:</strong> Biotech and Research
                      (Oxford/Cambridge/London triangle).
                    </li>
                  </ul>
                </div>
              </section>

              {/* Salary */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  Compensation & Benefits
                </h2>
                <p>
                  London salaries are competitive with New York or Hong Kong,
                  but cost of living is high. Outside London, salaries drop but
                  quality of life can be excellent.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <strong>Benefits:</strong> Often include pension, healthcare
                    (NHS + private), and 25+ days holiday.
                  </li>
                  <li>
                    <strong>Tax:</strong> Progressive tax system. High earners
                    face substantial rates but get social benefits.
                  </li>
                </ul>
              </section>

              {/* Resume */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                  CV (Resume) Style
                </h2>
                <p>UK "CVs" differ from American "Resumes".</p>
                <ul className="mt-2 list-disc pl-5">
                  <li>
                    <strong>Detail:</strong> Can be 2 pages even for juniors.
                  </li>
                  <li>
                    <strong>Interests:</strong> Personal interests section is
                    often included and appreciated.
                  </li>
                  <li>
                    <strong>Grades:</strong> Degree classifications (First, 2:1)
                    are very important.
                  </li>
                  <li>
                    <strong>Tone:</strong> More formal/modest than American
                    resumes.
                  </li>
                </ul>
              </section>

              {/* Visa */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <GraduationCap className="h-6 w-6 text-orange-600" />
                  Visas & Immigration
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-bold">Graduate Route</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Allows international students to stay and work for 2 years
                      (3 for PhD) after graduation.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-bold">Skilled Worker Visa</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Points-based system. Requires job offer from licensed
                      sponsor and minimum salary salary.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-bold">Global Talent Visa</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      For leaders or potential leaders in academia, research,
                      arts, and digital technology.
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-orange-50 p-4 dark:bg-orange-950/30">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 text-orange-600" />
                    <div className="text-sm text-orange-800 dark:text-orange-200">
                      <strong>Brexit Note:</strong> EU citizens now generally
                      need visas to work in the UK, leveling the playing field
                      for non-EU applicants.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
