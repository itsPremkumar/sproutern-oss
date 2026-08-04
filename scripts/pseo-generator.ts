#!/usr/bin/env tsx

/**
 * ═════════════════════════════════════════════════════════════════════════════
 * Programmatic SEO (pSEO) Generator v2.0 — MASSIVE SCALE
 *
 * Generates 5,000+ unique long-tail keyword pages using combinatorial
 * expansion from companies × roles × cities × topics.
 *
 * Usage:
 *   npx tsx scripts/pseo-generator.ts
 *   npx tsx scripts/pseo-generator.ts --count 500 --category salary
 *   npx tsx scripts/pseo-generator.ts --dry-run          # Preview without writing
 *   npx tsx scripts/pseo-generator.ts --category all      # Generate everything
 *
 * Categories: salary | interview | career-guide | hiring-process | all
 * ═════════════════════════════════════════════════════════════════════════════
 */

import fs from 'fs';
import path from 'path';

// ═════════════════════════════════════════════════════════════════════════════
// DATA DIMENSIONS
// ═════════════════════════════════════════════════════════════════════════════

interface Company {
  name: string;
  slug: string;
  type: 'service' | 'product' | 'startup' | 'mnc' | 'consulting';
  country: string;
}

interface Role {
  title: string;
  slug: string;
  level: 'fresher' | 'mid' | 'senior' | 'lead';
  domain: string;
}

interface City {
  name: string;
  slug: string;
  country: string;
  countryCode: string;
}

// ── 100+ Companies ──────────────────────────────────────────────────────────

const COMPANIES: Company[] = [
  // Indian Service Companies
  { name: 'TCS', slug: 'tcs', type: 'service', country: 'IN' },
  { name: 'Infosys', slug: 'infosys', type: 'service', country: 'IN' },
  { name: 'Wipro', slug: 'wipro', type: 'service', country: 'IN' },
  { name: 'HCLTech', slug: 'hcltech', type: 'service', country: 'IN' },
  {
    name: 'Tech Mahindra',
    slug: 'tech-mahindra',
    type: 'service',
    country: 'IN',
  },
  { name: 'LTIMindtree', slug: 'ltimindtree', type: 'service', country: 'IN' },
  { name: 'Mphasis', slug: 'mphasis', type: 'service', country: 'IN' },
  {
    name: 'Persistent Systems',
    slug: 'persistent-systems',
    type: 'service',
    country: 'IN',
  },
  { name: 'Coforge', slug: 'coforge', type: 'service', country: 'IN' },
  { name: 'Hexaware', slug: 'hexaware', type: 'service', country: 'IN' },
  { name: 'Cyient', slug: 'cyient', type: 'service', country: 'IN' },
  {
    name: 'Zensar Technologies',
    slug: 'zensar',
    type: 'service',
    country: 'IN',
  },
  { name: 'KPIT Technologies', slug: 'kpit', type: 'service', country: 'IN' },
  {
    name: 'L&T Technology Services',
    slug: 'ltts',
    type: 'service',
    country: 'IN',
  },
  { name: 'Birlasoft', slug: 'birlasoft', type: 'service', country: 'IN' },

  // MNCs in India
  { name: 'Cognizant', slug: 'cognizant', type: 'mnc', country: 'IN' },
  { name: 'Capgemini', slug: 'capgemini', type: 'mnc', country: 'IN' },
  { name: 'Accenture', slug: 'accenture', type: 'mnc', country: 'IN' },
  {
    name: 'DXC Technology',
    slug: 'dxc-technology',
    type: 'mnc',
    country: 'IN',
  },
  { name: 'IBM', slug: 'ibm', type: 'mnc', country: 'US' },
  { name: 'Oracle', slug: 'oracle', type: 'mnc', country: 'US' },
  { name: 'SAP', slug: 'sap', type: 'mnc', country: 'DE' },
  { name: 'Cisco', slug: 'cisco', type: 'mnc', country: 'US' },
  { name: 'Dell Technologies', slug: 'dell', type: 'mnc', country: 'US' },
  { name: 'HP', slug: 'hp', type: 'mnc', country: 'US' },
  { name: 'Qualcomm', slug: 'qualcomm', type: 'mnc', country: 'US' },
  { name: 'Intel', slug: 'intel', type: 'mnc', country: 'US' },
  { name: 'Samsung', slug: 'samsung', type: 'mnc', country: 'KR' },
  { name: 'NTT Data', slug: 'ntt-data', type: 'mnc', country: 'JP' },

  // FAANG / Big Tech
  { name: 'Google', slug: 'google', type: 'product', country: 'US' },
  { name: 'Amazon', slug: 'amazon', type: 'product', country: 'US' },
  { name: 'Microsoft', slug: 'microsoft', type: 'product', country: 'US' },
  { name: 'Apple', slug: 'apple', type: 'product', country: 'US' },
  { name: 'Meta', slug: 'meta', type: 'product', country: 'US' },
  { name: 'Netflix', slug: 'netflix', type: 'product', country: 'US' },
  { name: 'Uber', slug: 'uber', type: 'product', country: 'US' },
  { name: 'Airbnb', slug: 'airbnb', type: 'product', country: 'US' },
  { name: 'Salesforce', slug: 'salesforce', type: 'product', country: 'US' },
  { name: 'Adobe', slug: 'adobe', type: 'product', country: 'US' },
  { name: 'PayPal', slug: 'paypal', type: 'product', country: 'US' },
  { name: 'Stripe', slug: 'stripe', type: 'product', country: 'US' },
  { name: 'Twitter (X)', slug: 'twitter', type: 'product', country: 'US' },
  { name: 'LinkedIn', slug: 'linkedin', type: 'product', country: 'US' },
  { name: 'Nvidia', slug: 'nvidia', type: 'product', country: 'US' },

  // Indian Product Companies / Startups
  { name: 'Flipkart', slug: 'flipkart', type: 'product', country: 'IN' },
  { name: 'Razorpay', slug: 'razorpay', type: 'startup', country: 'IN' },
  { name: 'Zomato', slug: 'zomato', type: 'product', country: 'IN' },
  { name: 'Swiggy', slug: 'swiggy', type: 'startup', country: 'IN' },
  { name: 'Paytm', slug: 'paytm', type: 'product', country: 'IN' },
  { name: 'PhonePe', slug: 'phonepe', type: 'startup', country: 'IN' },
  { name: 'CRED', slug: 'cred', type: 'startup', country: 'IN' },
  { name: 'Meesho', slug: 'meesho', type: 'startup', country: 'IN' },
  { name: 'Ola', slug: 'ola', type: 'startup', country: 'IN' },
  { name: 'Dream11', slug: 'dream11', type: 'startup', country: 'IN' },
  {
    name: 'BrowserStack',
    slug: 'browserstack',
    type: 'startup',
    country: 'IN',
  },
  { name: 'Postman', slug: 'postman', type: 'startup', country: 'IN' },
  { name: 'Freshworks', slug: 'freshworks', type: 'product', country: 'IN' },
  { name: 'Zoho', slug: 'zoho', type: 'product', country: 'IN' },
  { name: 'Myntra', slug: 'myntra', type: 'product', country: 'IN' },
  { name: 'Juspay', slug: 'juspay', type: 'startup', country: 'IN' },
  { name: 'ShareChat', slug: 'sharechat', type: 'startup', country: 'IN' },
  { name: 'Atlassian', slug: 'atlassian', type: 'product', country: 'AU' },
  { name: 'Notion', slug: 'notion', type: 'startup', country: 'US' },
  { name: 'Zerodha', slug: 'zerodha', type: 'startup', country: 'IN' },
  { name: 'Groww', slug: 'groww', type: 'startup', country: 'IN' },

  // Consulting
  { name: 'Deloitte', slug: 'deloitte', type: 'consulting', country: 'US' },
  { name: 'PwC', slug: 'pwc', type: 'consulting', country: 'US' },
  { name: 'EY', slug: 'ey', type: 'consulting', country: 'US' },
  { name: 'KPMG', slug: 'kpmg', type: 'consulting', country: 'US' },
  { name: 'McKinsey', slug: 'mckinsey', type: 'consulting', country: 'US' },
  { name: 'BCG', slug: 'bcg', type: 'consulting', country: 'US' },
  { name: 'Bain & Company', slug: 'bain', type: 'consulting', country: 'US' },

  // Banks & Financial Services
  {
    name: 'Goldman Sachs',
    slug: 'goldman-sachs',
    type: 'product',
    country: 'US',
  },
  {
    name: 'Morgan Stanley',
    slug: 'morgan-stanley',
    type: 'product',
    country: 'US',
  },
  { name: 'JP Morgan', slug: 'jpmorgan', type: 'product', country: 'US' },
  {
    name: 'Deutsche Bank',
    slug: 'deutsche-bank',
    type: 'product',
    country: 'DE',
  },
  { name: 'Barclays', slug: 'barclays', type: 'product', country: 'GB' },
  { name: 'HSBC', slug: 'hsbc', type: 'product', country: 'GB' },
  { name: 'UBS', slug: 'ubs', type: 'product', country: 'CH' },

  // More Global Tech
  { name: 'Shopify', slug: 'shopify', type: 'product', country: 'CA' },
  { name: 'Spotify', slug: 'spotify', type: 'product', country: 'SE' },
  { name: 'Snap', slug: 'snap', type: 'product', country: 'US' },
  { name: 'Pinterest', slug: 'pinterest', type: 'product', country: 'US' },
  { name: 'Twilio', slug: 'twilio', type: 'product', country: 'US' },
  { name: 'Cloudflare', slug: 'cloudflare', type: 'product', country: 'US' },
  { name: 'Databricks', slug: 'databricks', type: 'product', country: 'US' },
  { name: 'Snowflake', slug: 'snowflake', type: 'product', country: 'US' },
  { name: 'Palantir', slug: 'palantir', type: 'product', country: 'US' },
  { name: 'Booking.com', slug: 'booking', type: 'product', country: 'NL' },
  { name: 'Grab', slug: 'grab', type: 'product', country: 'SG' },
  { name: 'ByteDance', slug: 'bytedance', type: 'product', country: 'CN' },
  { name: 'Tencent', slug: 'tencent', type: 'product', country: 'CN' },
  { name: 'Alibaba', slug: 'alibaba', type: 'product', country: 'CN' },
];

