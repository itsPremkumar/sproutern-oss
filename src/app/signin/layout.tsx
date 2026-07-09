import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('signin');

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = getPageSchema('signin');

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
