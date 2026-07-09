import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, MapPin, CheckCircle } from 'lucide-react';
import {
  getScholarshipsByCategory,
  getScholarshipCategories,
  scholarshipCategoryLabels,
} from '@/lib/scholarship-data';

export function generateStaticParams() {
  return getScholarshipCategories().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const label = scholarshipCategoryLabels[category];
  if (!label) return { title: 'Scholarships' };

  const title = `${label.replace(/^[^\s]+\s/, '')} ${new Date().getFullYear()} | Eligibility, Deadlines & Apply | Sproutern`;
  const description = `Complete guide to ${label.replace(/^[^\s]+\s/, '').toLowerCase()}: eligibility, deadlines, coverage, amounts, and application links. Updated for ${new Date().getFullYear()}.`;

  return {
    title,
    description,
    keywords: `scholarships, ${category} scholarships, scholarships for students, fully funded scholarships, ${category}`,
    openGraph: {
      title,
      description,
      url: `https://www.sproutern.com/scholarships/${category}`,
    },
    alternates: {
      canonical: `https://www.sproutern.com/scholarships/${category}`,
    },
  };
}

export default async function ScholarshipCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const byCategory = getScholarshipsByCategory();
  const scholarships = byCategory[category];
  const label = scholarshipCategoryLabels[category];

  if (!scholarships || !label) notFound();

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: label,
            url: `https://www.sproutern.com/scholarships/${category}`,
            numberOfItems: scholarships.length,
          }),
        }}
      />

      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-16">
        <div className="container">
          <Link
            href="/scholarships"
            className="mb-4 inline-flex items-center text-sm text-white/80 hover:text-white"
          >
            ← All Scholarships
          </Link>
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            {label}
          </h1>
          <p className="mt-4 text-white/90">
            {scholarships.length} scholarships in this category
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          {scholarships.map((s) => (
            <Card
              key={s.slug}
              className="overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold">{s.name}</h2>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {s.country}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {s.fullyFunded && (
                      <Badge className="bg-green-100 text-green-800">
                        Fully Funded
                      </Badge>
                    )}
                    <Badge variant="secondary">{s.amount}</Badge>
                  </div>
                </div>
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-1 text-xs font-semibold text-muted-foreground">
                      Eligibility
                    </p>
                    <p className="text-sm">{s.eligibility}</p>
                  </div>
                  <div>
                    <p className="mb-1 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                      <Calendar className="h-3 w-3" /> Deadline
                    </p>
                    <p className="text-sm">{s.deadline}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold text-muted-foreground">
                    Coverage
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.coverage.map((c) => (
                      <span
                        key={c}
                        className="flex items-center gap-1 text-xs"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500" /> {c}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={s.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Apply Now <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
