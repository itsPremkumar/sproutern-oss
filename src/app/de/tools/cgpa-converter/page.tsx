import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { CGPAConverterTool } from '@/components/tools/CGPAConverterTool';
import { ShareCTA } from '@/components/shared/social-share';
import { LanguageSwitcher } from '@/components/seo/LanguageSwitcher';
import Link from 'next/link';
import {
  GraduationCap,
  CheckCircle,
  Calculator,
  Building,
  ArrowRight,
} from 'lucide-react';
import type { Metadata } from 'next';

// German-specific metadata
export const metadata: Metadata = {
  title: 'CGPA zu Prozent Umrechner | Kostenloser Online-Rechner - Sproutern',
  description:
    'Rechnen Sie Ihren CGPA sofort in Prozent um. Unterstützt das 10-Punkte-, 7-Punkte- und 4-Punkte-System. Kostenlos und ohne Anmeldung. Perfekt für Studenten in Deutschland.',
  keywords: [
    'CGPA Umrechner',
    'CGPA zu Prozent',
    'Notendurchschnitt berechnen',
    'GPA Rechner Deutschland',
    'Studium Noten',
    'ECTS Punkte',
    'Hochschule Noten',
  ],
  alternates: {
    canonical: 'https://sproutern.dpdns.org/de/tools/cgpa-converter',
    languages: {
      'de-DE': 'https://sproutern.dpdns.org/de/tools/cgpa-converter',
      'zh-CN': 'https://sproutern.dpdns.org/zh/tools/cgpa-converter',
      en: 'https://sproutern.dpdns.org/tools/cgpa-converter',
      'x-default': 'https://sproutern.dpdns.org/tools/cgpa-converter',
    },
  },
  openGraph: {
    title: 'CGPA zu Prozent Umrechner | Kostenlos - Sproutern',
    description:
      'Kostenloser CGPA-Rechner für Studenten. Unterstützt internationale Notensysteme.',
    locale: 'de_DE',
  },
};

// German university grade equivalents
const germanGradeEquivalents = [
  { cgpa: '10.0', percentage: '95%', germanGrade: '1.0 (sehr gut)', ects: 'A' },
  {
    cgpa: '9.0',
    percentage: '85.5%',
    germanGrade: '1.3-1.7 (gut)',
    ects: 'A/B',
  },
  { cgpa: '8.0', percentage: '76%', germanGrade: '2.0-2.3 (gut)', ects: 'B' },
  {
    cgpa: '7.0',
    percentage: '66.5%',
    germanGrade: '2.7-3.0 (befriedigend)',
    ects: 'C',
  },
  {
    cgpa: '6.0',
    percentage: '57%',
    germanGrade: '3.3-3.7 (befriedigend)',
    ects: 'D',
  },
  {
    cgpa: '5.0',
    percentage: '47.5%',
    germanGrade: '4.0 (ausreichend)',
    ects: 'E',
  },
];

