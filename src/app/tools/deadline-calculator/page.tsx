import { Metadata } from 'next';
import DeadlineCalculator from '@/components/tools/DeadlineCalculator';
import { Calendar, Clock, Target, Bell, CheckCircle } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = {
  title: 'Deadline Calculator & Tracker',
  description:
    'Track important deadlines for exams, interviews, scholarship applications, and projects. Calculate days remaining, set reminders, and never miss a deadline.',
  keywords:
    'deadline calculator, exam deadline, interview date tracker, application deadline, countdown timer, days remaining calculator, GATE deadline, CAT deadline, JEE deadline',
  openGraph: {
    title: 'Deadline Calculator & Tracker',
    description:
      'Track exam, interview, and application deadlines. Calculate days remaining instantly.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/deadline-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deadline Calculator',
    description:
      'Never miss an important deadline. Track exams, interviews, and applications.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/deadline-calculator',
  },
};

export default function DeadlineCalculatorPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sproutern.dpdns.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: 'https://sproutern.dpdns.org/tools',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Deadline Calculator',
        item: 'https://sproutern.dpdns.org/tools/deadline-calculator',
      },
    ],
  };

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Deadline Calculator & Tracker',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    description:
      'Track important deadlines for exams, interviews, scholarship applications, and projects. Calculate days remaining and never miss a deadline.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    author: {
      '@type': 'Organization',
      name: 'Sproutern',
    },
  };

  const content = toolsSEOContent['deadline-calculator'];

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container py-12 text-center md:py-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Calendar className="h-4 w-4" />
            Free Deadline Tracking Tool
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Deadline Calculator & Tracker
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-white/90">
            Never miss an important deadline again. Track exams, interviews,
            applications, and projects. See exactly how many days, hours, and
            minutes you have left.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Clock className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">Real-Time</p>
              <p className="text-xs text-muted-foreground">Live countdown</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Target className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">Categories</p>
              <p className="text-xs text-muted-foreground">Organize by type</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Bell className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Urgency Alerts</p>
              <p className="text-xs text-muted-foreground">Color-coded</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <CheckCircle className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Auto-Save</p>
              <p className="text-xs text-muted-foreground">Never lose data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Component */}
      <section className="container py-8">
        <DeadlineCalculator />
      </section>

      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="deadline-calculator"
            enhancedContent={content}
          />
        </div>
      )}
    </div>
  );
}
