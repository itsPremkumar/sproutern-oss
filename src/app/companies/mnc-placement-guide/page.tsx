import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CheckCircle2,
  BookOpen,
  Target,
  Trophy,
  Users,
  AlertTriangle,
  XCircle,
  Briefcase,
  GraduationCap,
  FileText,
  Globe,
  Laptop,
  BrainCircuit,
  Building2,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Mail,
  Linkedin,
  Calendar,
  Code,
  MessageSquare,
  Zap,
  Award,
  Clock,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'How to Get Placed in Top MNCs',
  description:
    'Complete guide to land your dream job in top MNCs like TCS, Infosys, Wipro, Accenture, Cognizant, Amazon, Google, and Microsoft. Learn eligibility criteria, required skills, ATS-optimized resume building, interview process, company-wise preparation, and MNC internship opportunities. Expert insights from ex-FAANG hiring managers.',
  keywords:
    'how to get placed in MNC companies, MNC interview process, MNC jobs for freshers, MNC placement preparation, top MNC companies in India, MNC recruitment process, MNC job requirements, MNC salary packages, MNC technical interview questions, MNC HR interview questions, MNC selection process, how to prepare for MNC interviews, MNC job opportunities, MNC career growth, MNC work culture, how to apply for MNC internships, internship opportunities in MNC companies, placement preparation for MNCs, MNC companies in India, TCS placement, Infosys placement, Wipro placement, Accenture placement, Google placement, Amazon placement, Microsoft placement',
  openGraph: {
    title: 'How to Get Placed in Top MNC Companies  | Complete Guide',
    description:
      'Comprehensive step-by-step guide to cracking MNC interviews and securing high-paying jobs in top multinational companies. Learn eligibility, skills, resume tips, interview strategies, and company-wise preparation from ex-FAANG hiring managers.',
    url: 'https://sproutern.dpdns.org/companies/mnc-placement-guide',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['Prem Kumar'],
    tags: [
      'MNC Jobs',
      'Career Guidance',
      'Placement Preparation',
      'Interview Tips',
      'Fresher Jobs',
      'MNC Internships',
      'Career Growth',
    ],
  },
};

