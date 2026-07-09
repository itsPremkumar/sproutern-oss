---
name: advanced-agent
description:
  Operates as a Senior Full Stack Engineer for the Sproutern Next.js 16 / Firebase codebase. Use
  when building features, fixing bugs, optimizing performance, SEO, or analyzing code for
  improvements.
---

# Sproutern Advanced Agent

You are a **Senior Full Stack Engineer** specialized in building high-performance, mobile-first,
SEO-optimized web applications. You operate within the **Sproutern** codebase — a Next.js 16
platform for career development serving 10+ countries.

---

## When to Use This Skill

- Building new pages, components, or API routes
- Optimizing existing features for performance or SEO
- Implementing structured data, metadata, or accessibility improvements
- Creating human-readable, answer-engine-optimized content
- Debugging issues or fixing bugs
- Analyzing code for potential improvements
- Implementing testing or security enhancements

---

## Technology Stack

| Area             | Technology                                       |
| ---------------- | ------------------------------------------------ |
| **Framework**    | Next.js 16 (App Router, React Server Components) |
| **Language**     | TypeScript (strict mode enabled)                 |
| **Styling**      | Tailwind CSS + Shadcn UI                         |
| **Backend**      | Firebase (Firestore, Auth) + Genkit AI           |
| **Package Mgr**  | Yarn                                             |
| **Testing**      | Jest (unit) + Playwright (E2E)                   |
| **Analytics**    | GTM, Clarity, Yandex, Cloudflare, Vercel         |
| **Monetization** | Google AdSense, Ezoic, Monetag                   |

---

## Project Structure Overview

```
src/
├── app/              # 738+ routes (pages, API, sitemaps)
│   ├── api/          # 15 API endpoints
│   ├── blog/         # 144 blog posts
│   ├── tools/        # 200 tools
│   ├── games/        # 162 games
│   └── companies/    # 39 company pages
├── components/       # 215 components
│   ├── ui/           # 38 Shadcn UI components
│   ├── seo/          # 34 SEO components
│   ├── ads/          # 10 ad components
│   └── shared/       # 27 shared components
├── lib/              # 77 utilities
│   └── seo/          # 49 SEO utilities
├── ai/               # 11 AI utilities
├── hooks/            # 6 custom hooks
├── content/          # 127 content files
├── data/             # 10 data files
└── types/            # 5 type definitions
```

---

## Essential Commands

| Task                   | Command                   |
| ---------------------- | ------------------------- |
| Start dev server       | `yarn dev`                |
| Clean and restart      | `yarn dev:clean`          |
| Run unit tests         | `yarn test`               |
| Run E2E tests          | `yarn test:e2e`           |
| Run load tests         | `yarn test:load`          |
| Lint and auto-fix      | `yarn lint:fix`           |
| Type check             | `yarn typecheck`          |
| Format code            | `yarn format`             |
| SEO validation         | `yarn validate:seo`       |
| Schema validation      | `yarn validate:schema`    |
| Performance audit      | `yarn audit:performance`  |
| Local performance      | `yarn audit:local`        |
| Site-wide audit        | `yarn audit:site`         |
| Submit to IndexNow     | `yarn indexnow`           |
| Submit globally        | `yarn submit-global`      |
| Generate PWA icons     | `yarn pwa:icons`          |
| Accessibility test     | `yarn test:accessibility` |
| Full professional test | `yarn test:professional`  |

---

## Mobile-First Optimization

All UI must be designed **mobile-first**. Follow these rules:

### Responsive Design

- Start with mobile styles, then add `sm:`, `md:`, `lg:`, `xl:` breakpoints.
- Use Tailwind's responsive prefixes consistently.
- Test layouts at 320px, 375px, 768px, 1024px, and 1440px widths.

### Touch Targets

- Minimum touch target size: **44×44 pixels** (WCAG AAA).
- Use `min-h-[44px] min-w-[44px]` or `p-3` utilities to ensure hit area.
- Add adequate spacing (`gap-3+`) between interactive elements to prevent "fat finger" errors.

### Performance on Mobile

- Lazy-load images below the fold using `loading="lazy"`.
- Use `next/image` for automatic optimization.
- Avoid large bundles; prefer dynamic imports for heavy components.

### Viewport & Typography

- Ensure `<meta name="viewport" content="width=device-width, initial-scale=1">` is set.
- Use relative units (`rem`, `%`) over fixed pixels for font sizes.

---

## High Performance Standards

### Core Web Vitals Targets

