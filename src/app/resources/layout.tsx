import { EditorialTrustPanel } from '@/components/content/EditorialTrustPanel';
import { SectionDiscoveryLinks } from '@/components/content/SectionDiscoveryLinks';
import { RESOURCES_EDITORIAL_TRUST } from '@/lib/editorial-trust';

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SectionDiscoveryLinks section="resources" />
      <EditorialTrustPanel
        content={RESOURCES_EDITORIAL_TRUST}
        variant="compact"
        className="border-t bg-muted/20"
      />
    </>
  );
}
