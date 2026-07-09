# How to Apply SEO to All Pages - Implementation Guide

## 🚀 Quick Start

All SEO metadata is ready to use. Follow these simple steps to apply it to your pages.

---

## 📁 File Structure

```
src/
├── lib/
│   └── seo/
│       ├── page-metadata.ts          # Structured data generators
│       ├── all-pages-metadata.ts     # Main pages metadata
│       ├── blog-metadata.ts          # Blog posts metadata
│       └── apply-seo.ts              # Helper functions
└── components/
    └── seo/
        └── StructuredData.tsx        # Schema component
```

---

## 🎯 How to Apply SEO to Different Page Types

### 1. Main Pages (About, Contact, FAQ, etc.)

```typescript
// Example: src/app/about/page.tsx
import { generatePageMetadata } from "@/lib/seo/apply-seo";

export const metadata = generatePageMetadata("about");

export default function AboutPage() {
  return <div>About content...</div>;
}
```

**Available page keys**:

- `home`, `about`, `contact`, `faq`, `testimonials`, `donate`
- `internships`, `postInternship`, `requests`, `postRequest`
- `companies`, `offCampusDrives`
- `signin`, `signup`
- `privacyPolicy`, `termsAndConditions`, `disclaimer`

---

### 2. Blog Posts

```typescript
// Example: src/app/blog/[slug]/page.tsx
import { generateBlogPostMetadata } from "@/lib/seo/apply-seo";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return generateBlogPostMetadata(params.slug);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <article>Blog content...</article>;
}
```

---

### 3. Tool Pages

```typescript
// Example: src/app/tools/cgpa-converter/page.tsx
import { generateToolMetadata } from "@/lib/seo/apply-seo";

export const metadata = generateToolMetadata({
  name: "CGPA Converter",
  title: "CGPA to Percentage Converter | Free Online Calculator - Sproutern",
  description: "Convert your CGPA to percentage instantly with our free online calculator. Supports 10-point, 7-point, and 4-point scales.",
  keywords: "CGPA to percentage, CGPA calculator, percentage converter, GPA calculator",
  slug: "cgpa-converter",
});

export default function CGPAConverterPage() {
  return <div>Tool content...</div>;
}
```

---

### 4. Resource Pages

```typescript
// Example: src/app/resources/resume-templates/page.tsx
import { generateResourceMetadata } from "@/lib/seo/apply-seo";

export const metadata = generateResourceMetadata({
  name: "Resume Templates",
  title: "Free ATS-Friendly Resume Templates - Download Now",
  description: "Download 5 professional ATS-friendly resume templates. Optimized for applicant tracking systems.",
  keywords: "resume templates, ATS resume, free resume templates",
  slug: "resume-templates",
});

export default function ResumeTemplatesPage() {
  return <div>Resource content...</div>;
}
```

---

### 5. Company Pages

```typescript
// Example: src/app/companies/tcs/interview-questions/page.tsx
import { generateCompanyPageMetadata } from "@/lib/seo/apply-seo";

export const metadata = generateCompanyPageMetadata("TCS", "interview-questions");

export default function TCSInterviewQuestionsPage() {
  return <div>Interview questions...</div>;
}
```

---

### 6. Dynamic Internship Pages

```typescript
// Example: src/app/internships/[internshipId]/page.tsx
import { generateInternshipMetadata } from "@/lib/seo/apply-seo";

export async function generateMetadata({ params }: { params: { internshipId: string } }) {
  // Fetch internship data
  const internship = await getInternshipData(params.internshipId);

  return generateInternshipMetadata({
    title: internship.title,
    company: internship.company,
    location: internship.location,
    stipend: internship.stipend,
    duration: internship.duration,
  });
}

export default function InternshipPage({ params }: { params: { internshipId: string } }) {
  return <div>Internship details...</div>;
}
```

---

## 🏗️ Adding Structured Data

### Organization Schema (Add to Root Layout)

```typescript
// src/app/layout.tsx
import { generateOrganizationSchema } from "@/lib/seo/page-metadata";
import { StructuredData } from "@/components/seo/StructuredData";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <StructuredData data={generateOrganizationSchema()} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Breadcrumb Schema

```typescript
import { generateBreadcrumbSchema } from "@/lib/seo/page-metadata";
import { StructuredData } from "@/components/seo/StructuredData";

export default function ToolPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sproutern.com" },
    { name: "Tools", url: "https://sproutern.com/tools" },
    { name: "CGPA Converter", url: "https://sproutern.com/tools/cgpa-converter" },
  ];

  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      <div>Page content...</div>
    </>
  );
}
```

### FAQ Schema

```typescript
import { generateFAQSchema } from "@/lib/seo/page-metadata";
import { StructuredData } from "@/components/seo/StructuredData";

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I apply for internships?",
      answer: "You can apply for internships by creating a free account and clicking the Apply button on any internship listing.",
    },
    // ... more FAQs
  ];

  return (
    <>
      <StructuredData data={generateFAQSchema(faqs)} />
      <div>FAQ content...</div>
    </>
  );
}
```

### Article Schema (Blog Posts)

```typescript
import { generateArticleSchema } from "@/lib/seo/page-metadata";
import { StructuredData } from "@/components/seo/StructuredData";

