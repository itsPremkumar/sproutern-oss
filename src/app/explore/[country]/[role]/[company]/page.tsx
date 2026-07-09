import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// ─────────────────────────────────────────────────────────────────────────────
// Explore Route — Pillar 1
//
// app/explore/[country]/[role]/[company]/page.tsx
//
// 100% STATIC: Uses generateStaticParams to pre-render thousands of pages
// at build time. Hosted on Vercel CDN for free. Zero database queries.
// ─────────────────────────────────────────────────────────────────────────────

// Force static generation — no server computation at runtime
export const dynamic = 'force-static';
export const revalidate = false; // Never revalidate — fully static

// ── Types ─────────────────────────────────────────────────────────────────

interface SalaryEntry {
  company: string;
  role: string;
  ctc: string;
  inHand: string;
  bond: string;
  penalty: string;
  workLifeBalance: number;
  hasShift: boolean;
}

interface InterviewRound {
  roundName: string;
  description: string;
  duration?: string;
  questions: string[];
}

interface InterviewExperience {
  id: string;
  company: string;
  role: string;
  batch: string;
  department: string;
  rounds: InterviewRound[];
  tips: string[];
}

interface CompiledCompanyData {
  slug: string;
  company: string;
  country: string;
  roles: string[];
  salaries: SalaryEntry[];
  interviews: InterviewExperience[];
  totalInterviews: number;
  totalRoles: number;
}

interface PageProps {
  params: Promise<{
    country: string;
    role: string;
    company: string;
  }>;
}

// ── Country & Role display names ──────────────────────────────────────────

const COUNTRY_NAMES: Record<string, string> = {
  in: 'India',
  us: 'United States',
  uk: 'United Kingdom',
  au: 'Australia',
  ca: 'Canada',
  sg: 'Singapore',
  de: 'Germany',
  ae: 'UAE',
};

