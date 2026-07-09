import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  School,
  Award,
  Building,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Education Sector Internships: Complete Guide',
  description:
    'Explore internships in education—from teaching to ed-tech. Guide for students passionate about transforming learning.',
  keywords: [
    'education internship',
    'teaching internship',
    'ed tech internship',
    'teach for india',
    'education sector career',
  ],
  openGraph: {
    title: 'Education Sector Internships: Complete Guide',
    description: 'Shape the future of learning.',
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
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Education Sector Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Education is undergoing a massive transformation. Join the movement
            to shape how the world learns.
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
                1. Types of Education Roles
              </a>
            </li>
            <li>
              <a
                href="#edtech"
                className="text-primary hover:underline"
              >
                2. Ed-Tech Opportunities
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
                href="#fellowships"
                className="text-primary hover:underline"
              >
                4. Education Fellowships
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                5. Skills Needed
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
                Ed-tech is one of the fastest-growing sectors in India
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Teaching fellowships offer transformative experiences</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Content creation is a huge opportunity in education</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                You don't need an education degree to work in education
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <School className="h-6 w-6 text-primary" />
            1. Types of Education Roles
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-600">Teaching</p>
              <p className="text-muted-foreground">
                Direct instruction in schools, tutoring centers
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-600">Curriculum Design</p>
              <p className="text-muted-foreground">
                Creating learning materials and courses
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-600">Ed-Tech Product</p>
              <p className="text-muted-foreground">
                Building learning apps and platforms
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-600">Education Research</p>
              <p className="text-muted-foreground">
                Studying learning outcomes and pedagogy
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Ed-Tech */}
        <section
          id="edtech"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            2. Ed-Tech Opportunities
          </h2>

          <ul>
            <li>
              <strong>Product roles:</strong> PM, UX design for learning
              products
            </li>
            <li>
              <strong>Engineering:</strong> Build the platforms millions learn
              on
            </li>
            <li>
              <strong>Content:</strong> Create videos, courses, assessments
            </li>
            <li>
              <strong>Marketing:</strong> Reach learners and parents
            </li>
            <li>
              <strong>Sales:</strong> B2B sales to schools and institutions
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Create educational content on YouTube or
              LinkedIn. This demonstrates passion and skill better than any
              resume.
            </div>
          </div>
        </section>

        {/* Section 3: Organizations */}
        <section
          id="orgs"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            3. Top Organizations
          </h2>

          <h3>Ed-Tech Companies</h3>
          <p>BYJU'S, Unacademy, Vedantu, upGrad, Physics Wallah, Toppr</p>

          <h3>Education NGOs</h3>
          <p>Teach For India, Pratham, Akanksha Foundation, Room to Read</p>

          <h3>Test Prep</h3>
          <p>Allen, Aakash, TIME, Career Launcher</p>
        </section>

        {/* Section 4: Fellowships */}
        <section
          id="fellowships"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Education Fellowships
          </h2>

          <ul>
            <li>
              <strong>Teach For India:</strong> 2-year fellowship teaching in
              low-income schools
            </li>
            <li>
              <strong>Gandhi Fellowship:</strong> Work on school transformation
              projects
            </li>
            <li>
              <strong>India Fellow:</strong> Comprehensive development
              fellowship
            </li>
            <li>
              <strong>Ashoka Young Changemakers:</strong> Social
              entrepreneurship in education
            </li>
          </ul>
        </section>

        {/* Section 5: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Skills Needed
          </h2>

          <ul>
            <li>
              <strong>Communication:</strong> Explaining complex concepts simply
            </li>
            <li>
              <strong>Patience:</strong> Learning takes time
            </li>
            <li>
              <strong>Creativity:</strong> Making learning engaging
            </li>
            <li>
              <strong>Technology:</strong> Comfort with digital tools
            </li>
            <li>
              <strong>Empathy:</strong> Understanding different learner needs
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
                Do I need a B.Ed to work in education?
              </p>
              <p className="mt-2 text-muted-foreground">
                Not necessarily. Ed-tech companies and NGOs hire from all
                backgrounds. Fellowships also don't require B.Ed.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Is education a good career financially?
              </p>
              <p className="mt-2 text-muted-foreground">
                Ed-tech roles pay competitively. Teaching roles vary but improve
                with experience. The sector is growing rapidly.
              </p>
            </div>
          </div>
        </section>

        {/* Role Deep Dives */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Education Roles: Deep Dive
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-blue-600">
                Teaching & Tutoring
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Direct instruction to students. Most impactful but requires
                patience and communication skills.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">₹3-15 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">Communication, Patience</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-semibold">
                    Principal/HOD (₹20-40 LPA)
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-blue-600">
                Ed-Tech Product Roles
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Build learning platforms and apps. Combine tech with education
                understanding.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">₹8-25 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">Product Mgmt, UX, Tech</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-semibold">VP Product (₹40-80 LPA)</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-blue-600">
                Curriculum Design
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Create courses, assessments, learning paths. Subject expertise +
                instructional design.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">₹5-18 LPA</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Subject Expertise, Design
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-semibold">
                    Head of Content (₹25-45 LPA)
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-blue-600">Ed-Tech Sales</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Sell to schools, colleges, or parents. High-pressure but
                high-earning potential.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Salary Range:</span>
                  <span className="font-semibold">
                    ₹4-20 LPA (incl. incentives)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">Sales, Communication</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-semibold">
                    Sales Director (₹30-60 LPA)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ed-Tech Company Comparison */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Ed-Tech Company Comparison
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Company
                  </th>
                  <th className="border p-3 text-left font-semibold">Focus</th>
                  <th className="border p-3 text-left font-semibold">
                    Stipend
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Culture
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">BYJU'S</td>
                  <td className="border p-3">K-12, Test Prep</td>
                  <td className="border p-3">₹10-30K/month</td>
                  <td className="border p-3">Sales-driven</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Unacademy</td>
                  <td className="border p-3">Test Prep, Upskilling</td>
                  <td className="border p-3">₹15-40K/month</td>
                  <td className="border p-3">Fast-paced</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Physics Wallah</td>
                  <td className="border p-3">Test Prep</td>
                  <td className="border p-3">₹10-25K/month</td>
                  <td className="border p-3">Content-first</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">upGrad</td>
                  <td className="border p-3">Higher Ed, Upskilling</td>
                  <td className="border p-3">₹20-50K/month</td>
                  <td className="border p-3">Professional</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Vedantu</td>
                  <td className="border p-3">K-12, Live Classes</td>
                  <td className="border p-3">₹10-30K/month</td>
                  <td className="border p-3">Teaching-focused</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life
          </h2>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-3 font-bold text-blue-600">Teaching Intern</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>8:00</strong> - Prepare lesson materials
                </p>
                <p>
                  <strong>9:00</strong> - Teach morning classes
                </p>
                <p>
                  <strong>12:00</strong> - Lunch with students
                </p>
                <p>
                  <strong>13:00</strong> - Grade assignments
                </p>
                <p>
                  <strong>15:00</strong> - One-on-one tutoring
                </p>
                <p>
                  <strong>16:00</strong> - Staff meeting
                </p>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="mb-3 font-bold text-blue-600">
                Ed-Tech Content Intern
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>10:00</strong> - Content review meeting
                </p>
                <p>
                  <strong>11:00</strong> - Create video scripts
                </p>
                <p>
                  <strong>13:00</strong> - Lunch break
                </p>
                <p>
                  <strong>14:00</strong> - Design assessments
                </p>
                <p>
                  <strong>16:00</strong> - Review analytics
                </p>
                <p>
                  <strong>17:00</strong> - Plan next week's content
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
                Which is better—teaching or ed-tech?
              </h3>
              <p className="text-muted-foreground">
                Depends on your goals. Teaching offers direct impact and
                relationships. Ed-tech offers scale and tech exposure. Many
                successful educators do both.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I transition into education from another field?
              </h3>
              <p className="text-muted-foreground">
                Start with tutoring, volunteer teaching, or content creation.
                Your subject expertise is valuable—you don't need formal
                education training initially.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Are fellowships worth it?
              </h3>
              <p className="text-muted-foreground">
                Absolutely for those passionate about education. Teach For India
                alumni go on to lead startups, NGOs, and policy roles. The
                network is powerful.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the future of ed-tech post-COVID?
              </h3>
              <p className="text-muted-foreground">
                Hybrid learning is here to stay. Ed-tech is refocusing on
                outcomes over subscriptions. AI in education is the next big
                wave—learn about it.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I make ₹1 crore in education?
              </h3>
              <p className="text-muted-foreground">
                Yes, in senior ed-tech roles, as a popular content creator, or
                by starting your own education business. Top educators on
                YouTube earn crores.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I apply for teaching or business roles in ed-tech?
              </h3>
              <p className="text-muted-foreground">
                Apply for what aligns with your skills. If you love teaching, go
                for content/teaching roles. If you're interested in growth/
                operations, try business roles.
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
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5 dark:bg-blue-950">
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                "TFI was the best decision of my life..."
              </p>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                "Two years teaching in a low-income school changed everything. I
                learned leadership, empathy, and problem-solving. Now I lead
                education programs at a major foundation." — Ananya, Mumbai
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5 dark:bg-blue-950">
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                "From CA to curriculum designer..."
              </p>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                "Left CA to pursue my passion for teaching. Started as content
                intern at an ed-tech startup. Now I design courses for millions.
                The pay is comparable, the fulfillment is much higher." — Rahul
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5 dark:bg-blue-950">
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                "My YouTube channel became my career..."
              </p>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                "Started teaching physics on YouTube during college. Now I have
                2M subscribers and earn more than my parents. Education content
                is hugely valuable." — Priya, Delhi
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Education Career Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have subject expertise in at least one area</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can explain complex concepts simply</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have patience with different learning speeds</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Comfortable with technology and digital tools</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Created some educational content (videos/articles)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have tutoring or teaching experience</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Passionate about helping others learn</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Know which type of education role interests you</span>
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
                <li>• Mindset - Carol Dweck</li>
                <li>• Make It Stick - Peter Brown</li>
                <li>• Teaching as Leadership - Steven Farr (TFI)</li>
                <li>• Creative Schools - Ken Robinson</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Free Courses</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Learning How to Learn (Coursera)</li>
                <li>• Instructional Design (LinkedIn Learning)</li>
                <li>• Introduction to Ed-Tech (edX)</li>
                <li>• Content Creation for Education (YouTube)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Communities</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Teach For India alumni network</li>
                <li>• Ed-tech founders WhatsApp groups</li>
                <li>• Education Twitter/LinkedIn</li>
                <li>• Local teacher communities</li>
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
                  Thinking you need teaching experience
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Many roles value subject expertise over teaching credentials.
                  Your knowledge and communication skills matter more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Joining ed-tech sales without understanding
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Some ed-tech sales roles have aggressive targets. Research the
                  company culture before joining to avoid burnout.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not building a portfolio
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Create sample lessons, videos, or content to showcase. This
                  matters more than your resume in education roles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Expecting high pay immediately
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Entry teaching roles pay modestly. Ed-tech pays better but
                  often requires proving yourself first. Plan accordingly.
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
                <strong>Prepare a demo lesson:</strong> Many interviews require
                teaching a sample topic. Practice explaining concepts simply and
                engagingly.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Know the company's pedagogy:</strong> Research how they
                approach learning. Show you understand and align with their
                educational philosophy.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Show passion for impact:</strong> Education companies
                want people who genuinely care about learning outcomes, not just
                a job.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Bring content samples:</strong> If you've created any
                educational content—videos, notes, assessments—share them to
                prove your abilities.
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Career Paths in Education
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Traditional Teaching</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Teacher → Senior Teacher → HOD → Vice Principal → Principal
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Ed-Tech Product</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Content Intern → Content Lead → Product Manager → VP Product
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Education Policy</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fellowship → Research Analyst → Policy Advisor → Education
                Secretary
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Content Creator</p>
              <p className="mt-2 text-sm text-muted-foreground">
                YouTube channel → Brand partnerships → Own courses → Education
                empire
              </p>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Shape the Future</h2>
          <p>
            Education is the most powerful tool for change. If you want work
            that matters, join the education revolution.
          </p>
          <p>
            India has 260 million students. The opportunity to impact learning
            at scale has never been greater. Be part of the transformation.
          </p>
          <p className="text-lg font-semibold text-primary">
            Every expert was once a student who had a great teacher. Be that
            teacher. 📚
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/ngo-social-sector-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              NGO Internships
            </Link>
            <Link
              href="/blog/content-writing-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Content Writing
            </Link>
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
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
                Based on insights from education professionals.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
