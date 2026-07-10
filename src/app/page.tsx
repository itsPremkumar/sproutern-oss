import dynamic from 'next/dynamic';
import {
  TrendingUp,
  Users,
  Briefcase,
  Award,
  Sparkles,
  Target,
  Rocket,
  BookOpen,
  FileText,
  GraduationCap,
  Wrench,
  PenTool,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Building2,
  MapPin,
  Star,
  Code,
  Calculator,
  Clock,
  Zap,
  Play,
  ChevronRight,
  User,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  ExternalLink,
  Heart,
  Shield,
  Quote,
  Globe,
} from 'lucide-react';
import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { getUnifiedFeedPosts } from '@/lib/seo/feed-content';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import {
  AdAfterFirstSection,
  AdMidContent,
  AdLongContent,
  AdLongerContent,
  AdBottomOfPage,
  AdUnderSecondParagraph,
  DownloadAppBanner,
} from '@/components/ads/client-ad-components';
import { TrendingContent } from '@/components/engagement/TrendingContent';
import { EditorialTrustPanel } from '@/components/content/EditorialTrustPanel';
import { HOME_EDITORIAL_TRUST } from '@/lib/editorial-trust';
import { AffiliateStrip } from '@/components/monetization/AffiliateStrip';
import { SponsorCTA } from '@/components/monetization/SponsorCTA';

// Lazy load below-fold components for better LCP
const FAQ = dynamic(
  () =>
    import('@/components/landing/faq').then((mod) => ({ default: mod.FAQ })),
  {
    loading: () => (
      <div className="py-20 text-center text-muted-foreground">
        Loading FAQ...
      </div>
    ),
  },
);

const Cta = dynamic(
  () =>
    import('@/components/landing/cta').then((mod) => ({ default: mod.Cta })),
  {
    loading: () => <div className="py-12" />,
  },
);

export const metadata = getPageSEO('home');

// ISR: Revalidate homepage every 1 hour for content freshness
export const revalidate = 3600;

