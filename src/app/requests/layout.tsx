import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('requests');

export default function RequestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = getPageSchema('requests');

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
