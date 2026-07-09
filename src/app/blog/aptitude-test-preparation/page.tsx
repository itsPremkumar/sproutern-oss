import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Calculator,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Brain,
  BarChart,
  Percent,
  Timer,
  AlertTriangle,
  Zap,
  Star,
  Award,
  ListChecks,
  FileText,
  Sparkles,
  PieChart,
  Activity,
  Hash,
  Divide,
  Equal,
  Plus,
  Minus,
  X,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aptitude Test Preparation: Complete Guide',
  description:
    'Ace aptitude tests in placement drives with this comprehensive guide. Learn quantitative aptitude, logical reasoning, and verbal ability strategies with shortcuts, formulas, and practice problems.',
  keywords: [
    'aptitude test preparation',
    'placement aptitude',
    'quantitative aptitude',
    'logical reasoning',
    'verbal ability test',
    'aptitude shortcuts',
    'TCS aptitude',
    'Infosys aptitude',
    'Wipro aptitude',
    'campus placement aptitude',
    'aptitude formulas',
  ],
  openGraph: {
    title: 'Aptitude Test Preparation: Complete Guide',
    description:
      'Crack aptitude tests with proven strategies, shortcuts, and practice.',
    type: 'article',
    publishedTime: '2025-01-06T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-amber-600">
            <Calculator className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Interview Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Aptitude Test Preparation: The Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Master aptitude tests with proven strategies, shortcuts, and
            formulas. This comprehensive guide covers everything from basic
            concepts to advanced problem-solving techniques used by top scorers.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>30 min read</span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            Aptitude tests are the first and most crucial filter in campus
            placements and competitive exams. Companies like TCS, Infosys,
            Wipro, Cognizant, and hundreds of others use aptitude tests to
            screen candidates before interviews. A strong aptitude score
            doesn&apos;t just get you through—it often determines your interview
            slot priority and even salary negotiations.
          </p>
          <p>
            The good news? Aptitude tests are highly learnable. Unlike IQ tests,
            aptitude tests follow patterns that can be mastered with systematic
            practice. This guide will give you everything you need: concepts,
            shortcuts, formulas, practice strategies, and test-taking tips.
          </p>
        </section>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-amber-600" />
            Aptitude Test Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-amber-600">90%</span>
              <span>of IT companies use aptitude tests for screening</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-amber-600">60%</span>
              <span>candidates get eliminated in aptitude rounds</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-amber-600">45-60</span>
              <span>minutes is typical test duration</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-amber-600">30-50</span>
              <span>questions in most aptitude tests</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#overview"
                className="text-primary hover:underline"
              >
                1. Understanding Aptitude Tests
              </a>
            </li>
            <li>
              <a
                href="#quant"
                className="text-primary hover:underline"
              >
                2. Quantitative Aptitude
              </a>
            </li>
            <li>
              <a
                href="#quant-formulas"
                className="text-primary hover:underline"
              >
                3. Essential Formulas
              </a>
            </li>
            <li>
              <a
                href="#quant-shortcuts"
                className="text-primary hover:underline"
              >
                4. Calculation Shortcuts
              </a>
            </li>
            <li>
              <a
                href="#logical"
                className="text-primary hover:underline"
              >
                5. Logical Reasoning
              </a>
            </li>
            <li>
              <a
                href="#verbal"
                className="text-primary hover:underline"
              >
                6. Verbal Ability
              </a>
            </li>
            <li>
              <a
                href="#company"
                className="text-primary hover:underline"
              >
                7. Company-Specific Patterns
              </a>
            </li>
            <li>
              <a
                href="#strategy"
                className="text-primary hover:underline"
              >
                8. Test-Taking Strategy
              </a>
            </li>
            <li>
              <a
                href="#preparation"
                className="text-primary hover:underline"
              >
                9. Preparation Plan
              </a>
            </li>
            <li>
              <a
                href="#practice"
                className="text-primary hover:underline"
              >
                10. Practice Problems
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-primary hover:underline"
              >
                11. Best Resources
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
                Practice daily—30 minutes of consistent practice beats 3 hours
                of cramming
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Learn shortcuts—they can cut solving time by 50-70%</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Memorize key formulas and tables (multiplication up to 20,
                squares up to 30)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Time management is critical—practice with a timer from day one
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Focus on weak areas but maintain strengths</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Take mock tests weekly in exam-like conditions</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Overview */}
        <section
          id="overview"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Understanding Aptitude Tests
          </h2>
          <p>
            Aptitude tests measure your ability to perform tasks, react to
            situations, and solve problems. They assess learned skills through
            standardized questions. Most aptitude tests for placements have
            three main sections:
          </p>

          <h3>Three Pillars of Aptitude</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
              <Calculator className="mb-2 h-8 w-8 text-amber-600" />
              <p className="font-bold">Quantitative</p>
              <p className="text-sm text-muted-foreground">
                Math skills, number problems, data interpretation
              </p>
              <p className="mt-2 text-xs font-medium">~40% of questions</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
              <Brain className="mb-2 h-8 w-8 text-blue-600" />
              <p className="font-bold">Logical</p>
              <p className="text-sm text-muted-foreground">
                Patterns, puzzles, analytical reasoning
              </p>
              <p className="mt-2 text-xs font-medium">~35% of questions</p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <BookOpen className="mb-2 h-8 w-8 text-green-600" />
              <p className="font-bold">Verbal</p>
              <p className="text-sm text-muted-foreground">
                Reading, grammar, vocabulary
              </p>
              <p className="mt-2 text-xs font-medium">~25% of questions</p>
            </div>
          </div>

          <h3>Common Aptitude Test Formats</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Test Name</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-left">Sections</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">TCS</td>
                  <td className="p-3">TCS NQT</td>
                  <td className="p-3">90 min</td>
                  <td className="p-3">Quant, Verbal, Reasoning, Coding</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Infosys</td>
                  <td className="p-3">InfyTQ</td>
                  <td className="p-3">60 min</td>
                  <td className="p-3">Quant, Verbal, Logical</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Wipro</td>
                  <td className="p-3">NLTH</td>
                  <td className="p-3">60 min</td>
                  <td className="p-3">Quant, Verbal, Logical, Essay</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Cognizant</td>
                  <td className="p-3">GenC</td>
                  <td className="p-3">60 min</td>
                  <td className="p-3">Quant, Verbal, Logical</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Capgemini</td>
                  <td className="p-3">Game-Based</td>
                  <td className="p-3">60 min</td>
                  <td className="p-3">Behavioral, Logical, Quant</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Scoring Pattern</h3>
          <ul>
            <li>
              <strong>Positive marks:</strong> +1 to +4 per correct answer
              (varies by company)
            </li>
            <li>
              <strong>Negative marks:</strong> -0.25 to -1 per wrong answer
              (some have no negatives)
            </li>
            <li>
              <strong>Cutoff:</strong> Usually 50-70% is the passing score
            </li>
            <li>
              <strong>Sectional cutoffs:</strong> Some companies require minimum
              scores in each section
            </li>
          </ul>
        </section>

        {/* Section 2: Quant */}
        <section
          id="quant"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Percent className="h-6 w-6 text-primary" />
            2. Quantitative Aptitude Topics
          </h2>
          <p>
            Quantitative aptitude tests your numerical ability and
            problem-solving skills. Here&apos;s a complete breakdown of topics
            by priority:
          </p>

          <h3>High Priority (60% of Questions)</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Percentages, Profit & Loss</p>
              <p className="text-sm text-muted-foreground">
                Base calculations, successive percentages, discounts, cost
                price/selling price
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Ratio & Proportion</p>
              <p className="text-sm text-muted-foreground">
                Simple ratios, compound ratios, partnerships, mixtures
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Time & Work</p>
              <p className="text-sm text-muted-foreground">
                Work efficiency, pipes & cisterns, work equivalence
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Time, Speed & Distance</p>
              <p className="text-sm text-muted-foreground">
                Average speed, relative speed, trains, boats & streams
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Number System</p>
              <p className="text-sm text-muted-foreground">
                Divisibility, remainders, LCM & HCF, factors
              </p>
            </div>
          </div>

          <h3>Medium Priority (30% of Questions)</h3>
          <ul>
            <li>
              <strong>Simple & Compound Interest:</strong> SI/CI formulas,
              difference between SI/CI
            </li>
            <li>
              <strong>Averages:</strong> Weighted averages, age problems
            </li>
            <li>
              <strong>Algebra:</strong> Linear equations, quadratic equations
            </li>
            <li>
              <strong>Geometry:</strong> Triangles, circles, coordinate geometry
              basics
            </li>
            <li>
              <strong>Data Interpretation:</strong> Bar graphs, pie charts,
              tables
            </li>
          </ul>

          <h3>Lower Priority (10% of Questions)</h3>
          <ul>
            <li>Permutations & Combinations</li>
            <li>Probability</li>
            <li>Mensuration</li>
            <li>Trigonometry</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Master the high-priority topics first.
              They cover 60% of questions and are easier to learn. You can score
              80%+ just by perfecting these.
            </div>
          </div>
        </section>

        {/* Section 3: Formulas */}
        <section
          id="quant-formulas"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            3. Essential Formulas to Memorize
          </h2>

          <h3>Percentages</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>% = (Part / Whole) × 100</p>
            <p className="mt-2">% Change = ((New - Old) / Old) × 100</p>
            <p className="mt-2">Successive % change: a + b + (ab/100)</p>
          </div>

          <h3>Profit & Loss</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>Profit = SP - CP</p>
            <p className="mt-2">Profit % = (Profit / CP) × 100</p>
            <p className="mt-2">SP = CP × (100 + Profit%) / 100</p>
            <p className="mt-2">
              If discount = d% and markup = m%, then Profit = (m - d + md/100)%
            </p>
          </div>

          <h3>Time & Work</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>If A can do work in n days, A&apos;s 1 day work = 1/n</p>
            <p className="mt-2">If A & B together: 1/A + 1/B = 1/Total days</p>
            <p className="mt-2">Work = Efficiency × Time</p>
            <p className="mt-2">M₁D₁H₁ / W₁ = M₂D₂H₂ / W₂</p>
          </div>

          <h3>Time, Speed & Distance</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>Speed = Distance / Time</p>
            <p className="mt-2">
              Average Speed = 2ab / (a + b) for equal distances
            </p>
            <p className="mt-2">Relative speed (same direction) = |S₁ - S₂|</p>
            <p className="mt-2">
              Relative speed (opposite direction) = S₁ + S₂
            </p>
            <p className="mt-2">Boats: Downstream = b + s, Upstream = b - s</p>
          </div>

          <h3>Simple & Compound Interest</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>SI = (P × R × T) / 100</p>
            <p className="mt-2">CI = P(1 + R/100)ⁿ - P</p>
            <p className="mt-2">Difference for 2 years: CI - SI = P(R/100)²</p>
            <p className="mt-2">
              Difference for 3 years: CI - SI = PR²(300 + R) / 100³
            </p>
          </div>

          <h3>Number Properties</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>Sum of n natural numbers = n(n+1)/2</p>
            <p className="mt-2">Sum of squares = n(n+1)(2n+1)/6</p>
            <p className="mt-2">Sum of cubes = [n(n+1)/2]²</p>
            <p className="mt-2">Sum of first n odd = n²</p>
            <p className="mt-2">Sum of first n even = n(n+1)</p>
          </div>
        </section>

        {/* Section 4: Shortcuts */}
        <section
          id="quant-shortcuts"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            4. Calculation Shortcuts
          </h2>
          <p>These shortcuts can save 30-50% of your solving time:</p>

          <h3>Percentage Shortcuts</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Percentage</th>
                  <th className="p-3 text-left">Fraction</th>
                  <th className="p-3 text-left">Quick Calculation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">10%</td>
                  <td className="p-3">1/10</td>
                  <td className="p-3">Move decimal left 1 place</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">12.5%</td>
                  <td className="p-3">1/8</td>
                  <td className="p-3">Divide by 8</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">20%</td>
                  <td className="p-3">1/5</td>
                  <td className="p-3">Divide by 5</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">25%</td>
                  <td className="p-3">1/4</td>
                  <td className="p-3">Divide by 4</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">33.33%</td>
                  <td className="p-3">1/3</td>
                  <td className="p-3">Divide by 3</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">50%</td>
                  <td className="p-3">1/2</td>
                  <td className="p-3">Divide by 2</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">66.67%</td>
                  <td className="p-3">2/3</td>
                  <td className="p-3">Multiply by 2, divide by 3</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">75%</td>
                  <td className="p-3">3/4</td>
                  <td className="p-3">Multiply by 3, divide by 4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Multiplication Shortcuts</h3>
          <ul>
            <li>
              <strong>Multiply by 5:</strong> Divide by 2, then multiply by 10
            </li>
            <li>
              <strong>Multiply by 25:</strong> Divide by 4, then multiply by 100
            </li>
            <li>
              <strong>Multiply by 11:</strong> Sum adjacent digits, place in
              middle
            </li>
            <li>
              <strong>Square a number ending in 5:</strong> n5² = n(n+1)
              followed by 25
            </li>
          </ul>

          <h3>Division Shortcuts</h3>
          <ul>
            <li>
              <strong>Divisibility by 3:</strong> Sum of digits divisible by 3
            </li>
            <li>
              <strong>Divisibility by 4:</strong> Last 2 digits divisible by 4
            </li>
            <li>
              <strong>Divisibility by 8:</strong> Last 3 digits divisible by 8
            </li>
            <li>
              <strong>Divisibility by 9:</strong> Sum of digits divisible by 9
            </li>
            <li>
              <strong>Divisibility by 11:</strong> Difference of sum of
              alternate digits divisible by 11
            </li>
          </ul>

          <h3>Tables to Memorize</h3>
          <ul>
            <li>Multiplication tables: 1 to 20</li>
            <li>Squares: 1² to 30²</li>
            <li>Cubes: 1³ to 15³</li>
            <li>Powers of 2 and 3: Up to 2¹⁰ and 3⁷</li>
          </ul>
        </section>

        {/* Section 5: Logical */}
        <section
          id="logical"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            5. Logical Reasoning
          </h2>
          <p>
            Logical reasoning tests your ability to analyze patterns, make
            deductions, and solve abstract problems. Unlike quant, logic has no
            formulas—it requires structured thinking and practice.
          </p>

          <h3>High Priority Topics</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Seating Arrangements</p>
              <p className="text-sm text-muted-foreground">
                Linear, circular, rectangular seating with conditions
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Always draw diagrams. Start with the most
                constrained elements.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Blood Relations</p>
              <p className="text-sm text-muted-foreground">
                Family tree problems, relationship mapping
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Use + for male, - for female. Draw family
                trees.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Coding-Decoding</p>
              <p className="text-sm text-muted-foreground">
                Letter shifts, number codes, symbol-based codes
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Look for patterns in position changes.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Syllogisms</p>
              <p className="text-sm text-muted-foreground">
                All/Some/No statements and conclusions
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Use Venn diagrams. Check all possible
                cases.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Series & Patterns</p>
              <p className="text-sm text-muted-foreground">
                Number series, letter series, figure patterns
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Check for +/-, ×/÷, prime numbers,
                squares.
              </p>
            </div>
          </div>

          <h3>Medium Priority Topics</h3>
          <ul>
            <li>
              <strong>Direction Sense:</strong> North-South-East-West problems
            </li>
            <li>
              <strong>Puzzles:</strong> Multi-variable constraint problems
            </li>
            <li>
              <strong>Data Sufficiency:</strong> Are statements sufficient to
              answer?
            </li>
            <li>
              <strong>Statement-Conclusion:</strong> Valid deductions from given
              statements
            </li>
            <li>
              <strong>Ranking & Ordering:</strong> Position-based problems
            </li>
          </ul>

          <h3>Logical Reasoning Strategies</h3>
          <ul>
            <li>
              <strong>Always draw:</strong> Visual representations save time and
              reduce errors
            </li>
            <li>
              <strong>Start with definite info:</strong> Place fixed elements
              first, then relative ones
            </li>
            <li>
              <strong>Eliminate options:</strong> Often easier than solving
              directly
            </li>
            <li>
              <strong>Check edge cases:</strong> The answer often lies in
              boundary conditions
            </li>
            <li>
              <strong>Don&apos;t assume:</strong> Only use given information
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Practice seating arrangements and
              syllogisms extensively. They appear in almost every aptitude test
              and are high-scoring once mastered.
            </div>
          </div>
        </section>

        {/* Section 6: Verbal */}
        <section
          id="verbal"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            6. Verbal Ability
          </h2>
          <p>
            Verbal ability tests your English language skills—reading,
            comprehension, grammar, and vocabulary. It&apos;s often the easiest
            section to score in if you have basic English proficiency.
          </p>

          <h3>Key Topics</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Reading Comprehension</p>
              <p className="text-sm text-muted-foreground">
                Passage-based questions testing understanding and inference
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Read questions first, then skim passage
                for answers.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Sentence Correction</p>
              <p className="text-sm text-muted-foreground">
                Identify and correct grammatical errors
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Look for subject-verb agreement, tense
                consistency, modifiers.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Para Jumbles</p>
              <p className="text-sm text-muted-foreground">
                Arrange sentences in logical order
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Find the opening sentence first, then look
                for connectors.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Fill in the Blanks</p>
              <p className="text-sm text-muted-foreground">
                Choose correct word for context
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Understand the sentence meaning before
                looking at options.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Vocabulary</p>
              <p className="text-sm text-muted-foreground">
                Synonyms, antonyms, word meanings
              </p>
              <p className="mt-2 text-xs">
                <strong>Tip:</strong> Learn word roots—helps guess unknown
                words.
              </p>
            </div>
          </div>

          <h3>Grammar Rules to Master</h3>
          <ul>
            <li>
              <strong>Subject-Verb Agreement:</strong> Singular subjects take
              singular verbs
            </li>
            <li>
              <strong>Tense Consistency:</strong> Don&apos;t switch tenses
              unnecessarily
            </li>
            <li>
              <strong>Pronoun Reference:</strong> Pronouns must have clear
              antecedents
            </li>
            <li>
              <strong>Modifiers:</strong> Modifiers should be close to what they
              modify
            </li>
            <li>
              <strong>Parallelism:</strong> Similar ideas should have similar
              structure
            </li>
            <li>
              <strong>Articles:</strong> A/an/the usage rules
            </li>
          </ul>

          <h3>Vocabulary Building Strategy</h3>
          <ul>
            <li>Learn 10 new words daily</li>
            <li>Use flashcard apps like Magoosh Vocabulary Builder</li>
            <li>Read newspapers—The Hindu, Indian Express</li>
            <li>Note down unfamiliar words and look them up</li>
            <li>Learn word roots, prefixes, and suffixes</li>
          </ul>
        </section>

        {/* Section 7: Company */}
        <section
          id="company"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-primary" />
            7. Company-Specific Patterns
          </h2>
          <p>
            Different companies have different test patterns. Here&apos;s what
            to expect:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-600">TCS NQT</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Numerical Ability: 26 questions, 40 minutes</li>
                <li>• Verbal Ability: 24 questions, 30 minutes</li>
                <li>• Reasoning: 30 questions, 50 minutes</li>
                <li>• Focus: Average difficulty, time management crucial</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-600">Infosys</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Quantitative: 15 questions, 25 minutes</li>
                <li>• Logical: 15 questions, 25 minutes</li>
                <li>• Verbal: 20 questions, 20 minutes</li>
                <li>• Focus: More difficult quant, time pressure high</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-600">Wipro NLTH</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Written Communication: Essay writing</li>
                <li>• Aptitude: Quant, Logical, Verbal combined</li>
                <li>• Focus: Essay is crucial, unique format</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Cognizant GenC</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• English: 25 questions, 25 minutes</li>
                <li>• Quant: 20 questions, 25 minutes</li>
                <li>• Logical: 15 questions, 15 minutes</li>
                <li>• Focus: Balanced difficulty, good for freshers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Strategy */}
        <section
          id="strategy"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Timer className="h-6 w-6 text-primary" />
            8. Test-Taking Strategy
          </h2>

          <h3>Before the Test</h3>
          <ul>
            <li>Sleep well the night before—fatigue reduces performance</li>
            <li>Eat a light meal—avoid heavy food that makes you drowsy</li>
            <li>Reach early—settle your nerves before starting</li>
            <li>Keep ID and materials ready</li>
          </ul>

          <h3>During the Test</h3>
          <ul>
            <li>
              <strong>Quick scan:</strong> Briefly review all questions first
            </li>
            <li>
              <strong>Easy first:</strong> Answer questions you&apos;re
              confident about
            </li>
            <li>
              <strong>Mark and move:</strong> Don&apos;t get stuck—mark
              difficult ones and return
            </li>
            <li>
              <strong>Time allocation:</strong> Spend ~1 minute per question
              average
            </li>
            <li>
              <strong>Review time:</strong> Keep 10-15% time for review
            </li>
          </ul>

          <h3>Handling Negative Marking</h3>
          <ul>
            <li>If -0.25: Guess if you can eliminate 1 option</li>
            <li>If -0.33: Guess if you can eliminate 2 options</li>
            <li>If -1: Only answer if you&apos;re confident</li>
            <li>If no negative: Attempt all questions</li>
          </ul>

          <h3>Time Management Framework</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Phase</th>
                  <th className="p-3 text-left">Time %</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">First Pass</td>
                  <td className="p-3">60%</td>
                  <td className="p-3">Answer easy/medium questions</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Second Pass</td>
                  <td className="p-3">25%</td>
                  <td className="p-3">Attempt difficult questions</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Review</td>
                  <td className="p-3">15%</td>
                  <td className="p-3">Check answers, fix errors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 9: Preparation Plan */}
        <section
          id="preparation"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <ListChecks className="h-6 w-6 text-primary" />
            9. 30-Day Preparation Plan
          </h2>

          <h3>Week 1: Foundation</h3>
          <ul>
            <li>Day 1-2: Percentages, Profit & Loss concepts</li>
            <li>Day 3-4: Ratio, Proportion, Averages</li>
            <li>Day 5-6: Time & Work basics</li>
            <li>Day 7: Review + Mini mock test</li>
          </ul>

          <h3>Week 2: Core Topics</h3>
          <ul>
            <li>Day 8-9: Speed, Time & Distance</li>
            <li>Day 10-11: Number System, Algebra</li>
            <li>Day 12-13: Logical Reasoning - Seating, Blood Relations</li>
            <li>Day 14: Full mock test + analysis</li>
          </ul>

          <h3>Week 3: Advanced + Verbal</h3>
          <ul>
            <li>Day 15-16: Syllogisms, Coding-Decoding</li>
            <li>Day 17-18: Reading Comprehension</li>
            <li>Day 19-20: Grammar, Para Jumbles</li>
            <li>Day 21: Full mock test + analysis</li>
          </ul>

          <h3>Week 4: Practice & Polish</h3>
          <ul>
            <li>Day 22-24: Focus on weak areas</li>
            <li>Day 25-27: Mock tests daily</li>
            <li>Day 28-29: Light revision, shortcuts review</li>
            <li>Day 30: Rest and mental preparation</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Key:</strong> Consistency beats intensity. 30 minutes
              daily is better than 3 hours once a week. Track your progress with
              mock test scores.
            </div>
          </div>
        </section>

        {/* Section 10: Practice Problems */}
        <section
          id="practice"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-primary" />
            10. Practice Problems
          </h2>
          <p>Try these sample problems to test your understanding:</p>

          <h3>Quantitative</h3>
          <div className="my-4 rounded-lg border p-4">
            <p className="font-bold">Q1: Percentage</p>
            <p className="text-sm">
              If A is 20% more than B, then B is what percent less than A?
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-sm text-primary">
                Show Answer
              </summary>
              <p className="mt-2 text-sm">
                B is 16.67% less than A. (Using formula: 20/120 × 100 = 16.67%)
              </p>
            </details>
          </div>
          <div className="my-4 rounded-lg border p-4">
            <p className="font-bold">Q2: Time & Work</p>
            <p className="text-sm">
              A can complete work in 10 days, B in 15 days. How many days
              together?
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-sm text-primary">
                Show Answer
              </summary>
              <p className="mt-2 text-sm">
                6 days. (1/10 + 1/15 = 1/6, so 6 days together)
              </p>
            </details>
          </div>

          <h3>Logical Reasoning</h3>
          <div className="my-4 rounded-lg border p-4">
            <p className="font-bold">Q3: Series</p>
            <p className="text-sm">What comes next? 2, 6, 12, 20, 30, ?</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-sm text-primary">
                Show Answer
              </summary>
              <p className="mt-2 text-sm">42. (Pattern: n(n+1), so 6×7 = 42)</p>
            </details>
          </div>
          <div className="my-4 rounded-lg border p-4">
            <p className="font-bold">Q4: Blood Relation</p>
            <p className="text-sm">
              A is B&apos;s brother. C is A&apos;s mother. D is C&apos;s father.
              How is B related to D?
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-sm text-primary">
                Show Answer
              </summary>
              <p className="mt-2 text-sm">
                B is D&apos;s grandchild. (D → C → A & B)
              </p>
            </details>
          </div>

          <h3>Verbal</h3>
          <div className="my-4 rounded-lg border p-4">
            <p className="font-bold">Q5: Sentence Correction</p>
            <p className="text-sm">
              Find the error: &quot;Each of the students have submitted their
              assignment.&quot;
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-sm text-primary">
                Show Answer
              </summary>
              <p className="mt-2 text-sm">
                &quot;have&quot; should be &quot;has&quot;. &quot;Each&quot; is
                singular, requires singular verb.
              </p>
            </details>
          </div>
        </section>

        {/* Section 11: Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            11. Best Resources
          </h2>

          <h3>Books</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Quantitative Aptitude</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li>• RS Aggarwal - Quantitative Aptitude</li>
                <li>• Arun Sharma - CAT Quant</li>
                <li>• Abhijit Guha - Quantitative Aptitude</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Logical Reasoning</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li>• RS Aggarwal - Logical Reasoning</li>
                <li>• Arun Sharma - Logical Reasoning</li>
                <li>• MK Pandey - Reasoning</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Verbal Ability</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li>• Word Power Made Easy - Norman Lewis</li>
                <li>• Wren & Martin - Grammar</li>
                <li>• RS Aggarwal - Verbal Ability</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">All-in-One</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li>• RS Aggarwal - Complete Package</li>
                <li>• Arihant Placement Aptitude</li>
              </ul>
            </div>
          </div>

          <h3>Online Platforms</h3>
          <ul>
            <li>
              <strong>IndiaBix:</strong> Free practice with explanations
            </li>
            <li>
              <strong>PrepInsta:</strong> Company-specific preparation
            </li>
            <li>
              <strong>GeeksforGeeks:</strong> Technical + Aptitude
            </li>
            <li>
              <strong>Testbook/Gradeup:</strong> Mock tests
            </li>
            <li>
              <strong>Unacademy:</strong> Video courses
            </li>
          </ul>

          <h3>Apps</h3>
          <ul>
            <li>Magoosh Vocabulary Builder</li>
            <li>Pocket Aptitude</li>
            <li>RS Aggarwal Aptitude App</li>
          </ul>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            12. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">How much practice is enough?</p>
              <p className="mt-2 text-muted-foreground">
                Aim for 30-60 minutes daily for 30 days minimum. Quality over
                quantity—understand concepts, don&apos;t just solve
                mechanically.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                I&apos;m weak in math. Can I still crack aptitude tests?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Aptitude math is different from academic
                math—it&apos;s about patterns and shortcuts. With practice,
                anyone can improve significantly.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Are calculators allowed?</p>
              <p className="mt-2 text-muted-foreground">
                Usually no. That&apos;s why mental math shortcuts are crucial.
                Some online tests have built-in calculators for complex
                calculations.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I focus on speed or accuracy?</p>
              <p className="mt-2 text-muted-foreground">
                Accuracy first, then speed. A wrong answer with negative marking
                hurts more than skipping. Build speed gradually through
                practice.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How do I improve my weak areas?</p>
              <p className="mt-2 text-muted-foreground">
                Identify weak topics through mock tests. Study the concepts,
                practice 20-30 problems of that type, then take another mock.
                Repeat until confident.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is it possible to prepare in 1 week?</p>
              <p className="mt-2 text-muted-foreground">
                Possible but not ideal. Focus on high-frequency topics, learn
                shortcuts, and take 2-3 mock tests. You can still pass, but
                longer prep gives better scores.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Practicing Today</h2>
          <p>
            Aptitude tests reward consistent practice. The formulas and tricks
            in this guide will help, but real improvement comes from daily
            practice. Start with 30 minutes today—every question you solve
            brings you closer to your dream job.
          </p>
          <p>
            Remember: aptitude tests are learnable skills, not measures of
            intelligence. With the right approach, anyone can score high. Your
            placement success starts with the preparation you do today.
          </p>
          <p className="text-lg font-semibold text-primary">
            Every problem you practice today is a step toward your dream career.
            Start now! 📊
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/group-discussion-tips"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Group Discussion Tips
            </Link>
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Interview Questions
            </Link>
            <Link
              href="/blog/campus-placement-preparation"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Placement Preparation
            </Link>
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Roadmap
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on analysis of aptitude tests from 100+ companies and
                feedback from successful candidates.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
