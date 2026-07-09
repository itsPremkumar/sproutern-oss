import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Building2,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Briefcase,
  Brain,
  BarChart,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consulting Internships: Complete Guide',
  description:
    'Break into consulting with this comprehensive guide. Learn about MBB, Big 4, and boutique firms, plus case interview preparation.',
  keywords: [
    'consulting internship',
    'mbb internship india',
    'mckinsey bain bcg',
    'case interview preparation',
    'consulting career',
  ],
  openGraph: {
    title: 'Consulting Internships: Complete Guide',
    description: 'Break into the consulting industry.',
    type: 'article',
    publishedTime: '2025-12-01T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-emerald-600">
            <Building2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Consulting Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Consulting offers steep learning curves, diverse projects, and
            excellent compensation. Here's how to break in.
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
              <span>18 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                1. Types of Consulting Firms
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Required Skills
              </a>
            </li>
            <li>
              <a
                href="#interview"
                className="text-primary hover:underline"
              >
                3. Interview Process
              </a>
            </li>
            <li>
              <a
                href="#case"
                className="text-primary hover:underline"
              >
                4. Case Interview Prep
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                5. Top Firms
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                6. FAQs
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
                Case interviews are the core of consulting recruitment
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Structured thinking is more important than domain knowledge
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Practice 50+ cases before interviews</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Big 4 is more accessible than MBB for undergrads</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            1. Types of Consulting Firms
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-emerald-500 py-2 pl-4">
              <p className="font-bold">MBB (McKinsey, Bain, BCG)</p>
              <p className="text-muted-foreground">
                Top-tier strategy consulting. Highly competitive, highest pay.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 py-2 pl-4">
              <p className="font-bold">Tier 2 Strategy</p>
              <p className="text-muted-foreground">
                Kearney, Oliver Wyman, Strategy&. Similar work, slightly less
                brand.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 py-2 pl-4">
              <p className="font-bold">Big 4 Consulting</p>
              <p className="text-muted-foreground">
                Deloitte, EY, KPMG, PwC. More accessible, broad offerings.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 py-2 pl-4">
              <p className="font-bold">Boutique Firms</p>
              <p className="text-muted-foreground">
                Specialized in specific industries or functions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <ul>
            <li>
              <strong>Structured thinking:</strong> Break problems into
              frameworks
            </li>
            <li>
              <strong>Communication:</strong> Clear, concise articulation
            </li>
            <li>
              <strong>Analytical skills:</strong> Comfortable with numbers and
              data
            </li>
            <li>
              <strong>Business acumen:</strong> Understanding of how businesses
              work
            </li>
            <li>
              <strong>PowerPoint/Excel:</strong> Consulting tools of the trade
            </li>
          </ul>
        </section>

        {/* Section 3: Interview */}
        <section
          id="interview"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            3. Interview Process
          </h2>

          <ol>
            <li>
              <strong>Resume Screen:</strong> CGPA, extracurriculars, leadership
            </li>
            <li>
              <strong>Online Assessment:</strong> McKinsey Solve, numerical
              tests
            </li>
            <li>
              <strong>Fit Interview:</strong> Why consulting? Why this firm?
            </li>
            <li>
              <strong>Case Interview:</strong> Solve a business problem live
            </li>
            <li>
              <strong>Final Round:</strong> Multiple case interviews with
              partners
            </li>
          </ol>
        </section>

        {/* Section 4: Case */}
        <section
          id="case"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BarChart className="h-6 w-6 text-primary" />
            4. Case Interview Preparation
          </h2>

          <h3>Common Case Types</h3>
          <ul>
            <li>Profitability (why are profits declining?)</li>
            <li>Market entry (should we enter X market?)</li>
            <li>M&A (should we acquire company X?)</li>
            <li>Pricing (how should we price this product?)</li>
            <li>Operations (how do we reduce costs?)</li>
          </ul>

          <h3>Resources</h3>
          <ul>
            <li>Case in Point (book)</li>
            <li>Victor Cheng videos (YouTube)</li>
            <li>PrepLounge (practice platform)</li>
            <li>Peer practice (most important)</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Practice with real people, not just
              alone. The interactiveness of cases is what's tested.
            </div>
          </div>
        </section>

        {/* Section 5: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            5. Top Firms Hiring in India
          </h2>

          <h3>MBB</h3>
          <p>
            McKinsey, Bain, BCG (very competitive, mostly from IIMs/top
            B-schools)
          </p>

          <h3>Tier 2</h3>
          <p>Kearney, Oliver Wyman, LEK, Strategy&</p>

          <h3>Big 4</h3>
          <p>Deloitte Consulting, EY-Parthenon, PwC Strategy&, KPMG</p>
        </section>

        {/* Section 6: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            6. FAQs
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">Can undergrads get into MBB?</p>
              <p className="mt-2 text-muted-foreground">
                Rare but possible. Most MBB hires in India are from IIMs. Big 4
                is more accessible for undergrads.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How many cases should I practice?</p>
              <p className="mt-2 text-muted-foreground">
                50+ quality cases with feedback is a good benchmark. Quality
                over quantity.
              </p>
            </div>
          </div>
        </section>

        {/* Firm Tiers Deep Dive */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            Consulting Firm Tiers: Deep Dive
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-emerald-600">
                MBB (McKinsey, Bain, BCG)
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                The pinnacle of consulting. Work on the most strategic problems
                for CEOs and boards. Intense but unparalleled learning.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Intern Stipend:</span>
                  <span className="font-semibold">₹1.5-2.5L/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Full-time CTC:</span>
                  <span className="font-semibold">₹35-50 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Primary Target:</span>
                  <span className="font-semibold">IIMs, ISB, top IITs</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-emerald-600">
                Tier 2 Strategy
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Similar strategic work to MBB. Kearney, Oliver Wyman, Strategy&,
                LEK. Often better work-life balance.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Intern Stipend:</span>
                  <span className="font-semibold">₹80K-1.5L/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Full-time CTC:</span>
                  <span className="font-semibold">₹25-40 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Primary Target:</span>
                  <span className="font-semibold">
                    IIMs, top B-schools, IITs
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-emerald-600">
                Big 4 Consulting
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Broader range of projects from strategy to implementation. More
                accessible entry point. Can lateral to MBB later.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Intern Stipend:</span>
                  <span className="font-semibold">₹40K-80K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Full-time CTC:</span>
                  <span className="font-semibold">₹10-20 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Primary Target:</span>
                  <span className="font-semibold">
                    Top colleges, diverse backgrounds
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Frameworks */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BarChart className="h-6 w-6 text-primary" />
            Essential Case Frameworks
          </h2>

          <p>
            Frameworks give you a starting point, but don't apply them rigidly.
            Adapt based on the specific problem.
          </p>

          <h3>1. Profitability Framework</h3>
          <ul>
            <li>Revenue side: Price × Quantity (volume), customer segments</li>
            <li>Cost side: Fixed vs Variable, major cost buckets</li>
            <li>Look for changes: What changed? When? Why?</li>
          </ul>

          <h3>2. Market Entry Framework</h3>
          <ul>
            <li>Market: Size, growth, trends, competition</li>
            <li>Company: Capabilities, resources, fit</li>
            <li>Entry mode: Organic, acquisition, partnership</li>
          </ul>

          <h3>3. M&A Framework</h3>
          <ul>
            <li>Strategic fit: Why acquire? Synergies?</li>
            <li>Valuation: What's it worth?</li>
            <li>Integration: How to combine operations?</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> The best candidates create custom
              frameworks for each case. Start with basics, then build intuition
              to customize.
            </div>
          </div>
        </section>

        {/* Sample Case Walkthrough */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Sample Case Walkthrough
          </h2>

          <div className="my-6 rounded-lg border bg-muted p-5">
            <h4 className="mb-3 font-bold">
              Case: "A retail chain's profits dropped 20% last year. Why?"
            </h4>

            <h5 className="mt-4 font-semibold">Step 1: Clarify</h5>
            <p className="text-sm text-muted-foreground">
              Ask: Is this all stores or specific locations? When did decline
              start? Are competitors seeing similar trends? What products?
            </p>

            <h5 className="mt-4 font-semibold">Step 2: Structure</h5>
            <p className="text-sm text-muted-foreground">
              "I'll look at Revenue (price × volume) and Costs (fixed,
              variable). Can you share which side saw the bigger change?"
            </p>

            <h5 className="mt-4 font-semibold">Step 3: Analyze</h5>
            <p className="text-sm text-muted-foreground">
              "Revenue is down 15%. Let me break down: Did prices drop or did we
              lose customers? Data shows customer count is flat but basket size
              dropped. Why might customers buy fewer items per visit?"
            </p>

            <h5 className="mt-4 font-semibold">Step 4: Synthesize</h5>
            <p className="text-sm text-muted-foreground">
              "Key finding: Basket size dropped due to stockouts in popular
              categories. Inventory management issues are the root cause.
              Recommend: Fix supply chain, monitor stockout rates."
            </p>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of a
            Consulting Intern
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                8:30
              </div>
              <div>
                <p className="font-semibold">Morning Check-in</p>
                <p className="text-sm text-muted-foreground">
                  Review overnight emails, prep for day's meetings. Consulting
                  is client-facing, so days are unpredictable.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                9:30
              </div>
              <div>
                <p className="font-semibold">Team Standup</p>
                <p className="text-sm text-muted-foreground">
                  Quick sync with project team. Discuss blockers, priorities,
                  and what's needed from each person today.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                10:00
              </div>
              <div>
                <p className="font-semibold">Analysis Work</p>
                <p className="text-sm text-muted-foreground">
                  Build Excel models, analyze data, develop insights. This is
                  where you'll spend most of your time as an intern.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                14:00
              </div>
              <div>
                <p className="font-semibold">Client Meeting Prep</p>
                <p className="text-sm text-muted-foreground">
                  Prepare slides, refine messaging. Consultants spend a lot of
                  time making complex ideas simple and visual.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                16:00
              </div>
              <div>
                <p className="font-semibold">Client Workshop</p>
                <p className="text-sm text-muted-foreground">
                  Present findings, facilitate discussion. As an intern, you may
                  present one slide or just observe and learn.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                19:00
              </div>
              <div>
                <p className="font-semibold">Wrap Up & Debrief</p>
                <p className="text-sm text-muted-foreground">
                  Capture action items, plan for tomorrow. Consulting days often
                  run long, especially during key deliverables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* More FAQs */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            More Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the work-life balance like?
              </h3>
              <p className="text-muted-foreground">
                Demanding. Expect 60-80 hour weeks during busy periods, with
                travel. But many consultants find the learning and exposure
                worth it, especially early career.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can non-MBA candidates get into consulting?
              </h3>
              <p className="text-muted-foreground">
                Yes! Big 4 actively recruits undergrads. MBB occasionally
                recruits from top IITs for specific practices. An MBA from a top
                school is the most common path to MBB.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the exit options after consulting?
              </h3>
              <p className="text-muted-foreground">
                Excellent. Strategy roles at corporates, private equity,
                startups (often as founders or CXOs), and business development.
                Consulting is a great career accelerator.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I prepare for McKinsey Solve?
              </h3>
              <p className="text-muted-foreground">
                Practice games that test ecosystem thinking and pattern
                recognition. There's no guaranteed prep, but being comfortable
                with complex simulations helps. Take practice tests online.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is domain expertise important?
              </h3>
              <p className="text-muted-foreground">
                Not initially. Consulting values structured thinking and
                learning ability. Domain expertise develops as you work on
                projects. Generalist skills are more important early on.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I find case practice partners?
              </h3>
              <p className="text-muted-foreground">
                College peers preparing for consulting, PrepLounge platform,
                LinkedIn groups, and WhatsApp communities. Having 3-5 regular
                partners who give honest feedback is ideal.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-5 dark:bg-emerald-950">
              <p className="font-semibold text-emerald-900 dark:text-emerald-100">
                "200 cases later, I got into McKinsey..."
              </p>
              <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-200">
                "I practiced 200+ cases over 6 months. Found partners on
                PrepLounge and our IIM WhatsApp group. The structured practice
                made all the difference. Now at McKinsey Mumbai." — Rahul, IIM
                Ahmedabad
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-5 dark:bg-emerald-950">
              <p className="font-semibold text-emerald-900 dark:text-emerald-100">
                "From Big 4 to BCG in 3 years..."
              </p>
              <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-200">
                "Started at Deloitte Consulting after undergrad. Got great
                project experience, did my MBA, and then recruited into BCG. Big
                4 is a valid stepping stone." — Priya, BCG Delhi
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-5 dark:bg-emerald-950">
              <p className="font-semibold text-emerald-900 dark:text-emerald-100">
                "Engineering to Kearney..."
              </p>
              <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-200">
                "I'm a mechanical engineer from IIT Kharagpur. Realized I loved
                problem-solving more than core engineering. Prepared intensively
                for 4 months and got into Kearney's undergrad program." — Vikram
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Consulting Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understand basic case frameworks</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Practiced 50+ cases with partners</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can do mental math quickly and accurately</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Prepared "Why Consulting?" story</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Strong Excel and PowerPoint skills</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Read business news regularly</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have 3-4 strong behavioral stories (STAR format)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Researched target firms thoroughly</span>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Case Interview Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Jumping to conclusions
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Take time to structure. Rushing to answers without analysis is
                  a red flag.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Memorizing frameworks rigidly
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Frameworks should be adapted, not applied mechanically.
                  Interviewers can tell when you're just reciting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not asking clarifying questions
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Consultants clarify scope. Asking smart questions shows
                  client-readiness and structured thinking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Forgetting to synthesize
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Always end with a clear recommendation. Don't just list
                  findings—state what the client should DO.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8-Week Prep Plan */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Your 8-Week Case Prep Plan
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-600">
                1-2
              </div>
              <div>
                <p className="font-semibold">Weeks 1-2: Learn Frameworks</p>
                <p className="text-sm text-muted-foreground">
                  Read Case in Point. Watch Victor Cheng videos. Understand
                  profitability, market entry, and M&A frameworks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-600">
                3-4
              </div>
              <div>
                <p className="font-semibold">Weeks 3-4: Solo Practice</p>
                <p className="text-sm text-muted-foreground">
                  Practice structuring cases alone. Write out frameworks for
                  different scenarios. Build mental math speed.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-600">
                5-6
              </div>
              <div>
                <p className="font-semibold">Weeks 5-6: Partner Practice</p>
                <p className="text-sm text-muted-foreground">
                  Find 3-5 practice partners. Do 2-3 cases per day. Give and
                  receive detailed feedback after each case.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-600">
                7-8
              </div>
              <div>
                <p className="font-semibold">Weeks 7-8: Simulate Interviews</p>
                <p className="text-sm text-muted-foreground">
                  Full mock interviews with fit + case. Practice with people
                  who've worked in consulting if possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mental Math Tips */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            Mental Math Tips
          </h2>

          <p>
            Quick, accurate math is essential in case interviews. Here are tips:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Break down complex calculations</p>
              <p className="text-sm text-muted-foreground">
                450 × 80 = 450 × 8 × 10 = 3,600 × 10 = 36,000
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Use percentages cleverly</p>
              <p className="text-sm text-muted-foreground">
                15% of 240 = 10% (24) + 5% (12) = 36
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Know common fractions</p>
              <p className="text-sm text-muted-foreground">
                1/8 = 12.5%, 1/6 = 16.7%, 3/8 = 37.5%, 5/8 = 62.5%
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Round wisely</p>
              <p className="text-sm text-muted-foreground">
                It's okay to round ₹487,000 to ₹500,000 for estimation. State
                your rounding assumption clearly.
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Daily Practice:</strong> Spend 10-15 minutes daily on
              mental math apps like Magoosh or simple spreadsheet drills. Speed
              improves with consistent practice.
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Best Preparation Resources
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Books</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Case in Point - Marc Cosentino</li>
                <li>• Cracking the Case - David Ohrvall</li>
                <li>• The McKinsey Way - Ethan Rasiel</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Online Platforms</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• PrepLounge (case practice)</li>
                <li>• CaseCoach (drills and practice)</li>
                <li>• Prepmatter (focus on target companies)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">YouTube</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Victor Cheng (case interview mastery)</li>
                <li>• PrepLounge (case walkthroughs)</li>
                <li>• Management Consulted (frameworks)</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Start Casing</h2>
          <p>
            Consulting rewards structured thinking and clear communication.
            Start practicing cases, read business news, and build your
            analytical muscles.
          </p>
          <p>
            The consulting interview is demanding but learnable. With dedicated
            practice and the right approach, you can break into this rewarding
            career path.
          </p>
          <p className="text-lg font-semibold text-primary">
            The consulting interview is a learnable skill. Start practicing
            today. 📊
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
              Behavioral Interview Guide
            </Link>
            <Link
              href="/blog/finance-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Finance Internships
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Internships
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
                Based on insights from consultants at MBB and Big 4.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