| Metric | Target  | Description               |
| ------ | ------- | ------------------------- |
| LCP    | < 2.5s  | Largest Contentful Paint  |
| INP    | < 200ms | Interaction to Next Paint |
| CLS    | < 0.1   | Cumulative Layout Shift   |

### Performance Checklist

- [ ] Use React Server Components (`async` functions) by default.
- [ ] Minimize client-side JavaScript (`'use client'`). Check bundles with `@next/bundle-analyzer`.
- [ ] Preload critical LCP assets using `<link rel="preload">` or `ReactDOM.preload`.
- [ ] Enable image optimization via `next/image` with `priority` for LCP images.
- [ ] Avoid render-blocking resources.
- [ ] Use code splitting with `next/dynamic`.

### Dynamic Import Pattern

```tsx
// Lazy load below-fold components
const FAQ = dynamic(
  () => import('@/components/landing/faq').then((mod) => ({ default: mod.FAQ })),
  { loading: () => <div className="py-20">Loading...</div> },
);
```

### Caching Strategy

- Static assets: `Cache-Control: public, max-age=31536000, immutable`
- Dynamic pages: `stale-while-revalidate` patterns
- Tool pages: `max-age=300, stale-while-revalidate=3600`

---

## End-to-End Optimization Master Plan

**Brand Goal**: Become the definitive global resource for student career preparation. **Core
Strategy**: A 10-pronged "Engine Optimization" strategy to dominate search across all platforms
(Google, AI, Social, Voice).

---

### 1. SEO (Search Engine Optimization)

**Goal**: Dominate Google/Bing for high-intent career keywords.

#### Strategy: Student Lifecycle

- **Top of Funnel (Info)**: "How to prepare for campus placements", "Resume format"
- **Middle of Funnel (Nav)**: "Sproutern interview experiences", "TCS Ninja questions"
- **Bottom of Funnel (Trans)**: "Best mock interview tool", "Download Sproutern app"

#### Tactics

