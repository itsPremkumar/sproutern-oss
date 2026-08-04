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
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Canada Career Guide for International Students | Sproutern',
  description:
    'Complete guide to finding jobs and PR in Canada. Learn about Express Entry, PGWP, tech hubs in Toronto/Vancouver, and Canadian workplace culture.',
  alternates: {
    canonical: 'https://sproutern.dpdns.org/global-career-guide/canada',
  },
};

export default function CanadaCareerGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
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
          <div className="relative bg-red-700 px-8 py-12 text-white">
            <div className="flex items-center gap-4 text-red-100">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-semibold uppercase tracking-wide">
                Canada
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              The Balanced Opportunity: Your Career in Canada
            </h1>
            <p className="mt-4 text-xl text-red-50">
              Discover a welcoming nation that prioritizes diversity, work-life
              balance, and clear pathways to permanent residence.
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
                  Canada positions itself as a top destination for international
                  talent, with policies actively designed to attract skilled
                  workers. The market values stability, long-term growth, and
                  inclusivity.
                </p>
                <div className="my-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Key Hubs
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Toronto (Finance/Tech), Vancouver (Tech/Trade), Montreal
                      (AI/Gaming), Calgary (Energy)
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Work Culture
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Polite, Egalitarian, Collaborative, Respect for personal
                      time
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
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                      <span className="text-sm font-bold text-red-700 dark:text-red-200">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold">Technology & AI</h4>
                      <p className="text-sm">
                        Toronto and Montreal are massive AI research hubs. High
                        demand for devs and data scientists.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                      <span className="text-sm font-bold text-red-700 dark:text-red-200">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold">
                        Natural Resources & Clean Energy
                      </h4>
                      <p className="text-sm">
                        Shift towards sustainable extraction and renewables
                        offers engineering roles.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                      <span className="text-sm font-bold text-red-700 dark:text-red-200">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold">Healthcare</h4>
                      <p className="text-sm">
                        Aging population drives demand for all healthcare
                        professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Salary */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  Salary & Quality of Life
                </h2>
                <p>
                  Salaries are generally lower than the US, but this is offset
                  by lower cost of living in some areas and
                  <strong> significant social benefits</strong> like universal
                  healthcare.
                </p>
                <ul className="mt-4 list-disc pl-5">
                  <li>
                    <strong>Toronto/Vancouver:</strong> High salaries, but very
                    high housing costs.
                  </li>
                  <li>
                    <strong>Montreal/Calgary/Ottawa:</strong> Good salaries with
                    much more affordable living costs.
                  </li>
                  <li>
                    <strong>Remote Work:</strong> Very popular, allowing earning
                    in CAD while living in cheaper regions.
                  </li>
                </ul>
              </section>

              {/* Resume */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                  Resume Tips
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                    <span>
                      <strong>Format:</strong> Similar to US (chronological,
                      result-oriented).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                    <span>
                      <strong>credential Recognition:</strong> Explicitly
                      mention if your degree is evaluated (WES).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                    <span>
                      <strong>Volunteering:</strong> Canadians value community
                      involvement highly. Include it!
                    </span>
                  </li>
                </ul>
              </section>

              {/* Visa */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <GraduationCap className="h-6 w-6 text-orange-600" />
                  Path to Permanent Residence (PR)
                </h2>
                <p className="mb-4">
                  Canada is famous for its clear immigration pathways.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
                    <h3 className="font-bold text-red-900 dark:text-red-100">
                      Express Entry
                    </h3>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      Points-based system for PR. Factors: Age, Education,
                      Experience, Language.
                    </p>
                  </div>
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
                    <h3 className="font-bold text-red-900 dark:text-red-100">
                      PGWP
                    </h3>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      Post-Graduation Work Permit. Open work permit for up to 3
                      years after study.
                    </p>
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
