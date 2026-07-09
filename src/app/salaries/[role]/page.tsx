import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  TrendingUp,
  MapPin,
  Building2,
  Wrench,
} from 'lucide-react';
import {
  getSalaryRoleBySlug,
  getSalaryRoleSlugs,
  salaryCategoryLabels,
} from '@/lib/salary-data';

export function generateStaticParams() {
  return getSalaryRoleSlugs().map((role) => ({ role }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>;
}): Promise<Metadata> {
  const { role: slug } = await params;
  const role = getSalaryRoleBySlug(slug);
  if (!role) return { title: 'Salary Guide' };

  const title = `${role.title} Salary in India ${new Date().getFullYear()} | ₹${role.levels[0].avgCTC} - ₹${role.levels[role.levels.length - 1].avgCTC} LPA | Sproutern`;
  const description = `${role.title} salary guide: ₹${role.levels[0].avgCTC} LPA (fresher) to ₹${role.levels[role.levels.length - 1].avgCTC} LPA (senior). Compare salaries at ${role.topCompanies
    .map((c) => c.name)
    .slice(0, 4)
    .join(', ')}. City-wise and experience-wise breakdown.`;

  return {
    title,
    description,
    keywords: `${role.title} salary, ${role.title} salary India, ${role.title} salary for freshers, ${role.title} salary at Google, ${role.title} CTC`,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.sproutern.com/salaries/${slug}`,
    },
    alternates: { canonical: `https://www.sproutern.com/salaries/${slug}` },
  };
}

export default async function RoleSalaryPage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role: slug } = await params;
  const role = getSalaryRoleBySlug(slug);
  if (!role) notFound();

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
                headline: `${role.title} Salary in India`,
                author: { '@type': 'Organization', name: 'Sproutern' },
                publisher: { '@type': 'Organization', name: 'Sproutern' },
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
                    name: 'Salaries',
                    item: 'https://www.sproutern.com/salaries',
                  },
                  { '@type': 'ListItem', position: 3, name: role.title },
                ],
              },
            ],
          }),
        }}
      />

      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="container">
          <Link
            href="/salaries"
            className="mb-4 inline-flex items-center text-sm text-white/80 hover:text-white"
          >
            ← All Roles
          </Link>
          <div className="mb-3 flex items-center gap-3">
            <span className="text-4xl">{role.icon}</span>
            <Badge className="bg-white/20 text-white">
              {salaryCategoryLabels[role.category]}
            </Badge>
          </div>
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            {role.title} Salary in India
          </h1>
          <p className="mt-4 max-w-3xl text-white/90">{role.description}</p>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Experience-wise */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <TrendingUp className="h-6 w-6 text-primary" /> Salary by
              Experience
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-3 text-left font-semibold">Experience</th>
                    <th className="p-3 text-right font-semibold">Min CTC</th>
                    <th className="p-3 text-right font-semibold">Avg CTC</th>
                    <th className="p-3 text-right font-semibold">Max CTC</th>
                  </tr>
                </thead>
                <tbody>
                  {role.levels.map((l) => (
                    <tr
                      key={l.level}
                      className="border-b"
                    >
                      <td className="p-3 font-medium">{l.level}</td>
                      <td className="p-3 text-right">₹{l.minCTC} LPA</td>
                      <td className="p-3 text-right font-semibold text-green-600">
                        ₹{l.avgCTC} LPA
                      </td>
                      <td className="p-3 text-right">₹{l.maxCTC} LPA</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Company-wise */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Building2 className="h-6 w-6 text-primary" /> Salary by Company
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-3 text-left font-semibold">Company</th>
                    <th className="p-3 text-right font-semibold">Fresher</th>
                    <th className="p-3 text-right font-semibold">Mid-Level</th>
                    <th className="p-3 text-right font-semibold">Senior</th>
                  </tr>
                </thead>
                <tbody>
                  {role.topCompanies.map((c) => (
                    <tr
                      key={c.name}
                      className="border-b"
                    >
                      <td className="p-3 font-medium">{c.name}</td>
                      <td className="p-3 text-right">₹{c.fresher} LPA</td>
                      <td className="p-3 text-right">₹{c.mid} LPA</td>
                      <td className="p-3 text-right">₹{c.senior} LPA</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* City-wise */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <MapPin className="h-6 w-6 text-primary" /> Salary by City
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {role.cities.map((c) => (
                <Card key={c.city}>
                  <CardContent className="flex items-center justify-between p-4">
                    <span className="font-medium">{c.city}</span>
                    <Badge
                      variant="secondary"
                      className="text-green-700"
                    >
                      ₹{c.avgCTC} LPA avg
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Wrench className="h-6 w-6 text-primary" /> Required Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {role.skills.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="px-4 py-2"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          {/* Growth */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">📈 Career Growth Path</h2>
            <Card>
              <CardContent className="p-6 text-sm leading-relaxed">
                {role.growth}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-12">
        <div className="container text-center">
          <h2 className="mb-6 text-2xl font-bold">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/salaries"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              All Roles <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Compare Companies <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/interview-questions"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Interview Prep <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
