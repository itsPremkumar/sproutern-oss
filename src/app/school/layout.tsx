import { EditorialTrustPanel } from '@/components/content/EditorialTrustPanel';
import { SectionDiscoveryLinks } from '@/components/content/SectionDiscoveryLinks';
import { SCHOOL_EDITORIAL_TRUST } from '@/lib/editorial-trust';

export default function SchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SectionDiscoveryLinks section="school" />
      <EditorialTrustPanel
        content={SCHOOL_EDITORIAL_TRUST}
        variant="compact"
        className="border-t bg-muted/20"
      />
    </>
  );
}
