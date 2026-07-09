import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import Link from 'next/link';
import { FAQSection } from '@/components/blog/FAQSection';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, FileQuestion, IndianRupee } from 'lucide-react';

export const metadata = getPageSEO('companies');

import { companies } from '@/lib/company-data';

export default function CompaniesPage() {
  const schemas = getPageSchema('companies');
  const companyFaqs = [
    {
      question: 'How should I use a company interview guide?',
      answer:
        "Use the guide to understand the company's hiring flow, common question patterns, role expectations, and compensation context. Then pair it with practice tools and recent interview stories so your preparation is not limited to one source.",
    },
    {
      question: 'Do interview questions repeat exactly across candidates?',
      answer:
        'Not usually. The same themes repeat more often than the exact wording. It is better to learn the concepts, question patterns, and evaluation criteria than to memorize one answer set.',
    },
    {
      question: 'What should I check before deciding between two companies?',
      answer:
        'Compare role scope, learning opportunities, team quality, location, salary structure, interview difficulty, and your long-term career direction. A better company on paper is not always the better fit for your specific stage.',
    },
    {
      question: 'Which pages should I open along with a company guide?',
      answer:
        'The best combination is a company guide, a comparison page, interview experiences, and the relevant practice tools such as aptitude tests, interview question generators, or resume scoring.',
    },
  ];

  return (
    <div className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Company Interview Guides
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Comprehensive interview preparation resources for top companies. Get
            interview questions, salary information, and insider tips.
          </p>
        </div>

        {/* New Guides Section */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">MNC Placement Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Step-by-step strategy to crack interviews at top MNCs.
              </p>
              <Button
                asChild
                className="w-full"
              >
                <Link href="/companies/mnc-placement-guide">Read Guide</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">MNC Interview Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Complete collection of technical and HR interview questions for
                all MNCs.
              </p>
              <Button
                asChild
                className="w-full"
              >
                <Link href="/companies/mnc-interview-questions">
                  View Questions
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">MNC Salary Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Compare salary packages across top MNCs and understand CTC
                breakdown.
              </p>
              <Button
                asChild
                className="w-full"
              >
                <Link href="/companies/mnc-salary-guide">
                  View Salary Guide
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">MNC Work Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Understand MNC work culture, team dynamics, and what to expect
                in your first job.
              </p>
              <Button
                asChild
                className="w-full"
              >
                <Link href="/companies/mnc-work-culture">
                  View Work Culture Guide
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">MNC Preparation Hub</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Complete resource center with all MNC guides, blogs, tools, and
                preparation materials.
              </p>
              <Button
                asChild
                className="w-full"
              >
                <Link href="/companies/mnc-preparation-hub">
                  Visit Preparation Hub
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">MNC Internship Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Complete guide to secure internships at top MNCs. Learn
                eligibility, application strategies, and PPO conversion.
              </p>
              <Button
                asChild
                className="w-full"
              >
                <Link href="/companies/mnc-internship-guide">
                  Read Internship Guide
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">
                Internship Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Explore current internship openings at top MNCs and learn how to
                apply.
              </p>
              <Button
                asChild
                className="w-full"
              >
                <Link href="/companies/internship-opportunities">
                  View Opportunities
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">Application Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Understand the recruitment flow from application to offer.
              </p>
              <Button
                asChild
                className="w-full"
              >
                <Link href="/companies/application-process">View Process</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16 grid gap-6">
          {companies.map((company) => (
            <Card
              key={company.name}
              className="transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="mb-2 text-2xl">
                      {company.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {company.fullName}
                    </CardDescription>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {company.description}
                    </p>
                  </div>
                  <Building2 className="h-12 w-12 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {company.hubLink && (
                    <Button
                      variant="outline"
                      asChild
                    >
                      <Link href={company.hubLink}>
                        <Building2 className="mr-2 h-4 w-4" />
                        Company Overview
                      </Link>
                    </Button>
                  )}
                  <Button asChild>
                    <Link href={company.interviewLink}>
                      <FileQuestion className="mr-2 h-4 w-4" />
                      Interview Questions
                    </Link>
                  </Button>
                  {company.salaryLink && (
                    <Button
                      variant="outline"
                      asChild
                    >
                      <Link href={company.salaryLink}>
                        <IndianRupee className="mr-2 h-4 w-4" />
                        Salary Details
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose max-w-none">
          <h2>Why Prepare Company-Specific Interview Questions?</h2>
          <p>
            Each company has its unique interview process and commonly asked
            questions. Preparing company-specific questions gives you a
            significant advantage:
          </p>
          <ul>
            <li>
              Understand the company's interview pattern and difficulty level
            </li>
            <li>Learn what skills and qualities they value most</li>
            <li>Practice with questions asked in previous interviews</li>
            <li>Get insights into the company culture and expectations</li>
          </ul>

          <h2>How to Use These Guides</h2>
          <ol>
            <li>
              <strong>Start Early:</strong> Begin preparation at least 2-3 weeks
              before your interview
            </li>
            <li>
              <strong>Practice Regularly:</strong> Go through questions daily
              and practice your answers
            </li>
            <li>
              <strong>Understand, Don't Memorize:</strong> Focus on
              understanding concepts rather than memorizing answers
            </li>
            <li>
              <strong>Mock Interviews:</strong> Practice with friends or mentors
              to build confidence
            </li>
          </ol>

          <h2>Additional Resources</h2>
          <p>Complement your preparation with our other tools:</p>
          <ul>
            <li>
              <Link href="/tools/resume-score-checker">
                Resume Score Checker
              </Link>{' '}
              - Optimize your resume
            </li>
            <li>
              <Link href="/tools/interview-questions">
                Interview Question Generator
              </Link>{' '}
              - Practice more questions
            </li>
            <li>
              <Link href="/tools/aptitude-test">Aptitude Mock Tests</Link> -
              Prepare for aptitude rounds
            </li>
            <li>
              <Link href="/off-campus-drives">Off-Campus Drives</Link> - Find
              current openings
            </li>
          </ul>
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <FAQSection
            title="Company Research FAQ"
            faqs={companyFaqs}
          />
        </div>
      </div>
    </div>
  );
}
