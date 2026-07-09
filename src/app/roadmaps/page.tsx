import { Metadata } from 'next';
import Link from 'next/link';
import {
  Map,
  Code,
  Database,
  LineChart,
  Palette,
  Shield,
  Cloud,
  Smartphone,
  Brain,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  BookOpen,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Career Roadmaps: Software Engineer & More',
  description:
    'Detailed career roadmaps for Software Engineer, Data Scientist, Product Manager, DevOps Engineer, UI/UX Designer, and more. Step-by-step guides with skills, certifications, and timelines.',
  keywords:
    'career roadmap, software engineer roadmap, data scientist roadmap, product manager roadmap, devops roadmap, ui ux designer roadmap, career path, skills roadmap, learning path',
  openGraph: {
    title: 'Career Roadmaps',
    description:
      'Step-by-step career guides for tech and business roles. Skills, certifications, and timelines included.',
    type: 'website',
    url: 'https://www.sproutern.com/roadmaps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Roadmaps - Tech & Business Roles',
    description:
      'Plan your career path with detailed roadmaps for popular roles.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/roadmaps',
  },
};

const roadmaps = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    description: 'Full stack development, system design, and DSA mastery',
    duration: '6-12 months',
    difficulty: 'Intermediate',
    salary: '₹6-25 LPA',
    globalSalary: 'US $120-180K | UK £50-85K | DE €60-90K',
    remoteSalary: '$60k-120k/yr',
    globalDemand: 'Very High',
    skills: [
      'JavaScript',
      'Python',
      'React',
      'Node.js',
      'SQL',
      'System Design',
    ],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    description: 'Statistics, ML, deep learning, and data analysis',
    duration: '8-14 months',
    difficulty: 'Advanced',
    salary: '₹8-30 LPA',
    globalSalary: 'US $130-200K | UK £55-95K | DE €65-100K',
    remoteSalary: '$70k-130k/yr',
    globalDemand: 'High',
    skills: [
      'Python',
      'Statistics',
      'Machine Learning',
      'SQL',
      'TensorFlow',
      'Tableau',
    ],
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    icon: Briefcase,
    color: 'from-green-500 to-emerald-500',
    description: 'Product strategy, user research, and roadmap planning',
    duration: '6-10 months',
    difficulty: 'Intermediate',
    salary: '₹12-40 LPA',
    globalSalary: 'US $140-220K | UK £60-100K | DE €70-110K',
    remoteSalary: '$80k-140k/yr',
    globalDemand: 'High',
    skills: [
      'Product Strategy',
      'User Research',
      'Analytics',
      'Agile',
      'SQL',
      'Wireframing',
    ],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    description: 'CI/CD, cloud infrastructure, and automation',
    duration: '8-12 months',
    difficulty: 'Advanced',
    salary: '₹8-28 LPA',
    globalSalary: 'US $130-180K | UK £55-80K | DE €65-95K',
    remoteSalary: '$70k-130k/yr',
    globalDemand: 'Very High',
    skills: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    description: 'User experience, interface design, and prototyping',
    duration: '4-8 months',
    difficulty: 'Beginner',
    salary: '₹5-20 LPA',
    globalSalary: 'US $90-140K | UK £40-70K | DE €50-80K',
    remoteSalary: '$50k-100k/yr',
    globalDemand: 'High',
    skills: [
      'Figma',
      'Adobe XD',
      'User Research',
      'Prototyping',
      'Design Systems',
      'CSS',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Analyst',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    description: 'Network security, ethical hacking, and compliance',
    duration: '10-14 months',
    difficulty: 'Advanced',
    salary: '₹6-25 LPA',
    globalSalary: 'US $100-160K | UK £50-90K | DE €55-85K',
    remoteSalary: '$80k-140k/yr',
    globalDemand: 'Very High',
    skills: [
      'Networking',
      'Linux',
      'Python',
      'SIEM',
      'Penetration Testing',
      'Cloud Security',
    ],
  },
  {
    id: 'mobile-developer',
    title: 'Mobile App Developer',
    icon: Smartphone,
    color: 'from-indigo-500 to-purple-500',
    description: 'iOS, Android, and cross-platform development',
    duration: '6-10 months',
    difficulty: 'Intermediate',
    salary: '₹6-22 LPA',
    globalSalary: 'US $110-170K | UK £45-75K | DE €55-85K',
    remoteSalary: '$60k-110k/yr',
    globalDemand: 'High',
    skills: [
      'React Native',
      'Flutter',
      'Kotlin',
      'Swift',
      'Firebase',
      'REST APIs',
    ],
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    description: 'Deep learning, NLP, computer vision, and MLOps',
    duration: '12-18 months',
    difficulty: 'Advanced',
    salary: '₹10-35 LPA',
    globalSalary: 'US $150-250K | UK £60-110K | DE €70-120K',
    remoteSalary: '$90k-160k/yr',
    globalDemand: 'Very High',
    skills: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'MLOps',
      'NLP',
      'Computer Vision',
    ],
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    icon: LineChart,
    color: 'from-teal-500 to-green-500',
    description: 'Data visualization, SQL, and business insights',
    duration: '4-6 months',
    difficulty: 'Beginner',
    salary: '₹4-15 LPA',
    globalSalary: 'US $70-110K | UK £35-55K | DE €45-65K',
    remoteSalary: '$40k-80k/yr',
    globalDemand: 'High',
    skills: ['Excel', 'SQL', 'Python', 'Tableau', 'Power BI', 'Statistics'],
  },
];

