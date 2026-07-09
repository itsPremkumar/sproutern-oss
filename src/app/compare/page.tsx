import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection } from '@/components/blog/FAQSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Scale,
  ArrowRight,
  Building2,
  TrendingUp,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Company Comparisons | Salary, Culture & Interview Process | Sproutern',
  description:
    'Compare company pairs side by side on salary ranges, culture, interview difficulty, and career growth factors before you choose where to apply.',
  keywords:
    'TCS vs Infosys, Wipro vs HCL, Google vs Amazon, Accenture vs Cognizant, company comparison, salary comparison, tech company comparison, Indian IT company comparison',
  openGraph: {
    title: 'Company Comparisons | FAANG, IT Services & Consulting',
    description:
      'Compare product companies, IT services firms, and consulting employers side by side.',
    type: 'website',
    url: 'https://www.sproutern.com/compare',
  },
  alternates: { canonical: 'https://www.sproutern.com/compare' },
};

const faangCompanies = [
  { id: 'google', name: 'Google' },
  { id: 'amazon', name: 'Amazon' },
  { id: 'microsoft', name: 'Microsoft' },
  { id: 'meta', name: 'Meta' },
  { id: 'apple', name: 'Apple' },
  { id: 'netflix', name: 'Netflix' },
  { id: 'flipkart', name: 'Flipkart' },
  { id: 'uber', name: 'Uber' },
];

const indianItCompanies = [
  { id: 'tcs', name: 'TCS' },
  { id: 'infosys', name: 'Infosys' },
  { id: 'wipro', name: 'Wipro' },
  { id: 'hcl', name: 'HCLTech' },
  { id: 'cognizant', name: 'Cognizant' },
  { id: 'accenture', name: 'Accenture' },
  { id: 'techmahindra', name: 'Tech Mahindra' },
  { id: 'deloitte', name: 'Deloitte' },
];

const allCompanies = [...faangCompanies, ...indianItCompanies];

// Generate comparison pairs for a group
const generatePairs = (companies: { id: string; name: string }[]) => {
  const pairs: { slug: string; company1: string; company2: string }[] = [];
  for (let i = 0; i < companies.length; i++) {
    for (let j = i + 1; j < companies.length; j++) {
      pairs.push({
        slug: `${companies[i].id}-vs-${companies[j].id}`,
        company1: companies[i].name,
        company2: companies[j].name,
      });
    }
  }
  return pairs;
};

const faangPairs = generatePairs(faangCompanies);
const indianItPairs = generatePairs(indianItCompanies);

const crossPairs = [
  { slug: 'tcs-vs-google', company1: 'TCS', company2: 'Google' },
  { slug: 'infosys-vs-google', company1: 'Infosys', company2: 'Google' },
  { slug: 'tcs-vs-amazon', company1: 'TCS', company2: 'Amazon' },
  { slug: 'accenture-vs-google', company1: 'Accenture', company2: 'Google' },
  { slug: 'deloitte-vs-google', company1: 'Deloitte', company2: 'Google' },
  {
    slug: 'cognizant-vs-accenture',
    company1: 'Cognizant',
    company2: 'Accenture',
  },
];

const hotComparisons = [
  { slug: 'tcs-vs-infosys', company1: 'TCS', company2: 'Infosys' },
  { slug: 'wipro-vs-hcl', company1: 'Wipro', company2: 'HCLTech' },
  { slug: 'google-vs-amazon', company1: 'Google', company2: 'Amazon' },
  { slug: 'microsoft-vs-meta', company1: 'Microsoft', company2: 'Meta' },
  {
    slug: 'accenture-vs-cognizant',
    company1: 'Accenture',
    company2: 'Cognizant',
  },
  { slug: 'tcs-vs-wipro', company1: 'TCS', company2: 'Wipro' },
];

