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
  AlertTriangle,
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
  ExternalLink,
  Star,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'How to Get Internship Opportunities in MNC Companies',
  description:
    'Complete guide to secure internships at top MNCs like TCS, Infosys, Wipro, Accenture, Google, Amazon, and Microsoft. Learn eligibility criteria, application strategies, interview preparation, and how to convert internships into full-time offers. Expert insights from ex-FAANG hiring managers.',
  keywords:
    'how to apply for MNC internships, internship opportunities in MNC companies, MNC internship guide, summer internships MNC, winter internships MNC, MNC internship eligibility, MNC internship interview, MNC internship application, TCS internship, Infosys internship, Wipro internship, Google internship, Amazon internship, Microsoft internship, Accenture internship, Cognizant internship, MNC internship stipend, MNC internship PPO, pre-placement offer, how to get MNC internship, MNC internship process',
  openGraph: {
    title:
      'How to Get Internship Opportunities in MNC Companies | Complete Guide',
    description:
      'Master the art of landing internships at top MNCs. Learn eligibility, application strategies, interview tips, and how to convert internships into full-time offers.',
    url: 'https://sproutern.com/companies/mnc-internship-guide',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['Prem Kumar'],
    tags: [
      'MNC Internships',
      'Career Guidance',
      'Internship Preparation',
      'Summer Internships',
      'PPO',
      'Career Growth',
    ],
  },
};

