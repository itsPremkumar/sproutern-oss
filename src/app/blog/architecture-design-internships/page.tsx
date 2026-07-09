import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Ruler,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  PenTool,
  Building,
  Award,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Architecture & Design Internships: Complete Guide',
  description:
    'Break into architecture and design with internships at top firms. Guide for architecture, interior design, and urban planning students.',
  keywords: [
    'architecture internship',
    'interior design internship',
    'urban planning internship',
    'design intern',
    'architecture career',
  ],
  openGraph: {
    title: 'Architecture & Design Internships: Complete Guide',
    description: 'Build your design career.',
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
          <div className="mb-4 flex items-center gap-2 text-teal-600">
            <Ruler className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Architecture & Design Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Design shapes how we live. Learn how to secure internships at top
            architecture and design firms.
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
                1. Types of Design Internships
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Required Skills & Tools
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-primary hover:underline"
              >
                3. Portfolio Tips
              </a>
            </li>
            <li>
              <a
                href="#firms"
                className="text-primary hover:underline"
              >
                4. Top Firms
              </a>
            </li>
            <li>
              <a
                href="#apply"
                className="text-primary hover:underline"
              >
                5. Application Process
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
              <span>Portfolio is everything—quality over quantity</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Learn software tools beyond what college teaches</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Smaller firms offer more hands-on experience</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Site visits and practical exposure are invaluable</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            1. Types of Design Internships
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-teal-600">Architecture</p>
              <p className="text-muted-foreground">
                Building design, drafting, site supervision
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-teal-600">Interior Design</p>
              <p className="text-muted-foreground">
                Space planning, material selection, renders
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-teal-600">Urban Planning</p>
              <p className="text-muted-foreground">
                City development, policy, sustainability
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-teal-600">Landscape Design</p>
              <p className="text-muted-foreground">
                Gardens, public spaces, environmental design
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            2. Required Skills & Tools
          </h2>

          <h3>Software Tools</h3>
          <ul>
            <li>
              <strong>AutoCAD:</strong> Industry standard for drafting
            </li>
            <li>
              <strong>SketchUp:</strong> Quick 3D modeling
            </li>
            <li>
              <strong>Revit:</strong> BIM modeling (increasingly required)
            </li>
            <li>
              <strong>3ds Max/V-Ray:</strong> Photorealistic renders
            </li>
            <li>
              <strong>Photoshop/Illustrator:</strong> Presentation graphics
            </li>
          </ul>

          <h3>Soft Skills</h3>
          <ul>
            <li>Design thinking and problem-solving</li>
            <li>Client communication</li>
            <li>Time management (projects have deadlines)</li>
            <li>Collaboration with engineers and contractors</li>
          </ul>
        </section>

        {/* Section 3: Portfolio */}
        <section
          id="portfolio"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            3. Portfolio Tips
          </h2>

          <ul>
            <li>
              <strong>Quality over quantity:</strong> 5-10 strong projects, not
              20 weak ones
            </li>
            <li>
              <strong>Show process:</strong> Sketches, iterations, final output
            </li>
            <li>
              <strong>Include diverse work:</strong> Residential, commercial,
              academic
            </li>
            <li>
              <strong>Digital format:</strong> PDF + online portfolio (Behance,
              Issuu)
            </li>
            <li>
              <strong>Tailor it:</strong> Customize for each firm's style
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Include hand sketches—they show original
              thinking that software can't replicate.
            </div>
          </div>
        </section>

        {/* Section 4: Firms */}
        <section
          id="firms"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Top Firms
          </h2>

          <h3>Large Firms</h3>
          <p>
            Hafeez Contractor, CP Kukreja, Morphogenesis, Perkins Eastman, RSP
          </p>

          <h3>Boutique Studios</h3>
          <p>
            Studio Mumbai, Sameep Padora, Anagram Architects, Khosla Associates
          </p>

          <h3>Interior Design</h3>
          <p>Livspace, HomeLane, Bonito Designs, Studio A</p>
        </section>

        {/* Section 5: Apply */}
        <section
          id="apply"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Application Process
          </h2>

          <ol>
            <li>Research firms whose work you admire</li>
            <li>Prepare a tailored portfolio (10-15 pages max)</li>
            <li>Email with brief introduction + portfolio link/attachment</li>
            <li>Follow up after 1-2 weeks if no response</li>
            <li>Be flexible on timing and location</li>
          </ol>
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
              <p className="font-bold">Are architecture internships paid?</p>
              <p className="mt-2 text-muted-foreground">
                Varies widely. Large firms may pay ₹10K-25K/month. Boutique
                studios may be unpaid but offer better learning.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How important is college brand?</p>
              <p className="mt-2 text-muted-foreground">
                Portfolio matters more. Strong work from a lesser-known college
                beats weak work from a top college.
              </p>
            </div>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of an
            Architecture Intern
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-4 dark:bg-teal-950">
              <p className="font-semibold">9:00 AM - Morning Briefing</p>
              <p className="text-sm text-muted-foreground">
                Team meeting to review project status. Learn about client
                feedback and today's priorities.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-4 dark:bg-teal-950">
              <p className="font-semibold">10:00 AM - Drafting Work</p>
              <p className="text-sm text-muted-foreground">
                Working on AutoCAD drawings for a residential project. Creating
                floor plans and elevations.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-4 dark:bg-teal-950">
              <p className="font-semibold">1:00 PM - Lunch with Team</p>
              <p className="text-sm text-muted-foreground">
                Informal discussions about design trends, site visits, and
                project challenges.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-4 dark:bg-teal-950">
              <p className="font-semibold">2:00 PM - Site Visit</p>
              <p className="text-sm text-muted-foreground">
                Accompanying a senior architect to check construction progress.
                Taking photos and notes.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-4 dark:bg-teal-950">
              <p className="font-semibold">5:00 PM - 3D Modeling</p>
              <p className="text-sm text-muted-foreground">
                Working on SketchUp model for client presentation. Adding
                materials and lighting.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-4 dark:bg-teal-950">
              <p className="font-semibold">7:00 PM - Wrap Up</p>
              <p className="text-sm text-muted-foreground">
                Saving work, updating task list for tomorrow. Sometimes staying
                late for deadline rushes.
              </p>
            </div>
          </div>
        </section>

        {/* Salary Expectations */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Salary Expectations
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Firm Type
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Intern Stipend
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Entry Level
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    5+ Years
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Large Firms</td>
                  <td className="border p-3">₹15-25K/month</td>
                  <td className="border p-3">₹4-7 LPA</td>
                  <td className="border p-3">₹12-20 LPA</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Boutique Studios</td>
                  <td className="border p-3">₹0-15K/month</td>
                  <td className="border p-3">₹3-5 LPA</td>
                  <td className="border p-3">₹8-15 LPA</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Interior Design</td>
                  <td className="border p-3">₹8-20K/month</td>
                  <td className="border p-3">₹3-6 LPA</td>
                  <td className="border p-3">₹10-18 LPA</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Urban Planning</td>
                  <td className="border p-3">₹10-20K/month</td>
                  <td className="border p-3">₹4-8 LPA</td>
                  <td className="border p-3">₹15-25 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Intern Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Portfolio with too many projects
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Quality beats quantity. 5 excellent projects beat 20 mediocre
                  ones. Edit ruthlessly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Only learning software in college
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Firms expect you to know tools already. Self-learn Revit,
                  V-Ray, and Lumion before applying.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not asking questions on site
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Site visits are golden learning opportunities. Ask about
                  materials, construction methods, challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Ignoring construction knowledge
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Design without understanding construction is incomplete. Learn
                  how buildings are actually built.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Generic applications
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Each firm has a style. Research their work and tailor your
                  portfolio to match their aesthetic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Career Paths in Architecture
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Traditional Practice</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Intern → Junior Architect → Project Architect → Associate →
                Principal
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Specialization</p>
              <p className="mt-2 text-sm text-muted-foreground">
                BIM Specialist, Sustainability Consultant, Heritage
                Conservation, Facade Designer
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Real Estate Development</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Architect → Project Manager → Development Manager → VP
                Development
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Academia</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Masters → Teaching Assistant → Research → Professor
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Own Practice</p>
              <p className="mt-2 text-sm text-muted-foreground">
                5-10 years experience → Start own studio → Build reputation →
                Award-winning firm
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Portfolio quality changed everything..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I redid my portfolio with just 6 projects, showing process from
                concept to final renders. Got callbacks from 4 out of 5 firms I
                applied to." — Mehak, SPA Delhi
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Boutique studio experience was transformative..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Chose an unpaid internship at Studio Mumbai over paid offers.
                Got to work on real projects from day one. Best decision ever."
                — Rohan, IIT Kharagpur
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Cold email to my dream firm worked..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Researched the principal's talks, mentioned specific projects I
                admired. Got a personal reply and an internship offer." —
                Ananya, CEPT
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
                Should I choose a large firm or boutique studio?
              </h3>
              <p className="text-muted-foreground">
                Large firms offer structure and big projects. Boutique studios
                offer hands-on experience and closer mentorship. Early career,
                boutique often teaches more.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How important are site visits during internship?
              </h3>
              <p className="text-muted-foreground">
                Extremely important. Classroom design is incomplete without
                understanding construction. Always volunteer for site visits.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Do I need a masters degree in architecture?
              </h3>
              <p className="text-muted-foreground">
                For practicing architecture in India, B.Arch is sufficient.
                Masters helps for academia, specialization, or international
                practice.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I'm from a tier-2 architecture college?
              </h3>
              <p className="text-muted-foreground">
                Portfolio matters more than college name. Many successful
                architects come from lesser-known schools. Focus on your work.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I learn Revit or stick with AutoCAD?
              </h3>
              <p className="text-muted-foreground">
                Learn both. AutoCAD remains standard for 2D drafting. Revit is
                increasingly required for BIM projects. Being proficient in both
                makes you more employable.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I find good architecture firms to apply to?
              </h3>
              <p className="text-muted-foreground">
                Follow ArchDaily, Dezeen, and Indian Architect & Builder. Note
                firms whose work you admire. Research their team size and
                project types before applying.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Portfolio Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Less than 15 pages total</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>5-10 high-quality projects only</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Shows design process, not just final renders</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Includes hand sketches and concept development</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Diverse project types (residential, commercial, etc.)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Clear labels and brief descriptions</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Available as PDF and online (Behance/Issuu)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Tailored to target firm's aesthetic</span>
            </div>
          </div>
        </section>

        {/* Tools Comparison */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            Software Tools Comparison
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Software
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Best For
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Learning Curve
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Industry Demand
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">AutoCAD</td>
                  <td className="border p-3">2D drafting, working drawings</td>
                  <td className="border p-3">Medium</td>
                  <td className="border p-3">Essential</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Revit</td>
                  <td className="border p-3">BIM, documentation</td>
                  <td className="border p-3">High</td>
                  <td className="border p-3">Increasing</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">SketchUp</td>
                  <td className="border p-3">Quick 3D modeling</td>
                  <td className="border p-3">Low</td>
                  <td className="border p-3">Common</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">3ds Max</td>
                  <td className="border p-3">Photorealistic renders</td>
                  <td className="border p-3">High</td>
                  <td className="border p-3">Specialized</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Lumion</td>
                  <td className="border p-3">Quick visualization</td>
                  <td className="border p-3">Low</td>
                  <td className="border p-3">Growing</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Rhino + Grasshopper
                  </td>
                  <td className="border p-3">Parametric design</td>
                  <td className="border p-3">High</td>
                  <td className="border p-3">Niche</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Design Your Career</h2>
          <p>
            Architecture and design internships are the foundation of a
            successful design career. Build that portfolio, learn the tools, and
            start applying.
          </p>
          <p>
            Remember: architecture is a long journey. The 5-year degree is just
            the beginning. Every project, every site visit, every late night
            adds to your understanding of space and design.
          </p>
          <p className="text-lg font-semibold text-primary">
            Great buildings start with great learning. Start yours today. 🏛️
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/ui-ux-design-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              UI/UX Design Internships
            </Link>
            <Link
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Building
            </Link>
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Internship Guide
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
                Based on insights from architects and design professionals.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