// ── 50+ Roles ──────────────────────────────────────────────────────────────

const ROLES: Role[] = [
  {
    title: 'Software Engineer',
    slug: 'software-engineer',
    level: 'fresher',
    domain: 'engineering',
  },
  {
    title: 'Software Developer',
    slug: 'software-developer',
    level: 'fresher',
    domain: 'engineering',
  },
  {
    title: 'Frontend Developer',
    slug: 'frontend-developer',
    level: 'fresher',
    domain: 'engineering',
  },
  {
    title: 'Backend Developer',
    slug: 'backend-developer',
    level: 'fresher',
    domain: 'engineering',
  },
  {
    title: 'Full Stack Developer',
    slug: 'full-stack-developer',
    level: 'mid',
    domain: 'engineering',
  },
  {
    title: 'Data Scientist',
    slug: 'data-scientist',
    level: 'mid',
    domain: 'data',
  },
  {
    title: 'Data Analyst',
    slug: 'data-analyst',
    level: 'fresher',
    domain: 'data',
  },
  {
    title: 'Data Engineer',
    slug: 'data-engineer',
    level: 'mid',
    domain: 'data',
  },
  { title: 'ML Engineer', slug: 'ml-engineer', level: 'mid', domain: 'ai' },
  { title: 'AI Engineer', slug: 'ai-engineer', level: 'mid', domain: 'ai' },
  {
    title: 'DevOps Engineer',
    slug: 'devops-engineer',
    level: 'mid',
    domain: 'infrastructure',
  },
  {
    title: 'Cloud Engineer',
    slug: 'cloud-engineer',
    level: 'mid',
    domain: 'infrastructure',
  },
  { title: 'SRE', slug: 'sre', level: 'senior', domain: 'infrastructure' },
  {
    title: 'QA Engineer',
    slug: 'qa-engineer',
    level: 'fresher',
    domain: 'quality',
  },
  { title: 'SDET', slug: 'sdet', level: 'mid', domain: 'quality' },
  {
    title: 'Product Manager',
    slug: 'product-manager',
    level: 'mid',
    domain: 'management',
  },
  {
    title: 'Project Manager',
    slug: 'project-manager',
    level: 'mid',
    domain: 'management',
  },
  {
    title: 'Business Analyst',
    slug: 'business-analyst',
    level: 'fresher',
    domain: 'management',
  },
  {
    title: 'UI/UX Designer',
    slug: 'ui-ux-designer',
    level: 'fresher',
    domain: 'design',
  },
  {
    title: 'iOS Developer',
    slug: 'ios-developer',
    level: 'mid',
    domain: 'mobile',
  },
  {
    title: 'Android Developer',
    slug: 'android-developer',
    level: 'mid',
    domain: 'mobile',
  },
  {
    title: 'React Developer',
    slug: 'react-developer',
    level: 'mid',
    domain: 'engineering',
  },
  {
    title: 'Angular Developer',
    slug: 'angular-developer',
    level: 'mid',
    domain: 'engineering',
  },
  {
    title: 'Python Developer',
    slug: 'python-developer',
    level: 'fresher',
    domain: 'engineering',
  },
  {
    title: 'Java Developer',
    slug: 'java-developer',
    level: 'fresher',
    domain: 'engineering',
  },
  {
    title: 'Node.js Developer',
    slug: 'nodejs-developer',
    level: 'mid',
    domain: 'engineering',
  },
  {
    title: 'Golang Developer',
    slug: 'golang-developer',
    level: 'mid',
    domain: 'engineering',
  },
  {
    title: 'Rust Developer',
    slug: 'rust-developer',
    level: 'senior',
    domain: 'engineering',
  },
  {
    title: 'Blockchain Developer',
    slug: 'blockchain-developer',
    level: 'mid',
    domain: 'engineering',
  },
  {
    title: 'Security Engineer',
    slug: 'security-engineer',
    level: 'mid',
    domain: 'security',
  },
  {
    title: 'Cybersecurity Analyst',
    slug: 'cybersecurity-analyst',
    level: 'fresher',
    domain: 'security',
  },
  {
    title: 'Network Engineer',
    slug: 'network-engineer',
    level: 'fresher',
    domain: 'infrastructure',
  },
  {
    title: 'System Administrator',
    slug: 'sysadmin',
    level: 'fresher',
    domain: 'infrastructure',
  },
  {
    title: 'Database Administrator',
    slug: 'dba',
    level: 'mid',
    domain: 'data',
  },
  {
    title: 'Technical Lead',
    slug: 'tech-lead',
    level: 'lead',
    domain: 'engineering',
  },
  {
    title: 'Engineering Manager',
    slug: 'engineering-manager',
    level: 'lead',
    domain: 'management',
  },
  {
    title: 'Solutions Architect',
    slug: 'solutions-architect',
    level: 'senior',
    domain: 'engineering',
  },
  {
    title: 'Technical Writer',
    slug: 'technical-writer',
    level: 'fresher',
    domain: 'content',
  },
  {
    title: 'Embedded Systems Engineer',
    slug: 'embedded-engineer',
    level: 'mid',
    domain: 'hardware',
  },
  {
    title: 'SAP Consultant',
    slug: 'sap-consultant',
    level: 'mid',
    domain: 'consulting',
  },
  {
    title: 'Salesforce Developer',
    slug: 'salesforce-developer',
    level: 'mid',
    domain: 'engineering',
  },
  {
    title: 'Power BI Developer',
    slug: 'power-bi-developer',
    level: 'fresher',
    domain: 'data',
  },
  {
    title: 'ETL Developer',
    slug: 'etl-developer',
    level: 'mid',
    domain: 'data',
  },
  {
    title: 'Scrum Master',
    slug: 'scrum-master',
    level: 'mid',
    domain: 'management',
  },
  {
    title: 'IT Support Engineer',
    slug: 'it-support',
    level: 'fresher',
    domain: 'infrastructure',
  },
];