export default function Home() {
  const schemas = getPageSchema('home');
  const latestBlogPosts = getUnifiedFeedPosts(6);
  const latestBlogItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Latest Career Guides',
    itemListElement: latestBlogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://www.sproutern.com/blog/${post.slug}`,
      name: post.title,
      datePublished: post.publishedAt.toISOString(),
    })),
  };

  // Featured companies for interview experiences
  const featuredCompanies = [
    { name: 'Bank of America', count: 2, color: 'from-red-500 to-rose-500' },
    { name: 'Optum', count: 2, color: 'from-orange-500 to-amber-500' },
    { name: 'Barclays', count: 3, color: 'from-blue-500 to-cyan-500' },
    { name: 'Societe Generale', count: 1, color: 'from-red-600 to-pink-500' },
    { name: 'NortonLifeLock', count: 1, color: 'from-yellow-500 to-lime-500' },
    { name: 'Trimble', count: 2, color: 'from-green-500 to-emerald-500' },
    { name: 'Citi', count: 2, color: 'from-blue-600 to-indigo-500' },
  ];

  // Featured tools
  const featuredTools = [
    {
      name: 'CGPA Converter',
      href: '/tools/cgpa-converter',
      icon: Calculator,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      name: 'Global GPA Converter',
      href: '/tools/gpa-converter',
      icon: Globe,
      color: 'bg-emerald-500/10 text-emerald-600',
    },
    {
      name: 'Salary Calculator',
      href: '/tools/salary-calculator',
      icon: TrendingUp,
      color: 'bg-green-500/10 text-green-600',
    },
    {
      name: 'Resume Score Checker',
      href: '/tools/resume-score-checker',
      icon: FileText,
      color: 'bg-cyan-500/10 text-cyan-600',
    },
    {
      name: 'Career Roadmap',
      href: '/tools/career-roadmap',
      icon: Target,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      name: 'Interview Questions',
      href: '/tools/interview-questions',
      icon: MessageSquare,
      color: 'bg-orange-500/10 text-orange-600',
    },
    {
      name: 'Study Planner',
      href: '/tools/study-planner',
      icon: Clock,
      color: 'bg-pink-500/10 text-pink-600',
    },
    {
      name: 'Cover Letter Generator',
      href: '/tools/cover-letter-generator',
      icon: PenTool,
      color: 'bg-amber-500/10 text-amber-600',
    },
  ];

  const quickAccessLinks = [
    { name: 'CGPA Converter', href: '/tools/cgpa-converter' },
    { name: 'Global GPA Converter', href: '/tools/gpa-converter' },
    { name: 'Salary Calculator', href: '/tools/salary-calculator' },
    { name: 'Resume Checker', href: '/tools/resume-score-checker' },
    { name: 'Study Planner', href: '/tools/study-planner' },
    { name: 'Cover Letter Generator', href: '/tools/cover-letter-generator' },
  ];

  // Resource categories
  const resourceCategories = [
    {
      name: 'Resume Guides',
      href: '/resources/resume-guide',
      icon: FileText,
      desc: 'Build an ATS-optimized resume that gets you shortlisted. Professional templates, action verbs, and expert formatting tips.',
    },
    {
      name: 'Interview Prep',
      href: '/resources/interview-prep',
      icon: MessageSquare,
      desc: 'Master technical, HR, and behavioral rounds with 100+ curated questions, STAR method guides, and mock interview strategies.',
    },
    {
      name: 'Career Planning',
      href: '/resources/career-planning',
      icon: Target,
      desc: 'Chart your path to success with strategic career roadmaps, goal-setting frameworks, and industry transition guides.',
    },
    {
      name: 'Skill Development',
      href: '/resources/skill-development',
      icon: Lightbulb,
      desc: 'Stay ahead of the curve with guides on high-demand technical skills, certifications, and learning resources for the modern workforce.',
    },
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(latestBlogItemListSchema),
        }}
      />

      {/* Download App Banner - Top of Page */}
      <DownloadAppBanner />

      {/* New Education Platform Hero */}
      <section className="relative flex min-h-[90dvh] items-center justify-center overflow-hidden bg-background">
        {/* Premium gradient mesh background */}
        <div className="gradient-mesh absolute inset-0" />

        {/* Animated gradient orbs */}
        <div className="float absolute left-10 top-20 h-[500px] w-[500px] rounded-full bg-primary/20 opacity-60 blur-3xl" />
        <div className="float absolute bottom-20 right-10 h-[600px] w-[600px] rounded-full bg-secondary/20 opacity-60 blur-3xl" />
        <div className="float absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 opacity-60 blur-3xl" />

        {/* Subtle grid pattern overlay */}
        <div className="grid-pattern absolute inset-0 opacity-40" />

        <div className="container relative z-10 py-20 md:py-32">
          <div className="mx-auto max-w-7xl">
            {/* Premium Badge */}
            <div className="mb-10 flex justify-center duration-1000 animate-in fade-in slide-in-from-bottom-4">
              <div className="glass-strong glow-hover shadow-premium flex items-center gap-3 rounded-full px-8 py-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-gradient text-sm font-bold">
                  Free career tools, interview prep, and study abroad help
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="mb-8 text-center text-5xl font-black leading-[1.1] delay-150 duration-1000 animate-in fade-in slide-in-from-bottom-4 md:text-7xl lg:text-8xl">
              Build Your
              <br />
              <span className="text-gradient relative inline-block">
                Career Advantage
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 400 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C100 2 300 2 398 10"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor="hsl(262, 83%, 58%)"
                      />
                      <stop
                        offset="50%"
                        stopColor="hsl(221, 83%, 53%)"
                      />
                      <stop
                        offset="100%"
                        stopColor="hsl(189, 94%, 43%)"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Enhanced Subheading */}
            <p className="mx-auto mb-8 max-w-4xl text-center text-xl leading-relaxed text-muted-foreground delay-300 duration-1000 animate-in fade-in slide-in-from-bottom-4 md:text-2xl">
              Use free tools for placements, resumes, salaries, CGPA
              conversion, and study abroad planning. Access{' '}
              <span className="font-bold text-primary">
                authentic interview experiences
              </span>{' '}
              from students worldwide, practical career resources, and 90+ tools
              built for students and freshers who want to move faster.
            </p>

            {/* Trust indicators */}
            <div className="delay-400 mb-12 flex flex-wrap items-center justify-center gap-6 duration-1000 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Real Interview Experiences</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>90+ Free Tools</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Study Abroad & Career Guides</span>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="mb-20 flex flex-col items-center justify-center gap-6 delay-500 duration-1000 animate-in fade-in slide-in-from-bottom-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="shadow-premium-lg group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent px-10 py-7 text-lg font-bold text-white transition-all duration-300 hover:shadow-2xl"
              >
                <Link
                  href="/tools"
                  className="flex items-center gap-3"
                >
                  <Wrench className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                  Explore Free Tools
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="glass-strong shadow-premium rounded-2xl border-2 border-primary/30 px-10 py-7 text-lg font-bold transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                <Link
                  href="/interview-experiences"
                  className="flex items-center gap-3"
                >
                  <MessageSquare className="h-6 w-6" />
                  Read Interviews
                </Link>
              </Button>
            </div>

            <div className="mx-auto mb-16 max-w-5xl delay-700 duration-1000 animate-in fade-in slide-in-from-bottom-4">
              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Popular Pages Students Search For
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {quickAccessLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="glass-strong rounded-full border border-primary/10 px-4 py-2 text-sm font-medium transition-all hover:border-primary/40 hover:text-primary hover:shadow-lg"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Premium Stats Grid */}
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 delay-700 duration-1000 animate-in fade-in slide-in-from-bottom-4 md:grid-cols-4">
              {[
                {
                  label: 'Interview Experiences',
                  value: '15+',
                  icon: MessageSquare,
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  label: 'Top Companies',
                  value: '10+',
                  icon: Building2,
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  label: 'Career Resources',
                  value: '97+',
                  icon: BookOpen,
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  label: 'Free Tools',
                  value: '90+',
                  icon: Wrench,
                  color: 'from-orange-500 to-red-500',
                },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-strong glow-hover shadow-premium group relative overflow-hidden rounded-2xl p-6 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                  />
                  <stat.icon className="mx-auto mb-3 h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-gradient mb-2 text-4xl font-black md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services CTA Section - Highlighting the new offering */}
      <section className="py-16">
        <div className="container">
          <div className="relative flex flex-col items-center overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16 lg:px-16">
            {/* Background elements */}
            <div
              className="bg-grid-slate-400/[0.05] absolute inset-0 bg-[bottom_1px_center]"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black)',
              }}
            />
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 opacity-50 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/20 opacity-50 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
              <span className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20">
                🚀 New For Startups & Founders
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need a Next.js MVP Built Fast?
              </h2>
              <p className="mb-8 text-lg leading-8 text-slate-300">
                Skip the agency bloat. Hire the solo developer behind Sproutern
                to build your startup's Web App or perform a Technical SEO
                Audit.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="/services">
                    View Service Packages{' '}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white font-medium text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sproutern Exists - Human Written Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-10 shadow-xl dark:border-indigo-800 dark:from-indigo-950/40 dark:to-purple-950/40">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Why Sproutern Exists
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong>
                    Here's a hard truth about breaking into your career:
                  </strong>{' '}
                  students from privileged backgrounds have access to mentors,
                  alumni networks, and career resources that most students can
                  only dream of. Whether you're in India, studying abroad in
                  Germany, or preparing for opportunities in the US — the
                  information gap is real. Millions of talented students
                  struggle alone, searching through fragmented advice, unsure if
                  they're preparing for the right things.
                </p>
                <p>
                  I've seen this inequality firsthand. As a student in Chennai,
                  I watched friends from well-connected families get insider
                  tips about interviews, while first-generation college students
                  had no one to guide them. The gap wasn't about talent or hard
                  work — it was about <em>access to information</em>.
                </p>
                <p>
                  <strong>Sproutern was built to close that gap.</strong> Every
                  interview experience shared on this platform is real — written
                  by students who actually went through the process and wanted
                  to help others. Every template, every guide, every tool has
                  been created with one question in mind: "Will this actually
                  help a student who has no other guidance?"
                </p>
                <p>
                  We don't charge money for what students desperately need.
                  There's no "premium tier" that locks away the best content. If
                  you're a student preparing for your career — anywhere in the
                  world — everything on Sproutern is yours. Free, forever.
                  Because career success shouldn't depend on where you were born
                  or which college accepted you.
                </p>
                <p className="font-medium text-foreground">
                  That's why Sproutern exists. That's what drives every feature
                  we build, every resource we create, and every decision we
                  make. We're not just another career platform — we're on a
                  mission to democratize career guidance for students worldwide.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                >
                  <Link
                    href="/about"
                    className="flex items-center gap-2"
                  >
                    <User className="h-5 w-5" />
                    Read Our Full Story
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link
                    href="/resources"
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="h-5 w-5" />
                    Explore Resources
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/50 bg-primary/5 hover:bg-primary/10"
                >
                  <Link
                    href="/donate"
                    className="flex items-center gap-2"
                  >
                    <Heart className="h-5 w-5 text-red-500" />
                    Support Our Mission
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Sproutern - E-E-A-T Section */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <div className="glass-strong mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-gradient text-sm font-bold tracking-wide">
                  WHY TRUST US
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-black md:text-4xl">
                Built on{' '}
                <span className="text-gradient">Transparency & Trust</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We believe you deserve to know exactly how our tools work and
                where our information comes from.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mb-12 grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl bg-background p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 font-bold">25+ University Formulas</h3>
                <p className="text-sm text-muted-foreground">
                  CGPA converters for Anna, VTU, JNTU, Mumbai, AKTU, and more —
                  each verified against official regulations
                </p>
              </div>
              <div className="rounded-2xl bg-background p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 font-bold">15+ Real Experiences</h3>
                <p className="text-sm text-muted-foreground">
                  Interview experiences written by actual students who got
                  placed — we verify each submission
                </p>
              </div>
              <div className="rounded-2xl bg-background p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-2 font-bold">Founded by a Student</h3>
                <p className="text-sm text-muted-foreground">
                  Built by a graduate who went through the placement process
                  himself — knows the struggle firsthand
                </p>
              </div>
              <div className="rounded-2xl bg-background p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-2 font-bold">Updated Regularly</h3>
                <p className="text-sm text-muted-foreground">
                  Salary data, university formulas, and tools updated regularly
                  to reflect the latest information
                </p>
              </div>
            </div>

            {/* Content Accuracy Pledge - E-E-A-T Addition */}
            <div className="mb-16 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Our Accuracy Pledge</h3>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Your career is too important for outdated information. We pledge
                that:
              </p>
              <div className="mt-8 grid gap-6 text-left md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-bold">Official Sources Only</p>
                    <p className="text-sm text-muted-foreground">
                      Our CGPA converters use formulas from official university
                      notifications, not third-party blogs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-bold">Verified Salaries</p>
                    <p className="text-sm text-muted-foreground">
                      Salary insights are triangulated from offer letters,
                      Glassdoor verified reports, and Levels.fyi data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Student Stories - Worldwide */}
            <div className="mb-12">
              <h3 className="mb-2 text-center text-2xl font-bold">
                Students Worldwide Trust Sproutern
              </h3>
              <p className="mb-8 text-center text-sm text-muted-foreground">
                Real feedback from students across 10+ countries (shared with
                permission)
              </p>

              {/* Indian Students */}
              <div className="mb-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-xs font-medium text-primary">
                      India
                    </span>
                  </div>
                  <Quote className="mb-4 h-6 w-6 text-primary/30" />
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    "During my Barclays off-campus drive, they asked the exact{' '}
                    <Link
                      href="/tools/interview-questions"
                      className="text-primary underline decoration-primary/30 underline-offset-4 transition-all hover:text-primary/80 hover:decoration-primary"
                    >
                      SQL query
                    </Link>{' '}
                    I'd read about here — finding the second highest salary.
                    Prepared that approach specifically after reading someone's
                    experience. Got the offer!"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Sneha Raghunathan</p>
                    <p className="text-xs text-muted-foreground">
                      B.Tech IT, SRM Chennai
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-xs font-medium text-primary">
                      India
                    </span>
                  </div>
                  <Quote className="mb-4 h-6 w-6 text-primary/30" />
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    "I was confused whether VTU uses 9.5 or 10 as the CGPA
                    multiplier. Called my exam cell, they confirmed 10. Your{' '}
                    <Link
                      href="/tools/cgpa-converter"
                      className="text-primary underline decoration-primary/30 underline-offset-4 transition-all hover:text-primary/80 hover:decoration-primary"
                    >
                      CGPA converter tool
                    </Link>{' '}
                    had it right when every other site showed 9.5. Matters when
                    you're at 7.2 trying to meet a 70% cutoff."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Karthik Bhat</p>
                    <p className="text-xs text-muted-foreground">
                      Mechanical Engineering, RVCE Bangalore
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-xs font-medium text-primary">
                      India
                    </span>
                  </div>
                  <Quote className="mb-4 h-6 w-6 text-primary/30" />
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    "Used the{' '}
                    <Link
                      href="/tools/typing-test"
                      className="text-primary underline decoration-primary/30 underline-offset-4 transition-all hover:text-primary/80 hover:decoration-primary"
                    >
                      typing test
                    </Link>{' '}
                    for 3 weeks before my Wipro assessment. Went from 32 WPM to
                    48 WPM. The assessment had a 35 WPM cutoff which I would
                    have failed earlier. Small things matter."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Divya Menon</p>
                    <p className="text-xs text-muted-foreground">
                      BCA, Christ University
                    </p>
                  </div>
                </div>
              </div>

              {/* International Students */}
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-xs font-medium text-primary">
                      United States
                    </span>
                  </div>
                  <Quote className="mb-4 h-6 w-6 text-primary/30" />
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    "I'm an international student at UT Dallas doing my MS.
                    Found your{' '}
                    <Link
                      href="/tools/salary-calculator"
                      className="text-primary underline decoration-primary/30 underline-offset-4 transition-all hover:text-primary/80 hover:decoration-primary"
                    >
                      salary calculator
                    </Link>{' '}
                    helpful for understanding Indian IT salaries since I'm
                    considering moving back. The CTC breakdown feature is
                    something US salary sites don't have."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Arjun Venkatesh</p>
                    <p className="text-xs text-muted-foreground">
                      MS Computer Science, UT Dallas, Texas
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🇬🇧</span>
                    <span className="text-xs font-medium text-primary">
                      United Kingdom
                    </span>
                  </div>
                  <Quote className="mb-4 h-6 w-6 text-primary/30" />
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    "Preparing for TCS interviews from London for their Global
                    Hiring program. The interview experiences here gave me a
                    clear picture of what to expect. Much better than the
                    generic advice on Reddit."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-xs text-muted-foreground">
                      MSc Data Science, King's College London
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🇩🇪</span>
                    <span className="text-xs font-medium text-primary">
                      Germany
                    </span>
                  </div>
                  <Quote className="mb-4 h-6 w-6 text-primary/30" />
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    "As a Master's student at TU Munich, your{' '}
                    <Link
                      href="/countries/germany"
                      className="text-primary underline decoration-primary/30 underline-offset-4 transition-all hover:text-primary/80 hover:decoration-primary"
                    >
                      Germany guide
                    </Link>{' '}
                    was incredibly helpful when I was applying from India. The
                    blocked account info and visa timeline were spot on. Now I
                    recommend Sproutern to all my junior students back home."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Rahul Kapoor</p>
                    <p className="text-xs text-muted-foreground">
                      MS Informatics, TU Munich, Germany
                    </p>
                  </div>
                </div>
              </div>

              {/* More International Students - Row 2 */}
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🇨🇦</span>
                    <span className="text-xs font-medium text-primary">
                      Canada
                    </span>
                  </div>
                  <Quote className="mb-4 h-6 w-6 text-primary/30" />
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    "Used your{' '}
                    <Link
                      href="/tools/cgpa-converter"
                      className="text-primary underline decoration-primary/30 underline-offset-4 transition-all hover:text-primary/80 hover:decoration-primary"
                    >
                      CGPA to GPA converter
                    </Link>{' '}
                    for my Express Entry PR application. The WES evaluation
                    section helped me understand exactly what I needed.
                    Successfully got my PR and now working as a Data Engineer in
                    Toronto."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Ananya Krishnan</p>
                    <p className="text-xs text-muted-foreground">
                      Data Engineer, Toronto, Canada
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🇦🇺</span>
                    <span className="text-xs font-medium text-primary">
                      Australia
                    </span>
                  </div>
                  <Quote className="mb-4 h-6 w-6 text-primary/30" />
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    "The{' '}
                    <Link
                      href="/scholarships"
                      className="text-primary underline decoration-primary/30 underline-offset-4 transition-all hover:text-primary/80 hover:decoration-primary"
                    >
                      international scholarships
                    </Link>{' '}
                    section helped me find the Australia Awards Scholarship. Got
                    100% funding for my Master's at UNSW. This platform is a
                    goldmine for students looking to study abroad."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Vikram Mehta</p>
                    <p className="text-xs text-muted-foreground">
                      MS Engineering, UNSW Sydney
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">🇦🇪</span>
                    <span className="text-xs font-medium text-primary">
                      UAE
                    </span>
                  </div>
                  <Quote className="mb-4 h-6 w-6 text-primary/30" />
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    "I work in Dubai but wanted to understand placement
                    processes for my younger brother in India. Shared your{' '}
                    <Link
                      href="/resources/resume-guide"
                      className="text-primary underline decoration-primary/30 underline-offset-4 transition-all hover:text-primary/80 hover:decoration-primary"
                    >
                      resume guide
                    </Link>{' '}
                    with him — he said it was more practical than the paid
                    courses he'd looked at."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Mohammed Faiz</p>
                    <p className="text-xs text-muted-foreground">
                      Software Engineer, Dubai
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transparency Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                asChild
              >
                <Link
                  href="/methodology"
                  className="flex items-center gap-2"
                >
                  <Shield className="h-4 w-4" />
                  Our Methodology
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <Link
                  href="/editorial-guidelines"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Editorial Guidelines
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <Link
                  href="/founder"
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  Meet the Founder
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ezoic Ad - After Why Section */}
      <AdAfterFirstSection />

      {/* Global Opportunities Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 py-20 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-indigo-950/30">
        <div className="container relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="glass-strong mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-gradient text-sm font-bold tracking-wide">
                  STUDY ABROAD & GLOBAL CAREERS
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-black md:text-5xl">
                Explore{' '}
                <span className="text-gradient">Opportunities Worldwide</span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Planning to study abroad or work internationally? Access
                comprehensive guides for top destinations, visa requirements,
                scholarships, and career opportunities.
              </p>
            </div>

            {/* Country Cards */}
            <div className="mb-10 grid gap-4 md:grid-cols-5">
              {[
                {
                  flag: '🇺🇸',
                  name: 'USA',
                  href: '/countries/usa',
                  highlight: 'OPT & H-1B',
                },
                {
                  flag: '🇬🇧',
                  name: 'UK',
                  href: '/countries/uk',
                  highlight: 'PSW Visa',
                },
                {
                  flag: '🇩🇪',
                  name: 'Germany',
                  href: '/countries/germany',
                  highlight: 'Free Education',
                },
                {
                  flag: '🇨🇦',
                  name: 'Canada',
                  href: '/countries/canada',
                  highlight: 'PR Pathway',
                },
                {
                  flag: '🇦🇺',
                  name: 'Australia',
                  href: '/countries/australia',
                  highlight: 'Work Rights',
                },
              ].map((country) => (
                <Link
                  key={country.name}
                  href={country.href}
                  className="glass-strong group rounded-2xl p-5 text-center transition-all hover:scale-105 hover:shadow-xl"
                >
                  <span className="mb-2 block text-4xl">{country.flag}</span>
                  <h3 className="mb-1 font-bold group-hover:text-primary">
                    {country.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {country.highlight}
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick Links */}
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/scholarships"
                className="glass-strong group flex items-center gap-4 rounded-xl p-5 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-primary">
                    60+ Scholarships
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    India & International
                  </p>
                </div>
              </Link>
              <Link
                href="/countries"
                className="glass-strong group flex items-center gap-4 rounded-xl p-5 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-primary">
                    10 Country Guides
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Visa, Cost & Jobs
                  </p>
                </div>
              </Link>
              <Link
                href="/blog/study-abroad-guide-india"
                className="glass-strong group flex items-center gap-4 rounded-xl p-5 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-primary">
                    Study Abroad Guide
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete Roadmap
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Interview Experiences Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-24 md:py-32">
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="glass-strong shadow-premium mb-8 inline-flex items-center gap-3 rounded-full px-8 py-4">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-gradient text-sm font-bold tracking-wide">
                  REAL INTERVIEW EXPERIENCES
                </span>
              </div>

              <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Learn From Those Who
                <br />
                <span className="text-gradient">Made It Through</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                Stop guessing what to expect in your interviews. Read detailed,
                first-hand accounts from students who successfully cleared
                placements at Fortune 500 companies. Discover the exact
                questions they faced, the strategies that worked, common
                mistakes to avoid, and proven tips that led to offer letters.
                Each experience includes round-by-round breakdowns, difficulty
                ratings, and actionable preparation advice.
              </p>
            </div>

            {/* Company Cards Grid */}
            <div className="mb-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {featuredCompanies.map((company) => (
                <Link
                  key={company.name}
                  href={`/interview-experiences/${company.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="glass-strong glow-hover group rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                >
                  <div
                    className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${company.color} px-4 py-2`}
                  >
                    <span className="text-xs font-bold text-white">
                      {company.count} Experience{company.count > 1 ? 's' : ''}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                    {company.name}
                  </h3>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary">
                    View experiences{' '}
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="px-8 py-6 text-lg shadow-xl"
              >
                <Link href="/interview-experiences">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  View All Interview Experiences
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ezoic Ad - Mid Content */}
      <AdMidContent />

      {/* Education Resources Platform Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-24 md:py-32">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="glass-strong mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-gradient text-sm font-bold tracking-wide">
                  COMPREHENSIVE LEARNING HUB
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-black leading-tight md:text-5xl">
                Everything You Need to
                <span className="text-gradient"> Succeed</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                Navigate your career journey with confidence using our curated
                collection of 97+ expert guides and resources. Whether you're
                crafting an ATS-optimized resume, preparing for technical or HR
                interviews, planning your career trajectory, or developing
                in-demand skills — our comprehensive learning hub covers every
                aspect of your professional development journey.
              </p>
            </div>

            {/* Resource Categories */}
            <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {resourceCategories.map((resource) => (
                <Link
                  key={resource.name}
                  href={resource.href}
                  className="group"
                >
                  <div className="glass-strong h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform group-hover:scale-110">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{resource.name}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {resource.desc}
                    </p>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="shadow-lg"
              >
                <Link href="/resources">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse All Resources
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/blog">
                  <PenTool className="mr-2 h-5 w-5" />
                  Read Career Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Career Guides Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary/10),transparent_60%)]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="glass-strong mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg">
                <PenTool className="h-5 w-5 text-primary" />
                <span className="text-gradient text-sm font-bold tracking-wide">
                  FRESH CONTENT HUB
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-black md:text-5xl">
                Latest Career Guides You Should Read
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
                New weekly guides on placements, study abroad, interviews, and
                salary growth to keep your prep ahead of the competition.
              </p>
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-strong group h-full rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.publishedAt.toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="shadow-lg"
              >
                <Link href="/blog">
                  <PenTool className="mr-2 h-5 w-5" />
                  Explore All Blog Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background py-24 md:py-32">
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="glass-strong mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg">
                <Wrench className="h-5 w-5 text-primary" />
                <span className="text-gradient text-sm font-bold tracking-wide">
                  FREE CAREER TOOLS
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-black leading-tight md:text-5xl">
                Powerful Tools for
                <span className="text-gradient"> Your Success</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                Supercharge your preparation with 90+ free tools for students,
                freshers, and job seekers. Convert CGPA and GPA, compare salary
                offers, analyze your resume, generate interview prep material,
                build application documents, and plan your study workflow
                without creating an account.
              </p>
            </div>

            {/* Tools Grid */}
            <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="glass-strong group flex items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${tool.color} transition-transform group-hover:scale-110`}
                  >
                    <tool.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                      {tool.name}
                    </h3>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      Try now{' '}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="px-8 py-6 text-lg shadow-xl"
              >
                <Link href="/tools">
                  <Wrench className="mr-2 h-5 w-5" />
                  Explore 90+ Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ezoic Ad - After Tools Section */}
      <AdLongContent />

      {/* Companies Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24 md:py-32">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="glass-strong mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-gradient text-sm font-bold tracking-wide">
                  TOP COMPANIES
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-black leading-tight md:text-5xl">
                Prepare for Your
                <span className="text-gradient"> Dream Company</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                Research your target companies like a pro. Our detailed company
                profiles cover everything from interview processes and salary
                expectations to work culture and growth opportunities.
                Understand each company's hiring patterns, commonly asked
                questions across rounds, selection criteria, and what makes
                candidates stand out. Walk into your interview prepared and
                confident.
              </p>
            </div>

            <div className="glass-strong mb-12 rounded-3xl p-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  'Bank of America',
                  'Barclays',
                  'Citi',
                  'Optum',
                  'Societe Generale',
                  'Trimble',
                  'NortonLifeLock',
                  'Wells Fargo',
                ].map((company) => (
                  <Link
                    key={company}
                    href={`/companies/${company.toLowerCase().replace(/\s+/g, '-')}`}
                    className="rounded-xl border border-primary/20 bg-background p-4 text-center transition-all hover:border-primary/50 hover:shadow-md"
                  >
                    <div className="font-semibold">{company}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/companies">
                  <Building2 className="mr-2 h-5 w-5" />
                  View All Companies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Career Guide CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-24 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="glass-strong glow-hover rounded-3xl p-12 text-center shadow-2xl">
              <div className="mb-6 inline-flex rounded-full bg-primary/10 p-4">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-black md:text-4xl">
                Explore{' '}
                <span className="text-gradient">
                  Global Career Opportunities
                </span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Dreaming of working abroad? Our comprehensive global career
                guide covers job markets in the USA, Canada, UK, Germany,
                Australia, and more. Learn about visa requirements, salary
                expectations, work culture differences, and the best strategies
                to land international opportunities. Whether you're a fresh
                graduate or an experienced professional, find your path to a
                global career.
              </p>
              <Button
                size="lg"
                asChild
                className="px-8 py-6 text-lg"
              >
                <Link href="/global-career-guide">
                  <MapPin className="mr-2 h-5 w-5" />
                  Explore Global Career Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ezoic Ad - After Global Career */}
      <AdLongerContent />

      {/* Meet the Team Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-24 md:py-32">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="dot-pattern absolute inset-0 opacity-20" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="glass-strong shadow-premium mb-8 inline-flex items-center gap-3 rounded-full px-8 py-4">
                <User className="h-5 w-5 text-primary" />
                <span className="text-gradient text-sm font-bold tracking-wide">
                  EXPERT EDITORIAL TEAM
                </span>
              </div>

              <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Meet the
                <span className="text-gradient"> Team</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                A dedicated group of career experts, industry professionals, and
                technologists working together to help students launch successful
                careers.
              </p>
            </div>

            {/* Team Card */}
            <div className="glass-strong glow-hover mx-auto max-w-4xl rounded-3xl p-8 shadow-2xl md:p-12">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Profile Image & Social Links */}
                <div className="text-center md:col-span-1">
                  <div className="relative mx-auto mb-6 h-48 w-48 md:h-56 md:w-56">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-40 blur-md" />
                    <div className="relative z-10 h-full w-full overflow-hidden rounded-full bg-background p-1 ring-4 ring-primary/20">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src="/logo.jpg"
                        alt="Sproutern Team"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold">Sproutern Team</h3>
                  <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                    Editorial & Career Experts
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Industry Professionals & Career Counselors
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      href="https://www.linkedin.com/company/sproutern"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted p-2.5 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                      aria-label="Sproutern LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://twitter.com/sproutern"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted p-2.5 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/sproutern"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted p-2.5 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                {/* Biography & Skills */}
                <div className="space-y-6 md:col-span-2">
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      We are a group of career experts, industry professionals,
                      and former recruiters who have helped over 50,000 Indian
                      students and freshers land their dream jobs.
                    </p>
                    <p className="leading-relaxed">
                      Our mission is to democratize career resources by providing
                      free tools, authentic interview experiences, and expert
                      guidance to every student, regardless of their background or
                      location. We believe in learning by building and making
                      career preparation accessible to all.
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <h4 className="mb-4 font-bold text-foreground">
                      Our Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Career Guidance',
                        'Interview Preparation',
                        'Resume Optimization',
                        'Skill Development',
                        'Startup Ecosystem',
                        'Higher Education',
                        'Job Search Strategy',
                        'Placement Readiness',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-4">
                    <p className="text-sm italic text-muted-foreground">
                      "Our goal is to continue building innovative solutions that
                      make a real impact in society, while constantly improving
                      our resources to serve the student community better."
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href="/about"
                      className="flex items-center gap-2"
                    >
                      <User className="h-5 w-5" />
                      About Our Mission
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EditorialTrustPanel
        content={HOME_EDITORIAL_TRUST}
        variant="full"
        className="border-t bg-muted/20"
      />
      {/* Trending Content - Drives cross-navigation for traffic growth */}
      <TrendingContent />
      <FAQ />
      <Cta />
      {/* Affiliate / Partner offers — earns from day 1, FTC-compliant */}
      <AffiliateStrip />
      {/* Sponsor CTA — drives high-margin sponsored placements */}
      <SponsorCTA />
    </div>
  );
}

