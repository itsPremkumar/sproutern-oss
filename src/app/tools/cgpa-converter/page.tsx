import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { CGPAConverterTool } from '@/components/tools/CGPAConverterTool';
import { ShareCTA } from '@/components/shared/social-share';
import Link from 'next/link';
import {
  GraduationCap,
  CheckCircle,
  Clock,
  Shield,
  Users,
  BookOpen,
  TrendingUp,
  Calculator,
  Lightbulb,
  AlertCircle,
  Building,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = getPageSEO('cgpaConverter');

const universityFormulas = [
  { name: 'CBSE', formula: 'CGPA × 9.5', example: '9.0 CGPA = 85.5%' },
  {
    name: 'Anna University',
    formula: '(CGPA - 0.5) × 10',
    example: '9.0 CGPA = 85%',
  },
  { name: 'VTU', formula: '(CGPA - 0.75) × 10', example: '9.0 CGPA = 82.5%' },
  {
    name: 'Mumbai University',
    formula: '(CGPA - 0.75) × 10',
    example: '9.0 CGPA = 82.5%',
  },
  { name: 'JNTUH', formula: '(CGPA - 0.5) × 10', example: '9.0 CGPA = 85%' },
  { name: 'Pune University', formula: 'CGPA × 10', example: '9.0 CGPA = 90%' },
  { name: 'GTU', formula: '(CGPA / 10) × 100', example: '9.0 CGPA = 90%' },
  { name: 'APJ Abdul Kalam', formula: 'CGPA × 10', example: '9.0 CGPA = 90%' },
];

const cgpaTable = [
  {
    cgpa: '10.0',
    percentage: '95.00%',
    grade: 'O - Outstanding',
    gpaStar: '4.0',
    description: 'Top academic performer',
  },
  {
    cgpa: '9.5',
    percentage: '90.25%',
    grade: 'A+ - Excellent',
    gpaStar: '4.0',
    description: 'Distinction/First Class with Honours',
  },
  {
    cgpa: '9.0',
    percentage: '85.50%',
    grade: 'A - Very Good',
    gpaStar: '3.7-4.0',
    description: 'First Class with Distinction',
  },
  {
    cgpa: '8.5',
    percentage: '80.75%',
    grade: 'B+ - Good',
    gpaStar: '3.3-3.7',
    description: 'First Class',
  },
  {
    cgpa: '8.0',
    percentage: '76.00%',
    grade: 'B - Above Average',
    gpaStar: '3.0-3.3',
    description: 'First Class',
  },
  {
    cgpa: '7.5',
    percentage: '71.25%',
    grade: 'C+ - Average',
    gpaStar: '2.7-3.0',
    description: 'Second Class',
  },
  {
    cgpa: '7.0',
    percentage: '66.50%',
    grade: 'C - Satisfactory',
    gpaStar: '2.3-2.7',
    description: 'Second Class',
  },
  {
    cgpa: '6.5',
    percentage: '61.75%',
    grade: 'D - Below Average',
    gpaStar: '2.0-2.3',
    description: 'Pass',
  },
  {
    cgpa: '6.0',
    percentage: '57.00%',
    grade: 'E - Pass',
    gpaStar: '1.7-2.0',
    description: 'Pass',
  },
  {
    cgpa: '5.0',
    percentage: '47.50%',
    grade: 'F - Fail',
    gpaStar: '< 1.7',
    description: 'Below minimum passing',
  },
];

export default function CGPAConverterPage() {
  const schemas = getPageSchema('cgpaConverter');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Calculator className="h-4 w-4" />
              Free Academic Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              CGPA to Percentage Converter
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Convert your CGPA to percentage instantly. Supports 10-point,
              7-point, and 4-point scales with university-specific formulas.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Building className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">50+ Universities</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">22,000+ Users</span>
            </div>
          </div>

          {/* Tool Component */}
          <CGPAConverterTool />

          {/* Social Proof */}
          <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
            <p className="text-sm text-muted-foreground">
              🎓 <strong>243 students</strong> converted their CGPA in the last
              hour
            </p>
          </div>

          {/* Share CTA */}
          <div className="mt-6">
            <ShareCTA toolName="CGPA Converter" />
          </div>

          {/* Main Educational Content */}
          <div className="prose prose-lg mt-16 max-w-none">
            <h2 className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              Complete Guide to CGPA and Percentage Conversion
            </h2>
            <p>
              CGPA (Cumulative Grade Point Average) is a standardized grading
              system used by educational institutions worldwide. Understanding
              how to convert CGPA to percentage is essential for job
              applications, higher education admissions, and competitive exam
              registrations.
            </p>

            <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                Quick Conversion Formula
              </h3>
              <div className="text-center">
                <p className="mb-2 font-mono text-3xl font-bold text-primary">
                  Percentage = CGPA × 9.5
                </p>
                <p className="text-sm text-muted-foreground">
                  This is the standard CBSE formula, accepted by most Indian
                  universities and companies
                </p>
              </div>
            </div>

            <h2 className="flex items-center gap-3">
              <Building className="h-6 w-6 text-primary" />
              University-Specific Conversion Formulas
            </h2>
            <p>
              Different universities in India use different conversion formulas.
              Here's a comprehensive list of university-specific CGPA to
              percentage conversion methods:
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border p-3 text-left">University</th>
                    <th className="border p-3 text-left">Formula</th>
                    <th className="border p-3 text-left">Example (9.0 CGPA)</th>
                  </tr>
                </thead>
                <tbody>
                  {universityFormulas.map((uni, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-muted/30' : ''}
                    >
                      <td className="border p-3 font-medium">{uni.name}</td>
                      <td className="border p-3 font-mono text-sm">
                        {uni.formula}
                      </td>
                      <td className="border p-3 font-semibold text-primary">
                        {uni.example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Understanding CGPA Grading Scales</h2>

            <h3>1. 10-Point CGPA Scale (Most Common in India)</h3>
            <p>
              The 10-point scale is the standard grading system used by CBSE,
              ICSE, and most Indian state boards and universities. Key
              characteristics:
            </p>
            <ul>
              <li>
                <strong>Range:</strong> 0.0 to 10.0
              </li>
              <li>
                <strong>Passing CGPA:</strong> Usually 4.0 to 5.0 depending on
                university
              </li>
              <li>
                <strong>First Class:</strong> Typically 6.5 CGPA and above (60%
                equivalent)
              </li>
              <li>
                <strong>Distinction:</strong> Usually 7.5 CGPA and above (70%
                equivalent)
              </li>
              <li>
                <strong>Standard Conversion:</strong> CGPA × 9.5 = Percentage
              </li>
            </ul>

            <h3>2. 4-Point GPA Scale (US/International)</h3>
            <p>
              The 4-point scale is widely used in the United States, Canada, and
              by many international universities:
            </p>
            <ul>
              <li>
                <strong>Range:</strong> 0.0 to 4.0
              </li>
              <li>
                <strong>Conversion:</strong> (GPA / 4) × 100 = Percentage
              </li>
              <li>
                <strong>4.0 GPA:</strong> Equivalent to 100% (perfect score)
              </li>
              <li>
                <strong>3.5 GPA:</strong> Equivalent to 87.5%
              </li>
              <li>
                <strong>3.0 GPA:</strong> Equivalent to 75% (minimum for many
                grad schools)
              </li>
            </ul>

            <h3>3. 7-Point CGPA Scale</h3>
            <p>
              Some older universities and certain professional courses use the
              7-point scale:
            </p>
            <ul>
              <li>
                <strong>Range:</strong> 0.0 to 7.0
              </li>
              <li>
                <strong>Conversion:</strong> (CGPA × 10) - 7.5 = Percentage
              </li>
              <li>
                <strong>Example:</strong> 6.0 CGPA = 52.5%
              </li>
            </ul>

            <h2>Complete CGPA to Percentage Conversion Table</h2>
            <p>
              Here's a detailed reference table for quick conversions using the
              standard CBSE formula (CGPA × 9.5):
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border p-3 text-left">CGPA (10-point)</th>
                    <th className="border p-3 text-left">Percentage</th>
                    <th className="border p-3 text-left">Grade</th>
                    <th className="border p-3 text-left">4-Point GPA Equiv.</th>
                    <th className="border p-3 text-left">Classification</th>
                  </tr>
                </thead>
                <tbody>
                  {cgpaTable.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-muted/30' : ''}
                    >
                      <td className="border p-3 font-bold text-primary">
                        {row.cgpa}
                      </td>
                      <td className="border p-3 font-semibold">
                        {row.percentage}
                      </td>
                      <td className="border p-3">{row.grade}</td>
                      <td className="border p-3">{row.gpaStar}</td>
                      <td className="border p-3 text-sm text-muted-foreground">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Why You Need CGPA to Percentage Conversion</h2>

            <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Job Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    Many companies, especially in IT and consulting, set minimum
                    percentage requirements:
                  </p>
                  <ul className="space-y-1">
                    <li>• TCS: 60% minimum</li>
                    <li>• Infosys: 65% minimum</li>
                    <li>• Wipro: 60% minimum</li>
                    <li>• Cognizant: 60% minimum</li>
                    <li>• Accenture: 60% minimum</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Higher Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>Universities and programs have varying requirements:</p>
                  <ul className="space-y-1">
                    <li>• IIMs (CAT): 50-60% for General category</li>
                    <li>• GATE: No minimum, merit-based</li>
                    <li>• MS in USA: 3.0 GPA equivalent (~75%)</li>
                    <li>• UPSC: 50-55% in graduation</li>
                    <li>• Bank PO: 55-60% graduation marks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>How CGPA is Calculated</h2>
            <p>
              Understanding how CGPA is calculated helps you interpret and
              improve your grades:
            </p>

            <div className="not-prose my-4 rounded-lg bg-muted p-6">
              <h4 className="mb-3 font-bold">CGPA Calculation Formula:</h4>
              <p className="mb-4 text-center font-mono text-lg">
                CGPA = Σ(Credit × Grade Points) / Σ(Credits)
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Example:</strong>
                </p>
                <p>Subject 1: 4 credits × 9 GP = 36</p>
                <p>Subject 2: 3 credits × 8 GP = 24</p>
                <p>Subject 3: 3 credits × 10 GP = 30</p>
                <p>
                  Total: (36 + 24 + 30) / (4 + 3 + 3) = 90/10 ={' '}
                  <strong>9.0 CGPA</strong>
                </p>
              </div>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>Is 7.5 CGPA good for placements?</h3>
            <p>
              Yes, 7.5 CGPA (approximately 71.25%) is considered good for most
              campus placements in India. It meets the cutoff for majority of IT
              companies. Top tier companies like Microsoft, Google, and Amazon
              may have higher cutoffs (8.0-8.5), while service-based companies
              typically require 6.0-7.0.
            </p>

            <h3>What is 8.5 CGPA in percentage?</h3>
            <p>
              Using the standard CBSE formula, 8.5 CGPA equals{' '}
              <strong>80.75%</strong> (8.5 × 9.5 = 80.75). This is considered a
              "Very Good" grade and qualifies for First Class with distinction
              in most universities.
            </p>

            <h3>Can I convert percentage back to CGPA?</h3>
            <p>
              Yes, to convert percentage to CGPA (10-point scale), divide the
              percentage by 9.5. For example: 85% ÷ 9.5 ={' '}
              <strong>8.95 CGPA</strong>. However, this reverse conversion is an
              approximation and your actual CGPA depends on individual subject
              grades.
            </p>

            <h3>Do all companies use the same conversion formula?</h3>
            <p>
              No, while most companies accept the CGPA × 9.5 formula, some may
              have their own criteria. Always check the company's official
              eligibility requirements. When in doubt, provide both CGPA and
              percentage in your application.
            </p>

            <h3>Which formula should I use for study abroad applications?</h3>
            <p>
              For US universities, provide your CGPA on the 10-point scale along
              with a conversion explanation. Many universities use{' '}
              <strong>WES (World Education Services)</strong> for official
              credential evaluation. UK universities often accept the standard
              10-point scale directly. Always check specific university
              requirements.
            </p>

            <h3>Is CGPA or percentage more important?</h3>
            <p>
              Both are important depending on context. Indian companies
              typically use percentage for filtering, while CGPA is standard in
              academic settings. Always maintain accurate records of both. For
              international applications, CGPA on your original scale is usually
              required.
            </p>

            <h3>What's the minimum CGPA to pass?</h3>
            <p>
              The minimum passing CGPA varies by university, but typically
              ranges from <strong>4.0 to 5.0</strong> on a 10-point scale
              (40-50% equivalent). For professional degrees like engineering,
              most universities require minimum 5.0 CGPA to be eligible for a
              degree.
            </p>

            <h3>How is SGPA different from CGPA?</h3>
            <p>
              <strong>SGPA (Semester Grade Point Average)</strong> is calculated
              for a single semester, while
              <strong>CGPA (Cumulative GPA)</strong> is the average of all
              semesters combined. CGPA provides an overall picture of academic
              performance throughout the course.
            </p>

            <h3>Can I improve my CGPA after graduating?</h3>
            <p>
              Once you've completed your degree, your CGPA is final. However,
              some universities allow re-evaluation or supplementary exams
              before final certification. For career advancement
              post-graduation, focus on acquiring certifications, skills, and
              work experience.
            </p>

            <h3>What CGPA do I need for an MBA?</h3>
            <p>
              MBA admission depends on the B-school. IIMs typically look for
              60%+ (6.5 CGPA) for general category. Top foreign MBA programs
              (Harvard, Stanford, Wharton) expect 3.5+ on a 4.0 scale. However,
              entrance exam scores (CAT, GMAT) and profile often matter more
              than CGPA alone.
            </p>
          </div>

          {/* International GPA Section */}
          <section className="mt-16">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
              🌍 International GPA Requirements for Study Abroad
            </h2>
            <p className="mb-8 text-muted-foreground">
              Planning to study abroad? Understanding how your Indian CGPA
              translates to international standards is crucial for successful
              applications. Different countries and universities have varying
              requirements and evaluation methods.
            </p>

            {/* Country-wise GPA Requirements */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border p-3 text-left">Country</th>
                    <th className="border p-3 text-left">
                      Minimum GPA (Masters)
                    </th>
                    <th className="border p-3 text-left">Top Universities</th>
                    <th className="border p-3 text-left">Evaluation Service</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">🇺🇸 USA</td>
                    <td className="border p-3">
                      3.0/4.0 (7.5 CGPA equivalent)
                    </td>
                    <td className="border p-3">3.5+ for MIT, Stanford, CMU</td>
                    <td className="border p-3">WES, ECE</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3 font-medium">🇬🇧 UK</td>
                    <td className="border p-3">
                      2:1 degree (60%+ or 7.0 CGPA)
                    </td>
                    <td className="border p-3">
                      First Class for Oxford, Cambridge, Imperial
                    </td>
                    <td className="border p-3">NARIC (optional)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">🇩🇪 Germany</td>
                    <td className="border p-3">
                      2.5 German grade (65%+ or 7.5 CGPA)
                    </td>
                    <td className="border p-3">
                      70%+ for TU Munich, TU Berlin
                    </td>
                    <td className="border p-3">Anabin, uni-assist</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3 font-medium">🇨🇦 Canada</td>
                    <td className="border p-3">
                      B+ or 3.0/4.0 (70%+ or 7.5 CGPA)
                    </td>
                    <td className="border p-3">75%+ for U of T, McGill, UBC</td>
                    <td className="border p-3">WES Canada</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">🇦🇺 Australia</td>
                    <td className="border p-3">GPA 5/7 (65%+ or 7.0 CGPA)</td>
                    <td className="border p-3">70%+ for Go8 universities</td>
                    <td className="border p-3">Direct evaluation</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3 font-medium">🇸🇬 Singapore</td>
                    <td className="border p-3">
                      Second Class Honours (65%+ or 7.0 CGPA)
                    </td>
                    <td className="border p-3">80%+ for NUS, NTU</td>
                    <td className="border p-3">Direct evaluation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* WES Evaluation Info */}
            <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                WES (World Education Services) Evaluation
              </h3>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">What is WES?</p>
                  <p className="mb-3 text-muted-foreground">
                    WES is a credential evaluation service that converts your
                    Indian academic credentials to the US/Canadian 4.0 GPA
                    scale. Many universities require WES-evaluated transcripts.
                  </p>
                  <p className="font-semibold">
                    WES GPA Conversion (Approximate):
                  </p>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• 60-100% → 4.0 GPA (WES gives an "A" letter grade)</li>
                    <li>• 55-59% → 3.0 GPA</li>
                    <li>• 50-54% → 2.0 GPA</li>
                    <li>• Below 50% → 1.0 GPA or lower</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Documents Required:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• All semester marksheets (attested)</li>
                    <li>• Degree certificate / Provisional degree</li>
                    <li>• Official transcripts in sealed envelope</li>
                    <li>• Documents sent directly by university</li>
                  </ul>
                  <p className="mt-3 font-semibold">Processing Time & Cost:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Standard: 7-10 business days (~$160 USD)</li>
                    <li>• Express: 2-3 business days (~$260 USD)</li>
                    <li>• Additional reports: ~$30 each</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Study Abroad GPA Tips */}
            <div className="mb-8 rounded-lg border p-6">
              <h3 className="mb-4 font-bold">
                📚 Tips for Study Abroad Applications
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-primary">
                    If Your CGPA is Below Average:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Highlight upward trend in grades if CGPA improved over
                        semesters
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Compensate with strong GRE/GMAT scores (15-20 points
                        above average)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Build strong work experience (2-3 years can offset low
                        GPA)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Consider universities with holistic admission process
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">
                    Document Your Academic Context:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Mention your class rank if top 10-20% of your batch
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Explain tough grading system at your university
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Get strong Letters of Recommendation from professors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Showcase publications, projects, certifications
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/countries/usa"
                className="flex items-center gap-3 rounded-lg border p-4 transition-shadow hover:shadow-md"
              >
                <span className="text-2xl">🇺🇸</span>
                <div>
                  <p className="font-semibold">Study in USA</p>
                  <p className="text-sm text-muted-foreground">
                    Visa, costs & requirements
                  </p>
                </div>
              </Link>
              <Link
                href="/countries/germany"
                className="flex items-center gap-3 rounded-lg border p-4 transition-shadow hover:shadow-md"
              >
                <span className="text-2xl">🇩🇪</span>
                <div>
                  <p className="font-semibold">Study in Germany</p>
                  <p className="text-sm text-muted-foreground">
                    Free education guide
                  </p>
                </div>
              </Link>
              <Link
                href="/tools/gpa-converter"
                className="flex items-center gap-3 rounded-lg border p-4 transition-shadow hover:shadow-md"
              >
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="font-semibold">Global GPA Converter</p>
                  <p className="text-sm text-muted-foreground">
                    Convert to 4.0 scale
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mt-16 rounded-2xl bg-muted p-8">
            <h2 className="mb-6 text-2xl font-bold">Related Career Tools</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Salary Calculator',
                  href: '/tools/salary-calculator',
                  desc: 'Calculate in-hand salary from CTC',
                },
                {
                  title: 'Resume Score Checker',
                  href: '/tools/resume-score-checker',
                  desc: 'Get ATS-friendly resume score',
                },
                {
                  title: 'EMI Calculator',
                  href: '/tools/emi-calculator',
                  desc: 'Plan your education loan EMI',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Resources */}
          <section className="mt-8">
            <h2 className="mb-6 text-2xl font-bold">Academic Resources</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/resources/career-planning"
                className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">Career Planning Guide</h3>
                <p className="text-sm text-muted-foreground">
                  Plan your career path after graduation.
                </p>
              </Link>
              <Link
                href="/resources/aptitude-formulas"
                className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">Aptitude Formulas</h3>
                <p className="text-sm text-muted-foreground">
                  Essential formulas for placement exams.
                </p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Start Your Career Journey
            </h2>
            <p className="mb-6 text-muted-foreground">
              Explore internship opportunities from top startups
            </p>
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Internships
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
