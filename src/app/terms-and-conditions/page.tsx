import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';

export const metadata = getPageSEO('termsAndConditions');

export default function TermsAndConditionsPage() {
  const schemas = getPageSchema('termsAndConditions');
  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          Terms and Conditions
        </h1>
        <p className="mb-8 text-muted-foreground">
          Last Updated: November 3, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              1. Agreement to Terms
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Welcome to Sproutern. These Terms and Conditions ("Terms") govern
              your access to and use of Sproutern's website, platform, and
              services (collectively, the "Services"). By accessing or using our
              Services, you agree to be bound by these Terms. If you do not
              agree to these Terms, please do not use our Services.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sproutern reserves the right to modify these Terms at any time. We
              will notify users of any material changes by posting the updated
              Terms on our website. Your continued use of the Services after
              such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">2. Eligibility</h2>
            <p className="leading-relaxed text-muted-foreground">
              To use Sproutern, you must:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Be at least 16 years of age</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>
                Not be prohibited from using the Services under applicable laws
              </li>
              <li>Provide accurate and complete registration information</li>
              <li>
                Maintain the security and confidentiality of your account
                credentials
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For startup or employer accounts, you must have the authority to
              bind your organization to these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">3. User Accounts</h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.1 Account Creation
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              To access certain features of our Services, you must create an
              account. You agree to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Provide accurate, current, and complete information during
                registration
              </li>
              <li>
                Maintain and update your information to keep it accurate and
                current
              </li>
              <li>Keep your password secure and confidential</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
              <li>
                Accept responsibility for all activities that occur under your
                account
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.2 Account Types
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Sproutern offers two primary account types:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Student Accounts:</strong> For students and job seekers
                looking for internship opportunities
              </li>
              <li>
                <strong>Startup/Employer Accounts:</strong> For companies
                posting internship opportunities and recruiting talent
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              3.3 Account Termination
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              You may terminate your account at any time through your account
              settings. We reserve the right to suspend or terminate accounts
              that violate these Terms or engage in fraudulent, abusive, or
              illegal activities.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              4. Acceptable Use Policy
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              4.1 Permitted Uses
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              You may use our Services for lawful purposes only, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Searching and applying for internship opportunities (students)
              </li>
              <li>Posting legitimate internship positions (employers)</li>
              <li>Building and optimizing professional profiles</li>
              <li>
                Networking with other users within the platform's intended
                purpose
              </li>
              <li>
                Using AI-powered tools for resume optimization and career
                guidance
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              4.2 Prohibited Activities
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              You agree NOT to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Post false, misleading, or fraudulent information</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, abuse, or harm other users</li>
              <li>
                Post spam, advertisements, or solicitations unrelated to
                internships
              </li>
              <li>
                Scrape, crawl, or harvest data from the platform without
                permission
              </li>
              <li>
                Attempt to gain unauthorized access to our systems or other
                users' accounts
              </li>
              <li>Use the platform for any illegal activities</li>
              <li>Circumvent or manipulate our AI matching algorithms</li>
              <li>
                Post discriminatory job listings or engage in discriminatory
                practices
              </li>
              <li>Share or distribute viruses, malware, or harmful code</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              5. Content and Intellectual Property
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              5.1 User Content
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              You retain ownership of any content you post on Sproutern,
              including resumes, profiles, job postings, and other materials
              ("User Content"). By posting User Content, you grant Sproutern a
              worldwide, non-exclusive, royalty-free license to use, display,
              reproduce, and distribute your content for the purpose of
              providing and improving our Services.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              You represent and warrant that:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                You own or have the necessary rights to post your User Content
              </li>
              <li>Your User Content does not violate any third-party rights</li>
              <li>
                Your User Content complies with these Terms and applicable laws
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              5.2 Platform Content
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              All content provided by Sproutern, including text, graphics,
              logos, software, and AI-generated content, is owned by Sproutern
              or its licensors and is protected by copyright, trademark, and
              other intellectual property laws. You may not copy, modify,
              distribute, or create derivative works from our platform content
              without our express written permission.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              5.3 Content Moderation
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              We reserve the right to review, monitor, and remove any User
              Content that violates these Terms or is otherwise objectionable.
              However, we are not obligated to monitor all content and assume no
              liability for User Content.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              6. Internship Postings and Applications
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              6.1 For Employers
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Employers posting internships agree to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Post only legitimate, genuine internship opportunities</li>
              <li>Provide accurate and complete job descriptions</li>
              <li>Comply with all applicable employment and labor laws</li>
              <li>
                Not discriminate based on race, gender, religion, age,
                disability, or other protected characteristics
              </li>
              <li>
                Respond to applications in a timely and professional manner
              </li>
              <li>Honor any commitments made in job postings</li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              6.2 For Students
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Students applying for internships agree to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Provide truthful and accurate information in applications</li>
              <li>
                Not misrepresent qualifications, experience, or credentials
              </li>
              <li>Communicate professionally with potential employers</li>
              <li>Honor commitments made during the application process</li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              6.3 Platform Role
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Sproutern is a platform that connects students with employers. We
              are not a party to any agreements between students and employers.
              We do not guarantee the quality, safety, or legality of
              internships posted or the qualifications of applicants. Users are
              responsible for their own due diligence and decision-making.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. AI-Powered Features
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Sproutern offers AI-powered features including resume
              optimization, candidate matching, and personalized
              recommendations. These features are provided "as is" for
              informational purposes. While we strive for accuracy, AI-generated
              content may contain errors or inaccuracies. You should review and
              verify all AI-generated content before relying on it.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              By using AI features, you understand that:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                AI suggestions are automated and may not always be perfect
              </li>
              <li>
                You retain full responsibility for your final resume and
                application materials
              </li>
              <li>
                AI matching is based on algorithms and may not capture all
                nuances
              </li>
              <li>
                We continuously improve our AI models but cannot guarantee
                specific outcomes
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">8. Payment Terms</h2>
            <p className="leading-relaxed text-muted-foreground">
              Currently, Sproutern offers free services to both students and
              employers. If we introduce paid features in the future, we will
              clearly communicate pricing and payment terms. Any paid features
              will be subject to additional terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              9. Privacy and Data Protection
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Your privacy is important to us. Our collection and use of
              personal information is governed by our Privacy Policy, which is
              incorporated into these Terms by reference. By using our Services,
              you consent to our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              10. Disclaimers and Limitations of Liability
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              10.1 Service Disclaimer
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
              WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR
              SECURE. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              10.2 Limitation of Liability
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SPROUTERN SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS
              INTERRUPTION, ARISING FROM YOUR USE OF THE SERVICES.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID
              TO US IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER
              IS GREATER.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              10.3 Third-Party Content
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              We are not responsible for User Content, job postings, or any
              third-party content on our platform. Users interact with each
              other at their own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">11. Indemnification</h2>
            <p className="leading-relaxed text-muted-foreground">
              You agree to indemnify, defend, and hold harmless Sproutern, its
              affiliates, and their respective officers, directors, employees,
              and agents from any claims, liabilities, damages, losses, and
              expenses, including reasonable attorneys' fees, arising from:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your User Content</li>
              <li>Your interactions with other users</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              12. Dispute Resolution
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              12.1 Informal Resolution
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              If you have a dispute with Sproutern, please contact us at{' '}
              <a
                href="mailto:https://github.com/itsPremkumar/sproutern-oss"
                className="text-primary hover:underline"
              >
                https://github.com/itsPremkumar/sproutern-oss
              </a>{' '}
              to attempt to resolve it informally before pursuing formal legal
              action.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              12.2 Governing Law
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict of law
              provisions.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold">
              12.3 Jurisdiction
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Any legal action or proceeding arising from these Terms shall be
              brought exclusively in the courts located in Chennai, Tamil Nadu,
              India, and you consent to the personal jurisdiction of such
              courts.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">13. Severability</h2>
            <p className="leading-relaxed text-muted-foreground">
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall remain in full force
              and effect.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              14. Entire Agreement
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and Sproutern regarding the use of
              our Services and supersede all prior agreements and
              understandings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              15. Contact Information
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              For questions about these Terms or to report violations, please
              contact us at:
            </p>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <p className="font-semibold">Sproutern</p>
              <p className="text-muted-foreground">
                Email:{' '}
                <a
                  href="mailto:https://github.com/itsPremkumar/sproutern-oss"
                  className="text-primary hover:underline"
                >
                  https://github.com/itsPremkumar/sproutern-oss
                </a>
              </p>
              <p className="text-muted-foreground">
                Website: sproutern.dpdns.org
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-lg bg-secondary p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> By creating an account or using
              Sproutern's Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service. If
              you do not agree, please discontinue use of our platform
              immediately.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
