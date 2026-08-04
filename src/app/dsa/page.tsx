import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code2 } from 'lucide-react';
import { dsaTopics } from '@/lib/dsa-data';

export const metadata: Metadata = {
  title:
    'DSA Roadmap 2026 | Data Structures & Algorithms for Placements | Sproutern',
  description:
    'Complete DSA roadmap with 12 topics, must-do problems, patterns, and company tags. Master Arrays, Trees, Graphs, DP, and more for FAANG interviews.',
  keywords:
    'DSA roadmap, DSA for placements, data structures and algorithms, coding interview preparation, leetcode patterns, FAANG interview prep',
  alternates: { canonical: '/dsa' },
};

export default function DSAPage() {
  const sorted = [...dsaTopics].sort((a, b) => a.order - b.order);
  const totalProblems = dsaTopics.reduce(
    (a, t) => a + t.mustDoProblems.length,
    0,
  );

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'DSA Roadmap',
            url: 'https://sproutern.dpdns.org/dsa',
            numberOfItems: dsaTopics.length,
          }),
        }}
      />

      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Code2 className="mr-1 h-3 w-3" /> {totalProblems} Must-Do Problems
          </Badge>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            DSA Roadmap for Placements
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            12 topics in optimal learning order. Each topic has patterns,
            must-do problems with company tags, and key concepts.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-4xl space-y-4">
          {sorted.map((topic, idx) => (
            <Link
              key={topic.slug}
              href={`/dsa/${topic.slug}`}
              className="group block"
            >
              <Card className="transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{topic.icon}</span>
                      <h3 className="text-lg font-bold group-hover:text-primary">
                        {topic.name}
                      </h3>
                    </div>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="secondary">
                        {topic.mustDoProblems.length} problems
                      </Badge>
                      <Badge variant="outline">
                        {topic.patterns.length} patterns
                      </Badge>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