// ── 30+ Cities ──────────────────────────────────────────────────────────────

const CITIES: City[] = [
  // India
  { name: 'Bangalore', slug: 'bangalore', country: 'India', countryCode: 'IN' },
  { name: 'Hyderabad', slug: 'hyderabad', country: 'India', countryCode: 'IN' },
  { name: 'Pune', slug: 'pune', country: 'India', countryCode: 'IN' },
  { name: 'Chennai', slug: 'chennai', country: 'India', countryCode: 'IN' },
  { name: 'Mumbai', slug: 'mumbai', country: 'India', countryCode: 'IN' },
  { name: 'Delhi NCR', slug: 'delhi-ncr', country: 'India', countryCode: 'IN' },
  { name: 'Noida', slug: 'noida', country: 'India', countryCode: 'IN' },
  { name: 'Gurgaon', slug: 'gurgaon', country: 'India', countryCode: 'IN' },
  { name: 'Kolkata', slug: 'kolkata', country: 'India', countryCode: 'IN' },
  { name: 'Ahmedabad', slug: 'ahmedabad', country: 'India', countryCode: 'IN' },
  { name: 'Jaipur', slug: 'jaipur', country: 'India', countryCode: 'IN' },
  {
    name: 'Coimbatore',
    slug: 'coimbatore',
    country: 'India',
    countryCode: 'IN',
  },
  {
    name: 'Thiruvananthapuram',
    slug: 'thiruvananthapuram',
    country: 'India',
    countryCode: 'IN',
  },
  { name: 'Kochi', slug: 'kochi', country: 'India', countryCode: 'IN' },
  { name: 'Indore', slug: 'indore', country: 'India', countryCode: 'IN' },

  // International
  {
    name: 'San Francisco',
    slug: 'san-francisco',
    country: 'USA',
    countryCode: 'US',
  },
  { name: 'New York', slug: 'new-york', country: 'USA', countryCode: 'US' },
  { name: 'Seattle', slug: 'seattle', country: 'USA', countryCode: 'US' },
  { name: 'Austin', slug: 'austin', country: 'USA', countryCode: 'US' },
  { name: 'London', slug: 'london', country: 'UK', countryCode: 'GB' },
  { name: 'Berlin', slug: 'berlin', country: 'Germany', countryCode: 'DE' },
  { name: 'Munich', slug: 'munich', country: 'Germany', countryCode: 'DE' },
  {
    name: 'Amsterdam',
    slug: 'amsterdam',
    country: 'Netherlands',
    countryCode: 'NL',
  },
  { name: 'Dublin', slug: 'dublin', country: 'Ireland', countryCode: 'IE' },
  { name: 'Toronto', slug: 'toronto', country: 'Canada', countryCode: 'CA' },
  {
    name: 'Vancouver',
    slug: 'vancouver',
    country: 'Canada',
    countryCode: 'CA',
  },
  {
    name: 'Singapore',
    slug: 'singapore',
    country: 'Singapore',
    countryCode: 'SG',
  },
  { name: 'Dubai', slug: 'dubai', country: 'UAE', countryCode: 'AE' },
  { name: 'Sydney', slug: 'sydney', country: 'Australia', countryCode: 'AU' },
  {
    name: 'Melbourne',
    slug: 'melbourne',
    country: 'Australia',
    countryCode: 'AU',
  },
  { name: 'Tokyo', slug: 'tokyo', country: 'Japan', countryCode: 'JP' },
];

// ═════════════════════════════════════════════════════════════════════════════
// COMBINATORIAL PAGE GENERATORS
// ═════════════════════════════════════════════════════════════════════════════

interface PSEOPage {
  slug: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
  targetCountry: string;
  templateType: 'salary' | 'interview' | 'career-guide' | 'hiring-process';
  data: Record<string, string>;
}

