/**
 * Breadcrumb Generator for SEO
 * Automatically generates breadcrumb schema and component data from URL paths
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

export interface BreadcrumbListSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

// Path to human-readable name mappings
const pathNameMap: Record<string, string> = {
  // Main sections
  internships: 'Internships',
  blog: 'Blog',
  resources: 'Resources',
  tools: 'Tools',
  companies: 'Companies',
  countries: 'Countries',
  'interview-experiences': 'Interview Experiences',

  // Educational sections
  school: 'School Students',
  college: 'College Students',
  freshers: 'Fresh Graduates',

  // Company pages
  tcs: 'TCS',
  infosys: 'Infosys',
  wipro: 'Wipro',
  'interview-questions': 'Interview Questions',
  salary: 'Salary Information',

  // Resources
  'resume-templates': 'Resume Templates',
  'cover-letters': 'Cover Letter Guides',
  'interview-cheatsheet': 'Interview Cheat Sheet',
  'aptitude-formulas': 'Aptitude Formulas',
  'career-planning': 'Career Planning',
  'interview-prep': 'Interview Preparation',
  'skill-development': 'Skill Development',
  networking: 'Networking Tips',
  'industry-insights': 'Industry Insights',

  // Tools
  'cgpa-converter': 'CGPA Converter',
  'salary-calculator': 'Salary Calculator',
  'resume-score-checker': 'Resume Score Checker',
  'emi-calculator': 'EMI Calculator',
  'cover-letter-generator': 'Cover Letter Generator',
  'career-roadmap': 'Career Roadmap',
  'typing-test': 'Typing Test',
  'aptitude-test': 'Aptitude Test',
  'visa-timeline': 'Visa Timeline Calculator',
  'scholarship-checker': 'Scholarship Checker',
  'sop-outliner': 'SOP Outliner',
  'cold-email-generator': 'Cold Email Generator',
  'gpa-converter': 'GPA Converter',
  'application-tracker': 'Application Tracker',
  'study-planner': 'Study Planner',

  // Countries
  usa: 'United States',
  uk: 'United Kingdom',
  canada: 'Canada',
  germany: 'Germany',
  australia: 'Australia',
  france: 'France',
  ireland: 'Ireland',
  netherlands: 'Netherlands',
  singapore: 'Singapore',
  japan: 'Japan',

  // School guides
  'after-10th-guide': 'After 10th Career Guide',
  'after-12th-guide': 'After 12th Career Guide',
  'board-exam-tips': 'Board Exam Tips',
  'competitive-exams': 'Competitive Exams',
  'stream-selection': 'Stream Selection Guide',
  'study-abroad': 'Study Abroad Guide',

  // College guides
  'first-year-guide': 'First Year Guide',
  'semester-planner': 'Semester Planner',
  extracurriculars: 'Extracurricular Activities',
  comparison: 'College Comparison',

  // Freshers guides
  'first-job-guide': 'First Job Guide',
  'salary-negotiation': 'Salary Negotiation',
  'bond-clauses': 'Bond Clauses',
  'notice-period': 'Notice Period Guide',
  'probation-tips': 'Probation Period Tips',
  relocation: 'Relocation Guide',

  // Other
  about: 'About Us',
  contact: 'Contact',
  faq: 'FAQ',
  testimonials: 'Testimonials',
  founder: 'Founder',
  methodology: 'Methodology',
  'privacy-policy': 'Privacy Policy',
  'terms-and-conditions': 'Terms and Conditions',
  disclaimer: 'Disclaimer',
  'cookie-policy': 'Cookie Policy',
  scholarships: 'Scholarships',
  roadmaps: 'Career Roadmaps',
  'off-campus-drives': 'Off-Campus Drives',
  'career-switch': 'Career Switch Guide',
  'layoff-guide': 'Layoff Survival Guide',
  'success-stories': 'Success Stories',
  'editorial-guidelines': 'Editorial Guidelines',
  'mental-health': 'Mental Health Resources',
};

/**
 * Converts URL slug to human-readable name
 */
function slugToName(slug: string): string {
  // Check if we have a custom mapping
  if (pathNameMap[slug]) {
    return pathNameMap[slug];
  }

  // Convert kebab-case or space-separated to Title Case
  return slug
    .split(/[-\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Generate breadcrumb items from pathname
 */
export function generateBreadcrumbs(
  pathname: string,
  baseUrl: string = 'https://www.sproutern.com',
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [];

  // Always include home
  breadcrumbs.push({
    name: 'Home',
    url: baseUrl,
    position: 1,
  });

  // Split pathname and filter empty strings
  const pathParts = pathname.split('/').filter(Boolean);

  // Build breadcrumbs from path parts
  pathParts.forEach((part, index) => {
    const url = `${baseUrl}/${pathParts.slice(0, index + 1).join('/')}`;
    const name = slugToName(decodeURIComponent(part));

    breadcrumbs.push({
      name,
      url,
      position: index + 2,
    });
  });

  return breadcrumbs;
}

/**
 * Generate BreadcrumbList schema for SEO
 */
export function generateBreadcrumbSchema(
  pathname: string,
  baseUrl: string = 'https://www.sproutern.com',
): BreadcrumbListSchema {
  const breadcrumbs = generateBreadcrumbs(pathname, baseUrl);

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate breadcrumb JSON-LD script tag
 */
export function generateBreadcrumbJsonLd(
  pathname: string,
  baseUrl?: string,
): string {
  const schema = generateBreadcrumbSchema(pathname, baseUrl);
  return JSON.stringify(schema);
}
