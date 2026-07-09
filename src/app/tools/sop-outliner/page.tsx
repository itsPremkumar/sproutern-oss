import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { SOPOutliner } from '@/components/tools/SOPOutliner';
import { BookOpen, UserCheck, GraduationCap, CheckCircle } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata = {
  title: 'Free AI SOP Outliner - Smart SOP Generator',
  description:
    'Generate a structured Statement of Purpose (SOP) outline for your masters or PhD application using AI. Better than templates.',
};

export default function SOPOutlinerPage() {
  const schemas = getPageSchema('home'); // Using home schema as fallback for now
  const content = toolsSEOContent['sop-outliner'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <GraduationCap className="h-4 w-4" />
              Free Study Abroad Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              AI Statement of Purpose (SOP) Outliner
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Don't stare at a blank page. Generate a personalized,
              paragraph-by-paragraph outline for your SOP in seconds.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <UserCheck className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Personalized</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <BookOpen className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">Expert Structure</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <GraduationCap className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">For MS & MBA</span>
            </div>
          </div>

          <SOPOutliner />

          {content && (
            <div className="mt-20">
              <ToolSEOContent
                toolSlug="sop-outliner"
                enhancedContent={content}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
