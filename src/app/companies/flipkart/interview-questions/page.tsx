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
  Cpu,
  FileText,
  CheckCircle,
  ArrowLeft,
  BookOpen,
  Target,
  Clock,
  Lightbulb,
  Users,
  Settings,
  HelpCircle,
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
  title: 'Flipkart Interview Questions 2026 | 100+ Real Questions | Sproutern',
  description:
    'Real Flipkart interview questions for SDE-1, SDE-2, and SDE-3 roles. Includes DSA, machine coding, system design, and HR questions with answers and tips.',
  keywords:
    'flipkart interview questions, flipkart sde interview, flipkart machine coding questions, flipkart system design, flipkart dsa questions, flipkart interview preparation 2026',
  openGraph: {
    title: 'Flipkart Interview Questions 2026 - 100+ Real Questions',
    description:
      'Comprehensive collection of Flipkart interview questions with solutions and preparation tips.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/companies/flipkart/interview-questions',
  },
  alternates: {
    canonical:
      'https://sproutern.dpdns.org/companies/flipkart/interview-questions',
  },
};

const dsaQuestions = [
  {
    question: 'Find the median of two sorted arrays',
    difficulty: 'Hard',
    topic: 'Binary Search',
    frequency: 'Very High',
  },
  {
    question: 'LRU Cache implementation',
    difficulty: 'Medium',
    topic: 'Data Structures',
    frequency: 'Very High',
  },
  {
    question: 'Trapping Rain Water',
    difficulty: 'Hard',
    topic: 'Arrays',
    frequency: 'High',
  },
  {
    question: 'Clone a graph',
    difficulty: 'Medium',
    topic: 'Graphs',
    frequency: 'High',
  },
  {
    question: 'Merge K sorted lists',
    difficulty: 'Hard',
    topic: 'Heap',
    frequency: 'Very High',
  },
  {
    question: 'Word Break Problem',
    difficulty: 'Medium',
    topic: 'DP',
    frequency: 'High',
  },
  {
    question: 'Find all anagrams in a string',
    difficulty: 'Medium',
    topic: 'Sliding Window',
    frequency: 'High',
  },
  {
    question: 'Serialize and Deserialize Binary Tree',
    difficulty: 'Hard',
    topic: 'Trees',
    frequency: 'Medium',
  },
  {
    question: "Maximum sum subarray (Kadane's Algorithm)",
    difficulty: 'Medium',
    topic: 'Arrays',
    frequency: 'Very High',
  },
  {
    question: 'Number of islands',
    difficulty: 'Medium',
    topic: 'Graphs',
    frequency: 'Very High',
  },
  {
    question: 'Longest increasing subsequence',
    difficulty: 'Medium',
    topic: 'DP',
    frequency: 'High',
  },
  {
    question: 'Course schedule (topological sort)',
    difficulty: 'Medium',
    topic: 'Graphs',
    frequency: 'High',
  },
  {
    question: 'Implement Min Stack',
    difficulty: 'Easy',
    topic: 'Stack',
    frequency: 'High',
  },
  {
    question: 'Next greater element',
    difficulty: 'Medium',
    topic: 'Stack',
    frequency: 'Medium',
  },
  {
    question: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    topic: 'Strings',
    frequency: 'High',
  },
  {
    question: 'Find minimum in rotated sorted array',
    difficulty: 'Medium',
    topic: 'Binary Search',
    frequency: 'Medium',
  },
  {
    question: 'Two Sum with sorted array',
    difficulty: 'Easy',
    topic: 'Arrays',
    frequency: 'Very High',
  },
  {
    question: 'Valid parentheses',
    difficulty: 'Easy',
    topic: 'Stack',
    frequency: 'High',
  },
  {
    question: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium',
    topic: 'Trees',
    frequency: 'High',
  },
  {
    question: 'Design Twitter',
    difficulty: 'Medium',
    topic: 'Design',
    frequency: 'Medium',
  },
];

