import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  Rocket,
  Zap,
  TrendingUp,
  Cpu,
  Leaf,
  Globe,
  HeartPulse,
  Lightbulb,
  ArrowRight,
  Users,
  GraduationCap,
  CheckCircle,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Future of Work 2025: 15 Emerging Careers & How to Prepare',
  description:
    'Explore 15 emerging career paths and beyond including AI, sustainability, Web3, and healthcare. Complete guide with skills required and salary data.',
  keywords: [
    'future of work',
    'emerging careers',
    'AI careers',
    'sustainability jobs',
    'high-demand jobs India',
    'new job roles',
    'career trends',
  ],
  openGraph: {
    title: 'Future of Work: 15 Emerging Careers+',
    description:
      'Comprehensive guide to emerging careers in AI, sustainability, Web3, and more.',
    type: 'article',
    publishedTime: '2025-09-05T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-cyan-600">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Trends
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            The Future of Work: 15 Emerging Career Paths and Beyond
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            The jobs of tomorrow are being created today. Here are the fields
            that will define the next decade—and how to position yourself for
            success.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Research Team</span>
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-cyan-500 bg-cyan-50 p-6 dark:bg-cyan-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Zap className="h-5 w-5 text-cyan-600" /> Workforce Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-cyan-600">85M</span>
              <span>jobs will be displaced by automation by</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-cyan-600">97M</span>
              <span>new roles will emerge that don&apos;t exist today</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-cyan-600">50%</span>
              <span>of employees will need reskilling by</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-cyan-600">₹25L+</span>
              <span>average salary for top emerging roles in India</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Source: World Economic Forum Future of Jobs Report 2023
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">
            📋 Emerging Career Categories
          </h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#ai-ml"
                className="text-primary hover:underline"
              >
                1. AI & Machine Learning
              </a>
            </li>
            <li>
              <a
                href="#sustainability"
                className="text-primary hover:underline"
              >
                2. Sustainability & Climate
              </a>
            </li>
            <li>
              <a
                href="#web3"
                className="text-primary hover:underline"
              >
                3. Web3 & Blockchain
              </a>
            </li>
            <li>
              <a
                href="#healthcare"
                className="text-primary hover:underline"
              >
                4. Healthcare & Biotech
              </a>
            </li>
            <li>
              <a
                href="#cyber"
                className="text-primary hover:underline"
              >
                5. Cybersecurity
              </a>
            </li>
            <li>
              <a
                href="#remote"
                className="text-primary hover:underline"
              >
                6. Remote Work Infrastructure
              </a>
            </li>
            <li>
              <a
                href="#prepare"
                className="text-primary hover:underline"
              >
                7. How to Prepare
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                8. Future-Proof Skills
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            The world of work is transforming at an unprecedented pace.
            Technologies that were science fiction a decade ago—AI that can
            code, robots that can flip burgers, cars that drive themselves—are
            now reality.
          </p>
          <p>
            For students entering the workforce, this creates both anxiety and
            opportunity. The jobs your parents had may not exist in 20 years.
            But entirely new careers—many we can&apos;t even imagine yet—will
            take their place.
          </p>
          <p>
            This guide explores <strong>15 emerging career paths</strong> across
            6 categories, with specific skills required, salary expectations,
            and how to break in.
          </p>
        </section>

        {/* AI & ML */}
        <section
          id="ai-ml"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Cpu className="h-6 w-6 text-primary" />
            1. AI & Machine Learning Careers
          </h2>

          <p>
            AI is not just a technology—it&apos;s a transformation that&apos;s
            reshaping every industry. From healthcare to finance to
            entertainment, AI specialists are in massive demand.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <p className="font-bold">🤖 AI/ML Engineer</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Design and deploy machine learning models at scale
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Python, TensorFlow/PyTorch, MLOps
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹12-50 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <p className="font-bold">🔬 AI Research Scientist</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Push the boundaries of what AI can do through original research
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Deep learning, Math, Research
                  methodology
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹25-80 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <p className="font-bold">⚖️ AI Ethics Officer</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Ensure AI systems are fair, transparent, and beneficial to
                society
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Philosophy, Policy, Tech
                  understanding
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹20-45 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <p className="font-bold">💬 Prompt Engineer</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Craft optimal prompts to get best results from large language
                models
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> LLM understanding, Writing, Critical
                  thinking
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹10-35 LPA
                </span>
              </div>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Getting Started:</strong> Start with Python and basic ML
              courses on Coursera/fast.ai. Build projects that solve real
              problems. Contribute to open-source AI projects on GitHub.
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section
          id="sustainability"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Leaf className="h-6 w-6 text-primary" />
            2. Sustainability & Climate Careers
          </h2>

          <p>
            Climate change is the defining challenge of our generation.
            Companies are investing billions in sustainability, creating a
            massive demand for green skills.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">🌱 Sustainability Consultant</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Help companies reduce environmental impact and meet ESG goals
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> ESG frameworks, Data analysis,
                  Strategy
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹8-30 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">⚡ Renewable Energy Engineer</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Design and implement solar, wind, and other clean energy systems
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Engineering, Project management,
                  Energy systems
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹6-25 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">🏢 Chief Sustainability Officer</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Lead company-wide sustainability strategy at the executive level
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Leadership, Strategy, Stakeholder
                  management
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹50-1Cr+ LPA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Web3 */}
        <section
          id="web3"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            3. Web3 & Blockchain Careers
          </h2>

          <p>
            Despite market volatility, the underlying blockchain technology
            continues to mature. Smart contracts, DAOs, and decentralized
            applications are creating new career paths.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-bold">⛓️ Blockchain Developer</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Build decentralized applications and smart contracts
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Solidity, Rust, Cryptography
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹15-60 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-bold">🔐 Smart Contract Auditor</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Find security vulnerabilities in blockchain code (extremely
                well-paid!)
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Security, Solidity, Critical analysis
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹25-1Cr+ LPA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare */}
        <section
          id="healthcare"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <HeartPulse className="h-6 w-6 text-primary" />
            4. Healthcare & Biotech Careers
          </h2>

          <p>
            The intersection of technology and healthcare is creating entirely
            new categories of jobs. Personalized medicine, telemedicine, and
            genomics are particularly hot.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="font-bold">🧬 Genetic Counselor</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Help patients understand and act on genetic information
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Genomics, Communication, Psychology
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹8-20 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="font-bold">🔬 Bioinformatics Scientist</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Analyze biological data using computational tools
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Biology, Programming, Statistics
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹10-35 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="font-bold">📱 Digital Health Product Manager</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Build healthcare apps and platforms
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Product management, Healthcare
                  domain, UX
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹15-45 LPA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Cybersecurity */}
        <section
          id="cyber"
          className="scroll-mt-20"
        >
          <h2>5. Cybersecurity Careers</h2>

          <p>
            As everything goes digital, security becomes paramount. There&apos;s
            a massive global shortage of cybersecurity professionals—great news
            for job seekers.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <p className="font-bold">🛡️ Security Engineer</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Design and implement security systems for organizations
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Networking, Security tools,
                  Programming
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹10-40 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <p className="font-bold">
                🔍 Penetration Tester (Ethical Hacker)
              </p>
              <p className="mb-2 text-sm text-muted-foreground">
                Legally hack systems to find vulnerabilities before bad actors
                do
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> Hacking tools, Programming,
                  Networking
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹8-35 LPA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Remote Work */}
        <section
          id="remote"
          className="scroll-mt-20"
        >
          <h2>6. Remote Work Infrastructure Roles</h2>

          <p>
            The shift to remote/hybrid work has created entirely new categories
            of jobs focused on making distributed work effective.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-4 dark:bg-indigo-950">
              <p className="font-bold">🌍 Head of Remote</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Lead company&apos;s remote work strategy and culture
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> HR, Strategy, Communication
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹25-60 LPA
                </span>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-4 dark:bg-indigo-950">
              <p className="font-bold">💼 Remote Employee Experience Manager</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Ensure remote workers are engaged, productive, and happy
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span>
                  <strong>Skills:</strong> People management, Tools expertise,
                  Empathy
                </span>
                <span>
                  <strong>Salary (India):</strong> ₹12-30 LPA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How to Prepare */}
        <section
          id="prepare"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            7. How to Prepare for Future Careers
          </h2>

          <h3>1. Cultivate Lifelong Learning</h3>
          <p>
            The skills you have today may become obsolete. Build the habit of
            continuous learning now—it&apos;s the single most valuable
            meta-skill.
          </p>

          <h3>2. Develop T-Shaped Skills</h3>
          <div className="my-4 rounded-lg bg-muted p-4">
            <p className="mb-2 font-bold">What are T-Shaped Skills?</p>
            <p className="text-sm">
              Deep expertise in one area (the vertical bar) + broad knowledge
              across many areas (the horizontal bar). Example: Deep in data
              science + broad understanding of business, marketing, and
              engineering.
            </p>
          </div>

          <h3>3. Focus on Human-Centric Skills</h3>
          <p>
            As AI automates technical tasks, uniquely human skills become more
            valuable:
          </p>
          <ul>
            <li>Creativity and original thinking</li>
            <li>Complex problem-solving across domains</li>
            <li>Emotional intelligence and empathy</li>
            <li>Leadership and collaboration</li>
            <li>Critical thinking and judgment</li>
          </ul>

          <h3>4. Build a Learning System</h3>
          <ul>
            <li>
              <strong>Weekly:</strong> Read industry newsletters and blogs
            </li>
            <li>
              <strong>Monthly:</strong> Take on a new learning project
            </li>
            <li>
              <strong>Quarterly:</strong> Complete an online course or
              certification
            </li>
            <li>
              <strong>Yearly:</strong> Master one major new skill or domain
            </li>
          </ul>
        </section>

        {/* Future-Proof Skills */}
        <section
          id="skills"
          className="not-prose scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <BookOpen className="h-6 w-6 text-primary" />
            8. Top 10 Future-Proof Skills to Learn Now
          </h2>

          <div className="grid gap-3 md:grid-cols-2">
            {[
              {
                skill: 'AI/ML Fundamentals',
                reason: 'Every industry is being transformed by AI',
              },
              {
                skill: 'Data Analysis',
                reason: 'Decisions are increasingly data-driven',
              },
              {
                skill: 'Cloud Computing',
                reason: 'AWS/Azure/GCP power modern infrastructure',
              },
              {
                skill: 'Cybersecurity Basics',
                reason: 'Security is a non-negotiable priority',
              },
              {
                skill: 'Product Thinking',
                reason: 'User-centric design applies everywhere',
              },
              {
                skill: 'Communication',
                reason: 'Ideas need to be sold, not just built',
              },
              {
                skill: 'Financial Literacy',
                reason: 'Understand business and personal finance',
              },
              {
                skill: 'Systems Thinking',
                reason: 'See connections between complex parts',
              },
              { skill: 'Adaptability', reason: 'The only constant is change' },
              {
                skill: 'Cross-Cultural Competence',
                reason: 'Global teams are the norm',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border p-3"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <span className="font-bold">{item.skill}</span>
                  <p className="text-sm text-muted-foreground">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Conclusion: Create Your Future</h2>

          <p>
            The future of work is full of uncertainty—but also unprecedented
            opportunity. The careers listed here didn&apos;t exist 10 years ago.
            The careers that will exist in 2035 may not exist today.
          </p>

          <p>
            The best strategy isn&apos;t to predict the future; it&apos;s to
            build the skills that will help you thrive regardless of what
            happens. Be curious. Stay adaptable. Keep learning.
          </p>

          <p className="text-lg font-semibold text-primary">
            The best way to predict the future is to create it. Start building
            today. 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/startup-vs-corporate-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Startup vs Corporate Internships
            </Link>
            <Link
              href="/blog/skills-startup-recruiters-want"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Skills Recruiters Want
            </Link>
            <Link
              href="/blog/is-a-data-science-certification-worth-it"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Data Science Certifications Worth It?
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
              <p className="font-bold">Written by Sproutern Research Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Our team tracks emerging career trends across industries to help
                students prepare for the future of work.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
