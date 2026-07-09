import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  Timer,
  CheckCircle,
  Target,
  Brain,
  Lightbulb,
  ArrowRight,
  Users,
  AlertCircle,
  Zap,
  Coffee,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Time Management for Interns: Balance Work, Studies & Life',
  description:
    'Master time management as a student intern. Learn proven techniques like Pomodoro, time blocking, and the Eisenhower Matrix to juggle internships with academics.',
  keywords: [
    'time management for students',
    'intern productivity',
    'work life balance students',
    'Pomodoro technique',
    'time blocking',
    'student productivity',
  ],
  openGraph: {
    title: 'Time Management for Interns: Complete Guide',
    description:
      'Balance your internship with studies and life without burning out.',
    type: 'article',
    publishedTime: '2025-09-18T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-purple-600">
            <Timer className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Productivity
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Time Management for Interns: Balancing Work, Studies, and Life
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Practical strategies to manage 20-40 hours of internship work
            alongside classes, assignments, and a social life—without burning
            out.
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
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Zap className="h-5 w-5 text-purple-600" />
            Time Management Facts
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">26%</span>
              <span>of deadlines are missed due to poor time management</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">2.5 hrs</span>
              <span>average time lost daily to distractions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">80%</span>
              <span>
                of results come from 20% of efforts (Pareto Principle)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">4 hrs</span>
              <span>maximum focused work most people can sustain daily</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#planning"
                className="text-primary hover:underline"
              >
                1. Planning Your Week
              </a>
            </li>
            <li>
              <a
                href="#eisenhower"
                className="text-primary hover:underline"
              >
                2. The Eisenhower Matrix
              </a>
            </li>
            <li>
              <a
                href="#time-blocking"
                className="text-primary hover:underline"
              >
                3. Time Blocking
              </a>
            </li>
            <li>
              <a
                href="#pomodoro"
                className="text-primary hover:underline"
              >
                4. The Pomodoro Technique
              </a>
            </li>
            <li>
              <a
                href="#energy"
                className="text-primary hover:underline"
              >
                5. Managing Energy, Not Just Time
              </a>
            </li>
            <li>
              <a
                href="#boundaries"
                className="text-primary hover:underline"
              >
                6. Setting Boundaries
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="text-primary hover:underline"
              >
                7. Best Tools for Interns
              </a>
            </li>
            <li>
              <a
                href="#burnout"
                className="text-primary hover:underline"
              >
                8. Avoiding Burnout
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            Juggling an internship with classes, assignments, social life, and
            personal well-being can feel overwhelming. But here's the truth:
            effective time management isn't about cramming more into each
            day—it's about doing the right things at the right time.
          </p>
          <p>
            This guide covers practical, proven strategies that work
            specifically for student interns. No generic advice—just actionable
            techniques you can implement today.
          </p>
        </section>

        {/* Planning */}
        <section
          id="planning"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Weekly Planning (The Non-Negotiable)
          </h2>

          <p>
            Spending 30 minutes on Sunday evening planning your week saves hours
            of wasted time and stress during the week.
          </p>

          <h3>Weekly Planning Template</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="mb-2 font-bold">Sunday Planning Session (30 mins):</p>
            <ol className="space-y-1">
              <li>1. List all deadlines (internship + academic)</li>
              <li>2. Block time for classes and fixed commitments</li>
              <li>3. Identify your 3 "Big Rocks" for the week</li>
              <li>4. Schedule deep work sessions (2-4 hour blocks)</li>
              <li>5. Build in buffer time for unexpected tasks</li>
              <li>6. Schedule self-care (exercise, social, rest)</li>
            </ol>
          </div>

          <h3>The 3 Big Rocks Method</h3>
          <p>
            Each week, identify 3 major outcomes that would make the week
            successful. These become non-negotiable priorities:
          </p>
          <ul>
            <li>
              <strong>Rock 1:</strong> Complete internship project milestone
            </li>
            <li>
              <strong>Rock 2:</strong> Submit assignment for Data Structures
              class
            </li>
            <li>
              <strong>Rock 3:</strong> Prepare for midterm exam
            </li>
          </ul>
          <p>
            Everything else is secondary. When you're overwhelmed, ask: "Am I
            working on a Big Rock right now?"
          </p>
        </section>

        {/* Eisenhower Matrix */}
        <section
          id="eisenhower"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            2. The Eisenhower Matrix
          </h2>

          <p>
            Named after President Eisenhower, this framework helps you
            prioritize by urgency and importance:
          </p>

          <div className="not-prose my-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-2 font-bold text-red-700">
                🔴 Urgent + Important
              </p>
              <p className="mb-2 text-xs font-bold">DO FIRST</p>
              <ul className="space-y-1">
                <li>• Internship deadline tomorrow</li>
                <li>• Assignment due tonight</li>
                <li>• Emergency bug fix</li>
              </ul>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <p className="mb-2 font-bold text-blue-700">
                🔵 Important, Not Urgent
              </p>
              <p className="mb-2 text-xs font-bold">SCHEDULE IT</p>
              <ul className="space-y-1">
                <li>• Learning new skills</li>
                <li>• Building relationships</li>
                <li>• Long-term projects</li>
              </ul>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <p className="mb-2 font-bold text-yellow-700">
                🟡 Urgent, Not Important
              </p>
              <p className="mb-2 text-xs font-bold">DELEGATE/MINIMIZE</p>
              <ul className="space-y-1">
                <li>• Some meetings</li>
                <li>• Interruptions</li>
                <li>• Most emails</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
              <p className="mb-2 font-bold text-gray-700">⚪ Neither</p>
              <p className="mb-2 text-xs font-bold">ELIMINATE</p>
              <ul className="space-y-1">
                <li>• Social media scrolling</li>
                <li>• Netflix binging</li>
                <li>• Busy work</li>
              </ul>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Key Insight:</strong> Most people spend time in Quadrants
              1 and 3 (the urgent boxes), but success comes from spending more
              time in Quadrant 2 (important but not urgent). This is where
              growth, learning, and long-term success happen.
            </div>
          </div>
        </section>

        {/* Time Blocking */}
        <section
          id="time-blocking"
          className="scroll-mt-20"
        >
          <h2>3. Time Blocking</h2>

          <p>
            Time blocking isn't just a to-do list—it's assigning every hour of
            your day a specific purpose. It's how CEOs and top performers manage
            their time.
          </p>

          <h3>Sample Time-Blocked Day (Part-Time Internship)</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>6:00 AM - Morning routine, exercise</p>
            <p>7:00 AM - Breakfast, plan the day</p>
            <p>8:00 AM - Class (Data Structures)</p>
            <p>10:00 AM - Class (Database Systems)</p>
            <p>12:00 PM - Lunch + Quick emails</p>
            <p className="font-bold text-green-600">
              1:00 PM - Internship Deep Work (3 hours)
            </p>
            <p className="font-bold text-green-600">
              4:00 PM - Internship meetings/collaboration
            </p>
            <p>5:30 PM - Break, snack</p>
            <p className="font-bold text-blue-600">
              6:00 PM - Study/Assignments (2 hours)
            </p>
            <p>8:00 PM - Dinner, social time</p>
            <p>9:30 PM - Light reading, wind down</p>
            <p>10:30 PM - Sleep</p>
          </div>

          <h3>Time Blocking Rules</h3>
          <ul>
            <li>Schedule your most important work during peak energy hours</li>
            <li>Batch similar tasks together (emails, calls, meetings)</li>
            <li>Build in 15-min buffer between blocks</li>
            <li>Protect deep work blocks—no meetings, no notifications</li>
            <li>Leave 20% of your day unscheduled for unexpected tasks</li>
          </ul>
        </section>

        {/* Pomodoro */}
        <section
          id="pomodoro"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Timer className="h-6 w-6 text-primary" />
            4. The Pomodoro Technique
          </h2>

          <p>
            Perfect for students who struggle with sustained focus. The
            technique creates urgency and builds in regular breaks.
          </p>

          <div className="my-6 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">How It Works:</h4>
            <ol className="space-y-2">
              <li>
                <strong>1. Choose a task</strong> - Be specific: "Write 500
                words of report"
              </li>
              <li>
                <strong>2. Set timer for 25 minutes</strong> - Work with full
                focus, no distractions
              </li>
              <li>
                <strong>3. Take a 5-minute break</strong> - Stand up, stretch,
                get water
              </li>
              <li>
                <strong>4. Repeat 4 times</strong> - After 4 pomodoros, take a
                15-30 min break
              </li>
            </ol>
          </div>

          <h3>Pomodoro Variations for Different Work Types</h3>
          <ul>
            <li>
              <strong>Standard:</strong> 25 min work + 5 min break (general
              tasks)
            </li>
            <li>
              <strong>Deep Work:</strong> 50 min work + 10 min break (complex
              coding, writing)
            </li>
            <li>
              <strong>Sprint:</strong> 15 min work + 3 min break (administrative
              tasks)
            </li>
          </ul>

          <h3>Best Pomodoro Apps</h3>
          <ul>
            <li>
              <strong>Forest:</strong> Gamified focus timer (plant trees!)
            </li>
            <li>
              <strong>Toggl Track:</strong> With time tracking built in
            </li>
            <li>
              <strong>Focus To-Do:</strong> Combines Pomodoro with task
              management
            </li>
          </ul>
        </section>

        {/* Energy Management */}
        <section
          id="energy"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            5. Managing Energy, Not Just Time
          </h2>

          <p>
            Having 2 hours free means nothing if you're too exhausted to think.
            Match tasks to your energy levels:
          </p>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">
                🌅 Peak Energy (Morning for most)
              </p>
              <ul className="space-y-1">
                <li>• Complex problem-solving</li>
                <li>• Creative work</li>
                <li>• Learning new concepts</li>
                <li>• Important presentations</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">☀️ Medium Energy (Midday)</p>
              <ul className="space-y-1">
                <li>• Meetings</li>
                <li>• Collaborative work</li>
                <li>• Email and messages</li>
                <li>• Review and feedback</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">
                🌙 Low Energy (Late afternoon/evening)
              </p>
              <ul className="space-y-1">
                <li>• Administrative tasks</li>
                <li>• Planning tomorrow</li>
                <li>• Light reading</li>
                <li>• Organizing files</li>
              </ul>
            </div>
          </div>

          <h3>Energy Boosters</h3>
          <ul>
            <li>Take a 10-minute walk outside</li>
            <li>Have a healthy snack (protein, not sugar)</li>
            <li>Do 20 pushups or stretches</li>
            <li>Power nap (10-20 mins only)</li>
            <li>Talk to a friend or colleague</li>
          </ul>
        </section>

        {/* Boundaries */}
        <section
          id="boundaries"
          className="scroll-mt-20"
        >
          <h2>6. Setting Boundaries</h2>

          <p>
            As an intern, it can feel like you should always be available. But
            boundaries are essential for sustainable performance.
          </p>

          <h3>Boundaries to Set</h3>
          <ul>
            <li>
              <strong>Work hours:</strong> Define when you're "on" and
              communicate it
            </li>
            <li>
              <strong>Study time:</strong> Non-negotiable blocks for academics
            </li>
            <li>
              <strong>Personal time:</strong> Exercise, social, hobbies are not
              optional
            </li>
            <li>
              <strong>Sleep:</strong> 7-8 hours is non-negotiable for
              performance
            </li>
          </ul>

          <h3>How to Communicate Boundaries</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              "Hi [Manager], I wanted to let you know my schedule this semester.
              I have classes until 12pm on MWF, so I'll be most available for
              internship work in the afternoons (1-5pm). On TTh, I can be
              available full-time. Does this work for the team?"
            </p>
          </div>

          <div className="my-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="mb-2 text-sm font-bold">✅ You're Allowed To:</p>
            <ul className="space-y-1 text-sm">
              <li>• Not respond to non-urgent messages after work hours</li>
              <li>• Block "focus time" on your calendar</li>
              <li>
                • Say "I can get this to you by Tuesday" instead of "I'll do it
                now"
              </li>
              <li>• Take your full lunch break</li>
              <li>• Decline optional meetings if you're overloaded</li>
            </ul>
          </div>
        </section>

        {/* Tools */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2>7. Best Productivity Tools for Interns</h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">📅 Calendar & Planning</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Google Calendar</strong> - Free, cross-platform
                </li>
                <li>
                  • <strong>Notion</strong> - All-in-one workspace
                </li>
                <li>
                  • <strong>Todoist</strong> - Smart task management
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">🎯 Focus & Blocking</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Forest</strong> - Stay focused, plant trees
                </li>
                <li>
                  • <strong>Freedom</strong> - Block distracting sites
                </li>
                <li>
                  • <strong>Cold Turkey</strong> - Hardcore blocking
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">📊 Time Tracking</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Toggl Track</strong> - Simple time tracking
                </li>
                <li>
                  • <strong>RescueTime</strong> - Automatic tracking
                </li>
                <li>
                  • <strong>Clockify</strong> - Free team time tracking
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">📝 Notes & Knowledge</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Notion</strong> - Flexible note-taking
                </li>
                <li>
                  • <strong>Obsidian</strong> - Linked notes
                </li>
                <li>
                  • <strong>Google Keep</strong> - Quick notes
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Burnout */}
        <section
          id="burnout"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            8. Avoiding Burnout
          </h2>

          <p>
            Pushing yourself too hard is counterproductive. Burnout leads to
            lower quality work, missed deadlines, and health issues.
          </p>

          <h3>Warning Signs of Burnout</h3>
          <ul>
            <li>Constant exhaustion even after rest</li>
            <li>Difficulty concentrating or making decisions</li>
            <li>Cynicism or detachment from work</li>
            <li>Changes in sleep or appetite</li>
            <li>Frequent illness</li>
            <li>Feeling like nothing is ever enough</li>
          </ul>

          <h3>Prevention Strategies</h3>
          <ul>
            <li>
              <strong>Non-negotiable self-care:</strong> Sleep, exercise,
              nutrition
            </li>
            <li>
              <strong>Weekly social time:</strong> Connection prevents isolation
            </li>
            <li>
              <strong>One full day off per week:</strong> Complete rest, no work
              or study
            </li>
            <li>
              <strong>Hobbies:</strong> Something purely for enjoyment
            </li>
            <li>
              <strong>Saying no:</strong> You can't do everything
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Remember:</strong> You're playing a long game. A
              sustainable 70% effort over 3 months beats an unsustainable 100%
              for 3 weeks followed by burnout.
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="not-prose">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-primary" />
            Weekly Productivity Checklist
          </h2>

          <div className="space-y-2">
            {[
              'Complete Sunday evening planning session (30 mins)',
              'Identify your 3 Big Rocks for the week',
              'Time block your calendar for the week ahead',
              'Set up focus time blocks (no meetings)',
              'Review and process all commitments',
              'Schedule exercise/movement 3+ times',
              'Plan one social activity',
              'Get 7-8 hours sleep each night',
              "Do weekly review - what worked, what didn't?",
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

        {/* Conclusion */}
        <section>
          <h2>Conclusion: Progress, Not Perfection</h2>

          <p>
            Perfect time management doesn't exist. Some weeks will be chaotic.
            Some deadlines will be tight. That's okay.
          </p>

          <p>
            What matters is having systems in place that help you stay on top of
            most things most of the time, while taking care of yourself. Start
            with one technique from this guide, master it, then add another.
          </p>

          <p className="text-lg font-semibold text-primary">
            You have enough time. You just need to use it wisely. ⏰
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/remote-internships-complete-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Remote Internship Guide (includes WFH productivity)
            </Link>
            <Link
              href="/blog/convert-internship-to-job-offer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Convert Internship to Full-Time
            </Link>
            <Link
              href="/blog/overcoming-imposter-syndrome"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Overcoming Imposter Syndrome
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
                Our team has coached thousands of students on balancing
                internships with academics without sacrificing their wellbeing.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
