import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Code,
  Terminal,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Zap,
  FileCode,
  Brain,
  AlertCircle,
  XCircle,
  Star,
  MessageCircle,
  Timer,
  Award,
  Search,
  Layers,
  Database,
  Server,
  Globe,
  Shield,
  Play,
  RefreshCw,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technical Interview Preparation: Complete Guide',
  description:
    'Ace your technical interviews with this comprehensive guide. Master coding rounds, system design, behavioral questions, and learn communication strategies that impress interviewers.',
  keywords: [
    'technical interview preparation',
    'coding interview',
    'tech interview tips',
    'system design interview',
    'coding round preparation',
    'leetcode preparation',
    'dsa interview',
    'faang interview',
    'software engineer interview',
    'coding interview india',
  ],
  openGraph: {
    title: 'Technical Interview Preparation: Complete Guide',
    description:
      'Everything you need to ace technical interviews at top companies.',
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
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <Code className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Interview Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Technical Interview Preparation: The Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Technical interviews test more than just coding skills. They
            evaluate your problem-solving approach, communication ability, and
            how you handle pressure. This comprehensive guide covers everything
            from DSA to system design to effective communication.
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
              <span>30 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Technical Interview Success Factors
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">40%</span>
              <span>Problem-solving approach and thought process</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">30%</span>
              <span>Code quality and correctness</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">20%</span>
              <span>Communication and collaboration</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">10%</span>
              <span>Time management and efficiency</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            Here&apos;s the uncomfortable truth about technical interviews:
            brilliant programmers fail them every day, while candidates with
            average coding skills but great interview technique get offers from
            top companies.
          </p>
          <p>
            Technical interviewing is a skill separate from programming. It
            requires deliberate practice, structured preparation, and
            understanding what interviewers are actually evaluating. This guide
            teaches you the complete system.
          </p>
          <p>
            Whether you&apos;re preparing for your first internship interview or
            targeting FAANG companies, the fundamentals remain the same. Master
            these principles, and you&apos;ll dramatically improve your success
            rate.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                1. Types of Technical Rounds
              </a>
            </li>
            <li>
              <a
                href="#framework"
                className="text-primary hover:underline"
              >
                2. The UMPIRE Framework
              </a>
            </li>
            <li>
              <a
                href="#dsa"
                className="text-primary hover:underline"
              >
                3. DSA Preparation Strategy
              </a>
            </li>
            <li>
              <a
                href="#patterns"
                className="text-primary hover:underline"
              >
                4. Must-Know Problem Patterns
              </a>
            </li>
            <li>
              <a
                href="#communication"
                className="text-primary hover:underline"
              >
                5. Communication Techniques
              </a>
            </li>
            <li>
              <a
                href="#system"
                className="text-primary hover:underline"
              >
                6. System Design Basics
              </a>
            </li>
            <li>
              <a
                href="#behavioral"
                className="text-primary hover:underline"
              >
                7. Behavioral Questions
              </a>
            </li>
            <li>
              <a
                href="#stuck"
                className="text-primary hover:underline"
              >
                8. When You&apos;re Stuck
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                9. Common Mistakes
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-primary hover:underline"
              >
                10. Preparation Timeline
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-primary hover:underline"
              >
                11. Best Resources
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                12. FAQs
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
              <span>
                Think out loud—interviewers want to see your thought process,
                not just the answer
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Clarify requirements before coding—never assume; always ask
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Start with brute force, then optimize—a working solution beats
                no solution
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Practice with a timer—interviews are time-boxed; speed matters
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Learn patterns, not just problems—patterns transfer across
                questions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Mock interviews are essential—practice the full experience
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            1. Types of Technical Rounds
          </h2>

          <p>
            Different companies have different interview formats, but most
            follow similar patterns. Understanding each type helps you prepare
            appropriately.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-bold text-blue-600">
                Online Assessment (OA)
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>Format:</strong> Timed coding test on platforms like
                HackerRank, Codility, or company portals
              </p>
              <p className="mt-1 text-sm">
                <strong>Duration:</strong> 60-120 minutes for 2-4 problems
              </p>
              <p className="mt-1 text-sm">
                <strong>Tips:</strong> Read all problems first, start with
                easiest, manage time strictly, test thoroughly before submitting
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold text-green-600">
                Technical Phone Screen
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>Format:</strong> 30-60 min live coding with interviewer
                on shared editor
              </p>
              <p className="mt-1 text-sm">
                <strong>Focus:</strong> Communication as much as coding;
                interviewer wants to see your process
              </p>
              <p className="mt-1 text-sm">
                <strong>Tips:</strong> Think aloud, ask clarifying questions,
                explain your approach before coding
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold text-purple-600">
                Onsite/Virtual Loop (3-5 rounds)
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>Format:</strong> Multiple back-to-back interviews, each
                45-60 minutes
              </p>
              <p className="mt-1 text-sm">
                <strong>Typical structure:</strong>
              </p>
              <ul className="ml-4 mt-1 list-disc text-sm">
                <li>2-3 coding rounds (DSA)</li>
                <li>1 system design (for senior roles)</li>
                <li>1 behavioral/culture fit</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold text-orange-600">
                Take-Home Assignment
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>Format:</strong> Build a feature/project in 24-72 hours
              </p>
              <p className="mt-1 text-sm">
                <strong>Focus:</strong> Code quality, architecture, testing,
                documentation
              </p>
              <p className="mt-1 text-sm">
                <strong>Tips:</strong> Prioritize clean code, add README, write
                tests, don&apos;t over-engineer
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Framework */}
        <section
          id="framework"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            2. The UMPIRE Framework
          </h2>

          <p>
            Having a consistent approach to every problem prevents panic and
            ensures you don&apos;t miss steps. Use the UMPIRE framework:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-red-500 p-4">
              <h4 className="font-bold">
                U - Understand the Problem (2-3 min)
              </h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Repeat the problem in your own words</li>
                <li>• Ask clarifying questions about inputs/outputs</li>
                <li>• Identify edge cases and constraints</li>
                <li>• Confirm your understanding before proceeding</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 p-4">
              <h4 className="font-bold">M - Match to Patterns (1-2 min)</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• What problem category does this match?</li>
                <li>• Two pointers? Sliding window? DFS/BFS?</li>
                <li>• Have you seen a similar problem?</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 p-4">
              <h4 className="font-bold">P - Plan the Approach (3-5 min)</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Describe your algorithm in plain English</li>
                <li>• Walk through with an example</li>
                <li>• State time and space complexity</li>
                <li>• Get interviewer confirmation before coding</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 p-4">
              <h4 className="font-bold">I - Implement (15-20 min)</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Write clean, readable code</li>
                <li>• Use meaningful variable names</li>
                <li>• Narrate what you&apos;re doing</li>
                <li>• Don&apos;t optimize prematurely</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-blue-500 p-4">
              <h4 className="font-bold">R - Review and Test (3-5 min)</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Trace through with a small example</li>
                <li>• Check edge cases (null, empty, single element)</li>
                <li>• Look for off-by-one errors</li>
                <li>• Verify array bounds</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-purple-500 p-4">
              <h4 className="font-bold">E - Evaluate and Optimize (if time)</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Discuss alternative approaches</li>
                <li>• Can you improve time/space complexity?</li>
                <li>• What are the trade-offs?</li>
              </ul>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> A working brute force solution is always
              better than an incomplete optimal solution. Say: &quot;Let me
              start with a working solution, then optimize.&quot;
            </div>
          </div>
        </section>

        {/* Section 3: DSA */}
        <section
          id="dsa"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Database className="h-6 w-6 text-primary" />
            3. DSA Preparation Strategy
          </h2>

          <p>
            You don&apos;t need to solve 1000 LeetCode problems. Strategic
            preparation beats grinding.
          </p>

          <h3>Data Structures to Master</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">Must Know (Priority 1)</p>
              <ul className="mt-2 space-y-1">
                <li>• Arrays and Strings</li>
                <li>• Hash Maps / Hash Sets</li>
                <li>• Linked Lists</li>
                <li>• Stacks and Queues</li>
                <li>• Binary Trees</li>
                <li>• Graphs</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-yellow-600">
                Good to Know (Priority 2)
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Heaps (Priority Queues)</li>
                <li>• Tries</li>
                <li>• Union Find</li>
                <li>• Binary Search Trees</li>
                <li>• Segment Trees</li>
              </ul>
            </div>
          </div>

          <h3>Algorithms to Master</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">Must Know</p>
              <ul className="mt-2 space-y-1">
                <li>• Binary Search</li>
                <li>• Two Pointers</li>
                <li>• Sliding Window</li>
                <li>• BFS and DFS</li>
                <li>• Recursion / Backtracking</li>
                <li>• Basic Sorting</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-yellow-600">Good to Know</p>
              <ul className="mt-2 space-y-1">
                <li>• Dynamic Programming</li>
                <li>• Greedy Algorithms</li>
                <li>• Topological Sort</li>
                <li>• Dijkstra&apos;s Algorithm</li>
                <li>• Bit Manipulation</li>
              </ul>
            </div>
          </div>

          <h3>Recommended Problem Count</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Target</th>
                  <th className="p-3 text-left">Easy</th>
                  <th className="p-3 text-left">Medium</th>
                  <th className="p-3 text-left">Hard</th>
                  <th className="p-3 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Internships</td>
                  <td className="p-3">50</td>
                  <td className="p-3">50</td>
                  <td className="p-3">10</td>
                  <td className="p-3 font-bold">~110</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Entry-level</td>
                  <td className="p-3">50</td>
                  <td className="p-3">100</td>
                  <td className="p-3">30</td>
                  <td className="p-3 font-bold">~180</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">FAANG</td>
                  <td className="p-3">50</td>
                  <td className="p-3">150</td>
                  <td className="p-3">50</td>
                  <td className="p-3 font-bold">~250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Patterns */}
        <section
          id="patterns"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Search className="h-6 w-6 text-primary" />
            4. Must-Know Problem Patterns
          </h2>

          <p>
            Instead of memorizing solutions, learn patterns. Each pattern
            applies to dozens of problems.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Two Pointers</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Use when: Sorted arrays, finding pairs, palindromes
              </p>
              <p className="mt-1 text-sm">
                <strong>Classic problems:</strong> Two Sum II, Container With
                Most Water, 3Sum
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Sliding Window</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Use when: Contiguous subarrays/substrings with conditions
              </p>
              <p className="mt-1 text-sm">
                <strong>Classic problems:</strong> Maximum Subarray, Longest
                Substring Without Repeating Characters
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Binary Search</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Use when: Sorted data, searching in rotated arrays, finding
                boundaries
              </p>
              <p className="mt-1 text-sm">
                <strong>Classic problems:</strong> Search in Rotated Array, Find
                First and Last Position
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">BFS/DFS</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Use when: Trees, graphs, matrices, connected components
              </p>
              <p className="mt-1 text-sm">
                <strong>Classic problems:</strong> Number of Islands, Binary
                Tree Level Order Traversal
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Dynamic Programming</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Use when: Overlapping subproblems, optimal substructure
              </p>
              <p className="mt-1 text-sm">
                <strong>Classic problems:</strong> Climbing Stairs, Coin Change,
                Longest Common Subsequence
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Backtracking</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Use when: Generate all combinations/permutations, constraint
                satisfaction
              </p>
              <p className="mt-1 text-sm">
                <strong>Classic problems:</strong> Subsets, Permutations,
                N-Queens
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Communication */}
        <section
          id="communication"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-primary" />
            5. Communication Techniques
          </h2>

          <p>
            What you say is as important as what you code. Here are phrases that
            demonstrate good communication:
          </p>

          <h3>During Problem Understanding</h3>
          <ul>
            <li>
              &quot;Let me make sure I understand the problem correctly...&quot;
            </li>
            <li>&quot;So the input is X and I need to return Y?&quot;</li>
            <li>&quot;What happens if the input is empty or null?&quot;</li>
            <li>&quot;Are there any constraints on time or space?&quot;</li>
            <li>&quot;Can the array have duplicate elements?&quot;</li>
          </ul>

          <h3>While Planning</h3>
          <ul>
            <li>
              &quot;I&apos;m thinking of using [data structure] because...&quot;
            </li>
            <li>
              &quot;This reminds me of [pattern], so I&apos;ll try...&quot;
            </li>
            <li>
              &quot;The brute force would be O(n²), but I think we can do
              O(n)...&quot;
            </li>
            <li>&quot;Let me walk through this with an example...&quot;</li>
          </ul>

          <h3>During Coding</h3>
          <ul>
            <li>&quot;I&apos;m iterating through the array to...&quot;</li>
            <li>&quot;This variable keeps track of...&quot;</li>
            <li>
              &quot;I&apos;m using a hash map here for O(1) lookups...&quot;
            </li>
          </ul>

          <h3>When Stuck</h3>
          <ul>
            <li>&quot;I&apos;m stuck on this part. Can I get a hint?&quot;</li>
            <li>
              &quot;I realize my approach has a flaw. Let me reconsider...&quot;
            </li>
            <li>&quot;Would it help if I considered this differently?&quot;</li>
          </ul>

          <h3>After Coding</h3>
          <ul>
            <li>&quot;Let me trace through with this test case...&quot;</li>
            <li>&quot;The time complexity is O(n) because...&quot;</li>
            <li>&quot;If I had more time, I could optimize by...&quot;</li>
          </ul>
        </section>

        {/* Section 6: System Design */}
        <section
          id="system"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Server className="h-6 w-6 text-primary" />
            6. System Design Basics
          </h2>

          <p>
            System design is typically for senior roles (3+ years), but
            understanding basics helps at all levels.
          </p>

          <h3>Fundamental Concepts</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Scalability</p>
              <ul className="mt-2 space-y-1">
                <li>• Horizontal vs vertical scaling</li>
                <li>• Load balancing</li>
                <li>• Database sharding</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Performance</p>
              <ul className="mt-2 space-y-1">
                <li>• Caching strategies</li>
                <li>• CDN usage</li>
                <li>• Database indexing</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Reliability</p>
              <ul className="mt-2 space-y-1">
                <li>• Redundancy</li>
                <li>• Failover mechanisms</li>
                <li>• Data replication</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Data Storage</p>
              <ul className="mt-2 space-y-1">
                <li>• SQL vs NoSQL</li>
                <li>• When to use each</li>
                <li>• CAP theorem basics</li>
              </ul>
            </div>
          </div>

          <h3>Common System Design Questions</h3>
          <ul>
            <li>Design a URL shortener (like bit.ly)</li>
            <li>Design a rate limiter</li>
            <li>Design Twitter&apos;s timeline</li>
            <li>Design a chat application</li>
            <li>Design a notification system</li>
          </ul>
        </section>

        {/* Section 7: Behavioral */}
        <section
          id="behavioral"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            7. Behavioral Questions
          </h2>

          <p>
            Most technical interviews include behavioral questions. Use the STAR
            method to structure answers.
          </p>

          <h3>The STAR Method</h3>
          <ul>
            <li>
              <strong>S - Situation:</strong> Set the context (2-3 sentences)
            </li>
            <li>
              <strong>T - Task:</strong> What was your responsibility?
            </li>
            <li>
              <strong>A - Action:</strong> What specific steps did you take?
            </li>
            <li>
              <strong>R - Result:</strong> What was the outcome? Quantify if
              possible
            </li>
          </ul>

          <h3>Common Questions to Prepare</h3>
          <ul>
            <li>Tell me about a challenging technical problem you solved</li>
            <li>Describe a time you disagreed with a teammate</li>
            <li>Tell me about a project you&apos;re proud of</li>
            <li>How do you handle tight deadlines?</li>
            <li>Describe a time you failed and what you learned</li>
            <li>Why are you interested in this company?</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Tip:</strong> Prepare 3-4 stories from your experience
              that can be adapted to answer multiple behavioral questions.
            </div>
          </div>
        </section>

        {/* Section 8: Stuck */}
        <section
          id="stuck"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <RefreshCw className="h-6 w-6 text-primary" />
            8. When You&apos;re Stuck
          </h2>

          <p>
            Everyone gets stuck. How you handle it matters more than avoiding
            it.
          </p>

          <h3>Strategies When Stuck</h3>
          <ul>
            <li>
              <strong>Walk through a small example by hand:</strong> Often
              reveals the pattern
            </li>
            <li>
              <strong>Simplify the problem:</strong> Remove constraints, solve
              simpler version first
            </li>
            <li>
              <strong>Think about related problems:</strong> What patterns might
              apply?
            </li>
            <li>
              <strong>Work backwards:</strong> Start from the desired output
            </li>
            <li>
              <strong>Ask for a hint:</strong> Better than wasting 10 minutes in
              silence
            </li>
          </ul>

          <h3>How to Ask for Hints</h3>
          <ul>
            <li>
              &quot;I&apos;m considering X approach, but I&apos;m unsure about
              Y. Could you help me think through that?&quot;
            </li>
            <li>
              &quot;I&apos;ve tried A and B. Is there a different direction I
              should explore?&quot;
            </li>
            <li>
              &quot;I think I need to use a [data structure], but I&apos;m not
              sure how. Can you give me a nudge?&quot;
            </li>
          </ul>
        </section>

        {/* Section 9: Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <XCircle className="h-6 w-6 text-primary" />
            9. Common Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Jumping straight to code
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                Always spend 5-10 minutes understanding and planning. Coding too
                early often leads to dead ends.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Silent coding
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                Interviewers can&apos;t read your mind. Explain your thought
                process constantly.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Ignoring edge cases
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                Null, empty, single element, duplicates—always consider these.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Not testing
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                Always trace through code with at least one example before
                saying &quot;done.&quot;
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Going silent when stuck
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                Ask for hints. Interviewers prefer engaged candidates who seek
                help over silent ones.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Arguing with interviewer
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                If they suggest something, there&apos;s usually a reason. Listen
                and adapt.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Timeline */}
        <section
          id="timeline"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Timer className="h-6 w-6 text-primary" />
            10. Preparation Timeline
          </h2>

          <h3>12-Week Plan (Before Placement Season)</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-blue-500 p-4">
              <h4 className="font-bold">Week 1-3: Foundations</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Review core data structures</li>
                <li>• Solve 30 easy problems</li>
                <li>• Practice time/space complexity analysis</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 p-4">
              <h4 className="font-bold">Week 4-6: Pattern Recognition</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Learn 8-10 common patterns</li>
                <li>• Solve 40 medium problems</li>
                <li>• Start timing yourself</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 p-4">
              <h4 className="font-bold">Week 7-9: Deep Practice</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Focus on weak areas</li>
                <li>• Solve 40 more medium + 15 hard</li>
                <li>• Mock interviews (2-3 per week)</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-purple-500 p-4">
              <h4 className="font-bold">Week 10-12: Interview Simulation</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Daily mock interviews</li>
                <li>• Revise previously solved problems</li>
                <li>• Practice behavioral questions</li>
                <li>• Company-specific preparation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 11: Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            11. Best Resources
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Practice Platforms</p>
              <ul className="mt-2 space-y-1">
                <li>• LeetCode (best for variety)</li>
                <li>• HackerRank (OA practice)</li>
                <li>• InterviewBit (structured path)</li>
                <li>• Codeforces (competitive)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Learning Resources</p>
              <ul className="mt-2 space-y-1">
                <li>• NeetCode (YouTube + Roadmap)</li>
                <li>• Striver&apos;s SDE Sheet</li>
                <li>• AlgoExpert (paid, high quality)</li>
                <li>• Take U Forward (YouTube)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Books</p>
              <ul className="mt-2 space-y-1">
                <li>• Cracking the Coding Interview</li>
                <li>• Elements of Programming Interviews</li>
                <li>• Designing Data-Intensive Apps (system design)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Mock Interviews</p>
              <ul className="mt-2 space-y-1">
                <li>• Pramp (free peer practice)</li>
                <li>• Interviewing.io (with engineers)</li>
                <li>• Friends/peers (informal)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            12. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">
                How many LeetCode problems should I solve?
              </p>
              <p className="mt-2 text-muted-foreground">
                Quality over quantity. 150-200 well-understood problems covering
                all patterns is better than 500 solved without retention. Focus
                on understanding the &quot;why,&quot; not just the
                &quot;how.&quot;
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">Should I memorize solutions?</p>
              <p className="mt-2 text-muted-foreground">
                Never. Memorized solutions fail when problems are slightly
                modified. Instead, memorize patterns and approaches that apply
                to categories of problems.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">What language should I use?</p>
              <p className="mt-2 text-muted-foreground">
                Use the language you&apos;re most comfortable with. Python is
                popular for its brevity. Java and C++ are also common. Avoid
                using a language you&apos;re still learning.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">How do I handle time pressure?</p>
              <p className="mt-2 text-muted-foreground">
                Practice with a timer. Aim to solve medium problems in 25-30
                minutes. If stuck for more than 10 minutes on one approach, try
                something different or ask for hints.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                What if I&apos;ve never seen the problem before?
              </p>
              <p className="mt-2 text-muted-foreground">
                That&apos;s expected! The goal is pattern recognition. If you
                know the patterns, you can solve problems you&apos;ve never
                seen. Break it down, find the pattern, and adapt.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">How important is code quality?</p>
              <p className="mt-2 text-muted-foreground">
                Very important. Use meaningful names, proper indentation, and
                modular functions. Clean code shows professionalism and makes
                debugging easier.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>You&apos;ve Got This</h2>
          <p>
            Technical interviews are a skill that improves with deliberate
            practice. Every interview—even rejections—makes you better. Focus on
            the process, learn from each experience, and trust your preparation.
          </p>
          <p>
            Remember: interviewers want you to succeed. They&apos;re evaluating
            whether you&apos;d be a great colleague, not trying to trick you.
            Approach interviews as collaborative problem-solving sessions, and
            you&apos;ll perform at your best.
          </p>
          <p className="text-lg font-semibold text-primary">
            Practice consistently, communicate clearly, and trust your
            preparation. You&apos;ve got this! 💻
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation Roadmap
            </Link>
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Behavioral Interview Questions
            </Link>
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Tech Internship Guide
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
                Based on 500+ technical interview experiences and insights from
                interviewers at top tech companies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
