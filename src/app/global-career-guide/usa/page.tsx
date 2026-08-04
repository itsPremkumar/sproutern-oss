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
  title: 'USA Career Guide for Students & Professionals | Sproutern',
  description:
    'Complete guide to finding jobs in the USA for Indian and international students. Learn about H1B, OPT, top industries, salaries, and resume tips.',
  alternates: {
    canonical: 'https://sproutern.dpdns.org/global-career-guide/usa',
  },
};

export default function USACareerGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
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
          <div className="relative bg-blue-900 px-8 py-12 text-white">
            <div className="flex items-center gap-4 text-blue-200">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-semibold uppercase tracking-wide">
                United States
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              The Innovation Powerhouse: Your Career in the USA
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Navigate the world's largest economy with our comprehensive guide
              for international job seekers.
            </p>
          </div>

          <div className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Job Market Overview
                </h2>
                <p>
                  The United States remains the world's largest economy and
                  continues to attract top global talent across multiple
                  sectors. The American job market is characterized by high
                  mobility, performance-based compensation, and rapid career
                  advancement opportunities.
                </p>
                <div className="my-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Major Tech Hubs
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      San Francisco Bay Area, Seattle, Austin, New York, Boston
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Key Culture
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Performance-driven, "At-will" employment, High
                      compensation
                    </p>
                  </div>
                </div>
                <p>
                  The U.S. market rewards specialization and measurable
                  achievements. Employers value candidates who can demonstrate
                  concrete results, whether through revenue generation, cost
                  savings, or successful project completions.
                </p>
              </section>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              {/* Industries */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  In-Demand Skills & Industries
                </h2>
                <p>
                  Technology continues to dominate, but opportunities exist
                  across various sectors for skilled professionals.
                </p>
                <div className="mt-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950/50">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="font-bold text-blue-900 dark:text-blue-100">
                        Tech & Engineering
                      </h3>
                      <ul className="mt-2 list-disc pl-5 text-sm text-blue-800 dark:text-blue-200">
                        <li>AI & Machine Learning</li>
                        <li>Cybersecurity & Cloud Computing</li>
                        <li>Software Development</li>
                        <li>Data Science</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 dark:text-blue-100">
                        Other Growth Areas
                      </h3>
                      <ul className="mt-2 list-disc pl-5 text-sm text-blue-800 dark:text-blue-200">
                        <li>Healthcare & Biotech</li>
                        <li>Fintech & Financial Services</li>
                        <li>Renewable Energy</li>
                        <li>E-commerce & Digital Marketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Salary */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  Compensation & Culture
                </h2>
                <p>
                  American compensation packages are typically comprehensive,
                  including base salary, performance bonuses, stock options
                  (particularly in tech), and health benefits.
                </p>
                <div className="my-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/30">
                  <p className="font-medium text-green-800 dark:text-green-200">
                    <strong>Pro Tip:</strong> While salaries in coastal cities
                    (SF, NYC) are higher, cost of living is also significantly
                    higher. Consider emerging hubs like Austin or Denver for
                    better purchasing power.
                  </p>
                </div>
              </section>

              {/* Resume */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                  Resume & Application Style
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-600" />
                    <span>
                      <strong>1-Page Limit:</strong> For less than 10 years
                      experience, keep it to one page.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-600" />
                    <span>
                      <strong>Quantify Results:</strong> Use numbers ("Increased
                      revenue by 20%").
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-600" />
                    <span>
                      <strong>No Personal Info:</strong> Do NOT include photo,
                      age, marital status, or religion. This is critical.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Visa */}
              <section className="mb-12">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <GraduationCap className="h-6 w-6 text-orange-600" />
                  Visas & Immigration
                </h2>
                <p className="mb-4">
                  Understanding the visa landscape is crucial for international
                  applicants.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-bold">F-1 Visa / OPT</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      For students. Optional Practical Training (OPT) allows 12
                      months work, +24 months extension for STEM degrees.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-bold">H-1B Visa</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Primary skilled worker visa. Capped annually and
                      lottery-based. Requires employer sponsorship.
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-orange-50 p-4 dark:bg-orange-950/30">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 text-orange-600" />
                    <div className="text-sm text-orange-800 dark:text-orange-200">
                      <strong>Note:</strong> Visa policies can change. Always
                      verify with official USCIS sources or immigration
                      attorneys.
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
