import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { adminDb } from '@/lib/firebase-admin';
import interviewExperiencesData from '@/data/interview-experiences.json';
import { getMarkdownBlogSlugs } from '@/lib/markdown-utils';
import { shouldIndexPath } from '@/lib/seo/indexing-policy';
import { toCompanySlug } from '@/lib/company-slug';
import { SITE_URL } from '@/lib/site-config';

type SitemapEntry = MetadataRoute.Sitemap[number];
type ChangeFrequency = NonNullable<SitemapEntry['changeFrequency']>;

function getFileLastModified(filePath: string): Date | undefined {
  try {
    return fs.statSync(filePath).mtime;
  } catch {
    return undefined;
  }
}

function dedupeSitemapEntries(
  entries: MetadataRoute.Sitemap,
): MetadataRoute.Sitemap {
  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const entry of entries) {
    try {
      const pathname = new URL(entry.url).pathname;
      if (!shouldIndexPath(pathname)) {
        continue;
      }
    } catch {
      continue;
    }

    const existing = byUrl.get(entry.url);
    if (!existing) {
      byUrl.set(entry.url, entry);
      continue;
    }

    const existingLastModified = existing.lastModified
      ? new Date(existing.lastModified).getTime()
      : 0;
    const nextLastModified = entry.lastModified
      ? new Date(entry.lastModified).getTime()
      : 0;

    if (nextLastModified >= existingLastModified) {
      byUrl.set(entry.url, entry);
    }
  }

  return Array.from(byUrl.values()).sort((a, b) => a.url.localeCompare(b.url));
}

function getRouteSignals(routePath: string): {
  changeFrequency: ChangeFrequency;
  priority: number;
} {
  if (routePath === '/') {
    return { changeFrequency: 'daily', priority: 1.0 };
  }

  if (
    routePath === '/blog' ||
    routePath.startsWith('/blog/') ||
    routePath === '/internships' ||
    routePath.startsWith('/internships/') ||
    routePath === '/interview-experiences' ||
    routePath.startsWith('/interview-experiences/')
  ) {
    return { changeFrequency: 'weekly', priority: 0.9 };
  }

  if (
    routePath === '/tools' ||
    routePath.startsWith('/tools/') ||
    routePath === '/games' ||
    routePath.startsWith('/games/') ||
    routePath === '/resources' ||
    routePath.startsWith('/resources/') ||
    routePath === '/services' ||
    routePath.startsWith('/services/') ||
    routePath === '/freshers' ||
    routePath.startsWith('/freshers/')
  ) {
    return { changeFrequency: 'weekly', priority: 0.85 };
  }

  return { changeFrequency: 'monthly', priority: 0.7 };
}

function isSkippableDirectorySegment(segment: string): boolean {
  return (
    segment === 'api' ||
    segment.startsWith('[') ||
    segment.startsWith('@') ||
    segment.startsWith('.')
  );
}

type StaticRouteRecord = {
  routePath: string;
  pageFilePath: string;
};

function collectStaticAppRoutes(
  currentDir: string,
  routeSegments: string[],
  collected: StaticRouteRecord[],
) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  const hasPage = entries.some(
    (entry) => entry.isFile() && entry.name === 'page.tsx',
  );

  if (hasPage) {
    const routePath =
      routeSegments.length === 0 ? '/' : `/${routeSegments.join('/')}`;
    collected.push({
      routePath,
      pageFilePath: path.join(currentDir, 'page.tsx'),
    });
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const segment = entry.name;
    if (segment.startsWith('(')) {
      collectStaticAppRoutes(
        path.join(currentDir, segment),
        routeSegments,
        collected,
      );
      continue;
    }

    if (isSkippableDirectorySegment(segment)) {
      continue;
    }

    collectStaticAppRoutes(
      path.join(currentDir, segment),
      [...routeSegments, segment],
      collected,
    );
  }
}

function getStaticRouteUrls(baseUrl: string): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'src', 'app');
  const staticRoutes: StaticRouteRecord[] = [];
  collectStaticAppRoutes(appDir, [], staticRoutes);

  return staticRoutes
    .filter((route) => shouldIndexPath(route.routePath))
    .map((route) => {
      const { changeFrequency, priority } = getRouteSignals(route.routePath);
      return {
        url: `${baseUrl}${route.routePath === '/' ? '' : route.routePath}`,
        lastModified: getFileLastModified(route.pageFilePath) || new Date(),
        changeFrequency,
        priority,
      };
    });
}

function getMarkdownBlogUrls(baseUrl: string): MetadataRoute.Sitemap {
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
  const markdownSlugs = getMarkdownBlogSlugs();

  return markdownSlugs
    .filter((slug) => Boolean(slug))
    .map((slug) => {
      const blogPagePath = path.join(blogDir, slug, 'page.tsx');
      const markdownPath = path.join(
        process.cwd(),
        'src',
        'content',
        'blog',
        `${slug}.md`,
      );

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified:
          getFileLastModified(blogPagePath) ||
          getFileLastModified(markdownPath) ||
          new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      };
    });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;
  const staticUrls = getStaticRouteUrls(baseUrl);
  const markdownBlogUrls = getMarkdownBlogUrls(baseUrl);

  let internshipUrls: MetadataRoute.Sitemap = [];
  try {
    if (adminDb) {
      const internshipsSnapshot = await adminDb.collection('internships').get();
      internshipUrls = internshipsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          url: `${baseUrl}/internships/${doc.id}`,
          lastModified: data.postedAt?.toDate() || new Date(),
          changeFrequency: 'daily' as const,
          priority: 0.9,
        };
      });
    }
  } catch (error) {
    console.error('Error fetching internships for sitemap:', error);
  }

  let interviewUrls: MetadataRoute.Sitemap = [];
  try {
    const experiences = interviewExperiencesData as Array<{
      id: string;
      company: string;
      date?: string;
    }>;

    const companyUrls = [...new Set(experiences.map((exp) => exp.company))]
      .filter(Boolean)
      .map((company) => ({
        url: `${baseUrl}/interview-experiences/${toCompanySlug(company)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));

    const studentUrls = experiences.map((exp) => ({
      url: `${baseUrl}/interview-experiences/${toCompanySlug(exp.company)}/${exp.id}`,
      lastModified: new Date(exp.date || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    interviewUrls = [...companyUrls, ...studentUrls];
  } catch (error) {
    console.error('Error generating interview experience sitemap:', error);
  }

  return dedupeSitemapEntries([
    ...staticUrls,
    ...markdownBlogUrls,
    ...internshipUrls,
    ...interviewUrls,
  ]);
}
