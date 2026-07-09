import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { PercentageCalculator } from '@/components/tools/PercentageCalculator';
import { Calculator, CheckCircle, Users, GraduationCap } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';
import {
  ToolFAQSection,
  percentageCalculatorFAQs,
} from '@/components/tools/tool-faq-section';

export const metadata = getPageSEO('percentageCalculator');

export default function PercentageCalculatorPage() {
  const schemas = getPageSchema('percentageCalculator');
  const content = toolsSEOContent['percentage-calculator'];

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
              <GraduationCap className="h-4 w-4" />
              Free Academic Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Percentage Calculator
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Calculate marks percentage, aggregate across subjects, and convert
              to grades instantly.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <Calculator className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">3 Calculators</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <GraduationCap className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">Grade Reference</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">30,000+ Uses</span>
            </div>
          </div>

          {/* Tool Component */}
          <PercentageCalculator />

          {/* FAQ Section for SEO */}
          <ToolFAQSection
            toolName="Percentage Calculator"
            faqs={percentageCalculatorFAQs}
            toolUrl="https://www.sproutern.com/tools/percentage-calculator"
          />

          {content && (
            <div className="mt-20">
              <ToolSEOContent
                toolSlug="percentage-calculator"
                enhancedContent={content}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
