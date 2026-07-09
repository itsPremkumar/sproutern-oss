import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Map,
  Target,
  Compass,
  Flag,
  CheckCircle,
  Lightbulb,
  Clock,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  Calendar,
  ArrowRight,
  Heart,
} from 'lucide-react';

export const metadata = getPageSEO('careerPlanning');

export default function CareerPlanningPage() {
  const schemas = getPageSchema('careerPlanning');

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <Compass className="h-4 w-4" />
          Complete Guide
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Strategic Career Planning Guide
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Don't just find a job—build a career. Learn how to map out your
          professional journey, set achievable goals, and navigate the
          ever-changing job market with confidence.
        </p>
      </div>

      {/* Stats Section */}
      <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">70%</p>
          <p className="text-sm text-muted-foreground">
            Professionals without a plan
          </p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">3x</p>
          <p className="text-sm text-muted-foreground">Faster career growth</p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">87%</p>
          <p className="text-sm text-muted-foreground">
            Higher job satisfaction
          </p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">2-3</p>
          <p className="text-sm text-muted-foreground">
            Career pivots avg. lifetime
          </p>
        </div>
      </div>

      {/* Why Career Planning Matters - Human Written Section */}
      <section className="mx-auto mb-16 max-w-4xl">
        <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-8 dark:border-purple-900 dark:from-purple-950/30 dark:to-pink-950/30">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <Heart className="h-6 w-6 text-red-500" />
            Why I Wish Someone Had Told Me About Career Planning Earlier
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              <strong>
                Here's a confession: I had no career plan until my final year of
                college.
              </strong>{' '}
              Like most students, I was focused on getting good grades,
              completing projects, and surviving exams. The future? That was
              something to worry about later. "Placements will happen, I'll get
              a job, and everything will work out" — that was my entire
              strategy.
            </p>
            <p>
              Then placement season arrived, and I watched friends who had been
              preparing strategically for two years get offers from their dream
              companies, while I scrambled to figure out what I even wanted to
              do. Some of them knew exactly which companies to target, which
              skills to develop, which alumni to reach out to. I was still
              deciding between software development and product management.
            </p>
            <p>
              That chaos taught me an important lesson:{' '}
              <strong>
                career success isn't about being the smartest or the most
                talented — it's about being intentional
              </strong>
              . The students who landed the best opportunities weren't
              necessarily the ones with the highest GPAs. They were the ones who
              had spent time understanding themselves, researching the market,
              and building skills methodically toward a goal.
            </p>
            <p>
              This guide is what I wish I had when I was a freshman. It's not
              just theory — it's a practical framework that I've personally used
              and refined, and that I've seen work for hundreds of students
              through Sproutern. Whether you're just starting college or already
              in your final year (it's not too late!), the principles here will
              help you take control of your career instead of leaving it to
              chance.
            </p>
            <p className="font-medium text-foreground">
              The best time to start career planning was yesterday. The second
              best time is today. Let's begin.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl">
        {/* Core Pillars */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Card className="border-none bg-gradient-to-br from-primary/5 to-transparent shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Compass className="h-8 w-8 text-primary" />
                Self-Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                The first step in career planning is understanding yourself.
                What are your values, interests, and skills?
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> Identify
                  your core values and motivations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> Assess your
                  technical and soft skills
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> Determine
                  your preferred work environment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> Understand
                  your personality type (MBTI/DISC)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none bg-gradient-to-br from-secondary/50 to-transparent shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="h-8 w-8 text-secondary-foreground" />
                Goal Setting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Set SMART goals (Specific, Measurable, Achievable, Relevant,
                Time-bound) to guide your progress.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> Define
                  90-day sprints for quick wins
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> Set 1-year
                  milestone goals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> Outline
                  5-year vision and direction
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> Create
                  actionable weekly tasks
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* SWOT Analysis Section */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <Map className="h-6 w-6 text-primary" />
            Career SWOT Analysis Framework
          </h2>
          <p>
            A SWOT analysis helps you understand your position in the job
            market. Use this framework to identify what makes you unique and
            where you need to improve.
          </p>

          <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-950">
              <h3 className="mb-3 text-lg font-bold text-green-700 dark:text-green-300">
                Strengths (Internal)
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• What skills do you excel at?</li>
                <li>• What achievements are you proud of?</li>
                <li>• What do others compliment you on?</li>
                <li>• What unique experiences do you have?</li>
              </ul>
              <p className="mt-3 text-xs italic text-muted-foreground">
                Example: "Strong Python skills, built 3 production apps,
                excellent presentation skills"
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-6 dark:bg-yellow-950">
              <h3 className="mb-3 text-lg font-bold text-yellow-700 dark:text-yellow-300">
                Weaknesses (Internal)
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• What skills do you lack?</li>
                <li>• What feedback do you often receive?</li>
                <li>• What tasks do you avoid?</li>
                <li>• What areas need improvement?</li>
              </ul>
              <p className="mt-3 text-xs italic text-muted-foreground">
                Example: "Limited Data Science knowledge, struggle with public
                speaking, weak network"
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-3 text-lg font-bold text-blue-700 dark:text-blue-300">
                Opportunities (External)
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• What industry trends favor you?</li>
                <li>• What new roles are emerging?</li>
                <li>• What connections can you leverage?</li>
                <li>• What certifications are in demand?</li>
              </ul>
              <p className="mt-3 text-xs italic text-muted-foreground">
                Example: "AI/ML boom, mentor works at Google, GenAI
                certifications trending"
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-950">
              <h3 className="mb-3 text-lg font-bold text-red-700 dark:text-red-300">
                Threats (External)
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• What industry disruptions could affect you?</li>
                <li>• What competition do you face?</li>
                <li>• What economic factors are risks?</li>
                <li>• What skills are becoming obsolete?</li>
              </ul>
              <p className="mt-3 text-xs italic text-muted-foreground">
                Example: "AI automating entry-level coding, market saturation in
                web dev, layoffs in tech"
              </p>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2>The 4-Step Career Planning Process</h2>
          <p>
            Career planning isn't a one-time event; it's an ongoing process. Use
            this framework to continuously evaluate and adjust your path.
          </p>

          <div className="relative my-12 ml-4 space-y-12 border-l-4 border-primary/20 pl-8">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
              <h3 className="mt-0 text-xl font-bold">
                1. Discover (Self-Assessment)
              </h3>
              <p>
                Reflect on your likes, dislikes, strengths, and weaknesses. What
                tasks make you lose track of time? What kind of problems do you
                enjoy solving?
              </p>
              <div className="not-prose rounded-lg bg-muted p-4 text-sm">
                <p className="mb-2 font-semibold">Action Items:</p>
                <ul className="space-y-1">
                  <li>
                    • Take a personality assessment (16Personalities, DISC)
                  </li>
                  <li>• Ask 5 people for honest feedback on your strengths</li>
                  <li>• Journal about your ideal workday</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
              <h3 className="mt-0 text-xl font-bold">2. Explore (Research)</h3>
              <p>
                Research different industries, roles, and companies. Conduct
                informational interviews with professionals in fields you're
                interested in.
              </p>
              <div className="not-prose rounded-lg bg-muted p-4 text-sm">
                <p className="mb-2 font-semibold">Action Items:</p>
                <ul className="space-y-1">
                  <li>• Research 10 companies you'd love to work for</li>
                  <li>
                    • Reach out to 3 professionals for informational interviews
                  </li>
                  <li>• Study job descriptions for your target roles</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
              <h3 className="mt-0 text-xl font-bold">3. Plan (Gap Analysis)</h3>
              <p>
                Identify the gaps between where you are and where you want to
                be. Do you need a new certification? More experience in a
                specific tool? A mentor?
              </p>
              <div className="not-prose rounded-lg bg-muted p-4 text-sm">
                <p className="mb-2 font-semibold">Action Items:</p>
                <ul className="space-y-1">
                  <li>
                    • List skills required for target role vs. your current
                    skills
                  </li>
                  <li>• Identify 2-3 certifications that would help</li>
                  <li>• Create a 90-day learning plan</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
              <h3 className="mt-0 text-xl font-bold">4. Act (Execute)</h3>
              <p>
                Start executing your plan. Update your resume, apply for
                internships, enroll in courses, or attend networking events.
                Review progress every 90 days.
              </p>
              <div className="not-prose rounded-lg bg-muted p-4 text-sm">
                <p className="mb-2 font-semibold">Action Items:</p>
                <ul className="space-y-1">
                  <li>• Set weekly goals and track them</li>
                  <li>• Apply to 5-10 roles per week</li>
                  <li>• Schedule quarterly career reviews with yourself</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Calendar className="h-6 w-6 text-primary" />
            Career Planning Timeline by Stage
          </h2>

          <div className="space-y-4">
            {[
              {
                stage: 'College Freshman/Sophomore',
                focus: 'Exploration',
                actions: [
                  'Join clubs and take diverse courses',
                  'Start building LinkedIn profile',
                  'Attend career fairs for exposure',
                  'Try 1-2 short internships',
                ],
                color: 'bg-blue-50 dark:bg-blue-950 border-blue-500',
              },
              {
                stage: 'College Junior',
                focus: 'Specialization',
                actions: [
                  'Choose 2-3 industries to focus on',
                  'Complete meaningful internship',
                  'Build portfolio projects',
                  'Start preparing for placement tests',
                ],
                color: 'bg-purple-50 dark:bg-purple-950 border-purple-500',
              },
              {
                stage: 'College Senior / Final Year',
                focus: 'Execution',
                actions: [
                  'Apply strategically to 20-30 companies',
                  'Leverage network for referrals',
                  'Negotiate offers confidently',
                  'Start preparing for first job',
                ],
                color: 'bg-green-50 dark:bg-green-950 border-green-500',
              },
              {
                stage: 'First Job (0-2 years experience)',
                focus: 'Learning',
                actions: [
                  'Master your current role deeply',
                  'Find a mentor in the organization',
                  'Build cross-functional relationships',
                  'Take on stretch assignments',
                ],
                color: 'bg-orange-50 dark:bg-orange-950 border-orange-500',
              },
              {
                stage: 'Mid-Career (3-7 years experience)',
                focus: 'Growth',
                actions: [
                  'Decide: specialist or generalist path',
                  'Consider leadership opportunities',
                  'Build industry reputation',
                  'Evaluate if current path aligns with goals',
                ],
                color: 'bg-red-50 dark:bg-red-950 border-red-500',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-lg border-l-4 p-6 ${item.color}`}
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">{item.stage}</h3>
                  <span className="rounded-full bg-background px-3 py-1 text-sm">
                    Focus: {item.focus}
                  </span>
                </div>
                <ul className="grid gap-2 text-sm md:grid-cols-2">
                  {item.actions.map((action, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Startup Career Paths */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">
            Career Paths in the Startup Ecosystem
          </h2>
          <p className="mb-6 text-muted-foreground">
            Startups offer unique career trajectories compared to traditional
            corporations. Here are some common paths:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">The Specialist</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Deepens expertise in a specific domain (e.g., AI Engineer, SEO
                Specialist). Becomes the go-to person for complex problems.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>✓ High demand in funded startups</li>
                <li>✓ Premium compensation</li>
                <li>✓ Consulting opportunities</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">The Generalist</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Wears multiple hats (e.g., Growth Hacker, Ops Manager). Thrives
                in early-stage startups where versatility is key.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>✓ Broad skill development</li>
                <li>✓ Path to leadership roles</li>
                <li>✓ Entrepreneurship foundation</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">The Founder</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Uses startup experience to eventually launch their own venture.
                Learns how to build product, team, and sales from the ground up.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>✓ Maximum ownership</li>
                <li>✓ Unlimited upside potential</li>
                <li>✓ High risk, high reward</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2>Frequently Asked Questions</h2>

          <div className="not-prose space-y-4">
            {[
              {
                q: 'How early should I start career planning?',
                a: "The earlier, the better! Ideally, start exploring in your first year of college. However, it's never too late. Even mid-career professionals benefit from intentional career planning. The key is to start now.",
              },
              {
                q: 'How often should I revisit my career plan?',
                a: "Conduct a major review every 6-12 months, and a quick check-in every quarter. Also revisit whenever there's a major life change—new job, graduation, industry shift, or personal milestone.",
              },
              {
                q: "What if I have multiple interests and can't decide on one career?",
                a: "That's completely normal! Start by exploring your top 2-3 interests through side projects, internships, or informational interviews. You don't have to commit forever—most people change careers 2-3 times. Focus on building transferable skills.",
              },
              {
                q: 'Should I follow my passion or choose a practical career?',
                a: "It's not binary. Find the intersection of what you enjoy, what you're good at, and what the market values. Pure passion without market demand leads to frustration; pure practicality without enjoyment leads to burnout.",
              },
              {
                q: "How do I know if I'm making progress in my career?",
                a: "Track metrics like: skills learned, responsibilities increased, network grown, compensation improved, and satisfaction level. If you're growing in at least 2-3 of these areas annually, you're on track.",
              },
              {
                q: 'Is it okay to take a step back (lower title/pay) for a better opportunity?',
                a: "Absolutely, if it aligns with your long-term goals. Many successful professionals have taken strategic 'step backs' to enter a new industry, join a high-growth startup, or learn from an exceptional leader.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h4 className="mb-2 font-semibold">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl bg-secondary p-8">
          <h2 className="mb-4 text-2xl font-bold">Build Your Career Roadmap</h2>
          <p className="mb-6 text-muted-foreground">
            Need help visualizing your career path? Use our interactive tools to
            see the skills and steps needed for your target role.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/career-roadmap">Generate Career Roadmap</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources/skill-development">Explore Skills</Link>
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/resources/skill-development"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Skill Development</h3>
              <p className="text-sm text-muted-foreground">In-demand skills</p>
            </Link>
            <Link
              href="/resources/industry-insights"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Industry Insights</h3>
              <p className="text-sm text-muted-foreground">
                Market trends and salaries
              </p>
            </Link>
            <Link
              href="/resources/networking"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Networking Guide</h3>
              <p className="text-sm text-muted-foreground">
                Build your professional network
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
