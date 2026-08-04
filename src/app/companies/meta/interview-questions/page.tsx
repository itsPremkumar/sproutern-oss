import { Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Code,
  Database,
  MessageSquare,
  ArrowLeft,
  Clock,
  CheckCircle,
  Lightbulb,
  HelpCircle,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Meta Interview Questions 2026 | 100+ Real Questions | Sproutern',
  description:
    'Real Meta (Facebook) interview questions for E3, E4, E5 roles. Includes DSA, system design, and behavioral questions with answers and preparation tips.',
  keywords:
    'meta interview questions, facebook interview questions, meta sde interview, meta system design, meta coding interview, meta behavioral interview 2026',
  openGraph: {
    title: 'Meta Interview Questions 2026 - 100+ Real Questions',
    description:
      'Comprehensive collection of Meta interview questions with solutions and preparation tips.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/companies/meta/interview-questions',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/companies/meta/interview-questions',
  },
};

const dsaQuestions = [
  {
    question: 'LRU Cache implementation',
    difficulty: 'Medium',
    topic: 'Data Structures',
    frequency: 'Very High',
  },
  {
    question: 'Add Two Numbers (Linked List)',
    difficulty: 'Medium',
    topic: 'Linked List',
    frequency: 'Very High',
  },
  {
    question: 'Merge Intervals',
    difficulty: 'Medium',
    topic: 'Arrays',
    frequency: 'Very High',
  },
  {
    question: 'Valid Parentheses',
    difficulty: 'Easy',
    topic: 'Stack',
    frequency: 'High',
  },
  {
    question: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium',
    topic: 'Trees',
    frequency: 'Very High',
  },
  {
    question: 'Product of Array Except Self',
    difficulty: 'Medium',
    topic: 'Arrays',
    frequency: 'High',
  },
  {
    question: 'Lowest Common Ancestor of Binary Tree',
    difficulty: 'Medium',
    topic: 'Trees',
    frequency: 'Very High',
  },
  {
    question: 'Number of Islands',
    difficulty: 'Medium',
    topic: 'Graphs',
    frequency: 'Very High',
  },
  {
    question: 'Clone Graph',
    difficulty: 'Medium',
    topic: 'Graphs',
    frequency: 'High',
  },
  {
    question: 'Word Break',
    difficulty: 'Medium',
    topic: 'DP',
    frequency: 'High',
  },
  {
    question: 'Subarray Sum Equals K',
    difficulty: 'Medium',
    topic: 'Arrays',
    frequency: 'Very High',
  },
  {
    question: 'Random Pick with Weight',
    difficulty: 'Medium',
    topic: 'Binary Search',
    frequency: 'High',
  },
  {
    question: 'Minimum Remove to Make Valid Parentheses',
    difficulty: 'Medium',
    topic: 'Stack',
    frequency: 'Very High',
  },
  {
    question: 'Buildings With an Ocean View',
    difficulty: 'Medium',
    topic: 'Stack',
    frequency: 'High',
  },
  {
    question: 'Range Sum of BST',
    difficulty: 'Easy',
    topic: 'Trees',
    frequency: 'High',
  },
  {
    question: 'Nested List Weight Sum',
    difficulty: 'Medium',
    topic: 'DFS',
    frequency: 'High',
  },
  {
    question: 'Alien Dictionary',
    difficulty: 'Hard',
    topic: 'Graphs',
    frequency: 'Medium',
  },
  {
    question: 'Serialize and Deserialize Binary Tree',
    difficulty: 'Hard',
    topic: 'Trees',
    frequency: 'High',
  },
  {
    question: 'Diameter of Binary Tree',
    difficulty: 'Easy',
    topic: 'Trees',
    frequency: 'High',
  },
  {
    question: 'Moving Average from Data Stream',
    difficulty: 'Easy',
    topic: 'Queue',
    frequency: 'High',
  },
];

const systemDesignQuestions = [
  {
    title: 'Design Facebook News Feed',
    description:
      'Design the news feed system that ranks and displays posts for billions of users.',
    level: 'E4+',
    topics: ['Ranking', 'Caching', 'Fan-out'],
  },
  {
    title: 'Design Facebook Messenger',
    description:
      'Design a real-time messaging system supporting billions of messages per day.',
    level: 'E4+',
    topics: ['WebSockets', 'Message Queue', 'Presence'],
  },
  {
    title: 'Design Instagram Stories',
    description:
      'Design the stories feature with 24-hour expiry, views, and reactions.',
    level: 'E4+',
    topics: ['CDN', 'Video', 'TTL'],
  },
  {
    title: 'Design Facebook Live',
    description:
      'Design live video streaming for millions of concurrent viewers.',
    level: 'E5+',
    topics: ['HLS', 'CDN', 'Real-time'],
  },
  {
    title: 'Design WhatsApp',
    description:
      'Design end-to-end encrypted messaging with media sharing and groups.',
    level: 'E4+',
    topics: ['E2E Encryption', 'Sync', 'Offline'],
  },
  {
    title: 'Design Ad Targeting System',
    description:
      'Design a system to match ads to users based on interests and behavior.',
    level: 'E5+',
    topics: ['ML', 'Real-time Bidding', 'Privacy'],
  },
];

