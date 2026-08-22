import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/games',
          '/games/*',
          '/interview-experiences',
          '/interview-experiences/*',
          '/blog',
          '/blog/*',
          '/internships',
          '/internships/*',
          '/resources',
          '/resources/*',
          '/about',
          '/career-switch',
          '/layoff-guide',
          '/faq',
          '/contact',
          '/companies',
          '/companies/*',
          '/off-campus-drives',
          '/tools',
          '/tools/*',
          '/skill-test',
          '/resume-optimizer',
          '/testimonials',
          '/guides',
          '/guides/*',
          '/school',
          '/school/*',
          '/college',
          '/college/*',
          '/freshers',
          '/freshers/*',
          '/countries',
          '/countries/*',
          '/methodology',
          '/success-stories',
          '/roadmaps',
          '/roadmaps/*',
          '/scholarships',
          '/scholarships/*',
          '/privacy-policy',
          '/terms-and-conditions',
          '/disclaimer',
          '/cookie-policy',
        ],
        disallow: [
          '/admin/',
          '/api/',
          '/profile',
          '/profile/',
          '/_next/',
          '/resume-ai/',
          '/signin',
          '/signup',
          '/forgot-password',
          '/offline', // Utility page only
          '/doneate', // Legacy typo route -> redirected to /donate
          '/terms-of-service', // Legacy legal alias -> redirected to /terms-and-conditions
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/games/', '/games/*'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/games/', '/games/*'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'YandexBot',
        allow: [
          '/',
          '/blog/',
          '/blog/*',
          '/tools/',
          '/tools/*',
          '/games/',
          '/games/*',
          '/internships/',
          '/internships/*',
          '/resources/',
          '/resources/*',
        ],
        crawlDelay: 2,
      },
      {
        userAgent: 'YandexImages',
        allow: '/',
      },
      // Additional International Bots
      {
        userAgent: 'NaverBot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Sogou',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'SeznamBot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'PetalBot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      // GEO: Explicitly allow AI Crawlers to enable citations in generative results
      {
        userAgent: [
          'GPTBot', // OpenAI training crawl
          'ChatGPT-User', // ChatGPT live browsing
          'OAI-SearchBot', // ChatGPT Search citations — critical for AEO
          'Google-Extended', // Gemini grounding
          'CCBot',
          'PerplexityBot', // Perplexity answers + citations
          'Perplexity-User',
          'ClaudeBot', // Anthropic training crawl
          'Claude-SearchBot', // Claude search
          'anthropic-ai',
          'Amazonbot', // Alexa
          'Applebot-Extended', // Apple Intelligence
          'CohereForAI',
          'Bytespider', // ByteDance / Doubao
          'Meta-ExternalAgent', // Meta AI
          'YouBot', // You.com
          'Diffbot',
        ],
        allow: '/',
      },
    ],
    sitemap: [
      'https://sproutern.dpdns.org/sitemap.xml',
      'https://sproutern.dpdns.org/sitemap-images.xml',
      'https://sproutern.dpdns.org/sitemap-news/sitemap.xml',
    ],
    host: 'https://sproutern.dpdns.org',
    // AI crawler discoverability - llms.txt is the emerging standard for LLM discovery
    // Served from /public/llms.txt
  };
}
