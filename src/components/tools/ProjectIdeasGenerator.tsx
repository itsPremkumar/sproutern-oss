'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shuffle,
  Code,
  ExternalLink,
  Star,
  Clock,
  Users,
  ChevronDown,
} from 'lucide-react';

type Difficulty = 'beginner' | 'intermediate' | 'advanced';
type Domain =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'mobile'
  | 'ml'
  | 'data'
  | 'devops';

interface ProjectIdea {
  title: string;
  description: string;
  techStack: string[];
  difficulty: Difficulty;
  domain: Domain;
  features: string[];
  learnings: string[];
  timeEstimate: string;
  resources: { name: string; url: string }[];
}

const projectIdeas: ProjectIdea[] = [
  // Frontend - Beginner
  {
    title: 'Personal Portfolio Website',
    description:
      'Build a responsive portfolio showcasing your projects and skills. Include sections for about, projects, skills, and contact.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    difficulty: 'beginner',
    domain: 'frontend',
    features: [
      'Responsive design',
      'Dark/light mode',
      'Contact form',
      'Project gallery',
      'Smooth animations',
    ],
    learnings: [
      'CSS Flexbox/Grid',
      'DOM manipulation',
      'Responsive design principles',
      'Form handling',
    ],
    timeEstimate: '1-2 weeks',
    resources: [{ name: 'MDN Web Docs', url: 'https://developer.mozilla.org' }],
  },
  {
    title: 'Weather Dashboard',
    description:
      'Create a weather app using a public API. Display current weather, 5-day forecast, and location search.',
    techStack: ['React', 'CSS', 'Weather API'],
    difficulty: 'beginner',
    domain: 'frontend',
    features: [
      'Location search',
      'Current weather',
      '5-day forecast',
      'Weather icons',
      'Temperature unit toggle',
    ],
    learnings: [
      'API integration',
      'Async/await',
      'State management',
      'Error handling',
    ],
    timeEstimate: '1 week',
    resources: [
      { name: 'OpenWeatherMap API', url: 'https://openweathermap.org/api' },
    ],
  },
  // Frontend - Intermediate
  {
    title: 'E-Commerce Product Page',
    description:
      'Build a product listing page with filtering, sorting, cart functionality, and responsive design.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    difficulty: 'intermediate',
    domain: 'frontend',
    features: [
      'Product grid',
      'Filters (price, category)',
      'Cart system',
      'Search',
      'Pagination',
    ],
    learnings: [
      'Complex state management',
      'TypeScript',
      'Performance optimization',
      'UX patterns',
    ],
    timeEstimate: '2-3 weeks',
    resources: [{ name: 'Fake Store API', url: 'https://fakestoreapi.com' }],
  },
  // Backend - Beginner
  {
    title: 'REST API for Todo App',
    description:
      'Build a CRUD API for a todo application with user authentication and data persistence.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    difficulty: 'beginner',
    domain: 'backend',
    features: [
      'User registration/login',
      'CRUD operations',
      'JWT authentication',
      'Input validation',
      'Error handling',
    ],
    learnings: [
      'REST principles',
      'MongoDB CRUD',
      'Authentication flow',
      'API design',
    ],
    timeEstimate: '2 weeks',
    resources: [{ name: 'Express.js Docs', url: 'https://expressjs.com' }],
  },
  // Backend - Intermediate
  {
    title: 'URL Shortener Service',
    description:
      'Create a URL shortening service like bit.ly with analytics and custom aliases.',
    techStack: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
    difficulty: 'intermediate',
    domain: 'backend',
    features: [
      'Short URL generation',
      'Custom aliases',
      'Click analytics',
      'Rate limiting',
      'API access',
    ],
    learnings: [
      'Caching with Redis',
      'Database design',
      'Rate limiting',
      'Analytics implementation',
    ],
    timeEstimate: '2-3 weeks',
    resources: [{ name: 'Redis Docs', url: 'https://redis.io/docs' }],
  },
  // Fullstack - Beginner
  {
    title: 'Blog Platform',
    description:
      'Build a simple blog with post creation, markdown support, and user comments.',
    techStack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    difficulty: 'beginner',
    domain: 'fullstack',
    features: [
      'Post creation/editing',
      'Markdown rendering',
      'Comments',
      'Categories',
      'Search',
    ],
    learnings: [
      'Full-stack architecture',
      'Server-side rendering',
      'Database relationships',
      'Form handling',
    ],
    timeEstimate: '3 weeks',
    resources: [{ name: 'Next.js Docs', url: 'https://nextjs.org/docs' }],
  },
  // Fullstack - Intermediate
  {
    title: 'Real-time Chat Application',
    description:
      'Build a chat app with real-time messaging, rooms, and user presence indicators.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    difficulty: 'intermediate',
    domain: 'fullstack',
    features: [
      'Real-time messaging',
      'Chat rooms',
      'User presence',
      'Message history',
      'Typing indicators',
    ],
    learnings: [
      'WebSocket implementation',
      'Real-time architecture',
      'State synchronization',
      'Scalability',
    ],
    timeEstimate: '3-4 weeks',
    resources: [{ name: 'Socket.io Docs', url: 'https://socket.io/docs' }],
  },
  // Fullstack - Advanced
  {
    title: 'Project Management Tool (Trello Clone)',
    description:
      'Build a Kanban board with drag-and-drop, team collaboration, and task management.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    difficulty: 'advanced',
    domain: 'fullstack',
    features: [
      'Drag-and-drop cards',
      'Multiple boards',
      'Team collaboration',
      'Due dates',
      'Activity log',
    ],
    learnings: [
      'Complex UI interactions',
      'Optimistic updates',
      'Team permissions',
      'Activity tracking',
    ],
    timeEstimate: '4-6 weeks',
    resources: [
      {
        name: 'React Beautiful DnD',
        url: 'https://github.com/atlassian/react-beautiful-dnd',
      },
    ],
  },
  // Mobile - Beginner
  {
    title: 'Expense Tracker App',
    description:
      'Build a mobile app to track daily expenses with categories and monthly reports.',
    techStack: ['React Native', 'AsyncStorage', 'Chart.js'],
    difficulty: 'beginner',
    domain: 'mobile',
    features: [
      'Add expenses',
      'Categories',
      'Monthly view',
      'Charts',
      'Export data',
    ],
    learnings: [
      'React Native basics',
      'Local storage',
      'Data visualization',
      'Mobile UX',
    ],
    timeEstimate: '2-3 weeks',
    resources: [{ name: 'React Native Docs', url: 'https://reactnative.dev' }],
  },
  // ML - Beginner
  {
    title: 'Movie Recommendation System',
    description:
      'Build a recommendation engine using collaborative filtering on movie ratings data.',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Flask'],
    difficulty: 'beginner',
    domain: 'ml',
    features: [
      'User-based filtering',
      'Item-based filtering',
      'API endpoint',
      'Web interface',
    ],
    learnings: [
      'Recommendation algorithms',
      'Data preprocessing',
      'Model evaluation',
      'API deployment',
    ],
    timeEstimate: '2-3 weeks',
    resources: [
      {
        name: 'MovieLens Dataset',
        url: 'https://grouplens.org/datasets/movielens/',
      },
    ],
  },
  // ML - Intermediate
  {
    title: 'Sentiment Analysis Dashboard',
    description:
      'Analyze sentiment of product reviews or social media posts with visualization.',
    techStack: ['Python', 'NLTK', 'Transformers', 'Streamlit'],
    difficulty: 'intermediate',
    domain: 'ml',
    features: [
      'Text preprocessing',
      'Sentiment classification',
      'Dashboard visualization',
      'Batch analysis',
    ],
    learnings: [
      'NLP preprocessing',
      'Pre-trained models',
      'Data visualization',
      'Streamlit apps',
    ],
    timeEstimate: '2-3 weeks',
    resources: [{ name: 'Hugging Face', url: 'https://huggingface.co' }],
  },
  // Data - Beginner
  {
    title: 'COVID-19 Data Dashboard',
    description:
      'Create an interactive dashboard visualizing COVID-19 statistics by country and time.',
    techStack: ['Python', 'Pandas', 'Plotly', 'Dash'],
    difficulty: 'beginner',
    domain: 'data',
    features: [
      'Interactive charts',
      'Country comparison',
      'Time series',
      'Map visualization',
    ],
    learnings: [
      'Data cleaning',
      'Visualization libraries',
      'Dashboard creation',
      'Time series data',
    ],
    timeEstimate: '1-2 weeks',
    resources: [
      {
        name: 'Johns Hopkins COVID Data',
        url: 'https://github.com/CSSEGISandData/COVID-19',
      },
    ],
  },
  // DevOps - Intermediate
  {
    title: 'CI/CD Pipeline with Docker',
    description:
      'Set up automated testing and deployment pipeline for a web application.',
    techStack: ['Docker', 'GitHub Actions', 'AWS/Vercel', 'Jest'],
    difficulty: 'intermediate',
    domain: 'devops',
    features: [
      'Automated tests',
      'Docker containerization',
      'Multi-stage builds',
      'Auto-deployment',
      'Notifications',
    ],
    learnings: [
      'CI/CD concepts',
      'Docker best practices',
      'GitHub Actions',
      'Cloud deployment',
    ],
    timeEstimate: '1-2 weeks',
    resources: [
      {
        name: 'GitHub Actions Docs',
        url: 'https://docs.github.com/en/actions',
      },
    ],
  },
];

