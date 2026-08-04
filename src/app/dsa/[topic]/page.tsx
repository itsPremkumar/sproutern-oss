import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Clock,
  Cpu,
  BookOpen,
  Lightbulb,
  Building2,
} from 'lucide-react';
import { getDSATopicBySlug, getDSASlugs } from '@/lib/dsa-data';

export function generateStaticParams() {
  return getDSASlugs().map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getDSATopicBySlug(slug);
  if (!topic) return { title: 'DSA Topic' };

  const title = `${topic.name} — DSA Guide | ${topic.mustDoProblems.length} Must-Do Problems | Sproutern`;
  const description = `Master ${topic.name}: ${topic.patterns.join(', ')}. ${topic.mustDoProblems.length} must-do problems with company tags. ${topic.timeComplexity}.`;

  return {
    title,
    description,
    keywords: `${topic.name} DSA, ${topic.name} interview questions, ${topic.name} problems, ${topic.name} patterns, ${topic.name} for placements`,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://sproutern.dpdns.org/dsa/${slug}`,
    },
    alternates: { canonical: `https://sproutern.dpdns.org/dsa/${slug}` },
  };
}

export default async function DSATopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: slug } = await params;
  const topic = getDSATopicBySlug(slug);
  if (!topic) notFound();

  const diffColor = {
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
                '@type': 'Article',
                headline: `${topic.name} — Complete DSA Guide`,
                author: { '@type': 'Organization', name: 'Sproutern' },
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
                    name: 'DSA Roadmap',
                    item: 'https://sproutern.dpdns.org/dsa',
                  },
                  { '@type': 'ListItem', position: 3, name: topic.name },
                ],
              },
            ],
          }),
        }}
      />

      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="container">
          <Link
            href="/dsa"
            className="mb-4 inline-flex items-center text-sm text-white/80 hover:text-white"
          >
            ← DSA Roadmap
          </Link>
          <div className="mb-3 flex items-center gap-3">
            <span className="text-4xl">{topic.icon}</span>
            <Badge className="bg-white/20 text-white">
              Topic #{topic.order}
            </Badge>
          </div>
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            {topic.name}
          </h1>
          <p className="mt-4 max-w-3xl text-white/90">{topic.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-xs text-white/70">
                <Clock className="mr-1 inline h-3 w-3" />
                Time
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                {topic.timeComplexity}
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-xs text-white/70">
                <Cpu className="mr-1 inline h-3 w-3" />
                Space
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                {topic.spaceComplexity}
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-xs text-white/70">
                <BookOpen className="mr-1 inline h-3 w-3" />
                Problems
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                {topic.mustDoProblems.length} must-do
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Patterns */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Lightbulb className="h-6 w-6 text-yellow-500" /> Key Patterns
            </h2>
            <div className="flex flex-wrap gap-3">
              {topic.patterns.map((p) => (
                <Badge
                  key={p}
                  variant="outline"
                  className="px-4 py-2"
                >
                  {p}
                </Badge>
              ))}
            </div>
          </div>

          {/* Must-Do Problems */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">📋 Must-Do Problems</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-3 text-left font-semibold">#</th>
                    <th className="p-3 text-left font-semibold">Problem</th>
                    <th className="p-3 text-center font-semibold">
                      Difficulty
                    </th>
                    <th className="p-3 text-left font-semibold">Asked At</th>
                  </tr>
                </thead>
                <tbody>
                  {topic.mustDoProblems.map((p, i) => (
                    <tr
                      key={i}
                      className="border-b"
                    >
                      <td className="p-3 font-medium text-muted-foreground">
                        {i + 1}
                      </td>
                      <td className="p-3 font-medium">{p.name}</td>
                      <td className="p-3 text-center">
                        <Badge className={diffColor[p.difficulty]}>
                          {p.difficulty}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {p.companies.map((c) => (
                            <Badge
                              key={c}
                              variant="secondary"
                              className="text-xs"
                            >
                              {c}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Concepts */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">💡 Key Concepts</h2>
            <div className="space-y-3">
              {topic.keyConceptPoints.map((p, i) => (
                <Card key={i}>
                  <CardContent className="flex items-start gap-3 p-4">
                    <span className="mt-0.5 font-bold text-primary">
                      {i + 1}.
                    </span>
                    <p className="text-sm">{p}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-12">
        <div className="container text-center">
          <h2 className="mb-6 text-2xl font-bold">Continue Practicing</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dsa"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              DSA Roadmap <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/interview-questions/dsa-interview"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              DSA Interview Q&A <ArrowRight className="h-4 w-4" />
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
