import { Metadata } from 'next';
import Link from 'next/link';
import {
  Scale,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  Banknote,
  Clock,
  Target,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'IIT vs NIT vs IIIT Comparison | Which is Better?',
  description:
    'Comprehensive comparison of IITs, NITs, and IIITs - fees, placements, faculty, infrastructure, and career outcomes to help you choose.',
  keywords:
    'IIT vs NIT, NIT vs IIIT, IIT comparison, best engineering colleges India, JEE college comparison',
};

const comparison = [
  {
    aspect: 'Entrance Exam',
    iit: 'JEE Advanced',
    nit: 'JEE Main',
    iiit: 'JEE Main',
  },
  {
    aspect: 'Number of Institutes',
    iit: '23 IITs',
    nit: '31 NITs',
    iiit: '25+ IIITs',
  },
  {
    aspect: 'Annual Fees (Approx)',
    iit: '₹2-2.5 Lakh',
    nit: '₹1.5-2 Lakh',
    iiit: '₹1-3 Lakh',
  },
  {
    aspect: 'Avg Package (Top)',
    iit: '₹20-40 LPA',
    nit: '₹12-25 LPA',
    iiit: '₹15-30 LPA',
  },
  {
    aspect: 'Avg Package (Overall)',
    iit: '₹15-20 LPA',
    nit: '₹8-12 LPA',
    iiit: '₹10-15 LPA',
  },
  {
    aspect: 'Focus Area',
    iit: 'All Engineering',
    nit: 'All Engineering',
    iiit: 'IT/CS focused',
  },
  {
    aspect: 'Research Facilities',
    iit: 'Excellent',
    nit: 'Good',
    iiit: 'Good (IT)',
  },
  {
    aspect: 'Alumni Network',
    iit: 'Very Strong',
    nit: 'Strong',
    iiit: 'Growing',
  },
  {
    aspect: 'Global Recognition',
    iit: 'Very High',
    nit: 'High',
    iiit: 'Moderate',
  },
  {
    aspect: 'Hostel Facilities',
    iit: 'Excellent',
    nit: 'Good',
    iiit: 'Variable',
  },
];

const iitPros = [
  'Best faculty and research',
  'Highest packages',
  'Global recognition',
  'Strong alumni network',
  'Best infrastructure',
];
const nitPros = [
  'More seats available',
  'Lower fees',
  'Good placements',
  'Located in various states',
  'All branches available',
];
const iiitPros = [
  'CS/IT focused curriculum',
  'Industry-relevant skills',
  'Good tech placements',
  'Smaller batch sizes',
  'Fast-growing reputation',
];

export default function CollegeComparisonPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Scale className="mr-1 h-3 w-3" />
            Comparison Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            IIT vs NIT vs IIIT
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            A detailed comparison to help you choose the right engineering
            college.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 text-2xl font-bold">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left font-semibold">Aspect</th>
                <th className="border bg-blue-50 p-3 text-center font-semibold dark:bg-blue-950">
                  IIT
                </th>
                <th className="border bg-green-50 p-3 text-center font-semibold dark:bg-green-950">
                  NIT
                </th>
                <th className="border bg-purple-50 p-3 text-center font-semibold dark:bg-purple-950">
                  IIIT
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-muted/50"
                >
                  <td className="border p-3 font-medium">{row.aspect}</td>
                  <td className="border p-3 text-center">{row.iit}</td>
                  <td className="border p-3 text-center">{row.nit}</td>
                  <td className="border p-3 text-center">{row.iiit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 text-center text-2xl font-bold">Pros of Each</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold text-blue-600">
                IIT Advantages
              </h3>
              <ul className="space-y-2">
                {iitPros.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold text-green-600">
                NIT Advantages
              </h3>
              <ul className="space-y-2">
                {nitPros.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold text-purple-600">
                IIIT Advantages
              </h3>
              <ul className="space-y-2">
                {iiitPros.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-12">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-8">
            <h3 className="mb-4 text-xl font-bold">Our Recommendation</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="mb-2 font-semibold text-primary">
                  Choose IIT if...
                </p>
                <p className="text-sm text-muted-foreground">
                  You want research opportunities, global recognition, and
                  highest packages. Willing to put in JEE Advanced effort.
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold text-primary">
                  Choose NIT if...
                </p>
                <p className="text-sm text-muted-foreground">
                  You want a balanced option with good placements, all branches,
                  and lower fees. Great ROI.
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold text-primary">
                  Choose IIIT if...
                </p>
                <p className="text-sm text-muted-foreground">
                  You're focused on CS/IT career, want industry-oriented
                  learning, and tech-focused curriculum.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Building className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">
              Explore More Comparisons
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/college">
                  College Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/scholarships">Scholarships</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
