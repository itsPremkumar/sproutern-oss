import type { Metadata } from 'next';
import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { AdTopOfPage, AdBottomOfPage } from '@/components/ads/ezoic-sections';
import { EditorialTrustPanel } from '@/components/content/EditorialTrustPanel';
import { SectionDiscoveryLinks } from '@/components/content/SectionDiscoveryLinks';
import { COLLEGE_EDITORIAL_TRUST } from '@/lib/editorial-trust';

export const metadata: Metadata = getPageSEO('internships');

export default function InternshipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = getPageSchema('internships');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      {/* Top ad */}
      <div className="container mx-auto max-w-6xl px-4">
        <AdTopOfPage />
      </div>

      {children}

      <SectionDiscoveryLinks section="internships" />

      <EditorialTrustPanel
        content={COLLEGE_EDITORIAL_TRUST}
        variant="compact"
        className="border-t bg-muted/20"
      />

      {/* Bottom ad */}
      <div className="container mx-auto max-w-6xl px-4">
        <AdBottomOfPage />
      </div>
    </>
  );
}
