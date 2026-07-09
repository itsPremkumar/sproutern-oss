import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Award,
  Clock,
  DollarSign,
  ExternalLink,
  BookOpen,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';
import {
  getCertBySlug,
  getCertSlugs,
  certCategoryLabels,
} from '@/lib/certification-data';

export function generateStaticParams() {
  return getCertSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertBySlug(slug);
  if (!cert) return { title: 'Certification Guide' };

  const title = `${cert.name} Certification Guide ${new Date().getFullYear()} | Cost, Syllabus & Tips | Sproutern`;
  const description = `Complete ${cert.name} guide: ${cert.cost}, ${cert.difficulty} difficulty, ${cert.duration} preparation. Syllabus, exam format, free alternatives, and expected salary boost of ${cert.salaryBoost}.`;

  return {
    title,
    description,
    keywords: `${cert.name}, ${cert.name} certification, ${cert.name} exam, ${cert.name} syllabus, ${cert.name} cost, ${cert.provider} certification`,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.sproutern.com/certifications/${slug}`,
    },
    alternates: {
      canonical: `https://www.sproutern.com/certifications/${slug}`,
    },
  };
}

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = getCertBySlug(slug);
  if (!cert) notFound();

  const diffColor = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-orange-100 text-orange-800',
    Expert: 'bg-red-100 text-red-800',
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
                '@type': 'Course',
                name: cert.name,
                provider: { '@type': 'Organization', name: cert.provider },
                description: cert.description,
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
                    name: 'Certifications',
                    item: 'https://www.sproutern.com/certifications',
                  },
                  { '@type': 'ListItem', position: 3, name: cert.name },
                ],
              },
            ],
          }),
        }}
      />

      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="container">
          <Link
            href="/certifications"
            className="mb-4 inline-flex items-center text-sm text-white/80 hover:text-white"
          >
            ← All Certifications
          </Link>
          <div className="mb-3 flex items-center gap-3">
            <span className="text-4xl">{cert.icon}</span>
            <Badge className="bg-white/20 text-white">{cert.provider}</Badge>
            <Badge className={diffColor[cert.difficulty]}>
              {cert.difficulty}
            </Badge>
          </div>
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            {cert.name}
          </h1>
          <p className="mt-4 max-w-3xl text-white/90">{cert.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                label: 'Cost',
                value: cert.cost,
                icon: <DollarSign className="h-4 w-4" />,
              },
              {
                label: 'Duration',
                value: cert.duration,
                icon: <Clock className="h-4 w-4" />,
              },
              {
                label: 'Validity',
                value: cert.validity,
                icon: <Award className="h-4 w-4" />,
              },
              {
                label: 'Salary Boost',
                value: cert.salaryBoost,
                icon: <BookOpen className="h-4 w-4" />,
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-white/10 p-4"
              >
                <p className="flex items-center gap-1 text-xs text-white/70">
                  {s.icon} {s.label}
                </p>
                <p className="mt-1 text-lg font-bold text-white">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Syllabus */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <BookOpen className="h-6 w-6 text-primary" /> Syllabus & Topics
            </h2>
            <div className="space-y-3">
              {cert.syllabus.map((topic, i) => (
                <Card key={i}>
                  <CardContent className="flex items-center gap-3 p-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-sm">{topic}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Exam Format */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">📝 Exam Format</h2>
            <Card>
              <CardContent className="p-6 text-sm leading-relaxed">
                {cert.examFormat}
              </CardContent>
            </Card>
          </div>

          {/* Prerequisites */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">📋 Prerequisites</h2>
            <ul className="space-y-2">
              {cert.prerequisites.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                >
                  <span className="text-primary">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Free Alternatives */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Lightbulb className="h-6 w-6 text-yellow-500" /> Free
              Alternatives
            </h2>
            <div className="space-y-3">
              {cert.freeAlternatives.map((alt, i) => (
                <Card key={i}>
                  <CardContent className="flex items-center gap-3 p-4">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">{alt}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Official Link */}
          <div className="text-center">
            <a
              href={cert.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Visit Official Page <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-12">
        <div className="container text-center">
          <h2 className="mb-6 text-2xl font-bold">Continue Learning</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              All Certifications <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/roadmaps"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Career Roadmaps <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/salaries"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Salary Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