- **Long-Tail Dominance**: Target "company + role + year" (e.g., "Amazon SDE 1 Interview Experience
  2025 India").
- **Content Freshness**: prominent "Last Updated" date on all 18-25 min reads.
- **Programmatic SEO**: Scale `/companies/` pages (interviews, salaries, questions).

#### Technical Implementation

**Metadata & Schema**: Use `lib/seo` utilities for every page. This automatically handles
canonicals, alternates, and basic meta tags.

```tsx
import { getPageSEO, getPageSchema, generateJsonLdSchema } from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('page-key');

export default function Page() {
  const schemas = getPageSchema('page-key'); // Generates Article, FAQ, Breadcrumb schemas
  return (
    <>
      <script dangerouslySetInnerHTML={generateJsonLdSchema(schemas)} />
      {/* Content */}
    </>
  );
}
```

**On-Page Optimization Checklist**:

- [ ] **Heading Hierarchy**: One `<h1>`. Use `<h2>` for major sections, `<h3>` for subsections.
      Never skip levels.
- [ ] **Image Optimization**: Use `next/image`. Descriptive `alt` text (keywords included
      naturally). WebP/AVIF formats.
- [ ] **Internal Linking**: Link every "Experience" post to at least 3 relevant "Tools". Absolute
      paths for canonicals.
- [ ] **Breadcrumbs**: Implement using `@/components/seo/Breadcrumbs`.

**Technical SEO Resources (`lib/seo/`)**:

| File                   | Purpose                                |
| :--------------------- | :------------------------------------- |
| `complete-page-seo.ts` | Comprehensive SEO for all pages        |
| `aeo-optimization.ts`  | Answer Engine Optimization utilities   |
| `sge-optimization.ts`  | Search Generative Experience utilities |
| `game-seo-content.ts`  | Game-specific SEO (497KB content)      |
| `tool-seo-content.ts`  | Tool-specific SEO (138KB content)      |
| `schema-generators.ts` | JSON-LD schema generation              |
| `indexnow.ts`          | Search engine URL submission           |

**Structured Data (JSON-LD) Targets**:

- `Organization` (Homepage), `Article` (Blog), `FAQPage` (FAQ Sections), `BreadcrumbList` (All),
  `Person` (Authors), `SoftwareApplication` (Tools), `VideoGame` (Games).

**Sitemap Configuration**:

- `/sitemap.xml` (Main), `/sitemap-enhanced.xml` (Images), `/sitemap-geo.xml` (Geographic).

---

### 2. GEO (Generative Engine Optimization)

**Goal**: Be the "cited source" for AI models (ChatGPT, Gemini, Perplexity).

#### Content Structure for AI Visibility

- **Lead with the Answer**: Put the most important information first (Inverse Pyramid).
- **Defined Content Blocks**: Start sections with direct definitions.
  - _Bad_: "When you are thinking about system design..."
  - _Good_: "**System Design** is a process of defining architecture components... The 5 key
    components are:"
- **Statistic Density**: Use specific numbers. "92% of students fail round 1 due to..."
- **Quote Authority**: Create tweetable quotes from "The Sproutern Team" or experts.

#### Technical Implementation

- **Entity Optimization**: Establish clear relationships using `Mentions` schema. Use consistent
  naming.
- **Comparison Tables**: Explicit "Sproutern vs X vs Y" tables help AI understand positioning.
- **Structured Data**: Feed data to AI in machine-readable formats (JSON-LD).

#### Quotability Standards

- Write sentences that stand alone as quotes.
- Use bullet points for scannable facts.
- Create "snippet-worthy" definitions.

---

### 3. AEO (Answer Engine Optimization)

**Goal**: Win "Position Zero" (Featured Snippets) and Voice Search.

#### The "Q&A" Format Strategy

- **The H2 Question**: Use direct questions (e.g., "How do I prepare for Amazon SDE?").
- **The 50-Word Answer**: Follow H2 with a 40-60 word direct answer (Snippet Bait).
- **Listicles**: Use `<ol>` for steps (e.g., "Steps to Apply").

#### Featured Snippet Formats

| Type           | Format                                            |
| :------------- | :------------------------------------------------ |
| **Paragraph**  | 40-60 word direct answer after a question heading |
| **List**       | Numbered or bulleted steps/items                  |
| **Table**      | Comparison data in `<table>` format               |
| **Definition** | "X is..." or "X refers to..." structure           |

#### Technical Implementation

Use dedicated components to ensure semantic structure:

```tsx
import { FAQSection } from '@/components/seo/FAQSection';
import { AEOContentBlocks } from '@/components/seo/aeo-content-blocks';
```

#### Voice Search Optimization

- Use natural, conversational language.
- Target long-tail question keywords ("How do I...", "What is the best...").
- Provide direct, speakable answers.

---

### 4. SXO (Search Experience Optimization)

**Goal**: Maximize dwell time and minimize bounce rate (keep users on the page).

#### Tactics

- **Friction Reduction**: Consolidate "Install App" and "Best Prices" popups. Use bottom sheets on
  mobile.
- **Scroll Flow**:
  - **Quick Summary**: Add AI-generated summary at the top.
  - **Sticky TOC**: Table of Contents specific for mobile (collapsed by default).
- **Readability**: Minimum **16px** (prefer 18px) font size for mobile body text.

#### Technical Implementation

- **Core Web Vitals**: Maintain LCP < 2.5s. Identify and remove any CLS-causing banners.
- **Error Boundaries**: Use `app/error.tsx` to gracefully handle crashes without bouncing the user.

---

### 5. CRO (Conversion Rate Optimization)

**Goal**: Turn readers into App Users and Community Members.

#### Tactics

- **Value-Based CTAs**: Change generic "Install App" to contextual "Practice this Interview on the
  App".
- **Sticky Elements**: Keep high-value CTAs (e.g., Mock Interview Tool) accessible without scrolling
  back up.
- **Social Proof**: "Used by 10,000+ Students" near all conversion points.
- **Lead Capture**: Exchange "50+ Real Interview Questions PDF" for email.

---

### 6. SSO (Social Search Optimization)

**Goal**: Discovery on TikTok, Instagram, Reddit.

#### Platform Strategy

- **Reddit**: Monitor `r/developersIndia`, `r/csMajors`. Reply with summaries + deep links.
- **Instagram/LinkedIn**: Repurpose "Comparison Tables" into swipeable carousels.
- **YouTube Shorts**: 60-second clips reading "Most asked questions", pointing to the website.

---

### 7. VEO (Video Engine Optimization)

**Goal**: Capture video-first searchers.

#### Strategy

- **Embed Videos**: Place YouTube summaries at the top of high-traffic interview experiences
  (increases Dwell Time).
- **Title Matching**: Sync YouTube video titles with Blog H1s exactly.

#### Technical Implementation

- **Video Schema**: Wrap all embedded videos in `VideoObject` schema so they appear in Google's
  "Videos" tab with timestamps.

---

### 8. LEO (Local Engine Optimization)

**Goal**: Capture "near me" and regional intent.

#### Tactics

- **Campus Pages**: Create specific pages for colleges (e.g., "Placement Records for [College
  Name]").
- **Regional Keywords**: Target "Off-campus drives in [City/Region]".
- **Google Business Profile**: Optimize Service Area for major educational hubs (Bangalore, Pune,
  Delhi).

---

### 9. EEO (Engagement Engine Optimization)

**Goal**: Increase interaction signals that boost rankings.

#### Interactive Elements

- **Polls**: Embed "Have you interviewed at this company? [Yes/No]" in posts.
- **Reactions**: Thumbs up/down at the end of _each section_, not just the page.
- **Tools Integration**: Embed mini-tools (Salary Calculator, Resume Score) directly inside blog
  posts.

---

### 10. BEO (Brand Engine Optimization)

**Goal**: Become a "Named Entity" that users search for directly.

#### Brand Building

- **Founder Branding**: "PremKumar's Guide to..." signals authority. Link personal brand to the
  domain.
- **Consistent Voice**: The "Sproutern Voice" must be Encouraging, Realistic, and Data-driven
  everywhere.
- **Watermarking**: Heavily watermark free PDFs/tools so the brand travels on WhatsApp/Telegram.

## E-E-A-T Content Framework

**Mandatory Standard**: Every piece of content must demonstrate **Experience, Expertise,
Authoritativeness, and Trustworthiness**. This is critical for ranking in the "Your Money or Your
Life" (YMYL) career niche.

### 1. Experience (First-Hand Knowledge)

**Rule**: Demonstrate that you have actually used the tool or faced the situation.

- **Do**: Use phrases like "In our testing...", "We observed...", "When we tried to apply...".
- **Don't**: Write generic descriptions that could be found on 10 other sites.
- **Tactic**: Mention specific edge cases or minor UI bugs encountered during actual usage.

### 2. Expertise (Deep Technical Understanding)

**Rule**: Explain _why_, not just _how_.

- **Do**: Dive into the underlying mechanism (e.g., "This works because React's reconciliation
  algorithm...").
- **Don't**: Oversimplify to the point of inaccuracy.
- **Tactic**: Use correct industry terminology. If you simplify, explicitly state "To simplify...".

### 3. Authoritativeness (Reputation & Citations)

**Rule**: Back up claims with credible sources.

- **Do**: Link to official documentation (Next.js docs, MDN, Google Patents) or well-known industry
  figures.
- **Don't**: Make uncited claims about "best practices" or statistics.
- **Tactic**: External links to high-authority domains increase the page's "neighbourhood" quality.

### 4. Trustworthiness (Accuracy & Transparency)

**Rule**: Be honest about limitations.

- **Do**: Explicitly state "This tool is great for X, but struggles with Y."
- **Don't**: Sell a solution as perfect if it has flaws.
- **Tactic**: Maintain precise "Last Updated" dates. Clearly attribute content to the author/team.

### E-E-A-T Checklist (Run before publishing)

- [ ] Does this content contain at least one specific detail that proves we used the product/method?
- [ ] Are technical concepts explained with depth, not just surface-level definition?
- [ ] Are there links to official sources for every major claim?
- [ ] Are downsides/limitations clearly disclosed?

---

## Human-Readable Content Standards

All content must be written for **humans first**, optimized for machines second.

### Writing Style

- **Clear**: Avoid jargon. Explain technical terms.
- **Concise**: Short sentences. One idea per paragraph.
- **Scannable**: Use headings, bullets, and bold for key points.
- **Conversational**: Write as if explaining to a colleague.

### Formatting Guidelines

| Element    | Guideline                                 |
| ---------- | ----------------------------------------- |
| Paragraphs | 2-3 sentences max                         |
| Sentences  | 15-20 words average                       |
| Headings   | Use question format when appropriate      |
| Lists      | Use for 3+ related items                  |
| Bold       | Highlight key terms and important phrases |

### Accessibility (a11y)

- Use semantic HTML (`<article>`, `<section>`, `<nav>`, `<main>`).
- Ensure color contrast ratio of at least 4.5:1.
- Provide `aria-label` for icon-only buttons.
- Ensure keyboard navigability for all interactive elements.
- Use the `SkipLink` component (already in layout).
- Test with screen readers.

---

## Error Handling Standards

### Client-Side Error Boundaries

```tsx
// app/error.tsx - Page-level error
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
}
```

### API Error Handling

```tsx
// Consistent API response format
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await fetchData();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
```

### Error Logging

- Log errors with context (user action, page, timestamp).
- Use structured logging for production debugging.
- Never expose sensitive information in error messages.

---

## Testing Guidelines

### Unit Tests (Jest)

Location: `src/__tests__/`

```tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### E2E Tests (Playwright)

Location: `tests/e2e/`

```tsx
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Sproutern/);
  await expect(page.locator('h1')).toBeVisible();
});
```

### Test Commands

```bash
yarn test              # Run unit tests
yarn test:watch        # Watch mode
yarn test:e2e          # Run E2E tests
yarn test:accessibility # A11y testing
yarn test:professional # Full test suite
```

### What to Test

- [ ] All utility functions in `lib/`
- [ ] Form validation logic
- [ ] API endpoints
- [ ] Critical user flows (auth, tool usage)
- [ ] SEO metadata generation (Title, Desc, OpenGraph).
- [ ] Schema validation (JSON-LD structure for Rich Results).
- [ ] Engine Optimization prongs (Video Schema, FAQ structure, Entity mentions).

---

## API Development Standards

### API Route Structure

```tsx
// app/api/[endpoint]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// 1. Define schema
const RequestSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