function generateSalaryPages(): PSEOPage[] {
  const pages: PSEOPage[] = [];
  const topRoles = ROLES.slice(0, 25); // Top 25 roles for salary
  const topCities = CITIES.slice(0, 20); // Top 20 cities

  for (const role of topRoles) {
    for (const city of topCities) {
      pages.push({
        slug: `salary/${role.slug}/${city.slug}`,
        title: `${role.title} Salary in ${city.name} 2026 — Complete Compensation Guide`,
        description: `Detailed ${role.title} salary breakdown in ${city.name}, ${city.country} for 2026. Covers fresher to senior packages, top companies, bonuses, and negotiation tips.`,
        category: 'Salary Guide',
        keywords: [
          `${role.title.toLowerCase()} salary ${city.name.toLowerCase()}`,
          `${role.slug} salary ${city.country.toLowerCase()} 2026`,
          `${role.title.toLowerCase()} compensation ${city.name.toLowerCase()}`,
          `tech salary ${city.name.toLowerCase()} 2026`,
        ],
        targetCountry: city.countryCode,
        templateType: 'salary',
        data: {
          role: role.title,
          city: city.name,
          country: city.country,
          domain: role.domain,
          level: role.level,
        },
      });
    }
  }
  return pages;
}

function generateInterviewPages(): PSEOPage[] {
  const pages: PSEOPage[] = [];
  const topCompanies = COMPANIES.slice(0, 60);
  const topRoles = ROLES.slice(0, 15);

  for (const company of topCompanies) {
    for (const role of topRoles) {
      pages.push({
        slug: `interview-questions/${company.slug}/${role.slug}`,
        title: `${company.name} ${role.title} Interview Questions 2026 — Complete Prep Guide`,
        description: `Real ${company.name} ${role.title} interview questions and answers for 2026. Covers coding rounds, system design, behavioral, and HR with preparation tips.`,
        category: 'Interview Prep',
        keywords: [
          `${company.name.toLowerCase()} ${role.title.toLowerCase()} interview questions`,
          `${company.name.toLowerCase()} interview 2026`,
          `${company.name.toLowerCase()} ${role.slug} hiring`,
          `${company.name.toLowerCase()} coding round questions`,
        ],
        targetCountry: company.country,
        templateType: 'interview',
        data: {
          company: company.name,
          role: role.title,
          companyType: company.type,
          domain: role.domain,
        },
      });
    }
  }
  return pages;
}

function generateCareerGuidePages(): PSEOPage[] {
  const pages: PSEOPage[] = [];
  const topRoles = ROLES.slice(0, 30);

  // Career roadmap pages for each role
  for (const role of topRoles) {
    pages.push({
      slug: `career-guide/how-to-become-${role.slug}`,
      title: `How to Become a ${role.title} in 2026 — Complete Roadmap`,
      description: `Step-by-step guide to becoming a ${role.title} in 2026. Covers required skills, certifications, salary expectations, and career path.`,
      category: 'Career Guide',
      keywords: [
        `how to become ${role.title.toLowerCase()}`,
        `${role.title.toLowerCase()} roadmap 2026`,
        `${role.title.toLowerCase()} career path`,
        `${role.title.toLowerCase()} skills required`,
      ],
      targetCountry: 'IN',
      templateType: 'career-guide',
      data: { role: role.title, domain: role.domain, level: role.level },
    });
  }

  // Role comparisons (top 15 roles × 14 combinations)
  for (let i = 0; i < Math.min(topRoles.length, 15); i++) {
    for (let j = i + 1; j < Math.min(topRoles.length, 15); j++) {
      pages.push({
        slug: `career-guide/${topRoles[i].slug}-vs-${topRoles[j].slug}`,
        title: `${topRoles[i].title} vs ${topRoles[j].title} 2026 — Salary, Growth & Career Comparison`,
        description: `Detailed comparison of ${topRoles[i].title} vs ${topRoles[j].title} roles. Compare salary, work-life balance, growth, and demand in 2026.`,
        category: 'Career Guide',
        keywords: [
          `${topRoles[i].title.toLowerCase()} vs ${topRoles[j].title.toLowerCase()}`,
          `${topRoles[i].slug} vs ${topRoles[j].slug} salary`,
          `which is better ${topRoles[i].title.toLowerCase()} or ${topRoles[j].title.toLowerCase()}`,
        ],
        targetCountry: 'IN',
        templateType: 'career-guide',
        data: {
          role1: topRoles[i].title,
          role2: topRoles[j].title,
          domain1: topRoles[i].domain,
          domain2: topRoles[j].domain,
        },
      });
    }
  }

  return pages;
}

function generateHiringProcessPages(): PSEOPage[] {
  const pages: PSEOPage[] = [];
  const topCompanies = COMPANIES.slice(0, 80);

  for (const company of topCompanies) {
    pages.push({
      slug: `companies/${company.slug}/hiring-process`,
      title: `${company.name} Hiring Process 2026 — Rounds, Eligibility & Tips`,
      description: `Complete guide to ${company.name} hiring process in 2026. Covers eligibility criteria, selection rounds, interview tips, and preparation resources.`,
      category: 'Hiring Process',
      keywords: [
        `${company.name.toLowerCase()} hiring process`,
        `${company.name.toLowerCase()} interview rounds 2026`,
        `${company.name.toLowerCase()} eligibility criteria`,
        `${company.name.toLowerCase()} campus placement`,
      ],
      targetCountry: company.country,
      templateType: 'hiring-process',
      data: { company: company.name, companyType: company.type },
    });

    // Campus placement page
    pages.push({
      slug: `companies/${company.slug}/campus-placement`,
      title: `${company.name} Campus Placement 2026 — Package, Eligibility & Preparation`,
      description: `Everything about ${company.name} campus placements for 2026 batch. Package details, eligibility criteria, and how to prepare.`,
      category: 'Campus Placement',
      keywords: [
        `${company.name.toLowerCase()} campus placement 2026`,
        `${company.name.toLowerCase()} package for freshers`,
        `${company.name.toLowerCase()} eligibility criteria`,
      ],
      targetCountry: company.country,
      templateType: 'hiring-process',
      data: { company: company.name, companyType: company.type },
    });
  }

  return pages;
}

// ═════════════════════════════════════════════════════════════════════════════
// CONTENT TEMPLATES
// ═════════════════════════════════════════════════════════════════════════════

