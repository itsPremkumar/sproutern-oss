import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('offline');

export default function OfflineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = getPageSchema('offline');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      {children}
    </>
  );
}
