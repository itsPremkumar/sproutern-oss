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
  GraduationCap,
  Calculator,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Info,
  School,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// University CGPA conversion database
const universityData: Record<
  string,
  {
    name: string;
    fullName: string;
    state: string;
    type: 'engineering' | 'university' | 'deemed';
    formula: string;
    multiplier: number;
    constant: number;
    maxCGPA: number;
    gradeSystem: string;
    examples: { cgpa: number; percentage: number }[];
    tips: string[];
    affiliatedColleges?: string[];
  }
> = {
  vtu: {
    name: 'VTU',
    fullName: 'Visvesvaraya Technological University',
    state: 'Karnataka',
    type: 'engineering',
    formula: 'Percentage = (CGPA - 0.75) × 10',
    multiplier: 10,
    constant: -7.5,
    maxCGPA: 10,
    gradeSystem: '10-point scale',
    examples: [
      { cgpa: 9.0, percentage: 82.5 },
      { cgpa: 8.0, percentage: 72.5 },
      { cgpa: 7.0, percentage: 62.5 },
    ],
    tips: [
      'VTU uses a unique formula different from standard 9.5 multiplier',
      'Always mention VTU-specific conversion on resume',
    ],
    affiliatedColleges: ['RV College', 'BMS College', 'PESIT', 'MSRIT'],
  },
  anna: {
    name: 'Anna University',
    fullName: 'Anna University Chennai',
    state: 'Tamil Nadu',
    type: 'university',
    formula: 'Percentage = CGPA × 10',
    multiplier: 10,
    constant: 0,
    maxCGPA: 10,
    gradeSystem: '10-point scale',
    examples: [
      { cgpa: 9.0, percentage: 90 },
      { cgpa: 8.0, percentage: 80 },
      { cgpa: 7.0, percentage: 70 },
    ],
    tips: [
      'Anna University uses direct 10x multiplier',
      'One of the most straightforward conversions',
    ],
    affiliatedColleges: ['CEG', 'MIT Chennai', 'ACT', 'SSN College'],
  },
  aktu: {
    name: 'AKTU',
    fullName: 'Dr. A.P.J. Abdul Kalam Technical University',
    state: 'Uttar Pradesh',
    type: 'engineering',
    formula: 'Percentage = CGPA × 10',
    multiplier: 10,
    constant: 0,
    maxCGPA: 10,
    gradeSystem: '10-point scale',
    examples: [
      { cgpa: 9.0, percentage: 90 },
      { cgpa: 8.0, percentage: 80 },
      { cgpa: 7.0, percentage: 70 },
    ],
    tips: ['Formerly known as UPTU', 'Direct 10x conversion'],
    affiliatedColleges: ['KIET', 'ABES', 'NIET', 'JSS Noida'],
  },
  mumbai: {
    name: 'Mumbai University',
    fullName: 'University of Mumbai',
    state: 'Maharashtra',
    type: 'university',
    formula: 'Percentage = 7.1 × CGPA + 11',
    multiplier: 7.1,
    constant: 11,
    maxCGPA: 10,
    gradeSystem: '10-point scale',
    examples: [
      { cgpa: 9.0, percentage: 74.9 },
      { cgpa: 8.0, percentage: 67.8 },
      { cgpa: 7.0, percentage: 60.7 },
    ],
    tips: [
      'Mumbai uses a unique formula',
      'Higher constant gives slight boost to lower CGPAs',
    ],
    affiliatedColleges: ['VJTI', 'SPIT', 'DJ Sanghvi', 'Thadomal Shahani'],
  },
  pune: {
    name: 'Pune University',
    fullName: 'Savitribai Phule Pune University',
    state: 'Maharashtra',
    type: 'university',
    formula: 'Percentage = 7.1 × CGPA + 11',
    multiplier: 7.1,
    constant: 11,
    maxCGPA: 10,
    gradeSystem: '10-point scale',
    examples: [
      { cgpa: 9.0, percentage: 74.9 },
      { cgpa: 8.0, percentage: 67.8 },
      { cgpa: 7.0, percentage: 60.7 },
    ],
    tips: ['Same formula as Mumbai University', 'SPPU credits system'],
    affiliatedColleges: ['COEP', 'PICT', 'VIT Pune', 'MIT Pune'],
  },
  du: {
    name: 'Delhi University',
    fullName: 'University of Delhi',
    state: 'Delhi',
    type: 'university',
    formula: 'Percentage = CGPA × 9.5',
    multiplier: 9.5,
    constant: 0,
    maxCGPA: 10,
    gradeSystem: '10-point scale',
    examples: [
      { cgpa: 9.0, percentage: 85.5 },
      { cgpa: 8.0, percentage: 76 },
      { cgpa: 7.0, percentage: 66.5 },
    ],
    tips: ['Standard 9.5 multiplier', 'Same as CBSE conversion'],
    affiliatedColleges: ['SRCC', 'Hindu College', 'St. Stephens', 'LSR'],
  },
  bits: {
    name: 'BITS Pilani',
    fullName: 'Birla Institute of Technology and Science',
    state: 'Rajasthan',
    type: 'deemed',
    formula: 'Percentage = CGPA × 10',
    multiplier: 10,
    constant: 0,
    maxCGPA: 10,
    gradeSystem: '10-point scale (A=10, B=8, etc.)',
    examples: [
      { cgpa: 9.0, percentage: 90 },
      { cgpa: 8.0, percentage: 80 },
      { cgpa: 7.0, percentage: 70 },
    ],
    tips: ['Direct 10x conversion', 'BITS GPA is highly valued by recruiters'],
    affiliatedColleges: ['Pilani', 'Goa', 'Hyderabad', 'Dubai'],
  },
  iit: {
    name: 'IIT',
    fullName: 'Indian Institutes of Technology',
    state: 'Pan India',
    type: 'engineering',
    formula: 'Percentage = CGPA × 10 (varies by IIT)',
    multiplier: 10,
    constant: 0,
    maxCGPA: 10,
    gradeSystem: '10-point scale',
    examples: [
      { cgpa: 9.0, percentage: 90 },
      { cgpa: 8.0, percentage: 80 },
      { cgpa: 7.0, percentage: 70 },
    ],
    tips: [
      'IIT CGPA is normalized differently',
      'Recruiters value IIT CGPA without conversion',
    ],
    affiliatedColleges: ['IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kanpur'],
  },
  nit: {
    name: 'NIT',
    fullName: 'National Institutes of Technology',
    state: 'Pan India',
    type: 'engineering',
    formula: 'Percentage = CGPA × 10',
    multiplier: 10,
    constant: 0,
    maxCGPA: 10,
    gradeSystem: '10-point scale',
    examples: [
      { cgpa: 9.0, percentage: 90 },
      { cgpa: 8.0, percentage: 80 },
      { cgpa: 7.0, percentage: 70 },
    ],
    tips: [
      'NITs use standard 10x conversion',
      'Some NITs have slight variations',
    ],
    affiliatedColleges: [
      'NIT Trichy',
      'NIT Warangal',
      'NIT Surathkal',
      'MNIT Jaipur',
    ],
  },
  jntu: {
    name: 'JNTU',
    fullName: 'Jawaharlal Nehru Technological University',
    state: 'Telangana / Andhra Pradesh',
    type: 'engineering',
    formula: 'Percentage = CGPA × 10',
    multiplier: 10,
    constant: 0,
    maxCGPA: 10,
    gradeSystem: '10-point scale',
    examples: [
      { cgpa: 9.0, percentage: 90 },
      { cgpa: 8.0, percentage: 80 },
      { cgpa: 7.0, percentage: 70 },
    ],
    tips: [
      'JNTU Hyderabad and JNTU Kakinada use same formula',
      'Large number of affiliated colleges',
    ],
    affiliatedColleges: ['CBIT', 'MGIT', 'VNR VJIET', 'GRIET'],
  },
};

