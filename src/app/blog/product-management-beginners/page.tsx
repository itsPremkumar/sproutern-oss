import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Package,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Layers,
  Briefcase,
  Lightbulb as IdeaIcon,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product Management for Beginners: Complete Guide',
  description:
    'Learn what product managers do and how to break into PM roles. Get tips on skills, certifications, and landing your first PM internship.',
  keywords: [
    'product management beginner',
    'how to become product manager',
    'pm career india',
    'product manager internship',
    'apm programs india',
  ],
  openGraph: {
    title: 'Product Management for Beginners',
    description: 'Start your PM journey with the right foundation.',
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
          <div className="mb-4 flex items-center gap-2 text-indigo-600">
            <Package className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Product Management for Beginners: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Product management is one of the most sought-after tech roles. Learn
            what PMs actually do and how to break in.
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
                href="#what"
                className="text-primary hover:underline"
              >
                1. What Do PMs Actually Do?
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
                href="#paths"
                className="text-primary hover:underline"
              >
                3. Entry Paths
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                4. Top APM Programs
              </a>
            </li>
            <li>
              <a
                href="#interview"
                className="text-primary hover:underline"
              >
                5. Interview Preparation
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
                PMs sit at the intersection of tech, business, and design
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                You don't need to code, but technical understanding helps
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>APM programs are the best entry point for freshers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Side projects and case studies can compensate for lack of
                experience
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            1. What Do PMs Actually Do?
          </h2>

          <p>
            Product Managers are responsible for the "what" and "why" of a
            product:
          </p>
          <ul>
            <li>
              <strong>Understand users:</strong> Research problems and needs
            </li>
            <li>
              <strong>Define strategy:</strong> What should we build and why?
            </li>
            <li>
              <strong>Write specs:</strong> PRDs, user stories, requirements
            </li>
            <li>
              <strong>Prioritize:</strong> What's most important right now?
            </li>
            <li>
              <strong>Coordinate:</strong> Work with engineering, design,
              marketing
            </li>
            <li>
              <strong>Measure:</strong> Track metrics and iterate
            </li>
          </ul>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>Communication:</strong> Written and verbal clarity
            </li>
            <li>
              <strong>Analytical thinking:</strong> Data-driven decisions
            </li>
            <li>
              <strong>User empathy:</strong> Understanding user problems
            </li>
            <li>
              <strong>Prioritization:</strong> Trade-offs and focus
            </li>
          </ul>

          <h3>Good to Have</h3>
          <ul>
            <li>
              Technical understanding (APIs, databases, how software works)
            </li>
            <li>Basic SQL for data analysis</li>
            <li>Design thinking</li>
            <li>Business acumen</li>
          </ul>
        </section>

        {/* Section 3: Paths */}
        <section
          id="paths"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            3. Entry Paths into PM
          </h2>

          <ul>
            <li>
              <strong>APM Programs:</strong> Google, Microsoft, Flipkart, Swiggy
              APM
            </li>
            <li>
              <strong>Internal transition:</strong> Engineer/Designer → PM
            </li>
            <li>
              <strong>Startup PM:</strong> Easier entry, broader
              responsibilities
            </li>
            <li>
              <strong>MBA:</strong> Traditional path, especially for
              consulting-to-PM
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>For Students:</strong> Apply to APM programs or intern at
              startups where you can get PM-adjacent experience.
            </div>
          </div>
        </section>

        {/* Section 4: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <IdeaIcon className="h-6 w-6 text-primary" />
            4. Top APM Programs in India
          </h2>

          <ul>
            <li>
              <strong>Google APM:</strong> Most competitive, global rotation
            </li>
            <li>
              <strong>Microsoft APM:</strong> Strong mentorship
            </li>
            <li>
              <strong>Flipkart APM:</strong> Great for India-focused PM
            </li>
            <li>
              <strong>Swiggy Product Launchpad:</strong> Strong training program
            </li>
            <li>
              <strong>Razorpay:</strong> Fintech PM experience
            </li>
            <li>
              <strong>Meesho, Ola, Uber:</strong> Also have APM-like programs
            </li>
          </ul>
        </section>

        {/* Section 5: Interview */}
        <section
          id="interview"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Interview Preparation
          </h2>

          <h3>Common Question Types</h3>
          <ul>
            <li>
              <strong>Product Design:</strong> Design a product for X user
            </li>
            <li>
              <strong>Product Improvement:</strong> How would you improve Y app?
            </li>
            <li>
              <strong>Metrics:</strong> What metrics would you track for Z
              feature?
            </li>
            <li>
              <strong>Estimation:</strong> How many X are there in India?
            </li>
            <li>
              <strong>Strategy:</strong> Should we enter X market?
            </li>
          </ul>

          <h3>Resources</h3>
          <ul>
            <li>Decode and Conquer (book)</li>
            <li>Cracking the PM Interview (book)</li>
            <li>Product Alliance (course)</li>
            <li>Exponent (practice)</li>
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
              <p className="font-bold">Do I need to know how to code?</p>
              <p className="mt-2 text-muted-foreground">
                Not required, but understanding how software works helps you
                collaborate with engineers effectively.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How competitive are APM programs?</p>
              <p className="mt-2 text-muted-foreground">
                Very. Google APM has ~1% acceptance rate. But many paths
                exist—startups are more accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Your PM Journey</h2>
          <p>
            Product management rewards curiosity, communication, and user
            obsession. Start building products, writing case studies, and
            applying.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best PMs started by just building something. Start today. 📦
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Behavioral Interview Guide
            </Link>
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
            </Link>
            <Link
              href="/blog/startup-vs-corporate-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Startup vs Corporate
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
                Based on insights from PMs at Google, Flipkart, and startups.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
