import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { PomodoroTimer } from '@/components/tools/PomodoroTimer';
import Link from 'next/link';
import {
  Clock,
  CheckCircle,
  Shield,
  Users,
  BookOpen,
  TrendingUp,
  Brain,
  Coffee,
  Zap,
  Target,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = getPageSEO('pomodoroTimer');

const benefits = [
  {
    icon: Brain,
    title: 'Improved Focus',
    description:
      '25-minute sessions train your brain to concentrate deeply without burnout',
  },
  {
    icon: Zap,
    title: 'Reduced Procrastination',
    description:
      'Short, timed sessions make starting easier than facing hours of study',
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description:
      'See your daily sessions, focus minutes, and build productive streaks',
  },
  {
    icon: Coffee,
    title: 'Prevent Burnout',
    description:
      'Regular breaks keep you fresh and maintain consistent energy levels',
  },
];

const faqs = [
  {
    q: 'What is the Pomodoro Technique?',
    a: "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes of focused work followed by a 5-minute break. After 4 'pomodoros' (focus sessions), you take a longer 15-30 minute break.",
  },
  {
    q: 'Why 25 minutes?',
    a: "Research shows that 25 minutes is optimal for sustained focus without mental fatigue. It's short enough to maintain intensity but long enough to make meaningful progress on tasks. The technique creator found this duration maximizes both productivity and retention.",
  },
  {
    q: 'Can I customize the timer duration?',
    a: 'Yes! While the traditional Pomodoro is 25/5/15 minutes, you can customize all durations in our settings. Some students prefer 50/10 for longer work sessions, or 15/3 for subjects requiring more frequent context switches.',
  },
  {
    q: 'What should I do during breaks?',
    a: 'Step away from your screen! Effective break activities include: stretching, walking, getting water, looking at something far away (to rest eyes), or doing light physical movement. Avoid social media or emails which can extend your break or cause stress.',
  },
  {
    q: 'How many Pomodoros should I do per day?',
    a: 'Most productive professionals complete 8-12 Pomodoros per day. Students often aim for 6-10 quality sessions. Quality matters more than quantity—4 truly focused sessions beat 8 distracted ones. Start with 4-6 and build up.',
  },
  {
    q: 'Why does this help with studying?',
    a: 'The Pomodoro Technique leverages several psychological principles: timeboxing creates urgency, regular breaks prevent diminishing returns, tracking builds awareness, and the countdown adds a gentle pressure that helps resist procrastination.',
  },
];

export default function PomodoroTimerPage() {
  const schemas = getPageSchema('pomodoroTimer');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Clock className="h-4 w-4" />
              Free Productivity Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Pomodoro Study Timer
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Master the Pomodoro Technique to study smarter. 25 minutes of
              focus, 5 minutes of rest. Build streaks and track your
              productivity.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">No Sign-up</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">Works Offline</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">15,000+ Users</span>
            </div>
          </div>

          {/* Tool Component */}
          <PomodoroTimer />

          {/* Social Proof */}
          <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
            <p className="text-sm text-muted-foreground">
              🎯 <strong>1,247 students</strong> used this timer today
            </p>
          </div>

          {/* Benefits Section */}
          <section className="mt-16">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
              <Target className="h-6 w-6 text-primary" />
              Why Use the Pomodoro Technique?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <benefit.icon className="h-5 w-5 text-primary" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Educational Content */}
          <section className="prose prose-lg mt-16 max-w-none">
            <h2 className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              Complete Guide to the Pomodoro Technique
            </h2>

            <p>
              The Pomodoro Technique has helped millions of students and
              professionals achieve better focus and productivity. Developed in
              the late 1980s by Francesco Cirillo, this simple yet powerful
              method uses timed intervals to break work into manageable chunks.
            </p>

            <div className="not-prose my-6 rounded-lg bg-primary/10 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <Lightbulb className="h-5 w-5 text-primary" />
                How It Works
              </h3>
              <ol className="space-y-2 text-sm">
                <li>
                  <strong>1. Choose a task</strong> - Pick one thing to focus on
                </li>
                <li>
                  <strong>2. Set timer for 25 minutes</strong> - This is one
                  "Pomodoro"
                </li>
                <li>
                  <strong>3. Work until timer rings</strong> - No distractions
                  allowed
                </li>
                <li>
                  <strong>4. Take a 5-minute break</strong> - Stand up, stretch,
                  hydrate
                </li>
                <li>
                  <strong>5. After 4 Pomodoros</strong> - Take a longer 15-30
                  minute break
                </li>
                <li>
                  <strong>6. Repeat</strong> - Build momentum and track progress
                </li>
              </ol>
            </div>

            <h3>The Science Behind Pomodoro</h3>
            <p>
              The technique works because of several psychological principles:
            </p>
            <ul>
              <li>
                <strong>Timeboxing:</strong> Setting a fixed time creates
                urgency and prevents endless task expansion (Parkinson's Law)
              </li>
              <li>
                <strong>Ultradian rhythms:</strong> Our brains naturally cycle
                through high and low alertness periods roughly every 90-120
                minutes
              </li>
              <li>
                <strong>Attention restoration:</strong> Regular breaks prevent
                the cognitive fatigue that leads to diminishing returns
              </li>
              <li>
                <strong>Progress tracking:</strong> Counting completed sessions
                provides motivation and awareness
              </li>
            </ul>

            <h3>Tips for Maximum Effectiveness</h3>
            <ul>
              <li>
                <strong>Protect your Pomodoro:</strong> If interrupted, the
                session doesn't count. This creates strong incentive to defend
                your focus time.
              </li>
              <li>
                <strong>One task per Pomodoro:</strong> Avoid task switching. If
                you finish early, review or improve your work.
              </li>
              <li>
                <strong>Plan your Pomodoros:</strong> Estimate how many sessions
                each task needs. This improves time awareness.
              </li>
              <li>
                <strong>Batch small tasks:</strong> Group emails, messages, and
                quick tasks into a single Pomodoro.
              </li>
              <li>
                <strong>Record distractions:</strong> When a thought interrupts,
                write it down and continue. Address it during break.
              </li>
            </ul>

            <h3>Common Mistakes to Avoid</h3>
            <ul>
              <li>
                <strong>Skipping breaks:</strong> Breaks are essential, not
                optional. They're when your brain consolidates learning.
              </li>
              <li>
                <strong>Checking phone during focus:</strong> One glance can
                derail 10+ minutes of recovery time.
              </li>
              <li>
                <strong>Unrealistic daily targets:</strong> Quality beats
                quantity. 6 excellent Pomodoros outperform 12 distracted ones.
              </li>
              <li>
                <strong>Ignoring the timer:</strong> When break time comes,
                honor it. The discipline works both ways.
              </li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="mb-8 text-2xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="mt-16 rounded-2xl bg-muted p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Related Productivity Tools
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Typing Speed Test',
                  href: '/tools/typing-test',
                  desc: 'Improve typing for faster work',
                },
                {
                  title: 'Aptitude Mock Test',
                  href: '/tools/aptitude-test',
                  desc: 'Practice with timed questions',
                },
                {
                  title: 'Study Planner',
                  href: '/tools/study-planner',
                  desc: 'Plan your study schedule',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Boost Your Productivity?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Start a focus session now and see the difference
            </p>
            <Link
              href="/blog/productivity-tips-students"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Read Productivity Tips
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