const difficultyColors: Record<Difficulty, string> = {
  beginner: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
  intermediate:
    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200',
  advanced: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200',
};

const domainLabels: Record<Domain, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  fullstack: 'Full-Stack',
  mobile: 'Mobile',
  ml: 'Machine Learning',
  data: 'Data Science',
  devops: 'DevOps',
};

export function ProjectIdeasGenerator() {
  const [selectedDomain, setSelectedDomain] = useState<Domain | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    Difficulty | 'all'
  >('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = projectIdeas.filter((project) => {
    const domainMatch =
      selectedDomain === 'all' || project.domain === selectedDomain;
    const difficultyMatch =
      selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    return domainMatch && difficultyMatch;
  });

  const getRandomProject = () => {
    const random =
      filteredProjects[Math.floor(Math.random() * filteredProjects.length)];
    const index = projectIdeas.indexOf(random);
    setExpandedProject(index);
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Domain</label>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={selectedDomain === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedDomain('all')}
              >
                All
              </Button>
              {(Object.keys(domainLabels) as Domain[]).map((domain) => (
                <Button
                  key={domain}
                  size="sm"
                  variant={selectedDomain === domain ? 'default' : 'outline'}
                  onClick={() => setSelectedDomain(domain)}
                >
                  {domainLabels[domain]}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Difficulty</label>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedDifficulty('all')}
              >
                All Levels
              </Button>
              {(['beginner', 'intermediate', 'advanced'] as Difficulty[]).map(
                (diff) => (
                  <Button
                    key={diff}
                    size="sm"
                    variant={
                      selectedDifficulty === diff ? 'default' : 'outline'
                    }
                    onClick={() => setSelectedDifficulty(diff)}
                  >
                    {diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </Button>
                ),
              )}
            </div>
          </div>
          <Button
            onClick={getRandomProject}
            className="w-full gap-2"
          >
            <Shuffle className="h-4 w-4" />
            Surprise Me!
          </Button>
        </CardContent>
      </Card>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground">
        Showing {filteredProjects.length} project
        {filteredProjects.length !== 1 ? 's' : ''}
      </p>

      {/* Project Cards */}
      <div className="space-y-4">
        {filteredProjects.map((project, index) => {
          const actualIndex = projectIdeas.indexOf(project);
          const isExpanded = expandedProject === actualIndex;

          return (
            <Card
              key={actualIndex}
              className={`transition-shadow ${isExpanded ? 'ring-2 ring-primary' : ''}`}
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() =>
                  setExpandedProject(isExpanded ? null : actualIndex)
                }
              >
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Code className="h-5 w-5 text-primary" />
                      {project.title}
                    </CardTitle>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span
                        className={`rounded px-2 py-1 text-xs ${difficultyColors[project.difficulty]}`}
                      >
                        {project.difficulty.charAt(0).toUpperCase() +
                          project.difficulty.slice(1)}
                      </span>
                      <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                        {domainLabels[project.domain]}
                      </span>
                      <span className="flex items-center gap-1 rounded bg-muted px-2 py-1 text-xs">
                        <Clock className="h-3 w-3" />
                        {project.timeEstimate}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div>
                    <p className="mb-2 font-medium">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded bg-primary/10 px-2 py-1 text-xs text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 font-medium">Features to Implement:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2"
                        >
                          <Star className="h-3 w-3 text-yellow-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 font-medium">What You'll Learn:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.learnings.map((learning, i) => (
                        <li key={i}>• {learning}</li>
                      ))}
                    </ul>
                  </div>

                  {project.resources.length > 0 && (
                    <div>
                      <p className="mb-2 font-medium">Resources:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.resources.map((resource, i) => (
                          <a
                            key={i}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            {resource.name}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
