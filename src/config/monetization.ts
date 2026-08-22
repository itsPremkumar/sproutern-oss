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
  {
    id: 'amazon',
    label: 'Amazon — Books, Electronics & More',
    // Amazon Associates: zero-approval, works in India (pa-api or simple
    // tag). Replace YOURTAG with your Associates tracking id.
    url: 'https://www.amazon.in/?tag=YOURTAG-21',
    note: 'Shop via our link at no extra cost to you.',
    sponsor: 'Amazon Associates',
  },
  {
    id: 'sponsor',
    label: 'Advertise with Sproutern',
    url: '/contact?topic=sponsorship',
    note: 'Sponsor a tool or get a featured placement.',
    sponsor: 'Sproutern',
  },
  {
    id: 'unacademy',
    label: 'Unacademy — Exam & Course Prep',
    // Unacademy affiliate (India): replace YOURID with your affiliate id.
    url: 'https://unacademy.com/goal/?ref=YOURID',
    note: 'UPSC, CAT, GATE & competitive exam prep.',
    sponsor: 'Unacademy',
  },
  {
    id: 'cashkaro',
    label: 'CashKaro — Earn Cashback',
    // CashKaro affiliate (India): replace YOURID with your referral id.
    url: 'https://www.cashkaro.com/?ref=YOURID',
    note: 'Get cashback on shopping via our link.',
    sponsor: 'CashKaro',
  },
  {
    id: 'skillshare',
    label: 'Skillshare — Creative Classes',
    url: 'https://skl.sh/YOURID',
    note: 'Learn creative & pro skills (free trial).',
    sponsor: 'Skillshare',
  },
  {
    id: 'fiverr',
    label: 'Fiverr — Hire Freelancers',
    // Fiverr affiliate (India-friendly): replace YOURID.
    url: 'https://www.fiverr.com/?ref=YOURID',
    note: 'Get freelance work done affordably.',
    sponsor: 'Fiverr (Affiliate)',
  },
  {
    id: 'upwork',
    label: 'Upwork — Find Freelance Jobs',
    // Upwork affiliate: replace YOURID.
    url: 'https://www.upwork.com/?ref=YOURID',
    note: 'Find remote freelance gigs.',
    sponsor: 'Upwork (Affiliate)',
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
  upiId: process.env.NEXT_PUBLIC_UPI_ID || '',
  currency: 'INR',
  tiers: [
    { amount: 49, label: '₹49', impact: '☕ Buy us a chai' },
    { amount: 99, label: '₹99', impact: '🚀 1 week hosting', popular: true },
    { amount: 199, label: '₹199', impact: '📚 Help 100 learners' },
    { amount: 499, label: '₹499', impact: '🎯 1 month server' },
  ],
};

/**
 * DIGITAL PRODUCTS (sell your own — zero inventory, instant payout)
 * Use a free checkout: Gumroad (10% fee) or Razorpay Payment Page (free, INR).
 * Add entries below; they render via <ProductCard /> with a "Buy" CTA.
 * Leave empty until you create a product.
 */
export interface DigitalProduct {
  id: string;
  title: string;
  desc: string;
  price: string; // display price, e.g. "₹199" or "$9"
  url: string; // your Gumroad/Razorpay checkout link
  badge?: string; // e.g. "Bestseller"
}

export const digitalProducts: DigitalProduct[] = [
  // Example (edit with YOUR real Gumroad/Razorpay link):
  // {
  //   id: 'resume-pack',
  //   title: '20 ATS-Friendly Resume Templates',
  //   desc: 'Copy-paste templates that pass recruiter screeners.',
  //   price: '₹199',
  //   url: 'https://yourname.gumroad.com/l/resume-pack',
  //   badge: 'Bestseller',
  // },
  // {
  //   id: 'interview-qbank',
  //   title: '500 Interview Questions Bank (PDF)',
  //   desc: 'Tech + HR questions with model answers.',
  //   price: '₹149',
  //   url: 'https://yourname.gumroad.com/l/interview-qbank',
  // },
];
