import Link from 'next/link';
import { Instagram, Linkedin, Mail, Youtube } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function EnhancedFooter() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo & Description + Newsletter */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center space-x-2"
            >
              <Logo />
              <span className="text-xl font-bold">Sproutern</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting students with innovative startups for impactful
              internships. Your career journey starts here.
            </p>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <h3 className="mb-3 font-semibold">
                📧 Weekly Career Newsletter
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Get the latest internships, career tips, and exclusive resources
                delivered to your inbox.
              </p>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: Implement newsletter signup
                  alert('Newsletter signup coming soon!');
                }}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="mb-1 text-base font-semibold">Company</h3>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Us
            </Link>
            <Link
              href="/testimonials"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Success Stories
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Press & Media
            </Link>
          </div>

          {/* For Students */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="mb-1 text-base font-semibold">For Students</h3>
            <Link
              href="/internships"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Find Internships
            </Link>
            <Link
              href="/off-campus-drives"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Off-Campus Drives
            </Link>
            <Link
              href="/companies"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Company Reviews
            </Link>
            <Link
              href="/tools"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Career Tools
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Career Blog
            </Link>
            <Link
              href="/resources"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Free Resources
            </Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="mb-1 text-base font-semibold">Resources</h3>
            <Link
              href="/resources/resume-templates"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Resume Templates
            </Link>
            <Link
              href="/resources/cover-letters"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Cover Letter Samples
            </Link>
            <Link
              href="/resources/interview-cheatsheet"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Interview Cheat Sheet
            </Link>
            <Link
              href="/resources/linkedin-optimization"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn Optimization
            </Link>
            <Link
              href="/resources/salary-negotiation"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Salary Negotiation
            </Link>
            <Link
              href="/resources/github-profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub Profile Guide
            </Link>
            <Link
              href="/resources/ats-resume-keywords"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              ATS Resume Keywords
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Resume Checker
            </Link>
            <Link
              href="/faq"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="mb-1 text-base font-semibold">Legal</h3>
            <Link
              href="/privacy-policy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/disclaimer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Disclaimer
            </Link>
            <Link
              href="/html-sitemap"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Sitemap
            </Link>
            <a
              href="mailto:support@sproutern.com"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Support
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row">
              <p>
                &copy; {new Date().getFullYear()} Sproutern. All rights
                reserved.
              </p>
              <span className="hidden md:inline">•</span>
              <p>Made with ❤️ for students in India</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="mr-2 text-sm text-muted-foreground">
                Follow Us:
              </span>
              <Link
                href="https://www.instagram.com/sproutern?igsh=YzB5dm5zZWFjOGdl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/sproutern/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@sproutern"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
