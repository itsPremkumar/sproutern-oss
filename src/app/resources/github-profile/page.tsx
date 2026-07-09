import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code,
  FileText,
  Github,
  Pin,
  Sparkles,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'GitHub Profile Guide for Students | README, Pinned Repositories and Project Tips',
  description:
    'Optimize your GitHub profile with better README copy, pinned repositories, cleaner project documentation, and portfolio-friendly project presentation tips.',
  keywords: [
    'github profile guide',
    'github profile optimization',
    'github profile for students',
    'github readme guide',
    'how to improve github profile',
    'pinned repositories guide',
  ],
  alternates: {
    canonical: 'https://www.sproutern.com/resources/github-profile',
  },
  openGraph: {
    title: 'GitHub Profile Guide for Students',
    description:
      'Build a stronger GitHub profile with better README structure, pinned repos, and recruiter-friendly project presentation.',
    url: 'https://www.sproutern.com/resources/github-profile',
    type: 'article',
  },
};

const focusAreas = [
  {
    icon: Github,
    title: 'Clear First Impression',
    description:
      'Your profile should quickly show what you build, what stack you use, and what kind of roles you want.',
  },
  {
    icon: Pin,
    title: 'Pinned Repositories',
    description:
      'Pin projects that reflect your target role, not random coursework or unfinished experiments.',
  },
  {
    icon: FileText,
    title: 'Readable Project README',
    description:
      'Every serious repo should explain the problem, stack, setup steps, screenshots, and key decisions.',
  },
  {
    icon: Sparkles,
    title: 'Recruiter-Friendly Signal',
    description:
      'Good repo names, descriptions, commit hygiene, and documentation make your profile easier to trust.',
  },
];

const profileChecklist = [
  {
    title: 'Profile README',
    description:
      'Write a short intro, role keywords, core stack, and links to portfolio, LinkedIn, or contact details.',
  },
  {
    title: 'Pinned Repositories',
    description:
      'Choose 4 to 6 repos that reflect the roles you want, the quality of your code, and your strongest projects.',
  },
  {
    title: 'Repository Descriptions',
    description:
      'Use simple descriptions so someone scanning your profile understands the purpose of each project immediately.',
  },
  {
    title: 'README Depth',
    description:
      'Document setup, screenshots, problem solved, features, and tradeoffs so projects feel real instead of abandoned.',
  },
  {
    title: 'Naming and Organization',
    description:
      'Use clear repository names, consistent topics, and remove throwaway or duplicate tutorial repos when possible.',
  },
  {
    title: 'Contribution Signals',
    description:
      'Steady improvement, issue tracking, and small refinements often matter more than a perfect green graph.',
  },
];

const pinningAdvice = [
  'One flagship project that solves a real problem end to end.',
  'One project that shows backend or API work, if you are targeting developer roles.',
  'One polished UI project with screenshots or demo links.',
  'One collaborative, open source, research, or hackathon project if available.',
];

const readmeSections = [
  'What the project does and who it is for',
  'Tech stack and architecture choices',
  'Key features with screenshots or GIFs',
  'How to run the project locally',
  'Challenges, tradeoffs, and what you learned',
  'Live demo or contact links when relevant',
];

const commonMistakes = [
  'Pinning unfinished tutorial clones instead of your strongest original work.',
  'Leaving repositories without README files, setup instructions, or screenshots.',
  'Using vague names like project-final-new or repo1 that communicate nothing.',
  'Treating the contribution graph as the only signal that matters.',
  'Showing many half-complete repos but no polished example of your best work.',
];

const relatedResources = [
  {
    title: 'GitHub README Generator',
    href: '/tools/github-readme-generator',
    description: 'Create a cleaner profile README faster.',
  },
  {
    title: 'Portfolio Templates',
    href: '/resources/portfolio-templates',
    description: 'Turn your GitHub work into a stronger public portfolio.',
  },
  {
    title: 'Resume Writing Guide',
    href: '/resources/resume-guide',
    description: 'Connect your GitHub work to resume bullets and project links.',
  },
  {
    title: 'Git & GitHub Guide',
    href: '/blog/git-github-beginners-guide',
    description: 'Strengthen the fundamentals behind cleaner repositories.',
  },
  {
    title: 'First Tech Internship Guide',
    href: '/blog/first-tech-internship-india',
    description: 'See how projects and GitHub help with internship applications.',
  },
  {
    title: 'Portfolio Website Guide',
    href: '/blog/portfolio-website-guide',
    description: 'Combine GitHub proof with a stronger public portfolio story.',
  },
];

const faqs = [
  {
    question: 'What should students pin on GitHub?',
    answer:
      'Students should usually pin projects that match their target role, show real problem-solving, and include clear documentation. A smaller set of polished repositories is usually better than many unfinished ones.',
  },
  {
    question: 'Does GitHub matter for non-developers?',
    answer:
      'It matters most for engineering and technical roles, but analysts, data professionals, designers, and product-focused students can also use GitHub to share case studies, notebooks, experiments, and collaborative work.',
  },
  {
    question: 'Do recruiters actually read README files?',
    answer:
      'Not every recruiter will read them deeply, but strong README files help technical reviewers, hiring managers, and interviewers understand your projects faster and take your work more seriously.',
  },
  {
    question: 'Is the contribution graph the most important part of GitHub?',
    answer:
      'No. Consistency helps, but repo quality, project relevance, documentation, and proof of thinking usually matter more than a perfect-looking graph.',
  },
  {
    question: 'Should I keep old or weak repositories public?',
    answer:
      'If they hurt the overall impression and add no value, consider archiving, improving, or making them private. Your public profile should support the story you want employers to see.',
  },
];

export default function GitHubProfilePage() {
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
        name: 'GitHub Profile Guide',
        item: 'https://www.sproutern.com/resources/github-profile',
      },
    ],
  };

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema]),
        }}
      />

      <div className="mx-auto max-w-5xl">
        <section className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Github className="h-4 w-4" />
            Recruiter-Ready Project Showcase
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            GitHub Profile Guide for Students and Early Developers
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Make your GitHub profile easier to trust by improving your README,
            pinned repositories, repo documentation, and the overall story your
            projects tell.
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-4">
          {focusAreas.map((item) => {
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
            <CheckCircle2 className="h-6 w-6 text-primary" />
            The GitHub Profile Checklist That Helps Most
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {profileChecklist.map((item) => (
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

        <section className="mb-14 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pin className="h-5 w-5 text-primary" />
                What to Pin on Your Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {pinningAdvice.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                README Sections That Improve Projects Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {readmeSections.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-14 rounded-2xl border bg-muted/30 p-6">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <Target className="h-6 w-6 text-primary" />
            A Better Way to Think About GitHub
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Your GitHub profile is not supposed to prove that you wrote code
            every single day. It is supposed to make it easier for someone else
            to understand what you can build, how you structure work, and how
            seriously you present your projects.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            That means clarity beats volume. A few well-named repositories,
            clean README files, screenshots, and thoughtful pinned projects will
            usually help more than dozens of unmaintained repos with no context.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Common GitHub Profile Mistakes
          </h2>
          <div className="rounded-2xl border bg-background p-6">
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
          </div>
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
            Make Your Projects Easier to Understand
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Better repo presentation helps interviews, internship applications,
            and technical screening. Start with your README, pinned repos, and
            clearer project context.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/github-readme-generator">
                Try GitHub README Generator
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources/portfolio-templates">
                <Code className="mr-2 h-4 w-4" />
                Explore Portfolio Templates
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