const machineCodingQuestions = [
  {
    title: 'Parking Lot System',
    description:
      'Design a parking lot with multiple floors, different vehicle types, and payment system.',
    duration: '90 mins',
    concepts: ['OOP', 'Design Patterns', 'Extensibility'],
    tips: [
      'Start with clear class hierarchies',
      'Use Strategy pattern for parking strategies',
      'Consider vehicle types: Bike, Car, Truck',
      'Implement payment and ticket system',
    ],
  },
  {
    title: 'Splitwise (Expense Sharing)',
    description:
      'Build a system to split expenses among friends with equal, exact, and percentage splits.',
    duration: '90 mins',
    concepts: ['OOP', 'Calculations', 'Balance Management'],
    tips: [
      'Handle different split types',
      'Maintain user balances',
      'Simplify debt settlement',
      'Support group expenses',
    ],
  },
  {
    title: 'Snake and Ladder Game',
    description:
      'Implement snake and ladder game with configurable board, multiple players, and dice.',
    duration: '90 mins',
    concepts: ['OOP', 'State Management', 'Randomization'],
    tips: [
      'Separate board, player, dice concerns',
      'Handle snake and ladder positions',
      'Support configurable board size',
      'Track player movements',
    ],
  },
  {
    title: 'In-Memory File System',
    description:
      'Design a unix-like file system with files, directories, and basic operations.',
    duration: '120 mins',
    concepts: ['Tree Structure', 'OOP', 'Command Pattern'],
    tips: [
      'Use Composite pattern',
      'Support ls, cd, mkdir, touch, cat',
      'Handle path navigation',
      'Implement permissions (bonus)',
    ],
  },
  {
    title: 'Elevator System',
    description:
      'Design multi-elevator system for a building with optimal scheduling.',
    duration: '90 mins',
    concepts: ['OOP', 'Scheduling Algorithms', 'State Machines'],
    tips: [
      'Handle multiple elevators',
      'Implement scheduling strategy',
      'Support floor requests from inside/outside',
      'Consider peak hours scenario',
    ],
  },
  {
    title: 'Meeting Scheduler',
    description:
      'Build a calendar system to book/cancel meetings and find available slots.',
    duration: '90 mins',
    concepts: ['OOP', 'Interval Management', 'Search'],
    tips: [
      'Handle overlapping meetings',
      'Find free slots efficiently',
      'Support recurring meetings',
      'Multi-room booking',
    ],
  },
];

const systemDesignQuestions = [
  {
    title: 'Design Flipkart Search',
    description:
      'Design the product search system handling millions of products and queries.',
    level: 'SDE-2+',
    topics: ['Elasticsearch', 'Caching', 'Ranking'],
  },
  {
    title: 'Design Order Management System',
    description:
      'Design order lifecycle from cart to delivery with inventory management.',
    level: 'SDE-2+',
    topics: ['Microservices', 'Event-Driven', 'Saga Pattern'],
  },
  {
    title: 'Design Inventory System',
    description:
      'Real-time inventory management across warehouses with consistency guarantees.',
    level: 'SDE-2+',
    topics: ['Distributed Systems', 'Consistency', 'Caching'],
  },
  {
    title: 'Design Recommendation Engine',
    description:
      'Product recommendation system using collaborative filtering and ML.',
    level: 'SDE-3+',
    topics: ['ML Systems', 'Feature Store', 'A/B Testing'],
  },
  {
    title: 'Design Flash Sale System',
    description:
      'Handle 10x traffic surge during Big Billion Days with fair distribution.',
    level: 'SDE-3+',
    topics: ['High Availability', 'Rate Limiting', 'Queue'],
  },
  {
    title: 'Design Payment Gateway',
    description:
      'Design payment processing with multiple providers and retry mechanisms.',
    level: 'SDE-2+',
    topics: ['Idempotency', 'Circuit Breaker', 'Reconciliation'],
  },
];

const hrQuestions = [
  {
    question: 'Tell me about yourself',
    tip: 'Structure: Current role → Past experience → Why Flipkart → Career goals. Keep it 2-3 minutes.',
  },
  {
    question: 'Why do you want to join Flipkart?',
    tip: 'Mention: Scale (400M users), impact, product complexity, growth opportunity, engineering culture.',
  },
  {
    question: 'Describe a challenging project you worked on',
    tip: 'Use STAR format. Focus on your specific contribution, technical decisions, and measurable outcomes.',
  },
  {
    question: 'How do you handle disagreements with team members?',
    tip: 'Show data-driven approach, active listening, and focusing on best outcome over ego.',
  },
  {
    question: 'What is your biggest achievement?',
    tip: 'Quantify impact: performance improvements, user growth, revenue impact, or cost savings.',
  },
  {
    question: 'Where do you see yourself in 5 years?',
    tip: 'Show growth mindset: technical depth, leadership aspirations, and alignment with Flipkart growth.',
  },
  {
    question: 'How do you prioritize tasks under tight deadlines?',
    tip: 'Discuss urgency/importance matrix, communication with stakeholders, and trade-off decisions.',
  },
  {
    question: 'Tell me about a time you failed',
    tip: 'Be honest, show accountability, explain learnings, and how you applied them later.',
  },
];

