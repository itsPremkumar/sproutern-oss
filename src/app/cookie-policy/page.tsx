import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('cookiePolicy');

export default function CookiePolicyPage() {
  const schemas = getPageSchema('cookiePolicy');
  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          Cookie Policy
        </h1>
        <p className="mb-8 text-muted-foreground">
          Last Updated: November 23, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
            <p className="leading-relaxed text-muted-foreground">
              This Cookie Policy explains how Sproutern ("we," "our," or "us")
              uses cookies and similar tracking technologies on our website
              sproutern.com. By using our site, you consent to the use of
              cookies in accordance with this policy.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              This policy should be read together with our Privacy Policy, which
              explains how we collect, use, and protect your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              2. What Are Cookies?
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and provide a better user
              experience. Cookies help websites remember your preferences, login
              status, and other information about your visit.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Cookies can be "persistent" or "session" cookies:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Persistent Cookies:</strong> Remain on your device until
                deleted or until they reach their expiration date
              </li>
              <li>
                <strong>Session Cookies:</strong> Are temporary and are deleted
                when you close your browser
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              3. Types of Cookies We Use
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.1 Essential Cookies
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              These cookies are necessary for the website to function properly.
              They enable basic functions like page navigation, access to secure
              areas, and maintaining your session. The website cannot function
              properly without these cookies.
            </p>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <p className="mb-2 font-semibold">Examples:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>Session management cookies</li>
                <li>Load balancing cookies</li>
                <li>Security cookies for authentication</li>
                <li>Cookie consent preferences</li>
              </ul>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.2 Authentication Cookies
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              These cookies help us recognize you when you return to our website
              and remember your login information. They keep you logged in as
              you navigate through different pages and allow us to provide
              personalized features.
            </p>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <p className="mb-2 font-semibold">Examples:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>Firebase authentication tokens</li>
                <li>User session identifiers</li>
                <li>Remember me preferences</li>
              </ul>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.3 Analytics Cookies
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              We use analytics cookies to understand how visitors interact with
              our website. These cookies collect information about how you use
              our site, which pages you visit, and any errors you encounter. All
              information collected is aggregated and anonymous.
            </p>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <p className="mb-2 font-semibold">We use:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>
                  <strong>Google Analytics:</strong> Tracks visitor behavior,
                  page views, and user flow
                </li>
                <li>
                  <strong>Firebase Analytics:</strong> Monitors app usage and
                  user engagement
                </li>
                <li>Page performance metrics</li>
                <li>Error tracking and diagnostics</li>
              </ul>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.4 Preference Cookies
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              These cookies remember your preferences and settings to provide
              you with a more personalized experience. They remember choices you
              make (such as language, region, or theme) to provide enhanced,
              more personalized features.
            </p>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <p className="mb-2 font-semibold">Examples:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>Language preferences</li>
                <li>Dark/light mode selection</li>
                <li>Form auto-fill data</li>
                <li>Dashboard customization</li>
              </ul>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.5 Functional Cookies
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              These cookies enable enhanced functionality and personalization.
              They may be set by us or by third-party providers whose services
              we have added to our pages.
            </p>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <p className="mb-2 font-semibold">Examples:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>Resume upload and storage</li>
                <li>Application draft saving</li>
                <li>Chat support functionality</li>
                <li>Video player preferences</li>
              </ul>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.6 Advertising Cookies
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              We use advertising cookies to deliver relevant advertisements and
              track the performance of ad campaigns. These cookies help support
              our free services by enabling us to display advertisements.
            </p>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <p className="mb-2 font-semibold">Our Advertising Partners:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>
                  <strong>Ezoic:</strong> Ad optimization, testing, and delivery
                </li>
                <li>
                  <strong>Google AdSense:</strong> Contextual and personalized
                  ads
                </li>
                <li>
                  <strong>Header Bidding Partners:</strong> Various ad networks
                  for competitive ad placement
                </li>
              </ul>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              You can opt out of personalized advertising by:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-muted-foreground">
              <li>
                Using our cookie consent banner to reject advertising cookies
              </li>
              <li>
                Visiting{' '}
                <a
                  href="https://optout.aboutads.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  aboutads.info
                </a>{' '}
                to opt out of interest-based advertising
              </li>
              <li>
                Adjusting your Google ad settings at{' '}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  adssettings.google.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              4. Third-Party Cookies
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We use services from third-party companies that may set cookies on
              your device when you visit our website. We do not control these
              cookies and recommend you check the third-party websites for more
              information about their cookies.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              Third-Party Services We Use:
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-border p-4">
                <h4 className="mb-2 font-semibold">Google Services</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  We use Google Analytics, Firebase, and other Google services
                  for authentication, analytics, and cloud storage.
                </p>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline hover:no-underline"
                >
                  Google Privacy Policy →
                </a>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h4 className="mb-2 font-semibold">Firebase</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  Firebase provides our authentication, database, and hosting
                  services, which may use cookies for these purposes.
                </p>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline hover:no-underline"
                >
                  Firebase Privacy Information →
                </a>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h4 className="mb-2 font-semibold">AI Services</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  We use AI services for resume optimization and candidate
                  matching, which may set cookies for functionality.
                </p>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h4 className="mb-2 font-semibold">Ezoic (Advertising)</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  Ezoic manages our advertising, providing ad optimization and
                  consent management through cookies.
                </p>
                <a
                  href="https://www.ezoic.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline hover:no-underline"
                >
                  Ezoic Privacy Policy →
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              5. How We Use Cookies
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We use cookies for the following purposes:
            </p>
            <ul className="mt-3 list-disc space-y-3 pl-6 text-muted-foreground">
              <li>
                <strong>To Provide Our Services:</strong> Essential cookies
                enable core functionality like user authentication, application
                processing, and secure access to your account
              </li>
              <li>
                <strong>To Improve User Experience:</strong> Preference cookies
                remember your settings and choices to provide a personalized
                experience
              </li>
              <li>
                <strong>To Analyze Performance:</strong> Analytics cookies help
                us understand how users interact with our site so we can improve
                it
              </li>
              <li>
                <strong>To Ensure Security:</strong> Security cookies help us
                detect and prevent fraud, abuse, and unauthorized access
              </li>
              <li>
                <strong>To Provide Relevant Content:</strong> We use cookies to
                show you relevant internship opportunities and content based on
                your profile and preferences
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              6. Managing Your Cookie Preferences
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              You have the right to decide whether to accept or reject cookies.
              You can manage your cookie preferences in several ways:
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              6.1 Browser Settings
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Most web browsers allow you to control cookies through their
              settings. You can set your browser to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Block all cookies</li>
              <li>Only accept first-party cookies</li>
              <li>Receive notifications when cookies are set</li>
              <li>Delete cookies after you close your browser</li>
            </ul>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-secondary p-4">
                <h4 className="mb-2 font-semibold">Chrome</h4>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline hover:no-underline"
                >
                  Manage cookies in Chrome →
                </a>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <h4 className="mb-2 font-semibold">Firefox</h4>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline hover:no-underline"
                >
                  Manage cookies in Firefox →
                </a>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <h4 className="mb-2 font-semibold">Safari</h4>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline hover:no-underline"
                >
                  Manage cookies in Safari →
                </a>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <h4 className="mb-2 font-semibold">Edge</h4>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline hover:no-underline"
                >
                  Manage cookies in Edge →
                </a>
              </div>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              6.2 Opt-Out Tools
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              You can opt out of Google Analytics tracking by using the Google
              Analytics Opt-out Browser Add-on:
            </p>
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline"
            >
              Google Analytics Opt-out Add-on →
            </a>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              6.3 Impact of Blocking Cookies
            </h3>
            <div className="mt-4 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
              <p className="text-muted-foreground">
                <strong>⚠️ Please Note:</strong> If you choose to block or
                delete cookies, some features of our website may not function
                properly. This may include:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>Inability to stay logged in</li>
                <li>Loss of personalized settings and preferences</li>
                <li>Reduced functionality of interactive features</li>
                <li>Inability to save application drafts</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. Cookie Retention Period
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Different cookies have different retention periods:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse border">
                <thead>
                  <tr className="bg-secondary">
                    <th className="border p-3 text-left">Cookie Type</th>
                    <th className="border p-3 text-left">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border p-3">Session Cookies</td>
                    <td className="border p-3">
                      Deleted when you close your browser
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Authentication Cookies</td>
                    <td className="border p-3">
                      30 days (or until you log out)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Preference Cookies</td>
                    <td className="border p-3">1 year</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Analytics Cookies</td>
                    <td className="border p-3">
                      2 years (Google Analytics default)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">8. Your Rights</h2>
            <p className="leading-relaxed text-muted-foreground">
              Under data protection laws, you have rights regarding cookies:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Right to be Informed:</strong> You have the right to
                know what cookies are being used and why
              </li>
              <li>
                <strong>Right to Consent:</strong> You have the right to give or
                withhold consent for non-essential cookies
              </li>
              <li>
                <strong>Right to Withdraw:</strong> You can withdraw your
                consent at any time by deleting cookies from your browser
              </li>
              <li>
                <strong>Right to Access:</strong> You can request information
                about the data collected via cookies
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              9. Updates to This Policy
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices, technology, or legal requirements. When
              we make changes, we will update the "Last Updated" date at the top
              of this page. We encourage you to review this policy periodically.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Material changes to this policy will be communicated through:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A notice on our website homepage</li>
              <li>Email notification to registered users</li>
              <li>An updated timestamp on this page</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">10. Contact Us</h2>
            <p className="leading-relaxed text-muted-foreground">
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us:
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
                Website: www.sproutern.com
              </p>
              <p className="mt-2 text-muted-foreground">
                Response Time: Within 48 hours
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-lg bg-secondary p-6">
            <h3 className="mb-3 text-xl font-semibold">Related Policies</h3>
            <p className="mb-4 text-muted-foreground">
              To better understand how we handle your data, please also review:
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/privacy-policy"
                className="text-primary underline hover:no-underline"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="text-primary underline hover:no-underline"
              >
                Terms and Conditions
              </a>
              <a
                href="/disclaimer"
                className="text-primary underline hover:no-underline"
              >
                Disclaimer
              </a>
            </div>
          </section>

          <section className="mt-8 rounded-lg border border-blue-500/20 bg-blue-500/10 p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> By continuing to use our website, you
              acknowledge that you have read and understood this Cookie Policy
              and consent to our use of cookies as described.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
