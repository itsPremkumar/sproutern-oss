import { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Info,
  Shield,
  Clock,
  Banknote,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Service Bond Clauses in IT Companies Explained',
  description:
    'Understanding service bond agreements in Indian IT companies. What are bond clauses, are they legal, and how to handle them.',
  keywords:
    'service bond IT companies, bond clause freshers, TCS bond, Infosys bond, service agreement freshers',
  openGraph: {
    title: 'Service Bond Clauses in IT Companies Explained',
    description:
      'Understanding service bond agreements in Indian IT companies. What are bond clauses, are they legal, and how to handle them.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/freshers/bond-clauses',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Bond Clauses Explained',
    description: 'Understanding bond agreements in IT companies for freshers.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/freshers/bond-clauses',
  },
};

const companies = [
  {
    name: 'TCS',
    bond: '2 years',
    amount: '₹50,000 - ₹1,00,000',
    notes: 'Most common, enforced in some cases',
  },
  {
    name: 'Infosys',
    bond: 'No bond',
    amount: 'N/A',
    notes: 'Generally no service bond',
  },
  {
    name: 'Wipro',
    bond: '1-2 years',
    amount: '₹75,000',
    notes: 'Varies by program',
  },
  {
    name: 'Cognizant',
    bond: 'No bond',
    amount: 'N/A',
    notes: 'Usually no bond for freshers',
  },
  {
    name: 'Capgemini',
    bond: 'Variable',
    amount: 'Variable',
    notes: 'Depends on hiring program',
  },
  {
    name: 'Accenture',
    bond: 'No bond',
    amount: 'N/A',
    notes: 'Generally bond-free',
  },
];

const whatToKnow = [
  {
    title: 'Are bonds legal?',
    desc: 'Bonds are legally valid if training cost is incurred. However, enforceability varies.',
  },
  {
    title: 'What happens if I break bond?',
    desc: 'Company may send legal notice, deduct from salary, or in rare cases, file civil suit.',
  },
  {
    title: 'Can I negotiate bond terms?',
    desc: 'Usually no for freshers. Some companies reduce amount for exceptional cases.',
  },
  {
    title: 'Does everyone pay if they leave?',
    desc: "Not always. Many companies don't pursue if notice period is served properly.",
  },
];

const tips = [
  'Read the entire agreement before signing',
  'Keep a signed copy for your records',
  'Understand notice period requirements',
  'Know training cost breakdown if any',
  'Consult lawyer if amount is very high',
  'Serve proper notice to minimize issues',
];

export default function BondClausesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <FileText className="mr-1 h-3 w-3" />
            Legal Info
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Service Bond Clauses Explained
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Understanding bond agreements in IT companies for freshers.
          </p>
        </div>
      </section>

      <section className="container py-8">
        <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
          <CardContent className="flex items-start gap-4 p-6">
            <Info className="h-6 w-6 flex-shrink-0 text-yellow-600" />
            <div>
              <p className="font-semibold text-yellow-800 dark:text-yellow-100">
                Disclaimer
              </p>
              <p className="text-sm text-yellow-700 dark:text-yellow-200">
                This is general information, not legal advice. Bond policies
                change frequently. Verify with official offer letters and
                consult a lawyer for specific situations.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container py-8">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Shield className="h-6 w-6" />
          Company-wise Bond Information
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left font-semibold">Company</th>
                <th className="border p-3 text-left font-semibold">
                  Bond Period
                </th>
                <th className="border p-3 text-left font-semibold">Amount</th>
                <th className="border p-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c, i) => (
                <tr
                  key={i}
                  className="hover:bg-muted/50"
                >
                  <td className="border p-3 font-medium">{c.name}</td>
                  <td className="border p-3">{c.bond}</td>
                  <td className="border p-3">{c.amount}</td>
                  <td className="border p-3 text-sm text-muted-foreground">
                    {c.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          * Information based on 2024-25 data. May vary by location, role, and
          batch.
        </p>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Info className="h-6 w-6" />
          What You Need to Know
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {whatToKnow.map((item, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <CheckCircle className="h-6 w-6 text-green-600" />
          Tips for Handling Bonds
        </h2>
        <div className="mx-auto grid max-w-3xl gap-3 md:grid-cols-2">
          {tips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-center gap-3 p-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
                {tip}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <FileText className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Compare Company Offers</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/companies">
                  Company Reviews
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/freshers/salary-negotiation">
                  Salary Negotiation
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