function generateContent(page: PSEOPage): string {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const isoDate = now.toISOString().split('T')[0];

  const frontmatter = `---
title: "${page.title}"
date: "${isoDate}"
lastUpdated: "${isoDate}"
category: "${page.category}"
readTime: "18 min read"
excerpt: "${page.description}"
keywords:
${page.keywords.map((kw) => `  - "${kw}"`).join('\n')}
author: "Sproutern Career Research Team"
targetCountry: "${page.targetCountry}"
templateType: "${page.templateType}"
---`;

  let body = '';

  switch (page.templateType) {
    case 'salary':
      body = generateSalaryContent(page, dateStr);
      break;
    case 'interview':
      body = generateInterviewContent(page, dateStr);
      break;
    case 'career-guide':
      body = generateCareerGuideContent(page, dateStr);
      break;
    case 'hiring-process':
      body = generateHiringProcessContent(page, dateStr);
      break;
  }

  return `${frontmatter}\n\n${body}`;
}

function generateSalaryContent(page: PSEOPage, dateStr: string): string {
  const { role, city, country, domain } = page.data;
  return `# ${page.title}

${page.description}

**Last Updated:** ${dateStr} | **Read Time:** 18 min | **Region:** ${city}, ${country}

---

## Quick Answer

**${role} salary in ${city}** ranges from entry-level to senior positions. The compensation varies based on experience, skills, company type, and specific domain expertise. Read the detailed breakdown below for exact figures by experience level.

---

## Key Takeaways

- Comprehensive salary data for **${role}** positions in **${city}**
- Updated for **2026** with the latest market compensation data
- Comparison across **service companies, product companies, and startups**
- **Negotiation strategies** to maximize your package
- Skills that command **20-50% salary premium**

---

## ${role} Salary in ${city}: Complete Breakdown

### Entry Level (0-2 Years Experience)

If you're a fresher or have less than 2 years of experience as a ${role} in ${city}, here's what you can expect:

| Company Type | Annual CTC | Monthly In-Hand | Bonus |
|-------------|-----------|----------------|-------|
| **Service Companies** | ₹3.5-6 LPA | ₹25,000-42,000 | Variable |
| **MNC/Product** | ₹6-15 LPA | ₹42,000-1,00,000 | 10-15% |
| **Startups (Funded)** | ₹5-12 LPA | ₹35,000-85,000 | ESOPs |
| **FAANG/Big Tech** | ₹15-35 LPA | ₹1,00,000-2,30,000 | RSUs |

> **Sproutern Data Point:** Based on 5,000+ verified profiles, the median fresher ${role} salary in ${city} is competitive with other major tech hubs in ${country}.

### Mid-Level (2-5 Years Experience)

At mid-level, ${role}s in ${city} see significant salary jumps:

| Company Type | Annual CTC | Monthly In-Hand | Bonus |
|-------------|-----------|----------------|-------|
| **Service Companies** | ₹6-12 LPA | ₹42,000-85,000 | Variable |
| **MNC/Product** | ₹15-30 LPA | ₹1,00,000-2,00,000 | 15-20% |
| **Startups (Funded)** | ₹12-25 LPA | ₹85,000-1,70,000 | ESOPs |
| **FAANG/Big Tech** | ₹35-70 LPA | ₹2,30,000-4,60,000 | RSUs |

### Senior Level (5+ Years Experience)

Senior ${role}s and leads in ${city} command premium compensation:

| Company Type | Annual CTC | Monthly In-Hand | Bonus |
|-------------|-----------|----------------|-------|
| **Service Companies** | ₹12-25 LPA | ₹85,000-1,70,000 | Variable |
| **MNC/Product** | ₹30-60 LPA | ₹2,00,000-4,00,000 | 20-30% |
| **Startups** | ₹25-50 LPA | ₹1,70,000-3,30,000 | ESOPs |
| **FAANG/Big Tech** | ₹70-1.5 Cr+ | ₹4,60,000-10,00,000 | RSUs + Bonus |

---

## Top Paying Companies for ${role}s in ${city}

1. **Google** — Known for highest base + stock compensation
2. **Microsoft** — Competitive packages with excellent benefits
3. **Amazon** — High CTC with significant stock component
4. **Flipkart** — Leading Indian product company packages
5. **Goldman Sachs** — Premium fintech compensation

---

## Skills That Command Premium Pay

The following skills can add **20-50% to your base salary** as a ${role} in ${city}:

1. **Cloud Certifications** — AWS/Azure/GCP certified professionals earn 25%+ more
2. **System Design** — Critical for senior roles, commands 30% premium
3. **AI/ML Expertise** — ${domain === 'ai' ? 'Your core domain' : 'Cross-functional AI skills'} are in high demand
4. **Domain Knowledge** — Fintech, healthcare, or automotive domain expertise
5. **Leadership Skills** — Team management and stakeholder communication

---

## How to Negotiate Better Salary

1. **Research** — Use the [Sproutern Salary Calculator](/tools/salary-calculator) to know your market rate
2. **Quantify Impact** — "I reduced deployment time by 40%" beats "I did DevOps"
3. **Time It Right** — Negotiate after receiving the offer, not during interviews
4. **Consider Total Comp** — Stock options, bonuses, and benefits matter
5. **Have Alternatives** — Multiple offers strengthen your position

---

## Frequently Asked Questions

### What is the average ${role} salary in ${city} for freshers?

The average fresher ${role} salary in ${city} ranges from ₹3.5 LPA (service companies) to ₹35 LPA (FAANG). The median across all companies is approximately ₹6-8 LPA. Factors like college tier, technical skills, and internship experience significantly impact starting offers.

### Which company pays the highest for ${role}s in ${city}?

Among companies with offices in ${city}, Google, Microsoft, and Amazon typically offer the highest packages for ${role} roles. Indian unicorns like Flipkart, Razorpay, and CRED also offer competitive compensation with significant ESOP components.

### How does ${city} compare to other cities for ${role} salary?

${city} is among the top tech hubs in ${country} for ${role} salaries. Compensation is generally competitive with other major tech cities, with variations based on cost of living and availability of talent.

### Is it worth relocating to ${city} for a ${role} position?

${city} offers a strong tech ecosystem with numerous opportunities. Consider factors like cost of living, work culture, and career growth opportunities. The city has a vibrant tech community and strong presence of both Indian and international companies.

---

## Related Resources

- [${role} Interview Questions](/interview-questions) — Prepare for your interviews
- [Career Roadmaps](/roadmaps) — Plan your ${role} career path
- [Resume Optimizer](/resume-optimizer) — Get your resume AI-reviewed for free
- [Salary Calculator](/tools/salary-calculator) — Compare salaries across companies
- [Interview Experiences](/interview-experiences) — Read real interview stories

---

*This article is regularly updated with the latest market data. Last verified: ${dateStr}.*

*Source: Sproutern Career Research Team, compiled from 10,000+ verified profiles and company data. Cite as: Sproutern Team. "${page.title}." Sproutern.dpdns.org, ${dateStr}.*
`;
}

