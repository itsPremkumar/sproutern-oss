import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, ExternalLink } from 'lucide-react';
import {
  certifications,
  getCertsByCategory,
  certCategoryLabels,
} from '@/lib/certification-data';

export const metadata: Metadata = {
  title:
    'Best IT Certifications 2026 | AWS, Azure, GCP, PMP, CompTIA & More | Sproutern',
  description:
    'Complete guide to top IT certifications: AWS, Azure, GCP, CompTIA, PMP, Google Data Analytics, Meta Frontend. Cost, syllabus, free alternatives, and salary boost.',
  keywords:
    'IT certifications, AWS certification, Azure certification, Google certification, best certifications for freshers, CompTIA, PMP certification',
  alternates: { canonical: '/certifications' },
};

export default function CertificationsPage() {
  const byCategory = getCertsByCategory();
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
            '@type': 'CollectionPage',
            name: 'Best IT Certifications Guide',
            url: 'https://www.sproutern.com/certifications',
            numberOfItems: certifications.length,
          }),
        }}
      />

      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Award className="mr-1 h-3 w-3" /> {certifications.length}{' '}
            Certifications
          </Badge>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Best IT Certifications 2026
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Complete guide: cost, syllabus, exam format, free alternatives, and
            expected salary boost.
          </p>
        </div>
      </section>

      {Object.entries(byCategory).map(([cat, certs], idx) => (
        <section
          key={cat}
          className={idx % 2 === 0 ? 'py-12' : 'bg-muted/30 py-12'}
        >
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">
              {certCategoryLabels[cat]}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certs.map((cert) => (
                <Link
                  key={cert.slug}
                  href={`/certifications/${cert.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-base group-hover:text-primary">
                        <span className="text-2xl">{cert.icon}</span>
                        {cert.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-xs text-muted-foreground">
                        {cert.provider}
                      </p>
                      <div className="mb-3 flex flex-wrap gap-2">
                        <Badge className={diffColor[cert.difficulty]}>
                          {cert.difficulty}
                        </Badge>
                        <Badge variant="secondary">{cert.cost}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-green-600">
                          Salary Boost: {cert.salaryBoost}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
