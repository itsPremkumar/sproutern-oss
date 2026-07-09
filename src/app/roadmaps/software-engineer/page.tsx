import { Metadata } from 'next';
import Link from 'next/link';
import {
  Code,
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
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Software Engineer Roadmap',
  description:
    'Complete roadmap to become a Software Engineer. Learn programming, DSA, web development, system design, and more. Step-by-step guide with free resources.',
  keywords:
    'software engineer roadmap, software developer roadmap, full stack developer roadmap, programming roadmap, web development path, coding career path, software engineer skills, tech career guide',
  openGraph: {
    title: 'Software Engineer Roadmap',
    description:
      'Step-by-step guide to becoming a Software Engineer. Includes skills, projects, and free resources.',
    type: 'article',
    url: 'https://www.sproutern.com/roadmaps/software-engineer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineer Roadmap ',
    description: 'Complete learning path for software engineering career.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/roadmaps/software-engineer',
  },
};

const phases = [
  {
    number: 1,
    title: 'Programming Fundamentals',
    duration: '4-6 weeks',
    description:
      'Build a strong foundation in programming concepts and one programming language.',
    skills: [
      {
        name: 'Choose a Language (Python/JavaScript/Java)',
        priority: 'Essential',
      },
      { name: 'Variables, Data Types, Operators', priority: 'Essential' },
      { name: 'Control Flow (if/else, loops)', priority: 'Essential' },
      { name: 'Functions and Scope', priority: 'Essential' },
      { name: 'Arrays/Lists and Strings', priority: 'Essential' },
      { name: 'Object-Oriented Programming Basics', priority: 'Essential' },
      { name: 'Error Handling', priority: 'Important' },
      { name: 'File I/O Operations', priority: 'Important' },
    ],
    resources: [
      {
        name: 'FreeCodeCamp',
        url: 'https://www.freecodecamp.org/',
        type: 'Free',
      },
      {
        name: 'The Odin Project',
        url: 'https://www.theodinproject.com/',
        type: 'Free',
      },
      {
        name: 'CS50 by Harvard',
        url: 'https://cs50.harvard.edu/',
        type: 'Free',
      },
      {
        name: 'Python.org Tutorial',
        url: 'https://docs.python.org/3/tutorial/',
        type: 'Free',
      },
    ],
    projects: [
      'Calculator Application',
      'To-Do List (Console)',
      'Number Guessing Game',
      'Simple File Organizer',
    ],
  },
  {
    number: 2,
    title: 'Data Structures & Algorithms',
    duration: '8-12 weeks',
    description:
      'Master DSA concepts essential for coding interviews and efficient problem-solving.',
    skills: [
      { name: 'Arrays and Strings', priority: 'Essential' },
      { name: 'Linked Lists', priority: 'Essential' },
      { name: 'Stacks and Queues', priority: 'Essential' },
      { name: 'Hash Maps/Sets', priority: 'Essential' },
      { name: 'Trees and Binary Search Trees', priority: 'Essential' },
      { name: 'Graphs (BFS, DFS)', priority: 'Essential' },
      { name: 'Sorting Algorithms', priority: 'Essential' },
      { name: 'Searching Algorithms', priority: 'Essential' },
      { name: 'Dynamic Programming', priority: 'Important' },
      { name: 'Recursion and Backtracking', priority: 'Important' },
      { name: 'Greedy Algorithms', priority: 'Important' },
      { name: 'Time & Space Complexity', priority: 'Essential' },
    ],
    resources: [
      { name: 'LeetCode', url: 'https://leetcode.com/', type: 'Freemium' },
      {
        name: 'NeetCode Roadmap',
        url: 'https://neetcode.io/roadmap',
        type: 'Free',
      },
      {
        name: 'GeeksforGeeks DSA',
        url: 'https://www.geeksforgeeks.org/data-structures/',
        type: 'Free',
      },
      {
        name: 'Striver SDE Sheet',
        url: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/',
        type: 'Free',
      },
    ],
    projects: [
      'Implement all data structures from scratch',
      'Solve 150+ LeetCode problems',
      'Build a simple search engine',
    ],
  },
  {
    number: 3,
    title: 'Version Control & Tools',
    duration: '1-2 weeks',
    description: 'Learn essential developer tools and collaboration workflows.',
    skills: [
      { name: 'Git Basics (add, commit, push, pull)', priority: 'Essential' },
      { name: 'Git Branching and Merging', priority: 'Essential' },
      { name: 'GitHub/GitLab Usage', priority: 'Essential' },
      { name: 'Pull Requests and Code Review', priority: 'Essential' },
      { name: 'Command Line/Terminal', priority: 'Essential' },
      { name: 'IDE Setup (VS Code)', priority: 'Important' },
      { name: 'Debugging Tools', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Git Documentation',
        url: 'https://git-scm.com/doc',
        type: 'Free',
      },
      {
        name: 'GitHub Skills',
        url: 'https://skills.github.com/',
        type: 'Free',
      },
      { name: 'Oh My Git! (Game)', url: 'https://ohmygit.org/', type: 'Free' },
    ],
    projects: [
      'Create GitHub profile README',
      'Contribute to an open source project',
      'Set up a collaborative project with branches',
    ],
  },
  {
    number: 4,
    title: 'Web Development Fundamentals',
    duration: '6-8 weeks',
    description: 'Learn frontend basics and how the web works.',
    skills: [
      { name: 'HTML5 Semantic Elements', priority: 'Essential' },
      { name: 'CSS3 and Flexbox/Grid', priority: 'Essential' },
      { name: 'Responsive Design', priority: 'Essential' },
      { name: 'JavaScript DOM Manipulation', priority: 'Essential' },
      { name: 'ES6+ JavaScript Features', priority: 'Essential' },
      { name: 'Fetch API and Promises', priority: 'Essential' },
      { name: 'Browser DevTools', priority: 'Important' },
      { name: 'Web Accessibility Basics', priority: 'Important' },
    ],
    resources: [
      {
        name: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/',
        type: 'Free',
      },
      {
        name: 'JavaScript.info',
        url: 'https://javascript.info/',
        type: 'Free',
      },
      { name: 'CSS-Tricks', url: 'https://css-tricks.com/', type: 'Free' },
      {
        name: 'Frontend Mentor',
        url: 'https://www.frontendmentor.io/',
        type: 'Free',
      },
    ],
    projects: [
      'Personal Portfolio Website',
      'Weather App with API',
      'Interactive Quiz App',
      'Landing Page Clone',
    ],
  },
  {
    number: 5,
    title: 'Frontend Framework',
    duration: '4-6 weeks',
    description:
      'Master a modern frontend framework for building complex applications.',
    skills: [
      { name: 'React.js Fundamentals', priority: 'Essential' },
      { name: 'Component Architecture', priority: 'Essential' },
      {
        name: 'State Management (useState, useReducer)',
        priority: 'Essential',
      },
      { name: 'React Hooks', priority: 'Essential' },
      { name: 'React Router', priority: 'Essential' },
      { name: 'API Integration', priority: 'Essential' },
      { name: 'Context API or Redux', priority: 'Important' },
      { name: 'TypeScript Basics', priority: 'Important' },
      {
        name: 'Testing (Jest, React Testing Library)',
        priority: 'Good to Have',
      },
    ],
    resources: [
      { name: 'React Official Docs', url: 'https://react.dev/', type: 'Free' },
      {
        name: 'Full Stack Open',
        url: 'https://fullstackopen.com/',
        type: 'Free',
      },
      {
        name: 'Scrimba React Course',
        url: 'https://scrimba.com/learn/learnreact',
        type: 'Free',
      },
    ],
    projects: [
      'E-commerce Product Page',
      'Blog with Markdown Support',
      'Task Management App',
      'Social Media Dashboard',
    ],
  },
  {
    number: 6,
    title: 'Backend Development',
    duration: '6-8 weeks',
    description: 'Learn server-side programming, APIs, and databases.',
    skills: [
      { name: 'Node.js and Express.js', priority: 'Essential' },
      { name: 'RESTful API Design', priority: 'Essential' },
      { name: 'Database Design (SQL)', priority: 'Essential' },
      { name: 'MongoDB (NoSQL)', priority: 'Essential' },
      { name: 'Authentication (JWT, OAuth)', priority: 'Essential' },
      { name: 'Input Validation and Sanitization', priority: 'Essential' },
      { name: 'Error Handling', priority: 'Essential' },
      { name: 'ORM (Prisma/Sequelize)', priority: 'Important' },
      { name: 'Caching (Redis)', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Node.js Official',
        url: 'https://nodejs.org/en/learn',
        type: 'Free',
      },
      {
        name: 'Express.js Guide',
        url: 'https://expressjs.com/en/guide/routing.html',
        type: 'Free',
      },
      {
        name: 'MongoDB University',
        url: 'https://learn.mongodb.com/',
        type: 'Free',
      },
      { name: 'SQLBolt', url: 'https://sqlbolt.com/', type: 'Free' },
    ],
    projects: [
      'REST API for Blog',
      'User Authentication System',
      'URL Shortener',
      'E-commerce Backend',
    ],
  },
  {
    number: 7,
    title: 'System Design Basics',
    duration: '4-6 weeks',
    description: 'Understand how to design scalable and reliable systems.',
    skills: [
      { name: 'Scalability Concepts', priority: 'Essential' },
      { name: 'Load Balancing', priority: 'Essential' },
      { name: 'Caching Strategies', priority: 'Essential' },
      { name: 'Database Sharding', priority: 'Important' },
      { name: 'Microservices vs Monolith', priority: 'Important' },
      { name: 'API Rate Limiting', priority: 'Important' },
      { name: 'Message Queues', priority: 'Good to Have' },
      { name: 'CAP Theorem', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'System Design Primer',
        url: 'https://github.com/donnemartin/system-design-primer',
        type: 'Free',
      },
      { name: 'ByteByteGo', url: 'https://bytebytego.com/', type: 'Paid' },
      {
        name: 'Educative System Design',
        url: 'https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers',
        type: 'Paid',
      },
    ],
    projects: [
      'Design URL Shortener System',
      'Design Chat Application',
      'Design Rate Limiter',
    ],
  },
  {
    number: 8,
    title: 'DevOps & Deployment',
    duration: '2-4 weeks',
    description: 'Learn to deploy and maintain applications in production.',
    skills: [
      { name: 'Linux Basics', priority: 'Essential' },
      { name: 'Docker Fundamentals', priority: 'Essential' },
      { name: 'Cloud Platforms (AWS/GCP/Azure)', priority: 'Essential' },
      { name: 'CI/CD Pipelines', priority: 'Important' },
      { name: 'Environment Variables', priority: 'Essential' },
      { name: 'Monitoring and Logging', priority: 'Important' },
      { name: 'Kubernetes Basics', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Docker Docs',
        url: 'https://docs.docker.com/get-started/',
        type: 'Free',
      },
      {
        name: 'AWS Free Tier',
        url: 'https://aws.amazon.com/free/',
        type: 'Free',
      },
      { name: 'Vercel/Netlify', url: 'https://vercel.com/', type: 'Free' },
    ],
    projects: [
      'Containerize your full-stack app',
      'Set up CI/CD with GitHub Actions',
      'Deploy to AWS/GCP',
    ],
  },
];

