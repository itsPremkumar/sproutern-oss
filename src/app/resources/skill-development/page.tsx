import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  PenTool,
  BarChart,
  Users,
  Brain,
  Globe,
  CheckCircle,
  BookOpen,
  Target,
  Lightbulb,
  Clock,
  Award,
  ExternalLink,
  TrendingUp,
} from 'lucide-react';

export const metadata = getPageSEO('skillDevelopment');

export default function SkillDevelopmentPage() {
  const schemas = getPageSchema('skillDevelopment');

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <TrendingUp className="h-4 w-4" />
          Skills Guide
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          In-Demand Skills
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          The job market is evolving rapidly. Stay ahead of the curve by
          mastering the technical and soft skills that top startups are looking
          for.
        </p>
      </div>

      {/* Stats Section */}
      <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">85%</p>
          <p className="text-sm text-muted-foreground">
            Jobs require digital skills
          </p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">40%</p>
          <p className="text-sm text-muted-foreground">
            Skills obsolete by 2027
          </p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">50%</p>
          <p className="text-sm text-muted-foreground">
            Workers need reskilling
          </p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">3-6</p>
          <p className="text-sm text-muted-foreground">
            Months to learn new skill
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Skills Grid */}
        <section className="mb-16">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Top Skill Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Tech & Development</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">React/Next.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Cloud (AWS)</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Full-stack development and cloud computing remain top
                priorities. AI integration skills are becoming essential.
              </p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>📚 Free: freeCodeCamp, The Odin Project</p>
                <p>💰 Avg Salary: ₹8-25 LPA</p>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Data & Analytics</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Tableau</Badge>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Companies need professionals who can interpret data to drive
                decision-making and strategy.
              </p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>📚 Free: Kaggle, Google Analytics Cert</p>
                <p>💰 Avg Salary: ₹6-20 LPA</p>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
                <PenTool className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Design & Creative</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Figma</Badge>
                <Badge variant="secondary">UI/UX</Badge>
                <Badge variant="secondary">Motion Design</Badge>
                <Badge variant="secondary">Branding</Badge>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                User experience is a key differentiator. Visual storytelling and
                interactive design are in high demand.
              </p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>📚 Free: Google UX Cert, Figma tutorials</p>
                <p>💰 Avg Salary: ₹5-18 LPA</p>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Digital Marketing</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">SEO</Badge>
                <Badge variant="secondary">Content Strategy</Badge>
                <Badge variant="secondary">Social Media</Badge>
                <Badge variant="secondary">Paid Ads</Badge>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Growth hacking and organic reach strategies are vital for
                startups operating on lean budgets.
              </p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>📚 Free: HubSpot Academy, Google Ads Cert</p>
                <p>💰 Avg Salary: ₹4-15 LPA</p>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">
                Leadership & Management
              </h3>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Project Management</Badge>
                <Badge variant="secondary">Agile/Scrum</Badge>
                <Badge variant="secondary">People Management</Badge>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                The ability to lead teams, manage projects, and communicate
                vision is crucial as you advance.
              </p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>📚 Certs: PMP, Scrum Master (CSM)</p>
                <p>💰 Avg Salary: ₹12-35 LPA</p>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Soft Skills</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Communication</Badge>
                <Badge variant="secondary">Problem Solving</Badge>
                <Badge variant="secondary">Adaptability</Badge>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Often more important than technical skills. Startups value
                resilience and ability to learn quickly.
              </p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>📚 Practice: Toastmasters, Mock Interviews</p>
                <p>💰 Impact: 15-25% salary boost</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Roadmaps */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Skill Learning Roadmaps
          </h2>
          <p>
            Follow these structured paths to go from beginner to job-ready in
            3-6 months:
          </p>

          <div className="not-prose space-y-6">
            {[
              {
                title: 'Full-Stack Web Development',
                duration: '4-6 months',
                steps: [
                  'Month 1: HTML, CSS, JavaScript fundamentals',
                  'Month 2: React.js + responsive design',
                  'Month 3: Node.js, Express, REST APIs',
                  'Month 4: Database (MongoDB/PostgreSQL)',
                  'Month 5-6: Build 3 portfolio projects',
                ],
                resources: [
                  'freeCodeCamp',
                  'The Odin Project',
                  'Full Stack Open',
                ],
              },
              {
                title: 'Data Science & ML',
                duration: '5-6 months',
                steps: [
                  'Month 1: Python + Statistics basics',
                  'Month 2: Pandas, NumPy, Data Cleaning',
                  'Month 3: Visualization (Matplotlib, Seaborn)',
                  'Month 4: Scikit-learn, ML algorithms',
                  'Month 5-6: Kaggle competitions + portfolio',
                ],
                resources: ['Kaggle', 'Coursera ML by Andrew Ng', 'StatQuest'],
              },
              {
                title: 'UI/UX Design',
                duration: '3-4 months',
                steps: [
                  'Month 1: Design principles + Figma basics',
                  'Month 2: User research + wireframing',
                  'Month 3: Prototyping + design systems',
                  'Month 4: Build 3-5 case studies',
                ],
                resources: [
                  'Google UX Certificate',
                  'Figma Academy',
                  'Laws of UX',
                ],
              },
            ].map((roadmap, i) => (
              <div
                key={i}
                className="rounded-xl border bg-card p-6"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-bold">{roadmap.title}</h3>
                  <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    <Clock className="h-3 w-3" /> {roadmap.duration}
                  </span>
                </div>
                <ol className="mb-4 space-y-2">
                  {roadmap.steps.map((step, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="flex flex-wrap gap-2">
                  {roadmap.resources.map((res, j) => (
                    <Badge
                      key={j}
                      variant="outline"
                    >
                      {res}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Upskill */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            How to Upskill Effectively
          </h2>
          <p>
            Learning a new skill can be overwhelming. Follow these proven
            strategies to maximize your learning efficiency:
          </p>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-green-50 p-5 dark:bg-green-950">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-green-700 dark:text-green-300">
                <CheckCircle className="h-5 w-5" />
                Project-Based Learning
              </h3>
              <p className="text-sm text-muted-foreground">
                Don't just watch tutorials. Build something. If learning coding,
                build a portfolio site. If marketing, start a blog. Application
                cements knowledge.
              </p>
            </div>
            <div className="rounded-lg border bg-blue-50 p-5 dark:bg-blue-950">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-blue-700 dark:text-blue-300">
                <Clock className="h-5 w-5" />
                Consistency &gt; Intensity
              </h3>
              <p className="text-sm text-muted-foreground">
                It's better to study for 30 minutes daily than 5 hours once a
                week. Spaced repetition helps retention. Aim for daily practice.
              </p>
            </div>
            <div className="rounded-lg border bg-purple-50 p-5 dark:bg-purple-950">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-purple-700 dark:text-purple-300">
                <Users className="h-5 w-5" />
                Teach Others
              </h3>
              <p className="text-sm text-muted-foreground">
                The "Feynman Technique"—explaining concepts in simple terms to
                others—is the best test of understanding. Write blogs or help in
                forums.
              </p>
            </div>
            <div className="rounded-lg border bg-orange-50 p-5 dark:bg-orange-950">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-orange-700 dark:text-orange-300">
                <Target className="h-5 w-5" />
                Get Feedback
              </h3>
              <p className="text-sm text-muted-foreground">
                Share your work on GitHub, Behance, or LinkedIn. Constructive
                criticism accelerates growth. Join communities and ask for
                reviews.
              </p>
            </div>
          </div>
        </section>

        {/* Free Resources */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <BookOpen className="h-6 w-6 text-primary" />
            Free Learning Resources
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: 'freeCodeCamp',
                desc: 'Web development, responsive design, JavaScript',
                url: 'freecodecamp.org',
              },
              {
                name: 'The Odin Project',
                desc: 'Full-stack curriculum, practical projects',
                url: 'theodinproject.com',
              },
              {
                name: 'CS50 (Harvard)',
                desc: 'Computer science fundamentals',
                url: 'cs50.harvard.edu',
              },
              {
                name: 'Kaggle Learn',
                desc: 'Data science, ML, Python',
                url: 'kaggle.com/learn',
              },
              {
                name: 'Google UX Certificate',
                desc: 'UX design fundamentals (Coursera)',
                url: 'coursera.org',
              },
              {
                name: 'HubSpot Academy',
                desc: 'Marketing, sales, CRM certifications',
                url: 'academy.hubspot.com',
              },
              {
                name: 'Full Stack Open',
                desc: 'Modern web dev with React',
                url: 'fullstackopen.com',
              },
              {
                name: 'Khan Academy',
                desc: 'Math, statistics, economics',
                url: 'khanacademy.org',
              },
              {
                name: 'MIT OpenCourseWare',
                desc: 'University-level courses free',
                url: 'ocw.mit.edu',
              },
            ].map((resource, i) => (
              <div
                key={i}
                className="rounded-lg border p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 flex items-center gap-2 font-semibold">
                  {resource.name}
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </h3>
                <p className="text-sm text-muted-foreground">{resource.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Award className="h-6 w-6 text-primary" />
            Valuable Certifications
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="rounded-tl-lg p-3">Certification</th>
                  <th className="p-3">Field</th>
                  <th className="p-3">Cost</th>
                  <th className="rounded-tr-lg p-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'AWS Cloud Practitioner',
                    field: 'Cloud',
                    cost: '₹8,500',
                    time: '2-4 weeks',
                  },
                  {
                    name: 'Google Data Analytics',
                    field: 'Data',
                    cost: 'Free (Coursera)',
                    time: '6 months',
                  },
                  {
                    name: 'Meta Frontend Developer',
                    field: 'Development',
                    cost: 'Free (Coursera)',
                    time: '7 months',
                  },
                  {
                    name: 'PMP Certification',
                    field: 'Project Mgmt',
                    cost: '₹40,000+',
                    time: '3-6 months',
                  },
                  {
                    name: 'Scrum Master (CSM)',
                    field: 'Agile',
                    cost: '₹30,000+',
                    time: '2 days + exam',
                  },
                  {
                    name: 'Google UX Design',
                    field: 'Design',
                    cost: 'Free (Coursera)',
                    time: '6 months',
                  },
                  {
                    name: 'HubSpot Inbound Marketing',
                    field: 'Marketing',
                    cost: 'Free',
                    time: '4-5 hours',
                  },
                ].map((cert, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-muted/50"
                  >
                    <td className="p-3 font-medium">{cert.name}</td>
                    <td className="p-3">{cert.field}</td>
                    <td className="p-3">{cert.cost}</td>
                    <td className="p-3">{cert.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2>Frequently Asked Questions</h2>

          <div className="not-prose space-y-4">
            {[
              {
                q: 'How many skills should I focus on at once?',
                a: "Focus on 1-2 core skills at a time. Spreading yourself too thin leads to mediocrity. Master one skill before moving to the next. It's better to be excellent at 3 things than average at 10.",
              },
              {
                q: 'Are certifications worth it?',
                a: 'It depends. Certifications from Google, AWS, and HubSpot are well-recognized and often free. Industry-standard certs (PMP, AWS) can boost salaries by 15-25%. However, skills + projects matter more than certificates alone.',
              },
              {
                q: "How do I learn coding if I'm from a non-tech background?",
                a: "Start with Python—it's beginner-friendly with practical applications. Use free resources like freeCodeCamp or Codecademy. Focus on building small projects (calculator, to-do app) rather than just tutorials. Give yourself 4-6 months of consistent practice.",
              },
              {
                q: 'How do I know if a skill is worth learning?',
                a: 'Check: (1) Job postings in your target role—what skills appear most frequently? (2) Industry trends—is the skill growing or declining? (3) Transferability—can you use it in multiple roles? (4) Market rate—do people with this skill earn more?',
              },
              {
                q: 'Can I learn enough to get hired in 3 months?',
                a: 'For certain roles, yes. Digital marketing, basic web development, or data analysis fundamentals can be learned in 3 months with intense focus. However, competitive roles (ML Engineer, Senior Dev) typically require 6-12 months of dedicated learning plus portfolio projects.',
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
        <section className="rounded-2xl bg-primary/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Assess Your Skills</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Not sure where you stand? Take our skill assessments to identify
            your strengths and areas for improvement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/aptitude-test">Take Aptitude Test</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/tools/typing-test">Check Typing Speed</Link>
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/resources/career-planning"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Career Planning</h3>
              <p className="text-sm text-muted-foreground">
                Map your professional journey
              </p>
            </Link>
            <Link
              href="/resources/industry-insights"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Industry Insights</h3>
              <p className="text-sm text-muted-foreground">
                Salary data and trends
              </p>
            </Link>
            <Link
              href="/blog/learn-new-skills-fast"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Learning Tips Blog</h3>
              <p className="text-sm text-muted-foreground">
                Accelerate your learning
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
