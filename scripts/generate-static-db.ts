#!/usr/bin/env tsx

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Static Database Generator — Pillar 1
 *
 * Reads interview-experiences.json and salary-bond-data.json, then compiles
 * them into optimized, denormalized JSON lookup files organized by
 * country/role/company for generateStaticParams consumption.
 *
 * 100% FREE: Runs at build time. Zero runtime database queries.
 *
 * Usage:
 *   npx tsx scripts/generate-static-db.ts
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'fs';
import path from 'path';

// ── Types ─────────────────────────────────────────────────────────────────

interface InterviewExperience {
  id: string;
  company: string;
  role: string;
  batch: string;
  department: string;
  rounds: Array<{
    roundName: string;
    description: string;
    duration?: string;
    questions: string[];
  }>;
  tips: string[];
}

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

interface CompiledRoleData {
  slug: string;
  role: string;
  country: string;
  companies: string[];
  salaries: SalaryEntry[];
  interviews: InterviewExperience[];
}

interface StaticParamsEntry {
  country: string;
  role: string;
  company: string;
}

// ── Slug Helpers ──────────────────────────────────────────────────────────

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// ── Countries & Roles for permutation generation ──────────────────────────

const COUNTRIES = [
  { code: 'in', name: 'India', currency: 'INR' },
  { code: 'us', name: 'United States', currency: 'USD' },
  { code: 'uk', name: 'United Kingdom', currency: 'GBP' },
  { code: 'au', name: 'Australia', currency: 'AUD' },
  { code: 'ca', name: 'Canada', currency: 'CAD' },
  { code: 'sg', name: 'Singapore', currency: 'SGD' },
  { code: 'de', name: 'Germany', currency: 'EUR' },
  { code: 'ae', name: 'UAE', currency: 'AED' },
];

const GENERIC_ROLES = [
  'software-engineer',
  'data-scientist',
  'data-analyst',
  'frontend-developer',
  'backend-developer',
  'full-stack-developer',
  'devops-engineer',
  'cloud-engineer',
  'product-manager',
  'machine-learning-engineer',
  'mobile-developer',
  'qa-engineer',
  'system-engineer',
  'business-analyst',
  'cybersecurity-analyst',
];

// ── Main ──────────────────────────────────────────────────────────────────

function main() {
  const dataDir = path.join(process.cwd(), 'src', 'data');
  const outDir = path.join(dataDir, 'compiled');

  // Ensure output directory
  fs.mkdirSync(outDir, { recursive: true });

  // ── 1. Read source data ─────────────────────────────────────────────────
  const interviews: InterviewExperience[] = JSON.parse(
    fs.readFileSync(path.join(dataDir, 'interview-experiences.json'), 'utf-8'),
  );
  const salaries: SalaryEntry[] = JSON.parse(
    fs.readFileSync(path.join(dataDir, 'salary-bond-data.json'), 'utf-8'),
  );

  console.log(`\n📊 Source Data:`);
  console.log(`   Interviews: ${interviews.length}`);
  console.log(`   Salary Entries: ${salaries.length}`);

  // ── 2. Extract unique companies from real data ──────────────────────────
  const uniqueCompanies = new Set<string>();
  for (const exp of interviews) {
    uniqueCompanies.add(slugify(exp.company));
  }
  for (const sal of salaries) {
    uniqueCompanies.add(slugify(sal.company));
  }
  const companyList = Array.from(uniqueCompanies);

  // ── 3. Build by-company lookup ──────────────────────────────────────────
  const byCompany: Record<string, CompiledCompanyData> = {};
  for (const companySlug of companyList) {
    const companyInterviews = interviews.filter(
      (i) => slugify(i.company) === companySlug,
    );
    const companySalaries = salaries.filter(
      (s) => slugify(s.company) === companySlug,
    );
    const roles = new Set<string>();
    companyInterviews.forEach((i) => roles.add(i.role));
    companySalaries.forEach((s) => roles.add(s.role));

    byCompany[companySlug] = {
      slug: companySlug,
      company:
        companyInterviews[0]?.company ||
        companySalaries[0]?.company ||
        companySlug,
      country: 'in', // Default — all current data is India
      roles: Array.from(roles),
      salaries: companySalaries,
      interviews: companyInterviews,
      totalInterviews: companyInterviews.length,
      totalRoles: roles.size,
    };
  }

  // ── 4. Build by-role lookup ──────────────────────────────────────────────
  const byRole: Record<string, CompiledRoleData> = {};
  for (const role of GENERIC_ROLES) {
    const roleInterviews = interviews.filter((i) =>
      slugify(i.role).includes(role.replace(/-/g, ' ').split(' ')[0]),
    );
    const roleSalaries = salaries.filter((s) =>
      slugify(s.role).includes(role.replace(/-/g, ' ').split(' ')[0]),
    );
    const companies = new Set<string>();
    roleInterviews.forEach((i) => companies.add(i.company));
    roleSalaries.forEach((s) => companies.add(s.company));

    byRole[role] = {
      slug: role,
      role: role.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      country: 'in',
      companies: Array.from(companies),
      salaries: roleSalaries,
      interviews: roleInterviews,
    };
  }

  // ── 5. Generate static params (country × role × company) ────────────────
  const staticParams: StaticParamsEntry[] = [];

  for (const country of COUNTRIES) {
    // Country + role pages
    for (const role of GENERIC_ROLES) {
      // Country + role + company pages
      for (const companySlug of companyList) {
        staticParams.push({
          country: country.code,
          role,
          company: companySlug,
        });
      }
    }
  }

  // ── 6. Write compiled files ──────────────────────────────────────────────
  fs.writeFileSync(
    path.join(outDir, 'by-company.json'),
    JSON.stringify(byCompany, null, 2),
    'utf-8',
  );
  fs.writeFileSync(
    path.join(outDir, 'by-role.json'),
    JSON.stringify(byRole, null, 2),
    'utf-8',
  );
  fs.writeFileSync(
    path.join(outDir, 'static-params.json'),
    JSON.stringify(staticParams, null, 2),
    'utf-8',
  );
  fs.writeFileSync(
    path.join(outDir, 'countries.json'),
    JSON.stringify(COUNTRIES, null, 2),
    'utf-8',
  );
  fs.writeFileSync(
    path.join(outDir, 'roles.json'),
    JSON.stringify(GENERIC_ROLES, null, 2),
    'utf-8',
  );

  console.log(`\n✅ Compiled Data Written to ${outDir}:`);
  console.log(`   Companies: ${companyList.length}`);
  console.log(`   Roles: ${GENERIC_ROLES.length}`);
  console.log(`   Countries: ${COUNTRIES.length}`);
  console.log(`   Static Params: ${staticParams.length} pages`);
  console.log(`\n💡 Next: Run \`next build\` to generate all static pages.\n`);
}

main();
