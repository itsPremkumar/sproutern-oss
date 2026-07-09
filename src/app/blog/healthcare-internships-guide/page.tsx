import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Stethoscope,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Heart,
  Building,
  Award,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Internships: Complete Guide',
  description:
    'Break into healthcare with internships in hospitals, pharma, health-tech, and public health. Complete guide for medical and non-medical students.',
  keywords: [
    'healthcare internship',
    'hospital internship',
    'pharma internship',
    'health tech',
    'public health career',
  ],
  openGraph: {
    title: 'Healthcare Internships: Complete Guide',
    description: 'Start your healthcare career.',
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
          <div className="mb-4 flex items-center gap-2 text-red-600">
            <Stethoscope className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Healthcare Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Healthcare is one of the fastest-growing sectors. Explore
            opportunities for medical and non-medical students alike.
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
                1. Types of Healthcare Internships
              </a>
            </li>
            <li>
              <a
                href="#nonmed"
                className="text-primary hover:underline"
              >
                2. For Non-Medical Students
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                3. Top Organizations
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                4. Skills Needed
              </a>
            </li>
            <li>
              <a
                href="#apply"
                className="text-primary hover:underline"
              >
                5. How to Apply
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
                Healthcare has roles for ALL backgrounds—not just medical
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Health-tech is booming in India post-pandemic</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Pharma companies offer well-paid corporate internships
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Public health is a growing career option</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            1. Types of Healthcare Internships
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Clinical</p>
              <p className="text-muted-foreground">
                For medical students—hospitals, clinics
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Pharmaceutical</p>
              <p className="text-muted-foreground">
                Drug companies—R&D, marketing, operations
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Health-Tech</p>
              <p className="text-muted-foreground">
                Startups like Practo, PharmEasy, 1mg
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Public Health</p>
              <p className="text-muted-foreground">
                NGOs, WHO, government health programs
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Non-Medical */}
        <section
          id="nonmed"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            2. For Non-Medical Students
          </h2>

          <p>You don't need a medical degree to work in healthcare:</p>
          <ul>
            <li>
              <strong>Business roles:</strong> Marketing, HR, Finance at
              hospitals/pharma
            </li>
            <li>
              <strong>Tech roles:</strong> Software engineers at health-tech
              companies
            </li>
            <li>
              <strong>Data roles:</strong> Healthcare analytics, epidemiology
            </li>
            <li>
              <strong>Operations:</strong> Hospital administration, supply chain
            </li>
            <li>
              <strong>Content:</strong> Medical writing, health journalism
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> If you're in tech, health-tech startups
              are a great way to enter the sector. They value software skills
              over medical background.
            </div>
          </div>
        </section>

        {/* Section 3: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            3. Top Organizations
          </h2>

          <h3>Health-Tech Startups</h3>
          <p>Practo, PharmEasy, 1mg (Tata), Healthify, Cult.fit, MediBuddy</p>

          <h3>Pharmaceutical</h3>
          <p>Sun Pharma, Cipla, Dr. Reddy's, Biocon, Lupin</p>

          <h3>Hospitals</h3>
          <p>Apollo, Fortis, Max Healthcare, Narayana Health, AIIMS</p>

          <h3>Public Health</h3>
          <p>
            WHO, Bill & Melinda Gates Foundation, PATH, Public Health Foundation
            of India
          </p>
        </section>

        {/* Section 4: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Skills Needed
          </h2>

          <ul>
            <li>
              <strong>Domain knowledge:</strong> Basic understanding of
              healthcare systems
            </li>
            <li>
              <strong>Empathy:</strong> Healthcare is about people
            </li>
            <li>
              <strong>Data skills:</strong> Healthcare generates massive data
            </li>
            <li>
              <strong>Regulatory awareness:</strong> Healthcare is heavily
              regulated
            </li>
          </ul>
        </section>

        {/* Section 5: Apply */}
        <section
          id="apply"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. How to Apply
          </h2>

          <ul>
            <li>Apply via company career pages or LinkedIn</li>
            <li>For hospitals, inquire through HR or administration</li>
            <li>
              WHO and international bodies have formal internship programs
            </li>
            <li>
              Health-tech startups are accessible via LinkedIn and referrals
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
                Can engineering students work in healthcare?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Health-tech companies actively hire engineers.
                Biomedical engineering is another pathway.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Do pharma internships pay well?</p>
              <p className="mt-2 text-muted-foreground">
                Yes. Large pharma companies offer stipends of ₹20K-50K/month for
                interns.
              </p>
            </div>
          </div>
        </section>

        {/* Role Deep Dives */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Healthcare Roles: Deep Dive
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-red-600">
                Health-Tech Product
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Build and manage digital health products—apps, portals,
                telemedicine platforms.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹20K-40K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    PM skills, Healthcare Domain
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Background:</span>
                  <span className="font-semibold">Tech, Business, Design</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-red-600">Pharma Marketing</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Promote pharmaceutical products to doctors and hospitals.
                High-paying with strong career growth.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹25K-45K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Communication, Life Sciences
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Background:</span>
                  <span className="font-semibold">MBA, Pharma, Sciences</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-red-600">
                Healthcare Analytics
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Analyze patient data, medical records, and health outcomes.
                Growing demand for data professionals.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹25K-50K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">SQL, Python, Statistics</span>
                </div>
                <div className="flex justify-between">
                  <span>Background:</span>
                  <span className="font-semibold">
                    Data Science, Statistics
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-red-600">
                Hospital Administration
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Manage hospital operations, staffing, patient flow, and resource
                allocation.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹15K-30K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">Operations, Management</span>
                </div>
                <div className="flex justify-between">
                  <span>Background:</span>
                  <span className="font-semibold">MBA, Hospital Mgmt</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Table */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Healthcare Internship Stipends
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Organization Type
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
                    Top Pharma (Sun, Cipla)
                  </td>
                  <td className="border p-3">₹30K-60K/month</td>
                  <td className="border p-3">2-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Health-Tech Startups
                  </td>
                  <td className="border p-3">₹20K-40K/month</td>
                  <td className="border p-3">3-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Private Hospitals
                  </td>
                  <td className="border p-3">₹15K-30K/month</td>
                  <td className="border p-3">2-3 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Public Health NGOs
                  </td>
                  <td className="border p-3">₹10K-25K/month</td>
                  <td className="border p-3">2-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    WHO/International
                  </td>
                  <td className="border p-3">Unpaid - $1500/month</td>
                  <td className="border p-3">6 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Career Paths */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Career Paths in Healthcare
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Health-Tech</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Intern → Product Analyst → Product Manager → Director of Product
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Pharmaceutical</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Intern → Medical Rep → Area Manager → Regional Manager → VP
                Sales
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Hospital Management</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Admin Intern → Executive → Manager → COO → CEO
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Public Health</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Research Intern → Program Officer → Program Manager → Director
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
                Is an MBA required for pharma roles?
              </h3>
              <p className="text-muted-foreground">
                Not always. Science graduates can enter through medical
                representative roles. MBA helps for management and marketing
                positions.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I get into WHO internships?
              </h3>
              <p className="text-muted-foreground">
                Apply through the official WHO internship portal. They have
                rolling applications with 2-6 month durations. Unpaid but
                excellent for public health careers.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the growth in health-tech?
              </h3>
              <p className="text-muted-foreground">
                India's health-tech market is growing 30%+ annually.
                Post-pandemic, telemedicine and digital health are booming.
                Great time to enter.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I work in healthcare without a science background?
              </h3>
              <p className="text-muted-foreground">
                Yes! Business, tech, and operations roles don't require medical
                knowledge. You'll learn the domain on the job. Many health-tech
                founders are non-medical.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What certifications help?
              </h3>
              <p className="text-muted-foreground">
                Certified Healthcare Manager (CHM), Healthcare Analytics
                courses, MPH (Master of Public Health), and Regulatory Affairs
                certifications are all valuable.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How is healthcare different from other sectors?
              </h3>
              <p className="text-muted-foreground">
                More regulated, slower decision-making, but extremely stable and
                recession-proof. The impact on human lives makes it deeply
                meaningful.
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
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                "From CS to health-tech PM..."
              </p>
              <p className="mt-2 text-sm text-red-800 dark:text-red-200">
                "Interned at Practo as a software engineer. Got fascinated by
                healthcare problems. Transitioned to product after 2 years. Now
                leading a telemedicine product team." — Anish, Bengaluru
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                "Public health wasn't on my radar..."
              </p>
              <p className="mt-2 text-sm text-red-800 dark:text-red-200">
                "Interned at Bill & Melinda Gates Foundation through a
                fellowship. Worked on maternal health data. Changed my career
                direction completely. Now at WHO." — Priyanka, Delhi
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                "MBA + Pharma = fast growth..."
              </p>
              <p className="mt-2 text-sm text-red-800 dark:text-red-200">
                "Summer internship at Sun Pharma in their marketing team. Got a
                PPO. 5 years later, I'm a Regional Manager earning 25 LPA.
                Healthcare pays well if you're good." — Rahul, Mumbai
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Healthcare Internship Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understand basic healthcare industry structure</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>
                Know the difference between clinical and non-clinical roles
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have relevant skills for your target role</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>
                Know healthcare regulations basics (for regulated roles)
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have empathy-focused examples for interviews</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Resume highlights relevant projects/experience</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Know why you want to work in healthcare</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Researched target companies and their focus areas</span>
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
              <h4 className="mb-2 font-bold">Free Courses</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Healthcare Management (Coursera)</li>
                <li>• Public Health Foundations (edX)</li>
                <li>• Healthcare Analytics (online)</li>
                <li>• WHO courses and tutorials</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Industry News</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Express Healthcare</li>
                <li>• ET HealthWorld</li>
                <li>• STAT News (global)</li>
                <li>• Healthcare Radius</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Books</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Being Mortal - Atul Gawande</li>
                <li>• The Checklist Manifesto - Atul Gawande</li>
                <li>• The Health Gap - Michael Marmot</li>
                <li>• Complications - Atul Gawande</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of a
            Healthcare Intern
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">9:00</div>
              <div>
                <p className="font-semibold">Team Huddle</p>
                <p className="text-sm text-muted-foreground">
                  Daily sync with the team to discuss priorities, patient
                  metrics, or product updates.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">10:00</div>
              <div>
                <p className="font-semibold">Core Work</p>
                <p className="text-sm text-muted-foreground">
                  Depending on role: data analysis, marketing campaigns, product
                  research, or operations work.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">13:00</div>
              <div>
                <p className="font-semibold">Cross-Functional Meeting</p>
                <p className="text-sm text-muted-foreground">
                  Healthcare requires coordination across medical, business, and
                  tech teams. Lots of meetings.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">15:00</div>
              <div>
                <p className="font-semibold">Project Work</p>
                <p className="text-sm text-muted-foreground">
                  Continue on assigned projects. Healthcare projects often have
                  longer timelines due to regulation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-red-600">17:00</div>
              <div>
                <p className="font-semibold">Documentation</p>
                <p className="text-sm text-muted-foreground">
                  Healthcare requires meticulous documentation. Update reports,
                  logs, and compliance records.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Interview Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not showing empathy
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Healthcare is about people. Show you understand the human
                  impact of your work.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Ignoring regulations
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Healthcare is heavily regulated. Show awareness of compliance
                  and patient privacy (HIPAA-like) requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Being only tech-focused
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Even in health-tech, understand that outcomes matter more than
                  features. Think patient-first.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  No industry knowledge
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Research the company, its products, and the healthcare
                  problems they solve. Generic answers don't work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Questions */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Common Interview Questions
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Why healthcare?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Have a genuine answer. Personal stories (family health, passion
                for impact) resonate well.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                How would you handle patient data?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Show awareness of privacy, consent, and secure handling. Know
                terms like de-identification and anonymization.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                Describe a healthcare challenge you'd solve
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Research common problems: access, affordability, quality. Have
                an informed perspective.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                How do you handle sensitive situations?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Healthcare deals with life and death. Show emotional
                intelligence and composure under pressure.
              </p>
            </div>
          </div>
        </section>

        {/* Application Tips */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Application Tips
          </h2>

          <div className="my-6 space-y-4">
            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Health-Tech:</strong> Showcase tech skills + genuine
                interest in healthcare problems. Side projects in health are a
                big plus.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Pharma:</strong> Domain knowledge matters. Read about
                the specific therapy areas the company focuses on.
              </div>
            </div>

            <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Public Health:</strong> International experience,
                languages, and field work experience are highly valued.
              </div>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Join Healthcare</h2>
          <p>
            Healthcare is recession-proof and deeply meaningful. Whether you're
            medical or non-medical, there's a place for you.
          </p>
          <p>
            The sector is transforming rapidly with technology, creating new
            opportunities for tech, business, and healthcare professionals
            alike.
          </p>
          <p className="text-lg font-semibold text-primary">
            Help people live healthier lives. Start your healthcare journey. 🏥
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
              href="/blog/data-science-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Data Science Internships
            </Link>
            <Link
              href="/blog/research-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Research Internships
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
                Based on insights from healthcare professionals.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
