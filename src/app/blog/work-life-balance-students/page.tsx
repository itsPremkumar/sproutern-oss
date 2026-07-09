import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Wrench,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Shield,
  AlertTriangle,
  Scale,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work-Life Balance for Students: Complete Guide',
  description:
    'Learn to balance academics, internships, and personal life without burning out. Practical strategies for sustainable success.',
  keywords: [
    'work life balance students',
    'student stress management',
    'balance internship studies',
    'student productivity',
    'avoid burnout students',
  ],
  openGraph: {
    title: 'Work-Life Balance for Students',
    description: 'Achieve success without sacrificing your wellbeing.',
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
          <div className="mb-4 flex items-center gap-2 text-lime-600">
            <Scale className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Wellness
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Work-Life Balance for Students: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Success means nothing if you burn out achieving it. Learn to balance
            ambition with wellbeing.
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
              <span>22 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                1. Why Balance Matters
              </a>
            </li>
            <li>
              <a
                href="#signs"
                className="text-primary hover:underline"
              >
                2. Signs of Imbalance
              </a>
            </li>
            <li>
              <a
                href="#priorities"
                className="text-primary hover:underline"
              >
                3. Setting Priorities
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
                href="#tips"
                className="text-primary hover:underline"
              >
                5. Practical Tips
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
              <span>Balance is about energy management, not just time</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Saying no is a skill—learn to use it</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Rest is productive—recovery enables performance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Perfect balance doesn't exist—aim for sustainable rhythm
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
            1. Why Balance Matters
          </h2>

          <p>
            Students today face unprecedented pressure: academics, internships,
            projects, extracurriculars, and social media comparisons. Without
            balance:
          </p>
          <ul>
            <li>Burnout becomes inevitable</li>
            <li>Quality of work suffers</li>
            <li>Mental and physical health decline</li>
            <li>Relationships suffer</li>
            <li>Long-term career is impacted</li>
          </ul>
        </section>

        {/* Section 2: Signs */}
        <section
          id="signs"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            2. Signs of Imbalance
          </h2>

          <ul>
            <li>Constant exhaustion despite sleep</li>
            <li>Irritability and mood swings</li>
            <li>Declining performance despite more effort</li>
            <li>Neglecting personal relationships</li>
            <li>Feeling guilty when not working</li>
            <li>Physical symptoms (headaches, body pain)</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Warning:</strong> If you recognize 3+ of these signs, it's
              time to reevaluate your approach.
            </div>
          </div>
        </section>

        {/* Section 3: Priorities */}
        <section
          id="priorities"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Scale className="h-6 w-6 text-primary" />
            3. Setting Priorities
          </h2>

          <h3>The Priority Matrix</h3>
          <ul>
            <li>
              <strong>Urgent + Important:</strong> Do now (exam tomorrow,
              deadline today)
            </li>
            <li>
              <strong>Important + Not Urgent:</strong> Schedule (skill building,
              health)
            </li>
            <li>
              <strong>Urgent + Not Important:</strong> Delegate or minimize
            </li>
            <li>
              <strong>Not Urgent + Not Important:</strong> Eliminate (mindless
              scrolling)
            </li>
          </ul>
        </section>

        {/* Section 4: Boundaries */}
        <section
          id="boundaries"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            4. Setting Boundaries
          </h2>

          <ul>
            <li>
              <strong>Work hours:</strong> Define when you stop working each day
            </li>
            <li>
              <strong>Digital boundaries:</strong> Turn off notifications during
              rest
            </li>
            <li>
              <strong>Social boundaries:</strong> It's okay to say no to events
            </li>
            <li>
              <strong>Communicate:</strong> Let others know your boundaries
            </li>
          </ul>
        </section>

        {/* Section 5: Tips */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Wrench className="h-6 w-6 text-primary" />
            5. Practical Tips
          </h2>

          <ul>
            <li>
              <strong>Time block:</strong> Schedule work AND rest in your
              calendar
            </li>
            <li>
              <strong>Weekly review:</strong> Assess what's working and what
              isn't
            </li>
            <li>
              <strong>Non-negotiables:</strong> Protect sleep, exercise, and one
              hobby
            </li>
            <li>
              <strong>Batch similar tasks:</strong> Reduce context switching
            </li>
            <li>
              <strong>Single-task:</strong> Multitasking is a myth
            </li>
          </ul>
        </section>

        {/* New comprehensive sections */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Understanding and Preventing Burnout
          </h2>
          <p>
            Burnout isn't just being tired. It's a state of chronic stress that
            leads to physical, emotional, and mental exhaustion.
          </p>

          <h3>The 5 Stages of Burnout</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-bold">Stage 1: Honeymoon Phase</h4>
              <p className="text-sm text-muted-foreground">
                High energy, optimism, and commitment. You're excited about work
                and don't notice warning signs.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-bold">Stage 2: Onset of Stress</h4>
              <p className="text-sm text-muted-foreground">
                Some days are harder. Anxiety appears, focus decreases, and
                sleep suffers. You start compensating.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-bold">Stage 3: Chronic Stress</h4>
              <p className="text-sm text-muted-foreground">
                Stress becomes constant. Cynicism, procrastination, missing
                deadlines, physical symptoms increase.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-bold">Stage 4: Burnout</h4>
              <p className="text-sm text-muted-foreground">
                Full burnout. Can't function normally. Severe physical symptoms,
                emotional numbness, feeling empty.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-bold">Stage 5: Habitual Burnout</h4>
              <p className="text-sm text-muted-foreground">
                Burnout becomes embedded. Chronic mental and physical problems.
                Professional help needed.
              </p>
            </div>
          </div>

          <h3>Burnout Prevention Strategies</h3>
          <ul>
            <li>
              <strong>Schedule recovery:</strong> Rest is not a reward—it's a
              requirement. Schedule it like meetings.
            </li>
            <li>
              <strong>Set hard stops:</strong> Close laptop at a fixed time.
              Work expands to fill available time.
            </li>
            <li>
              <strong>Take real breaks:</strong> Not scrolling social media.
              Walk, stretch, look away from screens.
            </li>
            <li>
              <strong>Seek variety:</strong> Do different types of tasks. Mental
              variety prevents fatigue.
            </li>
            <li>
              <strong>Connect socially:</strong> Isolation accelerates burnout.
              Talk to friends and family.
            </li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>Time Management Frameworks</h2>
          <p>
            Effective time management isn't about doing more—it's about doing
            what matters most. Here are proven frameworks:
          </p>

          <h3>The Pomodoro Technique</h3>
          <div className="my-6 rounded-lg border bg-card p-5">
            <ol className="space-y-2 text-sm">
              <li>
                <strong>1.</strong> Choose a task
              </li>
              <li>
                <strong>2.</strong> Set a timer for 25 minutes
              </li>
              <li>
                <strong>3.</strong> Work with full focus until timer rings
              </li>
              <li>
                <strong>4.</strong> Take a 5-minute break
              </li>
              <li>
                <strong>5.</strong> After 4 pomodoros, take a 15-30 minute break
              </li>
            </ol>
            <p className="mt-3 text-xs text-muted-foreground">
              Best for: Studying, focused work, tasks you've been
              procrastinating
            </p>
          </div>

          <h3>Time Blocking</h3>
          <div className="my-6 rounded-lg border bg-card p-5">
            <p className="mb-3 text-sm">
              Divide your day into blocks dedicated to specific tasks or
              categories:
            </p>
            <ul className="space-y-1 text-sm">
              <li>• 8-10 AM: Deep work (studying, coding, writing)</li>
              <li>• 10-11 AM: Emails and communication</li>
              <li>• 11-12 PM: Classes or meetings</li>
              <li>• 12-1 PM: Lunch break (protected!)</li>
              <li>• 1-4 PM: Projects and assignments</li>
              <li>• 4-5 PM: Administrative tasks</li>
              <li>• After 5 PM: Personal time</li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Best for: People with varied responsibilities who need structure
            </p>
          </div>

          <h3>The Two-Minute Rule</h3>
          <div className="my-6 rounded-lg border bg-card p-5">
            <p className="mb-2 text-sm">
              If something takes less than 2 minutes, do it immediately. Don't
              add it to a list.
            </p>
            <p className="text-xs text-muted-foreground">
              Best for: Preventing small tasks from piling up
            </p>
          </div>

          <h3>Eat the Frog</h3>
          <div className="my-6 rounded-lg border bg-card p-5">
            <p className="mb-2 text-sm">
              Do your hardest, most important task first thing in the morning
              when willpower is highest.
            </p>
            <p className="text-xs text-muted-foreground">
              Best for: People who procrastinate on important tasks
            </p>
          </div>

          <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
            <h4 className="mb-2 flex items-center gap-2 font-bold text-blue-900 dark:text-blue-100">
              <Lightbulb className="h-5 w-5" />
              Pro Tip: Energy Management
            </h4>
            <p className="mb-0 text-sm text-blue-800 dark:text-blue-200">
              Match task difficulty to your energy levels. Do creative, complex
              work when you're most alert (usually morning for most people).
              Save routine tasks for low-energy times.
            </p>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2>Stress Relief Techniques</h2>
          <p>
            When stress is building, these evidence-based techniques can help
            you reset quickly.
          </p>

          <h3>Quick Stress Relievers (2-5 minutes)</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">🧘 Box Breathing</h4>
              <p className="text-xs text-muted-foreground">
                Inhale 4 seconds → Hold 4 seconds → Exhale 4 seconds → Hold 4
                seconds. Repeat 4 times.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">🚶 Quick Walk</h4>
              <p className="text-xs text-muted-foreground">
                5-minute walk, preferably outside. Movement reduces cortisol
                (stress hormone).
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">🎵 Music Break</h4>
              <p className="text-xs text-muted-foreground">
                Listen to one favorite song. Music regulates mood and reduces
                stress.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">💧 Hydration Check</h4>
              <p className="text-xs text-muted-foreground">
                Drink a glass of water. Dehydration increases stress hormone
                levels.
              </p>
            </div>
          </div>

          <h3>Longer Recovery Practices</h3>
          <ul>
            <li>
              <strong>Exercise:</strong> 30 minutes of movement releases
              endorphins and reduces anxiety
            </li>
            <li>
              <strong>Journaling:</strong> Write down worries to externalize
              them and gain perspective
            </li>
            <li>
              <strong>Sleep:</strong> 7-9 hours is non-negotiable for stress
              resilience
            </li>
            <li>
              <strong>Social connection:</strong> Talk to a friend or family
              member. Loneliness amplifies stress.
            </li>
            <li>
              <strong>Nature:</strong> Spend 20 minutes in green space (park,
              garden, forest)
            </li>
            <li>
              <strong>Hobbies:</strong> Engage in activities unrelated to work
              or study
            </li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>Balancing Internship with Academics</h2>
          <p>
            One of the biggest challenges: how do you balance an internship with
            class schedules, assignments, and exams?
          </p>

          <h3>Before the Internship</h3>
          <ul>
            <li>
              <strong>Plan your semester:</strong> Consider taking a lighter
              course load if possible
            </li>
            <li>
              <strong>Communicate with professors:</strong> Let them know about
              your internship ahead of time
            </li>
            <li>
              <strong>Buffer time:</strong> Don't fill every hour—leave space
              for unexpected demands
            </li>
          </ul>

          <h3>During the Internship</h3>
          <ul>
            <li>
              <strong>Weekly planning:</strong> Every Sunday, map out deadlines
              for the week
            </li>
            <li>
              <strong>Communicate proactively:</strong> Tell your manager about
              exam weeks in advance
            </li>
            <li>
              <strong>Use travel time:</strong> Read, review notes, or listen to
              lectures during commute
            </li>
            <li>
              <strong>Protect weekends:</strong> Try to keep at least one full
              day off per week
            </li>
          </ul>

          <h3>Common Mistakes to Avoid</h3>
          <div className="my-6 space-y-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                ❌ Sacrificing sleep for productivity
              </p>
              <p className="text-sm text-red-800 dark:text-red-200">
                Sleep-deprived brains are 40% less effective. You lose more than
                you gain.
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                ❌ Saying yes to everything
              </p>
              <p className="text-sm text-red-800 dark:text-red-200">
                Every yes is a no to something else. Be strategic about
                commitments.
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                ❌ Waiting until you're burnt out to ask for help
              </p>
              <p className="text-sm text-red-800 dark:text-red-200">
                Reach out early. Professors and managers are usually more
                understanding than you expect.
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2>Digital Wellness</h2>
          <p>
            Screens are essential for work and study, but they're also sources
            of stress and distraction.
          </p>

          <h3>Reducing Screen Time Stress</h3>
          <ul>
            <li>
              <strong>20-20-20 rule:</strong> Every 20 minutes, look at
              something 20 feet away for 20 seconds
            </li>
            <li>
              <strong>Notification diet:</strong> Turn off all non-essential
              notifications. Check intentionally.
            </li>
            <li>
              <strong>Phone-free zones:</strong> Bedroom, dining table, first
              hour after waking
            </li>
            <li>
              <strong>App timers:</strong> Use built-in screen time limits on
              social media apps
            </li>
            <li>
              <strong>Grayscale mode:</strong> Makes your phone less addictive
              without losing functionality
            </li>
          </ul>

          <h3>Managing Information Overload</h3>
          <ul>
            <li>Unsubscribe from email lists you don't read</li>
            <li>Use RSS or curated newsletters instead of scrolling</li>
            <li>Limit to 2-3 social media platforms maximum</li>
            <li>Schedule specific times for news consumption</li>
            <li>Use "do not disturb" mode during focus time</li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>Self-Care Essentials</h2>
          <p>
            Self-care isn't selfish—it's maintenance. Like a car needs fuel and
            service, you need regular care to perform.
          </p>

          <h3>The Four Pillars of Self-Care</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🛏️ Sleep</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                7-9 hours, consistent schedule. No screens 1 hour before bed.
              </p>
              <p className="text-xs">
                Impact: Memory, focus, mood, immune system, stress resilience
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🏃 Movement</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                30 minutes daily. Doesn't have to be gym—walking counts.
              </p>
              <p className="text-xs">
                Impact: Energy, stress reduction, cognitive function, confidence
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🥗 Nutrition</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Regular meals, hydration, limit caffeine and processed foods.
              </p>
              <p className="text-xs">
                Impact: Sustained energy, mood stability, focus, overall health
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🧘 Mental Health</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Mindfulness, therapy, journaling, social connection, hobbies.
              </p>
              <p className="text-xs">
                Impact: Emotional regulation, resilience, motivation, creativity
              </p>
            </div>
          </div>

          <h3>Weekly Self-Care Checklist</h3>
          <div className="my-6 rounded-lg border bg-muted p-6">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Got 7+ hours of sleep most nights
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Moved my body for 30+ minutes 5 times
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Ate regular, balanced meals
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Connected with friends or family
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Took at least one full day off
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Did something enjoyable (hobby, fun activity)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Limited social media/news consumption
              </li>
            </ul>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2>Building Sustainable Habits</h2>
          <p>
            Balance isn't achieved through willpower alone. It requires systems
            and habits that support you automatically.
          </p>

          <h3>Morning Routine Essentials</h3>
          <ul>
            <li>
              <strong>Wake up at consistent time:</strong> Even on weekends,
              within 1 hour of normal wake time
            </li>
            <li>
              <strong>No screen for first 30 minutes:</strong> Avoid reactive
              mode, start intentionally
            </li>
            <li>
              <strong>Brief movement:</strong> 5-10 min stretching or walk to
              activate body
            </li>
            <li>
              <strong>Plan biggest task:</strong> Identify your ONE priority for
              the day
            </li>
          </ul>

          <h3>Evening Wind-Down</h3>
          <ul>
            <li>
              <strong>Set hard cutoff:</strong> No work after X PM (pick your
              time)
            </li>
            <li>
              <strong>Brain dump:</strong> Write tomorrow's tasks to clear your
              mind
            </li>
            <li>
              <strong>Screen dimming:</strong> Blue light filter after sunset
            </li>
            <li>
              <strong>Relaxing activity:</strong> Reading, music, light
              conversation
            </li>
            <li>
              <strong>Consistent bedtime:</strong> Within 30 min of target each
              night
            </li>
          </ul>

          <h3>Weekly Rituals</h3>
          <ul>
            <li>
              <strong>Sunday planning:</strong> 30 min to review last week and
              plan next week
            </li>
            <li>
              <strong>One full rest day:</strong> Completely disconnected from
              academic/work obligations
            </li>
            <li>
              <strong>Social activity:</strong> At least one meaningful
              connection with friends/family
            </li>
            <li>
              <strong>Physical activity:</strong> 3-5 exercise sessions per week
            </li>
            <li>
              <strong>Hobby time:</strong> Something purely for enjoyment
            </li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>Productivity Hacks That Actually Work</h2>

          <h3>Theme Days</h3>
          <p>
            Assign specific focus areas to different days to reduce context
            switching:
          </p>
          <ul>
            <li>
              <strong>Monday:</strong> Heavy academic work, difficult tasks
            </li>
            <li>
              <strong>Tuesday-Wednesday:</strong> Internship/project work
            </li>
            <li>
              <strong>Thursday:</strong> Meetings, collaborations, networking
            </li>
            <li>
              <strong>Friday:</strong> Lighter tasks, planning, administration
            </li>
            <li>
              <strong>Weekend:</strong> One day rest, one day catch-up if needed
            </li>
          </ul>

          <h3>The 80/20 Rule</h3>
          <p>
            20% of your efforts produce 80% of results. Identify what truly
            matters and focus there. Not all tasks are equal—prioritize
            ruthlessly.
          </p>

          <h3>Environment Design</h3>
          <ul>
            <li>
              <strong>Separate work and rest spaces:</strong> Don't work from
              bed
            </li>
            <li>
              <strong>Remove distractions:</strong> Phone in another room during
              focus time
            </li>
            <li>
              <strong>Make healthy choices easy:</strong> Keep water nearby,
              snacks visible
            </li>
            <li>
              <strong>Visual cues:</strong> Use sticky notes for reminders,
              calendar blocking
            </li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-950">
            <h4 className="mb-2 font-bold text-green-900 dark:text-green-100">
              The "Done is Better Than Perfect" Mindset
            </h4>
            <p className="mb-0 text-sm text-green-800 dark:text-green-200">
              Perfectionism is a major cause of burnout. Set "good enough"
              standards for most tasks. Reserve perfectionism only for what
              truly matters. 80% quality with 20% effort is often better than
              100% quality with 100% effort.
            </p>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Isn't hustle culture necessary for success?
              </h3>
              <p className="text-muted-foreground">
                Short bursts of intense work can be effective, but sustained
                hustle leads to burnout. Research shows that productivity drops
                sharply after 50 hours per week. The most successful people
                prioritize recovery like they prioritize work.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I say no without seeming lazy?
              </h3>
              <p className="text-muted-foreground">
                Be direct but kind: "I'd love to help, but I'm at capacity right
                now. Can we revisit this next week?" or "That sounds great, but
                I need to focus on [priority] right now. Maybe [name] could
                help?" No excuses needed—"I can't" is a complete sentence.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                I feel guilty when I'm not being productive. How do I fix this?
              </h3>
              <p className="text-muted-foreground">
                Reframe rest as productive. Recovery is when learning
                consolidates and creativity emerges. Schedule rest like you
                schedule work—it's not "doing nothing," it's "recharging."
                Productivity without rest is unsustainable.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I balance a part-time internship with full-time studies?
              </h3>
              <p className="text-muted-foreground">
                Be strategic: (1) Consider a lighter course load (2) Batch
                similar tasks together (3) Use time between classes efficiently
                (4) Communicate expectations clearly with both professors and
                supervisors (5) Protect at least one full day off per week.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if my manager expects me to always be available?
              </h3>
              <p className="text-muted-foreground">
                Set expectations early: "I'm most responsive between X and Y
                hours. For urgent matters outside those hours, please text me."
                Most "urgent" requests can wait. If the culture truly demands
                24/7 availability, that's a red flag about the workplace.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How much sleep do I really need?
              </h3>
              <p className="text-muted-foreground">
                7-9 hours for adults aged 18-25. Sleep deprivation affects
                memory, learning, judgment, and emotional regulation—all things
                students need most. The "I'll sleep when I'm dead" mentality
                actually accelerates that outcome.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is it okay to take mental health days?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. Mental health is health. Taking a day to recover
                from stress prevents weeks lost to burnout. Use mental health
                days proactively, not just reactively. Know your warning signs
                and respond early.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I deal with FOMO (Fear of Missing Out)?
              </h3>
              <p className="text-muted-foreground">
                FOMO is often worse than actually missing things. Remember: (1)
                Social media shows highlights, not reality (2) You can't do
                everything—choose what matters (3) Saying no to one thing means
                saying yes to something else (rest, priorities, yourself).
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What should I do if I'm already burnt out?
              </h3>
              <p className="text-muted-foreground">
                First, acknowledge it—denial makes it worse. Then: (1) Talk to
                someone—counselor, trusted friend, or family (2) Reduce
                commitments immediately—drop what you can (3) Prioritize sleep
                and basic self-care (4) Consider professional help if symptoms
                are severe (5) Recovery takes time—be patient with yourself.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Balance is a Skill</h2>
          <p>
            Work-life balance isn't about perfect equilibrium every day. It's
            about sustainable rhythms over weeks and months. Prioritize recovery
            as much as performance.
          </p>
          <p className="text-lg font-semibold text-primary">
            You can't pour from an empty cup. Take care of yourself first. ⚖️
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/mental-health-students-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Mental Health Guide
            </Link>
            <Link
              href="/blog/time-management-students-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Time Management Tips
            </Link>
            <Link
              href="/blog/imposter-syndrome-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Imposter Syndrome Guide
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
                Based on research and student feedback on sustainable success.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
