import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  User,
  Heart,
  Target,
  BookOpen,
  ArrowRight,
  Star,
  Award,
  Globe,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
  MapPin,
  Calendar,
  CheckCircle,
  Rocket,
  GraduationCap,
  Linkedin,
  Twitter,
  Github,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'About Sproutern | Mission & Vision',
  description:
    'Built for students by career experts. Sproutern provides free career guidance, 30+ tools, and resources to help students worldwide launch successful careers. Learn about our mission and values.',
  keywords:
    'about sproutern, sproutern mission, sproutern vision, student career platform, global education, career guidance, internship platform, free career tools',
  openGraph: {
    title: 'About Sproutern | Our Mission & Story',
    description:
      'Empowering students worldwide with free career resources and tools.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/about',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/about',
  },
};

const values = [
  {
    title: 'Free Forever',
    desc: 'Core tools and resources will always be free for students globally.',
    icon: Heart,
  },
  {
    title: 'Student-First',
    desc: 'Every feature is designed with student needs in mind.',
    icon: Target,
  },
  {
    title: 'Quality Content',
    desc: 'Thoroughly researched, regularly updated information.',
    icon: BookOpen,
  },
  {
    title: 'Global Accessibility',
    desc: 'Serving students across 10+ countries with localized content.',
    icon: Globe,
  },
];

const stats = [
  { number: '30+', label: 'Interactive Tools', icon: Lightbulb },
  { number: '120+', label: 'Blog Articles', icon: BookOpen },
  { number: '60+', label: 'Scholarships Listed', icon: GraduationCap },
  { number: '10+', label: 'Country Guides', icon: Globe },
  { number: '50K+', label: 'Monthly Users', icon: Users },
  { number: '100+', label: 'Interview Experiences', icon: Star },
];

export default function AboutPage() {
  const siteUrl = 'https://sproutern.dpdns.org';

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${siteUrl}/about#aboutpage`,
        url: `${siteUrl}/about`,
        name: 'About Sproutern',
        description: 'Learn about Sproutern, the global career platform for students.',
        mainEntity: {
          '@type': 'Organization',
          '@id': `${siteUrl}#organization`,
          name: 'Sproutern',
          url: siteUrl,
          logo: `${siteUrl}/logo.jpg`,
          description: 'Global career platform providing free tools and resources for students.',
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/about#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: `${siteUrl}/about`,
          },
        ],
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20">
        <div className="container text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            <Globe className="mr-1 h-3 w-3" />
            Serving Students Worldwide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
            About Sproutern
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">
            Empowering students across the globe with free career guidance,
            tools, and resources to navigate their professional journey
            successfully.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <div className="mb-2 inline-flex w-fit rounded-full bg-primary/10 p-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To democratize career success by providing every student,
                regardless of their background or location, with access to
                world-class career guidance, tools, and resources — completely
                free of charge.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <div className="mb-2 inline-flex w-fit rounded-full bg-primary/10 p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To become the world's most trusted platform for student career
                development, bridging the gap between education and employment
                for millions of students across all continents.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-4">
              <Users className="mr-1 h-3 w-3" />
              Our Story
            </Badge>
            <h2 className="mb-6 text-3xl font-bold">
              Built for Students, by Experts
            </h2>
            <div className="space-y-6 text-left">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <strong>Sproutern was born out of a simple observation:</strong> career guidance is often scattered, expensive, or overly generic. Many talented students struggle not because they lack skill, but because they lack access to the "unwritten rules" of the professional world.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We saw students spending countless hours searching for information on resumes, interviews, and scholarships across fragmented platforms. We saw how the lack of centralized, quality resources created an unfair advantage for those with better connections.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                <strong>Our goal was to change that.</strong> We brought together career counselors, industry professionals, and technologists to build a platform that serves as a comprehensive support system for every student's professional journey.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Today, Sproutern serves thousands of students worldwide. We provide 30+ free tools, detailed career roadmaps, and real interview insights that help students bridge the gap between their education and their dream careers.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground font-bold">
                Our promise remains firm: Core career resources on Sproutern will always be free. Because your career success shouldn't depend on what you can afford, but on what you can achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Card key={i} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="mx-auto mb-4 h-10 w-10 opacity-80" />
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="mt-2 text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Editorial Excellence</h2>
            </div>
            <p className="mb-8 text-lg text-muted-foreground">
              Accuracy and trust are the foundations of Sproutern. Our content goes through a rigorous review process to ensure it meets the highest standards of career guidance.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Verified Experiences
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We verify user-submitted interview experiences to ensure authenticity and relevance for our readers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    Regular Updates
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our tools and data are reviewed quarterly to reflect the latest industry trends and university regulations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mb-20">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-white">
          <CardContent className="flex flex-col items-center p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Launch Your Career?</h2>
            <p className="mb-8 max-w-2xl text-lg text-white/90">
              Explore our free tools and resources designed to help you succeed in the professional world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/tools">Explore Tools</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/30" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