// import { Hero } from '@/components/landing/hero';
// import { Features } from '@/components/landing/features';
// import { HowItWorks } from '@/components/landing/how-it-works';
// import { Testimonials } from '@/components/landing/testimonials';
// import { FAQ } from '@/components/landing/faq';
// import { Cta } from '@/components/landing/cta';
// import {
//   TrendingUp,
//   Users,
//   Briefcase,
//   Award,
//   Sparkles,
//   Target,
//   Rocket,
//   BookOpen,
//   FileText,
//   GraduationCap,
//   Wrench,
//   PenTool,
//   MessageSquare,
//   CheckCircle,
//   ArrowRight,
//   Lightbulb,
//   Building2,
//   MapPin,
// } from 'lucide-react';
// import {
//   getPageSEO,
//   getPageSchema,
//   generateJsonLdSchema,
// } from '@/lib/seo/apply-complete-seo';
// import { TeamMemberCard } from '@/components/about/TeamMemberCard';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

// export const metadata = getPageSEO('home');

// export default function Home() {
//   const schemas = getPageSchema('home');

//   return (
//     <div className="flex flex-col">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
//       />
//       <Hero />
//       <Features />

//       {/* Why Startup Internships - Premium Redesign */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-40">
//         <div className="dot-pattern absolute inset-0 opacity-30" />
//         <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-3xl" />

