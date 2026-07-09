import { Metadata } from 'next';
import Link from 'next/link';
import {
  Database,
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
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Data Scientist Roadmap | Complete Guide',
  description:
    'Complete roadmap to become a Data Scientist. Learn statistics, machine learning, deep learning, and data analysis with free resources.',
  keywords:
    'data scientist roadmap, data science career, machine learning path, statistics for data science, python data science, data science skills',
  openGraph: {
    title: 'Data Scientist Roadmap',
    description:
      'Step-by-step guide to becoming a Data Scientist with skills, projects, and free resources.',
    type: 'article',
    url: 'https://www.sproutern.com/roadmaps/data-scientist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Scientist Roadmap',
    description: 'Complete learning path for data science career.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/roadmaps/data-scientist',
  },
};

const phases = [
  {
    number: 1,
    title: 'Python Programming',
    duration: '4-6 weeks',
    description: 'Master Python, the primary language for data science work.',
    skills: [
      { name: 'Python Fundamentals', priority: 'Essential' },
      { name: 'Data Structures (lists, dicts, sets)', priority: 'Essential' },
      { name: 'Functions & Lambda Expressions', priority: 'Essential' },
      { name: 'File Handling & I/O', priority: 'Essential' },
      { name: 'Object-Oriented Programming', priority: 'Important' },
      { name: 'Error Handling', priority: 'Important' },
      { name: 'Virtual Environments', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Python.org Tutorial',
        url: 'https://docs.python.org/3/tutorial/',
        type: 'Free',
      },
      {
        name: 'Kaggle Python Course',
        url: 'https://www.kaggle.com/learn/python',
        type: 'Free',
      },
      {
        name: 'Automate the Boring Stuff',
        url: 'https://automatetheboringstuff.com/',
        type: 'Free',
      },
    ],
    projects: ['CLI Data Processor', 'File Organizer Script', 'Web Scraper'],
  },
  {
    number: 2,
    title: 'Statistics & Mathematics',
    duration: '6-8 weeks',
    description: 'Build strong mathematical foundations for data analysis.',
    skills: [
      { name: 'Descriptive Statistics', priority: 'Essential' },
      { name: 'Probability Theory', priority: 'Essential' },
      { name: 'Inferential Statistics', priority: 'Essential' },
      { name: 'Hypothesis Testing', priority: 'Essential' },
      { name: 'Linear Algebra Basics', priority: 'Important' },
      { name: 'Regression Analysis', priority: 'Important' },
      { name: 'Bayesian Statistics', priority: 'Good to Have' },
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
      {
        name: 'Think Stats Book',
        url: 'https://greenteapress.com/thinkstats/',
        type: 'Free',
      },
    ],
    projects: [
      'Statistical Analysis Report',
      'A/B Test Analysis',
      'Survey Data Analysis',
    ],
  },
  {
    number: 3,
    title: 'Data Manipulation & Analysis',
    duration: '4-6 weeks',
    description: 'Learn to clean, transform, and analyze data effectively.',
    skills: [
      { name: 'NumPy for Numerical Operations', priority: 'Essential' },
      { name: 'Pandas for Data Manipulation', priority: 'Essential' },
      { name: 'Data Cleaning Techniques', priority: 'Essential' },
      { name: 'Handling Missing Data', priority: 'Essential' },
      { name: 'Data Transformation', priority: 'Essential' },
      { name: 'Exploratory Data Analysis', priority: 'Essential' },
      { name: 'Working with Dates & Times', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Pandas Documentation',
        url: 'https://pandas.pydata.org/docs/',
        type: 'Free',
      },
      {
        name: 'Kaggle Pandas Course',
        url: 'https://www.kaggle.com/learn/pandas',
        type: 'Free',
      },
      {
        name: 'Python for Data Analysis Book',
        url: 'https://wesmckinney.com/book/',
        type: 'Free',
      },
    ],
    projects: [
      'Data Cleaning Pipeline',
      'EDA on Real Dataset',
      'Automated Data Report',
    ],
  },
  {
    number: 4,
    title: 'Data Visualization',
    duration: '3-4 weeks',
    description: 'Create compelling visualizations to communicate insights.',
    skills: [
      { name: 'Matplotlib', priority: 'Essential' },
      { name: 'Seaborn', priority: 'Essential' },
      { name: 'Plotly for Interactive Charts', priority: 'Important' },
      { name: 'Dashboard Creation', priority: 'Important' },
      { name: 'Storytelling with Data', priority: 'Important' },
      { name: 'Tableau/Power BI', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Matplotlib Gallery',
        url: 'https://matplotlib.org/stable/gallery/',
        type: 'Free',
      },
      {
        name: 'Seaborn Tutorial',
        url: 'https://seaborn.pydata.org/tutorial.html',
        type: 'Free',
      },
      {
        name: 'Storytelling with Data',
        url: 'https://www.storytellingwithdata.com/',
        type: 'Paid',
      },
    ],
    projects: [
      'Interactive Dashboard',
      'Data Story Presentation',
      'Visualization Portfolio',
    ],
  },
  {
    number: 5,
    title: 'SQL & Databases',
    duration: '3-4 weeks',
    description: 'Master SQL for data extraction and database management.',
    skills: [
      { name: 'SQL Queries (SELECT, JOIN, GROUP BY)', priority: 'Essential' },
      { name: 'Subqueries & CTEs', priority: 'Essential' },
      { name: 'Window Functions', priority: 'Essential' },
      { name: 'Database Design Basics', priority: 'Important' },
      { name: 'PostgreSQL/MySQL', priority: 'Important' },
      { name: 'NoSQL Basics (MongoDB)', priority: 'Good to Have' },
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
      'Database Design Project',
      'Complex Query Analysis',
      'ETL Pipeline',
    ],
  },
  {
    number: 6,
    title: 'Machine Learning',
    duration: '8-10 weeks',
    description: 'Learn ML algorithms and build predictive models.',
    skills: [
      { name: 'Scikit-learn Library', priority: 'Essential' },
      { name: 'Supervised Learning', priority: 'Essential' },
      { name: 'Unsupervised Learning', priority: 'Essential' },
      { name: 'Feature Engineering', priority: 'Essential' },
      { name: 'Model Evaluation & Validation', priority: 'Essential' },
      { name: 'Ensemble Methods', priority: 'Important' },
      { name: 'Hyperparameter Tuning', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Scikit-learn Documentation',
        url: 'https://scikit-learn.org/',
        type: 'Free',
      },
      {
        name: 'Google ML Crash Course',
        url: 'https://developers.google.com/machine-learning/crash-course',
        type: 'Free',
      },
      {
        name: 'Hands-On ML Book',
        url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/',
        type: 'Paid',
      },
    ],
    projects: [
      'Prediction Model',
      'Classification System',
      'Kaggle Competition',
    ],
  },
  {
    number: 7,
    title: 'Deep Learning Basics',
    duration: '4-6 weeks',
    description:
      'Introduction to neural networks and deep learning frameworks.',
    skills: [
      { name: 'Neural Network Fundamentals', priority: 'Essential' },
      { name: 'TensorFlow/Keras', priority: 'Essential' },
      { name: 'CNNs for Image Data', priority: 'Important' },
      { name: 'RNNs for Sequential Data', priority: 'Important' },
      { name: 'Transfer Learning', priority: 'Important' },
      { name: 'NLP Basics', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'TensorFlow Tutorials',
        url: 'https://www.tensorflow.org/tutorials',
        type: 'Free',
      },
      {
        name: 'Deep Learning Specialization',
        url: 'https://www.deeplearning.ai/',
        type: 'Freemium',
      },
      { name: 'Fast.ai Course', url: 'https://www.fast.ai/', type: 'Free' },
    ],
    projects: [
      'Image Classifier',
      'Text Classification',
      'Time Series Forecasting',
    ],
  },
  {
    number: 8,
    title: 'Business & Communication',
    duration: '2-4 weeks',
    description: 'Develop skills to communicate insights to stakeholders.',
    skills: [
      { name: 'Data Storytelling', priority: 'Essential' },
      { name: 'Presentation Skills', priority: 'Essential' },
      { name: 'Business Metrics & KPIs', priority: 'Essential' },
      { name: 'A/B Testing', priority: 'Important' },
      { name: 'Stakeholder Management', priority: 'Important' },
      { name: 'Domain Knowledge', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Storytelling with Data',
        url: 'https://www.storytellingwithdata.com/',
        type: 'Paid',
      },
      {
        name: 'Data Science for Business',
        url: 'https://www.oreilly.com/library/view/data-science-for/',
        type: 'Paid',
      },
    ],
    projects: [
      'Business Case Study',
      'Executive Dashboard',
      'Impact Analysis Report',
    ],
  },
];

export default function DataScientistRoadmapPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.sproutern.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Career Roadmaps',
        item: 'https://www.sproutern.com/roadmaps',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Data Scientist',
        item: 'https://www.sproutern.com/roadmaps/data-scientist',
      },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-r from-purple-600 to-pink-600">
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
              <Database className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Data Scientist Roadmap
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Complete learning path
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Clock className="mr-2 h-4 w-4" />
              8-14 Months
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Target className="mr-2 h-4 w-4" />
              Advanced
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              ₹8-30 LPA
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <GraduationCap className="mr-2 h-4 w-4" />8 Phases
            </Badge>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold">Overview</h2>
          <p className="mb-6 text-muted-foreground">
            This roadmap guides you to become a Data Scientist. You&apos;ll
            master Python, statistics, data analysis, machine learning, and
            business communication. Designed for beginners, completable in 8-14
            months with 3-4 hours daily.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="font-bold">Prerequisites</p>
                  <p className="text-sm text-muted-foreground">
                    Basic math knowledge
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="font-bold">Outcome</p>
                  <p className="text-sm text-muted-foreground">
                    Data Scientist Role
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
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
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
            <Link href="/roadmaps/data-analyst">
              Data Analyst Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
