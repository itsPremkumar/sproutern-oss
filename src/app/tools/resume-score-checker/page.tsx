import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import ResumeScoreCheckerContent from './ResumeScoreCheckerContent';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';
import {
  ToolFAQSection,
  resumeCheckerFAQs,
} from '@/components/tools/tool-faq-section';

export const metadata = getPageSEO('resumeScoreChecker');

export default function ResumeScoreCheckerPage() {
  const schemas = getPageSchema('resumeScoreChecker');
  const content = toolsSEOContent['resume-score-checker'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <ResumeScoreCheckerContent />

      {/* FAQ Section for SEO */}
      <div className="container pb-8">
        <ToolFAQSection
          toolName="Resume Score Checker"
          faqs={resumeCheckerFAQs}
          toolUrl="https://sproutern.dpdns.org/tools/resume-score-checker"
        />
      </div>

      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="resume-score-checker"
            enhancedContent={content}
          />
        </div>
      )}
    </>
  );
}
