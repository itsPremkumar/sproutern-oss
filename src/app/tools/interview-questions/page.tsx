import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import InterviewQuestionsContent from './InterviewQuestionsContent';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';
import {
  ToolFAQSection,
  interviewQuestionsFAQs,
} from '@/components/tools/tool-faq-section';

export const metadata = getPageSEO('interviewQuestions');

export default function InterviewQuestionsPage() {
  const schemas = getPageSchema('interviewQuestions');
  const content = toolsSEOContent['interview-questions'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <InterviewQuestionsContent />

      {/* FAQ Section for SEO */}
      <div className="container pb-8">
        <ToolFAQSection
          toolName="Interview Questions"
          faqs={interviewQuestionsFAQs}
          toolUrl="https://www.sproutern.com/tools/interview-questions"
        />
      </div>

      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="interview-questions"
            enhancedContent={content}
          />
        </div>
      )}
    </>
  );
}
