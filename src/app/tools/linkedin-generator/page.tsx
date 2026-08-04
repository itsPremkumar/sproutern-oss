import {
  getPageSchema,
  generateJsonLdSchema,
  getPageSEO,
} from '@/lib/seo/apply-complete-seo';
import { LinkedInGenerator } from '@/components/tools/LinkedInGenerator';
import { Linkedin } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';
import {
  ToolFAQSection,
  linkedinGeneratorFAQs,
} from '@/components/tools/tool-faq-section';

export const metadata = getPageSEO('linkedinGenerator');

const stats = [
  { value: '400M+', label: 'LinkedIn users worldwide' },
  { value: '87%', label: 'Recruiters use LinkedIn' },
  { value: '8x', label: 'More views with good headline' },
  { value: '5x', label: 'More connection requests' },
];

export default function LinkedInGeneratorPage() {
  const schemas = getPageSchema('linkedinGenerator');
  const content = toolsSEOContent['linkedin-generator'];

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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0077B5]/10 px-4 py-2 text-sm font-semibold text-[#0077B5]">
              <Linkedin className="h-4 w-4" />
              Free Career Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              LinkedIn Headline & Bio Generator
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Create compelling LinkedIn headlines and summaries that attract
              recruiters. Tailored templates for students, freshers, and
              professionals.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-lg bg-muted p-4 text-center"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tool Component */}
          <LinkedInGenerator />

          {/* FAQ Section for SEO */}
          <ToolFAQSection
            toolName="LinkedIn Generator"
            faqs={linkedinGeneratorFAQs}
            toolUrl="https://sproutern.dpdns.org/tools/linkedin-generator"
          />

          {content && (
            <div className="mt-20">
              <ToolSEOContent
                toolSlug="linkedin-generator"
                enhancedContent={content}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
