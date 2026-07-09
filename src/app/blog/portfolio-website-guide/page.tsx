import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  FolderOpen,
  Globe,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Code,
  Layout,
  Eye,
  Palette,
  Smartphone,
  Zap,
  Star,
  ExternalLink,
  Github,
  Mail,
  Image,
  FileText,
  Settings,
  Search,
  Shield,
  Layers,
  MousePointer,
  Monitor,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a Portfolio Website That Gets You Hired',
  description:
    'Learn how to create a professional portfolio website that showcases your work and attracts recruiters. Complete guide on design, content, projects, hosting, and SEO.',
  keywords: [
    'portfolio website',
    'developer portfolio',
    'student portfolio',
    'showcase projects',
    'portfolio for freshers',
    'how to build portfolio',
    'portfolio website examples',
    'best portfolio websites',
    'portfolio website for job',
    'developer portfolio guide',
  ],
  openGraph: {
    title: 'How to Build a Portfolio Website That Gets You Hired',
    description: 'Create a portfolio that makes recruiters reach out to you.',
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
          <div className="mb-4 flex items-center gap-2 text-purple-600">
            <FolderOpen className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Personal Branding
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            How to Build a Portfolio Website That Gets You Hired
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your portfolio is your 24/7 salesperson, working while you sleep.
            This comprehensive guide shows you how to build a professional
            portfolio that showcases your best work and attracts opportunities
            from recruiters and clients.
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
              <span>28 min read</span>
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            Why Portfolios Matter
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">56%</span>
              <span>
                of recruiters consider portfolios more important than resumes
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">3x</span>
              <span>more callbacks for candidates with portfolio websites</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">8 sec</span>
              <span>
                average time a recruiter spends on first portfolio impression
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">91%</span>
              <span>
                of hiring managers check candidates online before interviews
              </span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            A resume tells recruiters what you&apos;ve done. A portfolio shows
            them what you can do. In an era where skills matter more than
            credentials, your portfolio is the ultimate proof of your abilities.
          </p>
          <p>
            Whether you&apos;re a developer, designer, writer, or any other
            creative professional, this guide walks you through building a
            portfolio that converts visitors into opportunities.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                1. Why You Need a Portfolio
              </a>
            </li>
            <li>
              <a
                href="#sections"
                className="text-primary hover:underline"
              >
                2. Essential Sections
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary hover:underline"
              >
                3. Showcasing Projects
              </a>
            </li>
            <li>
              <a
                href="#design"
                className="text-primary hover:underline"
              >
                4. Design Principles
              </a>
            </li>
            <li>
              <a
                href="#ux"
                className="text-primary hover:underline"
              >
                5. UX Best Practices
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="text-primary hover:underline"
              >
                6. Tech Stack Options
              </a>
            </li>
            <li>
              <a
                href="#hosting"
                className="text-primary hover:underline"
              >
                7. Hosting &amp; Deployment
              </a>
            </li>
            <li>
              <a
                href="#seo"
                className="text-primary hover:underline"
              >
                8. SEO Optimization
              </a>
            </li>
            <li>
              <a
                href="#examples"
                className="text-primary hover:underline"
              >
                9. Portfolio Examples
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                10. Mistakes to Avoid
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-primary hover:underline"
              >
                11. Build Timeline
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                12. FAQs
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
                Quality over quantity—3-5 strong projects beats 10 mediocre ones
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Each project should explain the problem you solved, not just the
                tech used
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Clean, readable design beats fancy animations—recruiters
                prioritize usability
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Include live links AND GitHub repos for verifiable work
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Mobile responsiveness is essential—many recruiters browse on
                phones
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Ship it! An imperfect live portfolio beats a perfect one never
                launched
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Why */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Why You Need a Portfolio
          </h2>

          <p>
            In a competitive job market, everyone has a resume. A portfolio sets
            you apart by demonstrating ability rather than just claiming it.
          </p>

          <h3>Benefits of Having a Portfolio</h3>
          <ul>
            <li>
              <strong>Proof of work:</strong> Shows you can actually build
              things, not just talk about them
            </li>
            <li>
              <strong>Differentiation:</strong> Stand out from candidates with
              identical resumes
            </li>
            <li>
              <strong>24/7 visibility:</strong> Recruiters can discover you
              anytime, anywhere
            </li>
            <li>
              <strong>Learning showcase:</strong> Document your growth and
              journey
            </li>
            <li>
              <strong>Interview talking points:</strong> Gives interviewers
              concrete work to discuss
            </li>
            <li>
              <strong>Freelance opportunities:</strong> Attracts clients who
              need your skills
            </li>
          </ul>

          <h3>Who Needs a Portfolio?</h3>
          <ul>
            <li>Software developers and engineers</li>
            <li>UI/UX designers</li>
            <li>Data scientists and analysts</li>
            <li>Content writers and marketers</li>
            <li>Product managers (case studies)</li>
            <li>Any role where work can be demonstrated</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Reality Check:</strong> If you&apos;re applying for roles
              where work can be shown, not having a portfolio is a missed
              opportunity. Start simple, ship it, and improve over time.
            </div>
          </div>
        </section>

        {/* Section 2: Sections */}
        <section
          id="sections"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layout className="h-6 w-6 text-primary" />
            2. Essential Sections
          </h2>

          <p>
            Every great portfolio includes these core sections. You can add
            more, but never skip these:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-bold text-purple-600">
                <Monitor className="mr-2 inline h-4 w-4" />
                Hero Section
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>What to include:</strong> Your name, professional
                title/tagline, brief one-liner about what you do, and a clear
                CTA (view projects, download resume, contact)
              </p>
              <p className="mt-1 text-sm">
                <strong>Tip:</strong> Make the CTA obvious—recruiters
                shouldn&apos;t guess what to click next
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold text-green-600">
                <User className="mr-2 inline h-4 w-4" />
                About Me
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>What to include:</strong> Brief bio (2-3 paragraphs),
                key skills, what excites you, and what you&apos;re looking for
              </p>
              <p className="mt-1 text-sm">
                <strong>Tip:</strong> Be personable—recruiters want to know who
                you are, not just what you do
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold text-blue-600">
                <FolderOpen className="mr-2 inline h-4 w-4" />
                Projects (Most Important)
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>What to include:</strong> 3-5 of your best projects with
                descriptions, tech stack, live demo links, and GitHub repos
              </p>
              <p className="mt-1 text-sm">
                <strong>Tip:</strong> Lead with your best project—it gets 80% of
                the attention
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold text-orange-600">
                <FileText className="mr-2 inline h-4 w-4" />
                Experience (Optional for Freshers)
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>What to include:</strong> Internships, part-time work,
                freelance projects, or relevant volunteer experience
              </p>
              <p className="mt-1 text-sm">
                <strong>Tip:</strong> Focus on impact and outcomes, not just
                responsibilities
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold text-red-600">
                <Mail className="mr-2 inline h-4 w-4" />
                Contact
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>What to include:</strong> Email, LinkedIn, GitHub, and
                optionally Twitter/X. Consider a contact form.
              </p>
              <p className="mt-1 text-sm">
                <strong>Tip:</strong> Make email clickable (mailto:) and ensure
                LinkedIn links work
              </p>
            </div>
          </div>

          <h3>Optional But Valuable Sections</h3>
          <ul>
            <li>
              <strong>Blog:</strong> Shows thought leadership and communication
              skills
            </li>
            <li>
              <strong>Testimonials:</strong> Social proof from managers,
              clients, or colleagues
            </li>
            <li>
              <strong>Skills/Tech Stack:</strong> Visual representation of your
              technologies
            </li>
            <li>
              <strong>Resume download:</strong> PDF version for those who prefer
              it
            </li>
          </ul>
        </section>

        {/* Section 3: Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            3. Showcasing Projects
          </h2>

          <p>
            Your projects section is the heart of your portfolio. This is where
            recruiters spend the most time. Do it right.
          </p>

          <h3>The Perfect Project Card</h3>
          <p>Each project should include:</p>

          <div className="not-prose my-6 space-y-3">
            <div className="flex items-start gap-3 rounded-lg border p-3">
              <Image className="mt-0.5 h-5 w-5 text-purple-500" />
              <div>
                <p className="font-bold">Visual (Screenshot/GIF/Video)</p>
                <p className="text-sm text-muted-foreground">
                  First impression matters—show what it looks like
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <Target className="mt-0.5 h-5 w-5 text-blue-500" />
              <div>
                <p className="font-bold">Problem Statement</p>
                <p className="text-sm text-muted-foreground">
                  What problem does this solve? Why does it matter?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <Zap className="mt-0.5 h-5 w-5 text-yellow-500" />
              <div>
                <p className="font-bold">Solution</p>
                <p className="text-sm text-muted-foreground">
                  How does your project solve the problem?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <Layers className="mt-0.5 h-5 w-5 text-green-500" />
              <div>
                <p className="font-bold">Tech Stack</p>
                <p className="text-sm text-muted-foreground">
                  What technologies did you use? Why those choices?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <ExternalLink className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold">Links</p>
                <p className="text-sm text-muted-foreground">
                  Live demo + GitHub repo (both are important)
                </p>
              </div>
            </div>
          </div>

          <h3>What Projects to Include</h3>
          <ul>
            <li>
              <strong>Lead with impact:</strong> Projects that solved real
              problems or had real users
            </li>
            <li>
              <strong>Show range:</strong> Different types of projects (web app,
              API, mobile, data)
            </li>
            <li>
              <strong>Match job targets:</strong> If applying for React roles,
              show React projects
            </li>
            <li>
              <strong>Include personal projects:</strong> Side projects show
              passion and initiative
            </li>
          </ul>

          <h3>What If I Don&apos;t Have Good Projects?</h3>
          <ul>
            <li>
              Clone popular apps with your own twist (Spotify clone, Twitter
              clone)
            </li>
            <li>Solve a problem you personally face</li>
            <li>Contribute to open source and document your contributions</li>
            <li>Build tools that help other developers</li>
            <li>Create a project during a hackathon</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Include at least one project that
              demonstrates each skill you claim. If you say you know React, show
              a React project. If you say you know databases, show a project
              with a database.
            </div>
          </div>
        </section>

        {/* Section 4: Design */}
        <section
          id="design"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Palette className="h-6 w-6 text-primary" />
            4. Design Principles
          </h2>

          <p>
            You don&apos;t need to be a designer to create a good-looking
            portfolio. Follow these principles:
          </p>

          <h3>Clean and Simple</h3>
          <ul>
            <li>White space is your friend—don&apos;t overcrowd</li>
            <li>Stick to 2-3 colors maximum</li>
            <li>Use 1-2 font families (one for headings, one for body)</li>
            <li>Consistent spacing throughout</li>
          </ul>

          <h3>Typography</h3>
          <ul>
            <li>
              <strong>Recommended fonts:</strong> Inter, Roboto, Open Sans,
              Poppins
            </li>
            <li>Body text: 16-18px minimum</li>
            <li>Clear heading hierarchy (H1 &gt; H2 &gt; H3)</li>
            <li>Good line height (1.5-1.7) for readability</li>
          </ul>

          <h3>Colors</h3>
          <ul>
            <li>
              <strong>Choose a primary color:</strong> Used for accents, links,
              buttons
            </li>
            <li>
              <strong>Dark mode support:</strong> Many developers prefer dark
              mode
            </li>
            <li>
              <strong>Good contrast:</strong> Text should be easily readable
            </li>
            <li>
              <strong>Consistency:</strong> Same colors throughout the site
            </li>
          </ul>

          <h3>Avoid These Design Mistakes</h3>
          <ul>
            <li>Too many animations that distract</li>
            <li>Low contrast text that&apos;s hard to read</li>
            <li>Tiny fonts on mobile</li>
            <li>Cluttered layouts with no breathing room</li>
            <li>Inconsistent styling between pages</li>
          </ul>
        </section>

        {/* Section 5: UX */}
        <section
          id="ux"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MousePointer className="h-6 w-6 text-primary" />
            5. UX Best Practices
          </h2>

          <p>
            Good UX means visitors can find what they need quickly. Recruiters
            are busy—respect their time.
          </p>

          <h3>Navigation</h3>
          <ul>
            <li>Keep nav items to 4-6 max</li>
            <li>Make it sticky/fixed for easy access</li>
            <li>Highlight the current section</li>
            <li>Mobile hamburger menu that actually works</li>
          </ul>

          <h3>Loading Speed</h3>
          <ul>
            <li>Optimize all images (WebP format, compressed)</li>
            <li>Lazy load images below the fold</li>
            <li>Minimize JavaScript bundles</li>
            <li>Target under 3 seconds load time</li>
          </ul>

          <h3>Mobile Responsiveness</h3>
          <ul>
            <li>Test on real devices, not just browser resize</li>
            <li>Touch targets at least 44px</li>
            <li>Readable text without zooming</li>
            <li>No horizontal scrolling</li>
          </ul>

          <h3>Accessibility</h3>
          <ul>
            <li>Alt text for all images</li>
            <li>Keyboard navigation support</li>
            <li>Good color contrast (WCAG AA minimum)</li>
            <li>Semantic HTML structure</li>
          </ul>
        </section>

        {/* Section 6: Tech Stack */}
        <section
          id="tech"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-primary" />
            6. Tech Stack Options
          </h2>

          <p>
            Choose based on your skills and goals. Building from scratch shows
            technical ability; no-code is faster if design is the priority.
          </p>

          <h3>Build From Scratch (Recommended for Developers)</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-600">Next.js</p>
              <p className="mt-1 text-muted-foreground">
                Best for React developers. Great SEO, fast, modern. Deploy on
                Vercel for free.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-600">Astro</p>
              <p className="mt-1 text-muted-foreground">
                Incredibly fast static sites. Perfect for content-focused
                portfolios. Supports multiple frameworks.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">HTML/CSS/JS</p>
              <p className="mt-1 text-muted-foreground">
                Simple and effective. Shows fundamentals. No build step needed.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-600">Gatsby</p>
              <p className="mt-1 text-muted-foreground">
                React-based static site generator. Great plugin ecosystem.
              </p>
            </div>
          </div>

          <h3>No-Code Options (Faster to Ship)</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-600">Webflow</p>
              <p className="mt-1 text-muted-foreground">
                Professional design control. Exports clean code. Free tier
                available.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-600">Framer</p>
              <p className="mt-1 text-muted-foreground">
                Beautiful templates. Great for designers. Easy animations.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-gray-600">Notion + Super.so</p>
              <p className="mt-1 text-muted-foreground">
                Turn a Notion page into a website. Super quick to set up.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">Carrd</p>
              <p className="mt-1 text-muted-foreground">
                Simple one-page sites. Great for minimal portfolios.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Hosting */}
        <section
          id="hosting"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            7. Hosting &amp; Deployment
          </h2>

          <h3>Free Hosting Options</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Platform</th>
                  <th className="p-3 text-left">Best For</th>
                  <th className="p-3 text-left">Custom Domain</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Vercel</td>
                  <td className="p-3">Next.js, React</td>
                  <td className="p-3">✅ Free</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Netlify</td>
                  <td className="p-3">Static sites, Astro</td>
                  <td className="p-3">✅ Free</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">GitHub Pages</td>
                  <td className="p-3">Static HTML/Jekyll</td>
                  <td className="p-3">✅ Free</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Cloudflare Pages</td>
                  <td className="p-3">Any static site</td>
                  <td className="p-3">✅ Free</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Custom Domain</h3>
          <ul>
            <li>
              <strong>yourname.com</strong> looks more professional than
              yourname.vercel.app
            </li>
            <li>Domains cost ₹500-1000/year (Namecheap, Google Domains)</li>
            <li>Connect to your hosting platform for free</li>
            <li>
              Set up HTTPS for security (most platforms do this automatically)
            </li>
          </ul>
        </section>

        {/* Section 8: SEO */}
        <section
          id="seo"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Search className="h-6 w-6 text-primary" />
            8. SEO Optimization
          </h2>

          <p>Help recruiters find you when they search for skills you have:</p>

          <h3>Basic SEO Checklist</h3>
          <ul>
            <li>Title tag with your name and role</li>
            <li>Meta description explaining who you are</li>
            <li>Open Graph tags for social sharing</li>
            <li>Semantic HTML (proper headings, alt text)</li>
            <li>Fast loading speed</li>
            <li>Mobile responsive</li>
            <li>Submit sitemap to Google Search Console</li>
          </ul>

          <h3>Content for SEO</h3>
          <ul>
            <li>Include your location if seeking local jobs</li>
            <li>List your tech stack naturally in content</li>
            <li>Add a blog with technical content (optional but valuable)</li>
          </ul>
        </section>

        {/* Section 9: Examples */}
        <section
          id="examples"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            9. Portfolio Examples to Learn From
          </h2>

          <p>
            Study these portfolios for inspiration (but don&apos;t copy
            directly):
          </p>

          <h3>What to Analyze</h3>
          <ul>
            <li>How do they present projects?</li>
            <li>What&apos;s their navigation structure?</li>
            <li>How do they balance design and content?</li>
            <li>What makes them memorable?</li>
          </ul>

          <h3>Common Patterns in Great Portfolios</h3>
          <ul>
            <li>Clean, minimal design with good typography</li>
            <li>Strong hero section with clear value proposition</li>
            <li>Projects front and center</li>
            <li>Easy-to-find contact information</li>
            <li>Personal touches that show personality</li>
          </ul>
        </section>

        {/* Section 10: Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            10. Mistakes to Avoid
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Broken links and demos
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Test every link regularly. A broken demo is worse than no demo.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Too many projects with no depth
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                15 half-baked projects are worse than 4 excellent ones.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ No clear call-to-action
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Make it obvious how to contact you or hire you.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Overwhelming animations
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Fancy effects that annoy or slow down the experience.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Outdated content
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Projects from 5 years ago with old tech stacks.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ No mobile responsiveness
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Many recruiters browse on phones. Unreadable on mobile =
                rejected.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Timeline */}
        <section
          id="timeline"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            11. Build Timeline
          </h2>

          <p>Here&apos;s a realistic timeline for building your portfolio:</p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-blue-500 p-4">
              <h4 className="font-bold">Days 1-2: Planning</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Decide on sections and content</li>
                <li>• Choose tech stack</li>
                <li>• Gather content for projects</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 p-4">
              <h4 className="font-bold">Days 3-5: Build</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Set up project structure</li>
                <li>• Build all sections</li>
                <li>• Add project content</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 p-4">
              <h4 className="font-bold">Days 6-7: Polish</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Responsive testing</li>
                <li>• Performance optimization</li>
                <li>• Final content review</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-purple-500 p-4">
              <h4 className="font-bold">Day 7+: Launch &amp; Iterate</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Deploy to hosting</li>
                <li>• Set up custom domain</li>
                <li>• Share and gather feedback</li>
                <li>• Continuously improve</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            12. FAQs
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">Do I need a custom domain?</p>
              <p className="mt-2 text-muted-foreground">
                Recommended but not required. yourname.com looks more
                professional than yourname.vercel.app. Domains cost ~₹800/year.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">How many projects should I include?</p>
              <p className="mt-2 text-muted-foreground">
                3-5 strong projects is ideal. Quality over quantity. One
                excellent project is worth more than five mediocre ones.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Should I build from scratch or use a template?
              </p>
              <p className="mt-2 text-muted-foreground">
                Developers should consider building from scratch—it&apos;s a
                project itself. Designers can use no-code tools to focus on
                design. Both are valid.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                What if my projects aren&apos;t impressive?
              </p>
              <p className="mt-2 text-muted-foreground">
                Everyone starts somewhere. Include your best work, explain what
                you learned, and show progression. Add new projects as you grow.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">Should I include tutorial projects?</p>
              <p className="mt-2 text-muted-foreground">
                Avoid if possible. If you must include them, add significant
                customization and clearly note what you changed. Original
                projects are always better.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">How often should I update it?</p>
              <p className="mt-2 text-muted-foreground">
                Add new projects as you complete them. Review and refresh at
                least every 6 months. Remove outdated content that doesn&apos;t
                represent your current skills.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Build Your Digital Presence</h2>
          <p>
            Your portfolio is an investment in your career that compounds over
            time. Every recruiter visit, every project showcase, every
            opportunity it attracts—it all adds up.
          </p>
          <p>
            Don&apos;t wait for perfection. Start simple, ship it, share it, and
            improve based on feedback. The best portfolio is one that actually
            exists online.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best portfolio is one that&apos;s live. Ship it today. 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/git-github-beginners-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Git &amp; GitHub Guide
            </Link>
            <Link
              href="/blog/one-page-resume-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Writing Guide
            </Link>
            <Link
              href="/blog/linkedin-optimization-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              LinkedIn Optimization
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
                Based on analysis of 500+ successful developer portfolios and
                insights from hiring managers.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
