/**
 * Internal Linking Hub Component
 * Provides strategic internal links across the site
 * Part of SEO Traffic Growth Strategy
 */

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Wrench,
  BookOpen,
  GraduationCap,
  Briefcase,
  Globe,
  Star,
  TrendingUp,
  Code,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LinkItem {
  title: string;
  url: string;
  description?: string;
  badge?: string;
  hot?: boolean;
}

export interface LinkCategory {
  title: string;
  icon: React.ElementType;
  links: LinkItem[];
}

// Strategic link categories for maximum SEO impact
const strategicLinks: LinkCategory[] = [
  {
    title: 'FAANG Interviews',
    icon: Star,
    links: [
      {
        title: 'Google Interview Guide',
        url: '/companies/google',
        badge: '₹25L-3Cr+',
        hot: true,
      },
      {
        title: 'Amazon Interview Guide',
        url: '/companies/amazon',
        badge: 'LP Focus',
        hot: true,
      },
      {
        title: 'Apple Interview Guide',
        url: '/companies/apple',
        badge: 'ICT Levels',
      },
      {
        title: 'Netflix Interview Guide',
        url: '/companies/netflix',
        badge: 'All Cash',
        hot: true,
      },
      {
        title: 'Meta Interview Guide',
        url: '/companies/meta',
        badge: 'E-Levels',
        hot: true,
      },
      {
        title: 'Microsoft Interview Guide',
        url: '/companies/microsoft',
        badge: 'Levels',
      },
      {
        title: 'Uber Interview Guide',
        url: '/companies/uber',
        badge: 'L-Levels',
      },
      {
        title: 'Flipkart Interview Guide',
        url: '/companies/flipkart',
        badge: 'Machine Coding',
      },
    ],
  },
  {
    title: 'Indian IT Companies',
    icon: Building2,
    links: [
      { title: 'TCS Careers', url: '/companies/tcs', badge: 'NQT' },
      { title: 'Infosys Careers', url: '/companies/infosys' },
      { title: 'Wipro Careers', url: '/companies/wipro' },
      {
        title: 'Cognizant Careers',
        url: '/companies/cognizant',
        badge: 'GenC',
      },
      { title: 'Accenture Careers', url: '/companies/accenture' },
    ],
  },
  {
    title: 'Career Tools',
    icon: Wrench,
    links: [
      { title: 'CGPA to Percentage', url: '/tools/cgpa-converter', hot: true },
      {
        title: 'Resume Score Checker',
        url: '/tools/resume-score-checker',
        hot: true,
      },
      { title: 'Salary Calculator', url: '/tools/salary-calculator' },
      { title: 'Typing Speed Test', url: '/tools/typing-test' },
      { title: 'Career Roadmap', url: '/tools/career-roadmap' },
    ],
  },
  {
    title: 'Interview Prep',
    icon: Code,
    links: [
      { title: 'DSA Practice Quiz', url: '/tools/dsa-quiz' },
      { title: 'Aptitude Test', url: '/tools/aptitude-test' },
      { title: 'Mock Interview', url: '/tools/mock-interview' },
      { title: 'Coding Practice', url: '/tools/coding-practice' },
      { title: 'System Design Guide', url: '/resources/system-design' },
    ],
  },
  {
    title: 'Study Abroad',
    icon: Globe,
    links: [
      { title: 'Study in USA', url: '/countries/usa', hot: true },
      { title: 'Study in UK', url: '/countries/uk' },
      { title: 'Study in Canada', url: '/countries/canada' },
      { title: 'Study in Germany', url: '/countries/germany' },
      { title: 'Study in Australia', url: '/countries/australia' },
    ],
  },
  {
    title: 'Career Resources',
    icon: GraduationCap,
    links: [
      { title: 'After 10th Guide', url: '/school/after-10th-guide' },
      { title: 'After 12th Guide', url: '/school/after-12th-guide' },
      { title: 'First Job Guide', url: '/freshers/first-job-guide' },
      { title: 'Resume Templates', url: '/resources/resume-templates' },
      {
        title: 'Cover Letter Guide',
        url: '/blog/write-effective-cover-letter',
      },
    ],
  },
];

// High-value pages for SEO juice distribution
const pillarPages: LinkItem[] = [
  {
    title: 'All Companies',
    url: '/companies',
    description: '20+ company interview guides',
  },
  { title: 'All Tools', url: '/tools', description: '80+ free career tools' },
  { title: 'Blog', url: '/blog', description: '200+ career articles' },
  {
    title: 'Scholarships',
    url: '/scholarships',
    description: '60+ opportunities',
  },
  {
    title: 'Internships',
    url: '/internships',
    description: 'Find your dream internship',
  },
];

