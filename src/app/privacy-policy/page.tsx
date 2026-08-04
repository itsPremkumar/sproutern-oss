import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('privacyPolicy');

export default function PrivacyPolicyPage() {
  const schemas = getPageSchema('privacyPolicy');
  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mb-8 text-muted-foreground">
          Last Updated: November 3, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
            <p className="leading-relaxed text-muted-foreground">
              Welcome to Sproutern ("we," "our," or "us"). We are committed to
              protecting your personal information and your right to privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website
              sproutern.dpdns.org and use our services.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              By using Sproutern, you agree to the collection and use of
              information in accordance with this Privacy Policy. If you do not
              agree with our policies and practices, please do not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              2. Information We Collect
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              2.1 Personal Information
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              We collect personal information that you voluntarily provide to us
              when you register on the platform, express an interest in
              obtaining information about us or our services, or otherwise
              contact us. This includes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Name and contact information (email address, phone number)
              </li>
              <li>Educational background and academic records</li>
              <li>Resume and professional documents</li>
              <li>Skills, qualifications, and work experience</li>
              <li>Profile pictures and other media you upload</li>
              <li>Company information for startup accounts</li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              2.2 Automatically Collected Information
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              When you visit our website, we automatically collect certain
              information about your device, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              2.3 Application Data
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              When you apply for internships through our platform, we collect
              information about your applications, including application status,
              communication with employers, and feedback received.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We use the information we collect or receive for the following
              purposes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>To provide and maintain our services:</strong> Including
                account creation, internship matching, and application
                processing
              </li>
              <li>
                <strong>To improve user experience:</strong> Understanding how
                users interact with our platform to enhance functionality
              </li>
              <li>
                <strong>To communicate with you:</strong> Sending notifications
                about applications, new opportunities, and platform updates
              </li>
              <li>
                <strong>For AI-powered features:</strong> Using AI to optimize
                resumes, match candidates with opportunities, and provide
                recommendations
              </li>
              <li>
                <strong>To ensure security:</strong> Detecting and preventing
                fraud, abuse, and security incidents
              </li>
              <li>
                <strong>To comply with legal obligations:</strong> Responding to
                legal requests and preventing harm
              </li>
              <li>
                <strong>For analytics and research:</strong> Analyzing trends to
                improve our services and develop new features
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              4. Sharing Your Information
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We may share your information in the following situations:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>With Employers:</strong> When you apply for an
                internship, your profile and application materials are shared
                with the hiring startup
              </li>
              <li>
                <strong>With Service Providers:</strong> We share data with
                third-party service providers who help us operate our platform
                (e.g., Firebase, Google Cloud, AI services)
              </li>
              <li>
                <strong>For Legal Compliance:</strong> When required by law or
                to protect our rights and users' safety
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your
                information for other purposes with your explicit consent
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any
                merger, sale of company assets, or acquisition
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We do NOT sell your personal information to third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">5. Data Security</h2>
            <p className="leading-relaxed text-muted-foreground">
              We implement appropriate technical and organizational security
              measures to protect your personal information, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication and authorization systems</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and data minimization</li>
              <li>
                Secure cloud infrastructure (Firebase/Google Cloud Platform)
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              However, no method of transmission over the internet is 100%
              secure. While we strive to protect your data, we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              6. Your Privacy Rights
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Data Portability:</strong> Request transfer of your data
                to another service
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent for data
                processing at any time
              </li>
              <li>
                <strong>Object:</strong> Object to processing of your personal
                data for certain purposes
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To exercise these rights, please contact us at{' '}
              <a
                href="mailto:support@sproutern.com"
                className="text-primary hover:underline"
              >
                support@sproutern.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We use cookies and similar tracking technologies to track activity
              on our platform and store certain information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be
              able to use some portions of our service.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Types of cookies we use include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Essential Cookies:</strong> Required for the platform to
                function properly
              </li>
              <li>
                <strong>Authentication Cookies:</strong> To keep you logged in
              </li>
              <li>
                <strong>Analytics Cookies:</strong> To understand how users
                interact with our platform
              </li>
              <li>
                <strong>Preference Cookies:</strong> To remember your settings
                and preferences
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              8. Third-Party Services
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Our platform integrates with third-party services including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Google Firebase (authentication, database, storage)</li>
              <li>Google Analytics (website analytics)</li>
              <li>AI services for resume optimization and matching</li>
              <li>Email service providers for notifications</li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              8.1 Advertising Partners
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              We display advertisements on our website to support free access to
              our tools and resources. Our advertising partners include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Ezoic:</strong> Ad optimization and delivery platform
              </li>
              <li>
                <strong>Google AdSense:</strong> Contextual advertising network
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              These advertising partners may use cookies and similar
              technologies to collect information about your browsing activities
              to provide personalized advertisements. You can opt out of
              personalized advertising through your browser settings or by
              visiting{' '}
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:no-underline"
              >
                aboutads.info
              </a>
              .
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              These third parties have their own privacy policies. We encourage
              you to review their privacy policies before using our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">9. Data Retention</h2>
            <p className="leading-relaxed text-muted-foreground">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required by law. When you delete your
              account, we will delete or anonymize your personal information
              within 90 days, except where we need to retain certain information
              for legal compliance or legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              10. Children's Privacy
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Our services are intended for users who are at least 16 years old.
              We do not knowingly collect personal information from children
              under 16. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us, and
              we will delete such information from our systems.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              11. International Data Transfers
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Your information may be transferred to and maintained on computers
              located outside of your state, province, country, or other
              governmental jurisdiction where data protection laws may differ.
              We ensure appropriate safeguards are in place to protect your
              information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              12. Updates to This Policy
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal, operational, or regulatory
              reasons. We will notify you of any material changes by posting the
              new Privacy Policy on this page and updating the "Last Updated"
              date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">13. Contact Us</h2>
            <p className="leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <p className="font-semibold">Sproutern</p>
              <p className="text-muted-foreground">
                Email:{' '}
                <a
                  href="mailto:support@sproutern.com"
                  className="text-primary hover:underline"
                >
                  support@sproutern.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Website: sproutern.dpdns.org
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-lg bg-secondary p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This Privacy Policy is designed to comply
              with applicable data protection laws including GDPR and CCPA. By
              using Sproutern, you acknowledge that you have read and understood
              this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
