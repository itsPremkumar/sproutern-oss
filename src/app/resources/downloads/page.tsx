import { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Download,
  BookOpen,
  Code,
  MessageSquare,
  Calculator,
  Briefcase,
  Target,
  Globe,
  CheckCircle,
  Star,
  Users,
  ArrowRight,
  FileDown,
  Sparkles,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Free Downloadable Career Resources | Resume Templates, Interview Guides and More',
  description:
    'Download free career resources: ATS-friendly resume templates, interview cheatsheets, DSA notes, aptitude formulas, cover letter templates, and more for students and job seekers.',
  keywords:
    'free resume templates, interview cheatsheet PDF, DSA notes PDF, aptitude formulas PDF, cover letter templates, career resources download, placement preparation materials',
  openGraph: {
    title: 'Free Downloadable Resources for Students',
    description:
      'Free career resources: resume templates, interview prep, DSA notes, and more.',
    type: 'website',
    url: 'https://www.sproutern.com/resources/downloads',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/resources/downloads',
  },
};

const resources = [
  {
    category: 'Resume & Cover Letters',
    icon: FileText,
    color: 'bg-blue-500',
    items: [
      {
        name: 'ATS-Friendly Resume Templates (5 Pack)',
        description:
          'Professional resume templates optimized for Applicant Tracking Systems. Includes IT, Non-IT, and Fresher variants.',
        format: 'DOCX + PDF',
        downloads: '15,000+',
        isPopular: true,
        link: '/resources/resume-templates',
      },
      {
        name: 'Cover Letter Templates for Freshers',
        description:
          'Customizable cover letter templates for internships, entry-level jobs, and referral requests.',
        format: 'DOCX',
        downloads: '8,500+',
        isPopular: false,
        link: '/resources/cover-letters',
      },
      {
        name: 'LinkedIn Profile Optimization Checklist',
        description:
          'Step-by-step checklist to create a professional LinkedIn profile that attracts recruiters.',
        format: 'PDF',
        downloads: '6,200+',
        isPopular: false,
        link: '/resources/linkedin-optimization',
      },
      {
        name: 'ATS Resume Keywords Guide',
        description:
          'Learn how to extract resume keywords from job descriptions and place them naturally for better ATS matching.',
        format: 'Guide',
        downloads: '5,400+',
        isPopular: false,
        link: '/resources/ats-resume-keywords',
      },
    ],
  },
  {
    category: 'Interview Preparation',
    icon: MessageSquare,
    color: 'bg-green-500',
    items: [
      {
        name: '100 HR Interview Questions & Answers',
        description:
          'Comprehensive guide with answers to common HR questions including "Tell me about yourself", strengths, weaknesses, and behavioral questions.',
        format: 'PDF',
        downloads: '22,000+',
        isPopular: true,
        link: '/resources/interview-prep',
      },
      {
        name: 'STAR Method Interview Guide',
        description:
          'Master behavioral interviews with the Situation-Task-Action-Result framework and 50+ example responses.',
        format: 'PDF',
        downloads: '12,500+',
        isPopular: true,
        link: '/blog/mastering-star-method',
      },
      {
        name: 'Group Discussion Topics & Tips',
        description:
          "Latest GD topics, do's and don'ts, and strategies to stand out in group discussions.",
        format: 'PDF',
        downloads: '9,800+',
        isPopular: false,
        link: '/blog/group-discussion-tips',
      },
    ],
  },
  {
    category: 'Technical Preparation',
    icon: Code,
    color: 'bg-purple-500',
    items: [
      {
        name: 'DSA Cheatsheet for Interviews',
        description:
          'Data Structures & Algorithms quick reference with Big-O complexities, common patterns, and code snippets.',
        format: 'PDF',
        downloads: '18,000+',
        isPopular: true,
        link: '/resources/interview-cheatsheet',
      },
      {
        name: 'SQL Interview Questions Cheatsheet',
        description:
          'Essential SQL queries, joins, subqueries, and database concepts for technical interviews.',
        format: 'PDF',
        downloads: '11,200+',
        isPopular: false,
        link: '/resources/interview-cheatsheet',
      },
      {
        name: 'System Design Interview Basics',
        description:
          'Introduction to system design concepts, scalability, load balancing, and common architecture patterns.',
        format: 'PDF',
        downloads: '7,500+',
        isPopular: false,
        link: '/blog/system-design-interview-guide',
      },
      {
        name: 'GitHub Profile Optimization Guide',
        description:
          'Improve your profile README, pinned repos, and project presentation before applying to technical roles.',
        format: 'Guide',
        downloads: '4,900+',
        isPopular: false,
        link: '/resources/github-profile',
      },
    ],
  },
  {
    category: 'Aptitude & Reasoning',
    icon: Calculator,
    color: 'bg-orange-500',
    items: [
      {
        name: 'Quantitative Aptitude Formulas',
        description:
          'All essential formulas for percentage, profit/loss, time & work, permutations, probability, and more.',
        format: 'PDF',
        downloads: '25,000+',
        isPopular: true,
        link: '/resources/aptitude-formulas',
      },
      {
        name: 'Logical Reasoning Patterns Guide',
        description:
          'Common reasoning patterns, shortcuts, and practice approaches for placement tests.',
        format: 'PDF',
        downloads: '14,800+',
        isPopular: false,
        link: '/resources/aptitude-formulas',
      },
      {
        name: 'Verbal Ability Quick Reference',
        description:
          'Grammar rules, synonyms/antonyms, idioms, and reading comprehension strategies.',
        format: 'PDF',
        downloads: '9,200+',
        isPopular: false,
        link: '/resources/aptitude-formulas',
      },
    ],
  },
  {
    category: 'Career Planning',
    icon: Target,
    color: 'bg-pink-500',
    items: [
      {
        name: 'Placement Preparation Timeline',
        description:
          '6-month and 3-month preparation roadmaps for campus placements with daily/weekly tasks.',
        format: 'PDF',
        downloads: '13,500+',
        isPopular: true,
        link: '/resources/career-planning',
      },
      {
        name: 'Application Tracker Template',
        description:
          'Excel/Sheets template to track job applications, statuses, follow-ups, and interview schedules.',
        format: 'XLSX',
        downloads: '8,900+',
        isPopular: false,
        link: '/tools/application-tracker',
      },
      {
        name: 'Career Roadmap: Software Developer',
        description:
          'Visual roadmap from student to senior developer with skills, certifications, and milestones.',
        format: 'PDF',
        downloads: '11,000+',
        isPopular: false,
        link: '/tools/career-roadmap',
      },
    ],
  },
  {
    category: 'Study Abroad',
    icon: Globe,
    color: 'bg-cyan-500',
    items: [
      {
        name: 'Study Abroad Application Checklist',
        description:
          'Complete checklist for MS/MBA applications including documents, tests, and timelines.',
        format: 'PDF',
        downloads: '7,200+',
        isPopular: false,
        link: '/global-career-guide',
      },
      {
        name: 'SOP Writing Guide & Examples',
        description:
          "Statement of Purpose writing tips, structure, do's/don'ts, and sample SOPs for different fields.",
        format: 'PDF',
        downloads: '9,500+',
        isPopular: true,
        link: '/tools/sop-outliner',
      },
      {
        name: 'Visa Document Preparation Guide',
        description:
          'Country-wise visa requirements, document checklists, and common interview questions.',
        format: 'PDF',
        downloads: '5,800+',
        isPopular: false,
        link: '/global-career-guide',
      },
    ],
  },
];