export default function RoadmapsPage() {
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
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Career Roadmaps',
    description:
      'Comprehensive career roadmaps for popular tech and business roles',
    url: 'https://www.sproutern.com/roadmaps',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Career Roadmaps',
      numberOfItems: roadmaps.length,
      itemListElement: roadmaps.map((roadmap, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${roadmap.title} Roadmap`,
        url: `https://www.sproutern.com/roadmaps/${roadmap.id}`,
      })),
    },
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container py-16 text-center md:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Map className="h-4 w-4" />
            Updated Regularly
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Career Roadmaps
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Step-by-step guides to help you navigate your career journey. Each
            roadmap includes skills to learn, certifications to get, projects to
            build, and realistic timelines based on industry standards.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Map className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">{roadmaps.length} Roadmaps</p>
              <p className="text-xs text-muted-foreground">Detailed guides</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">100+ Skills</p>
              <p className="text-xs text-muted-foreground">To master</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Free Resources</p>
              <p className="text-xs text-muted-foreground">Learning links</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Target className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Industry Aligned</p>
              <p className="text-xs text-muted-foreground">
                Industry standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="container py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Choose Your Path
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((roadmap) => {
            const IconComponent = roadmap.icon;
            return (
              <Card
                key={roadmap.id}
                className="group overflow-hidden transition-all hover:border-primary/50 hover:shadow-xl"
              >
                <div className={`h-2 bg-gradient-to-r ${roadmap.color}`} />
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className={`rounded-xl bg-gradient-to-br p-3 ${roadmap.color} text-white`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-xl font-bold">
                        {roadmap.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {roadmap.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="text-xs"
                    >
                      <Clock className="mr-1 h-3 w-3" />
                      {roadmap.duration}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-xs"
                    >
                      {roadmap.difficulty}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-xs text-green-600"
                    >
                      🇮🇳 {roadmap.salary}
                    </Badge>
                  </div>
                  {roadmap.globalSalary && (
                    <div className="mb-2 space-y-1">
                      <div className="rounded-md bg-blue-50 px-3 py-1.5 text-xs text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        🌍 <span className="font-medium">Global:</span>{' '}
                        {roadmap.globalSalary}
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 rounded-md bg-purple-50 px-3 py-1.5 text-xs text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                          🏠 <span className="font-medium">Remote:</span>{' '}
                          {roadmap.remoteSalary}
                        </div>
                        <div className="rounded-md bg-green-50 px-3 py-1.5 text-xs text-green-700 dark:bg-green-950 dark:text-green-300">
                          📈 {roadmap.globalDemand}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="mb-2 text-xs text-muted-foreground">
                      Key Skills:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {roadmap.skills.slice(0, 4).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {roadmap.skills.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          +{roadmap.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full group-hover:bg-primary/90"
                  >
                    <Link href={`/roadmaps/${roadmap.id}`}>
                      View Roadmap
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* How to Use */}
      <section className="container bg-muted/30 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold">How to Use These Roadmaps</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                1
              </div>
              <h3 className="mb-2 font-bold">Choose Your Path</h3>
              <p className="text-sm text-muted-foreground">
                Select a career roadmap that aligns with your interests and
                goals.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                2
              </div>
              <h3 className="mb-2 font-bold">Follow the Steps</h3>
              <p className="text-sm text-muted-foreground">
                Each roadmap is divided into phases. Complete them sequentially.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                3
              </div>
              <h3 className="mb-2 font-bold">Build Projects</h3>
              <p className="text-sm text-muted-foreground">
                Apply your skills by building projects mentioned in each phase.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Not Sure Which Career to Choose?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Take our skills assessment to discover which career path matches
            your strengths and interests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
            >
              <Link href="/tools/skills-assessment">
                <Target className="mr-2 h-5 w-5" />
                Take Skills Assessment
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link href="/tools/career-roadmap">
                <Map className="mr-2 h-5 w-5" />
                AI Career Roadmap
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
