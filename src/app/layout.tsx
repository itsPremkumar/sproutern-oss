import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import { AnalyticsProvider } from '@/components/providers/analytics-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ClientLayoutComponents } from '@/components/shared/client-layout-components';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { InternationalSEO } from '@/components/seo';
import { SkipLink } from '@/components/accessibility/skip-link';
import { SocialProofToast } from '@/components/trust/SocialProofToast';
import { ExitIntentPopup } from '@/components/lead-capture/ExitIntentPopup';
import { ShareWidget } from '@/components/social/ShareWidget';
import { ClarityProvider } from '@/components/providers/clarity-provider';
import { ScrollProgress } from '@/components/engagement/ScrollProgress';
import { ReadNextBar } from '@/components/engagement/ReadNextBar';

// Optimized font loading for better performance
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Ensures text remains visible during font load (prevents FOIT)
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
});

// ✅ Correctly moved themeColor to viewport
export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: {
    default: 'Sproutern - Free Career Tools, CGPA Calculator & Interview Prep',
    template: '%s | Sproutern',
  },
  description:
    'Free online CGPA calculator, typing speed test, resume builder, and career tools for students. Get interview tips, salary insights, and job preparation resources. Trusted by 50,000+ students in India and worldwide.',
  keywords: [
    'career development',
    'internship platform',
    'resume optimization',
    'interview preparation',
    'startup jobs',
    'remote internships',
    'student careers',
    'professional networking',
    'AI career tools',
    'global opportunities',
    'Sproutern',
  ],
  metadataBase: new URL('https://sproutern.dpdns.org'),
  authors: [{ name: 'Sproutern Team', url: 'https://sproutern.dpdns.org' }],
  creator: 'Sproutern',
  publisher: 'Sproutern',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.jpg',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sproutern.dpdns.org',
    title:
      'Sproutern - Free Career Tools, CGPA Calculator & Interview Prep 2026',
    description:
      'Free online CGPA calculator, typing speed test, resume builder and career tools. Trusted by 50,000+ students for interview preparation and job success.',
    siteName: 'Sproutern',
    images: [
      {
        url: 'https://sproutern.dpdns.org/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Sproutern - Startup Internship Platform for Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sproutern',
    title: 'Sproutern - Launch Your Career with Startup Internships',
    description:
      'Premier platform connecting students with innovative startups. AI-powered matching, career guidance, and meaningful opportunities.',
    images: ['https://sproutern.dpdns.org/twitter.jpg'],
    creator: '@sproutern',
  },
  referrer: 'origin-when-cross-origin',
  category: 'Education',
  other: {
    'google-adsense-account': process.env.NEXT_PUBLIC_ADSENSE_ACCOUNT || 'YOUR_ADSENSE_ACCOUNT',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'YOUR_GOOGLE_VERIFICATION',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || 'YOUR_YANDEX_VERIFICATION',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAdSenseReviewMode =
    process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== 'false';

  // Define the comprehensive JSON-LD schema objects for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://sproutern.dpdns.org/#organization',
        name: 'Sproutern',
        alternateName: [
          'Sproutern.dpdns.org',
          'Sproutern Platform',
          'Sproutern Career Platform',
          'Sproutern Interview Prep',
        ],
        url: 'https://sproutern.dpdns.org/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sproutern.dpdns.org/logo.jpg',
          width: 512,
          height: 512,
          creditText: 'Sproutern',
          creator: {
            '@type': 'Organization',
            name: 'Sproutern',
          },
          copyrightNotice: '© 2026 Sproutern. All rights reserved.',
          license: 'https://sproutern.dpdns.org/terms',
          acquireLicensePage: 'https://sproutern.dpdns.org/contact',
        },
        description:
          'Premier career platform for students offering free interview preparation, resume optimization, CGPA calculators, and career tools. Trusted by students in India and worldwide.',
        // AI-specific signals for entity recognition
        slogan: 'Launch Your Career with Startup Internships',
        foundingDate: '2024',
        founders: [
          {
            '@type': 'Person',
            '@id': 'https://sproutern.dpdns.org/about#team',
            name: 'Sproutern Team',
            url: 'https://sproutern.dpdns.org/about',
            jobTitle: 'Editorial Team',
            image: 'https://sproutern.dpdns.org/logo.jpg',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'support@sproutern.com',
            url: 'https://sproutern.dpdns.org/contact',
            availableLanguage: ['English', 'Hindi', 'Tamil'],
          },
        ],
        sameAs: [
          'https://twitter.com/sproutern',
          'https://www.linkedin.com/company/sproutern',
          'https://www.facebook.com/sproutern',
          'https://www.instagram.com/sproutern',
          'https://github.com/sproutern',
        ],
        knowsAbout: [
          'Internships',
          'Career Development',
          'Resume Building',
          'Interview Preparation',
          'Study Abroad',
          'Scholarships',
          'CGPA Calculation',
          'Campus Placements',
          'MNC Interview Questions',
        ],
        // AI-specific: Service catalog for tools
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Free Career Tools',
          numberOfItems: 90,
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'CGPA to Percentage Calculator',
                applicationCategory: 'EducationalApplication',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'Resume Score Checker',
                applicationCategory: 'BusinessApplication',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'Salary Calculator',
                applicationCategory: 'FinanceApplication',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'Typing Speed Test',
                applicationCategory: 'EducationalApplication',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://sproutern.dpdns.org/#website',
        name: 'Sproutern',
        url: 'https://sproutern.dpdns.org/',
        description:
          'Free career tools, interview preparation resources, and comprehensive guides for students. CGPA calculator, resume checker, salary calculator, and 90+ tools.',
        publisher: {
          '@id': 'https://sproutern.dpdns.org/#organization',
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate:
                'https://sproutern.dpdns.org/internships?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
          {
            '@type': 'ReadAction',
            target: 'https://sproutern.dpdns.org/blog',
          },
        ],
        inLanguage: ['en-US', 'en-IN', 'en-GB', 'en-AU', 'en-CA'],
        // AI-specific: Speakable content for voice search
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.key-takeaway', '.tldr-summary', '.faq-answer'],
        },
        // Audience signals for AI targeting
        audience: {
          '@type': 'Audience',
          audienceType: 'Students',
          geographicArea: [
            { '@type': 'Country', name: 'India' },
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'United Kingdom' },
          ],
        },
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://sproutern.dpdns.org/#educational-org',
        name: 'Sproutern',
        // Reference main Organization to avoid duplicate url warnings
        parentOrganization: {
          '@id': 'https://sproutern.dpdns.org/#organization',
        },
        description:
          'Providing career guidance, educational resources, and tools for students worldwide.',
        areaServed: [
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'China' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'Switzerland' },
          { '@type': 'Country', name: 'Ireland' },
          { '@type': 'Country', name: 'Sweden' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'Singapore' },
          { '@type': 'Country', name: 'Netherlands' },
          { '@type': 'Country', name: 'France' },
          { '@type': 'Country', name: 'Japan' },
          { '@type': 'Country', name: 'Ghana' },
          { '@type': 'Country', name: 'United Arab Emirates' },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <head>
        {/* Critical resource hints for performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://firebasestorage.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://firebase.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://apis.google.com"
        />
        {/* Firebase Auth iframe preconnect - saves ~330ms on LCP */}
        <link
          rel="preconnect"
          href="https://YOUR_PROJECT.firebaseapp.com"
          crossOrigin="anonymous"
        />
        {/* Critical third-party preconnects for performance */}
        <link
          rel="preconnect"
          href="https://www.ezojs.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://the.gatekeeperconsent.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cmp.gatekeeperconsent.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fundingchoicesmessages.google.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />
        <link
          rel="dns-prefetch"
          href="https://www.googletagmanager.com"
        />
        <link
          rel="dns-prefetch"
          href="https://pagead2.googlesyndication.com"
        />
        <link
          rel="dns-prefetch"
          href="https://cdn.id5-sync.com"
        />
        {/* Monetag Ad Network - preconnect for faster ad loading */}
        <link
          rel="preconnect"
          href="https://YOUR_AD_DOMAIN.com"
          crossOrigin="anonymous"
        />

        {/* iOS PWA Meta Tags for Full Mobile App Experience */}
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Sproutern"
        />
        <meta
          name="mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="format-detection"
          content="telephone=no"
        />
        <meta
          name="msapplication-TileColor"
          content="#7C3AED"
        />
        <meta
          name="msapplication-tap-highlight"
          content="no"
        />

        {/* Apple Touch Icons - using existing logo */}
        <link
          rel="apple-touch-icon"
          href="/logo.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/logo.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/logo.jpg"
        />

        {/* Favicon for browsers and search engines (Yandex, Google, Bing) */}
        <link
          rel="icon"
          href="https://sproutern.dpdns.org/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          href="https://sproutern.dpdns.org/favicon.ico"
          type="image/x-icon"
        />

        {/* RSS Feed for content syndication */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sproutern Blog RSS"
          href="https://sproutern.dpdns.org/feed.xml"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          title="Sproutern Blog JSON Feed"
          href="https://sproutern.dpdns.org/feed.json"
        />

        {/* Additional meta tags for SEO */}
        <link
          rel="author"
          href="https://sproutern.dpdns.org/humans.txt"
        />
        {/* PWA Manifest - Next.js auto-generates from manifest.ts */}
        <link
          rel="manifest"
          href="/manifest.webmanifest"
        />

        {/* Structured Data - deferred for better LCP */}
        <Script
          id="json-ld-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />

        {/* AI Crawler & Generative Engine Optimization Meta Tags */}
        <meta
          name="ai-content-type"
          content="educational, career-guidance, tools, calculators"
        />
        <meta
          name="ai-target-audience"
          content="students, job seekers, freshers, graduates, international students"
        />
        <meta
          name="ai-primary-topic"
          content="career development, internships, interview preparation, resume building, CGPA calculation, salary calculation, study abroad"
        />
        <meta
          name="ai-content-quality"
          content="expert-reviewed, regularly-updated, fact-checked"
        />
        <meta
          name="citation"
          content="enabled"
        />
        <meta
          name="content-freshness"
          content={new Date().toISOString().split('T')[0]}
        />
        {/* AEO: Answer Engine Optimization */}
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'YOUR_GOOGLE_VERIFICATION'}
        />
        <meta
          name="ai-structured-data"
          content="FAQPage, WebApplication, HowTo, EducationalOrganization"
        />
        <meta
          name="ai-answer-ready"
          content="true"
        />
        <meta
          name="ai-citation-style"
          content="academic"
        />
        <meta
          name="ai-language-support"
          content="en, de, zh, ja, fr, nl, sv"
        />

        {/* Google SGE: Search Generative Experience Optimization */}
        <meta
          name="sge-content-type"
          content="calculator, educational-tool, career-guide"
        />
        <meta
          name="sge-primary-topic"
          content="CGPA conversion, salary calculation, typing test, resume optimization"
        />
        <meta
          name="sge-answer-format"
          content="direct-answer, comparison-table, step-by-step"
        />
        <meta
          name="sge-expertise"
          content="career-guidance, educational-tools, placement-preparation"
        />
        <meta
          name="sge-citation-ready"
          content="true"
        />
        {/* E-E-A-T Signals for Google SGE */}
        <meta
          name="content-expertise"
          content="career-guidance, placement-preparation, study-abroad"
        />
        <meta
          name="content-authority"
          content="trusted-by-50000-students"
        />
        <meta
          name="content-trust"
          content="fact-checked, regularly-updated, expert-reviewed"
        />

        {/* Google AdSense */}
        <meta
          name="google-adsense-account"
          content={process.env.NEXT_PUBLIC_ADSENSE_ACCOUNT || 'YOUR_ADSENSE_ACCOUNT'}
        />
        
        {/* Ezoic Site Verification */}
        <meta
          name="ezoic-site-verification"
          content={process.env.NEXT_PUBLIC_EZOIC_VERIFICATION || 'YOUR_EZOIC_VERIFICATION'}
        />

        {/* Yandex Metrica Analytics */}
        <Script
          id="yandex-metrica"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=' + (process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || 'YOUR_YANDEX_ID'), 'ym');
              ym(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || 'YOUR_YANDEX_ID', 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: 'dataLayer',
                accurateTrackBounce: true,
                trackLinks: true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src={'https://mc.yandex.ru/watch/' + (process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || 'YOUR_YANDEX_ID')}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>

        <Script
          async
          src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + (process.env.NEXT_PUBLIC_ADSENSE_ACCOUNT || 'YOUR_ADSENSE_ACCOUNT')}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {/* Additional SEO meta tags */}
        <meta
          name="geo.region"
          content="IN"
        />
        <meta
          name="geo.placename"
          content="Chennai"
        />
        <meta
          name="copyright"
          content={`Sproutern ${new Date().getFullYear()}`}
        />
        <meta
          name="rating"
          content="General"
        />
        <meta
          name="distribution"
          content="Global"
        />
        <meta
          name="revisit-after"
          content="7 days"
        />

        {/* Cloudflare Web Analytics - Deferred for better LCP */}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "YOUR_CLOUDFLARE_BEACON_TOKEN"}'
          strategy="lazyOnload"
        />

        {/* Ahrefs Web Analytics - Deferred for better LCP */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={process.env.NEXT_PUBLIC_AHREFS_KEY || 'YOUR_AHREFS_KEY'}
          strategy="lazyOnload"
        />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'YOUR_GTM_ID'} />
      </head>
      <body className="font-body antialiased">
        <SkipLink />
        <ThemeProvider>
          <Navbar />
          <main
            id="main-content"
            className="min-h-screen"
            role="main"
            aria-label="Main content"
          >
            {children}
          </main>
          {/* <GoogleAd slot={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_SLOT_ID || ''} /> */}
          <Footer />
          <Toaster />
          <AnalyticsProvider />
          <ClarityProvider />
          <Analytics />
          <SpeedInsights />
          <InternationalSEO enableGeoHints />
          <ClientLayoutComponents />
          {/* Traffic Boosting Components */}
          {!isAdSenseReviewMode && (
            <SocialProofToast
              enabled={true}
              minDelaySeconds={45}
              maxDelaySeconds={120}
            />
          )}
          {!isAdSenseReviewMode && (
            <ExitIntentPopup
              title="🎯 Grab Your Free Interview Prep Kit"
              description="Download 50+ real interview questions from top MNCs, resume templates, and a placement preparation checklist — 100% free."
            />
          )}
          <ShareWidget />
          {/* Engagement components for traffic growth */}
          <ScrollProgress />
          <ReadNextBar />
          {/* <ChatbotClient /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
