import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  FileText,
  Search,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Briefcase,
  Zap,
  AlertTriangle,
  Scan,
  Bot,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Write a One-Page Resume That Gets Interviews',
  description:
    'Master the art of the one-page resume. Learn formatting, content prioritization, and proven techniques to make every word count.',
  keywords: [
    'one page resume',
    'concise resume',
    'resume format',
    'resume length',
    'resume tips',
    'fresher resume',
  ],
  openGraph: {
    title: 'How to Write a One-Page Resume That Gets Interviews',
    description:
      'Create a powerful resume that fits on one page without sacrificing impact.',
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
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <FileText className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Resume Tips
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            How to Write a One-Page Resume That Gets Interviews
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Recruiters spend 6-10 seconds on each resume. Learn how to make
            those seconds count by crafting a powerful one-page resume that
            highlights exactly what matters.
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Resume Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">6 sec</span>
              <span>average initial resume scan time</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">75%</span>
              <span>of resumes rejected by ATS before human review</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">85%</span>
              <span>of recruiters prefer one-page for freshers</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">3x</span>
              <span>more callbacks for quantified achievements</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why-one-page"
                className="text-primary hover:underline"
              >
                1. Why One Page Matters
              </a>
            </li>
            <li>
              <a
                href="#structure"
                className="text-primary hover:underline"
              >
                2. Optimal Resume Structure
              </a>
            </li>
            <li>
              <a
                href="#sections"
                className="text-primary hover:underline"
              >
                3. What to Include/Exclude
              </a>
            </li>
            <li>
              <a
                href="#formatting"
                className="text-primary hover:underline"
              >
                4. Formatting for Impact
              </a>
            </li>
            <li>
              <a
                href="#ats"
                className="text-primary hover:underline"
              >
                5. Beating ATS Systems
              </a>
            </li>
            <li>
              <a
                href="#examples"
                className="text-primary hover:underline"
              >
                6. Before/After Examples
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                7. FAQs
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
                One page is mandatory for students and entry-level candidates
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Every bullet point should show impact, not just responsibility
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Use numbers wherever possible—quantify everything</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Tailor your resume for each application (ATS keywords matter)
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            "My resume is two pages—how can I fit everything in one?" This is
            one of the most common questions we hear. Here's the honest truth:{' '}
            <strong>
              if you're a student or fresher, you don't have enough relevant
              experience to justify two pages.
            </strong>
          </p>
          <p>
            A well-crafted one-page resume forces you to prioritize what matters
            and makes it easier for recruiters to find your best qualities
            quickly. Let's learn how to create one.
          </p>
        </section>

        {/* Section 1 */}
        <section
          id="why-one-page"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            1. Why One Page Matters
          </h2>

          <p>
            Recruiters review hundreds of resumes daily. They've perfected the
            art of quick scanning:
          </p>

          <ul>
            <li>
              <strong>6-10 seconds:</strong> That's all you get for the first
              pass
            </li>
            <li>
              <strong>One page = one view:</strong> No scrolling, no flipping,
              no missing info
            </li>
            <li>
              <strong>Forced prioritization:</strong> You include only what's
              truly impressive
            </li>
            <li>
              <strong>Respect for reader:</strong> Shows you value their time
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>When Two Pages Are OK:</strong> Only if you have 10+ years
              of experience OR are applying for academic/research positions that
              require publications. For freshers and students, stick to one
              page.
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section
          id="structure"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. Optimal Resume Structure
          </h2>

          <h3>Recommended Order for Freshers</h3>
          <ol>
            <li>
              <strong>Header:</strong> Name, contact info, links (2-3 lines)
            </li>
            <li>
              <strong>Education:</strong> Degree, college, CGPA, relevant
              courses
            </li>
            <li>
              <strong>Experience/Internships:</strong> Most recent first
            </li>
            <li>
              <strong>Projects:</strong> 2-3 impactful projects with tech stack
            </li>
            <li>
              <strong>Skills:</strong> Technical skills, tools, languages
            </li>
            <li>
              <strong>Achievements:</strong> Competitions, certifications
              (optional)
            </li>
          </ol>

          <h3>Space Allocation</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">With Internship Experience</p>
              <ul className="space-y-1">
                <li>• Header: 10%</li>
                <li>• Education: 15%</li>
                <li>• Experience: 35%</li>
                <li>• Projects: 25%</li>
                <li>• Skills/Achievements: 15%</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">Without Internship</p>
              <ul className="space-y-1">
                <li>• Header: 10%</li>
                <li>• Education: 20%</li>
                <li>• Projects: 45%</li>
                <li>• Skills: 15%</li>
                <li>• Achievements: 10%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section
          id="sections"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            3. What to Include/Exclude
          </h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="mb-2 text-sm font-bold">✅ Include</p>
              <ul className="space-y-1 text-sm">
                <li>• Relevant technical skills</li>
                <li>• Quantified achievements</li>
                <li>• GitHub/Portfolio links</li>
                <li>• Relevant projects with impact</li>
                <li>• Leadership roles (if significant)</li>
                <li>• Relevant certifications</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-2 text-sm font-bold">❌ Exclude</p>
              <ul className="space-y-1 text-sm">
                <li>• Photo (not needed in tech)</li>
                <li>• "References available upon request"</li>
                <li>• Hobbies (unless remarkable)</li>
                <li>• High school details</li>
                <li>• MS Office (unless specifically needed)</li>
                <li>• Generic objectives</li>
              </ul>
            </div>
          </div>

          <h3>The Bullet Point Formula</h3>
          <div className="not-prose my-4 rounded-lg bg-primary/10 p-4">
            <p className="mb-2 text-sm font-bold">
              Action Verb + What You Did + Quantified Result
            </p>
            <p className="text-sm">❌ "Worked on the company website"</p>
            <p className="text-sm">
              ✅ "Rebuilt homepage using React, reducing load time by 40% and
              increasing user engagement by 25%"
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section
          id="formatting"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            4. Formatting for Impact
          </h2>

          <h3>Space-Saving Tips</h3>
          <ul>
            <li>
              <strong>Margins:</strong> 0.5-0.75 inches (not more)
            </li>
            <li>
              <strong>Font size:</strong> 10-11pt for body, 12-14pt for headers
            </li>
            <li>
              <strong>Fonts:</strong> Calibri, Arial, Lato (clean, readable)
            </li>
            <li>
              <strong>Line spacing:</strong> Single or 1.15
            </li>
            <li>
              <strong>Columns:</strong> Use for skills section to save space
            </li>
          </ul>

          <h3>Visual Hierarchy</h3>
          <ul>
            <li>Bold job titles and company names</li>
            <li>Use consistent date formatting (right-aligned)</li>
            <li>Clear section headings with subtle lines</li>
            <li>White space between sections (but not wasted space)</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Print your resume and read it from arm's
              length. If you can't quickly identify key information, your
              formatting needs work.
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section
          id="ats"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-primary" />
            5. Beating ATS Systems
          </h2>

          <p>
            <strong>75% of resumes are rejected by ATS</strong> (Applicant
            Tracking Systems) before a human sees them. Here's how to beat them:
          </p>

          <h3>ATS Best Practices</h3>
          <ul>
            <li>
              <strong>Keywords:</strong> Mirror exact words from job description
            </li>
            <li>
              <strong>No graphics:</strong> Avoid tables, images, fancy
              formatting
            </li>
            <li>
              <strong>Standard headings:</strong> "Experience" not "My Journey"
            </li>
            <li>
              <strong>File format:</strong> PDF (unless asked for Word)
            </li>
            <li>
              <strong>Simple fonts:</strong> Stick to system fonts
            </li>
          </ul>

          <h3>Keyword Strategy</h3>
          <ol>
            <li>Copy the job description</li>
            <li>Identify repeated skills and requirements</li>
            <li>Include exact phrases in your resume naturally</li>
            <li>Don't keyword stuff—make it readable</li>
          </ol>
        </section>

        {/* Section 6 */}
        <section
          id="examples"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Scan className="h-6 w-6 text-primary" />
            6. Before/After Examples
          </h2>

          <h3>Experience Section</h3>
          <div className="my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 py-2 pl-4 dark:bg-red-950">
              <p className="text-sm font-bold">❌ Before (Weak)</p>
              <ul className="mt-2 text-sm">
                <li>• Worked on various frontend tasks</li>
                <li>• Was responsible for bug fixing</li>
                <li>• Helped team with different projects</li>
              </ul>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 py-2 pl-4 dark:bg-green-950">
              <p className="text-sm font-bold">✅ After (Strong)</p>
              <ul className="mt-2 text-sm">
                <li>
                  • Built responsive dashboard using React/TypeScript, reducing
                  load time by 35%
                </li>
                <li>
                  • Fixed 45+ bugs in 2 months, improving app stability score
                  from 85% to 98%
                </li>
                <li>
                  • Led migration of legacy codebase to modern stack, improving
                  developer productivity by 20%
                </li>
              </ul>
            </div>
          </div>

          <h3>Project Section</h3>
          <div className="my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 py-2 pl-4 dark:bg-red-950">
              <p className="text-sm font-bold">❌ Before</p>
              <p className="mt-2 text-sm">
                "E-commerce website using MERN stack"
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 py-2 pl-4 dark:bg-green-950">
              <p className="text-sm font-bold">✅ After</p>
              <p className="mt-2 text-sm">
                "ShopEasy: Full-stack e-commerce platform with 50+ products,
                Stripe payment integration, JWT auth. Features: cart, wishlist,
                order tracking. Tech: React, Node.js, MongoDB, Redux. [Live
                Demo] [GitHub]"
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            7. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                What if I really can't fit everything on one page?
              </p>
              <p className="mt-2 text-muted-foreground">
                Be more ruthless. Ask yourself: "Does this help me get THIS
                specific job?" If not, cut it. Focus on your top 2-3 experiences
                and top 3 projects.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I include CGPA if it's low?</p>
              <p className="mt-2 text-muted-foreground">
                If it's below 7.0, you can omit it (unless the job specifically
                requires it). Focus on projects and skills instead.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How many projects should I include?</p>
              <p className="mt-2 text-muted-foreground">
                2-3 substantial projects is ideal. Better to have fewer
                impressive projects than many mediocre ones.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I use a resume template?</p>
              <p className="mt-2 text-muted-foreground">
                Simple templates are fine. Avoid overly designed ones—they often
                break ATS parsing. Clean and readable beats fancy every time.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Your One-Page Starts Here</h2>
          <p>
            A one-page resume isn't a limitation—it's a feature. It forces you
            to show only your best work and makes life easier for recruiters.
            That's a win-win.
          </p>
          <p className="text-lg font-semibold text-primary">
            Start trimming, start quantifying, and watch the interview calls
            roll in. 📄✨
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/ats-keywords-by-industry"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              ATS Keywords by Industry
            </Link>
            <Link
              href="/blog/projects-on-resume-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Showcasing Projects on Resume
            </Link>
            <Link
              href="/blog/resume-action-verbs-list"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              200+ Resume Action Verbs
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Free Resume Score Checker
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
                Based on analysis of 5,000+ successful resumes and feedback from
                100+ hiring managers.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