export default function GermanCGPAConverterPage() {
  const schemas = getPageSchema('cgpaConverter');

  // German-specific schema
  const germanSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'CGPA zu Prozent Umrechner',
    description: 'Kostenloser CGPA-Rechner für Studenten weltweit',
    url: 'https://sproutern.dpdns.org/de/tools/cgpa-converter',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'All',
    inLanguage: 'de-DE',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    author: {
      '@type': 'Organization',
      name: 'Sproutern',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(germanSchema) }}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <LanguageSwitcher basePath="/tools/cgpa-converter" current="de" />
          {/* German Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Calculator className="h-4 w-4" />
              Kostenloses Akademisches Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              CGPA zu Prozent Umrechner
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Rechnen Sie Ihren CGPA sofort in Prozent um. Unterstützt das
              10-Punkte-, 7-Punkte- und 4-Punkte-System mit
              universitätsspezifischen Formeln.
            </p>
          </div>

          {/* Trust Signals in German */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Kostenlos</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Sofortige Ergebnisse</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Building className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">50+ Universitäten</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <GraduationCap className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">ECTS-Kompatibel</span>
            </div>
          </div>

          {/* Tool Component (English UI - shared) */}
          <CGPAConverterTool />

          {/* Share CTA */}
          <div className="mt-6">
            <ShareCTA toolName="CGPA Umrechner" />
          </div>

          {/* German Educational Content */}
          <div className="prose prose-lg mt-16 max-w-none">
            <h2>CGPA zu German Grade Umrechnung</h2>
            <p>
              Das deutsche Notensystem unterscheidet sich vom CGPA-System. Hier
              ist eine Übersicht, wie CGPA in deutsche Noten umgerechnet wird:
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border p-3 text-left">CGPA (10-Punkte)</th>
                    <th className="border p-3 text-left">Prozent</th>
                    <th className="border p-3 text-left">Deutsche Note</th>
                    <th className="border p-3 text-left">ECTS-Note</th>
                  </tr>
                </thead>
                <tbody>
                  {germanGradeEquivalents.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-muted/30' : ''}
                    >
                      <td className="border p-3 font-bold text-primary">
                        {row.cgpa}
                      </td>
                      <td className="border p-3">{row.percentage}</td>
                      <td className="border p-3">{row.germanGrade}</td>
                      <td className="border p-3 font-semibold">{row.ects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Für Studierende in Deutschland</h2>
            <p>
              Wenn Sie ein Studium in Deutschland planen, ist es wichtig, Ihren
              CGPA in das deutsche Notensystem umzurechnen. Die meisten
              deutschen Universitäten verwenden die „Modifizierte Bayerische
              Formel" für internationale Bewerbungen.
            </p>

            <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-3 font-bold">Modifizierte Bayerische Formel</h3>
              <p className="mb-4 text-center font-mono text-lg">
                Deutsche Note = 1 + 3 × (Max - Ihre Note) / (Max - Min)
              </p>
              <p className="text-sm text-muted-foreground">
                Beispiel: Bei einem CGPA von 8.5 (Max: 10, Min: 5): Deutsche
                Note = 1 + 3 × (10 - 8.5) / (10 - 5) = 1.9
              </p>
            </div>

            <h2>Häufig gestellte Fragen</h2>

            <h3>Was ist ein guter CGPA für ein Studium in Deutschland?</h3>
            <p>
              Für die meisten Masterstudiengänge in Deutschland benötigen Sie
              einen CGPA von mindestens 7.0 (entspricht „befriedigend" oder 2.5
              in deutschen Noten). Elite-Programme wie TU München oder RWTH
              Aachen erfordern möglicherweise 8.0+.
            </p>

            <h3>
              Akzeptieren deutsche Universitäten das 10-Punkte-CGPA-System?
            </h3>
            <p>
              Ja, deutsche Universitäten sind mit dem indischen
              10-Punkte-CGPA-System vertraut. Sie verwenden standardisierte
              Umrechnungsformeln, um internationale Noten zu bewerten.
            </p>
          </div>

          {/* Related Tools */}
          <section className="mt-16 rounded-2xl bg-muted p-8">
            <h2 className="mb-6 text-2xl font-bold">Verwandte Tools</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'GPA Umrechner',
                  href: '/tools/gpa-converter',
                  desc: '4.0-Skala GPA-Umrechnung',
                },
                {
                  title: 'Gehaltsrechner',
                  href: '/de/tools/salary-calculator',
                  desc: 'Brutto zu Netto Berechnung',
                },
                {
                  title: 'Tippgeschwindigkeit Test',
                  href: '/de/tools/typing-test',
                  desc: 'WPM und Genauigkeit testen',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Starten Sie Ihre Karriere
            </h2>
            <p className="mb-6 text-muted-foreground">
              Entdecken Sie Praktikumsmöglichkeiten weltweit
            </p>
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Praktika durchsuchen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
