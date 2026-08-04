/**
 * BEO - Brand Engine Optimization Components
 * Establishes brand authority and E-E-A-T signals
 */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  Award,
  Shield,
  Star,
  Users,
  CheckCircle,
  ExternalLink,
  Quote,
  Newspaper,
  Building2,
} from 'lucide-react';

/**
 * Organization Schema for Brand Authority
 */
export function OrganizationSchemaEnhanced() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Sproutern',
          legalName: 'Sproutern Education Pvt. Ltd.',
          url: 'https://sproutern.dpdns.org',
          logo: 'https://sproutern.dpdns.org/logo.jpg',
          description:
            "India's leading career platform helping students and professionals with interview preparation, salary insights, and career tools.",
          foundingDate: '2023',
          founder: {
            '@type': 'Person',
            name: 'Prem Kumar',
            jobTitle: 'Founder & CEO',
          },
          sameAs: [
            'https://www.linkedin.com/company/sproutern',
            'https://twitter.com/sproutern',
            'https://www.youtube.com/@sproutern',
            'https://www.instagram.com/sproutern',
            'https://www.facebook.com/sproutern',
          ],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
          },
          areaServed: ['IN', 'US', 'UK', 'DE', 'CA', 'AU', 'SG'],
          knowsAbout: [
            'Career Guidance',
            'Interview Preparation',
            'Salary Negotiation',
            'Resume Building',
            'Technical Interviews',
            'FAANG Interviews',
          ],
          slogan: 'Your Career Growth Partner',
        }),
      }}
    />
  );
}

/**
 * Author E-E-A-T Bio
 * Establishes expertise and authority
 */
export function AuthorEEATBio({
  name,
  title,
  bio,
  credentials,
  image,
  linkedin,
  twitter,
}: {
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  image?: string;
  linkedin?: string;
  twitter?: string;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name,
            jobTitle: title,
            description: bio,
            image,
            sameAs: [linkedin, twitter].filter(Boolean),
            knowsAbout: credentials,
          }),
        }}
      />
      <Card className="p-6">
        <div className="flex gap-4">
          {image && (
            <img
              src={image}
              alt={name}
              className="h-20 w-20 rounded-full object-cover"
            />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">{name}</h3>
              <Badge variant="secondary">
                <CheckCircle className="mr-1 h-3 w-3" />
                Verified Expert
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="mt-2 text-sm">{bio}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <Badge
                  key={c}
                  variant="outline"
                  className="text-xs"
                >
                  {c}
                </Badge>
              ))}
            </div>
            <div className="mt-3 flex gap-3">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

/**
 * Trust Indicators Section
 * Shows credentials, certifications, and trust signals
 */
export function TrustIndicators({
  stats,
}: {
  stats: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="p-4 text-center"
        >
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {stat.icon}
          </div>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </Card>
      ))}
    </div>
  );
}

/**
 * Media Mentions & Press
 * Shows where Sproutern has been featured
 */
export function MediaMentions({
  mentions,
}: {
  mentions: {
    name: string;
    logo?: string;
    url?: string;
  }[];
}) {
  return (
    <section className="py-8">
      <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
        AS FEATURED IN
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {mentions.map((m) => (
          <a
            key={m.name}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground opacity-70 transition-opacity hover:opacity-100"
          >
            {m.logo ? (
              <img
                src={m.logo}
                alt={m.name}
                className="h-8"
              />
            ) : (
              <span className="text-lg font-semibold">{m.name}</span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

/**
 * Testimonials Carousel
 * Social proof from users
 */
export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company?: string;
    image?: string;
    rating?: number;
  }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <Card
          key={i}
          className="p-6"
        >
          {t.rating && (
            <div className="mb-3 flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
          )}
          <Quote className="mb-2 h-6 w-6 text-primary/30" />
          <p className="mb-4 text-sm italic">&ldquo;{t.quote}&rdquo;</p>
          <div className="flex items-center gap-3">
            {t.image && (
              <img
                src={t.image}
                alt={t.author}
                className="h-10 w-10 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold">{t.author}</p>
              <p className="text-xs text-muted-foreground">
                {t.role}
                {t.company && ` at ${t.company}`}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

/**
 * Partnership Logos
 * Shows company partnerships
 */
export function PartnershipLogos({
  partners,
  title = 'Trusted By',
}: {
  partners: { name: string; logo?: string }[];
  title?: string;
}) {
  return (
    <section className="py-8 text-center">
      <p className="mb-6 text-sm font-medium text-muted-foreground">{title}</p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex h-12 items-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            {p.logo ? (
              <img
                src={p.logo}
                alt={p.name}
                className="h-full"
              />
            ) : (
              <span className="text-xl font-bold text-muted-foreground">
                {p.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Content Quality Indicator
 * Shows article quality signals
 */
export function ContentQualityBadges({
  factChecked = true,
  expertReviewed = true,
  lastUpdated,
  sources,
}: {
  factChecked?: boolean;
  expertReviewed?: boolean;
  lastUpdated?: string;
  sources?: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border bg-muted/30 p-4">
      {factChecked && (
        <Badge
          variant="secondary"
          className="gap-1"
        >
          <Shield className="h-3 w-3" />
          Fact-Checked
        </Badge>
      )}
      {expertReviewed && (
        <Badge
          variant="secondary"
          className="gap-1"
        >
          <Award className="h-3 w-3" />
          Expert Reviewed
        </Badge>
      )}
      {lastUpdated && (
        <Badge
          variant="outline"
          className="gap-1"
        >
          Updated: {lastUpdated}
        </Badge>
      )}
      {sources && (
        <Badge
          variant="outline"
          className="gap-1"
        >
          <Newspaper className="h-3 w-3" />
          {sources} Sources
        </Badge>
      )}
    </div>
  );
}

export default {
  OrganizationSchemaEnhanced,
  AuthorEEATBio,
  TrustIndicators,
  MediaMentions,
  TestimonialCarousel,
  PartnershipLogos,
  ContentQualityBadges,
};
