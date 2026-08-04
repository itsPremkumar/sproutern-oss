import { Metadata } from 'next';
import { GlobalGPAConverterTool } from '@/components/tools/GlobalGPAConverterTool';
import Link from 'next/link';
import {
  Globe,
  CheckCircle,
  Clock,
  Building,
  Users,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Lightbulb,
  MapPin,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Global GPA Converter | Convert GPA',
  description:
    'Convert your GPA, CGPA, or grades between 45+ international grading systems from 30+ countries. Supports India, USA, UK, Germany, France, Australia, Canada, China, Japan, Korea, Singapore, and many more.',
  keywords:
    'GPA converter, CGPA to GPA, Indian CGPA to US GPA, German grade calculator, ECTS grade converter, WES GPA conversion, study abroad GPA, international grade converter, Korean GPA, Chinese GPA, Japanese grades',
  openGraph: {
    title: 'Global GPA Converter - 45+ International Grading Systems',
    description:
      'Convert grades between 45+ systems from India, USA, UK, Germany, France, Australia, Canada, China, Japan, Korea, and more.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/gpa-converter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global GPA Converter - Convert Between 45+ Grading Systems',
    description:
      'Free tool to convert GPA/CGPA between 45+ international grading systems for study abroad.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/gpa-converter',
  },
};

const gradingSystemsInfo = [
  {
    country: '🇮🇳 India',
    system: '10-Point CGPA / Percentage',
    example: '8.5 CGPA = 80.75%',
  },
  {
    country: '🇺🇸 USA',
    system: '4.0 GPA Scale',
    example: '3.7 GPA = High Distinction',
  },
  {
    country: '🇬🇧 UK',
    system: 'Honours Classification',
    example: '70%+ = First Class',
  },
  {
    country: '🇩🇪 Germany',
    system: '1.0-5.0 Scale',
    example: '1.0 = Best, 4.0 = Pass',
  },
  {
    country: '🇫🇷 France',
    system: '20-Point Scale',
    example: '16/20 = Très Bien',
  },
  {
    country: '🇦🇺 Australia',
    system: '7-Point Scale / WAM',
    example: '7 = High Distinction',
  },
  {
    country: '🇨🇦 Canada',
    system: '4.0 GPA / Percentage',
    example: 'Similar to USA',
  },
  {
    country: '🇨🇳 China',
    system: '100-Point / 4.0 GPA',
    example: '90+ = Excellent',
  },
  {
    country: '🇯🇵 Japan',
    system: '100-Point / 4.0 GPA',
    example: '80+ = Very Good',
  },
  {
    country: '🇰🇷 South Korea',
    system: '4.5 / 4.3 GPA',
    example: '4.5 = Perfect Score',
  },
  {
    country: '🇸🇬 Singapore',
    system: '5.0 CAP',
    example: 'CAP 4.5 = First Class',
  },
  {
    country: '🇳🇱 Netherlands',
    system: '10-Point Scale',
    example: '8+ = Very Good',
  },
  {
    country: '🇮🇹 Italy',
    system: '30-Point / 110-Point',
    example: '110 e Lode = With Honours',
  },
  {
    country: '🇪🇸 Spain',
    system: '10-Point Scale',
    example: '9+ = Sobresaliente',
  },
  { country: '🇧🇷 Brazil', system: '10-Point Scale', example: '7+ = Good' },
  {
    country: '🇦🇪 UAE',
    system: '4.0 GPA / Percentage',
    example: 'Similar to USA',
  },
  {
    country: '🇿🇦 South Africa',
    system: 'Percentage',
    example: '75%+ = Distinction',
  },
  { country: '🇪🇺 EU', system: 'ECTS (A-F)', example: 'A = Top 10%' },
];

const faqs = [
  {
    question: 'How do I convert Indian CGPA to US GPA?',
    answer:
      "To convert Indian 10-point CGPA to US 4.0 GPA, a common approximation is: US GPA = (Indian CGPA / 10) × 4. However, WES and universities often use more nuanced tables. For example, 9.0+ CGPA ≈ 4.0 GPA, 8.0-8.9 ≈ 3.7 GPA. Always check your target university's specific requirements.",
  },
  {
    question: 'What is the Bavarian Formula for German grades?',
    answer:
      'The Bavarian Formula is: German Grade = 1 + 3 × ((Max - Your Score) / (Max - Min)). For a 10-point scale with 5 as passing: German Grade = 1 + 3 × ((10 - CGPA) / (10 - 5)). A CGPA of 9.0 would give approximately 1.6 German grade.',
  },
  {
    question: 'What GPA do I need for US graduate schools?',
    answer:
      'Most US graduate schools require a minimum 3.0 GPA (on 4.0 scale) which is approximately equivalent to 75% or 7.5 CGPA on Indian 10-point scale. Top programs (MIT, Stanford, etc.) typically expect 3.5+ GPA.',
  },
  {
    question: 'How does UK Honours classification work?',
    answer:
      'UK universities use a classification system: First Class Honours (70%+), Upper Second Class (2:1, 60-69%), Lower Second Class (2:2, 50-59%), Third Class (40-49%). Most graduate programs require at least 2:1.',
  },
  {
    question: 'Is WES evaluation mandatory for US/Canada applications?',
    answer:
      'WES (World Education Services) is required by many US and Canadian universities and immigration programs. It provides a standardized evaluation of international credentials. Some universities accept self-reported grades initially.',
  },
  {
    question: 'How accurate are online GPA converters?',
    answer:
      "Online converters provide approximations. Each university may have its own conversion criteria. For official applications, use WES or your university's recommended credential evaluation service.",
  },
];

