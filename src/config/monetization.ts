/**
 * Centralized Monetization Configuration for Sproutern-Hermes
 * ------------------------------------------------------------------
 * ONE PLACE to manage every money stream. Edit the values below to
 * activate each stream. Everything is OFF by default so the site is
 * safe for AdSense review and free to deploy.
 *
 * HOW TO USE:
 *  1. Affiliate links  -> fill `affiliates` with your tracking URLs.
 *  2. Sponsored items  -> add entries to `sponsoredTools`.
 *  3. Display ads      -> set NEXT_PUBLIC_ADSENSE_REVIEW_MODE=false in
 *                         .env.local AND provide your real ad IDs.
 *  4. Donations        -> set NEXT_PUBLIC_UPI_ID to your UPI handle.
 *
 * All affiliate URLs are YOUR tracking links from networks like
 * Impact.com / PartnerStack / Amazon Associates / etc.
 */

export interface AffiliateLink {
  id: string;
  label: string;
  /** Your tracking URL (with your affiliate/campaign ID). */
  url: string;
  /** Short description shown on hover / disclosure. */
  note?: string;
  /** Sponsor name for disclosure. */
  sponsor?: string;
}

export interface SponsoredTool {
  id: string;
  name: string;
  tagline: string;
  url: string;
  badge?: string; // e.g. "Sponsored" or "Partner"
}

/**
 * AFFILIATE LINKS
 * Replace the placeholder URLs with YOUR real tracking links.
 * Leave `url: ''` to hide a link entirely.
 */
export const affiliates: AffiliateLink[] = [
  {
    id: 'coursera',
    label: 'Coursera — Online Courses & Certificates',
    url: 'https://www.coursera.org/?utm_source=sproutern&utm_medium=affiliate',
    note: 'Earn a certificate from top universities.',
    sponsor: 'Coursera (Impact.com)',
  },
  {
    id: 'udacity',
    label: 'Udemy — Tech & Career Courses',
    url: 'https://www.udemy.com/?utm_source=sproutern&utm_medium=affiliate',
    note: 'Learn in-demand skills with lifetime access.',
    sponsor: 'Udemy',
  },
  {
    id: 'semrush',
    label: 'Semrush — SEO & Marketing Toolkit',
    url: 'https://www.semrush.com/?utm_source=sproutern&utm_medium=affiliate',
    note: 'Grow your traffic with pro SEO tools.',
    sponsor: 'Semrush (Impact.com)',
  },
  {
    id: 'canva',
    label: 'Canva — Design Resumes & Portfolios',
    url: 'https://www.canva.com/?utm_source=sproutern&utm_medium=affiliate',
    note: 'Create a standout resume for free.',
    sponsor: 'Canva (Impact.com)',
  },
  {
    id: 'namecheap',
    label: 'Namecheap — Domains & Hosting',
    url: 'https://www.namecheap.com/?aff=sproutern',
    note: 'Buy a domain for your portfolio site.',
    sponsor: 'Namecheap',
  },
  {
    id: 'hostinger',
    label: 'Hostinger — Web Hosting',
    url: 'https://www.hostinger.com/?ref=sproutern',
    note: 'Affordable hosting to launch your site.',
    sponsor: 'Hostinger',
  },
];

/** Quick lookup helper: get a single affiliate link by id. */
export function getAffiliate(id: string): AffiliateLink | undefined {
  return affiliates.find((a) => a.id === id);
}

/**
 * SPONSORED TOOLS
 * Add paid placements here. They render with a "Sponsored" badge so
 * you stay FTC-compliant. Leave empty until you sell placements.
 */
export const sponsoredTools: SponsoredTool[] = [
  // Example (uncomment & edit once you sell a slot):
  // {
  //   id: 'acme-bootcamp',
  //   name: 'Acme Coding Bootcamp',
  //   tagline: '3-month full-stack program with job guarantee.',
  //   url: 'https://example.com/?ref=sproutern',
  //   badge: 'Sponsored',
  // },
];

/**
 * DISPLAY ADS
 * These read from public env vars (see .env.example). Ads stay OFF
 * until you flip NEXT_PUBLIC_ADSENSE_REVIEW_MODE=false AND supply a
 * real AdSense account + slot. This keeps the site AdSense-safe
 * during review.
 */
export const adConfig = {
  reviewMode: process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== 'false',
  adsenseAccount: process.env.NEXT_PUBLIC_ADSENSE_ACCOUNT || '',
  adsenseSlot: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_SLOT_ID || '',
  ezoicEnabled: !!process.env.NEXT_PUBLIC_EZOIC_VERIFICATION,
};

/**
 * DONATIONS
 * Reads your UPI handle from NEXT_PUBLIC_UPI_ID (set in .env.local).
 * Defaults to a placeholder so the donate page never crashes.
 */
export const donationConfig = {
  upiId: process.env.NEXT_PUBLIC_UPI_ID || 'YOUR_UPI_ID@paytm',
  currency: 'INR',
  tiers: [
    { amount: 49, label: '₹49', impact: '☕ Buy us a chai' },
    { amount: 99, label: '₹99', impact: '🚀 1 week hosting', popular: true },
    { amount: 199, label: '₹199', impact: '📚 Help 100 learners' },
    { amount: 499, label: '₹499', impact: '🎯 1 month server' },
  ],
};
