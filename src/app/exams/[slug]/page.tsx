import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Target,
  Users,
  ExternalLink,
  Lightbulb,
  GraduationCap,
  CheckCircle,
  Wrench,
  Gamepad2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getExamBySlug, getExamSlugs, categoryLabels } from '@/lib/exam-data';

export function generateStaticParams() {
  return getExamSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exam = getExamBySlug(slug);

  if (!exam) return { title: 'Exam Not Found' };

  const title = `${exam.name} ${new Date().getFullYear()} Preparation Guide | Syllabus, Cutoffs & Tips | Sproutern`;
  const description = `Complete ${exam.fullName} (${exam.name}) preparation guide: syllabus, cutoffs, ${exam.preparationTimeline.length}-step timeline, expert tips, and free practice tools. ${exam.annualCandidates} candidates take this exam annually.`;

  return {
    title,
    description,
    keywords: `${exam.name} preparation, ${exam.name} syllabus, ${exam.name} cutoff ${new Date().getFullYear()}, ${exam.fullName}, ${exam.name} tips, ${exam.name} preparation guide`,
    openGraph: {
      title: `${exam.name} Preparation Guide ${new Date().getFullYear()}`,
      description,
      type: 'article',
      url: `https://sproutern.dpdns.org/exams/${slug}`,
    },
    alternates: { canonical: `https://sproutern.dpdns.org/exams/${slug}` },
  };
}

export default async function ExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = getExamBySlug(slug);

  if (!exam) notFound();

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background text-foreground">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: `${exam.name} ${currentYear} Preparation Guide`,
                description: exam.description,
                author: { '@type': 'Organization', name: 'Sproutern' },
                publisher: { '@type': 'Organization', name: 'Sproutern' },
                datePublished: `${currentYear}-01-01`,
                dateModified: new Date().toISOString().split('T')[0],
              },
              {
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
                    name: 'Exams',
                    item: 'https://sproutern.dpdns.org/exams',
                  },
                  { '@type': 'ListItem', position: 3, name: exam.name },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: `What is the ${exam.name} exam?`,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: exam.description,
                    },
                  },
                  {
                    '@type': 'Question',
                    name: `Who is eligible for ${exam.name}?`,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: exam.eligibility,
                    },
                  },
                  {
                    '@type': 'Question',
                    name: `How difficult is ${exam.name}?`,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: `${exam.name} is rated as ${exam.difficulty}. Approximately ${exam.annualCandidates} candidates take this exam every year.`,
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="container">
          <Link
            href="/exams"
            className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            ← All Exams
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge className="bg-white/20 text-white">
              {categoryLabels[exam.category]}
            </Badge>
            <Badge
              variant={
                exam.difficulty === 'Very Hard' ? 'destructive' : 'default'
              }
              className="text-white"
            >
              {exam.difficulty}
            </Badge>
          </div>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            {exam.name} {currentYear} Preparation Guide
          </h1>
          <p className="mt-2 text-lg text-white/80">{exam.fullName}</p>
          <p className="mt-4 max-w-3xl text-white/90">{exam.description}</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-center">
            <Clock className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-lg font-bold">{exam.duration}</p>
            <p className="text-xs text-muted-foreground">Duration</p>
          </div>
          <div className="text-center">
            <Target className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-lg font-bold">{exam.totalMarks}</p>
            <p className="text-xs text-muted-foreground">Total Marks</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-lg font-bold">{exam.annualCandidates}</p>
            <p className="text-xs text-muted-foreground">Candidates/Year</p>
          </div>
          <div className="text-center">
            <Calendar className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-lg font-bold">{exam.frequency}</p>
            <p className="text-xs text-muted-foreground">Frequency</p>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="container py-12">
        <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
          <BookOpen className="h-6 w-6 text-primary" />
          {exam.name} Syllabus & Exam Pattern
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exam.sections.map((section) => (
            <Card key={section.name}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  {section.name}
                  <Badge variant="outline">{section.marks} marks</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5">
                  {section.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-500" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Preparation Timeline */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
            <Calendar className="h-6 w-6 text-primary" />
            Preparation Timeline
          </h2>
          <div className="relative space-y-6">
            {exam.preparationTimeline.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {idx + 1}
                  </div>
                  {idx < exam.preparationTimeline.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-primary/20" />
                  )}
                </div>
                <Card className="flex-1">
                  <CardContent className="p-4">
                    <p className="font-bold text-primary">{step.month}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.focus}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cutoffs */}
      <section className="container py-12">
        <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
          <Target className="h-6 w-6 text-primary" />
          {exam.name} Cutoff Trends
        </h2>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-4 text-left font-semibold">Year</th>
                    <th className="p-4 text-left font-semibold">General</th>
                    <th className="p-4 text-left font-semibold">OBC</th>
                    <th className="p-4 text-left font-semibold">SC/ST</th>
                  </tr>
                </thead>
                <tbody>
                  {exam.cutoffs.map((cutoff) => (
                    <tr
                      key={cutoff.year}
                      className="border-b last:border-0"
                    >
                      <td className="p-4 font-medium">{cutoff.year}</td>
                      <td className="p-4 font-medium text-primary">
                        {cutoff.general}
                      </td>
                      <td className="p-4">{cutoff.obc}</td>
                      <td className="p-4">{cutoff.sc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Top Colleges */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
            <GraduationCap className="h-6 w-6 text-primary" />
            Top Colleges Accepting {exam.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {exam.topColleges.map((college) => (
              <Badge
                key={college}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {college}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="container py-12">
        <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
          <Lightbulb className="h-6 w-6 text-primary" />
          Expert Tips for {exam.name}
        </h2>
        <div className="space-y-4">
          {exam.tips.map((tip, idx) => (
            <Card key={idx}>
              <CardContent className="flex items-start gap-4 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {idx + 1}
                </div>
                <p className="text-sm">{tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Practice Tools */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-6 text-2xl font-bold">Free Practice Tools</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Wrench className="h-5 w-5 text-primary" />
                Study Tools
              </h3>
              <div className="space-y-2">
                {exam.relatedTools.map((tool) => (
                  <Link
                    key={tool}
                    href={`/tools/${tool}`}
                    className="group flex items-center justify-between rounded-lg border bg-card p-3 transition-all hover:border-primary hover:shadow-sm"
                  >
                    <span className="text-sm font-medium capitalize group-hover:text-primary">
                      {tool.replace(/-/g, ' ')}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Gamepad2 className="h-5 w-5 text-primary" />
                Practice Games
              </h3>
              <div className="space-y-2">
                {exam.relatedGames.map((game) => (
                  <Link
                    key={game}
                    href={`/games/${game}`}
                    className="group flex items-center justify-between rounded-lg border bg-card p-3 transition-all hover:border-primary hover:shadow-sm"
                  >
                    <span className="text-sm font-medium capitalize group-hover:text-primary">
                      {game.replace(/-/g, ' ')}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Website */}
      <section className="container py-12 text-center">
        <Button
          asChild
          size="lg"
          variant="outline"
        >
          <a
            href={exam.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Official {exam.name} Website{' '}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
  );
}
