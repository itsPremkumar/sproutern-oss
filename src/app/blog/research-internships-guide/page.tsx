import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Search,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  FlaskConical,
  GraduationCap,
  FileText,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research Internships: Complete Guide',
  description:
    'Break into research with this comprehensive guide. Learn about academic, industry, and think tank research internships.',
  keywords: [
    'research internship',
    'academic research intern',
    'PhD prep',
    'research assistant',
    'think tank internship',
  ],
  openGraph: {
    title: 'Research Internships: Complete Guide',
    description: 'Start your research career.',
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
          <div className="mb-4 flex items-center gap-2 text-cyan-600">
            <FlaskConical className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Research Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Research internships are the gateway to academia and R&D careers.
            Learn how to secure meaningful research experience.
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

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                1. Types of Research Internships
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Required Skills
              </a>
            </li>
            <li>
              <a
                href="#find"
                className="text-primary hover:underline"
              >
                3. How to Find Opportunities
              </a>
            </li>
            <li>
              <a
                href="#programs"
                className="text-primary hover:underline"
              >
                4. Top Programs
              </a>
            </li>
            <li>
              <a
                href="#apply"
                className="text-primary hover:underline"
              >
                5. Application Tips
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
                Research experience is essential for PhD/MS applications
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Cold emailing professors works—personalize each message
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Publication experience significantly boosts applications
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Industry research pays more but academic research has more
                freedom
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
            <Search className="h-6 w-6 text-primary" />
            1. Types of Research Internships
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-cyan-500 py-2 pl-4">
              <p className="font-bold">Academic Research</p>
              <p className="text-muted-foreground">
                Work with professors at universities on fundamental research
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 py-2 pl-4">
              <p className="font-bold">Industry R&D</p>
              <p className="text-muted-foreground">
                Research labs at companies (Google Research, Microsoft Research)
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 py-2 pl-4">
              <p className="font-bold">Think Tanks</p>
              <p className="text-muted-foreground">
                Policy research at organizations like Brookings, NITI Aayog
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 py-2 pl-4">
              <p className="font-bold">Government Labs</p>
              <p className="text-muted-foreground">
                ISRO, DRDO, BARC for science and engineering research
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
            <GraduationCap className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>Literature Review:</strong> Finding and synthesizing
              existing research
            </li>
            <li>
              <strong>Critical Thinking:</strong> Asking the right questions
            </li>
            <li>
              <strong>Academic Writing:</strong> Structured, clear, precise
            </li>
            <li>
              <strong>Domain Knowledge:</strong> Deep understanding of your
              field
            </li>
          </ul>

          <h3>Field-Specific</h3>
          <ul>
            <li>
              <strong>STEM:</strong> Lab techniques, programming, data analysis
            </li>
            <li>
              <strong>Social Sciences:</strong> Survey design, statistical
              methods
            </li>
            <li>
              <strong>Humanities:</strong> Archival research, qualitative
              analysis
            </li>
          </ul>
        </section>

        {/* Section 3: Find */}
        <section
          id="find"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            3. How to Find Opportunities
          </h2>

          <ul>
            <li>
              <strong>Cold Email Professors:</strong> Research their work and
              show genuine interest
            </li>
            <li>
              <strong>Research Programs:</strong> Apply to formal summer
              programs
            </li>
            <li>
              <strong>College Professors:</strong> Start with faculty at your
              own institution
            </li>
            <li>
              <strong>LinkedIn:</strong> Connect with researchers and ask about
              opportunities
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Read 2-3 recent papers by the professor
              before emailing. Mention specific insights or questions about
              their work.
            </div>
          </div>
        </section>

        {/* Section 4: Programs */}
        <section
          id="programs"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            4. Top Programs
          </h2>

          <h3>India</h3>
          <ul>
            <li>IASc-INSA-NASI Summer Fellowship</li>
            <li>IITB Research Internship Award (IRIA)</li>
            <li>IISC Summer Research Fellowship</li>
            <li>TIFR Visiting Students Research Program</li>
          </ul>

          <h3>International</h3>
          <ul>
            <li>MITACS Globalink (Canada)</li>
            <li>DAAD WISE (Germany)</li>
            <li>Charpak Lab Scholarship (France)</li>
            <li>S.N. Bose Scholars Program (USA)</li>
          </ul>
        </section>

        {/* Section 5: Apply */}
        <section
          id="apply"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Application Tips
          </h2>

          <ul>
            <li>Start applications 4-6 months before the internship period</li>
            <li>Tailor your SOP to each program/professor</li>
            <li>Highlight any prior research experience</li>
            <li>Include relevant coursework and projects</li>
            <li>Get strong recommendation letters from faculty</li>
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
                What GPA do I need for research internships?
              </p>
              <p className="mt-2 text-muted-foreground">
                Most programs expect 7.5+ CGPA, but demonstrated interest and
                relevant projects can compensate for lower grades.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I get paid for research internships?
              </p>
              <p className="mt-2 text-muted-foreground">
                Many programs offer stipends (₹10K-50K/month for Indian
                programs, more for international). Industry research pays more.
              </p>
            </div>
          </div>
        </section>

        {/* Cold Email Template */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Sample Cold Email to Professors
          </h2>

          <div className="my-6 rounded-lg border bg-muted p-5">
            <p className="mb-3 text-sm text-muted-foreground">
              <strong>Subject:</strong> Research Intern Application - [Your
              Name] - [Specific Research Area]
            </p>
            <div className="space-y-3 text-sm">
              <p>Dear Professor [Name],</p>
              <p>
                I am [Name], a [Year] student pursuing [Degree] at [University].
                I came across your work on [specific paper/project] and was
                particularly intrigued by [specific finding/approach].
              </p>
              <p>
                I have relevant experience in [relevant skill/project] and am
                especially interested in [specific aspect of their research]. I
                believe this aligns well with my interest in [broader field].
              </p>
              <p>
                I have attached my CV and transcript. I would be grateful for
                the opportunity to contribute to your research group this
                summer. I am flexible on dates and would be happy to work on any
                project you see fit.
              </p>
              <p>
                Thank you for considering my application. I look forward to
                hearing from you.
              </p>
              <p>
                Best regards,
                <br />
                [Your Name]
                <br />
                [Email] | [Phone] | [LinkedIn]
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Key Tips:</strong> Keep it under 200 words. Mention 1-2
              specific papers. Show you understand their research. Send during
              business hours (their timezone).
            </div>
          </div>
        </section>

        {/* SOP Structure */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Statement of Purpose Structure
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Para 1: The Hook</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Start with what sparked your research interest. A specific
                moment, experience, or question that drives you.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Para 2: Your Background</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Relevant coursework, projects, and skills. Show progression in
                your interest and capabilities.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Para 3: Previous Research</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Detail any research experience. What you contributed, learned,
                and how it shaped your interests.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                Para 4: Why This Professor/Program
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Specific reasons why their work excites you. Reference their
                papers and explain how you can contribute.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Para 5: Future Goals</p>
              <p className="mt-2 text-sm text-muted-foreground">
                How this internship fits into your career path. Even if you're
                unsure about PhD, articulate research-related goals.
              </p>
            </div>
          </div>
        </section>

        {/* Program Comparison */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Research Program Comparison
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Program
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Stipend
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Duration
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Deadline
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">
                    IASc Summer Fellowship
                  </td>
                  <td className="border p-3">₹5K-8K/month</td>
                  <td className="border p-3">2 months</td>
                  <td className="border p-3">November</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">MITACS Globalink</td>
                  <td className="border p-3">CAD 6K + travel</td>
                  <td className="border p-3">12 weeks</td>
                  <td className="border p-3">September</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">DAAD WISE</td>
                  <td className="border p-3">€850/month</td>
                  <td className="border p-3">2-3 months</td>
                  <td className="border p-3">November</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    S.N. Bose Scholars
                  </td>
                  <td className="border p-3">Fully funded</td>
                  <td className="border p-3">8-10 weeks</td>
                  <td className="border p-3">October</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">TIFR VSRP</td>
                  <td className="border p-3">₹17K/month</td>
                  <td className="border p-3">2 months</td>
                  <td className="border p-3">February</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Research Fields */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <FlaskConical className="h-6 w-6 text-primary" />
            Hot Research Areas
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-cyan-600">Computer Science</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Large Language Models & AI Safety</li>
                <li>• Quantum Computing</li>
                <li>• Federated Learning & Privacy</li>
                <li>• Computer Vision & Robotics</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-cyan-600">Life Sciences</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Computational Biology & Drug Discovery</li>
                <li>• Gene Editing (CRISPR)</li>
                <li>• Neuroscience & Brain-Computer Interfaces</li>
                <li>• Climate Biology & Sustainability</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-cyan-600">Social Sciences</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Behavioral Economics</li>
                <li>• Public Policy & Governance</li>
                <li>• Education Technology Research</li>
                <li>• Development Economics</li>
              </ul>
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
                How many professors should I email?
              </h3>
              <p className="text-muted-foreground">
                Aim for 30-50 personalized emails. Expect a 5-10% response rate.
                Quality matters more than quantity—generic emails get ignored.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                When should I start applying for summer internships?
              </h3>
              <p className="text-muted-foreground">
                Start 6-8 months ahead. For summer internships, begin in
                October-November. For formal programs, check deadlines—most are
                in September-December.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Does college tier matter for research?
              </h3>
              <p className="text-muted-foreground">
                Less than corporate jobs, but it still matters. Strong projects,
                good academics, and genuine interest can overcome college brand.
                Publications from any college are valued.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I get a publication as an undergrad?
              </h3>
              <p className="text-muted-foreground">
                Start with a 6+ month research project. Work closely with your
                mentor and aim for workshop papers first. Conference papers and
                journals come with more experience.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is industry research better than academic?
              </h3>
              <p className="text-muted-foreground">
                Different goals. Industry pays more and has more resources but
                is product-focused. Academic research offers more freedom but
                lower pay. Both are valuable experiences.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I get LOR from research internships?
              </h3>
              <p className="text-muted-foreground">
                Yes, and they're very valuable. A strong recommendation from a
                known professor significantly boosts PhD applications. Make sure
                to contribute meaningfully to earn a strong letter.
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
            <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5 dark:bg-cyan-950">
              <p className="font-semibold text-cyan-900 dark:text-cyan-100">
                "From tier-3 college to MIT PhD..."
              </p>
              <p className="mt-2 text-sm text-cyan-800 dark:text-cyan-200">
                "I spent 6 months emailing 40+ professors. Got 3 responses, 1
                accepted me. That summer at CMU led to a publication, which
                helped me get into MIT's PhD program." — Ananya, now at MIT
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5 dark:bg-cyan-950">
              <p className="font-semibold text-cyan-900 dark:text-cyan-100">
                "MITACS changed my trajectory..."
              </p>
              <p className="mt-2 text-sm text-cyan-800 dark:text-cyan-200">
                "Applied for MITACS Globalink in 3rd year. Worked at UBC on ML
                research. The experience and recommendation letter were crucial
                for my MS admits. Now at Google Research." — Rahul
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5 dark:bg-cyan-950">
              <p className="font-semibold text-cyan-900 dark:text-cyan-100">
                "Starting with local professors works..."
              </p>
              <p className="mt-2 text-sm text-cyan-800 dark:text-cyan-200">
                "Started research with a professor at my own college in 2nd
                year. Built skills and a paper. Used that as a base to get DAAD
                WISE in 4th year. Now doing PhD at ETH Zurich." — Priya
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Research Internship Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Identified 10+ professors whose work interests you</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Read recent papers from target professors</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have strong academics (7.5+ CGPA)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have relevant projects or coursework</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>CV is updated and research-focused</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have faculty who can write LORs</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>SOP drafts are ready for customization</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Know deadlines for target programs</span>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Best Resources for Research Prep
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Finding Papers</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Google Scholar (search and track citations)</li>
                <li>• Semantic Scholar (AI-powered paper discovery)</li>
                <li>• arXiv (preprints in CS, Physics, Math)</li>
                <li>• ResearchGate (connect with researchers)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Skills Building</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Research Methods courses (Coursera)</li>
                <li>• Academic Writing (Purdue OWL)</li>
                <li>• LaTeX (Overleaf tutorials)</li>
                <li>• Literature review techniques</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Communities</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• r/gradadmissions (Reddit)</li>
                <li>• GradCafe forums</li>
                <li>• Twitter Academic (follow researchers)</li>
                <li>• LinkedIn research groups</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of a
            Research Intern
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-cyan-600">9:00</div>
              <div>
                <p className="font-semibold">Lab Meeting / Check-in</p>
                <p className="text-sm text-muted-foreground">
                  Weekly lab meetings to share progress, discuss papers, and get
                  feedback from the group.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-cyan-600">10:00</div>
              <div>
                <p className="font-semibold">Literature Review</p>
                <p className="text-sm text-muted-foreground">
                  Read and annotate relevant papers. Understand the current
                  state of your research area.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-cyan-600">12:00</div>
              <div>
                <p className="font-semibold">Experiments / Coding</p>
                <p className="text-sm text-muted-foreground">
                  Run experiments, collect data, or write code for your project.
                  This is the core work.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-cyan-600">15:00</div>
              <div>
                <p className="font-semibold">Advisor Meeting</p>
                <p className="text-sm text-muted-foreground">
                  1-on-1 with your mentor to discuss progress, challenges, and
                  next steps. Prepare questions beforehand.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-cyan-600">16:30</div>
              <div>
                <p className="font-semibold">Documentation</p>
                <p className="text-sm text-muted-foreground">
                  Log your work, update notebooks, write methodology. Good
                  documentation is essential for research.
                </p>
              </div>
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
                  Generic cold emails
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  "I am interested in research" tells nothing. Reference
                  specific papers and findings from their work.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Emailing too many from same university
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Professors often talk to each other. Mass emails to a
                  department are obvious and unprofessional.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not following up
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Professors are busy. A polite follow-up 2-3 weeks later is
                  appropriate and expected.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Ignoring local opportunities
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Your own college professors are easier to access. Build
                  experience locally first, then aim higher.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Timeline */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            Application Timeline
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-600">
                Aug
              </div>
              <div>
                <p className="font-semibold">Start Preparing</p>
                <p className="text-sm text-muted-foreground">
                  Identify target professors, start reading their papers, update
                  CV.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-600">
                Sep
              </div>
              <div>
                <p className="font-semibold">Apply to MITACS & S.N. Bose</p>
                <p className="text-sm text-muted-foreground">
                  These have early deadlines. Start formal program applications.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-600">
                Oct-Nov
              </div>
              <div>
                <p className="font-semibold">Cold Email Campaign</p>
                <p className="text-sm text-muted-foreground">
                  Send personalized emails. Apply to DAAD WISE, IASc fellowship.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-600">
                Dec-Jan
              </div>
              <div>
                <p className="font-semibold">Follow Up & Plan B</p>
                <p className="text-sm text-muted-foreground">
                  Follow up on emails, apply to more professors, consider local
                  research options.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-600">
                Feb
              </div>
              <div>
                <p className="font-semibold">Finalize</p>
                <p className="text-sm text-muted-foreground">
                  Confirm position, arrange logistics (visa, travel, housing).
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Start Your Research Journey</h2>
          <p>
            Research internships are the foundation of academic and R&D careers.
            Start early, email professors, and don't be discouraged by
            rejections.
          </p>
          <p>
            The path to research is a marathon, not a sprint. Every rejection
            teaches you something, and every small project builds toward bigger
            opportunities.
          </p>
          <p className="text-lg font-semibold text-primary">
            Every great discovery started with curiosity. Follow yours. 🔬
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/cold-email-templates-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cold Email Templates
            </Link>
            <Link
              href="/blog/data-science-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Data Science Internships
            </Link>
            <Link
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Building
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
                Based on insights from researchers at IITs and international
                universities.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
