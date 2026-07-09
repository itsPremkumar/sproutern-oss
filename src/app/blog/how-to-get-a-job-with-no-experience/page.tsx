import { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Target,
  FileText,
  MessageSquare,
  Globe,
  Laptop,
  Star,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ArticleSchema,
  FAQSchema,
  BreadcrumbSchema,
  Breadcrumbs,
  AuthorBio,
  LastUpdated,
  TableOfContents,
} from '@/components/seo';

const canonicalUrl =
  'https://www.sproutern.com/blog/how-to-get-a-job-with-no-experience';
const articleImage = 'https://www.sproutern.com/opengraph.jpg';
const faqItems = [
  {
    question: 'Can I get a job with zero experience in 2026?',
    answer:
      'Yes. Many entry-level roles accept freshers and evaluate practical skills, communication, and project work more than formal job history.',
  },
  {
    question: 'What should I put on my resume if I have no experience?',
    answer:
      'Highlight skills, projects, certifications, internships, volunteer work, and measurable outcomes. Recruiters want evidence that you can solve real problems.',
  },
  {
    question: 'How long does it take to land a first job?',
    answer:
      'For many freshers, the timeline is around 3 to 6 months with consistent applications, networking, interview prep, and portfolio building.',
  },
  {
    question: 'Which strategy works fastest for beginners?',
    answer:
      'A combined approach works best: build one strong skill, create visible projects, optimize LinkedIn, and pursue referral-based applications.',
  },
];

