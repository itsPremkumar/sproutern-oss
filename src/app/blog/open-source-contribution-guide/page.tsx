import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  GitPullRequest,
  Github,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Code,
  Star,
  Heart,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Getting Started with Open Source Contributions',
  description:
    'Learn how to make your first open source contribution. Find beginner-friendly projects, understand workflows, and build your developer profile.',
  keywords: [
    'open source contribution',
    'first open source',
    'good first issue',
    'github contributions',
    'open source beginners',
  ],
  openGraph: {
    title: 'Getting Started with Open Source Contributions',
    description: 'Make your first open source contribution today.',
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
          <div className="mb-4 flex items-center gap-2 text-gray-600">
            <Github className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Technical Skills
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Getting Started with Open Source Contributions
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Open source contributions show real-world skills, help you learn
            from great developers, and boost your resume. Here's how to start.
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
                href="#why"
                className="text-primary hover:underline"
              >
                1. Why Contribute
              </a>
            </li>
            <li>
              <a
                href="#find"
                className="text-primary hover:underline"
              >
                2. Finding Projects
              </a>
            </li>
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                3. Types of Contributions
              </a>
            </li>
            <li>
              <a
                href="#workflow"
                className="text-primary hover:underline"
              >
                4. Contribution Workflow
              </a>
            </li>
            <li>
              <a
                href="#tips"
                className="text-primary hover:underline"
              >
                5. First Contribution Tips
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
                Start with documentation, typos, or "good first issue" labels
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Read contribution guidelines before submitting</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Small, focused PRs get merged faster than large ones</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Be patient—maintainers are often volunteers</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Why */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            1. Why Contribute to Open Source
          </h2>

          <ul>
            <li>
              <strong>Resume boost:</strong> Shows real-world collaboration
              skills
            </li>
            <li>
              <strong>Learn from the best:</strong> See how top developers write
              code
            </li>
            <li>
              <strong>Network:</strong> Connect with the community
            </li>
            <li>
              <strong>Give back:</strong> Help tools you use every day
            </li>
            <li>
              <strong>Job opportunities:</strong> Some companies hire active
              contributors
            </li>
          </ul>
        </section>

        {/* Section 2: Find */}
        <section
          id="find"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. Finding Projects
          </h2>

          <h3>Where to Look</h3>
          <ul>
            <li>
              <strong>GitHub Explore:</strong> github.com/explore
            </li>
            <li>
              <strong>Good First Issues:</strong> goodfirstissue.dev
            </li>
            <li>
              <strong>First Contributions:</strong> firstcontributions.github.io
            </li>
            <li>
              <strong>Up For Grabs:</strong> up-for-grabs.net
            </li>
          </ul>

          <h3>How to Choose</h3>
          <ul>
            <li>Pick something you use or are interested in</li>
            <li>Check if it's actively maintained (recent commits/issues)</li>
            <li>Read the CONTRIBUTING.md file</li>
            <li>Start with smaller projects before major frameworks</li>
          </ul>
        </section>

        {/* Section 3: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            3. Types of Contributions
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Beginner-Friendly</p>
              <ul className="mt-1 space-y-1">
                <li>• Fix typos in docs</li>
                <li>• Improve README</li>
                <li>• Add tests</li>
                <li>• Translation</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Code Contributions</p>
              <ul className="mt-1 space-y-1">
                <li>• Bug fixes</li>
                <li>• New features</li>
                <li>• Performance improvements</li>
                <li>• Refactoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Workflow */}
        <section
          id="workflow"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GitPullRequest className="h-6 w-6 text-primary" />
            4. Contribution Workflow
          </h2>

          <ol>
            <li>
              <strong>Fork</strong> the repository
            </li>
            <li>
              <strong>Clone</strong> your fork locally
            </li>
            <li>
              <strong>Create a branch</strong> for your changes
            </li>
            <li>
              <strong>Make changes</strong> and commit
            </li>
            <li>
              <strong>Push</strong> to your fork
            </li>
            <li>
              <strong>Open a Pull Request</strong> to the original repo
            </li>
            <li>
              <strong>Respond to feedback</strong> and update if needed
            </li>
          </ol>
        </section>

        {/* Section 5: Tips */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            5. First Contribution Tips
          </h2>

          <ul>
            <li>
              <strong>Start small:</strong> Your first PR doesn't need to be
              groundbreaking
            </li>
            <li>
              <strong>Read guidelines:</strong> Follow the project's
              contribution rules
            </li>
            <li>
              <strong>Be respectful:</strong> Maintainers are volunteers
            </li>
            <li>
              <strong>Test your changes:</strong> Make sure nothing breaks
            </li>
            <li>
              <strong>Write clear PR descriptions:</strong> Explain what and why
            </li>
          </ul>
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
              <p className="font-bold">
                Do I need to be an expert to contribute?
              </p>
              <p className="mt-2 text-muted-foreground">
                Not at all. Many projects welcome documentation fixes, typo
                corrections, and beginner-friendly issues.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if my PR gets rejected?</p>
              <p className="mt-2 text-muted-foreground">
                It happens! Ask for feedback, learn from it, and try again.
                Every contributor faces rejections.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Programs */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            Popular Open Source Programs
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold text-orange-600">
                Google Summer of Code (GSoC)
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                12-week program where students work on open source projects.
                Stipend: $1,500-$6,600 depending on project size and location.
                Applications open February-April.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">
                LFX Mentorship (Linux Foundation)
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                3-month mentorship program with stipends. Multiple cohorts per
                year. Focus on cloud-native and Linux ecosystem projects.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-purple-600">Outreachy</p>
              <p className="mt-2 text-sm text-muted-foreground">
                3-month internships for underrepresented groups in tech.
                Stipend: $7,000. Two cohorts per year.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-green-600">Hacktoberfest</p>
              <p className="mt-2 text-sm text-muted-foreground">
                October event encouraging open source contributions. Complete 4
                PRs to earn rewards. Great for beginners.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-red-600">MLH Fellowship</p>
              <p className="mt-2 text-sm text-muted-foreground">
                12-week program contributing to real open source projects. Paid
                fellowship with mentorship and community.
              </p>
            </div>
          </div>
        </section>

        {/* PR Review Tips */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <GitPullRequest className="h-6 w-6 text-primary" />
            Writing Great Pull Requests
          </h2>

          <ul>
            <li>
              <strong>Descriptive title:</strong> Summarize the change in one
              line
            </li>
            <li>
              <strong>Problem statement:</strong> Explain what issue you're
              fixing
            </li>
            <li>
              <strong>Solution description:</strong> Briefly explain your
              approach
            </li>
            <li>
              <strong>Testing:</strong> Describe how you tested your changes
            </li>
            <li>
              <strong>Screenshots:</strong> Include for UI changes
            </li>
            <li>
              <strong>Link to issue:</strong> Reference the related issue number
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Keep PRs small and focused. A 50-line PR
              gets reviewed in hours; a 500-line PR sits for weeks.
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Open Source Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Starting with huge PRs
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Begin with documentation, typos, or "good first issue" labels.
                  Build trust before tackling major features.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not reading CONTRIBUTING.md
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Each project has its own rules. Ignoring them = instant
                  rejection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Being impatient with maintainers
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Maintainers are often volunteers. Don't ping them daily. Wait
                  at least a week before gentle follow-up.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not understanding the codebase
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Spend time reading the code. Understand the architecture
                  before making changes. Ask questions in discussions first.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Only contributing for swag
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Hacktoberfest spam gives a bad reputation. Contribute
                  meaningfully to projects you care about.
                </p>
              </div>
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
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Open source got me hired at a FAANG..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Started contributing to a React library in 2nd year. After 50+
                PRs, the company behind it reached out. Now I work there as a
                full-time engineer." — Karthik, Bangalore
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "GSoC changed my career trajectory..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Got into GSoC in 3rd year with Mozilla. The mentorship and
                stipend were great, but the network I built was priceless.
                Multiple job offers followed." — Priya, Chennai
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Documentation contributions led to core maintainer role..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Started by fixing typos in docs. Gradually moved to code. 18
                months later, I'm a core maintainer with commit access." —
                Rahul, Pune
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
                How do I get selected for GSoC?
              </h3>
              <p className="text-muted-foreground">
                Start contributing to your target org 2-3 months before
                applications. Build relationships with mentors. Write a solid
                proposal based on their priorities. Past contributions matter
                most.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Do open source contributions help in placements?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. They show initiative, collaboration skills, and real
                coding ability. Many companies specifically look for GitHub
                activity.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How many hours per week should I dedicate?
              </h3>
              <p className="text-muted-foreground">
                5-10 hours per week is a good start. Quality matters more than
                quantity. One meaningful contribution per week builds momentum.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I contribute to big projects or small ones?
              </h3>
              <p className="text-muted-foreground">
                Start with medium-sized projects. Very large projects (React,
                Kubernetes) can be overwhelming. Very small projects may have
                inactive maintainers.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I find issues to work on?
              </h3>
              <p className="text-muted-foreground">
                Search for labels like "good first issue," "help wanted," or
                "beginner-friendly." Many projects have dedicated labels for
                newcomers.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I don't know the tech stack?
              </h3>
              <p className="text-muted-foreground">
                That's fine! Pick projects in languages you want to learn.
                Reading good codebases is one of the best ways to learn. Start
                with documentation while you learn.
              </p>
            </div>
          </div>
        </section>

        {/* Contribution Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            First Contribution Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Set up Git on your machine</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Create a GitHub account</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>
                Learn basic Git commands (clone, branch, commit, push)
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Find a project you're interested in</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Read the CONTRIBUTING.md and CODE_OF_CONDUCT.md</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Find a "good first issue" to work on</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Fork the repository</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Make your changes in a new branch</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Submit your first Pull Request!</span>
            </div>
          </div>
        </section>

        {/* Top Beginner Projects */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            Beginner-Friendly Projects to Start
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Project
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Language
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Good For
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">
                    First Contributions
                  </td>
                  <td className="border p-3">Any</td>
                  <td className="border p-3">Learning Git workflow</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">freeCodeCamp</td>
                  <td className="border p-3">JavaScript</td>
                  <td className="border p-3">Web development</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">EddieHub</td>
                  <td className="border p-3">Various</td>
                  <td className="border p-3">Community-first projects</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Zulip</td>
                  <td className="border p-3">Python</td>
                  <td className="border p-3">Great mentorship</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Mozilla Firefox</td>
                  <td className="border p-3">C++/Rust</td>
                  <td className="border p-3">Large-scale projects</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Contributing Today</h2>
          <p>
            Your first open source contribution is the hardest. After that, it
            gets easier and more rewarding.
          </p>
          <p>
            Remember: every major open source project was built by people who
            started exactly where you are now. Your contributions matter, no
            matter how small they seem.
          </p>
          <p className="text-lg font-semibold text-primary">
            Find a project you care about and make your first PR. 🚀
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
              Git & GitHub Guide
            </Link>
            <Link
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Guide
            </Link>
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation
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
                We contribute to open source too!
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