const compareFaqs = [
  {
    question: 'How should I compare two companies properly?',
    answer:
      'Do not compare logo alone. Look at role scope, total compensation, manager quality, interview difficulty, learning opportunities, and the kind of work you want to do over the next few years.',
  },
  {
    question: 'Does a higher salary always mean a better company?',
    answer:
      'No. A higher offer can still be a weaker fit if the role is narrow, the growth path is unclear, or the work style does not match your strengths. Compensation matters, but context matters more.',
  },
  {
    question: 'What should I open after a comparison page?',
    answer:
      'Open the company guides, interview experiences, and practice tools for the companies you are seriously considering. That gives you a fuller picture than a side-by-side summary alone.',
  },
];

export default function CompareIndexPage() {
  const totalPairs =
    faangPairs.length + indianItPairs.length + crossPairs.length;
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
        name: 'Compare',
        item: 'https://www.sproutern.com/compare',
      },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Company Salary and Culture Comparisons',
            description:
              'Compare top tech, consulting, and IT service companies for salary, culture, and interview process.',
            url: 'https://www.sproutern.com/compare',
            numberOfItems: totalPairs,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            {totalPairs}+ Comparisons
          </Badge>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Company Comparisons
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Compare product companies, Indian IT, and consulting employers
            side by side. Salary, culture, interview process, and career fit.
          </p>
        </div>
      </section>

      {/* Most Searched */}
      <section className="container py-12">
        <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
          <TrendingUp className="h-6 w-6 text-primary" />
          Most Searched Comparisons
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hotComparisons.map((comp) => (
            <Link
              key={comp.slug}
              href={`/compare/${comp.slug}`}
              className="group"
            >
              <Card className="transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold">
                      {comp.company1.charAt(0)}
                    </div>
                    <Scale className="h-5 w-5 text-muted-foreground" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold">
                      {comp.company2.charAt(0)}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold group-hover:text-primary">
                      {comp.company1} vs {comp.company2}
                    </p>
                    <p className="text-sm text-muted-foreground">Compare →</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Indian IT Comparisons */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
            <Briefcase className="h-6 w-6 text-primary" />
            Indian IT Service Companies
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {indianItPairs.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-medium group-hover:text-primary">
                  {comp.company1} vs {comp.company2}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAANG Comparisons */}
      <section className="container py-12">
        <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
          <Building2 className="h-6 w-6 text-primary" />
          FAANG & Product Companies
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {faangPairs.map((comp) => (
            <Link
              key={comp.slug}
              href={`/compare/${comp.slug}`}
              className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
            >
              <span className="font-medium group-hover:text-primary">
                {comp.company1} vs {comp.company2}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-Category */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
            <Scale className="h-6 w-6 text-primary" />
            Product vs Service Companies
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {crossPairs.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-medium group-hover:text-primary">
                  {comp.company1} vs {comp.company2}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Company */}
      <section className="container py-12">
        <h2 className="mb-8 text-2xl font-bold">Browse by Company</h2>
        <div className="flex flex-wrap gap-3">
          {allCompanies.map((company) => (
            <Link
              key={company.id}
              href={`/companies/${company.id}`}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Building2 className="h-4 w-4" />
              {company.name}
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="border-t py-12">
        <div className="container">
          <div className="prose dark:prose-invert mx-auto max-w-3xl">
            <h2>Why Compare Companies?</h2>
            <p>
              Choosing between top tech companies like Google, Amazon,
              Microsoft, and Meta or Indian IT leaders like TCS, Infosys, Wipro,
              and HCLTech can be challenging. Each company offers unique
              culture, compensation packages, and growth opportunities. Our
              comparison guides help you make informed decisions.
            </p>
            <h3>What We Compare</h3>
            <ul>
              <li>
                <strong>Salary & Compensation:</strong> Base salary, stocks,
                bonuses by level
              </li>
              <li>
                <strong>Culture & Values:</strong> Work environment, management
                style, WLB
              </li>
              <li>
                <strong>Interview Process:</strong> Number of rounds,
                difficulty, acceptance rate
              </li>
              <li>
                <strong>Career Growth:</strong> Promotion velocity, learning
                opportunities
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-4xl">
          <FAQSection
            title="Company Comparison FAQ"
            faqs={compareFaqs}
          />
        </div>
      </section>
    </div>
  );
}
