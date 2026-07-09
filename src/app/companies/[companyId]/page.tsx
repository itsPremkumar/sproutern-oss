import { companies } from '@/lib/company-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Building2,
  FileQuestion,
  IndianRupee,
  Briefcase,
  Users,
  Trophy,
} from 'lucide-react';
import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/schema-generators';
import { generateJsonLdSchema } from '@/lib/seo/apply-complete-seo';

interface Props {
  params: Promise<{
    companyId: string;
  }>;
}

// 1. Generate Static Params for all companies (SSG)
export async function generateStaticParams() {
  return companies.map((company) => ({
    companyId: company.name.toLowerCase().replace(/\s+/g, '-'), // precise slug generation
  }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { companyId: slug } = await params;
  // Simple check - in production use a more robust slugify matcher
  const company = companies.find(
    (c) => c.name.toLowerCase().replace(/\s+/g, '-') === slug,
  );

  if (!company) {
    return {
      title: 'Company Not Found',
    };
  }

  return {
    title: `${company.name} Interview Questions, Salary & Placement Experience 2026 | Sproutern`,
    description: `Complete guide to crack ${company.name} interviews. Updated 2026 interview questions, ${company.name} salary structure for freshers, and internship process explained.`,
    keywords: [
      `${company.name} interview questions`,
      `${company.name} placement experience`,
      `${company.name} salary for freshers`,
      `${company.name} internship process`,
      `${company.name} recruitment process`,
    ],
    openGraph: {
      title: `Crack ${company.name} Interviews: 2026 Guide`,
      description: company.description,
      type: 'article',
    },
    alternates: {
      canonical: `https://www.sproutern.com/companies/${slug}`,
    },
  };
}

export default async function CompanyPage({ params }: Props) {
  const { companyId: slug } = await params;
  const company = companies.find(
    (c) => c.name.toLowerCase().replace(/\s+/g, '-') === slug,
  );

  if (!company) {
    notFound();
  }

  // GEO-Optimized Schema
  const structuredData = [
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://www.sproutern.com' },
      { name: 'Companies', url: 'https://www.sproutern.com/companies' },
      {
        name: company.name,
        url: `https://www.sproutern.com/companies/${slug}`,
      },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `How to Crak ${company.name} Interviews: The Complete Guide`,
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      author: {
        '@type': 'Organization',
        name: 'Sproutern Team',
      },
      publisher: generateOrganizationSchema(),
      description: `Complete preparation guide for ${company.name} including interview questions, salary, and eligibility.`,
      // GEO Specific: Mentions
      mentions: [
        {
          '@type': 'Organization',
          name: company.fullName,
          sameAs: `https://www.google.com/search?q=${company.name}`, // Fallback if no specific link
        },
      ],
    },
  ];

  return (
    <div className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@graph': structuredData }),
        }}
      />

      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Building2 className="h-10 w-10 text-primary" />
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Crack {company.name} Interviews
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          {company.description}. The ultimate preparation guide for freshers and
          experienced professionals.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Quick Stats / Highlights (GEO Signal: High Density Info) */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Users className="mb-2 h-8 w-8 text-primary" />
              <h3 className="font-semibold">Role</h3>
              <p className="text-sm text-muted-foreground">
                SDE, Analyst, Core
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <IndianRupee className="mb-2 h-8 w-8 text-primary" />
              <h3 className="font-semibold">Avg Salary</h3>
              <p className="text-sm text-muted-foreground">See Details</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Trophy className="mb-2 h-8 w-8 text-primary" />
              <h3 className="font-semibold">Difficulty</h3>
              <p className="text-sm text-muted-foreground">Moderate - High</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Briefcase className="mb-2 h-8 w-8 text-primary" />
              <h3 className="font-semibold">Process</h3>
              <p className="text-sm text-muted-foreground">3-4 Rounds</p>
            </CardContent>
          </Card>
        </div>

        {/* Core Resources Grid */}
        <h2 className="mb-8 text-3xl font-bold">Preparation Resources</h2>
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <Card className="transition-all hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileQuestion className="mr-2 h-5 w-5 text-primary" />
                Interview Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-sm text-muted-foreground">
                Top 50+ {company.name} interview questions with detailed answers
                for technical and HR rounds.
              </p>
              <Button
                asChild
                className="w-full"
              >
                <Link href={company.interviewLink}>Practice Questions</Link>
              </Button>
            </CardContent>
          </Card>

          {company.salaryLink && (
            <Card className="transition-all hover:border-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <IndianRupee className="mr-2 h-5 w-5 text-primary" />
                  Salary Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">
                  Detailed breakdown of {company.name} salary packages (CTC),
                  in-hand salary, and perks.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="w-full"
                >
                  <Link href={company.salaryLink}>View Salary Breakdown</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          <Card className="transition-all hover:border-primary">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Experiences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-sm text-muted-foreground">
                Read authentic interview experiences from students who got
                placed at {company.name}.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full"
              >
                <Link href="/blog?tag=interview-experience">Read Stories</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* GEO Content Block: High Information Density */}
        <div className="rounded-xl border bg-muted/30 p-8">
          <h2 className="mb-6 text-2xl font-bold">
            About {company.name} Recruitment
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              <strong>{company.fullName}</strong> is a key employer for fresh
              engineering graduates. The recruitment process typically consists
              of an online aptitude & coding test, followed with technical
              interviews and a final HR discussion.
            </p>
            <h3>Key Skills Evaluated</h3>
            <ul>
              <li>Data Structures & Algorithms (Arrays, Strings, Trees)</li>
              <li>Core CS Concepts (DBMS, OS, OOPs)</li>
              <li>Communication Skills & Cultural Fit</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              *Note: This information is aggregated for {company.name}{' '}
              recruitment drives. Specific roles may vary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
