import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sproutern - Launch Your Career with Startup Internships',
    short_name: 'Sproutern',
    description:
      'Find internships, career resources, and expert guidance. Tools for students worldwide including CGPA converters, resume builders, and interview preparation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#7C3AED',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    dir: 'ltr',
    categories: ['education', 'career', 'productivity', 'business'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: '/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: '/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/opengraph.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        label: 'Sproutern Homepage',
      },
    ],
    shortcuts: [
      {
        name: 'Find Internships',
        short_name: 'Internships',
        description: 'Browse latest internship opportunities',
        url: '/internships',
        icons: [{ src: '/logo.jpg', sizes: '192x192' }],
      },
      {
        name: 'Tools',
        short_name: 'Tools',
        description: 'Career tools and calculators',
        url: '/tools',
        icons: [{ src: '/logo.jpg', sizes: '192x192' }],
      },
      {
        name: 'Blog',
        short_name: 'Blog',
        description: 'Career advice and guides',
        url: '/blog',
        icons: [{ src: '/logo.jpg', sizes: '192x192' }],
      },
      {
        name: 'Resources',
        short_name: 'Resources',
        description: 'Career resources and templates',
        url: '/resources',
        icons: [{ src: '/logo.jpg', sizes: '192x192' }],
      },
    ],
    prefer_related_applications: false,
  };
}