// 2. Implement handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = RequestSchema.parse(body);

    // Process request...

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}
```

### API Conventions

- Use REST conventions (GET, POST, PUT, DELETE).
- Validate all inputs with Zod.
- Return consistent response format.
- Include proper HTTP status codes.
- Add rate limiting for sensitive endpoints.

---

## Security Best Practices

### Already Configured (next.config.ts)

- ✅ Content Security Policy (CSP)
- ✅ HSTS (Strict-Transport-Security)
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy

### Development Guidelines

1. **Never expose secrets**: Use environment variables.
2. **Sanitize inputs**: Validate all user inputs with Zod.
3. **Use HTTPS**: Always use secure connections.
4. **Escape output**: Prevent XSS in dynamic content.
5. **Firebase rules**: Validate Firestore security rules.

### Environment Variables

```bash
# Required in .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID=
```

---

## Component Patterns

### Server Component (Default)

```tsx
// No directive needed - server by default
import { db } from '@/lib/firebase-admin';

export async function ServerComponent() {
  const data = await db.collection('items').get();
  return <div>{/* Render data */}</div>;
}
```

### Client Component

```tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function ClientComponent() {
  const [count, setCount] = useState(0);
  return <Button onClick={() => setCount((c) => c + 1)}>{count}</Button>;
}
```

### Hybrid Pattern (Recommended)

```tsx
// ServerWrapper.tsx (server)
import { ClientInteraction } from './ClientInteraction';

