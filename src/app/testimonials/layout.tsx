import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('testimonials');

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = getPageSchema('testimonials');

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
