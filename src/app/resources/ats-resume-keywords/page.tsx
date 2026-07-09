import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  FileText,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'ATS Resume Keywords Guide for Students | Match Job Descriptions Better',
  description:
    'Learn how to extract ATS resume keywords from job descriptions, place them naturally in your resume, and improve keyword matching without stuffing.',
  keywords: [
    'ats resume keywords',
    'resume keywords guide',
    'how to match job description resume',
    'ats keywords for students',
    'resume keyword optimization',
    'applicant tracking system resume guide',
  ],
  alternates: {
    canonical: 'https://www.sproutern.com/resources/ats-resume-keywords',
  },
  openGraph: {
    title: 'ATS Resume Keywords Guide for Students',
    description:
      'Extract better resume keywords from job descriptions and improve ATS matching without sounding robotic.',
    url: 'https://www.sproutern.com/resources/ats-resume-keywords',
    type: 'article',
  },
};

const keywordPrinciples = [
  {
    icon: Search,
    title: 'Extract the Right Terms',
    description:
      'Focus on role titles, skills, tools, frameworks, and domain terms that appear repeatedly in the job description.',
  },
  {
    icon: FileText,
    title: 'Place Keywords Naturally',
    description:
      'Use keywords inside experience, projects, and skills instead of dumping them in one section.',
  },
  {
    icon: Briefcase,
    title: 'Match the Role Context',
    description:
      'Tailor the same core resume differently for a frontend, analyst, data, or internship application.',
  },
  {
    icon: Sparkles,
    title: 'Stay Human-Readable',
    description:
      'A strong ATS resume still needs to sound clear and credible when a recruiter reads it.',
  },
];

const keywordBuckets = [
  {
    title: 'Role Keywords',
    description:
      'Examples: frontend developer, business analyst, product intern, data analyst.',
  },
  {
    title: 'Skills and Tools',
    description:
      'Examples: React, SQL, Excel, Python, Figma, Git, AWS, Tableau.',
  },
  {
    title: 'Domain Terms',
    description:
      'Examples: REST APIs, test automation, stakeholder management, dashboarding, lead generation.',
  },
  {
    title: 'Action Verbs',
    description:
      'Examples: built, analyzed, optimized, automated, improved, collaborated, launched.',
  },
  {
    title: 'Certifications or Methods',
    description:
      'Examples: Agile, Scrum, Google Analytics, ISO, Six Sigma, Salesforce, Power BI.',
  },
  {
    title: 'Education Signals',
    description:
      'Examples: coursework, capstone, final-year project, internship, thesis, bootcamp, certification.',
  },
];

const workflow = [
  {
    step: '1. Highlight repeated terms in the job description',
    description:
      'Repeated skills and phrases usually signal what the employer cares about most.',
  },
  {
    step: '2. Group them into skills, tools, and outcome language',
    description:
      'This helps you map keywords to the right resume sections instead of forcing them awkwardly.',
  },
  {
    step: '3. Update project and experience bullets first',
    description:
      'Keywords work best when attached to evidence, not when listed without context.',
  },
  {
    step: '4. Align the summary and skills section',
    description:
      'Use your summary and skills list to reinforce the same role direction and technical match.',
  },
  {
    step: '5. Recheck for clarity and overuse',
    description:
      'If the resume sounds stuffed or repetitive, tighten the language before applying.',
  },
];

const exampleRows = [
  {
    jd: 'Build dashboards in Excel and Power BI for business reporting',
    resume:
      'Built Excel-based reporting trackers and designed Power BI dashboards for weekly performance reviews.',
  },
  {
    jd: 'Work with React, APIs, and responsive UI development',
    resume:
      'Developed responsive React interfaces, integrated REST APIs, and improved component reusability across the project.',
  },
  {
    jd: 'Collaborate with stakeholders and analyze customer data',
    resume:
      'Analyzed customer datasets and worked with stakeholders to define reporting requirements and prioritize insights.',
  },
];

const commonMistakes = [
  'Copying full keyword blocks into the resume without attaching them to real experience.',
  'Ignoring the exact phrasing used in the target job description.',
  'Changing every section for ATS while making the resume harder for humans to read.',
  'Adding tools or skills you cannot explain in an interview.',
  'Treating the skills section as the only place where keywords should appear.',
];