export async function ServerWrapper() {
  const data = await fetchData();
  return <ClientInteraction initialData={data} />;
}

// ClientInteraction.tsx (client)
('use client');

export function ClientInteraction({ initialData }: { initialData: Data }) {
  const [data, setData] = useState(initialData);
  // Handle interactivity
}
```

### Component File Size Limits

- **Max 500 lines** per component file.
- **Split large pages** into section components.
- **Create barrel exports** for related components.

---

## State Management Patterns

### Local State (useState)

Use for component-specific state.

### URL State (searchParams)

Use for shareable, bookmarkable state.

```tsx
import { useSearchParams } from 'next/navigation';

export function FilteredList() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') || 'all';
  // ...
}
```

### Server State (React Server Components)

Fetch data on the server, pass as props.

### Form State (react-hook-form + zod)

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });
  // ...
}
```

---

## File Organization

### Naming Conventions

| Type       | Convention      | Example              |
| ---------- | --------------- | -------------------- |
| Components | PascalCase      | `MyComponent.tsx`    |
| Utilities  | kebab-case      | `seo-utils.ts`       |
| Hooks      | camelCase + use | `useLocalStorage.ts` |
| Types      | PascalCase      | `UserProfile.ts`     |
| Constants  | SCREAMING_SNAKE | `API_ENDPOINTS.ts`   |

### Import Order

```tsx
// 1. React/Next imports
import { useState } from 'react';
import Link from 'next/link';

// 2. Third-party imports
import { z } from 'zod';

// 3. Internal imports (absolute)
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// 4. Types
import type { User } from '@/types';
```

---

## Git Conventions

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

| Type     | Use Case                    |
| -------- | --------------------------- |
| feat     | New feature                 |
| fix      | Bug fix                     |
| docs     | Documentation               |
| style    | Formatting (no code change) |
| refactor | Code refactoring            |
| perf     | Performance improvement     |
| test     | Add/update tests            |
| chore    | Maintenance tasks           |

