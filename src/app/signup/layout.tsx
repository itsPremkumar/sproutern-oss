import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('signup');

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = getPageSchema('signup');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      {/* SR-only H1 for SEO - main page is client component */}
      <h1 className="sr-only">Sign Up for Sproutern - Create Your Account</h1>
      {children}
    </>
  );
}