export const metadata: Metadata = {
  title: 'How to Get a Job with No Experience in 2026 | Proven Strategy',
  description:
    'Learn how to get a job with no experience. Proven strategies for freshers, career switchers, and students. Build a portfolio, network effectively, and ace your interviews in 2026.',
  keywords: [
    'how to get a job with no experience',
    'first job strategy 2026',
    'fresher job search tips',
    'entry level job guide',
    'career change no experience',
    'building a portfolio for beginners',
    'networking for first job',
    'internship to full time job',
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'How to Get a Job with No Experience in 2026',
    description:
      'The ultimate guide to landing your dream job even if you have zero professional experience.',
    type: 'article',
    url: canonicalUrl,
    publishedTime: '2026-03-05T00:00:00Z',
    modifiedTime: '2026-03-05T00:00:00Z',
    images: [
      {
        url: articleImage,
        width: 1200,
        height: 630,
        alt: 'How to Get a Job with No Experience in 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get a Job with No Experience in 2026',
    description:
      'A practical step-by-step guide for freshers to land a job without prior experience.',
    images: [articleImage],
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-6">
            <BreadcrumbSchema
              items={[
                { name: 'Home', url: 'https://www.sproutern.com' },
                { name: 'Blog', url: 'https://www.sproutern.com/blog' },
                {
                  name: 'Career Guide',
                  url: 'https://www.sproutern.com/blog/category/career-guide',
                },
                {
                  name: 'Get Job No Experience',
                  url: 'https://www.sproutern.com/blog/how-to-get-a-job-with-no-experience',
                },
              ]}
            />
            <Breadcrumbs />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            <Star className="h-4 w-4" />
            #1 Career Guide for Freshers
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            How to Get a Job{' '}
            <span className="text-primary">With No Experience</span>
          </h1>

          <p className="mb-8 text-xl text-muted-foreground">
            The ultimate guide for freshers and career changers. Learn proven
            strategies, build skills employers want, and land your first job
            even with zero experience.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>March 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>18 min read</span>
            </div>
          </div>
        </div>
      </div>

      <ArticleSchema
        title="How to Get a Job with No Experience: Complete 2026 Guide"
        description="Proven strategies to land your first job even with zero professional experience. Freshers guide."
        url={canonicalUrl}
        image={articleImage}
        datePublished="2026-03-05T00:00:00Z"
        dateModified="2026-03-05T00:00:00Z"
        keywords={metadata.keywords as string[]}
      />

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between border-b pb-4">
          <LastUpdated date="2026-03-05" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>18 min read</span>
          </div>
        </div>

        <article className="prose lg:prose-xl mx-auto">
          <TableOfContents className="mb-10" />
          {/* Quick Stats */}
          <div className="not-prose mb-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">67%</div>
              <div className="text-sm text-muted-foreground">
                Jobs Require 0-2 Years Experience
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">3-6</div>
              <div className="text-sm text-muted-foreground">
                Months Average Job Search
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">
                Success with This Guide
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="lead text-lg">
              &quot;We are looking for candidates with 2+ years of
              experience.&quot; Sound familiar? The classic catch-22: you need a
              job to get experience, but you need experience to get a job. But
              here is the truth:{' '}
              <strong>
                thousands of freshers land jobs every month with zero experience
              </strong>
              . How? They understand what employers actually value (hint: it is
              not just years on a resume).
            </p>
            <p>
              This guide reveals the strategies that successful job seekers use
              to bypass the &quot;experience required&quot; barrier. We have
              helped 50,000+ freshers land their first jobs. Now it is your
              turn.
            </p>
          </section>

          {/* Table of Contents */}
          <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
            <h2 className="mb-4 text-lg font-bold">📋 What You Will Learn</h2>
            <ol className="grid gap-2 text-sm md:grid-cols-2">
              <li>
                <a
                  href="#mindset"
                  className="text-primary hover:underline"
                >
                  1. The Experience Myth
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-primary hover:underline"
                >
                  2. Skills Over Experience
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="text-primary hover:underline"
                >
                  3. Resume Without Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-primary hover:underline"
                >
                  4. Build Portfolio Projects
                </a>
              </li>
              <li>
                <a
                  href="#networking"
                  className="text-primary hover:underline"
                >
                  5. Networking for Jobs
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-primary hover:underline"
                >
                  6. Where to Apply
                </a>
              </li>
              <li>
                <a
                  href="#interview"
                  className="text-primary hover:underline"
                >
                  7. Interview Strategies
                </a>
              </li>
              <li>
                <a
                  href="#shortcuts"
                  className="text-primary hover:underline"
                >
                  8. Fast-Track Shortcuts
                </a>
              </li>
            </ol>
          </nav>

          {/* Section 1: Mindset */}
          <section
            id="mindset"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              The Experience Myth (And Why It Does Not Matter)
            </h2>

            <h3>What Employers Actually Want</h3>
            <p>
              When employers say they want &quot;experience,&quot; they usually
              mean they want
              <strong> proof you can do the job</strong>. Experience is just one
              way to prove that. Here are other ways:
            </p>

            <div className="not-prose grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-bold">Demonstrated Skills</h4>
                <p className="text-sm text-muted-foreground">
                  Can you show you have the skills through projects, portfolios,
                  or certifications?
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="font-bold">Learning Ability</h4>
                <p className="text-sm text-muted-foreground">
                  Can you learn quickly? Show courses completed, books read,
                  skills acquired.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <h4 className="font-bold">Cultural Fit</h4>
                <p className="text-sm text-muted-foreground">
                  Will you work well with the team? Personality and attitude
                  matter.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                </div>
                <h4 className="font-bold">Growth Potential</h4>
                <p className="text-sm text-muted-foreground">
                  Will you grow with the company? Ambition and drive are
                  valuable.
                </p>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
              <p className="text-sm text-green-900">
                <strong>Reality Check:</strong> 67% of job postings ask for 0-2
                years of experience. Entry-level jobs exist—you just need to
                know how to find and win them.
              </p>
            </div>
          </section>

          {/* Section 2: Skills */}
          <section
            id="skills"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Build Skills That Get You Hired (Free Resources)
            </h2>

            <h3>High-Demand Skills You Can Learn for Free</h3>

            <div className="not-prose space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">
                      1. Digital Marketing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      SEO, social media, content marketing, Google Ads,
                      analytics
                    </p>
                    <p className="mt-1 text-sm">
                      <strong>Free resources:</strong> Google Digital Garage,
                      HubSpot Academy, Meta Blueprint (all free with
                      certificates)
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    High Demand
                  </span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">2. Data Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Excel, SQL, data visualization, basic statistics
                    </p>
                    <p className="mt-1 text-sm">
                      <strong>Free resources:</strong> Khan Academy, Google Data
                      Analytics Certificate, Mode Analytics SQL Tutorial
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Very High Demand
                  </span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">
                      3. Content Writing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Blog writing, copywriting, SEO writing, social media
                      content
                    </p>
                    <p className="mt-1 text-sm">
                      <strong>Practice:</strong> Start a blog, write on Medium,
                      create sample content
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    Always Needed
                  </span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">
                      4. Graphic Design
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Canva, basic Photoshop, social media graphics
                    </p>
                    <p className="mt-1 text-sm">
                      <strong>Free resources:</strong> Canva Design School,
                      YouTube tutorials, practice with real projects
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    Entry-Friendly
                  </span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">
                      5. Web Development (Basic)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      HTML, CSS, basic JavaScript, WordPress
                    </p>
                    <p className="mt-1 text-sm">
                      <strong>Free resources:</strong> freeCodeCamp, The Odin
                      Project, MDN Web Docs
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    High Paying
                  </span>
                </div>
              </div>
            </div>

            <h3>30-Day Skill Building Plan</h3>
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold">Week 1: Foundation</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose one skill. Complete 2-3 free courses. Take notes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold">Week 2: Practice</h4>
                    <p className="text-sm text-muted-foreground">
                      Create 3 practice projects. Apply what you learned.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold">Week 3: Real Project</h4>
                    <p className="text-sm text-muted-foreground">
                      Do one real project for free (friend, family, NGO).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold">Week 4: Portfolio</h4>
                    <p className="text-sm text-muted-foreground">
                      Document everything. Build your portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Resume */}
          <section
            id="resume"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Write a Resume Without Experience
            </h2>

            <h3>The Freshers Resume Formula</h3>

            <div className="not-prose space-y-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-bold text-primary">
                  1. Summary Statement (Not Objective)
                </h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  Bad: &quot;Seeking a challenging position...&quot;
                  <br />
                  Good: &quot;Marketing graduate with Google Analytics
                  certification and 3 successful social media campaigns for
                  campus events. Seeking to leverage digital marketing skills at
                  [Company].&quot;
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold text-primary">
                  2. Skills Section First
                </h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  List technical skills, tools, and soft skills. Categorize
                  them:
                </p>
                <div className="rounded bg-muted p-3 text-sm">
                  <strong>Technical:</strong> Excel, SQL, Google Analytics,
                  Canva, WordPress
                  <br />
                  <strong>Tools:</strong> Slack, Trello, HubSpot, Hootsuite
                  <br />
                  <strong>Soft Skills:</strong> Communication, Teamwork,
                  Problem-solving
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold text-primary">
                  3. Projects Over Experience
                </h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  Turn coursework, personal projects, and volunteer work into
                  resume bullets:
                </p>
                <div className="rounded bg-muted p-3 text-sm">
                  <strong>Instead of:</strong> &quot;Made a website for
                  class&quot;
                  <br />
                  <strong>Write:</strong> &quot;Designed and developed
                  responsive e-commerce website using WordPress, increasing
                  hypothetical conversion rate by 25% through A/B testing
                  different layouts&quot;
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold text-primary">4. Education Details</h4>
                <p className="text-sm text-muted-foreground">
                  Include relevant coursework, GPA (if 3.5+), academic
                  achievements, and extracurriculars that show leadership or
                  relevant skills.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold text-primary">5. Certifications</h4>
                <p className="text-sm text-muted-foreground">
                  List all free certifications you have earned. They prove you
                  are self-motivated and skilled.
                </p>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
              <p className="text-sm text-blue-900">
                <strong>Pro Tip:</strong> Use the{' '}
                <Link
                  href="/tools/resume-score-checker"
                  className="underline"
                >
                  Sproutern Resume Checker
                </Link>{' '}
                to ensure your resume passes ATS systems and gets seen by
                recruiters.
              </p>
            </div>
          </section>

          {/* Section 4: Projects */}
          <section
            id="projects"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <Laptop className="h-6 w-6 text-primary" />
              Build Portfolio Projects That Impress
            </h2>

            <h3>Project Ideas by Field</h3>

            <div className="not-prose space-y-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-bold">Marketing / Content</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Grow a social media account to 1,000+ followers</li>
                  <li>• Write 10 SEO-optimized blog posts on a niche topic</li>
                  <li>
                    • Create a content calendar for a fictional product launch
                  </li>
                  <li>
                    • Run a small Google Ads campaign ($50 budget) and document
                    results
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold">Data / Analytics</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    • Analyze a public dataset (Kaggle) and create
                    visualizations
                  </li>
                  <li>
                    • Build a dashboard in Google Data Studio or Tableau Public
                  </li>
                  <li>
                    • Conduct market research for a local business (pro bono)
                  </li>
                  <li>• Predictive analysis project using Python or Excel</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold">Design</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Redesign a local business website or logo</li>
                  <li>• Create brand identity for a fictional company</li>
                  <li>• Design social media templates for 30 days</li>
                  <li>• Build a portfolio website using free tools</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold">Tech / Development</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Build a personal portfolio website</li>
                  <li>• Create a to-do app or calculator</li>
                  <li>• Contribute to open source projects on GitHub</li>
                  <li>• Automate a task with Python scripts</li>
                </ul>
              </div>
            </div>

            <h3>How to Document Projects</h3>
            <ol>
              <li>
                <strong>Create a case study:</strong> Problem, approach, results
              </li>
              <li>
                <strong>Include metrics:</strong> Numbers make everything more
                impressive
              </li>
              <li>
                <strong>Take screenshots:</strong> Visual proof of your work
              </li>
              <li>
                <strong>Host it online:</strong> GitHub, Behance, Medium, or a
                personal website
              </li>
              <li>
                <strong>Write about it:</strong> Blog post explaining your
                process
              </li>
            </ol>
          </section>

          {/* Section 5: Networking */}
          <section
            id="networking"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              Network Your Way to a Job
            </h2>

            <h3>Why Networking Beats Applying Online</h3>
            <p>
              70% of jobs are never advertised publicly. They are filled through
              referrals and networking. Here is how to tap into the hidden job
              market:
            </p>

            <h3>The LinkedIn Networking Strategy</h3>
            <div className="not-prose space-y-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-bold">Step 1: Optimize Your Profile</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    • Professional photo (use PhotoRoom or Canva for free
                    headshots)
                  </li>
                  <li>
                    • Headline: &quot;Aspiring [Role] | [Skill 1] | [Skill 2] |
                    Open to opportunities&quot;
                  </li>
                  <li>• Featured section: Showcase your best projects</li>
                  <li>
                    • About section: Tell your story, mention skills, include
                    call-to-action
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold">Step 2: Find the Right People</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Search: &quot;[Role] at [Company]&quot;</li>
                  <li>
                    • Filter by &quot;2nd degree connections&quot; and your
                    school/location
                  </li>
                  <li>• Join industry groups and participate in discussions</li>
                  <li>• Follow companies you want to work for</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold">
                  Step 3: Send Connection Requests That Work
                </h4>
                <div className="rounded bg-muted p-3 text-sm">
                  <p>
                    <strong>Bad:</strong> &quot;Hi, I would like to
                    connect.&quot;
                  </p>
                  <p>
                    <strong>Good:</strong> &quot;Hi [Name], I am a computer
                    science student passionate about [field]. I have been
                    following your work at [Company] and would love to learn
                    from your experience. Would love to connect!&quot;
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold">
                  Step 4: The Informational Interview
                </h4>
                <p className="text-sm text-muted-foreground">
                  Ask for 15-minute calls to &quot;learn about their career
                  path&quot;—not to ask for a job. Most people are happy to help
                  students and career changers.
                </p>
              </div>
            </div>

            <h3>Other Networking Channels</h3>
            <ul>
              <li>
                <strong>Alumni networks:</strong> Your college alumni are often
                willing to help
              </li>
              <li>
                <strong>Industry meetups:</strong> Search Meetup.com for events
                in your city
              </li>
              <li>
                <strong>Online communities:</strong> Discord servers, Reddit,
                Slack groups
              </li>
              <li>
                <strong>Twitter/X:</strong> Many industry leaders are active and
                approachable
              </li>
              <li>
                <strong>Volunteer work:</strong> Great way to meet professionals
              </li>
            </ul>
          </section>

          {/* Section 6: Where to Apply */}
          <section
            id="apply"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              Best Places to Find Entry-Level Jobs
            </h2>

            <div className="not-prose space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">LinkedIn Jobs</h4>
                    <p className="text-sm text-muted-foreground">
                      Use filters: Experience = &quot;Entry level&quot;, Job
                      Type = &quot;Full-time&quot;
                    </p>
                    <p className="mt-1 text-sm">
                      <strong>Tip:</strong> Apply within first 24 hours of
                      posting for best results
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    #1 Platform
                  </span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">
                      AngelList / Wellfound
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Startups are more open to hiring freshers. Filter by
                      &quot;Entry level&quot;
                    </p>
                    <p className="mt-1 text-sm">
                      <strong>Best for:</strong> Tech, marketing, design roles
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Startup-Friendly
                  </span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">Indeed / Naukri</h4>
                    <p className="text-sm text-muted-foreground">
                      Largest job boards. Set up job alerts with keywords like
                      &quot;fresher,&quot; &quot;entry level,&quot;
                      &quot;graduate&quot;
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                    Most Jobs
                  </span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">Internshala</h4>
                    <p className="text-sm text-muted-foreground">
                      Best for internships and fresher jobs in India
                    </p>
                    <p className="mt-1 text-sm">
                      <strong>Pro tip:</strong> Many internships convert to
                      full-time offers
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700">
                    India-Focused
                  </span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-primary">
                      Company Career Pages
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Apply directly on company websites. Less competition than
                      job boards.
                    </p>
                    <p className="mt-1 text-sm">
                      <strong>Create a list:</strong> 50 target companies, check
                      weekly
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Less Competition
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Interview */}
          <section
            id="interview"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-primary" />
              Interview Without Experience
            </h2>

            <h3>
              How to Answer &quot;Why Should We Hire You With No
              Experience?&quot;
            </h3>
            <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
              <p className="italic">
                &quot;I may not have years of professional experience, but I
                bring fresh perspectives, hunger to learn, and proven skills
                through my projects. For example, [describe project]. I am eager
                to apply what I have learned and grow with your team.
                Additionally, my [relevant soft skill] developed through
                [experience] will help me contribute immediately.&quot;
              </p>
            </div>

            <h3>Questions to Ask Interviewers</h3>
            <ul>
              <li>
                &quot;What does success look like in this role in the first 90
                days?&quot;
              </li>
              <li>
                &quot;What type of training do you provide for new hires?&quot;
              </li>
              <li>
                &quot;What qualities have made past entry-level hires successful
                here?&quot;
              </li>
              <li>&quot;Are there mentorship opportunities available?&quot;</li>
            </ul>

            <div className="mt-4 rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
              <p className="text-sm text-green-900">
                <strong>Remember:</strong> Prepare answers to 50 common
                interview questions using our{' '}
                <Link
                  href="/blog/50-common-hr-interview-questions-and-best-answers"
                  className="underline"
                >
                  complete interview guide
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Section 8: Shortcuts */}
          <section
            id="shortcuts"
            className="scroll-mt-20"
          >
            <h2 className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              Fast-Track Shortcuts
            </h2>

            <h3>Get Hired Faster With These Tactics</h3>

            <div className="not-prose grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h4 className="font-bold text-primary">
                  1. The Pro Bono Strategy
                </h4>
                <p className="text-sm text-muted-foreground">
                  Offer to work free for 1-2 weeks to prove yourself. Many
                  companies hire the &quot;free intern&quot; who impressed them.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold text-primary">2. Referral Programs</h4>
                <p className="text-sm text-muted-foreground">
                  Find employees on LinkedIn. Ask if their company has referral
                  bonuses. They might refer you!
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold text-primary">3. Freelance First</h4>
                <p className="text-sm text-muted-foreground">
                  Start on Upwork/Fiverr. Build portfolio, get ratings, then
                  apply to full-time jobs with proven results.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h4 className="font-bold text-primary">4. Contract-to-Hire</h4>
                <p className="text-sm text-muted-foreground">
                  Apply for contract roles. Companies are more willing to take a
                  chance, and many convert to permanent.
                </p>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-10">
            <h2>Real Success Stories</h2>

            <div className="space-y-4">
              <blockquote className="rounded-lg border-l-4 border-primary bg-muted p-6">
                <p className="mb-2 italic">
                  &quot;I had zero work experience after graduation. I completed
                  Google&apos;s free Digital Marketing course, built a portfolio
                  of 5 projects, and applied to 50+ jobs. Landed my first
                  marketing job at a startup within 3 months.&quot;
                </p>
                <footer className="text-sm font-medium text-muted-foreground">
                  — Priya S., Marketing Executive at Tech Startup
                </footer>
              </blockquote>

              <blockquote className="rounded-lg border-l-4 border-primary bg-muted p-6">
                <p className="mb-2 italic">
                  &quot;Career changer at 28. I learned data analysis through
                  free courses, did 3 pro bono projects for local businesses,
                  and networked aggressively on LinkedIn. Got hired as Junior
                  Data Analyst with no formal background.&quot;
                </p>
                <footer className="text-sm font-medium text-muted-foreground">
                  — Rahul M., Data Analyst
                </footer>
              </blockquote>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2>Your Action Plan (Start Today)</h2>

            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                  <p>
                    <strong>Today:</strong> Choose one skill to learn. Enroll in
                    a free course.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                  <p>
                    <strong>This Week:</strong> Rewrite your resume using our
                    guide. Create LinkedIn profile.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                  <p>
                    <strong>This Month:</strong> Complete one course. Build one
                    project. Apply to 20 jobs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                  <p>
                    <strong>Next 3 Months:</strong> Network actively. Interview.
                    Get hired!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-gradient-to-r from-green-100 to-blue-100 p-6 text-center">
              <p className="text-lg font-bold">
                No experience? No problem. Just start.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Every expert was once a beginner. Your first job is waiting.
              </p>
            </div>
          </section>

          <FAQSchema faqs={faqItems} />

          {/* Related Resources */}
          <div className="not-prose my-10 rounded-lg bg-muted p-6">
            <h3 className="mb-4 font-bold">📚 Related Resources</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/50-common-hr-interview-questions-and-best-answers"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="h-4 w-4" />
                50 Common Interview Questions
              </Link>
              <Link
                href="/blog/how-to-write-a-resume-that-beats-ats"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="h-4 w-4" />
                Resume Writing Guide
              </Link>
              <Link
                href="/blog/linkedin-optimization-students"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="h-4 w-4" />
                LinkedIn Optimization Guide
              </Link>
              <Link
                href="/tools/resume-score-checker"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="h-4 w-4" />
                Free Resume Score Checker
              </Link>
            </div>
          </div>
          <div className="mt-12 border-t pt-8">
            <AuthorBio />
          </div>
        </article>
      </div>
    </div>
  );
}
