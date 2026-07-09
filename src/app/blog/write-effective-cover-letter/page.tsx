import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  FileText,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Heart,
  Sparkles,
  AlertCircle,
  Mail,
  Zap,
  Briefcase,
  PenTool,
  Search,
  ThumbsUp,
  ThumbsDown,
  XCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Write a Cover Letter That Gets Read Case Study',
  description:
    'Master cover letter writing with proven templates, real examples, and paragraph-by-paragraph breakdown. Learn what recruiters actually want to see.',
  keywords: [
    'cover letter',
    'cover letter template',
    'how to write cover letter',
    'cover letter for internship',
    'cover letter examples',
    'job application letter',
    'getting an interview',
  ],
  openGraph: {
    title: 'How to Write a Cover Letter That Gets Read',
    description:
      'Proven templates and strategies for cover letters that land interviews.',
    type: 'article',
    publishedTime: '2025-10-18T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        {/* Header */}
        <header className="not-prose mb-12 border-b pb-12">
          <div className="mb-4 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <FileText className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Job Applications
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            How to Write a Cover Letter That Actually Gets Read
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
            Most cover letters get skimmed in 7 seconds. This guide teaches you
            how to write one that stops the scroll, grabs attention, and makes
            recruiters eager to call you.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1">
              <Calendar className="h-4 w-4" />
              <span>Updated October 18,</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1">
              <Clock className="h-4 w-4" />
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-12 rounded-xl border-l-4 border-indigo-500 bg-indigo-50 p-8 shadow-sm dark:bg-indigo-950/30">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-indigo-900 dark:text-indigo-200">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            What Recruiters Say
          </h2>
          <div className="grid gap-6 text-sm md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-1 rounded-lg bg-white/50 p-4 dark:bg-white/5">
              <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                83%
              </span>
              <span className="text-indigo-900 dark:text-indigo-200">
                of hiring managers say a great cover letter can win an interview
                even if the resume is imperfect.
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg bg-white/50 p-4 dark:bg-white/5">
              <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                45%
              </span>
              <span className="text-indigo-900 dark:text-indigo-200">
                reject applications with generic "Dear Sir/Madam" openings
                immediately.
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg bg-white/50 p-4 dark:bg-white/5">
              <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                7 sec
              </span>
              <span className="text-indigo-900 dark:text-indigo-200">
                average time spent on the first scan of a cover letter.
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg bg-white/50 p-4 dark:bg-white/5">
              <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                76%
              </span>
              <span className="text-indigo-900 dark:text-indigo-200">
                prefer personalized letters mentioning their specific company
                news or challenges.
              </span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-12 rounded-xl bg-slate-50 p-8 shadow-sm dark:bg-slate-900/50">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            📋 What You'll Learn
          </h2>
          <ol className="grid gap-4 text-sm md:grid-cols-2 lg:text-base">
            <li>
              <Link
                href="#purpose"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  1
                </div>
                Purpose of a Cover Letter
              </Link>
            </li>
            <li>
              <Link
                href="#structure"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  2
                </div>
                The Perfect Structure
              </Link>
            </li>
            <li>
              <Link
                href="#opening"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  3
                </div>
                Hook Them in Paragraph 1
              </Link>
            </li>
            <li>
              <Link
                href="#body"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  4
                </div>
                The Body: Prove Your Value
              </Link>
            </li>
            <li>
              <Link
                href="#closing"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  5
                </div>
                Closing with Confidence
              </Link>
            </li>
            <li>
              <Link
                href="#scenarios"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  6
                </div>
                Strategies for Specific Scenarios
              </Link>
            </li>
            <li>
              <Link
                href="#examples"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  7
                </div>
                Full Examples
              </Link>
            </li>
            <li>
              <Link
                href="#mistakes"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  8
                </div>
                Common Mistakes to Avoid
              </Link>
            </li>
            <li>
              <Link
                href="#checklist"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  9
                </div>
                Final Checklist
              </Link>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <p className="lead mb-6 text-xl text-gray-600 dark:text-gray-300">
            In a world of one-click LinkedIn applications and automated tracking
            systems (ATS), is the cover letter dead? Absolutely not.
          </p>
          <p className="mb-4">
            Think of your resume as the "Spec Sheet"—it lists features,
            dimensions, and capacities. The cover letter is the "Sales Pitch"—it
            explains why those features matter, tells a story, and creates an
            emotional connection.
          </p>
          <p className="mb-4">
            While some companies (like tech giants) may make them optional, for
            startups, creative roles, and competitive internships, a
            well-crafted cover letter is often the tie-breaker between two
            equally qualified candidates.
          </p>
          <p>
            This guide will teach you exactly how to write a cover letter that
            gets recruiters excited to interview you, using proven psychological
            triggers and professional formatting.
          </p>
        </section>

        {/* Purpose */}
        <section
          id="purpose"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              1. The Purpose of a Cover Letter
            </h2>
          </div>

          <p className="mb-6">
            Understanding the "Why" prevents you from writing a boring "What".
          </p>

          <div className="not-prose grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-green-100 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/20">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800 dark:text-green-300">
                <CheckCircle className="h-5 w-5" /> What a Cover Letter IS
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <span className="font-bold">•</span> Your chance to tell a
                  story your resume constraints prevent.
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="font-bold">•</span> An opportunity to show
                  personality, humor, and enthusiasm.
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="font-bold">•</span> A way to explain gaps,
                  career switches, or unique situations.
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="font-bold">•</span> Your customized pitch for
                  why YOU fit THIS specific team.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-100 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/20">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-red-800 dark:text-red-300">
                <XCircle className="h-5 w-5" /> What a Cover Letter ISN'T
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <span className="font-bold">•</span> A prose version of your
                  resume (don't just repeat bullets).
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="font-bold">•</span> A list of everything
                  you've ever done since high school.
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="font-bold">•</span> A generic template where
                  you only change the company name.
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="font-bold">•</span> About what YOU want
                  (salary, learning). It's about what you GIVE.
                </li>
              </ul>
            </div>
          </div>

          <div className="my-8 flex gap-4 rounded-xl border border-yellow-100 bg-yellow-50 p-6 dark:border-yellow-900/20 dark:bg-yellow-900/10">
            <Lightbulb className="h-6 w-6 flex-shrink-0 text-yellow-600" />
            <div>
              <h4 className="mb-1 font-bold text-yellow-900 dark:text-yellow-200">
                Key Insight
              </h4>
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                Your resume answers "Can they do the job?" Your cover letter
                answers "Do we want to work with them?" and "Do they really want
                THIS job?"
              </p>
            </div>
          </div>
        </section>

        {/* Structure */}
        <section
          id="structure"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">2. The Perfect Structure</h2>
          </div>

          <p className="mb-6">
            The best cover letters follow a logical narrative arc. We call this
            the <strong>HOOK-PITCH-FIT-CLOSE</strong> formula.
          </p>

          <div className="not-prose space-y-6">
            <div className="flex flex-col gap-4 rounded-lg border border-indigo-100 bg-indigo-50 p-4 dark:bg-indigo-900/20 md:flex-row">
              <div className="text-sm font-bold uppercase tracking-wide text-indigo-700 dark:text-indigo-300 md:w-1/4">
                Paragraph 1: The Hook
              </div>
              <div className="md:w-3/4">
                <p className="mb-1 font-semibold">Grab attention instantly.</p>
                <p className="text-sm text-muted-foreground">
                  State the role you're applying for and a "hook"—a major
                  achievement, a personal connection to the product, or a
                  referral.
                </p>
                <p className="mt-2 font-mono text-xs text-indigo-600">
                  Length: 2-3 sentences
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-green-100 bg-green-50 p-4 dark:bg-green-900/20 md:flex-row">
              <div className="text-sm font-bold uppercase tracking-wide text-green-700 dark:text-green-300 md:w-1/4">
                Paragraph 2: The Pitch
              </div>
              <div className="md:w-3/4">
                <p className="mb-1 font-semibold">Prove you can do the job.</p>
                <p className="text-sm text-muted-foreground">
                  Select 2-3 top requirements from the Job Description and
                  provide evidence (PAR method) that you have mastered them.
                </p>
                <p className="mt-2 font-mono text-xs text-green-600">
                  Length: 4-6 sentences
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-blue-100 bg-blue-50 p-4 dark:bg-blue-900/20 md:flex-row">
              <div className="text-sm font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300 md:w-1/4">
                Paragraph 3: The Fit
              </div>
              <div className="md:w-3/4">
                <p className="mb-1 font-semibold">Why them? Why you?</p>
                <p className="text-sm text-muted-foreground">
                  Demonstrate knowledge of their culture, mission, or recent
                  news. Show why you align with their values.
                </p>
                <p className="mt-2 font-mono text-xs text-blue-600">
                  Length: 3-4 sentences
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-purple-100 bg-purple-50 p-4 dark:bg-purple-900/20 md:flex-row">
              <div className="text-sm font-bold uppercase tracking-wide text-purple-700 dark:text-purple-300 md:w-1/4">
                Paragraph 4: The Close
              </div>
              <div className="md:w-3/4">
                <p className="mb-1 font-semibold">Call to Action.</p>
                <p className="text-sm text-muted-foreground">
                  Reiterate enthusiasm. Proposal a meeting/chat. Thank them.
                </p>
                <p className="mt-2 font-mono text-xs text-purple-600">
                  Length: 2 sentences
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Opening */}
        <section
          id="opening"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              3. Hook Them in Paragraph 1
            </h2>
          </div>

          <p className="mb-6">
            The opening is your "headline". If it's boring, they won't read the
            rest.
          </p>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-red-50/50 p-4">
              <h4 className="mb-2 flex items-center gap-2 font-bold text-red-600">
                <ThumbsDown className="h-4 w-4" /> The Boring Way
              </h4>
              <p className="mb-2 text-sm italic text-muted-foreground">
                "To Whom It May Concern, I am writing to apply for the Software
                Engineering Intern position listed on LinkedIn. I am a student
                at XYZ University and I believe I am a good fit."
              </p>
              <p className="text-xs font-semibold text-red-500">
                Why it fails: Generic, weak, passive.
              </p>
            </div>
            <div className="rounded-lg border bg-green-50/50 p-4">
              <h4 className="mb-2 flex items-center gap-2 font-bold text-green-600">
                <ThumbsUp className="h-4 w-4" /> The Winning Way
              </h4>
              <p className="mb-2 text-sm italic text-muted-foreground">
                "When I built a campus event finder that helped 500+ students
                connect, I realized my passion for building community tools.
                That's why I'm thrilled to apply for the Software Engineering
                role at Meetup: your mission to foster real-world connections
                aligns perfectly with my drive to build impactful tech."
              </p>
              <p className="text-xs font-semibold text-green-500">
                Why it wins: Starts with achievement, connects to mission, shows
                specific company interest.
              </p>
            </div>
          </div>

          <h3 className="mb-4 text-xl font-bold">
            3 Formulas for a Killer Hook
          </h3>
          <div className="not-prose space-y-4">
            <div className="rounded-lg border bg-slate-50 p-4 dark:bg-slate-900">
              <p className="mb-1 font-bold text-indigo-600">
                1. The "Achievement" Hook
              </p>
              <p className="text-sm italic">
                "Having recently led a team used [Methodology] to increase
                [Metric] by [X%], I was excited to see [Company]'s opening for a
                [Role] focused on [Goal]."
              </p>
            </div>
            <div className="rounded-lg border bg-slate-50 p-4 dark:bg-slate-900">
              <p className="mb-1 font-bold text-indigo-600">
                2. The "Company Fan" Hook
              </p>
              <p className="text-sm italic">
                "I've been using [Product] since 2021, and it completely
                transformed how I [Task]. As a developer who loves your API's
                [Specific Feature], I'd be honored to contribute to the team
                building..."
              </p>
            </div>
            <div className="rounded-lg border bg-slate-50 p-4 dark:bg-slate-900">
              <p className="mb-1 font-bold text-indigo-600">
                3. The "News/Event" Hook
              </p>
              <p className="text-sm italic">
                "I was captivated by [CEO Name]'s presentation at [Conference]
                about the future of [Industry]. Your commitment to [Innovation]
                inspired me to apply for..."
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section
          id="body"
          className="mb-16 scroll-mt-24"
        >
          <h2>4. The Body: Prove Your Value</h2>
          <p>
            Your body paragraphs must prove you can solve their problems. Use
            the <strong>PAR Method</strong> (Problem, Action, Result) just like
            in your interviews.
          </p>

          <div className="my-8 rounded-xl bg-slate-100 p-8 dark:bg-slate-800">
            <h3 className="mb-4 text-lg font-bold">
              Before & After: Transformation
            </h3>

            <div className="mb-6">
              <p className="mb-1 text-sm font-bold uppercase text-red-500">
                Before (Weak)
              </p>
              <p className="rounded border bg-white p-3 text-sm italic text-gray-500 dark:bg-black">
                "i have experience with Python and SQL. I worked as an intern
                last summer where I did data analysis. I am also good at
                communication and working in teams. I am a hard worker."
              </p>
            </div>

            <div className="mb-6 flex justify-center">
              <ArrowRight className="h-6 w-6 rotate-90 text-primary md:rotate-0" />
            </div>

            <div>
              <p className="mb-1 text-sm font-bold uppercase text-green-500">
                After (Strong)
              </p>
              <p className="rounded border border-green-200 bg-white p-3 text-sm italic shadow-sm dark:bg-black">
                "Your job description highlights the need for data-driven
                decision making. During my internship at TechCorp, I analyzed
                over 10GB of customer usage data using Python and SQL. I
                identified a pattern in user drop-off that, when fixed, saved
                the company $5,000 monthly. I'm eager to bring this same
                analytical rigor to your growth team."
              </p>
            </div>
          </div>

          <h3 className="mb-4 mt-8 font-bold">
            Industry-Specific Copy/Paste Snippets
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <span className="rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-800">
                Engineering
              </span>
              <p className="mt-3 text-xs italic text-muted-foreground">
                "I thrive on solving complex backend challenges. At [Previous
                Role], I reduced API latency by 40% by implementing [Specific
                Tech]. I'm excited to apply this optimization mindset to your
                scalable systems."
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <span className="rounded bg-pink-100 px-2 py-1 text-xs font-bold text-pink-800">
                Design
              </span>
              <p className="mt-3 text-xs italic text-muted-foreground">
                "I believe design should be invisible yet impactful. My redesign
                of [Project] increased user engagement by 25%. I admire
                [Company]'s clean aesthetic and would love to contribute to your
                design system."
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <span className="rounded bg-orange-100 px-2 py-1 text-xs font-bold text-orange-800">
                Marketing
              </span>
              <p className="mt-3 text-xs italic text-muted-foreground">
                "I don't just create content; I drive conversions. My last
                campaign for [Project] reached 10k accounts organically and
                converted at 3%. I'm ready to scale these results for
                [Company]."
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section
          id="closing"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Heart className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              5. Closing with Confidence
            </h2>
          </div>

          <p>Don't fizzle out. End with a Call To Action (CTA).</p>

          <div className="space-y-4">
            <div className="flex flex-col gap-4 rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20 md:flex-row">
              <div className="text-sm font-bold text-green-700 dark:text-green-300 md:w-1/4">
                The "Confident" Close
              </div>
              <div className="md:w-3/4">
                <p className="text-sm italic">
                  "I'd welcome the chance to discuss how my background in [Area]
                  aligns with your team's needs. I am available for an interview
                  at your earliest convenience."
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-4 dark:bg-indigo-900/20 md:flex-row">
              <div className="text-sm font-bold text-indigo-700 dark:text-indigo-300 md:w-1/4">
                The "Value-Add" Close
              </div>
              <div className="md:w-3/4">
                <p className="text-sm italic">
                  "I have a few ideas on how [Company] could approach [Challenge
                  mentioned in News], and I'd love to share them with you. Thank
                  you for your time and consideration."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="mb-2 font-bold text-red-800 dark:text-red-300">
              🚫 Avoid These Weak Endings:
            </p>
            <ul className="space-y-1 text-sm text-red-700 dark:text-red-400">
              <li>• "I hope to hear from you." (Too passive)</li>
              <li>• "Please give me a chance." (Desperate)</li>
              <li>• Quitting without a sign-off.</li>
            </ul>
          </div>
        </section>

        {/* Scenarios */}
        <section
          id="scenarios"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Briefcase className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              6. Strategies for Specific Scenarios
            </h2>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-primary">
                Scenario A: The Career Switcher
              </h3>
              <p className="mb-3 text-sm">
                You studied Civil Engineering but want to be a Developer.
              </p>
              <div className="rounded bg-muted p-3 text-sm italic">
                "While my background is in Civil Engineering, problem-solving is
                universal. In engineering, I optimized structural loads; in
                code, I optimize algorithms. My disciplined engineering mindset
                helps me write bug-free, robust code, which I've demonstrated by
                building..."
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                <strong>Strategy:</strong> Focus on <em>transferable skills</em>{' '}
                (logic, discipline, math).
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-primary">
                Scenario B: No Experience / Fresher
              </h3>
              <p className="mb-3 text-sm">
                You have 0 internships and are just starting.
              </p>
              <div className="rounded bg-muted p-3 text-sm italic">
                "As a final-year student, I may not have corporate years behind
                me, but I have a hunger to learn and up-to-date knowledge of the
                latest frameworks like Next.js 14. In my capstone project, I led
                a team of 4..."
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                <strong>Strategy:</strong> Highlight{' '}
                <em>
                  potential, academic projects, and eagerness/speed of learning
                </em>
                .
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-primary">
                Scenario C: Referring to a Referral
              </h3>
              <p className="mb-3 text-sm">You know someone inside.</p>
              <div className="rounded bg-muted p-3 text-sm italic">
                "Your Product Manager, [Name], recommended I contact you
                regarding this role. After discussing the team's upcoming goals
                with her, I realized my experience in..."
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                <strong>Strategy:</strong> Drop the name <em>immediately</em> in
                the first sentence. It's your golden ticket.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-primary">
                Scenario D: Applying After a Gap
              </h3>
              <p className="mb-3 text-sm">You took a year off.</p>
              <div className="rounded bg-muted p-3 text-sm italic">
                "After taking a year to [Travel/Care for family/Upskill], during
                which I completed certificates in [Skill], I am fully recharged
                and eager to return to the workforce with renewed focus."
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                <strong>Strategy:</strong> Own it briefly, pivot to readiness,
                and move on.
              </p>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section
          id="examples"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              7. Full Cover Letter Examples
            </h2>
          </div>

          <div className="space-y-12">
            {/* Example 1 */}
            <div className="relative">
              <div className="absolute right-0 top-0 rounded-bl-lg bg-indigo-100 p-2 text-xs font-bold text-indigo-800">
                The "Passionate User" Approach
              </div>
              <div className="bg-paper rounded-xl border p-8 font-serif text-sm leading-relaxed shadow-sm">
                <p className="mb-6">Dear Hiring Manager,</p>

                <p className="mb-4">
                  My morning routine hasn't been the same since I discovered{' '}
                  <strong>[App Name]</strong>. It literally saved me 4 hours a
                  week on meal planning. So, when I saw you were hiring a
                  Product Designer to improve the onboarding flow, I knew I had
                  to apply—not just as a designer, but as a power user who wants
                  to help others discover this value faster.
                </p>

                <p className="mb-4">
                  In my current role at Studio X, I led the redesign of a mobile
                  wallet app that increased user activation by 25%. I noticed
                  [App Name] struggles with the initial "preference setting"
                  screen—users often drop off there. I have some
                  hypothesis-driven ideas on how gamifying that step could
                  reduce churn, similar to what I implemented previously.
                </p>

                <p className="mb-4">
                  Beyond pixels, I care about business metrics. I work closely
                  with PMs and engineers to ensure designs are feasible and
                  drive ROI. I admire how your team ships fast and iterates, and
                  I thrive in that kind of high-velocity environment.
                </p>

                <p className="mb-6">
                  I'd love to share my portfolio and discuss some specific ideas
                  I have for your onboarding flow. Thank you for building such a
                  great product, and for considering my application.
                </p>

                <p>
                  Best regards,
                  <br />
                  [Your Name]
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="relative">
              <div className="absolute right-0 top-0 rounded-bl-lg bg-green-100 p-2 text-xs font-bold text-green-800">
                The "Start-Up Hustler" Approach
              </div>
              <div className="bg-paper rounded-xl border p-8 font-serif text-sm leading-relaxed shadow-sm">
                <p className="mb-6">Dear [Founder Name],</p>

                <p className="mb-4">
                  I've been following [Startup Name] since your seed round. Your
                  recent pivot to B2B SaaS was a bold move, and looking at your
                  growth metrics, it clearly paid off. I want to be the Growth
                  Marketing intern who helps you scale from 10k to 100k users.
                </p>

                <p className="mb-4">
                  I know you need someone who wears many hats. Last summer at a
                  local e-commerce store, I didn't just write copy; I set up
                  their email flows, ran their FB ads, and even handled customer
                  support tickets to understand pain points. I helped them grow
                  revenue by 20% in 3 months with zero ad spend increase.
                </p>

                <p className="mb-4">
                  I am scrappy, I learn fast, and I don't need hand-holding.
                  I've already drafted 3 potential blog topics that could drive
                  traffic for your new feature launch—I'd love to show them to
                  you.
                </p>

                <p className="mb-6">
                  I am available to start immediately and am happy to work
                  across time zones. Let's chat?
                </p>

                <p>
                  Best,
                  <br />
                  [Your Name]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mistakes */}
        <section
          id="mistakes"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              8. Common Mistakes to Avoid
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <div>
                  <span className="font-bold">Generic Opening:</span>
                  <p className="text-sm text-muted-foreground">
                    "I am a hard worker applying for the job."
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <div>
                  <span className="font-bold">Wrong Company Name:</span>
                  <p className="text-sm text-muted-foreground">
                    Forgetting to change the name from your last application.
                    (Immediate rejection)
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <div>
                  <span className="font-bold">Wall of Text:</span>
                  <p className="text-sm text-muted-foreground">
                    One giant paragraph with no breaks. Unreadable.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <div>
                  <span className="font-bold">Focusing on "I want":</span>
                  <p className="text-sm text-muted-foreground">
                    "I want to learn," "I want mentorship." Focus on what you
                    CONTRIBUTE.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <div>
                  <span className="font-bold">Too Formal/Stiff:</span>
                  <p className="text-sm text-muted-foreground">
                    "Heretofore attached please find..." Be professional but
                    conversational.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section
          id="checklist"
          className="not-prose mb-16 scroll-mt-24 rounded-xl border border-indigo-100 bg-indigo-50 p-8 dark:border-indigo-900 dark:bg-indigo-950/30"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-indigo-600" />
            9. Final Cover Letter Checklist
          </h2>

          <div className="space-y-3">
            {[
              'Addressed to a specific person (or "Hiring Team", never "Sir/Madam")',
              'Opening hook grabbed attention in the first 2 sentences',
              'Mentioned the company name correctly at least 2 times',
              'Included 2-3 specific PAR-formatted achievement stories',
              'Length is between 250-400 words (approx 3/4 page)',
              'Font is readable (Arial/Calibri/Inter, 10-12pt)',
              'Saved as PDF (Name_Surname_Cover_Letter.pdf)',
              'Contact info is easy to find at the top',
              'Double-checked for typos (especially company name!)',
              'Closing has a clear Call to Action',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg bg-white/50 p-3 dark:bg-black/20"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 rounded-2xl bg-muted/30 p-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">You're Ready to Apply!</h2>
          <p className="mx-auto mb-6 max-w-2xl text-xl text-muted-foreground">
            A great cover letter separates the "applicants" from the
            "candidates." Use these templates, but add your unique flavor. Good
            luck!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/tools/resume-builder"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Build Your Resume
            </Link>
            <Link
              href="/internships"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Find Jobs to Apply To
            </Link>
          </div>
        </section>

        {/* Related Resources */}
        <div className="not-prose rounded-xl bg-slate-50 p-8 dark:bg-slate-900">
          <h3 className="mb-6 text-xl font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/blog/resume-mistakes-students-avoid"
              className="group flex flex-col justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <span className="mb-2 font-semibold text-primary group-hover:underline">
                10 Resume Mistakes to Avoid
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                Read Article <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
            <Link
              href="/blog/salary-negotiation-freshers"
              className="group flex flex-col justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <span className="mb-2 font-semibold text-primary group-hover:underline">
                How to Negotiate Salary
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                Read Article <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
            <Link
              href="/blog/email-etiquette-students"
              className="group flex flex-col justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <span className="mb-2 font-semibold text-primary group-hover:underline">
                Email Etiquette Guide
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                Read Article <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-12 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold">
                Written by Sproutern Career Team
              </p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on insights from 100+ Hiring Managers and 10,000+
                Applications.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
