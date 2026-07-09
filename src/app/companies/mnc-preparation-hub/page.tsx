import { Metadata } from 'next';
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
  Code,
  MessageSquare,
  Building2,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Calculator,
  FileQuestion,
  Brain,
  Laptop,
  GraduationCap,
  Briefcase,
  IndianRupee,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'MNC Preparation Hub',
  description:
    'Your one-stop hub for MNC placement preparation. Access guides, interview questions, salary information, work culture insights, and all resources needed to crack MNC interviews.',
  keywords:
    'MNC preparation, MNC placement prep, MNC interview prep, MNC resources, MNC guides, MNC placement hub',
  openGraph: {
    title: 'MNC Preparation Hub',
    description:
      'Complete resources for MNC placement preparation in one place.',
    url: 'https://sproutern.com/companies/mnc-preparation-hub',
    type: 'website',
  },
};

export default function MNCPreparationHubPage() {
  const mainGuides = [
    {
      title: 'MNC Placement Guide',
      description: 'Complete step-by-step guide to get placed in top MNCs',
      link: '/companies/mnc-placement-guide',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'MNC Internship Guide',
      description: 'How to secure internships at top MNC companies',
      link: '/companies/mnc-internship-guide',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'MNC Interview Questions',
      description: 'Complete collection of technical and HR questions',
      link: '/companies/mnc-interview-questions',
      icon: FileQuestion,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'MNC Salary Guide',
      description: 'Compare salary packages across all top MNCs',
      link: '/companies/mnc-salary-guide',
      icon: IndianRupee,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'MNC Work Culture',
      description: 'Understand work culture and what to expect',
      link: '/companies/mnc-work-culture',
      icon: Building2,
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const blogCategories = [
    {
      title: 'Aptitude & Tests',
      blogs: [
        {
          title: 'MNC Aptitude Test Preparation',
          link: '/blog/mnc-aptitude-test-preparation-guide',
        },
        {
          title: 'MNC Off-Campus Drive Preparation',
          link: '/blog/mnc-off-campus-drive-preparation',
        },
        {
          title: 'MNC English Test Preparation',
          link: '/blog/mnc-english-test-preparation',
        },
        {
          title: 'MNC Puzzle Questions Guide',
          link: '/blog/mnc-puzzle-questions-logical-reasoning',
        },
      ],
      icon: Brain,
    },
    {
      title: 'Interview Preparation',
      blogs: [
        {
          title: 'MNC Technical Interview Questions',
          link: '/blog/mnc-technical-interview-questions-answers',
        },
        {
          title: 'MNC HR Interview Questions',
          link: '/blog/mnc-hr-interview-questions-freshers',
        },
        {
          title: 'MNC Coding Interview Preparation',
          link: '/blog/mnc-coding-interview-preparation',
        },
        {
          title: 'MNC Behavioral Interview Guide',
          link: '/blog/mnc-behavioral-interview-star-examples',
        },
      ],
      icon: MessageSquare,
    },
    {
      title: 'Career & Growth',
      blogs: [
        {
          title: 'MNC Work Culture Guide',
          link: '/blog/mnc-work-culture-first-job',
        },
        {
          title: 'MNC Career Growth Path',
          link: '/blog/mnc-career-growth-path-promotion',
        },
        {
          title: 'MNC Onboarding Process',
          link: '/blog/mnc-onboarding-process-first-90-days',
        },
        {
          title: 'MNC vs Startup Comparison',
          link: '/blog/mnc-vs-startup-career-comparison',
        },
      ],
      icon: TrendingUp,
    },
    {
      title: 'Application & Resume',
      blogs: [
        {
          title: 'MNC Resume Format Guide',
          link: '/blog/mnc-resume-format-ats-template',
        },
        {
          title: 'MNC Group Discussion Tips',
          link: '/blog/mnc-group-discussion-tips-topics',
        },
        {
          title: 'MNC Interview Dress Code',
          link: '/blog/mnc-interview-dress-code-etiquette',
        },
        {
          title: 'MNC Pre-Placement Talk Guide',
          link: '/blog/mnc-pre-placement-talk-guide',
        },
      ],
      icon: Briefcase,
    },
  ];

  const tools = [
    {
      title: 'Resume Score Checker',
      description: 'Check if your resume is ATS-friendly',
      link: '/tools/resume-score-checker',
      icon: FileQuestion,
    },
    {
      title: 'Interview Question Generator',
      description: 'Practice HR, Technical, and Behavioral questions',
      link: '/tools/interview-questions',
      icon: MessageSquare,
    },
    {
      title: 'Aptitude Test',
      description: 'Practice quantitative and logical reasoning',
      link: '/tools/aptitude-test',
      icon: Brain,
    },
    {
      title: 'Salary Calculator',
      description: 'Calculate your in-hand salary from CTC',
      link: '/tools/salary-calculator',
      icon: Calculator,
    },
    {
      title: 'DSA Quiz',
      description: 'Test your Data Structures knowledge',
      link: '/tools/dsa-quiz',
      icon: Code,
    },
    {
      title: 'Skills Gap Analyzer',
      description: 'Identify skills you need to learn',
      link: '/tools/skills-gap-analyzer',
      icon: Target,
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl py-12">
      {/* Hero Section */}
      <div className="mb-16 space-y-6 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Trophy className="mr-2 h-4 w-4" />
          Complete MNC Preparation Hub
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
          MNC Preparation Hub
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Your complete resource center for MNC placement preparation.
          Everything you need to crack interviews at TCS, Infosys, Wipro,
          Accenture, Google, Amazon, and Microsoft.
        </p>
      </div>

      {/* Main Guides */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Essential Guides
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainGuides.map((guide, i) => (
            <Card
              key={i}
              className="group transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${guide.color} mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <guide.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="group w-full"
                >
                  <Link href={guide.link}>
                    Read Guide{' '}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Categories */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          MNC Placement Blogs
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blogCategories.map((category, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <category.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.blogs.map((blog, j) => (
                    <li key={j}>
                      <Link
                        href={blog.link}
                        className="group flex items-center gap-2 text-primary hover:underline"
                      >
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <span>{blog.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Preparation Tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <Card
              key={i}
              className="transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <tool.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </div>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  asChild
                  className="w-full"
                >
                  <Link href={tool.link}>
                    Use Tool <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Links */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Company-Specific Resources
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { name: 'TCS', link: '/companies/tcs' },
            { name: 'Infosys', link: '/companies/infosys' },
            { name: 'Wipro', link: '/companies/wipro' },
            { name: 'Accenture', link: '/companies/accenture' },
            { name: 'Cognizant', link: '/companies/cognizant' },
            { name: 'Amazon', link: '/companies/amazon' },
            { name: 'Google', link: '/companies/google' },
            { name: 'Microsoft', link: '/companies/microsoft' },
          ].map((company, i) => (
            <Button
              key={i}
              variant="outline"
              asChild
            >
              <Link href={company.link}>{company.name}</Link>
            </Button>
          ))}
        </div>
      </section>

      {/* Quick Start Guide */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
        <CardContent className="p-8">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Lightbulb className="h-6 w-6 text-primary" />
            Quick Start: 30-Day MNC Preparation Plan
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="mb-3 font-semibold">Week 1-2: Foundation</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Read MNC Placement Guide</li>
                <li>Build ATS-friendly resume</li>
                <li>Start aptitude practice</li>
                <li>Learn company requirements</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Week 3: Technical Prep</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Practice coding problems</li>
                <li>Revise DSA concepts</li>
                <li>Prepare project explanations</li>
                <li>Practice technical questions</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Week 4: Interview Prep</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Prepare HR answers</li>
                <li>Practice STAR method</li>
                <li>Mock interviews</li>
                <li>Final revision</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
