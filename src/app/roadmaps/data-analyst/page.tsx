import { Metadata } from 'next';
import Link from 'next/link';
import {
  LineChart,
  CheckCircle,
  Clock,
  BookOpen,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Target,
  Briefcase,
  GraduationCap,
  Zap,
  Award,
  Code,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Data Analyst Roadmap | Complete Guide',
  description:
    'Complete roadmap to become a Data Analyst. Learn Excel, SQL, Python, Tableau, Power BI and data visualization with free resources.',
  keywords:
    'data analyst roadmap, data analysis career, sql for data analyst, tableau roadmap, power bi learning path, excel data analysis',
  openGraph: {
    title: 'Data Analyst Roadmap',
    description: 'Step-by-step guide to becoming a Data Analyst.',
    type: 'article',
    url: 'https://www.sproutern.com/roadmaps/data-analyst',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/roadmaps/data-analyst',
  },
};

const phases = [
  {
    number: 1,
    title: 'Excel Mastery',
    duration: '2-3 weeks',
    description: 'Master Excel for data analysis and reporting.',
    skills: [
      {
        name: 'Advanced Formulas (VLOOKUP, INDEX-MATCH)',
        priority: 'Essential',
      },
      { name: 'Pivot Tables & Pivot Charts', priority: 'Essential' },
      { name: 'Data Cleaning in Excel', priority: 'Essential' },
      { name: 'Conditional Formatting', priority: 'Important' },
      { name: 'What-If Analysis', priority: 'Important' },
      { name: 'Macros & VBA Basics', priority: 'Good to Have' },
    ],
    resources: [
      { name: 'Excel Easy', url: 'https://www.excel-easy.com/', type: 'Free' },
      { name: 'Chandoo Excel', url: 'https://chandoo.org/', type: 'Free' },
    ],
    projects: ['Sales Dashboard', 'Budget Tracker', 'Data Cleaning Report'],
  },
  {
    number: 2,
    title: 'SQL Fundamentals',
    duration: '3-4 weeks',
    description: 'Learn SQL to query and manipulate database data.',
    skills: [
      { name: 'SELECT, WHERE, ORDER BY', priority: 'Essential' },
      { name: 'JOINs (INNER, LEFT, RIGHT)', priority: 'Essential' },
      { name: 'GROUP BY & Aggregations', priority: 'Essential' },
      { name: 'Subqueries', priority: 'Essential' },
      { name: 'Window Functions', priority: 'Important' },
      { name: 'CTEs (Common Table Expressions)', priority: 'Important' },
    ],
    resources: [
      { name: 'SQLBolt', url: 'https://sqlbolt.com/', type: 'Free' },
      {
        name: 'Mode SQL Tutorial',
        url: 'https://mode.com/sql-tutorial/',
        type: 'Free',
      },
      {
        name: 'Kaggle SQL Course',
        url: 'https://www.kaggle.com/learn/intro-to-sql',
        type: 'Free',
      },
    ],
    projects: [
      'Database Query Project',
      'Sales Analysis with SQL',
      'Customer Segmentation',
    ],
  },
  {
    number: 3,
    title: 'Statistics Basics',
    duration: '3-4 weeks',
    description: 'Build statistical foundation for data analysis.',
    skills: [
      { name: 'Descriptive Statistics', priority: 'Essential' },
      { name: 'Probability Basics', priority: 'Essential' },
      { name: 'Distributions (Normal, Binomial)', priority: 'Essential' },
      { name: 'Hypothesis Testing', priority: 'Important' },
      { name: 'Correlation & Regression', priority: 'Important' },
      { name: 'A/B Testing', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Khan Academy Statistics',
        url: 'https://www.khanacademy.org/math/statistics-probability',
        type: 'Free',
      },
      {
        name: 'StatQuest YouTube',
        url: 'https://www.youtube.com/@statquest',
        type: 'Free',
      },
    ],
    projects: [
      'Statistical Analysis Report',
      'A/B Test Analysis',
      'Survey Analysis',
    ],
  },
  {
    number: 4,
    title: 'Python for Analysis',
    duration: '4-5 weeks',
    description: 'Learn Python for advanced data manipulation.',
    skills: [
      { name: 'Python Basics', priority: 'Essential' },
      { name: 'Pandas for Data Manipulation', priority: 'Essential' },
      { name: 'NumPy for Calculations', priority: 'Essential' },
      { name: 'Data Cleaning with Python', priority: 'Essential' },
      { name: 'Matplotlib & Seaborn', priority: 'Important' },
      { name: 'Jupyter Notebooks', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Kaggle Python Course',
        url: 'https://www.kaggle.com/learn/python',
        type: 'Free',
      },
      {
        name: 'Pandas Documentation',
        url: 'https://pandas.pydata.org/docs/',
        type: 'Free',
      },
    ],
    projects: ['EDA Project', 'Automated Data Report', 'Data Pipeline Script'],
  },
  {
    number: 5,
    title: 'Data Visualization',
    duration: '3-4 weeks',
    description: 'Create impactful visualizations and dashboards.',
    skills: [
      { name: 'Tableau Fundamentals', priority: 'Essential' },
      { name: 'Power BI Basics', priority: 'Essential' },
      { name: 'Dashboard Design Principles', priority: 'Essential' },
      { name: 'Chart Selection', priority: 'Important' },
      { name: 'Storytelling with Data', priority: 'Important' },
      { name: 'Interactive Visualizations', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Tableau Public',
        url: 'https://public.tableau.com/',
        type: 'Free',
      },
      {
        name: 'Power BI Learning',
        url: 'https://learn.microsoft.com/en-us/power-bi/',
        type: 'Free',
      },
    ],
    projects: [
      'Executive Dashboard',
      'Interactive Report',
      'Data Story Presentation',
    ],
  },
  {
    number: 6,
    title: 'Business Acumen',
    duration: '2-3 weeks',
    description: 'Understand business context and metrics.',
    skills: [
      { name: 'KPIs & Metrics', priority: 'Essential' },
      { name: 'Business Problem Framing', priority: 'Essential' },
      { name: 'Communication Skills', priority: 'Essential' },
      { name: 'Stakeholder Management', priority: 'Important' },
      { name: 'Industry Knowledge', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Data Science for Business',
        url: 'https://www.oreilly.com/library/view/data-science-for/',
        type: 'Paid',
      },
    ],
    projects: [
      'Business Case Study',
      'KPI Dashboard',
      'Presentation to Stakeholders',
    ],
  },
];

