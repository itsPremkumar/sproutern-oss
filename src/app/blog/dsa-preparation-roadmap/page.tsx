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
  Brain,
  Zap,
  AlertTriangle,
  BookMarked,
  GitBranch,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DSA Preparation for Internship Interviews: Roadmap',
  description:
    'Master Data Structures and Algorithms for tech internship interviews. Get a structured roadmap, practice problems, and time-tested strategies.',
  keywords: [
    'DSA preparation',
    'DSA for interviews',
    'data structures algorithms',
    'coding interview prep',
    'leetcode roadmap',
  ],
  openGraph: {
    title: 'DSA Preparation for Internship Interviews: Complete Roadmap',
    description: 'Your step-by-step guide to cracking coding interviews.',
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
          <div className="mb-4 flex items-center gap-2 text-emerald-600">
            <Code className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Technical Interview
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            DSA Preparation for Internship Interviews: Complete Roadmap
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Stop randomly solving problems. Follow this structured roadmap to
            build strong DSA foundations and crack coding interviews at top
            companies.
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            Interview Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-emerald-600">95%</span>
              <span>of tech interviews include DSA questions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-emerald-600">
                150-200
              </span>
              <span>problems enough to crack most interviews</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-emerald-600">3-6</span>
              <span>months ideal preparation time</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-emerald-600">
                2-3 hrs
              </span>
              <span>daily practice recommended</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                1. Complete Roadmap (Week by Week)
              </a>
            </li>
            <li>
              <a
                href="#topics"
                className="text-primary hover:underline"
              >
                2. Must-Know Topics
              </a>
            </li>
            <li>
              <a
                href="#problems"
                className="text-primary hover:underline"
              >
                3. Essential Problem Patterns
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-primary hover:underline"
              >
                4. Best Resources
              </a>
            </li>
            <li>
              <a
                href="#practice"
                className="text-primary hover:underline"
              >
                5. Practice Strategy
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                6. Common Mistakes
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                7. FAQs
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
                Follow a structured roadmap—random problem solving is
                inefficient
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Focus on patterns, not memorizing solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>150-200 quality problems beats 500 random ones</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Consistency (2-3 hours daily) beats weekend cramming</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Complete Roadmap (12 Weeks)
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-600">
                Week 1-2: Arrays & Strings
              </p>
              <p className="text-sm text-muted-foreground">
                Two pointers, sliding window, prefix sum, basic string
                manipulation
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-600">
                Week 3-4: Linked Lists & Stacks/Queues
              </p>
              <p className="text-sm text-muted-foreground">
                Singly/doubly linked lists, monotonic stack, queue
                implementations
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-600">
                Week 5-6: Trees & Binary Search
              </p>
              <p className="text-sm text-muted-foreground">
                BST operations, tree traversals, binary search variations
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-600">
                Week 7-8: Recursion & Backtracking
              </p>
              <p className="text-sm text-muted-foreground">
                Recursive thinking, subsets, permutations, N-queens
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-600">
                Week 9-10: Dynamic Programming
              </p>
              <p className="text-sm text-muted-foreground">
                1D DP, 2D DP, classic problems (knapsack, LCS, LIS)
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-600">
                Week 11-12: Graphs & Heaps
              </p>
              <p className="text-sm text-muted-foreground">
                BFS, DFS, shortest paths, topological sort, heap operations
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Topics */}
        <section
          id="topics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookMarked className="h-6 w-6 text-primary" />
            2. Must-Know Topics (Priority Order)
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Priority</th>
                  <th className="border p-3 text-left">Topic</th>
                  <th className="border p-3 text-left">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">🔴 Critical</td>
                  <td className="border p-3">Arrays, Strings, Hash Maps</td>
                  <td className="border p-3">Very High</td>
                </tr>
                <tr>
                  <td className="border p-3">🔴 Critical</td>
                  <td className="border p-3">Two Pointers, Sliding Window</td>
                  <td className="border p-3">Very High</td>
                </tr>
                <tr>
                  <td className="border p-3">🔴 Critical</td>
                  <td className="border p-3">Binary Search</td>
                  <td className="border p-3">High</td>
                </tr>
                <tr>
                  <td className="border p-3">🟡 Important</td>
                  <td className="border p-3">Trees, Graphs</td>
                  <td className="border p-3">High</td>
                </tr>
                <tr>
                  <td className="border p-3">🟡 Important</td>
                  <td className="border p-3">Dynamic Programming</td>
                  <td className="border p-3">Medium-High</td>
                </tr>
                <tr>
                  <td className="border p-3">🟢 Good to Know</td>
                  <td className="border p-3">Heaps, Tries, Union Find</td>
                  <td className="border p-3">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Patterns */}
        <section
          id="problems"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            3. Essential Problem Patterns
          </h2>

          <p>
            Focus on learning these patterns rather than memorizing individual
            solutions:
          </p>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Two Pointers</p>
              <p className="text-muted-foreground">
                Pair problems, container with water, palindrome checks
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Sliding Window</p>
              <p className="text-muted-foreground">
                Subarray sums, longest substring problems
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Binary Search</p>
              <p className="text-muted-foreground">
                Search in rotated array, find peak, search space reduction
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">BFS/DFS</p>
              <p className="text-muted-foreground">
                Tree/graph traversal, shortest path, connected components
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Backtracking</p>
              <p className="text-muted-foreground">
                Subsets, permutations, combinations, path finding
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Dynamic Programming</p>
              <p className="text-muted-foreground">
                Optimal substructure problems, memoization vs tabulation
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            4. Best Resources
          </h2>

          <h3>Practice Platforms</h3>
          <ul>
            <li>
              <strong>LeetCode:</strong> Best for interview prep, company-tagged
              problems
            </li>
            <li>
              <strong>Codeforces:</strong> Great for competitive programming
              mindset
            </li>
            <li>
              <strong>GFG:</strong> Theory explanations and structured courses
            </li>
            <li>
              <strong>NeetCode:</strong> Curated list with video explanations
            </li>
          </ul>

          <h3>Curated Problem Lists</h3>
          <ul>
            <li>Blind 75 (best for quick prep)</li>
            <li>NeetCode 150 (expanded Blind 75)</li>
            <li>Striver's SDE Sheet (comprehensive)</li>
            <li>Love Babbar 450 (thorough coverage)</li>
          </ul>
        </section>

        {/* Section 5: Practice Strategy */}
        <section
          id="practice"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-primary" />
            5. Practice Strategy
          </h2>

          <h3>The Right Way to Solve Problems</h3>
          <ol>
            <li>
              <strong>Understand:</strong> Read the problem 2-3 times, note
              constraints
            </li>
            <li>
              <strong>Think:</strong> Spend 15-20 mins before looking at hints
            </li>
            <li>
              <strong>Identify pattern:</strong> What technique does this remind
              you of?
            </li>
            <li>
              <strong>Code:</strong> Write clean, bug-free code
            </li>
            <li>
              <strong>Review:</strong> Even after solving, check optimal
              solution
            </li>
            <li>
              <strong>Revisit:</strong> Redo the problem after 3-7 days
            </li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Time Limits:</strong> Easy (15-20 min), Medium (30-40
              min), Hard (45-60 min). If stuck beyond this, study the solution
              and revisit later.
            </div>
          </div>
        </section>

        {/* Section 6: Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            6. Common Mistakes
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Random Problem Solving</p>
              <p className="text-sm text-muted-foreground">
                Jumping between random problems without structure. Follow a
                roadmap.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Not Learning Patterns</p>
              <p className="text-sm text-muted-foreground">
                Memorizing solutions instead of understanding the underlying
                pattern.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Skipping Easy Problems</p>
              <p className="text-sm text-muted-foreground">
                Easy problems build foundation. Don't jump to hard problems too
                early.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Not Practicing Under Time Pressure</p>
              <p className="text-sm text-muted-foreground">
                Real interviews have time limits. Practice with a timer.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            7. FAQs
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">How many problems should I solve?</p>
              <p className="mt-2 text-muted-foreground">
                150-200 problems with strong understanding is better than 500
                problems solved randomly. Quality over quantity.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Which language should I use?</p>
              <p className="mt-2 text-muted-foreground">
                Use your most comfortable language. Python is fastest to write,
                Java/C++ shows fundamentals. Consistency matters more than
                language.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How long to prepare?</p>
              <p className="mt-2 text-muted-foreground">
                3-6 months with 2-3 hours daily is ideal. If short on time,
                focus on Blind 75 + company-specific problems.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Your DSA Journey</h2>
          <p>
            DSA preparation is a marathon, not a sprint. Follow this roadmap,
            stay consistent, and trust the process. Every problem you solve
            builds your intuition.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your future self will thank you for starting today. Let's code! 💻
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Behavioral Interview Questions
            </Link>
            <Link
              href="/blog/system-design-basics-interviews"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              System Design Basics
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
                Based on analysis of 1,000+ successful tech interview
                experiences.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
