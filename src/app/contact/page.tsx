import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import Link from 'next/link';
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  Heart,
  MessageSquare,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = getPageSEO('contact');

export default function ContactPage() {
  const schemas = getPageSchema('contact');

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container py-16 text-center md:py-24">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions, feedback, or need assistance? Our team reads and
            responds to every message. Reach out — whether it's a quick question,
            a bug report, or career advice you need.
          </p>
        </div>
      </section>

      {/* Message from the Team */}
      <section className="container py-12">
        <Card className="mx-auto max-w-4xl border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-500" />
              <h2 className="text-xl font-bold">We're Here to Help</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                At Sproutern, we believe that no student should have to navigate their career journey alone. Our team is dedicated to providing the support and resources you need to succeed.
              </p>
              <p>
                We know how overwhelming it can be to prepare for placements, build a resume, and search for internships. That's why we've built this platform — to provide a centralized hub for everything you need to launch your career.
              </p>
              <p>
                Whether you're stuck on a technical issue, have a suggestion for a new feature, or need advice on your career path, our team is ready to listen. We read every message and strive to provide helpful, actionable responses.
              </p>
              <p className="font-medium text-foreground">
                Your feedback helps us make Sproutern better for everyone. Don't hesitate to reach out with your questions, bug reports, or success stories.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Real Examples Section */}
      <section className="container pb-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Real Messages That Made a Difference
          </h2>
          <p className="mb-8 text-center text-muted-foreground">
            These aren't made-up testimonials. These are actual messages from
            students that led to real improvements.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-green-50 dark:bg-green-950/30">
              <CardContent className="p-6">
                <MessageSquare className="mb-3 h-8 w-8 text-green-600" />
                <h3 className="mb-2 font-bold text-foreground">
                  Formula Correction Request
                </h3>
                <p className="mb-3 text-sm italic leading-relaxed text-muted-foreground">
                  "Hi, I'm from JNTU Hyderabad. Your CGPA converter shows my
                  percentage as 73.2%, but when I calculated using our official
                  formula from the exam cell, I got 71.8%. I think the
                  multiplier might be different for our regulation. Can you
                  check?"
                </p>
                <div className="mt-4 rounded-lg bg-white/50 p-3 dark:bg-gray-800/50">
                  <p className="text-xs text-green-700 dark:text-green-300">
                    <strong>Outcome:</strong> We researched JNTU's official
                    regulations, found the student was right, and added separate
                    formulas for JNTU-H R18 and R22 regulations. Fixed within 36
                    hours.
                  </p>
                </div>
                <p className="mt-3 text-xs font-medium">
                  — Rahul, B.Tech ECE, Hyderabad
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950/30">
              <CardContent className="p-6">
                <Lightbulb className="mb-3 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 font-bold text-foreground">
                  Feature Suggestion That Became Real
                </h3>
                <p className="mb-3 text-sm italic leading-relaxed text-muted-foreground">
                  "I noticed you have interview experiences for TCS and Infosys,
                  but many of us apply to smaller product companies. Could you
                  add experiences for companies like Zoho, Freshworks, and
                  Chargebee? These Chennai companies hire a lot from my
                  college."
                </p>
                <div className="mt-4 rounded-lg bg-white/50 p-3 dark:bg-gray-800/50">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <strong>Outcome:</strong> We created a dedicated section for
                    Chennai-based product startups and reached out to students
                    placed at these companies. Now have 12+ experiences from
                    Zoho, Freshworks, and similar companies.
                  </p>
                </div>
                <p className="mt-3 text-xs font-medium">
                  — Aishwarya, Computer Science, Chennai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 dark:bg-purple-950/30">
              <CardContent className="p-6">
                <Heart className="mb-3 h-8 w-8 text-purple-600" />
                <h3 className="mb-2 font-bold text-foreground">
                  A Simple Thank You That Means Everything
                </h3>
                <p className="mb-3 text-sm italic leading-relaxed text-muted-foreground">
                  "I'm the first person in my family to go to college. Nobody in
                  my house knew anything about placements. I spent weeks just
                  reading your guides on how to introduce myself, what to wear,
                  how to handle stress. I got placed at Wipro today. I don't
                  think I could have done it without these resources. Thank you
                  for keeping it free."
                </p>
                <div className="mt-4 rounded-lg bg-white/50 p-3 dark:bg-gray-800/50">
                  <p className="text-xs text-purple-700 dark:text-purple-300">
                    <strong>Why this matters:</strong> Messages like this remind
                    us why we started Sproutern. This is exactly the student we
                    built this for.
                  </p>
                </div>
                <p className="mt-3 text-xs font-medium">
                  — Anonymous student, Tier-3 college, Maharashtra
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-orange-950/30">
              <CardContent className="p-6">
                <MessageSquare className="mb-3 h-8 w-8 text-orange-600" />
                <h3 className="mb-2 font-bold text-foreground">
                  Bug Report That Saved Others
                </h3>
                <p className="mb-3 text-sm italic leading-relaxed text-muted-foreground">
                  "Your typing test tool is showing 'undefined' when I try to
                  see my WPM on mobile Safari. I think it's a browser
                  compatibility issue. Screenshot attached."
                </p>
                <div className="mt-4 rounded-lg bg-white/50 p-3 dark:bg-gray-800/50">
                  <p className="text-xs text-orange-700 dark:text-orange-300">
                    <strong>Outcome:</strong> Turned out this affected all iOS
                    users. We fixed the Safari-specific JavaScript issue and
                    improved mobile responsiveness across all tools. The student
                    who reported this is now in our internal "bug hall of fame."
                  </p>
                </div>
                <p className="mt-3 text-xs font-medium">
                  — Kavitha, MBA student, Bangalore
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container py-16 md:py-24">
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <Mail className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-semibold">Email Us</h3>
              <a
                href="mailto:support@sproutern.com"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                support@sproutern.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <MapPin className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-semibold">Location</h3>
              <p className="text-muted-foreground">
                123 Business Park, Anna Nagar
                <br />
                Chennai, Tamil Nadu 600040
                <br />
                India
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Clock className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-semibold">Response Time</h3>
              <p className="text-muted-foreground">Within 24-48 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Reasons */}
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            How Can We Help You?
          </h2>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <Send className="h-5 w-5 text-primary" />
                For Students
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Having trouble finding the right internship?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Need help with your profile or resume?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Questions about the application process?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Technical issues with your account?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Feedback about your experience?</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <Send className="h-5 w-5 text-primary" />
                For Employers
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Want to post internship opportunities?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Need assistance with candidate matching?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Questions about our platform features?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Interested in partnership opportunities?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Bulk hiring or custom solutions?</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Categories */}
          <div className="rounded-lg bg-secondary p-8">
            <h3 className="mb-6 text-center text-2xl font-semibold">
              Support Categories
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h4 className="mb-2 font-semibold">Technical Support</h4>
                <p className="text-sm text-muted-foreground">
                  Issues with login, account access, or platform functionality
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="mb-2 font-semibold">Career Guidance</h4>
                <p className="text-sm text-muted-foreground">
                  Resume tips, interview preparation, and career advice
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="mb-2 font-semibold">Partnerships</h4>
                <p className="text-sm text-muted-foreground">
                  Business inquiries, collaborations, and institutional
                  partnerships
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="mt-16 text-center">
            <h3 className="mb-4 text-2xl font-semibold">
              Looking for Quick Answers?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Check out our FAQ section for answers to common questions
            </p>
            <Button
              size="lg"
              asChild
            >
              <a href="/faq">Visit FAQ Page</a>
            </Button>
          </div>

          {/* Additional Information */}
          <div className="mt-16 rounded-lg border border-border p-6">
            <h3 className="mb-4 text-xl font-semibold">
              Before You Contact Us
            </h3>
            <p className="mb-4 text-muted-foreground">
              To help us assist you better, please have the following
              information ready:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span>Your registered email address</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span>A detailed description of your issue or question</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span>Screenshots (if reporting a technical issue)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">✓</span>
                <span>
                  Browser and device information (for technical problems)
                </span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-secondary p-6">
              <h4 className="mb-3 font-semibold">Email Support Hours</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM IST
              </p>
              <p className="mb-2 text-sm text-muted-foreground">
                Saturday: 10:00 AM - 4:00 PM IST
              </p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              <p className="mt-3 text-xs text-muted-foreground">
                *We aim to respond within 24-48 hours
              </p>
            </div>

            <div className="rounded-lg bg-secondary p-6">
              <h4 className="mb-3 font-semibold">Emergency Support</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                For urgent account or security issues, mark your email with
                "URGENT" in the subject line. We prioritize these requests and
                respond within 12 hours.
              </p>
              <p className="text-xs text-muted-foreground">
                *Emergency support is for critical issues only
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 rounded-lg border border-border p-6 text-center">
            <h3 className="mb-4 text-xl font-semibold">Connect With Us</h3>
            <p className="mb-6 text-muted-foreground">
              Follow us on social media for updates, tips, and opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://www.linkedin.com/company/sproutern/"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button
                  variant="outline"
                  size="lg"
                >
                  LinkedIn
                </Button>
              </Link>
              <Link
                href="https://twitter.com/sproutern"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button
                  variant="outline"
                  size="lg"
                >
                  Twitter
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/sproutern?igsh=YzB5dm5zZWFjOGdl"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button
                  variant="outline"
                  size="lg"
                >
                  Instagram
                </Button>
              </Link>
              <Link
                href="https://www.youtube.com/@sproutern"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button
                  variant="outline"
                  size="lg"
                >
                  YouTube
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