export default function DataAnalystRoadmapPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-gradient-to-r from-teal-600 to-green-600">
        <div className="container py-16 md:py-24">
          <Link
            href="/roadmaps"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Roadmaps
          </Link>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-2xl bg-white/20 p-4">
              <LineChart className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Data Analyst Roadmap
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Complete learning path
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Clock className="mr-2 h-4 w-4" />
              4-6 Months
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Target className="mr-2 h-4 w-4" />
              Beginner
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              ₹4-15 LPA
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <GraduationCap className="mr-2 h-4 w-4" />6 Phases
            </Badge>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold">Overview</h2>
          <p className="mb-6 text-muted-foreground">
            This roadmap guides you to become a Data Analyst. You&apos;ll master
            Excel, SQL, Python, and visualization tools like Tableau and Power
            BI. Perfect for beginners, completable in 4-6 months.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="font-bold">Prerequisites</p>
                  <p className="text-sm text-muted-foreground">
                    Basic computer skills
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-teal-500" />
                <div>
                  <p className="font-bold">Outcome</p>
                  <p className="text-sm text-muted-foreground">
                    Data Analyst Role
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-bold">Resources</p>
                  <p className="text-sm text-muted-foreground">
                    Mostly free resources
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-8 text-3xl font-bold">Learning Phases</h2>
        <div className="space-y-8">
          {phases.map((phase) => (
            <Card
              key={phase.number}
              className="overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-teal-500 to-green-500" />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-1 text-xl">
                      {phase.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {phase.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-3">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Skills to Learn
                  </h4>
                  <ul className="space-y-2">
                    {phase.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Badge
                          variant={
                            skill.priority === 'Essential'
                              ? 'default'
                              : skill.priority === 'Important'
                                ? 'secondary'
                                : 'outline'
                          }
                          className="mt-0.5 flex-shrink-0 px-1.5 py-0 text-[10px]"
                        >
                          {skill.priority === 'Essential'
                            ? '★'
                            : skill.priority === 'Important'
                              ? '◆'
                              : '○'}
                        </Badge>
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    Resources
                  </h4>
                  <ul className="space-y-2">
                    {phase.resources.map((resource) => (
                      <li key={resource.name}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {resource.name}
                          <Badge
                            variant="outline"
                            className="px-1.5 py-0 text-[10px]"
                          >
                            {resource.type}
                          </Badge>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold">
                    <Code className="h-4 w-4 text-purple-500" />
                    Projects to Build
                  </h4>
                  <ul className="space-y-2">
                    {phase.projects.map((project) => (
                      <li
                        key={project}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-primary">→</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/roadmaps">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Roadmaps
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
          >
            <Link href="/roadmaps/product-manager">
              Product Manager Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