export default function DownloadsPage() {
  const totalDownloads = resources.reduce(
    (acc, cat) =>
      acc +
      cat.items.reduce(
        (sum, item) => sum + parseInt(item.downloads.replace(/[^0-9]/g, '')),
        0,
      ),
    0,
  );

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container py-16 text-center md:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Download className="h-4 w-4" />
            Free Career Resources
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Downloadable Resources
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Free, curated career resources to accelerate your placement
            preparation. Resume templates, interview cheatsheets, aptitude
            formulas, and more - all designed for Indian students.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <FileDown className="h-5 w-5" />
              <span className="font-semibold">
                {(totalDownloads / 1000).toFixed(0)}K+ Downloads
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">Regularly Updated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources by Category */}
      <section className="container py-12">
        {resources.map((category, catIndex) => (
          <div
            key={catIndex}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.color}`}
              >
                <category.icon className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold">{category.category}</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
                  className="relative overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  {item.isPopular && (
                    <div className="absolute right-0 top-0">
                      <Badge className="rounded-none rounded-bl-lg bg-amber-500 text-white">
                        <Star className="mr-1 h-3 w-3" /> Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="mb-2 pr-16 font-bold">{item.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mb-4 flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        {item.format}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="h-4 w-4 text-muted-foreground" />
                        {item.downloads}
                      </span>
                    </div>

                    <Button
                      asChild
                      className="w-full"
                    >
                      <Link href={item.link}>
                        <Download className="mr-2 h-4 w-4" />
                        Access Resource
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* How to Use Section */}
      <section className="container bg-muted/30 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">
          How to Use These Resources
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Download',
                desc: 'Click on any resource to access the download page. All resources are free.',
              },
              {
                step: '2',
                title: 'Customize',
                desc: 'Edit templates with your information. Follow guides step by step.',
              },
              {
                step: '3',
                title: 'Apply',
                desc: 'Use in your job applications, interviews, and career preparation.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Want More?</h2>
          <p className="mb-6 text-muted-foreground">
            Explore our interactive tools for resume building, interview prep,
            and career planning
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools">
                <Briefcase className="mr-2 h-4 w-4" />
                Explore Tools
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources">
                <BookOpen className="mr-2 h-4 w-4" />
                All Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
