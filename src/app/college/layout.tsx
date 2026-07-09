import { EditorialTrustPanel } from '@/components/content/EditorialTrustPanel';
import { SectionDiscoveryLinks } from '@/components/content/SectionDiscoveryLinks';
import { COLLEGE_EDITORIAL_TRUST } from '@/lib/editorial-trust';

export default function CollegeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SectionDiscoveryLinks section="college" />
      <EditorialTrustPanel
        content={COLLEGE_EDITORIAL_TRUST}
        variant="compact"
        className="border-t bg-muted/20"
      />
    </>
  );
}
