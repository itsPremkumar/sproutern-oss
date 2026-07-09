import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('forgotPassword');

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = getPageSchema('forgotPassword');

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
