import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CheckCircle2,
  TrendingUp,
  IndianRupee,
  Building2,
  ArrowRight,
  Calculator,
  Target,
  Trophy,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'MNC Salary Guide | Fresher Salary Packages',
  description:
    'Complete guide to MNC salary packages for freshers. Compare salaries across TCS, Infosys, Wipro, Accenture, Cognizant, Amazon, Google, Microsoft. Understand CTC, in-hand salary, and salary components.',
  keywords:
    'MNC salary, fresher salary, MNC salary packages, TCS salary, Infosys salary, Wipro salary, Amazon salary, Google salary, Microsoft salary, CTC salary, in-hand salary',
  openGraph: {
    title: 'MNC Salary Guide',
    description:
      'Understand MNC salary structures and negotiate better offers.',
    url: 'https://sproutern.com/companies/mnc-salary-guide',
    type: 'website',
  },
};

export default function MNCSalaryGuidePage() {
  const serviceBased = [
    {
      name: 'TCS',
      ninja: '3.5-4 LPA',
      digital: '7-9 LPA',
      color: 'border-blue-500',
    },
    {
      name: 'Infosys',
      se: '3.5-4.5 LPA',
      power: '6.5-8 LPA',
      color: 'border-green-500',
    },
    {
      name: 'Wipro',
      pe: '3.5-4.5 LPA',
      turbo: '6.5-7.5 LPA',
      color: 'border-purple-500',
    },
    {
      name: 'Accenture',
      ase: '4-5 LPA',
      fse: '6-7 LPA',
      color: 'border-pink-500',
    },
    {
      name: 'Cognizant',
      pa: '4-5 LPA',
      senior: '6-7 LPA',
      color: 'border-orange-500',
    },
  ];

  const productBased = [
    {
      name: 'Amazon',
      role: 'SDE',
      salary: '18-25 LPA',
      color: 'border-yellow-500',
    },
    {
      name: 'Google',
      role: 'Software Engineer',
      salary: '25-45 LPA',
      color: 'border-red-500',
    },
    {
      name: 'Microsoft',
      role: 'Software Engineer',
      salary: '20-35 LPA',
      color: 'border-blue-600',
    },
    {
      name: 'Adobe',
      role: 'Software Engineer',
      salary: '22-30 LPA',
      color: 'border-orange-600',
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl py-12">
      {/* Hero Section */}
      <div className="mb-16 space-y-6 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <IndianRupee className="mr-2 h-4 w-4" />
          MNC Salary Guide
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
          MNC Salary Guide for Freshers
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Complete breakdown of salary packages offered by top MNCs. Understand
          CTC, in-hand salary, salary components, and how to negotiate better
          offers.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="h-12 px-8 text-lg"
            asChild
          >
            <Link href="/tools/salary-calculator">
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Your Salary
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-lg"
            asChild
          >
            <Link href="/blog/mnc-salary-negotiation-freshers">
              Salary Negotiation Guide
            </Link>
          </Button>
        </div>
      </div>

      {/* Understanding Salary Components */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">
          Understanding Salary Components
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                CTC (Cost to Company)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                CTC is the total cost a company spends on you annually. It
                includes:
              </p>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Basic Salary</li>
                <li>House Rent Allowance (HRA)</li>
                <li>Transport Allowance</li>
                <li>Medical Allowance</li>
                <li>Provident Fund (PF)</li>
                <li>Gratuity</li>
                <li>Variable Pay / Bonus</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-green-600" />
                In-Hand Salary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                In-hand salary is what you actually receive after deductions:
              </p>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>CTC - PF (12% of basic)</li>
                <li>- Professional Tax</li>
                <li>- Income Tax (as per tax slab)</li>
                <li>- Other deductions</li>
              </ul>
              <div className="mt-3 rounded-lg bg-green-50 p-3 dark:bg-green-950/20">
                <strong>Typical In-Hand:</strong> 70-75% of CTC for
                service-based companies, 80-85% for product companies.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service-Based Companies */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">
          Service-Based Companies Salary
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceBased.map((company, i) => (
            <Card
              key={i}
              className={`border-l-4 ${company.color}`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{company.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Entry Level:
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {Object.values(company).find(
                      (v) =>
                        typeof v === 'string' &&
                        v.includes('LPA') &&
                        !v.includes('border'),
                    )}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Premium Role:
                  </p>
                  <p className="text-sm font-semibold">
                    {Object.values(company).find(
                      (v) =>
                        typeof v === 'string' &&
                        v.includes('LPA') &&
                        v !==
                          Object.values(company).find(
                            (v) =>
                              typeof v === 'string' &&
                              v.includes('LPA') &&
                              !v.includes('border'),
                          ),
                    )}
                  </p>
                </div>
                <div className="border-t pt-3">
                  <Link
                    href={`/companies/${company.name.toLowerCase()}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Product-Based Companies */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">
          Product-Based Companies Salary
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productBased.map((company, i) => (
            <Card
              key={i}
              className={`border-l-4 ${company.color}`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{company.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{company.role}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-2xl font-bold text-primary">
                  {company.salary}
                </p>
                <p className="mb-3 text-xs text-muted-foreground">
                  Can vary based on performance, location, and interview
                  performance
                </p>
                <Link
                  href={`/companies/${company.name.toLowerCase()}`}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View Details →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Salary Factors */}
      <Card className="mb-16 border-primary/20 bg-primary/5">
        <CardContent className="p-8">
          <h3 className="mb-6 text-2xl font-bold">Factors Affecting Salary</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Company Type:</strong> Product companies offer 3-5x
                  higher than service-based
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Location:</strong> Metro cities (Bangalore, Mumbai)
                  offer higher salaries
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>College Tier:</strong> IITs/NITs often get premium
                  packages
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Skills & Projects:</strong> Strong technical skills
                  and impressive projects
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Interview Performance:</strong> Exceptional
                  performance can lead to higher offers
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Negotiation:</strong> Effective negotiation can
                  increase offer by 10-20%
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="rounded-2xl bg-muted/50 p-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">
          Calculate Your In-Hand Salary
        </h3>
        <p className="mb-6 text-muted-foreground">
          Use our salary calculator to understand CTC breakdown and calculate
          your actual in-hand salary
        </p>
        <Button
          size="lg"
          asChild
        >
          <Link href="/tools/salary-calculator">
            <Calculator className="mr-2 h-5 w-5" />
            Calculate Salary
          </Link>
        </Button>
      </div>
    </div>
  );
}