interface InternalLinkingHubProps {
  /** Show only specific categories */
  categories?: string[];
  /** Maximum links per category */
  maxLinksPerCategory?: number;
  /** Layout variant */
  variant?: 'full' | 'compact' | 'sidebar' | 'footer';
  /** Custom class name */
  className?: string;
  /** Title override */
  title?: string;
  /** Current page URL to exclude */
  currentUrl?: string;
}

/**
 * Full-featured internal linking hub for maximum SEO impact
 */
export function InternalLinkingHub({
  categories,
  maxLinksPerCategory = 5,
  variant = 'full',
  className = '',
  title = 'Explore More Resources',
  currentUrl = '',
}: InternalLinkingHubProps) {
  const filteredCategories = categories
    ? strategicLinks.filter((cat) =>
        categories.some((c) => c.toLowerCase() === cat.title.toLowerCase()),
      )
    : strategicLinks;

  // Compact variant - single row
  if (variant === 'compact') {
    const allLinks = filteredCategories.flatMap((cat) => cat.links).slice(0, 8);
    return (
      <div className={cn('rounded-lg border bg-muted/30 p-4', className)}>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {allLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="group inline-flex items-center gap-1 rounded-full bg-background px-3 py-1.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {link.title}
              {link.hot && (
                <span className="text-orange-500 group-hover:text-inherit">
                  🔥
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Sidebar variant - vertical list
  if (variant === 'sidebar') {
    return (
      <aside className={cn('rounded-lg border bg-card p-4', className)}>
        <h3 className="mb-4 font-bold">{title}</h3>
        <div className="space-y-4">
          {filteredCategories.slice(0, 3).map((category) => (
            <div key={category.title}>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <category.icon className="h-4 w-4" />
                {category.title}
              </div>
              <ul className="space-y-1">
                {category.links.slice(0, maxLinksPerCategory).map((link) => (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      className="group flex items-center text-sm transition-colors hover:text-primary"
                    >
                      <ArrowRight className="mr-2 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="line-clamp-1">{link.title}</span>
                      {link.hot && <span className="ml-1">🔥</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  // Footer variant - multi-column
  if (variant === 'footer') {
    return (
      <div
        className={cn('grid gap-8 md:grid-cols-3 lg:grid-cols-6', className)}
      >
        {filteredCategories.map((category) => (
          <div key={category.title}>
            <h4 className="mb-3 flex items-center gap-2 font-semibold">
              <category.icon className="h-4 w-4" />
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.links.slice(0, maxLinksPerCategory).map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // Full variant - cards with descriptions
  return (
    <section className={cn('py-12', className)}>
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>

      {/* Pillar Pages */}
      <div className="mb-8 grid gap-4 md:grid-cols-5">
        {pillarPages.map((page) => (
          <Link
            key={page.url}
            href={page.url}
            className="group rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
          >
            <h3 className="font-semibold group-hover:text-primary">
              {page.title}
            </h3>
            <p className="text-sm text-muted-foreground">{page.description}</p>
          </Link>
        ))}
      </div>

      {/* Category Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border bg-card p-4"
          >
            <h3 className="mb-4 flex items-center gap-2 font-bold">
              <category.icon className="h-5 w-5 text-primary" />
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.links.slice(0, maxLinksPerCategory).map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="group flex items-center justify-between text-sm transition-colors hover:text-primary"
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      {link.title}
                      {link.hot && <span>🔥</span>}
                    </span>
                    {link.badge && (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Quick links component for inline use
 */
export function QuickLinks({
  links,
  title,
  className = '',
}: {
  links: LinkItem[];
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn('rounded-lg border bg-muted/30 p-4', className)}>
      {title && (
        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
          {title}
        </h4>
      )}
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="inline-flex items-center gap-1 rounded-full bg-background px-3 py-1.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {link.title}
            <ArrowRight className="h-3 w-3" />
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Company comparison links - strategic SEO linking
 */
export function CompanyComparisonLinks({
  currentCompany,
  className = '',
}: {
  currentCompany: string;
  className?: string;
}) {
  const companies = [
    { name: 'Google', url: '/companies/google' },
    { name: 'Amazon', url: '/companies/amazon' },
    { name: 'Apple', url: '/companies/apple' },
    { name: 'Netflix', url: '/companies/netflix' },
    { name: 'Microsoft', url: '/companies/microsoft' },
    { name: 'Meta', url: '/companies/meta' },
    { name: 'Uber', url: '/companies/uber' },
    { name: 'Flipkart', url: '/companies/flipkart' },
    { name: 'TCS', url: '/companies/tcs' },
    { name: 'Infosys', url: '/companies/infosys' },
  ].filter((c) => c.name.toLowerCase() !== currentCompany.toLowerCase());

  return (
    <div className={cn('rounded-lg border bg-muted/30 p-4', className)}>
      <h4 className="mb-3 font-semibold">Compare with Other Companies</h4>
      <div className="flex flex-wrap gap-2">
        {companies.slice(0, 6).map((company) => (
          <Link
            key={company.url}
            href={company.url}
            className="inline-flex items-center gap-1 rounded-full bg-background px-3 py-1.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Building2 className="h-3 w-3" />
            {company.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Contextual tool links based on page type
 */
export function ContextualToolLinks({
  context,
  className = '',
}: {
  context: 'interview' | 'career' | 'academic' | 'general';
  className?: string;
}) {
  const toolsByContext: Record<string, LinkItem[]> = {
    interview: [
      { title: 'Mock Interview', url: '/tools/mock-interview' },
      { title: 'DSA Quiz', url: '/tools/dsa-quiz' },
      { title: 'Resume Checker', url: '/tools/resume-score-checker' },
      { title: 'Aptitude Test', url: '/tools/aptitude-test' },
    ],
    career: [
      { title: 'Salary Calculator', url: '/tools/salary-calculator' },
      { title: 'Career Roadmap', url: '/tools/career-roadmap' },
      { title: 'Resume Builder', url: '/tools/resume-builder' },
      { title: 'Skills Gap Analyzer', url: '/tools/skills-gap' },
    ],
    academic: [
      { title: 'CGPA Converter', url: '/tools/cgpa-converter' },
      { title: 'GPA Calculator', url: '/tools/gpa-calculator' },
      { title: 'Percentage Calculator', url: '/tools/percentage-calculator' },
      { title: 'Grade Calculator', url: '/tools/grade-calculator' },
    ],
    general: [
      { title: 'CGPA Converter', url: '/tools/cgpa-converter' },
      { title: 'Resume Checker', url: '/tools/resume-score-checker' },
      { title: 'Typing Test', url: '/tools/typing-test' },
      { title: 'Salary Calculator', url: '/tools/salary-calculator' },
    ],
  };

  const tools = toolsByContext[context] || toolsByContext.general;

  return (
    <div
      className={cn(
        'rounded-lg border bg-gradient-to-r from-primary/5 to-primary/10 p-4',
        className,
      )}
    >
      <h4 className="mb-3 flex items-center gap-2 font-semibold">
        <Wrench className="h-4 w-4 text-primary" />
        Helpful Tools
      </h4>
      <div className="grid grid-cols-2 gap-2">
        {tools.map((tool) => (
          <Link
            key={tool.url}
            href={tool.url}
            className="flex items-center gap-2 rounded-lg bg-background p-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowRight className="h-3 w-3" />
            {tool.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Blog category internal links
 */
export function BlogCategoryLinks({
  currentCategory,
  className = '',
}: {
  currentCategory?: string;
  className?: string;
}) {
  const categories = [
    { name: 'Career Guidance', url: '/blog?category=career-guidance' },
    { name: 'Interview Prep', url: '/blog?category=interview-prep' },
    { name: 'Resume Tips', url: '/blog?category=resume' },
    { name: 'Salary Insights', url: '/blog?category=salary' },
    { name: 'Study Abroad', url: '/blog?category=study-abroad' },
    { name: 'Freshers', url: '/blog?category=freshers' },
  ].filter((c) => c.name !== currentCategory);

  return (
    <div className={cn('rounded-lg border bg-card p-4', className)}>
      <h4 className="mb-3 flex items-center gap-2 font-semibold">
        <BookOpen className="h-4 w-4 text-primary" />
        Browse by Category
      </h4>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Link
            key={cat.url}
            href={cat.url}
            className="rounded-full bg-muted px-3 py-1 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Trending pages widget for high-value pages
 */
export function TrendingPages({ className = '' }: { className?: string }) {
  const trendingPages = [
    { title: 'Google Interview 2026', url: '/companies/google', views: '15K' },
    { title: 'Meta E-Levels Explained', url: '/companies/meta', views: '12K' },
    {
      title: 'Flipkart Machine Coding',
      url: '/companies/flipkart',
      views: '10K',
    },
    { title: 'TCS NQT Preparation', url: '/companies/tcs', views: '8K' },
    { title: 'CGPA Calculator', url: '/tools/cgpa-converter', views: '20K' },
  ];

  return (
    <div className={cn('rounded-lg border bg-card p-4', className)}>
      <h4 className="mb-3 flex items-center gap-2 font-semibold">
        <TrendingUp className="h-4 w-4 text-primary" />
        Trending Now
      </h4>
      <ul className="space-y-2">
        {trendingPages.map((page, i) => (
          <li key={page.url}>
            <Link
              href={page.url}
              className="flex items-center justify-between text-sm transition-colors hover:text-primary"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs">
                  {i + 1}
                </span>
                {page.title}
              </span>
              <span className="text-xs text-muted-foreground">
                {page.views} views
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InternalLinkingHub;
