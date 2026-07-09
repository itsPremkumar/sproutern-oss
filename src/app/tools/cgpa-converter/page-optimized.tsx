import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { CGPAConverterTool } from '@/components/tools/CGPAConverterTool';
import { ShareCTA } from '@/components/shared/social-share';
import {
  AISummary,
  KeyTakeaways,
  FAQSchema,
  HowToSchema,
  AuthorBio,
  SoftwareApplicationSchema,
  BreadcrumbSchema,
  LastUpdated,
} from '@/components/seo';
import type { FAQItem, HowToStep } from '@/components/seo';
import Link from 'next/link';
import {
  GraduationCap,
  CheckCircle,
  Clock,
  Building,
  Users,
  Calculator,
} from 'lucide-react';

export const metadata = getPageSEO('cgpaConverter');

const faqs: FAQItem[] = [
  {
    question: 'What is 8.5 CGPA in percentage?',
    answer:
      'Using the standard CBSE formula, 8.5 CGPA equals 80.75% (8.5 × 9.5 = 80.75). This is considered a "Very Good" grade and qualifies for First Class with distinction in most universities.',
  },
  {
    question: 'Is 7.5 CGPA good for placements?',
    answer:
      'Yes, 7.5 CGPA (approximately 71.25%) is considered good for most campus placements in India. It meets the cutoff for majority of IT companies like TCS, Infosys, and Wipro.',
  },
  {
    question: 'How to convert CGPA to percentage for Anna University?',
    answer:
      'Anna University uses the formula: (CGPA - 0.5) × 10. For example, 8.0 CGPA = (8.0 - 0.5) × 10 = 75%. This differs from the standard CBSE formula.',
  },
  {
    question: 'Can I convert percentage back to CGPA?',
    answer:
      'Yes, to convert percentage to CGPA (10-point scale), divide the percentage by 9.5. For example: 85% ÷ 9.5 = 8.95 CGPA. However, this is an approximation.',
  },
  {
    question: 'What is the minimum CGPA to pass?',
    answer:
      'The minimum passing CGPA varies by university, but typically ranges from 4.0 to 5.0 on a 10-point scale (40-50% equivalent). For engineering degrees, most universities require minimum 5.0 CGPA.',
  },
];

const howToSteps: HowToStep[] = [
  {
    name: 'Select your university',
    text: 'Choose your university from the dropdown menu to use the correct conversion formula.',
  },
  {
    name: 'Enter your CGPA',
    text: 'Input your CGPA value (e.g., 8.5) in the calculator field.',
  },
  {
    name: 'Click Calculate',
    text: 'Press the Calculate button to get instant results.',
  },
  {
    name: 'View your percentage',
    text: 'Your converted percentage will be displayed immediately with the formula used.',
  },
];

const keyTakeaways = [
  'Different universities use different CGPA to percentage conversion formulas',
  'Standard CBSE formula is CGPA × 9.5 = Percentage',
  'Anna University uses (CGPA - 0.5) × 10 formula',
  '7.5+ CGPA is good for most campus placements in India',
  "Always verify conversion with your university's official guidelines",
];

export default function CGPAConverterPage() {
  const schemas = getPageSchema('cgpaConverter');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <SoftwareApplicationSchema
        name="CGPA to Percentage Calculator"
        description="Free online CGPA to percentage converter supporting 50+ Indian universities with official conversion formulas."
        url="https://www.sproutern.com/tools/cgpa-converter"
        applicationCategory="EducationalApplication"
        aggregateRating={{ ratingValue: 4.8, reviewCount: 2247 }}
      />
      <HowToSchema
        name="How to Convert CGPA to Percentage"
        description="Step-by-step guide to convert your CGPA to percentage using our free calculator"
        steps={howToSteps}
        totalTime="PT2M"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.sproutern.com' },
          { name: 'Tools', url: 'https://www.sproutern.com/tools' },
          {
            name: 'CGPA Converter',
            url: 'https://www.sproutern.com/tools/cgpa-converter',
          },
        ]}
      />

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Calculator className="h-4 w-4" />
              Free Academic Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              CGPA to Percentage Converter
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Convert your CGPA to percentage instantly. Supports 10-point,
              7-point, and 4-point scales with university-specific formulas.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Building className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">50+ Universities</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">22,000+ Users</span>
            </div>
          </div>

          {/* AI Summary for GEO */}
          <AISummary summary="Convert CGPA to percentage using official university formulas. Supports Anna University, VTU, JNTU, and 50+ Indian universities. Free, instant, and accurate results based on verified conversion methods. Standard CBSE formula: CGPA × 9.5 = Percentage." />

          {/* Tool Component */}
          <CGPAConverterTool />

          <LastUpdated date="2026-01-20" />

          {/* Key Takeaways for AEO */}
          <KeyTakeaways takeaways={keyTakeaways} />

          {/* Share CTA */}
          <div className="mt-6">
            <ShareCTA toolName="CGPA Converter" />
          </div>

          {/* FAQ Schema for AEO */}
          <FAQSchema faqs={faqs} />

          {/* Author Bio for E-E-A-T */}
          <AuthorBio />
        </div>
      </div>
    </>
  );
}
