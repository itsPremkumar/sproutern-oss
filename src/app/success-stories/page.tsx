import { Metadata } from 'next';
import Link from 'next/link';
import {
  Star,
  Quote,
  TrendingUp,
  Users,
  Award,
  GraduationCap,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Building,
  MapPin,
  Calendar,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Success Stories | Real Student and Startup Stories',
  description:
    'Read real success stories from students who landed their dream internships and startups who found exceptional talent through Sproutern. Get inspired by their journeys.',
  keywords:
    'internship success stories, student placement, startup hiring success, career success, Sproutern reviews, internship testimonials',
  openGraph: {
    title: 'Success Stories - Students & Startups Who Succeeded with Sproutern',
    description:
      'Real stories from students who landed internships and startups who found great talent.',
    type: 'website',
  },
};

const studentStories = [
  {
    name: 'Aditya Sharma',
    role: 'Software Engineering Intern',
    company: 'TechFlow Solutions',
    location: 'Bangalore',
    college: 'NIT Trichy',
    year: '2024',
    image: null,
    quote:
      "I was struggling to get responses from companies despite having good projects. Sproutern's AI resume optimizer helped me identify what was wrong. Within 2 weeks of updating my profile, I had 3 interview calls.",
    result: 'Landed ₹45,000/month internship',
    journey: [
      'Used CGPA converter to understand eligibility requirements',
      'Optimized resume with AI tool - score improved from 62 to 89',
      'Applied to 15 startups, got 3 interviews',
      'Received offer within 3 weeks',
    ],
    skills: ['React', 'Node.js', 'Python'],
  },
  {
    name: 'Priya Menon',
    role: 'Data Science Intern',
    company: 'AnalyticsPro',
    location: 'Hyderabad',
    college: 'BITS Pilani',
    year: '2024',
    image: null,
    quote:
      'The interview preparation resources on Sproutern were incredible. The 50 common questions guide helped me prepare answers I actually used in my interview. Highly recommend!',
    result: 'Converted to full-time offer',
    journey: [
      'Found the internship listing on Sproutern',
      'Prepared using interview questions guide',
      'Used salary calculator to negotiate stipend',
      'Got PPO (Pre-Placement Offer) at the end',
    ],
    skills: ['Python', 'Machine Learning', 'SQL'],
  },
  {
    name: 'Rahul Verma',
    role: 'Marketing Intern',
    company: 'GrowthHub',
    location: 'Delhi NCR',
    college: 'Delhi University',
    year: '2024',
    image: null,
    quote:
      'As a non-engineering student, I always felt disadvantaged in the job market. Sproutern showed me there are amazing opportunities at startups that value creativity and hustle over just technical skills.',
    result: 'Started own marketing agency',
    journey: [
      'Applied to 8 marketing roles',
      'Used cover letter tips from blog',
      'Learned growth marketing during internship',
      'Now runs a successful freelance business',
    ],
    skills: ['Digital Marketing', 'Content Strategy', 'SEO'],
  },
  {
    name: 'Sneha Patel',
    role: 'UI/UX Design Intern',
    company: 'DesignStudio India',
    location: 'Mumbai',
    college: 'NID Ahmedabad',
    year: '2024',
    image: null,
    quote:
      'The quality of startups on Sproutern is much better than other platforms. I found companies that actually care about design and give interns real projects, not just busywork.',
    result: 'Portfolio with 5 live products',
    journey: [
      'Found design-focused startups on Sproutern',
      'Applied with portfolio link',
      'Worked on actual product designs',
      'Built impressive portfolio for future jobs',
    ],
    skills: ['Figma', 'User Research', 'Prototyping'],
  },
];

const startupStories = [
  {
    company: 'TechFlow Solutions',
    founder: 'Vikram Singh, CEO',
    industry: 'B2B SaaS',
    location: 'Bangalore',
    quote:
      "We've hired 12 interns through Sproutern over the past year. The quality of candidates is consistently high - they come prepared, skilled, and ready to contribute. Three of them are now full-time employees.",
    results: [
      '12 interns hired in 1 year',
      '3 converted to full-time',
      '40% reduction in hiring time',
    ],
  },
  {
    company: 'GreenTech Innovations',
    founder: 'Ananya Rao, Co-founder',
    industry: 'CleanTech',
    location: 'Chennai',
    quote:
      'As a sustainability startup, we needed interns who genuinely care about our mission. Sproutern helped us find passionate students who brought fresh perspectives and energy to our team.',
    results: [
      '8 interns from top colleges',
      '2 published research papers',
      'Launched student ambassador program',
    ],
  },
];

const stats = [
  { value: '10,000+', label: 'Successful Placements', icon: GraduationCap },
  { value: '500+', label: 'Partner Startups', icon: Building },
  { value: '95%', label: 'Satisfaction Rate', icon: Star },
  { value: '78%', label: 'PPO Conversion', icon: TrendingUp },
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-secondary/50 py-16 md:py-24">
        <div className="container text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            <Award className="h-4 w-4" />
            Real Stories, Real Results
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Success Stories
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Discover how students landed their dream internships and startups
            found exceptional talent through Sproutern.
          </p>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="border-white/20 bg-white/10"
              >
                <CardContent className="pt-6 text-center text-white">
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-white/80" />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Student Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From first application to dream internship - here's how students
            achieved their career goals.
          </p>
        </div>

        <div className="space-y-12">
          {studentStories.map((story, index) => (
            <Card
              key={story.name}
              className="overflow-hidden"
            >
              <CardContent className="p-0">
                <div
                  className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Story Content */}
                  <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <p className="font-medium text-primary">{story.role}</p>
                        <p className="text-sm text-muted-foreground">
                          {story.company} • {story.location}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/20" />
                      <p className="pl-6 italic text-muted-foreground">
                        "{story.quote}"
                      </p>
                    </div>

                    {/* Result Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 dark:bg-green-900 dark:text-green-300">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">{story.result}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {story.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-muted px-3 py-1 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Journey Timeline */}
                  <div className="bg-muted/50 p-8 md:p-10">
                    <h4 className="mb-4 flex items-center gap-2 font-bold">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Their Journey
                    </h4>
                    <div className="space-y-4">
                      {story.journey.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                            {stepIndex + 1}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t pt-4">
                      <p className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {story.college} • {story.year}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Startup Stories */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Startup Success Stories
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              How innovative startups are building their dream teams with
              Sproutern.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {startupStories.map((story) => (
              <Card key={story.company}>
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{story.company}</h3>
                      <p className="text-sm text-muted-foreground">
                        {story.industry} • {story.location}
                      </p>
                    </div>
                  </div>

                  <Quote className="mb-2 h-6 w-6 text-primary/30" />
                  <p className="mb-6 italic text-muted-foreground">
                    "{story.quote}"
                  </p>
                  <p className="mb-4 text-sm font-medium text-primary">
                    — {story.founder}
                  </p>

                  <div className="border-t pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
                      Results
                    </p>
                    <ul className="space-y-1">
                      {story.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 text-center md:py-24">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Write Your Own Success Story
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Join thousands of students and startups who have found success through
          Sproutern.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            asChild
          >
            <Link
              href="/internships"
              className="gap-2"
            >
              Browse Internships <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="/post-internship">Post an Internship</Link>
          </Button>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="bg-primary/5 py-12">
        <div className="container text-center">
          <h3 className="mb-2 text-xl font-bold">
            Have a success story to share?
          </h3>
          <p className="mb-4 text-muted-foreground">
            We'd love to feature your journey and inspire others.
          </p>
          <Button
            variant="outline"
            asChild
          >
            <Link href="/contact">Submit Your Story</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
