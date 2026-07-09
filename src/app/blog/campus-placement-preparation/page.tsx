import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Users,
  Target,
  Briefcase,
  Code,
  MessageSquare,
  FileText,
  AlertCircle,
  Star,
  Zap,
  Brain,
  Award,
  Timer,
  BarChart2,
  CheckSquare,
  Mic,
  UserCheck,
  Building,
  DollarSign,
  Laptop,
  PenTool,
} from 'lucide-react';
import Link from 'next/link';
import { RelatedArticles } from '@/components/blog/related-articles';

export const metadata: Metadata = {
  title: 'Campus Placement Preparation: 3 Month Strategy',
  description:
    'Complete roadmap to crack campus placements. Master aptitude, coding, group discussions, and interviews with our structured 3-month preparation strategy.',
  keywords: [
    'campus placement',
    'placement preparation',
    'placement aptitude',
    'placement coding',
    'group discussion',
    'HR interview',
    'technical interview',
    'placement season',
    'on-campus placement',
    'off-campus placement',
  ],
  openGraph: {
    title: 'Campus Placement Preparation: 3 Month Strategy',
    description: 'Your complete guide to landing your dream job.',
    type: 'article',
    publishedTime: '2025-12-24T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-orange-600">
            <Briefcase className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Campus Placement Preparation: 3 Month Strategy
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            A structured, comprehensive roadmap to crack campus placements.
            Master every stage from aptitude to final interviews and land your
            dream job.
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

        {/* Introduction */}
        <section className="mb-10">
          <p>
            Campus placements are a defining moment in every engineering and
            management student&apos;s journey. These few months determine not
            just your first job, but often influence your career trajectory for
            years to come.
          </p>
          <p>
            The competition is intense—hundreds of students competing for
            limited positions at top companies like Google, Microsoft, Amazon,
            Goldman Sachs, McKinsey, and others. But with the right preparation
            strategy, you can stand out from the crowd and secure multiple
            offers.
          </p>
          <p>
            This guide provides a complete 3-month preparation strategy covering
            every aspect of campus placements: aptitude rounds, coding tests,
            group discussions, technical interviews, and HR rounds. Whether
            you&apos;re targeting product companies, service companies, or
            consulting firms, this roadmap will help you prepare systematically.
          </p>
          <p>
            The key to placement success isn&apos;t just ability—it&apos;s
            preparation and presentation. Let&apos;s build both.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#overview"
                className="text-primary hover:underline"
              >
                1. Placement Process Overview
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-primary hover:underline"
              >
                2. 3-Month Timeline
              </a>
            </li>
            <li>
              <a
                href="#aptitude"
                className="text-primary hover:underline"
              >
                3. Aptitude Preparation
              </a>
            </li>
            <li>
              <a
                href="#coding"
                className="text-primary hover:underline"
              >
                4. Coding & DSA
              </a>
            </li>
            <li>
              <a
                href="#technical"
                className="text-primary hover:underline"
              >
                5. Technical Interviews
              </a>
            </li>
            <li>
              <a
                href="#gd"
                className="text-primary hover:underline"
              >
                6. Group Discussions
              </a>
            </li>
            <li>
              <a
                href="#hr"
                className="text-primary hover:underline"
              >
                7. HR Interviews
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-primary hover:underline"
              >
                8. Resume & Profile
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                9. Company-Specific Prep
              </a>
            </li>
            <li>
              <a
                href="#mock"
                className="text-primary hover:underline"
              >
                10. Mock Interviews
              </a>
            </li>
            <li>
              <a
                href="#stress"
                className="text-primary hover:underline"
              >
                11. Mental Resilience
              </a>
            </li>
            <li>
              <a
                href="#offers"
                className="text-primary hover:underline"
              >
                12. Handling Offers
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                13. FAQs
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
                Start preparation at least 3 months before placement season
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Solve 200-300 DSA problems with focus on understanding patterns
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Practice aptitude daily—speed and accuracy matter equally
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Mock interviews are essential—practice with peers and seniors
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Your resume should highlight projects with measurable impact
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Research each company&apos;s interview pattern before appearing
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Overview */}
        <section
          id="overview"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Placement Process Overview
          </h2>

          <p>
            Most campus placements follow a multi-stage selection process.
            Understanding each stage helps you prepare systematically.
          </p>

          <h3>Typical Placement Stages</h3>
          <ol>
            <li>
              <strong>Resume Shortlisting:</strong> Companies filter candidates
              based on CGPA, backlogs, and resume quality
            </li>
            <li>
              <strong>Aptitude/Online Test:</strong> Tests quantitative,
              logical, verbal abilities (sometimes coding)
            </li>
            <li>
              <strong>Coding Round:</strong> 2-3 DSA problems to be solved in
              60-90 minutes
            </li>
            <li>
              <strong>Technical Interview (1-3 rounds):</strong> DSA, projects,
              CS fundamentals
            </li>
            <li>
              <strong>Group Discussion:</strong> Assess communication,
              leadership, team skills
            </li>
            <li>
              <strong>HR Interview:</strong> Cultural fit, behavioral questions,
              salary negotiation
            </li>
          </ol>

          <h3>Company Categories</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Examples</th>
                  <th className="p-3 text-left">Focus Areas</th>
                  <th className="p-3 text-left">Package Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Product (Tier 1)</td>
                  <td className="p-3">Google, Microsoft, Amazon, Meta</td>
                  <td className="p-3">DSA, System Design, Problem Solving</td>
                  <td className="p-3">₹25-60+ LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Product (Tier 2)</td>
                  <td className="p-3">Flipkart, Uber, Atlassian, Intuit</td>
                  <td className="p-3">DSA, CS Fundamentals</td>
                  <td className="p-3">₹15-35 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Finance/Consulting</td>
                  <td className="p-3">
                    Goldman Sachs, Morgan Stanley, McKinsey
                  </td>
                  <td className="p-3">Aptitude, Puzzles, Case Studies</td>
                  <td className="p-3">₹20-50+ LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Service/IT</td>
                  <td className="p-3">TCS, Infosys, Wipro, Cognizant</td>
                  <td className="p-3">Aptitude, Basic Coding, Communication</td>
                  <td className="p-3">₹3.5-8 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Startups</td>
                  <td className="p-3">Various funded startups</td>
                  <td className="p-3">Practical skills, Culture fit</td>
                  <td className="p-3">₹8-30+ LPA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Strategy:</strong> Identify your target company category
              early. Product companies need stronger DSA; service companies
              focus more on aptitude and communication. Prepare accordingly.
            </div>
          </div>
        </section>

        {/* Section 2: Timeline */}
        <section
          id="timeline"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Timer className="h-6 w-6 text-primary" />
            2. 3-Month Preparation Timeline
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-green-500 py-3 pl-4">
              <p className="font-bold">Month 1: Foundation Building</p>
              <p className="mb-2 text-muted-foreground">
                Focus: DSA basics, aptitude fundamentals, resume preparation
              </p>
              <ul className="list-disc pl-4 text-muted-foreground">
                <li>Week 1-2: Arrays, Strings, Basic Math, Time Complexity</li>
                <li>Week 3: LinkedList, Stack, Queue</li>
                <li>Week 4: Trees, Basic Recursion</li>
                <li>Daily: 30 min aptitude (quant + logical + verbal)</li>
                <li>Project: Start working on your resume</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-500 py-3 pl-4">
              <p className="font-bold">Month 2: Core Preparation</p>
              <p className="mb-2 text-muted-foreground">
                Focus: Advanced DSA, CS fundamentals, mock interviews
              </p>
              <ul className="list-disc pl-4 text-muted-foreground">
                <li>Week 1: Graphs (BFS, DFS, Shortest Path)</li>
                <li>Week 2: Dynamic Programming patterns</li>
                <li>Week 3: System Design basics, OS, DBMS</li>
                <li>Week 4: OOPs, CN basics, revision</li>
                <li>Start mock technical interviews with peers</li>
                <li>Continue daily aptitude practice</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-500 py-3 pl-4">
              <p className="font-bold">Month 3: Intensive Practice</p>
              <p className="mb-2 text-muted-foreground">
                Focus: Company-specific prep, mock tests, interview practice
              </p>
              <ul className="list-disc pl-4 text-muted-foreground">
                <li>
                  Week 1-2: Solve company-specific previous year questions
                </li>
                <li>Week 3: Full mock placement tests + interviews</li>
                <li>Week 4: Light revision, rest, confidence building</li>
                <li>Daily: 2-3 GD practice sessions</li>
                <li>Practice HR questions and STAR method answers</li>
              </ul>
            </div>
          </div>

          <h3>Daily Schedule During Placement Prep</h3>
          <ul>
            <li>
              <strong>Morning (2 hrs):</strong> DSA practice - solve 2-3
              problems
            </li>
            <li>
              <strong>Afternoon (1 hr):</strong> Aptitude practice
            </li>
            <li>
              <strong>Evening (2 hrs):</strong> CS fundamentals / Projects
            </li>
            <li>
              <strong>Night (1 hr):</strong> Mock interview prep / GD topics
            </li>
          </ul>
        </section>

        {/* Section 3: Aptitude */}
        <section
          id="aptitude"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            3. Aptitude Preparation
          </h2>

          <p>
            Aptitude tests are the first filter—clear this, and you&apos;re in
            the game. Most companies use aptitude to shortlist from hundreds to
            tens of candidates.
          </p>

          <h3>Aptitude Components</h3>

          <h4>Quantitative Aptitude (Most Important)</h4>
          <ul>
            <li>
              <strong>Arithmetic:</strong> Percentage, Profit/Loss, SI/CI,
              Ratio, Time-Speed-Distance, Time-Work
            </li>
            <li>
              <strong>Algebra:</strong> Equations, Progressions (AP, GP)
            </li>
            <li>
              <strong>Geometry:</strong> Areas, Volumes, Coordinate Geometry
            </li>
            <li>
              <strong>Number System:</strong> HCF/LCM, Divisibility, Remainders
            </li>
            <li>
              <strong>Permutation &amp; Combination:</strong> Basic counting,
              Probability
            </li>
          </ul>

          <h4>Logical Reasoning</h4>
          <ul>
            <li>Blood Relations, Seating Arrangements, Syllogisms</li>
            <li>Series (Number, Letter, Figure)</li>
            <li>Coding-Decoding, Direction Sense</li>
            <li>Puzzles, Statements &amp; Assumptions</li>
            <li>Data Interpretation (Charts, Tables)</li>
          </ul>

          <h4>Verbal Ability</h4>
          <ul>
            <li>Reading Comprehension (RC)</li>
            <li>Grammar (Error Spotting, Sentence Correction)</li>
            <li>Vocabulary (Synonyms, Antonyms, Analogies)</li>
            <li>Para Jumbles, Cloze Test</li>
          </ul>

          <h3>Aptitude Preparation Strategy</h3>
          <ol>
            <li>Learn concepts and shortcuts for each topic</li>
            <li>Practice topic-wise for first few weeks</li>
            <li>Then practice mixed tests under timed conditions</li>
            <li>Focus on speed—most tests are time-constrained</li>
            <li>Identify weak areas and allocate more time</li>
          </ol>

          <h3>Resources</h3>
          <ul>
            <li>
              <strong>Books:</strong> RS Aggarwal, Arun Sharma
            </li>
            <li>
              <strong>Websites:</strong> IndiaBIX, PrepInsta, GeeksforGeeks
            </li>
            <li>
              <strong>Apps:</strong> Testbook, AMCAT prep, Unacademy
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <BarChart2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Time Target:</strong> Most aptitude tests give 45-60
              seconds per question. Practice solving questions in under 1
              minute. Speed comes from pattern recognition, not faster
              calculations.
            </div>
          </div>
        </section>

        {/* Section 4: Coding */}
        <section
          id="coding"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            4. Coding &amp; DSA Preparation
          </h2>

          <p>
            For product companies, coding rounds are the most critical filter.
            Master DSA patterns and you&apos;ll crack most coding interviews.
          </p>

          <h3>Essential DSA Topics</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Topic</th>
                  <th className="p-3 text-left">Priority</th>
                  <th className="p-3 text-left">Problems to Solve</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Arrays &amp; Strings</td>
                  <td className="p-3 font-medium text-red-600">Very High</td>
                  <td className="p-3">40-50</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">LinkedList</td>
                  <td className="p-3">High</td>
                  <td className="p-3">15-20</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Stack &amp; Queue</td>
                  <td className="p-3">High</td>
                  <td className="p-3">15-20</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Trees (Binary, BST)</td>
                  <td className="p-3 font-medium text-red-600">Very High</td>
                  <td className="p-3">30-40</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Graphs</td>
                  <td className="p-3 font-medium text-red-600">Very High</td>
                  <td className="p-3">25-35</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Dynamic Programming</td>
                  <td className="p-3 font-medium text-red-600">Very High</td>
                  <td className="p-3">40-50</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Recursion/Backtracking</td>
                  <td className="p-3">High</td>
                  <td className="p-3">20-25</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Binary Search</td>
                  <td className="p-3">High</td>
                  <td className="p-3">15-20</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Heap/Priority Queue</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">10-15</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Tries, Segment Trees</td>
                  <td className="p-3">Low (for advanced)</td>
                  <td className="p-3">5-10</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>DSA Preparation Strategy</h3>
          <ol>
            <li>
              <strong>Understand, don&apos;t memorize:</strong> Focus on
              understanding patterns, not solutions
            </li>
            <li>
              <strong>Code everything:</strong> Don&apos;t just read—write and
              run code
            </li>
            <li>
              <strong>Time yourself:</strong> Practice solving under time
              constraints
            </li>
            <li>
              <strong>Review solutions:</strong> After solving, study optimal
              approaches
            </li>
            <li>
              <strong>Revise regularly:</strong> Return to solved problems
              weekly
            </li>
          </ol>

          <h3>Resources</h3>
          <ul>
            <li>
              <strong>Platforms:</strong> LeetCode (primary), GeeksforGeeks,
              InterviewBit
            </li>
            <li>
              <strong>Sheets:</strong> Striver&apos;s SDE Sheet, NeetCode 150,
              Love Babbar Sheet
            </li>
            <li>
              <strong>Courses:</strong> Striver A2Z DSA, Abdul Bari (YouTube),
              Aditya Verma (DP)
            </li>
          </ul>

          <h3>During the Coding Round</h3>
          <ul>
            <li>Read the problem completely before coding</li>
            <li>Think of edge cases upfront</li>
            <li>Start with brute force, then optimize if time permits</li>
            <li>Write clean, readable code</li>
            <li>Test with sample inputs before submitting</li>
            <li>Don&apos;t spend more than 20-25 min on one problem</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Quality Over Quantity:</strong> 200 well-understood
              problems are better than 500 problems you just copied solutions
              for. Focus on understanding patterns and approaches.
            </div>
          </div>
        </section>

        {/* Section 5: Technical */}
        <section
          id="technical"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Laptop className="h-6 w-6 text-primary" />
            5. Technical Interviews
          </h2>

          <p>
            Technical interviews assess your problem-solving ability, CS
            fundamentals, and communication skills. They typically involve 1-3
            rounds.
          </p>

          <h3>What to Expect</h3>
          <ul>
            <li>
              <strong>DSA Problem Solving:</strong> Solve 1-2 problems on
              whiteboard/shared screen
            </li>
            <li>
              <strong>Project Discussion:</strong> Deep dive into your projects,
              tech choices, challenges
            </li>
            <li>
              <strong>CS Fundamentals:</strong> OS, DBMS, OOPs, CN (varies by
              company)
            </li>
            <li>
              <strong>System Design:</strong> For experienced roles (basic for
              freshers)
            </li>
          </ul>

          <h3>CS Fundamentals to Cover</h3>

          <h4>Operating Systems</h4>
          <ul>
            <li>Process vs Thread, Context Switching</li>
            <li>Process Synchronization (Mutex, Semaphore, Deadlock)</li>
            <li>Memory Management (Paging, Segmentation, Virtual Memory)</li>
            <li>CPU Scheduling Algorithms</li>
          </ul>

          <h4>Database Management Systems</h4>
          <ul>
            <li>ACID Properties, Normalization</li>
            <li>Indexing, Joins, Transactions</li>
            <li>SQL queries (practice writing)</li>
            <li>NoSQL basics (Mongo, Redis use cases)</li>
          </ul>

          <h4>Object-Oriented Programming</h4>
          <ul>
            <li>
              Four pillars: Encapsulation, Abstraction, Inheritance,
              Polymorphism
            </li>
            <li>Design patterns (Singleton, Factory, Observer)</li>
            <li>SOLID principles</li>
          </ul>

          <h4>Computer Networks</h4>
          <ul>
            <li>OSI/TCP-IP model layers</li>
            <li>HTTP/HTTPS, TCP/UDP</li>
            <li>DNS resolution, IP addressing</li>
            <li>Sockets basics</li>
          </ul>

          <h3>Interview Tips</h3>
          <ul>
            <li>
              <strong>Think aloud:</strong> Communicate your thought process
            </li>
            <li>
              <strong>Ask clarifying questions:</strong> Don&apos;t
              assume—clarify constraints
            </li>
            <li>
              <strong>Start simple:</strong> Brute force first, then optimize
            </li>
            <li>
              <strong>Handle hints gracefully:</strong> Incorporate feedback
              smoothly
            </li>
            <li>
              <strong>Be honest:</strong> Don&apos;t bluff if you don&apos;t
              know something
            </li>
            <li>
              <strong>Know your resume:</strong> Everything listed should be
              explainable
            </li>
          </ul>
        </section>

        {/* Section 6: GD */}
        <section
          id="gd"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            6. Group Discussions
          </h2>

          <p>
            Group Discussions test communication, leadership, team skills, and
            the ability to present ideas coherently under pressure.
          </p>

          <h3>GD Format</h3>
          <ul>
            <li>8-12 participants, 15-20 minute discussion</li>
            <li>Topic given, 2-3 minutes thinking time</li>
            <li>No moderator—group self-manages</li>
            <li>Panelists observe and evaluate</li>
          </ul>

          <h3>Common Topic Categories</h3>
          <ul>
            <li>
              <strong>Current Affairs:</strong> Technology, economy, politics,
              social issues
            </li>
            <li>
              <strong>Abstract:</strong> &quot;Is the glass half empty or half
              full?&quot;
            </li>
            <li>
              <strong>Case Study:</strong> Analyze a business scenario
            </li>
            <li>
              <strong>Controversial:</strong> Topics with no clear right answer
            </li>
          </ul>

          <h3>What Evaluators Look For</h3>
          <ul>
            <li>
              <strong>Content:</strong> Quality of ideas, examples, logic
            </li>
            <li>
              <strong>Communication:</strong> Clarity, fluency, confidence
            </li>
            <li>
              <strong>Body Language:</strong> Eye contact, posture, gestures
            </li>
            <li>
              <strong>Leadership:</strong> Initiative, steering discussion,
              building on others
            </li>
            <li>
              <strong>Team Player:</strong> Listening, acknowledging
              others&apos; points
            </li>
          </ul>

          <h3>GD Do&apos;s</h3>
          <ul>
            <li>✅ Enter early with a strong opening point</li>
            <li>✅ Support your points with examples and data</li>
            <li>
              ✅ Build on others&apos; points (&quot;Adding to what Priya
              said...&quot;)
            </li>
            <li>✅ Summarize if discussion is scattered</li>
            <li>✅ Maintain positive body language throughout</li>
            <li>✅ Listen actively when not speaking</li>
          </ul>

          <h3>GD Don&apos;ts</h3>
          <ul>
            <li>❌ Don&apos;t interrupt or shout over others</li>
            <li>❌ Don&apos;t stay silent for too long</li>
            <li>❌ Don&apos;t get aggressive in disagreements</li>
            <li>❌ Don&apos;t repeat the same point multiple times</li>
            <li>❌ Don&apos;t bring up unrelated tangents</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Mic className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Practice Tip:</strong> Form GD groups with classmates.
              Practice 2-3 GDs daily in the final month. Record and review your
              performance to identify improvement areas.
            </div>
          </div>
        </section>

        {/* Section 7: HR */}
        <section
          id="hr"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <UserCheck className="h-6 w-6 text-primary" />
            7. HR Interviews
          </h2>

          <p>
            HR rounds assess cultural fit, attitude, communication, and
            long-term potential. Many candidates fail here after clearing all
            technical rounds—don&apos;t take it lightly.
          </p>

          <h3>Common HR Questions &amp; Approaches</h3>

          <h4>&quot;Tell me about yourself&quot;</h4>
          <p>
            Structure: Present → Past → Future. Briefly cover current status,
            relevant background, and future aspirations. Keep it 60-90 seconds.
          </p>

          <h4>&quot;Why do you want to join our company?&quot;</h4>
          <p>
            Research the company. Mention specific products, culture, values, or
            recent news. Show genuine interest, not generic answers.
          </p>

          <h4>&quot;What are your strengths and weaknesses?&quot;</h4>
          <p>
            Strengths: Give examples that demonstrate the strength. Weaknesses:
            Be honest, but show what you&apos;re doing to improve.
          </p>

          <h4>&quot;Where do you see yourself in 5 years?&quot;</h4>
          <p>
            Show ambition but also commitment. Balance growth aspirations with
            realistic expectations. Avoid saying you want the CEO&apos;s job.
          </p>

          <h4>Behavioral Questions (STAR Method)</h4>
          <p>
            For questions like &quot;Tell me about a time when...&quot;, use
            STAR:
          </p>
          <ul>
            <li>
              <strong>Situation:</strong> Set the context
            </li>
            <li>
              <strong>Task:</strong> What was your responsibility?
            </li>
            <li>
              <strong>Action:</strong> What did you do specifically?
            </li>
            <li>
              <strong>Result:</strong> What was the outcome? Quantify if
              possible.
            </li>
          </ul>

          <h3>Questions to Ask the Interviewer</h3>
          <p>Always have 2-3 thoughtful questions ready:</p>
          <ul>
            <li>What does a typical day look like for this role?</li>
            <li>How do you measure success for someone in this position?</li>
            <li>What are the growth opportunities within the team?</li>
            <li>Can you tell me about the team I&apos;d be working with?</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Common Mistake:</strong> Being negative about previous
              experiences, colleges, or professors. Stay positive even when
              discussing challenges. Focus on learnings, not complaints.
            </div>
          </div>
        </section>

        {/* Section 8: Resume */}
        <section
          id="resume"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            8. Resume &amp; Profile Building
          </h2>

          <p>
            Your resume is your first impression. It determines whether you get
            shortlisted and shapes interview conversations.
          </p>

          <h3>Resume Structure</h3>
          <ol>
            <li>
              <strong>Header:</strong> Name, Email, Phone, LinkedIn, GitHub
            </li>
            <li>
              <strong>Education:</strong> Degree, College, CGPA, Year
            </li>
            <li>
              <strong>Experience:</strong> Internships with impact metrics
            </li>
            <li>
              <strong>Projects:</strong> 2-3 significant projects with tech
              stack
            </li>
            <li>
              <strong>Skills:</strong> Languages, frameworks, tools
            </li>
            <li>
              <strong>Achievements:</strong> Competitions, certifications,
              publications
            </li>
          </ol>

          <h3>Resume Tips</h3>
          <ul>
            <li>
              <strong>One page only:</strong> Unless you have 5+ years
              experience
            </li>
            <li>
              <strong>Quantify impact:</strong> &quot;Improved X by 30%&quot;
              not &quot;Worked on X&quot;
            </li>
            <li>
              <strong>Use action verbs:</strong> Designed, Implemented,
              Optimized, Led
            </li>
            <li>
              <strong>Tailor for role:</strong> Highlight relevant skills for
              target companies
            </li>
            <li>
              <strong>Proofread:</strong> No typos or grammatical errors
            </li>
            <li>
              <strong>ATS-friendly:</strong> Simple formatting, standard fonts
            </li>
          </ul>

          <h3>Project Presentation</h3>
          <p>For each project, be prepared to discuss:</p>
          <ul>
            <li>Problem it solves and motivation</li>
            <li>Tech stack and why you chose it</li>
            <li>Your specific contribution (especially for team projects)</li>
            <li>Challenges faced and how you overcame them</li>
            <li>Future improvements you would make</li>
          </ul>

          <h3>Online Presence</h3>
          <ul>
            <li>
              <strong>LinkedIn:</strong> Updated, professional photo,
              connections
            </li>
            <li>
              <strong>GitHub:</strong> Clean repos, good READMEs, regular
              activity
            </li>
            <li>
              <strong>Portfolio:</strong> Optional but impressive for developers
            </li>
          </ul>
        </section>

        {/* Section 9: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            9. Company-Specific Preparation
          </h2>

          <p>
            Different companies have different interview patterns. Research your
            target companies thoroughly.
          </p>

          <h3>Product Companies (Google, Microsoft, Amazon)</h3>
          <ul>
            <li>Heavy DSA focus (LeetCode medium-hard level)</li>
            <li>System Design for experienced roles</li>
            <li>
              Behavioral questions (especially Amazon—Leadership Principles)
            </li>
            <li>2-4 technical interviews + 1 HR</li>
          </ul>

          <h3>Finance (Goldman Sachs, Morgan Stanley)</h3>
          <ul>
            <li>Quantitative aptitude (tough puzzles)</li>
            <li>DSA (medium level)</li>
            <li>CS fundamentals (OS, DBMS)</li>
            <li>Finance basics (optional but helpful)</li>
          </ul>

          <h3>Consulting (McKinsey, BCG, Bain)</h3>
          <ul>
            <li>Case interviews (practice structured problem solving)</li>
            <li>Behavioral and fit questions</li>
            <li>Group exercises/GDs</li>
            <li>Less technical, more analytical</li>
          </ul>

          <h3>Service Companies (TCS, Infosys, Wipro)</h3>
          <ul>
            <li>Aptitude tests (quant, logical, verbal)</li>
            <li>Basic coding (simpler problems)</li>
            <li>Communication skills important</li>
            <li>HR fit and attitude matter more</li>
          </ul>

          <h3>Research Resources</h3>
          <ul>
            <li>
              <strong>GeeksforGeeks:</strong> Company-specific archives
            </li>
            <li>
              <strong>LeetCode:</strong> Company tags for problems
            </li>
            <li>
              <strong>Glassdoor:</strong> Interview experiences
            </li>
            <li>
              <strong>College seniors:</strong> Direct insights
            </li>
          </ul>
        </section>

        {/* Section 10: Mock Interviews */}
        <section
          id="mock"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            10. Mastering Mock Interviews
          </h2>
          <p>
            Knowledge isn&apos;t enough; delivery matters. Mock interviews
            bridge the gap between knowing the answer and explaining it clearly.
          </p>
          <h3>How to Conduct Effective Mocks</h3>
          <ul>
            <li>
              <strong>Peer-to-Peer:</strong> Find a serious study partner.
              Alternate roles of interviewer and interviewee. Give honest,
              brutal feedback.
            </li>
            <li>
              <strong>Record Yourself:</strong> Use your phone or Zoom to record
              answers. Playback to spot &quot;ums&quot;, &quot;ahs&quot;, and
              poor body language.
            </li>
            <li>
              <strong>Simulate Pressure:</strong> Set a strict timer. Have the
              interviewer look stern or ask follow-up questions aggressively.
            </li>
            <li>
              <strong>Platform Mocks:</strong> Use Pramp or InterviewBit for
              free peer mocks with strangers to simulate real interview anxiety.
            </li>
          </ul>
          <h3>Checklist for Feedback</h3>
          <ul>
            <li>Did you clarify the question before solving?</li>
            <li>Did you think out loud?</li>
            <li>Was the code syntax correct on whiteboard/paper?</li>
            <li>Did you handle edge cases?</li>
          </ul>
        </section>

        {/* Section 11: Mental Resilience */}
        <section
          id="stress"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            11. Mental Resilience & Handling Rejection
          </h2>
          <p>
            Placement season is a marathon, not a sprint. Rejection is
            guaranteed part of the process. How you handle it determines your
            success.
          </p>
          <h3>Coping Strategies</h3>
          <ul>
            <li>
              <strong>The &quot;Next One&quot; Mentality:</strong> Give yourself
              1 hour to grieve a rejection, then focus entirely on the next
              company.
            </li>
            <li>
              <strong>Don&apos;t Compare:</strong> Your friend getting placed
              Day 1 doesn&apos;t mean you are failing. Everyone has a different
              timeline.
            </li>
            <li>
              <strong>Health First:</strong> Sleep and nutrition directly affect
              cognitive performance. Pulling all-nighters before interviews
              usually backfires.
            </li>
          </ul>
          <div className="my-4 flex gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <UserCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Success is Non-Linear:</strong> Many students fail 10
              interviews and crack the 11th one with the highest package.
              Consistency beats brilliance.
            </div>
          </div>
        </section>

        {/* Section 12: Offers */}
        <section
          id="offers"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            12. Handling Offers & Negotiation
          </h2>
          <p>
            The final stage! Dealing with job offers correctly is as important
            as getting them.
          </p>
          <h3>Evaluating an Offer</h3>
          <ul>
            <li>
              <strong>CTC vs In-Hand:</strong> Don&apos;t just look at the big
              number. Check the base salary, joining bonus, and stocks
              (ESOPs/RSUs).
            </li>
            <li>
              <strong>Role & Growth:</strong> A lower salary in a high-growth
              role (like SDE) is often better than a high salary in a support
              role.
            </li>
            <li>
              <strong>Bond/Service Agreement:</strong> Read the fine print.
              Avoid heavy bonds (2+ years) if possible.
            </li>
          </ul>
          <h3>Negotiation Tips for Freshers</h3>
          <ul>
            <li>
              <strong>Multiple Offers:</strong> Use a competing offer as
              leverage. &quot;I have an offer of X from Company B, can you match
              it?&quot;
            </li>
            <li>
              <strong>Be Professional:</strong> Never be arrogant. Express
              gratitude while asking for better terms.
            </li>
            <li>
              <strong>Standard Slabs:</strong> Note that many mass recruiters
              have standard slabs that cannot be negotiated.
            </li>
          </ul>
        </section>

        {/* Section 13: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            13. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                When should I start preparing for placements?
              </p>
              <p className="mt-2 text-muted-foreground">
                Ideally 3-6 months before placement season. If targeting tier-1
                product companies, 6 months is better. For service companies,
                2-3 months is sufficient if fundamentals are strong.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What CGPA do companies require?</p>
              <p className="mt-2 text-muted-foreground">
                Most companies require 6.0-6.5 minimum. Top product companies
                sometimes have 7.0-7.5 criteria. However, skills matter more
                than CGPA once you clear the cutoff.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How many DSA problems should I solve?</p>
              <p className="mt-2 text-muted-foreground">
                Quality over quantity. 200-300 well-understood problems covering
                major patterns are better than 500+ problems solved without
                understanding. Focus on patterns, not just answers.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if I don&apos;t have projects?</p>
              <p className="mt-2 text-muted-foreground">
                Start building! Even 2-3 months before placements, you can
                create meaningful projects. Focus on one solid project rather
                than many basic ones. Clone popular apps with your own features.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I join coaching classes?</p>
              <p className="mt-2 text-muted-foreground">
                Not necessary. Free resources (YouTube, LeetCode, GeeksforGeeks)
                are sufficient. Coaching helps with structure and
                accountability. Consider paid courses only if you struggle with
                self-study.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if I fail in placements?</p>
              <p className="mt-2 text-muted-foreground">
                Off-campus placements and direct applications are viable
                options. Many successful engineers got their first job
                off-campus. Keep practicing, networking, and applying.
                Persistence pays off.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Your Placement Journey Starts Now</h2>
          <p>
            Campus placements can feel overwhelming, but with systematic
            preparation, they become manageable. Thousands of students crack top
            companies every year—with the right strategy, you can too.
          </p>
          <p>
            Remember: preparation is 80% of the battle. The remaining 20% is
            confidence and execution on the day. Build both through consistent
            practice and mock sessions.
          </p>
          <p>
            Start today. Pick one topic, solve one problem, practice one
            question. Consistency over intensity wins in the long run.
          </p>
          <p className="text-lg font-semibold text-primary">
            Prepare well, stay confident, and land your dream job! 🎯💼🚀
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
              href="/blog/one-page-resume-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Writing Guide
            </Link>
            <Link
              href="/blog/communication-skills-workplace"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
            </Link>
            <Link
              href="/blog/competitive-exam-prep-engineering"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Competitive Exams Guide
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Score Checker
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Interview Experiences
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
                Guidance from placement coordinators, HR professionals, and
                recently placed students from top companies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>

        {/* Related Articles Component */}
        <RelatedArticles
          currentSlug="campus-placement-preparation"
          category="Interview Preparation"
          limit={4}
          title="More Placement & Career Guides"
        />
      </article>
    </div>
  );
}
