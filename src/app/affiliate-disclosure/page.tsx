/**
 * Affiliate Disclosure Page
 * FTC-compliant disclosure of affiliate relationships
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Info, ExternalLink, Shield, Heart, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - Sproutern',
  description:
    'Learn about our affiliate relationships and how we earn commissions when you purchase through our links. Full transparency about our monetization.',
  robots: 'index, follow',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">
        Affiliate Disclosure
      </h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          At Sproutern, we believe in complete transparency about how we earn
          money. This page explains our affiliate relationships and how they
          work.
        </p>

        <Card className="my-8 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
          <CardContent className="flex items-start gap-4 p-6">
            <Info className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
            <div>
              <h3 className="mb-2 mt-0 text-lg font-semibold text-blue-800 dark:text-blue-200">
                Quick Summary
              </h3>
              <p className="mb-0 text-blue-700 dark:text-blue-300">
                Some links on Sproutern are affiliate links. When you click
                these links and make a purchase, we may earn a commission at no
                additional cost to you. This helps us keep the site free and
                continue providing valuable content.
              </p>
            </div>
          </CardContent>
        </Card>

        <h2>What Are Affiliate Links?</h2>
        <p>
          Affiliate links are special URLs that track when visitors from our
          site make purchases on partner websites. When you click an affiliate
          link and complete a purchase (or sometimes just sign up), the company
          pays us a small commission.
        </p>
        <p>
          <strong>Important:</strong> You pay the same price whether you use our
          affiliate link or go directly to the website. The commission comes
          from the company&apos;s marketing budget, not from your pocket.
        </p>

        <h2>How We Use Affiliate Links</h2>
        <p>We use affiliate links in:</p>
        <ul>
          <li>
            <strong>AI Tools Directory:</strong> Links to AI tools we review and
            recommend
          </li>
          <li>
            <strong>Blog posts:</strong> When we mention products or services
          </li>
          <li>
            <strong>Resource pages:</strong> Curated lists of tools and services
          </li>
          <li>
            <strong>Comparison articles:</strong> Side-by-side tool comparisons
          </li>
          <li>
            <strong>Partner offers strip:</strong> Recommended tools shown in the
            site footer and homepage
          </li>
        </ul>

        <h2>Sponsored Content</h2>
        <p>
          Some tool or service placements on Sproutern may be{' '}
          <strong>sponsored</strong>. Sponsored items are clearly labelled with a
          visible &quot;Sponsored&quot; or &quot;Partner&quot; badge so you always
          know when a placement is paid. We only accept sponsorships for
          products and services relevant to students and early-career
          professionals, and sponsorship never influences our editorial
          recommendations or the free tools we provide.
        </p>

        <h2>Our Affiliate Partners</h2>
        <p>
          We partner with affiliate programs through networks and direct
          partnerships, including but not limited to:
        </p>
        <ul>
          <li>OpenAI (ChatGPT)</li>
          <li>Anthropic (Claude)</li>
          <li>Jasper AI</li>
          <li>Grammarly</li>
          <li>Canva</li>
          <li>GitHub (Copilot)</li>
          <li>Synthesia</li>
          <li>Pictory</li>
          <li>Surfer SEO</li>
          <li>ElevenLabs</li>
          <li>Descript</li>
          <li>And others...</li>
        </ul>

        <h2>Our Editorial Integrity</h2>
        <div className="my-8 grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Shield className="mb-3 h-10 w-10 text-primary" />
              <h3 className="mb-2 mt-0 text-lg font-semibold">
                Honest Reviews
              </h3>
              <p className="mb-0 text-sm text-muted-foreground">
                We only recommend tools we&apos;ve actually tested and believe
                in.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Heart className="mb-3 h-10 w-10 text-primary" />
              <h3 className="mb-2 mt-0 text-lg font-semibold">User First</h3>
              <p className="mb-0 text-sm text-muted-foreground">
                Our recommendations prioritize what&apos;s best for you, not our
                commission.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <MessageSquare className="mb-3 h-10 w-10 text-primary" />
              <h3 className="mb-2 mt-0 text-lg font-semibold">Transparency</h3>
              <p className="mb-0 text-sm text-muted-foreground">
                We clearly disclose affiliate relationships on pages with
                affiliate links.
              </p>
            </CardContent>
          </Card>
        </div>

        <p>
          <strong>Our promise to you:</strong>
        </p>
        <ul>
          <li>
            We will never recommend a product just because it pays higher
            commissions
          </li>
          <li>
            We include cons and limitations in our reviews, even for affiliate
            products
          </li>
          <li>
            We recommend free alternatives when they&apos;re the better choice
          </li>
          <li>
            Our editorial content is never influenced by affiliate partnerships
          </li>
        </ul>

        <h2>Questions?</h2>
        <p>
          If you have any questions about our affiliate relationships or how we
          choose what to recommend, please{' '}
          <Link
            href="/contact"
            className="text-primary hover:underline"
          >
            contact us
          </Link>
          . We&apos;re happy to provide more information.
        </p>

        <h2>FTC Disclosure</h2>
        <p className="text-sm text-muted-foreground">
          In compliance with the FTC guidelines, please assume that any links
          leading to third-party products or services may be affiliate links
          that we receive compensation for. We only recommend products and
          services that we genuinely believe will add value to our readers.
        </p>

        <hr className="my-8" />

        <p className="text-sm text-muted-foreground">
          <strong>Last updated:</strong> January 2025
        </p>
      </div>
    </div>
  );
}
