import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Heart,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Globe,
  HandHeart,
  Building,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NGO & Social Sector Internships: Complete Guide',
  description:
    'Make an impact through NGO and social sector internships. Learn about opportunities, skills needed, and how to find meaningful work.',
  keywords: [
    'ngo internship',
    'social sector internship',
    'nonprofit internship',
    'development sector',
    'social impact career',
  ],
  openGraph: {
    title: 'NGO & Social Sector Internships: Complete Guide',
    description: 'Make a difference with your career.',
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
          <div className="mb-4 flex items-center gap-2 text-rose-600">
            <Heart className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            NGO & Social Sector Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Work that matters. Learn how to find meaningful internships in the
            social impact sector.
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
              <span>14 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                1. Types of Social Sector Work
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                2. Common Roles
              </a>
            </li>
            <li>
              <a
                href="#orgs"
                className="text-primary hover:underline"
              >
                3. Top Organizations
              </a>
            </li>
            <li>
              <a
                href="#find"
                className="text-primary hover:underline"
              >
                4. How to Find Opportunities
              </a>
            </li>
            <li>
              <a
                href="#tips"
                className="text-primary hover:underline"
              >
                5. Making the Most of It
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
                Many NGO internships are unpaid but offer incredible learning
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Skills from corporate sector are highly valued in NGOs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Field experience is more valuable than office work alone
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>International development organizations pay well</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            1. Types of Social Sector Work
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-rose-600">Education</p>
              <p className="text-muted-foreground">
                Teaching, curriculum design, ed-tech
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-rose-600">Healthcare</p>
              <p className="text-muted-foreground">
                Public health, nutrition, mental health
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-rose-600">Livelihoods</p>
              <p className="text-muted-foreground">
                Skill development, microfinance, agriculture
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-rose-600">Environment</p>
              <p className="text-muted-foreground">
                Conservation, sustainability, climate action
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Roles */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <HandHeart className="h-6 w-6 text-primary" />
            2. Common Roles
          </h2>

          <ul>
            <li>
              <strong>Program Support:</strong> Assisting in implementation of
              projects
            </li>
            <li>
              <strong>Research & M&E:</strong> Data collection, impact
              measurement
            </li>
            <li>
              <strong>Communications:</strong> Storytelling, social media,
              fundraising
            </li>
            <li>
              <strong>Operations:</strong> Logistics, volunteer management
            </li>
            <li>
              <strong>Field Work:</strong> Direct community engagement
            </li>
          </ul>
        </section>

        {/* Section 3: Organizations */}
        <section
          id="orgs"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            3. Top Organizations
          </h2>

          <h3>Indian NGOs</h3>
          <p>
            Teach For India, Pratham, Akshaya Patra, CRY, Smile Foundation,
            Goonj
          </p>

          <h3>International</h3>
          <p>UNICEF, WHO, World Bank, UNDP, Bill & Melinda Gates Foundation</p>

          <h3>Fellowships</h3>
          <p>
            Gandhi Fellowship, India Fellow, SBI Youth for India, Swaniti
            Initiative
          </p>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Fellowships like Teach For India are
              highly competitive but transformative. Apply early and prepare
              well.
            </div>
          </div>
        </section>

        {/* Section 4: Find */}
        <section
          id="find"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. How to Find Opportunities
          </h2>

          <ul>
            <li>
              <strong>iVolunteer:</strong> India's largest volunteer/internship
              platform
            </li>
            <li>
              <strong>NGO websites:</strong> Apply directly through career pages
            </li>
            <li>
              <strong>LinkedIn:</strong> Follow NGO pages and job posts
            </li>
            <li>
              <strong>College cells:</strong> Social responsibility committees
              often have tie-ups
            </li>
            <li>
              <strong>Referrals:</strong> Network with people already in the
              sector
            </li>
          </ul>
        </section>

        {/* Section 5: Tips */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Making the Most of It
          </h2>

          <ul>
            <li>Go beyond assigned tasks—seek field exposure</li>
            <li>Document your impact with numbers and stories</li>
            <li>Build relationships with beneficiaries and staff</li>
            <li>Learn the development sector vocabulary</li>
            <li>Reflect on your experience—what motivated you?</li>
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
                Can I make a career in the social sector?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. The development sector is growing. Leadership roles
                at large NGOs and international organizations pay competitively.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Are all NGO internships unpaid?</p>
              <p className="mt-2 text-muted-foreground">
                Many grassroots NGOs are unpaid, but larger organizations and
                international bodies offer stipends or salaries.
              </p>
            </div>
          </div>
        </section>

        {/* Role Deep Dives */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            NGO Roles: Deep Dive
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-rose-600">
                Program Management
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Design, implement, and evaluate social programs. The backbone of
                NGO work.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Entry Salary:</span>
                  <span className="font-semibold">₹4-8 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Project Mgmt, Field Work
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-semibold">
                    Program Director (₹20-30 LPA)
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-rose-600">
                M&E (Monitoring & Evaluation)
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Measure program impact with data. High demand as funders want
                proof of outcomes.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Entry Salary:</span>
                  <span className="font-semibold">₹5-10 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">Data Analysis, Research</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-semibold">
                    Head of M&E (₹15-25 LPA)
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-rose-600">
                Fundraising & Partnerships
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Raise money from donors, CSR, and foundations. Critical for
                organizational sustainability.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Entry Salary:</span>
                  <span className="font-semibold">₹4-8 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">Communication, Sales</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-semibold">
                    VP Fundraising (₹25-40 LPA)
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-rose-600">
                Communications & Advocacy
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Tell the organization's story. Social media, PR, content, and
                policy advocacy.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Entry Salary:</span>
                  <span className="font-semibold">₹3-6 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">Writing, Storytelling</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-semibold">
                    Comms Director (₹15-25 LPA)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fellowship Comparison */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Fellowship Comparison
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Fellowship
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Stipend
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Duration
                  </th>
                  <th className="border p-3 text-left font-semibold">Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Teach For India</td>
                  <td className="border p-3">₹20K/month</td>
                  <td className="border p-3">2 years</td>
                  <td className="border p-3">Education</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Gandhi Fellowship
                  </td>
                  <td className="border p-3">₹18K/month</td>
                  <td className="border p-3">2 years</td>
                  <td className="border p-3">School Leadership</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">India Fellow</td>
                  <td className="border p-3">₹12K/month</td>
                  <td className="border p-3">13 months</td>
                  <td className="border p-3">Various NGOs</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    SBI Youth for India
                  </td>
                  <td className="border p-3">₹20K/month</td>
                  <td className="border p-3">13 months</td>
                  <td className="border p-3">Rural Development</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Swaniti Initiative
                  </td>
                  <td className="border p-3">₹25K/month</td>
                  <td className="border p-3">11 months</td>
                  <td className="border p-3">Governance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of an
            NGO Intern
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-rose-600">8:00</div>
              <div>
                <p className="font-semibold">Travel to Field Site</p>
                <p className="text-sm text-muted-foreground">
                  NGO work often involves going to communities, schools, or
                  villages.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-rose-600">10:00</div>
              <div>
                <p className="font-semibold">Field Work / Meetings</p>
                <p className="text-sm text-muted-foreground">
                  Interact with beneficiaries, conduct surveys, or attend
                  community meetings.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-rose-600">13:00</div>
              <div>
                <p className="font-semibold">Documentation</p>
                <p className="text-sm text-muted-foreground">
                  Record observations, enter data, write field notes.
                  Documentation is crucial.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-rose-600">15:00</div>
              <div>
                <p className="font-semibold">Office Work</p>
                <p className="text-sm text-muted-foreground">
                  Data analysis, report writing, or helping with communications.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-rose-600">17:00</div>
              <div>
                <p className="font-semibold">Team Debrief</p>
                <p className="text-sm text-muted-foreground">
                  Share learnings, plan next day, discuss challenges.
                </p>
              </div>
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
                How do I transition from corporate to NGO?
              </h3>
              <p className="text-muted-foreground">
                Your corporate skills (operations, marketing, finance) are
                highly valued. Start with volunteering or part-time projects
                before making a full switch.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is there career growth in NGOs?
              </h3>
              <p className="text-muted-foreground">
                Yes! Large NGOs like Pratham, TFI, and international orgs have
                structured career paths. Senior roles at big NGOs pay ₹20-50
                LPA.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Which is better—Indian or international NGOs?
              </h3>
              <p className="text-muted-foreground">
                International NGOs (UN, World Bank) pay more and offer global
                exposure. Indian NGOs offer deeper grassroots experience. Both
                are valuable—depends on your goals.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What degrees help in social sector?
              </h3>
              <p className="text-muted-foreground">
                Any degree works. Development Studies, Public Policy, Social
                Work are most relevant. Even engineering and MBA backgrounds are
                valued for their skills.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How competitive are fellowships?
              </h3>
              <p className="text-muted-foreground">
                Very. Teach For India accepts 4-5% of applicants. Gandhi
                Fellowship is similarly selective. Prepare well—strong essays
                and interviews matter.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I start my own NGO after interning?
              </h3>
              <p className="text-muted-foreground">
                Yes, but work in existing NGOs first. Understanding ground
                realities and how organizations work is essential before
                starting your own.
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
            <div className="rounded-lg border-l-4 border-rose-500 bg-rose-50 p-5 dark:bg-rose-950">
              <p className="font-semibold text-rose-900 dark:text-rose-100">
                "TFI changed my life trajectory..."
              </p>
              <p className="mt-2 text-sm text-rose-800 dark:text-rose-200">
                "Joined Teach For India after engineering. Those 2 years
                teaching in a low-income school taught me more than 4 years of
                college. Now I lead education programs at a major foundation." —
                Ananya
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-rose-500 bg-rose-50 p-5 dark:bg-rose-950">
              <p className="font-semibold text-rose-900 dark:text-rose-100">
                "From consultant to social entrepreneur..."
              </p>
              <p className="mt-2 text-sm text-rose-800 dark:text-rose-200">
                "Left McKinsey to intern at a rural livelihoods NGO. That
                experience led me to start my own organization. Social sector
                work is the most fulfilling thing I've done." — Rahul
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-rose-500 bg-rose-50 p-5 dark:bg-rose-950">
              <p className="font-semibold text-rose-900 dark:text-rose-100">
                "UNDP after grassroots work..."
              </p>
              <p className="mt-2 text-sm text-rose-800 dark:text-rose-200">
                "Started with a small education NGO. Built data and M&E skills.
                Now working at UNDP on sustainable development programs. The
                grassroots experience was essential." — Priya
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            NGO Internship Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Know why you want to work in social sector</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have basic understanding of development issues</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Willing to work in field conditions</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have relevant skills (research, writing, data)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Ready for lower pay (at least initially)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have empathy and patience</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Researched organizations you want to work with</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Resume highlights relevant experience</span>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Best Learning Resources
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Books</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Poor Economics - Abhijit Banerjee & Esther Duflo</li>
                <li>• The Bottom Billion - Paul Collier</li>
                <li>• Dead Aid - Dambisa Moyo</li>
                <li>• Doing Good Better - William MacAskill</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Free Courses</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Introduction to Development (edX/Coursera)</li>
                <li>• Public Policy courses (NPTEL)</li>
                <li>• Program Evaluation (Johns Hopkins)</li>
                <li>• Nonprofit Management (various)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">News & Communities</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• India Development Review (IDR)</li>
                <li>• Devex (global development news)</li>
                <li>• The Third Sector (Facebook groups)</li>
                <li>• LinkedIn development sector groups</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Application Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Treating it like corporate recruiting
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  NGOs value passion and mission alignment over polished
                  resumes. Show genuine interest in their cause.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not knowing the organization's work
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Research specific programs, beneficiaries, and impact areas.
                  Generic applications fail.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Expecting structured training
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  NGOs are often resource-constrained. Be ready to learn
                  independently and take initiative.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Unrealistic salary expectations
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  NGOs pay less than corporate jobs. Accept this tradeoff for
                  meaningful work—pay increases with seniority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Tips */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Interview Tips
          </h2>

          <div className="my-6 space-y-4">
            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Show your "why":</strong> NGOs hire for passion first.
                Have a compelling story about why this cause matters to you.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Know the sector:</strong> Read about development debates
                in India. Know challenges like last-mile delivery, scale vs.
                depth, etc.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Be realistic about challenges:</strong> Acknowledge
                field work is difficult. Show you're prepared for uncomfortable
                conditions.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Highlight relevant skills:</strong> Research, data,
                writing, languages—any skill that helps the NGO achieve its
                mission.
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Career Paths in Social Sector
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">NGO Leadership</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Intern → Program Manager → Director → CEO of NGO
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">International Development</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fellow → Consultant → Specialist → Country Director (UN/World
                Bank)
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">CSR & Foundations</p>
              <p className="mt-2 text-sm text-muted-foreground">
                NGO experience → Corporate CSR → Foundation Program Lead
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Social Entrepreneurship</p>
              <p className="mt-2 text-sm text-muted-foreground">
                NGO experience → Start your own organization or social
                enterprise
              </p>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Make Your Work Matter</h2>
          <p>
            NGO internships offer unmatched purpose and learning. If you want
            work that creates real impact, the social sector is calling.
          </p>
          <p>
            The challenges are enormous, but so is the satisfaction. Every
            person you help, every community you support matters.
          </p>
          <p className="text-lg font-semibold text-primary">
            The world needs people who care. Be one of them. 💙
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/government-internships-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Government Internships
            </Link>
            <Link
              href="/blog/research-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Research Internships
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
                Based on insights from development sector professionals.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
