import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Sproutern',
  description:
    'Terms of Service for Sproutern. Read our terms and conditions for using our platform.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Terms of Service</h1>

      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p className="lead text-xl text-muted-foreground">
          Last updated: January 1, 2026
        </p>

        <section>
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Sproutern ("the Website"), you accept and
            agree to be bound by the terms and provision of this agreement. If
            you do not agree to abide by these terms, please do not use this
            Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Description of Service</h2>
          <p>
            Sproutern provides educational content, career guidance, and
            internship information for students. We strive to provide accurate
            and up-to-date information but cannot guarantee the completeness or
            accuracy of all content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. User Conduct</h2>
          <p>
            You agree to use the Website only for lawful purposes. You are
            prohibited from posting or transmitting to or from this Website any
            unlawful, threatening, libelous, defamatory, obscene, pornographic,
            or other material that would violate any law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, compilation, and other
            matters related to the Website are protected under applicable
            copyrights, trademarks, and other proprietary rights. The copying,
            redistribution, use, or publication by you of any such matters or
            any part of the Website is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            5. Disclaimer of Warranties
          </h2>
          <p>
            The materials on Sproutern's website are provided on an 'as is'
            basis. Sproutern makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p>
            In no event shall Sproutern or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on Sproutern's website, even if
            Sproutern or a Sproutern authorized representative has been notified
            orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            7. Links to Third-Party Sites
          </h2>
          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by Sproutern. Sproutern has no
            control over, and assumes no responsibility for, the content,
            privacy policies, or practices of any third-party web sites or
            services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of India and you irrevocably submit to the
            exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a
              href="mailto:support@sproutern.com"
              className="text-primary hover:underline"
            >
              support@sproutern.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