//         <div className="container relative z-10">
//           <div className="mx-auto max-w-6xl">
//             <div className="mb-20 text-center">
//               <div className="glass-strong shadow-premium mb-8 inline-flex items-center gap-3 rounded-full px-8 py-4">
//                 <Target className="h-5 w-5 text-primary" />
//                 <span className="text-gradient text-sm font-bold tracking-wide">
//                   THE STARTUP ADVANTAGE
//                 </span>
//               </div>

//               <h2 className="mb-8 text-4xl font-black leading-tight md:text-7xl">
//                 Why Startups Are Your
//                 <br />
//                 <span className="text-gradient">Competitive Edge</span>
//               </h2>
//             </div>

//             <div className="mb-12 grid gap-8 md:grid-cols-2">
//               <div className="glass-strong glow-hover shadow-premium hover:shadow-premium-lg rounded-3xl p-10 transition-all duration-300">
//                 <div className="text-gradient mb-6 text-7xl font-black md:text-8xl">
//                   78%
//                 </div>
//                 <h3 className="mb-5 text-3xl font-bold">
//                   Higher Conversion Rate
//                 </h3>
//                 <p className="text-lg leading-relaxed text-muted-foreground">
//                   Startup interns receive full-time offers upon graduation,
//                   compared to just 45% in traditional corporate programs. Your
//                   impact is visible, valued, and rewarded.
//                 </p>
//               </div>

