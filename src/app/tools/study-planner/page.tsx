import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { StudyPlanner } from '@/components/tools/StudyPlanner';
import Link from 'next/link';
import {
  Calendar,
  CheckCircle,
  Shield,
  Users,
  BookOpen,
  Target,
  Flame,
  Clock,
  ArrowRight,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = getPageSEO('studyPlanner');

const features = [
  {
    icon: Calendar,
    title: 'Daily Task Management',
    description:
      "Plan each day's study sessions with subjects, topics, and time estimates",
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description:
      'Set study goals with deadlines and track your progress toward them',
  },
  {
    icon: Flame,
    title: 'Streak System',
    description:
      'Build productive habits with daily study streaks and motivation',
  },
  {
    icon: TrendingUp,
    title: 'Weekly Analytics',
    description: 'Visualize your study patterns with weekly progress charts',
  },
];

const tips = [
  'Start with your most difficult subject when your energy is highest',
  'Break large topics into 30-minute study chunks',
  "Review yesterday's material before starting new topics",
  'Set realistic daily goals—consistency beats intensity',
  'Use the 2-minute rule: if it takes less than 2 minutes, do it now',
  'Schedule breaks between subjects to prevent mental fatigue',
];

const faqs = [
  {
    q: 'How do I create an effective study schedule?',
    a: "Start by listing all subjects and their priority. Allocate more time to difficult subjects. Schedule your hardest work during peak energy hours (usually morning). Include breaks every 45-60 minutes. Be realistic—a plan you'll actually follow is better than an ideal plan you'll abandon.",
  },
  {
    q: "What's the best study session length?",
    a: 'Research suggests 25-50 minute focused sessions are optimal. The Pomodoro Technique uses 25 minutes. For complex subjects, 45-50 minutes may be better. Key is to take breaks before fatigue sets in—diminishing returns happen after about 90 minutes of continuous work.',
  },
  {
    q: 'How do I maintain a study streak?',
    a: "Set a minimum daily goal that's achievable even on bad days (e.g., 30 minutes). Study at the same time each day to build habit. Track your streak visually—the longer it gets, the more motivated you'll be to maintain it. Allow 'rest days' by doing lighter review instead of skipping entirely.",
  },
  {
    q: 'Should I study multiple subjects per day?',
    a: 'Yes! Interleaving (mixing subjects) actually improves long-term retention compared to blocking (studying one subject all day). Switching between 2-3 subjects per day forces your brain to constantly retrieve information, strengthening memory.',
  },
  {
    q: 'How do I stick to my study plan?',
    a: "Make your plan visible—print it or keep the tab open. Remove distractions before starting. Tell someone about your goals for accountability. Celebrate small wins. If you miss a day, don't give up—just continue the next day. Adjust the plan if it's consistently unrealistic.",
  },
];

export default function StudyPlannerPage() {
  const schemas = getPageSchema('studyPlanner');
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
              <Calendar className="h-4 w-4" />
              Free Student Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Study Planner & Goal Tracker
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Plan your daily study sessions, set goals with deadlines, and
              build productive streaks. Track everything in one place.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Data Saved Locally</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Clock className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">No Sign-up</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">12,000+ Users</span>
            </div>
          </div>

          {/* Tool Component */}
          <StudyPlanner />

          {/* Features */}
          <section className="mt-16">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
              <Target className="h-6 w-6 text-primary" />
              Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="mt-16">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
              <Lightbulb className="h-6 w-6 text-primary" />
              Study Planning Tips
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {tips.map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-muted/50 p-4"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Educational Content */}
          <section className="prose prose-lg mt-16 max-w-none">
            <h2 className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              The Science of Effective Study Planning
            </h2>

            <p>
              Effective study planning isn't just about scheduling time—it's
              about optimizing how your brain learns and retains information.
              Research in cognitive psychology has identified key principles
              that make studying more effective.
            </p>

            <h3>Spaced Repetition</h3>
            <p>
              Instead of cramming, space your study sessions over time. The
              "spacing effect" shows that information reviewed at increasing
              intervals (1 day, 3 days, 1 week, 2 weeks) is retained much longer
              than information reviewed all at once. This planner helps you
              track what you've studied and when.
            </p>

            <h3>Active Recall</h3>
            <p>
              Passive reading is inefficient. Active recall—testing yourself on
              material—is far more effective. When planning study sessions,
              include time for self-quizzing, practice problems, or teaching
              concepts to an imaginary student.
            </p>

            <h3>Goal Setting Theory</h3>
            <p>
              Research by Edwin Locke shows that specific, challenging goals
              lead to better performance than vague goals like "study more." Our
              goal tracker lets you set concrete targets (e.g., "Complete 20
              hours of calculus by Friday") with visual progress tracking.
            </p>

            <h3>The Power of Streaks</h3>
            <p>
              Habit formation research shows that consistency is more important
              than intensity. A 30-minute daily study habit is more effective
              than 5-hour weekend cramming sessions. The streak feature creates
              accountability and makes breaking the chain psychologically
              costly.
            </p>
          </section>

          {/* FAQ */}
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
            <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Pomodoro Timer',
                  href: '/tools/pomodoro-timer',
                  desc: 'Focus sessions with breaks',
                },
                {
                  title: 'Aptitude Mock Test',
                  href: '/tools/aptitude-test',
                  desc: 'Practice aptitude questions',
                },
                {
                  title: 'CGPA Calculator',
                  href: '/tools/cgpa-converter',
                  desc: 'Convert CGPA to percentage',
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
            <h2 className="mb-4 text-2xl font-bold">Ready to Study Smarter?</h2>
            <p className="mb-6 text-muted-foreground">
              Start planning your study sessions now
            </p>
            <Link
              href="/resources/skill-development"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Learning Resources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
