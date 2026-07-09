import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Building2,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Scale,
  Star,
  Briefcase,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/blog/FAQSection';
import { CompanyComparisonLinks, ContextualToolLinks } from '@/components/seo';

// Company salary database for programmatic SEO
const companyData: Record<
  string,
  {
    name: string;
    logo?: string;
    color: string;
    salaries: { role: string; level: string; min: number; max: number }[];
    culture: string[];
    pros: string[];
    cons: string[];
    interviewRounds: number;
    acceptanceRate: string;
  }
> = {
  google: {
    name: 'Google',
    color: 'from-blue-600 to-green-500',
    salaries: [
      { role: 'SWE L3', level: 'Entry', min: 25, max: 45 },
      { role: 'SWE L4', level: 'Mid', min: 45, max: 75 },
      { role: 'SWE L5', level: 'Senior', min: 80, max: 130 },
      { role: 'SWE L6', level: 'Staff', min: 130, max: 200 },
    ],
    culture: [
      'Innovation',
      'Work-life balance',
      'Intellectual freedom',
      '20% projects',
    ],
    pros: [
      'Best compensation',
      'Smart colleagues',
      'World-class perks',
      'Career growth',
    ],
    cons: ['Slow promotions', 'Large org politics', 'Can feel bureaucratic'],
    interviewRounds: 5,
    acceptanceRate: '0.2%',
  },
  amazon: {
    name: 'Amazon',
    color: 'from-orange-500 to-yellow-500',
    salaries: [
      { role: 'SDE-1', level: 'Entry', min: 20, max: 35 },
      { role: 'SDE-2', level: 'Mid', min: 35, max: 55 },
      { role: 'SDE-3', level: 'Senior', min: 55, max: 90 },
      { role: 'Principal', level: 'Staff', min: 90, max: 150 },
    ],
    culture: [
      'Customer obsession',
      'Ownership',
      'Bias for action',
      'Frugality',
    ],
    pros: [
      'Fast promotions',
      'High impact',
      'Good stock appreciation',
      'Leadership focus',
    ],
    cons: ['High pressure', 'Work-life balance varies', 'PIP culture concerns'],
    interviewRounds: 5,
    acceptanceRate: '1.5%',
  },
  microsoft: {
    name: 'Microsoft',
    color: 'from-blue-500 to-blue-700',
    salaries: [
      { role: 'SDE 59-60', level: 'Entry', min: 20, max: 35 },
      { role: 'SDE 61-62', level: 'Mid', min: 35, max: 55 },
      { role: 'Senior 63-64', level: 'Senior', min: 55, max: 90 },
      { role: 'Principal 65+', level: 'Staff', min: 90, max: 160 },
    ],
    culture: [
      'Growth mindset',
      'Collaboration',
      'Diversity',
      'Work-life balance',
    ],
    pros: [
      'Best work-life balance',
      'Stable culture',
      'Great benefits',
      'Learning culture',
    ],
    cons: ['Slower pace', 'Lower base than Google', 'Stack ranking history'],
    interviewRounds: 4,
    acceptanceRate: '2%',
  },
  meta: {
    name: 'Meta',
    color: 'from-blue-600 to-purple-600',
    salaries: [
      { role: 'E3', level: 'Entry', min: 30, max: 45 },
      { role: 'E4', level: 'Mid', min: 50, max: 80 },
      { role: 'E5', level: 'Senior', min: 90, max: 140 },
      { role: 'E6', level: 'Staff', min: 140, max: 200 },
    ],
    culture: ['Move fast', 'Be bold', 'Focus on impact', 'Open culture'],
    pros: [
      'Highest comp at senior levels',
      'Fast-paced',
      'Impact-driven',
      'Bootcamp onboarding',
    ],
    cons: ['Frequent layoffs', 'Metaverse uncertainty', 'High expectations'],
    interviewRounds: 5,
    acceptanceRate: '0.5%',
  },
  apple: {
    name: 'Apple',
    color: 'from-gray-800 to-gray-900',
    salaries: [
      { role: 'ICT2', level: 'Entry', min: 25, max: 40 },
      { role: 'ICT3', level: 'Mid', min: 45, max: 70 },
      { role: 'ICT4', level: 'Senior', min: 80, max: 130 },
      { role: 'ICT5', level: 'Staff', min: 130, max: 180 },
    ],
    culture: [
      'Think different',
      'Privacy first',
      'Attention to detail',
      'Secrecy',
    ],
    pros: [
      'Iconic products',
      'Great hardware',
      'Strong brand',
      'Privacy focus',
    ],
    cons: ['Secretive culture', 'Slower process', 'Less flexible WFH'],
    interviewRounds: 6,
    acceptanceRate: '1%',
  },
  netflix: {
    name: 'Netflix',
    color: 'from-red-600 to-red-800',
    salaries: [
      { role: 'L3', level: 'Entry', min: 40, max: 60 },
      { role: 'L4', level: 'Mid', min: 70, max: 110 },
      { role: 'L5', level: 'Senior', min: 110, max: 160 },
      { role: 'L6', level: 'Staff', min: 160, max: 220 },
    ],
    culture: [
      'Freedom & Responsibility',
      'Candor',
      'High performance',
      'No rules',
    ],
    pros: ['Highest base salary', 'All cash', 'Unlimited PTO', 'Trust-based'],
    cons: [
      'Keeper test',
      'High pressure',
      'No job security',
      'Smaller eng team',
    ],
    interviewRounds: 6,
    acceptanceRate: '0.5%',
  },
  flipkart: {
    name: 'Flipkart',
    color: 'from-yellow-500 to-blue-600',
    salaries: [
      { role: 'SDE-1', level: 'Entry', min: 18, max: 28 },
      { role: 'SDE-2', level: 'Mid', min: 32, max: 50 },
      { role: 'SDE-3', level: 'Senior', min: 55, max: 80 },
      { role: 'Staff', level: 'Staff', min: 85, max: 120 },
    ],
    culture: ['Customer first', 'Bias for action', 'Be bold', 'Stay humble'],
    pros: [
      'Indian unicorn',
      'E-commerce scale',
      'Good ESOPs',
      'Machine coding focus',
    ],
    cons: [
      'Lower than FAANG',
      'Indian market focus',
      'Walmart ownership concerns',
    ],
    interviewRounds: 7,
    acceptanceRate: '2%',
  },
  uber: {
    name: 'Uber',
    color: 'from-gray-900 to-gray-700',
    salaries: [
      { role: 'L3', level: 'Entry', min: 20, max: 32 },
      { role: 'L4', level: 'Mid', min: 38, max: 60 },
      { role: 'L5', level: 'Senior', min: 65, max: 130 },
      { role: 'L6', level: 'Staff', min: 120, max: 160 },
    ],
    culture: [
      'Do the right thing',
      'Act like owners',
      'Celebrate differences',
      'Big bold bets',
    ],
    pros: ['Strong RSUs', 'Global impact', 'Real-time systems', 'India hub'],
    cons: [
      'Past culture issues',
      'Competition from Ola',
      'Regulatory challenges',
    ],
    interviewRounds: 6,
    acceptanceRate: '2%',
  },
  tcs: {
    name: 'TCS',
    color: 'from-blue-800 to-blue-600',
    salaries: [
      { role: 'ASE', level: 'Entry', min: 3.5, max: 7 },
      { role: 'ITA', level: 'Mid', min: 7, max: 12 },
      { role: 'IT Analyst', level: 'Senior', min: 12, max: 20 },
      { role: 'Consultant', level: 'Staff', min: 20, max: 35 },
    ],
    culture: [
      'Customer focus',
      'Integrity',
      'Learning culture',
      'Global delivery',
    ],
    pros: [
      'Job stability',
      'Global opportunities',
      'Brand reputation',
      'Training programs',
    ],
    cons: [
      'Lower pay than product companies',
      'Slow promotions',
      'Service-based model',
      'Bond period',
    ],
    interviewRounds: 3,
    acceptanceRate: '8%',
  },
  infosys: {
    name: 'Infosys',
    color: 'from-blue-600 to-cyan-500',
    salaries: [
      { role: 'SE', level: 'Entry', min: 3.6, max: 6.5 },
      { role: 'SSE', level: 'Mid', min: 8, max: 14 },
      { role: 'Technology Lead', level: 'Senior', min: 14, max: 24 },
      { role: 'Principal Consultant', level: 'Staff', min: 24, max: 40 },
    ],
    culture: ['Innovation', 'Client value', 'Excellence', 'Fairness'],
    pros: [
      'Strong training (Mysore)',
      'Innovation focus',
      'Good work culture',
      'Global projects',
    ],
    cons: [
      'Lower starting salary',
      'Bench period',
      'Service company limitations',
    ],
    interviewRounds: 3,
    acceptanceRate: '6%',
  },
  wipro: {
    name: 'Wipro',
    color: 'from-purple-700 to-indigo-600',
    salaries: [
      { role: 'Project Engineer', level: 'Entry', min: 3.5, max: 6 },
      { role: 'Senior PE', level: 'Mid', min: 6, max: 12 },
      { role: 'Technical Lead', level: 'Senior', min: 12, max: 22 },
      { role: 'Architect', level: 'Staff', min: 22, max: 38 },
    ],
    culture: [
      'Spirit of Wipro',
      'Sustainability',
      'Integrity',
      'Customer value',
    ],
    pros: [
      'Digital transformation focus',
      'Diverse projects',
      'Good WLB in some teams',
      'Global exposure',
    ],
    cons: [
      'Lower pay than peers',
      'Variable experiences by project',
      'Frequent restructuring',
    ],
    interviewRounds: 3,
    acceptanceRate: '10%',
  },
  hcl: {
    name: 'HCLTech',
    color: 'from-blue-700 to-teal-500',
    salaries: [
      { role: 'Analyst', level: 'Entry', min: 4, max: 7 },
      { role: 'Senior Analyst', level: 'Mid', min: 8, max: 14 },
      { role: 'Lead', level: 'Senior', min: 14, max: 24 },
      { role: 'Architect', level: 'Staff', min: 24, max: 40 },
    ],
    culture: ['Employee first', 'Value centricity', 'Trust', 'Ideapreneurship'],
    pros: [
      'Better pay than TCS/Infosys',
      'Mode 1-2-3 framework',
      'Employee-first culture',
      'Product engineering',
    ],
    cons: [
      'Less brand recognition globally',
      'Service-oriented',
      'Night shifts for US clients',
    ],
    interviewRounds: 3,
    acceptanceRate: '7%',
  },
  cognizant: {
    name: 'Cognizant',
    color: 'from-blue-500 to-blue-800',
    salaries: [
      { role: 'PAT', level: 'Entry', min: 4, max: 7.5 },
      { role: 'Associate', level: 'Mid', min: 8, max: 15 },
      { role: 'Manager', level: 'Senior', min: 15, max: 28 },
      { role: 'Director', level: 'Staff', min: 28, max: 50 },
    ],
    culture: [
      'Client-centricity',
      'Passion for results',
      'Collaboration',
      'Innovation',
    ],
    pros: [
      'Higher base than TCS/Infosys',
      'US-headquartered',
      'Healthcare/BFSI domain strength',
      'Good benefits',
    ],
    cons: ['Layoff cycles', 'Variable growth', 'High client dependency'],
    interviewRounds: 3,
    acceptanceRate: '5%',
  },
  accenture: {
    name: 'Accenture',
    color: 'from-purple-600 to-purple-900',
    salaries: [
      { role: 'ASE', level: 'Entry', min: 4.5, max: 8 },
      { role: 'Analyst', level: 'Mid', min: 8, max: 16 },
      { role: 'Team Lead', level: 'Senior', min: 16, max: 30 },
      { role: 'Manager', level: 'Staff', min: 30, max: 55 },
    ],
    culture: [
      'Client value',
      'One global network',
      'Respect for individual',
      'Stewardship',
    ],
    pros: [
      'Highest pay among service cos',
      'Consulting exposure',
      'Global mobility',
      'Diverse projects',
    ],
    cons: [
      'High workload',
      'Fast-paced layoffs',
      'Travel heavy',
      'Up or out policy',
    ],
    interviewRounds: 4,
    acceptanceRate: '4%',
  },
  techmahindra: {
    name: 'Tech Mahindra',
    color: 'from-red-600 to-red-800',
    salaries: [
      { role: 'SE', level: 'Entry', min: 3.2, max: 6 },
      { role: 'Senior SE', level: 'Mid', min: 6, max: 12 },
      { role: 'Tech Lead', level: 'Senior', min: 12, max: 20 },
      { role: 'Delivery Manager', level: 'Staff', min: 20, max: 35 },
    ],
    culture: ['Rise', 'Telecom expertise', 'Innovation', 'Customer centricity'],
    pros: [
      'Telecom/5G leader',
      'Mahindra Group backing',
      'Good for freshers',
      'Niche expertise',
    ],
    cons: ['Lower pay', 'Less brand value', 'Limited non-telecom projects'],
    interviewRounds: 3,
    acceptanceRate: '12%',
  },
  deloitte: {
    name: 'Deloitte',
    color: 'from-green-700 to-green-900',
    salaries: [
      { role: 'Analyst', level: 'Entry', min: 6, max: 12 },
      { role: 'Consultant', level: 'Mid', min: 12, max: 22 },
      { role: 'Senior Consultant', level: 'Senior', min: 22, max: 40 },
      { role: 'Manager', level: 'Staff', min: 40, max: 65 },
    ],
    culture: ['Integrity', 'Excellence', 'Commitment', 'Positive culture'],
    pros: [
      'Big 4 brand',
      'Consulting prestige',
      'Excellent learning',
      'High pay for service',
    ],
    cons: [
      'Long hours',
      'Travel intensive',
      'Up or out culture',
      'Competitive environment',
    ],
    interviewRounds: 4,
    acceptanceRate: '3%',
  },
};