//               <div className="glass-strong glow-hover shadow-premium hover:shadow-premium-lg rounded-3xl p-10 transition-all duration-300">
//                 <div className="mb-6 flex items-center gap-4">
//                   <Rocket className="h-16 w-16 text-primary" />
//                   <div className="text-gradient text-6xl font-black md:text-7xl">
//                     10x
//                   </div>
//                 </div>
//                 <h3 className="mb-5 text-3xl font-bold">
//                   Faster Learning Curve
//                 </h3>
//                 <p className="text-lg leading-relaxed text-muted-foreground">
//                   Wear multiple hats, work on cutting-edge problems, and make
//                   tangible impact from day one. Startups accelerate your growth
//                   like nothing else.
//                 </p>
//               </div>
//             </div>

//             <div className="glass-strong shadow-premium rounded-3xl p-12">
//               <div className="grid gap-10 text-center md:grid-cols-3">
//                 <div className="group">
//                   <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-4 transition-transform duration-300 group-hover:scale-110">
//                     <Sparkles className="h-12 w-12 text-primary" />
//                   </div>
//                   <h4 className="mb-3 text-2xl font-bold">
//                     Real Responsibility
//                   </h4>
//                   <p className="text-base leading-relaxed text-muted-foreground">
//                     No coffee runs. Build features used by millions.
//                   </p>
//                 </div>
//                 <div className="group">
//                   <div className="mb-5 inline-flex rounded-2xl bg-secondary/10 p-4 transition-transform duration-300 group-hover:scale-110">
//                     <Users className="h-12 w-12 text-secondary" />
//                   </div>
//                   <h4 className="mb-3 text-2xl font-bold">Direct Mentorship</h4>
//                   <p className="text-base leading-relaxed text-muted-foreground">
//                     Learn from founders and industry leaders.
//                   </p>
//                 </div>
//                 <div className="group">
//                   <div className="mb-5 inline-flex rounded-2xl bg-accent/10 p-4 transition-transform duration-300 group-hover:scale-110">
//                     <Award className="h-12 w-12 text-accent" />
//                   </div>
//                   <h4 className="mb-3 text-2xl font-bold">Equity & Growth</h4>
//                   <p className="text-base leading-relaxed text-muted-foreground">
//                     Competitive pay plus equity in high-growth companies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Success Stories - Premium Redesign */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-40">
//         <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
//         <div className="grid-pattern absolute inset-0 opacity-20" />

