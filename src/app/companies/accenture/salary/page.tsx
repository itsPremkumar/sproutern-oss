import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  IndianRupee,
  Briefcase,
  TrendingUp,
  GraduationCap,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accenture Salary Structure 2024 - Freshers & Experienced',
  description:
    'Detailed breakdown of Accenture salary for ASE, FSE, and other roles. Check in-hand salary, bonuses, and growth prospects.',
  keywords: [
    'accenture salary',
    'accenture package',
    'accenture ase salary',
    'accenture fse salary',
  ],
  alternates: { canonical: '/companies/accenture/salary' },
};

const salaryData = [
  {
    role: 'Associate Software Engineer (ASE)',
    experience: '0-1 Years',
    structure: {
      ctc: '₹4.5 LPA',
      fixed: '₹3.83 LPA',
      variable: '₹28k - ₹42k',
      joiningBonus: 'N/A',
    },
  },
  {
    role: 'Packaged App Development Associate',
    experience: '0-1 Years',
    structure: {
      ctc: '₹4.6 - ₹6.5 LPA',
      fixed: 'Based on skills',
      variable: 'Performance based',
      joiningBonus: 'Varies',
    },
  },
  {
    role: 'Application Development Associate',
    experience: 'Fresher / 0-1 Yr',
    structure: {
      ctc: 'Bengaluru: ₹4.6L; Others: ₹4.5L',
      fixed: '₹3.8 LPA approx',
      variable: '10-20%',
      joiningBonus: '₹25,000 (Selective)',
    },
  },
  {
    role: 'Senior Analyst',
    experience: '3-6 Years',
    structure: {
      ctc: '₹10 - ₹18 LPA',
      fixed: 'High component',
      variable: '15-25%',
      joiningBonus: 'Discussed',
    },
  },
  {
    role: 'Team Lead / Consultant',
    experience: '7-10 Years',
    structure: {
      ctc: '₹18 - ₹30 LPA',
      fixed: 'Market Standard',
      variable: '20-30%',
      joiningBonus: 'Performance units',
    },
  },
];

export default function AccentureSalaryPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            href="/companies/accenture"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Accenture Overview
          </Link>
          <h1 className="mb-4 text-4xl font-bold">
            Accenture Salary Structure
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand the compensation breakdown for various roles at
            Accenture.
          </p>
        </div>

        {/* Salary Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {salaryData.map((item, index) => (
            <Card
              key={index}
              className="transition-shadow hover:shadow-md"
            >
              <CardHeader className="bg-muted/30 pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold text-primary">
                      {item.role}
                    </CardTitle>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <Briefcase className="h-3 w-3" /> {item.experience}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    <IndianRupee className="mr-1 h-3 w-3" />
                    {item.structure.ctc}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">
                      Fixed Component
                    </span>
                    <span className="font-medium">{item.structure.fixed}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">Variable Pay</span>
                    <span className="font-medium">
                      {item.structure.variable}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Joining Bonus</span>
                    <span className="font-medium">
                      {item.structure.joiningBonus}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 rounded-xl bg-blue-50 p-6 dark:bg-blue-950">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-blue-800 dark:text-blue-100">
            <TrendingUp className="h-5 w-5" />
            Growth & Hikes
          </h3>
          <div className="grid gap-6 text-blue-900 dark:text-blue-200 md:grid-cols-2">
            <ul className="space-y-2">
              <li className="flex gap-2">
                <CheckCircle className="mt-1 h-4 w-4 shrink-0" />
                <span>Annual appraisals happen in December/January.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="mt-1 h-4 w-4 shrink-0" />
                <span>
                  Average hike varies from 8% to 15% based on performance
                  rating.
                </span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <CheckCircle className="mt-1 h-4 w-4 shrink-0" />
                <span>
                  Promotions usually occur every 2-3 years for early careers.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="mt-1 h-4 w-4 shrink-0" />
                <span>
                  Variable pay payout depends on company and individual
                  performance.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
