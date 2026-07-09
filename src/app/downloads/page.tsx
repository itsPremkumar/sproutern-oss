import { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  FileText,
  Table,
  FileSpreadsheet,
  CheckCircle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Free Downloadable Templates | Student Resources',
  description:
    'Free downloadable templates for students - scholarship tracker, job application tracker, study planner, visa checklists, and more.',
  keywords:
    'free templates students, scholarship tracker, job application tracker, study planner template, visa checklist',
  robots: {
    index: true,
    follow: true,
  },
};

const templates = [
  {
    name: 'Scholarship Tracker',
    desc: 'Track scholarship applications, deadlines, and status',
    format: 'Google Sheets',
    category: 'Scholarships',
    link: '/downloads/scholarship-tracker',
    icon: Table,
  },
  {
    name: 'Job Application Tracker',
    desc: 'Track job applications, interviews, and follow-ups',
    format: 'Google Sheets',
    category: 'Jobs',
    link: '/downloads/job-tracker',
    icon: FileSpreadsheet,
  },
  {
    name: 'Weekly Study Planner',
    desc: 'Plan your week with subject-wise study blocks',
    format: 'PDF',
    category: 'Productivity',
    link: '/downloads/study-planner',
    icon: FileText,
  },
  {
    name: 'College Comparison Worksheet',
    desc: 'Compare colleges on fees, placements, location, etc.',
    format: 'PDF',
    category: 'College',
    link: '/downloads/college-comparison',
    icon: FileText,
  },
  {
    name: 'USA Visa Checklist',
    desc: 'Complete F1 visa document checklist',
    format: 'PDF',
    category: 'Study Abroad',
    link: '/downloads/usa-visa-checklist',
    icon: FileText,
  },
  {
    name: 'UK Visa Checklist',
    desc: 'Complete UK student visa document checklist',
    format: 'PDF',
    category: 'Study Abroad',
    link: '/downloads/uk-visa-checklist',
    icon: FileText,
  },
  {
    name: 'Interview Preparation Sheet',
    desc: 'Common questions and STAR method template',
    format: 'PDF',
    category: 'Jobs',
    link: '/downloads/interview-prep',
    icon: FileText,
  },
  {
    name: 'Semester Expense Tracker',
    desc: 'Track your monthly expenses as a student',
    format: 'Google Sheets',
    category: 'Finance',
    link: '/downloads/expense-tracker',
    icon: Table,
  },
  {
    name: 'Project Ideas List',
    desc: '100+ project ideas for portfolio building',
    format: 'PDF',
    category: 'Learning',
    link: '/downloads/project-ideas',
    icon: FileText,
  },
  {
    name: 'Email Templates Pack',
    desc: 'Cold email, follow-up, and networking templates',
    format: 'PDF',
    category: 'Career',
    link: '/downloads/email-templates',
    icon: FileText,
  },
];

const categories = [
  'All',
  'Scholarships',
  'Jobs',
  'Study Abroad',
  'Productivity',
  'College',
  'Finance',
  'Learning',
  'Career',
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Download className="mr-1 h-3 w-3" />
            Free Resources
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Downloadable Templates
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Free templates and trackers to help you stay organized.
          </p>
        </div>
      </section>

      <section className="container py-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant="outline"
              className="cursor-pointer hover:bg-primary/10"
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <Card
              key={t.name}
              className="transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <t.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">{t.format}</Badge>
                </div>
                <h3 className="mb-1 text-lg font-bold">{t.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{t.desc}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{t.category}</Badge>
                  <Button
                    size="sm"
                    asChild
                  >
                    <Link href={t.link}>
                      <Download className="mr-1 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-muted/30">
          <CardContent className="p-8 text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-2xl font-bold">Need More Resources?</h2>
            <p className="mb-6 text-muted-foreground">
              Check out our comprehensive resource library with guides,
              cheatsheets, and more.
            </p>
            <Button asChild>
              <Link href="/resources">
                View All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