export default function MNCInternshipGuidePage() {
  // Comprehensive FAQ Schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the eligibility criteria for MNC internships?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most MNCs require pre-final year students (3rd year Engineering) for summer internships, CGPA 7.0+ (preferably 7.5+), strong coding skills, and relevant projects. Some top companies like Google and Microsoft prefer 8.0+ CGPA. Check specific company requirements before applying.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I apply for MNC summer internships?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Apply between July-September for early applications (next summer), October-December is peak hiring season, and January-March for last-minute openings. Top companies like Google and Microsoft start accepting applications as early as July for next year's summer internships.",
        },
      },
      {
        '@type': 'Question',
        name: 'How to convert MNC internship into full-time offer (PPO)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "To convert internship to PPO: Deliver exceptional work, take ownership of projects, communicate effectively, network with team members, seek feedback and improve, document your contributions, and express interest in full-time role. Most MNCs evaluate interns throughout the program. Read Sproutern's guide on converting internships to job offers.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the average stipend for MNC internships in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stipend varies: Service-based companies (TCS, Infosys, Wipro) offer 10,000-25,000/month, Product companies (Amazon, Google, Microsoft) offer 50,000-1,00,000+/month. Top tech companies can offer even higher stipends. Stipend also depends on location, role, and company policies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get MNC internship with low CGPA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It's challenging but possible. Focus on exceptional projects, coding skills, open-source contributions, hackathon wins, and strong referrals. Product companies value skills over marks. Build a strong portfolio and network actively. Some companies have relaxed CGPA criteria for exceptional candidates.",
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

      {/* Hero Section */}
      <div className="mb-16 space-y-6 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Trophy className="mr-2 h-4 w-4" />
          Complete MNC Internship Guide
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
          How to Get{' '}
          <span className="text-primary">Internship Opportunities</span>
          <br className="hidden md:block" />
          <span className="mt-2 block text-2xl font-semibold text-muted-foreground md:text-4xl">
            in Top MNC Companies
          </span>
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Your complete roadmap to securing internships at TCS, Infosys, Wipro,
          Accenture, Google, Amazon, and Microsoft. Learn application
          strategies, interview preparation, and how to convert internships into
          Pre-Placement Offers (PPO).
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
            <Link href="/companies/mnc-placement-guide">
              MNC Placement Guide
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
                href="#why-mnc-internships"
                className="hover:text-primary hover:underline"
              >
                Why MNC Internships Matter
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#types"
                className="hover:text-primary hover:underline"
              >
                Types of MNC Internships
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#eligibility"
                className="hover:text-primary hover:underline"
              >
                Eligibility Criteria
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#application"
                className="hover:text-primary hover:underline"
              >
                Application Strategies
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#interview"
                className="hover:text-primary hover:underline"
              >
                Interview Preparation
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#ppo"
                className="hover:text-primary hover:underline"
              >
                Converting to PPO
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#company-guides"
                className="hover:text-primary hover:underline"
              >
                Company-Wise Internship Programs
              </a>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              <a
                href="#faq"
                className="hover:text-primary hover:underline"
              >
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Why MNC Internships Matter */}
      <section
        id="why-mnc-internships"
        className="mb-20 scroll-mt-20"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            1
          </div>
          <h2 className="text-3xl font-bold">
            Why MNC Internships Matter for Your Career
          </h2>
        </div>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-blue-500" />
                Career Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <h4 className="mb-1 font-semibold">
                    Pre-Placement Offers (PPO)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    60-70% of MNC interns receive full-time offers, eliminating
                    the need for placement season stress.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <h4 className="mb-1 font-semibold">Industry Exposure</h4>
                  <p className="text-sm text-muted-foreground">
                    Work on real-world projects, understand corporate culture,
                    and learn industry best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <h4 className="mb-1 font-semibold">Mentorship</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn from experienced professionals, get career guidance,
                    and build professional networks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <h4 className="mb-1 font-semibold">Resume Boost</h4>
                  <p className="text-sm text-muted-foreground">
                    MNC internship experience significantly improves your resume
                    and makes you stand out in future applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                Financial & Learning Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <h4 className="mb-1 font-semibold">Competitive Stipend</h4>
                  <p className="text-sm text-muted-foreground">
                    Earn while you learn. Top MNCs offer 50,000-1,00,000+ per
                    month stipends.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <h4 className="mb-1 font-semibold">Skill Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn cutting-edge technologies, tools, and methodologies
                    used in industry.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <h4 className="mb-1 font-semibold">Global Opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    Many MNCs offer international assignments and exposure to
                    global teams.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <h4 className="mb-1 font-semibold">
                    Certificate & Recognition
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Receive internship certificates from reputed companies,
                    valuable for future career growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
          <p className="text-sm text-muted-foreground">
            <strong>Pro Tip:</strong> MNC internships are highly competitive but
            worth the effort. Even if you don't get a PPO, the experience and
            network you build will help you in future job applications. Read our{' '}
            <Link
              href="/blog/convert-internship-to-job-offer"
              className="font-semibold text-primary hover:underline"
            >
              Complete Guide on Converting Internships to Job Offers
            </Link>{' '}
            to maximize your chances.
          </p>
        </div>
      </section>

      {/* Types of MNC Internships */}
      <section
        id="types"
        className="mb-20 scroll-mt-20"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            2
          </div>
          <h2 className="text-3xl font-bold">Types of MNC Internships</h2>
        </div>

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
                Paid 2-3 month programs (May-July) for pre-final year students.
                Highly competitive with excellent PPO opportunities.
              </p>
            </CardHeader>
            <CardContent>
              <h4 className="mb-3 font-medium">Top Programs:</h4>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                  <span>Google Summer of Code (GSOC) - Open Source</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                  <span>Microsoft Engage - Software Engineering</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                  <span>Amazon Summer Internship - SDE</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                  <span>TCS Summer Internship Program</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                  <span>Infosys Summer Internship</span>
                </li>
              </ul>
              <div className="rounded-lg bg-blue-50 p-3 text-sm dark:bg-blue-950/20">
                <strong>Eligibility:</strong> Pre-final year students (3rd year
                Engineering), CGPA 7.0+, strong coding skills, good projects.
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
                1-2 month programs (Dec-Jan) with focus on research projects and
                specialized domains.
              </p>
            </CardHeader>
            <CardContent>
              <h4 className="mb-3 font-medium">Top Programs:</h4>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                  <span>Microsoft Research Internship</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                  <span>Google Research Internship</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                  <span>Goldman Sachs Engineering Winter Internship</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                  <span>IBM Research Internship</span>
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
                <h4 className="mb-2 flex items-center gap-2 font-semibold">
                  <Globe className="h-4 w-4" />
                  Virtual/Remote Internships
                </h4>
                <p className="mb-2 text-muted-foreground">
                  Work from home, flexible timing, global opportunities.
                </p>
                <Link
                  href="/blog/remote-internships-complete-guide"
                  className="text-xs text-primary hover:underline"
                >
                  Read Remote Internships Guide →
                </Link>
              </div>
              <div>
                <h4 className="mb-2 flex items-center gap-2 font-semibold">
                  <Clock className="h-4 w-4" />
                  Part-Time Internships
                </h4>
                <p className="text-muted-foreground">
                  During semester, 10-20 hours/week, allows balancing studies
                  and work.
                </p>
              </div>
              <div>
                <h4 className="mb-2 flex items-center gap-2 font-semibold">
                  <Calendar className="h-4 w-4" />
                  Year-Long Internships
                </h4>
                <p className="text-muted-foreground">
                  Extended programs, deeper learning, higher stipend, better PPO
                  chances.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Eligibility Criteria */}
      <section
        id="eligibility"
        className="mb-20 scroll-mt-20"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            3
          </div>
          <h2 className="text-3xl font-bold">
            Eligibility Criteria for MNC Internships
          </h2>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-xl font-semibold">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Academic Requirements
                  </h3>
                  <div className="space-y-3">
                    <div className="rounded-lg bg-muted/50 p-3">
                      <strong className="text-sm">Year of Study:</strong>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Pre-final year students (3rd year Engineering) for
                        summer internships. Some companies accept 2nd year
                        students for specialized programs.
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <strong className="text-sm">CGPA/Percentage:</strong>
                      <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>
                          Service-based (TCS, Infosys, Wipro): 7.0+ CGPA or 70%+
                        </li>
                        <li>
                          Product-based (Google, Amazon, Microsoft): 7.5-8.0+
                          CGPA preferred
                        </li>
                        <li>Top programs: 8.0+ CGPA or 80%+</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <strong className="text-sm">Branch/Stream:</strong>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Engineering (CS/IT/ECE preferred), but other branches
                        also accepted for support roles.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-xl font-semibold">
                    <Code className="h-5 w-5 text-blue-500" />
                    Technical Requirements
                  </h3>
                  <div className="space-y-3">
                    <div className="rounded-lg bg-muted/50 p-3">
                      <strong className="text-sm">Programming Skills:</strong>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Strong coding skills in at least one language (Java,
                        Python, C++). Ability to solve coding problems.
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <strong className="text-sm">Projects:</strong>
                      <p className="mt-1 text-sm text-muted-foreground">
                        2-3 impressive projects with live demos. GitHub profile
                        with clean, documented code.
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <strong className="text-sm">Additional Skills:</strong>
                      <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Data Structures & Algorithms knowledge</li>
                        <li>Open-source contributions (preferred)</li>
                        <li>Hackathon participation</li>
                        <li>Relevant certifications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
            <CardContent className="p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <Lightbulb className="h-5 w-5 text-green-600" />
                What If I Don't Meet All Requirements?
              </h3>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <strong>Low CGPA (Below 7.0):</strong>
                  <ul className="mt-1 list-inside list-disc text-muted-foreground">
                    <li>Focus on exceptional projects and coding skills</li>
                    <li>Contribute to open source</li>
                    <li>Win hackathons or coding competitions</li>
                    <li>Get strong referrals</li>
                    <li>Apply to companies with relaxed criteria</li>
                  </ul>
                </div>
                <div>
                  <strong>No Projects:</strong>
                  <ul className="mt-1 list-inside list-disc text-muted-foreground">
                    <li>Build 2-3 projects immediately</li>
                    <li>
                      Use our{' '}
                      <Link
                        href="/tools/project-ideas"
                        className="text-primary hover:underline"
                      >
                        Project Ideas Generator
                      </Link>
                    </li>
                    <li>Contribute to open source</li>
                    <li>Participate in hackathons</li>
                    <li>
                      Read our{' '}
                      <Link
                        href="/blog/project-ideas-students"
                        className="text-primary hover:underline"
                      >
                        Project Ideas Guide
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Strategies */}
      <section
        id="application"
        className="mb-20 scroll-mt-20"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            4
          </div>
          <h2 className="text-3xl font-bold">
            How to Apply for MNC Internships - Step-by-Step Guide
          </h2>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Complete Application Roadmap</CardTitle>
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
                    <li>
                      Use our{' '}
                      <Link
                        href="/tools/skills-gap-analyzer"
                        className="text-primary hover:underline"
                      >
                        Skills Gap Analyzer
                      </Link>{' '}
                      to identify areas to improve
                    </li>
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
                      </Link>{' '}
                      or{' '}
                      <Link
                        href="/tools/resume-score-checker"
                        className="text-primary hover:underline"
                      >
                        Resume Score Checker
                      </Link>
                      )
                    </li>
                    <li>
                      Compelling cover letter tailored to each company (use our{' '}
                      <Link
                        href="/tools/cover-letter-generator"
                        className="text-primary hover:underline"
                      >
                        Cover Letter Generator
                      </Link>
                      )
                    </li>
                    <li>Portfolio website showcasing projects</li>
                    <li>GitHub profile with clean, documented code</li>
                    <li>
                      LinkedIn profile optimized for recruiters (read our{' '}
                      <Link
                        href="/blog/linkedin-optimization-students"
                        className="text-primary hover:underline"
                      >
                        LinkedIn Optimization Guide
                      </Link>
                      )
                    </li>
                    <li>
                      Download free templates from{' '}
                      <Link
                        href="/resources/resume-templates"
                        className="text-primary hover:underline"
                      >
                        Resume Templates
                      </Link>
                    </li>
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
                      keep profile updated (TCS NextStep, Infosys Career, Wipro
                      Careers, etc.)
                    </li>
                    <li>
                      <strong>LinkedIn:</strong> Use Easy Apply, connect with
                      recruiters, follow company pages
                    </li>
                    <li>
                      <strong>Campus Placements:</strong> Apply through college
                      placement cell
                    </li>
                    <li>
                      <strong>Employee Referrals:</strong> Network and request
                      referrals (10x better chances) - read our{' '}
                      <Link
                        href="/blog/job-referrals-guide"
                        className="text-primary hover:underline"
                      >
                        Job Referrals Guide
                      </Link>
                    </li>
                    <li>
                      <strong>Job Boards:</strong>{' '}
                      <Link
                        href="/internships"
                        className="text-primary hover:underline"
                      >
                        Sproutern
                      </Link>
                      , Internshala, Naukri, Indeed
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  4
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">
                    Track Your Applications
                  </h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>
                      Use our{' '}
                      <Link
                        href="/tools/application-tracker"
                        className="text-primary hover:underline"
                      >
                        Application Tracker
                      </Link>{' '}
                      to manage all applications
                    </li>
                    <li>Follow up politely if no response after 2-3 weeks</li>
                    <li>Keep all application materials updated</li>
                    <li>Prepare for interviews while waiting</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Calendar className="h-5 w-5 text-blue-600" />
            When to Apply for MNC Internships - Timeline
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <div className="mb-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                JUL - SEP
              </div>
              <h4 className="mb-2 font-semibold">Early Applications</h4>
              <p className="text-sm text-muted-foreground">
                Top companies start accepting applications for next summer.
                Apply early for best chances.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <div className="mb-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                OCT - DEC
              </div>
              <h4 className="mb-2 font-semibold">Peak Hiring Season</h4>
              <p className="text-sm text-muted-foreground">
                Most MNCs conduct their internship drives. Maximum opportunities
                available.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <div className="mb-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                JAN - MAR
              </div>
              <h4 className="mb-2 font-semibold">Last-Minute Openings</h4>
              <p className="text-sm text-muted-foreground">
                Some companies have rolling applications. Keep applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Preparation */}
      <section
        id="interview"
        className="mb-20 scroll-mt-20"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            5
          </div>
          <h2 className="text-3xl font-bold">
            MNC Internship Interview Preparation
          </h2>
        </div>

        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
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

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-600" />
                Technical Interview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="mb-2 font-semibold">What to Expect:</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Coding problems (LeetCode style)</li>
                  <li>Deep dive into your projects</li>
                  <li>Core CS fundamentals (DSA, OOPs, DBMS)</li>
                  <li>System design basics (for product companies)</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Preparation Tips:</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Solve 100+ LeetCode problems (Easy to Medium)</li>
                  <li>Know every detail of your projects</li>
                  <li>Practice explaining code clearly</li>
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-600" />
                HR/Behavioral Interview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="mb-2 font-semibold">Common Questions:</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>"Tell me about yourself"</li>
                  <li>"Why do you want to intern with us?"</li>
                  <li>"What are your strengths and weaknesses?"</li>
                  <li>Behavioral questions (STAR method)</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Preparation Tips:</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Research the company thoroughly</li>
                  <li>Prepare STAR method examples</li>
                  <li>Practice "Tell me about yourself"</li>
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
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Converting to PPO */}
      <section
        id="ppo"
        className="mb-20 scroll-mt-20"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            6
          </div>
          <h2 className="text-3xl font-bold">
            How to Convert Internship into Pre-Placement Offer (PPO)
          </h2>
        </div>

        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/20">
          <p className="text-sm text-muted-foreground">
            <strong>Success Rate:</strong> 60-70% of MNC interns receive PPOs.
            Follow these strategies to maximize your chances. Read our detailed{' '}
            <Link
              href="/blog/convert-internship-to-job-offer"
              className="font-semibold text-primary hover:underline"
            >
              Guide on Converting Internships to Job Offers
            </Link>
            .
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Strategies for PPO Conversion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Deliver Exceptional Work
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Complete projects on time, exceed expectations, take
                      ownership, and show initiative.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Communicate Effectively
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Regular updates, clear documentation, ask questions, and
                      participate in meetings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="mb-1 font-semibold">Network Actively</h4>
                    <p className="text-sm text-muted-foreground">
                      Build relationships with team members, managers, and other
                      interns. Attend company events.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="mb-1 font-semibold">Seek Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                      Regularly ask for feedback, implement suggestions, and
                      show improvement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Document Your Contributions
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Keep track of achievements, metrics, and impact. Use this
                      in final evaluation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="mb-1 font-semibold">Express Interest</h4>
                    <p className="text-sm text-muted-foreground">
                      Let your manager know you're interested in a full-time
                      role. Discuss career goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Company-Wise Internship Programs */}
      <section
        id="company-guides"
        className="mb-20 scroll-mt-20"
      >
        <h2 className="mb-8 text-center text-3xl font-bold">
          Company-Wise Internship Programs
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-muted-foreground">
          Each MNC has unique internship programs with different eligibility,
          application process, and benefits. Understanding company-specific
          requirements improves your chances.
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'TCS',
              program: 'Summer Internship Program',
              stipend: '15,000-25,000/month',
              duration: '2-3 months',
              link: '/companies/tcs',
              focus: 'Software Development, Testing',
              color: 'border-blue-500',
            },
            {
              name: 'Infosys',
              program: 'Summer Internship',
              stipend: '20,000-30,000/month',
              duration: '2-3 months',
              link: '/companies/infosys',
              focus: 'Software Engineering, Data Analytics',
              color: 'border-green-500',
            },
            {
              name: 'Wipro',
              program: 'Wipro Internship Program',
              stipend: '18,000-28,000/month',
              duration: '2-3 months',
              link: '/companies/wipro',
              focus: 'Development, Testing, Cloud',
              color: 'border-purple-500',
            },
            {
              name: 'Accenture',
              program: 'Summer Internship',
              stipend: '25,000-35,000/month',
              duration: '2-3 months',
              link: '/companies/accenture',
              focus: 'Consulting, Technology, Digital',
              color: 'border-pink-500',
            },
            {
              name: 'Amazon',
              program: 'SDE Internship',
              stipend: '60,000-1,00,000+/month',
              duration: '3 months',
              link: '/companies/amazon',
              focus: 'Software Development, ML/AI',
              color: 'border-yellow-500',
            },
            {
              name: 'Google',
              program: 'Software Engineering Intern',
              stipend: '80,000-1,20,000+/month',
              duration: '3 months',
              link: '/companies/google',
              focus: 'Software Engineering, Research',
              color: 'border-red-500',
            },
            {
              name: 'Microsoft',
              program: 'Software Engineering Intern',
              stipend: '70,000-1,00,000+/month',
              duration: '3 months',
              link: '/companies/microsoft',
              focus: 'Software Development, Cloud',
              color: 'border-blue-600',
            },
            {
              name: 'Cognizant',
              program: 'Summer Internship',
              stipend: '20,000-30,000/month',
              duration: '2-3 months',
              link: '/companies/cognizant',
              focus: 'Development, Digital Solutions',
              color: 'border-orange-500',
            },
          ].map((company, i) => (
            <Card
              key={i}
              className={`border-l-4 transition-colors hover:border-primary ${company.color}`}
            >
              <CardHeader>
                <CardTitle className="text-lg">{company.name}</CardTitle>
                <CardDescription>{company.program}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Stipend:
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {company.stipend}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Duration:
                  </p>
                  <p className="text-sm">{company.duration}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Focus Areas:
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {company.focus}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="group mt-4 w-full"
                  size="sm"
                  asChild
                >
                  <Link href={company.link}>
                    View Details{' '}
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="mb-20"
      >
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions About MNC Internships
        </h2>
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
              What is the eligibility criteria for MNC internships?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Most MNCs require pre-final year students (3rd year Engineering)
              for summer internships, CGPA 7.0+ (preferably 7.5+), strong coding
              skills, and relevant projects. Some top companies like Google and
              Microsoft prefer 8.0+ CGPA. Check specific company requirements
              before applying.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              When should I apply for MNC summer internships?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Apply between July-September for early applications (next summer),
              October-December is peak hiring season, and January-March for
              last-minute openings. Top companies like Google and Microsoft
              start accepting applications as early as July for next year's
              summer internships.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              How to convert MNC internship into full-time offer (PPO)?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              To convert internship to PPO: Deliver exceptional work, take
              ownership of projects, communicate effectively, network with team
              members, seek feedback and improve, document your contributions,
              and express interest in full-time role. Most MNCs evaluate interns
              throughout the program. Read our{' '}
              <Link
                href="/blog/convert-internship-to-job-offer"
                className="text-primary hover:underline"
              >
                complete guide on converting internships to job offers
              </Link>
              .
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              What is the average stipend for MNC internships in India?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Stipend varies: Service-based companies (TCS, Infosys, Wipro)
              offer 10,000-25,000/month, Product companies (Amazon, Google,
              Microsoft) offer 50,000-1,00,000+/month. Top tech companies can
              offer even higher stipends. Stipend also depends on location,
              role, and company policies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="rounded-lg border px-6"
          >
            <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
              Can I get MNC internship with low CGPA?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              It's challenging but possible. Focus on exceptional projects,
              coding skills, open-source contributions, hackathon wins, and
              strong referrals. Product companies value skills over marks. Build
              a strong portfolio and network actively. Some companies have
              relaxed CGPA criteria for exceptional candidates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 rounded-lg bg-primary/5 p-6 text-center">
          <p className="mb-4 text-muted-foreground">
            Need more help? Explore our comprehensive resources:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href="/companies/mnc-placement-guide">
                MNC Placement Guide
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href="/blog">Browse Career Guides</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href="/internships">Find Internships</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
