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
  DollarSign,
  Briefcase,
  Laptop,
  MapPin,
  AlertCircle,
  Star,
  Zap,
  Coffee,
  Home,
  ShoppingBag,
  PenTool,
  Camera,
  Monitor,
  Headphones,
  GraduationCap,
  Timer,
  FileText,
  Award,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Part-Time Jobs for College Students: Complete Guide',
  description:
    'Find the best part-time jobs for college students in India. Explore online and offline opportunities, freelancing, and tips for balancing work with studies.',
  keywords: [
    'part-time jobs students',
    'college student jobs',
    'work study',
    'earn while studying',
    'freelancing students',
    'online jobs students',
    'internships',
    'student income',
    'campus jobs',
  ],
  openGraph: {
    title: 'Part-Time Jobs for College Students',
    description: 'Earn while you learn—the complete guide.',
    type: 'article',
    publishedTime: '2025-12-24T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-emerald-600">
            <Briefcase className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Part-Time Jobs for College Students: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Earn while you learn. Discover the best part-time job opportunities
            for college students in India—online, offline, and freelance options
            with tips for work-study balance.
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

        {/* Introduction */}
        <section className="mb-10">
          <p>
            College life is exciting but often comes with financial constraints.
            Whether you need extra pocket money, want to reduce financial burden
            on your family, or simply wish to gain work experience—part-time
            jobs offer a solution.
          </p>
          <p>
            The good news?, there are more opportunities than ever for students
            to earn alongside studies. From flexible online gigs to traditional
            on-campus jobs, from freelancing to internships—the options are
            diverse and accessible.
          </p>
          <p>
            This guide covers everything: where to find jobs, how much you can
            earn, which opportunities fit your skills, and crucially, how to
            balance work with academics. Because at the end of the day, your
            degree matters too.
          </p>
          <p>
            Let&apos;s explore the world of student employment and help you find
            the perfect opportunity to earn while you learn.
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
                1. Why Work Part-Time?
              </a>
            </li>
            <li>
              <a
                href="#online"
                className="text-primary hover:underline"
              >
                2. Online Job Options
              </a>
            </li>
            <li>
              <a
                href="#offline"
                className="text-primary hover:underline"
              >
                3. Offline/Campus Jobs
              </a>
            </li>
            <li>
              <a
                href="#freelancing"
                className="text-primary hover:underline"
              >
                4. Freelancing Opportunities
              </a>
            </li>
            <li>
              <a
                href="#internships"
                className="text-primary hover:underline"
              >
                5. Paid Internships
              </a>
            </li>
            <li>
              <a
                href="#platforms"
                className="text-primary hover:underline"
              >
                6. Where to Find Jobs
              </a>
            </li>
            <li>
              <a
                href="#earnings"
                className="text-primary hover:underline"
              >
                7. Earnings Expectations
              </a>
            </li>
            <li>
              <a
                href="#balance"
                className="text-primary hover:underline"
              >
                8. Work-Study Balance
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                9. Skills to Develop
              </a>
            </li>
            <li>
              <a
                href="#legal"
                className="text-primary hover:underline"
              >
                10. Legal & Safety
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="text-primary hover:underline"
              >
                11. Tools for Success
              </a>
            </li>
            <li>
              <a
                href="#career"
                className="text-primary hover:underline"
              >
                12. Career Conversion
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                13. FAQs
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
                Online jobs offer flexibility—ideal for managing academics
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Students can earn ₹5,000-30,000+ monthly depending on skills
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Freelancing builds skills and portfolio for future careers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Limit work to 15-20 hours/week to protect academic performance
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Choose jobs that align with your career goals when possible
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Beware of scams—verify before joining any opportunity</span>
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
            1. Why Work Part-Time in College?
          </h2>

          <p>
            Beyond just earning money, part-time work offers several benefits
            that enhance your college experience and future career.
          </p>

          <h3>Financial Benefits</h3>
          <ul>
            <li>Reduce financial burden on family</li>
            <li>Cover personal expenses (phone, entertainment, travel)</li>
            <li>Save for future education or emergencies</li>
            <li>Reduce or avoid education loans</li>
            <li>Develop financial independence and money management skills</li>
          </ul>

          <h3>Professional Benefits</h3>
          <ul>
            <li>Gain real-world work experience</li>
            <li>Build your resume with practical skills</li>
            <li>Network with professionals in your field</li>
            <li>Develop time management and professionalism</li>
            <li>Explore career options before graduating</li>
          </ul>

          <h3>Personal Benefits</h3>
          <ul>
            <li>Boost confidence and self-reliance</li>
            <li>Learn to balance multiple responsibilities</li>
            <li>Develop communication and interpersonal skills</li>
            <li>Build a work ethic that will serve you lifelong</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Important:</strong> While benefits are many, never
              compromise your academics for part-time work. Your degree is the
              primary goal—work should complement, not compete with, your
              studies.
            </div>
          </div>
        </section>

        {/* Section 2: Online */}
        <section
          id="online"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Laptop className="h-6 w-6 text-primary" />
            2. Online Job Options
          </h2>

          <p>
            Online jobs offer flexibility that&apos;s perfect for students. Work
            from your hostel, set your own hours, and scale up during vacations.
          </p>

          <h3>Content Writing</h3>
          <p>
            If you can write well, content writing is one of the most accessible
            online jobs for students.
          </p>
          <ul>
            <li>
              <strong>Types:</strong> Blog posts, articles, product
              descriptions, social media
            </li>
            <li>
              <strong>Skills needed:</strong> Good English, research ability,
              creativity
            </li>
            <li>
              <strong>Earnings:</strong> ₹1-5 per word (₹5,000-20,000/month
              part-time)
            </li>
            <li>
              <strong>Platforms:</strong> Internshala, Pepper Content,
              Contently, Upwork
            </li>
          </ul>

          <h3>Online Tutoring</h3>
          <p>
            Teach subjects you&apos;re good at to school or junior college
            students.
          </p>
          <ul>
            <li>
              <strong>Types:</strong> Academic subjects, test prep (JEE, NEET),
              languages
            </li>
            <li>
              <strong>Skills needed:</strong> Subject expertise, patience,
              teaching ability
            </li>
            <li>
              <strong>Earnings:</strong> ₹200-1000/hour depending on subject
            </li>
            <li>
              <strong>Platforms:</strong> Vedantu, Chegg, Tutor.com, Preply,
              Superprof
            </li>
          </ul>

          <h3>Social Media Management</h3>
          <p>Help small businesses manage their social media presence.</p>
          <ul>
            <li>
              <strong>Tasks:</strong> Content creation, posting, engagement,
              analytics
            </li>
            <li>
              <strong>Skills needed:</strong> Social media knowledge,
              creativity, basic design
            </li>
            <li>
              <strong>Earnings:</strong> ₹5,000-15,000/month per client
            </li>
            <li>
              <strong>How to start:</strong> Build your own profiles, approach
              local businesses
            </li>
          </ul>

          <h3>Virtual Assistance</h3>
          <p>
            Support entrepreneurs and small businesses with administrative
            tasks.
          </p>
          <ul>
            <li>
              <strong>Tasks:</strong> Email management, scheduling, data entry,
              research
            </li>
            <li>
              <strong>Skills needed:</strong> Organization, communication, basic
              tech
            </li>
            <li>
              <strong>Earnings:</strong> ₹10,000-25,000/month
            </li>
            <li>
              <strong>Platforms:</strong> Belay, Time Etc, Upwork
            </li>
          </ul>

          <h3>Data Entry &amp; Transcription</h3>
          <ul>
            <li>
              <strong>Tasks:</strong> Typing data, converting audio to text
            </li>
            <li>
              <strong>Skills needed:</strong> Fast typing, attention to detail
            </li>
            <li>
              <strong>Earnings:</strong> ₹5,000-12,000/month
            </li>
            <li>
              <strong>Platforms:</strong> Rev, TranscribeMe, Clickworker
            </li>
          </ul>

          <h3>Survey &amp; Microtask Websites</h3>
          <p>Not high-paying but easy to start with minimal skills.</p>
          <ul>
            <li>
              <strong>Tasks:</strong> Surveys, small tasks, feedback
            </li>
            <li>
              <strong>Earnings:</strong> ₹2,000-5,000/month
            </li>
            <li>
              <strong>Platforms:</strong> Swagbucks, Clickworker, Amazon MTurk
            </li>
          </ul>
        </section>

        {/* Section 3: Offline */}
        <section
          id="offline"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-primary" />
            3. Offline/Campus Jobs
          </h2>

          <p>
            Traditional offline jobs offer more interaction and structured work
            hours. On-campus jobs are especially convenient.
          </p>

          <h3>On-Campus Opportunities</h3>

          <h4>Library Assistant</h4>
          <ul>
            <li>Help with book management, cataloging, student assistance</li>
            <li>Quiet environment—can study during slow periods</li>
            <li>₹3,000-6,000/month typically</li>
          </ul>

          <h4>Department Assistant</h4>
          <ul>
            <li>
              Help professors with research, data collection, administration
            </li>
            <li>Great learning opportunity and networking</li>
            <li>₹5,000-10,000/month</li>
          </ul>

          <h4>Computer Lab Assistant</h4>
          <ul>
            <li>Manage lab, help students with software/hardware issues</li>
            <li>Good for CS/IT students</li>
            <li>₹4,000-7,000/month</li>
          </ul>

          <h4>Campus Ambassador</h4>
          <ul>
            <li>Promote companies/events on campus</li>
            <li>Often includes perks, goodies, networking</li>
            <li>₹2,000-5,000/month + incentives</li>
          </ul>

          <h3>Off-Campus Jobs</h3>

          <h4>Café/Restaurant Staff</h4>
          <ul>
            <li>Waiting tables, cashier, barista</li>
            <li>Flexible shifts, often near campus</li>
            <li>₹5,000-10,000/month + tips</li>
          </ul>

          <h4>Retail Sales</h4>
          <ul>
            <li>Work at malls, shops, showrooms</li>
            <li>Weekend/evening shifts available</li>
            <li>₹6,000-12,000/month</li>
          </ul>

          <h4>Event Staff</h4>
          <ul>
            <li>Work at conferences, weddings, exhibitions</li>
            <li>Sporadic but pays well per event</li>
            <li>₹500-1500/day</li>
          </ul>

          <h4>Private Tutoring</h4>
          <ul>
            <li>Teach school students in person</li>
            <li>Higher rates than online in many cases</li>
            <li>₹300-800/hour</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Coffee className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>On-Campus Advantage:</strong> On-campus jobs save commute
              time, are more understanding of student schedules, and often have
              perks like free meals or library access. Prioritize these if
              available.
            </div>
          </div>
        </section>

        {/* Section 4: Freelancing */}
        <section
          id="freelancing"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            4. Freelancing Opportunities
          </h2>

          <p>
            Freelancing offers the highest earning potential and flexibility,
            but requires specific skills and self-discipline.
          </p>

          <h3>Web Development</h3>
          <ul>
            <li>
              <strong>Skills:</strong> HTML, CSS, JavaScript, React/WordPress
            </li>
            <li>
              <strong>Earnings:</strong> ₹10,000-50,000/project
            </li>
            <li>
              <strong>Demand:</strong> Very high—every business needs a website
            </li>
            <li>
              <strong>How to start:</strong> Build portfolio sites, start with
              small businesses
            </li>
          </ul>

          <h3>Graphic Design</h3>
          <ul>
            <li>
              <strong>Skills:</strong> Canva, Adobe Photoshop/Illustrator, Figma
            </li>
            <li>
              <strong>Earnings:</strong> ₹500-5,000/design
            </li>
            <li>
              <strong>Services:</strong> Logos, social media graphics, posters,
              UI design
            </li>
            <li>
              <strong>How to start:</strong> Create samples, use design
              marketplaces
            </li>
          </ul>

          <h3>Video Editing</h3>
          <ul>
            <li>
              <strong>Skills:</strong> Premiere Pro, Final Cut, DaVinci Resolve
            </li>
            <li>
              <strong>Earnings:</strong> ₹2,000-15,000/video
            </li>
            <li>
              <strong>Demand:</strong> Growing rapidly with YouTube/Instagram
              creators
            </li>
            <li>
              <strong>How to start:</strong> Edit for college clubs, approach
              small YouTubers
            </li>
          </ul>

          <h3>Digital Marketing</h3>
          <ul>
            <li>
              <strong>Skills:</strong> SEO, Google Ads, Meta Ads, Analytics
            </li>
            <li>
              <strong>Earnings:</strong> ₹10,000-30,000/month per client
            </li>
            <li>
              <strong>Services:</strong> Running campaigns, SEO audits, content
              strategy
            </li>
            <li>
              <strong>How to start:</strong> Get certified (Google offers free
              courses), work on own projects
            </li>
          </ul>

          <h3>App/Mobile Development</h3>
          <ul>
            <li>
              <strong>Skills:</strong> Flutter, React Native, Swift/Kotlin
            </li>
            <li>
              <strong>Earnings:</strong> ₹20,000-100,000+/project
            </li>
            <li>
              <strong>Demand:</strong> High but requires substantial skill
            </li>
            <li>
              <strong>How to start:</strong> Build apps for portfolio,
              contribute to open source
            </li>
          </ul>

          <h3>Photography &amp; Videography</h3>
          <ul>
            <li>
              <strong>Skills:</strong> Camera work, editing, lighting
            </li>
            <li>
              <strong>Earnings:</strong> ₹3,000-20,000/event
            </li>
            <li>
              <strong>Services:</strong> Event coverage, product photography,
              portraits
            </li>
            <li>
              <strong>How to start:</strong> Cover college events, build
              Instagram portfolio
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Build Your Portfolio:</strong> In freelancing, your
              portfolio speaks louder than credentials. Even if you don&apos;t
              have clients yet, create sample projects to showcase your skills.
            </div>
          </div>
        </section>

        {/* Section 5: Internships */}
        <section
          id="internships"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            5. Paid Internships
          </h2>

          <p>
            Internships combine learning with earning—often the best option as
            they build relevant career experience.
          </p>

          <h3>Types of Internships</h3>
          <ul>
            <li>
              <strong>Summer internships:</strong> Full-time during breaks (2-3
              months)
            </li>
            <li>
              <strong>Part-time internships:</strong> 15-20 hours/week during
              semester
            </li>
            <li>
              <strong>Remote internships:</strong> Work from anywhere, flexible
              hours
            </li>
            <li>
              <strong>Winter/short internships:</strong> 1-2 months during
              winter break
            </li>
          </ul>

          <h3>Where to Find Internships</h3>
          <ul>
            <li>
              <strong>Internshala:</strong> India&apos;s largest internship
              platform
            </li>
            <li>
              <strong>LinkedIn:</strong> Direct applications to companies
            </li>
            <li>
              <strong>College placement cell:</strong> On-campus opportunities
            </li>
            <li>
              <strong>AngelList:</strong> Startup internships
            </li>
            <li>
              <strong>Company websites:</strong> Apply directly
            </li>
            <li>
              <strong>Referrals:</strong> Through seniors and connections
            </li>
          </ul>

          <h3>Internship Stipends</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Company Type</th>
                  <th className="p-3 text-left">Part-Time Stipend</th>
                  <th className="p-3 text-left">Full-Time Stipend</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Startups (early stage)</td>
                  <td className="p-3">₹5,000-10,000</td>
                  <td className="p-3">₹10,000-20,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Funded startups</td>
                  <td className="p-3">₹10,000-20,000</td>
                  <td className="p-3">₹20,000-40,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">MNCs</td>
                  <td className="p-3">₹15,000-30,000</td>
                  <td className="p-3">₹30,000-80,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Top Tech Companies</td>
                  <td className="p-3">Rare</td>
                  <td className="p-3">₹50,000-1,50,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Making the Most of Internships</h3>
          <ul>
            <li>Treat it as seriously as a full-time job</li>
            <li>Take initiative and go beyond assigned tasks</li>
            <li>Network with colleagues and managers</li>
            <li>Ask for feedback and improve</li>
            <li>Document your contributions for resume</li>
            <li>Ask for PPO (Pre-Placement Offer) if performing well</li>
          </ul>
        </section>

        {/* Section 6: Platforms */}
        <section
          id="platforms"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Monitor className="h-6 w-6 text-primary" />
            6. Where to Find Jobs
          </h2>

          <h3>Indian Platforms</h3>
          <ul>
            <li>
              <strong>Internshala:</strong> Internships and part-time jobs
            </li>
            <li>
              <strong>LinkedIn:</strong> Professional network + job listings
            </li>
            <li>
              <strong>Naukri.com:</strong> General job portal
            </li>
            <li>
              <strong>Indeed India:</strong> Aggregates jobs from multiple
              sources
            </li>
            <li>
              <strong>Freshersworld:</strong> Entry-level positions
            </li>
          </ul>

          <h3>Freelancing Platforms</h3>
          <ul>
            <li>
              <strong>Upwork:</strong> Global freelancing platform
            </li>
            <li>
              <strong>Fiverr:</strong> Gig-based services
            </li>
            <li>
              <strong>Freelancer.com:</strong> Project bidding platform
            </li>
            <li>
              <strong>Toptal:</strong> Premium freelancing (requires vetting)
            </li>
            <li>
              <strong>Pepper Content:</strong> Content writing (Indian)
            </li>
          </ul>

          <h3>Tutoring Platforms</h3>
          <ul>
            <li>
              <strong>Vedantu:</strong> K-12 tutoring
            </li>
            <li>
              <strong>Chegg:</strong> Subject experts and tutoring
            </li>
            <li>
              <strong>Preply:</strong> Language tutoring
            </li>
            <li>
              <strong>Wyzant:</strong> Various subjects
            </li>
          </ul>

          <h3>Direct Outreach</h3>
          <p>
            Don&apos;t rely only on platforms. Cold outreach can be very
            effective:
          </p>
          <ul>
            <li>Email local businesses offering your services</li>
            <li>Connect with startup founders on LinkedIn</li>
            <li>Ask seniors for referrals</li>
            <li>Join relevant college clubs and communities</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Beware of Scams:</strong> Never pay to get a job.
              Legitimate employers don&apos;t ask for registration fees or
              training deposits. Research companies before joining. If it sounds
              too good to be true, it probably is.
            </div>
          </div>
        </section>

        {/* Section 7: Earnings */}
        <section
          id="earnings"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            7. Realistic Earnings Expectations
          </h2>

          <p>
            How much can you actually earn? Here&apos;s a realistic breakdown:
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Job Type</th>
                  <th className="p-3 text-left">Hours/Week</th>
                  <th className="p-3 text-left">Monthly Earning</th>
                  <th className="p-3 text-left">Skill Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Surveys/Microtasks</td>
                  <td className="p-3">5-10</td>
                  <td className="p-3">₹2,000-5,000</td>
                  <td className="p-3">Beginner</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Data Entry</td>
                  <td className="p-3">10-15</td>
                  <td className="p-3">₹5,000-10,000</td>
                  <td className="p-3">Beginner</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Content Writing</td>
                  <td className="p-3">10-15</td>
                  <td className="p-3">₹8,000-20,000</td>
                  <td className="p-3">Intermediate</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Online Tutoring</td>
                  <td className="p-3">10-15</td>
                  <td className="p-3">₹10,000-25,000</td>
                  <td className="p-3">Intermediate</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Graphic Design</td>
                  <td className="p-3">10-15</td>
                  <td className="p-3">₹10,000-30,000</td>
                  <td className="p-3">Intermediate</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Web Development</td>
                  <td className="p-3">15-20</td>
                  <td className="p-3">₹20,000-50,000+</td>
                  <td className="p-3">Advanced</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Paid Internship</td>
                  <td className="p-3">15-20</td>
                  <td className="p-3">₹10,000-30,000</td>
                  <td className="p-3">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Scaling Your Income</h3>
          <ul>
            <li>
              <strong>Start small:</strong> Build skills and reputation
            </li>
            <li>
              <strong>Increase rates:</strong> As you gain experience, charge
              more
            </li>
            <li>
              <strong>Specialize:</strong> Experts in niche areas earn more
            </li>
            <li>
              <strong>Build recurring clients:</strong> Regular work is more
              predictable
            </li>
            <li>
              <strong>Vacations:</strong> Use breaks for intensive work
            </li>
          </ul>
        </section>

        {/* Section 8: Balance */}
        <section
          id="balance"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Timer className="h-6 w-6 text-primary" />
            8. Balancing Work and Studies
          </h2>

          <p>
            The biggest challenge for working students is maintaining balance.
            Here&apos;s how to succeed at both.
          </p>

          <h3>Time Management Rules</h3>
          <ul>
            <li>
              <strong>Cap work hours:</strong> 15-20 hours/week maximum during
              term
            </li>
            <li>
              <strong>Prioritize academics:</strong> Never miss classes or
              assignments for work
            </li>
            <li>
              <strong>Use weekends wisely:</strong> More work on weekends,
              lighter on weekdays
            </li>
            <li>
              <strong>Block study time:</strong> Non-negotiable study hours
            </li>
            <li>
              <strong>Use gaps:</strong> Small tasks in free periods between
              classes
            </li>
          </ul>

          <h3>When to Scale Back</h3>
          <p>Reduce work hours when:</p>
          <ul>
            <li>Exam periods approach</li>
            <li>Major project deadlines are near</li>
            <li>You&apos;re feeling consistently exhausted</li>
            <li>Grades start slipping</li>
            <li>Health is affected</li>
          </ul>

          <h3>Signs of Overwork</h3>
          <ul>
            <li>Missing classes or falling asleep in class</li>
            <li>Consistently incomplete assignments</li>
            <li>Declining test scores</li>
            <li>No time for friends, hobbies, or rest</li>
            <li>Physical symptoms: fatigue, headaches, poor sleep</li>
          </ul>

          <h3>Healthy Balance Tips</h3>
          <ul>
            <li>Schedule relaxation time—it&apos;s not optional</li>
            <li>Maintain sleep (7-8 hours minimum)</li>
            <li>Stay connected with friends and family</li>
            <li>Exercise regularly—it actually improves productivity</li>
            <li>Say no when you&apos;re at capacity</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Remember:</strong> Your degree is the long-term
              investment. Part-time income is helpful now, but sacrificing
              academics for short-term money is rarely worth it. Balance is key.
            </div>
          </div>
        </section>

        {/* Section 9: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            9. Skills to Develop
          </h2>

          <p>
            Invest in skills that increase your earning potential and career
            prospects. Here are high-value skills for students:
          </p>

          <h3>High-Demand Tech Skills</h3>
          <ul>
            <li>
              <strong>Web Development:</strong> HTML, CSS, JavaScript, React
            </li>
            <li>
              <strong>Python:</strong> Data analysis, automation, scripting
            </li>
            <li>
              <strong>UI/UX Design:</strong> Figma, user research
            </li>
            <li>
              <strong>Digital Marketing:</strong> SEO, Google Ads, Meta Ads
            </li>
            <li>
              <strong>Video Editing:</strong> Premiere Pro, After Effects
            </li>
          </ul>

          <h3>Soft Skills</h3>
          <ul>
            <li>Communication (written and verbal)</li>
            <li>Time management and organization</li>
            <li>Client handling and negotiation</li>
            <li>Self-learning and adaptability</li>
            <li>Problem-solving and critical thinking</li>
          </ul>

          <h3>Free Learning Resources</h3>
          <ul>
            <li>
              <strong>Coursera:</strong> University courses (audit free)
            </li>
            <li>
              <strong>freeCodeCamp:</strong> Programming tutorials
            </li>
            <li>
              <strong>Google Digital Garage:</strong> Digital marketing
            </li>
            <li>
              <strong>YouTube:</strong> Tutorials for almost anything
            </li>
            <li>
              <strong>edX:</strong> MIT and Harvard courses
            </li>
          </ul>
        </section>

        {/* Section 10: Legal & Safety */}
        <section
          id="legal"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            10. Legal Rights & Safety for Student Workers
          </h2>
          <p>
            As a student worker, you are vulnerable to exploitation. Identifying
            red flags and knowing your rights is crucial to ensure a safe and
            fair working environment.
          </p>
          <h3>Common Red Flags</h3>
          <ul>
            <li>
              <strong>Unpaid &quot;Training&quot; Periods:</strong> Legitimate
              companies pay you for your time during training. Be wary of unpaid
              month-long training schemes.
            </li>
            <li>
              <strong>Security Deposits:</strong> Never pay money to get a job.
              This is the #1 sign of a scam.
            </li>
            <li>
              <strong>No Written Agreement:</strong> Always ask for an email
              confirmation of offer, roles, and payment terms before starting
              work.
            </li>
            <li>
              <strong>Vague Job Descriptions:</strong> Titles like
              &quot;Marketing Executive&quot; that turn out to be door-to-door
              sales commissions only.
            </li>
          </ul>
          <h3>Safety Tips</h3>
          <ul>
            <li>
              <strong>Online Safety:</strong> Never share bank passwords, OTPs,
              or sensitive personal data unnecessarily.
            </li>
            <li>
              <strong>Meeting Clients:</strong> For freelancers meeting local
              clients, always meet in public places like cafes, never private
              residences.
            </li>
            <li>
              <strong>Data Privacy:</strong> Be careful with sharing personal
              documents (Aadhar/PAN). Verify the company&apos;s legitimacy on
              Google and LinkedIn first.
            </li>
          </ul>
          <div className="my-4 flex gap-3 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <div className="text-sm">
              <strong>Harassment Policy:</strong> Ensure you understand
              workplace policies on harassment. You have the right to a safe,
              respectful environment, even as a part-timer.
            </div>
          </div>
        </section>

        {/* Section 11: Tools */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            11. Essential Tools & Apps for Success
          </h2>
          <p>
            Work smarter, not harder. Leveraging the right technology can help
            you manage the chaotic mix of work, study, and life.
          </p>
          <h3>Time Management</h3>
          <ul>
            <li>
              <strong>Google Calendar:</strong> The holy grail for scheduling.
              Color-code your classes, work shifts, and study blocks to see your
              week at a glance.
            </li>
            <li>
              <strong>Forest:</strong> Gamify your focus. Plant virtual trees
              that grow while you stay off your phone—great for study sessions.
            </li>
            <li>
              <strong>Notion:</strong> An all-in-one workspace for lecture
              notes, task lists, freelance project tracking, and personal goals.
            </li>
          </ul>
          <h3>Finance Management</h3>
          <ul>
            <li>
              <strong>Walnut / Axio:</strong> Automatically tracks your expenses
              and income from SMS alerts, giving you a clear picture of your
              finances.
            </li>
            <li>
              <strong>Splitwise:</strong> If you live in a hostel or flat, use
              this to manage shared expenses with roommates without awkward
              money conversations.
            </li>
          </ul>
          <h3>Work Efficiency</h3>
          <ul>
            <li>
              <strong>Grammarly:</strong> Ensure your emails to professors and
              bosses are professional and error-free.
            </li>
            <li>
              <strong>Canva:</strong> Create quick, professional graphics for
              your freelance gig, presentations, or social media.
            </li>
            <li>
              <strong>Zoom/Google Meet:</strong> Essential for remote interviews
              and client meetings. Learn to use screen sharing and virtual
              backgrounds effectively.
            </li>
          </ul>
        </section>

        {/* Section 12: Career */}
        <section
          id="career"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            12. Converting Part-Time Work to a Career
          </h2>
          <p>
            Your part-time job isn&apos;t just for pocket money; it&apos;s a
            career launchpad. Here is how to leverage it for long-term success.
          </p>
          <h3>Strategic Moves</h3>
          <ul>
            <li>
              <strong>Network Internally:</strong> Don&apos;t just talk to your
              peers. Talk to full-time employees about their roles, career
              paths, and advice.
            </li>
            <li>
              <strong>Seek Mentorship:</strong> If you have a good manager, ask
              them for career advice. They can provide references that are gold
              for future applications.
            </li>
            <li>
              <strong>Professionalism:</strong> Treat the job seriously.
              Punctuality, reliability, and quality work often lead to full-time
              offers post-graduation.
            </li>
          </ul>
          <h3>Resume Booster</h3>
          <p>
            Learn to translate simple tasks into professional skills on your
            resume:
          </p>
          <ul>
            <li>
              <em>Instead of &quot;Waiter&quot;:</em> Write &quot;Customer
              Experience Specialist adept at high-pressure conflict resolution
              and team coordination.&quot;
            </li>
            <li>
              <em>Instead of &quot;Data Entry&quot;:</em> Write &quot;Database
              Manager with 99% accuracy and experience in CRM software.&quot;
            </li>
            <li>
              <em>Instead of &quot;Social Media&quot;:</em> Write &quot;Digital
              Engagement Strategist focusing on community growth and
              analytics-driven content.&quot;
            </li>
          </ul>
        </section>

        {/* Section 13: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            13. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">How do I start with no experience?</p>
              <p className="mt-2 text-muted-foreground">
                Start with entry-level tasks (data entry, surveys) while
                building skills. Create sample work for portfolios. Apply for
                internships that train you. Everyone starts somewhere—begin and
                improve.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I work full-time alongside college?
              </p>
              <p className="mt-2 text-muted-foreground">
                Not recommended for regular semesters. Full-time during
                vacations is fine. During term, stick to 15-20 hours/week to
                protect academics. Consider correspondence/online degrees if
                full-time work is necessary.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I mention part-time jobs on my resume?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes, especially if relevant to your career goals. Even unrelated
                jobs show work ethic, time management, and responsibility.
                Freelance work especially demonstrates initiative.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How do I handle taxes on freelance income?
              </p>
              <p className="mt-2 text-muted-foreground">
                In India, if total income exceeds ₹2.5 lakh, you need to file
                ITR. Student income from part-time work is taxable if above
                threshold. Keep records of all earnings. Consult a CA if unsure.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What if my college doesn&apos;t allow outside work?
              </p>
              <p className="mt-2 text-muted-foreground">
                Some residential colleges have restrictions. Check your hostel/
                college rules. Online work done discreetly in personal time is
                usually fine. Don&apos;t violate rules—consequences can be
                serious.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Your Earning Journey Today</h2>
          <p>
            The opportunities for students to earn are more diverse and
            accessible than ever. Whether you choose online freelancing, campus
            jobs, or internships, the key is starting—even small earnings add
            up, and the skills and experience you gain are invaluable.
          </p>
          <p>
            Remember to keep academics as priority, choose work that aligns with
            your career goals when possible, and maintain a healthy balance.
            Your college years are about growth on multiple fronts.
          </p>
          <p className="text-lg font-semibold text-primary">
            Earn, learn, and grow! 💰📚🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/one-page-resume-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Writing Guide
            </Link>
            <Link
              href="/blog/campus-placement-preparation"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Campus Placement Prep
            </Link>
            <Link
              href="/blog/effective-study-techniques"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Study Techniques
            </Link>
            <Link
              href="/blog/time-management-students-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Time Management Guide
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Score Checker
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Interview Experiences
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
                Guidance from career advisors and students who have successfully
                balanced work and studies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
