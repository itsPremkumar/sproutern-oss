import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  GraduationCap,
  Globe,
  Building2,
  Briefcase,
  BookOpen,
} from 'lucide-react';
import { exams, getExamsByCategory, categoryLabels } from '@/lib/exam-data';

export const metadata: Metadata = {
  title:
    'Exam Preparation Guide 2026 | GATE, CAT, GRE, IELTS, JEE & More | Sproutern',
  description:
    'Complete preparation guides for 14+ competitive exams: GATE, CAT, GRE, IELTS, TOEFL, GMAT, JEE Main, NEET, UPSC, AMCAT. Syllabus, cutoffs, tips, and free tools.',
  keywords:
    'GATE preparation, CAT preparation, GRE study guide, IELTS tips, TOEFL preparation, AMCAT preparation, JEE Main syllabus, NEET preparation, competitive exam preparation 2026',
  openGraph: {
    title: 'Exam Preparation Hub — 14+ Competitive Exams',
    description:
      'Syllabus, cutoffs, preparation timelines, and free practice tools for every major exam.',
    type: 'website',
    url: 'https://www.sproutern.com/exams',
  },
  alternates: { canonical: 'https://www.sproutern.com/exams' },
};

const categoryIcons: Record<string, React.ReactNode> = {
  engineering: <GraduationCap className="h-5 w-5" />,
  management: <Building2 className="h-5 w-5" />,
  abroad: <Globe className="h-5 w-5" />,
  government: <BookOpen className="h-5 w-5" />,
  aptitude: <Briefcase className="h-5 w-5" />,
};

export default function ExamsPage() {
  const examsByCategory = getExamsByCategory();

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Exam Preparation Hub 2026',
            description:
              'Complete preparation guides for 14+ competitive exams worldwide',
            url: 'https://www.sproutern.com/exams',
            numberOfItems: exams.length,
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            {exams.length}+ Exams
          </Badge>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Exam Preparation Hub 2026
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Complete syllabus, cutoffs, preparation timelines, expert tips, and
            free practice tools for every major competitive exam.
          </p>
        </div>
      </section>

      {/* Exam Categories */}
      {Object.entries(examsByCategory).map(([category, categoryExams], idx) => (
        <section
          key={category}
          className={idx % 2 === 0 ? 'py-12' : 'bg-muted/30 py-12'}
        >
          <div className="container">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {categoryIcons[category]}
              </span>
              {categoryLabels[category] || category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryExams.map((exam) => (
                <Link
                  key={exam.slug}
                  href={`/exams/${exam.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg group-hover:text-primary">
                          {exam.name}
                        </CardTitle>
                        <Badge
                          variant={
                            exam.difficulty === 'Very Hard'
                              ? 'destructive'
                              : exam.difficulty === 'Hard'
                                ? 'default'
                                : 'secondary'
                          }
                        >
                          {exam.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exam.fullName}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                        {exam.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{exam.annualCandidates} candidates/year</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="border-t py-12">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">Start Preparing Today</h2>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
            Use our free tools and games to build the skills you need for any
            competitive exam.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/aptitude-test"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Take Aptitude Test <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/games"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Practice Games <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
