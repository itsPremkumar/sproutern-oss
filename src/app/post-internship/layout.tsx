import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('postInternship');

export default function PostInternshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = getPageSchema('postInternship');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      {/* SR-only H1 for SEO - main page is client component */}
      <h1 className="sr-only">
        Post an Internship - Find Top Interns on Sproutern
      </h1>
      {children}
    </>
  );
}