export default function BlogPost() {
  const article = {
    title: "How to Land Your First Internship",
    description: "Complete guide to landing your first internship...",
    url: "https://sproutern.com/blog/first-internship-guide",
    datePublished: "2024-12-01",
    dateModified: "2024-12-15",
    author: "Sproutern Team",
    image: "https://sproutern.com/images/blog/first-internship.jpg",
  };

  return (
    <>
      <StructuredData data={generateArticleSchema(article)} />
      <article>Blog content...</article>
    </>
  );
}
```

---

## 📝 Step-by-Step Implementation

### Step 1: Update Main Pages

Update these files with metadata:

```bash
src/app/about/page.tsx
src/app/contact/page.tsx
src/app/faq/page.tsx
src/app/testimonials/page.tsx
src/app/doneate/page.tsx
src/app/internships/page.tsx
src/app/post-internship/page.tsx
src/app/requests/page.tsx
src/app/companies/page.tsx
src/app/off-campus-drives/page.tsx
src/app/signin/page.tsx
src/app/signup/page.tsx
src/app/privacy-policy/page.tsx
src/app/terms-and-conditions/page.tsx
src/app/disclaimer/page.tsx
```

### Step 2: Update Blog Posts

For each blog post in `src/app/blog/[slug]/`, add:

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }) {
  return generateBlogPostMetadata(params.slug);
}
```

### Step 3: Verify Tool Pages

All tool pages already have metadata. Verify they're using the correct format.

### Step 4: Verify Resource Pages

All resource pages already have metadata. Verify they're using the correct format.

### Step 5: Add Structured Data

Add structured data to:

- Root layout (Organization schema)
- FAQ page (FAQ schema)
- Blog posts (Article schema)
- Tool pages (SoftwareApplication schema)
- All pages (Breadcrumb schema)

---

## 🔍 Testing Your SEO

### 1. Test Metadata

Visit each page and check:

- Page title in browser tab
- Meta description in page source
- Open Graph tags (share on social media)
- Canonical URL

### 2. Test Structured Data

Use Google's Rich Results Test: https://search.google.com/test/rich-results

Paste your page URL and verify schema markup.

### 3. Test Sitemap

Visit: `https://sproutern.com/sitemap.xml`

Verify all pages are listed.

### 4. Test Robots.txt

Visit: `https://sproutern.com/robots.txt`

Verify it points to sitemap.

---

## 📊 Monitoring SEO Performance

### Google Search Console

1. Add property: `https://sproutern.com`
2. Verify ownership
3. Submit sitemap: `https://sproutern.com/sitemap.xml`
4. Monitor:
   - Impressions
   - Clicks
   - Average position
   - Coverage issues

### Google Analytics 4

1. Create GA4 property
2. Add tracking code to layout
3. Monitor:
   - Organic traffic
   - User behavior
   - Conversion rates
   - Top pages

---

## 🎯 Priority Implementation Order

### Week 1: Foundation

1. ✅ Apply metadata to all main pages
2. ✅ Apply metadata to all tool pages
3. ✅ Apply metadata to all resource pages
4. ✅ Submit sitemap to Google Search Console
5. ✅ Verify site ownership

### Week 2: Content

1. ✅ Apply metadata to all blog posts
2. ✅ Add structured data to key pages
3. ✅ Optimize images (alt text, WebP)
4. ✅ Add internal links
5. ✅ Request indexing for all pages

### Week 3: Enhancement

1. Add FAQ schema to FAQ page
2. Add Article schema to blog posts
3. Add Breadcrumb schema to all pages
4. Optimize page speed
5. Fix any crawl errors

### Week 4: Promotion

1. Share tools on social media
2. Submit to tool directories
3. Reach out for backlinks
4. Publish new blog posts
5. Monitor and adjust

---

## 🚨 Common Issues & Solutions

### Issue 1: Metadata Not Showing

**Problem**: Page title/description not appearing in search results

**Solution**:

- Clear cache and rebuild
- Check if metadata is exported correctly
- Verify no duplicate metadata exports
- Wait 24-48 hours for Google to re-crawl

### Issue 2: Sitemap Not Updating

**Problem**: New pages not appearing in sitemap

**Solution**:

- Rebuild the application
- Check sitemap.ts for errors
- Verify page paths are correct
- Resubmit sitemap to GSC

### Issue 3: Structured Data Errors

**Problem**: Schema markup validation errors

**Solution**:

- Use Google's Rich Results Test
- Check JSON-LD syntax
- Verify required fields are present
- Test with Schema.org validator

---

## 📚 Additional Resources

### Documentation

- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org)

### Tools

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev)

### Learning

- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Ahrefs SEO Course](https://ahrefs.com/academy/seo-training-course)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

## ✅ Final Checklist

Before going live:

- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] All pages have keywords
- [ ] Canonical URLs are set
- [ ] Open Graph tags are present
- [ ] Twitter Cards are configured
- [ ] Sitemap is generated
- [ ] Robots.txt is configured
- [ ] Structured data is added
- [ ] Images have alt text
- [ ] Internal links are added
- [ ] Page speed is optimized
- [ ] Mobile-friendly verified
- [ ] SSL certificate active
- [ ] Google Search Console set up
- [ ] Google Analytics set up

---

**Need Help?**

Refer to:

- `/COMPLETE_SEO_IMPLEMENTATION.md` - Full page list
- `/SEO_IMPLEMENTATION.md` - Detailed guide
- `/SEO_QUICK_REFERENCE.md` - Quick reference

**Last Updated**: December 2024