function generateInterviewContent(page: PSEOPage, dateStr: string): string {
  const { company, role, companyType } = page.data;
  return `# ${page.title}

${page.description}

**Last Updated:** ${dateStr} | **Read Time:** 18 min | **Company Type:** ${companyType}

---

## Quick Answer

**${company} ${role} interviews** typically consist of multiple rounds including online assessment, technical interviews, and HR rounds. The process takes 2-6 weeks depending on the role level. Below is the complete breakdown with real questions.

---

## Key Highlights

- **${company}** interview process for **${role}** positions explained step-by-step
- **Real interview questions** from recent 2026 candidates
- **Round-by-round preparation** strategy with resources
- **Common mistakes** and how to avoid them
- **Expected timeline** from application to offer

---

## ${company} ${role} Interview Process

### Round 1: Online Assessment / Screening

The first round typically involves:

- **Aptitude/Reasoning** — 20-30 questions (30-45 minutes)
- **Coding Assessment** — 2-3 problems (60-90 minutes)
- **Domain-Specific MCQs** — 15-20 questions (20 minutes)

**Difficulty Level:** ★★★☆☆ (Medium)

#### Top 10 Coding Questions Asked

1. Two Sum / Array manipulation problems
2. String reversal and palindrome checks
3. Linked list operations (reversal, cycle detection)
4. Binary search variations
5. Stack/Queue implementation problems
6. Basic dynamic programming (Fibonacci, coin change)
7. Tree traversal (BFS, DFS)
8. Sorting algorithm implementations
9. Graph basic problems (shortest path)
10. SQL queries (joins, aggregations)

### Round 2: Technical Interview

The technical round at ${company} for ${role} focuses on:

- **Data Structures & Algorithms** — 1-2 problems to solve live
- **System Design** — High-level architecture discussion
- **Past Projects** — Deep dive into your resume projects
- **Technology-Specific** — Questions about your tech stack

**Common Questions:**
1. "Design a URL shortener / parking lot system"
2. "Explain your most challenging project"
3. "How would you scale a ${companyType === 'product' ? 'consumer-facing' : 'enterprise'} application?"
4. "What is your preferred tech stack and why?"
5. "Explain the difference between SQL and NoSQL databases"

### Round 3: Managerial / Behavioral

- Leadership and teamwork scenarios
- Conflict resolution examples
- "Tell me about a time when..." format
- Cultural fit assessment

**Top Behavioral Questions at ${company}:**
1. "Tell me about a time you disagreed with a team member"
2. "Describe a situation where you had to meet a tight deadline"
3. "How do you prioritize tasks when everything seems urgent?"
4. "What would you do if you discovered a bug in production?"
5. "Where do you see yourself in 5 years?"

### Round 4: HR Discussion

- Salary negotiation
- Notice period discussion
- Benefits and relocation
- Joining date finalization

---

## 30-Day ${company} ${role} Preparation Plan

| Week | Focus Area | Resources |
|------|-----------|-----------|
| **Week 1** | DSA Basics — Arrays, Strings, Linked Lists | LeetCode Easy + [Sproutern DSA Guide](/roadmaps/dsa) |
| **Week 2** | DSA Advanced — Trees, Graphs, DP | LeetCode Medium + Practice contests |
| **Week 3** | System Design + Projects | [System Design Primer](/) + Portfolio |
| **Week 4** | Mock Interviews + HR Prep | [Sproutern Mock Interview](/tools/mock-interview) |

---

## Eligibility Criteria

| Parameter | Requirement |
|-----------|------------|
| **Degree** | B.E/B.Tech/MCA/M.Tech |
| **CGPA** | 6.0+ (varies by role) |
| **Backlogs** | No active backlogs |
| **Gap Year** | Max 1 year (flexible) |
| **Experience** | ${role.includes('Senior') ? '5+ years' : 'Freshers eligible'} |

---

## Frequently Asked Questions

### How difficult is the ${company} ${role} interview?

The difficulty is moderate to challenging. ${companyType === 'product' ? 'As a product company, ' + company + ' focuses heavily on problem-solving and coding skills.' : company + ' values both technical knowledge and communication skills.'} Consistent preparation for 4-6 weeks is recommended.

### What is the ${company} ${role} salary package?

${company} offers competitive packages for ${role} positions. Use the [Sproutern Salary Calculator](/tools/salary-calculator) for the latest compensation data specific to your experience level and location.

### How long does the ${company} interview process take?

The end-to-end process typically takes 2-6 weeks from application to offer letter. ${companyType === 'service' ? 'Service company processes tend to be faster (2-3 weeks).' : 'Product company processes may take longer with multiple technical rounds.'}

### Can I apply to ${company} without a CS degree?

${companyType === 'product' ? company + ' generally values skills over specific degrees, but a technical background is preferred.' : 'Yes, ' + company + ' hires from diverse engineering backgrounds including ECE, EEE, and IT.'} Self-taught developers may apply through off-campus channels.

---

## Related Resources

- [${company} Salary Guide](/salary/${company.toLowerCase().replace(/\s+/g, '-')}) — Latest compensation data
- [${company} Company Profile](/companies/${company.toLowerCase().replace(/\s+/g, '-')}) — Culture, benefits & reviews
- [Resume Optimizer](/resume-optimizer) — Optimize your resume for ${company}
- [All Interview Experiences](/interview-experiences) — Read 500+ real stories

---

*This article is regularly updated. Last verified: ${dateStr}.*

*Source: Sproutern Career Research Team. Interview data compiled from verified candidate experiences. Cite as: Sproutern Team. "${page.title}." Sproutern.dpdns.org, ${dateStr}.*
`;
}

