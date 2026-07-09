# Add Metadata to All Pages - Quick Guide

## ✅ Pages with Metadata Already Added

1. ✅ Homepage (`/`)
2. ✅ About (`/about`)
3. ✅ Blog (`/blog`)
4. ✅ Resources (`/resources`)
5. ✅ Tools (`/tools`)
6. ✅ Skill Test (`/skill-test`)
7. ✅ Resume Optimizer (`/resume-optimizer`)
8. ✅ CGPA Converter (`/tools/cgpa-converter`)
9. ✅ Salary Calculator (`/tools/salary-calculator`)
10. ✅ All tool pages
11. ✅ All resource pages
12. ✅ Sitemap updated with priorities

---

## 📋 Remaining Pages - Copy-Paste Templates

### Contact Page (`/src/app/contact/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Sproutern Support Team',
  description:
    "Have questions about internships or our platform? Contact Sproutern's support team. We're here to help students find internships and startups hire talent.",
  keywords: 'contact sproutern, customer support, help center, get in touch, support email',
  openGraph: {
    title: 'Contact Sproutern Support',
    description: 'Get help with internships, applications, and platform features.',
    url: 'https://sproutern.com/contact',
  },
  alternates: { canonical: 'https://sproutern.com/contact' },
};
```

### FAQ Page (`/src/app/faq/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions About Internships - Sproutern',
  description:
    'Find answers to common questions about internships, applications, resume building, and using Sproutern platform. Get help with your career journey.',
  keywords: 'internship FAQ, career questions, job search help, internship guide, common questions',
  openGraph: {
    title: 'Sproutern FAQ - Get Your Questions Answered',
    description: 'Common questions about internships, applications, and career planning.',
    url: 'https://sproutern.com/faq',
  },
  alternates: { canonical: 'https://sproutern.com/faq' },
};
```

### Testimonials Page (`/src/app/testimonials/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Success Stories | Testimonials & Reviews - Sproutern',
  description:
    "Read success stories from students who landed their dream internships through Sproutern. See how we've helped 10,000+ students start their careers.",
  keywords:
    'student testimonials, success stories, internship reviews, career success, student feedback',
  openGraph: {
    title: 'Sproutern Success Stories',
    description: 'Real stories from students who found their dream internships.',
    url: 'https://sproutern.com/testimonials',
  },
  alternates: { canonical: 'https://sproutern.com/testimonials' },
};
```

### Internships Page (`/src/app/internships/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse 1000+ Internships | Find Your Dream Opportunity - Sproutern',
  description:
    'Explore internship opportunities from top startups across India. Filter by location, domain, stipend, and duration. Apply directly and track your applications.',
  keywords:
    'browse internships, internship listings, startup jobs, student opportunities, internship search, find internships',
  openGraph: {
    title: 'Browse Internships - Sproutern',
    description: '1000+ internship opportunities from top startups in India.',
    url: 'https://sproutern.com/internships',
  },
  alternates: { canonical: 'https://sproutern.com/internships' },
};
```

### Post Internship Page (`/src/app/post-internship/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post an Internship | Hire Talented Students for Your Startup',
  description:
    'Post internship opportunities and connect with talented students. Get AI-powered candidate matching and streamlined hiring. Free for startups.',
  keywords:
    'post internship, hire interns, recruit students, startup hiring, talent acquisition, post job',
  openGraph: {
    title: 'Post Internship - Hire Talented Students',
    description: 'Connect with pre-vetted students ready to contribute to your startup.',
    url: 'https://sproutern.com/post-internship',
  },
  alternates: { canonical: 'https://sproutern.com/post-internship' },
};
```

### Requests Page (`/src/app/requests/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find Interns | Browse Student Profiles & Hire Talent - Sproutern',
  description:
    'Browse profiles of talented students looking for internships. Post requirements and get matched with qualified candidates. Streamline your hiring process.',
  keywords:
    'find interns, hire students, student profiles, talent search, intern recruitment, browse candidates',
  openGraph: {
    title: 'Find Interns - Browse Student Profiles',
    description: 'Access a pool of talented students ready for internships.',
    url: 'https://sproutern.com/requests',
  },
  alternates: { canonical: 'https://sproutern.com/requests' },
};
```

### Companies Page (`/src/app/companies/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Companies Hiring Interns | TCS, Infosys, Wipro & More - Sproutern',
  description:
    "Explore internship opportunities and interview questions from India's top companies. Get insights on salary, work culture, and hiring process.",
  keywords:
    'top companies, company internships, TCS, Infosys, Wipro, company reviews, interview questions',
  openGraph: {
    title: 'Top Companies Hiring Interns',
    description: "Explore opportunities at India's leading companies.",
    url: 'https://sproutern.com/companies',
  },
  alternates: { canonical: 'https://sproutern.com/companies' },
};
```

### Off-Campus Drives Page (`/src/app/off-campus-drives/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Off-Campus Drives 2025 | Latest Job Openings for Freshers',
  description:
    'Find latest off-campus drive details for freshers. Get updates on walk-in drives, eligibility criteria, and application deadlines from top companies.',
  keywords:
    'off campus drives, fresher jobs, walk-in drives, campus recruitment, job openings, fresher hiring',
  openGraph: {
    title: 'Off-Campus Drives 2025',
    description: 'Latest job openings and walk-in drives for freshers.',
    url: 'https://sproutern.com/off-campus-drives',
  },
  alternates: { canonical: 'https://sproutern.com/off-campus-drives' },
};
```

### Privacy Policy Page (`/src/app/privacy-policy/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | How Sproutern Protects Your Data',
  description:
    "Read Sproutern's privacy policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
  keywords: 'privacy policy, data protection, user privacy, terms of service, data security',
  alternates: { canonical: 'https://sproutern.com/privacy-policy' },
  robots: { index: true, follow: true },
};
```

### Terms and Conditions Page (`/src/app/terms-and-conditions/page.tsx`)

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Sproutern User Agreement',
  description:
    "Read Sproutern's terms and conditions. Understand your rights and responsibilities when using our internship platform.",
  keywords: 'terms and conditions, user agreement, terms of service, legal, user rights',
  alternates: { canonical: 'https://sproutern.com/terms-and-conditions' },
  robots: { index: true, follow: true },
};
```

