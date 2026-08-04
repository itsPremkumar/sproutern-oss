import { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe,
  ArrowRight,
  GraduationCap,
  Briefcase,
  DollarSign,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSection } from '@/components/blog/FAQSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title:
    'Study Abroad Guides by Country | Costs, Visas, Scholarships & Careers',
  description:
    'Compare study abroad destinations with practical guidance on tuition, visas, scholarships, post-study work options, and career outcomes.',
  keywords:
    'study abroad, country guides, international students, study in Germany, study in USA, study in UK, study in Canada, study in Australia, visa guide, scholarships abroad, post-study work',
  openGraph: {
    title: 'Study Abroad Guides by Country',
    description:
      'Compare destination costs, visas, scholarships, and work opportunities in one place.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/countries',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/countries',
  },
};

const countries = [
  {
    name: 'Germany',
    flag: '🇩🇪',
    slug: 'germany',
    students: '400K+ international students',
    postStudy: '18 months job seeker visa',
    avgCost: '€10K - €15K/year',
    highlight: 'Free tuition at public universities',
    color: 'from-black to-yellow-500',
    available: true,
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    slug: 'usa',
    students: '1M+ international students',
    postStudy: '3 years STEM OPT',
    avgCost: '$50K - $80K/year',
    highlight: 'Top tech companies & research',
    color: 'from-blue-600 to-red-500',
    available: true,
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    slug: 'uk',
    students: '680K+ international students',
    postStudy: '2 years Graduate Route',
    avgCost: '£25K - £50K/year',
    highlight: 'Oxford, Cambridge & 1-year Masters',
    color: 'from-blue-900 to-red-700',
    available: true,
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    slug: 'canada',
    students: '800K+ international students',
    postStudy: '3 years PGWP',
    avgCost: 'CAD 30K - 50K/year',
    highlight: 'PR pathway & affordable education',
    color: 'from-red-600 to-red-500',
    available: true,
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    slug: 'australia',
    students: '750K+ international students',
    postStudy: '2-4 years post-study visa',
    avgCost: 'AUD 35K - 55K/year',
    highlight: 'High quality of life & work rights',
    color: 'from-blue-600 to-yellow-500',
    available: true,
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    slug: 'netherlands',
    students: '115K+ international students',
    postStudy: '1 year orientation visa',
    avgCost: '€15K - €25K/year',
    highlight: 'English programs & 30% tax ruling',
    color: 'from-orange-500 to-blue-600',
    available: true,
  },
  {
    name: 'France',
    flag: '🇫🇷',
    slug: 'france',
    students: '370K+ international students',
    postStudy: '1-2 years APS visa',
    avgCost: '€10K - €18K/year',
    highlight: 'Affordable tuition & CAF housing subsidy',
    color: 'from-blue-600 to-red-500',
    available: true,
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    slug: 'ireland',
    students: '35K+ international students',
    postStudy: '2 years Graduate Scheme',
    avgCost: '€12K - €25K/year',
    highlight: 'Tech hub - Google, Meta, Apple HQ',
    color: 'from-green-600 to-orange-500',
    available: true,
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    slug: 'singapore',
    students: '75K+ international students',
    postStudy: '1 year LTVP+',
    avgCost: 'SGD 35K - 65K/year',
    highlight: 'Asia #1 - NUS #8 World Ranking',
    color: 'from-red-600 to-white',
    available: true,
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    slug: 'switzerland',
    students: '60K+ international students',
    postStudy: '6 months job seeker',
    avgCost: 'CHF 1.5K - 3K/year (Public)',
    highlight: 'ETH Zurich & High Salaries',
    color: 'from-red-600 to-white',
    available: true,
  },
  {
    name: 'Sweden',
    flag: '🇸🇪',
    slug: 'sweden',
    students: '40K+ international students',
    postStudy: '1 year job seeker',
    avgCost: 'SEK 80K - 140K/year',
    highlight: 'Innovation & Work-Life Balance',
    color: 'from-blue-500 to-yellow-400',
    available: true,
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    slug: 'new-zealand',
    students: '50K+ international students',
    postStudy: '3 years post-study work',
    avgCost: 'NZD 30K - 45K/year',
    highlight: 'Safe & Scenic Environment',
    color: 'from-blue-800 to-red-600',
    available: true,
  },
  {
    name: 'Denmark',
    flag: '🇩🇰',
    slug: 'denmark',
    students: '35K+ international students',
    postStudy: '3 years establishment card',
    avgCost: 'EUR 6K - 16K/year',
    highlight: 'Happiest Country & Design',
    color: 'from-red-600 to-white',
    available: true,
  },
  {
    name: 'South Korea',
    flag: '🇰🇷',
    slug: 'south-korea',
    students: '150K+ international students',
    postStudy: '2 years D-10 visa',
    avgCost: 'KRW 4M - 10M/semester',
    highlight: 'Tech Hub & KAIST/Samsung',
    color: 'from-blue-600 to-red-600',
    available: true,
  },
  {
    name: 'Hong Kong',
    flag: '🇭🇰',
    slug: 'hong-kong',
    students: '40K+ international students',
    postStudy: '1 year IANG visa',
    avgCost: 'HKD 140K - 180K/year',
    highlight: 'Global Finance Hub',
    color: 'from-red-600 to-white',
    available: true,
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    slug: 'japan',
    students: '280K+ international students',
    postStudy: '1 year job seeker visa',
    avgCost: '¥500K - 1M/year',
    highlight: 'Technology & Innovation Hub',
    color: 'from-white to-red-600',
    available: true,
  },
];