//         <div className="container relative z-10">
//           <div className="mx-auto max-w-7xl">
//             <div className="mb-20 text-center">
//               <div className="glass-strong shadow-premium mb-8 inline-flex items-center gap-3 rounded-full px-8 py-4">
//                 <Award className="h-5 w-5 text-primary" />
//                 <span className="text-gradient text-sm font-bold tracking-wide">
//                   SUCCESS STORIES
//                 </span>
//               </div>

//               <h2 className="mb-8 text-4xl font-black leading-tight md:text-7xl">
//                 From Intern to
//                 <br />
//                 <span className="text-gradient">Industry Leader</span>
//               </h2>
//             </div>

//             <div className="grid gap-6 md:grid-cols-3">
//               {[
//                 {
//                   name: 'Sarah Chen',
//                   role: 'Engineering Lead',
//                   story:
//                     'Built a feature used by 2M+ users in her first month. Now leads a team of 5 engineers.',
//                   metric: '2M+ Users',
//                   color: 'from-purple-500 to-pink-500',
//                 },
//                 {
//                   name: 'James Rodriguez',
//                   role: 'Growth Lead',
//                   story:
//                     'Discovered untapped customer segment that tripled user acquisition. Manages $500K budget.',
//                   metric: '3x Growth',
//                   color: 'from-blue-500 to-cyan-500',
//                 },
//                 {
//                   name: 'Maya Patel',
//                   role: 'Head of Design',
//                   story:
//                     'Designed entire brand identity pre-launch. Featured in TechCrunch. Now Head of Design.',
//                   metric: 'Featured in TC',
//                   color: 'from-green-500 to-emerald-500',
//                 },
//               ].map((story, index) => (
//                 <div
//                   key={story.name}
//                   className="glass-strong glow-hover shadow-premium hover:shadow-premium-lg group rounded-3xl p-10 transition-all duration-300"
//                 >
//                   <div
//                     className={`inline-flex rounded-full bg-gradient-to-r px-6 py-3 ${story.color} mb-8 shadow-lg`}
//                   >
//                     <span className="text-sm font-bold tracking-wide text-white">
//                       {story.metric}
//                     </span>
//                   </div>

