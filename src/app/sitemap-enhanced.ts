/**
 * Enhanced Sitemap Generation with Hreflang Support
 * Includes all page types with international SEO support
 */

import { MetadataRoute } from 'next';
import { adminDb } from '@/lib/firebase-admin';
import fs from 'fs';
import path from 'path';
import interviewExperiencesData from '@/data/interview-experiences.json';
import { blogPosts } from '@/lib/blog-data';
import { generateHreflangMetadata } from '@/lib/seo/hreflang-generator';
import { getMarkdownBlogSlugs } from '@/lib/markdown-utils';
import { toCompanySlug } from '@/lib/company-slug';
import { SITE_URL } from '@/lib/site-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  // Helper function to add hreflang to sitemap entries
  const addHreflang = (url: string, entry: any) => ({
    ...entry,
    alternates: generateHreflangMetadata(url.replace(baseUrl, ''), baseUrl),
  });

  // 1. Static Routes with Hreflang
  const staticRoutes = [
    { path: '/', priority: 1.0, changeFreq: 'daily' as const },
    {
      path: '/interview-experiences',
      priority: 0.9,
      changeFreq: 'daily' as const,
    },
    { path: '/about', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/faq', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/testimonials', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/founder', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/internships', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/blog', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/resources', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/tools', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/scholarships', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/school', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/college', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/freshers', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/countries', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/companies', priority: 0.8, changeFreq: 'weekly' as const },

    // Educational pages
    {
      path: '/school/after-10th-guide',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/school/after-12th-guide',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/school/board-exam-tips',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/school/competitive-exams',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/school/stream-selection',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/school/study-abroad',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },

    {
      path: '/college/first-year-guide',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/college/semester-planner',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/college/extracurriculars',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/college/comparison',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },

    {
      path: '/freshers/first-job-guide',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/freshers/salary-negotiation',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/freshers/bond-clauses',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/freshers/notice-period',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/freshers/probation-tips',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/freshers/relocation',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },

    // Country guides
    { path: '/countries/usa', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/countries/uk', priority: 0.8, changeFreq: 'monthly' as const },
    {
      path: '/countries/canada',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/countries/germany',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/countries/australia',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/countries/france',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/countries/ireland',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/countries/netherlands',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/countries/singapore',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    { path: '/countries/japan', priority: 0.8, changeFreq: 'monthly' as const },

    // Tools
    {
      path: '/tools/cgpa-converter',
      priority: 0.9,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/gpa-converter',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/salary-calculator',
      priority: 0.9,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/resume-score-checker',
      priority: 0.9,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/cover-letter-generator',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/application-tracker',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/visa-timeline',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/scholarship-checker',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/sop-outliner',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/cold-email-generator',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/study-planner',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/tools/typing-test',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },

    // Resources
    {
      path: '/resources/resume-guide',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/resume-templates',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/cover-letters',
      priority: 0.7,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/email-templates',
      priority: 0.7,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/interview-cheatsheet',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/aptitude-formulas',
      priority: 0.7,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/career-planning',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/interview-prep',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/skill-development',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/networking',
      priority: 0.7,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/linkedin-optimization',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/salary-negotiation',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/github-profile',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/ats-resume-keywords',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/portfolio-templates',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/downloads',
      priority: 0.7,
      changeFreq: 'monthly' as const,
    },
    {
      path: '/resources/industry-insights',
      priority: 0.7,
      changeFreq: 'monthly' as const,
    },

    // Legal & Trust
    { path: '/privacy-policy', priority: 0.5, changeFreq: 'yearly' as const },
    {
      path: '/terms-and-conditions',
      priority: 0.5,
      changeFreq: 'yearly' as const,
    },
    { path: '/disclaimer', priority: 0.4, changeFreq: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.4, changeFreq: 'yearly' as const },
    { path: '/methodology', priority: 0.8, changeFreq: 'monthly' as const },
    {
      path: '/editorial-guidelines',
      priority: 0.7,
      changeFreq: 'monthly' as const,
    },
    { path: '/success-stories', priority: 0.8, changeFreq: 'weekly' as const },
  ];

  const staticUrls = staticRoutes.map((route) => {
    const entry = {
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFreq,
      priority: route.priority,
    };
    return addHreflang(entry.url, entry);
  });

  // 2. Dynamic Blog Posts
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
  const blogSlugsFromFs = fs.readdirSync(blogDir).filter((file) => {
    const stat = fs.statSync(path.join(blogDir, file));
    return stat.isDirectory() && !file.startsWith('[') && file !== 'category';
  });

  const blogSlugsFromMarkdown = getMarkdownBlogSlugs();

  const blogSlugsFromData = blogPosts.map((post) => post.slug);
  const allBlogSlugs = [
    ...new Set([
      ...blogSlugsFromData,
      ...blogSlugsFromFs,
      ...blogSlugsFromMarkdown,
    ]),
  ];

  const blogUrls = allBlogSlugs.map((slug) => {
    const entry = {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
    return addHreflang(entry.url, entry);
  });

  // 3. Dynamic Tools Pages
  const toolsDir = path.join(process.cwd(), 'src', 'app', 'tools');
  const toolSlugs = fs.readdirSync(toolsDir).filter((file) => {
    const stat = fs.statSync(path.join(toolsDir, file));
    return stat.isDirectory() && !file.startsWith('[') && !file.startsWith('(');
  });

  const toolUrls = toolSlugs.map((slug) => {
    const entry = {
      url: `${baseUrl}/tools/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
    return addHreflang(entry.url, entry);
  });

  // 4. Dynamic Internship Pages
  let internshipUrls: MetadataRoute.Sitemap = [];
  try {
    if (adminDb) {
      const internshipsSnapshot = await adminDb.collection('internships').get();
      internshipUrls = internshipsSnapshot.docs.map((doc) => {
        const data = doc.data();
        const entry = {
          url: `${baseUrl}/internships/${doc.id}`,
          lastModified: data.postedAt?.toDate() || new Date(),
          changeFrequency: 'daily' as const,
          priority: 0.9,
        };
        return addHreflang(entry.url, entry);
      });
    }
  } catch (error) {
    console.error('Error fetching internships for sitemap:', error);
  }

  // 5. Dynamic Interview Experience Pages
  let interviewUrls: MetadataRoute.Sitemap = [];
  try {
    const experiences = interviewExperiencesData as any[];
    const companies = [...new Set(experiences.map((exp) => exp.company))];

    const companyUrls = companies.map((company) => {
      const entry = {
        url: `${baseUrl}/interview-experiences/${toCompanySlug(company as string)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      };
      return addHreflang(entry.url, entry);
    });

    const studentUrls = experiences.map((exp) => {
      const entry = {
        url: `${baseUrl}/interview-experiences/${toCompanySlug(exp.company)}/${exp.id}`,
        lastModified: new Date(exp.date || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
      return addHreflang(entry.url, entry);
    });

    interviewUrls = [...companyUrls, ...studentUrls];
  } catch (error) {
    console.error('Error generating interview experience sitemap:', error);
  }

  return [
    ...staticUrls,
    ...blogUrls,
    ...toolUrls,
    ...internshipUrls,
    ...interviewUrls,
  ];
}
