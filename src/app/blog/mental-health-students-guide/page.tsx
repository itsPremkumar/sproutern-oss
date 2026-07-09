import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Heart,
  Brain,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  AlertTriangle,
  Smile,
  Moon,
  Activity,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mental Health for Students: Managing Stress & Burnout',
  description:
    'Prioritize your mental health while studying and job hunting. Learn to recognize burnout, manage stress, and maintain well-being.',
  keywords: [
    'student mental health',
    'managing stress students',
    'college burnout',
    'job search anxiety',
    'student wellness',
  ],
  openGraph: {
    title: 'Mental Health for Students: Managing Stress & Burnout',
    description:
      'Your mental health matters. Learn to thrive, not just survive.',
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
          <div className="mb-4 flex items-center gap-2 text-pink-600">
            <Heart className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Wellness
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Mental Health for Students: Managing Stress & Burnout
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your career is a marathon, not a sprint. Learn to protect your
            mental health while navigating academics and job hunting.
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
              <span>15 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-pink-500 bg-pink-50 p-6 dark:bg-pink-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-pink-600" />
            Student Mental Health Reality
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-pink-600">75%</span>
              <span>of students report significant stress</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-pink-600">45%</span>
              <span>experience burnout symptoms during job search</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-pink-600">30%</span>
              <span>struggle with anxiety about the future</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-pink-600">20%</span>
              <span>have sought mental health support</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#signs"
                className="text-primary hover:underline"
              >
                1. Recognizing Burnout
              </a>
            </li>
            <li>
              <a
                href="#causes"
                className="text-primary hover:underline"
              >
                2. Common Causes
              </a>
            </li>
            <li>
              <a
                href="#strategies"
                className="text-primary hover:underline"
              >
                3. Coping Strategies
              </a>
            </li>
            <li>
              <a
                href="#boundaries"
                className="text-primary hover:underline"
              >
                4. Setting Boundaries
              </a>
            </li>
            <li>
              <a
                href="#help"
                className="text-primary hover:underline"
              >
                5. Seeking Help
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
              <span>Burnout is real—recognize the signs early</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Rest is productive—it's not laziness</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Comparison is the enemy of mental peace</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Seeking help is strength, not weakness</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Signs */}
        <section
          id="signs"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            1. Recognizing Burnout
          </h2>

          <p>Burnout isn't just being tired. Watch for these signs:</p>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">Physical Signs</p>
              <ul className="mt-1 space-y-1">
                <li>• Constant fatigue</li>
                <li>• Sleep problems</li>
                <li>• Frequent headaches</li>
                <li>• Weakened immunity</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">Emotional Signs</p>
              <ul className="mt-1 space-y-1">
                <li>• Irritability</li>
                <li>• Feeling hopeless</li>
                <li>• Loss of motivation</li>
                <li>• Detachment from goals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Causes */}
        <section
          id="causes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            2. Common Causes
          </h2>

          <ul>
            <li>
              <strong>Academic pressure:</strong> Exams, assignments, CGPA
              anxiety
            </li>
            <li>
              <strong>Job search stress:</strong> Rejections, uncertainty,
              competition
            </li>
            <li>
              <strong>Social comparison:</strong> Everyone seems to have offers
              except you
            </li>
            <li>
              <strong>FOMO:</strong> Fear of missing opportunities
            </li>
            <li>
              <strong>Financial stress:</strong> Loans, expenses, uncertain
              income
            </li>
          </ul>
        </section>

        {/* Section 3: Strategies */}
        <section
          id="strategies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Smile className="h-6 w-6 text-primary" />
            3. Coping Strategies
          </h2>

          <h3>Daily Habits</h3>
          <ul>
            <li>
              <strong>Sleep:</strong> 7-8 hours, non-negotiable
            </li>
            <li>
              <strong>Exercise:</strong> Even 20 mins daily helps
            </li>
            <li>
              <strong>Limit social media:</strong> Comparison fuel
            </li>
            <li>
              <strong>Breaks:</strong> Schedule them, don't just hope for them
            </li>
          </ul>

          <h3>Mindset Shifts</h3>
          <ul>
            <li>Progress, not perfection</li>
            <li>One rejection doesn't define you</li>
            <li>Everyone's timeline is different</li>
            <li>Rest is productive</li>
          </ul>
        </section>

        {/* Section 4: Boundaries */}
        <section
          id="boundaries"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Moon className="h-6 w-6 text-primary" />
            4. Setting Boundaries
          </h2>

          <ul>
            <li>
              <strong>No work after 9 PM:</strong> Give your brain time to wind
              down
            </li>
            <li>
              <strong>One day off per week:</strong> Completely work-free
            </li>
            <li>
              <strong>Limit job applications:</strong> 2-3 thoughtful apps beat
              20 rushed ones
            </li>
            <li>
              <strong>Say no:</strong> Not every opportunity is right for you
            </li>
          </ul>
        </section>

        {/* Section 5: Help */}
        <section
          id="help"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-primary" />
            5. Seeking Help
          </h2>

          <p>It's okay to ask for help:</p>
          <ul>
            <li>
              <strong>College counseling:</strong> Most colleges offer free
              services
            </li>
            <li>
              <strong>Talk to friends/family:</strong> Share your struggles
            </li>
            <li>
              <strong>Professional help:</strong> Therapy isn't just for crises
            </li>
            <li>
              <strong>Helplines:</strong> iCall (India): 9152987821
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Remember:</strong> Seeking help is a sign of strength, not
              weakness. Successful people prioritize their mental health.
            </div>
          </div>
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
              <p className="font-bold">How do I deal with rejection?</p>
              <p className="mt-2 text-muted-foreground">
                Every "no" brings you closer to a "yes." Learn from it, don't
                dwell on it. Most successful people faced many rejections.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Is it okay to take a break from job hunting?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. A focused week after rest is more productive than
                months of burned-out effort.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Take Care of Yourself First</h2>
          <p>
            Your mental health is the foundation for everything else. No job,
            internship, or grade is worth sacrificing your well-being.
          </p>
          <p className="text-lg font-semibold text-primary">
            You matter more than your achievements. Take care. 💚
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
              Time Management Guide
            </Link>
            <Link
              href="/blog/imposter-syndrome-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Imposter Syndrome Guide
            </Link>
            <Link
              href="/blog/work-life-balance-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Work-Life Balance
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
                We believe in supporting the whole student, not just their
                career.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
