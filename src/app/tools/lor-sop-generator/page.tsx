import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import LorSopGeneratorClient from './LorSopGeneratorClient';
import { FileText, CheckCircle, GraduationCap, Globe } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'LOR & SOP Generator - LOR & SOP',
  description:
    'Free LOR and SOP generator for university applications. Create professional Letter of Recommendation and Statement of Purpose documents for MS, MBA, and PhD admissions.',
  keywords: [
    'lor generator',
    'sop generator',
    'letter of recommendation template',
    'statement of purpose template',
    'ms application',
    'mba application',
    'university application',
    'study abroad',
  ],
  canonical: '/tools/lor-sop-generator',
});

export default function LorSopGeneratorPage() {
  const content = toolsSEOContent['lor-sop-generator'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Study Abroad
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            LOR & SOP Generator
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Create professional Letter of Recommendation and Statement of
            Purpose documents for your university applications.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <FileText className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">2 Templates</p>
              <p className="text-xs text-muted-foreground">LOR & SOP</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <CheckCircle className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">Pro Format</p>
              <p className="text-xs text-muted-foreground">
                University standard
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Globe className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Global Ready</p>
              <p className="text-xs text-muted-foreground">US, UK, Canada</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <GraduationCap className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">MS/MBA/PhD</p>
              <p className="text-xs text-muted-foreground">All programs</p>
            </div>
          </div>
        </div>

        {/* Generator Component */}
        <LorSopGeneratorClient />

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="lor-sop-generator"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