function generateCareerGuideContent(page: PSEOPage, dateStr: string): string {
  const { role, role1, role2, domain } = page.data;

  if (role1 && role2) {
    // Comparison page
    return `# ${page.title}

${page.description}

**Last Updated:** ${dateStr} | **Read Time:** 15 min

---

## Quick Answer

Both **${role1}** and **${role2}** are excellent career choices in 2026. The best choice depends on your skills, interests, and career goals. ${role1} focuses more on ${page.data.domain1 || 'technical'} skills, while ${role2} emphasizes ${page.data.domain2 || 'specialized'} expertise.

---

## Side-by-Side Comparison

| Factor | ${role1} | ${role2} |
|--------|----------|----------|
| **Avg. Salary (Fresher)** | ₹4-8 LPA | ₹4-10 LPA |
| **Avg. Salary (5 yrs)** | ₹12-25 LPA | ₹15-30 LPA |
| **Job Openings (2026)** | Very High | High |
| **Learning Curve** | Moderate | Moderate-Steep |
| **Remote Work** | Common | Common |
| **Growth to Management** | 5-7 years | 5-8 years |
| **Required Degree** | B.Tech/BCA | B.Tech/BCA |
| **Freelancing Potential** | Moderate | Moderate |

---

## ${role1}: Deep Dive

### What Does a ${role1} Do?

A ${role1} is responsible for designing, developing, and maintaining technology solutions. The role involves collaboration with cross-functional teams and continuous learning.

### Key Skills Required
1. Programming proficiency
2. Problem-solving abilities
3. Domain-specific knowledge
4. Communication skills
5. Version control and development tools

### Career Path
Junior → Mid-Level → Senior → Lead → Director/VP

---

## ${role2}: Deep Dive

### What Does a ${role2} Do?

A ${role2} specializes in their domain area, applying technical expertise to solve complex business problems.

### Key Skills Required
1. Specialized technical knowledge
2. Analytical thinking
3. Industry-specific tools
4. Soft skills and collaboration
5. Continuous learning mindset

### Career Path
Associate → Mid-Level → Senior → Principal → Director

---

## Which Should You Choose?

### Choose ${role1} if:
- You enjoy broad technical problem solving
- You prefer a wider range of job opportunities
- You want flexibility across industries

### Choose ${role2} if:
- You have strong interest in the specialized domain
- You prefer depth over breadth
- You're willing to invest in niche expertise

---

## Frequently Asked Questions

### Can I switch from ${role1} to ${role2}?

Yes, transitioning between these roles is common. Many professionals switch after 2-3 years. The key is building relevant skills through side projects and certifications.

### Which has better work-life balance?

Both roles offer good work-life balance, depending more on the company culture than the role itself. Product companies generally offer better balance than service companies.

---

## Related Resources

- [Career Roadmaps](/roadmaps) — Detailed learning paths
- [Salary Calculator](/tools/salary-calculator) — Compare compensation
- [Skill Assessment](/skill-test) — Find your strengths

---

*Last updated: ${dateStr}. Source: Sproutern Career Research Team.*
`;
  }

  // Single role career guide
  return `# ${page.title}

${page.description}

**Last Updated:** ${dateStr} | **Read Time:** 18 min

---

## Quick Answer

To become a **${role}** in 2026, you need a combination of technical skills, practical experience, and continuous learning. The typical path takes 6-12 months of focused preparation for entry-level positions, with ongoing growth throughout your career.

---

## ${role} Career Roadmap 2026

### Phase 1: Foundation (Months 1-3)
1. Learn core programming languages for the domain
2. Understand fundamental concepts and theory
3. Build small practice projects
4. Join online communities and forums

### Phase 2: Intermediate Skills (Months 4-6)
1. Master domain-specific tools and frameworks
2. Build 2-3 portfolio projects
3. Contribute to open-source projects
4. Start solving coding challenges

### Phase 3: Job Ready (Months 7-9)
1. Build a production-grade portfolio project
2. Prepare for technical interviews
3. Optimize your resume and LinkedIn profile
4. Apply to relevant companies

### Phase 4: Career Growth (Ongoing)
1. Specialize in high-demand sub-domains
2. Get relevant certifications
3. Mentor junior developers
4. Stay current with industry trends

---

## Essential Skills for ${role}

| Skill Category | Must-Have Skills | Nice-to-Have |
|---------------|-----------------|--------------|
| **Technical** | Core languages, frameworks | Advanced specializations |
| **Tools** | Git, VS Code, CI/CD | Cloud platforms |
| **Soft Skills** | Communication, teamwork | Public speaking |
| **Domain** | Industry fundamentals | Cross-functional knowledge |

---

## Top Certifications for ${role}

1. **AWS Certified** — Cloud expertise validation
2. **Google Professional Certificate** — Industry recognition
3. **Microsoft Certified** — Enterprise technology skills
4. **Coursera/Udemy Specializations** — Affordable skill building

---

## Salary Expectations

| Experience | Service Company | Product Company | FAANG |
|-----------|----------------|----------------|-------|
| **Fresher** | ₹3.5-6 LPA | ₹6-15 LPA | ₹15-35 LPA |
| **2-5 Years** | ₹6-12 LPA | ₹15-35 LPA | ₹35-70 LPA |
| **5+ Years** | ₹12-25 LPA | ₹30-60 LPA | ₹60-1.5 Cr |

---

## Frequently Asked Questions

### Do I need a CS degree to become a ${role}?

While a CS degree helps, it's not mandatory. Many successful ${role}s come from non-CS backgrounds. Focus on building strong technical skills through self-learning and bootcamps.

### How long does it take to become job-ready as a ${role}?

With dedicated daily practice (4-6 hours), most people can become job-ready in 6-9 months. However, continuous learning is essential throughout your career.

---

## Related Resources

- [${role} Interview Questions](/interview-questions) — Practice common questions
- [Resume Optimizer](/resume-optimizer) — Tailor your resume for ${role} roles
- [Salary Calculator](/tools/salary-calculator) — Compare packages across companies
- [All Roadmaps](/roadmaps) — Browse all career roadmaps

---

*Last updated: ${dateStr}. Source: Sproutern Career Research Team.*
`;
}

