import { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart,
  Brain,
  Sun,
  Moon,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Phone,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Student Mental Health Resources | Stress & Anxiety Help',
  description:
    'Mental health resources for students - managing exam stress, imposter syndrome, rejection handling, burnout prevention, and when to seek help.',
  keywords:
    'student mental health, exam stress management, imposter syndrome, academic anxiety, burnout prevention',
};

const topics = [
  {
    title: 'Exam Stress',
    icon: Clock,
    tips: [
      'Start preparation early',
      'Take regular breaks',
      'Sleep 7-8 hours',
      'Avoid last-minute cramming',
      'Practice mindfulness',
    ],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Imposter Syndrome',
    icon: Brain,
    tips: [
      'Remember everyone feels this',
      'Document your achievements',
      'Talk to peers about it',
      'Stop comparing yourself',
      'Celebrate small wins',
    ],
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Rejection Handling',
    icon: Heart,
    tips: [
      'Take time to process',
      "Don't personalize it",
      'Learn from feedback',
      'Apply to more opportunities',
      'Talk to someone',
    ],
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Burnout Prevention',
    icon: Sun,
    tips: [
      'Set work boundaries',
      'Take days off',
      'Have hobbies outside work',
      "Don't sacrifice sleep",
      'Say no when needed',
    ],
    color: 'bg-orange-50 text-orange-600',
  },
];

const quickTips = [
  'Deep breathing: 4-7-8 technique for instant calm',
  'Exercise: Even 20 minutes helps mood',
  'Sleep: Non-negotiable 7-8 hours',
  "Social: Don't isolate yourself",
  'Breaks: Every 50 minutes, take 10',
  'Nature: Spend time outdoors daily',
];

const helplines = [
  { name: 'iCall', number: '9152987821', desc: 'Mon-Sat, 8AM-10PM' },
  {
    name: 'Vandrevala Foundation',
    number: '1860-2662-345',
    desc: '24/7 support',
  },
  { name: 'NIMHANS', number: '080-46110007', desc: 'Professional help' },
];

export default function MentalHealthPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Heart className="mr-1 h-3 w-3" />
            Wellness Resources
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Student Mental Health
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Your mental health matters. Resources to help you thrive, not just
            survive.
          </p>
        </div>
      </section>

      <section className="container py-8">
        <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <CardContent className="flex items-start gap-4 p-6">
            <Heart className="h-6 w-6 flex-shrink-0 text-green-600" />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-100">
                You're Not Alone
              </p>
              <p className="text-sm text-green-700 dark:text-green-200">
                Struggling is not weakness. Every student faces challenges.
                Asking for help is a sign of strength.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container py-8">
        <h2 className="mb-6 text-2xl font-bold">
          Common Challenges & Solutions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <Card key={topic.title}>
              <CardContent className="p-6">
                <div
                  className={`inline-flex items-center gap-2 rounded-lg p-2 ${topic.color} mb-4`}
                >
                  <topic.icon className="h-5 w-5" />
                  <h3 className="font-bold">{topic.title}</h3>
                </div>
                <ul className="space-y-2">
                  {topic.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-center text-2xl font-bold">
          <Lightbulb className="h-6 w-6" />
          Quick Wellness Tips
        </h2>
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2 lg:grid-cols-3">
          {quickTips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-center gap-3 p-4">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-sm">{tip}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Phone className="h-6 w-6" />
          Helplines (India)
        </h2>
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
          {helplines.map((h, i) => (
            <Card
              key={i}
              className="text-center"
            >
              <CardContent className="p-6">
                <h3 className="mb-1 font-bold">{h.name}</h3>
                <p className="mb-1 text-xl font-bold text-primary">
                  {h.number}
                </p>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Sun className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Take Care of Yourself</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/tools/pomodoro-timer">
                  Pomodoro Timer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/blog/category/productivity">
                  Productivity Tips
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
