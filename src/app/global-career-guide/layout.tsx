import { EditorialTrustPanel } from '@/components/content/EditorialTrustPanel';
import { SectionDiscoveryLinks } from '@/components/content/SectionDiscoveryLinks';
import { GLOBAL_CAREER_EDITORIAL_TRUST } from '@/lib/editorial-trust';

export default function GlobalCareerGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SectionDiscoveryLinks section="global-career-guide" />
      <EditorialTrustPanel
        content={GLOBAL_CAREER_EDITORIAL_TRUST}
        variant="compact"
        className="border-t bg-muted/20"
      />
    </>
  );
}
