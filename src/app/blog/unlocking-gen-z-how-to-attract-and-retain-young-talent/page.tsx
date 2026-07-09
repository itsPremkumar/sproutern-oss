import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Users,
  Target,
  Heart,
  Smartphone,
  Globe,
  Briefcase,
  MessageCircle,
  BarChart2,
  Shield,
  Zap,
  Award,
  Coffee,
  Smile,
  Layout,
  Play,
  Hash,
  Instagram,
  Linkedin,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unlocking Gen Z: How to Attract and Retain Young Talent',
  description:
    'Gen Z is transforming the workplace. Discover the secrets to recruiting, engaging, and retaining the most digitally native and diverse generation in history.',
  keywords: [
    'Gen Z workforce',
    'attracting young talent',
    'Gen Z recruitment',
    'employee retention strategies',
    'workplace culture',
    'Gen Z values',
    'future of work',
    'hiring graduates',
    'campus hiring strategies',
  ],
  openGraph: {
    title: 'Unlocking Gen Z: The Ultimate Employer Guide',
    description: 'Build a workplace that magnetic to the next generation.',
    type: 'article',
    publishedTime: '2025-06-20T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-pink-600">
            <Users className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              HR & Leadership
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Unlocking Gen Z: How to Attract and Retain Young Talent
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            They are digital natives, pragmatists, and social activists. Gen Z
            is reshaping the corporate world. Here is your blueprint for
            building a workplace that thrives with the talent of tomorrow.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern HR Team</span>
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

        {/* Introduction */}
        <section className="mb-10">
          <p>
            Generation Z (born between 1997 and 2012) will make up 27% of the
            workforce by 2025. This isn't just a demographic shift; it's a
            cultural revolution. Unlike their Millennial predecessors who sought
            "meaning," Gen Z seeks <strong>"security with purpose."</strong>
          </p>
          <p>
            Having grown up during economic recessions and a global pandemic,
            they are pragmatic, financially drive, yet deeply principled. They
            are the first true digital natives, never knowing a world without
            the internet. To hire them, you must understand them.
          </p>
          <p>
            Employers using the same playbook from 2015 are struggling. Ghosting
            recruiters, rejecting offers for ethical reasons, and demanding
            radical transparency are the new norms. This guide will help you
            navigate this landscape and turn your company into a magnet for
            high-potential young talent.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 Guide Contents</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#profile"
                className="text-primary hover:underline"
              >
                1. The Gen Z Profile
              </a>
            </li>
            <li>
              <a
                href="#values"
                className="text-primary hover:underline"
              >
                2. Core Values at Work
              </a>
            </li>
            <li>
              <a
                href="#attraction"
                className="text-primary hover:underline"
              >
                3. Attraction Strategies
              </a>
            </li>
            <li>
              <a
                href="#recruitment"
                className="text-primary hover:underline"
              >
                4. Modern Recruitment Channels
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                5. Compensation & Benefits
              </a>
            </li>
            <li>
              <a
                href="#retention"
                className="text-primary hover:underline"
              >
                6. Retention: The New Rules
              </a>
            </li>
            <li>
              <a
                href="#wellbeing"
                className="text-primary hover:underline"
              >
                7. Mental Health & Flexibility
              </a>
            </li>
            <li>
              <a
                href="#dei"
                className="text-primary hover:underline"
              >
                8. The Role of DEI
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                9. Common HR Mistakes
              </a>
            </li>
            <li>
              <a
                href="#checklist"
                className="text-primary hover:underline"
              >
                10. Employer Checklist
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                11. FAQs
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Dimensions Box */}
        <div className="not-prose mb-10 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Zap className="h-5 w-5 text-purple-600" />
            Gen Z at a Glance
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Smartphone className="mt-1 h-4 w-4 text-purple-600" />
              <div>
                <strong>Tech-Intuitive:</strong> 5 apps open at once. Expect
                seamless digital tools at work.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="mt-1 h-4 w-4 text-purple-600" />
              <div>
                <strong>Risk-Averse:</strong> Value stability and clear career
                paths over "hustle culture."
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Globe className="mt-1 h-4 w-4 text-purple-600" />
              <div>
                <strong>Diverse:</strong> The most radically and ethnically
                diverse generation in history.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="mt-1 h-4 w-4 text-purple-600" />
              <div>
                <strong>Mental Health Aware:</strong> Prioritize psychological
                safety and work-life boundaries.
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Profile */}
        <section
          id="profile"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <User className="h-6 w-6 text-primary" />
            1. The Gen Z Profile: Who are they?
          </h2>
          <p>
            Understanding the "why" behind their behavior is crucial. Gen Z has
            a unique worldview shaped by:
          </p>
          <ul>
            <li>
              <strong>Information Overload:</strong> They filter information in
              8 seconds. Your job postings must be concise.
            </li>
            <li>
              <strong>The "Creator" Economy:</strong> Many have side hustles or
              create content. They value entrepreneurial thinking.
            </li>
            <li>
              <strong>Social Activism:</strong> They don't just work for
              companies; they investigate them. Ethical alignment is
              non-negotiable.
            </li>
          </ul>
        </section>

        {/* Section 2: Core Values */}
        <section
          id="values"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. Core Values Driving Decisions
          </h2>

          <h3>1. Authenticity Over Polish</h3>
          <p>
            Gen Z can spot a corporate PR statement from a mile away. They crave
            authentic leadership. They prefer a CEO who admits mistakes on
            LinkedIn over a glossy press release.
          </p>

          <h3>2. Radical Transparency</h3>
          <p>
            They want to know: How is pay determined? What is the company's
            carbon footprint? What is the diversity data? Hiding this
            information breeds distrust.
          </p>

          <h3>3. Career Velocity</h3>
          <p>
            They are ambitious but impatient. They want to know "What's next?"
            on Day 1. Micro-promotions and clear upskilling paths are essential.
          </p>
        </section>

        {/* Section 3: Attraction Strategies */}
        <section
          id="attraction"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            3. Strategies to Attract Top Talent
          </h2>
          <p>
            The old "Post and Pray" method doesn't work. You need to market your
            employer brand like a consumer product.
          </p>

          <h3>Optimize Your Digital Presence</h3>
          <ul>
            <li>
              <strong>Mobile-First Application:</strong> If they can't apply on
              their phone in 5 minutes, you've lost them.
            </li>
            <li>
              <strong>Social Proof:</strong> They trust employee testimonials on
              Glassdoor/LinkedIn more than your career page.
            </li>
            <li>
              <strong>Visual Job Descriptions:</strong> Use videos or
              infographics instead of walls of text.
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Create "Day in the Life" reels on
              Instagram or TikTok. Show the actual desk, the coffee machine, the
              team vibe. Remove the mystery.
            </div>
          </div>
        </section>

        {/* Section 4: Recruitment Channels */}
        <section
          id="recruitment"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            4. Recruitment Channels That Work
          </h2>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-blue-700" />
                <h3 className="m-0 text-lg font-bold">LinkedIn</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Essential for verifying legitimacy. Ensure your company page is
                active and showcases culture.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Instagram className="h-5 w-5 text-pink-600" />
                <h3 className="m-0 text-lg font-bold">Instagram/TikTok</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Great for brand awareness. Hashtags like #CompanyLife or
                #Internship resonate well.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                <h3 className="m-0 text-lg font-bold">Unstop / Internshala</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Platform specifically designed for early-career folks in India.
                Highly effective for volume hiring.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Coffee className="h-5 w-5 text-amber-700" />
                <h3 className="m-0 text-lg font-bold">Virtual Career Fairs</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Gen Z prefers virtual interactions initially. Host webinars or
                AMA (Ask Me Anything) sessions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Benefits */}
        <section
          id="salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            5. Compensation & Benefits: The Non-Negotiables
          </h2>
          <p>
            While they care about impact, they have bills to pay. Gen Z is
            financially anxious.
          </p>
          <ul>
            <li>
              <strong>Salary Transparency:</strong> List the salary range in the
              job description. "Competitive Salary" is a red flag.
            </li>
            <li>
              <strong>Early Pay Access:</strong> Concepts like "On-demand pay"
              are gaining traction.
            </li>
            <li>
              <strong>Student Loan Assistance:</strong> A huge perk for
              graduates with education debt.
            </li>
            <li>
              <strong>Mental Health Support:</strong> Free therapy sessions or
              subscription to apps like Headspace/Calm.
            </li>
            <li>
              <strong>Upskilling Allowance:</strong> Budget for courses (Udemy,
              Coursera). They view learning as currency.
            </li>
          </ul>
        </section>

        {/* Section 6: Retention */}
        <section
          id="retention"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            6. Retention: Keeping Them Engaged
          </h2>
          <p>
            Gen Z is sometimes called the "Job Hopping Generation." Retention
            requires active management.
          </p>

          <h3>The "Job Partner" Mindset</h3>
          <p>
            Stop treating them like subordinates; treat them like partners.
            Involve them in decision-making early on. Ask their opinion on tech
            tools or social media strategy—areas where they are naturally
            expert.
          </p>

          <h3>Frequent Feedback Loops</h3>
          <p>The annual performance review is dead. Gen Z wants:</p>
          <ul>
            <li>
              <strong>Weekly Check-ins:</strong> 15 mins to discuss roadblocks.
            </li>
            <li>
              <strong>Real-time Coaching:</strong> Immediate feedback after a
              presentation.
            </li>
            <li>
              <strong>Growth Conversations:</strong> Separate from performance
              reviews. Focus on their future.
            </li>
          </ul>
        </section>

        {/* Section 7: Wellbeing */}
        <section
          id="wellbeing"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Smile className="h-6 w-6 text-primary" />
            7. Mental Health & Flexibility
          </h2>
          <p>For Gen Z, mental health is health. It's not a taboo top.</p>
          <ul>
            <li>
              <strong>Mental Health Days:</strong> Explicitly allotted sick
              leave for mental health.
            </li>
            <li>
              <strong>Disconnecting Rights:</strong> Respecting "no email after
              6 PM" policies.
            </li>
            <li>
              <strong>Hybrid Work:</strong> 73% of Gen Z prefers hybrid work.
              They want the social aspect of office but the focus time of home.
            </li>
          </ul>
        </section>

        {/* Section 8: DEI */}
        <section
          id="dei"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            8. Diversity, Equity, and Inclusion (DEI)
          </h2>
          <p>
            Gen Z will not tolerate a homogenous workplace. They expect to see
            diversity at all levels, including leadership.
          </p>
          <ul>
            <li>
              <strong>Beyond Tokenism:</strong> Don't just put diverse faces in
              brochures. Show actual leadership representation.
            </li>
            <li>
              <strong>Inclusive Language:</strong> Use gender-neutral language
              in handbooks and communications.
            </li>
            <li>
              <strong>ERG (Employee Resource Groups):</strong> Support groups
              for women, LGBTQ+, parents, etc.
            </li>
          </ul>
        </section>

        {/* Section 9: Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            9. Common Mistakes to Avoid
          </h2>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ "Pay your dues" mentality</p>
              <p className="text-muted-foreground">
                Telling them they must suffer through boring tasks because
                "that's how we did it" breeds resentment. Explain the "why"
                behind the task.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Banning technology</p>
              <p className="text-muted-foreground">
                Restricting social media or personal devices is futile. Focus on
                output, not how they get there.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Slow hiring process</p>
              <p className="text-muted-foreground">
                If you take 4 weeks to decide, they are gone. Gen Z moves fast.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Checklist */}
        <section
          id="checklist"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layout className="h-6 w-6 text-primary" />
            10. The Gen Z Employer Checklist
          </h2>
          <div className="rounded-lg bg-muted p-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Are salary ranges visible on all job posts?</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  Is your application process mobile-friendly (&lt; 5 mins)?
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Do you offer hybrid/remote work options?</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Is there a clear DEI statement on your career page?</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Do you have a formalized mentorship program?</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Do you offer mental health benefits?</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 11: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            11. Frequently Asked Questions
          </h2>
          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">Is Gen Z really harder to manage?</p>
              <p className="mt-2 text-muted-foreground">
                Not harder, just different. They require more context ("why")
                and more frequent feedback. Once engaged, they are incredibly
                productive and innovative.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How long does Gen Z stay in a job?</p>
              <p className="mt-2 text-muted-foreground">
                The average tenure is around 2 years. To extend this, offer
                "internal mobility"—allow them to switch teams or projects
                without leaving the company.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Do they prefer remote or office work?</p>
              <p className="mt-2 text-muted-foreground">
                Surprisingly, many crave office time for mentorship and
                socialization, but they hate forced 9-to-5 mandates. Flexibility
                to choose is key.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Final Thoughts: Embracing the Future</h2>
          <p>
            Gen Z is effectively the R&D department for your company's culture.
            The changes they are demanding—transparency, mental health support,
            flexibility—actually benefit <em>everyone</em>, not just them.
          </p>
          <p>
            By adapting your strategies to attract Gen Z, you aren't just
            filling entry-level seats; you are future-proofing your organization
            for the next decade of work. Listen to them, learn from them, and
            give them the space to lead.
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/why-your-startup-should-hire-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Why Hire Interns?
            </Link>
            <Link
              href="/blog/how-to-create-a-killer-internship-program-from-scratch"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Create Internship Program
            </Link>
            <Link
              href="/blog/mentoring-junior-developers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Mentorship Guide
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
