import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  Rocket,
  Star,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Users,
  Code,
  Palette,
  TrendingUp,
  Target,
  MessageSquare,
  Brain,
  Heart,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Skills Startup Recruiters Want',
  description:
    'Complete guide to skills startups look for in interns. Includes technical skills by role, essential soft skills, and how to demonstrate them in applications.',
  keywords: [
    'startup skills',
    'skills for startups',
    'startup hiring',
    'intern skills',
    'soft skills',
    'technical skills',
    'startup jobs',
  ],
  openGraph: {
    title: 'Skills That Make You Irresistible to Startup Recruiters',
    description: 'Technical and soft skills that startups value most.',
    type: 'article',
    publishedTime: '2025-10-05T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-orange-600">
            <Star className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Startup Hiring
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Skills That Make You Irresistible to Startup Recruiters
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Startups don&apos;t just hire for qualifications—they hire for
            potential. Here are the skills that make founders say &quot;I need
            this person on my team.&quot;
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            What Startup Founders Value Most
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">87%</span>
              <span>
                prioritize culture fit and mindset over technical skills
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">92%</span>
              <span>
                value problem-solving ability above all technical skills
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">3x</span>
              <span>more likely to hire candidates with side projects</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">#1</span>
              <span>
                reason for rejection: &quot;Not self-directed enough&quot;
              </span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#mindset"
                className="text-primary hover:underline"
              >
                1. The Startup Mindset
              </a>
            </li>
            <li>
              <a
                href="#technical"
                className="text-primary hover:underline"
              >
                2. Technical Skills by Role
              </a>
            </li>
            <li>
              <a
                href="#soft"
                className="text-primary hover:underline"
              >
                3. Essential Soft Skills
              </a>
            </li>
            <li>
              <a
                href="#demonstrate"
                className="text-primary hover:underline"
              >
                4. How to Demonstrate Skills
              </a>
            </li>
            <li>
              <a
                href="#develop"
                className="text-primary hover:underline"
              >
                5. How to Develop Skills
              </a>
            </li>
            <li>
              <a
                href="#showcase"
                className="text-primary hover:underline"
              >
                6. Showcase in Resume/Interview
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            Startups operate in fast-paced, resource-constrained environments.
            They need team members who are not just skilled, but adaptable,
            proactive, and resilient. The skills that get you hired at a startup
            are different from what works at a large corporation.
          </p>
          <p>
            Based on conversations with 100+ startup founders and hiring
            managers, we&apos;ve identified the most sought-after skills—and
            exactly how to develop and demonstrate them.
          </p>
        </section>

        {/* Mindset */}
        <section
          id="mindset"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            1. The Startup Mindset (Most Important!)
          </h2>

          <p>
            Before any technical skill, startups look for a specific{' '}
            <strong>mindset</strong>. Here&apos;s what that means:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <p className="font-bold">🔥 Bias for Action</p>
              <p className="text-sm text-muted-foreground">
                You don&apos;t wait for perfect information. You move fast,
                learn, and iterate. Analysis paralysis is the enemy.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-bold">🧠 First-Principles Thinking</p>
              <p className="text-sm text-muted-foreground">
                You question assumptions and break problems down to fundamentals
                instead of following &quot;best practices&quot; blindly.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">💪 Ownership Mentality</p>
              <p className="text-sm text-muted-foreground">
                You treat the company&apos;s problems as your own. You
                don&apos;t just do your job—you do what needs to be done.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <p className="font-bold">🎯 Comfort with Ambiguity</p>
              <p className="text-sm text-muted-foreground">
                Vague requirements don&apos;t paralyze you. You can operate
                without detailed instructions or constant guidance.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-cyan-500 bg-cyan-50 p-4 dark:bg-cyan-950">
              <p className="font-bold">📈 Growth Orientation</p>
              <p className="text-sm text-muted-foreground">
                You&apos;re constantly learning. You seek feedback. You view
                failures as lessons, not setbacks.
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Founder Quote:</strong> &quot;I&apos;d rather hire someone
              with 60% of the skills but 100% of the right mindset than someone
              with 100% skills and a corporate mindset.&quot; — Series A Startup
              CEO
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section
          id="technical"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            2. Technical Skills by Role
          </h2>

          <p>
            While mindset comes first, you still need to be able to do the job.
            Here are the most in-demand technical skills by function:
          </p>

          <h3>Software Engineering</h3>
          <div className="my-4 rounded-lg bg-muted p-4">
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <p className="mb-2 font-bold">🔥 Hot</p>
                <ul className="space-y-1">
                  <li>• Python (ML/Backend)</li>
                  <li>• TypeScript + React/Next.js</li>
                  <li>• Go (high-performance systems)</li>
                  <li>• Rust (systems/crypto)</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-bold">Always Valuable</p>
                <ul className="space-y-1">
                  <li>• Git and version control</li>
                  <li>• SQL and databases</li>
                  <li>• REST APIs / GraphQL</li>
                  <li>• Cloud (AWS/GCP/Azure basics)</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Data Science / Analytics</h3>
          <div className="my-4 rounded-lg bg-muted p-4">
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <p className="mb-2 font-bold">Technical Skills</p>
                <ul className="space-y-1">
                  <li>• Python (pandas, scikit-learn)</li>
                  <li>• SQL (complex queries)</li>
                  <li>• Data visualization (Tableau, Looker)</li>
                  <li>• Basic ML concepts</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-bold">Business Skills</p>
                <ul className="space-y-1">
                  <li>• Translating data to insights</li>
                  <li>• Storytelling with data</li>
                  <li>• Understanding business metrics</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Product Management</h3>
          <div className="my-4 rounded-lg bg-muted p-4">
            <ul className="space-y-1 text-sm">
              <li>• User research and interviewing</li>
              <li>• Wireframing (Figma basics)</li>
              <li>• Analytics tools (Mixpanel, Amplitude)</li>
              <li>• Roadmapping and prioritization</li>
              <li>• Technical enough to work with engineers</li>
            </ul>
          </div>

          <h3>Marketing / Growth</h3>
          <div className="my-4 rounded-lg bg-muted p-4">
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <p className="mb-2 font-bold">Technical</p>
                <ul className="space-y-1">
                  <li>• SEO/SEM fundamentals</li>
                  <li>• Google Analytics / GA4</li>
                  <li>• Social media ad platforms</li>
                  <li>• Email marketing tools</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-bold">Creative</p>
                <ul className="space-y-1">
                  <li>• Content writing</li>
                  <li>• Video editing (basic)</li>
                  <li>• Canva/basic design</li>
                  <li>• Community building</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Design (UI/UX)</h3>
          <div className="my-4 rounded-lg bg-muted p-4">
            <ul className="space-y-1 text-sm">
              <li>• Figma (essential, non-negotiable)</li>
              <li>• User research and testing</li>
              <li>• Design systems understanding</li>
              <li>• Prototyping and interaction design</li>
              <li>• Basic CSS/front-end knowledge (huge plus)</li>
            </ul>
          </div>
        </section>

        {/* Soft Skills */}
        <section
          id="soft"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            3. Essential Soft Skills
          </h2>

          <p>
            In startups, your attitude and soft skills can be just as important
            as your technical abilities. Here are the must-haves:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 flex items-center gap-2 font-bold">
                <Target className="h-4 w-4 text-orange-500" />
                Adaptability
              </p>
              <p className="text-sm text-muted-foreground">
                Priorities shift constantly. You need to pivot quickly without
                getting frustrated. What you worked on last week might get
                deprioritized.
              </p>
              <p className="mt-2 text-xs text-primary">
                Interview Q: &quot;Tell me about a time you had to quickly
                change direction.&quot;
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 flex items-center gap-2 font-bold">
                <Wrench className="h-4 w-4 text-blue-500" />
                Problem-Solving
              </p>
              <p className="text-sm text-muted-foreground">
                You won&apos;t always have a roadmap. The ability to break down
                complex problems and find creative solutions is essential.
              </p>
              <p className="mt-2 text-xs text-primary">
                Interview Q: &quot;Walk me through how you&apos;d solve
                [ambiguous problem].&quot;
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 flex items-center gap-2 font-bold">
                <MessageSquare className="h-4 w-4 text-green-500" />
                Communication
              </p>
              <p className="text-sm text-muted-foreground">
                You may talk to engineers, marketers, and customers in the same
                day. Clear, concise communication across audiences is critical.
              </p>
              <p className="mt-2 text-xs text-primary">
                Interview Q: &quot;Explain a technical concept to me like
                I&apos;m not technical.&quot;
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 flex items-center gap-2 font-bold">
                <Rocket className="h-4 w-4 text-purple-500" />
                Proactiveness
              </p>
              <p className="text-sm text-muted-foreground">
                Don&apos;t wait to be told what to do. Identify problems and
                propose solutions. Take initiative without asking permission.
              </p>
              <p className="mt-2 text-xs text-primary">
                Interview Q: &quot;Tell me about something you did that
                wasn&apos;t in your job description.&quot;
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 flex items-center gap-2 font-bold">
                <Brain className="h-4 w-4 text-cyan-500" />
                Learning Agility
              </p>
              <p className="text-sm text-muted-foreground">
                You&apos;ll constantly encounter new tools, domains, and
                challenges. The ability to learn quickly and independently is
                non-negotiable.
              </p>
              <p className="mt-2 text-xs text-primary">
                Interview Q: &quot;Teach me something you learned
                recently.&quot;
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 flex items-center gap-2 font-bold">
                <Star className="h-4 w-4 text-yellow-500" />
                Resilience
              </p>
              <p className="text-sm text-muted-foreground">
                Setbacks are constant. You need to bounce back from failures,
                rejection, and criticism without losing momentum.
              </p>
              <p className="mt-2 text-xs text-primary">
                Interview Q: &quot;Tell me about a failure and what you
                learned.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* How to Demonstrate */}
        <section
          id="demonstrate"
          className="scroll-mt-20"
        >
          <h2>4. How to Demonstrate These Skills</h2>

          <p>
            Saying you have these skills isn&apos;t enough. You need to{' '}
            <strong>prove</strong> them. Here&apos;s how:
          </p>

          <h3>1. Side Projects</h3>
          <p>
            Nothing demonstrates initiative, technical ability, and passion like
            building something on your own. Types of projects that impress:
          </p>
          <ul>
            <li>A product that solves a real problem (even if small)</li>
            <li>Open-source contributions</li>
            <li>A well-documented GitHub portfolio</li>
            <li>A blog where you share learnings</li>
          </ul>

          <h3>2. Specific Stories (STAR Method)</h3>
          <p>For every skill, have a concrete story ready:</p>
          <div className="my-4 rounded-lg bg-muted p-4">
            <p className="text-sm">
              <strong>S</strong>ituation: &quot;Our college fest needed to boost
              ticket sales...&quot;
            </p>
            <p className="text-sm">
              <strong>T</strong>ask: &quot;I was responsible for social media
              marketing...&quot;
            </p>
            <p className="text-sm">
              <strong>A</strong>ction: &quot;I created a viral campaign
              targeting student meme pages...&quot;
            </p>
            <p className="text-sm">
              <strong>R</strong>esult: &quot;We increased sales by 40% and had
              record attendance.&quot;
            </p>
          </div>

          <h3>3. Your Online Presence</h3>
          <ul>
            <li>
              <strong>GitHub:</strong> Active contributions, clean repos, good
              READMEs
            </li>
            <li>
              <strong>LinkedIn:</strong> Thoughtful posts, engagement with
              industry content
            </li>
            <li>
              <strong>Twitter/X:</strong> Building in public, sharing learnings
            </li>
            <li>
              <strong>Portfolio:</strong> Well-designed showcase of your best
              work
            </li>
          </ul>
        </section>

        {/* How to Develop */}
        <section
          id="develop"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Palette className="h-6 w-6 text-primary" />
            5. How to Develop These Skills Fast
          </h2>

          <h3>Technical Skills</h3>
          <ul>
            <li>
              <strong>Online Courses:</strong> Coursera, Udemy, freeCodeCamp,
              fast.ai
            </li>
            <li>
              <strong>Build Projects:</strong> Learning by doing is 10x more
              effective than tutorials
            </li>
            <li>
              <strong>Contribute to Open Source:</strong> Start with &quot;good
              first issue&quot; tags
            </li>
            <li>
              <strong>Hackathons:</strong> Compress months of learning into a
              weekend
            </li>
          </ul>

          <h3>Soft Skills</h3>
          <ul>
            <li>
              <strong>Join Clubs/Organizations:</strong> Lead a team, organize
              events
            </li>
            <li>
              <strong>Freelance or Consult:</strong> Client work forces
              communication and adaptability
            </li>
            <li>
              <strong>Seek Feedback Actively:</strong> Ask mentors and peers for
              honest input
            </li>
            <li>
              <strong>Take on Stretch Assignments:</strong> Volunteer for things
              that scare you
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Document your learning journey publicly
              (blog, Twitter, GitHub). This itself demonstrates writing skills,
              consistency, and the ability to teach—all highly valued by
              startups.
            </div>
          </div>
        </section>

        {/* Showcase */}
        <section
          id="showcase"
          className="not-prose scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-primary" />
            6. Skill Showcase Checklist
          </h2>

          <div className="space-y-2">
            {[
              'At least 2-3 personal/side projects you can discuss in depth',
              'GitHub profile with pinned repos and good READMEs',
              'Resume uses strong action verbs and has quantified achievements',
              'LinkedIn profile is complete and showcases projects/skills',
              'Portfolio website (if relevant to your field)',
              'At least 3 STAR stories ready for behavioral interviews',
              'Evidence of continuous learning (courses, certifications, blogs)',
              'Strong references who can speak to your soft skills',
              'Online presence that shows intellectual curiosity',
              'Experience with ambiguity (entrepreneurship, freelance, or challenging projects)',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Conclusion: Build Skills, Show Initiative</h2>

          <p>
            Becoming irresistible to startup recruiters isn&apos;t about being
            perfect—it&apos;s about showing that you&apos;re a versatile,
            proactive learner who can thrive in uncertainty.
          </p>

          <p>
            Focus on the startup mindset first. Develop technical skills
            relevant to your target role. Build projects that demonstrate your
            abilities. And never stop learning.
          </p>

          <p className="text-lg font-semibold text-primary">
            The best time to start building these skills was yesterday. The
            second best time is today. Start now. 🚀
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
              href="/blog/understanding-startup-culture"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Understanding Startup Culture
            </Link>
            <Link
              href="/blog/building-impressive-portfolio"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Building an Impressive Portfolio
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Startup Internships
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
                Based on interviews with 100+ startup founders and hiring
                managers across India&apos;s startup ecosystem.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
