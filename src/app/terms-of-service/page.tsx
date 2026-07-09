import { Metadata } from 'next';
import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata: Metadata = {
  title: 'Terms of Service - Sproutern',
  description:
    'Read our Terms of Service to understand the rules and regulations for using Sproutern services.',
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsOfServicePage() {
  // Reusing schemas from termsAndConditions as they are likely similar or identical for this context
  const schemas = getPageSchema('termsAndConditions');
  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          Terms of Service
        </h1>
        <p className="mb-8 text-muted-foreground">
          Last Updated: November 3, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
            <p className="leading-relaxed text-muted-foreground">
              Welcome to Sproutern. By accessing our website and using our
              services, you agree to be bound by the following Terms of Service.
              Please read them carefully.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              2. Acceptance of Terms
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              By using our services, you confirm that you accept these terms and
              that you agree to comply with them. If you do not agree to these
              terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">3. Changes to Terms</h2>
            <p className="leading-relaxed text-muted-foreground">
              We may update these terms from time to time. We will notify you of
              any changes by posting the new Terms of Service on this page.
            </p>
          </section>

          <section>
            <p className="text-muted-foreground">
              For the full detailed terms, please refer to our{' '}
              <a
                href="/terms-and-conditions"
                className="text-primary hover:underline"
              >
                Terms and Conditions
              </a>{' '}
              page which covers all aspects of usage, liability, and privacy in
              depth.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
