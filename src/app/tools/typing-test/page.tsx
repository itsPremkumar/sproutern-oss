import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import TypingTestClient from './TypingTestClient';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';
import {
  ToolFAQSection,
  typingTestFAQs,
} from '@/components/tools/tool-faq-section';

export const metadata = getPageSEO('typingTest');

export default function TypingTestPage() {
  const schemas = getPageSchema('typingTest');
  const content = toolsSEOContent['typing-test'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <TypingTestClient />

      {/* FAQ Section for SEO */}
      <div className="container pb-8">
        <ToolFAQSection
          toolName="Typing Speed Test"
          faqs={typingTestFAQs}
          toolUrl="https://www.sproutern.com/tools/typing-test"
        />
      </div>

      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="typing-test"
            enhancedContent={content}
          />
        </div>
      )}
    </>
  );
}
