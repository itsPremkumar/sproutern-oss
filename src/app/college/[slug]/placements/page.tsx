import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  TrendingUp,
  Building2,
  GraduationCap,
  MapPin,
  Trophy,
} from 'lucide-react';
import {
  getCollegeBySlug,
  getCollegeSlugs,
  collegeTypeLabels,
} from '@/lib/college-placement-data';

export function generateStaticParams() {
  return getCollegeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const college = getCollegeBySlug(slug);
  if (!college) return { title: 'College Placements' };

  const latest = college.stats[0];
  const title = `${college.shortName} Placements ${latest.year} | Avg CTC ₹${latest.avgCTC} LPA, Max ₹${latest.maxCTC} LPA | Sproutern`;
  const description = `${college.name} placement report ${latest.year}: ${latest.placementRate} placement rate, ₹${latest.avgCTC} LPA average CTC, ₹${latest.maxCTC} LPA highest package. Top recruiters: ${college.topRecruiters.slice(0, 5).join(', ')}.`;

  return {
    title,
    description,
    keywords: `${college.shortName} placements, ${college.shortName} placement ${latest.year}, ${college.shortName} average package, ${college.shortName} highest package, ${college.shortName} recruiters`,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.sproutern.com/college/${slug}/placements`,
    },
    alternates: {
      canonical: `https://www.sproutern.com/college/${slug}/placements`,
    },
  };
}

export default async function CollegePlacementPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const college = getCollegeBySlug(slug);
  if (!college) notFound();

  const latest = college.stats[0];

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Dataset',
                name: `${college.shortName} Placement Data ${latest.year}`,
                description: `Placement statistics for ${college.name}`,
                creator: { '@type': 'Organization', name: 'Sproutern' },
                temporalCoverage: latest.year,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.sproutern.com',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'College',
                    item: 'https://www.sproutern.com/college',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: `${college.shortName} Placements`,
                  },
                ],
              },
            ],
          }),
        }}
      />

      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="container">
          <Link
            href="/college"
            className="mb-4 inline-flex items-center text-sm text-white/80 hover:text-white"
          >
            ← All Colleges
          </Link>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <Badge className="bg-white/20 text-white">
              {collegeTypeLabels[college.type]?.split(' ').slice(1).join(' ') ||
                college.type}
            </Badge>
            <Badge className="bg-white/20 text-white">
              NIRF #{college.ranking}
            </Badge>
          </div>
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            {college.shortName} Placements {latest.year}
          </h1>
          <p className="mt-2 flex items-center gap-2 text-white/80">
            <MapPin className="h-4 w-4" /> {college.location}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Avg CTC', value: `₹${latest.avgCTC} LPA` },
              { label: 'Max CTC', value: `₹${latest.maxCTC} LPA` },
              { label: 'Placement Rate', value: latest.placementRate },
              { label: 'Companies', value: `${latest.companiesVisited}+` },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-white/10 p-4"
              >
                <p className="text-sm text-white/70">{s.label}</p>
                <p className="text-2xl font-bold text-white">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Branch-wise */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <GraduationCap className="h-6 w-6 text-primary" /> Branch-wise
              Placement
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-3 text-left font-semibold">Branch</th>
                    <th className="p-3 text-right font-semibold">
                      Avg CTC (LPA)
                    </th>
                    <th className="p-3 text-right font-semibold">
                      Placement Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {college.branchWise.map((b) => (
                    <tr
                      key={b.branch}
                      className="border-b"
                    >
                      <td className="p-3 font-medium">{b.branch}</td>
                      <td className="p-3 text-right">₹{b.avgCTC} LPA</td>
                      <td className="p-3 text-right">
                        <Badge variant="secondary">{b.placementRate}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Recruiters */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Building2 className="h-6 w-6 text-primary" /> Top Recruiters
            </h2>
            <div className="flex flex-wrap gap-3">
              {college.topRecruiters.map((r) => (
                <Badge
                  key={r}
                  variant="outline"
                  className="px-4 py-2 text-sm"
                >
                  {r}
                </Badge>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Trophy className="h-6 w-6 text-primary" /> Key Highlights
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {college.highlights.map((h, i) => (
                <Card key={i}>
                  <CardContent className="flex items-start gap-3 p-4">
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <p className="text-sm">{h}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Year-wise Trends */}
          {college.stats.length > 1 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold">📈 Year-wise Trends</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left font-semibold">Year</th>
                      <th className="p-3 text-right font-semibold">Avg CTC</th>
                      <th className="p-3 text-right font-semibold">Max CTC</th>
                      <th className="p-3 text-right font-semibold">Placed</th>
                      <th className="p-3 text-right font-semibold">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {college.stats.map((s) => (
                      <tr
                        key={s.year}
                        className="border-b"
                      >
                        <td className="p-3 font-medium">{s.year}</td>
                        <td className="p-3 text-right">₹{s.avgCTC} LPA</td>
                        <td className="p-3 text-right">₹{s.maxCTC} LPA</td>
                        <td className="p-3 text-right">{s.studentsPlaced}</td>
                        <td className="p-3 text-right">{s.placementRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted/30 py-12">
        <div className="container text-center">
          <h2 className="mb-6 text-2xl font-bold">Prepare for Placements</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/interview-questions"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Interview Questions <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Compare Companies <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/exams"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Exam Prep <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
