import { MetadataRoute } from 'next';

// Image sitemap for better Google Image search ranking
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sproutern.com';

  return [
    {
      url: `${baseUrl}/logo.jpg`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/opengraph.jpg`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}

// Note: This generates a sitemap-images.xml for dedicated image indexing
