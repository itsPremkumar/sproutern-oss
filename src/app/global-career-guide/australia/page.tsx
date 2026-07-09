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
  Sun,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Australia Career Guide for International Students | Sproutern',
  description:
    'Complete guide to finding jobs in Australia. Learn about Skilled Migration, work-life balance, top industries in Sydney/Melbourne, and Aussie work culture.',
  alternates: {
    canonical: 'https://www.sproutern.com/global-career-guide/australia',
  },
};

export default function AustraliaCareerGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
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
          <div className="relative bg-yellow-600 px-8 py-12 text-white">
            <div className="flex items-center gap-4 text-yellow-50">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-semibold uppercase tracking-wide">
                Australia
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              The Quality of Life Champion
            </h1>
            <p className="mt-4 text-xl text-yellow-50">
              Experience excellent work-life balance, high wages, and a
              welcoming multicultural society.
            </p>
          </div>

          <div className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Sun className="h-6 w-6 text-yellow-600" />
                  Job Market & Lifestyle
                </h2>
                <p>
                  Australia offers an attractive combination of strong economy
                  and outdoor lifestyle. The job market is characterized by
                  work-life balance ("work to live", not "live to work").
                </p>
                <div className="my-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Key Cities
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sydney (Finance/Tech), Melbourne (Culture/Tech), Brisbane,
                      Perth (Mining/Resources)
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Culture
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Informal, Egalitarian, "Mateship", Direct but friendly
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              {/* Industries */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Building2 className="h-6 w-6 text-green-600" />
                  In-Demand Skills
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-bold">Resources & Energy</h4>
                      <p className="text-sm">
                        Shift to renewables and diverse mining. Massive sector
                        in WA and QLD.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-bold">Technology</h4>
                      <p className="text-sm">
                        Fintech (Sydney is a hub), HealthTech, and AgTech are
                        growing rapidly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-bold">
                        Construction & Infrastructure
                      </h4>
                      <p className="text-sm">
                        Ongoing urbanization drives demand for civil engineers
                        and project managers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Salary */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                  Compensation
                </h2>
                <p>
                  Australian salaries are very competitive. Minimum wage is high
                  relative to other nations.
                </p>
                <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <p className="font-medium text-green-800 dark:text-green-200">
                    Superannuation: Employers MUST contribute ~11% (rising) of
                    your salary to a retirement fund on top of your wage.
                  </p>
                </div>
              </section>

              {/* Visa */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <GraduationCap className="h-6 w-6 text-orange-600" />
                  Migration Pathways
                </h2>
                <p>
                  Australia uses a sophisticated points-based system similar to
                  Canada.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-bold">Skilled Independent (189)</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Permanent residence based on points (Age, Skills,
                      English). No sponsor needed.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-bold">Work Holiday (417/462)</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Great for young people to travel and work short-term.
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
