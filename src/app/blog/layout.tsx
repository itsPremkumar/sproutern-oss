import { AdTopOfPage, AdBottomOfPage } from '@/components/ads/ezoic-sections';
import { EditorialTrustPanel } from '@/components/content/EditorialTrustPanel';
import { SectionDiscoveryLinks } from '@/components/content/SectionDiscoveryLinks';
import { BLOG_EDITORIAL_TRUST } from '@/lib/editorial-trust';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Top of page ad - appears before blog content */}
      <div className="container mx-auto max-w-4xl px-4">
        <AdTopOfPage />
      </div>

      {/* Blog content */}
      {children}

      <SectionDiscoveryLinks
        section="blog"
        contentClassName="max-w-4xl"
      />

      <EditorialTrustPanel
        content={BLOG_EDITORIAL_TRUST}
        variant="compact"
        className="border-t bg-muted/20"
        contentClassName="max-w-4xl"
      />

      {/* Bottom of page ad - appears after blog content */}
      <div className="container mx-auto max-w-4xl px-4">
        <AdBottomOfPage />
      </div>
    </div>
  );
}
