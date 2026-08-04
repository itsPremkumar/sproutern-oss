import { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Target,
  Lightbulb,
  AlertTriangle,
  Award,
  Calculator,
  FlaskConical,
  FileText,
  Download,
  Share2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ArticleSchema,
  FAQSchema,
  BreadcrumbSchema,
  Breadcrumbs,
  AuthorBio,
  LastUpdated,
  TableOfContents,
} from '@/components/seo';

export const metadata: Metadata = {
  title: 'JEE Main 2026 Preparation: Complete Guide, Strategy & Study Plan',
  description:
    'Comprehensive guide for JEE Main 2026. Month-wise study plan, best books for Physics, Chemistry & Maths, important topics, and expert preparation strategies for long-term success.',
  keywords: [
    'jee main 2026 preparation guide',
    'jee main 2026 strategy',
    'best books for jee main 2026',
    'jee main study plan 2026',
    'jee main syllabus 2026',
    'physics for jee main',
    'chemistry for jee main',
    'mathematics for jee main',
    'how to crack jee main 2026',
    'iit jee preparation tips',
  ],
  alternates: {
    canonical:
      'https://sproutern.dpdns.org/blog/jee-main-preparation-complete-guide-2026',
  },
  openGraph: {
    title: 'JEE Main 2026 Preparation: Complete Guide & Strategy',
    description:
      'Master JEE Main 2026 with our comprehensive study plan, book recommendations, and subject-wise strategies.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/blog/jee-main-preparation-complete-guide-2026',
    publishedTime: '2026-03-05T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-6">
            <BreadcrumbSchema
              items={[
                { name: 'Home', url: 'https://sproutern.dpdns.org' },
                { name: 'Blog', url: 'https://sproutern.dpdns.org/blog' },
                {
                  name: 'Exam Prep',
                  url: 'https://sproutern.dpdns.org/blog/category/exam-prep',
                },
                {
                  name: 'JEE Main 2026 Guide',
                  url: 'https://sproutern.dpdns.org/blog/jee-main-preparation-complete-guide-2026',
                },
              ]}
            />
            <Breadcrumbs />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
            <Target className="h-4 w-4" />
            High Priority Exam
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            JEE Main 2026 Preparation:
            <span className="text-primary">Complete 6-Month Study Plan</span>
          </h1>

          <p className="mb-8 text-xl text-muted-foreground">
            Crack JEE Main with our expert-backed preparation strategy. Complete
            study plan, subject-wise tactics, best resources, and proven tips
            from IIT toppers.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Academic Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>March 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>25 min read</span>
            </div>
          </div>
        </div>
      </div>

      <ArticleSchema
        title="JEE Main 2026 Preparation: Complete Guide & Strategy"
        description="Master JEE Main 2026 with our comprehensive study plan, book recommendations, and subject-wise strategies."
        url="https://sproutern.dpdns.org/blog/jee-main-preparation-complete-guide-2026"
        image="https://sproutern.dpdns.org/logo.jpg"
        datePublished="2026-03-05T00:00:00Z"
        dateModified="2026-03-05T00:00:00Z"
        keywords={metadata.keywords as string[]}
      />

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between border-b pb-4">
          <LastUpdated date="2026-03-05" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>25 min read</span>
          </div>
        </div>

        <article className="prose lg:prose-xl mx-auto">
          <TableOfContents className="mb-10" />
          {/* Quick Stats */}
          <div className="not-prose mb-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">12-14L</div>
              <div className="text-sm text-muted-foreground">
                Students Appear
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">2.5L</div>
              <div className="text-sm text-muted-foreground">
                Qualify for JEE Adv
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">16K</div>
              <div className="text-sm text-muted-foreground">IIT Seats</div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="lead text-lg">
              JEE Main is India's most competitive engineering entrance exam,
              serving as the gateway to prestigious institutions like IITs,
              NITs, and IIITs. With over 12 lakh students competing for just
              16,000 IIT seats, strategic preparation is not optional—it is
              essential.
            </p>
            <p>
              This comprehensive guide combines insights from IIT toppers,
              coaching experts, and NTA's official syllabus to give you a
              battle-tested preparation strategy. Whether you are starting fresh
              or looking to optimize your current preparation, this guide will
              be your roadmap to success.
            </p>
          </section>

          {/* Table of Contents */}
          <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
            <h2 className="mb-4 text-lg font-bold">📋 Table of Contents</h2>
            <ol className="grid gap-2 text-sm md:grid-cols-2">
              <li>
                <a
                  href="#exam-pattern"
                  className="text-primary hover:underline"
                >
                  1. JEE Main 2026 Exam Pattern
                </a>
              </li>
              <li>
                <a
                  href="#syllabus"
                  className="text-primary hover:underline"
                >
                  2. Complete Syllabus Breakdown
                </a>
              </li>
              <li>
                <a
                  href="#study-plan"
                  className="text-primary hover:underline"
                >
                  3. 6-Month Study Plan
                </a>
              </li>
              <li>
                <a
                  href="#physics"
                  className="text-primary hover:underline"
                >
                  4. Physics Preparation Strategy
                </a>
              </li>
              <li>
                <a
                  href="#chemistry"
                  className="text-primary hover:underline"
                >
                  5. Chemistry Preparation Strategy
                </a>
              </li>
              <li>
                <a
                  href="#maths"
                  className="text-primary hover:underline"
                >
                  6. Mathematics Strategy
                </a>
              </li>
              <li>
                <a
                  href="#books"
                  className="text-primary hover:underline"
                >
                  7. Best Books & Resources
                </a>
              </li>
              <li>
                <a
                  href="#mock-tests"
                  className="text-primary hover:underline"
                >
                  8. Mock Test Strategy
                </a>
              </li>
              <li>
                <a
                  href="#mistakes"
                  className="text-primary hover:underline"
                >
                  9. Common Mistakes to Avoid
                </a>
              </li>
              <li>
                <a
                  href="#toppers"
                  className="text-primary hover:underline"
                >
                  10. Topper Tips
                </a>
              </li>
            </ol>
          </nav>

          {/* Section 1: Exam Pattern */}
          <section
            id="exam-pattern"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              JEE Main 2026 Exam Pattern
            </h2>

            <div className="not-prose my-6 overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left">Component</th>
                    <th className="px-4 py-3 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Mode of Exam</td>
                    <td className="px-4 py-3">Computer-Based Test (CBT)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Duration</td>
                    <td className="px-4 py-3">3 Hours (180 Minutes)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Subjects</td>
                    <td className="px-4 py-3">
                      Physics, Chemistry, Mathematics
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Total Questions</td>
                    <td className="px-4 py-3">90 (30 per subject)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">
                      Questions to Attempt
                    </td>
                    <td className="px-4 py-3">75 (25 per subject)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Total Marks</td>
                    <td className="px-4 py-3">300</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Marking Scheme</td>
                    <td className="px-4 py-3">
                      +4 for correct, -1 for incorrect
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
              <p className="text-sm text-orange-900">
                <strong>Important:</strong> JEE Main 2026 will have two sessions
                - January and April. Your best score out of the two attempts
                will be considered for ranking.
              </p>
            </div>
          </section>

          {/* Section 2: Syllabus */}
          <section
            id="syllabus"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              Complete Syllabus Breakdown
            </h2>

            <h3>Physics (21 Chapters)</h3>
            <div className="grid gap-2 text-sm md:grid-cols-2">
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Mechanics:</strong> Kinematics,
                Laws of Motion, Work Energy Power, Rotational Motion,
                Gravitation
              </div>
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Electrodynamics:</strong>{' '}
                Electrostatics, Current Electricity, Magnetic Effects, EMI, AC
                Circuits
              </div>
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Modern Physics:</strong> Dual
                Nature, Atoms, Nuclei, Semiconductor Electronics
              </div>
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Optics & Waves:</strong> Ray
                Optics, Wave Optics, Oscillations, Waves
              </div>
            </div>

            <h3>Chemistry (28 Chapters)</h3>
            <div className="grid gap-2 text-sm md:grid-cols-2">
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Physical:</strong> Mole
                Concept, Thermodynamics, Chemical Equilibrium, Electrochemistry,
                Chemical Kinetics
              </div>
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Organic:</strong> Hydrocarbons,
                Alcohols, Aldehydes, Carboxylic Acids, Biomolecules, Polymers
              </div>
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Inorganic:</strong> Periodic
                Table, Chemical Bonding, Coordination Compounds, Metallurgy, d-f
                Block
              </div>
            </div>

            <h3>Mathematics (16 Chapters)</h3>
            <div className="grid gap-2 text-sm md:grid-cols-2">
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Algebra:</strong> Quadratic,
                Complex Numbers, Permutations, Binomial Theorem, Sequences
              </div>
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Calculus:</strong> Limits,
                Continuity, Differentiation, Integration, Differential Equations
              </div>
              <div className="rounded-lg border p-3">
                <strong className="text-primary">Geometry:</strong> Coordinate
                Geometry, 3D Geometry, Vectors, Trigonometry
              </div>
            </div>
          </section>

          {/* Section 3: Study Plan */}
          <section
            id="study-plan"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              6-Month Study Plan (September 2025 - February 2026)
            </h2>

            <div className="space-y-6">
              {/* Month 1 */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">
                    1
                  </span>
                  Month 1-2: Foundation Building (Sept-Oct)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Complete NCERT thoroughly for all three subjects
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Create formula sheets for each chapter
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Solve basic level problems (300+ per subject)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Study Hours: 6-8 hours daily
                  </li>
                </ul>
              </div>

              {/* Month 3-4 */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">
                    2
                  </span>
                  Month 3-4: Advanced Preparation (Nov-Dec)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Start reference books (HC Verma, OP Tandon, Cengage)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Practice JEE-level problems (500+ per subject)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Take 1 mock test per week
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Study Hours: 8-10 hours daily
                  </li>
                </ul>
              </div>

              {/* Month 5 */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">
                    3
                  </span>
                  Month 5: Revision & Test Series (Jan)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    First attempt of JEE Main 2026
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Intensive revision of all chapters
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    2-3 mock tests per week
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Focus on weak areas identified in tests
                  </li>
                </ul>
              </div>

              {/* Month 6 */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">
                    4
                  </span>
                  Month 6: Final Sprint (Feb)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Second attempt of JEE Main 2026
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Quick revision of formulas and concepts
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Full-length mock tests every alternate day
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    Time management practice
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Physics */}
          <section
            id="physics"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6 text-primary" />
              Physics Preparation Strategy
            </h2>

            <h3>High-Weightage Topics</h3>
            <div className="not-prose grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold">Mechanics</span>
                  <span className="text-sm font-bold text-green-600">
                    35% Weightage
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Focus on Rotational Motion, Laws of Motion, and Work-Energy.
                  Practice numericals extensively.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold">Electrodynamics</span>
                  <span className="text-sm font-bold text-green-600">
                    25% Weightage
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Electrostatics and Current Electricity are scoring. Understand
                  concepts deeply.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold">Modern Physics</span>
                  <span className="text-sm font-bold text-green-600">
                    15% Weightage
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Easiest to score. Memorize formulas and practice previous year
                  questions.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold">Optics & Waves</span>
                  <span className="text-sm font-bold text-green-600">
                    15% Weightage
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ray Optics is formula-based. Wave Optics requires conceptual
                  clarity.
                </p>
              </div>
            </div>

            <h3>Physics Preparation Tips</h3>
            <ul>
              <li>
                Master <strong>derivations</strong> - they help in understanding
                concepts
              </li>
              <li>
                Maintain a <strong>formula notebook</strong> and revise daily
              </li>
              <li>
                Focus on <strong>units and dimensions</strong> for quick
                elimination
              </li>
              <li>
                Practice <strong>graph-based questions</strong> - frequently
                asked
              </li>
              <li>Attempt calculation-based questions first in the exam</li>
            </ul>
          </section>

          {/* Section 5: Chemistry */}
          <section
            id="chemistry"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6 text-primary" />
              Chemistry Preparation Strategy
            </h2>

            <h3>Physical Chemistry</h3>
            <p>
              Physical Chemistry is the most scoring section. It requires
              understanding concepts and practicing numerical problems.
            </p>
            <ul>
              <li>
                <strong>Mole Concept:</strong> Master this first - it's the
                foundation
              </li>
              <li>
                <strong>Thermodynamics:</strong> Understand sign conventions
                clearly
              </li>
              <li>
                <strong>Chemical Equilibrium:</strong> Practice numericals from
                this chapter
              </li>
              <li>
                <strong>Electrochemistry:</strong> Direct formula application
              </li>
            </ul>

            <h3>Organic Chemistry</h3>
            <p>
              Organic Chemistry requires memorization of reactions and
              understanding mechanisms.
            </p>
            <ul>
              <li>
                Learn <strong>Named Reactions</strong> by heart (30+ important
                ones)
              </li>
              <li>
                Practice <strong>mechanism writing</strong> - arrow pushing
              </li>
              <li>
                Focus on <strong>Biomolecules and Polymers</strong> - easy
                scoring
              </li>
              <li>
                Create <strong>reaction charts</strong> for quick revision
              </li>
            </ul>

            <h3>Inorganic Chemistry</h3>
            <p>
              Inorganic is memory-based but highly scoring if prepared well.
            </p>
            <ul>
              <li>
                Read <strong>NCERT thoroughly</strong> - most questions are
                directly from here
              </li>
              <li>
                Make <strong>short notes</strong> for Chemical Bonding and
                Coordination Compounds
              </li>
              <li>
                Memorize <strong>exceptions</strong> separately - they are
                frequently tested
              </li>
            </ul>
          </section>

          {/* Section 6: Mathematics */}
          <section
            id="maths"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-primary" />
              Mathematics Strategy
            </h2>

            <h3>Chapter-Wise Priority</h3>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left">Chapter</th>
                    <th className="px-4 py-3 text-left">Weightage</th>
                    <th className="px-4 py-3 text-left">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3">Calculus</td>
                    <td className="px-4 py-3 font-bold text-green-600">
                      30-35%
                    </td>
                    <td className="px-4 py-3">High</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Coordinate Geometry</td>
                    <td className="px-4 py-3 font-bold text-green-600">
                      20-25%
                    </td>
                    <td className="px-4 py-3">Medium</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Algebra</td>
                    <td className="px-4 py-3 font-bold text-green-600">
                      20-25%
                    </td>
                    <td className="px-4 py-3">Medium</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Trigonometry</td>
                    <td className="px-4 py-3 font-bold text-green-600">
                      10-15%
                    </td>
                    <td className="px-4 py-3">Medium</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">3D Geometry & Vectors</td>
                    <td className="px-4 py-3 font-bold text-green-600">
                      10-15%
                    </td>
                    <td className="px-4 py-3">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Mathematics Tips</h3>
            <ul>
              <li>
                <strong>Calculus is king:</strong> Master differentiation and
                integration first
              </li>
              <li>
                <strong>Practice daily:</strong> Math requires consistent
                practice
              </li>
              <li>
                <strong>Learn shortcuts:</strong> Saves time in the exam
              </li>
              <li>
                <strong>Don't get stuck:</strong> Move on if a question takes
                too long
              </li>
            </ul>
          </section>

          {/* Section 7: Books */}
          <section
            id="books"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              Best Books for JEE Main 2026
            </h2>

            <h3>Physics</h3>
            <ul>
              <li>
                <strong>Concepts of Physics (Vol 1 & 2)</strong> - HC Verma
                (Must-do)
              </li>
              <li>
                <strong>Understanding Physics</strong> - DC Pandey (Practice)
              </li>
              <li>
                <strong>Problems in General Physics</strong> - Irodov (Advanced)
              </li>
              <li>
                <strong>NCERT Physics</strong> - Theory basics
              </li>
            </ul>

            <h3>Chemistry</h3>
            <ul>
              <li>
                <strong>Physical Chemistry</strong> - OP Tandon
              </li>
              <li>
                <strong>Organic Chemistry</strong> - Morrison & Boyd / Solomon &
                Fryhle
              </li>
              <li>
                <strong>Inorganic Chemistry</strong> - JD Lee
              </li>
              <li>
                <strong>NCERT Chemistry</strong> - Very important for Inorganic
              </li>
            </ul>

            <h3>Mathematics</h3>
            <ul>
              <li>
                <strong>Mathematics for JEE</strong> - Cengage (Complete series)
              </li>
              <li>
                <strong>Problems in Calculus</strong> - Sameer Bansal
              </li>
              <li>
                <strong>Algebra</strong> - SK Goyal
              </li>
              <li>
                <strong>Coordinate Geometry</strong> - SL Loney
              </li>
            </ul>
          </section>

          {/* Section 8: Mock Tests */}
          <section
            id="mock-tests"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              Mock Test Strategy
            </h2>

            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
              <p className="text-sm text-blue-900">
                <strong>Golden Rule:</strong> Take at least 20-25 full-length
                mock tests before the actual exam. Analyze each test thoroughly.
              </p>
            </div>

            <h3>Test Analysis Framework</h3>
            <ol>
              <li>
                <strong>Correct Questions:</strong> Check if you solved them
                efficiently
              </li>
              <li>
                <strong>Wrong Questions:</strong> Identify the mistake -
                conceptual or silly?
              </li>
              <li>
                <strong>Unattempted:</strong> Why couldn't you attempt? Time or
                difficulty?
              </li>
              <li>
                <strong>Time Analysis:</strong> Which section took most time?
              </li>
            </ol>

            <h3>Recommended Test Series</h3>
            <ul>
              <li>NTA Abhyas App (Official - Free)</li>
              <li>Aakash AIATS</li>
              <li>Allen Major Tests</li>
              <li>Resonance Test Series</li>
              <li>Unacademy JEE Test Series</li>
            </ul>
          </section>

          {/* Section 9: Mistakes */}
          <section
            id="mistakes"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              Common Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
                <div>
                  <h4 className="font-bold text-red-900">Ignoring NCERT</h4>
                  <p className="text-sm text-red-800">
                    Many students jump to advanced books without mastering NCERT
                    first. This creates weak fundamentals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
                <div>
                  <h4 className="font-bold text-red-900">
                    Not Practicing Enough
                  </h4>
                  <p className="text-sm text-red-800">
                    JEE is not about understanding concepts - it's about
                    applying them under time pressure. Practice is everything.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
                <div>
                  <h4 className="font-bold text-red-900">
                    Neglecting Weak Areas
                  </h4>
                  <p className="text-sm text-red-800">
                    Students often avoid topics they find difficult. Your weak
                    areas have the most potential for improvement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
                <div>
                  <h4 className="font-bold text-red-900">
                    Poor Time Management
                  </h4>
                  <p className="text-sm text-red-800">
                    Many students spend too much time on difficult questions
                    early, leaving no time for easier ones later.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Topper Tips */}
          <section
            id="toppers"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Tips from JEE Toppers
            </h2>

            <div className="space-y-6">
              <blockquote className="rounded-lg border-l-4 border-primary bg-muted p-6">
                <p className="mb-2 italic">
                  "Consistency beats intensity. I studied 6-8 hours every day
                  for 2 years, not 14 hours for 2 months. Your brain needs time
                  to absorb concepts."
                </p>
                <footer className="text-sm font-medium text-muted-foreground">
                  — AIR 45, JEE Advanced 2025
                </footer>
              </blockquote>

              <blockquote className="rounded-lg border-l-4 border-primary bg-muted p-6">
                <p className="mb-2 italic">
                  "Previous year questions are gold. I solved last 10 years
                  papers 3 times. You start seeing patterns in how questions are
                  asked."
                </p>
                <footer className="text-sm font-medium text-muted-foreground">
                  — AIR 127, JEE Advanced 2025
                </footer>
              </blockquote>

              <blockquote className="rounded-lg border-l-4 border-primary bg-muted p-6">
                <p className="mb-2 italic">
                  "Don't compare yourself to others. Everyone has their own
                  pace. Focus on being better than you were yesterday."
                </p>
                <footer className="text-sm font-medium text-muted-foreground">
                  — AIR 312, JEE Advanced 2025
                </footer>
              </blockquote>
            </div>

            <h3>Exam Day Strategy</h3>
            <ul>
              <li>
                <strong>Start with your strongest subject</strong> - builds
                confidence
              </li>
              <li>
                <strong>Don't spend more than 2 minutes</strong> on any single
                question initially
              </li>
              <li>
                <strong>Mark questions for review</strong> - come back later
              </li>
              <li>
                <strong>Attempt all easy questions first</strong> - secure marks
              </li>
              <li>
                <strong>Stay calm</strong> - panic kills performance
              </li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="scroll-mt-20">
            <FAQSchema
              showUI={false}
              faqs={[
                {
                  question: 'Is 6 months enough for JEE Main preparation?',
                  answer:
                    'Yes, if you study 8-10 hours daily with complete focus. Many students crack JEE Main with 6 months of dedicated preparation. The key is consistency and smart strategy.',
                },
                {
                  question: 'How many hours should I study daily for JEE?',
                  answer:
                    'Aim for 6-8 hours in the initial months, increasing to 10-12 hours in the last 2 months. Quality matters more than quantity - focused 6 hours > distracted 10 hours.',
                },
                {
                  question: 'Can I crack JEE without coaching?',
                  answer:
                    'Absolutely! Many students crack JEE through self-study using online resources, YouTube channels, and books. Discipline and consistency are more important than coaching.',
                },
                {
                  question: 'Which is the most scoring subject in JEE Main?',
                  answer:
                    "Chemistry is generally the most scoring as it's memory-based (especially Inorganic). Physics and Math require more practice but have higher weightage.",
                },
              ]}
            />
            <h2 className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-bold">
                  Is 6 months enough for JEE Main preparation?
                </h4>
                <p className="mt-2 text-muted-foreground">
                  Yes, if you study 8-10 hours daily with complete focus. Many
                  students crack JEE Main with 6 months of dedicated
                  preparation. The key is consistency and smart strategy.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold">
                  How many hours should I study daily for JEE?
                </h4>
                <p className="mt-2 text-muted-foreground">
                  Aim for 6-8 hours in the initial months, increasing to 10-12
                  hours in the last 2 months. Quality matters more than quantity
                  - focused 6 hours &gt; distracted 10 hours.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold">Can I crack JEE without coaching?</h4>
                <p className="mt-2 text-muted-foreground">
                  Absolutely! Many students crack JEE through self-study using
                  online resources, YouTube channels, and books. Discipline and
                  consistency are more important than coaching.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold">
                  Which is the most scoring subject in JEE Main?
                </h4>
                <p className="mt-2 text-muted-foreground">
                  Chemistry is generally the most scoring as it's memory-based
                  (especially Inorganic). Physics and Math require more practice
                  but have higher weightage.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2>Final Thoughts</h2>
            <p>
              Cracking JEE Main is challenging but absolutely achievable with
              the right strategy, resources, and mindset. Remember, thousands of
              students do it every year - you can too.
            </p>
            <p>
              Focus on consistent effort, regular practice, and staying calm
              during the exam. Your journey to IIT starts with the first step
              you take today.
            </p>
            <div className="rounded-lg bg-gradient-to-r from-orange-100 to-blue-100 p-6 text-center">
              <p className="text-lg font-bold">
                Believe in yourself. Work hard. Success will follow.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                All the best for JEE Main 2026!
              </p>
            </div>
          </section>

          {/* Related Resources */}
          <div className="not-prose my-10 rounded-lg bg-muted p-6">
            <h3 className="mb-4 font-bold">📚 Related Resources</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/competitive-exam-prep-engineering"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="h-4 w-4" />
                Engineering Exam Preparation Guide
              </Link>
              <Link
                href="/blog/effective-study-techniques"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="h-4 w-4" />
                Effective Study Techniques
              </Link>
              <Link
                href="/tools/cgpa-converter"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="h-4 w-4" />
                CGPA to Percentage Converter
              </Link>
              <Link
                href="/blog/time-management-students-guide"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="h-4 w-4" />
                Time Management Guide
              </Link>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <AuthorBio />
          </div>
        </article>

        {/* Share Section */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="text-sm text-muted-foreground">
            Share this guide:
          </span>
          <Button
            variant="outline"
            size="sm"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}

// Helper component for the alert
import { XCircle } from 'lucide-react';
