import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  PenTool,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  FileText,
  Edit,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Writing Internships: Complete Guide',
  description:
    'Break into content writing with this comprehensive guide. Learn required skills, portfolio tips, and how to land your first writing internship.',
  keywords: [
    'content writing internship',
    'copywriting internship',
    'content marketing career',
    'freelance writing',
    'seo writing',
  ],
  openGraph: {
    title: 'Content Writing Internships: Complete Guide',
    description: 'Start your content writing career.',
    type: 'article',
    publishedTime: '2025-12-01T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-violet-600">
            <PenTool className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Content Writing Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Content is king in the digital age. Learn how to build your writing
            portfolio and land your first content writing internship.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>16 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                1. Types of Content Writing
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Required Skills
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-primary hover:underline"
              >
                3. Building Your Portfolio
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                4. Top Companies
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                5. Salary & Growth
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                6. FAQs
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Portfolio matters more than degrees—start writing today
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>SEO knowledge dramatically increases your value</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Niche specialization leads to higher pay</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Content writing can easily transition to freelancing</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            1. Types of Content Writing
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-violet-600">Blog Writing</p>
              <p className="text-muted-foreground">
                Long-form articles, how-to guides, listicles
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-violet-600">Copywriting</p>
              <p className="text-muted-foreground">
                Ads, landing pages, sales emails
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-violet-600">SEO Writing</p>
              <p className="text-muted-foreground">
                Keyword-optimized content for search
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-violet-600">Technical Writing</p>
              <p className="text-muted-foreground">
                Documentation, guides, manuals
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-violet-600">Social Media</p>
              <p className="text-muted-foreground">
                Captions, threads, engagement content
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-violet-600">Script Writing</p>
              <p className="text-muted-foreground">
                YouTube videos, podcasts, reels
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Edit className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>Grammar & Language:</strong> Flawless writing fundamentals
            </li>
            <li>
              <strong>Research:</strong> Finding and validating information
            </li>
            <li>
              <strong>Adaptability:</strong> Writing in different tones and
              styles
            </li>
            <li>
              <strong>Deadlines:</strong> Delivering quality work on time
            </li>
          </ul>

          <h3>Good to Have</h3>
          <ul>
            <li>SEO basics (keywords, meta descriptions)</li>
            <li>WordPress/CMS experience</li>
            <li>Basic graphic design (Canva)</li>
            <li>Analytics understanding (Google Analytics)</li>
          </ul>
        </section>

        {/* Section 3: Portfolio */}
        <section
          id="portfolio"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            3. Building Your Portfolio
          </h2>

          <h3>Where to Publish</h3>
          <ul>
            <li>
              <strong>Medium:</strong> Great for long-form, has built-in
              audience
            </li>
            <li>
              <strong>LinkedIn:</strong> Professional visibility, good for B2B
            </li>
            <li>
              <strong>Personal Blog:</strong> Full control, shows commitment
            </li>
            <li>
              <strong>Guest Posts:</strong> Write for established publications
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Start a niche blog (tech, finance,
              health) and write 10-15 quality articles. This alone can land you
              internships.
            </div>
          </div>
        </section>

        {/* Section 4: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Top Companies
          </h2>

          <h3>Content Agencies</h3>
          <p>Pepper Content, Contentfly, Wittypen, BlogVault, Starter Story</p>

          <h3>Tech Companies</h3>
          <p>Zoho, Freshworks, Razorpay, CRED (always need content)</p>

          <h3>Media & Publishing</h3>
          <p>YourStory, Inc42, The Better India, Scoopwhoop</p>
        </section>

        {/* Section 5: Salary */}
        <section
          id="salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            5. Salary & Growth
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Level</th>
                  <th className="p-3 text-left">Salary (Monthly)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Intern</td>
                  <td className="p-3">₹5K - ₹15K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Junior Writer (0-2 yrs)</td>
                  <td className="p-3">₹15K - ₹35K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Senior Writer (2-5 yrs)</td>
                  <td className="p-3">₹40K - ₹80K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Content Lead</td>
                  <td className="p-3">₹80K - ₹1.5L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            6. FAQs
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">Do I need a journalism degree?</p>
              <p className="mt-2 text-muted-foreground">
                No. Most successful content writers come from diverse
                backgrounds. Your portfolio matters more than your degree.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How do I get my first paid gig?</p>
              <p className="mt-2 text-muted-foreground">
                Build a portfolio on Medium, apply on platforms like Pepper
                Content, or reach out to startups directly with samples.
              </p>
            </div>
          </div>
        </section>

        {/* Writing Process */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            The Professional Writing Process
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">1. Research (30% of time)</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Read competitors, find unique angles, gather data. Good research
                makes writing easier.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">2. Outline (10% of time)</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Structure your article with headings. Never write without an
                outline—it prevents writer's block.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">3. First Draft (40% of time)</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Write without editing. Get all ideas down. Don't worry about
                perfection—that's for editing.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">4. Edit & Polish (20% of time)</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Cut unnecessary words, check grammar, improve flow. Use tools
                like Grammarly and Hemingway Editor.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Deep Dive */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            SEO Writing Essentials
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-violet-600">On-Page SEO</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Use primary keyword in title, H1, and first paragraph</li>
                <li>• Include keywords in H2s naturally</li>
                <li>• Write compelling meta descriptions (150-160 chars)</li>
                <li>• Use internal links to related content</li>
                <li>• Add alt text to images</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-violet-600">
                Content Optimization
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Aim for 1500+ words for comprehensive topics</li>
                <li>• Use short paragraphs (2-3 sentences max)</li>
                <li>• Add bullet points and numbered lists</li>
                <li>• Include expert quotes and statistics</li>
                <li>• Update content regularly for freshness</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-violet-600">Tools to Learn</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Ahrefs/SEMrush (keyword research)</li>
                <li>• Surfer SEO (content optimization)</li>
                <li>• Google Search Console (performance tracking)</li>
                <li>• Clearscope/MarketMuse (content analysis)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Types Deep Dive */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Content Types: Deep Dive
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-violet-600">Blog Writing</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Long-form educational content. Great for SEO and building
                authority. Most common entry point.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Per Article:</span>
                  <span className="font-semibold">₹500-5000</span>
                </div>
                <div className="flex justify-between">
                  <span>Word Length:</span>
                  <span className="font-semibold">1000-3000 words</span>
                </div>
                <div className="flex justify-between">
                  <span>Best For:</span>
                  <span className="font-semibold">Beginners</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-violet-600">Copywriting</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Persuasive writing for conversions. Ads, landing pages, emails.
                Higher paying than blog writing.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Per Project:</span>
                  <span className="font-semibold">₹2000-20000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">Psychology, Sales</span>
                </div>
                <div className="flex justify-between">
                  <span>Best For:</span>
                  <span className="font-semibold">Creative writers</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-violet-600">
                Technical Writing
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Documentation, APIs, user guides. High demand in tech. Requires
                subject matter expertise.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Per Project:</span>
                  <span className="font-semibold">₹3000-25000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Skills:</span>
                  <span className="font-semibold">Tech knowledge, Clarity</span>
                </div>
                <div className="flex justify-between">
                  <span>Best For:</span>
                  <span className="font-semibold">Tech-savvy writers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Freelancing Guide */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Transitioning to Freelance
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Start While Employed</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Take 2-3 freelance clients while in your internship/job. Build
                income before going fully freelance.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Set Your Rates Right</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Start at ₹1-2 per word for beginners. Move to ₹3-5 per word with
                experience. Per-project is often better.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Build Retainer Relationships</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Seek clients who need ongoing content (blogs, newsletters).
                Retainers provide stable income.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Platforms to Find Clients</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Pepper Content, Upwork, LinkedIn, Twitter, cold email. Best
                clients often come from referrals.
              </p>
            </div>
          </div>
        </section>

        {/* More FAQs */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            More Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How much can I earn as a freelance writer?
              </h3>
              <p className="text-muted-foreground">
                Top freelance writers in India earn ₹1-3 lakh/month. Most earn
                ₹30K-80K. Niche expertise and client quality matter.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I specialize in a niche?
              </h3>
              <p className="text-muted-foreground">
                Yes! Specialists earn 2-3x more than generalists. Pick a niche
                you're interested in: fintech, SaaS, health, tech.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the best way to learn SEO writing?
              </h3>
              <p className="text-muted-foreground">
                Take free courses from Moz, HubSpot, and Ahrefs. Practice by
                writing and tracking what ranks. Learn by doing.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I handle writer's block?
              </h3>
              <p className="text-muted-foreground">
                Research more, change environment, start with the easiest
                section, or just write badly and edit later. Motion creates
                momentum.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is AI going to replace content writers?
              </h3>
              <p className="text-muted-foreground">
                AI changes the job but won't replace good writers. AI-assisted
                writing is the future. Learn to use AI tools as a superpower.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How long does it take to become a good writer?
              </h3>
              <p className="text-muted-foreground">
                6-12 months of consistent practice. Write every day, read a lot,
                and get feedback. Improvement is inevitable with deliberate
                practice.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-violet-500 bg-violet-50 p-5 dark:bg-violet-950">
              <p className="font-semibold text-violet-900 dark:text-violet-100">
                "From intern to ₹1L/month freelancer..."
              </p>
              <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                "Started as a ₹10K/month content writing intern. Built my
                portfolio, specialized in SaaS, and now earn ₹1L+ monthly with 3
                retainer clients. All remote." — Sneha, Mumbai
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-violet-500 bg-violet-50 p-5 dark:bg-violet-950">
              <p className="font-semibold text-violet-900 dark:text-violet-100">
                "Engineering dropout turned writer..."
              </p>
              <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                "Left engineering in 3rd year, started a Medium blog. Got
                noticed by a startup, became their content lead. Now head of
                content at a Series B fintech." — Arjun, Bengaluru
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-violet-500 bg-violet-50 p-5 dark:bg-violet-950">
              <p className="font-semibold text-violet-900 dark:text-violet-100">
                "LinkedIn became my client acquisition machine..."
              </p>
              <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                "Started posting daily on LinkedIn about writing tips. Got 50K
                followers in a year. Now clients come to me—I haven't applied
                for a job in 2 years." — Priya, Delhi
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Content Writing Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have 5-10 writing samples ready</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Know basic SEO (keywords, meta descriptions)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can write in different tones/styles</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Comfortable with tight deadlines</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have a portfolio website or Medium profile</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Know how to use writing tools (Grammarly, etc.)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can research and verify information</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Open to feedback and revisions</span>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Best Learning Resources
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Books</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• On Writing Well - William Zinsser</li>
                <li>• Everybody Writes - Ann Handley</li>
                <li>• The Elements of Style - Strunk & White</li>
                <li>• Made to Stick - Chip & Dan Heath</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Free Courses</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Content Marketing (HubSpot Academy)</li>
                <li>• SEO Fundamentals (Moz)</li>
                <li>• Blogging for Business (Ahrefs)</li>
                <li>• Copywriting Basics (Google)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Newsletters to Follow</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• The Content Marketing Institute</li>
                <li>• Copyblogger</li>
                <li>• Ann Handley's Total Annarchy</li>
                <li>• Brain Pickings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of a
            Content Writer
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-violet-600">
                9:00
              </div>
              <div>
                <p className="font-semibold">Check Assignments</p>
                <p className="text-sm text-muted-foreground">
                  Review today's tasks, pending articles, and client feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-violet-600">
                9:30
              </div>
              <div>
                <p className="font-semibold">Research Block</p>
                <p className="text-sm text-muted-foreground">
                  Deep research for assigned topics. Read competitors, find
                  data, create outlines.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-violet-600">
                11:00
              </div>
              <div>
                <p className="font-semibold">Writing Session 1</p>
                <p className="text-sm text-muted-foreground">
                  Peak creative hours. Write first drafts without stopping to
                  edit.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-violet-600">
                14:00
              </div>
              <div>
                <p className="font-semibold">Editing & Revisions</p>
                <p className="text-sm text-muted-foreground">
                  Edit previous drafts, incorporate feedback, polish content for
                  publishing.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-violet-600">
                16:00
              </div>
              <div>
                <p className="font-semibold">Client Communication</p>
                <p className="text-sm text-muted-foreground">
                  Send updates, discuss new projects, clarify requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-violet-600">
                17:00
              </div>
              <div>
                <p className="font-semibold">Learning & Planning</p>
                <p className="text-sm text-muted-foreground">
                  Read industry content, plan tomorrow's work, update project
                  trackers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Beginner Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Writing without research
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Good writing starts with good research. Don't wing it— quality
                  content needs data and examples.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Editing while writing
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Separate creation from editing. Write the full draft first,
                  then edit. Multitasking kills creativity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Ignoring SEO
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Great content that no one finds is useless. Learn basic SEO to
                  make your work discoverable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Underpricing yourself
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Many new writers charge too little. Know your worth and
                  increase rates as you improve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Tips */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Pro Writing Tips
          </h2>

          <div className="my-6 space-y-4">
            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Use the "So what?" test:</strong> After every sentence,
                ask "So what?" If there's no clear answer, cut or improve it.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Read your writing aloud:</strong> It reveals awkward
                phrasing and run-on sentences that your eyes miss.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Write for scanners:</strong> Use headings, bullets, and
                bold text. Most readers scan before deciding to read.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Keep a swipe file:</strong> Save great headlines,
                intros, and CTAs you find online. Study what works.
              </div>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Start Writing Today</h2>
          <p>
            Content writing is one of the most accessible career paths. You
            don't need expensive courses or degrees—just start writing and
            publishing.
          </p>
          <p>
            The internet needs content. Businesses need writers. The only
            barrier is starting. Your first article won't be great, but your
            100th will be.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best writers are also the most consistent. Write every day. ✍️
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Building Guide
            </Link>
            <Link
              href="/blog/freelancing-students-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Freelancing Guide
            </Link>
            <Link
              href="/blog/marketing-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Marketing Internships
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Internships
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on insights from content marketing professionals.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