export default function MNCPlacementGuidePage() {
  // Comprehensive FAQ Schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the minimum percentage required for MNC placements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most MNCs require a minimum of 60% throughout your academic career (10th, 12th, and graduation). However, top companies like Google and Microsoft may require 70% or above. Some companies like TCS have relaxed criteria to 50% for certain roles. Always check the specific eligibility criteria for each company before applying.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I prepare for MNC technical interviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Focus on Data Structures & Algorithms, practice coding on platforms like LeetCode and HackerRank, work on real-world projects, and participate in coding competitions. Master one programming language deeply (Java, Python, or C++), understand OOPs concepts, and practice SQL queries. Use Sproutern's DSA preparation roadmap and technical interview guides for structured learning.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the average salary for freshers in MNCs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Entry-level salaries in MNCs vary widely: Service-based companies like TCS/Infosys offer 3.5-7 LPA, while product companies like Google/Microsoft offer 15-45 LPA for exceptional candidates. Specialized roles in AI/ML can command even higher packages. Use Sproutern's salary calculator to understand CTC breakdown and in-hand salary.",
        },
      },
      {
        '@type': 'Question',
        name: 'How to apply for MNC internships?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Apply through company career portals, LinkedIn job postings, campus placement cells, and employee referrals. For summer internships, apply between July-September. Build a strong resume with relevant projects, maintain good academic scores, and prepare for technical and HR interviews. Check Sproutern's internship guide for detailed application strategies.",
        },
      },
      {
        '@type': 'Question',
        name: 'What skills are required for MNC jobs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Technical skills: Programming languages (Java/Python/C++), Data Structures & Algorithms, Database (SQL), System Design basics. Soft skills: Communication, problem-solving, teamwork, and adaptability. Use Sproutern's skills gap analyzer to identify what you need to learn for your target role.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the MNC interview process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The complete MNC interview process typically takes 2-4 weeks: Online assessment (1-2 days), Technical interview (1 week), HR/Managerial round (1 week), and final offer (3-5 days). Some companies like Google and Amazon may have longer processes with multiple technical rounds.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get placed in MNCs with backlogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most MNCs require no active backlogs at the time of joining. Some companies allow 1 active backlog during the interview process, but you must clear it before the joining date. It's always better to clear all backlogs before applying to avoid complications.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between campus and off-campus placements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Campus placements: Companies visit your college, competition is limited to your batch, easier process. Off-campus placements: You apply directly through portals/LinkedIn, higher competition, but more opportunities. Both have pros and cons - use Sproutern's campus vs off-campus guide to decide.",
        },
      },
    ],
  };

  return (
    <div className="container mx-auto max-w-5xl py-12">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section with Improved CTAs */}
      <div className="mb-16 space-y-6 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Trophy className="mr-2 h-4 w-4" />
          Updated Placements
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
          How to Get Placed in{' '}
          <span className="text-primary">Top MNC Companies</span>
          <br className="hidden md:block" />
          <span className="mt-2 block text-2xl font-semibold text-muted-foreground md:text-4xl">
            Complete Step-by-Step Guide for Freshers & Interns
          </span>
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Your ultimate roadmap to cracking interviews at TCS, Infosys, Wipro,
          Accenture, Google, and Microsoft. Master the eligibility, skills, and
          interview process to secure your dream job .
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="h-12 px-8 text-lg"
            asChild
          >
            <Link href="#get-started">Start Your Journey</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-lg"
            asChild
          >
            <Link href="/companies/mnc-internship-guide">
              MNC Internship Guide
            </Link>
          </Button>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="mb-16 rounded-2xl border border-border bg-muted/50 p-6">
        <h2 className="mb-4 flex items-center text-2xl font-bold">
          <BookOpen className="mr-2 h-5 w-5" />
          What's Inside This Guide
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#eligibility"
                className="hover:text-primary hover:underline"
              >
                Eligibility Criteria for MNCs
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#skills"
                className="hover:text-primary hover:underline"
              >
                Essential Technical & Soft Skills
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#resume"
                className="hover:text-primary hover:underline"
              >
                ATS-Optimized Resume Building
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#interview-process"
                className="hover:text-primary hover:underline"
              >
                Complete MNC Interview Process
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#company-guides"
                className="hover:text-primary hover:underline"
              >
                Company-Wise Preparation
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="/companies/mnc-internship-guide"
                className="hover:text-primary hover:underline"
              >
                MNC Internship Guide
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Existing sections with enhanced content */}
      {/* Introduction: What is an MNC? */}
      <section className="mb-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Why Do Students Dream of MNC Jobs?
            </h2>
            <p className="text-lg text-muted-foreground">
              A Multinational Corporation (MNC) is a company that operates in
              its home country and at least one other country. For Indian
              students, MNCs like TCS, Google, and Amazon represent stability,
              growth, and global exposure.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-green-100 p-2 text-green-700">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    High Salary Packages
                  </h3>
                  <p className="text-muted-foreground">
                    Starting salaries ranging from 3.5 LPA to 45 LPA+ for
                    freshers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-blue-100 p-2 text-blue-700">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Global Exposure</h3>
                  <p className="text-muted-foreground">
                    Opportunities to work with international clients and travel
                    onsite.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-purple-100 p-2 text-purple-700">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Structured Career Growth
                  </h3>
                  <p className="text-muted-foreground">
                    Clear promotion paths, training programs, and job security.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-muted/50 p-8">
            <h3 className="mb-6 text-xl font-bold">
              How Sproutern Helps You Crack MNCs
            </h3>
            <ul className="space-y-4">
              {[
                'Real Interview Experiences from Placed Students',
                'Company-Specific Preparation Roadmaps',
                'Resume Building Tools & Templates',
                'Direct Internship & Job Alerts',
                'Mock Tests for Aptitude & Coding',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Step 1: Eligibility Criteria - Enhanced */}
      <section
        className="mb-20 scroll-mt-20"
        id="eligibility"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            1
          </div>
          <h2 className="text-3xl font-bold">
            Step 1: Eligibility Criteria for MNC Companies
          </h2>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-xl font-semibold">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Academic Scores
                  </h3>
                  <p className="mb-3 text-muted-foreground">
                    Most MNCs (TCS, Infosys, Wipro) require a minimum of{' '}
                    <strong>60% or 6.5 CGPA</strong> throughout your career
                    (10th, 12th, and Graduation). Top product companies (Google,
                    Amazon) focus more on skills than marks.
                  </p>
                  <div className="rounded-lg bg-muted/50 p-3 text-sm">
                    <strong>Company-wise Requirements:</strong>
                    <ul className="mt-2 list-inside list-disc space-y-1">
                      <li>TCS: 60% (relaxed to 50% for certain roles)</li>
                      <li>Infosys: 60% aggregate</li>
                      <li>Wipro: 60% or 6.0 CGPA</li>
                      <li>Google/Amazon: Skills-focused, but 70%+ preferred</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-xl font-semibold">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Backlogs Policy
                  </h3>
                  <p className="mb-3 text-muted-foreground">
                    <strong>No Active Backlogs:</strong> You must clear all
                    backlogs before the joining date. Some companies allow up to
                    1 active backlog during the interview process, but it's
                    risky.
                  </p>
                  <div className="rounded-lg bg-orange-50 p-3 text-sm dark:bg-orange-950/20">
                    <strong>Important:</strong> Even if a company allows
                    backlogs during interviews, having cleared backlogs
                    significantly improves your chances and reduces stress
                    during the selection process.
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-xl font-semibold">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    Education Gap
                  </h3>
                  <p className="mb-3 text-muted-foreground">
                    A maximum of <strong>1-2 years</strong> of education gap is
                    usually allowed between 12th and Graduation. You must have
                    valid documents to justify the gap.
                  </p>
                  <div className="rounded-lg bg-blue-50 p-3 text-sm dark:bg-blue-950/20">
                    <strong>Valid Reasons:</strong> Medical issues, family
                    responsibilities, competitive exam preparation (with proof),
                    or skill development courses.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
            <CardContent className="p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Additional Eligibility Factors
              </h3>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <strong>Branch/Stream:</strong> Most IT MNCs prefer
                  Engineering (CS/IT/ECE), but also hire from other branches for
                  support roles.
                </div>
                <div>
                  <strong>Year of Passing:</strong> Recent Batches. Some
                  companies also consider 2023 passouts.
                </div>
                <div>
                  <strong>Age Limit:</strong> Typically 18-28 years for fresher
                  roles, but varies by company.
                </div>
                <div>
                  <strong>Citizenship:</strong> Must be an Indian citizen or
                  have valid work authorization.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Step 2: Skills Required - Enhanced */}
      <section
        className="mb-20 scroll-mt-20"
        id="skills"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            2
          </div>
          <h2 className="text-3xl font-bold">
            Step 2: Skills Required for MNC Jobs
          </h2>
        </div>

        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
          <p className="text-sm text-muted-foreground">
            <strong>Pro Tip:</strong> Use Sproutern's{' '}
            <Link
              href="/tools/skills-gap-analyzer"
              className="font-semibold text-primary hover:underline"
            >
              Skills Gap Analyzer
            </Link>{' '}
            to compare your current skills with job requirements and get
            personalized learning recommendations. Also check our{' '}
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="font-semibold text-primary hover:underline"
            >
              DSA Preparation Roadmap
            </Link>{' '}
            for structured learning.
          </p>
        </div>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Laptop className="h-6 w-6 text-blue-500" />
                Technical Skills (IT Roles)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-1 font-semibold">1. Programming Language</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  Master one language deeply:{' '}
                  <strong>Java, C++, or Python</strong>. You should know OOPs
                  concepts thoroughly.
                </p>
                <div className="rounded bg-muted/50 p-2 text-xs text-muted-foreground">
                  <strong>Must Know:</strong> Variables, Data Types, Loops,
                  Functions, OOPs (Classes, Inheritance, Polymorphism,
                  Encapsulation), Exception Handling
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">
                  2. Data Structures & Algorithms (DSA)
                </h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs,
                  and Dynamic Programming. Practice on LeetCode or
                  GeeksforGeeks.
                </p>
                <div className="rounded bg-muted/50 p-2 text-xs text-muted-foreground">
                  <strong>Priority Topics:</strong> Array manipulation, String
                  algorithms, Binary Search, Tree traversal, Graph algorithms
                  (BFS/DFS), DP basics
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">3. Database (DBMS)</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  SQL queries (SELECT, INSERT, UPDATE, DELETE), Joins (Inner,
                  Left, Right), Normalization, and basic database design.
                </p>
                <div className="rounded bg-muted/50 p-2 text-xs text-muted-foreground">
                  <strong>Practice:</strong> Write complex queries with GROUP
                  BY, HAVING, subqueries, and understand ACID properties
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">
                  4. System Design Basics (For Product Companies)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Understanding scalability, load balancing, caching, and
                  database design. Not required for service-based companies
                  initially.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-green-500" />
                Soft Skills (All Roles)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-1 font-semibold">1. Communication</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  Clear articulation of thoughts. You don't need a fancy accent,
                  just clarity. Practice explaining technical concepts in simple
                  terms.
                </p>
                <div className="rounded bg-muted/50 p-2 text-xs text-muted-foreground">
                  <strong>Practice:</strong> Explain your projects to
                  non-technical friends, participate in group discussions, read
                  our{' '}
                  <Link
                    href="/blog/communication-skills-interns"
                    className="text-primary hover:underline"
                  >
                    communication skills guide
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">2. Problem Solving</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  Ability to approach a problem logically, break it down into
                  smaller parts, and think out loud during interviews.
                </p>
                <div className="rounded bg-muted/50 p-2 text-xs text-muted-foreground">
                  <strong>Tip:</strong> Always explain your thought process,
                  even if you don't know the exact solution. Interviewers value
                  your approach.
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">3. Teamwork</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  Showcase instances where you worked in a team during college
                  projects, hackathons, or group assignments.
                </p>
                <div className="rounded bg-muted/50 p-2 text-xs text-muted-foreground">
                  <strong>Prepare Examples:</strong> Use STAR method to describe
                  team projects. Check our{' '}
                  <Link
                    href="/blog/mastering-star-method"
                    className="text-primary hover:underline"
                  >
                    STAR method guide
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">
                  4. Adaptability & Learning
                </h4>
                <p className="text-sm text-muted-foreground">
                  Show willingness to learn new technologies and adapt to
                  changing requirements. Mention online courses, certifications,
                  or self-learning projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/20">
          <CardContent className="p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
              <Zap className="h-5 w-5 text-purple-600" />
              How to Develop These Skills
            </h3>
            <div className="grid gap-4 text-sm md:grid-cols-3">
              <div>
                <strong>Technical Skills:</strong> Practice coding daily on
                LeetCode/HackerRank, build real projects, contribute to open
                source, take online courses.
              </div>
              <div>
                <strong>Soft Skills:</strong> Join technical communities,
                participate in hackathons, practice mock interviews, read our{' '}
                <Link
                  href="/blog/soft-skills-development-guide"
                  className="text-primary hover:underline"
                >
                  soft skills guide
                </Link>
                .
              </div>
              <div>
                <strong>Assessment:</strong> Use Sproutern's{' '}
                <Link
                  href="/tools/skills-assessment"
                  className="text-primary hover:underline"
                >
                  Skills Assessment
                </Link>{' '}
                tool to evaluate your current skill levels and identify areas
                for improvement.
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Step 3: Resume Preparation - Enhanced */}
      <section
        className="mb-20 scroll-mt-20"
        id="resume"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            3
          </div>
          <h2 className="text-3xl font-bold">
            Step 3: Resume Preparation for MNCs
          </h2>
        </div>

        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
          <p className="text-sm text-muted-foreground">
            <strong>Important:</strong> Most MNCs use Applicant Tracking Systems
            (ATS) to filter resumes. Your resume must be ATS-friendly to even
            reach human recruiters. Use our{' '}
            <Link
              href="/tools/resume-score-checker"
              className="font-semibold text-primary hover:underline"
            >
              Resume Score Checker
            </Link>{' '}
            to analyze your resume and our{' '}
            <Link
              href="/blog/how-to-write-a-resume-that-beats-ats"
              className="font-semibold text-primary hover:underline"
            >
              ATS Resume Guide
            </Link>{' '}
            for detailed tips.
          </p>
        </div>

        <div className="mb-6 overflow-hidden rounded-xl border bg-card">
          <div className="grid md:grid-cols-2">
            <div className="space-y-6 p-8">
              <h3 className="text-2xl font-bold">
                The Perfect Fresher Resume Checklist
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>
                    <strong>Single Page:</strong> Recruiters spend only 6
                    seconds scanning. Keep it concise and impactful.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>
                    <strong>ATS Friendly:</strong> Use standard fonts (Arial,
                    Calibri, Times New Roman), simple formatting, bullet points,
                    and avoid graphics/tables.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>
                    <strong>Project Links:</strong> Include GitHub or live demo
                    links for your projects. Make sure links work!
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>
                    <strong>Metrics:</strong> Use numbers (e.g., "Improved
                    efficiency by 20%", "Handled 1000+ users").
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>
                    <strong>Keywords:</strong> Include relevant keywords from
                    job descriptions (Java, Python, SQL, etc.).
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>
                    <strong>Professional Email:</strong> Use format like
                    firstname.lastname@gmail.com
                  </span>
                </li>
              </ul>
              <div className="flex gap-3 pt-4">
                <Button asChild>
                  <Link href="/tools/resume-builder">
                    Build Free ATS Resume
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                >
                  <Link href="/tools/resume-score-checker">
                    Check Resume Score
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-muted p-8">
              <h4 className="mb-4 flex items-center gap-2 font-bold text-destructive">
                <XCircle className="h-5 w-5" />
                Common Resume Mistakes to Avoid
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  ❌ Spelling and grammatical errors (Instant rejection by ATS
                  and recruiters).
                </li>
                <li>
                  ❌ Including irrelevant hobbies like "Watching TV" or
                  "Sleeping".
                </li>
                <li>
                  ❌ Fake projects or skills you can't justify in interviews.
                </li>
                <li>
                  ❌ Unprofessional email ID (e.g., coolboy123@gmail.com,
                  ilovecoding@yahoo.com).
                </li>
                <li>
                  ❌ Using fancy fonts, colors, or graphics that break ATS
                  parsing.
                </li>
                <li>
                  ❌ Missing contact information or incorrect phone numbers.
                </li>
                <li>❌ Writing in paragraphs instead of bullet points.</li>
                <li>
                  ❌ Including photo (not required in India, and can cause ATS
                  issues).
                </li>
              </ul>
              <div className="mt-4 border-t pt-4">
                <Link
                  href="/blog/resume-mistakes-students-avoid"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Read detailed guide on resume mistakes →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Ideal Resume Structure for Freshers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  1
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Header Section</h4>
                  <p className="text-sm text-muted-foreground">
                    Name (Large, Bold), Phone Number, Professional Email,
                    LinkedIn Profile URL, GitHub URL (if applicable), Location
                    (City, State)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  2
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">
                    Objective/Summary (Optional)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    2-3 lines about your career goals and what you bring to the
                    table. Only include if it adds value.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  3
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    Degree, University/College, CGPA/Percentage, Year of
                    Passing. Include 10th and 12th if space allows.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  4
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Technical Skills</h4>
                  <p className="text-sm text-muted-foreground">
                    Programming Languages, Frameworks, Databases, Tools. Group
                    by category for better readability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  5
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">
                    Projects (Most Important for Freshers)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    3-4 projects with: Project Name, Technologies Used, Key
                    Features, GitHub/Live Demo Links. Use action verbs and
                    metrics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  6
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">
                    Internships/Work Experience (If Any)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Company Name, Role, Duration, Key Responsibilities and
                    Achievements with metrics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  7
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">
                    Achievements/Certifications
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Coding competition rankings, certifications (AWS, Google
                    Cloud, etc.), hackathon wins, academic achievements.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-lg bg-primary/5 p-4">
              <p className="text-sm">
                <strong>Pro Tip:</strong> Download free ATS-friendly resume
                templates from{' '}
                <Link
                  href="/resources/resume-templates"
                  className="font-semibold text-primary hover:underline"
                >
                  Sproutern's Resume Templates
                </Link>{' '}
                and follow our{' '}
                <Link
                  href="/resources/resume-guide"
                  className="font-semibold text-primary hover:underline"
                >
                  Complete Resume Writing Guide
                </Link>{' '}
                for step-by-step instructions.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Step 4: Application Process - Enhanced */}
      <section
        className="mb-20 scroll-mt-20"
        id="apply"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            4
          </div>
          <h2 className="text-3xl font-bold">
            Step 4: How to Apply for MNC Jobs
          </h2>
        </div>

        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/20">
          <p className="text-sm text-muted-foreground">
            <strong>Strategy:</strong> Don't rely on just one method. Apply
            through multiple channels to maximize your chances. Read our
            detailed{' '}
            <Link
              href="/blog/campus-vs-off-campus-placement"
              className="font-semibold text-primary hover:underline"
            >
              Campus vs Off-Campus Placement Guide
            </Link>{' '}
            to understand the differences.
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Campus Placements',
              desc: 'The easiest way. Companies visit your college. Competition is limited to your batch.',
              icon: Building2,
              color: 'text-blue-600',
            },
            {
              title: 'Career Portals',
              desc: 'Apply directly on TCS NextStep, Infosys Career, etc. Keep your profile updated.',
              icon: Globe,
              color: 'text-green-600',
            },
            {
              title: 'LinkedIn & Referrals',
              desc: 'Connect with employees. A referral increases your chances by 10x.',
              icon: Users,
              color: 'text-purple-600',
            },
            {
              title: 'Off-Campus Drives',
              desc: 'Mass hiring events like TCS NQT, InfyTQ, and eLitmus.',
              icon: Target,
              color: 'text-orange-600',
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-6">
                <item.icon className={`h-10 w-10 ${item.color} mb-4`} />
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                Method 1: Campus Placements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="mb-2 font-semibold">Step-by-Step Process:</h4>
                <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Register with Placement Cell:</strong> Complete your
                    profile in the college placement portal before the deadline.
                  </li>
                  <li>
                    <strong>Attend Pre-Placement Talks (PPTs):</strong>{' '}
                    Companies conduct PPTs to explain their roles, culture, and
                    requirements. Attend all relevant ones.
                  </li>
                  <li>
                    <strong>Apply for Companies:</strong> Submit your resume
                    through the placement portal for companies you're interested
                    in.
                  </li>
                  <li>
                    <strong>Shortlisting:</strong> Companies shortlist based on
                    CGPA, resume, and sometimes online tests.
                  </li>
                  <li>
                    <strong>Interviews:</strong> Technical and HR rounds are
                    conducted on campus or virtually.
                  </li>
                  <li>
                    <strong>Offer:</strong> If selected, you'll receive an offer
                    letter through the placement cell.
                  </li>
                </ol>
              </div>
              <div className="rounded-lg bg-blue-50 p-3 text-sm dark:bg-blue-950/20">
                <strong>Advantages:</strong> Less competition, companies come to
                you, structured process, support from placement cell.
                <br />
                <strong>Disadvantages:</strong> Limited to companies visiting
                your college, high CGPA requirements, one offer policy in many
                colleges.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-600" />
                Method 2: Career Portals & Company Websites
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="mb-2 font-semibold">Step-by-Step Process:</h4>
                <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Create Profile:</strong> Register on company career
                    portals (TCS NextStep, Infosys Career Portal, Wipro Careers,
                    Accenture Careers, etc.)
                  </li>
                  <li>
                    <strong>Complete Profile:</strong> Fill all sections:
                    Personal Info, Education, Skills, Projects, Work Experience
                    (if any).
                  </li>
                  <li>
                    <strong>Upload Resume:</strong> Upload an updated,
                    ATS-friendly resume. Make sure it matches the job
                    description keywords.
                  </li>
                  <li>
                    <strong>Apply for Openings:</strong> Browse available
                    positions and apply for roles matching your profile.
                  </li>
                  <li>
                    <strong>Keep Profile Updated:</strong> Update your profile
                    regularly, especially after completing new projects or
                    certifications.
                  </li>
                  <li>
                    <strong>Follow Up:</strong> Check application status
                    regularly and respond promptly to any communication.
                  </li>
                </ol>
              </div>
              <div className="grid gap-3 text-sm md:grid-cols-2">
                <div>
                  <strong>Popular Career Portals:</strong>
                  <ul className="mt-1 list-inside list-disc text-muted-foreground">
                    <li>TCS NextStep</li>
                    <li>Infosys Career Portal</li>
                    <li>Wipro Careers</li>
                    <li>Accenture Careers</li>
                    <li>Cognizant Careers</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950/20">
                  <strong>Pro Tip:</strong> Set up job alerts on these portals
                  to get notified about new openings matching your profile.
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-blue-600" />
                Method 3: LinkedIn & Employee Referrals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="mb-2 font-semibold">Step-by-Step Process:</h4>
                <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Optimize LinkedIn Profile:</strong> Complete your
                    profile with professional photo, headline, summary, skills,
                    and experience. Check our{' '}
                    <Link
                      href="/blog/linkedin-optimization-students"
                      className="text-primary hover:underline"
                    >
                      LinkedIn optimization guide
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Connect with Employees:</strong> Connect with
                    professionals working in your target companies. Send
                    personalized connection requests.
                  </li>
                  <li>
                    <strong>Engage Meaningfully:</strong> Comment on their
                    posts, share relevant content, and build genuine
                    relationships.
                  </li>
                  <li>
                    <strong>Request Referrals:</strong> After building rapport,
                    politely ask for referrals. Always provide your resume and
                    explain why you're a good fit.
                  </li>
                  <li>
                    <strong>Apply on LinkedIn:</strong> Use LinkedIn's Easy
                    Apply feature for quick applications. Many companies post
                    jobs exclusively on LinkedIn.
                  </li>
                  <li>
                    <strong>Follow Company Pages:</strong> Follow target
                    companies to get job alerts and updates.
                  </li>
                </ol>
              </div>
              <div className="rounded-lg bg-purple-50 p-3 text-sm dark:bg-purple-950/20">
                <strong>Why Referrals Work:</strong> Referred candidates are 10x
                more likely to get interviews. Employees get referral bonuses,
                so they're motivated to help. Read our{' '}
                <Link
                  href="/blog/job-referrals-guide"
                  className="text-primary hover:underline"
                >
                  complete guide on getting referrals
                </Link>
                .
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-600" />
                Method 4: Off-Campus Drives & Mass Hiring
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="mb-2 font-semibold">Step-by-Step Process:</h4>
                <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Register for Tests:</strong> Register for common
                    tests like TCS NQT (National Qualifier Test), InfyTQ, Wipro
                    Elite NLTH, eLitmus, AMCAT, etc.
                  </li>
                  <li>
                    <strong>Prepare for Tests:</strong> These tests typically
                    include Aptitude, Technical MCQs, and Coding sections.
                    Practice using our{' '}
                    <Link
                      href="/tools/aptitude-test"
                      className="text-primary hover:underline"
                    >
                      Aptitude Test tool
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Take the Test:</strong> Appear for the test on the
                    scheduled date. Scores are valid for 1-2 years.
                  </li>
                  <li>
                    <strong>Apply to Companies:</strong> Use your test scores to
                    apply to companies accepting those scores.
                  </li>
                  <li>
                    <strong>Company-Specific Rounds:</strong> Companies may
                    conduct additional technical and HR rounds.
                  </li>
                </ol>
              </div>
              <div className="grid gap-3 text-sm md:grid-cols-2">
                <div>
                  <strong>Popular Off-Campus Tests:</strong>
                  <ul className="mt-1 list-inside list-disc text-muted-foreground">
                    <li>TCS NQT (National Qualifier Test)</li>
                    <li>InfyTQ (Infosys Certification)</li>
                    <li>Wipro Elite NLTH</li>
                    <li>eLitmus pH Test</li>
                    <li>AMCAT</li>
                    <li>Cocubes</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-950/20">
                  <strong>Advantage:</strong> One test score can be used to
                  apply to multiple companies. Check{' '}
                  <Link
                    href="/off-campus-drives"
                    className="text-primary hover:underline"
                  >
                    Sproutern's Off-Campus Drives page
                  </Link>{' '}
                  for latest updates.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Interview Process - Enhanced */}
      <section
        className="mb-20 scroll-mt-20"
        id="interview-process"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            The MNC Interview Process Explained
          </h2>
          <p className="text-lg text-muted-foreground">
            Most top MNCs follow this standard 4-stage elimination process.
            Understanding each stage helps you prepare better.
          </p>
          <div className="mt-4 inline-block rounded-lg bg-blue-50 p-4 dark:bg-blue-950/20">
            <p className="text-sm text-muted-foreground">
              <strong>Preparation Resources:</strong> Practice with our{' '}
              <Link
                href="/tools/interview-questions"
                className="font-semibold text-primary hover:underline"
              >
                Interview Question Generator
              </Link>
              , read{' '}
              <Link
                href="/blog/50-common-hr-interview-questions-and-best-answers"
                className="font-semibold text-primary hover:underline"
              >
                50 Common HR Interview Questions
              </Link>
              , and check{' '}
              <Link
                href="/blog/technical-interview-preparation"
                className="font-semibold text-primary hover:underline"
              >
                Technical Interview Preparation Guide
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="relative ml-4 space-y-12 border-l-2 border-muted md:ml-12">
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
            <h3 className="mb-2 text-2xl font-bold">
              Stage 1: Online Assessment (The Filter)
            </h3>
            <p className="mb-4 text-muted-foreground">
              This is where 60-70% of candidates are rejected. It's an automated
              test that filters candidates before human review.
            </p>
            <div className="mb-4 grid gap-4 sm:grid-cols-3">
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <div className="mb-1 flex items-center gap-2 font-semibold">
                    <BrainCircuit className="h-4 w-4" />
                    Aptitude
                  </div>
                  <div className="mb-2 text-sm text-muted-foreground">
                    Quants, Logical Reasoning, Verbal Ability.
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Duration:</strong> 20-30 mins |{' '}
                    <strong>Questions:</strong> 15-20
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <div className="mb-1 flex items-center gap-2 font-semibold">
                    <Code className="h-4 w-4" />
                    Technical MCQs
                  </div>
                  <div className="mb-2 text-sm text-muted-foreground">
                    Output questions on C, C++, Java, DBMS, OS.
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Duration:</strong> 20-30 mins |{' '}
                    <strong>Questions:</strong> 20-25
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <div className="mb-1 flex items-center gap-2 font-semibold">
                    <Laptop className="h-4 w-4" />
                    Coding Test
                  </div>
                  <div className="mb-2 text-sm text-muted-foreground">
                    2 coding questions (1 Easy, 1 Medium).
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Duration:</strong> 45-60 mins |{' '}
                    <strong>Languages:</strong> Java, C++, Python, C
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/20">
              <h4 className="mb-2 text-sm font-semibold">Preparation Tips:</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  Practice aptitude questions daily using our{' '}
                  <Link
                    href="/tools/aptitude-test"
                    className="text-primary hover:underline"
                  >
                    Aptitude Test tool
                  </Link>
                </li>
                <li>
                  Solve coding problems on LeetCode, HackerRank, or
                  GeeksforGeeks
                </li>
                <li>Time yourself - speed matters in online assessments</li>
                <li>
                  Read questions carefully - many mistakes happen due to
                  misunderstanding
                </li>
                <li>
                  For coding: Focus on solving at least one problem completely
                  rather than attempting both partially
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
              <h4 className="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">
                Common Mistakes:
              </h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  Not managing time properly - spend too much time on one
                  question
                </li>
                <li>Not reading instructions carefully</li>
                <li>Submitting without testing code for edge cases</li>
                <li>
                  Panicking when stuck - move to next question and come back
                </li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
            <h3 className="mb-2 text-2xl font-bold">
              Stage 2: Technical Interview (The Core)
            </h3>
            <p className="mb-4 text-muted-foreground">
              Face-to-face (or virtual) interview with a technical panel. This
              is the most important round where your technical knowledge is
              thoroughly tested.
            </p>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div>
                    <strong>Live Coding:</strong> Writing code on paper,
                    whiteboard, or shared editor (HackerRank, CodePair).
                  </div>
                  <div>
                    <strong>Project Discussion:</strong> Deep dive into your
                    resume projects - architecture, challenges, technologies
                    used.
                  </div>
                  <div>
                    <strong>Core Subjects:</strong> Questions on SQL,
                    Normalization, OOPs concepts, SDLC, Operating Systems, DBMS.
                  </div>
                  <div>
                    <strong>Problem Solving:</strong> Algorithm design,
                    time/space complexity analysis, optimization.
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base">Sample Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div>"Reverse a linked list"</div>
                  <div>"Find the second largest element in an array"</div>
                  <div>
                    "Explain the difference between method overloading and
                    overriding"
                  </div>
                  <div>
                    "Write a SQL query to find employees with salary greater
                    than 50000"
                  </div>
                  <div>"Explain your project architecture"</div>
                </CardContent>
              </Card>
            </div>
            <div className="mb-4 rounded-lg bg-green-50 p-4 dark:bg-green-950/20">
              <h4 className="mb-2 text-sm font-semibold">
                How to Ace Technical Interviews:
              </h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>Think Out Loud:</strong> Explain your thought process
                  while solving problems. Interviewers want to see how you
                  think.
                </li>
                <li>
                  <strong>Ask Clarifying Questions:</strong> Don't assume - ask
                  about constraints, edge cases, input format.
                </li>
                <li>
                  <strong>Start with Brute Force:</strong> First give a simple
                  solution, then optimize. This shows problem-solving approach.
                </li>
                <li>
                  <strong>Know Your Projects:</strong> Be ready to explain every
                  line of code, every design decision in your projects.
                </li>
                <li>
                  <strong>Practice Coding on Paper:</strong> Many companies
                  still ask you to write code on paper/whiteboard.
                </li>
                <li>
                  Read our{' '}
                  <Link
                    href="/blog/technical-interview-preparation"
                    className="text-primary hover:underline"
                  >
                    Technical Interview Preparation Guide
                  </Link>{' '}
                  for detailed strategies.
                </li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
            <h3 className="mb-2 text-2xl font-bold">
              Stage 3: Managerial / HR Round
            </h3>
            <p className="mb-4 text-muted-foreground">
              Assessing your personality, stability, cultural fit, and long-term
              commitment. This round determines if you're the right fit for the
              company culture.
            </p>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base">
                    Common HR Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div>"Tell me about yourself"</div>
                  <div>"Why do you want to join our company?"</div>
                  <div>"Are you willing to relocate?"</div>
                  <div>"What are your strengths and weaknesses?"</div>
                  <div>"Where do you see yourself in 5 years?"</div>
                  <div>"Why should we hire you?"</div>
                  <div>"Do you have any questions for us?"</div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base">
                    Behavioral Questions (STAR Method)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div>"Tell me about a time you worked in a team"</div>
                  <div>"Describe a challenging situation you faced"</div>
                  <div>"Give an example of leadership"</div>
                  <div>"How do you handle pressure?"</div>
                  <div>"Describe a conflict you resolved"</div>
                </CardContent>
              </Card>
            </div>
            <div className="mb-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-950/20">
              <h4 className="mb-2 text-sm font-semibold">
                HR Round Preparation Tips:
              </h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>Research the Company:</strong> Know their products,
                  values, recent news, and work culture. Visit their website,
                  read employee reviews.
                </li>
                <li>
                  <strong>Prepare Your Introduction:</strong> Have a 2-minute
                  "Tell me about yourself" answer ready. Focus on education,
                  skills, projects, and why you're interested in the role.
                </li>
                <li>
                  <strong>Use STAR Method:</strong> For behavioral questions,
                  structure answers using Situation, Task, Action, Result. Read
                  our{' '}
                  <Link
                    href="/blog/mastering-star-method"
                    className="text-primary hover:underline"
                  >
                    STAR Method Guide
                  </Link>
                  .
                </li>
                <li>
                  <strong>Prepare Questions:</strong> Always have 2-3 thoughtful
                  questions ready to ask the interviewer. Shows genuine
                  interest.
                </li>
                <li>
                  <strong>Be Honest:</strong> Don't fake answers. Be authentic
                  about your strengths, weaknesses, and career goals.
                </li>
                <li>
                  Practice with our{' '}
                  <Link
                    href="/tools/interview-questions"
                    className="text-primary hover:underline"
                  >
                    Interview Question Generator
                  </Link>{' '}
                  and read{' '}
                  <Link
                    href="/blog/50-common-hr-interview-questions-and-best-answers"
                    className="text-primary hover:underline"
                  >
                    50 Common HR Interview Questions
                  </Link>
                  .
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950/20">
              <h4 className="mb-2 text-sm font-semibold text-yellow-700 dark:text-yellow-400">
                Common Mistakes in HR Round:
              </h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Not researching the company - shows lack of interest</li>
                <li>Speaking negatively about previous employers or college</li>
                <li>Not asking any questions - shows disinterest</li>
                <li>Being too casual or too formal - find the right balance</li>
                <li>
                  Not preparing for "Tell me about yourself" - this is often the
                  first question
                </li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
            <h3 className="mb-2 text-2xl font-bold">
              Stage 4: Final Round / Offer Discussion
            </h3>
            <p className="mb-4 text-muted-foreground">
              Some companies have an additional managerial round or direct offer
              discussion. This is your final chance to make an impression.
            </p>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/20">
              <h4 className="mb-2 text-sm font-semibold">What Happens:</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  Discussion about role, responsibilities, and expectations
                </li>
                <li>Salary negotiation (if applicable)</li>
                <li>Joining date discussion</li>
                <li>Document verification requirements</li>
                <li>Final offer letter issuance</li>
              </ul>
              <div className="mt-3 border-t pt-3">
                <p className="text-sm">
                  <strong>Pro Tip:</strong> Read our{' '}
                  <Link
                    href="/blog/salary-negotiation-freshers"
                    className="text-primary hover:underline"
                  >
                    Salary Negotiation Guide for Freshers
                  </Link>{' '}
                  to understand how to negotiate your first job offer
                  professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Wise Guide - Enhanced */}
      <section
        className="mb-20 scroll-mt-20"
        id="company-guides"
      >
        <h2 className="mb-8 text-center text-3xl font-bold">
          Company-Wise Preparation Guides
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-muted-foreground">
          Each MNC has a unique hiring process and focuses on different skills.
          Understanding company-specific requirements significantly improves
          your chances. Click on any company to see detailed interview questions
          and preparation strategies.
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: 'TCS',
              role: 'Ninja & Digital',
              focus: 'Aptitude + NQT Score',
              link: '/companies/tcs/interview-questions',
              salary: '3.5-7 LPA',
              process: 'NQT → Technical → HR',
              color: 'border-blue-500',
            },
            {
              name: 'Infosys',
              role: 'System Engineer',
              focus: 'Pseudocode + Puzzle',
              link: '/companies/infosys/interview-questions',
              salary: '3.5-6.5 LPA',
              process: 'InfyTQ → Technical → HR',
              color: 'border-green-500',
            },
            {
              name: 'Wipro',
              role: 'Project Engineer',
              focus: 'English + Basic Coding',
              link: '/companies/wipro/interview-questions',
              salary: '3.5-6.5 LPA',
              process: 'Elite NLTH → Technical → HR',
              color: 'border-purple-500',
            },
            {
              name: 'Accenture',
              role: 'ASE & FSE',
              focus: 'Cognitive + Coding',
              link: '/companies/accenture/interview-questions',
              salary: '4-7 LPA',
              process: 'Online Test → Technical → HR',
              color: 'border-pink-500',
            },
            {
              name: 'Cognizant',
              role: 'Programmer Analyst',
              focus: 'Aptitude + Coding',
              link: '/companies/cognizant/interview-questions',
              salary: '4-7 LPA',
              process: 'Online Test → Technical → HR',
              color: 'border-orange-500',
            },
            {
              name: 'Amazon',
              role: 'SDE Intern/FTE',
              focus: 'DSA (Trees, Graphs, DP)',
              link: '/companies/amazon',
              salary: '15-30 LPA',
              process: 'Online Assessment → 2-3 Technical → HR',
              color: 'border-yellow-500',
            },
            {
              name: 'Google',
              role: 'Software Engineer',
              focus: 'Advanced DSA + System Design',
              link: '/companies/google',
              salary: '25-45 LPA',
              process: 'Phone Screen → 4-5 Technical → Hiring Committee',
              color: 'border-red-500',
            },
            {
              name: 'Microsoft',
              role: 'Software Engineer',
              focus: 'DSA + System Design + Coding',
              link: '/companies/microsoft',
              salary: '20-35 LPA',
              process: 'Online Test → 3-4 Technical → HR',
              color: 'border-blue-600',
            },
          ].map((company, i) => (
            <Card
              key={i}
              className={`border-l-4 transition-colors hover:border-primary ${company.color}`}
            >
              <CardHeader>
                <CardTitle className="text-lg">{company.name}</CardTitle>
                <CardDescription>{company.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Key Focus:
                  </p>
                  <p className="text-sm">{company.focus}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Salary Range:
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {company.salary}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Process:
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {company.process}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="group mt-4 w-full"
                  size="sm"
                  asChild
                >
                  <Link href={company.link}>
                    View Guide{' '}
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                Service-Based Companies (TCS, Infosys, Wipro, Accenture,
                Cognizant)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>Focus Areas:</strong>
                <ul className="mt-1 list-inside list-disc text-muted-foreground">
                  <li>Strong aptitude and logical reasoning</li>
                  <li>Basic to intermediate programming skills</li>
                  <li>Good communication skills</li>
                  <li>Problem-solving approach</li>
                </ul>
              </div>
              <div>
                <strong>Preparation Strategy:</strong>
                <ul className="mt-1 list-inside list-disc text-muted-foreground">
                  <li>
                    Practice aptitude questions daily using our{' '}
                    <Link
                      href="/tools/aptitude-test"
                      className="text-primary hover:underline"
                    >
                      Aptitude Test tool
                    </Link>
                  </li>
                  <li>Master one programming language (Java/C++/Python)</li>
                  <li>Solve basic to medium DSA problems</li>
                  <li>Prepare for pseudocode questions (Infosys)</li>
                  <li>Practice English communication</li>
                </ul>
              </div>
              <div className="border-t pt-3">
                <Link
                  href="/off-campus-drives"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Check Latest Off-Campus Drives →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-orange-600" />
                Product-Based Companies (Amazon, Google, Microsoft)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>Focus Areas:</strong>
                <ul className="mt-1 list-inside list-disc text-muted-foreground">
                  <li>Advanced Data Structures & Algorithms</li>
                  <li>System Design fundamentals</li>
                  <li>Problem-solving and optimization</li>
                  <li>Strong coding skills</li>
                </ul>
              </div>
              <div>
                <strong>Preparation Strategy:</strong>
                <ul className="mt-1 list-inside list-disc text-muted-foreground">
                  <li>Solve 200+ LeetCode problems (Medium/Hard)</li>
                  <li>Master Trees, Graphs, Dynamic Programming</li>
                  <li>Learn System Design basics</li>
                  <li>Practice coding interviews with time limits</li>
                  <li>Build impressive projects</li>
                </ul>
              </div>
              <div className="border-t pt-3">
                <Link
                  href="/blog/dsa-preparation-roadmap"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  DSA Preparation Roadmap →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Company-Wise Preparation */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-2xl font-bold">
            Detailed Company-Wise Preparation Strategies
          </h3>
          <div className="space-y-6">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem
                value="tcs"
                className="rounded-lg border px-6"
              >
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                  TCS (Tata Consultancy Services) - Complete Preparation Guide
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <strong>Hiring Process:</strong>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
                        <li>
                          TCS NQT (National Qualifier Test) - Online assessment
                        </li>
                        <li>
                          Technical Interview - Coding, projects, CS
                          fundamentals
                        </li>
                        <li>HR Interview - Communication, fit assessment</li>
                      </ol>
                    </div>
                    <div>
                      <strong>NQT Test Pattern:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>Verbal Ability (20 mins, 20 questions)</li>
                        <li>Quantitative Aptitude (40 mins, 20 questions)</li>
                        <li>Programming Logic (30 mins, 20 questions)</li>
                        <li>Coding (60 mins, 2 questions)</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Preparation Tips:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          Focus on aptitude - practice daily using our{' '}
                          <Link
                            href="/tools/aptitude-test"
                            className="text-primary hover:underline"
                          >
                            Aptitude Test tool
                          </Link>
                        </li>
                        <li>
                          Master basic programming - arrays, strings, loops
                        </li>
                        <li>Practice NQT previous year papers</li>
                        <li>Prepare for pseudocode questions</li>
                        <li>Know your projects thoroughly</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Salary Packages:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>TCS Ninja: 3.5-4 LPA</li>
                        <li>TCS Digital: 7-9 LPA</li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <Link
                        href="/companies/tcs/interview-questions"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        View TCS Interview Questions →
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="infosys"
                className="rounded-lg border px-6"
              >
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                  Infosys - Complete Preparation Guide
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <strong>Hiring Process:</strong>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
                        <li>
                          InfyTQ Certification Exam (optional but recommended)
                        </li>
                        <li>
                          Online Assessment - Aptitude, Pseudocode, Coding
                        </li>
                        <li>Technical Interview - Projects, coding, puzzles</li>
                        <li>HR Interview</li>
                      </ol>
                    </div>
                    <div>
                      <strong>Key Focus Areas:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          <strong>Pseudocode:</strong> Infosys is famous for
                          pseudocode questions. Practice extensively.
                        </li>
                        <li>
                          <strong>Puzzles:</strong> Logical reasoning and
                          puzzle-solving
                        </li>
                        <li>
                          <strong>Basic Coding:</strong> Arrays, strings, basic
                          algorithms
                        </li>
                        <li>
                          <strong>Communication:</strong> Strong English skills
                          required
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Preparation Tips:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          Master pseudocode - practice Infosys-specific
                          pseudocode questions
                        </li>
                        <li>
                          Solve puzzles daily - logical reasoning is crucial
                        </li>
                        <li>
                          Practice aptitude using our{' '}
                          <Link
                            href="/tools/aptitude-test"
                            className="text-primary hover:underline"
                          >
                            Aptitude Test tool
                          </Link>
                        </li>
                        <li>
                          Prepare for behavioral questions using STAR method
                        </li>
                        <li>
                          Read our{' '}
                          <Link
                            href="/blog/mastering-star-method"
                            className="text-primary hover:underline"
                          >
                            STAR Method Guide
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Salary Packages:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>System Engineer: 3.5-4.5 LPA</li>
                        <li>Power Programmer: 6.5-8 LPA</li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <Link
                        href="/companies/infosys/interview-questions"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        View Infosys Interview Questions →
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="wipro"
                className="rounded-lg border px-6"
              >
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                  Wipro - Complete Preparation Guide
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <strong>Hiring Process:</strong>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
                        <li>
                          Wipro Elite NLTH (National Level Talent Hunt) Test
                        </li>
                        <li>Technical Interview - Coding, projects</li>
                        <li>HR Interview</li>
                      </ol>
                    </div>
                    <div>
                      <strong>Elite NLTH Test Pattern:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>English (20 mins, 22 questions)</li>
                        <li>Quantitative Aptitude (20 mins, 16 questions)</li>
                        <li>Logical Reasoning (20 mins, 14 questions)</li>
                        <li>Coding (60 mins, 2 questions)</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Preparation Tips:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          Focus on English - grammar, comprehension, vocabulary
                        </li>
                        <li>Practice quantitative aptitude daily</li>
                        <li>Solve basic to medium coding problems</li>
                        <li>Prepare for technical questions on OOPs, DBMS</li>
                        <li>
                          Practice with our{' '}
                          <Link
                            href="/tools/aptitude-test"
                            className="text-primary hover:underline"
                          >
                            Aptitude Test tool
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Salary Packages:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>Project Engineer: 3.5-4.5 LPA</li>
                        <li>Wipro Turbo: 6.5-7.5 LPA</li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <Link
                        href="/companies/wipro/interview-questions"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        View Wipro Interview Questions →
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="accenture"
                className="rounded-lg border px-6"
              >
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                  Accenture - Complete Preparation Guide
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <strong>Hiring Process:</strong>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
                        <li>
                          Online Assessment - Cognitive, Technical, Coding
                        </li>
                        <li>
                          Technical Interview - Coding, projects, CS
                          fundamentals
                        </li>
                        <li>HR Interview</li>
                      </ol>
                    </div>
                    <div>
                      <strong>Key Focus Areas:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          <strong>Cognitive Assessment:</strong>{' '}
                          Problem-solving, logical reasoning
                        </li>
                        <li>
                          <strong>Technical MCQs:</strong> Programming, DBMS,
                          OS, Networking
                        </li>
                        <li>
                          <strong>Coding:</strong> Basic to medium difficulty
                          problems
                        </li>
                        <li>
                          <strong>Communication:</strong> Strong verbal and
                          written skills
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Preparation Tips:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>Practice cognitive ability questions</li>
                        <li>Revise core CS subjects - DBMS, OS, Networking</li>
                        <li>
                          Solve coding problems on arrays, strings, basic
                          algorithms
                        </li>
                        <li>Prepare for behavioral questions</li>
                        <li>
                          Read our{' '}
                          <Link
                            href="/blog/technical-interview-preparation"
                            className="text-primary hover:underline"
                          >
                            Technical Interview Preparation Guide
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Salary Packages:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>Associate Software Engineer (ASE): 4-5 LPA</li>
                        <li>Full Stack Engineer (FSE): 6-7 LPA</li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <Link
                        href="/companies/accenture/interview-questions"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        View Accenture Interview Questions →
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="amazon"
                className="rounded-lg border px-6"
              >
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                  Amazon - Complete Preparation Guide
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <strong>Hiring Process:</strong>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
                        <li>
                          Online Assessment - 2 coding problems, debugging, work
                          style assessment
                        </li>
                        <li>Phone Screen (1 technical round)</li>
                        <li>
                          On-site/Virtual Interviews (2-3 technical rounds)
                        </li>
                        <li>Bar Raiser Round (final technical validation)</li>
                        <li>HR Discussion</li>
                      </ol>
                    </div>
                    <div>
                      <strong>Key Focus Areas:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          <strong>Data Structures:</strong> Arrays, Linked
                          Lists, Trees, Graphs, Heaps
                        </li>
                        <li>
                          <strong>Algorithms:</strong> Sorting, Searching,
                          Dynamic Programming, Greedy
                        </li>
                        <li>
                          <strong>System Design:</strong> Basics of scalable
                          systems
                        </li>
                        <li>
                          <strong>Leadership Principles:</strong> Amazon's 16
                          leadership principles
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Preparation Tips:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          Solve 200+ LeetCode problems (focus on Medium/Hard)
                        </li>
                        <li>Master Trees, Graphs, Dynamic Programming</li>
                        <li>
                          Practice system design basics - read our{' '}
                          <Link
                            href="/blog/dsa-preparation-roadmap"
                            className="text-primary hover:underline"
                          >
                            DSA Preparation Roadmap
                          </Link>
                        </li>
                        <li>
                          Prepare examples for Amazon Leadership Principles
                        </li>
                        <li>Practice coding on paper/whiteboard</li>
                        <li>Time yourself - Amazon values efficiency</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Salary Packages:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>SDE Intern: 60,000-1,00,000/month</li>
                        <li>
                          SDE FTE: 18-25 LPA (can go higher for exceptional
                          candidates)
                        </li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <Link
                        href="/companies/amazon"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        View Amazon Interview Guide →
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="google"
                className="rounded-lg border px-6"
              >
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                  Google - Complete Preparation Guide
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <strong>Hiring Process:</strong>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
                        <li>Resume Screening (very competitive)</li>
                        <li>Phone Screen (1-2 technical rounds)</li>
                        <li>
                          On-site/Virtual Interviews (4-5 technical rounds)
                        </li>
                        <li>Hiring Committee Review</li>
                        <li>Team Matching</li>
                        <li>Offer</li>
                      </ol>
                    </div>
                    <div>
                      <strong>Key Focus Areas:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          <strong>Advanced DSA:</strong> Complex algorithms,
                          optimization
                        </li>
                        <li>
                          <strong>System Design:</strong> Scalability,
                          distributed systems
                        </li>
                        <li>
                          <strong>Problem Solving:</strong> Creative solutions,
                          edge cases
                        </li>
                        <li>
                          <strong>Coding Quality:</strong> Clean, efficient,
                          well-tested code
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Preparation Tips:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          Solve 300+ LeetCode problems (Hard difficulty focus)
                        </li>
                        <li>
                          Master advanced topics - Graphs, DP, Greedy,
                          Backtracking
                        </li>
                        <li>
                          Learn System Design - scalability, load balancing,
                          caching
                        </li>
                        <li>Practice explaining solutions clearly</li>
                        <li>
                          Build impressive projects - Google values innovation
                        </li>
                        <li>Contribute to open source</li>
                        <li>
                          Read our{' '}
                          <Link
                            href="/blog/dsa-preparation-roadmap"
                            className="text-primary hover:underline"
                          >
                            DSA Preparation Roadmap
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Salary Packages:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          Software Engineering Intern: 80,000-1,20,000/month
                        </li>
                        <li>
                          Software Engineer FTE: 25-45 LPA (can be higher)
                        </li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <Link
                        href="/companies/google"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        View Google Interview Guide →
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="microsoft"
                className="rounded-lg border px-6"
              >
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                  Microsoft - Complete Preparation Guide
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <strong>Hiring Process:</strong>
                      <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
                        <li>Online Assessment - Coding problems</li>
                        <li>Phone Screen (1 technical round)</li>
                        <li>
                          On-site/Virtual Interviews (3-4 technical rounds)
                        </li>
                        <li>As-Appropriate Round (managerial/HR)</li>
                        <li>Offer</li>
                      </ol>
                    </div>
                    <div>
                      <strong>Key Focus Areas:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          <strong>Data Structures & Algorithms:</strong> Strong
                          DSA knowledge required
                        </li>
                        <li>
                          <strong>System Design:</strong> Basics of system
                          architecture
                        </li>
                        <li>
                          <strong>Coding:</strong> Clean, efficient code
                        </li>
                        <li>
                          <strong>Problem Solving:</strong> Logical thinking,
                          optimization
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Preparation Tips:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          Solve 200+ LeetCode problems (Medium/Hard focus)
                        </li>
                        <li>Master Trees, Graphs, Dynamic Programming</li>
                        <li>Practice system design basics</li>
                        <li>Focus on code quality and edge cases</li>
                        <li>Prepare for behavioral questions</li>
                        <li>
                          Read our{' '}
                          <Link
                            href="/blog/technical-interview-preparation"
                            className="text-primary hover:underline"
                          >
                            Technical Interview Preparation Guide
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong>Salary Packages:</strong>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                        <li>
                          Software Engineering Intern: 70,000-1,00,000/month
                        </li>
                        <li>Software Engineer FTE: 20-35 LPA</li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <Link
                        href="/companies/microsoft"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        View Microsoft Interview Guide →
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Comprehensive MNC Internship Guide - Enhanced */}
      <section
        id="internship-guide"
        className="mb-20 scroll-mt-20"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            6
          </div>
          <h2 className="text-3xl font-bold">
            How to Get Internship Opportunities in MNC Companies
          </h2>
        </div>

        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
          <p className="text-sm text-muted-foreground">
            <strong>Why MNC Internships Matter:</strong> MNC internships provide
            industry exposure, mentorship, real-world project experience, and
            often lead to Pre-Placement Offers (PPOs). They're highly
            competitive but worth the effort.
          </p>
        </div>

        <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-8">
            <div className="mb-6 text-center">
              <h3 className="mb-3 text-2xl font-bold">
                Complete MNC Internship Guide
              </h3>
              <p className="mb-6 text-muted-foreground">
                Get comprehensive guidance on eligibility, application
                strategies, interview preparation, and converting internships
                into full-time offers.
              </p>
              <Button
                size="lg"
                className="h-12 px-8 text-lg"
                asChild
              >
                <Link href="/companies/mnc-internship-guide">
                  Read Complete Internship Guide{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-background/50 p-4 text-center">
                <Briefcase className="mx-auto mb-2 h-8 w-8 text-primary" />
                <h4 className="mb-1 font-semibold">Application Strategies</h4>
                <p className="text-xs text-muted-foreground">
                  Step-by-step guide to apply for MNC internships
                </p>
              </div>
              <div className="rounded-lg bg-background/50 p-4 text-center">
                <Target className="mx-auto mb-2 h-8 w-8 text-primary" />
                <h4 className="mb-1 font-semibold">Interview Prep</h4>
                <p className="text-xs text-muted-foreground">
                  Technical and HR interview preparation tips
                </p>
              </div>
              <div className="rounded-lg bg-background/50 p-4 text-center">
                <Trophy className="mx-auto mb-2 h-8 w-8 text-primary" />
                <h4 className="mb-1 font-semibold">PPO Conversion</h4>
                <p className="text-xs text-muted-foreground">
                  How to convert internship to full-time offer
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h3 className="mb-6 text-2xl font-bold">Types of MNC Internships</h3>
          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-700">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">Summer Internships</h3>
                </div>
                <p className="text-muted-foreground">
                  Paid 2-3 month programs (May-July) for pre-final year
                  students. Highly competitive with PPO opportunities.
                </p>
              </CardHeader>
              <CardContent>
                <h4 className="mb-3 font-medium">Top Programs:</h4>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    Google Summer of Code (GSOC) - Open Source
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    Microsoft Engage - Software Engineering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    Amazon Summer Internship - SDE
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    TCS Summer Internship Program
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    Infosys Summer Internship
                  </li>
                </ul>
                <div className="rounded-lg bg-blue-50 p-3 text-sm dark:bg-blue-950/20">
                  <strong>Eligibility:</strong> Pre-final year students (3rd
                  year Engineering), CGPA 7.0+, strong coding skills, good
                  projects.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-2 text-purple-700">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">Winter Internships</h3>
                </div>
                <p className="text-muted-foreground">
                  1-2 month programs (Dec-Jan) with focus on research projects
                  and specialized domains.
                </p>
              </CardHeader>
              <CardContent>
                <h4 className="mb-3 font-medium">Top Programs:</h4>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    Microsoft Research Internship
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    Google Research Internship
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    Goldman Sachs Engineering Winter Internship
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    IBM Research Internship
                  </li>
                </ul>
                <div className="rounded-lg bg-purple-50 p-3 text-sm dark:bg-purple-950/20">
                  <strong>Eligibility:</strong> Strong research background,
                  publications (preferred), advanced technical skills, academic
                  excellence.
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Other Internship Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 text-sm md:grid-cols-3">
                <div>
                  <h4 className="mb-2 font-semibold">
                    Virtual/Remote Internships
                  </h4>
                  <p className="text-muted-foreground">
                    Work from home, flexible timing, global opportunities. Read
                    our{' '}
                    <Link
                      href="/blog/remote-internships-complete-guide"
                      className="text-primary hover:underline"
                    >
                      Remote Internships Guide
                    </Link>
                    .
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Part-Time Internships</h4>
                  <p className="text-muted-foreground">
                    During semester, 10-20 hours/week, allows balancing studies
                    and work.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Year-Long Internships</h4>
                  <p className="text-muted-foreground">
                    Extended programs, deeper learning, higher stipend, better
                    PPO chances.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              How to Apply for MNC Internships - Step-by-Step Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  1
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">
                    Build a Strong Profile (6-12 months before)
                  </h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Maintain CGPA 7.5+ (preferably 8.0+)</li>
                    <li>Build 3-4 impressive projects with live demos</li>
                    <li>Contribute to open source (GitHub)</li>
                    <li>Participate in hackathons and coding competitions</li>
                    <li>Get certifications (AWS, Google Cloud, etc.)</li>
                    <li>Optimize LinkedIn profile with keywords</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  2
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">
                    Prepare Your Application Materials
                  </h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>
                      ATS-friendly resume (use our{' '}
                      <Link
                        href="/tools/resume-builder"
                        className="text-primary hover:underline"
                      >
                        Resume Builder
                      </Link>
                      )
                    </li>
                    <li>Compelling cover letter tailored to each company</li>
                    <li>Portfolio website showcasing projects</li>
                    <li>GitHub profile with clean, documented code</li>
                    <li>LinkedIn profile optimized for recruiters</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  3
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">
                    Apply Through Multiple Channels
                  </h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>
                      <strong>Company Career Portals:</strong> Register early,
                      keep profile updated
                    </li>
                    <li>
                      <strong>LinkedIn:</strong> Use Easy Apply, connect with
                      recruiters
                    </li>
                    <li>
                      <strong>Campus Placements:</strong> Apply through college
                      placement cell
                    </li>
                    <li>
                      <strong>Employee Referrals:</strong> Network and request
                      referrals (10x better chances)
                    </li>
                    <li>
                      <strong>Job Boards:</strong> Internshala, Naukri, Indeed,{' '}
                      <Link
                        href="/internships"
                        className="text-primary hover:underline"
                      >
                        Sproutern
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  4
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Prepare for Interviews</h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Practice coding problems (LeetCode, HackerRank)</li>
                    <li>Prepare project explanations using STAR method</li>
                    <li>Practice behavioral questions</li>
                    <li>Research company culture and recent news</li>
                    <li>Prepare questions to ask interviewers</li>
                    <li>
                      Use our{' '}
                      <Link
                        href="/tools/interview-questions"
                        className="text-primary hover:underline"
                      >
                        Interview Question Generator
                      </Link>{' '}
                      for practice
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Pro Tip: When to Apply for MNC Internships
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <div className="mb-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                JUL - SEP
              </div>
              <h4 className="font-semibold">Early Applications</h4>
              <p className="text-sm text-muted-foreground">
                Top companies start accepting applications for next summer
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <div className="mb-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                OCT - DEC
              </div>
              <h4 className="font-semibold">Peak Hiring Season</h4>
              <p className="text-sm text-muted-foreground">
                Most MNCs conduct their internship drives
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <div className="mb-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                JAN - MAR
              </div>
              <h4 className="font-semibold">Last-Minute Openings</h4>
              <p className="text-sm text-muted-foreground">
                Some companies have rolling applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions About MNC Placements
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
          Get answers to the most common questions students have about getting
          placed in MNC companies. These FAQs are based on real hiring manager
          insights and student experiences.
        </p>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          <AccordionItem
            value="item-1"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              How can I improve my chances of getting shortlisted by MNCs?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              To increase your chances of getting shortlisted by MNCs:
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Maintain a strong academic record (preferably 70%+ aggregate
                  or 7.5+ CGPA)
                </li>
                <li>
                  Build practical projects relevant to your target role -
                  showcase them on GitHub with live demos
                </li>
                <li>
                  Participate in coding competitions (LeetCode, CodeChef,
                  HackerRank) and hackathons
                </li>
                <li>
                  Contribute to open-source projects - this shows real-world
                  coding experience
                </li>
                <li>
                  Optimize your LinkedIn profile and resume with relevant
                  keywords from job descriptions
                </li>
                <li>
                  Network with professionals in your target companies -
                  referrals significantly improve chances
                </li>
                <li>
                  Get relevant certifications (AWS, Google Cloud, Microsoft
                  Azure) for cloud roles
                </li>
                <li>
                  Use Sproutern's{' '}
                  <Link
                    href="/tools/skills-gap-analyzer"
                    className="text-primary hover:underline"
                  >
                    Skills Gap Analyzer
                  </Link>{' '}
                  to identify and fill skill gaps
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              What are the common mistakes to avoid in MNC interviews?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Common mistakes to avoid during MNC interviews include:
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong>Lack of company research:</strong> Not knowing about
                  the company's products, values, or recent news shows
                  disinterest
                </li>
                <li>
                  <strong>Poor communication:</strong> Not explaining your
                  thought process clearly, speaking too fast or too slow
                </li>
                <li>
                  <strong>Not asking questions:</strong> Always prepare 2-3
                  thoughtful questions to ask the interviewer
                </li>
                <li>
                  <strong>Focusing only on solution:</strong> Interviewers value
                  your problem-solving approach more than just the answer
                </li>
                <li>
                  <strong>Neglecting behavioral questions:</strong> Prepare STAR
                  method examples for common behavioral questions
                </li>
                <li>
                  <strong>Being dishonest:</strong> Don't fake skills or
                  experience - you'll be caught in technical rounds
                </li>
                <li>
                  <strong>Not testing code:</strong> Always test your code with
                  edge cases before submitting
                </li>
                <li>
                  <strong>Giving up too early:</strong> Even if stuck, show your
                  thinking process and ask for hints
                </li>
              </ul>
              <p className="mt-3">
                Read our{' '}
                <Link
                  href="/blog/50-common-hr-interview-questions-and-best-answers"
                  className="text-primary hover:underline"
                >
                  50 Common HR Interview Questions
                </Link>{' '}
                guide for detailed preparation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              How important are certifications for MNC placements?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              While certifications alone won't guarantee a job, they can
              significantly boost your profile when:
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  They are from recognized platforms (AWS, Google Cloud,
                  Microsoft, Oracle, etc.)
                </li>
                <li>
                  They validate in-demand technical skills relevant to the role
                </li>
                <li>
                  You can demonstrate practical application of the certified
                  skills in projects
                </li>
                <li>
                  They complement your academic background and fill skill gaps
                </li>
              </ul>
              <p className="mt-2">
                <strong>Best Certifications for Freshers:</strong> AWS Cloud
                Practitioner, Google Cloud Associate, Microsoft Azure
                Fundamentals, Oracle Java Certification, Red Hat Certified
                System Administrator.
              </p>
              <p className="mt-2">
                Focus on certifications that align with your career goals and
                the job requirements of your target companies. Read our{' '}
                <Link
                  href="/blog/professional-certifications-students"
                  className="text-primary hover:underline"
                >
                  Professional Certifications Guide
                </Link>{' '}
                for students.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              What is the difference between campus and off-campus placements?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <strong>Campus Placements:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Companies visit your college directly</li>
                    <li>
                      Competition limited to your batch (fewer candidates)
                    </li>
                    <li>Structured process with placement cell support</li>
                    <li>Usually higher CGPA requirements (7.5-8.0+)</li>
                    <li>One offer policy in many colleges</li>
                    <li>Easier process but limited company options</li>
                  </ul>
                </div>
                <div>
                  <strong>Off-Campus Placements:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>You apply directly through company portals/LinkedIn</li>
                    <li>Higher competition (thousands of applicants)</li>
                    <li>More company options available</li>
                    <li>Can apply to multiple companies simultaneously</li>
                    <li>Requires more self-initiative and networking</li>
                    <li>Better for students from non-tier colleges</li>
                  </ul>
                </div>
                <p className="mt-3">
                  Read our detailed{' '}
                  <Link
                    href="/blog/campus-vs-off-campus-placement"
                    className="text-primary hover:underline"
                  >
                    Campus vs Off-Campus Placement Guide
                  </Link>{' '}
                  and check{' '}
                  <Link
                    href="/off-campus-drives"
                    className="text-primary hover:underline"
                  >
                    latest off-campus drives
                  </Link>{' '}
                  on Sproutern.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              How to prepare for MNC technical interviews?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <strong>1. Master Data Structures & Algorithms:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      Solve 150-200 problems on LeetCode (focus on Medium
                      difficulty)
                    </li>
                    <li>
                      Master Arrays, Strings, Linked Lists, Trees, Graphs,
                      Dynamic Programming
                    </li>
                    <li>Understand time and space complexity</li>
                    <li>
                      Practice coding on paper/whiteboard (many companies still
                      use this)
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>2. Know Your Projects Deeply:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      Be ready to explain architecture, technologies used,
                      challenges faced
                    </li>
                    <li>Know every line of code in your projects</li>
                    <li>Prepare to discuss improvements and scalability</li>
                  </ul>
                </div>
                <div>
                  <strong>3. Practice Core Subjects:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      OOPs concepts (Inheritance, Polymorphism, Encapsulation)
                    </li>
                    <li>Database (SQL queries, Normalization, Joins)</li>
                    <li>Operating Systems basics</li>
                    <li>System Design fundamentals (for product companies)</li>
                  </ul>
                </div>
                <p className="mt-3">
                  Follow our{' '}
                  <Link
                    href="/blog/dsa-preparation-roadmap"
                    className="text-primary hover:underline"
                  >
                    DSA Preparation Roadmap
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/blog/technical-interview-preparation"
                    className="text-primary hover:underline"
                  >
                    Technical Interview Preparation Guide
                  </Link>{' '}
                  for structured learning.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              What salary can I expect as a fresher in MNCs?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <strong>
                    Service-Based Companies (TCS, Infosys, Wipro, Accenture,
                    Cognizant):
                  </strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Starting Salary: 3.5 - 7 LPA</li>
                    <li>TCS Digital/Infosys Power Programmer: 7-9 LPA</li>
                    <li>In-hand salary after deductions: ~70-75% of CTC</li>
                  </ul>
                </div>
                <div>
                  <strong>
                    Product-Based Companies (Amazon, Google, Microsoft):
                  </strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      Starting Salary: 15 - 45 LPA (varies by role and
                      performance)
                    </li>
                    <li>Amazon SDE: 18-25 LPA</li>
                    <li>
                      Google/Microsoft: 25-35 LPA (can go higher for exceptional
                      candidates)
                    </li>
                    <li>
                      In-hand salary: ~80-85% of CTC (better tax structure)
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>Factors Affecting Salary:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Company type (service vs product)</li>
                    <li>Role and location</li>
                    <li>Your skills, projects, and interview performance</li>
                    <li>College tier (IITs/NITs often get higher packages)</li>
                    <li>Negotiation skills</li>
                  </ul>
                </div>
                <p className="mt-3">
                  Use our{' '}
                  <Link
                    href="/tools/salary-calculator"
                    className="text-primary hover:underline"
                  >
                    Salary Calculator
                  </Link>{' '}
                  to understand CTC breakdown and in-hand salary. Read{' '}
                  <Link
                    href="/blog/salary-negotiation-freshers"
                    className="text-primary hover:underline"
                  >
                    Salary Negotiation Guide
                  </Link>{' '}
                  for freshers.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-7"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              How to get MNC internships as a student?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <strong>Eligibility:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      Pre-final year students (3rd year Engineering) for summer
                      internships
                    </li>
                    <li>CGPA 7.0+ (preferably 7.5+)</li>
                    <li>Strong coding skills and projects</li>
                    <li>Good communication skills</li>
                  </ul>
                </div>
                <div>
                  <strong>Application Timeline:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      <strong>July-September:</strong> Early applications open
                      for next summer
                    </li>
                    <li>
                      <strong>October-December:</strong> Peak hiring season for
                      summer internships
                    </li>
                    <li>
                      <strong>January-March:</strong> Last-minute openings and
                      rolling applications
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>How to Apply:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Company career portals (register early)</li>
                    <li>LinkedIn job postings and Easy Apply</li>
                    <li>Campus placement cell</li>
                    <li>
                      Employee referrals (best method - 10x better chances)
                    </li>
                    <li>
                      Job boards:{' '}
                      <Link
                        href="/internships"
                        className="text-primary hover:underline"
                      >
                        Sproutern
                      </Link>
                      , Internshala, Naukri
                    </li>
                  </ul>
                </div>
                <p className="mt-3">
                  Read our comprehensive{' '}
                  <Link
                    href="/blog/ultimate-guide-first-internship"
                    className="text-primary hover:underline"
                  >
                    Ultimate Guide to Landing Your First Internship
                  </Link>{' '}
                  for detailed strategies and tips.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-8"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              Can I get placed in MNCs with low CGPA or backlogs?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <strong>Low CGPA (Below 60%):</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      <strong>Service-based companies:</strong> Very difficult -
                      most require 60% minimum
                    </li>
                    <li>
                      <strong>Product companies:</strong> Possible if you have
                      exceptional skills, projects, and coding abilities
                    </li>
                    <li>
                      <strong>Focus on:</strong> Building strong projects,
                      contributing to open source, excelling in coding
                      competitions, getting referrals
                    </li>
                    <li>
                      <strong>Strategy:</strong> Apply through off-campus,
                      leverage referrals, showcase skills over academics
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>Backlogs:</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      <strong>Active backlogs:</strong> Most MNCs don't allow
                      active backlogs at joining time
                    </li>
                    <li>
                      <strong>Cleared backlogs:</strong> Usually acceptable if
                      cleared before joining
                    </li>
                    <li>
                      <strong>Some companies:</strong> Allow 1 active backlog
                      during interview but must clear before joining
                    </li>
                    <li>
                      <strong>Best approach:</strong> Clear all backlogs before
                      applying to avoid complications
                    </li>
                  </ul>
                </div>
                <p className="mt-3">
                  <strong>Pro Tip:</strong> If you have low CGPA or backlogs,
                  focus on building exceptional skills and projects. Product
                  companies value skills over marks. Use our{' '}
                  <Link
                    href="/tools/skills-gap-analyzer"
                    className="text-primary hover:underline"
                  >
                    Skills Gap Analyzer
                  </Link>{' '}
                  to identify what to learn.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-9"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              How long does the MNC interview process take?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <strong>
                    Service-Based Companies (TCS, Infosys, Wipro):
                  </strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Online Assessment: 1-2 days after application</li>
                    <li>
                      Technical Round: 3-7 days after clearing online test
                    </li>
                    <li>HR Round: 1-3 days after technical round</li>
                    <li>Offer: 5-10 days after HR round</li>
                    <li>
                      <strong>Total: 2-3 weeks</strong>
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>
                    Product-Based Companies (Amazon, Google, Microsoft):
                  </strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>Online Assessment: 1 week after application</li>
                    <li>Phone Screen: 1-2 weeks after OA</li>
                    <li>Technical Rounds (2-4 rounds): 2-4 weeks</li>
                    <li>HR/Managerial Round: 1 week after technical</li>
                    <li>Offer: 1-2 weeks after final round</li>
                    <li>
                      <strong>Total: 6-10 weeks</strong>
                    </li>
                  </ul>
                </div>
                <p className="mt-3">
                  <strong>Note:</strong> These timelines are approximate and can
                  vary. Some companies have faster processes, especially during
                  mass hiring drives. Always check with the recruiter for
                  specific timelines.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-10"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              What skills are most important for MNC placements?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <strong>Technical Skills (Must Have):</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      <strong>Programming Language:</strong> Master one language
                      deeply (Java, Python, or C++)
                    </li>
                    <li>
                      <strong>Data Structures & Algorithms:</strong> Arrays,
                      Strings, Trees, Graphs, Dynamic Programming
                    </li>
                    <li>
                      <strong>Database:</strong> SQL queries, Joins,
                      Normalization
                    </li>
                    <li>
                      <strong>OOPs Concepts:</strong> Inheritance, Polymorphism,
                      Encapsulation, Abstraction
                    </li>
                    <li>
                      <strong>System Design Basics:</strong> For product
                      companies (scalability, load balancing)
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>Soft Skills (Equally Important):</strong>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      <strong>Communication:</strong> Clear articulation,
                      explaining technical concepts simply
                    </li>
                    <li>
                      <strong>Problem Solving:</strong> Logical thinking,
                      breaking down complex problems
                    </li>
                    <li>
                      <strong>Teamwork:</strong> Collaboration, conflict
                      resolution
                    </li>
                    <li>
                      <strong>Adaptability:</strong> Willingness to learn new
                      technologies
                    </li>
                  </ul>
                </div>
                <p className="mt-3">
                  Use our{' '}
                  <Link
                    href="/tools/skills-assessment"
                    className="text-primary hover:underline"
                  >
                    Skills Assessment
                  </Link>{' '}
                  tool to evaluate your current skills and{' '}
                  <Link
                    href="/blog/soft-skills-development-guide"
                    className="text-primary hover:underline"
                  >
                    Soft Skills Development Guide
                  </Link>{' '}
                  to improve communication and teamwork.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 rounded-lg bg-primary/5 p-6 text-center">
          <p className="mb-4 text-muted-foreground">
            Still have questions? Check our comprehensive guides and resources:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href="/blog">Browse All Career Guides</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href="/resources">View Resources</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href="/faq">Visit FAQ Page</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