const behavioralQuestions = [
  {
    question: 'Tell me about a time you moved fast on a project',
    tip: 'Show urgency, decision-making under uncertainty, and shipping quickly. Meta loves speed.',
  },
  {
    question: 'Describe a project with significant impact',
    tip: 'Quantify impact: DAU, revenue, latency. Show you think in terms of user and business outcomes.',
  },
  {
    question: 'Tell me about a time you received critical feedback',
    tip: 'Show openness to feedback, learning, and how you applied it. Meta values psychological safety.',
  },
  {
    question: 'How do you prioritize when everything is urgent?',
    tip: 'Discuss impact assessment, stakeholder alignment, and trade-off decisions.',
  },
  {
    question: 'Describe a time you disagreed with your manager',
    tip: 'Show you can disagree respectfully, back arguments with data, and commit after decision.',
  },
  {
    question: 'Tell me about a bold bet you took',
    tip: 'Meta values calculated risks. Show initiative, learning from failures, and thinking big.',
  },
  {
    question: 'How do you handle ambiguous requirements?',
    tip: 'Show you can make progress despite uncertainty, gather information, and iterate.',
  },
  {
    question: 'Describe your most impactful technical decision',
    tip: 'Discuss alternatives considered, trade-offs, and long-term implications.',
  },
];

const preparationPlan = [
  {
    week: 'Weeks 1-4',
    title: 'DSA Foundations',
    tasks: [
      'Master arrays, strings, trees',
      'Solve 50 easy LeetCode problems',
      'Focus on Meta-tagged questions',
      'Practice on CoderPad',
    ],
  },
  {
    week: 'Weeks 5-8',
    title: 'Advanced DSA',
    tasks: [
      'Graphs, DP, and heaps',
      'Solve 50 medium problems',
      'Time yourself (45 mins)',
      'Focus on follow-up questions',
    ],
  },
  {
    week: 'Weeks 9-10',
    title: 'System Design',
    tasks: [
      "Study Meta's architecture",
      'Learn TAO, Cassandra, GraphQL',
      'Practice News Feed design',
      'Focus on scaling patterns',
    ],
  },
  {
    week: 'Weeks 11-12',
    title: 'Behavioral & Mock',
    tasks: [
      'Prepare 8 STAR stories',
      'Know Meta Core Values',
      'Give mock interviews',
      'Refine communication',
    ],
  },
];

export default function MetaInterviewQuestionsPage() {
  const getDifficultyColor = (d: string) => {
    switch (d) {
      case 'Easy':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Hard':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'Meta Interview Questions 2026 - Complete Preparation Guide',
            description:
              'Comprehensive collection of Meta interview questions for E3-E5 roles.',
            author: { '@type': 'Organization', name: 'Sproutern' },
            publisher: { '@type': 'Organization', name: 'Sproutern' },
            datePublished: '2026-01-27',
            dateModified: '2026-01-27',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-16">
        <div className="container">
          <Link
            href="/companies/meta"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Meta Careers
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Meta Interview Questions 2026
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            100+ real interview questions asked at Meta for E3, E4, and E5
            roles. Includes DSA, system design, and behavioral questions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-white/20 text-white">100+ Questions</Badge>
            <Badge className="bg-white/20 text-white">Updated Jan 2026</Badge>
            <Badge className="bg-white/20 text-white">E3-E5 Levels</Badge>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b bg-muted/30 py-6">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <Code className="h-8 w-8 text-primary" />
              <div>
                <p className="text-xl font-bold">20+</p>
                <p className="text-sm text-muted-foreground">DSA Questions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Database className="h-8 w-8 text-primary" />
              <div>
                <p className="text-xl font-bold">6</p>
                <p className="text-sm text-muted-foreground">System Design</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-primary" />
              <div>
                <p className="text-xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Behavioral</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Settings className="h-8 w-8 text-primary" />
              <div>
                <p className="text-xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Week Plan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DSA Questions */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <Code className="h-8 w-8 text-blue-500" />
              <h2 className="text-3xl font-bold">DSA Questions</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Commonly asked data structures and algorithm questions at Meta
            </p>
          </div>
          <div className="grid gap-4">
            {dsaQuestions.map((q, i) => (
              <Card
                key={i}
                className="transition-shadow hover:shadow-md"
              >
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium">{q.question}</p>
                      <div className="mt-1 flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {q.topic}
                        </Badge>
                        {q.frequency === 'Very High' && (
                          <Badge className="bg-orange-100 text-xs text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                            🔥 Hot
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(q.difficulty)}>
                    {q.difficulty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Design */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <div className="flex items-center gap-3">
                <Database className="h-8 w-8 text-blue-500" />
                <h2 className="text-3xl font-bold">System Design Questions</h2>
              </div>
              <p className="mt-2 text-muted-foreground">
                High-level design questions for E4 and above roles
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {systemDesignQuestions.map((q, i) => (
                <Card
                  key={i}
                  className="transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">{q.title}</h3>
                      <Badge variant="outline">{q.level}</Badge>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {q.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {q.topics.map((t) => (
                        <Badge
                          key={t}
                          className="bg-blue-100 text-xs text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Behavioral Questions */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-blue-500" />
              <h2 className="text-3xl font-bold">Behavioral Questions</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Questions that assess Meta Core Values fit
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {behavioralQuestions.map((q, i) => (
              <AccordionItem
                key={i}
                value={`beh-${i}`}
              >
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                    {q.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                    <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-muted-foreground">{q.tip}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Preparation Plan */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                12-Week Preparation Plan
              </h2>
              <p className="text-muted-foreground">
                Structured roadmap to crack Meta interviews
              </p>
            </div>
            <div className="space-y-6">
              {preparationPlan.map((phase, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                        {i + 1}
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className="mb-1"
                        >
                          {phase.week}
                        </Badge>
                        <CardTitle>{phase.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2 md:grid-cols-2">
                      {phase.tasks.map((task, ti) => (
                        <li
                          key={ti}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Start Your Meta Prep Today
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Practice with our free tools and resources
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
            >
              <Link href="/tools/dsa-quiz">
                <Code className="mr-2 h-4 w-4" />
                Practice DSA Quiz
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link href="/companies/meta">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Meta Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
