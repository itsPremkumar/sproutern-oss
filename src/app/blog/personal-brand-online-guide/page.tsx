import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Globe,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Sparkles,
  Share2,
  PenTool,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Camera,
  MessageCircle,
  Heart,
  Zap,
  Star,
  AlertCircle,
  XCircle,
  Award,
  Mic,
  FileText,
  Eye,
  Layers,
  Repeat,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Building a Personal Brand Online: Complete Guide',
  description:
    'Build a powerful personal brand that attracts career opportunities. Complete guide to LinkedIn, Twitter, content creation, portfolio building, and establishing your online presence.',
  keywords: [
    'personal brand',
    'online presence',
    'linkedin branding',
    'twitter personal brand',
    'career branding',
    'personal branding for students',
    'build online presence',
    'content creation career',
    'professional networking',
    'digital personal brand',
  ],
  openGraph: {
    title: 'Building a Personal Brand Online: Complete Guide',
    description:
      'Stand out in the digital world. Attract opportunities instead of chasing them.',
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
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Growth
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Building a Personal Brand Online: The Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your personal brand is what people say about you when you&apos;re
            not in the room. In the digital age, it&apos;s also what they find
            when they Google you. This comprehensive guide teaches you to shape
            that narrative strategically.
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
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Intro Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            The Personal Branding Advantage
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">70%</span>
              <span>of recruiters Google candidates before interviews</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">85%</span>
              <span>of jobs are filled through networking</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">10x</span>
              <span>more reach when you share content vs apply directly</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">3-5x</span>
              <span>
                more interview calls for candidates with strong online presence
              </span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            , your online presence isn&apos;t optional—it&apos;s your first
            impression. Before you enter an interview room, before you shake
            hands at a networking event, people have already formed opinions
            based on what they found online.
          </p>
          <p>
            The good news? You can intentionally shape this narrative. Whether
            you&apos;re a student building your first portfolio, a professional
            pivoting careers, or an expert establishing thought leadership,
            personal branding is your most powerful career tool.
          </p>
          <p>
            This guide will take you from zero to a compelling online presence
            that attracts opportunities instead of you having to chase them.
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
                1. Why Personal Branding Matters
              </a>
            </li>
            <li>
              <a
                href="#define"
                className="text-primary hover:underline"
              >
                2. Define Your Brand Identity
              </a>
            </li>
            <li>
              <a
                href="#platforms"
                className="text-primary hover:underline"
              >
                3. Choosing Your Platforms
              </a>
            </li>
            <li>
              <a
                href="#linkedin"
                className="text-primary hover:underline"
              >
                4. LinkedIn Mastery
              </a>
            </li>
            <li>
              <a
                href="#twitter"
                className="text-primary hover:underline"
              >
                5. Twitter/X Strategy
              </a>
            </li>
            <li>
              <a
                href="#content"
                className="text-primary hover:underline"
              >
                6. Content Creation System
              </a>
            </li>
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                7. Content Types That Work
              </a>
            </li>
            <li>
              <a
                href="#consistency"
                className="text-primary hover:underline"
              >
                8. Building Consistency
              </a>
            </li>
            <li>
              <a
                href="#engagement"
                className="text-primary hover:underline"
              >
                9. Engagement Strategy
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
                href="#examples"
                className="text-primary hover:underline"
              >
                11. Real Examples
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
                Your personal brand is being built whether you&apos;re
                intentional or not—be intentional
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Start with ONE platform, master it, then expand</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Consistency beats perfection—2 posts/week for 6 months beats
                daily posting for 1 month
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Share what you&apos;re learning—you don&apos;t need to be an
                expert to create value
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Engagement matters more than follower count—focus on building
                real connections
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                It takes 6-12 months to see meaningful results—play the long
                game
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
            1. Why Personal Branding Matters
          </h2>

          <p>
            Personal branding isn&apos;t about becoming an
            &quot;influencer&quot; or building a massive following. It&apos;s
            about strategically positioning yourself so opportunities come to
            you.
          </p>

          <h3>The Opportunity Magnet Effect</h3>
          <ul>
            <li>
              <strong>Recruiters find you:</strong> 70% of recruiters Google
              candidates; a strong online presence puts you ahead
            </li>
            <li>
              <strong>Inbound opportunities:</strong> Job offers, speaking
              invitations, and collaborations come to you
            </li>
            <li>
              <strong>Pre-built credibility:</strong> Walk into any room with
              people already knowing your work
            </li>
            <li>
              <strong>Network amplification:</strong> Your content reaches
              thousands; networking events reach dozens
            </li>
            <li>
              <strong>Compounding returns:</strong> Content you create today
              works for you years later
            </li>
          </ul>

          <h3>What Happens Without a Personal Brand</h3>
          <ul>
            <li>You&apos;re invisible in a sea of identical resumes</li>
            <li>Every job requires starting from zero to prove yourself</li>
            <li>
              You miss opportunities because people don&apos;t know you exist
            </li>
            <li>
              Someone else gets the role because they were &quot;known&quot;
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Reality Check:</strong> You already have a personal
              brand—it&apos;s what shows up when someone Googles you. The
              question is: are you shaping it, or letting it happen randomly?
            </div>
          </div>
        </section>

        {/* Section 2: Define */}
        <section
          id="define"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            2. Define Your Brand Identity
          </h2>

          <p>
            Before you start posting, you need clarity on what you want to be
            known for. A scattered brand confuses people; a focused brand
            attracts the right opportunities.
          </p>

          <h3>The Brand Identity Framework</h3>

          <h4>1. Core Expertise (What you do)</h4>
          <p>
            What skills, knowledge, or experience do you bring? This could be:
          </p>
          <ul>
            <li>
              Technical: React development, data science, cloud architecture
            </li>
            <li>Professional: product management, marketing, finance</li>
            <li>Domain: fintech, healthcare, edtech</li>
          </ul>

          <h4>2. Unique Angle (How you&apos;re different)</h4>
          <p>What perspective do you bring that others don&apos;t? Examples:</p>
          <ul>
            <li>
              &quot;Self-taught developer sharing the learning journey&quot;
            </li>
            <li>
              &quot;Design + engineering perspective on product building&quot;
            </li>
            <li>
              &quot;Breaking down complex tech for non-technical founders&quot;
            </li>
          </ul>

          <h4>3. Target Audience (Who you serve)</h4>
          <p>Who do you want to attract? Be specific:</p>
          <ul>
            <li>College students exploring tech careers</li>
            <li>Junior developers becoming senior</li>
            <li>Recruiters at startups</li>
            <li>Non-technical founders building products</li>
          </ul>

          <h4>4. Value Proposition (Why follow you)</h4>
          <p>What will people get from following you?</p>
          <ul>
            <li>Learn practical skills</li>
            <li>Stay updated on industry trends</li>
            <li>Get inspired by your journey</li>
            <li>Access resources and opportunities</li>
          </ul>

          <h3>Your One-Line Brand Statement</h3>
          <p>Combine these elements into a clear statement:</p>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="mb-2 font-bold">Template:</p>
            <p>
              &quot;I help [TARGET AUDIENCE] achieve [OUTCOME] through [YOUR
              SKILL/APPROACH].&quot;
            </p>
            <p className="mt-3 font-bold">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li>
                &quot;I help college students land tech internships through
                practical interview prep content.&quot;
              </li>
              <li>
                &quot;I help developers learn system design through simplified
                breakdowns of real-world systems.&quot;
              </li>
              <li>
                &quot;I help non-technical founders understand tech through
                jargon-free explanations.&quot;
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Platforms */}
        <section
          id="platforms"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            3. Choosing Your Platforms
          </h2>

          <p>
            Don&apos;t try to be everywhere. Start with ONE platform, master it,
            then expand. Here&apos;s how to choose:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="flex items-center gap-2 font-bold text-blue-600">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Best for:</strong> Professional networking, job search,
                B2B content, corporate audiences
              </p>
              <p className="mt-1 text-sm">
                <strong>Ideal if:</strong> You want corporate jobs, recruiters
                to find you, or professional services clients
              </p>
              <p className="mt-1 text-sm text-green-600">
                ✅ Recommended for most professionals
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="flex items-center gap-2 font-bold text-sky-600">
                <Twitter className="h-5 w-5" />
                Twitter/X
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Best for:</strong> Tech community, startup ecosystem,
                real-time discussions, thought leadership
              </p>
              <p className="mt-1 text-sm">
                <strong>Ideal if:</strong> You&apos;re in tech/startups, want to
                connect with founders/VCs, or share quick insights
              </p>
              <p className="mt-1 text-sm text-green-600">
                ✅ Recommended for tech/startup folks
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="flex items-center gap-2 font-bold text-gray-600">
                <Github className="h-5 w-5" />
                GitHub
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Best for:</strong> Developers—your code is your
                portfolio
              </p>
              <p className="mt-1 text-sm">
                <strong>Ideal if:</strong> You&apos;re a developer who wants to
                showcase projects and contribute to open source
              </p>
              <p className="mt-1 text-sm text-green-600">
                ✅ Essential for developers
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="flex items-center gap-2 font-bold text-red-600">
                <Youtube className="h-5 w-5" />
                YouTube / Blog
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Best for:</strong> Long-form content, tutorials, deep
                dives, building authority
              </p>
              <p className="mt-1 text-sm">
                <strong>Ideal if:</strong> You enjoy teaching, have time for
                production, want evergreen content
              </p>
              <p className="mt-1 text-sm text-yellow-600">
                ⚠️ Higher effort, higher reward
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>My Recommendation:</strong> Start with LinkedIn if
              you&apos;re job hunting. Start with Twitter if you&apos;re in
              tech/startups. Add GitHub if you&apos;re a developer. Expand to
              YouTube/blog only after establishing presence elsewhere.
            </div>
          </div>
        </section>

        {/* Section 4: LinkedIn */}
        <section
          id="linkedin"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Linkedin className="h-6 w-6 text-primary" />
            4. LinkedIn Mastery
          </h2>

          <p>
            LinkedIn is the most powerful platform for career opportunities.
            Here&apos;s how to optimize it:
          </p>

          <h3>Profile Optimization Checklist</h3>

          <h4>1. Profile Photo (40% of first impressions)</h4>
          <ul>
            <li>Professional headshot (doesn&apos;t need to be expensive)</li>
            <li>Face takes up 60% of frame</li>
            <li>Good lighting, simple background</li>
            <li>Smile—approachability matters</li>
          </ul>

          <h4>2. Headline (Most important text)</h4>
          <ul>
            <li>
              NOT just job title: &quot;Software Engineer at XYZ&quot; is boring
            </li>
            <li>
              INSTEAD: &quot;Building ML products at XYZ | Ex-Google | Helping
              developers learn system design&quot;
            </li>
            <li>Include keywords recruiters search for</li>
            <li>Show what makes you unique</li>
          </ul>

          <h4>3. About Section (Your elevator pitch)</h4>
          <ul>
            <li>
              First 2 lines are crucial (visible before &quot;see more&quot;)
            </li>
            <li>Tell your story, not just list achievements</li>
            <li>Include a clear CTA (what you want readers to do)</li>
            <li>Use bullet points for readability</li>
          </ul>

          <h4>4. Experience Section</h4>
          <ul>
            <li>Quantify achievements: &quot;Improved X by 30%&quot;</li>
            <li>Focus on impact, not just responsibilities</li>
            <li>Add media (projects, presentations, articles)</li>
          </ul>

          <h4>5. Featured Section</h4>
          <ul>
            <li>Pin your best content</li>
            <li>Include portfolio links</li>
            <li>Add speaking/podcast appearances</li>
          </ul>

          <h3>LinkedIn Content Strategy</h3>
          <ul>
            <li>
              <strong>Post frequency:</strong> 3-5 times per week for best
              engagement
            </li>
            <li>
              <strong>Best times:</strong> 8-10 AM on weekdays (when
              professionals check LinkedIn)
            </li>
            <li>
              <strong>Format:</strong> Text posts perform best; start with
              hook/first line
            </li>
            <li>
              <strong>Engagement:</strong> Comment on others&apos; posts
              before/after your own
            </li>
          </ul>
        </section>

        {/* Section 5: Twitter */}
        <section
          id="twitter"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Twitter className="h-6 w-6 text-primary" />
            5. Twitter/X Strategy
          </h2>

          <p>
            Twitter is where the tech community lives. It&apos;s fast-paced, but
            highly effective for building authentic connections.
          </p>

          <h3>Twitter Profile Optimization</h3>
          <ul>
            <li>
              <strong>Bio:</strong> Clear, specific, memorable. Include what you
              do and a personality element
            </li>
            <li>
              <strong>Pinned tweet:</strong> Your best performing or most
              representative content
            </li>
            <li>
              <strong>Header image:</strong> Personal brand, projects, or simple
              design
            </li>
            <li>
              <strong>Link:</strong> Portfolio, newsletter, or Linktree
            </li>
          </ul>

          <h3>Twitter Content Types</h3>
          <ul>
            <li>
              <strong>Threads:</strong> Deep dives on topics (10-15 tweets)
            </li>
            <li>
              <strong>One-liners:</strong> Insights, hot takes, observations
            </li>
            <li>
              <strong>Learnings:</strong> &quot;Just learned about X,
              here&apos;s what I found...&quot;
            </li>
            <li>
              <strong>Behind the scenes:</strong> What you&apos;re working on
            </li>
            <li>
              <strong>Curated resources:</strong> Useful tools, articles, repos
            </li>
          </ul>

          <h3>Growing on Twitter</h3>
          <ul>
            <li>Reply to bigger accounts with thoughtful comments</li>
            <li>Join Twitter Spaces to meet people</li>
            <li>Quote tweet with added value</li>
            <li>Build in public—share progress on projects</li>
            <li>Be generous with retweets and support</li>
          </ul>
        </section>

        {/* Section 6: Content */}
        <section
          id="content"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Share2 className="h-6 w-6 text-primary" />
            6. Content Creation System
          </h2>

          <p>
            Consistent content creation feels overwhelming until you build a
            system. Here&apos;s how to create sustainably:
          </p>

          <h3>The Content Capture System</h3>
          <ul>
            <li>
              <strong>Capture ideas constantly:</strong> Keep a notes app open;
              jot down thoughts as they come
            </li>
            <li>
              <strong>Sources of content:</strong> Problems you solved, things
              you learned, questions you answered
            </li>
            <li>
              <strong>Content bank:</strong> Build queue of 10-20 ideas before
              you start posting
            </li>
          </ul>

          <h3>The Batching Method</h3>
          <ul>
            <li>
              <strong>Ideation session:</strong> 1 hour/week brainstorming ideas
            </li>
            <li>
              <strong>Writing session:</strong> 2-3 hours creating a week&apos;s
              worth of content
            </li>
            <li>
              <strong>Scheduling:</strong> Use tools (Buffer, Hootsuite, native
              scheduling) to automate
            </li>
            <li>
              <strong>Engagement time:</strong> 30 min/day responding and
              engaging
            </li>
          </ul>

          <h3>The &quot;Learn in Public&quot; Framework</h3>
          <p>
            You don&apos;t need to be an expert. Share what you&apos;re learning
            as you learn it:
          </p>
          <ul>
            <li>
              &quot;Today I learned about X. Here&apos;s a quick
              summary...&quot;
            </li>
            <li>
              &quot;Struggled with X for hours. Here&apos;s how I solved
              it...&quot;
            </li>
            <li>&quot;Reading [Book]. Key insight: ...&quot;</li>
            <li>&quot;Built my first X. Lessons learned...&quot;</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Your &quot;Day 1&quot; content helps
              someone on Day 0. You&apos;re always an expert to someone a step
              behind you.
            </div>
          </div>
        </section>

        {/* Section 7: Content Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            7. Content Types That Work
          </h2>

          <h3>Educational Content (50% of your posts)</h3>
          <ul>
            <li>How-to guides and tutorials</li>
            <li>Concept explanations</li>
            <li>Tool comparisons</li>
            <li>Resource compilations</li>
            <li>Industry insights</li>
          </ul>

          <h3>Personal Stories (30% of your posts)</h3>
          <ul>
            <li>Career journey updates</li>
            <li>Wins and celebrations</li>
            <li>Failures and lessons</li>
            <li>Behind-the-scenes of work</li>
            <li>Authentic vulnerable moments</li>
          </ul>

          <h3>Engagement Content (20% of your posts)</h3>
          <ul>
            <li>Questions to your audience</li>
            <li>Polls and discussions</li>
            <li>Reposts with commentary</li>
            <li>Shoutouts to others</li>
            <li>Responding to industry news</li>
          </ul>

          <h3>High-Performing Content Formulas</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border p-3">
              <p className="font-bold">The Listicle</p>
              <p className="text-sm text-muted-foreground">
                &quot;10 tools that helped me land my first dev job&quot;
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-bold">The Story Arc</p>
              <p className="text-sm text-muted-foreground">
                &quot;I was rejected from 50 companies. Then I changed one
                thing...&quot;
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-bold">The Contrarian Take</p>
              <p className="text-sm text-muted-foreground">
                &quot;Unpopular opinion: You don&apos;t need a CS degree to be a
                great developer&quot;
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-bold">The Breakdown</p>
              <p className="text-sm text-muted-foreground">
                &quot;Let me explain how [complex topic] works in simple
                terms...&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Consistency */}
        <section
          id="consistency"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Repeat className="h-6 w-6 text-primary" />
            8. Building Consistency
          </h2>

          <p>
            Consistency is the #1 factor for personal brand success. Here&apos;s
            how to maintain it:
          </p>

          <h3>Start Small</h3>
          <ul>
            <li>2-3 posts per week is enough to start</li>
            <li>Better to post consistently than burn out</li>
            <li>Gradually increase as it becomes habit</li>
          </ul>

          <h3>Batch Your Work</h3>
          <ul>
            <li>Write multiple posts in one sitting</li>
            <li>Schedule a week or more in advance</li>
            <li>Reduces daily decision fatigue</li>
          </ul>

          <h3>Repurpose Content</h3>
          <ul>
            <li>Turn one idea into multiple formats</li>
            <li>LinkedIn post → Twitter thread → Newsletter</li>
            <li>Old content can be refreshed and reposted</li>
          </ul>

          <h3>Track What Works</h3>
          <ul>
            <li>Note which posts get high engagement</li>
            <li>Double down on formats/topics that resonate</li>
            <li>Adjust based on feedback</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>The 6-Month Rule:</strong> Commit to 6 months of
              consistent posting before judging results. Most people quit at 3
              months, right before growth starts happening.
            </div>
          </div>
        </section>

        {/* Section 9: Engagement */}
        <section
          id="engagement"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-primary" />
            9. Engagement Strategy
          </h2>

          <p>
            Posting is only half the equation. Engaging with others is equally
            important and often overlooked.
          </p>

          <h3>Why Engagement Matters</h3>
          <ul>
            <li>Algorithms favor active users</li>
            <li>Building real relationships</li>
            <li>Getting noticed by bigger accounts</li>
            <li>Learning from others</li>
          </ul>

          <h3>Engagement Best Practices</h3>
          <ul>
            <li>
              <strong>Comment thoughtfully:</strong> Not &quot;Great post!&quot;
              but add value, share a perspective
            </li>
            <li>
              <strong>Reply to all comments on your posts:</strong> Shows you
              value your community
            </li>
            <li>
              <strong>DM genuinely:</strong> Not pitches—genuine compliments,
              questions
            </li>
            <li>
              <strong>Celebrate others:</strong> Share their wins, recommend
              their content
            </li>
          </ul>

          <h3>The 5-3-1 Rule</h3>
          <p>Before posting your own content each day:</p>
          <ul>
            <li>
              <strong>5 comments:</strong> Leave thoughtful comments on
              others&apos; posts
            </li>
            <li>
              <strong>3 replies:</strong> Reply to comments on your previous
              posts
            </li>
            <li>
              <strong>1 DM:</strong> Send a genuine message to someone new
            </li>
          </ul>
        </section>

        {/* Section 10: Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <XCircle className="h-6 w-6 text-primary" />
            10. Mistakes to Avoid
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Trying to be everywhere at once
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                Master one platform first. Spreading thin leads to mediocre
                results everywhere.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Only posting, never engaging
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                Social media is a two-way street. Engagement builds
                relationships; posting alone doesn&apos;t.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Being inauthentic or overly polished
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                People connect with humans, not brands. Share real struggles and
                imperfect moments.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Expecting overnight results
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                Personal branding is a 6-12 month commitment minimum. Most quit
                before seeing results.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-800 dark:text-red-300">
                ❌ Chasing vanity metrics
              </h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                1,000 engaged followers &gt; 10,000 passive followers. Focus on
                connections, not numbers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Examples */}
        <section
          id="examples"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            11. Real Examples to Learn From
          </h2>

          <p>
            Study these creators to understand what works. Analyze their
            content, not just consume it:
          </p>

          <h3>On LinkedIn</h3>
          <ul>
            <li>
              <strong>Justin Welsh:</strong> Master of solo entrepreneurship
              content
            </li>
            <li>
              <strong>Sahil Bloom:</strong> Career and life lessons
            </li>
            <li>
              <strong>Shashank Udupa:</strong> Tech career advice for Indian
              audience
            </li>
          </ul>

          <h3>On Twitter/X</h3>
          <ul>
            <li>
              <strong>Shawn Wang (swyx):</strong> &quot;Learn in Public&quot;
              pioneer
            </li>
            <li>
              <strong>Dan Abramov:</strong> Authentic developer voice
            </li>
            <li>
              <strong>Naval Ravikant:</strong> Philosophy + business wisdom
            </li>
          </ul>

          <h3>What to Analyze</h3>
          <ul>
            <li>How do they structure their posts?</li>
            <li>What hooks do they use?</li>
            <li>What topics get most engagement?</li>
            <li>How do they engage with comments?</li>
            <li>What&apos;s their posting frequency?</li>
          </ul>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            12. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">
                I&apos;m a student with nothing to share. What do I post?
              </p>
              <p className="mt-2 text-muted-foreground">
                Share what you&apos;re learning. Your &quot;Day 1&quot; content
                helps someone on Day 0. Document projects, courses, mistakes,
                and growth. Your journey is content.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">How long before I see results?</p>
              <p className="mt-2 text-muted-foreground">
                6-12 months of consistent effort typically yields noticeable
                results. First 3 months feel slow; months 4-6 show momentum;
                months 7-12 show real growth.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Should I use my real name or a pseudonym?
              </p>
              <p className="mt-2 text-muted-foreground">
                Real name is usually better for professional branding.
                Pseudonyms work if privacy is important or you&apos;re in a
                niche where it&apos;s common (like crypto).
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">How do I handle negative comments?</p>
              <p className="mt-2 text-muted-foreground">
                Constructive criticism: engage and learn. Trolls: ignore or
                block. Don&apos;t engage in public arguments—it rarely ends
                well.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">Do I need a personal website?</p>
              <p className="mt-2 text-muted-foreground">
                Not immediately, but eventually yes. Start with
                LinkedIn/Twitter. Once you have content and clarity, build a
                simple portfolio site.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Won&apos;t my employer have issues with my posting?
              </p>
              <p className="mt-2 text-muted-foreground">
                Most employers appreciate employees with strong personal brands.
                Avoid sharing confidential info or bashing your company. Focus
                on professional growth content.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Build Your Brand Today</h2>
          <p>
            Personal branding is no longer optional in the modern career
            landscape. The opportunities it creates—jobs, collaborations,
            speaking invitations, and connections—compound dramatically over
            time.
          </p>
          <p>
            Start small. Pick one platform. Post consistently for 6 months.
            Engage genuinely with others. Your future self will thank you for
            the foundation you&apos;re building today.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your brand is being built whether you&apos;re intentional or not.
            Choose to be intentional. ✨
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
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Building Guide
            </Link>
            <Link
              href="/blog/networking-for-introverts"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Networking for Introverts
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
                Based on insights from personal branding experts, successful
                creators, and professionals who&apos;ve built influential online
                presences.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
