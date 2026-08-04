import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import EMICalculatorContent from './EMICalculatorContent';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';
import {
  ToolFAQSection,
  emiCalculatorFAQs,
} from '@/components/tools/tool-faq-section';

export const metadata = getPageSEO('emiCalculator');

export default function EMICalculatorPage() {
  const schemas = getPageSchema('emiCalculator');
  const content = toolsSEOContent['emi-calculator'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <EMICalculatorContent />

      {/* FAQ Section for SEO */}
      <div className="container pb-8">
        <ToolFAQSection
          toolName="EMI Calculator"
          faqs={emiCalculatorFAQs}
          toolUrl="https://sproutern.dpdns.org/tools/emi-calculator"
        />
      </div>

      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="emi-calculator"
            enhancedContent={content}
          />
        </div>
      )}
    </>
  );
}
