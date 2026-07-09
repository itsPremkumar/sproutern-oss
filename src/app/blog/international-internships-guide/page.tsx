import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Plane,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Globe,
  DollarSign,
  FileText,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'International Internships for Indian Students',
  description:
    'Land international internships in USA, Europe, Canada, and Singapore. Complete guide to programs, visas, and applications.',
  keywords: [
    'international internship',
    'abroad internship india',
    'usa internship',
    'europe internship',
    'mitacs globalink',
  ],
  openGraph: {
    title: 'International Internships for Indian Students: Complete Guide',
    description: 'Take your career global.',
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
          <div className="mb-4 flex items-center gap-2 text-sky-600">
            <Plane className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Growth
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            International Internships for Indian Students: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Global exposure can transform your career. Here's how to secure
            international internships as an Indian student.
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

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-3xl font-bold">Top Destinations</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                1. Why Go International
              </a>
            </li>
            <li>
              <a
                href="#programs"
                className="text-primary hover:underline"
              >
                2. Top Programs
              </a>
            </li>
            <li>
              <a
                href="#countries"
                className="text-primary hover:underline"
              >
                3. By Country
              </a>
            </li>
            <li>
              <a
                href="#apply"
                className="text-primary hover:underline"
              >
                4. Application Process
              </a>
            </li>
            <li>
              <a
                href="#visa"
                className="text-primary hover:underline"
              >
                5. Visa & Logistics
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
                Many programs are fully funded—travel, stipend, accommodation
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Apply 6-8 months before the internship period</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Strong academic record (7.5+ CGPA) is typically required
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Research experience significantly boosts applications</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Why */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            1. Why Go International
          </h2>

          <p>
            In today's interconnected world, international internship experience
            has become a powerful differentiator for Indian students. According
            to recent surveys, students with international exposure are 3x more
            likely to receive job offers from top-tier companies and command
            40-60% higher starting salaries.
          </p>

          <h3>Career Benefits of International Internships</h3>

          <p>
            An international internship is more than just a line on your
            resume—it's a transformative experience that shapes your
            professional identity and opens doors that remain closed to most
            candidates.
          </p>

          <ul>
            <li>
              <strong>World-Class Research Exposure:</strong> Work alongside
              Nobel laureates and leading researchers at institutions like MIT,
              Stanford, ETH Zurich, and Oxford. Access cutting-edge laboratories
              and resources unavailable in India.
            </li>
            <li>
              <strong>Global Professional Network:</strong> Build relationships
              with mentors, peers, and industry professionals from 50+
              countries. These connections often lead to job referrals, research
              collaborations, and business partnerships.
            </li>
            <li>
              <strong>MS/PhD Application Boost:</strong> Strong letters of
              recommendation from international professors significantly
              increase admission chances. Many students receive direct PhD
              offers from their internship supervisors.
            </li>
            <li>
              <strong>Generous Compensation:</strong> Most funded programs
              provide $1,500-$3,500/month stipend plus travel, accommodation,
              and health insurance—allowing you to save money while gaining
              experience.
            </li>
            <li>
              <strong>Cross-Cultural Competence:</strong> Develop soft skills
              highly valued by multinational corporations: adaptability,
              communication across cultures, and global perspective on
              problem-solving.
            </li>
          </ul>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-3 text-left font-semibold">Benefit</th>
                  <th className="p-3 text-left font-semibold">Impact</th>
                  <th className="p-3 text-left font-semibold">
                    Long-term Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Research Experience</td>
                  <td className="p-3">Publications, patents</td>
                  <td className="p-3">PhD admissions, research careers</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Professional Network</td>
                  <td className="p-3">50+ international contacts</td>
                  <td className="p-3">Job referrals, collaborations</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cultural Exposure</td>
                  <td className="p-3">Adaptability skills</td>
                  <td className="p-3">Global leadership roles</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Financial Benefits</td>
                  <td className="p-3">$5,000-$15,000 saved</td>
                  <td className="p-3">Funding for higher studies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Success Stories from Indian Students</h3>

          <p>
            Thousands of Indian students secure international internships every
            year. Here are some inspiring examples:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-semibold">Priya from IIT Bombay</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Secured MITACS Globalink at University of Toronto. Now pursuing
                PhD at Stanford with full funding. "The internship letter made
                all the difference in my application."
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-semibold">Arjun from NIT Trichy</p>
              <p className="mt-1 text-sm text-muted-foreground">
                DAAD WISE intern at TU Munich. Received pre-placement offer from
                Bosch Germany. "Working in a German lab taught me precision and
                efficiency."
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <p className="font-semibold">Sneha from BITS Pilani</p>
              <p className="mt-1 text-sm text-muted-foreground">
                S.N. Bose Scholar at Caltech. Published 2 papers during
                internship. Now working at Google Research. "Best 3 months of my
                academic life."
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Did You Know?</strong> Over 5,000 Indian students secure
              funded international research internships every year. The
              competition is tough, but with proper preparation, your chances
              are excellent.
            </div>
          </div>
        </section>

        {/* Section 2: Programs */}
        <section
          id="programs"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            2. Top International Internship Programs
          </h2>

          <p>
            The following programs are specifically designed for Indian students
            and offer fully funded or substantially funded opportunities. Each
            program has its own eligibility criteria, application timeline, and
            selection process.
          </p>

          <h3>MITACS Globalink Research Internship (Canada)</h3>

          <p>
            MITACS Globalink is the most popular international internship
            program among Indian students, with over 700 positions available
            annually across 70+ Canadian universities.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Duration</td>
                  <td className="p-3">12 weeks (May-August)</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Stipend</td>
                  <td className="p-3">CAD $6,000 + travel + insurance</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Eligibility</td>
                  <td className="p-3">3rd/4th year undergrad, CGPA 8.0+</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Deadline</td>
                  <td className="p-3">September (for next summer)</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Selection Rate
                  </td>
                  <td className="p-3">~15-20% of applicants</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Application Tips for MITACS:</strong>
          </p>
          <ul>
            <li>
              Apply to all 7 projects (maximum allowed) to maximize chances
            </li>
            <li>
              Choose projects that closely match your research interests and
              skills
            </li>
            <li>Write personalized motivation letters for each project</li>
            <li>Highlight any previous research experience or publications</li>
            <li>
              Get strong recommendation letters from professors who know your
              work well
            </li>
          </ul>

          <h3>DAAD WISE Scholarship (Germany)</h3>

          <p>
            The German Academic Exchange Service (DAAD) offers the Working
            Internships in Science and Engineering (WISE) program for Indian
            students to work at top German research institutions.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Duration</td>
                  <td className="p-3">8-12 weeks</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Stipend</td>
                  <td className="p-3">€934/month + travel allowance</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Eligibility</td>
                  <td className="p-3">
                    Bachelor's students with excellent academics
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Deadline</td>
                  <td className="p-3">November 1 (for next summer)</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Requirements
                  </td>
                  <td className="p-3">
                    Must have a confirmed supervisor at German university
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> For DAAD WISE, you must secure a
              supervisor BEFORE applying. Start emailing German professors 3-4
              months before the deadline. Use the DAAD Research Explorer to find
              professors in your field.
            </div>
          </div>

          <h3>Charpak Lab Scholarship (France)</h3>

          <p>
            Named after Nobel laureate Georges Charpak, this Indo-French program
            supports Indian students pursuing research internships at French
            laboratories and universities.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Duration</td>
                  <td className="p-3">2-3 months</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Stipend</td>
                  <td className="p-3">€545/month + travel grant</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Eligibility</td>
                  <td className="p-3">
                    Engineering/science students with 60%+ marks
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Fields</td>
                  <td className="p-3">Science, engineering, technology</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>S.N. Bose Scholars Program (USA)</h3>

          <p>
            A prestigious Indo-US program that enables Indian students to
            conduct research at top American universities under guidance of
            renowned professors.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Duration</td>
                  <td className="p-3">8-12 weeks (May-July)</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Funding</td>
                  <td className="p-3">
                    Fully funded (travel + stipend + insurance)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Eligibility</td>
                  <td className="p-3">3rd year students, 7.5+ CGPA</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Fields</td>
                  <td className="p-3">
                    Physics, chemistry, biology, engineering
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>More International Programs</h3>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-sky-500 py-2 pl-4">
              <p className="font-bold">
                CERN Summer Student Programme (Switzerland)
              </p>
              <p className="text-muted-foreground">
                8-13 weeks at CERN. Fully funded for physics/engineering
                students. Deadline: January. Highly competitive.
              </p>
            </div>
            <div className="border-l-4 border-sky-500 py-2 pl-4">
              <p className="font-bold">SURF at Caltech (USA)</p>
              <p className="text-muted-foreground">
                10-week summer research. $6,500 stipend + housing for
                international students.
              </p>
            </div>
            <div className="border-l-4 border-sky-500 py-2 pl-4">
              <p className="font-bold">ETH Zurich Summer Research Fellowship</p>
              <p className="text-muted-foreground">
                2-month research internship. CHF 2,600 stipend. For top
                engineering students.
              </p>
            </div>
            <div className="border-l-4 border-sky-500 py-2 pl-4">
              <p className="font-bold">NTU India Connect (Singapore)</p>
              <p className="text-muted-foreground">
                Research attachment at Nanyang Technological University. Travel
                + stipend provided.
              </p>
            </div>
            <div className="border-l-4 border-sky-500 py-2 pl-4">
              <p className="font-bold">
                EPFL Summer Research Programme (Switzerland)
              </p>
              <p className="text-muted-foreground">
                Research at one of Europe's top tech universities. Fully funded,
                12 weeks.
              </p>
            </div>
          </div>

          <h3>Program Comparison at a Glance</h3>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-3 text-left font-semibold">Program</th>
                  <th className="p-3 text-left font-semibold">Country</th>
                  <th className="p-3 text-left font-semibold">Duration</th>
                  <th className="p-3 text-left font-semibold">Monthly Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">MITACS Globalink</td>
                  <td className="p-3">Canada</td>
                  <td className="p-3">12 weeks</td>
                  <td className="p-3">~₹1.3L</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">DAAD WISE</td>
                  <td className="p-3">Germany</td>
                  <td className="p-3">8-12 weeks</td>
                  <td className="p-3">~₹85K</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">S.N. Bose</td>
                  <td className="p-3">USA</td>
                  <td className="p-3">8-12 weeks</td>
                  <td className="p-3">~₹1.5L</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Charpak Lab</td>
                  <td className="p-3">France</td>
                  <td className="p-3">2-3 months</td>
                  <td className="p-3">~₹50K</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">CERN</td>
                  <td className="p-3">Switzerland</td>
                  <td className="p-3">8-13 weeks</td>
                  <td className="p-3">~₹1.8L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Countries */}
        <section
          id="countries"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            3. International Internships by Country
          </h2>

          <p>
            Different countries offer unique advantages for international
            interns. Here's a detailed breakdown of what each destination offers
            and how to approach them.
          </p>

          <h3>🇺🇸 United States</h3>

          <p>
            The USA remains the top destination for Indian students seeking
            research internships, offering access to world-leading universities
            and innovative tech companies.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Top Programs
                  </td>
                  <td className="p-3">
                    S.N. Bose Scholars, IUSSTF, SURF Caltech, REU programs
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Best For</td>
                  <td className="p-3">Research, tech, MS/PhD aspirants</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Visa Type</td>
                  <td className="p-3">J-1 Exchange Visitor Visa</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Average Stipend
                  </td>
                  <td className="p-3">$2,500-$4,000/month</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Top Universities
                  </td>
                  <td className="p-3">MIT, Stanford, Caltech, Berkeley, CMU</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>🇨🇦 Canada</h3>

          <p>
            Canada offers the most organized pathway for Indian students through
            MITACS Globalink, with a high acceptance rate and excellent support
            system.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Top Programs
                  </td>
                  <td className="p-3">
                    MITACS Globalink, direct university applications
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Best For</td>
                  <td className="p-3">
                    Research, engineering, computer science
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Visa Type</td>
                  <td className="p-3">Study/Work Permit or Visitor Visa</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Average Stipend
                  </td>
                  <td className="p-3">CAD $6,000 for 12 weeks</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Top Universities
                  </td>
                  <td className="p-3">
                    UBC, Toronto, McGill, Waterloo, Alberta
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>🇩🇪 Germany</h3>

          <p>
            Germany offers strong engineering and research opportunities with
            excellent stipends. The country is known for its precision in
            manufacturing and cutting-edge automotive and mechanical engineering
            research.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Top Programs
                  </td>
                  <td className="p-3">
                    DAAD WISE, Max Planck institutes, Fraunhofer
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Best For</td>
                  <td className="p-3">
                    Engineering, physics, automotive, manufacturing
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Visa Type</td>
                  <td className="p-3">Schengen Visa (Type C or D)</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Average Stipend
                  </td>
                  <td className="p-3">€861-€1,200/month</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Top Institutions
                  </td>
                  <td className="p-3">
                    TU Munich, RWTH Aachen, TU Berlin, Heidelberg
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>🇸🇬 Singapore</h3>

          <p>
            Singapore offers proximity to India, no language barrier, and
            world-class research facilities. It's an excellent stepping stone
            for students new to international experiences.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Top Programs
                  </td>
                  <td className="p-3">
                    NUS Summer Research, NTU India Connect, A*STAR
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Best For</td>
                  <td className="p-3">CS, engineering, biomedical sciences</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Visa Type</td>
                  <td className="p-3">
                    Student Pass or Training Employment Pass
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Average Stipend
                  </td>
                  <td className="p-3">SGD 1,500-2,500/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>🇨🇭 Switzerland</h3>

          <p>
            Home to CERN, ETH Zurich, and EPFL, Switzerland offers some of the
            most prestigious research internships in the world.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Top Programs
                  </td>
                  <td className="p-3">
                    CERN, ETH Student Summer Research, EPFL
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Best For</td>
                  <td className="p-3">Physics, CS, engineering, mathematics</td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">Visa Type</td>
                  <td className="p-3">
                    Schengen + Swiss National Visa (Type D)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="bg-muted/50 p-3 font-semibold">
                    Average Stipend
                  </td>
                  <td className="p-3">CHF 2,000-3,500/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>🇫🇷 France</h3>

          <p>
            France offers excellent research opportunities through the Charpak
            scholarship and has strong programs in aerospace, nuclear physics,
            and mathematics.
          </p>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Key Opportunities:</p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>• Charpak Lab Scholarship (€545/month + travel)</li>
                <li>• CEA research internships (nuclear physics)</li>
                <li>• CNRS laboratory positions</li>
                <li>• Airbus and Dassault internships (aerospace)</li>
              </ul>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Strategy Tip:</strong> Apply to multiple countries to
              maximize your chances. Programs in different countries often have
              different deadlines, so you can apply to several without
              conflicts.
            </div>
          </div>
        </section>

        {/* Section 4: Apply */}
        <section
          id="apply"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Application Process
          </h2>

          <ol>
            <li>
              <strong>Research programs:</strong> Identify 3-5 programs matching
              your profile
            </li>
            <li>
              <strong>Check eligibility:</strong> CGPA, year of study, subject
              area
            </li>
            <li>
              <strong>Prepare documents:</strong> Transcripts, SOP, LORs, resume
            </li>
            <li>
              <strong>Cold email (if needed):</strong> Contact professors for
              direct opportunities
            </li>
            <li>
              <strong>Apply early:</strong> Most deadlines are
              September-November for summer
            </li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> For MITACS, apply to 7 projects (maximum
              allowed). More applications = higher chances.
            </div>
          </div>
        </section>

        {/* Section 5: Visa */}
        <section
          id="visa"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            5. Visa & Logistics
          </h2>

          <ul>
            <li>
              <strong>Visa:</strong> Most programs provide visa support/letters
            </li>
            <li>
              <strong>Funding:</strong> Many are fully funded (stipend + travel
              + accommodation)
            </li>
            <li>
              <strong>Insurance:</strong> Usually provided or reimbursed
            </li>
            <li>
              <strong>Timeline:</strong> Apply for visa 2-3 months before
              departure
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
            6. Frequently Asked Questions
          </h2>

          <p>
            Here are answers to the most common questions Indian students have
            about international internships.
          </p>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                What CGPA do I need for international internships?
              </p>
              <p className="mt-2 text-muted-foreground">
                Most funded programs require a minimum of 7.5-8.0 CGPA on a
                10-point scale. However, strong research experience,
                publications, or excellent projects can compensate for slightly
                lower grades. For highly competitive programs like CERN or S.N.
                Bose, aim for 8.5+ CGPA.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Can I get an international internship without prior research
                experience?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes, it's possible but more challenging. Focus on highlighting
                strong academic coursework, personal projects, and genuine
                interest in your field. Consider doing a research project with a
                professor at your college first to strengthen your profile.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                When should I start preparing for applications?
              </p>
              <p className="mt-2 text-muted-foreground">
                Start preparing at least 6-8 months before deadlines. Most
                summer internship applications open in September-November. Use
                the previous year to build your research profile, improve your
                CGPA, and cultivate relationships with professors for
                recommendation letters.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                How do I find professors to email for direct internships?
              </p>
              <p className="mt-2 text-muted-foreground">
                Use Google Scholar to find researchers whose work interests you.
                Check university faculty pages and look for professors who have
                recently published in your area. DAAD Research Explorer is
                excellent for finding German professors. LinkedIn can also help
                identify active researchers.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                What is the typical acceptance rate for these programs?
              </p>
              <p className="mt-2 text-muted-foreground">
                Acceptance rates vary: MITACS Globalink (15-20%), DAAD WISE
                (20-25%), S.N. Bose (10-15%), CERN (5-8%). Apply to multiple
                programs to increase your chances. Many students apply to 4-5
                programs and secure at least one.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">Do I need to know the local language?</p>
              <p className="mt-2 text-muted-foreground">
                For research internships, English is usually sufficient. Most
                labs operate in English even in non-English speaking countries
                like Germany, France, or Switzerland. However, knowing basic
                phrases of the local language enhances your daily life
                experience.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">Can I apply during my final year?</p>
              <p className="mt-2 text-muted-foreground">
                Most programs prefer 3rd or pre-final year students. Some
                programs accept final year students, but the timing may conflict
                with placement season or exams. Check each program's eligibility
                criteria carefully.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                What should I include in my Statement of Purpose?
              </p>
              <p className="mt-2 text-muted-foreground">
                Your SOP should cover: your academic background and
                achievements, relevant research experience or projects, why
                you're interested in this specific program/professor, how this
                internship fits your career goals, and what unique perspective
                you bring. Keep it concise (1-2 pages) and specific.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Will an international internship guarantee MS/PhD admission?
              </p>
              <p className="mt-2 text-muted-foreground">
                While not a guarantee, a strong international research
                internship with a good recommendation letter significantly
                boosts your application. Many students receive direct PhD offers
                from their internship supervisors or their referral network.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                How much money can I save during the internship?
              </p>
              <p className="mt-2 text-muted-foreground">
                With careful budgeting, you can save $1,500-$4,000 during a
                12-week funded internship. Accommodation and travel are usually
                covered separately. Your stipend primarily covers food and
                personal expenses. Many interns return with savings that fund
                their graduate school applications.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Go Global</h2>
          <p>
            International internships open doors that stay open for life. Start
            preparing early, apply widely, and don't be afraid of rejection.
          </p>
          <p className="text-lg font-semibold text-primary">
            The world is your classroom. Explore it. 🌍
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/research-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Research Internships
            </Link>
            <Link
              href="/blog/cold-email-templates-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cold Email Templates
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
                Based on insights from students who secured international
                internships.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