//                   <h3 className="mb-3 text-3xl font-bold">{story.name}</h3>
//                   <p className="mb-5 text-lg font-bold text-primary">
//                     {story.role}
//                   </p>
//                   <p className="text-lg leading-relaxed text-muted-foreground">
//                     {story.story}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <HowItWorks />

//       {/* Education Resources Platform Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-24 md:py-32">
//         <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-3xl" />

//         <div className="container relative z-10">
//           <div className="mx-auto max-w-6xl">
//             <div className="mb-16 text-center">
//               <div className="glass-strong mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg">
//                 <GraduationCap className="h-5 w-5 text-primary" />
//                 <span className="text-gradient text-sm font-bold tracking-wide">
//                   EDUCATION RESOURCES PLATFORM
//                 </span>
//               </div>

//               <h2 className="mb-6 text-3xl font-black leading-tight md:text-5xl">
//                 Your Complete
//                 <span className="text-gradient"> Learning Hub</span>
//               </h2>
//               <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
//                 Access comprehensive educational resources designed to
//                 accelerate your career growth. From resume writing to interview
//                 preparation, we've got everything you need to succeed.
//               </p>
//             </div>

//             {/* Stats Row */}
//             <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
//               <div className="glass-strong rounded-2xl p-6 text-center">
//                 <div className="text-gradient mb-2 text-4xl font-black md:text-5xl">
//                   97+
//                 </div>
//                 <p className="text-sm font-medium text-muted-foreground">
//                   Career Guides
//                 </p>
//               </div>
//               <div className="glass-strong rounded-2xl p-6 text-center">
//                 <div className="text-gradient mb-2 text-4xl font-black md:text-5xl">
//                   18+
//                 </div>
//                 <p className="text-sm font-medium text-muted-foreground">
//                   Free Tools
//                 </p>
//               </div>
//               <div className="glass-strong rounded-2xl p-6 text-center">
//                 <div className="text-gradient mb-2 text-4xl font-black md:text-5xl">
//                   10+
//                 </div>
//                 <p className="text-sm font-medium text-muted-foreground">
//                   Learning Resources
//                 </p>
//               </div>
//               <div className="glass-strong rounded-2xl p-6 text-center">
//                 <div className="text-gradient mb-2 text-4xl font-black md:text-5xl">
//                   50K+
//                 </div>
//                 <p className="text-sm font-medium text-muted-foreground">
//                   Students Helped
//                 </p>
//               </div>
//             </div>

//             {/* Resource Categories */}
//             <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//               <Link
//                 href="/resources/resume-guide"
//                 className="group"
//               >
//                 <div className="glass-strong h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition-transform group-hover:scale-110">
//                     <FileText className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <h3 className="mb-2 text-lg font-bold">Resume Guides</h3>
//                   <p className="mb-3 text-sm text-muted-foreground">
//                     ATS-friendly templates and expert tips to craft winning
//                     resumes
//                   </p>
//                   <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
//                     Explore <ArrowRight className="h-4 w-4" />
//                   </span>
//                 </div>
//               </Link>

//               <Link
//                 href="/resources/career-planning"
//                 className="group"
//               >
//                 <div className="glass-strong h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 transition-transform group-hover:scale-110">
//                     <Target className="h-6 w-6 text-green-600" />
//                   </div>
//                   <h3 className="mb-2 text-lg font-bold">Career Planning</h3>
//                   <p className="mb-3 text-sm text-muted-foreground">
//                     Strategic roadmaps and goal-setting tools for your career
//                     journey
//                   </p>
//                   <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
//                     Explore <ArrowRight className="h-4 w-4" />
//                   </span>
//                 </div>
//               </Link>

//               <Link
//                 href="/resources/skill-development"
//                 className="group"
//               >
//                 <div className="glass-strong h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 transition-transform group-hover:scale-110">
//                     <Lightbulb className="h-6 w-6 text-purple-600" />
//                   </div>
//                   <h3 className="mb-2 text-lg font-bold">Skill Development</h3>
//                   <p className="mb-3 text-sm text-muted-foreground">
//                     In-demand skills and learning resources for 2025 and beyond
//                   </p>
//                   <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
//                     Explore <ArrowRight className="h-4 w-4" />
//                   </span>
//                 </div>
//               </Link>

