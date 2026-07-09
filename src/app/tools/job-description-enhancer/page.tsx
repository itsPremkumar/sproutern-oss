import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import JobDescriptionEnhancerContent from './JobDescriptionEnhancerContent';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata = getPageSEO('jobDescriptionEnhancer');

export default function JobDescriptionEnhancerPage() {
  const schemas = getPageSchema('jobDescriptionEnhancer');
  const content = toolsSEOContent['job-description-enhancer'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <JobDescriptionEnhancerContent />
      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="job-description-enhancer"
            enhancedContent={content}
          />
        </div>
      )}
    </>
  );
}
