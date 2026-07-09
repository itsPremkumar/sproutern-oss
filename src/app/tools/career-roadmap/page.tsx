import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import CareerRoadmapContent from './CareerRoadmapContent';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata = getPageSEO('careerRoadmap');

export default function CareerRoadmapPage() {
  const schemas = getPageSchema('careerRoadmap');
  const content = toolsSEOContent['career-roadmap'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <CareerRoadmapContent />
      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="career-roadmap"
            enhancedContent={content}
          />
        </div>
      )}
    </>
  );
}
