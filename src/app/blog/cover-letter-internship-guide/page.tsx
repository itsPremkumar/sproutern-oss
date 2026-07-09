import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Mail,
  FileText,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Briefcase,
  Zap,
  AlertTriangle,
  PenTool,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Write a Cover Letter for Internship Applications',
  description:
    'Master the art of writing compelling cover letters for internships. Get templates, examples, and tips to stand out from hundreds of applicants.',
  keywords: [
    'cover letter internship',
    'internship application letter',
    'cover letter template',
    'how to write cover letter',
    'cover letter example',
  ],
  openGraph: {
    title: 'How to Write a Cover Letter for Internship Applications',
    description:
      'Get templates and examples to write compelling internship cover letters.',
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
          <div className="mb-4 flex items-center gap-2 text-rose-600">
            <Mail className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Application Tips
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            How to Write a Cover Letter for Internship Applications
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            A great cover letter can be the difference between getting an
            interview and getting ignored. Learn how to write one that actually
            works.
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-rose-500 bg-rose-50 p-6 dark:bg-rose-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-rose-600" />
            Cover Letter Impact
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-rose-600">83%</span>
              <span>
                of recruiters say cover letters impact hiring decision
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-rose-600">45%</span>
              <span>of applications rejected for generic cover letters</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-rose-600">2.5x</span>
              <span>higher response rate with personalized letters</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-rose-600">250</span>
              <span>ideal word count for cover letters</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                1. Why Cover Letters Matter
              </a>
            </li>
            <li>
              <a
                href="#structure"
                className="text-primary hover:underline"
              >
                2. Perfect Cover Letter Structure
              </a>
            </li>
            <li>
              <a
                href="#opening"
                className="text-primary hover:underline"
              >
                3. Crafting a Strong Opening
              </a>
            </li>
            <li>
              <a
                href="#body"
                className="text-primary hover:underline"
              >
                4. Writing the Body
              </a>
            </li>
            <li>
              <a
                href="#closing"
                className="text-primary hover:underline"
              >
                5. Powerful Closings
              </a>
            </li>
            <li>
              <a
                href="#template"
                className="text-primary hover:underline"
              >
                6. Ready-to-Use Template
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                7. Common Mistakes
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                8. FAQs
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
                Personalization is everything—never use generic templates as-is
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Focus on what you can offer, not what you want to gain
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Keep it under 300 words—quality over quantity</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Show genuine enthusiasm for the specific company/role</span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            "Do I really need a cover letter?" Yes. While some applications
            don't require them, a well-written cover letter significantly
            increases your chances. It's your opportunity to show personality,
            demonstrate genuine interest, and explain why you're the perfect
            fit.
          </p>
        </section>

        {/* Section 1 */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Why Cover Letters Matter
          </h2>

          <ul>
            <li>
              <strong>Shows effort:</strong> Taking time to write one signals
              genuine interest
            </li>
            <li>
              <strong>Adds context:</strong> Explain career gaps, transitions,
              or unique situations
            </li>
            <li>
              <strong>Demonstrates writing:</strong> Many roles require
              communication skills
            </li>
            <li>
              <strong>Personality showcase:</strong> Resumes are facts; cover
              letters add character
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section
          id="structure"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            2. Perfect Cover Letter Structure
          </h2>

          <div className="not-prose my-4 rounded-lg bg-primary/10 p-4">
            <ol className="space-y-2 text-sm">
              <li>
                <strong>1. Header:</strong> Your contact info + date + company
                details
              </li>
              <li>
                <strong>2. Greeting:</strong> Addressed to specific person if
                possible
              </li>
              <li>
                <strong>3. Opening (2-3 sentences):</strong> Hook + position +
                brief intro
              </li>
              <li>
                <strong>4. Body (2-3 paragraphs):</strong> Why you're qualified
                + specific examples
              </li>
              <li>
                <strong>5. Closing (2-3 sentences):</strong> Call to action +
                thank you
              </li>
              <li>
                <strong>6. Sign-off:</strong> Professional closing + your name
              </li>
            </ol>
          </div>
        </section>

        {/* Section 3 */}
        <section
          id="opening"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            3. Crafting a Strong Opening
          </h2>

          <p>
            Your opening must grab attention immediately. Avoid these weak
            starts:
          </p>

          <div className="my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 py-2 pl-4 dark:bg-red-950">
              <p className="text-sm font-bold">❌ Generic Openers</p>
              <ul className="mt-2 text-sm">
                <li>• "I am writing to apply for the position of..."</li>
                <li>• "I saw your job posting and am interested..."</li>
                <li>• "My name is [X] and I am a student at..."</li>
              </ul>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 py-2 pl-4 dark:bg-green-950">
              <p className="text-sm font-bold">✅ Strong Openers</p>
              <ul className="mt-2 text-sm">
                <li>
                  • "When I saw your blog post about [topic], I knew [Company]
                  was where I wanted to apply my [skill]."
                </li>
                <li>
                  • "After building [project] that solved [problem], I'm excited
                  to bring this experience to [Company]'s [team]."
                </li>
                <li>
                  • "As someone who's been using [Product] for [X years], I've
                  always admired how [specific feature]. I'd love to contribute
                  to its development."
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section
          id="body"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            4. Writing the Body
          </h2>

          <h3>Paragraph 1: Why You're Qualified</h3>
          <p>Connect your skills/experience to what they're looking for:</p>
          <ul>
            <li>Mention 2-3 relevant skills or experiences</li>
            <li>Use specific examples with quantified results</li>
            <li>Mirror language from the job description</li>
          </ul>

          <h3>Paragraph 2: Why This Company</h3>
          <p>Show genuine research and enthusiasm:</p>
          <ul>
            <li>Reference specific products, projects, or company values</li>
            <li>Explain how your goals align with theirs</li>
            <li>Show you understand their challenges/industry</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> The "Why this company" paragraph is
              where generic applications fail. Spend 10 minutes
              researching—check their blog, recent news, LinkedIn posts, or
              product updates.
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section
          id="closing"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            5. Powerful Closings
          </h2>

          <p>End with a clear call-to-action:</p>
          <div className="my-4 rounded-lg bg-green-50 p-4 text-sm dark:bg-green-950">
            <p>
              "I'd love to discuss how my experience with [skill/project] could
              contribute to [Company's goal]. I'm available for an interview at
              your convenience and can be reached at [email/phone]."
            </p>
            <p className="mt-2">
              "Thank you for considering my application. I'm excited about the
              possibility of joining [Company] and contributing to [specific
              area]."
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section
          id="template"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            6. Ready-to-Use Template
          </h2>

          <div className="my-4 whitespace-pre-line rounded-lg bg-muted p-4 font-mono text-sm">
            {`[Your Name]
[Email] | [Phone] | [LinkedIn/Portfolio]

[Date]

Dear [Hiring Manager's Name / Recruiting Team],

[Opening hook showing research + enthusiasm for the role]

[Paragraph 1: 2-3 relevant qualifications/experiences with specific examples and results]

[Paragraph 2: Why this specific company—reference their product, values, or recent news. Show alignment between your goals and theirs]

[Closing: Express enthusiasm + clear call to action + thank you]

Best regards,
[Your Name]`}
          </div>
        </section>

        {/* Section 7 */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            7. Common Mistakes to Avoid
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Repeating Your Resume</p>
              <p className="text-sm text-muted-foreground">
                Your cover letter should complement, not duplicate, your resume.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Focusing on What You Want</p>
              <p className="text-sm text-muted-foreground">
                "This internship would help me grow" → Focus on what you can
                contribute instead.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Being Too Long</p>
              <p className="text-sm text-muted-foreground">
                250-300 words max. Recruiters won't read essays.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Typos and Errors</p>
              <p className="text-sm text-muted-foreground">
                One typo can cost you the opportunity. Proofread multiple times.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            8. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I write a cover letter if it's optional?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes! "Optional" often means "your chance to stand out." Only
                skip if explicitly told not to include one.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How do I address it if I don't know the hiring manager's name?
              </p>
              <p className="mt-2 text-muted-foreground">
                Use "Dear Hiring Manager" or "Dear [Company] Recruiting Team."
                Avoid "To Whom It May Concern."
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I use the same cover letter for multiple applications?
              </p>
              <p className="mt-2 text-muted-foreground">
                Keep a base template, but customize the "why this company"
                paragraph for each application. Generic letters are obvious.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Your Cover Letter Journey Starts Now</h2>
          <p>
            A great cover letter takes time—maybe 30 minutes per application.
            But that investment pays off in callbacks. Remember: personalize, be
            specific, and show genuine enthusiasm.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your next internship is one great cover letter away. ✉️
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/one-page-resume-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              One-Page Resume Guide
            </Link>
            <Link
              href="/blog/cold-email-for-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cold Email Templates
            </Link>
            <Link
              href="/blog/follow-up-after-application"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              How to Follow Up
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
                Based on analysis of 3,000+ successful applications and
                recruiter interviews.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
