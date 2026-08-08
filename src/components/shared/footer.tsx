'use client';

import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { DisplayBanner } from '@/components/ads';
import { AffiliateStrip } from '@/components/monetization/AffiliateStrip';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
      {/* Footer Ad Banner */}
      <div className="container py-4">
        <div className="flex justify-center">
          <DisplayBanner
            placement="footer"
            className="max-w-3xl"
          />
        </div>
      </div>

      {/* Affiliate / Partner Strip (earns from day 1) */}
      <div className="container">
        <AffiliateStrip />
      </div>

      {/* Main Footer Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4 lg:col-span-1">
            <Link
              href="/"
              className="group mb-4 flex items-center space-x-3"
            >
              <Logo />
              <span className="text-gradient text-2xl font-black transition-transform duration-300 group-hover:scale-105">
                Sproutern
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Your complete education and career platform. Access real interview
              experiences, free tools, and comprehensive resources to succeed in
              your professional journey.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="text-gradient mb-3 text-lg font-bold">Company</h3>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
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
              href="/success-stories"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Success Stories
            </Link>
            <Link
              href="/services"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Hire Me / Services
            </Link>
            <Link
              href="/methodology"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Our Methodology
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/donate"
              className="flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
            >
              ❤️ Donate
            </Link>
          </div>

          {/* For Students Links */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="text-gradient mb-3 text-lg font-bold">
              For Students
            </h3>
            <Link
              href="/internships"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Find Internships
            </Link>
            <Link
              href="/scholarships"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Scholarships
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
              href="/resources"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Free Resources
            </Link>
            <Link
              href="/college"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              College Placements
            </Link>
            <Link
              href="/salaries"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Salary Guide
            </Link>
          </div>

          {/* Study Abroad Links */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="text-gradient mb-3 text-lg font-bold">
              🌍 Study Abroad
            </h3>
            <Link
              href="/countries"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Country Guides
            </Link>
            <Link
              href="/countries/germany"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              🇩🇪 Study in Germany
            </Link>
            <Link
              href="/countries/usa"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              🇺🇸 Study in USA
            </Link>
            <Link
              href="/countries/uk"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              🇬🇧 Study in UK
            </Link>
            <Link
              href="/countries/canada"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              🇨🇦 Study in Canada
            </Link>
            <Link
              href="/tools/gpa-converter"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              GPA Converter
            </Link>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col space-y-3 text-sm">
            <h3 className="text-gradient mb-3 text-lg font-bold">Resources</h3>
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
              href="/tools/cgpa-converter"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              CGPA Converter
            </Link>
            <Link
              href="/certifications"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              IT Certifications
            </Link>
            <Link
              href="/dsa"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              DSA Roadmap
            </Link>
            <Link
              href="/interview-questions"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Interview Questions
            </Link>
            <Link
              href="/faq"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Legal Section */}
      <div>
        <div className="container py-4">
          <div className="flex flex-col space-y-2">
            <h3 className="text-gradient text-lg font-bold">Legal</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
                href="/cookie-policy"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Cookie Policy
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
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <div className="container py-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row">
              <p>
                &copy; {new Date().getFullYear()} Sproutern. All rights
                reserved.
              </p>
              <span className="hidden md:inline">•</span>
              <p>Made with ❤️ for students worldwide</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="mr-2 text-sm font-semibold text-muted-foreground">
                Follow Us:
              </span>
              <Link
                href="https://www.instagram.com/sproutern?igsh=YzB5dm5zZWFjOGdl"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 dark:border-slate-700 dark:bg-slate-800"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/sproutern/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-secondary/10 dark:border-slate-700 dark:bg-slate-800"
                aria-label="Sproutern on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-secondary" />
              </Link>
              <Link
                href="https://github.com/itsPremkumar/sproutern-oss"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-foreground/10 dark:border-slate-700 dark:bg-slate-800"
                aria-label="Sproutern on GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
