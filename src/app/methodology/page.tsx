import { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  BookOpen,
  Shield,
  CheckCircle,
  GraduationCap,
  Building,
  FileText,
  Users,
  ArrowRight,
  ExternalLink,
  Heart,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Our Methodology | How We Calculate & Verify Information',
  description:
    "Learn how Sproutern's tools calculate results, where our data comes from, and how we ensure accuracy. Transparent methodology for CGPA conversion, salary calculations, and more.",
  keywords:
    'Sproutern methodology, calculation accuracy, data sources, CGPA formula, salary calculation method, verification process',
  openGraph: {
    title: 'Our Methodology - How Sproutern Tools Work',
    description:
      'Transparent methodology and data sources for all Sproutern career tools and calculators.',
    type: 'website',
  },
};

export default function MethodologyPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Shield className="h-4 w-4" />
            Transparency & Trust
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Our Methodology
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            We believe in complete transparency. Here's how our tools work,
            where our data comes from, and how we ensure accuracy.
          </p>
        </div>

        {/* Why Methodology Matters - Personal Story */}
        <Card className="mb-12 border-primary/20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
          <CardContent className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-500" />
              <h2 className="text-xl font-bold">Why This Page Exists</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Most websites don't tell you how their calculators work. I find
                that frustrating — and you should too.
              </p>
              <p>
                When you use our CGPA converter and it shows your percentage,
                you should know <em>exactly</em> how we calculated it. Which
                formula? Based on which university's regulations? When was it
                last verified? These details matter because you might be putting
                that number on a job application or scholarship form.
              </p>
              <p>
                I created this methodology page because I believe you deserve to
                understand how every tool on Sproutern works. If you're a
                skeptical user who double-checks things (and you should be),
                this page is for you. Check our sources. Verify our formulas. If
                you find something wrong,{' '}
                <Link
                  href="/contact"
                  className="text-primary hover:underline"
                >
                  tell me
                </Link>{' '}
                — I'll fix it.
              </p>
              <p className="font-medium text-foreground">
                Transparency isn't just a policy here. It's the foundation of
                trust between us and the students who rely on these tools.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">Verified Sources</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Expert Reviewed</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <GraduationCap className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Academic Standards</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Users className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">User Validated</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* CGPA Converter Section */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Calculator className="h-6 w-6 text-primary" />
              CGPA to Percentage Converter
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">
                  Data Sources & Formulas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold">Standard CBSE Formula</h4>
                  <p className="mb-2 text-sm text-muted-foreground">
                    The standard formula{' '}
                    <code className="rounded bg-muted px-2 py-1">
                      Percentage = CGPA × 9.5
                    </code>{' '}
                    is derived from CBSE's official grading policy, where grade
                    points are assigned on a 10-point maximum scale.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Source:</strong> Central Board of Secondary
                    Education (CBSE) Examination Bye-Laws
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">
                    University-Specific Formulas
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We collect conversion formulas directly from official
                    university examination handbooks and academic regulations.
                    Our team verifies these annually.
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      • <strong>Anna University:</strong> Based on Regulation
                      2021 examination guidelines
                    </li>
                    <li>
                      • <strong>VTU:</strong> As per VTU examination manual and
                      academic regulations
                    </li>
                    <li>
                      • <strong>Mumbai University:</strong> From official
                      ordinance documents
                    </li>
                    <li>
                      • <strong>JNTUH:</strong> Based on academic regulations
                      published by JNTUH
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <p className="text-sm">
                <strong>💡 Note:</strong> University formulas may change with
                new regulations. We update our database quarterly. If you notice
                any discrepancy, please{' '}
                <Link
                  href="/contact"
                  className="text-primary underline"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Salary Calculator Section */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <FileText className="h-6 w-6 text-primary" />
              Salary Calculator
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">
                  Calculation Methodology
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold">Tax Calculations</h4>
                  <p className="text-sm text-muted-foreground">
                    Our salary calculator uses the latest Income Tax slabs as
                    notified by the Income Tax Department, Government of India.
                    We support both Old and New Tax Regimes.
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    <strong>Source:</strong> Income Tax Act, 1961 and Finance
                    Act 2024
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">
                    Standard Deductions Applied
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      • <strong>PF (Provident Fund):</strong> 12% of Basic
                      Salary (as per EPF Act, 1952)
                    </li>
                    <li>
                      • <strong>Professional Tax:</strong> State-specific rates
                      (₹200/month max in most states)
                    </li>
                    <li>
                      • <strong>Standard Deduction:</strong> ₹50,000 (as per
                      latest Finance Act)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Salary Market Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Average salary ranges displayed are aggregated from:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Public job postings on verified platforms</li>
                    <li>
                      • Anonymous user submissions (verified for accuracy)
                    </li>
                    <li>• Industry salary surveys from reputable sources</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Resume Score Checker Section */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <FileText className="h-6 w-6 text-primary" />
              Resume Score Checker
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Scoring Methodology</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our AI-powered resume scorer evaluates resumes based on best
                  practices from HR professionals, ATS (Applicant Tracking
                  System) compatibility guidelines, and recruitment industry
                  standards.
                </p>

                <div>
                  <h4 className="mb-2 font-semibold">Scoring Criteria</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      • <strong>Format & Structure (20%):</strong> Clear
                      sections, proper hierarchy, readable fonts
                    </li>
                    <li>
                      • <strong>Content Quality (25%):</strong> Action verbs,
                      quantified achievements, relevance
                    </li>
                    <li>
                      • <strong>ATS Compatibility (25%):</strong> Proper
                      headings, no complex formatting, keyword optimization
                    </li>
                    <li>
                      • <strong>Completeness (15%):</strong> Essential sections
                      present (contact, experience, education)
                    </li>
                    <li>
                      • <strong>Professional Standards (15%):</strong> Length,
                      grammar, professional language
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm">
                    <strong>AI Model:</strong> Our resume analysis is powered by
                    advanced language models fine-tuned on thousands of resumes
                    reviewed by HR professionals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Data Privacy Section */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Shield className="h-6 w-6 text-primary" />
              Data Handling & Privacy
            </h2>

            <Card className="mb-6">
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">
                      No Data Storage for Calculators
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      CGPA, salary, and EMI calculations are performed entirely
                      in your browser. We do not store or transmit this data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">
                      Resume Processing Security
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Uploaded resumes are processed securely and deleted
                      immediately after analysis. We do not retain copies or use
                      them for any other purpose.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Encrypted Connections</h4>
                    <p className="text-sm text-muted-foreground">
                      All data transmitted to and from our servers uses TLS 1.3
                      encryption.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Real Corrections We've Made */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <FileText className="h-6 w-6 text-primary" />
              Real Corrections We've Made
            </h2>

            <p className="mb-6 text-muted-foreground">
              We believe in transparency, including being honest about our
              mistakes. Here are real corrections we've made based on user
              feedback:
            </p>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                      <span className="text-lg">📝</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Anna University CGPA Formula Update
                      </h4>
                      <p className="mb-2 text-xs text-muted-foreground">
                        Corrected: November 2025
                      </p>
                      <p className="text-sm text-muted-foreground">
                        A student from Coimbatore Institute of Technology
                        emailed us pointing out that our Anna University CGPA
                        converter was using the old Regulation 2017 formula
                        instead of the updated Regulation 2021 formula. The
                        difference was small (about 0.5-1% in final percentage)
                        but significant for students near grade cutoffs. We
                        updated the formula within 24 hours and added a toggle
                        for students under older regulations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                      <span className="text-lg">💰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Salary Calculator Tax Slab Update
                      </h4>
                      <p className="mb-2 text-xs text-muted-foreground">
                        Corrected: April 2025
                      </p>
                      <p className="text-sm text-muted-foreground">
                        After the Union Budget 2025, we received multiple
                        reports that our salary calculator was showing incorrect
                        take-home pay. We had missed the announcement of
                        increased standard deduction under the new tax regime.
                        The fix was deployed within 48 hours of the first
                        report, and we now have calendar reminders to review tax
                        calculators after every Union Budget.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <span className="text-lg">🎓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        VTU Grade Point Clarification
                      </h4>
                      <p className="mb-2 text-xs text-muted-foreground">
                        Corrected: September 2025
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Several VTU students pointed out confusion between CGPA
                        and SGPA in our converter. VTU uses a different
                        calculation method for semester vs. cumulative grades.
                        We rewrote the entire VTU conversion section with
                        separate calculators for SGPA and CGPA, along with
                        detailed explanations of the difference.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 rounded-lg bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Our commitment:</strong> When we receive a valid
                correction report, we aim to investigate within 24 hours and
                deploy fixes within 48-72 hours for critical issues. All
                corrections are logged internally, and significant changes are
                noted with update dates on affected pages.
              </p>
            </div>
          </section>

          {/* User Success Story */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Users className="h-6 w-6 text-primary" />
              How This Helps Real Students
            </h2>

            <Card className="border-primary/20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-800">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold">
                      Priya's Story: Getting the Numbers Right
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      "I'm from a Tier-3 engineering college in Uttar Pradesh.
                      During my placement season, I used an online CGPA
                      converter and put 76.5% on all my applications. Later, I
                      found out my university (AKTU) uses a slightly different
                      formula, and my actual percentage was 74.2%.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      When an HR person at an IT company cross-checked my
                      transcripts, the mismatch raised a red flag. I almost lost
                      that opportunity — they thought I was inflating my grades.
                      Thankfully, I was able to explain and show them the
                      formula confusion.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      After that experience, I found Sproutern's CGPA converter
                      which has the actual AKTU formula. I shared it with my
                      entire batch. The difference between getting your
                      percentage right vs. wrong can literally be the difference
                      between getting a job and being accused of fraud."
                    </p>
                    <p className="mt-4 text-xs font-medium text-foreground">
                      — Shared with permission from a user in Lucknow
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Accuracy Commitment */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Building className="h-6 w-6 text-primary" />
              Our Commitment to Accuracy
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2 font-semibold">Regular Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    We review and update our formulas, tax rates, and data
                    sources quarterly to ensure accuracy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2 font-semibold">Expert Review</h4>
                  <p className="text-sm text-muted-foreground">
                    Our content and calculations are reviewed by career
                    counselors and domain experts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2 font-semibold">User Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    We actively incorporate feedback from our 50,000+ users to
                    improve accuracy and usability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2 font-semibold">
                    Transparent Corrections
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    When errors are found, we correct them promptly and note the
                    update date on affected pages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Have Questions About Our Methods?
            </h2>
            <p className="mb-6 text-muted-foreground">
              We're committed to transparency. If you have questions about how
              any of our tools work, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Explore Our Tools
              </Link>
            </div>
          </section>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Last reviewed and updated: December 2025</p>
        </div>
      </div>
    </div>
  );
}