const relatedResources = [
  {
    title: 'ATS Checker',
    href: '/tools/ats-checker',
    description: 'Compare your resume text against a target job description.',
  },
  {
    title: 'Resume Score Checker',
    href: '/tools/resume-score-checker',
    description: 'Spot structural and content issues before applying.',
  },
  {
    title: 'Resume Templates',
    href: '/resources/resume-templates',
    description: 'Start with ATS-friendly formatting and then refine the wording.',
  },
  {
    title: 'Resume Writing Guide',
    href: '/resources/resume-guide',
    description: 'Improve bullet points, structure, and recruiter readability.',
  },
  {
    title: 'ATS Resume Blog',
    href: '/blog/how-to-write-a-resume-that-beats-ats',
    description: 'Go deeper on ATS fundamentals and resume tailoring.',
  },
  {
    title: 'MNC Resume Format Guide',
    href: '/blog/mnc-resume-format-ats-template',
    description: 'See how resume language and formatting affect MNC applications.',
  },
];

const faqs = [
  {
    question: 'What are ATS resume keywords?',
    answer:
      'ATS resume keywords are the role terms, skills, tools, and domain phrases that applicant tracking systems and recruiters expect to see in resumes for a specific job.',
  },
  {
    question: 'How many keywords should I add to a resume?',
    answer:
      'There is no perfect number. The better goal is to include the most relevant keywords naturally in the right places, especially inside projects, experience, and skills.',
  },
  {
    question: 'Can I copy keywords directly from the job description?',
    answer:
      "Yes, but only when they honestly reflect your experience. Use the employer's language where it fits, then support it with proof from your work, coursework, or projects.",
  },
  {
    question: 'Do ATS systems only check keywords?',
    answer:
      'No. Formatting, section structure, readability, role fit, and the strength of your experience also matter. Keywords help, but they do not replace substance.',
  },
  {
    question: 'Should I tailor my resume for every application?',
    answer:
      'Usually yes, especially for competitive roles. You do not need a brand-new resume each time, but adjusting the summary, project emphasis, and keyword placement often improves match quality.',
  },
];

export default function ATSResumeKeywordsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.sproutern.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resources',
        item: 'https://www.sproutern.com/resources',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'ATS Resume Keywords',
        item: 'https://www.sproutern.com/resources/ats-resume-keywords',
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to add ATS resume keywords naturally',
    description:
      'A practical process for finding and placing ATS resume keywords based on a job description.',
    step: workflow.map((item) => ({
      '@type': 'HowToStep',
      name: item.step,
      text: item.description,
    })),
  };

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema, howToSchema]),
        }}
      />

      <div className="mx-auto max-w-5xl">
        <section className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Search className="h-4 w-4" />
            Resume Tailoring Playbook
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            ATS Resume Keywords Guide for Students and Freshers
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Improve keyword matching by reading job descriptions more carefully,
            mapping the right phrases to your experience, and keeping your
            resume natural enough for recruiters to trust.
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-4">
          {keywordPrinciples.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <CardContent className="p-5 text-center">
                  <Icon className="mx-auto mb-3 h-6 w-6 text-primary" />
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <BookOpen className="h-6 w-6 text-primary" />
            The Main Types of ATS Keywords
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {keywordBuckets.map((item) => (
              <Card key={item.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Target className="h-6 w-6 text-primary" />
            A Simple Five-Step Keyword Workflow
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {workflow.map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Example: Turning Job Description Language Into Resume Lines
          </h2>
          <div className="space-y-4">
            {exampleRows.map((row) => (
              <Card key={row.jd}>
                <CardContent className="space-y-4 p-5">
                  <div>
                    <p className="mb-1 text-sm font-semibold text-primary">
                      Job Description Signal
                    </p>
                    <p className="text-sm text-muted-foreground">{row.jd}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-primary">
                      Better Resume Wording
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {row.resume}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14 rounded-2xl border bg-muted/30 p-6">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Mistakes That Hurt ATS Matching
          </h2>
          <ul className="space-y-3">
            {commonMistakes.map((mistake) => (
              <li
                key={mistake}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 rounded-2xl bg-primary/5 p-8">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <Sparkles className="h-6 w-6 text-primary" />
            Use These Related Resources
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedResources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="rounded-xl border bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardContent className="p-5">
                  <h3 className="mb-2 font-semibold">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Match Better Without Keyword Stuffing
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            A strong resume sounds human, stays relevant to the role, and uses
            the employer&apos;s language where it honestly fits your work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/ats-checker">
                Try ATS Checker
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources/resume-templates">
                <FileText className="mr-2 h-4 w-4" />
                Browse Resume Templates
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
