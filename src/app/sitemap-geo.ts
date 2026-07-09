import { MetadataRoute } from 'next';
import { shouldIndexPath } from '@/lib/seo/indexing-policy';
import { SITE_URL } from '@/lib/site-config';

type GeoPage = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]['changeFrequency']
  >;
};

const GEO_PRIORITY_PAGES: GeoPage[] = [
  { path: '/', priority: 1.0, changeFrequency: 'daily' },
  { path: '/internships', priority: 0.95, changeFrequency: 'daily' },
  { path: '/interview-experiences', priority: 0.95, changeFrequency: 'daily' },
  { path: '/blog', priority: 0.9, changeFrequency: 'daily' },
  { path: '/resources', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/tools', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/games', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/companies', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.85, changeFrequency: 'weekly' },
  {
    path: '/services/web-development',
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  {
    path: '/services/mobile-app-development',
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  {
    path: '/services/ai-integration',
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  {
    path: '/services/mcp-development',
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  { path: '/freshers', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/school', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/college', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/countries', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/roadmaps', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/founder', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/cookie-policy', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/terms-and-conditions', priority: 0.5, changeFrequency: 'yearly' },
];

function dedupeByPath(pages: GeoPage[]): GeoPage[] {
  const byPath = new Map<string, GeoPage>();

  for (const page of pages) {
    const existing = byPath.get(page.path);
    if (!existing || page.priority > existing.priority) {
      byPath.set(page.path, page);
    }
  }

  return Array.from(byPath.values());
}

export default function geoSitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return dedupeByPath(GEO_PRIORITY_PAGES)
    .filter((page) => shouldIndexPath(page.path))
    .map((page) => ({
      url: `${baseUrl}${page.path === '/' ? '' : page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }));
}
