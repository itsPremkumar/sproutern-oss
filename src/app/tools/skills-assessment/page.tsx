import {
  getPageSchema,
  generateJsonLdSchema,
  getPageSEO,
} from '@/lib/seo/apply-complete-seo';
import { SkillsAssessment } from '@/components/tools/SkillsAssessment';
import { Award, CheckCircle, Shield, Users, Target } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata = getPageSEO('skillsAssessment');

export default function SkillsAssessmentPage() {
  const schemas = getPageSchema('skillsAssessment');
  const content = toolsSEOContent['skills-assessment'];

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
              <Award className="h-4 w-4" />
              Free Career Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Skills Assessment Quiz
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Discover your strengths and identify skill gaps. 20 questions
              across 4 key areas with personalized recommendations.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">20 Questions</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">4 Skill Areas</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">18,000+ Tested</span>
            </div>
          </div>

          {/* Tool Component */}
          <SkillsAssessment />

          {content && (
            <div className="mt-20">
              <ToolSEOContent
                toolSlug="skills-assessment"
                enhancedContent={content}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
