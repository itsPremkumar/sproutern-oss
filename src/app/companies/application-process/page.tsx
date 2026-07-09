import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ClipboardList,
  Laptop,
  Users,
  UserCheck,
  FileText,
  PieChart,
} from 'lucide-react';

export const metadata = getPageSEO('application-process');

export default function ApplicationProcessPage() {
  const schemas = getPageSchema('application-process');

  return (
    <div className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            MNC Application & Interview Process
          </h1>
          <p className="text-xl text-muted-foreground">
            A complete step-by-step guide to navigating the recruitment process
            of top Multinational Companies.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Introduction */}
          <section>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg">
                  While every company has its nuances, the core structure of MNC
                  recruitment remains remarkably consistent. Understanding this
                  flow helps you prepare for each stage effectively.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Step 1: Online Application */}
          <section className="relative ml-4 space-y-8 border-l-2 border-primary/20 pl-8">
            <div className="relative">
              <span className="absolute -left-[41px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                1
              </span>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <ClipboardList className="h-6 w-6 text-muted-foreground" />
                Online Application & Registration
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    The first step is registering on the company's career portal
                    or applying through a job posting.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      <strong>NQT (National Qualifier Test):</strong> For TCS,
                      you need to register for NQT.
                    </li>
                    <li>
                      <strong>Superset:</strong> Many companies like Capgemini
                      and Cognizant use Superset for registration.
                    </li>
                    <li>
                      <strong>Resume Parsing:</strong> Ensure your resume is
                      ATS-friendly as machines often screen it first.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 2: Online Assessment */}
            <div className="relative">
              <span className="absolute -left-[41px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                2
              </span>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <Laptop className="h-6 w-6 text-muted-foreground" />
                Online Assessment (Aptitude & Coding)
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    This is the elimination round. It typically consists of:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded bg-muted p-3">
                      <h4 className="font-semibold">Aptitude</h4>
                      <p className="text-sm text-muted-foreground">
                        Quantitative, Logical, and Verbal ability.
                      </p>
                    </div>
                    <div className="rounded bg-muted p-3">
                      <h4 className="font-semibold">Technical MCQs</h4>
                      <p className="text-sm text-muted-foreground">
                        Basic CS concepts, pseudo-code, and output prediction.
                      </p>
                    </div>
                    <div className="rounded bg-muted p-3">
                      <h4 className="font-semibold">Coding</h4>
                      <p className="text-sm text-muted-foreground">
                        1-2 coding problems (Arrays, Strings, Data Structures).
                      </p>
                    </div>
                    <div className="rounded bg-muted p-3">
                      <h4 className="font-semibold">Communication</h4>
                      <p className="text-sm text-muted-foreground">
                        Essay writing or verbal ability test (optional).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3: Technical Interview */}
            <div className="relative">
              <span className="absolute -left-[41px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                3
              </span>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <Users className="h-6 w-6 text-muted-foreground" />
                Technical Interview (TR)
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    If you clear the assessment, you face the Technical panel.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      <strong>Project Discussion:</strong> Deep dive into your
                      projects.
                    </li>
                    <li>
                      <strong>Core Subjects:</strong> Questions on DBMS, OS, CN,
                      and OOPs.
                    </li>
                    <li>
                      <strong>Live Coding:</strong> Writing code on paper or a
                      shared editor.
                    </li>
                    <li>
                      <strong>Puzzle Solving:</strong> Testing your lateral
                      thinking.
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                    >
                      <Link href="/companies">
                        Prepare Company-Specific Questions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 4: HR Interview */}
            <div className="relative">
              <span className="absolute -left-[41px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                4
              </span>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <UserCheck className="h-6 w-6 text-muted-foreground" />
                HR Interview
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    The final hurdle. It's about personality and cultural fit.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      <strong>Introduction:</strong> "Tell me about yourself."
                    </li>
                    <li>
                      <strong>Strengths/Weaknesses:</strong> Be honest but
                      professional.
                    </li>
                    <li>
                      <strong>Relocation:</strong> Willingness to work anywhere
                      in India.
                    </li>
                    <li>
                      <strong>Company Knowledge:</strong> "Why do you want to
                      join us?"
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Interview Experience Logs */}
          <section>
            <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold">
              <FileText className="h-8 w-8 text-primary" />
              Interview Experience Logs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                      TCS NQT
                    </span>
                    Amit's Interview Experience (2024)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold">
                        Round 1: Online Assessment (90 mins)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        "The aptitude section was tough. 20 questions on Quants
                        (Time & Work, Profit & Loss) and 10 on Verbal. Coding
                        question was: 'Find the second largest number in an
                        array without sorting'."
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Round 2: Technical Interview (25 mins)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        "Interviewer asked about my final year project. Then
                        moved to SQL queries (Joins) and basic Java concepts
                        (Polymorphism). Asked me to write code for Fibonacci
                        series."
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Round 3: HR Interview (10 mins)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        "Standard questions: Tell me about yourself, Why TCS?,
                        Are you willing to relocate? (Say YES!)."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-800">
                      Accenture
                    </span>
                    Priya's Interview Experience (2024)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold">
                        Round 1: Cognitive & Technical Assessment
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        "Cognitive part had English ability and Critical
                        Reasoning. Technical part had questions on MS Office,
                        Cloud, and Networking basics."
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Round 2: Coding (45 mins)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        "Two questions. 1. String manipulation (Easy). 2. Matrix
                        operation (Medium). You must pass all test cases for the
                        second one to get a good score."
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Round 3: Communication Assessment
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        "This is unique to Accenture. You wear headphones and
                        repeat sentences, answer questions, and retell a story.
                        Pronunciation matters."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Aptitude Test Weightage Analysis */}
          <section>
            <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold">
              <PieChart className="h-8 w-8 text-primary" />
              Aptitude Test Weightage Analysis
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-center text-lg">
                    Quantitative Aptitude
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Time & Work</span>{' '}
                      <span className="font-bold">High</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Profit & Loss</span>{' '}
                      <span className="font-bold">High</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Permutation & Comb.</span>{' '}
                      <span className="font-bold">Medium</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Probability</span>{' '}
                      <span className="font-bold">Medium</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-center text-lg">
                    Logical Reasoning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Data Interpretation</span>{' '}
                      <span className="font-bold">Very High</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Coding-Decoding</span>{' '}
                      <span className="font-bold">High</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Blood Relations</span>{' '}
                      <span className="font-bold">Medium</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Seating Arrangement</span>{' '}
                      <span className="font-bold">Medium</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-center text-lg">
                    Verbal Ability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Reading Comp.</span>{' '}
                      <span className="font-bold">Very High</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sentence Correction</span>{' '}
                      <span className="font-bold">High</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Synonyms/Antonyms</span>{' '}
                      <span className="font-bold">Medium</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Para Jumbles</span>{' '}
                      <span className="font-bold">Medium</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="rounded-xl bg-muted/50 py-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">Ready to Crack It?</h3>
            <p className="mb-6 text-muted-foreground">
              Preparation is the key to confidence. Start preparing today.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
              >
                <Link href="/companies/mnc-placement-guide">
                  Read Placement Guide
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
