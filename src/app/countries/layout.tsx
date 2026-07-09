import { EditorialTrustPanel } from '@/components/content/EditorialTrustPanel';
import { SectionDiscoveryLinks } from '@/components/content/SectionDiscoveryLinks';
import { COUNTRIES_EDITORIAL_TRUST } from '@/lib/editorial-trust';

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SectionDiscoveryLinks section="countries" />
      <EditorialTrustPanel
        content={COUNTRIES_EDITORIAL_TRUST}
        variant="compact"
        className="border-t bg-muted/20"
      />
    </>
  );
}
