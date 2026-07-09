import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Megaphone,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  BarChart,
  Mail,
  Share2,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing Internships: Complete Guide',
  description:
    'Break into marketing with this comprehensive internship guide. Learn digital marketing skills, build your portfolio, and land marketing roles.',
  keywords: [
    'marketing internship',
    'digital marketing internship',
    'content marketing career',
    'social media marketing internship',
    'marketing career india',
  ],
  openGraph: {
    title: 'Marketing Internships: Complete Guide',
    description: 'Start your marketing career with the right internship.',
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
          <div className="mb-4 flex items-center gap-2 text-red-600">
            <Megaphone className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Marketing Career
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Marketing Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Marketing is creative, data-driven, and high-impact. Learn how to
            break into this exciting field with the right internship.
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
                1. Types of Marketing Roles
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
                href="#interview"
                className="text-primary hover:underline"
              >
                5. Interview Process
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
              <span>Digital marketing skills are in highest demand</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Personal projects (blogs, social media) count as experience
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Learn Google Analytics and basic SEO</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Creativity + data skills = winning combination</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Types of Marketing Roles
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Digital Marketing</p>
              <p className="text-muted-foreground">
                SEO, SEM, paid ads, performance marketing
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Content Marketing</p>
              <p className="text-muted-foreground">
                Blogs, videos, podcasts, thought leadership
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Social Media</p>
              <p className="text-muted-foreground">
                Platform management, community, influencers
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Product Marketing</p>
              <p className="text-muted-foreground">
                Positioning, launches, GTM strategy
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
            <BarChart className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>Writing:</strong> Clear, engaging copy
            </li>
            <li>
              <strong>Analytics:</strong> Google Analytics, data interpretation
            </li>
            <li>
              <strong>Social Media:</strong> Platform knowledge, trends
            </li>
            <li>
              <strong>Basic Design:</strong> Canva for quick graphics
            </li>
          </ul>

          <h3>Good to Have</h3>
          <ul>
            <li>SEO fundamentals</li>
            <li>Email marketing (Mailchimp, etc.)</li>
            <li>Paid ads (Google Ads, Meta Ads)</li>
            <li>Video editing basics</li>
          </ul>
        </section>

        {/* Section 3: Portfolio */}
        <section
          id="portfolio"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Share2 className="h-6 w-6 text-primary" />
            3. Building Your Portfolio
          </h2>

          <h3>Project Ideas</h3>
          <ul>
            <li>
              <strong>Personal blog:</strong> Write about topics you care about
            </li>
            <li>
              <strong>Social media:</strong> Grow your own following (even 1K
              counts)
            </li>
            <li>
              <strong>Marketing case study:</strong> Analyze a brand's strategy
            </li>
            <li>
              <strong>Volunteer:</strong> Help local businesses or NGOs with
              marketing
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Document everything with metrics. "Grew
              Instagram from 0 to 500 followers in 2 months" is better than
              "Managed social media."
            </div>
          </div>
        </section>

        {/* Section 4: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            4. Top Companies
          </h2>

          <h3>Startups & D2C Brands</h3>
          <p>CRED, Meesho, BoAt, Mamaearth, Lenskart, Nykaa, Sugar Cosmetics</p>

          <h3>Agencies</h3>
          <p>Dentsu, Ogilvy, Leo Burnett, The Glitch, FoxyMoron, Schbang</p>

          <h3>Tech Companies</h3>
          <p>Google, Meta, Amazon, Flipkart (marketing roles)</p>
        </section>

        {/* Section 5: Interview */}
        <section
          id="interview"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Interview Process
          </h2>

          <ol>
            <li>
              <strong>Portfolio Review:</strong> Discuss your projects and
              metrics
            </li>
            <li>
              <strong>Case Study:</strong> How would you market X product?
            </li>
            <li>
              <strong>Writing Test:</strong> Write a sample ad copy or blog
            </li>
            <li>
              <strong>Culture Fit:</strong> Creativity, curiosity, team fit
            </li>
          </ol>
        </section>

        {/* Section 6: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            6. FAQs
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">Is an MBA required for marketing?</p>
              <p className="mt-2 text-muted-foreground">
                Not for internships or entry-level roles. Skills and portfolio
                matter more. MBA can help for senior roles.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Which is better: agency or in-house?</p>
              <p className="mt-2 text-muted-foreground">
                Agencies: variety, fast-paced, diverse clients. In-house: depth,
                ownership, product focus. Both are valuable.
              </p>
            </div>
          </div>
        </section>

        {/* Role Deep Dives */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Marketing Roles: Deep Dive
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-red-600">
                Performance Marketing
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Run paid campaigns on Google, Meta, YouTube. Data-heavy role
                focused on ROI, CAC, and LTV metrics.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹20K-50K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Google Ads, Meta Ads, Excel
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">Growth Head, CMO</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-red-600">Content Marketing</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Create valuable content that attracts and retains customers.
                Includes blogs, videos, podcasts, and thought leadership.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹15K-35K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Writing, SEO, storytelling
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">
                    Content Lead, Head of Content
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-red-600">
                Social Media Marketing
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Manage brand presence across platforms. Create engaging content,
                build community, and drive engagement.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹12K-30K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Content creation, trends, analytics
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">Social Lead, Brand Head</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-red-600">Product Marketing</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Position products, craft messaging, and drive launches. Bridge
                between product, sales, and marketing teams.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹25K-60K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Positioning, GTM, research
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">PMM Lead, CMO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Data */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Marketing Internship Stipends
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Company Type
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Stipend Range
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">
                    D2C Brands (Funded)
                  </td>
                  <td className="border p-3">₹25K-50K/month</td>
                  <td className="border p-3">3-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Top Agencies</td>
                  <td className="border p-3">₹15K-35K/month</td>
                  <td className="border p-3">3-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Tech Companies</td>
                  <td className="border p-3">₹30K-60K/month</td>
                  <td className="border p-3">2-4 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">FMCG Companies</td>
                  <td className="border p-3">₹20K-40K/month</td>
                  <td className="border p-3">2-3 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Boutique Agencies
                  </td>
                  <td className="border p-3">₹10K-20K/month</td>
                  <td className="border p-3">2-3 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Early-stage Startups
                  </td>
                  <td className="border p-3">₹8K-20K/month</td>
                  <td className="border p-3">Variable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Essential Tools */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BarChart className="h-6 w-6 text-primary" />
            Essential Marketing Tools
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">Tool</th>
                  <th className="border p-3 text-left font-semibold">
                    Use Case
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Learn Priority
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Google Analytics</td>
                  <td className="border p-3">Website traffic analysis</td>
                  <td className="border p-3">Must Learn</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Canva</td>
                  <td className="border p-3">Quick graphic design</td>
                  <td className="border p-3">Must Learn</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Meta Business Suite
                  </td>
                  <td className="border p-3">Facebook/Instagram ads</td>
                  <td className="border p-3">Must Learn</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Semrush/Ahrefs</td>
                  <td className="border p-3">SEO analysis</td>
                  <td className="border p-3">Good to Have</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Mailchimp</td>
                  <td className="border p-3">Email marketing</td>
                  <td className="border p-3">Good to Have</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Hootsuite/Buffer</td>
                  <td className="border p-3">Social scheduling</td>
                  <td className="border p-3">Nice to Have</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Marketing Case Study Example */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Sample Interview Case Study
          </h2>

          <p>
            Here's how to approach a typical marketing case study in interviews:
          </p>

          <div className="my-6 rounded-lg border bg-muted p-5">
            <h4 className="mb-3 font-bold">
              Case: "How would you launch a new protein powder brand targeting
              college students?"
            </h4>

            <h5 className="mt-4 font-semibold">1. Understand the Target</h5>
            <p className="text-sm text-muted-foreground">
              College students interested in fitness. Budget-conscious but
              willing to spend on health. Active on Instagram/YouTube.
            </p>

            <h5 className="mt-4 font-semibold">2. Positioning</h5>
            <p className="text-sm text-muted-foreground">
              "Affordable, tasty protein for the college fitness journey"
              Differentiate from premium brands on price and relatability.
            </p>

            <h5 className="mt-4 font-semibold">3. Channels</h5>
            <p className="text-sm text-muted-foreground">
              Instagram Reels, YouTube shorts with fitness influencers, college
              ambassador programs, hostel sampling.
            </p>

            <h5 className="mt-4 font-semibold">4. Metrics</h5>
            <p className="text-sm text-muted-foreground">
              Brand awareness (reach), consideration (engagement, website
              visits), conversion (first-time purchases), retention (repeat
              orders).
            </p>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Best Learning Resources
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Free Courses</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  • Google Digital Garage (Digital Marketing fundamentals)
                </li>
                <li>• HubSpot Academy (Content, Inbound, Email marketing)</li>
                <li>• Meta Blueprint (Facebook/Instagram ads)</li>
                <li>• Google Analytics Academy</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">YouTube Channels</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• GaryVee (Entrepreneurial marketing)</li>
                <li>• Neil Patel (SEO, Content)</li>
                <li>• Digital Deepak (Indian context)</li>
                <li>• Ahrefs (SEO tutorials)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Books</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• This Is Marketing - Seth Godin</li>
                <li>• Contagious - Jonah Berger</li>
                <li>• Building a StoryBrand - Donald Miller</li>
                <li>• Made to Stick - Chip & Dan Heath</li>
              </ul>
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
                How important is creative skill vs analytics?
              </h3>
              <p className="text-muted-foreground">
                Both matter. Modern marketing is "creativity + data." Best
                marketers can write compelling copy AND understand what the
                numbers mean. Start with your strength and build the other.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I get a marketing internship without a marketing degree?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. Many marketing interns come from engineering,
                commerce, and arts backgrounds. Skills and portfolio matter far
                more than degree subject.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I specialize early or stay generalist?
              </h3>
              <p className="text-muted-foreground">
                Start broad to discover what you enjoy, then specialize after
                1-2 years. Early specialization in performance marketing or
                content can accelerate growth if you're sure.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I build a portfolio without experience?
              </h3>
              <p className="text-muted-foreground">
                Create your own: start a blog, grow social media accounts,
                volunteer for local businesses/NGOs, create spec work for brands
                you admire. Document everything with metrics.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is influencer marketing a good career path?
              </h3>
              <p className="text-muted-foreground">
                Yes, it's a growing field! You can work at agencies managing
                influencer campaigns or brand-side selecting and managing
                creators. Good blend of creativity and relationship management.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the salary growth like in marketing?
              </h3>
              <p className="text-muted-foreground">
                Entry-level: ₹4-8 LPA. After 3-5 years: ₹12-25 LPA. Marketing
                heads at top startups can earn ₹50L+ CTC. Performance marketers
                with proven ROI grow fastest.
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
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                "My meme page led to a marketing career..."
              </p>
              <p className="mt-2 text-sm text-red-800 dark:text-red-200">
                "I ran a meme page with 50K followers in college. Used that as
                my portfolio and landed a social media internship at BoAt. They
                loved that I understood engagement and virality." — Ananya,
                Mumbai
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                "From blogger to content lead in 3 years..."
              </p>
              <p className="mt-2 text-sm text-red-800 dark:text-red-200">
                "I started a personal finance blog in college. Got 10K monthly
                readers. This became my ticket to a content marketing internship
                at a fintech. Now I lead the content team at 25." — Rohit, CRED
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                "Google certifications opened doors..."
              </p>
              <p className="mt-2 text-sm text-red-800 dark:text-red-200">
                "From a tier-3 college with no marketing background. Completed
                Google, HubSpot, and Meta certifications. Got an agency
                internship and now working at a D2C brand with 2x my initial
                offer." — Priya, Bengaluru
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Marketing Internship Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Completed at least 2 marketing certifications</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have at least 1 portfolio project with metrics</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Comfortable with Google Analytics basics</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can create graphics in Canva</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understand basic SEO principles</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have written sample content (blog, ads)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Prepared for marketing case study questions</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>LinkedIn profile optimized with marketing keywords</span>
            </div>
          </div>
        </section>

        {/* 30-Day Plan */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Your 30-Day Marketing Prep Plan
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                W1
              </div>
              <div>
                <p className="font-semibold">Week 1: Learn the Basics</p>
                <p className="text-sm text-muted-foreground">
                  Complete Google Digital Garage certification. Set up Google
                  Analytics on a practice site or blog.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                W2
              </div>
              <div>
                <p className="font-semibold">Week 2: Build Portfolio Project</p>
                <p className="text-sm text-muted-foreground">
                  Start a blog or grow a social media account. Pick a niche
                  you're passionate about. Document everything.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                W3
              </div>
              <div>
                <p className="font-semibold">Week 3: Learn Tools & Apply</p>
                <p className="text-sm text-muted-foreground">
                  Master Canva for graphics. Learn Meta Business Suite basics.
                  Practice writing different ad copy formats.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                W4
              </div>
              <div>
                <p className="font-semibold">Week 4: Practice & Apply</p>
                <p className="text-sm text-muted-foreground">
                  Practice marketing case studies. Update resume with metrics.
                  Start applying to internships daily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of a
            Marketing Intern
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">9:00</div>
              <div>
                <p className="font-semibold">Check Campaign Metrics</p>
                <p className="text-sm text-muted-foreground">
                  Review overnight performance of ads, social posts, and email
                  campaigns. Note what's working.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">10:00</div>
              <div>
                <p className="font-semibold">Team Standup</p>
                <p className="text-sm text-muted-foreground">
                  Quick sync with team on priorities, blockers, and updates.
                  This is where you learn campaign strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">11:00</div>
              <div>
                <p className="font-semibold">Content Creation</p>
                <p className="text-sm text-muted-foreground">
                  Write social posts, design graphics in Canva, or draft blog
                  content. The creative work happens here.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">14:00</div>
              <div>
                <p className="font-semibold">Campaign Setup</p>
                <p className="text-sm text-muted-foreground">
                  Set up ads in Meta Business Suite, schedule posts, or
                  configure email automation. Technical + creative combo.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">16:00</div>
              <div>
                <p className="font-semibold">Analysis & Reporting</p>
                <p className="text-sm text-muted-foreground">
                  Pull reports, analyze data, and prepare insights for team.
                  Understanding numbers is key to growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">17:30</div>
              <div>
                <p className="font-semibold">Trend Research</p>
                <p className="text-sm text-muted-foreground">
                  Check what's trending on social media, competitor campaigns,
                  and industry news. Stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Interview Questions */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Interview Questions
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "Walk me through a campaign you've worked on"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Structure: Context → Objective → Strategy → Execution → Results.
                Use specific numbers whenever possible.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "How would you increase engagement on our Instagram?"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                First, research their current content. Suggest specific content
                formats (Reels, carousels, stories), posting times, and
                engagement tactics. Show you've done homework.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "What marketing campaigns have inspired you recently?"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Have 2-3 examples ready. Explain WHY they worked: the insight,
                the creative, the channel strategy, and the results.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "How do you stay updated on marketing trends?"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Mention specific sources: newsletters (Marketing Brew, The
                Hustle), podcasts (Marketing Over Coffee), Twitter accounts, and
                industry blogs.
              </p>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Start Your Marketing Career</h2>
          <p>
            Marketing rewards creativity, curiosity, and a willingness to
            experiment. Start creating, measuring, and learning.
          </p>
          <p>
            The best part about marketing? Your personal projects—blogs, social
            media, side hustles—all count as experience. Start marketing
            something today, even if it's just yourself.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best marketers treat their own career like a marketing campaign.
            Start marketing yourself today. 📣
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/linkedin-optimization-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              LinkedIn Optimization
            </Link>
            <Link
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Building
            </Link>
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
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
                Based on insights from marketing leaders across India.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
