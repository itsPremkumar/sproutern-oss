import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ChevronDown, BookOpen, Lightbulb } from 'lucide-react';
import {
  getIQTopicBySlug,
  getIQSlugs,
  iqCategoryLabels,
} from '@/lib/interview-questions-data';

export function generateStaticParams() {
  return getIQSlugs().map((slug) => ({ topic: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getIQTopicBySlug(slug);
  if (!topic) return { title: 'Interview Questions' };

  const title = `Top ${topic.questions.length}+ ${topic.name} with Answers (${new Date().getFullYear()}) | Sproutern`;
  const description = `${topic.description} Practice ${topic.questions.length}+ frequently asked ${topic.name.toLowerCase()} with detailed answers, examples, and difficulty ratings.`;

  return {
    title,
    description,
    keywords: `${topic.name}, ${topic.name.toLowerCase()} with answers, ${topic.name.toLowerCase()} for freshers, ${topic.name.toLowerCase()} for experienced, interview preparation`,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://sproutern.dpdns.org/interview-questions/${slug}`,
    },
    alternates: {
      canonical: `https://sproutern.dpdns.org/interview-questions/${slug}`,
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: slug } = await params;
  const topic = getIQTopicBySlug(slug);
  if (!topic) notFound();

  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'FAQPage',
                mainEntity: topic.questions.map((q) => ({
                  '@type': 'Question',
                  name: q.q,
                  acceptedAnswer: { '@type': 'Answer', text: q.a },
                })),
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
                    name: 'Interview Questions',
                    item: 'https://sproutern.dpdns.org/interview-questions',
                  },
                  { '@type': 'ListItem', position: 3, name: topic.name },
                ],
              },
            ],
          }),
        }}
      />

      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container">
          <Link
            href="/interview-questions"
            className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            ← All Topics
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">{topic.icon}</span>
            <Badge className="bg-white/20 text-white">
              {iqCategoryLabels[topic.category]}
            </Badge>
          </div>
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            {topic.name} with Answers
          </h1>
          <p className="mt-4 max-w-3xl text-white/90">{topic.description}</p>
          <div className="mt-6 flex items-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" /> {topic.questions.length}{' '}
              Questions
            </span>
            <span className="flex items-center gap-1">
              <Lightbulb className="h-4 w-4" /> Detailed Answers
            </span>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          {topic.questions.map((q, idx) => (
            <Card
              key={idx}
              id={`q${idx + 1}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {idx + 1}
                    </span>
                    {q.q}
                  </CardTitle>
                  <Badge className={difficultyColor[q.difficulty]}>
                    {q.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    View Answer
                  </summary>
                  <div className="mt-4 whitespace-pre-line rounded-lg bg-muted/50 p-4 text-sm leading-relaxed">
                    {q.a}
                  </div>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-12">
        <div className="container text-center">
          <h2 className="mb-6 text-2xl font-bold">Continue Preparing</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/interview-questions"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              All Topics <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tools/aptitude-test"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Take Aptitude Test <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/games"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Practice Games <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