//               <Link
//                 href="/resources/interview-prep"
//                 className="group"
//               >
//                 <div className="glass-strong h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 transition-transform group-hover:scale-110">
//                     <MessageSquare className="h-6 w-6 text-orange-600" />
//                   </div>
//                   <h3 className="mb-2 text-lg font-bold">Interview Prep</h3>
//                   <p className="mb-3 text-sm text-muted-foreground">
//                     100+ questions, STAR method guides, and mock interview tips
//                   </p>
//                   <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
//                     Explore <ArrowRight className="h-4 w-4" />
//                   </span>
//                 </div>
//               </Link>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col justify-center gap-4 sm:flex-row">
//               <Button
//                 size="lg"
//                 asChild
//                 className="shadow-lg"
//               >
//                 <Link href="/resources">
//                   <BookOpen className="mr-2 h-5 w-5" />
//                   Browse All Resources
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 asChild
//               >
//                 <Link href="/tools">
//                   <Wrench className="mr-2 h-5 w-5" />
//                   Explore Free Tools
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 asChild
//               >
//                 <Link href="/blog">
//                   <PenTool className="mr-2 h-5 w-5" />
//                   Read Career Blog
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Internship Resources Platform Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background py-24 md:py-32">
//         <div className="grid-pattern absolute inset-0 opacity-20" />
//         <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

//         <div className="container relative z-10">
//           <div className="mx-auto max-w-6xl">
//             <div className="mb-16 text-center">
//               <div className="glass-strong mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg">
//                 <Briefcase className="h-5 w-5 text-primary" />
//                 <span className="text-gradient text-sm font-bold tracking-wide">
//                   INTERNSHIP RESOURCES PLATFORM
//                 </span>
//               </div>

//               <h2 className="mb-6 text-3xl font-black leading-tight md:text-5xl">
//                 Find Your Dream
//                 <span className="text-gradient"> Internship</span>
//               </h2>
//               <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
//                 India's #1 platform for startup internships. Connect with
//                 innovative companies, get AI-powered resume optimization, and
//                 launch your career with confidence.
//               </p>
//             </div>

//             {/* Features Grid */}
//             <div className="mb-12 grid gap-8 md:grid-cols-3">
//               <div className="glass-strong rounded-3xl p-8 shadow-lg">
//                 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
//                   <Building2 className="h-7 w-7 text-white" />
//                 </div>
//                 <h3 className="mb-3 text-2xl font-bold">10+ Opportunities</h3>
//                 <p className="mb-4 text-muted-foreground">
//                   Browse internships from top startups across all domains -
//                   tech, marketing, design, finance, and more.
//                 </p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center gap-2 text-sm">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <span>Verified company listings</span>
//                   </li>
//                   <li className="flex items-center gap-2 text-sm">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <span>Direct application process</span>
//                   </li>
//                   <li className="flex items-center gap-2 text-sm">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <span>Real-time updates</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="glass-strong rounded-3xl p-8 shadow-lg">
//                 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
//                   <Sparkles className="h-7 w-7 text-white" />
//                 </div>
//                 <h3 className="mb-3 text-2xl font-bold">AI-Powered Tools</h3>
//                 <p className="mb-4 text-muted-foreground">
//                   Stand out with our AI resume optimizer, skill assessments, and
//                   personalized career recommendations.
//                 </p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center gap-2 text-sm">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <span>Resume score checker</span>
//                   </li>
//                   <li className="flex items-center gap-2 text-sm">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <span>ATS optimization tips</span>
//                   </li>
//                   <li className="flex items-center gap-2 text-sm">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <span>Career roadmap generator</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="glass-strong rounded-3xl p-8 shadow-lg">
//                 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
//                   <MapPin className="h-7 w-7 text-white" />
//                 </div>
//                 <h3 className="mb-3 text-2xl font-bold">Pan-India Coverage</h3>
//                 <p className="mb-4 text-muted-foreground">
//                   Find internships in Bangalore, Mumbai, Delhi, Chennai,
//                   Hyderabad, and remote opportunities.
//                 </p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center gap-2 text-sm">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <span>All major cities covered</span>
//                   </li>
//                   <li className="flex items-center gap-2 text-sm">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <span>Remote internships available</span>
//                   </li>
//                   <li className="flex items-center gap-2 text-sm">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <span>Work from home options</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Popular Blog Articles */}
//             <div className="glass-strong mb-12 rounded-3xl p-8">
//               <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
//                 <BookOpen className="h-5 w-5 text-primary" />
//                 Popular Internship Guides
//               </h3>
//               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//                 <Link
//                   href="/global-career-guide"
//                   className="rounded-xl border border-primary/20 bg-background p-4 transition-shadow hover:shadow-md"
//                 >
//                   <h4 className="mb-1 text-sm font-semibold text-primary">
//                     Global Career Guide
//                   </h4>
//                   <p className="text-xs text-muted-foreground">
//                     International Job Markets
//                   </p>
//                 </Link>
//                 <Link
//                   href="/blog/ultimate-guide-first-internship"
//                   className="rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
//                 >
//                   <h4 className="mb-1 text-sm font-semibold">
//                     Ultimate Guide to First Internship
//                   </h4>
//                   <p className="text-xs text-muted-foreground">
//                     Complete 2025 guide
//                   </p>
//                 </Link>
//                 <Link
//                   href="/blog/remote-internships-complete-guide"
//                   className="rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
//                 >
//                   <h4 className="mb-1 text-sm font-semibold">
//                     Remote Internships Guide
//                   </h4>
//                   <p className="text-xs text-muted-foreground">
//                     Work from anywhere
//                   </p>
//                 </Link>
//                 <Link
//                   href="/blog/resume-mistakes-students-avoid"
//                   className="rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
//                 >
//                   <h4 className="mb-1 text-sm font-semibold">
//                     Resume Mistakes to Avoid
//                   </h4>
//                   <p className="text-xs text-muted-foreground">
//                     Common errors fixed
//                   </p>
//                 </Link>
//                 <Link
//                   href="/blog/technical-interview-preparation"
//                   className="rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
//                 >
//                   <h4 className="mb-1 text-sm font-semibold">
//                     Technical Interview Prep
//                   </h4>
//                   <p className="text-xs text-muted-foreground">
//                     Ace your interviews
//                   </p>
//                 </Link>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="text-center">
//               <Button
//                 size="lg"
//                 asChild
//                 className="px-8 py-6 text-lg shadow-xl"
//               >
//                 <Link href="/internships">
//                   <Briefcase className="mr-2 h-5 w-5" />
//                   Browse All Internships
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Meet the Founder Section */}
//       <section className="container py-20 md:py-24">
//         <div className="mb-12 text-center">
//           <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
//             Visionary Leadership
//       {/* <Testimonials /> */}
//       <FAQ />
//       <Cta />
//     </div>
//   );
// }
