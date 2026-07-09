import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  Briefcase,
  Calculator,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Salary Negotiation Guide for Students and Freshers | Scripts, Timing and Offer Tips',
  description:
    'Learn how to negotiate salary offers with better timing, scripts, compensation checklists, and practical tips for students, freshers, and early-career professionals.',
  keywords: [
    'salary negotiation guide',
    'salary negotiation for freshers',
    'how to negotiate job offer',
    'salary negotiation scripts',
    'offer negotiation tips',
    'student salary negotiation guide',
  ],
  alternates: {
    canonical: 'https://www.sproutern.com/resources/salary-negotiation',
  },
  openGraph: {
    title: 'Salary Negotiation Guide for Students and Freshers',
    description:
      'Use practical scripts, checklists, and offer-review tips to negotiate salary with more confidence.',
    url: 'https://www.sproutern.com/resources/salary-negotiation',
    type: 'article',
  },
};

const priorityAreas = [
  {
    icon: TrendingUp,
    title: 'Research First',
    description:
      'Know the market range for your role, city, and company type before you discuss numbers.',
  },
  {
    icon: Briefcase,
    title: 'Negotiate the Full Offer',
    description:
      'Base salary matters, but bonuses, reviews, notice periods, and flexibility matter too.',
  },
  {
    icon: Shield,
    title: 'Read the Fine Print',
    description:
      'Check variable pay rules, bond clauses, clawbacks, probation terms, and location expectations.',
  },
  {
    icon: MessageSquare,
    title: 'Stay Professional',
    description:
      'Calm, specific communication increases your credibility and keeps the conversation collaborative.',
  },
];

const negotiationFlow = [
  {
    step: '1. Benchmark the role',
    description:
      'Compare salary ranges using public data, alumni inputs, and role scope so your target is realistic.',
    bullets: [
      'Check location-specific salary data, not only national averages.',
      'Separate fixed pay, bonus, and benefits before comparing offers.',
    ],
  },
  {
    step: '2. Decide your target and floor',
    description:
      'Define one confident ask, one acceptable fallback, and one walk-away point before the call happens.',
    bullets: [
      'Set a target number based on your strongest evidence.',
      'Know what minimum package still makes sense for you.',
    ],
  },
  {
    step: '3. Wait for the written offer',
    description:
      'It is easier to negotiate once the company has decided they want you and has shared a formal package.',
    bullets: [
      'Thank them first and confirm you are genuinely excited.',
      'Ask for a little time to review the structure carefully.',
    ],
  },
  {
    step: '4. Make one clear counter',
    description:
      'Anchor your response in research, role fit, and package structure instead of vague dissatisfaction.',
    bullets: [
      'State the number or adjustment you want directly.',
      'If base is fixed, shift to joining bonus or review timing.',
    ],
  },
  {
    step: '5. Close with clarity',
    description:
      'Once you agree, confirm everything in writing so there is no confusion later.',
    bullets: [
      'Verify compensation, joining date, location, and variable pay terms.',
      'Ask for the revised offer letter before you resign or commit elsewhere.',
    ],
  },
];

const compensationChecklist = [
  {
    title: 'Base Salary',
    description:
      'Review the guaranteed fixed component first. This is the core number to compare across offers.',
  },
  {
    title: 'Variable Pay',
    description:
      'Check whether the bonus is guaranteed, performance-linked, quarterly, annual, or manager-discretionary.',
  },
  {
    title: 'Joining Bonus',
    description:
      'This is often easier to negotiate than base salary, especially when the budget band is fixed.',
  },
  {
    title: 'Bond or Clawback',
    description:
      'Understand whether you must repay training cost, relocation amount, or bonus if you leave early.',
  },
  {
    title: 'Review Cycle',
    description:
      'An early performance review can meaningfully improve a weak first offer when base cannot move today.',
  },
  {
    title: 'Benefits and Flexibility',
    description:
      'Hybrid work, leave policy, insurance, certification support, and shift timing can materially change offer quality.',
  },
];

const scripts = [
  {
    scenario: 'When they ask for expectations too early',
    response:
      'I am definitely open on compensation and more focused on fit first. Could you share the budgeted range for this role so I can respond in context?',
  },
  {
    scenario: 'When the offer is below your target',
    response:
      'Thank you for the offer. I am excited about the role. Based on my research and the scope of the position, I was targeting something closer to [X]. Is there flexibility to move toward that range?',
  },
  {
    scenario: 'When base salary cannot move',
    response:
      'I understand the base band may be fixed. Would you be open to discussing a joining bonus, relocation support, or an earlier compensation review after the first few months?',
  },
  {
    scenario: 'When you are ready to accept',
    response:
      'I appreciate the updated offer and I am happy to move forward. Please share the revised offer letter with the final compensation details so I can complete the next steps.',
  },
];

const commonMistakes = [
  'Starting negotiation before understanding the full role scope or package structure.',
  'Using generic demands without market data, responsibilities, or evidence.',
  'Comparing only headline CTC while ignoring variable pay, bonds, or probation terms.',
  'Sounding apologetic, aggressive, or uncertain instead of calm and specific.',
  'Making multiple scattered asks instead of one clear, well-supported counter.',
];