const features = [
  {
    icon: GraduationCap,
    title: 'Education System',
    description: 'Understand grading, degrees, and university rankings',
  },
  {
    icon: Briefcase,
    title: 'Work Rights',
    description: 'Learn about work permits and post-study opportunities',
  },
  {
    icon: DollarSign,
    title: 'Cost Breakdown',
    description: 'Get detailed tuition and living expense estimates',
  },
  {
    icon: Clock,
    title: 'Timeline',
    description: 'Plan your application with country-specific deadlines',
  },
];

const countryFaqs = [
  {
    question: 'How should I choose the right study-abroad country?',
    answer:
      'Start with your budget, preferred field, language comfort, and post-study work goals. A strong choice is not just the country with the biggest brand name. It is the one where tuition, living cost, visa rules, and career outcomes fit your situation.',
  },
  {
    question: 'What matters more than tuition fees alone?',
    answer:
      'Look at the full cost of attendance: tuition, living expenses, health insurance, visa fees, blocked funds, and travel. Also compare part-time work rules, internship access, and job-market strength after graduation.',
  },
  {
    question: 'Should I compare salaries before I compare cost of living?',
    answer:
      'No. Salary only tells part of the story. A country with lower headline pay can still offer better savings, work-life balance, or long-term stability once rent, taxes, and visa constraints are factored in.',
  },
  {
    question: 'When should I start planning for study abroad?',
    answer:
      'For most students, earlier is better. Start with country research, grade conversion, test planning, and scholarship shortlisting well before application windows open so you are not rushing documents or making decisions from incomplete information.',
  },
];

export default function CountriesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sproutern.dpdns.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Countries',
        item: 'https://sproutern.dpdns.org/countries',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">
                Global Opportunities
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work Abroad
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Comprehensive guides to help you navigate education and career
              opportunities in the world's top destinations. Find visa
              requirements, costs, scholarships, and job prospects for each
              country.
            </p>
          </div>
        </div>
      </section>

      <div className="container pb-16">
        {/* What Each Guide Includes */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">
            What Each Country Guide Includes
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="text-center"
              >
                <CardContent className="pt-6">
                  <feature.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Country Cards */}
        <section>
          <h2 className="mb-8 text-2xl font-bold">Choose Your Destination</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <Card
                key={country.slug}
                className="group overflow-hidden transition-all hover:shadow-xl"
              >
                <div className={`h-2 bg-gradient-to-r ${country.color}`} />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="text-4xl">{country.flag}</span>
                      <span>{country.name}</span>
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-blue-500" />
                      <span>{country.students}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span>{country.postStudy}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-orange-500" />
                      <span>{country.avgCost}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-primary">
                    ✨ {country.highlight}
                  </p>
                  <Button
                    asChild
                    className="w-full"
                  >
                    <Link href={`/countries/${country.slug}`}>
                      Explore Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Compare Countries CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Not Sure Which Country to Choose?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Use our GPA converter to check your eligibility for universities in
            different countries, and explore our scholarship database for
            funding opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/tools/gpa-converter">
                <Globe className="mr-2 h-4 w-4" />
                GPA Converter (45+ Systems)
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <Link href="/scholarships">
                <CheckCircle className="mr-2 h-4 w-4" />
                Browse Scholarships
              </Link>
            </Button>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto max-w-4xl">
            <FAQSection
              title="Study Abroad Planning FAQ"
              faqs={countryFaqs}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
