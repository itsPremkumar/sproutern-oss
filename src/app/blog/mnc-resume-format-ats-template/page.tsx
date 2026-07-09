import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  FileText,
  TrendingUp,
  ArrowRight,
  BookOpen,
  AlertTriangle,
  Target,
  Download,
  Copy,
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'MNC Resume Format - ATS-Friendly Template for Freshers',
  description:
    'Create an ATS-friendly resume that gets shortlisted by MNCs. Learn resume format, sections, keywords, common mistakes to avoid, and download free MNC resume templates.',
  keywords: [
    'MNC resume format',
    'ATS resume',
    'resume template',
    'fresher resume',
    'MNC resume tips',
    'resume format for MNC',
    'ATS friendly resume',
  ],
  openGraph: {
    title: 'MNC Resume Format - ATS-Friendly Template for Freshers',
    description:
      'Master MNC resume formatting and get shortlisted by top companies.',
    type: 'article',
    publishedTime: '2025-12-18T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <FileText className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              MNC Placement Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            MNC Resume Format - ATS-Friendly Template for Freshers
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your resume is your first impression. Learn how to create an
            ATS-friendly resume that gets shortlisted by MNCs. Master resume
            format, sections, keywords, and avoid common mistakes that get
            resumes rejected.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>14 min read</span>
            </div>
          </div>
        </header>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Keep resume to 1 page for freshers - recruiters spend only 6
                seconds scanning
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Use ATS-friendly format - simple fonts, no graphics, standard
                sections
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Include relevant keywords from job descriptions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Use our{' '}
                <Link
                  href="/tools/resume-score-checker"
                  className="text-primary hover:underline"
                >
                  Resume Score Checker
                </Link>{' '}
                to analyze your resume
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Download free templates from{' '}
                <Link
                  href="/resources/resume-templates"
                  className="text-primary hover:underline"
                >
                  Resume Templates
                </Link>
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            Most MNCs use Applicant Tracking Systems (ATS) to filter resumes
            before human review.{' '}
            <strong>75% of resumes are rejected by ATS</strong> due to
            formatting issues, missing keywords, or poor structure. Creating an
            ATS-friendly resume is crucial to get shortlisted.
          </p>
          <p>
            This guide covers everything you need to know about MNC resume
            format: ATS optimization, proper sections, keyword integration,
            common mistakes, and free templates.
          </p>
        </section>

        {/* Section 1: Understanding ATS */}
        <section
          id="ats"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Understanding ATS (Applicant Tracking System)
          </h2>

          <h3>What is ATS?</h3>
          <p>
            ATS is software used by companies to scan, filter, and rank resumes.
            It looks for:
          </p>
          <ul>
            <li>
              <strong>Keywords:</strong> Skills, technologies, and
              qualifications mentioned in job description
            </li>
            <li>
              <strong>Format:</strong> Standard sections and formatting that ATS
              can parse
            </li>
            <li>
              <strong>Relevance:</strong> Match between resume content and job
              requirements
            </li>
          </ul>

          <h3>Why ATS-Friendly Format Matters</h3>
          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                75% of resumes never reach human recruiters due to ATS rejection
              </li>
              <li>ATS can't read complex formatting, graphics, or tables</li>
              <li>
                Missing keywords can cause rejection even if you're qualified
              </li>
              <li>
                Proper format increases chances of being shortlisted by 3x
              </li>
            </ul>
          </div>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Use our{' '}
              <Link
                href="/tools/resume-score-checker"
                className="font-semibold text-primary hover:underline"
              >
                Resume Score Checker
              </Link>{' '}
              to analyze your resume for ATS compatibility and get improvement
              suggestions.
            </p>
          </div>
        </section>

        {/* Section 2: MNC Resume Format Structure */}
        <section
          id="format"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            2. MNC Resume Format Structure
          </h2>

          <h3>Ideal Resume Structure for Freshers</h3>
          <ol>
            <li>
              <strong>Header Section:</strong> Name, Contact Information,
              LinkedIn, GitHub
            </li>
            <li>
              <strong>Objective/Summary (Optional):</strong> 2-3 lines about
              career goals
            </li>
            <li>
              <strong>Education:</strong> Degree, University, CGPA, Year
            </li>
            <li>
              <strong>Technical Skills:</strong> Programming languages, tools,
              technologies
            </li>
            <li>
              <strong>Projects:</strong> 3-4 projects with descriptions and
              links
            </li>
            <li>
              <strong>Internships/Experience (If Any):</strong> Company, role,
              duration, achievements
            </li>
            <li>
              <strong>Achievements/Certifications:</strong> Awards,
              certifications, competitions
            </li>
          </ol>

          <h3>Section-by-Section Guide</h3>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">Header Section</h4>
            <div className="rounded border bg-background p-3 text-sm">
              <p className="mb-1 text-lg font-bold">Your Full Name</p>
              <p className="text-muted-foreground">
                +91 9876543210 | yourname.email@gmail.com
              </p>
              <p className="text-muted-foreground">
                LinkedIn: linkedin.com/in/yourprofile | GitHub:
                github.com/yourusername
              </p>
              <p className="text-muted-foreground">Location: City, State</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Tips:</strong> Use professional email, include active
              LinkedIn and GitHub profiles, no need for photo in India.
            </p>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">Education Section</h4>
            <div className="rounded border bg-background p-3 text-sm">
              <p className="font-semibold">
                Bachelor of Technology in Computer Science
              </p>
              <p className="text-muted-foreground">University Name, City</p>
              <p className="text-muted-foreground">CGPA: 8.5/10 | Year:</p>
              <p className="mt-2 text-muted-foreground">
                12th: 85% | 10th: 90%
              </p>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">Technical Skills Section</h4>
            <div className="rounded border bg-background p-3 text-sm">
              <p>
                <strong>Programming Languages:</strong> Java, Python, C++
              </p>
              <p>
                <strong>Web Technologies:</strong> HTML, CSS, JavaScript, React
              </p>
              <p>
                <strong>Databases:</strong> MySQL, MongoDB
              </p>
              <p>
                <strong>Tools:</strong> Git, Docker, AWS
              </p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Tips:</strong> Group by category, include only skills you
              can justify, match job description keywords.
            </p>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Projects Section (Most Important for Freshers)
            </h4>
            <div className="rounded border bg-background p-3 text-sm">
              <p className="font-semibold">
                E-Commerce Website | Java, Spring Boot, MySQL
              </p>
              <ul className="mt-1 list-inside list-disc space-y-1 text-muted-foreground">
                <li>
                  Built full-stack e-commerce platform with user authentication
                  and payment integration
                </li>
                <li>
                  Implemented RESTful APIs handling 1000+ concurrent users
                </li>
                <li>
                  GitHub: github.com/username/project | Live: project-demo.com
                </li>
              </ul>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Tips:</strong> Use action verbs (Built, Developed,
              Implemented), include metrics, add GitHub/live demo links,
              describe impact.
            </p>
          </div>
        </section>

        {/* Section 3: ATS Optimization Tips */}
        <section
          id="optimization"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            3. ATS Optimization Tips
          </h2>

          <h3>Formatting Guidelines</h3>
          <ul>
            <li>
              <strong>Font:</strong> Use standard fonts (Arial, Calibri, Times
              New Roman) - size 10-12pt
            </li>
            <li>
              <strong>File Format:</strong> Save as PDF (preferred) or .docx
            </li>
            <li>
              <strong>No Graphics:</strong> Avoid images, logos, charts, or
              complex tables
            </li>
            <li>
              <strong>Simple Formatting:</strong> Use standard bullet points,
              avoid special characters
            </li>
            <li>
              <strong>Standard Sections:</strong> Use common section headings
              (Education, Experience, Skills)
            </li>
          </ul>

          <h3>Keyword Optimization</h3>
          <ol>
            <li>
              <strong>Analyze Job Description:</strong> Identify important
              keywords and skills
            </li>
            <li>
              <strong>Match Keywords:</strong> Include relevant keywords
              naturally in your resume
            </li>
            <li>
              <strong>Use Variations:</strong> Include both full forms and
              abbreviations (Java, J2EE)
            </li>
            <li>
              <strong>Skills Section:</strong> List all relevant technical
              skills
            </li>
            <li>
              <strong>Project Descriptions:</strong> Use keywords when
              describing projects
            </li>
          </ol>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Example:</strong> If job requires "Java, Spring Boot, REST
              APIs", make sure these appear in your Skills and Projects
              sections.
            </p>
          </div>
        </section>

        {/* Section 4: Common Resume Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            4. Common Resume Mistakes to Avoid
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 1: Spelling and Grammar Errors
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Instant rejection by both ATS and recruiters. Always proofread
                multiple times and use tools like Grammarly.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 2: Using Fancy Fonts and Graphics
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                ATS can't parse complex formatting. Use simple, standard fonts
                and avoid graphics, tables, or images.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 3: Missing Keywords</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Not including relevant keywords from job description causes ATS
                rejection. Always tailor resume to job.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 4: Too Long or Too Short</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Freshers should keep resume to 1 page. Too long shows inability
                to be concise, too short shows lack of experience.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 5: Unprofessional Email ID</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Use professional format like firstname.lastname@gmail.com. Avoid
                emails like coolboy123@gmail.com.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 6: Fake Projects or Skills</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Don't include skills you can't justify. You'll be caught in
                technical interviews.
              </p>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <p className="text-sm">
              Read our detailed{' '}
              <Link
                href="/blog/resume-mistakes-students-avoid"
                className="font-semibold text-primary hover:underline"
              >
                10 Resume Mistakes Guide
              </Link>{' '}
              to avoid all common errors.
            </p>
          </div>
        </section>

        {/* Section 5: Resume Templates */}
        <section
          id="templates"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Download className="h-6 w-6 text-primary" />
            5. Free MNC Resume Templates
          </h2>

          <p>
            Use our professionally designed, ATS-friendly resume templates
            specifically created for freshers applying to MNCs.
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Template 1: Simple & Clean
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Minimalist design, perfect for ATS, focuses on content.
                </p>
                <Button
                  asChild
                  className="w-full"
                >
                  <Link href="/resources/resume-templates">
                    Download Template
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Template 2: Professional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Professional layout with clear sections, ATS-optimized.
                </p>
                <Button
                  asChild
                  className="w-full"
                >
                  <Link href="/resources/resume-templates">
                    Download Template
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Download Free Templates:</strong> Visit our{' '}
              <Link
                href="/resources/resume-templates"
                className="font-semibold text-primary hover:underline"
              >
                Resume Templates
              </Link>{' '}
              page to download multiple ATS-friendly templates for freshers.
            </p>
          </div>
        </section>

        {/* Section 6: Resume Building Tools */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            6. Resume Building Tools & Resources
          </h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Resume Builder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Create ATS-friendly resume with our free resume builder.
                </p>
                <Button
                  asChild
                  className="w-full"
                >
                  <Link href="/tools/resume-builder">Build Resume</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Resume Score Checker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Analyze your resume and get ATS compatibility score.
                </p>
                <Button
                  asChild
                  className="w-full"
                >
                  <Link href="/tools/resume-score-checker">Check Score</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">Additional Resources:</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/resources/resume-guide"
                  className="text-primary hover:underline"
                >
                  Complete Resume Writing Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-write-a-resume-that-beats-ats"
                  className="text-primary hover:underline"
                >
                  ATS Resume Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/one-page-resume-guide"
                  className="text-primary hover:underline"
                >
                  One-Page Resume Guide
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I include a photo in my resume?
              </p>
              <p className="mt-2 text-muted-foreground">
                No, photos are not required in Indian resumes and can cause ATS
                parsing issues. Focus on content instead.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How long should a fresher resume be?</p>
              <p className="mt-2 text-muted-foreground">
                Keep it to 1 page. Recruiters spend only 6 seconds scanning
                resumes. Be concise and impactful.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I customize resume for each company?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes, customize keywords and skills to match job description.
                This significantly improves ATS scores.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What file format should I use?</p>
              <p className="mt-2 text-muted-foreground">
                PDF is preferred as it maintains formatting across devices. Some
                companies also accept .docx format.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Create Your ATS-Friendly Resume Today</h2>
          <p>
            An ATS-friendly resume is your ticket to getting shortlisted by
            MNCs. Follow the format guidelines, optimize for keywords, and avoid
            common mistakes to maximize your chances.
          </p>
          <p className="text-lg font-semibold text-primary">
            Use our{' '}
            <Link
              href="/tools/resume-builder"
              className="hover:underline"
            >
              Resume Builder
            </Link>
            , check your resume with{' '}
            <Link
              href="/tools/resume-score-checker"
              className="hover:underline"
            >
              Resume Score Checker
            </Link>
            , and download free templates from{' '}
            <Link
              href="/resources/resume-templates"
              className="hover:underline"
            >
              Resume Templates
            </Link>
            . Good luck! 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/tools/resume-builder"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Build ATS Resume
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Check Resume Score
            </Link>
            <Link
              href="/resources/resume-templates"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Download Templates
            </Link>
            <Link
              href="/blog/how-to-write-a-resume-that-beats-ats"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              ATS Resume Guide
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on analysis of 10,000+ resumes and feedback from MNC
                recruiters and ATS systems.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
