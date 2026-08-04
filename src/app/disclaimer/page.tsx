import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('disclaimer');

export default function DisclaimerPage() {
  const schemas = getPageSchema('disclaimer');
  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">Disclaimer</h1>
        <p className="mb-8 text-muted-foreground">
          Last Updated: November 23, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              1. General Information Disclaimer
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The information provided by Sproutern ("we," "us," or "our") on
              sproutern.dpdns.org (the "Website") is for general informational and
              educational purposes only. All information on the Website is
              provided in good faith, however, we make no representation or
              warranty of any kind, express or implied, regarding the accuracy,
              adequacy, validity, reliability, availability, or completeness of
              any information on the Website.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Under no circumstance shall we have any liability to you for any
              loss or damage of any kind incurred as a result of the use of the
              Website or reliance on any information provided on the Website.
              Your use of the Website and your reliance on any information on
              the Website is solely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              2. Career and Professional Advice Disclaimer
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Website cannot and does not contain professional career
              counseling, employment, or financial advice. The career guidance,
              resume tips, interview preparation materials, salary information,
              and other professional development content is provided for general
              informational and educational purposes only and is not a
              substitute for professional advice from qualified career
              counselors, financial advisors, or employment specialists.
            </p>
            <div className="mt-4 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
              <p className="text-muted-foreground">
                <strong>⚠️ Important:</strong> Before making any career
                decisions, changing jobs, negotiating salaries, or taking any
                actions based upon information on this Website, we strongly
                encourage you to consult with qualified professionals including
                career counselors, financial advisors, legal advisors, or
                industry experts appropriate to your specific situation.
              </p>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We do not guarantee any specific career outcomes, job placements,
              salary increases, or professional success as a result of using our
              platform, tools, or following advice provided on the Website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              3. AI-Powered Tools and Features Disclaimer
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.1 AI Resume Optimizer and Career Tools
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Our AI-powered resume optimizer, career roadmap generator, cover
              letter generator, and other automated tools use artificial
              intelligence and machine learning algorithms to provide
              suggestions and recommendations. These tools are designed to
              assist you, but they are not infallible.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>AI Limitations:</strong> AI-generated content may
                contain errors, inaccuracies, or inappropriate suggestions
              </li>
              <li>
                <strong>Human Review Required:</strong> You must review, verify,
                and edit all AI-generated content before using it
              </li>
              <li>
                <strong>No Guarantee:</strong> We do not guarantee that using
                our AI tools will result in job interviews or employment
              </li>
              <li>
                <strong>Professional Judgment:</strong> AI suggestions should
                not replace your own professional judgment or review by human
                experts
              </li>
              <li>
                <strong>Context Limitations:</strong> AI may not fully
                understand unique contexts, industry-specific requirements, or
                cultural nuances
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.2 AI Matching and Recommendations
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Our AI-powered candidate matching and job recommendation systems
              are algorithmic tools designed to suggest relevant opportunities.
              However:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Matching accuracy depends on the quality and completeness of
                profile information
              </li>
              <li>
                AI matching may not capture all relevant factors or nuances
              </li>
              <li>
                Recommendations are based on patterns and may not suit every
                individual's unique situation
              </li>
              <li>
                You should conduct your own research and due diligence before
                applying to any opportunity
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              4. Internship Postings and Employer Information
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              4.1 Third-Party Content
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Internship postings, company profiles, job descriptions, and other
              employer-provided content are posted by third parties (employers
              and recruiters) and not by Sproutern. We do not create, verify, or
              endorse this content.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              4.2 No Verification of Employers
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              While we implement basic verification procedures, we cannot
              guarantee:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                The legitimacy, reputation, or financial stability of employers
              </li>
              <li>The accuracy of job descriptions or company information</li>
              <li>
                The working conditions, compensation, or treatment of interns
              </li>
              <li>
                That posted opportunities still exist or that terms won't change
              </li>
              <li>
                The legal compliance of employers with labor and employment laws
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              4.3 User Due Diligence
            </h3>
            <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
              <p className="text-muted-foreground">
                <strong>⚠️ Critical:</strong> You are solely responsible for
                conducting your own research, due diligence, and background
                checks on potential employers. This includes verifying company
                legitimacy, reading reviews, checking references, and ensuring
                the opportunity meets your standards and legal requirements.
              </p>
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              4.4 No Employment Relationship
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Sproutern is a platform connecting students with employers. We are
              not:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A recruiting agency or employment service provider</li>
              <li>
                A party to any employment or internship contract between you and
                employers
              </li>
              <li>
                Responsible for the actions, omissions, or conduct of employers
                or students
              </li>
              <li>
                An agent or representative of any employer on the platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              5. Data Accuracy and Calculators
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              5.1 Tools and Calculators
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Our Website provides various tools and calculators including CGPA
              converters, salary calculators, EMI calculators, and others. While
              we strive for accuracy:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Results are estimates and may not be accurate for all situations
              </li>
              <li>
                Different universities and companies may use different formulas
              </li>
              <li>
                Calculator results should be verified with official sources
              </li>
              <li>
                We are not responsible for decisions made based on calculator
                results
              </li>
              <li>
                Tax laws, conversion formulas, and other factors may change
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              5.2 Statistics and Data
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Statistics, salary data, placement rates, and other numerical
              information presented on the Website are compiled from various
              sources and may not be current, complete, or applicable to all
              situations. Use this data as general guidance only.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              6. Educational Content Disclaimer
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Blog posts, guides, tutorials, and other educational content on
              our Website are created for informational purposes. This content:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Represents general advice and may not apply to your specific
                situation
              </li>
              <li>
                May become outdated as industry practices, laws, and
                technologies change
              </li>
              <li>
                Should not be considered as professional consulting or coaching
              </li>
              <li>
                May include opinions and perspectives that are not universal
              </li>
              <li>
                May reference third-party sources that we do not control or
                verify
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. External Links Disclaimer
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Website may contain links to third-party websites, resources,
              tools, courses, or services ("External Links"). These External
              Links are provided for your convenience only.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              7.1 No Control or Endorsement
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              We have no control over the content, privacy policies, or
              practices of third-party websites and assume no responsibility for
              them. The inclusion of any External Link does not imply our
              endorsement or approval.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              7.2 No Verification
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              External Links are not investigated, monitored, or checked by us
              for accuracy, adequacy, validity, reliability, availability, or
              completeness. We are not responsible for the content or
              availability of linked websites.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              7.3 User Responsibility
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              When you access External Links, you do so at your own risk. You
              should review the terms and conditions and privacy policies of all
              third-party websites you visit.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              8. Affiliate Disclaimer
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Website may contain affiliate links to products, services,
              courses, or tools. When you click on an affiliate link and make a
              purchase, we may receive a commission at no additional cost to
              you.
            </p>
            <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
              <p className="mb-2 text-muted-foreground">
                <strong>Affiliate Partners May Include:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>
                  Online learning platforms (Coursera, Udemy, LinkedIn Learning,
                  etc.)
                </li>
                <li>Resume and career tools</li>
                <li>Books and educational resources (Amazon Associates)</li>
                <li>Software and productivity tools</li>
                <li>Other career-related products and services</li>
              </ul>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our affiliate relationships do not influence our editorial content
              or recommendations. We only recommend products and services we
              believe may be valuable to our users. However, you should conduct
              your own research before making any purchase.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              9. Advertising Disclosure
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Sproutern displays advertisements on our Website to support the
              cost of maintaining free resources and tools for students. We
              partner with third-party advertising networks including Ezoic and
              Google AdSense to deliver relevant advertisements to our users.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              9.1 How We Use Advertising
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Revenue Support:</strong> Advertising revenue allows us
                to keep all our core tools and educational content completely
                free for students worldwide
              </li>
              <li>
                <strong>Third-Party Ads:</strong> Advertisements on our Website
                are provided by third-party ad networks and are not endorsed by
                Sproutern
              </li>
              <li>
                <strong>Editorial Independence:</strong> Advertising does not
                influence our content, recommendations, or editorial decisions
              </li>
              <li>
                <strong>Personalized Ads:</strong> Some ads may be personalized
                based on your browsing behavior and interests
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              9.2 Your Choices
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                You can manage your cookie preferences through our consent
                management platform
              </li>
              <li>
                You can opt out of personalized advertising through your browser
                settings or ad preference tools
              </li>
              <li>
                Visit{' '}
                <a
                  href="https://optout.aboutads.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  aboutads.info
                </a>{' '}
                to learn more about interest-based advertising
              </li>
            </ul>

            <div className="mt-4 rounded-lg border border-green-500/20 bg-green-500/10 p-4">
              <p className="text-muted-foreground">
                <strong>🌱 Our Commitment:</strong> We carefully select
                advertising partners who respect user privacy and provide
                appropriate ads for our student audience. We do not allow
                inappropriate, misleading, or harmful advertisements on our
                platform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              10. Testimonials and Success Stories Disclaimer
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Website may feature testimonials, success stories, case
              studies, or reviews from users who have used our platform or
              services. These testimonials reflect the real experiences and
              opinions of those users.
            </p>
            <div className="mt-4 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
              <p className="text-muted-foreground">
                <strong>Important Notice:</strong> Individual results vary. The
                experiences shared are personal to those particular users and
                may not be representative of all users. We do not claim, and you
                should not assume, that all users will experience similar
                results. Your individual results will depend on many factors
                including your qualifications, effort, market conditions, and
                other variables beyond our control.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">11. No Warranties</h2>
            <p className="leading-relaxed text-muted-foreground">
              The Website and all information, content, materials, tools, and
              services included on or otherwise made available through the
              Website are provided "as is" and "as available" without any
              warranties of any kind, either express or implied, including but
              not limited to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Warranties of merchantability or fitness for a particular
                purpose
              </li>
              <li>
                Warranties of accuracy, reliability, or completeness of
                information
              </li>
              <li>
                Warranties that the Website will be uninterrupted, error-free,
                or secure
              </li>
              <li>Warranties that defects will be corrected</li>
              <li>Warranties regarding third-party content or services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              12. Legal and Compliance Disclaimer
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              12.1 Not Legal Advice
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Nothing on this Website constitutes legal advice. Information
              about employment laws, labor regulations, internship agreements,
              or other legal matters is provided for general educational
              purposes only. For legal advice specific to your situation,
              consult a qualified attorney.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              12.2 Compliance Responsibility
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              You are responsible for ensuring your use of the Website and any
              actions you take comply with all applicable laws, regulations, and
              industry standards in your jurisdiction. This includes but is not
              limited to employment laws, data protection regulations, tax laws,
              and contract laws.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              12.3 International Users
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              If you access the Website from outside India, you are responsible
              for compliance with local laws in your jurisdiction. Information
              on the Website may not be appropriate or available for use in all
              locations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              13. Changes and Updates
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We reserve the right to modify, update, or remove any content on
              the Website at any time without notice. This includes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Blog posts, guides, and educational content</li>
              <li>Tool features and functionality</li>
              <li>Internship listings and company profiles</li>
              <li>Platform features and services</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Information on the Website may be historical and not current. We
              are under no obligation to update any information on the Website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              14. Limitation of Liability
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              In no event shall Sproutern, its directors, employees, partners,
              agents, suppliers, or affiliates be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Your access to or use of (or inability to access or use) the
                Website
              </li>
              <li>Any conduct or content of any third party on the Website</li>
              <li>Any content obtained from the Website</li>
              <li>Unauthorized access, use, or alteration of your data</li>
              <li>
                Job opportunities you pursue or employment relationships you
                enter into
              </li>
              <li>
                Career decisions made based on information from the Website
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">15. Contact Us</h2>
            <p className="leading-relaxed text-muted-foreground">
              If you have questions about this Disclaimer, please contact us:
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

          <section className="mt-12 rounded-lg border border-red-500/20 bg-red-500/10 p-6">
            <h3 className="mb-3 text-xl font-semibold">⚠️ Acknowledgment</h3>
            <p className="text-muted-foreground">
              By using the Website, you acknowledge that you have read this
              Disclaimer and agree to all its terms and conditions. If you do
              not agree with any part of this Disclaimer, you must not use the
              Website. Your continued use of the Website following the posting
              of changes to this Disclaimer will be deemed your acceptance of
              those changes.
            </p>
          </section>

          <section className="mt-8 rounded-lg bg-secondary p-6">
            <h3 className="mb-3 text-xl font-semibold">Related Policies</h3>
            <p className="mb-4 text-muted-foreground">
              For a complete understanding of your rights and our practices,
              please also review:
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/terms-and-conditions"
                className="text-primary underline hover:no-underline"
              >
                Terms and Conditions
              </a>
              <a
                href="/privacy-policy"
                className="text-primary underline hover:no-underline"
              >
                Privacy Policy
              </a>
              <a
                href="/cookie-policy"
                className="text-primary underline hover:no-underline"
              >
                Cookie Policy
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
