'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import {
  FileText,
  Copy,
  Download,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Lightbulb,
  AlertCircle,
  BookOpen,
  Target,
  Sparkles,
  XCircle,
  ArrowRight,
  FileCheck,
} from 'lucide-react';

export default function CoverLetterGeneratorContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    skills: '',
    tone: 'professional',
  });
  const [coverLetter, setCoverLetter] = useState('');
  const [copied, setCopied] = useState(false);

  const generateCoverLetter = () => {
    if (!formData.name || !formData.company || !formData.position) {
      alert('Please fill in your name, company name, and position');
      return;
    }

    const experienceText =
      formData.experience === '0'
        ? 'As a recent graduate eager to launch my career'
        : formData.experience === '1-2'
          ? 'With 1-2 years of relevant experience'
          : formData.experience === '3-5'
            ? 'With over 3 years of progressive experience'
            : 'With extensive professional experience';

    const skillsText = formData.skills
      ? `My key skills include ${formData.skills}, which I believe align perfectly with the requirements of this role.`
      : 'I have developed a strong foundation of skills that I am excited to apply in this role.';

    const toneOpening =
      formData.tone === 'professional'
        ? 'I am writing to express my strong interest in'
        : formData.tone === 'enthusiastic'
          ? 'I am thrilled to apply for'
          : formData.tone === 'confident'
            ? 'I am the ideal candidate for'
            : 'I am writing to express my interest in';

    const letter = `Dear Hiring Manager,

${toneOpening} the ${formData.position} position at ${formData.company}. ${experienceText}, I am confident that my background and passion for excellence make me an ideal candidate for this opportunity.

${skillsText}

Throughout my career, I have consistently demonstrated my ability to deliver results, collaborate effectively with cross-functional teams, and adapt to evolving business needs. I am particularly drawn to ${formData.company} because of its reputation for innovation and commitment to excellence in the industry.

I am excited about the prospect of bringing my unique blend of skills and experience to your team. I am confident that I can make meaningful contributions to ${formData.company}'s continued success.

Thank you for considering my application. I look forward to the opportunity to discuss how my qualifications align with your team's needs. Please feel free to contact me at ${formData.email || '[your email]'}${formData.phone ? ` or ${formData.phone}` : ''}.

Sincerely,
${formData.name}`;

    setCoverLetter(letter);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coverLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <FileText className="h-4 w-4" />
            Free Career Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Cover Letter Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Create professional, personalized cover letters in seconds. Stand
            out from the competition with compelling introductions.
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
            <span className="text-sm font-medium">30 Seconds</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Shield className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Privacy First</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Users className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">18,000+ Users</span>
          </div>
        </div>

        {/* Generator Tool */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Generate Your Cover Letter
            </CardTitle>
            <CardDescription>
              Fill in your details to create a personalized cover letter
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Full Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., Rahul Sharma"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g., rahul@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  placeholder="e.g., Google India"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position Applying For *</Label>
                <Input
                  id="position"
                  placeholder="e.g., Software Engineer Intern"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) =>
                    setFormData({ ...formData, experience: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Fresher / Student</SelectItem>
                    <SelectItem value="1-2">1-2 Years</SelectItem>
                    <SelectItem value="3-5">3-5 Years</SelectItem>
                    <SelectItem value="5+">5+ Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Writing Tone</Label>
                <Select
                  value={formData.tone}
                  onValueChange={(value) =>
                    setFormData({ ...formData, tone: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    <SelectItem value="confident">Confident</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Key Skills (comma-separated)</Label>
              <Textarea
                id="skills"
                placeholder="e.g., Python, Machine Learning, Data Analysis, Communication"
                value={formData.skills}
                onChange={(e) =>
                  setFormData({ ...formData, skills: e.target.value })
                }
                rows={2}
              />
            </div>

            <Button
              onClick={generateCoverLetter}
              className="w-full"
              size="lg"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Cover Letter
            </Button>

            {coverLetter && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Your Cover Letter</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyToClipboard}
                    >
                      <Copy className="mr-1 h-4 w-4" />
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </div>
                <Textarea
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  rows={15}
                  className="font-mono text-sm"
                />
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Tip:</strong> Edit the generated letter to add
                  specific achievements and customize it further.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Social Proof */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            ✨ <strong>67 students</strong> created cover letters in the last
            hour
          </p>
        </div>

        {/* Cover Letter Anatomy */}
        <section className="mt-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <FileCheck className="h-8 w-8 text-primary" />
            Anatomy of a Perfect Cover Letter
          </h2>

          <div className="space-y-4">
            {[
              {
                part: 'Opening Paragraph',
                purpose: 'Hook the reader',
                tips: "Mention the specific role, show enthusiasm, and include a compelling reason why you're interested in THIS company",
              },
              {
                part: 'Body Paragraph 1',
                purpose: 'Match skills to requirements',
                tips: 'Pick 2-3 key requirements from the job description and show how your experience aligns with concrete examples',
              },
              {
                part: 'Body Paragraph 2',
                purpose: 'Add unique value',
                tips: 'Share an achievement, project, or skill that sets you apart. Quantify results whenever possible',
              },
              {
                part: 'Closing Paragraph',
                purpose: 'Call to action',
                tips: 'Express enthusiasm, request an interview, and provide contact information. Keep it confident but not pushy',
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-l-4 border-l-primary"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.part}</h3>
                      <p className="mb-1 text-sm font-medium text-primary">
                        Purpose: {item.purpose}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.tips}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">
            Cover Letter Do's and Don'ts
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-200 dark:border-green-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  Do This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'Address it to a specific person when possible',
                  'Research the company and mention specific details',
                  "Quantify your achievements (e.g., 'increased sales by 25%')",
                  'Keep it to one page (300-400 words ideal)',
                  'Use the same header/font as your resume',
                  'Proofread multiple times for errors',
                  'Customize for each application',
                  'Show personality while staying professional',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-red-600">
                  <XCircle className="h-5 w-5" />
                  Avoid This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Using 'To Whom It May Concern'",
                  'Repeating your entire resume in paragraph form',
                  "Starting with 'I am writing to apply for...'",
                  'Making it about what YOU want (focus on value)',
                  'Using a generic template without customization',
                  'Including negative information about past employers',
                  'Making spelling or grammar mistakes',
                  'Being too humble or overly boastful',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm"
                  >
                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry-Specific Tips */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">
            Industry-Specific Cover Letter Tips
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tech / IT</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Mention specific technologies from the job description</p>
                <p>• Link to your GitHub, portfolio, or projects</p>
                <p>• Discuss problem-solving approach, not just skills</p>
                <p>• Keep it concise - tech recruiters are busy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Finance / Consulting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Use formal, polished language</p>
                <p>• Quantify achievements with numbers/percentages</p>
                <p>• Research the company's recent deals or projects</p>
                <p>• Show analytical and client-facing skills</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Marketing / Creative</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Show creativity in your writing style</p>
                <p>• Include metrics (engagement, reach, conversions)</p>
                <p>• Link to portfolio or campaign samples</p>
                <p>• Demonstrate understanding of their brand voice</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Startups</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Show entrepreneurial mindset and adaptability</p>
                <p>• Express genuine passion for the product/mission</p>
                <p>
                  • Highlight diverse skills and willingness to wear multiple
                  hats
                </p>
                <p>• Be casual but professional - match their culture</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Power Words */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">
            Power Words to Strengthen Your Cover Letter
          </h2>

          <div className="rounded-xl bg-muted p-6">
            <div className="grid gap-6 md:grid-cols-4">
              <div>
                <h4 className="mb-3 font-semibold text-primary">
                  Action Words
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Achieved',
                    'Delivered',
                    'Launched',
                    'Led',
                    'Managed',
                    'Built',
                  ].map((word) => (
                    <span
                      key={word}
                      className="rounded bg-background px-2 py-1 text-sm"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-primary">
                  Impact Words
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Increased',
                    'Reduced',
                    'Improved',
                    'Streamlined',
                    'Optimized',
                    'Transformed',
                  ].map((word) => (
                    <span
                      key={word}
                      className="rounded bg-background px-2 py-1 text-sm"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-primary">
                  Skills Words
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Expert in',
                    'Proficient',
                    'Skilled at',
                    'Specialized',
                    'Experienced',
                    'Adept',
                  ].map((word) => (
                    <span
                      key={word}
                      className="rounded bg-background px-2 py-1 text-sm"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-primary">
                  Enthusiasm Words
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Excited',
                    'Passionate',
                    'Eager',
                    'Dedicated',
                    'Committed',
                    'Driven',
                  ].map((word) => (
                    <span
                      key={word}
                      className="rounded bg-background px-2 py-1 text-sm"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="mt-16">
          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              Cover Letter Statistics You Should Know
            </h3>
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-primary">83%</span>
                <span>
                  of hiring managers say a great cover letter can get you an
                  interview even with a weak resume
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-primary">7 sec</span>
                <span>
                  Average time a recruiter spends on initial cover letter scan -
                  make every word count
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-primary">45%</span>
                <span>
                  of job seekers skip the cover letter when it's optional - this
                  is your chance to stand out
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-primary">26%</span>
                <span>
                  higher response rate for personalized cover letters vs.
                  generic templates
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long should my cover letter be?',
                a: 'Keep it to one page, ideally 250-400 words. Recruiters prefer concise, impactful letters over lengthy ones. Focus on 3-4 key points that make you the ideal candidate.',
              },
              {
                q: "Should I include a cover letter if it's optional?",
                a: 'Yes! When 45% of applicants skip it, submitting a well-written cover letter can significantly boost your chances. It shows initiative and genuine interest in the role.',
              },
              {
                q: "How do I address a cover letter if I don't know the hiring manager's name?",
                a: "Try to find the name on LinkedIn or the company website. If truly unavailable, use 'Dear Hiring Manager' or 'Dear [Department] Team'. Avoid 'To Whom It May Concern'.",
              },
              {
                q: 'Should I repeat my resume content in the cover letter?',
                a: 'No - the cover letter should complement your resume, not repeat it. Use it to tell a story, explain career transitions, or highlight achievements that need context.',
              },
              {
                q: 'How do I write a cover letter as a fresher with no experience?',
                a: 'Focus on academic projects, internships, volunteering, and transferable skills. Show enthusiasm for learning and link your coursework/projects to the job requirements.',
              },
              {
                q: 'Can I use the same cover letter for multiple applications?',
                a: 'No - generic cover letters are easily spotted and often rejected. Customize at least 30% of the content for each application, especially the opening and company-specific details.',
              },
              {
                q: 'Should I mention salary expectations in my cover letter?',
                a: 'Only if specifically requested in the job posting. Otherwise, save salary discussions for the interview stage. Mentioning it too early can screen you out prematurely.',
              },
              {
                q: 'How do I explain employment gaps in a cover letter?',
                a: 'Address it briefly and positively - focus on what you learned/did during the gap (freelancing, courses, caregiving) and pivot quickly to your qualifications for this role.',
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* International Cover Letter Formats */}
        <section className="mt-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            🌍 Cover Letter Formats by Country
          </h2>
          <p className="mb-6 text-muted-foreground">
            Cover letter expectations vary significantly by country. Here's how
            to adapt your approach:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🇺🇸 USA Format</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Keep it SHORT (250-350 words max)</p>
                <p>• Focus heavily on achievements with numbers</p>
                <p>• Confident, direct tone is preferred</p>
                <p>• Always customize for each application</p>
                <p>• Include LinkedIn profile link</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🇬🇧 UK Covering Letter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Called "Covering Letter" in UK</p>
                <p>• More formal tone than US</p>
                <p>• Include specific examples from experience</p>
                <p>• Address to named person if possible</p>
                <p>• Mention notice period if currently employed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🇩🇪 German Anschreiben</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Very formal structure is expected</p>
                <p>• Include your earliest possible start date</p>
                <p>• Mention all relevant qualifications</p>
                <p>• Address as "Sehr geehrte/r Herr/Frau [Name]"</p>
                <p>• Sign off with "Mit freundlichen Grüßen"</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  🌏 Remote / International Jobs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Mention timezone flexibility and overlap</p>
                <p>• Highlight async communication skills</p>
                <p>• Show previous remote work experience</p>
                <p>• Mention home office setup if relevant</p>
                <p>• Include tools proficiency (Slack, Zoom, etc.)</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Resume Writing Guide',
                href: '/resources/resume-guide',
                desc: 'Create an ATS-friendly resume',
              },
              {
                title: 'Cover Letter Templates',
                href: '/resources/cover-letters',
                desc: 'Professional templates by industry',
              },
              {
                title: 'Resume Score Checker',
                href: '/tools/resume-score-checker',
                desc: 'Get instant resume feedback',
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready to Apply?</h2>
          <p className="mb-6 text-muted-foreground">
            Browse internship opportunities and use your new cover letter
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Internships
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resources/interview-prep"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              Prepare for Interviews
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