const preparationPlan = [
  {
    week: 'Weeks 1-4',
    title: 'DSA Foundations',
    tasks: [
      'Master arrays, strings, and hashing',
      'Complete 50 easy LeetCode problems',
      'Learn recursion and backtracking',
      'Study binary search variations',
    ],
  },
  {
    week: 'Weeks 5-8',
    title: 'Advanced DSA',
    tasks: [
      'Master trees, graphs, and heaps',
      'Solve 50 medium LeetCode problems',
      'Learn dynamic programming patterns',
      'Practice sliding window and two pointers',
    ],
  },
  {
    week: 'Weeks 9-10',
    title: 'Machine Coding',
    tasks: [
      'Learn SOLID principles and design patterns',
      'Practice parking lot, splitwise, snake-ladder',
      'Build systems in 90 mins timed sessions',
      'Review and refactor your solutions',
    ],
  },
  {
    week: 'Weeks 11-12',
    title: 'System Design & Mock',
    tasks: [
      'Study system design fundamentals',
      'Practice e-commerce specific designs',
      'Give mock interviews on Pramp/Interviewing.io',
      'Prepare behavioral stories with STAR format',
    ],
  },
];

export default function FlipkartInterviewQuestionsPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
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
              'Flipkart Interview Questions 2026 - Complete Preparation Guide',
            description:
              'Comprehensive collection of Flipkart interview questions for SDE roles including DSA, machine coding, and system design.',
            author: {
              '@type': 'Organization',
              name: 'Sproutern',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Sproutern',
            },
            datePublished: '2026-01-27',
            dateModified: '2026-01-27',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-blue-600 py-16">
        <div className="container">
          <Link
            href="/companies/flipkart"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Flipkart Careers
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Flipkart Interview Questions 2026
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            100+ real interview questions asked at Flipkart for SDE-1, SDE-2,
            and SDE-3 roles. Includes DSA, machine coding, system design, and
            behavioral questions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-white/20 text-white">100+ Questions</Badge>
            <Badge className="bg-white/20 text-white">Updated Jan 2026</Badge>
            <Badge className="bg-white/20 text-white">All Levels</Badge>
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
              <Settings className="h-8 w-8 text-primary" />
              <div>
                <p className="text-xl font-bold">6</p>
                <p className="text-sm text-muted-foreground">Machine Coding</p>
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
                <p className="text-sm text-muted-foreground">HR Questions</p>
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
              <Code className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold">DSA Questions</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Data structures and algorithm questions commonly asked in Flipkart
              technical rounds
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
                            🔥 Frequently Asked
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

      {/* Machine Coding */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <div className="flex items-center gap-3">
                <Settings className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl font-bold">Machine Coding Questions</h2>
              </div>
              <p className="mt-2 text-muted-foreground">
                Low-level design problems where you build a working system in
                90-120 minutes
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {machineCodingQuestions.map((q, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{q.title}</CardTitle>
                      <Badge variant="outline">
                        <Clock className="mr-1 h-3 w-3" />
                        {q.duration}
                      </Badge>
                    </div>
                    <CardDescription>{q.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {q.concepts.map((c) => (
                        <Badge
                          key={c}
                          variant="secondary"
                          className="text-xs"
                        >
                          {c}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Key Tips:</p>
                      <ul className="space-y-1">
                        {q.tips.map((tip, ti) => (
                          <li
                            key={ti}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-500" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Design */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <Database className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold">System Design Questions</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              High-level design questions for SDE-2 and above roles
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
      </section>

      {/* HR Questions */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl font-bold">
                  Behavioral / HR Questions
                </h2>
              </div>
              <p className="mt-2 text-muted-foreground">
                Questions asked in hiring manager and HR rounds
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {hrQuestions.map((q, i) => (
                <AccordionItem
                  key={i}
                  value={`hr-${i}`}
                >
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-muted-foreground" />
                      {q.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-start gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
                      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
                      <p className="text-muted-foreground">{q.tip}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Preparation Plan */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              12-Week Preparation Plan
            </h2>
            <p className="text-muted-foreground">
              Structured roadmap to crack Flipkart interviews
            </p>
          </div>
          <div className="space-y-6">
            {preparationPlan.map((phase, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 font-bold text-white">
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
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Start Preparing?
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
                <Link href="/companies/flipkart">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Flipkart Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
