import { AdTopOfPage, AdBottomOfPage } from '@/components/ads/ezoic-sections';
import { EditorialTrustPanel } from '@/components/content/EditorialTrustPanel';
import { SectionDiscoveryLinks } from '@/components/content/SectionDiscoveryLinks';
import { TOOLS_EDITORIAL_TRUST } from '@/lib/editorial-trust';

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Top of page ad */}
      <div className="container mx-auto max-w-6xl px-4">
        <AdTopOfPage />
      </div>

      {/* Tools content */}
      {children}

      <SectionDiscoveryLinks section="tools" />

      <EditorialTrustPanel
        content={TOOLS_EDITORIAL_TRUST}
        variant="compact"
        className="border-t bg-muted/20"
      />

      {/* Bottom of page ad */}
      <div className="container mx-auto max-w-6xl px-4">
        <AdBottomOfPage />
      </div>
    </div>
  );
}