// Generate all valid comparison slugs
export function generateStaticParams() {
  const companies = Object.keys(companyData);
  const params: { slug: string }[] = [];

  for (let i = 0; i < companies.length; i++) {
    for (let j = i + 1; j < companies.length; j++) {
      params.push({ slug: `${companies[i]}-vs-${companies[j]}` });
      params.push({ slug: `${companies[j]}-vs-${companies[i]}` });
    }
  }

  // Only pre-build top 50 to save build time and memory, others generated on-demand
  return params.slice(0, 50);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const parts = resolvedParams.slug.split('-vs-');

  if (parts.length !== 2) return { title: 'Company Comparison' };

  const company1 = companyData[parts[0]];
  const company2 = companyData[parts[1]];

  if (!company1 || !company2) return { title: 'Company Comparison' };

  const title = `${company1.name} vs ${company2.name} | Salary, Culture & Interview Comparison`;
  const description = `Compare ${company1.name} and ${company2.name} on salary ranges, culture, interview process, and work-life balance to decide which role environment fits you better.`;

  return {
    title,
    description,
    keywords: `${company1.name} vs ${company2.name}, ${company1.name} salary, ${company2.name} salary, ${company1.name} interview, ${company2.name} interview, company comparison`,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.sproutern.com/compare/${resolvedParams.slug}`,
    },
    alternates: {
      canonical: `https://www.sproutern.com/compare/${resolvedParams.slug}`,
    },
  };
}