export default function GPAConverterPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Globe className="h-4 w-4" />
            Study Abroad Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Global GPA Converter
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Convert your grades between 45+ international grading systems from
            30+ countries. Essential for study abroad applications, credential
            evaluation, immigration, and university admissions.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Instant Results</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <MapPin className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">30+ Countries</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Users className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">10,000+ Users</span>
          </div>
        </div>

        {/* Tool Component */}
        <GlobalGPAConverterTool />

        {/* Supported Grading Systems */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Globe className="h-6 w-6 text-primary" />
            Supported Grading Systems
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gradingSystemsInfo.map((system, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-4 transition-all hover:border-primary"
              >
                <p className="mb-1 text-lg font-semibold">{system.country}</p>
                <p className="text-sm text-muted-foreground">{system.system}</p>
                <p className="mt-2 text-xs text-primary">{system.example}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Use This Tool */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <GraduationCap className="h-6 w-6 text-primary" />
            Why Convert Your GPA?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Building className="h-5 w-5 text-primary" />
                  Study Abroad Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  US, UK, Germany, Australia, and Canada have different grading
                  scales. Universities need to understand your performance in
                  their context.
                </p>
                <ul className="mt-3 space-y-1">
                  <li>• US Graduate Schools require 4.0 GPA equivalent</li>
                  <li>• UK universities use Honours classification</li>
                  <li>• German universities use the Bavarian Formula</li>
                  <li>• Australian universities use 7-point scale</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Credential Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Organizations like WES (World Education Services) evaluate
                  international credentials for admissions and immigration
                  purposes.
                </p>
                <ul className="mt-3 space-y-1">
                  <li>• WES is required for many Canadian PR applications</li>
                  <li>• Some US universities require official evaluation</li>
                  <li>• Immigration programs often need GPA conversion</li>
                  <li>• Scholarship applications need standardized scores</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conversion Formulas */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Lightbulb className="h-6 w-6 text-primary" />
            Key Conversion Formulas
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-2 font-bold text-blue-900 dark:text-blue-100">
                Indian CGPA to Percentage (CBSE Standard)
              </h3>
              <p className="font-mono text-2xl text-blue-700 dark:text-blue-300">
                Percentage = CGPA × 9.5
              </p>
              <p className="mt-2 text-sm text-blue-700/70 dark:text-blue-300/70">
                Example: 8.5 CGPA = 80.75%
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-950">
              <h3 className="mb-2 font-bold text-green-900 dark:text-green-100">
                Indian CGPA to US GPA (Approximate)
              </h3>
              <p className="font-mono text-2xl text-green-700 dark:text-green-300">
                US GPA ≈ (Indian CGPA ÷ 10) × 4
              </p>
              <p className="mt-2 text-sm text-green-700/70 dark:text-green-300/70">
                Example: 8.5 CGPA ≈ 3.4 US GPA
              </p>
            </div>
            <div className="rounded-lg bg-orange-50 p-6 dark:bg-orange-950">
              <h3 className="mb-2 font-bold text-orange-900 dark:text-orange-100">
                German Grade (Bavarian Formula)
              </h3>
              <p className="font-mono text-xl text-orange-700 dark:text-orange-300">
                German = 1 + 3 × (MaxGrade - YourGrade) ÷ (MaxGrade - MinPass)
              </p>
              <p className="mt-2 text-sm text-orange-700/70 dark:text-orange-300/70">
                Example: 8.5 CGPA (10-point, 5 pass) = 1.9 German Grade
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Letter Grade Equivalencies */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            📊 Letter Grade Equivalencies Across Countries
          </h2>
          <p className="mb-6 text-muted-foreground">
            Understanding how letter grades translate across different countries
            is essential for international applications.
          </p>

          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left font-semibold">US Letter</th>
                  <th className="p-3 text-left font-semibold">US GPA</th>
                  <th className="p-3 text-left font-semibold">UK Class</th>
                  <th className="p-3 text-left font-semibold">German</th>
                  <th className="p-3 text-left font-semibold">Indian %</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">A+/A</td>
                  <td className="p-3">4.0</td>
                  <td className="p-3">First (70%+)</td>
                  <td className="p-3">1.0-1.7</td>
                  <td className="p-3">85%+</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="p-3 font-medium">A-</td>
                  <td className="p-3">3.7</td>
                  <td className="p-3">First (70%+)</td>
                  <td className="p-3">1.7-2.0</td>
                  <td className="p-3">80-85%</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">B+</td>
                  <td className="p-3">3.3</td>
                  <td className="p-3">2:1 (60-69%)</td>
                  <td className="p-3">2.0-2.3</td>
                  <td className="p-3">75-80%</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="p-3 font-medium">B</td>
                  <td className="p-3">3.0</td>
                  <td className="p-3">2:1 (60-69%)</td>
                  <td className="p-3">2.3-2.7</td>
                  <td className="p-3">70-75%</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">B-</td>
                  <td className="p-3">2.7</td>
                  <td className="p-3">2:2 (50-59%)</td>
                  <td className="p-3">2.7-3.0</td>
                  <td className="p-3">65-70%</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="p-3 font-medium">C+/C</td>
                  <td className="p-3">2.0-2.3</td>
                  <td className="p-3">2:2/Third</td>
                  <td className="p-3">3.0-3.7</td>
                  <td className="p-3">55-65%</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">D</td>
                  <td className="p-3">1.0</td>
                  <td className="p-3">Pass</td>
                  <td className="p-3">4.0</td>
                  <td className="p-3">50-55%</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="p-3 font-medium">F</td>
                  <td className="p-3">0.0</td>
                  <td className="p-3">Fail</td>
                  <td className="p-3">5.0</td>
                  <td className="p-3">&lt;50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Top University GPA Requirements */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            🎓 GPA Requirements for Top Universities
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-5">
              <h3 className="mb-4 flex items-center gap-2 font-bold">
                🇺🇸 Top US Universities
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>MIT, Stanford, Harvard</span>
                  <span className="font-semibold text-primary">3.7+ GPA</span>
                </li>
                <li className="flex justify-between">
                  <span>CMU, Berkeley, UCLA</span>
                  <span className="font-semibold text-primary">3.5+ GPA</span>
                </li>
                <li className="flex justify-between">
                  <span>Georgia Tech, UIUC</span>
                  <span className="font-semibold text-primary">3.3+ GPA</span>
                </li>
                <li className="flex justify-between">
                  <span>ASU, NEU, USC</span>
                  <span className="font-semibold text-primary">3.0+ GPA</span>
                </li>
              </ul>
            </Card>

            <Card className="p-5">
              <h3 className="mb-4 flex items-center gap-2 font-bold">
                🇬🇧 Top UK Universities
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Oxford, Cambridge</span>
                  <span className="font-semibold text-primary">
                    First Class
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Imperial, LSE, UCL</span>
                  <span className="font-semibold text-primary">First/2:1</span>
                </li>
                <li className="flex justify-between">
                  <span>Edinburgh, Manchester</span>
                  <span className="font-semibold text-primary">2:1</span>
                </li>
              </ul>
            </Card>

            <Card className="p-5">
              <h3 className="mb-4 flex items-center gap-2 font-bold">
                🇩🇪 Top German Universities
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>TU Munich, TU Berlin</span>
                  <span className="font-semibold text-primary">1.0-2.0</span>
                </li>
                <li className="flex justify-between">
                  <span>RWTH Aachen, LMU</span>
                  <span className="font-semibold text-primary">2.0-2.5</span>
                </li>
                <li className="flex justify-between">
                  <span>Stuttgart, Darmstadt</span>
                  <span className="font-semibold text-primary">2.5-3.0</span>
                </li>
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">
                Use Bavarian Formula
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="mb-4 flex items-center gap-2 font-bold">
                🇨🇦 Top Canadian Universities
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>U of Toronto, McGill</span>
                  <span className="font-semibold text-primary">3.5+ GPA</span>
                </li>
                <li className="flex justify-between">
                  <span>UBC, Waterloo</span>
                  <span className="font-semibold text-primary">3.3+ GPA</span>
                </li>
                <li className="flex justify-between">
                  <span>Alberta, Calgary</span>
                  <span className="font-semibold text-primary">3.0+ GPA</span>
                </li>
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">
                WES evaluation recommended
              </p>
            </Card>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'CGPA to Percentage',
                href: '/tools/cgpa-converter',
                desc: 'Indian university-specific conversions',
              },
              {
                title: 'Resume Score Checker',
                href: '/tools/resume-score-checker',
                desc: 'Check ATS compatibility',
              },
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate in-hand salary',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Planning to Study Abroad?</h2>
          <p className="mb-6 text-muted-foreground">
            Explore scholarships, visa guides, and career opportunities
            worldwide
          </p>
          <Link
            href="/global-career-guide"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore Global Career Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