export default function SoftwareEngineerRoadmapPage() {
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
        name: 'Software Engineer',
        item: 'https://www.sproutern.com/roadmaps/software-engineer',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Software Engineer Roadmap - Complete Learning Path',
    description:
      'Step-by-step guide to becoming a Software Engineer with skills, projects, and resources.',
    author: {
      '@type': 'Organization',
      name: 'Sproutern',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
    },
    datePublished: '2024-12-01',
    dateModified: '2024-12-23',
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600">
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
              <Code className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Software Engineer Roadmap
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Complete learning path for
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Clock className="mr-2 h-4 w-4" />
              6-12 Months
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Target className="mr-2 h-4 w-4" />
              Intermediate
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              ₹6-25 LPA
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <GraduationCap className="mr-2 h-4 w-4" />8 Phases
            </Badge>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container py-12">
        <div className="max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold">Overview</h2>
          <p className="mb-6 text-muted-foreground">
            This roadmap will guide you through becoming a job-ready Software
            Engineer. You'll learn programming fundamentals, data structures &
            algorithms, web development (frontend & backend), system design, and
            DevOps basics. The path is designed for beginners and can be
            completed in 6-12 months with consistent effort (3-4 hours daily).
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="font-bold">Prerequisites</p>
                  <p className="text-sm text-muted-foreground">
                    Basic computer knowledge
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-bold">Outcome</p>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Developer Role
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

      {/* Phases */}
      <section className="container py-12">
        <h2 className="mb-8 text-3xl font-bold">Learning Phases</h2>
        <div className="space-y-8">
          {phases.map((phase) => (
            <Card
              key={phase.number}
              className="overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
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
                {/* Skills */}
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

                {/* Resources */}
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

                {/* Projects */}
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

      {/* Global Opportunities */}
      <section className="container py-12">
        <div className="rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-300" />
                <h2 className="text-2xl font-bold">
                  International Opportunities
                </h2>
              </div>
              <p className="max-w-xl text-blue-100">
                Software Engineers are in high demand globally. Here is what you
                can expect in top tech hubs.
              </p>
            </div>
            <Link href="/countries">
              <Button
                variant="secondary"
                size="lg"
              >
                Explore Country Guides
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="border-none bg-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  🇺🇸 United States
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-blue-100">
                <p>
                  <strong>Avg Salary:</strong> $115,000 - $170,000
                </p>
                <p>
                  <strong>Top Hubs:</strong> Silicon Valley, Seattle, NYC,
                  Austin
                </p>
                <p>
                  <strong>Visa:</strong> H-1B, O-1, L-1
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  🇩🇪 Germany
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-blue-100">
                <p>
                  <strong>Avg Salary:</strong> €60,000 - €85,000
                </p>
                <p>
                  <strong>Top Hubs:</strong> Berlin, Munich, Hamburg
                </p>
                <p>
                  <strong>Visa:</strong> Blue Card (Lower threshold for IT)
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  🇬🇧 United Kingdom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-blue-100">
                <p>
                  <strong>Avg Salary:</strong> £55,000 - £90,000
                </p>
                <p>
                  <strong>Top Hubs:</strong> London, Manchester, Cambridge
                </p>
                <p>
                  <strong>Visa:</strong> Skilled Worker Visa (Shortage List)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="container bg-muted/30 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Tips for Success
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-4">
              <h4 className="mb-2 font-semibold">🎯 Stay Consistent</h4>
              <p className="text-sm text-muted-foreground">
                3-4 hours of daily practice is better than weekend marathons.
              </p>
            </Card>
            <Card className="p-4">
              <h4 className="mb-2 font-semibold">📝 Document Everything</h4>
              <p className="text-sm text-muted-foreground">
                Maintain notes and push all projects to GitHub.
              </p>
            </Card>
            <Card className="p-4">
              <h4 className="mb-2 font-semibold">👥 Join Communities</h4>
              <p className="text-sm text-muted-foreground">
                Discord, Reddit, and Twitter have great dev communities.
              </p>
            </Card>
            <Card className="p-4">
              <h4 className="mb-2 font-semibold">🔄 Build in Public</h4>
              <p className="text-sm text-muted-foreground">
                Share your progress on LinkedIn and Twitter.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
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
            <Link href="/roadmaps/data-scientist">
              Data Scientist Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
