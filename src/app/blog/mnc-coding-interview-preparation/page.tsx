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
  Brain,
  AlertTriangle,
  FileCode,
  Zap,
  Target,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MNC Coding Interview Preparation - Complete Guide',
  description:
    'Master MNC coding interviews with strategies for solving problems, time complexity analysis, coding on paper, and handling pressure. Includes practice problems and tips for TCS, Infosys, Wipro, Amazon, Google, and Microsoft.',
  keywords: [
    'MNC coding interview',
    'coding interview prep',
    'programming interview',
    'coding round',
    'MNC technical round',
    'coding interview tips',
  ],
  openGraph: {
    title: 'MNC Coding Interview Preparation - Complete Guide',
    description:
      'Ace MNC coding interviews with comprehensive preparation strategies and practice tips.',
    type: 'article',
    publishedTime: '2025-12-20T00:00:00Z',
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
              MNC Placement Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            MNC Coding Interview Preparation - Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Coding interviews are the core of MNC technical rounds. Master
            problem-solving strategies, time complexity analysis, coding on
            paper, and learn how to handle pressure in coding interviews at top
            MNCs.
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
              <span>19 min read</span>
            </div>
          </div>
        </header>

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
                Practice 200+ coding problems covering all major topics
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Think out loud - explain your approach while solving</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Start with brute force, then optimize - show problem-solving
                process
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Always mention time and space complexity</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Practice coding on paper/whiteboard - many companies still use
                this
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            Coding interviews are where your problem-solving abilities and
            programming skills are tested in real-time. Whether it's TCS,
            Infosys, Wipro, or product companies like Amazon and Google, coding
            interviews are the most critical round.
          </p>
          <p>
            This guide covers everything you need to master MNC coding
            interviews: problem-solving strategies, common question patterns,
            time management, debugging techniques, and proven tips from students
            who cleared top MNC coding rounds.
          </p>
        </section>

        {/* Section 1: Problem-Solving Framework */}
        <section
          id="framework"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Problem-Solving Framework
          </h2>

          <h3>The 5-Step Approach</h3>
          <ol>
            <li>
              <strong>Understand the Problem:</strong> Read carefully, ask
              clarifying questions, identify constraints and edge cases
            </li>
            <li>
              <strong>Think Out Loud:</strong> Explain your thought process,
              discuss approaches, mention trade-offs
            </li>
            <li>
              <strong>Start Simple:</strong> Begin with brute force solution,
              then optimize
            </li>
            <li>
              <strong>Code Clearly:</strong> Write clean, readable code with
              proper variable names
            </li>
            <li>
              <strong>Test & Optimize:</strong> Test with examples, handle edge
              cases, discuss optimizations
            </li>
          </ol>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Always ask clarifying questions before
              coding. "What's the input format?", "Can there be negative
              numbers?", "What should I return if array is empty?" This shows
              thorough thinking.
            </p>
          </div>
        </section>

        {/* Section 2: Common Coding Patterns */}
        <section
          id="patterns"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            2. Common Coding Patterns & Topics
          </h2>

          <h3>High-Priority Topics</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Arrays & Strings</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Two pointers technique</li>
                  <li>Sliding window</li>
                  <li>Array manipulation</li>
                  <li>String algorithms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Linked Lists</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Reversal, merging</li>
                  <li>Cycle detection</li>
                  <li>Two pointers</li>
                  <li>Dummy nodes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Trees</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Traversal (DFS, BFS)</li>
                  <li>Binary search trees</li>
                  <li>Tree construction</li>
                  <li>Tree properties</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Dynamic Programming</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>1D and 2D DP</li>
                  <li>Memoization</li>
                  <li>Classic problems</li>
                  <li>Optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3>Practice Strategy</h3>
          <ul>
            <li>Solve 20-30 problems per topic</li>
            <li>Start with Easy, then Medium difficulty</li>
            <li>Focus on understanding patterns, not memorizing solutions</li>
            <li>Practice on LeetCode, HackerRank, or GeeksforGeeks</li>
            <li>
              Use our{' '}
              <Link
                href="/tools/dsa-quiz"
                className="text-primary hover:underline"
              >
                DSA Quiz
              </Link>{' '}
              tool for practice
            </li>
          </ul>
        </section>

        {/* Section 3: Coding on Paper/Whiteboard */}
        <section
          id="paper-coding"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            3. Coding on Paper/Whiteboard
          </h2>

          <p>
            Many MNCs still ask you to write code on paper or whiteboard. This
            tests your ability to code without IDE support and shows how well
            you understand the code.
          </p>

          <h3>Tips for Paper/Whiteboard Coding</h3>
          <ul>
            <li>
              <strong>Practice Regularly:</strong> Write code on paper daily to
              get comfortable
            </li>
            <li>
              <strong>Use Clear Indentation:</strong> Maintain proper code
              structure
            </li>
            <li>
              <strong>Write Pseudocode First:</strong> Outline approach before
              writing actual code
            </li>
            <li>
              <strong>Leave Space:</strong> Leave margins for corrections
            </li>
            <li>
              <strong>Think Before Writing:</strong> Plan the solution mentally
              first
            </li>
          </ul>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Common Mistakes in Paper Coding:
            </h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Forgetting semicolons or brackets</li>
              <li>Poor variable naming</li>
              <li>No indentation or messy code</li>
              <li>Not testing logic mentally</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Time Management */}
        <section
          id="time-management"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            4. Time Management in Coding Interviews
          </h2>

          <h3>Time Allocation Strategy</h3>
          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>First 5 minutes:</strong> Understand problem, ask
                questions, think about approach
              </li>
              <li>
                <strong>Next 10 minutes:</strong> Discuss approach with
                interviewer, get feedback
              </li>
              <li>
                <strong>Next 15 minutes:</strong> Write code, explain as you
                code
              </li>
              <li>
                <strong>Last 5 minutes:</strong> Test with examples, handle edge
                cases, discuss optimizations
              </li>
            </ul>
          </div>

          <h3>Time Management Tips</h3>
          <ul>
            <li>
              Don't spend more than 5 minutes stuck on one approach - try
              alternative
            </li>
            <li>If stuck, ask for hints rather than wasting time</li>
            <li>Start coding once you have a clear approach</li>
            <li>Keep 5 minutes for testing and optimization</li>
          </ul>
        </section>

        {/* Section 5: Common Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            5. Common Mistakes to Avoid
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 1: Not Understanding Problem Fully
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Always ask clarifying questions. Don't assume - clarify
                constraints, input format, edge cases.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 2: Jumping to Code Without Planning
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Discuss approach first. Interviewers want to see your
                problem-solving process, not just code.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 3: Not Testing Code</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Always test with examples, especially edge cases. Walk through
                code execution mentally.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 4: Not Explaining While Coding
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Think out loud. Explain what you're doing and why. This is
                crucial for evaluation.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 5: Giving Up Too Early</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Even if stuck, show your thinking. Ask for hints. Interviewers
                value persistence and problem-solving approach.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Practice Resources */}
        <section
          id="practice"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            6. Practice Resources & Strategy
          </h2>

          <h3>Recommended Practice Platforms</h3>
          <ul>
            <li>
              <strong>LeetCode:</strong> Best for product companies, 200+
              problems recommended
            </li>
            <li>
              <strong>HackerRank:</strong> Good for service-based companies,
              various difficulty levels
            </li>
            <li>
              <strong>GeeksforGeeks:</strong> Great for learning concepts and
              company-specific questions
            </li>
            <li>
              <strong>CodeChef:</strong> For competitive programming practice
            </li>
          </ul>

          <h3>30-Day Coding Practice Plan</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="mb-2 font-bold">Week 1-2: Foundation</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Arrays & Strings (30 problems)</li>
                <li>Linked Lists (20 problems)</li>
                <li>Focus on Easy-Medium difficulty</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <h4 className="mb-2 font-bold">Week 3: Advanced Topics</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Trees & Graphs (30 problems)</li>
                <li>Dynamic Programming (20 problems)</li>
                <li>Medium-Hard difficulty</li>
              </ul>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
              <h4 className="mb-2 font-bold">Week 4: Mock Interviews</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Solve company-specific problems</li>
                <li>Practice coding on paper</li>
                <li>Mock interviews with friends</li>
                <li>Revise all topics</li>
              </ul>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Use our{' '}
              <Link
                href="/tools/dsa-quiz"
                className="font-semibold text-primary hover:underline"
              >
                DSA Quiz
              </Link>{' '}
              tool to test your knowledge and read our{' '}
              <Link
                href="/blog/dsa-preparation-roadmap"
                className="font-semibold text-primary hover:underline"
              >
                DSA Preparation Roadmap
              </Link>{' '}
              for structured learning.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                How many coding problems should I solve before interviews?
              </p>
              <p className="mt-2 text-muted-foreground">
                Aim for 200+ problems covering all major topics. Focus on
                quality - understand patterns and approaches rather than just
                solving.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What if I can't solve a problem in the interview?
              </p>
              <p className="mt-2 text-muted-foreground">
                Don't panic. Think out loud, explain your approach, discuss what
                you know, and ask for hints. Showing problem-solving process is
                valuable.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I optimize code immediately or start with brute force?
              </p>
              <p className="mt-2 text-muted-foreground">
                Start with brute force, then optimize. This shows your
                problem-solving approach. Interviewers value the process.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How important is time complexity in coding interviews?
              </p>
              <p className="mt-2 text-muted-foreground">
                Very important. Always mention time and space complexity. If
                asked to optimize, discuss how you can improve it.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Master Coding Interviews</h2>
          <p>
            Coding interviews test your problem-solving abilities, coding
            skills, and ability to think under pressure. With consistent
            practice, proper strategy, and the right mindset, you can ace MNC
            coding interviews.
          </p>
          <p className="text-lg font-semibold text-primary">
            Practice daily, think out loud, and use our{' '}
            <Link
              href="/tools/dsa-quiz"
              className="hover:underline"
            >
              DSA Quiz
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="hover:underline"
            >
              DSA Preparation Roadmap
            </Link>{' '}
            for comprehensive preparation. Good luck! 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/mnc-technical-interview-questions-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              MNC Technical Interview Questions
            </Link>
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation Roadmap
            </Link>
            <Link
              href="/blog/technical-interview-preparation"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Technical Interview Preparation
            </Link>
            <Link
              href="/tools/dsa-quiz"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Practice DSA Quiz
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on insights from 10,000+ coding interviews and feedback
                from technical interviewers at top MNCs.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
