import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Timer,
  Target,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  AlertTriangle,
  Zap,
  ListTodo,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Time Management for Students',
  description:
    'Master time management as a student. Learn proven techniques to balance academics, internships, and personal life without burning out.',
  keywords: [
    'time management students',
    'student productivity',
    'balance studies internship',
    'time blocking',
    'student schedule',
  ],
  openGraph: {
    title: 'Time Management for Students: Complete Guide',
    description:
      'Balance studies, internships, and life with proven techniques.',
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
          <div className="mb-4 flex items-center gap-2 text-cyan-600">
            <Timer className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Productivity
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Time Management for Students: Balance Studies, Internships & Life
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Not enough hours in the day? Learn proven time management techniques
            to balance everything without burning out.
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
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-cyan-500 bg-cyan-50 p-6 dark:bg-cyan-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-cyan-600" />
            Student Productivity Facts
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-cyan-600">82%</span>
              <span>of students feel overwhelmed by workload</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-cyan-600">25%</span>
              <span>of time wasted on unplanned distractions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-cyan-600">2x</span>
              <span>more productive with time blocking</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-cyan-600">4 hrs</span>
              <span>optimal deep work per day</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#audit"
                className="text-primary hover:underline"
              >
                1. Time Audit
              </a>
            </li>
            <li>
              <a
                href="#techniques"
                className="text-primary hover:underline"
              >
                2. Proven Techniques
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="text-primary hover:underline"
              >
                3. Building Your Schedule
              </a>
            </li>
            <li>
              <a
                href="#balance"
                className="text-primary hover:underline"
              >
                4. Balancing Multiple Priorities
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="text-primary hover:underline"
              >
                5. Best Tools
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
              <span>You have more time than you think—audit where it goes</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Time blocking beats to-do lists for productivity</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Protect your high-energy hours for deep work</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Rest is productive—schedule it, don't just hope for it
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Audit */}
        <section
          id="audit"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Start with a Time Audit
          </h2>

          <p>Before optimizing, understand where your time actually goes:</p>

          <h3>How to Conduct a Time Audit</h3>
          <ol>
            <li>Track every activity for 3-7 days (use Toggl or pen/paper)</li>
            <li>
              Categorize: Classes, Study, Internship, Social Media,
              Entertainment, Sleep
            </li>
            <li>
              Identify time sinks (often social media and unplanned activities)
            </li>
            <li>Calculate your "available productive hours"</li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Shock Factor:</strong> Most students discover they spend
              3-4 hours daily on social media without realizing it. That's 20+
              hours a week!
            </div>
          </div>
        </section>

        {/* Section 2: Techniques */}
        <section
          id="techniques"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            2. Proven Techniques
          </h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-600">Time Blocking</p>
              <p className="text-sm text-muted-foreground">
                Assign specific hours to specific tasks. No multitasking allowed
                during blocks.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-600">Pomodoro Technique</p>
              <p className="text-sm text-muted-foreground">
                25 minutes work, 5 minutes break. After 4 cycles, take a longer
                20-30 min break.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-600">Eat the Frog</p>
              <p className="text-sm text-muted-foreground">
                Do your hardest/most important task first thing in the morning.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-600">2-Minute Rule</p>
              <p className="text-sm text-muted-foreground">
                If a task takes less than 2 minutes, do it immediately instead
                of scheduling.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Schedule */}
        <section
          id="schedule"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <ListTodo className="h-6 w-6 text-primary" />
            3. Building Your Weekly Schedule
          </h2>

          <h3>The Ideal Week Template</h3>
          <ul>
            <li>
              <strong>Morning (6-9 AM):</strong> High-energy deep work (DSA
              practice, complex assignments)
            </li>
            <li>
              <strong>Day (9 AM - 5 PM):</strong> Classes, meetings, internship
              work
            </li>
            <li>
              <strong>Evening (5-8 PM):</strong> Revision, lighter tasks,
              projects
            </li>
            <li>
              <strong>Night (8-10 PM):</strong> Personal time, planning next day
            </li>
            <li>
              <strong>Weekend:</strong> Batch low-priority tasks, rest, skill
              building
            </li>
          </ul>

          <h3>Non-Negotiables</h3>
          <ul>
            <li>7-8 hours sleep</li>
            <li>At least 1 full rest day per week</li>
            <li>Daily exercise/movement (even 20 mins)</li>
            <li>Buffer time between activities</li>
          </ul>
        </section>

        {/* Section 4: Balance */}
        <section
          id="balance"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Balancing Multiple Priorities
          </h2>

          <h3>When Doing an Internship + Studies</h3>
          <ul>
            <li>Communicate with your manager about class schedules</li>
            <li>Batch similar tasks together</li>
            <li>Use weekends for catching up, not getting ahead</li>
            <li>Learn to say no to non-essential activities</li>
          </ul>

          <div className="not-prose my-4 rounded-lg bg-primary/10 p-4">
            <p className="mb-2 text-sm font-bold">Priority Matrix</p>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>P1 (Do First):</strong> Deadlines, exams, work
                deliverables
              </li>
              <li>
                <strong>P2 (Schedule):</strong> Career prep, skill building,
                networking
              </li>
              <li>
                <strong>P3 (Delegate/Batch):</strong> Routine tasks, admin work
              </li>
              <li>
                <strong>P4 (Minimize):</strong> Entertainment, social media
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Tools */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Timer className="h-6 w-6 text-primary" />
            5. Best Tools
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Time Tracking</p>
              <p className="text-muted-foreground">
                Toggl, RescueTime, Clockify
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Task Management</p>
              <p className="text-muted-foreground">Notion, Todoist, TickTick</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Focus</p>
              <p className="text-muted-foreground">
                Forest, Focus@Will, Cold Turkey
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Calendar</p>
              <p className="text-muted-foreground">
                Google Calendar, Fantastical
              </p>
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
              <p className="font-bold">How do I handle unexpected tasks?</p>
              <p className="mt-2 text-muted-foreground">
                Always build buffer time (20-30% of your schedule). If something
                truly urgent comes up, bump a P3 or P4 task.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What if I can't focus for long periods?
              </p>
              <p className="mt-2 text-muted-foreground">
                Start with shorter Pomodoro sessions (15 mins). Build up
                gradually. Focus is a muscle—train it.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How do I deal with burnout?</p>
              <p className="mt-2 text-muted-foreground">
                Prevention is key: scheduled rest, exercise, sleep. If already
                burned out, take 2-3 days completely off before restructuring.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Take Control of Your Time</h2>
          <p>
            Time management isn't about squeezing more into your day—it's about
            prioritizing what matters and being intentional. Start with one
            technique, build the habit, then add more.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your time is your most valuable resource. Invest it wisely. ⏰
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/virtual-internships-complete-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Virtual Internship Guide
            </Link>
            <Link
              href="/blog/work-life-balance-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Work-Life Balance Guide
            </Link>
            <Link
              href="/blog/productivity-apps-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Best Productivity Apps
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
                Based on research and interviews with high-achieving students.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
