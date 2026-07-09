import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Briefcase,
  ExternalLink,
  ArrowLeft,
  Code,
  Palette,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Portfolio Templates | Free Developer Portfolios',
  description:
    'Free portfolio templates for developers, designers, and students. Create stunning portfolios to showcase your work.',
  keywords:
    'portfolio templates, developer portfolio, free portfolio, portfolio website, portfolio design',
  alternates: {
    canonical: 'https://www.sproutern.com/resources/portfolio-templates',
  },
};

const templates = [
  {
    name: 'Minimal Developer',
    tech: 'React',
    type: 'Developer',
    difficulty: 'Beginner',
    description:
      'Clean, minimalist portfolio perfect for showcasing projects with a focus on code and functionality.',
    features: [
      'Responsive design',
      'Dark mode support',
      'Project showcase',
      'Contact form',
    ],
    githubUrl: 'https://github.com/craftzdog/craftzdog-homepage',
  },
  {
    name: 'Creative Designer',
    tech: 'Next.js',
    type: 'Designer',
    difficulty: 'Intermediate',
    description:
      'Visually stunning portfolio with smooth animations and creative layouts for design professionals.',
    features: [
      'Animated transitions',
      'Gallery view',
      'Case studies',
      'Testimonials',
    ],
    githubUrl: 'https://github.com/leerob/leerob.io',
  },
  {
    name: 'Modern Resume',
    tech: 'HTML/CSS',
    type: 'Student',
    difficulty: 'Beginner',
    description:
      'Simple yet elegant resume-style portfolio ideal for students and fresh graduates.',
    features: [
      'Print-friendly',
      'Skills section',
      'Education timeline',
      'ATS-optimized',
    ],
    githubUrl: 'https://github.com/BartoszJaworski/minimalist-portfolio',
  },
  {
    name: 'Full Stack',
    tech: 'Next.js + Tailwind',
    type: 'Developer',
    difficulty: 'Advanced',
    description:
      'Comprehensive portfolio with blog, project demos, and integrated CMS for full-stack developers.',
    features: [
      'Blog integration',
      'MDX support',
      'SEO optimized',
      'Analytics ready',
    ],
    githubUrl: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  },
];

export default function PortfolioTemplatesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/resources"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Resources
        </Link>
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900">
              <Briefcase className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Portfolio Templates</h1>
              <p className="text-muted-foreground">
                Free templates to showcase your work
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="p-4 text-center">
            <Code className="mx-auto mb-2 h-8 w-8 text-blue-600" />
            <p className="font-semibold">For Developers</p>
            <p className="text-sm text-muted-foreground">
              Modern, responsive designs
            </p>
          </Card>
          <Card className="p-4 text-center">
            <Palette className="mx-auto mb-2 h-8 w-8 text-pink-600" />
            <p className="font-semibold">For Designers</p>
            <p className="text-sm text-muted-foreground">
              Creative and visual layouts
            </p>
          </Card>
          <Card className="p-4 text-center">
            <FileText className="mx-auto mb-2 h-8 w-8 text-green-600" />
            <p className="font-semibold">For Students</p>
            <p className="text-sm text-muted-foreground">
              Simple resume portfolios
            </p>
          </Card>
        </div>

        <h2 className="mb-6 text-2xl font-bold">Available Templates</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {templates.map((t) => (
            <Card
              key={t.name}
              className="transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {t.name}
                  <Badge variant="outline">{t.difficulty}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex gap-2">
                  <Badge>{t.tech}</Badge>
                  <Badge variant="secondary">{t.type}</Badge>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  {t.description}
                </p>
                <ul className="mb-4 space-y-1 text-xs text-muted-foreground">
                  {t.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <a
                    href={t.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-secondary p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Turn Templates into a Stronger Portfolio
          </h2>
          <p className="mb-6 text-muted-foreground">
            A good portfolio is more than a layout. Use stronger README files,
            cleaner GitHub projects, and better project descriptions so your
            work feels credible the moment someone clicks.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/resources/github-profile">
                GitHub Profile Guide
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
            >
              <Link href="/tools/github-readme-generator">
                GitHub README Generator
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