---

## 🚀 Quick Implementation Steps

### Step 1: Add to Each Page (2 minutes per page)

1. Open the page file
2. Add `import { Metadata } from "next";` at top
3. Copy-paste the metadata export before the component
4. Save file

### Step 2: Verify (1 minute per page)

1. Run `npm run build`
2. Check for any errors
3. Visit page in browser
4. View page source to verify meta tags

### Step 3: Test SEO (5 minutes total)

1. Use Google's Rich Results Test
2. Check Open Graph tags with Facebook Debugger
3. Verify Twitter Card with Twitter Card Validator
4. Test mobile-friendliness

---

## 📊 Sitemap Priority Guide

### Priority 1.0 (Highest)

- Homepage

### Priority 0.9 (Very High)

- /internships
- /blog
- /resources
- /tools
- /resume-optimizer
- /tools/cgpa-converter
- /tools/salary-calculator
- /tools/resume-score-checker

### Priority 0.8 (High)

- /about
- /faq
- /post-internship
- /requests
- /companies
- /off-campus-drives
- /skill-test
- All resource pages
- All other tool pages
- Company interview pages

### Priority 0.7 (Medium)

- /contact
- /testimonials
- /post-request
- Blog posts

### Priority 0.5 (Low)

- /signin
- /signup
- /privacy-policy
- /terms-and-conditions

### Priority 0.4 (Very Low)

- /disclaimer
- /privacy
- /terms

---

## ✅ Verification Checklist

After adding metadata to all pages:

- [ ] All pages have unique titles
- [ ] All descriptions are 150-160 characters
- [ ] All keywords are relevant
- [ ] Canonical URLs are set
- [ ] Open Graph tags present
- [ ] Twitter Cards configured
- [ ] Sitemap includes all pages
- [ ] Robots.txt allows crawling
- [ ] No duplicate content
- [ ] Mobile-friendly verified

---

## 🎯 Expected SEO Impact

### Week 1

- All pages indexed by Google
- Improved search appearance
- Better click-through rates

### Month 1

- 50+ keywords ranking
- 5,000+ organic impressions
- 500+ organic clicks

### Month 3

- 200+ keywords ranking
- 50,000+ organic impressions
- 5,000+ organic clicks

### Month 6

- 500+ keywords ranking
- 200,000+ organic impressions
- 20,000+ organic clicks

---

## 📝 Notes

- Metadata is static and set at build time
- For dynamic pages (internships, profiles), use `generateMetadata` function
- Keep titles under 60 characters
- Keep descriptions under 160 characters
- Use primary keyword in title
- Use secondary keywords in description
- Always set canonical URL
- Include Open Graph for social sharing

---

**Last Updated**: December 2024 **Status**: ✅ Core pages complete, remaining pages ready for
implementation **Time Required**: ~30 minutes to add metadata to all remaining pages
