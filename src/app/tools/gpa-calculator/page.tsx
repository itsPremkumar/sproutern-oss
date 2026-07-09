import { Metadata } from 'next';
import Link from 'next/link';
import { GPACalculatorTool } from '@/components/tools/GPACalculatorTool';
import {
  Calculator,
  CheckCircle,
  Clock,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'GPA Calculator | Calculate Your GPA Online',
  description:
    'Free online GPA calculator for students. Calculate your semester GPA, cumulative GPA, and see how future grades will affect your overall GPA.',
  keywords:
    'GPA calculator, grade point average calculator, college GPA calculator, semester GPA, cumulative GPA, calculate GPA, student GPA tool',
  openGraph: {
    title: 'GPA Calculator - Calculate Your Grade Point Average',
    description:
      'Free tool to calculate your semester and cumulative GPA. See how grades affect your GPA.',
    type: 'website',
    url: 'https://www.sproutern.com/tools/gpa-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Calculator - Free Online Tool',
    description:
      'Calculate your semester and cumulative GPA instantly with our free tool.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/tools/gpa-calculator',
  },
};

const gradingScales = [
  { grade: 'A+', points: '4.0', percentage: '97-100%' },
  { grade: 'A', points: '4.0', percentage: '93-96%' },
  { grade: 'A-', points: '3.7', percentage: '90-92%' },
  { grade: 'B+', points: '3.3', percentage: '87-89%' },
  { grade: 'B', points: '3.0', percentage: '83-86%' },
  { grade: 'B-', points: '2.7', percentage: '80-82%' },
  { grade: 'C+', points: '2.3', percentage: '77-79%' },
  { grade: 'C', points: '2.0', percentage: '73-76%' },
  { grade: 'C-', points: '1.7', percentage: '70-72%' },
  { grade: 'D+', points: '1.3', percentage: '67-69%' },
  { grade: 'D', points: '1.0', percentage: '63-66%' },
  { grade: 'D-', points: '0.7', percentage: '60-62%' },
  { grade: 'F', points: '0.0', percentage: 'Below 60%' },
];

const faqs = [
  {
    question: 'How is GPA calculated?',
    answer:
      'GPA = (Sum of Grade Points × Credit Hours) / Total Credit Hours. For example, if you got an A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course: GPA = (4.0×3 + 3.0×4) / (3+4) = (12 + 12) / 7 = 3.43',
  },
  {
    question: 'What is a good GPA?',
    answer:
      "GPA expectations vary: 3.5-4.0 is excellent (Dean's List, top programs), 3.0-3.5 is good (most graduate schools minimum), 2.5-3.0 is average, below 2.0 may lead to academic probation. Context matters - a 3.2 in engineering may carry more weight than 3.8 in an easier major.",
  },
  {
    question: 'What is the difference between semester and cumulative GPA?',
    answer:
      'Semester GPA is calculated for one semester only. Cumulative GPA includes all semesters combined. Employers and graduate schools typically look at cumulative GPA, but an upward trend in semester GPA shows improvement.',
  },
  {
    question: 'Do all courses count toward GPA?',
    answer:
      "It depends on your institution. Pass/Fail courses typically don't affect GPA. Repeated courses may replace the original grade or average. Transfer credits may not count. AP/IB credits policies vary by school.",
  },
  {
    question: 'How can I improve my GPA?',
    answer:
      'Focus on high-credit courses, retake low-grade courses if allowed, maintain consistency, use tutoring and office hours, manage time effectively, and consider strategic course selection. Early improvement has more impact since there are fewer total credits.',
  },
];

export default function GPACalculatorPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calculator className="h-4 w-4" />
            Academic Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            GPA Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Calculate your semester and cumulative GPA. Add your courses, enter
            grades and credits, and see your GPA instantly.
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
            <BookOpen className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">4.0 Scale</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <GraduationCap className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Student Friendly</span>
          </div>
        </div>

        {/* Calculator Tool */}
        <GPACalculatorTool />

        {/* Grading Scale Reference */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <BookOpen className="h-6 w-6 text-primary" />
            Standard 4.0 Grading Scale
          </h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left font-semibold">Letter Grade</th>
                  <th className="p-3 text-left font-semibold">Grade Points</th>
                  <th className="p-3 text-left font-semibold">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {gradingScales.map((row, index) => (
                  <tr
                    key={row.grade}
                    className={index % 2 === 0 ? '' : 'bg-muted/50'}
                  >
                    <td className="p-3 font-medium">{row.grade}</td>
                    <td className="p-3">{row.points}</td>
                    <td className="p-3">{row.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Note: Some institutions use variations like 4.3 or 4.5 scales. Check
            your school&apos;s specific grading policy.
          </p>
        </section>

        {/* How to Calculate */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Lightbulb className="h-6 w-6 text-primary" />
            How to Calculate GPA
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-2 font-bold text-blue-900 dark:text-blue-100">
                GPA Formula
              </h3>
              <p className="font-mono text-xl text-blue-700 dark:text-blue-300">
                GPA = Σ(Grade Points × Credit Hours) ÷ Σ(Credit Hours)
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Example Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="mb-4 w-full text-sm">
                  <thead className="border-b">
                    <tr>
                      <th className="p-2 text-left">Course</th>
                      <th className="p-2 text-left">Grade</th>
                      <th className="p-2 text-left">Points</th>
                      <th className="p-2 text-left">Credits</th>
                      <th className="p-2 text-left">Quality Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Math 101</td>
                      <td className="p-2">A</td>
                      <td className="p-2">4.0</td>
                      <td className="p-2">3</td>
                      <td className="p-2">12.0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">English 102</td>
                      <td className="p-2">B+</td>
                      <td className="p-2">3.3</td>
                      <td className="p-2">3</td>
                      <td className="p-2">9.9</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Physics 101</td>
                      <td className="p-2">B</td>
                      <td className="p-2">3.0</td>
                      <td className="p-2">4</td>
                      <td className="p-2">12.0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">CS 100</td>
                      <td className="p-2">A-</td>
                      <td className="p-2">3.7</td>
                      <td className="p-2">3</td>
                      <td className="p-2">11.1</td>
                    </tr>
                    <tr className="bg-muted font-semibold">
                      <td
                        className="p-2"
                        colSpan={3}
                      >
                        Total
                      </td>
                      <td className="p-2">13</td>
                      <td className="p-2">45.0</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-medium">
                  GPA = 45.0 ÷ 13 = <span className="text-primary">3.46</span>
                </p>
              </CardContent>
            </Card>
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

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Global GPA Converter',
                href: '/tools/gpa-converter',
                desc: 'Convert GPA between international systems',
              },
              {
                title: 'CGPA to Percentage',
                href: '/tools/cgpa-to-percentage',
                desc: 'Convert Indian CGPA to percentage',
              },
              {
                title: 'Marks Calculator',
                href: '/tools/marks-calculator',
                desc: 'Calculate weighted marks and averages',
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
          <h2 className="mb-4 text-2xl font-bold">Planning for College?</h2>
          <p className="mb-6 text-muted-foreground">
            Explore our guides on maintaining strong academic standing
          </p>
          <Link
            href="/college"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore College Resources
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
