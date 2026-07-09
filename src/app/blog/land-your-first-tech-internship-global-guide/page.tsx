import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Code,
  Briefcase,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Laptop,
  Building2,
  GraduationCap,
  MapPin,
  DollarSign,
  FileText,
  MessageSquare,
  Globe,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { FAQSection } from '@/components/blog/FAQSection';
import { ExpertTips } from '@/components/blog/ExpertTips';
import { CommonMistakes } from '@/components/blog/CommonMistakes';

export const metadata: Metadata = {
  title: 'How to Land Your First Tech Internship (2025 Global Guide)',
  description:
    'The ultimate guide to securing high-paying tech internships in the US, UK, Canada, and Europe. Master the roadmap from skills to offers at FAANG and top startups.',
  keywords: [
    'tech internship guide',
    'software engineer internship',
    'computer science internship',
    'how to get a coding internship',
    'FAANG internship preparation',
    'tech internship salary',
    'internship resume tips',
    'technical interview prep',
  ],
  openGraph: {
    title: 'How to Land Your First Tech Internship: The Ultimate Global Guide',
    description:
      'Master the complete roadmap to landing elite tech internships in Tier-1 markets. From resume to offer letter.',
    type: 'article',
    publishedTime: '2024-12-15T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <Globe className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Global Career Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            How to Land Your First Tech Internship: The Global Blueprint
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            A comprehensive strategy for computer science students to crack
            competitive internships in the US, UK, Canada, and Europe—regardless
            of your university rank.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Editorial Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Updated: January</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>20 min read</span>
            </div>
          </div>
        </header>

        {/* Introduction Hook */}
        <section>
          <p className="lead text-lg font-medium text-slate-700 dark:text-slate-300">
            Let’s face it: The entry-level tech market is brutal right now.
            Layoffs have happened, hiring bars have risen, and "entry-level"
            roles suddenly require 3 years of experience.
          </p>
          <p>
            But here is the silver lining that most students miss:{' '}
            <strong>
              Internships remain the #1 pipeline for full-time offers.
            </strong>
            Companies in Tier-1 economies like the US, UK, and Germany are still
            aggressively hiring interns because they need a future talent
            pipeline.
          </p>
          <p>
            Whether you are aiming for a $50/hr role in Silicon Valley, a
            prestigious banking internship in London, or a dynamic startup role
            in Berlin, the game has changed. Brilliant code isn't enough
            anymore. You need a strategy that beats the noise.
          </p>
          <p>
            This isn't just another generic list of "learn to code" tips. This
            is a battle-tested blueprint used by students to land offers at
            Google, Bloomberg, Amazon, and high-growth unicorns, even without
            attending an Ivy League school.
          </p>
        </section>

        {/* Global Landscape Stats */}
        <div className="not-prose mb-10 mt-8 rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-6 dark:bg-indigo-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            The High-Stakes Tech Internship Market
          </h2>
          <div className="grid gap-6 text-sm md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-white p-2 dark:bg-slate-800">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900 dark:text-white">
                  $30 - $120 / hr
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  Standard pay range for US tech interns
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-white p-2 dark:bg-slate-800">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900 dark:text-white">
                  56% Conversion
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  Average intern-to-full-time offer rate
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-white p-2 dark:bg-slate-800">
                <Target className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900 dark:text-white">
                  Aug - Oct
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  Peak application season for next summer
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-white p-2 dark:bg-slate-800">
                <Briefcase className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900 dark:text-white">
                  Remote First
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  35% of internships now offer remote options
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-slate-100 p-6 dark:bg-slate-900">
          <h2 className="mb-4 text-lg font-bold">What We'll Cover</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#mindset"
                className="text-blue-600 hover:underline"
              >
                1. The "Tier-1" Mindset Shift
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-blue-600 hover:underline"
              >
                2. The Modern Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-blue-600 hover:underline"
              >
                3. Resume Engineering
              </a>
            </li>
            <li>
              <a
                href="#sourcing"
                className="text-blue-600 hover:underline"
              >
                4. Sourcing Hidden Opportunities
              </a>
            </li>
            <li>
              <a
                href="#interview"
                className="text-blue-600 hover:underline"
              >
                5. Cracking the Interview
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-blue-600 hover:underline"
              >
                6. The 12-Month Timeline
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-blue-600 hover:underline"
              >
                7. Frequently Asked Questions
              </a>
            </li>
          </ol>
        </nav>

        {/* Section 1: Mindset */}
        <section
          id="mindset"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            1. The "Tier-1" Mindset Shift
          </h2>
          <p>
            In countries like the US, UK, and Canada, the approach to hiring is
            distinct. Recruiters prioritize
            <strong> demonstrated ability</strong> over academic pedigree.
          </p>
          <p>Here is the reality check:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Grades matter less than you think:</strong> Unless you are
              in finance or HFT (High-Frequency Trading), a 3.5+ GPA is usually
              "good enough". A 4.0 with no projects will lose to a 3.0 with a
              deployed app.
            </li>
            <li>
              <strong>Passion Projects vs Class Assignments:</strong> Everyone
              builds a "Library Management System" in class. Tier-1 recruiters
              want to see projects that solve real problems or use modern tech
              stacks.
            </li>
            <li>
              <strong>Cold Outreach is Normal:</strong> In Western work
              cultures, assertiveness is valued. Sending a polite, professional
              DM to an engineering manager is seen as "proactive," not
              desperate.
            </li>
          </ul>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="mt-12 scroll-mt-20"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <Code className="h-6 w-6 text-blue-500" />
            2. The Modern Tech Stack: What Actually Gets Hired
          </h2>
          <p>
            You don't need to know everything. You need to be T-shaped: deep
            knowledge in one area and broad familiarity with others.
          </p>

          <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <Laptop className="h-5 w-5 text-purple-500" /> Full-Stack Web
              </h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                Most abundant role type in startups and mid-sized tech.
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> React /
                  Next.js (Dominant in 2024)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> TypeScript
                  (Non-negotiable for serious dev)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> Node.js or
                  Python (FastAPI/Django)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> PostgreSQL
                  / Supabase
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <Zap className="h-5 w-5 text-yellow-500" /> Backend & Systems
              </h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                Preferred by large enterprise, cloud, and fintech.
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> Java
                  (Spring Boot) or Go (Golang)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> Docker &
                  Kubernetes basics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> AWS / GCP /
                  Azure fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> System
                  Design concepts
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Resume */}
        <section
          id="resume"
          className="mt-12 scroll-mt-20"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <FileText className="h-6 w-6 text-red-500" />
            3. Resume Engineering: Beating the ATS
          </h2>
          <p>
            In the US and UK, the Application Tracking System (ATS) is the first
            gatekeeper. If your resume isn't optimized, human eyes will never
            see it.
          </p>

          <div className="my-6 space-y-4">
            <h3 className="text-lg font-bold">The "Google XYZ" Formula</h3>
            <p>
              Laszlo Bock, former SVP of People Operations at Google,
              popularized this formula for bullet points:
              <br />
              <code className="mt-2 block rounded bg-slate-100 px-2 py-1 font-mono text-sm text-red-600 dark:bg-slate-800">
                "Accomplished [X] as measured by [Y], by doing [Z]."
              </code>
            </p>
            <p>
              <strong>Bad:</strong> "Fixed bugs in the backend code."
            </p>
            <p>
              <strong>Good:</strong> "Reduced API latency by 40% (X) as measured
              by New Relic (Y), by optimizing SQL queries and implementing Redis
              caching (Z)."
            </p>
          </div>

          <CommonMistakes
            mistakes={[
              {
                mistake: 'Using multi-column, fancy graphical resumes',
                whyWrong:
                  'ATS parsers often fail to read double-column layouts, graphics, or skill bars. You might get auto-rejected.',
                correctApproach:
                  "Use a simple, single-column text-based format (like Jake's Resume template). Focus on content, not decoration.",
                realExample:
                  'A candidate switched from a Canva graphic resume to a standard LaTeX template and saw a 300% increase in callbacks.',
              },
              {
                mistake: 'Including a photo or personal details',
                whyWrong:
                  'In the US/UK/Canada, including a photo, age, marital status, or religion is a massive red flag due to anti-discrimination laws.',
                correctApproach:
                  'Include only Name, Contact Info, GitHub/LinkedIn links, Education, Skills, Experience, and Projects.',
                realExample:
                  'Recruiters in London will often discard CVs with photos to avoid potential bias lawsuits.',
              },
            ]}
          />
        </section>

        {/* Section 4: Sourcing */}
        <section
          id="sourcing"
          className="mt-12 scroll-mt-20"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <Target className="h-6 w-6 text-green-500" />
            4. Sourcing Hidden Opportunities
          </h2>
          <p>
            Applying to the "Careers" page is the bare minimum. To win in a
            competitive market, you need leverage.
          </p>

          <h3 className="mt-6 text-xl font-semibold">
            Top Platforms for Tier-1 Jobs
          </h3>
          <ul className="not-prose mt-4 grid gap-4 md:grid-cols-2">
            <li className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
              <strong className="block text-blue-600">LinkedIn Jobs</strong>
              <span className="text-sm">
                Standard, but crowded. Use "Under 10 applicants" filter and sort
                by "Past 24 hours".
              </span>
            </li>
            <li className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
              <strong className="block text-red-600">Handshake</strong>
              <span className="text-sm">
                The #1 platform for US college students. Recruiters here are
                specifically looking for students.
              </span>
            </li>
            <li className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
              <strong className="block text-green-600">
                Wellfound (AngelList)
              </strong>
              <span className="text-sm">
                Best for startups. Often easier interviews and higher response
                rates.
              </span>
            </li>
            <li className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
              <strong className="block text-purple-600">Simplify.jobs</strong>
              <span className="text-sm">
                A tool that auto-fills applications and curates legitimate
                internship lists.
              </span>
            </li>
          </ul>

          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
            <h3 className="mb-2 text-lg font-bold text-blue-800 dark:text-blue-300">
              🚀 Pro Tip: The "Warm" Introduction
            </h3>
            <p className="text-sm">
              Don't just apply. Find a university alumni working at the company
              on LinkedIn. Send them this message:
            </p>
            <div className="mt-4 rounded border bg-white p-4 font-mono text-xs shadow-inner dark:bg-slate-950 md:text-sm">
              "Hi [Name], I'm a CS student at [University]. I saw you're working
              as a SWE at [Company] and I've been following your team's work on
              [Product]. I'm extremely interested in the internship program.
              Would you be open to a 10-minute chat about your experience there?
              No pressure! standard"
            </div>
            <p className="mt-3 text-sm">
              If they reply and you vibe, <strong>ask for a referral</strong> at
              the end. Employees often get bonuses for referring successful
              candidates!
            </p>
          </div>
        </section>

        {/* Section 5: Interviews */}
        <section
          id="interview"
          className="mt-12 scroll-mt-20"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <MessageSquare className="h-6 w-6 text-orange-500" />
            5. Cracking the Interview: The Global Standard
          </h2>
          <p>
            The interview process in Tier-1 countries is standardized. It
            typically looks like this:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-200 font-bold dark:bg-slate-800">
                1
              </div>
              <div>
                <h4 className="text-lg font-bold">Online Assessment (OA)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Automated coding tests via HackerRank or CodeSignal.
                  <br />
                  <strong>Focus:</strong> LeetCode Mediums (Arrays, HashMaps,
                  Sliding Window).
                  <br />
                  <strong>Goal:</strong> Pass all test cases. Speed matters.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-200 font-bold dark:bg-slate-800">
                2
              </div>
              <div>
                <h4 className="text-lg font-bold">Technical Screen</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  45-60 mins with an engineer. You code in a shared editor
                  (Google Doc or CoderPad).
                  <br />
                  <strong>Key:</strong> Communication! Talk through your thought
                  process. Silence is a red flag.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-200 font-bold dark:bg-slate-800">
                3
              </div>
              <div>
                <h4 className="text-lg font-bold">
                  The "Bar Raiser" / Behavioral
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Assessing culture fit ("Amazon Leadership Principles" or
                  "Googliness").
                  <br />
                  <strong>Prep:</strong> Use the STAR method (Situation, Task,
                  Action, Result) for every story.
                </p>
              </div>
            </div>
          </div>

          <ExpertTips
            tips={[
              {
                title: 'Master the "Blind 75" List',
                explanation:
                  'You do not need to solve 1000 LeetCode problems. The Blind 75 is a curated list that covers 90% of interview patterns.',
                implementation: [
                  'Start with Arrays and Hashing',
                  'Move to Two Pointers and Sliding Window',
                  'Tackle Trees and Graphs last',
                  "Time yourself: If you can't solve a Medium in 25 mins, you aren't ready.",
                ],
                expectedOutcome:
                  'You will recognize patterns instantly during the interview instead of panicking.',
              },
              {
                title: 'Mock Interviews are Mandatory',
                explanation:
                  'Coding alone is different from coding while explaining your thoughts to a stranger.',
                implementation: [
                  'Use Pramp.com for free peer-to-peer mocks',
                  'Record yourself explaining a solution',
                  'Focus on clarity and asking clarifying questions BEFORE coding',
                ],
                expectedOutcome:
                  'Eliminates anxiety and improves your "communication score" (which is often separate from technical score).',
              },
            ]}
          />
        </section>

        {/* Section 6: Timeline */}
        <section
          id="timeline"
          className="mb-12 mt-12 scroll-mt-20"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <Calendar className="h-6 w-6 text-pink-500" />
            6. The Annual Timeline (Don't Miss Out)
          </h2>
          <p>
            Timing is everything. Top US/UK internships open{' '}
            <strong>way earlier</strong> than you expect.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border-b p-4 font-bold dark:border-slate-700">
                    Month
                  </th>
                  <th className="border-b p-4 font-bold dark:border-slate-700">
                    Action Item
                  </th>
                  <th className="border-b p-4 font-bold dark:border-slate-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-4 dark:border-slate-800">
                    July - August
                  </td>
                  <td className="border-b p-4 dark:border-slate-800">
                    <strong>Preparation & Early Birds</strong>
                    <br />
                    Polishing resume, grinding LeetCode. Some HFTs and Fintechs
                    open apps.
                  </td>
                  <td className="border-b p-4 font-bold text-yellow-600 dark:border-slate-800">
                    Pre-Season
                  </td>
                </tr>
                <tr className="bg-green-50/50 dark:bg-green-900/10">
                  <td className="border-b p-4 dark:border-slate-800">
                    September - October
                  </td>
                  <td className="border-b p-4 dark:border-slate-800">
                    <strong>PEAK SEASON</strong>
                    <br />
                    Most major tech companies (Google, Microsoft, Amazon) open
                    apps. Apply immediately!
                  </td>
                  <td className="border-b p-4 font-bold text-green-600 dark:border-slate-800">
                    CRITICAL
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-4 dark:border-slate-800">
                    November - December
                  </td>
                  <td className="border-b p-4 dark:border-slate-800">
                    <strong>Interviews & Cleanup</strong>
                    <br />
                    First round of interviews happens. Some startups begin
                    posting.
                  </td>
                  <td className="border-b p-4 font-bold text-blue-600 dark:border-slate-800">
                    Active
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-4 dark:border-slate-800">
                    January - March
                  </td>
                  <td className="border-b p-4 dark:border-slate-800">
                    <strong>Startup Season</strong>
                    <br />
                    Startups and mid-sized companies hire now. Great time for
                    non-FAANG roles.
                  </td>
                  <td className="border-b p-4 font-bold text-orange-600 dark:border-slate-800">
                    Second Wave
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQSection
            faqs={[
              {
                question: 'Is it worth doing an unpaid internship?',
                answer:
                  'In Tier-1 countries, unpaid internships in tech are rare and often illegal (especially in the US/UK) if you are doing productive work. Avoid them. Your code has value. Focus on building open-source projects instead—they are worth more on a resume than a lowly unpaid role.',
              },
              {
                question: 'Do I need a Computer Science degree?',
                answer:
                  'For 80% of roles, no. Physics, Math, and Engineering majors land SWE roles regularly. However, you MUST demonstrate CS fundamentals (Data Structures, Algorithms, Operating Systems) during the interview. Bootcamps are accepted, but the bar for projects is higher.',
              },
              {
                question: 'How important is LeetCode vs Projects?',
                answer:
                  'It is a funnel. Projects get you the interview (Resume screen). LeetCode gets you the job (Technical screen). You cannot neglect either. A balanced approach is 1 strong project + 150 LeetCode problems.',
              },
              {
                question: "What if I go to a 'Tier-3' or unknown university?",
                answer:
                  "School brand matters less in tech than finance. To compensate, you need 'spikes' in your profile: specific impressive achievements like a Hackathon win, a deployed app with 1,000+ users, or high competitive coding contest ratings (Codeforces/LeetCode).",
              },
              {
                question: 'Do big tech companies sponsor visas for interns?',
                answer:
                  'Yes. Major companies (Google, Meta, Uber, etc.) often sponsor J-1 visas for US internships or T5 visas for the UK. However, this is competitive. Startups generally do not sponsor due to costs.',
              },
            ]}
          />
        </section>

        {/* Conclusion */}
        <footer className="mt-16 border-t pt-8">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center text-white">
            <h3 className="mb-4 text-2xl font-bold">
              Ready to Launch Your Career?
            </h3>
            <p className="mb-6 text-slate-300">
              The path to a top-tier tech internship is simple, but not easy. It
              requires discipline, resilience, and strategy. Start today. Update
              that resume, commit your first line of code to GitHub, and solve
              your first LeetCode problem.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Explore More Career Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
