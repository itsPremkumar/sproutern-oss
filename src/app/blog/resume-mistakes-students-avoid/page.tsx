import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  XCircle,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  FileText,
  Eye,
  TrendingUp,
  ArrowRight,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { RelatedArticles } from '@/components/blog/related-articles';

export const metadata: Metadata = {
  title: '10 Resume Mistakes to Avoid',
  description:
    'Avoid these critical resume mistakes that get applications rejected. Learn from real recruiter feedback, see before/after examples, and get ATS-optimization tips.',
  keywords: [
    'resume mistakes',
    'student resume',
    'resume tips',
    'ATS resume',
    'resume errors',
    'internship resume',
    'resume writing',
    'resume format',
  ],
  openGraph: {
    title: '10 Resume Mistakes That Cost Students Internships',
    description:
      'Critical errors to avoid + before/after examples to fix your resume today.',
    type: 'article',
    publishedTime: '2025-10-25T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Resume Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            10 Resume Mistakes That Cost Students Internship Opportunities
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            After reviewing 5,000+ student resumes, we've identified the most
            common mistakes that get applications rejected—and exactly how to
            fix them.
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
              <span>20 min read</span>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Eye className="h-5 w-5 text-red-600" />
            Shocking Resume Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-red-600">75%</span>
              <span>
                of resumes are rejected by ATS before a human ever sees them
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-red-600">7 sec</span>
              <span>
                Average time recruiters spend on initial resume review
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-red-600">58%</span>
              <span>of resumes contain typos or grammatical errors</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-red-600">3x</span>
              <span>
                More likely to get interviews with an optimized resume
              </span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">
            📋 The 10 Critical Mistakes
          </h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#mistake-1"
                className="text-primary hover:underline"
              >
                1. Typos and Grammar Errors
              </a>
            </li>
            <li>
              <a
                href="#mistake-2"
                className="text-primary hover:underline"
              >
                2. Generic One-Size-Fits-All
              </a>
            </li>
            <li>
              <a
                href="#mistake-3"
                className="text-primary hover:underline"
              >
                3. Weak Action Verbs
              </a>
            </li>
            <li>
              <a
                href="#mistake-4"
                className="text-primary hover:underline"
              >
                4. No Quantified Achievements
              </a>
            </li>
            <li>
              <a
                href="#mistake-5"
                className="text-primary hover:underline"
              >
                5. Poor Formatting
              </a>
            </li>
            <li>
              <a
                href="#mistake-6"
                className="text-primary hover:underline"
              >
                6. Irrelevant Information
              </a>
            </li>
            <li>
              <a
                href="#mistake-7"
                className="text-primary hover:underline"
              >
                7. Unprofessional Email
              </a>
            </li>
            <li>
              <a
                href="#mistake-8"
                className="text-primary hover:underline"
              >
                8. Too Long (Multiple Pages)
              </a>
            </li>
            <li>
              <a
                href="#mistake-9"
                className="text-primary hover:underline"
              >
                9. Lying or Exaggerating
              </a>
            </li>
            <li>
              <a
                href="#mistake-10"
                className="text-primary hover:underline"
              >
                10. Missing Contact Links
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            Your resume is your first impression—and often your only chance to
            land an interview. In a world where AI filters out most applications
            before a human sees them, every detail matters. We've analyzed
            thousands of student resumes and interviewed dozens of recruiters to
            identify the mistakes that cost candidates opportunities.
          </p>
          <p>
            The good news? Every mistake on this list is completely fixable. By
            the end of this article, you'll know exactly what to change and have
            before-and-after examples to guide you.
          </p>
        </section>

        {/* Mistake 1 */}
        <section
          id="mistake-1"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              1
            </span>
            Typos and Grammatical Errors
          </h2>

          <div className="mb-4 flex gap-3 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <div>
              <strong>Impact:</strong> 77% of hiring managers say they would
              immediately disqualify a candidate with typos on their resume. It
              signals carelessness.
            </div>
          </div>

          <h4>Common Typos We See:</h4>
          <ul>
            <li>"Experiance" instead of "Experience"</li>
            <li>"Managment" instead of "Management"</li>
            <li>"Responsiblities" instead of "Responsibilities"</li>
            <li>Inconsistent date formats (01/2024, Jan 2024, January 2024)</li>
            <li>Wrong company names or job titles</li>
          </ul>

          <h4>How to Fix It:</h4>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <ul className="space-y-2 text-sm">
              <li>
                ✅ Read your resume aloud—you'll catch errors your eyes miss
              </li>
              <li>✅ Use Grammarly or Hemingway Editor for grammar checking</li>
              <li>✅ Print it out and review on paper</li>
              <li>✅ Have 2-3 people proofread (fresh eyes catch more)</li>
              <li>
                ✅ Review it 24 hours after writing—you'll spot mistakes better
              </li>
            </ul>
          </div>
        </section>

        {/* Mistake 2 */}
        <section
          id="mistake-2"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              2
            </span>
            A Generic, One-Size-Fits-All Resume
          </h2>

          <p>
            Sending the same resume to every company is one of the biggest
            reasons for rejection. Modern ATS systems compare your resume
            against the job description, and generic resumes score poorly.
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-2 flex items-center gap-2 text-sm font-bold">
                <XCircle className="h-4 w-4 text-red-600" />
                Generic Resume
              </p>
              <p className="rounded bg-white p-3 font-mono text-sm dark:bg-black">
                "Proficient in Python, Java, and web development. Looking for
                software engineering opportunities."
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="mb-2 flex items-center gap-2 text-sm font-bold">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Tailored for Data Science Role
              </p>
              <p className="rounded bg-white p-3 font-mono text-sm dark:bg-black">
                "Python developer with 2+ years experience in pandas,
                scikit-learn, and TensorFlow. Built ML pipelines processing 1M+
                records."
              </p>
            </div>
          </div>

          <h4>How to Tailor Your Resume:</h4>
          <ol>
            <li>
              <strong>Read the job description carefully</strong> - Highlight
              key skills and requirements
            </li>
            <li>
              <strong>Match your skills</strong> - Use the same terminology as
              the job posting
            </li>
            <li>
              <strong>Prioritize relevant experience</strong> - Put most
              relevant projects/experiences first
            </li>
            <li>
              <strong>Customize your summary</strong> - Reference the specific
              role and company
            </li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Create a "master resume" with all your
              experiences, then create tailored versions by selecting the most
              relevant items for each application.
            </div>
          </div>
        </section>

        {/* Mistake 3 */}
        <section
          id="mistake-3"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              3
            </span>
            Weak and Passive Language
          </h2>

          <p>
            Passive language makes your achievements sound unimpressive. Words
            like "was responsible for," "helped with," and "was involved in"
            diminish your impact.
          </p>

          <h4>Power Verbs to Use Instead:</h4>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-bold">Technical</p>
              <p>
                Developed, Engineered, Architected, Optimized, Automated,
                Implemented, Deployed, Integrated
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-bold">Leadership</p>
              <p>
                Led, Directed, Coordinated, Mentored, Spearheaded, Initiated,
                Orchestrated
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-bold">Achievement</p>
              <p>
                Achieved, Delivered, Exceeded, Accelerated, Boosted, Increased,
                Reduced, Saved
              </p>
            </div>
          </div>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-2 text-sm font-bold">❌ Weak</p>
              <ul className="space-y-1 text-sm">
                <li>"Was responsible for testing software"</li>
                <li>"Helped with customer support"</li>
                <li>"Worked on data analysis"</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="mb-2 text-sm font-bold">✅ Strong</p>
              <ul className="space-y-1 text-sm">
                <li>"Designed automated test suites reducing bugs by 40%"</li>
                <li>
                  "Resolved 50+ weekly customer inquiries with 95% satisfaction"
                </li>
                <li>
                  "Analyzed 500K+ data points to identify revenue opportunities"
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mistake 4 */}
        <section
          id="mistake-4"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              4
            </span>
            No Quantified Achievements
          </h2>

          <p>
            Numbers grab attention and make your achievements concrete. Vague
            statements are forgettable; specific metrics are memorable.
          </p>

          <h4>The Quantification Formula:</h4>
          <div className="my-6 rounded-lg bg-primary/10 p-6">
            <p className="text-center text-lg font-bold">
              [Action Verb] + [What You Did] + [Measurable Result]
            </p>
          </div>

          <h4>What You Can Quantify:</h4>
          <ul>
            <li>
              <strong>Scale:</strong> Users, data points, transactions, team
              size
            </li>
            <li>
              <strong>Impact:</strong> Percentage improvements, time saved, cost
              reduced
            </li>
            <li>
              <strong>Frequency:</strong> Daily, weekly, monthly activities
            </li>
            <li>
              <strong>Rankings:</strong> Top 10%, 1st place, 99th percentile
            </li>
          </ul>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-2 text-sm font-bold">❌ Without Numbers</p>
              <p className="text-sm">
                "Built a mobile app that helped students track their attendance"
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="mb-2 text-sm font-bold">✅ With Numbers</p>
              <p className="text-sm">
                "Built a mobile app used by 2,000+ students that improved
                attendance tracking accuracy by 35%"
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>No numbers available?</strong> Estimate conservatively.
              "Processed approximately 100+ orders daily" is better than
              "Processed orders."
            </div>
          </div>
        </section>

        {/* Mistake 5 */}
        <section
          id="mistake-5"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              5
            </span>
            Poor Formatting and Design
          </h2>

          <p>
            A cluttered or overly creative resume is hard to read—both for
            humans and ATS systems. Clean formatting improves readability and
            ATS compatibility.
          </p>

          <h4>Formatting Best Practices:</h4>
          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-sm">
                  Use standard fonts: Arial, Calibri, Garamond
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-sm">
                  Font size: 10-12pt for body, 14-16pt for headers
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-sm">
                  Margins: 0.5-1 inch on all sides
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-sm">
                  Consistent spacing and alignment
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                <span className="text-sm">
                  No tables or text boxes (breaks ATS)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                <span className="text-sm">
                  No headers/footers with important info
                </span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                <span className="text-sm">No graphics, charts, or images</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                <span className="text-sm">No unusual fonts or colors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mistakes 6-10 Condensed */}
        <section
          id="mistake-6"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              6
            </span>
            Including Irrelevant Information
          </h2>
          <p>
            Every line should serve a purpose. Remove high school details
            (unless you're a freshman), unrelated hobbies, personal information
            like age/marital status, and outdated experiences.
          </p>
          <div className="my-4 rounded-lg bg-muted p-4">
            <p className="text-sm">
              <strong>Rule of thumb:</strong> If it doesn't help you get THIS
              specific job, remove it.
            </p>
          </div>
        </section>

        <section
          id="mistake-7"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              7
            </span>
            Unprofessional Email Address
          </h2>
          <p>
            <code>coolgamer2002@gmail.com</code> or{' '}
            <code>partyanimal@hotmail.com</code> makes recruiters cringe. Create
            a professional email: <code>firstname.lastname@gmail.com</code> or{' '}
            <code>f.lastname@gmail.com</code>.
          </p>
        </section>

        <section
          id="mistake-8"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              8
            </span>
            Resume Longer Than One Page
          </h2>
          <p>
            For students and early-career professionals,{' '}
            <strong>one page is the rule</strong>. Recruiters have seconds—make
            every word count. Two pages are only acceptable with 10+ years of
            relevant experience.
          </p>
        </section>

        <section
          id="mistake-9"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              9
            </span>
            Lying or Exaggerating Skills
          </h2>
          <p>
            Listing "Expert in Python" when you've only completed a basic course
            will backfire in technical interviews. Be honest about proficiency
            levels. It's okay to say "Familiar with" or "Learning."
          </p>
          <div className="my-4 flex gap-3 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <div className="text-sm">
              <strong>Warning:</strong> Lies are easily caught during
              interviews. The embarrassment and burned bridge aren't worth it.
            </div>
          </div>
        </section>

        <section
          id="mistake-10"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
              10
            </span>
            Missing LinkedIn/Portfolio Links
          </h2>
          <p>
            Make it easy for recruiters to learn more about you. Include
            clickable links to:
          </p>
          <ul>
            <li>
              <strong>LinkedIn:</strong> Essential for almost all roles
            </li>
            <li>
              <strong>GitHub:</strong> Critical for software roles
            </li>
            <li>
              <strong>Portfolio:</strong> Required for design/creative roles
            </li>
            <li>
              <strong>Personal Website:</strong> Great for standing out
            </li>
          </ul>
          <p>
            Always submit as PDF to ensure links are clickable and formatting is
            preserved.
          </p>
        </section>

        {/* Resume Checklist */}
        <section className="not-prose">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <FileText className="h-6 w-6 text-primary" />
            Final Resume Checklist
          </h2>
          <div className="space-y-2">
            {[
              'No typos or grammatical errors',
              'Tailored to the specific job',
              'Uses strong action verbs',
              'Achievements are quantified with numbers',
              'Clean, ATS-friendly formatting',
              'Only relevant information included',
              'Professional email address',
              'Exactly one page',
              'All information is truthful',
              'Includes LinkedIn/GitHub/Portfolio links',
              'Saved as PDF with clickable links',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="not-prose my-10 rounded-lg bg-primary/10 p-6">
          <h3 className="mb-4 flex items-center gap-2 font-bold">
            <TrendingUp className="h-5 w-5 text-primary" />
            Get Your Resume Reviewed
          </h3>
          <p className="mb-4">
            Use our free AI-powered resume tools to check your resume before
            applying:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/resume-optimizer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
            >
              AI Resume Optimizer
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary/90"
            >
              Resume Score Checker
            </Link>
          </div>
        </div>

        {/* Related Content */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Articles</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/ultimate-guide-first-internship"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Ultimate Internship Guide
            </Link>
            <Link
              href="/blog/linkedin-optimization-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              LinkedIn Profile Optimization
            </Link>
            <Link
              href="/resources/resume-templates"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Free Resume Templates
            </Link>
            <Link
              href="/blog/50-common-interview-questions"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              50 Common Interview Questions
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
                Based on analysis of 5,000+ student resumes and feedback from
                100+ HR professionals and recruiters across top companies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>

        {/* Related Articles Component */}
        <RelatedArticles
          currentSlug="resume-mistakes-students-avoid"
          category="Resume Writing"
          limit={4}
          title="More Resume & Career Guides"
        />
      </article>
    </div>
  );
}
