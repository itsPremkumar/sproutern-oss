import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import CoverLetterGeneratorContent from './CoverLetterGeneratorContent';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';
import {
  ToolFAQSection,
  coverLetterFAQs,
} from '@/components/tools/tool-faq-section';

export const metadata = getPageSEO('coverLetterGenerator');

export default function CoverLetterGeneratorPage() {
  const schemas = getPageSchema('coverLetterGenerator');
  const content = toolsSEOContent['cover-letter-generator'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <CoverLetterGeneratorContent />

      {/* FAQ Section for SEO */}
      <div className="container pb-8">
        <ToolFAQSection
          toolName="Cover Letter Generator"
          faqs={coverLetterFAQs}
          toolUrl="https://www.sproutern.com/tools/cover-letter-generator"
        />
      </div>

      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="cover-letter-generator"
            enhancedContent={content}
          />
        </div>
      )}
    </>
  );
}
