import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { SkillsGapAnalyzer } from '@/components/tools/SkillsGapAnalyzer';
import Link from 'next/link';
import {
  Target,
  CheckCircle,
  Shield,
  Users,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Lightbulb,
  AlertCircle,
  Search,
  Award,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = getPageSEO('skillsGapAnalyzer');

const benefits = [
  {
    icon: Target,
    title: 'Identify Skill Gaps',
    description:
      'Compare your current skills with job requirements to see exactly what you need to learn',
    color: 'text-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Prioritize Learning',
    description:
      'Get recommendations on which skills to learn first based on priority and importance',
    color: 'text-green-600',
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description:
      'Receive curated learning resources and courses for each skill you need to develop',
    color: 'text-purple-600',
  },
  {
    icon: Award,
    title: 'Track Progress',
    description:
      'Re-analyze periodically to track your skill development and career readiness',
    color: 'text-orange-600',
  },
];

const faqs = [
  {
    q: 'How accurate is the skills gap analysis?',
    a: 'The analysis compares your listed skills against job requirements. For best results, be honest about your skill levels and include all relevant skills. The tool uses intelligent matching to identify gaps, but you should also review job descriptions manually for complete accuracy.',
  },
  {
    q: "What if my target role isn't in the predefined list?",
    a: "You can use the 'Custom Job Requirements' option to enter skills from any job description. Simply copy the required skills from the job posting and paste them into the custom requirements field.",
  },
  {
    q: 'How often should I use this tool?',
    a: "We recommend using it monthly or whenever you're preparing for a new role. After learning new skills, re-run the analysis to see your progress and identify remaining gaps.",
  },
  {
    q: 'Are the learning resources free?',
    a: 'Most recommended resources include free options like official documentation, free courses, and community resources. Some may have paid premium options, but we prioritize free and accessible learning materials.',
  },
  {
    q: 'Can I save my analysis results?',
    a: "Currently, the analysis runs in your browser and isn't saved. You can print the results page or take a screenshot to keep a record. We're working on adding save functionality in the future.",
  },
  {
    q: 'What skill level should I select?',
    a: 'Be honest about your proficiency: Beginner (just learning), Intermediate (can use it with help), Advanced (comfortable using it independently), Expert (can teach others). This helps provide more accurate gap analysis.',
  },
];

export default function SkillsGapAnalyzerPage() {
  const schemas = getPageSchema('skillsGapAnalyzer');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Target className="h-4 w-4" />
              Free Career Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Skills Gap Analyzer
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Compare your current skills with job requirements. Identify what
              you need to learn and get personalized learning recommendations.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">8+ Job Roles</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Search className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">Smart Matching</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">12,000+ Users</span>
            </div>
          </div>

          {/* Tool Component */}
          <SkillsGapAnalyzer />

          {/* Benefits Section */}
          <section className="mt-16">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
              <Lightbulb className="h-6 w-6 text-primary" />
              Why Use Skills Gap Analysis?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle
                        className={`flex items-center gap-3 text-lg ${benefit.color}`}
                      >
                        <Icon className="h-5 w-5" />
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Educational Content */}
          <section className="prose prose-lg mt-16 max-w-none">
            <h2 className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              Understanding Skills Gap Analysis
            </h2>

            <p>
              A skills gap is the difference between the skills you currently
              have and the skills required for your target job role. Identifying
              these gaps is the first step toward career growth and landing your
              dream job.
            </p>

            <h3>Why Skills Gap Analysis Matters</h3>
            <p>
              In today's competitive job market, knowing exactly what skills you
              need to develop saves time and helps you focus your learning
              efforts. Research shows that candidates who address skill gaps
              proactively are 3x more likely to get job offers in their target
              roles.
            </p>

            <div className="not-prose my-6 rounded-lg bg-primary/10 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <TrendingUp className="h-5 w-5 text-primary" />
                Skills Gap Analysis Framework
              </h3>
              <ol className="space-y-2 text-sm">
                <li>
                  <strong>1. Assess Current Skills</strong> - List all your
                  technical and soft skills honestly
                </li>
                <li>
                  <strong>2. Define Target Role</strong> - Identify the job you
                  want and its requirements
                </li>
                <li>
                  <strong>3. Identify Gaps</strong> - Compare current vs.
                  required skills (this tool helps here!)
                </li>
                <li>
                  <strong>4. Prioritize Learning</strong> - Focus on
                  high-priority, core skills first
                </li>
                <li>
                  <strong>5. Create Learning Plan</strong> - Set goals and
                  timelines for skill development
                </li>
                <li>
                  <strong>6. Practice & Build</strong> - Apply skills in real
                  projects and portfolio
                </li>
                <li>
                  <strong>7. Re-assess Regularly</strong> - Track progress and
                  adjust your plan
                </li>
              </ol>
            </div>

            <h3>Types of Skills to Consider</h3>
            <ul>
              <li>
                <strong>Technical Skills (Hard Skills):</strong> Programming
                languages, tools, frameworks, methodologies. These are specific,
                measurable abilities like "JavaScript", "React", "AWS",
                "Docker".
              </li>
              <li>
                <strong>Soft Skills:</strong> Communication, teamwork,
                problem-solving, leadership. These are harder to measure but
                equally important for career success.
              </li>
              <li>
                <strong>Domain Knowledge:</strong> Industry-specific knowledge,
                regulations, best practices relevant to your field.
              </li>
            </ul>

            <h3>How to Close Skill Gaps Effectively</h3>
            <ul>
              <li>
                <strong>Start with Fundamentals:</strong> Don't skip basics.
                Strong fundamentals make advanced learning easier.
              </li>
              <li>
                <strong>Learn by Doing:</strong> Build projects using new
                skills. Theory without practice doesn't stick.
              </li>
              <li>
                <strong>Get Feedback:</strong> Share your work with peers,
                mentors, or online communities.
              </li>
              <li>
                <strong>Stay Updated:</strong> Technology changes fast. Follow
                industry trends and update skills regularly.
              </li>
              <li>
                <strong>Showcase Skills:</strong> Add projects to your
                portfolio, contribute to open source, write about what you
                learn.
              </li>
            </ul>

            <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Pro Tip: The 80/20 Rule
              </h3>
              <p className="text-sm">
                Focus on the 20% of skills that will give you 80% of the value.
                For most tech roles, core programming skills, version control
                (Git), and one framework deeply are more valuable than knowing
                many technologies superficially. Master the fundamentals, then
                expand.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="mb-8 text-2xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="mt-16 rounded-2xl bg-muted p-8">
            <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Skills Assessment',
                  href: '/tools/skills-assessment',
                  desc: 'Test your current skill levels',
                },
                {
                  title: 'Career Roadmap',
                  href: '/tools/career-roadmap',
                  desc: 'Plan your career path',
                },
                {
                  title: 'Resume Score Checker',
                  href: '/tools/resume-score-checker',
                  desc: 'Optimize your resume',
                },
                {
                  title: 'Interview Questions',
                  href: '/tools/interview-questions',
                  desc: 'Prepare for interviews',
                },
                {
                  title: 'Project Ideas Generator',
                  href: '/tools/project-ideas',
                  desc: 'Find projects to practice skills',
                },
                {
                  title: 'Aptitude Test',
                  href: '/tools/aptitude-test',
                  desc: 'Test your problem-solving skills',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Close Your Skills Gap?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Use this tool to identify what to learn, then explore our
              resources to start building those skills
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Learning Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/internships"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Browse Internships
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
