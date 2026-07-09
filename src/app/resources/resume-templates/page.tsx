import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FileText,
  CheckCircle,
  XCircle,
  Lightbulb,
  AlertTriangle,
  Target,
  Users,
  Clock,
  Award,
  Download,
  ArrowRight,
  Star,
  Layout,
  Briefcase,
  GraduationCap,
  Code,
  BarChart,
} from 'lucide-react';

export const metadata = getPageSEO('resumeTemplates');

export default function ResumeTemplatesPage() {
  const schemas = getPageSchema('resumeTemplates');

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <Layout className="h-4 w-4" />
          ATS-Optimized Templates
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Free ATS-Friendly Resume Templates
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Download professionally designed resume templates that pass Applicant
          Tracking Systems and impress recruiters. Perfect for students,
          freshers, and experienced professionals.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
          <Users className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium">50K+ Downloads</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
          <CheckCircle className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">ATS-Tested</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
          <Clock className="h-5 w-5 text-purple-600" />
          <span className="text-sm font-medium">Updated</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
          <Award className="h-5 w-5 text-orange-600" />
          <span className="text-sm font-medium">HR-Approved</span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="mx-auto mb-12 max-w-4xl rounded-xl bg-muted/50 p-6">
        <h2 className="mb-4 text-lg font-bold">Table of Contents</h2>
        <ol className="grid gap-2 text-sm md:grid-cols-2">
          <li>
            <a
              href="#why-ats"
              className="text-primary hover:underline"
            >
              1. Why ATS-Friendly Templates Matter
            </a>
          </li>
          <li>
            <a
              href="#templates"
              className="text-primary hover:underline"
            >
              2. Our Resume Templates
            </a>
          </li>
          <li>
            <a
              href="#choosing"
              className="text-primary hover:underline"
            >
              3. Choosing the Right Template
            </a>
          </li>
          <li>
            <a
              href="#customizing"
              className="text-primary hover:underline"
            >
              4. How to Customize Templates
            </a>
          </li>
          <li>
            <a
              href="#formats"
              className="text-primary hover:underline"
            >
              5. Resume Format Types
            </a>
          </li>
          <li>
            <a
              href="#ats-tips"
              className="text-primary hover:underline"
            >
              6. ATS Optimization Tips
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-primary hover:underline"
            >
              7. Frequently Asked Questions
            </a>
          </li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl space-y-16">
        {/* Section 1: Why ATS Matters */}
        <section id="why-ats">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Target className="h-6 w-6 text-primary" />
            1. Why ATS-Friendly Templates Matter
          </h2>

          <div className="mb-6 rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Critical Statistics
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>90%+ of Fortune 500 companies</strong> use Applicant
                Tracking Systems
              </li>
              <li>
                • <strong>75% of resumes are rejected</strong> by ATS before a
                human ever sees them
              </li>
              <li>
                • <strong>98% of large companies</strong> and 66% of mid-sized
                companies use ATS
              </li>
              <li>
                • Average job posting receives{' '}
                <strong>250+ applications</strong>—ATS filters the majority
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              An Applicant Tracking System (ATS) is software that scans, parses,
              and ranks resumes before they reach human recruiters. Even if
              you're perfectly qualified, a poorly formatted resume can be
              rejected automatically.
            </p>
            <h3>What Makes a Resume ATS-Friendly?</h3>
            <ul>
              <li>
                <strong>Simple, clean formatting:</strong> No tables, text
                boxes, columns, or graphics
              </li>
              <li>
                <strong>Standard section headings:</strong> "Experience,"
                "Education," "Skills"—not creative alternatives
              </li>
              <li>
                <strong>Common fonts:</strong> Arial, Calibri, Times New Roman,
                Georgia
              </li>
              <li>
                <strong>Proper file format:</strong> .docx or .pdf (check job
                posting requirements)
              </li>
              <li>
                <strong>Text-based content:</strong> No images for text, logos,
                or icons
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Templates */}
        <section id="templates">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Layout className="h-6 w-6 text-primary" />
            2. Our ATS-Friendly Resume Templates
          </h2>

          <p className="mb-8 text-muted-foreground">
            Each template is tested with major ATS systems (Taleo, Workday,
            Greenhouse, Lever) and designed to maximize your chances of getting
            through automated screening.
          </p>

          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <CardTitle>Fresh Graduate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Perfect for students and recent graduates with limited work
                  experience. Emphasizes education, projects, and skills.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>✓ Education section at top</li>
                  <li>✓ Project showcase section</li>
                  <li>✓ Skills prominently featured</li>
                  <li>✓ Clean, modern design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <Code className="h-6 w-6" />
                </div>
                <CardTitle>Tech Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Designed for software developers, engineers, and IT
                  professionals. Highlights technical skills and project impact.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>✓ Technical skills section</li>
                  <li>✓ GitHub/Portfolio links</li>
                  <li>✓ Project descriptions</li>
                  <li>✓ Quantified achievements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <BarChart className="h-6 w-6" />
                </div>
                <CardTitle>Business & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  For business analysts, marketing professionals, and MBA
                  graduates. Emphasizes metrics and business impact.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>✓ Achievement-focused format</li>
                  <li>✓ Metrics and KPIs highlighted</li>
                  <li>✓ Professional summary</li>
                  <li>✓ Certification section</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Briefcase className="h-6 w-6" />
                </div>
                <CardTitle>Experienced Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  For professionals with 5+ years experience. Emphasizes career
                  progression and leadership achievements.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>✓ Experience-first layout</li>
                  <li>✓ Leadership highlights</li>
                  <li>✓ Career progression visible</li>
                  <li>✓ Executive summary</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <Star className="h-6 w-6" />
                </div>
                <CardTitle>Minimal Classic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  A timeless, versatile template suitable for any industry or
                  experience level. Maximum ATS compatibility.
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>✓ Works for any role</li>
                  <li>✓ Highest ATS score</li>
                  <li>✓ Easy to customize</li>
                  <li>✓ Conservative design</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h3 className="mb-2 text-lg font-bold">
                  Get All 5 Templates Free
                </h3>
                <p className="text-sm text-muted-foreground">
                  Available in Word (.docx) and Google Docs formats
                </p>
              </div>
              <Button
                size="lg"
                asChild
              >
                <Link href="/tools/resume-score-checker">
                  Check Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 3: Choosing the Right Template */}
        <section id="choosing">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-primary" />
            3. Choosing the Right Template
          </h2>

          <div className="mb-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="rounded-tl-lg p-3">Your Situation</th>
                  <th className="p-3">Recommended Template</th>
                  <th className="rounded-tr-lg p-3">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    situation: 'Student / Fresh Graduate',
                    template: 'Fresh Graduate',
                    why: 'Emphasizes education and projects over limited experience',
                  },
                  {
                    situation: 'Software Developer / Engineer',
                    template: 'Tech Professional',
                    why: 'Showcases technical skills and GitHub portfolio',
                  },
                  {
                    situation: 'Career Changer',
                    template: 'Minimal Classic',
                    why: 'Focuses on transferable skills, clean format',
                  },
                  {
                    situation: 'MBA / Business Role',
                    template: 'Business & Analytics',
                    why: 'Highlights metrics, achievements, and business impact',
                  },
                  {
                    situation: '5+ Years Experience',
                    template: 'Experienced Professional',
                    why: 'Shows career progression and leadership',
                  },
                  {
                    situation: 'Uncertain / Multiple Roles',
                    template: 'Minimal Classic',
                    why: 'Versatile, works for any industry',
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-muted/50"
                  >
                    <td className="p-3">{row.situation}</td>
                    <td className="p-3 font-medium text-primary">
                      {row.template}
                    </td>
                    <td className="p-3 text-muted-foreground">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              Pro Tip: Industry Matters
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>Consulting, Banking, Law:</strong> Use conservative
                templates (Minimal Classic)
              </li>
              <li>
                • <strong>Startups, Tech:</strong> Modern templates with more
                personality acceptable
              </li>
              <li>
                • <strong>Creative Industries:</strong> Design-focused templates
                work, but ensure ATS compatibility
              </li>
              <li>
                • <strong>When in doubt:</strong> Go with a cleaner, simpler
                template
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Customizing Templates */}
        <section id="customizing">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <FileText className="h-6 w-6 text-primary" />
            4. How to Customize Templates Effectively
          </h2>

          <div className="space-y-4">
            {[
              {
                step: '1. Replace Placeholder Text Carefully',
                desc: "Don't just change names—rewrite bullet points to match your actual achievements. Use specific metrics and outcomes.",
                tip: "Avoid generic placeholder text. Always use specific, quantified achievements (e.g., 'Increased sales by 20%').",
              },
              {
                step: '2. Maintain Consistent Formatting',
                desc: 'Keep fonts, sizes, margins, and spacing uniform throughout. If dates are right-aligned, keep them that way everywhere.',
                tip: "Use the same bullet style throughout. Don't mix bullets (•) with dashes (-) or arrows (→).",
              },
              {
                step: '3. Adjust Section Order',
                desc: 'Put your strongest section first. Freshers: Education first. Experienced: Experience first.',
                tip: "The order should guide the recruiter's eye to your most impressive qualifications.",
              },
              {
                step: '4. Tailor Content for Each Job',
                desc: 'Adjust your summary and reorder skills to match the job description keywords.',
                tip: "Keep a 'master resume' with all achievements, then create tailored versions for each application.",
              },
              {
                step: '5. Test ATS Compatibility',
                desc: "Upload your customized resume to an ATS checker to ensure formatting didn't break during editing.",
                tip: 'Use our free Resume Score Checker to verify your template still parses correctly.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-l-4 border-primary py-2 pl-4"
              >
                <h3 className="mb-1 text-lg font-semibold">{item.step}</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
                <p className="flex items-start gap-2 rounded bg-primary/10 p-2 text-xs">
                  <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>
                    <strong>Pro Tip:</strong> {item.tip}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Resume Format Types */}
        <section id="formats">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Layout className="h-6 w-6 text-primary" />
            5. Resume Format Types Explained
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Chronological</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Lists experience in reverse chronological order. Most common
                  and ATS-friendly format.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-green-600">✅ Best For:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Consistent work history</li>
                    <li>• Career progression in same field</li>
                    <li>• Most job applications</li>
                  </ul>
                  <p className="mt-3 font-semibold text-red-600">
                    ❌ Avoid If:
                  </p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Large employment gaps</li>
                    <li>• Changing careers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Functional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Focuses on skills over chronology. Groups achievements by
                  skill category.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-green-600">✅ Best For:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Career changers</li>
                    <li>• Employment gaps</li>
                    <li>• Freelancers/consultants</li>
                  </ul>
                  <p className="mt-3 font-semibold text-red-600">❌ Caution:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Less ATS-friendly</li>
                    <li>• Some recruiters dislike it</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Combination/Hybrid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Merges skills summary with chronological experience. Offers
                  flexibility.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-green-600">✅ Best For:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Senior professionals</li>
                    <li>• Those with diverse skills</li>
                    <li>• Career transitions</li>
                  </ul>
                  <p className="mt-3 font-semibold text-red-600">❌ Caution:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Can get lengthy</li>
                    <li>• Requires careful balance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 rounded-lg bg-muted p-6">
            <h3 className="mb-3 font-bold">Our Recommendation</h3>
            <p className="text-sm">
              For most job seekers, the <strong>chronological format</strong>{' '}
              works best. It's what recruiters expect, is most ATS-compatible,
              and clearly shows your career progression. Use functional only if
              you have specific reasons to hide gaps or emphasize transferable
              skills.
            </p>
          </div>
        </section>

        {/* Section 6: ATS Optimization Tips */}
        <section id="ats-tips">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-primary" />
            6. ATS Optimization Checklist
          </h2>

          <div className="mb-6 grid gap-4 md:grid-cols-2">
            {[
              'Use standard section headings (Experience, Education, Skills)',
              'Avoid tables, columns, text boxes, and graphics',
              'Use common fonts (Arial, Calibri, Times New Roman)',
              'Include keywords from the job description naturally',
              'Save as .docx or .pdf based on job requirements',
              'Use full terms AND abbreviations (JavaScript (JS))',
              'Avoid headers and footers for critical information',
              'Use standard bullet points (•), not custom symbols',
              'Keep file size under 2MB',
              'Name file professionally: FirstName_LastName_Resume.pdf',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg border p-3"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Common ATS Killers
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                <span>
                  <strong>Creative designs with multiple columns:</strong> ATS
                  reads left-to-right, columns scramble content
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                <span>
                  <strong>Images and graphics:</strong> ATS cannot read images,
                  including logos and icons
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                <span>
                  <strong>Unusual fonts:</strong> Stick to universal system
                  fonts the ATS can parse
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                <span>
                  <strong>Headers/footers:</strong> Many ATS skip header/footer
                  content entirely
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section id="faq">
          <h2 className="mb-6 text-2xl font-bold">
            7. Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Are these templates really free?',
                a: 'Yes, all our templates are 100% free to download and use. No hidden charges, watermarks, or premium versions. We believe everyone deserves access to professional resume tools.',
              },
              {
                q: 'Will my resume pass ATS with these templates?',
                a: 'Our templates are tested with major ATS systems (Taleo, Workday, Greenhouse, Lever). However, ATS scoring also depends on your content—use relevant keywords from job descriptions and quantify achievements.',
              },
              {
                q: 'Should I use .docx or .pdf format?',
                a: 'Check the job posting first—some explicitly require a specific format. If not specified, .pdf is generally safer as it preserves formatting. Some older ATS prefer .docx. When in doubt, apply with PDF.',
              },
              {
                q: 'How long should my resume be?',
                a: "Freshers/students: Strictly 1 page. Professionals with 2-5 years: 1 page preferred, 2 max. Senior professionals (10+ years): 2 pages maximum. Never exceed 2 pages unless you're an executive.",
              },
              {
                q: 'Can I add color to these templates?',
                a: 'Yes, subtle color is fine—a colored name or section headers. Avoid colorful backgrounds, colored text for important content, or anything that reduces readability when printed in black & white.',
              },
              {
                q: 'How do I edit these templates?',
                a: 'Templates are available in Word (.docx) and Google Docs format. Open in Microsoft Word or upload to Google Drive. Replace placeholder text with your information while maintaining formatting.',
              },
              {
                q: "Why don't my templates have a photo?",
                a: "Photos are not recommended for resumes in the US, UK, India, and most countries. They can lead to unconscious bias, take up valuable space, and many ATS cannot process images. Only add a photo if it's explicitly expected in your country/industry.",
              },
              {
                q: 'How often should I update my resume template?',
                a: 'Update your resume whenever you have new achievements, skills, or experience to add. Design-wise, update templates every 2-3 years to stay modern. Always tailor content for each job application.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h4 className="mb-2 font-semibold">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl bg-secondary p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Build Your Resume?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Use our free tools to create a professional, ATS-optimized resume in
            minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/resume-score-checker">Check Resume Score</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources/resume-guide">Resume Writing Guide</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resume-optimizer">AI Resume Optimizer</Link>
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <Link
              href="/resources/resume-guide"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Resume Writing Guide</h3>
              <p className="text-sm text-muted-foreground">
                Complete guide with examples
              </p>
            </Link>
            <Link
              href="/resources/cover-letters"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Cover Letter Guide</h3>
              <p className="text-sm text-muted-foreground">
                Complement your resume
              </p>
            </Link>
            <Link
              href="/resources/interview-prep"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Interview Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Ace your next interview
              </p>
            </Link>
            <Link
              href="/resources/ats-resume-keywords"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">ATS Keywords Guide</h3>
              <p className="text-sm text-muted-foreground">
                Match resume wording to job descriptions
              </p>
            </Link>
            <Link
              href="/resources/github-profile"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">GitHub Profile Guide</h3>
              <p className="text-sm text-muted-foreground">
                Strengthen project links for technical roles
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