const relatedResources = [
  {
    title: 'Salary Calculator',
    href: '/tools/salary-calculator',
    description: 'Break down compensation and compare fixed versus variable pay.',
  },
  {
    title: 'Negotiation Tool',
    href: '/tools/salary-negotiation',
    description: 'Use quick prompts and examples before a negotiation call.',
  },
  {
    title: 'Freshers Salary Guide',
    href: '/freshers/salary-negotiation',
    description: 'Read first-job advice tailored to campus placements and early offers.',
  },
  {
    title: 'Salary Bond Tracker',
    href: '/tools/salary-bond-tracker',
    description: 'Review salary and bond tradeoffs more carefully before you sign.',
  },
  {
    title: 'Salary Expectations Answers',
    href: '/blog/how-to-answer-salary-expectations',
    description: 'Prepare a better answer for one of the most common interview questions.',
  },
  {
    title: 'Freshers Negotiation Blog',
    href: '/blog/salary-negotiation-freshers',
    description: 'Go deeper on common scenarios, mistakes, and fresher-specific tactics.',
  },
];

const faqs = [
  {
    question: 'Can freshers really negotiate salary?',
    answer:
      'Yes. Freshers often have less leverage than experienced hires, but they can still negotiate respectfully around salary, joining bonus, review cycle, location, or role scope. The key is using evidence and timing well.',
  },
  {
    question: 'Should I always give a salary range?',
    answer:
      'Not always. If the employer has not shared a range yet, it is often better to ask for their band first. If you do share a range, make sure it is research-backed and narrow enough to sound intentional.',
  },
  {
    question: 'What if the company says the budget is fixed?',
    answer:
      'If base salary cannot move, shift the conversation to other negotiable items such as joining bonus, relocation support, work arrangement, role level, or an earlier compensation review date.',
  },
  {
    question: 'When should I stop negotiating?',
    answer:
      'Stop once the company has made its final position clear and you have enough information to decide. Repeating the same ask without new reasoning usually weakens your position instead of improving it.',
  },
  {
    question: 'What matters most besides salary?',
    answer:
      'Look closely at variable pay conditions, bond clauses, notice period, growth path, manager quality, work hours, learning support, and whether the role actually helps your long-term career direction.',
  },
];

export default function SalaryNegotiationResourcePage() {
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
        name: 'Salary Negotiation',
        item: 'https://www.sproutern.com/resources/salary-negotiation',
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to negotiate a salary offer',
    description:
      'A practical five-step process for reviewing and negotiating salary offers.',
    step: negotiationFlow.map((item) => ({
      '@type': 'HowToStep',
      name: item.step,
      text: `${item.description} ${item.bullets.join(' ')}`,
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
            <Banknote className="h-4 w-4" />
            Offer Strategy Guide
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Salary Negotiation Guide for Students and Freshers
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Negotiate with more confidence by understanding timing, package
            structure, and the exact scripts that help you ask clearly without
            sounding awkward or aggressive.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
            This page works well alongside our{' '}
            <Link
              href="/freshers/salary-negotiation"
              className="text-primary hover:underline"
            >
              fresher-focused salary guide
            </Link>{' '}
            and the{' '}
            <Link
              href="/tools/salary-negotiation"
              className="text-primary hover:underline"
            >
              salary negotiation tool
            </Link>
            .
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-4">
          {priorityAreas.map((item) => {
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
          <div className="mb-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-bold">
              <Target className="h-6 w-6 text-primary" />
              A Practical Five-Step Negotiation Flow
            </h2>
            <p className="text-muted-foreground">
              Strong negotiation usually looks simple from the outside. The real
              work happens before the conversation starts, when you decide your
              target, understand the offer structure, and prepare one clear ask.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {negotiationFlow.map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.step}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                What to Review Before You Say Yes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {compensationChecklist.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Timing Rules That Usually Help
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Discuss compensation seriously after interest is clear.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Take time to review instead of accepting on the call.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Make one thoughtful counter instead of many small asks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Use email to confirm details even if negotiation started by phone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Close quickly once the final offer is fair and clear.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <MessageSquare className="h-6 w-6 text-primary" />
            Ready-to-Use Salary Negotiation Scripts
          </h2>
          <p className="mb-6 text-muted-foreground">
            Treat these as templates, not robotic lines. Adjust the number,
            tone, and context so the wording still sounds natural coming from
            you.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {scripts.map((script) => (
              <Card key={script.scenario}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{script.scenario}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic text-muted-foreground">
                    "{script.response}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14 rounded-2xl border bg-muted/30 p-6">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Mistakes That Weaken Your Leverage
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
            Review the Offer Before You React
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Better negotiation usually comes from better preparation. Compare
            the package, choose your ask, and keep your wording simple and
            specific.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/salary-negotiation">
                Use Negotiation Tool
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/tools/salary-calculator">
                <Calculator className="mr-2 h-4 w-4" />
                Compare Salary Structure
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
