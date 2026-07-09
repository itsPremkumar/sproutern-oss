import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Scale,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  FileText,
  Gavel,
  Building,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Internships: Complete Guide',
  description:
    'Break into legal profession with this comprehensive guide. Learn about law firm internships, corporate legal, and judicial clerkships.',
  keywords: [
    'legal internship',
    'law intern india',
    'corporate law internship',
    'law firm internship',
    'judicial clerkship',
  ],
  openGraph: {
    title: 'Legal Internships: Complete Guide',
    description: 'Start your legal career.',
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
          <div className="mb-4 flex items-center gap-2 text-slate-600">
            <Scale className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Legal Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            The legal profession offers diverse career paths. Learn how to
            secure impactful law internships in India.
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
              <span>16 min read</span>
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
                1. Types of Legal Internships
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
                href="#apply"
                className="text-primary hover:underline"
              >
                3. How to Apply
              </a>
            </li>
            <li>
              <a
                href="#firms"
                className="text-primary hover:underline"
              >
                4. Top Law Firms
              </a>
            </li>
            <li>
              <a
                href="#tips"
                className="text-primary hover:underline"
              >
                5. Interview Tips
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
              <span>Start interning from 1st year—experience matters</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Corporate law pays more, litigation builds skills faster
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Research and writing skills are non-negotiable</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Tier-1 law firms recruit heavily from NLUs</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Gavel className="h-6 w-6 text-primary" />
            1. Types of Legal Internships
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-slate-600">Law Firm Internship</p>
              <p className="text-muted-foreground">
                Corporate law, M&A, IP, litigation at top law firms
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-slate-600">In-House Legal</p>
              <p className="text-muted-foreground">
                Legal teams at companies (Tata, Reliance, startups)
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-slate-600">Judicial Clerkship</p>
              <p className="text-muted-foreground">
                High Courts and Supreme Court research assistance
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-slate-600">NGO/Legal Aid</p>
              <p className="text-muted-foreground">
                Human rights, pro bono work, public interest law
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
            <FileText className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>Legal Research:</strong> Finding relevant cases and
              statutes
            </li>
            <li>
              <strong>Legal Writing:</strong> Drafting contracts, memos, briefs
            </li>
            <li>
              <strong>Attention to Detail:</strong> Every word matters in law
            </li>
            <li>
              <strong>Communication:</strong> Client interaction and arguing
              cases
            </li>
          </ul>

          <h3>Good to Have</h3>
          <ul>
            <li>Knowledge of specific practice areas (M&A, IP, Tax)</li>
            <li>Legal tech tools (Manupatra, SCC Online)</li>
            <li>Moot court and debating experience</li>
            <li>Published articles or papers</li>
          </ul>
        </section>

        {/* Section 3: Apply */}
        <section
          id="apply"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            3. How to Apply
          </h2>

          <ul>
            <li>
              <strong>Tier-1 Firms:</strong> Apply 3-6 months in advance via
              email/website
            </li>
            <li>
              <strong>Judicial Clerkships:</strong> Apply through court websites
              or references
            </li>
            <li>
              <strong>Corporate:</strong> Apply via LinkedIn or referrals
            </li>
            <li>
              <strong>NGOs:</strong> Apply directly or through college placement
              cells
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Personalize each application. Mention
              why that specific firm/judge—generic applications rarely work.
            </div>
          </div>
        </section>

        {/* Section 4: Firms */}
        <section
          id="firms"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            4. Top Law Firms
          </h2>

          <h3>Tier-1 Firms</h3>
          <p>
            AZB & Partners, Cyril Amarchand Mangaldas, Khaitan & Co, Shardul
            Amarchand Mangaldas, Trilegal, JSA
          </p>

          <h3>Mid-Tier Firms</h3>
          <p>
            Nishith Desai Associates, L&L Partners, IndusLaw, Lakshmikumaran &
            Sridharan
          </p>

          <h3>In-House</h3>
          <p>Reliance, Tata Group, Flipkart, Google, Amazon Legal Teams</p>
        </section>

        {/* Section 5: Tips */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Interview Tips
          </h2>

          <ul>
            <li>Know your resume—be ready to discuss any listed experience</li>
            <li>Read recent judgments in your area of interest</li>
            <li>Prepare for "Why law?" and "Why this firm?" questions</li>
            <li>Demonstrate intellectual curiosity and willingness to learn</li>
          </ul>
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
              <p className="font-bold">When should I start interning?</p>
              <p className="mt-2 text-muted-foreground">
                Start from your first year. By final year, you should have 8-10
                internships across different practice areas.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Do legal internships pay?</p>
              <p className="mt-2 text-muted-foreground">
                Tier-1 firms pay ₹20K-80K/month. NGOs and smaller firms may be
                unpaid but offer great learning.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Deep Dive */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Scale className="h-6 w-6 text-primary" />
            Practice Areas Explained
          </h2>

          <h3>Corporate Law / M&A</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="font-bold text-slate-600">What You'll Do:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Due diligence on company records and contracts</li>
              <li>• Drafting and reviewing agreements (NDA, SHA, SPA)</li>
              <li>• Regulatory filings (SEBI, RBI, CCI)</li>
              <li>• Structuring transactions</li>
            </ul>
            <p className="mt-3 font-bold">Best For:</p>
            <p className="text-sm text-muted-foreground">
              Students interested in business, finance, and deal-making.
              Requires attention to detail and ability to work long hours.
            </p>
            <p className="mt-3 font-bold">Top Firms:</p>
            <p className="text-sm text-muted-foreground">
              Cyril Amarchand Mangaldas, AZB & Partners, Khaitan & Co
            </p>
          </div>

          <h3>Dispute Resolution / Litigation</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="font-bold text-slate-600">What You'll Do:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Researching case law and legal precedents</li>
              <li>• Drafting pleadings, petitions, and written submissions</li>
              <li>• Accompanying lawyers to court hearings</li>
              <li>• Analyzing evidence and building case strategy</li>
            </ul>
            <p className="mt-3 font-bold">Best For:</p>
            <p className="text-sm text-muted-foreground">
              Students who enjoy research, argumentation, and courtroom
              dynamics. Builds excellent analytical and advocacy skills.
            </p>
          </div>

          <h3>Intellectual Property (IP)</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="font-bold text-slate-600">What You'll Do:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Patent and trademark searches</li>
              <li>• Drafting licensing agreements</li>
              <li>• IP due diligence for M&A transactions</li>
              <li>• Infringement analysis and opinions</li>
            </ul>
            <p className="mt-3 font-bold">Best For:</p>
            <p className="text-sm text-muted-foreground">
              Students with science/engineering background or interest in
              technology, entertainment, or pharma industries.
            </p>
          </div>

          <h3>Banking & Finance</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="font-bold text-slate-600">What You'll Do:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Reviewing loan documentation</li>
              <li>• Structuring security packages</li>
              <li>• Regulatory compliance (RBI, SEBI)</li>
              <li>• Project finance and debt restructuring</li>
            </ul>
            <p className="mt-3 font-bold">Best For:</p>
            <p className="text-sm text-muted-foreground">
              Students interested in finance, numbers, and complex commercial
              transactions.
            </p>
          </div>
        </section>

        {/* Law Firm Tiers */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            Law Firm Tiers Explained
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">Tier</th>
                  <th className="border p-3 text-left font-semibold">Firms</th>
                  <th className="border p-3 text-left font-semibold">
                    Stipend
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Competition
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Tier-1</td>
                  <td className="border p-3">
                    CAM, AZB, Khaitan, SAM, Trilegal
                  </td>
                  <td className="border p-3">₹40K-80K/month</td>
                  <td className="border p-3">Very High</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Tier-2</td>
                  <td className="border p-3">NDA, L&L, IndusLaw, JSA</td>
                  <td className="border p-3">₹20K-40K/month</td>
                  <td className="border p-3">High</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Boutique</td>
                  <td className="border p-3">Specialized firms, Chambers</td>
                  <td className="border p-3">₹10K-25K/month</td>
                  <td className="border p-3">Moderate</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">In-House</td>
                  <td className="border p-3">Company legal teams</td>
                  <td className="border p-3">₹15K-50K/month</td>
                  <td className="border p-3">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cover Letter Template */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Cover Letter Template
          </h2>

          <p>
            A strong cover letter is essential for legal internship
            applications. Here's a proven structure:
          </p>

          <div className="my-6 rounded-lg border bg-muted p-5">
            <h4 className="mb-3 font-bold">Subject Line</h4>
            <p className="text-sm italic text-muted-foreground">
              Application for Summer Internship – [Your Name] – [Law School]
            </p>

            <h4 className="mb-3 mt-4 font-bold">Opening Paragraph</h4>
            <p className="text-sm italic text-muted-foreground">
              "I am a third-year student at [Law School] writing to apply for a
              summer internship at [Firm Name]. My interest in [specific
              practice area] and [reason for choosing this firm] make me eager
              to contribute to your team."
            </p>

            <h4 className="mb-3 mt-4 font-bold">Experience & Skills</h4>
            <p className="text-sm italic text-muted-foreground">
              "In my previous internship at [Firm/Organization], I [specific
              achievement]. My coursework in [subjects] and participation in
              [moot court/publication] have prepared me for rigorous legal
              research and drafting."
            </p>

            <h4 className="mb-3 mt-4 font-bold">Why This Firm</h4>
            <p className="text-sm italic text-muted-foreground">
              "I am particularly drawn to [Firm Name's] work in [specific
              matter/case]. The firm's reputation for [quality/culture] aligns
              with my goal of building a career in [area]."
            </p>

            <h4 className="mb-3 mt-4 font-bold">Call to Action</h4>
            <p className="text-sm italic text-muted-foreground">
              "I would welcome the opportunity to discuss how I can contribute
              to your team. Thank you for your consideration."
            </p>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            Day in the Life: Corporate Law Intern
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600">
                10
              </div>
              <div>
                <p className="font-semibold">10:00 AM - Arrive & Briefing</p>
                <p className="text-sm text-muted-foreground">
                  Arrive at office (flexible timing), check emails, get briefed
                  on the day's research tasks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600">
                11
              </div>
              <div>
                <p className="font-semibold">11:00 AM - Due Diligence</p>
                <p className="text-sm text-muted-foreground">
                  Review contracts for an M&A transaction, flag issues, update
                  due diligence tracker.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600">
                2
              </div>
              <div>
                <p className="font-semibold">2:00 PM - Research</p>
                <p className="text-sm text-muted-foreground">
                  Research SEBI regulations for a specific client query, draft a
                  memo summarizing findings.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600">
                5
              </div>
              <div>
                <p className="font-semibold">5:00 PM - Drafting</p>
                <p className="text-sm text-muted-foreground">
                  Draft first version of an NDA based on template, submit for
                  associate review.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600">
                8
              </div>
              <div>
                <p className="font-semibold">8:00 PM - Team Dinner</p>
                <p className="text-sm text-muted-foreground">
                  Occasionally, team dinners with associates and partners—great
                  for networking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Application Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                ✗
              </div>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Generic Cover Letters
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Sending the same letter to every firm without customization.
                  Mention specific matters the firm has handled.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                ✗
              </div>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Applying Too Late
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Tier-1 firms fill positions 3-6 months in advance. Apply
                  early—slots fill fast, especially for summers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                ✗
              </div>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Poor Resume Formatting
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Legal resumes should be conservative. No flashy designs,
                  colors, or photos. Clean, one-page format is standard.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                ✗
              </div>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not Following Up
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  A polite follow-up after 2-3 weeks is acceptable and shows
                  genuine interest. Don't spam, but don't disappear either.
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
                How many internships should I do in law school?
              </h3>
              <p className="text-muted-foreground">
                Aim for 8-10 internships across 5 years. Include diverse
                experiences: corporate law, litigation, in-house, judicial
                clerkship, and NGO. This shows breadth while allowing you to
                identify your preferred practice area.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is the law school I attend important for internships?
              </h3>
              <p className="text-muted-foreground">
                Yes, but not determinative. NLU students have advantages for
                Tier-1 firms, but strong applications from other schools are
                considered. CGPA, writing samples, and interview performance
                matter more than college name alone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I do a judicial clerkship?
              </h3>
              <p className="text-muted-foreground">
                Highly recommended for litigation aspirants. Clerkships with
                High Court and Supreme Court judges provide unparalleled
                exposure to judicial reasoning. These are competitive but look
                excellent on resumes.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I don't have any legal experience yet?
              </h3>
              <p className="text-muted-foreground">
                Normal for first-year students. Highlight moot court, legal aid
                cells, publications, and relevant coursework. Your first few
                internships build your foundation—focus on learning over
                prestige initially.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How important are grades for legal internships?
              </h3>
              <p className="text-muted-foreground">
                Tier-1 firms often have CGPA cutoffs (typically 55%+). However,
                strong writing samples, relevant experience, and interview
                performance can compensate for lower grades. Grades matter more
                for first few internships.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I convert an internship into a PPO?
              </h3>
              <p className="text-muted-foreground">
                Yes, many Tier-1 firms offer PPOs to outstanding interns.
                Perform well, show initiative, build relationships, and express
                interest. PPO conversion is common for final year/summer
                internships at top firms.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the difference between chambers and law firms?
              </h3>
              <p className="text-muted-foreground">
                Chambers are smaller litigation practices led by Senior
                Advocates. More exposure to courtroom work but less structured
                than firms. Law firms offer corporate and transactional work
                with more structured training programs.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I do international internships?
              </h3>
              <p className="text-muted-foreground">
                If possible, yes. International law firms, international
                organizations (UN, WTO), or foreign courts provide valuable
                perspective. However, prioritize quality Indian internships
                first—they're more relevant for Indian practice.
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
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Started with NGO internships, ended at CAM..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I'm from a non-NLU college. My first two internships were at
                legal aid clinics. By third year, I had built enough experience
                to get a Tier-2 firm internship. My final year summer at CAM
                converted to a PPO." — Ananya, Symbiosis Law School
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Judicial clerkship changed my career path..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I was set on corporate law until I clerked with a Delhi High
                Court judge. Watching complex constitutional matters unfold
                changed my perspective. Now I'm building a litigation practice."
                — Rahul, NLUD
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Cold emailing worked when nothing else did..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I emailed 30 firms with personalized cover letters. Got 3
                responses and 1 offer. That internship taught me more than any
                classroom. Persistence pays off in legal job hunting." — Priya,
                Campus Law Centre
              </p>
            </div>
          </div>
        </section>

        {/* Application Timeline */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            Best Time to Apply
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Internship Type
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Apply By
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Internship Period
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Summer (Tier-1)</td>
                  <td className="border p-3">December - February</td>
                  <td className="border p-3">May - July</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Summer (Others)</td>
                  <td className="border p-3">February - April</td>
                  <td className="border p-3">May - July</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Winter</td>
                  <td className="border p-3">September - November</td>
                  <td className="border p-3">December - January</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Judicial Clerkship
                  </td>
                  <td className="border p-3">3-4 months in advance</td>
                  <td className="border p-3">Varies by judge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Legal Research Resources */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Essential Legal Research Tools
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Manupatra</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive Indian legal database. Essential for case law,
                statutes, and journals. Most firms provide access.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">SCC Online</h4>
              <p className="text-sm text-muted-foreground">
                Supreme Court Cases database. Gold standard for case law
                research and legal commentary.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">India Kanoon</h4>
              <p className="text-sm text-muted-foreground">
                Free legal search engine. Great for quick searches and
                preliminary research.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Westlaw / LexisNexis</h4>
              <p className="text-sm text-muted-foreground">
                International legal databases. Essential for cross-border
                matters and foreign law research.
              </p>
            </div>
          </div>
        </section>

        {/* Skills to Develop */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Skills to Develop Before Interning
          </h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-green-600">Legal Research</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Find relevant case law efficiently</li>
                <li>• Navigate legal databases</li>
                <li>• Shepardize/check case status</li>
                <li>• Statutory interpretation</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-blue-600">Legal Writing</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Clear, concise memos</li>
                <li>• Contract drafting basics</li>
                <li>• Pleadings and applications</li>
                <li>• Email communication</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-purple-600">
                Professional Skills
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Time management</li>
                <li>• Attention to detail</li>
                <li>• Professional communication</li>
                <li>• Confidentiality awareness</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-orange-600">Tech Skills</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Microsoft Word (advanced)</li>
                <li>• Excel for data analysis</li>
                <li>• Legal tech platforms</li>
                <li>• Document management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Application Preparation Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Updated resume (one-page, conservative format)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Writing sample (research paper or memo)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Cover letter template (to customize per firm)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Academic transcripts</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>References from professors or past supervisors</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Research on target firms (recent deals, cases)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Professional email address</span>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Build Your Legal Career</h2>
          <p>
            Legal internships are the foundation of a successful law career.
            Start early, diversify your experience, and always maintain
            professional relationships.
          </p>
          <p>
            The legal profession values hard work, attention to detail, and
            intellectual rigor. Every internship—whether at a top firm or a
            small NGO—teaches you something valuable.
          </p>
          <p className="text-lg font-semibold text-primary">
            The law rewards the prepared. Start preparing today. ⚖️
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/cold-email-templates-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cold Email Templates
            </Link>
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
            </Link>
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Internship Guide
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
                Based on insights from law professionals at top firms.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
