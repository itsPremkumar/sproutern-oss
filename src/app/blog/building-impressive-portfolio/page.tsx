import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  Layout,
  Github,
  Globe,
  Lightbulb,
  CheckCircle,
  Code,
  Palette,
  FileText,
  ArrowRight,
  Users,
  Star,
  Layers,
  Eye,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build an Impressive Portfolio',
  description:
    'Complete guide to building a standout portfolio for students and freshers. Includes industry-specific tips for developers, designers, marketers, and templates to get started.',
  keywords: [
    'portfolio',
    'student portfolio',
    'developer portfolio',
    'design portfolio',
    'portfolio tips',
    'how to build portfolio',
    'portfolio for freshers',
  ],
  openGraph: {
    title: 'Build a Portfolio That Gets You Hired',
    description:
      'Industry-specific portfolio building guide with templates and examples.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-purple-600">
            <Layers className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Personal Branding
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Build a Portfolio That Showcases Your Best Work
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your resume tells people what you can do. Your portfolio proves it.
            Learn how to create a portfolio that makes recruiters say "We need
            to hire this person."
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
              <span>20 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Eye className="h-5 w-5 text-purple-600" />
            Why Portfolios Matter
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">71%</span>
              <span>of hiring managers value portfolios more than GPA</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">56%</span>
              <span>of candidates with portfolios get interviewed</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">3x</span>
              <span>higher callback rate for candidates with portfolios</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">30s</span>
              <span>average time recruiter spends on portfolio</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#platform"
                className="text-primary hover:underline"
              >
                1. Choose Your Platform
              </a>
            </li>
            <li>
              <a
                href="#structure"
                className="text-primary hover:underline"
              >
                2. Portfolio Structure
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary hover:underline"
              >
                3. Selecting & Presenting Projects
              </a>
            </li>
            <li>
              <a
                href="#case-studies"
                className="text-primary hover:underline"
              >
                4. Writing Case Studies
              </a>
            </li>
            <li>
              <a
                href="#developers"
                className="text-primary hover:underline"
              >
                5. For Developers
              </a>
            </li>
            <li>
              <a
                href="#designers"
                className="text-primary hover:underline"
              >
                6. For Designers
              </a>
            </li>
            <li>
              <a
                href="#marketers"
                className="text-primary hover:underline"
              >
                7. For Marketers & Writers
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                8. Common Mistakes
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            A portfolio is proof of work. In a world where everyone claims to
            have "excellent problem-solving skills," your portfolio shows what
            you've actually built, designed, written, or created. For students
            and freshers, it's often the deciding factor between an interview
            and a rejection.
          </p>
          <p>
            This guide will walk you through building a portfolio that not only
            looks professional but effectively communicates your value to
            potential employers.
          </p>
        </section>

        {/* Platform */}
        <section
          id="platform"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            1. Choosing the Right Platform
          </h2>

          <p>
            Where your portfolio lives depends on your field and technical
            comfort level. Here are your options:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 flex items-center gap-2 font-bold">
                <Code className="h-4 w-4" />
                For Developers
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>GitHub Pages</strong> - Free, simple, shows you know
                  Git
                </li>
                <li>
                  • <strong>Vercel/Netlify</strong> - Easy deployment, free tier
                </li>
                <li>
                  • <strong>Personal domain</strong> - yourname.dev or .io
                </li>
                <li>• Build with: Next.js, Astro, Hugo, or plain HTML</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 flex items-center gap-2 font-bold">
                <Palette className="h-4 w-4" />
                For Designers
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Behance</strong> - Industry standard, recruiters
                  search here
                </li>
                <li>
                  • <strong>Dribbble</strong> - Good for UI/visual work
                </li>
                <li>
                  • <strong>Figma Community</strong> - For UX case studies
                </li>
                <li>
                  • <strong>Webflow/Framer</strong> - Custom portfolio sites
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 flex items-center gap-2 font-bold">
                <FileText className="h-4 w-4" />
                For Writers/Marketers
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Medium</strong> - Built-in audience, easy to start
                </li>
                <li>
                  • <strong>Contently</strong> - Professional writing portfolio
                </li>
                <li>
                  • <strong>Substack</strong> - Newsletter format
                </li>
                <li>
                  • <strong>Notion</strong> - Clean, easy to organize
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 flex items-center gap-2 font-bold">
                <Layers className="h-4 w-4" />
                No-Code Options
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Notion</strong> - Free, flexible, shareable
                </li>
                <li>
                  • <strong>Carrd</strong> - Simple one-page sites ($19/year)
                </li>
                <li>
                  • <strong>WordPress</strong> - Full-featured, free options
                </li>
                <li>
                  • <strong>Google Sites</strong> - Free, basic but functional
                </li>
              </ul>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> For developers, building your own
              portfolio site IS a portfolio project. It demonstrates your skills
              while showcasing your other work.
            </div>
          </div>
        </section>

        {/* Structure */}
        <section
          id="structure"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layout className="h-6 w-6 text-primary" />
            2. Essential Portfolio Structure
          </h2>

          <p>
            Every portfolio should have these core elements, regardless of your
            field:
          </p>

          <h3>Must-Have Pages/Sections</h3>
          <ol>
            <li>
              <strong>Hero/Landing</strong> - Your name, title, 1-line value
              prop
              <p className="ml-4 text-sm text-muted-foreground">
                Example: "Full-stack developer building products that make life
                simpler"
              </p>
            </li>
            <li>
              <strong>About Me</strong> - Who you are, what you're passionate
              about, what you're looking for
            </li>
            <li>
              <strong>Projects/Work</strong> - 3-6 of your best projects with
              case studies
            </li>
            <li>
              <strong>Skills/Services</strong> - What you can do (optional, can
              be in About)
            </li>
            <li>
              <strong>Contact</strong> - Email, LinkedIn, and clear CTA
            </li>
          </ol>

          <h3>Nice-to-Have Elements</h3>
          <ul>
            <li>Blog/Writing section (shows thought leadership)</li>
            <li>Testimonials/Recommendations</li>
            <li>Resume download link</li>
            <li>Social proof (GitHub stars, users served, etc.)</li>
          </ul>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2>3. Selecting & Presenting Your Projects</h2>

          <h3>Quality Over Quantity</h3>
          <p>
            3-5 excellent projects beat 15 mediocre ones. Select projects that:
          </p>
          <ul>
            <li>Are relevant to roles you're applying for</li>
            <li>Demonstrate different skills/technologies</li>
            <li>Have tangible outcomes or impact</li>
            <li>You can speak intelligently about in interviews</li>
          </ul>

          <h3>No "Real" Projects? Create Some!</h3>
          <div className="my-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="mb-2 text-sm font-bold">
              ✅ Portfolio-Worthy Projects You Can Build
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Clone a product you use (Spotify, Notion, etc.)</li>
              <li>• Build a solution to a personal problem</li>
              <li>• Contribute to open source</li>
              <li>• Design/redesign a poorly-designed app</li>
              <li>• Analyze public data and visualize insights</li>
              <li>• Create a passion project (blog, tool, game)</li>
            </ul>
          </div>
        </section>

        {/* Case Studies */}
        <section
          id="case-studies"
          className="scroll-mt-20"
        >
          <h2>4. Writing Compelling Case Studies</h2>

          <p>
            Don't just show screenshots. Tell the story of your work using this
            framework:
          </p>

          <div className="my-6 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">The Case Study Framework</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold">1. Overview (2-3 sentences)</p>
                <p className="text-muted-foreground">
                  What is this project? What was the challenge?
                </p>
              </div>
              <div>
                <p className="font-bold">2. Your Role</p>
                <p className="text-muted-foreground">
                  What specifically did YOU do? (Critical for team projects)
                </p>
              </div>
              <div>
                <p className="font-bold">3. The Process</p>
                <p className="text-muted-foreground">
                  Research → Design → Build → Test. Show your thinking.
                </p>
              </div>
              <div>
                <p className="font-bold">4. Challenges & Solutions</p>
                <p className="text-muted-foreground">
                  What problems did you face? How did you solve them?
                </p>
              </div>
              <div>
                <p className="font-bold">5. Results & Impact</p>
                <p className="text-muted-foreground">
                  Quantify outcomes. Users served, metrics improved, etc.
                </p>
              </div>
              <div>
                <p className="font-bold">6. Learnings</p>
                <p className="text-muted-foreground">
                  What would you do differently? What did you learn?
                </p>
              </div>
            </div>
          </div>

          <h3>Example Case Study Introduction</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="mb-2 font-bold">
              🛒 ShopEasy - E-commerce Inventory System
            </p>
            <p className="mb-3">
              <strong>Challenge:</strong> A local retailer was losing ₹2L
              monthly due to stockouts and overstocking. They tracked inventory
              on spreadsheets and had no real-time visibility.
            </p>
            <p className="mb-3">
              <strong>Solution:</strong> Built an inventory management system
              with real-time tracking, automated reorder alerts, and sales
              forecasting using Python, React, and PostgreSQL.
            </p>
            <p>
              <strong>Impact:</strong> Reduced stockouts by 85%, decreased
              overstock by 40%, saved the business ₹1.8L monthly.
            </p>
          </div>
        </section>

        {/* For Developers */}
        <section
          id="developers"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Github className="h-6 w-6 text-primary" />
            5. Developer Portfolio Best Practices
          </h2>

          <h3>Your GitHub IS Part of Your Portfolio</h3>
          <ul>
            <li>Pin your best 6 repositories</li>
            <li>Write detailed READMEs with setup instructions</li>
            <li>Include live demo links</li>
            <li>Show consistent commit history</li>
            <li>Use descriptive commit messages</li>
          </ul>

          <h3>What to Include</h3>
          <ul>
            <li>
              <strong>Live demos:</strong> Deploy everything that can be
              deployed
            </li>
            <li>
              <strong>Code links:</strong> GitHub/GitLab for each project
            </li>
            <li>
              <strong>Tech stack:</strong> List technologies used
            </li>
            <li>
              <strong>Documentation:</strong> Show you can write clear docs
            </li>
          </ul>

          <h3>Developer Portfolio Checklist</h3>
          <div className="not-prose">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>3-5 projects with live demos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Clean, readable code on GitHub</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Technical blog posts (optional but powerful)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Open source contributions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Clear contact information</span>
              </li>
            </ul>
          </div>
        </section>

        {/* For Designers */}
        <section
          id="designers"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Palette className="h-6 w-6 text-primary" />
            6. Designer Portfolio Best Practices
          </h2>

          <h3>Show Process, Not Just Pixels</h3>
          <p>
            Recruiters want to see HOW you think, not just what you created.
            Include:
          </p>
          <ul>
            <li>User research and personas</li>
            <li>Sketches and wireframes</li>
            <li>Iterations and design decisions</li>
            <li>Before/after comparisons</li>
            <li>Usability testing results</li>
          </ul>

          <h3>UX vs UI Focus</h3>
          <div className="not-prose my-4 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">UX Portfolio Should Show:</p>
              <ul className="space-y-1">
                <li>• User research methods</li>
                <li>• Problem-solving approach</li>
                <li>• Information architecture</li>
                <li>• Usability testing</li>
                <li>• Metrics/outcomes</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">UI Portfolio Should Show:</p>
              <ul className="space-y-1">
                <li>• Visual design skills</li>
                <li>• Design system work</li>
                <li>• Interaction design</li>
                <li>• Responsiveness</li>
                <li>• Attention to detail</li>
              </ul>
            </div>
          </div>
        </section>

        {/* For Marketers */}
        <section
          id="marketers"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            7. Marketer & Writer Portfolio Tips
          </h2>

          <h3>What to Include</h3>
          <ul>
            <li>
              Writing samples across different formats (blog, social, email)
            </li>
            <li>Campaign results with metrics</li>
            <li>Strategy documents (redacted if needed)</li>
            <li>Social media growth examples</li>
            <li>Any content that went viral or performed well</li>
          </ul>

          <h3>Showing Impact Without Breaking NDAs</h3>
          <ul>
            <li>Use percentage improvements instead of absolute numbers</li>
            <li>Describe strategy without naming clients</li>
            <li>Create spec/concept work for practice</li>
            <li>Ask previous employers for permission to share</li>
          </ul>
        </section>

        {/* Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2>8. Common Portfolio Mistakes to Avoid</h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Too Many Projects</p>
              <p className="text-sm">
                5 strong projects beat 15 mediocre ones. Curate ruthlessly.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ No Process, Just Results</p>
              <p className="text-sm">
                Show your thinking, not just the final product.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Broken Links/Demos</p>
              <p className="text-sm">
                Test everything before sharing. Nothing kills credibility
                faster.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ No Clear Call to Action</p>
              <p className="text-sm">
                Tell visitors what to do next: "Let's Chat" button, email,
                LinkedIn.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Outdated Content</p>
              <p className="text-sm">
                Remove old/irrelevant work. Update regularly.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Building Today</h2>

          <p>
            Your portfolio is a living document that grows with you. Don't wait
            until it's "perfect" to share it—start with what you have, get
            feedback, and iterate.
          </p>

          <p>
            Remember: the best portfolio is the one that gets you interviews.
            Focus on clarity, impact, and making it easy for recruiters to
            understand your value in 30 seconds.
          </p>

          <p className="text-lg font-semibold text-primary">
            Your portfolio is proof that you can do the work. Go build that
            proof. 🚀
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
              LinkedIn Optimization Guide
            </Link>
            <Link
              href="/blog/resume-mistakes-students-avoid"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Mistakes to Avoid
            </Link>
            <Link
              href="/resources/portfolio-templates"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Free Portfolio Templates
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
                Our team has reviewed thousands of student portfolios and
                compiled the patterns that get callbacks from top companies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
