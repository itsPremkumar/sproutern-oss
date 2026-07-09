import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import SkillTestClient from './SkillTestClient';

export const metadata = getPageSEO('skillTest');

export default function SkillTestPage() {
  const schemas = getPageSchema('skillTest');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <SkillTestClient />
    </>
  );
}