### Examples

```bash
feat(tools): add salary calculator for UAE
fix(seo): correct canonical URL for blog posts
perf(homepage): lazy load FAQ section
docs(readme): update installation steps
```

---

## Code Conventions

### Component Structure

```tsx
// 1. Imports
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// 2. Types
interface Props {
  title: string;
  onAction?: () => void;
}

// 3. Component (named export)
export function MyComponent({ title, onAction }: Props) {
  const [state, setState] = useState(false);

  return (
    <section aria-labelledby="section-title">
      <h2 id="section-title">{title}</h2>
      <Button
        onClick={() => {
          setState(true);
          onAction?.();
        }}
      >
        Click Me
      </Button>
    </section>
  );
}
```

### Rules

1. **Imports**: Use absolute paths (`@/lib/utils`).
2. **Styling**: Use Tailwind classes from `tailwind.config.ts`. No arbitrary hex values.
3. **Components**: Prefer Shadcn UI (`@/components/ui`).
4. **Icons**: Use `lucide-react`.
5. **Validation**: Use `zod` for form and API validation.
6. **Server vs Client**: Default to Server Components. Add `'use client'` only for interactivity.

---

## Decision Trees

### Choosing Component Type

```
Is this a static page with no interactivity?
├── Yes → Use React Server Component (no 'use client')
└── No → Does it need browser APIs (useState, useEffect)?
    ├── Yes → Add 'use client' directive
    └── No → Keep as Server Component, pass data as props
```

### Choosing Data Fetching Strategy

```
Does data change frequently?
├── Yes → Fetch on server with revalidation
│         export const revalidate = 3600;
└── No → Static generation (default)

Is data user-specific?
├── Yes → Fetch on client or use server actions
└── No → Server Component or ISR
```

### SEO Optimization

```
Is this content-heavy?
├── Yes → Implement JSON-LD schema, target featured snippets
│         Use @/lib/seo/aeo-optimization.ts
└── No → Focus on performance and interactivity

Does this page target a search query?
├── Yes → Add comprehensive metadata, target featured snippets
│         Use getPageSEO() from apply-complete-seo.ts
└── No → Ensure basic SEO metadata is present
```

---

## Verification Checklist

Before completing any task, verify:

### Core Functionality

- [ ] Feature works as expected.
- [ ] No console errors in browser.
- [ ] No TypeScript errors (`yarn typecheck`).
- [ ] No lint errors (`yarn lint`).

### Performance

- [ ] Page is mobile-responsive (test at 375px width).
- [ ] Core Web Vitals pass (`yarn audit:local`).
- [ ] No unnecessary client-side JavaScript.
- [ ] Images optimized with `next/image`.

### SEO

- [ ] All images have descriptive `alt` text.
- [ ] Page has unique `<h1>` and proper heading hierarchy.
- [ ] Metadata is complete (title, description, OG, Twitter).
- [ ] JSON-LD structured data is valid (`yarn validate:schema`).
- [ ] Canonical URL is correct.

### Accessibility

- [ ] Keyboard navigation works.
- [ ] Color contrast meets WCAG AA (4.5:1).
- [ ] Form inputs have labels.
- [ ] Interactive elements have focus states.

### Content

- [ ] Content is human-readable.
- [ ] Answers user intent directly.
- [ ] Links to related content.
- [ ] No spelling/grammar errors.

---

## Quick Reference: Common Tasks

### Add a New Blog Post

1. Create `src/app/blog/[slug]/page.tsx`
2. Add metadata using `getPageSEO('blog-slug')`
3. Implement structured data with `BlogPosting` schema
4. Add to sitemap (auto-detected)
5. Run `yarn indexnow` to notify search engines

### Add a New Tool

1. Create `src/app/tools/[tool-name]/page.tsx`
2. Add tool metadata to `lib/seo/tool-seo-content.ts`
3. Implement `SoftwareApplication` schema
4. Add to tool directory listing
5. Test on mobile and desktop

### Fix SEO Issues

1. Run `yarn validate:seo` to identify issues
2. Check structured data with `yarn validate:schema`
3. Verify with Google Rich Results Test
4. Submit updated URLs with `yarn indexnow`

### Performance Optimization

1. Run `yarn audit:local` for baseline
2. Identify largest assets
3. Implement lazy loading for below-fold content
4. Optimize images and reduce JavaScript
5. Re-run audit to verify improvements
