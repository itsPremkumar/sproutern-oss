import { Metadata } from 'next';
import ChecklistGenerator from '@/components/tools/ChecklistGenerator';
import { CheckSquare, Printer, FileText, Briefcase } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = {
  title: 'Checklist Generator',
  description:
    'Create and print checklists for interview preparation, resume writing, campus placement, study abroad, and more. Free templates with progress tracking.',
  keywords:
    'checklist generator, interview checklist, resume checklist, placement checklist, printable checklist, study abroad checklist, job preparation checklist, document checklist',
  openGraph: {
    title: 'Printable Checklist Generator',
    description:
      'Create printable checklists for interviews, placements, and more. Track your preparation progress.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/checklist-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checklist Generator',
    description: 'Free printable checklists for students and job seekers.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/checklist-generator',
  },
};

export default function ChecklistGeneratorPage() {
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
        name: 'Checklist Generator',
        item: 'https://sproutern.dpdns.org/tools/checklist-generator',
      },
    ],
  };

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Printable Checklist Generator',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    description:
      'Create and print checklists for interview preparation, resume writing, campus placement, study abroad, and more.',
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

  const content = toolsSEOContent['checklist-generator'];

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
            <CheckSquare className="h-4 w-4" />
            Free Checklist Templates
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Printable Checklist Generator
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-white/90">
            Create professional, printable checklists for interviews,
            placements, applications, and more. Choose from 6 ready-to-use
            templates or build your own.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <FileText className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">6 Templates</p>
              <p className="text-xs text-muted-foreground">Ready to use</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Printer className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">Print Ready</p>
              <p className="text-xs text-muted-foreground">Clean format</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <CheckSquare className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Customizable</p>
              <p className="text-xs text-muted-foreground">Add your items</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Briefcase className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Progress Track</p>
              <p className="text-xs text-muted-foreground">Check off items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Component */}
      <section className="container py-8">
        <ChecklistGenerator />
      </section>

      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="checklist-generator"
            enhancedContent={content}
          />
        </div>
      )}
    </div>
  );
}
