import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Briefcase,
  IndianRupee,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  DollarSign,
  AlertTriangle,
  Globe,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Freelancing for Students: Complete Beginner Guide',
  description:
    'Start freelancing as a student. Learn how to find clients, set rates, build portfolio, and balance freelancing with academics.',
  keywords: [
    'freelancing students',
    'student freelancer',
    'how to start freelancing',
    'freelance for beginners',
    'freelance india students',
  ],
  openGraph: {
    title: 'Freelancing for Students: Complete Beginner Guide',
    description: 'Start earning as a student freelancer.',
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
          <div className="mb-4 flex items-center gap-2 text-amber-600">
            <Briefcase className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Side Income
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Freelancing for Students: Complete Beginner Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Build skills, earn money, and gain real-world experience—all while
            studying. Here's how to start freelancing as a student.
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-amber-600" />
            Freelancing Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-amber-600">₹15K+</span>
              <span>
                possible monthly income for skilled student freelancers
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-amber-600">60%</span>
              <span>of freelancers started while in college</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-amber-600">5+</span>
              <span>platforms where students can find work</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-amber-600">
                Web/Design
              </span>
              <span>most in-demand student freelance skills</span>
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
                1. Why Freelance as a Student
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Best Skills to Offer
              </a>
            </li>
            <li>
              <a
                href="#platforms"
                className="text-primary hover:underline"
              >
                3. Where to Find Clients
              </a>
            </li>
            <li>
              <a
                href="#rates"
                className="text-primary hover:underline"
              >
                4. Setting Your Rates
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-primary hover:underline"
              >
                5. Building Portfolio
              </a>
            </li>
            <li>
              <a
                href="#balance"
                className="text-primary hover:underline"
              >
                6. Balancing with Studies
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
              <span>Start with one skill and get really good at it</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Build a portfolio before applying for gigs</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Start cheap to build reviews, then raise rates</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Academics first—don't let freelancing hurt your grades
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Why */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Why Freelance as a Student
          </h2>

          <ul>
            <li>
              <strong>Income:</strong> Earn while learning, reduce financial
              stress
            </li>
            <li>
              <strong>Real experience:</strong> Better than theoretical projects
            </li>
            <li>
              <strong>Portfolio:</strong> Client work looks great on resumes
            </li>
            <li>
              <strong>Flexibility:</strong> Work on your own schedule
            </li>
            <li>
              <strong>Skills:</strong> Client management, communication,
              deadlines
            </li>
          </ul>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            2. Best Skills to Offer
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-amber-600">High Demand</p>
              <ul className="mt-1 space-y-1">
                <li>• Web development (React, WordPress)</li>
                <li>• Graphic design (Canva, Figma)</li>
                <li>• Content writing</li>
                <li>• Video editing</li>
                <li>• Social media management</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-amber-600">Easier to Start</p>
              <ul className="mt-1 space-y-1">
                <li>• Data entry</li>
                <li>• Virtual assistance</li>
                <li>• Transcription</li>
                <li>• Basic photo editing</li>
                <li>• Research</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Platforms */}
        <section
          id="platforms"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            3. Where to Find Clients
          </h2>

          <h3>Freelance Platforms</h3>
          <ul>
            <li>
              <strong>Fiverr:</strong> Best for beginners, gig-based
            </li>
            <li>
              <strong>Upwork:</strong> Higher-paying, proposal-based
            </li>
            <li>
              <strong>Freelancer:</strong> Wide variety of projects
            </li>
            <li>
              <strong>Toptal/Turing:</strong> For advanced developers
            </li>
          </ul>

          <h3>Other Sources</h3>
          <ul>
            <li>LinkedIn connections and posts</li>
            <li>Local businesses (offer to build their website)</li>
            <li>College network (professors, seniors, clubs)</li>
            <li>Reddit/Discord communities</li>
          </ul>
        </section>

        {/* Section 4: Rates */}
        <section
          id="rates"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            4. Setting Your Rates
          </h2>

          <h3>Beginner Strategy</h3>
          <ol>
            <li>Start below market rate to get first 5-10 reviews</li>
            <li>Deliver excellent work, collect testimonials</li>
            <li>Gradually increase rates (10-20% per raise)</li>
            <li>Eventually charge market or above-market rates</li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Beginner Rates (India):</strong> Web dev: ₹500-2000/hr;
              Content writing: ₹1-3/word; Design: ₹300-1000/design. These are
              starting points—raise as you gain experience.
            </div>
          </div>
        </section>

        {/* Section 5: Portfolio */}
        <section
          id="portfolio"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            5. Building Portfolio
          </h2>

          <p>No clients yet? Create sample work:</p>
          <ul>
            <li>
              <strong>Developers:</strong> Build 3-5 projects, deploy on GitHub
            </li>
            <li>
              <strong>Designers:</strong> Create mockups for imaginary clients
            </li>
            <li>
              <strong>Writers:</strong> Start a blog or write Medium articles
            </li>
            <li>
              <strong>Video editors:</strong> Edit YouTube videos or create
              reels
            </li>
          </ul>
        </section>

        {/* Section 6: Balance */}
        <section
          id="balance"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            6. Balancing with Studies
          </h2>

          <ul>
            <li>
              <strong>Set limits:</strong> Max 15-20 hours/week during semester
            </li>
            <li>
              <strong>Exams first:</strong> Reduce work during exam periods
            </li>
            <li>
              <strong>Communicate:</strong> Set clear deadlines with clients
            </li>
            <li>
              <strong>Buffer time:</strong> Don't take on more than you can
              handle
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <div className="text-sm">
              <strong>Warning:</strong> Don't let freelancing hurt your
              academics. A good CGPA + freelance experience is ideal. Poor
              grades with freelance income is not a good trade-off for most
              students.
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Your Freelance Journey</h2>
          <p>
            Freelancing is one of the best ways to build skills, earn money, and
            stand out as a student. Start small, deliver quality, and grow from
            there.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your first gig might be small. Your 50th gig could change your
            career. Start today. 💰
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/time-management-students-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Time Management for Students
            </Link>
            <Link
              href="/blog/git-github-beginners-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Git & GitHub Guide
            </Link>
            <Link
              href="/blog/one-page-resume-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Guide
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
                Based on experiences of 100+ student freelancers in India.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
