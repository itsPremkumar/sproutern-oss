import {
  getPageSchema,
  generateJsonLdSchema,
  getPageSEO,
} from '@/lib/seo/apply-complete-seo';
import { ProjectIdeasGenerator } from '@/components/tools/ProjectIdeasGenerator';
import { Code, CheckCircle, Users, Target } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata = getPageSEO('projectIdeas');

export default function ProjectIdeasPage() {
  const schemas = getPageSchema('projectIdeas');
  const content = toolsSEOContent['project-ideas'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Code className="h-4 w-4" />
              Free Student Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Project Ideas Generator
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Find the perfect project for your skill level and interests.
              Filter by domain, difficulty, and tech stack.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">13+ Projects</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <Code className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">7 Domains</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">3 Levels</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">Detailed Guides</span>
            </div>
          </div>

          {/* Tool Component */}
          <ProjectIdeasGenerator />

          {content && (
            <div className="mt-20">
              <ToolSEOContent
                toolSlug="project-ideas"
                enhancedContent={content}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