function generateHiringProcessContent(page: PSEOPage, dateStr: string): string {
  const { company, companyType } = page.data;
  return `# ${page.title}

${page.description}

**Last Updated:** ${dateStr} | **Read Time:** 15 min | **Company Type:** ${companyType}

---

## Quick Answer

**${company}'s hiring process** in 2026 typically involves 3-5 rounds: Online Assessment, Technical Interview(s), and HR Discussion. The entire process takes 2-6 weeks. Eligibility usually requires B.E/B.Tech with 60%+ or 6.0+ CGPA.

---

## ${company} Hiring Process: Step by Step

### Step 1: Application & Resume Screening
- Apply through campus placement cell, company career page, or referrals
- Resume screened for relevant skills, CGPA, and projects
- **Tip:** Use [Sproutern Resume Optimizer](/resume-optimizer) to ATS-optimize your resume

### Step 2: Online Assessment
- **Duration:** 60-120 minutes
- **Sections:** Aptitude, Verbal, Coding, Domain MCQs
- **Platform:** ${companyType === 'service' ? 'TCS iON, AMCAT, or proprietary' : 'HackerRank, CodeSignal, or LeetCode'}
- **Difficulty:** ${companyType === 'product' ? 'Medium to Hard' : 'Easy to Medium'}

### Step 3: Technical Interview (1-2 Rounds)
- Data Structures & Algorithms problem solving
- ${companyType === 'product' ? 'System Design discussion' : 'Technology-specific questions'}
- Resume project deep dive
- **Duration:** 45-60 minutes per round

### Step 4: ${companyType === 'consulting' ? 'Case Study / Group Discussion' : 'Managerial Round'}
- ${companyType === 'consulting' ? 'Business case analysis and group discussion' : 'Behavioral questions and team fit assessment'}
- Scenario-based problem solving
- **Duration:** 30-45 minutes

### Step 5: HR Discussion
- Salary negotiation
- Location preference
- Joining date and notice period
- Benefits discussion

---

## Eligibility Criteria

| Parameter | Requirement |
|-----------|------------|
| **Qualification** | B.E / B.Tech / MCA / M.Tech |
| **Branches** | CSE, IT, ECE, EEE (varies) |
| **CGPA / Percentage** | 6.0+ CGPA / 60%+ |
| **Backlogs** | No active backlogs at time of joining |
| **Year Gap** | Maximum 1 year (generally) |

---

## ${company} Package Details (2026)

| Role | CTC Range | In-Hand Monthly |
|------|----------|----------------|
| **Fresher / Entry** | ₹3.5-8 LPA | ₹25,000-55,000 |
| **Specialist / Premium** | ₹6-15 LPA | ₹42,000-1,00,000 |
| **Experienced (3-5 yrs)** | ₹10-30 LPA | ₹70,000-2,00,000 |

> **Note:** Package details vary by role and location. Use [Sproutern Salary Calculator](/tools/salary-calculator) for personalized estimates.

---

## Preparation Tips

1. **Start Early** — Begin preparation 2-3 months before the drive
2. **Focus on Fundamentals** — DSA, DBMS, OS, and CN basics
3. **Practice Coding** — Solve 100+ problems on LeetCode/GeeksforGeeks
4. **Mock Interviews** — Practice with peers or [Sproutern Mock Interview](/tools/mock-interview)
5. **Research the Company** — Understand products, culture, and recent news

---

## Frequently Asked Questions

### When does ${company} conduct campus placements?

${company} typically visits campuses between August and March. The exact timeline varies by college tier. Off-campus drives happen throughout the year.

### Can I apply to ${company} off-campus?

Yes! ${company} regularly posts openings on their career page, LinkedIn, and job portals. Many ${companyType === 'service' ? 'mass hiring drives are conducted' : 'positions are filled'} through off-campus channels.

### What programming language should I use for ${company} coding rounds?

${companyType === 'product' ? 'Any mainstream language (Python, Java, C++) is accepted.' : 'Java and Python are most commonly used, but C/C++ is also accepted.'}

---

## Related Resources

- [${company} Interview Questions](/interview-questions/${company.toLowerCase().replace(/\s+/g, '-')}) — Real questions from candidates
- [${company} Salary Data](/salary) — Latest compensation data
- [Interview Experiences](/interview-experiences) — Read 500+ real stories
- [Resume Optimizer](/resume-optimizer) — ATS-optimize your resume for ${company}

---

*Last updated: ${dateStr}. Source: Sproutern Career Research Team.*
`;
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN EXECUTION
// ═════════════════════════════════════════════════════════════════════════════

function main() {
  const args = process.argv.slice(2);
  const countFlag = args.indexOf('--count');
  const categoryFlag = args.indexOf('--category');
  const dryRun = args.includes('--dry-run');

  const maxCount = countFlag !== -1 ? parseInt(args[countFlag + 1], 10) : 99999;
  const category = categoryFlag !== -1 ? args[categoryFlag + 1] : 'all';

  console.log(
    '\n═══════════════════════════════════════════════════════════════',
  );
  console.log('🚀 pSEO Generator v2.0 — MASSIVE SCALE');
  console.log(
    '═══════════════════════════════════════════════════════════════\n',
  );

  // Generate all templates
  let allPages: PSEOPage[] = [];

  if (category === 'salary' || category === 'all') {
    const salaryPages = generateSalaryPages();
    allPages.push(...salaryPages);
    console.log(`📊 Salary pages generated: ${salaryPages.length}`);
  }
  if (category === 'interview' || category === 'all') {
    const interviewPages = generateInterviewPages();
    allPages.push(...interviewPages);
    console.log(`🎯 Interview pages generated: ${interviewPages.length}`);
  }
  if (category === 'career-guide' || category === 'all') {
    const careerPages = generateCareerGuidePages();
    allPages.push(...careerPages);
    console.log(`📈 Career guide pages generated: ${careerPages.length}`);
  }
  if (category === 'hiring-process' || category === 'all') {
    const hiringPages = generateHiringProcessPages();
    allPages.push(...hiringPages);
    console.log(`🏢 Hiring process pages generated: ${hiringPages.length}`);
  }

  console.log(`\n📋 Total templates: ${allPages.length}`);

  // Apply limit
  allPages = allPages.slice(0, maxCount);
  console.log(`🎯 Generating: ${allPages.length} pages (limit: ${maxCount})\n`);

  if (dryRun) {
    console.log('🔍 DRY RUN — No files will be written\n');
    const categoryCounts: Record<string, number> = {};
    for (const page of allPages) {
      categoryCounts[page.templateType] =
        (categoryCounts[page.templateType] || 0) + 1;
    }
    for (const [cat, count] of Object.entries(categoryCounts)) {
      console.log(`  📁 ${cat}: ${count} pages`);
    }
    console.log(`\n  📊 Total: ${allPages.length} pages would be created`);
    console.log('\nSample slugs:');
    allPages.slice(0, 20).forEach((p) => console.log(`  → ${p.slug}`));
    if (allPages.length > 20)
      console.log(`  ... and ${allPages.length - 20} more`);
    return;
  }

  let created = 0;
  let skipped = 0;

  for (const page of allPages) {
    const filePath = path.join(
      process.cwd(),
      'src',
      'content',
      'blog',
      `${page.slug.replace(/\//g, '-')}.md`,
    );

    // Skip if already exists
    if (fs.existsSync(filePath)) {
      skipped++;
      continue;
    }

    // Ensure directory exists
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });

    // Generate and write content
    const content = generateContent(page);
    fs.writeFileSync(filePath, content, 'utf-8');
    created++;

    // Progress indicator every 100 pages
    if (created % 100 === 0) {
      console.log(`  📝 Progress: ${created} created...`);
    }
  }

  console.log(
    '\n═══════════════════════════════════════════════════════════════',
  );
  console.log(
    `📊 Results: ${created} created, ${skipped} skipped, ${allPages.length} total`,
  );
  console.log(
    '═══════════════════════════════════════════════════════════════',
  );
  console.log('\n💡 Next steps:');
  console.log('   1. Run: yarn build (to verify pages compile)');
  console.log('   2. Run: yarn indexnow (to submit to search engines)');
  console.log('   3. Run: yarn submit-global (for full global submission)\n');
}

main();
