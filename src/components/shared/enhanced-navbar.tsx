'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/shared/logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const tools = [
  { href: '/tools/cgpa-converter', label: 'CGPA Converter' },
  { href: '/tools/salary-calculator', label: 'Salary Calculator' },
  { href: '/tools/resume-score-checker', label: 'Resume Checker' },
  { href: '/tools/skills-gap-analyzer', label: 'Skills Gap Analyzer' },
  { href: '/tools/aptitude-test', label: 'Aptitude Test' },
  { href: '/tools/interview-questions', label: 'Interview Questions' },
  { href: '/tools/typing-test', label: 'Typing Test' },
  { href: '/tools/cover-letter-generator', label: 'Cover Letter' },
  { href: '/tools/career-roadmap', label: 'Career Roadmap' },
  { href: '/tools/emi-calculator', label: 'EMI Calculator' },
];

const blogCategories = [
  { href: '/blog/category/interview-prep', label: 'Interview Prep' },
  { href: '/blog/category/resume-writing', label: 'Resume Writing' },
  { href: '/blog/category/high-cpc', label: 'Career Advice' },
  { href: '/blog/category/student-lifestyle', label: 'Student Life' },
];

const resources = [
  { href: '/resources/resume-guide', label: 'Resume Guide' },
  { href: '/resources/resume-templates', label: 'Resume Templates' },
  { href: '/resources/interview-cheatsheet', label: 'Interview Cheatsheet' },
  { href: '/resources/linkedin-optimization', label: 'LinkedIn Guide' },
  { href: '/resources/salary-negotiation', label: 'Salary Negotiation' },
  { href: '/resources/github-profile', label: 'GitHub Profile' },
  { href: '/resources/ats-resume-keywords', label: 'ATS Keywords' },
  { href: '/resources/aptitude-formulas', label: 'Aptitude Formulas' },
  { href: '/resources/cover-letters', label: 'Cover Letters' },
];

export function EnhancedNavbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center space-x-2"
          >
            <Logo />
            <span className="text-xl font-bold">Sproutern</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/interview-experiences"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Interview Experiences
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {tools.map((tool) => (
                      <li key={tool.href}>
                        <Link
                          href={tool.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {tool.label}
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    {blogCategories.map((cat) => (
                      <li key={cat.href}>
                        <Link
                          href={cat.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {cat.label}
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    {resources.map((res) => (
                      <li key={res.href}>
                        <Link
                          href={res.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {res.label}
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/companies"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                    Companies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/skill-test"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                    Skill Tests
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Sheet
            open={open}
            onOpenChange={setOpen}
          >
            <SheetTrigger
              asChild
              className="lg:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px]"
            >
              <nav className="flex flex-col gap-4">
                <Link
                  href="/interview-experiences"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Interview Experiences
                </Link>
                <Link
                  href="/tools"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Tools
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/resources"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/companies"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Companies
                </Link>
                <Link
                  href="/skill-test"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Skill Tests
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
