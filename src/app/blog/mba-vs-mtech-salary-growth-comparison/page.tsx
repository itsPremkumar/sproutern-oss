import { Metadata } from 'next';
import {
  TrendingUp,
  DollarSign,
  Briefcase,
  GraduationCap,
  BookOpen,
  School,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Clock,
  Calendar,
  User,
  Target,
  Award,
  Building,
  Globe,
  Users,
  Star,
  ArrowRight,
  BarChart3,
  Rocket,
  Brain,
  LineChart,
  PieChart,
  Laptop,
  IndianRupee,
  TrendingDown,
  Shield,
  Heart,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'MBA vs M.Tech Salary Comparison Complete Guide',
  description:
    'Comprehensive comparison of MBA vs M.Tech for engineers in India. Detailed analysis of salary, career paths, top colleges (IIM vs IIT), ROI, job roles, and 10-year growth projections.',
  keywords: [
    'MBA vs MTech',
    'MBA vs MTech salary',
    'career after engineering',
    'IIM vs IIT placements',
    'higher studies in India',
    'GATE vs CAT',
    'engineering career path',
    'MBA salary India',
    'MTech salary India',
    'IIM placement',
    'IIT placement',
    'MBA ROI',
    'MTech ROI',
    'GATE preparation',
    'CAT preparation',
  ],
  openGraph: {
    title: 'MBA vs M.Tech: The Ultimate Comparison for Engineers ',
    description:
      'Complete guide to choosing MBA or M.Tech after B.Tech. ROI analysis, salary comparisons, career paths, and expert insights.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Guidance
            </span>
          </div>
          <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
            MBA vs M.Tech: Which is Better for Salary & Career Growth?
          </h1>
          <p className="mb-6 text-xl text-slate-600 dark:text-slate-400">
            The classic dilemma for every engineering graduate. This
            comprehensive guide analyzes salaries, ROI, career trajectories, job
            roles, and long-term prospects to help you make the right choice.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y border-slate-200 py-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Research Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#overview"
                className="text-primary hover:underline"
              >
                1. Overview & Key Differences
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                2. Salary Comparison
              </a>
            </li>
            <li>
              <a
                href="#roi"
                className="text-primary hover:underline"
              >
                3. ROI Analysis
              </a>
            </li>
            <li>
              <a
                href="#career-path"
                className="text-primary hover:underline"
              >
                4. Career Paths & Roles
              </a>
            </li>
            <li>
              <a
                href="#entrance"
                className="text-primary hover:underline"
              >
                5. Entrance Exams: CAT vs GATE
              </a>
            </li>
            <li>
              <a
                href="#colleges"
                className="text-primary hover:underline"
              >
                6. Top Colleges Comparison
              </a>
            </li>
            <li>
              <a
                href="#growth"
                className="text-primary hover:underline"
              >
                7. 10-Year Growth Projection
              </a>
            </li>
            <li>
              <a
                href="#lifestyle"
                className="text-primary hover:underline"
              >
                8. Work-Life Balance
              </a>
            </li>
            <li>
              <a
                href="#who-choose"
                className="text-primary hover:underline"
              >
                9. Who Should Choose What
              </a>
            </li>
            <li>
              <a
                href="#hybrid"
                className="text-primary hover:underline"
              >
                10. Hybrid Paths
              </a>
            </li>
            <li>
              <a
                href="#myths"
                className="text-primary hover:underline"
              >
                11. Common Myths Debunked
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                12. FAQs
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                MBA from top IIMs offers ₹25-40 LPA starting salary; M.Tech from
                IITs offers ₹18-30 LPA
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                M.Tech has 5-10x better ROI due to lower fees and GATE stipends
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                MBA salaries grow faster in mid-career (Director/VP level);
                M.Tech peaks in niche tech roles
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                CAT success rate: ~1% get top IIMs; GATE: ~2-3% get top IITs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Work 2-3 years before deciding—experience clarifies your path
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section className="mb-10 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          <p className="mb-4">
            If you are in your final year of B.Tech or working as a fresher, you
            have likely heard two pieces of advice:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>&quot;Do an MBA from an IIM, and your life is set.&quot;</li>
            <li>
              &quot;Crack GATE, get into an IIT, and grab a high-paying tech
              package.&quot;
            </li>
          </ul>
          <p className="mb-4">
            Both paths can lead to a ₹20 LPA+ package, but the lifestyles, job
            roles, and growth trajectories are completely different., with the
            rise of AI and the changing tech landscape, the answer isn&apos;t as
            simple as it used to be.
          </p>
          <p>
            This comprehensive guide will break down every aspect—from entrance
            exams to 10-year career projections—to help you make an informed
            decision.
          </p>
        </section>

        {/* Section 1: Overview */}
        <section
          id="overview"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <Target className="h-6 w-6 text-primary" />
            1. Overview & Key Differences
          </h2>

          <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
            Before diving into details, let&apos;s understand what each path
            fundamentally offers and how they differ.
          </p>

          <div className="not-prose mb-8">
            <Card>
              <CardHeader className="bg-slate-50 dark:bg-slate-900">
                <CardTitle>At a Glance: MBA vs M.Tech</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 text-xs uppercase text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      <tr>
                        <th className="px-6 py-3">Parameter</th>
                        <th className="px-6 py-3">MBA (Management)</th>
                        <th className="px-6 py-3">M.Tech (Technical)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      <tr className="bg-white dark:bg-slate-950">
                        <td className="px-6 py-4 font-medium">Primary Focus</td>
                        <td className="px-6 py-4">
                          Business, Strategy, Finance, Marketing
                        </td>
                        <td className="px-6 py-4">
                          Deep Tech, R&D, Core Engineering
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-slate-950">
                        <td className="px-6 py-4 font-medium">Duration</td>
                        <td className="px-6 py-4">2 Years</td>
                        <td className="px-6 py-4">2 Years</td>
                      </tr>
                      <tr className="bg-white dark:bg-slate-950">
                        <td className="px-6 py-4 font-medium">Entrance Exam</td>
                        <td className="px-6 py-4">CAT, XAT, GMAT</td>
                        <td className="px-6 py-4">GATE</td>
                      </tr>
                      <tr className="bg-white dark:bg-slate-950">
                        <td className="px-6 py-4 font-medium">
                          Avg Fees (Top Tier)
                        </td>
                        <td className="px-6 py-4">₹20 Lakhs - ₹30 Lakhs</td>
                        <td className="px-6 py-4">₹2 Lakhs - ₹5 Lakhs</td>
                      </tr>
                      <tr className="bg-white dark:bg-slate-950">
                        <td className="px-6 py-4 font-medium">
                          Avg Salary (Fresher)
                        </td>
                        <td className="px-6 py-4">
                          ₹20 LPA - ₹35 LPA (Top IIMs)
                        </td>
                        <td className="px-6 py-4">
                          ₹15 LPA - ₹25 LPA (Top IITs)
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-slate-950">
                        <td className="px-6 py-4 font-medium">Stipend</td>
                        <td className="px-6 py-4">None (You pay)</td>
                        <td className="px-6 py-4">₹12,400/month (GATE)</td>
                      </tr>
                      <tr className="bg-white dark:bg-slate-950">
                        <td className="px-6 py-4 font-medium">
                          Work Experience
                        </td>
                        <td className="px-6 py-4">
                          Preferred (2-5 years ideal)
                        </td>
                        <td className="px-6 py-4">Not required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="mb-3 text-xl font-bold">The Core Philosophy</h3>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="font-bold text-blue-800 dark:text-blue-200">
                MBA Philosophy
              </h4>
              <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                &quot;Learn to lead people and manage businesses. Your job is to
                make strategic decisions, not build products.&quot;
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <h4 className="font-bold text-orange-800 dark:text-orange-200">
                M.Tech Philosophy
              </h4>
              <p className="mt-2 text-sm text-orange-700 dark:text-orange-300">
                &quot;Master the technology deeply. Your expertise creates
                value. You are the builder, the solver, the innovator.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Salary Comparison */}
        <section
          id="salary"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <DollarSign className="h-6 w-6 text-green-600" />
            2. Salary Comparison: The Numbers
          </h2>

          <h3 className="mb-3 text-xl font-bold">
            Entry-Level Salaries (2024-25)
          </h3>

          <div className="not-prose mb-8">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">College Tier</th>
                  <th className="p-3 text-left">MBA Average</th>
                  <th className="p-3 text-left">M.Tech Average</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Tier 1 (IIM ABC/IIT)</td>
                  <td className="p-3 text-green-600">₹28-40 LPA</td>
                  <td className="p-3 text-blue-600">₹22-35 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Tier 2 (IIM BLACKI/NIT)</td>
                  <td className="p-3 text-green-600">₹18-25 LPA</td>
                  <td className="p-3 text-blue-600">₹12-20 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Tier 3 (State B-Schools/Engg)
                  </td>
                  <td className="p-3 text-green-600">₹8-15 LPA</td>
                  <td className="p-3 text-blue-600">₹6-12 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-3 text-xl font-bold">
            Industry-Wise Salary Breakdown
          </h3>

          <h4 className="mb-2 font-bold">MBA Sectors & Salaries</h4>
          <ul className="mb-6 list-disc pl-6 text-slate-700 dark:text-slate-300">
            <li>
              <strong>Consulting (MBB):</strong> ₹35-50 LPA (McKinsey, BCG,
              Bain)
            </li>
            <li>
              <strong>Investment Banking:</strong> ₹30-45 LPA (Goldman, JP
              Morgan)
            </li>
            <li>
              <strong>Product Management:</strong> ₹25-40 LPA (Google, Amazon)
            </li>
            <li>
              <strong>FMCG:</strong> ₹18-25 LPA (HUL, P&G, Nestle)
            </li>
            <li>
              <strong>General Management:</strong> ₹15-22 LPA (Various MNCs)
            </li>
          </ul>

          <h4 className="mb-2 font-bold">M.Tech Sectors & Salaries</h4>
          <ul className="mb-6 list-disc pl-6 text-slate-700 dark:text-slate-300">
            <li>
              <strong>AI/ML Engineering:</strong> ₹25-45 LPA (Google, Meta,
              OpenAI)
            </li>
            <li>
              <strong>Chip Design/VLSI:</strong> ₹20-35 LPA (Qualcomm, Intel,
              Apple)
            </li>
            <li>
              <strong>Software Development:</strong> ₹18-30 LPA (FAANG,
              Startups)
            </li>
            <li>
              <strong>Research (MS/PhD track):</strong> ₹12-20 LPA (Labs,
              Academia)
            </li>
            <li>
              <strong>Core Engineering:</strong> ₹8-15 LPA (PSUs, Manufacturing)
            </li>
          </ul>

          <div className="my-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="flex items-center gap-2 font-bold text-green-800 dark:text-green-300">
              <Lightbulb className="h-4 w-4" />
              Key Insight
            </h4>
            <p className="mt-1 text-sm text-green-700 dark:text-green-400">
              The highest M.Tech salaries (AI/ML at FAANG) now match or exceed
              top MBA salaries. The gap has narrowed significantly in 2024-25.
            </p>
          </div>
        </section>

        {/* Section 3: ROI Analysis */}
        <section
          id="roi"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <BarChart3 className="h-6 w-6 text-purple-600" />
            3. ROI Analysis: The Real Value
          </h2>

          <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
            ROI matters more than raw salary. Here&apos;s a comprehensive
            breakdown of costs vs returns.
          </p>

          <h3 className="mb-3 text-xl font-bold">Total Cost Comparison</h3>

          <div className="not-prose mb-8">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Cost Component</th>
                  <th className="p-3 text-left">MBA (IIM A)</th>
                  <th className="p-3 text-left">M.Tech (IIT B)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Tuition Fees</td>
                  <td className="p-3 text-red-600">₹24.5 Lakhs</td>
                  <td className="p-3 text-green-600">₹2.5 Lakhs</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Living Expenses (2 years)</td>
                  <td className="p-3 text-red-600">₹4 Lakhs</td>
                  <td className="p-3 text-green-600">₹2 Lakhs</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">GATE Stipend (2 years)</td>
                  <td className="p-3">₹0</td>
                  <td className="p-3 text-green-600">-₹2.97 Lakhs (Income)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Opportunity Cost (Lost Salary)
                  </td>
                  <td className="p-3 text-red-600">₹12 Lakhs</td>
                  <td className="p-3 text-red-600">₹12 Lakhs</td>
                </tr>
                <tr className="border-t bg-slate-100 dark:bg-slate-900">
                  <td className="p-3 font-bold">TOTAL INVESTMENT</td>
                  <td className="p-3 font-bold text-red-600">₹40.5 Lakhs</td>
                  <td className="p-3 font-bold text-green-600">₹11.5 Lakhs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-3 text-xl font-bold">Break-Even Analysis</h3>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">
                  MBA Break-Even
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Investment:</strong> ₹40.5 Lakhs
                  </li>
                  <li>
                    <strong>Avg Starting:</strong> ₹28 LPA
                  </li>
                  <li>
                    <strong>Post-tax annual savings:</strong> ~₹8-10 Lakhs
                  </li>
                  <li className="font-bold text-blue-600">
                    Break-even: 4-5 years after graduation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-orange-600">
                  M.Tech Break-Even
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Investment:</strong> ₹11.5 Lakhs
                  </li>
                  <li>
                    <strong>Avg Starting:</strong> ₹22 LPA
                  </li>
                  <li>
                    <strong>Post-tax annual savings:</strong> ~₹6-8 Lakhs
                  </li>
                  <li className="font-bold text-orange-600">
                    Break-even: 1.5-2 years after graduation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
            <h4 className="flex items-center gap-2 font-bold text-yellow-800 dark:text-yellow-300">
              <AlertTriangle className="h-4 w-4" />
              ROI Winner
            </h4>
            <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-400">
              M.Tech has significantly better ROI in the first 5 years. MBA
              catches up only if you reach senior management (VP/Director)
              within 8-10 years.
            </p>
          </div>
        </section>

        {/* Section 4: Career Paths */}
        <section
          id="career-path"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <Briefcase className="h-6 w-6 text-blue-600" />
            4. Career Paths & Job Roles
          </h2>

          <div className="not-prose mb-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">
                  MBA Career Trajectory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-500">Year 0-2:</span>
                    Associate/Analyst → ₹25-35 LPA
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-500">Year 3-5:</span>
                    Senior Manager → ₹40-60 LPA
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-500">Year 6-10:</span>
                    Director/VP → ₹70-1.2 Cr
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-500">Year 10+:</span>
                    CXO Level → ₹1.5-5 Cr+
                  </li>
                </ul>
                <div className="mt-4 border-t pt-4">
                  <p className="text-xs font-bold text-blue-600">
                    Common Roles: Product Manager, Strategy Consultant, Brand
                    Manager, Investment Banker, Operations Head
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-orange-600">
                  M.Tech Career Trajectory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-500">Year 0-2:</span>
                    SDE 1/Research Eng → ₹18-30 LPA
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-500">Year 3-5:</span>
                    SDE 2/Senior Eng → ₹35-55 LPA
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-500">
                      Year 6-10:
                    </span>
                    Staff/Principal → ₹60-1 Cr
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-500">Year 10+:</span>
                    Distinguished/Fellow → ₹1-3 Cr
                  </li>
                </ul>
                <div className="mt-4 border-t pt-4">
                  <p className="text-xs font-bold text-orange-600">
                    Common Roles: ML Engineer, System Architect, Research
                    Scientist, Tech Lead, CTO (Startups)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="mb-3 text-xl font-bold">Daily Life Comparison</h3>

          <div className="not-prose mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-3 flex items-center gap-2 font-bold">
                <Briefcase className="h-4 w-4 text-blue-500" />A Day in MBA Life
              </h4>
              <ul className="space-y-2 text-sm">
                <li>🕘 9 AM: Team standup and alignment meetings</li>
                <li>📊 10 AM: Strategy deck preparation</li>
                <li>📞 12 PM: Client/stakeholder calls</li>
                <li>📈 2 PM: Data analysis and reporting</li>
                <li>🤝 4 PM: Cross-functional collaboration</li>
                <li>📝 6 PM: Leadership review and planning</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-3 flex items-center gap-2 font-bold">
                <Laptop className="h-4 w-4 text-orange-500" />A Day in M.Tech
                Life
              </h4>
              <ul className="space-y-2 text-sm">
                <li>🕘 10 AM: Code review and PR merges</li>
                <li>💻 11 AM: Deep work on feature development</li>
                <li>🍕 1 PM: Lunch + tech discussion</li>
                <li>🧠 2 PM: Problem solving and debugging</li>
                <li>📚 4 PM: Research and learning</li>
                <li>🚀 6 PM: Deployment and testing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Entrance Exams */}
        <section
          id="entrance"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            5. Entrance Exams: CAT vs GATE
          </h2>

          <div className="not-prose mb-8">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Parameter</th>
                  <th className="p-3 text-left">CAT</th>
                  <th className="p-3 text-left">GATE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Mode</td>
                  <td className="p-3">Computer Based (CBT)</td>
                  <td className="p-3">Computer Based (CBT)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Duration</td>
                  <td className="p-3">2 hours</td>
                  <td className="p-3">3 hours</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Syllabus Scope</td>
                  <td className="p-3">VARC, DILR, Quant</td>
                  <td className="p-3">Full B.Tech syllabus + Aptitude</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Preparation Time</td>
                  <td className="p-3">6-12 months</td>
                  <td className="p-3">8-12 months</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Annual Attempts</td>
                  <td className="p-3">~2.5 Lakhs</td>
                  <td className="p-3">~8 Lakhs</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Top 1% Cutoff</td>
                  <td className="p-3">99+ percentile</td>
                  <td className="p-3">AIR under 500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-3 text-xl font-bold">Which is Harder?</h3>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            <strong>CAT</strong> tests aptitude and mental agility—you can
            prepare relatively quickly if you have strong fundamentals.
          </p>
          <p className="mb-6 text-slate-700 dark:text-slate-300">
            <strong>GATE</strong> tests deep technical knowledge accumulated
            over 4 years—requires systematic preparation but rewards consistent
            effort.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-300">
              <Lightbulb className="h-4 w-4" />
              Strategy Tip
            </h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">
              If you excelled in academics and genuinely understand your B.Tech
              subjects, GATE may be easier for you. If you have strong verbal
              and logical reasoning but average technical knowledge, CAT might
              be more suitable.
            </p>
          </div>
        </section>

        {/* Section 6: Colleges */}
        <section
          id="colleges"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <Building className="h-6 w-6 text-teal-600" />
            6. Top Colleges Comparison
          </h2>

          <h3 className="mb-3 text-xl font-bold">Top MBA Colleges (India)</h3>
          <ul className="mb-6 list-disc pl-6 text-slate-700 dark:text-slate-300">
            <li>
              <strong>Tier 1:</strong> IIM A, B, C, L, K, I (₹28-40 LPA avg)
            </li>
            <li>
              <strong>Tier 1.5:</strong> IIM BLACKI, FMS, XLRI, ISB (₹20-30 LPA)
            </li>
            <li>
              <strong>Tier 2:</strong> MDI, SPJIMR, IIFT, New IIMs (₹15-22 LPA)
            </li>
          </ul>

          <h3 className="mb-3 text-xl font-bold">
            Top M.Tech Colleges (India)
          </h3>
          <ul className="mb-6 list-disc pl-6 text-slate-700 dark:text-slate-300">
            <li>
              <strong>Tier 1:</strong> IIT B, D, M, Kgp, K (₹20-35 LPA avg)
            </li>
            <li>
              <strong>Tier 1.5:</strong> IIT R, G, H, IISC (₹15-25 LPA)
            </li>
            <li>
              <strong>Tier 2:</strong> NITs, IIIT H, BITS (₹10-18 LPA)
            </li>
          </ul>
        </section>

        {/* Section 7: 10-Year Growth */}
        <section
          id="growth"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <LineChart className="h-6 w-6 text-green-600" />
            7. 10-Year Growth Projection
          </h2>

          <div className="not-prose mb-8">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Year</th>
                  <th className="p-3 text-left">MBA Path (Cumulative)</th>
                  <th className="p-3 text-left">M.Tech Path (Cumulative)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Year 2</td>
                  <td className="p-3">₹56 Lakhs</td>
                  <td className="p-3">₹44 Lakhs</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Year 5</td>
                  <td className="p-3">₹2.2 Cr</td>
                  <td className="p-3">₹1.8 Cr</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Year 10</td>
                  <td className="p-3">₹6.5 Cr</td>
                  <td className="p-3">₹5.5 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="flex items-center gap-2 font-bold text-green-800 dark:text-green-300">
              <Lightbulb className="h-4 w-4" />
              The &quot;Catch-Up&quot; Effect
            </h4>
            <p className="mt-1 text-sm text-green-700 dark:text-green-400">
              MBA salaries typically accelerate faster after Year 5 as you move
              into leadership roles. However, M.Tech professionals in niche
              fields (AI, Compiler Design, Systems) can match or exceed MBA
              earnings while staying technical.
            </p>
          </div>
        </section>

        {/* Section 8: Work-Life Balance */}
        <section
          id="lifestyle"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <Heart className="h-6 w-6 text-pink-600" />
            8. Work-Life Balance
          </h2>

          <div className="not-prose mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-3 font-bold text-blue-600">MBA Work-Life</h4>
              <ul className="space-y-2 text-sm">
                <li>⏰ Long hours (60-80/week in consulting)</li>
                <li>✈️ Frequent travel for client work</li>
                <li>📱 Always-on culture</li>
                <li>💼 High-pressure environments</li>
                <li>🎯 Strong career ladder visibility</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-3 font-bold text-orange-600">
                M.Tech Work-Life
              </h4>
              <ul className="space-y-2 text-sm">
                <li>⏰ More predictable (45-55/week typically)</li>
                <li>🏠 Remote work friendly</li>
                <li>🧠 Deep work over meetings</li>
                <li>⚙️ Focus on technical excellence</li>
                <li>📈 Individual contributor track option</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9: Who Should Choose What */}
        <section
          id="who-choose"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <School className="h-6 w-6 text-purple-600" />
            9. Who Should Choose What?
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Choose MBA if:
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>You prefer people management over technical work</li>
                <li>You have excellent communication and leadership skills</li>
                <li>You want to pivot away from engineering</li>
                <li>You&apos;re targeting Consulting, Finance, or Marketing</li>
                <li>You have 2-5 years of work experience</li>
                <li>You&apos;re comfortable with high-pressure environments</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Choose M.Tech if:
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>You genuinely enjoy coding and building systems</li>
                <li>You want to become a subject matter expert</li>
                <li>You&apos;re interested in R&D or research</li>
                <li>You want high ROI with lower financial risk</li>
                <li>You&apos;re targeting AI/ML, Cloud, or Systems roles</li>
                <li>You prefer work-life balance over hierarchy climbing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 10: Hybrid Paths */}
        <section
          id="hybrid"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <Zap className="h-6 w-6 text-yellow-600" />
            10. Hybrid Paths: The Best of Both?
          </h2>

          <h3 className="mb-3 text-xl font-bold">
            Option 1: M.Tech → MBA Later
          </h3>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Do M.Tech first, work 3-5 years in tech, then pursue an Executive
            MBA (1-year program) while working. This gives you both technical
            depth and business skills.
          </p>

          <h3 className="mb-3 text-xl font-bold">
            Option 2: Product Management
          </h3>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Product roles combine technical and business skills. You can enter
            PM from either path—MBA gives you strategy; M.Tech gives you
            technical credibility.
          </p>

          <h3 className="mb-3 text-xl font-bold">
            Option 3: Technical Management
          </h3>
          <p className="mb-6 text-slate-700 dark:text-slate-300">
            Stay technical but move into Engineering Management. Companies like
            Google pay $400K+ for Staff/Principal engineers who can also lead
            teams.
          </p>
        </section>

        {/* Section 11: Myths */}
        <section
          id="myths"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <XCircle className="h-6 w-6 text-red-600" />
            11. Common Myths Debunked
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                Myth: &quot;MBA always pays more than M.Tech&quot;
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                <strong>Reality:</strong> Top AI/ML engineers now earn ₹40-60
                LPA, matching or exceeding MBA salaries. Tech salaries have
                caught up significantly.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                Myth: &quot;You need an MBA to become CEO&quot;
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                <strong>Reality:</strong> Sundar Pichai (M.Tech), Jensen Huang
                (MS EE), and many tech CEOs have engineering backgrounds. Both
                paths can lead to the top.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                Myth: &quot;M.Tech is only for PSU jobs&quot;
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                <strong>Reality:</strong> Top IIT M.Tech graduates get FAANG
                offers, startup equity, and research positions—not just PSU
                jobs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="mb-12 scroll-mt-20"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            12. Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">
                Q: Can I do MBA after M.Tech?
              </h4>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                Yes! Many do Executive MBAs after gaining 5-8 years of tech
                experience. This combination is highly valued for technical
                leadership roles.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">
                Q: Is work experience mandatory for MBA?
              </h4>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                Not mandatory, but highly recommended. IIMs prefer candidates
                with 2-5 years of experience. Freshers can get in but face
                tougher competition.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">
                Q: What if I&apos;m a non-CS engineer interested in AI/ML?
              </h4>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                M.Tech in AI/ML is available for all engineering branches. GATE
                CS is open to all. Focus on programming skills and mathematical
                foundations.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">
                Q: Should I work first or do PG directly after B.Tech?
              </h4>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                For MBA, work 2-3 years first. For M.Tech, you can go directly
                if you&apos;re passionate about research or want to deepen
                technical skills.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="rounded-xl bg-slate-100 p-6 text-center dark:bg-slate-900">
          <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">
            The Bottom Line
          </h3>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            There&apos;s no universally &quot;better&quot; choice. MBA suits
            those who want business leadership; M.Tech suits those who love
            building technology. The best ROI comes from choosing the path that
            aligns with your genuine interests and strengths.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/career-roadmap">
                Generate Your Career Roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/blog/gate-exam-preparation-guide">
                GATE Preparation Guide
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Articles */}
        <section className="not-prose mt-12">
          <h3 className="mb-6 text-xl font-bold">Related Articles</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/gate-exam-preparation-guide"
              className="rounded-lg border p-4 transition-colors hover:bg-muted"
            >
              <h4 className="font-bold">Complete GATE Preparation Guide</h4>
              <p className="text-sm text-muted-foreground">
                Strategies, resources, and timelines for GATE success
              </p>
            </Link>
            <Link
              href="/blog/top-10-highest-paying-mba-specializations-in-india"
              className="rounded-lg border p-4 transition-colors hover:bg-muted"
            >
              <h4 className="font-bold">
                Top 10 Highest Paying MBA Specializations
              </h4>
              <p className="text-sm text-muted-foreground">
                Which MBA specialization gives the best returns?
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
