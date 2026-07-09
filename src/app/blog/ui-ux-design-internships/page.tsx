import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Layout,
  Palette,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Eye,
  Figma,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UI/UX Design Internships: Complete Guide',
  description:
    'Break into UI/UX design with this comprehensive internship guide. Learn required skills, portfolio tips, and how to land your first design role.',
  keywords: [
    'ui ux internship',
    'design internship india',
    'ux design career',
    'product design internship',
    'figma portfolio',
  ],
  openGraph: {
    title: 'UI/UX Design Internships: Complete Guide',
    description: 'Start your design career with the right internship.',
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
          <div className="mb-4 flex items-center gap-2 text-pink-600">
            <Palette className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Design Career
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            UI/UX Design Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Design is one of the most creative and rewarding career paths. Learn
            how to build your portfolio and land your first design internship.
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
              <span>18 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                1. UI vs UX vs Product Design
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Required Skills & Tools
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
              <span>Portfolio matters more than degrees in design</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Learn Figma—it's the industry standard</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>3-5 quality case studies are enough</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                UX is about problem-solving, not just making things pretty
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Roles */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. UI vs UX vs Product Design
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-pink-500 py-2 pl-4">
              <p className="font-bold">UI Designer</p>
              <p className="text-muted-foreground">
                Visual design, colors, typography, icons, making things look
                beautiful
              </p>
            </div>
            <div className="border-l-4 border-pink-500 py-2 pl-4">
              <p className="font-bold">UX Designer</p>
              <p className="text-muted-foreground">
                User research, flows, wireframes, solving user problems
              </p>
            </div>
            <div className="border-l-4 border-pink-500 py-2 pl-4">
              <p className="font-bold">Product Designer</p>
              <p className="text-muted-foreground">
                End-to-end design, UI + UX + business thinking combined
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
            <Figma className="h-6 w-6 text-primary" />
            2. Required Skills & Tools
          </h2>

          <h3>Must-Have Tools</h3>
          <ul>
            <li>
              <strong>Figma:</strong> Industry standard, learn it deeply
            </li>
            <li>
              <strong>Adobe XD:</strong> Good alternative
            </li>
            <li>
              <strong>Prototyping:</strong> Figma prototypes, Principle,
              ProtoPie
            </li>
          </ul>

          <h3>Core Skills</h3>
          <ul>
            <li>Visual design fundamentals</li>
            <li>User research and empathy</li>
            <li>Wireframing and prototyping</li>
            <li>Design systems</li>
            <li>Basic HTML/CSS (nice to have)</li>
          </ul>
        </section>

        {/* Section 3: Portfolio */}
        <section
          id="portfolio"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layout className="h-6 w-6 text-primary" />
            3. Building Your Portfolio
          </h2>

          <h3>Case Study Structure</h3>
          <ol>
            <li>
              <strong>Problem:</strong> What user problem were you solving?
            </li>
            <li>
              <strong>Research:</strong> How did you understand the user?
            </li>
            <li>
              <strong>Process:</strong> Wireframes, iterations, decisions
            </li>
            <li>
              <strong>Solution:</strong> Final designs with rationale
            </li>
            <li>
              <strong>Results:</strong> Impact metrics if available
            </li>
          </ol>

          <h3>Project Ideas</h3>
          <ul>
            <li>Redesign an existing app's flow</li>
            <li>Design a mobile app concept</li>
            <li>Create a design system</li>
            <li>Solve a personal/local problem</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Quality over quantity. 3 detailed case
              studies beat 10 dribbble shots.
            </div>
          </div>
        </section>

        {/* Section 4: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            4. Top Companies
          </h2>

          <h3>Product Companies</h3>
          <p>Swiggy, Zomato, Razorpay, CRED, PhonePe, Flipkart, Ola, Meesho</p>

          <h3>Design Studios</h3>
          <p>Obvious, Thoughtworks, Frog Design, IDEO, Designit</p>

          <h3>Tech Giants</h3>
          <p>Google, Microsoft, Apple (very competitive)</p>
        </section>

        {/* Section 5: Interview */}
        <section
          id="interview"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Smartphone className="h-6 w-6 text-primary" />
            5. Interview Process
          </h2>

          <ol>
            <li>
              <strong>Portfolio Review:</strong> Walk through your case studies
            </li>
            <li>
              <strong>Design Challenge:</strong> Solve a problem in 1-2 hours
            </li>
            <li>
              <strong>Culture Fit:</strong> Team dynamics, design thinking
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
              <p className="font-bold">Do I need a design degree?</p>
              <p className="mt-2 text-muted-foreground">
                No. Most designers are self-taught. Your portfolio speaks louder
                than any degree.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How long to become job-ready?</p>
              <p className="mt-2 text-muted-foreground">
                With focused learning (2-4 hours daily), 3-6 months to build a
                portfolio good enough for internships.
              </p>
            </div>
          </div>
        </section>

        {/* Design Process Deep Dive */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            The UX Design Process
          </h2>

          <p>
            Understanding the design process is crucial for interviews and
            building strong case studies:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
                1
              </div>
              <div>
                <p className="font-semibold">Empathize</p>
                <p className="text-sm text-muted-foreground">
                  Understand users through research: interviews, surveys,
                  observation. Create user personas and journey maps.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
                2
              </div>
              <div>
                <p className="font-semibold">Define</p>
                <p className="text-sm text-muted-foreground">
                  Synthesize research into problem statements. What's the core
                  user problem you're solving?
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
                3
              </div>
              <div>
                <p className="font-semibold">Ideate</p>
                <p className="text-sm text-muted-foreground">
                  Generate multiple solutions. Sketch, brainstorm, explore.
                  Don't settle on the first idea.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
                4
              </div>
              <div>
                <p className="font-semibold">Prototype</p>
                <p className="text-sm text-muted-foreground">
                  Create testable versions: lo-fi wireframes to hi-fi
                  interactive prototypes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
                5
              </div>
              <div>
                <p className="font-semibold">Test</p>
                <p className="text-sm text-muted-foreground">
                  Get feedback from real users. Iterate based on learnings.
                  Design is never done.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Deep Dive */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Figma className="h-6 w-6 text-primary" />
            Essential Design Tools
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">Tool</th>
                  <th className="border p-3 text-left font-semibold">
                    Use Case
                  </th>
                  <th className="border p-3 text-left font-semibold">Cost</th>
                  <th className="border p-3 text-left font-semibold">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Figma</td>
                  <td className="border p-3">
                    UI design, prototyping, collaboration
                  </td>
                  <td className="border p-3">Free for students</td>
                  <td className="border p-3">Must Learn</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">FigJam</td>
                  <td className="border p-3">Brainstorming, workshops</td>
                  <td className="border p-3">Free with Figma</td>
                  <td className="border p-3">Must Learn</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Maze</td>
                  <td className="border p-3">User testing, analytics</td>
                  <td className="border p-3">Free tier available</td>
                  <td className="border p-3">Good to Have</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Notion</td>
                  <td className="border p-3">Documentation, research</td>
                  <td className="border p-3">Free for personal</td>
                  <td className="border p-3">Good to Have</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Framer</td>
                  <td className="border p-3">Advanced prototyping</td>
                  <td className="border p-3">Free tier available</td>
                  <td className="border p-3">Nice to Have</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Figma Skills Breakdown</h3>
          <ul>
            <li>
              <strong>Basic:</strong> Frames, components, auto-layout
            </li>
            <li>
              <strong>Intermediate:</strong> Variants, constraints, prototyping
            </li>
            <li>
              <strong>Advanced:</strong> Design systems, plugins, Dev Mode
            </li>
          </ul>
        </section>

        {/* Portfolio Case Study Example */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Layout className="h-6 w-6 text-primary" />
            Case Study Template
          </h2>

          <p>Here's a detailed structure for impressive case studies:</p>

          <div className="my-6 rounded-lg border bg-muted p-5">
            <h4 className="mb-3 font-bold">1. Hero Section</h4>
            <p className="text-sm text-muted-foreground">
              Project title, role, duration, hero image. Make it visually
              striking to encourage reading.
            </p>

            <h4 className="mb-3 mt-4 font-bold">2. Context & Problem</h4>
            <p className="text-sm text-muted-foreground">
              Set the scene: What was the business challenge? Who are the users?
              What's the impact of solving this?
            </p>

            <h4 className="mb-3 mt-4 font-bold">3. Research & Insights</h4>
            <p className="text-sm text-muted-foreground">
              Methods used (interviews, surveys, analytics). Key findings.
              Personas or journey maps if relevant.
            </p>

            <h4 className="mb-3 mt-4 font-bold">4. Design Exploration</h4>
            <p className="text-sm text-muted-foreground">
              Sketches, wireframes, multiple concepts. Show how you explored
              different solutions before converging.
            </p>

            <h4 className="mb-3 mt-4 font-bold">5. Final Solution</h4>
            <p className="text-sm text-muted-foreground">
              High-fidelity designs with annotations. Explain design decisions.
              Include prototype links.
            </p>

            <h4 className="mb-3 mt-4 font-bold">6. Results & Learnings</h4>
            <p className="text-sm text-muted-foreground">
              Metrics if available. What would you do differently? What did you
              learn?
            </p>
          </div>
        </section>

        {/* Design Challenge Prep */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Design Challenge Preparation
          </h2>

          <p>
            Most companies include a design challenge. Here's how to prepare:
          </p>

          <h3>Types of Challenges</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Take-Home (24-48 hours)</h4>
              <p className="text-sm text-muted-foreground">
                Full case study from problem to solution. Focus on process
                documentation and design rationale.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                Whiteboard Challenge (1-2 hours)
              </h4>
              <p className="text-sm text-muted-foreground">
                Live problem-solving with interviewer. Show thinking process,
                ask clarifying questions, iterate.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">App Critique</h4>
              <p className="text-sm text-muted-foreground">
                Analyze an existing app's UX. Identify problems and suggest
                improvements with reasoning.
              </p>
            </div>
          </div>

          <h3>Preparation Tips</h3>
          <ul>
            <li>Practice time-boxed challenges (set 2-hour limit)</li>
            <li>Always start with understanding the problem</li>
            <li>Sketch quickly, refine later</li>
            <li>Articulate your design decisions clearly</li>
            <li>Prepare to discuss trade-offs</li>
          </ul>
        </section>

        {/* Salary Data */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Design Internship Stipends
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
                    Product Startups (Funded)
                  </td>
                  <td className="border p-3">₹30K-60K/month</td>
                  <td className="border p-3">2-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Design Studios</td>
                  <td className="border p-3">₹20K-40K/month</td>
                  <td className="border p-3">3-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Tech Giants (Google, MS)
                  </td>
                  <td className="border p-3">₹80K-1.5L/month</td>
                  <td className="border p-3">3-4 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Agencies</td>
                  <td className="border p-3">₹10K-25K/month</td>
                  <td className="border p-3">2-3 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Early-stage Startups
                  </td>
                  <td className="border p-3">₹10K-30K/month</td>
                  <td className="border p-3">Variable</td>
                </tr>
              </tbody>
            </table>
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
                <li>• Google UX Design Certificate (Coursera)</li>
                <li>• Figma Academy (official)</li>
                <li>
                  • UX Design Fundamentals (Interaction Design Foundation intro)
                </li>
                <li>• Laws of UX (lawsofux.com)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">YouTube Channels</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Figma (official)</li>
                <li>• DesignCourse</li>
                <li>• AJ&Smart</li>
                <li>• NNGroup</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Books</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Don't Make Me Think - Steve Krug</li>
                <li>• The Design of Everyday Things - Don Norman</li>
                <li>• Sprint - Jake Knapp</li>
                <li>• Refactoring UI - Adam Wathan</li>
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
                Should I learn coding as a designer?
              </h3>
              <p className="text-muted-foreground">
                Basic HTML/CSS understanding helps but isn't required. It
                improves developer collaboration and helps you understand
                technical constraints. Many successful designers have zero
                coding skills.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How many case studies do I need in my portfolio?
              </h3>
              <p className="text-muted-foreground">
                Quality over quantity. 3-4 detailed case studies are better than
                10 shallow ones. Show depth of thinking, process, and rationale.
                One standout case study can get you hired.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I redesign existing apps for my portfolio?
              </h3>
              <p className="text-muted-foreground">
                Yes, but do it right. Don't just make visual changes. Research
                real user problems, validate assumptions, and show the "why"
                behind every decision. "Redesign for redesign's sake" looks
                amateur.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                UI or UX—which should I focus on first?
              </h3>
              <p className="text-muted-foreground">
                Start with UX fundamentals—understanding users and solving
                problems. Then layer on UI skills. Companies value designers who
                can think strategically, not just make things pretty.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I network in the design community?
              </h3>
              <p className="text-muted-foreground">
                Join Twitter/X design community, participate in
                Behance/Dribbble, attend local design meetups, join Discord
                communities. Share your work-in-progress and give genuine
                feedback to others.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the difference between design studios and product teams?
              </h3>
              <p className="text-muted-foreground">
                Studios work on multiple client projects—variety but less depth.
                Product teams work on one product—deep impact but less variety.
                Both are valuable; choose based on your learning style.
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
            <div className="rounded-lg border-l-4 border-pink-500 bg-pink-50 p-5 dark:bg-pink-950">
              <p className="font-semibold text-pink-900 dark:text-pink-100">
                "From zero design experience to CRED intern..."
              </p>
              <p className="mt-2 text-sm text-pink-800 dark:text-pink-200">
                "I was a CS student with no design background. Spent 4 months
                learning Figma through YouTube, built 3 case studies, and landed
                a CRED internship. Process documentation was key—they loved how
                I explained my thinking." — Rahul, IIT Bombay
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-pink-500 bg-pink-50 p-5 dark:bg-pink-950">
              <p className="font-semibold text-pink-900 dark:text-pink-100">
                "My app redesign went viral and led to an offer..."
              </p>
              <p className="mt-2 text-sm text-pink-800 dark:text-pink-200">
                "I redesigned the IRCTC app with proper user research. Posted on
                Twitter, it got 500+ retweets. A design lead at Razorpay reached
                out and I interned there for 6 months." — Priya, NID Ahmedabad
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-pink-500 bg-pink-50 p-5 dark:bg-pink-950">
              <p className="font-semibold text-pink-900 dark:text-pink-100">
                "Switching from graphic design to product design..."
              </p>
              <p className="mt-2 text-sm text-pink-800 dark:text-pink-200">
                "I was doing print design but wanted to move to digital. Took
                Google UX course, built case studies for local businesses, and
                got my first product design internship at a Series A startup." —
                Ankita, Srishti School
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Design Internship Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>
                Figma proficiency (components, auto-layout, prototyping)
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>3-4 detailed case studies with process documentation</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Portfolio website or Behance profile</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understanding of design thinking process</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>
                Practice presentations of case studies (2-3 times each)
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Completed 2-3 timed design challenges</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Basic understanding of user research methods</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Updated LinkedIn with design projects</span>
            </div>
          </div>
        </section>

        {/* Design Career Paths */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Design Career Growth Paths
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-pink-600">
                IC (Individual Contributor) Path
              </h4>
              <p className="text-sm text-muted-foreground">
                Intern → Junior Designer → Product Designer → Senior Designer →
                Staff Designer → Principal Designer
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Focus: Deep expertise, complex problems, mentoring juniors
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-pink-600">Management Path</h4>
              <p className="text-sm text-muted-foreground">
                Senior Designer → Design Lead → Design Manager → Head of Design
                → VP of Design → CDO
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Focus: Team building, strategy, organizational design culture
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-pink-600">Specialist Path</h4>
              <p className="text-sm text-muted-foreground">
                UX Researcher, Design Systems Lead, Accessibility Specialist,
                Design Ops, UX Writer
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Focus: Deep specialization in specific design disciplines
              </p>
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
                "Walk me through your design process"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Use the double diamond or design thinking framework. Emphasize
                research and iteration, not just final outcomes.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "How do you handle design feedback?"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Show openness to critique. Describe how you separate ego from
                work and focus on what's best for users.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "Tell me about a challenging project"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Pick a project with constraints (time, resources, scope). Focus
                on how you navigated trade-offs and what you learned.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">"How do you advocate for users?"</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Share examples of user research influencing decisions. Show how
                you balance user needs with business goals.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "How do you stay updated with design trends?"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Mention specific sources: newsletters, Twitter accounts. Show
                that you're curious and continuously learning.
              </p>
            </div>
          </div>
        </section>

        {/* Design Inspiration Sources */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            Design Inspiration Sources
          </h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <p className="font-semibold">Dribbble</p>
              <p className="text-sm text-muted-foreground">
                Visual inspiration, UI patterns, trending styles
              </p>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <p className="font-semibold">Behance</p>
              <p className="text-sm text-muted-foreground">
                Full case studies, process documentation
              </p>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <p className="font-semibold">Mobbin</p>
              <p className="text-sm text-muted-foreground">
                Real mobile app UI patterns and flows
              </p>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <p className="font-semibold">Land-book</p>
              <p className="text-sm text-muted-foreground">
                Landing page design inspiration
              </p>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <p className="font-semibold">Awwwards</p>
              <p className="text-sm text-muted-foreground">
                Award-winning website designs
              </p>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <p className="font-semibold">Refero</p>
              <p className="text-sm text-muted-foreground">
                Curated product design references
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Designing</h2>
          <p>
            Design is one of the most accessible creative careers. Start with
            Figma, build projects, and document your process.
          </p>
          <p>
            The design community is welcoming and supportive. Share your work,
            ask for feedback, and keep improving. Every designer you admire once
            made terrible designs—the difference is they kept going.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your first design doesn't need to be perfect. It just needs to
            exist. Start today. 🎨
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
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Internship Guide
            </Link>
            <Link
              href="/blog/networking-for-introverts"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Networking Guide
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
                Based on insights from 100+ design professionals.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