export default async function CompanyComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const parts = resolvedParams.slug.split('-vs-');

  if (parts.length !== 2) notFound();

  const company1 = companyData[parts[0]];
  const company2 = companyData[parts[1]];

  if (!company1 || !company2) notFound();

  const avgSalary1 =
    company1.salaries.reduce((a, b) => a + (b.min + b.max) / 2, 0) /
    company1.salaries.length;
  const avgSalary2 =
    company2.salaries.reduce((a, b) => a + (b.min + b.max) / 2, 0) /
    company2.salaries.length;
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
      {
        '@type': 'ListItem',
        position: 3,
        name: `${company1.name} vs ${company2.name}`,
        item: `https://www.sproutern.com/compare/${resolvedParams.slug}`,
      },
    ],
  };
  const comparisonFaqs = [
    {
      question: `Is ${company1.name} or ${company2.name} better for freshers?`,
      answer: `Neither company is automatically better for every fresher. ${company1.name} may suit you more if its culture, role scope, and learning environment align with what you want. ${company2.name} may be stronger if its interview style, team structure, or growth path fits you better. Compare the role, manager, location, and long-term trajectory instead of choosing by brand alone.`,
    },
    {
      question: `Which company pays more on average: ${company1.name} or ${company2.name}?`,
      answer: `Based on the ranges summarized on this page, ${avgSalary1 >= avgSalary2 ? company1.name : company2.name} shows the higher average compensation band. Use that as one signal, not the entire decision, because stock, bonuses, team quality, and learning opportunities also matter.`,
    },
    {
      question: `How should I choose between ${company1.name} and ${company2.name}?`,
      answer: `Start with the kind of work you want to do, then compare compensation, interview difficulty, role depth, work style, and growth opportunities. The better choice is the one that matches your current goals, not just the better-known brand.`,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${company1.name} vs ${company2.name} comparison`,
            description: `Comprehensive comparison of ${company1.name} and ${company2.name} including salaries, culture, and interview process.`,
            author: { '@type': 'Organization', name: 'Sproutern' },
            publisher: { '@type': 'Organization', name: 'Sproutern' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-r ${company1.color.split(' ')[0]} via-purple-600 ${company2.color.split(' ')[1]}`}
      >
        <div className="container py-16 md:py-20">
          <Link
            href="/compare"
            className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            ← All Comparisons
          </Link>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl font-bold">
                {company1.name.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-white">{company1.name}</h2>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold text-white">
              VS
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl font-bold">
                {company2.name.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-white">{company2.name}</h2>
            </div>
          </div>
          <h1 className="mt-8 text-center text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            {company1.name} vs {company2.name}
          </h1>
          <p className="mt-4 text-center text-lg text-white/90">
            Comprehensive comparison of salary, culture, interview process &
            more
          </p>
        </div>
      </section>

      {/* Quick Stats Comparison */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Avg Salary</p>
              <p className="text-2xl font-bold text-primary">
                ₹{avgSalary1.toFixed(0)}L
              </p>
              <p className="text-sm font-medium">{company1.name}</p>
            </div>
            <div>
              <Scale className="mx-auto h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Salary</p>
              <p className="text-2xl font-bold text-primary">
                ₹{avgSalary2.toFixed(0)}L
              </p>
              <p className="text-sm font-medium">{company2.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Comparison Table */}
      <section className="container py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Salary Comparison
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Company 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                {company1.name} Salaries (₹ LPA)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2 text-left">Role</th>
                    <th className="pb-2 text-left">Range</th>
                  </tr>
                </thead>
                <tbody>
                  {company1.salaries.map((s) => (
                    <tr
                      key={s.role}
                      className="border-b last:border-0"
                    >
                      <td className="py-2 font-medium">{s.role}</td>
                      <td className="py-2 text-primary">
                        ₹{s.min}-{s.max} LPA
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Company 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                {company2.name} Salaries (₹ LPA)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2 text-left">Role</th>
                    <th className="pb-2 text-left">Range</th>
                  </tr>
                </thead>
                <tbody>
                  {company2.salaries.map((s) => (
                    <tr
                      key={s.role}
                      className="border-b last:border-0"
                    >
                      <td className="py-2 font-medium">{s.role}</td>
                      <td className="py-2 text-primary">
                        ₹{s.min}-{s.max} LPA
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Culture Comparison */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Culture Comparison
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{company1.name} Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {company1.culture.map((c) => (
                    <Badge
                      key={c}
                      variant="secondary"
                    >
                      {c}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{company2.name} Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {company2.culture.map((c) => (
                    <Badge
                      key={c}
                      variant="secondary"
                    >
                      {c}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="container py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">Pros & Cons</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Company 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">
                {company1.name} Pros ✅
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {company1.pros.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">
                {company2.name} Pros ✅
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {company2.pros.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interview Comparison */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Interview Process
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 text-center">
              <h3 className="mb-4 text-xl font-bold">{company1.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {company1.interviewRounds}
                  </p>
                  <p className="text-sm text-muted-foreground">Rounds</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {company1.acceptanceRate}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Acceptance Rate
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="mt-4"
              >
                <Link href={`/companies/${parts[0]}`}>
                  View {company1.name} Guide{' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="mb-4 text-xl font-bold">{company2.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {company2.interviewRounds}
                  </p>
                  <p className="text-sm text-muted-foreground">Rounds</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {company2.acceptanceRate}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Acceptance Rate
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="mt-4"
              >
                <Link href={`/companies/${parts[1]}`}>
                  View {company2.name} Guide{' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="container py-12">
        <Card className="p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold">Which Should You Choose?</h2>
          <div className="mx-auto max-w-2xl text-muted-foreground">
            <p className="mb-4">
              <strong>Choose {company1.name}</strong> if you prefer:{' '}
              {company1.culture.slice(0, 2).join(', ')}.
              {avgSalary1 > avgSalary2 && ' Better average compensation.'}
            </p>
            <p>
              <strong>Choose {company2.name}</strong> if you prefer:{' '}
              {company2.culture.slice(0, 2).join(', ')}.
              {avgSalary2 > avgSalary1 && ' Better average compensation.'}
            </p>
          </div>
        </Card>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-4xl">
          <FAQSection
            title={`${company1.name} vs ${company2.name}: FAQ`}
            faqs={comparisonFaqs}
          />
        </div>
      </section>

      {/* More Comparisons */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold">
            More Comparisons
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <ContextualToolLinks context="interview" />
            <CompanyComparisonLinks currentCompany={company1.name} />
          </div>
        </div>
      </section>
    </div>
  );
}
