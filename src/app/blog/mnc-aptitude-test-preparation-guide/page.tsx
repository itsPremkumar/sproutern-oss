import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Calculator,
  Target,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Brain,
  AlertTriangle,
  Trophy,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MNC Aptitude Test Preparation Guide | Complete Strategy',
  description:
    'Master MNC aptitude tests with our complete preparation guide. Learn test patterns, question types, time management, and proven strategies for TCS NQT, InfyTQ, Wipro Elite, and more.',
  keywords: [
    'MNC aptitude test',
    'aptitude test preparation',
    'TCS NQT',
    'InfyTQ',
    'Wipro Elite',
    'aptitude test tips',
    'quantitative aptitude',
    'logical reasoning',
    'placement test',
  ],
  openGraph: {
    title: 'MNC Aptitude Test Preparation Guide',
    description:
      'Complete guide to ace MNC aptitude tests and secure your dream job.',
    type: 'article',
    publishedTime: '2025-12-15T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <Calculator className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              MNC Placement Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            MNC Aptitude Test Preparation Guide 2025: Complete Strategy
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Aptitude tests are the first filter in MNC hiring. Master
            quantitative aptitude, logical reasoning, and verbal ability to
            clear TCS NQT, InfyTQ, Wipro Elite, and other MNC tests.
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
              <span>18 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Aptitude Test Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">60-70%</span>
              <span>of candidates are eliminated in aptitude round</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">
                20-30 mins
              </span>
              <span>average time per section in MNC tests</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">15-25</span>
              <span>questions per section typically</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">70%+</span>
              <span>cutoff score for most MNCs</span>
            </div>
          </div>
        </div>

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
                Practice daily - solve 20-30 aptitude questions every day for
                2-3 months
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Time management is crucial - learn to solve problems quickly
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Focus on accuracy over speed initially, then improve speed
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Use our{' '}
                <Link
                  href="/tools/aptitude-test"
                  className="text-primary hover:underline"
                >
                  Aptitude Test tool
                </Link>{' '}
                for practice
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Revise formulas daily - create a formula sheet</span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            Aptitude tests are the gatekeepers to MNC jobs. Companies like TCS,
            Infosys, Wipro, Accenture, and Cognizant use aptitude tests as the
            first screening round.{' '}
            <strong>60-70% of candidates are eliminated</strong> in this round
            alone. But with the right preparation strategy, you can clear these
            tests confidently.
          </p>
          <p>
            This guide covers everything you need to know about MNC aptitude
            tests: test patterns, question types, preparation strategies, time
            management, and proven tips from students who cleared top MNC tests.
          </p>
        </section>

        {/* Section 1: Understanding MNC Aptitude Tests */}
        <section
          id="understanding"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            1. Understanding MNC Aptitude Tests
          </h2>

          <h3>What Are Aptitude Tests?</h3>
          <p>
            Aptitude tests assess your ability to solve problems, think
            logically, and work with numbers. MNCs use these tests to filter
            candidates before investing time in technical interviews. The tests
            are typically online, timed, and cover three main areas:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="mb-2 flex items-center gap-2 font-bold">
                <Calculator className="h-5 w-5 text-blue-600" />
                Quantitative Aptitude
              </h4>
              <p className="text-sm text-muted-foreground">
                Numbers, percentages, ratios, time & work, profit & loss,
                geometry, algebra
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <h4 className="mb-2 flex items-center gap-2 font-bold">
                <Brain className="h-5 w-5 text-green-600" />
                Logical Reasoning
              </h4>
              <p className="text-sm text-muted-foreground">
                Puzzles, sequences, coding-decoding, blood relations,
                syllogisms, arrangements
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
              <h4 className="mb-2 flex items-center gap-2 font-bold">
                <BookOpen className="h-5 w-5 text-purple-600" />
                Verbal Ability
              </h4>
              <p className="text-sm text-muted-foreground">
                Reading comprehension, grammar, vocabulary, sentence correction,
                para jumbles
              </p>
            </div>
          </div>

          <h3>Common MNC Aptitude Tests</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Company</th>
                  <th className="border p-3 text-left">Test Name</th>
                  <th className="border p-3 text-left">Duration</th>
                  <th className="border p-3 text-left">Sections</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">TCS</td>
                  <td className="border p-3">TCS NQT</td>
                  <td className="border p-3">150 mins</td>
                  <td className="border p-3">
                    Verbal, Quants, Programming Logic, Coding
                  </td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Infosys</td>
                  <td className="border p-3">InfyTQ</td>
                  <td className="border p-3">120 mins</td>
                  <td className="border p-3">Aptitude, Pseudocode, Coding</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Wipro</td>
                  <td className="border p-3">Elite NLTH</td>
                  <td className="border p-3">120 mins</td>
                  <td className="border p-3">
                    English, Quants, Logical, Coding
                  </td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Accenture</td>
                  <td className="border p-3">Cognitive Assessment</td>
                  <td className="border p-3">90 mins</td>
                  <td className="border p-3">
                    Cognitive, Technical MCQs, Coding
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Cognizant</td>
                  <td className="border p-3">Online Test</td>
                  <td className="border p-3">100 mins</td>
                  <td className="border p-3">
                    Aptitude, Logical, Verbal, Coding
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Quantitative Aptitude Preparation */}
        <section
          id="quantitative"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-primary" />
            2. Quantitative Aptitude Preparation
          </h2>

          <h3>Important Topics</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-muted/50 p-4">
              <h4 className="mb-2 font-semibold">High Priority Topics</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Percentages and Profit & Loss</li>
                <li>Ratio and Proportion</li>
                <li>Time, Speed & Distance</li>
                <li>Time & Work</li>
                <li>Number System</li>
                <li>Simple & Compound Interest</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <h4 className="mb-2 font-semibold">Medium Priority Topics</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Geometry (Triangles, Circles)</li>
                <li>Algebra (Equations, Inequalities)</li>
                <li>Permutations & Combinations</li>
                <li>Probability</li>
                <li>Mensuration</li>
                <li>Data Interpretation</li>
              </ul>
            </div>
          </div>

          <h3>Preparation Strategy</h3>
          <ol>
            <li>
              <strong>Learn Formulas:</strong> Create a formula sheet with all
              important formulas. Revise daily.
            </li>
            <li>
              <strong>Practice Daily:</strong> Solve 20-30 questions daily.
              Start with easy, then move to medium difficulty.
            </li>
            <li>
              <strong>Time Yourself:</strong> Initially focus on accuracy, then
              improve speed. Target: 1-2 minutes per question.
            </li>
            <li>
              <strong>Identify Patterns:</strong> Many questions follow similar
              patterns. Recognize them quickly.
            </li>
            <li>
              <strong>Use Shortcuts:</strong> Learn mental math tricks and
              calculation shortcuts.
            </li>
          </ol>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Practice with our{' '}
              <Link
                href="/tools/aptitude-test"
                className="font-semibold text-primary hover:underline"
              >
                Aptitude Test tool
              </Link>{' '}
              and download{' '}
              <Link
                href="/resources/aptitude-formulas"
                className="font-semibold text-primary hover:underline"
              >
                Aptitude Formulas PDF
              </Link>{' '}
              for quick revision.
            </p>
          </div>
        </section>

        {/* Section 3: Logical Reasoning Preparation */}
        <section
          id="logical"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            3. Logical Reasoning Preparation
          </h2>

          <h3>Important Topics</h3>
          <ul>
            <li>
              <strong>Puzzles:</strong> Seating arrangements, floor puzzles, box
              puzzles
            </li>
            <li>
              <strong>Sequences:</strong> Number series, letter series, pattern
              recognition
            </li>
            <li>
              <strong>Coding-Decoding:</strong> Letter coding, number coding,
              symbol coding
            </li>
            <li>
              <strong>Blood Relations:</strong> Family tree problems
            </li>
            <li>
              <strong>Syllogisms:</strong> Logical deductions
            </li>
            <li>
              <strong>Direction Sense:</strong> Direction and distance problems
            </li>
          </ul>

          <h3>Preparation Tips</h3>
          <ul>
            <li>Practice puzzles daily - they improve logical thinking</li>
            <li>Learn to draw diagrams for arrangement problems</li>
            <li>Practice coding-decoding patterns</li>
            <li>Solve previous year papers</li>
            <li>Time yourself - logical reasoning can be time-consuming</li>
          </ul>
        </section>

        {/* Section 4: Verbal Ability Preparation */}
        <section
          id="verbal"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            4. Verbal Ability Preparation
          </h2>

          <h3>Important Topics</h3>
          <ul>
            <li>
              <strong>Reading Comprehension:</strong> Practice reading passages
              and answering questions
            </li>
            <li>
              <strong>Grammar:</strong> Subject-verb agreement, tenses,
              prepositions
            </li>
            <li>
              <strong>Vocabulary:</strong> Synonyms, antonyms, word meanings
            </li>
            <li>
              <strong>Sentence Correction:</strong> Identify and correct errors
            </li>
            <li>
              <strong>Para Jumbles:</strong> Rearrange sentences logically
            </li>
          </ul>

          <h3>Preparation Tips</h3>
          <ul>
            <li>
              Read daily - newspapers, articles, blogs to improve comprehension
            </li>
            <li>Learn common grammar rules</li>
            <li>Build vocabulary - learn 10-15 new words daily</li>
            <li>Practice para jumbles - identify connecting words</li>
            <li>Time management - reading comprehension takes time</li>
          </ul>
        </section>

        {/* Section 5: Time Management Strategy */}
        <section
          id="time-management"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            5. Time Management Strategy
          </h2>

          <p>
            Time management is crucial in aptitude tests. Most candidates fail
            not because they don't know the answers, but because they run out of
            time.
          </p>

          <h3>Time Allocation Strategy</h3>
          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>First 5 minutes:</strong> Scan all questions, identify
                easy ones
              </li>
              <li>
                <strong>Next 15 minutes:</strong> Solve easy questions first
                (build confidence and score)
              </li>
              <li>
                <strong>Next 10 minutes:</strong> Attempt medium difficulty
                questions
              </li>
              <li>
                <strong>Last 5 minutes:</strong> Review and attempt remaining
                questions
              </li>
            </ul>
          </div>

          <h3>Time Management Tips</h3>
          <ul>
            <li>Don't spend more than 2 minutes on any question initially</li>
            <li>Mark difficult questions and come back later</li>
            <li>Use elimination method for MCQs</li>
            <li>Practice with time limits - simulate real test conditions</li>
            <li>Keep 5 minutes for review at the end</li>
          </ul>
        </section>

        {/* Section 6: Common Mistakes to Avoid */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            6. Common Mistakes to Avoid
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 1: Not Reading Instructions Carefully
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Many students lose marks due to misunderstanding questions. Read
                each question twice before solving.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 2: Spending Too Much Time on One Question
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                If stuck, move to next question. You can always come back. Time
                is limited.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 3: Not Practicing Enough</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Practice is key. Solve at least 500-1000 questions before the
                test.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 4: Ignoring Weak Areas</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Identify weak topics and practice them more. Don't avoid
                difficult topics.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 5: Not Revising Formulas</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Revise formulas daily. Create a quick reference sheet for
                last-minute revision.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: 30-Day Preparation Plan */}
        <section
          id="preparation-plan"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            7. 30-Day Preparation Plan
          </h2>

          <div className="my-6 space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <h3 className="mb-2 font-bold">Days 1-10: Foundation Building</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Learn all formulas and concepts</li>
                <li>Solve 20-30 easy questions daily</li>
                <li>Focus on accuracy, not speed</li>
                <li>Create formula sheet</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <h3 className="mb-2 font-bold">Days 11-20: Practice & Speed</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Solve 30-40 medium difficulty questions daily</li>
                <li>Start timing yourself</li>
                <li>Identify weak areas and focus on them</li>
                <li>Take mock tests weekly</li>
              </ul>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
              <h3 className="mb-2 font-bold">
                Days 21-30: Mock Tests & Revision
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Take 2-3 mock tests per week</li>
                <li>Analyze mistakes and improve</li>
                <li>Revise formulas daily</li>
                <li>Solve previous year papers</li>
                <li>Focus on time management</li>
              </ul>
            </div>
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
                What is the minimum score required to clear MNC aptitude tests?
              </p>
              <p className="mt-2 text-muted-foreground">
                Most MNCs require 70%+ overall score. However, some companies
                have sectional cutoffs. Check specific company requirements. TCS
                NQT typically requires 60%+, while product companies may have
                higher cutoffs.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How long should I prepare for aptitude tests?
              </p>
              <p className="mt-2 text-muted-foreground">
                Minimum 2-3 months of daily practice (1-2 hours daily) is
                recommended. If you're weak in basics, start 4-6 months before.
                Consistency is more important than duration.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I use a calculator in aptitude tests?
              </p>
              <p className="mt-2 text-muted-foreground">
                No, most MNC aptitude tests don't allow calculators. You need to
                do mental math. Practice calculations without calculator to
                improve speed.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What if I'm weak in quantitative aptitude?
              </p>
              <p className="mt-2 text-muted-foreground">
                Start with basics - learn formulas, practice easy questions
                first. Focus on high-weightage topics like percentages, ratios,
                time & work. Use our{' '}
                <Link
                  href="/tools/aptitude-test"
                  className="text-primary hover:underline"
                >
                  Aptitude Test tool
                </Link>{' '}
                for practice.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How many questions should I attempt in the test?
              </p>
              <p className="mt-2 text-muted-foreground">
                Quality over quantity. Attempt 70-80% of questions with high
                accuracy rather than attempting all with low accuracy. Most MNCs
                have negative marking, so be careful.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Your Preparation Today</h2>
          <p>
            Aptitude tests are your first step towards an MNC job. With
            consistent practice, proper strategy, and time management, you can
            clear these tests confidently. Remember, practice makes perfect.
          </p>
          <p className="text-lg font-semibold text-primary">
            Start practicing today with our{' '}
            <Link
              href="/tools/aptitude-test"
              className="hover:underline"
            >
              Aptitude Test tool
            </Link>{' '}
            and download{' '}
            <Link
              href="/resources/aptitude-formulas"
              className="hover:underline"
            >
              Aptitude Formulas PDF
            </Link>{' '}
            for quick reference. Good luck! 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/companies/mnc-placement-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Complete MNC Placement Guide
            </Link>
            <Link
              href="/blog/technical-interview-preparation"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Technical Interview Preparation
            </Link>
            <Link
              href="/tools/aptitude-test"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Practice Aptitude Test
            </Link>
            <Link
              href="/resources/aptitude-formulas"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Download Aptitude Formulas
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
                Based on insights from 10,000+ students who cleared MNC aptitude
                tests and feedback from hiring managers.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
