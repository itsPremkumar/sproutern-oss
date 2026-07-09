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
  Mail,
  Briefcase,
  BookOpen,
  ArrowRight,
  Star,
  Zap,
} from 'lucide-react';

export const metadata = getPageSEO('coverLetters');

export default function CoverLettersPage() {
  const schemas = getPageSchema('coverLetters');

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <FileText className="h-4 w-4" />
          Complete Guide + Templates
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Cover Letter Writing Guide
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Learn to write compelling cover letters that get you noticed. Includes
          professional templates, industry-specific examples, and expert tips
          for standing out in competitive job markets.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
          <Users className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium">30K+ Downloads</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
          <CheckCircle className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">HR-Approved</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
          <Clock className="h-5 w-5 text-purple-600" />
          <span className="text-sm font-medium">Updated</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
          <Award className="h-5 w-5 text-orange-600" />
          <span className="text-sm font-medium">5 Templates</span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="mx-auto mb-12 max-w-4xl rounded-xl bg-muted/50 p-6">
        <h2 className="mb-4 text-lg font-bold">Table of Contents</h2>
        <ol className="grid gap-2 text-sm md:grid-cols-2">
          <li>
            <a
              href="#why-cover-letter"
              className="text-primary hover:underline"
            >
              1. Why Cover Letters Matter
            </a>
          </li>
          <li>
            <a
              href="#structure"
              className="text-primary hover:underline"
            >
              2. Perfect Cover Letter Structure
            </a>
          </li>
          <li>
            <a
              href="#writing-tips"
              className="text-primary hover:underline"
            >
              3. Writing Tips & Best Practices
            </a>
          </li>
          <li>
            <a
              href="#industry-examples"
              className="text-primary hover:underline"
            >
              4. Industry-Specific Examples
            </a>
          </li>
          <li>
            <a
              href="#common-mistakes"
              className="text-primary hover:underline"
            >
              5. Common Mistakes to Avoid
            </a>
          </li>
          <li>
            <a
              href="#templates"
              className="text-primary hover:underline"
            >
              6. Download Templates
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

      <div className="mx-auto max-w-4xl space-y-16">
        {/* Section 1: Why Cover Letters Matter */}
        <section id="why-cover-letter">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Target className="h-6 w-6 text-primary" />
            1. Why Cover Letters Matter
          </h2>

          <div className="mb-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              Key Statistics
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>83% of hiring managers</strong> say cover letters are
                important when evaluating candidates
              </li>
              <li>
                • Applications with cover letters are{' '}
                <strong>50% more likely</strong> to get interviews
              </li>
              <li>
                • <strong>45% of recruiters</strong> will reject applications
                without cover letters
              </li>
              <li>
                • A tailored cover letter can increase your chances by{' '}
                <strong>40%</strong>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              While some argue cover letters are outdated, the data tells a
              different story. A well-crafted cover letter serves multiple
              crucial purposes:
            </p>
            <ul>
              <li>
                <strong>Shows genuine interest:</strong> It demonstrates you've
                researched the company and role, not just mass-applied
              </li>
              <li>
                <strong>Explains context:</strong> Address career gaps,
                transitions, or unique circumstances your resume can't explain
              </li>
              <li>
                <strong>Highlights personality:</strong> Resumes are facts;
                cover letters show your communication style and enthusiasm
              </li>
              <li>
                <strong>Differentiates you:</strong> When candidates have
                similar qualifications, the cover letter becomes the tiebreaker
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Structure */}
        <section id="structure">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <FileText className="h-6 w-6 text-primary" />
            2. Perfect Cover Letter Structure
          </h2>

          <p className="mb-6 text-muted-foreground">
            A professional cover letter follows a proven structure. Keep it to
            one page (250-400 words) with clear paragraphs.
          </p>

          <div className="space-y-4">
            {[
              {
                title: 'Header & Contact Information',
                desc: 'Your name, phone, email, LinkedIn URL. Match formatting with your resume for a cohesive application.',
                tip: "Use the same header design as your resume to create a professional 'application package' look.",
              },
              {
                title: 'Date & Recipient Details',
                desc: "Current date, hiring manager's name (research on LinkedIn), their title, company name, and address.",
                tip: "Always try to find the hiring manager's name. 'Dear Hiring Manager' is acceptable but less impactful.",
              },
              {
                title: 'Opening Paragraph (Hook)',
                desc: "State the position, how you found it, and one compelling reason why you're the ideal candidate. Create intrigue.",
                tip: "Avoid generic openings like 'I am writing to apply for...' Instead, lead with your strongest qualification or a connection.",
              },
              {
                title: 'Body Paragraph(s) (Value Proposition)',
                desc: '2-3 paragraphs highlighting relevant achievements, skills, and experiences. Use specific examples with metrics.',
                tip: "Mirror keywords from the job description. Each paragraph should answer: 'Why should they hire YOU?'",
              },
              {
                title: 'Closing Paragraph (Call to Action)',
                desc: 'Express enthusiasm, mention availability for interview, thank the reader, and include a clear call-to-action.',
                tip: "Be confident but not presumptuous. 'I look forward to discussing how I can contribute' works better than 'I hope to hear from you.'",
              },
              {
                title: 'Professional Sign-off',
                desc: "'Sincerely,' 'Best regards,' or 'Kind regards,' followed by your full name.",
                tip: 'Add your phone number again under your signature for easy reference.',
              },
            ].map((section, i) => (
              <div
                key={i}
                className="border-l-4 border-primary py-2 pl-4"
              >
                <h3 className="mb-1 text-lg font-semibold">{section.title}</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  {section.desc}
                </p>
                <p className="flex items-start gap-2 rounded bg-primary/10 p-2 text-xs">
                  <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>
                    <strong>Pro Tip:</strong> {section.tip}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Writing Tips */}
        <section id="writing-tips">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Star className="h-6 w-6 text-primary" />
            3. Writing Tips & Best Practices
          </h2>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-green-700 dark:text-green-300">
                <CheckCircle className="h-5 w-5" />
                Do This
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Research the company and mention specific details</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Quantify achievements: "Increased sales by 30%"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>
                    Tailor each letter to the specific job and company
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Use active voice and strong action verbs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Proofread multiple times for errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Match tone to company culture (formal vs. casual)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-red-700 dark:text-red-300">
                <XCircle className="h-5 w-5" />
                Avoid This
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Generic openings: "I am writing to apply..."</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Repeating your resume word-for-word</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Focusing on what YOU want vs. what you offer</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Using one template for all applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Exceeding one page or using tiny fonts</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Negative language about previous employers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-6">
            <h3 className="mb-4 font-bold">The 3-Paragraph Formula</h3>
            <div className="space-y-4 text-sm">
              <div className="rounded-lg bg-background p-4">
                <p className="mb-2 font-semibold text-primary">
                  Paragraph 1: The Hook
                </p>
                <p className="text-muted-foreground">
                  "As a data scientist who increased revenue predictions
                  accuracy by 35% at [Previous Company], I was excited to see
                  [Company Name]'s opening for a Senior Data Scientist. Your
                  recent work on [specific project from their website] aligns
                  perfectly with my experience in predictive modeling."
                </p>
              </div>
              <div className="rounded-lg bg-background p-4">
                <p className="mb-2 font-semibold text-primary">
                  Paragraph 2: The Evidence
                </p>
                <p className="text-muted-foreground">
                  "In my current role, I lead a team of 4 analysts and have
                  delivered: [Achievement 1 with metric], [Achievement 2 with
                  metric], [Achievement 3 with metric]. These experiences
                  directly translate to the challenges described in your job
                  posting, particularly [specific requirement from JD]."
                </p>
              </div>
              <div className="rounded-lg bg-background p-4">
                <p className="mb-2 font-semibold text-primary">
                  Paragraph 3: The Close
                </p>
                <p className="text-muted-foreground">
                  "I'm particularly drawn to [Company]'s mission of [company
                  mission]. I'd welcome the opportunity to discuss how my
                  background in [relevant area] can contribute to your team's
                  goals. I'm available for a call at your convenience."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Industry Examples */}
        <section id="industry-examples">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Briefcase className="h-6 w-6 text-primary" />
            4. Industry-Specific Examples
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-600">💻</span>
                  Software Development / Tech
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg bg-muted p-4 text-sm">
                  <p className="italic">
                    "After shipping 3 production features to 100K+ users at
                    [Company], I'm eager to bring my full-stack expertise to
                    [Target Company]'s engineering team. Your recent blog post
                    on microservices migration resonated with me—I led a similar
                    initiative that reduced API latency by 40%."
                  </p>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Mention specific technologies from job description</li>
                  <li>✓ Include GitHub profile or portfolio links</li>
                  <li>✓ Reference company tech blog or engineering culture</li>
                  <li>✓ Quantify impact: users, performance, team size</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-green-600">📊</span>
                  Data Science / Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg bg-muted p-4 text-sm">
                  <p className="italic">
                    "My machine learning models at [Company] currently power
                    recommendations for 2M daily users with 89% accuracy. Having
                    followed [Target Company]'s work on [specific project], I'm
                    excited about the opportunity to apply my NLP expertise to
                    [specific challenge]."
                  </p>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Highlight specific ML/statistical methods used</li>
                  <li>✓ Mention Kaggle rankings or competitions if relevant</li>
                  <li>✓ Quantify model performance and business impact</li>
                  <li>✓ Reference company's data challenges you can solve</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-purple-600">📈</span>
                  Marketing / Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg bg-muted p-4 text-sm">
                  <p className="italic">
                    "When I saw [Target Company]'s creative LinkedIn campaign
                    last month, I knew this was a team I wanted to join. At
                    [Company], I've grown organic traffic from 10K to 150K
                    monthly visitors and launched campaigns with 4x ROI. I'd
                    love to bring this growth mindset to your marketing team."
                  </p>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Include specific campaign metrics and ROI</li>
                  <li>✓ Reference their recent marketing initiatives</li>
                  <li>✓ Mention tools you've mastered (HubSpot, Google Ads)</li>
                  <li>✓ Show understanding of their target audience</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-orange-600">🎓</span>
                  Fresh Graduate / Intern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg bg-muted p-4 text-sm">
                  <p className="italic">
                    "As a final-year Computer Science student at [University]
                    with a 8.5 CGPA, I've been following [Target Company]'s
                    innovative work in fintech. My internship at [Company] and
                    winning [Hackathon Name] taught me to deliver under
                    pressure—skills I'm eager to apply at [Target Company]."
                  </p>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Lead with relevant coursework or projects</li>
                  <li>✓ Highlight transferable skills from academics</li>
                  <li>✓ Mention any internships, even short ones</li>
                  <li>✓ Show enthusiasm for learning and growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section id="common-mistakes">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            5. Common Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {[
              {
                mistake: "Using 'To Whom It May Concern'",
                fix: "Research and use the hiring manager's name. Check LinkedIn, company website, or call reception.",
              },
              {
                mistake: 'Making it all about you',
                fix: "Focus on what you can do for THEM. Replace 'I want' with 'I can contribute' or 'I will deliver'.",
              },
              {
                mistake: 'Copying your resume content',
                fix: "Expand on 1-2 key achievements with context and stories. Add personality your resume can't convey.",
              },
              {
                mistake: 'Generic, template-sounding letters',
                fix: "Mention specific company projects, values, or recent news. Show you've done your homework.",
              },
              {
                mistake: 'Typos and grammatical errors',
                fix: 'Proofread multiple times. Use Grammarly. Have a friend review. Read it aloud.',
              },
              {
                mistake: 'Being too humble or too boastful',
                fix: "State facts confidently with evidence. 'I increased revenue by 30%' is confident, not arrogant.",
              },
              {
                mistake: 'Forgetting the call to action',
                fix: "End with a clear next step: 'I'd welcome the opportunity to discuss this further at your convenience.'",
              },
              {
                mistake: 'Wrong company name (copy-paste error!)',
                fix: 'Triple-check the company name, especially when using templates. This mistake is an instant rejection.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h4 className="mb-2 font-semibold text-red-600">
                  ❌ {item.mistake}
                </h4>
                <p className="text-sm text-green-600">✅ {item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Download Templates */}
        <section
          id="templates"
          className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
            <Mail className="h-6 w-6 text-primary" />
            6. Download Professional Templates
          </h2>
          <p className="mb-6 text-muted-foreground">
            Get our collection of 5 professionally designed cover letter
            templates, each tailored for different industries and career stages.
          </p>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Templates Included:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Software Engineer / Developer</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Data Analyst / Data Scientist</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Marketing / Business Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Fresh Graduate / Intern</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>General Professional Template</span>
                </li>
              </ul>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-bold">Get Free Templates</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  All templates are ATS-friendly and easily customizable in Word
                  and Google Docs format.
                </p>
                <Button
                  className="w-full"
                  asChild
                >
                  <Link href="/tools/cover-letter-generator">
                    Generate Cover Letter{' '}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
                q: 'How long should a cover letter be?',
                a: 'Keep it to one page, ideally 250-400 words. Hiring managers spend an average of 7 seconds scanning a cover letter, so be concise and impactful. Every sentence should add value.',
              },
              {
                q: "Should I include a cover letter if it's optional?",
                a: "Yes, always! 'Optional' often means 'expected.' Submitting a tailored cover letter when others don't gives you a competitive advantage. It shows extra effort and genuine interest.",
              },
              {
                q: "How do I address a cover letter if I don't know the hiring manager's name?",
                a: "Try to find it first—check LinkedIn, the company website, or call and ask. If truly impossible, use 'Dear Hiring Manager' or 'Dear [Department] Team.' Avoid 'To Whom It May Concern'—it's outdated.",
              },
              {
                q: 'Should my cover letter match my resume design?',
                a: "Yes! Use the same header, fonts, and color scheme to create a cohesive 'application package.' This looks professional and shows attention to detail.",
              },
              {
                q: 'Can I use the same cover letter for multiple jobs?',
                a: 'Never submit identical letters. You can have a base template, but customize the opening, company-specific details, and relevant achievements for each application. Recruiters can spot generic letters instantly.',
              },
              {
                q: 'Should I mention salary expectations in my cover letter?',
                a: 'Only if the job posting specifically asks for it. Otherwise, save salary discussions for the interview stage. If required, provide a range based on market research.',
              },
              {
                q: 'How do I explain a career change in my cover letter?',
                a: "Focus on transferable skills and genuine motivation for the switch. Explain why your background makes you uniquely qualified, not why you're leaving your current field. Show enthusiasm for the new direction.",
              },
              {
                q: 'Should I address employment gaps in my cover letter?',
                a: "Briefly, if they're significant. Focus on what you learned or accomplished during the gap (freelancing, courses, volunteering). Don't over-explain or apologize—one sentence is enough.",
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
            Ready to Write Your Cover Letter?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Use our free tools to create a professional cover letter in minutes,
            then pair it with a perfect resume.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/cover-letter-generator">
                Generate Cover Letter
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources/resume-guide">Resume Writing Guide</Link>
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
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
              href="/resources/interview-prep"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Interview Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Ace your next interview
              </p>
            </Link>
            <Link
              href="/resources/networking"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Networking Guide</h3>
              <p className="text-sm text-muted-foreground">
                Build professional connections
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