export function generateStaticParams() {
  return Object.keys(universityData).map((uni) => ({ university: uni }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ university: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const university = universityData[resolvedParams.university];

  if (!university) return { title: 'CGPA Calculator' };

  const title = `${university.name} CGPA to Percentage Calculator 2026 | Sproutern`;
  const description = `Convert ${university.fullName} CGPA to percentage. Formula: ${university.formula}. Free calculator for ${university.name} students.`;

  return {
    title,
    description,
    keywords: `${university.name} cgpa to percentage, ${university.name} percentage calculator, ${university.fullName} cgpa converter, ${university.name} grading system 2026`,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://sproutern.dpdns.org/calculator/cgpa/${resolvedParams.university}`,
    },
    alternates: {
      canonical: `https://sproutern.dpdns.org/calculator/cgpa/${resolvedParams.university}`,
    },
  };
}

export default async function UniversityCGPAPage({
  params,
}: {
  params: Promise<{ university: string }>;
}) {
  const resolvedParams = await params;
  const university = universityData[resolvedParams.university];

  if (!university) notFound();

  // Generate sample calculations
  const sampleCalculations = [
    { cgpa: 10, percentage: 10 * university.multiplier + university.constant },
    {
      cgpa: 9.5,
      percentage: 9.5 * university.multiplier + university.constant,
    },
    { cgpa: 9, percentage: 9 * university.multiplier + university.constant },
    {
      cgpa: 8.5,
      percentage: 8.5 * university.multiplier + university.constant,
    },
    { cgpa: 8, percentage: 8 * university.multiplier + university.constant },
    {
      cgpa: 7.5,
      percentage: 7.5 * university.multiplier + university.constant,
    },
    { cgpa: 7, percentage: 7 * university.multiplier + university.constant },
    {
      cgpa: 6.5,
      percentage: 6.5 * university.multiplier + university.constant,
    },
    { cgpa: 6, percentage: 6 * university.multiplier + university.constant },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: `${university.name} CGPA to Percentage Calculator`,
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `How to convert ${university.name} CGPA to percentage?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Use the formula: ${university.formula}. For example, a CGPA of 8.0 equals ${(8 * university.multiplier + university.constant).toFixed(1)}%.`,
                },
              },
              {
                '@type': 'Question',
                name: `What is the maximum CGPA in ${university.name}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${university.name} follows a ${university.maxCGPA}-point scale, so the maximum CGPA is ${university.maxCGPA}.`,
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 py-16">
        <div className="container">
          <Link
            href="/tools/cgpa-converter"
            className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            ← All Calculators
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white text-2xl">
              <GraduationCap className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <Badge className="mb-2 bg-white/20 text-white">
                {university.state}
              </Badge>
              <h1 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                {university.name} CGPA to Percentage
              </h1>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            {university.fullName} - Free CGPA to percentage converter with
            accurate formula
          </p>
        </div>
      </section>

      {/* Formula Card */}
      <section className="container py-12">
        <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
              <Calculator className="h-6 w-6" />
              {university.name} Conversion Formula
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-700 dark:text-green-300">
              {university.formula}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Using {university.gradeSystem}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Conversion Table */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold">
            {university.name} CGPA to Percentage Table
          </h2>
          <Card className="mx-auto max-w-2xl">
            <CardContent className="pt-6">
              <table className="w-full text-center">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 font-semibold">CGPA</th>
                    <th className="pb-3 font-semibold">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleCalculations.map((calc) => (
                    <tr
                      key={calc.cgpa}
                      className="border-b last:border-0"
                    >
                      <td className="py-3 font-medium">
                        {calc.cgpa.toFixed(1)}
                      </td>
                      <td className="py-3 font-semibold text-primary">
                        {calc.percentage.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips */}
      <section className="container py-12">
        <h2 className="mb-6 text-2xl font-bold">{university.name} CGPA Tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {university.tips.map((tip, i) => (
            <Card
              key={i}
              className="p-4"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <p className="text-sm">{tip}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Affiliated Colleges */}
      {university.affiliatedColleges && (
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold">
              Popular {university.name} Colleges
            </h2>
            <div className="flex flex-wrap gap-3">
              {university.affiliatedColleges.map((college) => (
                <Badge
                  key={college}
                  variant="secondary"
                  className="px-4 py-2"
                >
                  <School className="mr-2 h-4 w-4" />
                  {college}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Universities */}
      <section className="container py-12">
        <h2 className="mb-6 text-2xl font-bold">
          Other University Calculators
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Object.entries(universityData)
            .filter(([key]) => key !== resolvedParams.university)
            .slice(0, 8)
            .map(([key, uni]) => (
              <Link
                key={key}
                href={`/calculator/cgpa/${key}`}
                className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-medium group-hover:text-primary">
                  {uni.name}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-12">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">Need More Tools?</h2>
          <p className="mb-6 text-muted-foreground">
            Explore our complete suite of 80+ free career tools
          </p>
          <Button
            asChild
            size="lg"
          >
            <Link href="/tools">
              Browse All Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
