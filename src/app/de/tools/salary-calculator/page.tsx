import type { Metadata } from 'next';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/seo/LanguageSwitcher';
import {
  Calculator,
  GraduationCap,
  Clock,
  DollarSign,
  ArrowRight,
} from 'lucide-react';

// German salary content
export const metadata: Metadata = {
  title: 'Gehaltsrechner Deutschland | Brutto zu Netto - Sproutern',
  description:
    'Berechnen Sie Ihr Netto-Gehalt in Deutschland. Brutto zu Netto Rechner mit Steuerklassen, Sozialabgaben und Kirchensteuer. Kostenlos und aktuell.',
  keywords: [
    'Gehaltsrechner',
    'Brutto Netto',
    'Netto Gehalt',
    'Steuerrechner Deutschland',
    'Sozialabgaben',
    'Lohnsteuer',
  ],
  alternates: {
    canonical: 'https://sproutern.dpdns.org/de/tools/salary-calculator',
    languages: {
      'de-DE': 'https://sproutern.dpdns.org/de/tools/salary-calculator',
      'zh-CN': 'https://sproutern.dpdns.org/zh/tools/salary-calculator',
      en: 'https://sproutern.dpdns.org/tools/salary-calculator',
      'x-default': 'https://sproutern.dpdns.org/tools/salary-calculator',
    },
  },
  openGraph: {
    title: 'Gehaltsrechner Deutschland | Brutto zu Netto',
    description: 'Kostenloser Brutto-Netto-Rechner für Deutschland',
    locale: 'de_DE',
  },
};

// German salary examples
const germanSalaryExamples = [
  {
    brutto: '30.000 €',
    netto: '~1.800 €/Monat',
    steuerklasse: 'I',
    abgaben: '~38%',
  },
  {
    brutto: '45.000 €',
    netto: '~2.500 €/Monat',
    steuerklasse: 'I',
    abgaben: '~40%',
  },
  {
    brutto: '60.000 €',
    netto: '~3.200 €/Monat',
    steuerklasse: 'I',
    abgaben: '~42%',
  },
  {
    brutto: '80.000 €',
    netto: '~4.000 €/Monat',
    steuerklasse: 'I',
    abgaben: '~45%',
  },
  {
    brutto: '100.000 €',
    netto: '~4.800 €/Monat',
    steuerklasse: 'I',
    abgaben: '~47%',
  },
];

export default function GermanSalaryCalculatorPage() {
  const germanSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Gehaltsrechner Deutschland',
    description: 'Kostenloser Brutto-Netto-Rechner für Deutschland',
    url: 'https://sproutern.dpdns.org/de/tools/salary-calculator',
    applicationCategory: 'FinanceApplication',
    inLanguage: 'de-DE',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(germanSchema) }}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <LanguageSwitcher basePath="/tools/salary-calculator" current="de" />
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
              <DollarSign className="h-4 w-4" />
              Kostenloser Finanzrechner
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Gehaltsrechner Deutschland
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Berechnen Sie Ihr Netto-Gehalt aus dem Brutto. Mit Steuerklassen,
              Sozialabgaben, Rentenversicherung und Kirchensteuer.
            </p>
          </div>

          {/* Quick Info Box */}
          <div className="mb-10 rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 p-6 dark:from-green-950 dark:to-blue-950">
            <h2 className="mb-4 text-lg font-bold">
              Schnelle Übersicht: Brutto zu Netto
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/50 dark:bg-black/20">
                    <th className="border p-3 text-left">Brutto/Jahr</th>
                    <th className="border p-3 text-left">Netto/Monat</th>
                    <th className="border p-3 text-left">Steuerklasse</th>
                    <th className="border p-3 text-left">Abgaben</th>
                  </tr>
                </thead>
                <tbody>
                  {germanSalaryExamples.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2 === 0 ? 'bg-white/30 dark:bg-black/10' : ''
                      }
                    >
                      <td className="border p-3 font-bold text-primary">
                        {row.brutto}
                      </td>
                      <td className="border p-3 font-semibold text-green-600">
                        {row.netto}
                      </td>
                      <td className="border p-3">{row.steuerklasse}</td>
                      <td className="border p-3">{row.abgaben}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              * Berechnungen basieren auf Steuerklasse I, ohne Kirchensteuer
            </p>
          </div>

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Abzüge vom Brutto-Gehalt in Deutschland</h2>

            <div className="not-prose grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-muted/30 p-4">
                <h3 className="font-bold text-primary">Sozialversicherung</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Rentenversicherung: 9,3%</li>
                  <li>Arbeitslosenversicherung: 1,3%</li>
                  <li>Krankenversicherung: ~7,3% + Zusatzbeitrag</li>
                  <li>Pflegeversicherung: 1,7% (kinderlos: 2,3%)</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-muted/30 p-4">
                <h3 className="font-bold text-primary">Steuern</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Einkommensteuer: 14% - 45%</li>
                  <li>Solidaritätszuschlag: 5,5% (hohe Einkommen)</li>
                  <li>Kirchensteuer: 8-9% (optional)</li>
                </ul>
              </div>
            </div>

            <h2>Steuerklassen in Deutschland</h2>
            <ul>
              <li>
                <strong>Klasse I:</strong> Alleinstehende, Geschiedene
              </li>
              <li>
                <strong>Klasse II:</strong> Alleinerziehende
              </li>
              <li>
                <strong>Klasse III:</strong> Verheiratet, Alleinverdiener
              </li>
              <li>
                <strong>Klasse IV:</strong> Verheiratet, beide verdienen ähnlich
              </li>
              <li>
                <strong>Klasse V:</strong> Verheiratet, Partner in Klasse III
              </li>
              <li>
                <strong>Klasse VI:</strong> Zweitjob
              </li>
            </ul>

            <h2>Häufig gestellte Fragen</h2>

            <h3>Wie viel Netto bleibt bei 50.000 € Brutto?</h3>
            <p>
              Bei 50.000 € Brutto-Jahresgehalt (Steuerklasse I, keine
              Kirchensteuer) bleiben etwa 2.700-2.800 € Netto pro Monat. Die
              genaue Summe hängt von Ihrer Krankenkasse und dem Bundesland ab.
            </p>

            <h3>Was ist ein gutes Gehalt in Deutschland?</h3>
            <p>
              Das durchschnittliche Bruttogehalt in Deutschland liegt bei etwa
              52.000 € pro Jahr. Ein „gutes" Gehalt hängt stark von Region,
              Branche und Erfahrung ab. In München benötigt man mehr als in
              Leipzig.
            </p>
          </div>

          {/* Related Tools */}
          <section className="mt-16 rounded-2xl bg-muted p-8">
            <h2 className="mb-6 text-2xl font-bold">Weitere Tools</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'CGPA Umrechner',
                  href: '/de/tools/cgpa-converter',
                  desc: 'Noten umrechnen',
                },
                {
                  title: 'EMI Rechner',
                  href: '/tools/emi-calculator',
                  desc: 'Kreditrate berechnen',
                },
                {
                  title: 'Tipptest',
                  href: '/de/tools/typing-test',
                  desc: 'Tippgeschwindigkeit testen',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg bg-background p-4 hover:shadow-md"
                >
                  <h3 className="font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