function toTitleCase(str: string): string {
  return str.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// ── Data Loaders (read from compiled JSON at build time) ──────────────────

function loadCompiledData(): Record<string, CompiledCompanyData> {
  const filePath = path.join(
    (process as any).cwd(),
    'src',
    'data',
    'compiled',
    'by-company.json',
  );
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function loadStaticParams(): Array<{
  country: string;
  role: string;
  company: string;
}> {
  const filePath = path.join(
    (process as any).cwd(),
    'src',
    'data',
    'compiled',
    'static-params.json',
  );
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// ── generateStaticParams ──────────────────────────────────────────────────

export async function generateStaticParams() {
  // Only pre-build top 100 to save build time and memory, others generated on-demand
  return loadStaticParams().slice(0, 100);
}

// ── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country, role, company } = await params;
  const countryName = COUNTRY_NAMES[country] || toTitleCase(country);
  const roleName = toTitleCase(role);
  const companyName = toTitleCase(company);

  const title = `${companyName} ${roleName} Salary & Interview Questions ${countryName} 2026`;
  const description = `Complete ${companyName} ${roleName} interview questions, salary breakdown, and preparation tips for ${countryName}. Updated for 2026 with real candidate experiences.`;

  return {
    title,
    description,
    keywords: [
      `${companyName} interview questions`,
      `${roleName} salary ${countryName}`,
      `${companyName} ${roleName} 2026`,
      `${companyName} interview experience`,
      `${roleName} interview preparation`,
    ],
    alternates: {
      canonical: `https://www.sproutern.com/explore/${country}/${role}/${company}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.sproutern.com/explore/${country}/${role}/${company}`,
      images: [
        {
          url: `https://www.sproutern.com/api/og/resume-score?company=${encodeURIComponent(companyName)}&role=${encodeURIComponent(roleName)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

// ── Page Component ────────────────────────────────────────────────────────

export default async function ExplorePage({ params }: PageProps) {
  const { country, role, company } = await params;
  const countryName = COUNTRY_NAMES[country] || toTitleCase(country);
  const roleName = toTitleCase(role);
  const companyName = toTitleCase(company);

  const allCompanies = loadCompiledData();
  const companyData = allCompanies[company];

  // ── JSON-LD Structured Data ─────────────────────────────────────────────
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${companyName} ${roleName} Interview Questions & Salary 2026`,
    description: `Real interview experiences and salary data for ${roleName} at ${companyName} in ${countryName}.`,
    author: { '@type': 'Organization', name: 'Sproutern' },
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sproutern.com/logo.jpg',
      },
    },
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: `https://www.sproutern.com/explore/${country}/${role}/${company}`,
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the ${roleName} salary at ${companyName} in ${countryName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: companyData?.salaries?.[0]
            ? `The ${roleName} at ${companyName} earns approximately ${companyData.salaries[0].ctc} CTC with an in-hand salary of ${companyData.salaries[0].inHand}.`
            : `Salary information for ${roleName} at ${companyName} varies by experience. Check our salary calculator for latest data.`,
        },
      },
      {
        '@type': 'Question',
        name: `How to prepare for ${companyName} ${roleName} interview?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Focus on Data Structures, Algorithms, System Design, and company-specific behavioral questions. Practice with our real interview experiences from ${companyName} candidates.`,
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm text-muted-foreground"
      >
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              href="/"
              className="hover:text-foreground"
            >
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/explore"
              className="hover:text-foreground"
            >
              Explore
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/explore/${country}`}
              className="hover:text-foreground"
            >
              {countryName}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/explore/${country}/${role}`}
              className="hover:text-foreground"
            >
              {roleName}
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-foreground">{companyName}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {companyName} {roleName} — {countryName} 2026
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Complete interview questions, salary breakdown, and preparation tips.
          {companyData &&
            ` Based on ${companyData.totalInterviews} real candidate experiences.`}
        </p>
      </header>

      {/* Salary Section */}
      {companyData?.salaries && companyData.salaries.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            💰 Salary & Compensation
          </h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Role</th>
                  <th className="px-4 py-3 text-left font-medium">CTC</th>
                  <th className="px-4 py-3 text-left font-medium">In-Hand</th>
                  <th className="px-4 py-3 text-left font-medium">Bond</th>
                  <th className="px-4 py-3 text-center font-medium">
                    W/L Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {companyData.salaries.map((s, i) => (
                  <tr
                    key={i}
                    className="border-t"
                  >
                    <td className="px-4 py-3 font-medium">{s.role}</td>
                    <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                      {s.ctc}
                    </td>
                    <td className="px-4 py-3">{s.inHand}</td>
                    <td className="px-4 py-3">
                      {s.bond}
                      {s.penalty !== '0' && s.penalty !== ''
                        ? ` (₹${s.penalty} penalty)`
                        : ''}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {'⭐'.repeat(Math.round(s.workLifeBalance))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Interview Experiences Section */}
      {companyData?.interviews && companyData.interviews.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            📝 Interview Experiences ({companyData.interviews.length})
          </h2>
          {companyData.interviews.map((exp) => (
            <article
              key={exp.id}
              className="mb-6 rounded-xl border p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {exp.role} — Batch {exp.batch}
                </h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {exp.department}
                </span>
              </div>

              {exp.rounds.map((round, ri) => (
                <div
                  key={ri}
                  className="mb-4"
                >
                  <h4 className="mb-2 font-semibold text-primary">
                    Round {ri + 1}: {round.roundName}
                    {round.duration && ` (${round.duration})`}
                  </h4>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {round.description}
                  </p>
                  <ul className="space-y-1.5 pl-4">
                    {round.questions.map((q, qi) => (
                      <li
                        key={qi}
                        className="list-disc text-sm"
                      >
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {exp.tips.length > 0 && (
                <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <h4 className="mb-2 font-semibold text-green-700 dark:text-green-400">
                    💡 Preparation Tips
                  </h4>
                  <ul className="space-y-1 pl-4">
                    {exp.tips.map((tip, ti) => (
                      <li
                        key={ti}
                        className="list-disc text-sm"
                      >
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </section>
      )}

      {/* No data fallback — still serves SEO value */}
      {(!companyData ||
        (companyData.interviews.length === 0 &&
          companyData.salaries.length === 0)) && (
        <section className="mb-10 rounded-xl border border-dashed p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">
            Be the First to Share Your {companyName} Experience!
          </h2>
          <p className="mb-4 text-muted-foreground">
            We don&apos;t have interview data for {roleName} at {companyName} in{' '}
            {countryName} yet. Share your experience to help thousands of
            students.
          </p>
          <Link
            href="/contribute"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Share Your Interview Experience →
          </Link>
        </section>
      )}

      {/* Internal Links (SEO juice) */}
      <section className="rounded-xl bg-muted/30 p-6">
        <h2 className="mb-3 text-lg font-semibold">🔗 Explore More</h2>
        <div className="flex flex-wrap gap-2">
          {Object.keys(allCompanies)
            .filter((c) => c !== company)
            .slice(0, 12)
            .map((c) => (
              <Link
                key={c}
                href={`/explore/${country}/${role}/${c}`}
                className="rounded-full border px-3 py-1 text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {toTitleCase(c)} {roleName}
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
