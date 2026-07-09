'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import {
  Menu,
  LogOut,
  User as UserIcon,
  LayoutDashboard,
  Heart,
  ChevronDown,
  Search,
  Share2,
  X,
  Briefcase,
  Gamepad2,
  BookOpen,
  Wrench,
  Info,
  Building2,
  FolderOpen,
  Globe2,
  GraduationCap,
  School,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import type { User } from 'firebase/auth';

import { cn } from '@/lib/utils';
import { getInitials } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Logo } from '@/components/shared/logo';
import { ThemeToggle } from '@/components/shared/theme-toggle';
// Lazy load LanguageTranslator to prevent hydration mismatch
const LanguageTranslator = dynamic(
  () =>
    import('@/components/shared/language-translator').then((mod) => ({
      default: mod.LanguageTranslator,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="relative">
        <button
          className="flex items-center gap-2 rounded-lg border border-border bg-background/80 px-3 py-2 text-sm font-medium backdrop-blur-sm"
          aria-label="Select language"
        >
          <span className="text-base">🌐</span>
          <span className="hidden sm:inline">English</span>
        </button>
      </div>
    ),
  },
);

// Lazy load heavy components for better LCP
const AdvancedSearch = dynamic(
  () =>
    import('@/components/shared/advanced-search').then((mod) => ({
      default: mod.AdvancedSearch,
    })),
  {
    loading: () => (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
      >
        <Search className="h-4 w-4" />
      </Button>
    ),
    ssr: false,
  },
);

const GlobalShare = dynamic(
  () =>
    import('@/components/shared/global-share').then((mod) => ({
      default: mod.GlobalShare,
    })),
  {
    loading: () => (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
      >
        <Share2 className="h-4 w-4" />
      </Button>
    ),
    ssr: false,
  },
);

// Lazy load Firebase - only when needed
const getFirebaseModules = async () => {
  const [{ auth, db }, { onAuthStateChanged, signOut }, { doc, getDoc }] =
    await Promise.all([
      import('@/lib/firebase'),
      import('firebase/auth'),
      import('firebase/firestore'),
    ]);
  return { auth, db, onAuthStateChanged, signOut, doc, getDoc };
};

// Legacy/Reference Links (Save for future reference)
// const links = [
//   { href: '/interview-experiences', label: 'Interviews' },
//   // { href: "/internships", label: "Internships" },
//   // Show "Find interns" for both startup profiles and admin users
//   // ...((userType === 'startup' || isAdmin) ? [{ href: "/requests", label: "Find interns" }] : []),
//   // { href: "/skill-test", label: "Test" },
//   // { href: "/resume-optimizer", label: "Resume AI" },
//   // { href: "/donate", label: "Support us" },
//   // { href: "/testimonials", label: "Testimonials" },
//
//   // { href: '/faq', label: 'FAQ' },
//   // { href: "/off-campus-drives", label: "Off-Campus" },
//   { href: '/companies', label: 'Companies' },
//   { href: '/games', label: 'Games' },
//   { href: '/resources', label: 'Resources' },
//   { href: '/tools', label: 'Tools' },
//   // { href: '/countries', label: ' Countries' },
//   { href: '/scholarships', label: 'Scholarships' },
//   { href: '/blog', label: 'Blog' },
//   { href: '/school', label: ' School' },
//   { href: '/college', label: ' College' },
//   // { href: '/freshers', label: 'Freshers' },
// ];

const STATIC_NAV_LINKS = [
  { href: '/interview-experiences', label: 'Interviews', icon: Briefcase },
  { href: '/games', label: 'Games', icon: Gamepad2 },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/tools', label: 'Tools', icon: Wrench },
  { href: '/about', label: 'About', icon: Info },
  { href: '/services', label: 'Services', icon: Wrench },
  { href: '/companies', label: 'Companies', icon: Building2 },
  { href: '/resources', label: 'Resources', icon: FolderOpen },
  { href: '/countries', label: 'Countries', icon: Globe2 },
  { href: '/scholarships', label: 'Scholarships', icon: GraduationCap },
  { href: '/school', label: 'School', icon: School },
  { href: '/college', label: 'College', icon: GraduationCap },
  { href: '/freshers', label: 'Freshers', icon: Users },
  { href: '/global-career-guide', label: 'Global Careers', icon: MapPin },
  { href: '/interview-questions', label: 'Interview Prep', icon: Briefcase },
  { href: '/salaries', label: 'Salaries', icon: MapPin },
  { href: '/certifications', label: 'Certifications', icon: Sparkles },
  { href: '/dsa', label: 'DSA Roadmap', icon: Gamepad2 },
  { href: '/roadmaps', label: 'Roadmaps', icon: Sparkles },
];

// Categorized links for mobile menu
const MOBILE_MENU_CATEGORIES = [
  {
    title: 'Career',
    links: [
      { href: '/interview-experiences', label: 'Interviews', icon: Briefcase },
      { href: '/companies', label: 'Companies', icon: Building2 },
      { href: '/global-career-guide', label: 'Global Careers', icon: MapPin },
      { href: '/roadmaps', label: 'Roadmaps', icon: Sparkles },
    ],
  },
  {
    title: 'Education',
    links: [
      { href: '/school', label: 'School', icon: School },
      { href: '/college', label: 'College', icon: GraduationCap },
      { href: '/scholarships', label: 'Scholarships', icon: GraduationCap },
      { href: '/freshers', label: 'Freshers', icon: Users },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog', icon: BookOpen },
      { href: '/tools', label: 'Tools', icon: Wrench },
      { href: '/resources', label: 'Resources', icon: FolderOpen },
      { href: '/salaries', label: 'Avg Salaries', icon: MapPin },
      { href: '/certifications', label: 'Certifications', icon: Sparkles },
      { href: '/dsa', label: 'DSA Roadmap', icon: Gamepad2 },
      {
        href: '/interview-questions',
        label: 'Interview Prep',
        icon: Briefcase,
      },
      { href: '/games', label: 'Games', icon: Gamepad2 },
    ],
  },
  {
    title: 'Explore',
    links: [
      { href: '/countries', label: 'Countries', icon: Globe2 },
      { href: '/about', label: 'About', icon: Info },
      { href: '/services', label: 'Services', icon: Wrench },
    ],
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [user, setUser] = React.useState<User | null>(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [userType, setUserType] = React.useState<string | null>(null);

  React.useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    // Lazy load Firebase only when component mounts
    const initFirebase = async () => {
      try {
        const { auth, db, onAuthStateChanged, doc, getDoc } =
          await getFirebaseModules();

        if (!auth) {
          setLoading(false);
          return;
        }

        unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          setUser(currentUser);
          if (currentUser && db) {
            const userId = currentUser.uid;
            try {
              const userDocRef = doc(db, 'users', userId);
              const userDoc = await getDoc(userDocRef);
              if (userDoc.exists()) {
                setUserType(userDoc.data().userType);
                setIsAdmin(userDoc.data().userType === 'admin');
              }
            } catch (error) {
              setIsAdmin(false);
              console.error('Failed to fetch user role:', error);
            }
          } else {
            setIsAdmin(false);
            setUserType(null);
          }
          setLoading(false);
        });
      } catch (error) {
        console.error('Failed to load Firebase:', error);
        setLoading(false);
      }
    };

    initFirebase();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const navLinks = [...STATIC_NAV_LINKS];
  if (user) {
    navLinks.push({ href: '/profile', label: 'Profile', icon: UserIcon });
  }

  const visibleLinks = navLinks.slice(0, 5);
  const moreLinks = navLinks.slice(5);

  const handleSignOut = async () => {
    try {
      const { auth, signOut } = await getFirebaseModules();
      if (!auth) return;
      await signOut(auth);
      toast({
        title: 'Signed Out',
        description: 'You have been successfully signed out.',
      });
      router.push('/');
    } catch (error: any) {
      toast({
        title: 'Sign Out Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full"
          aria-label="User menu"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={user?.photoURL || ''}
              alt={user?.displayName || 'User'}
            />
            <AvatarFallback>{getInitials(user?.displayName)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.displayName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push('/profile')}>
          <UserIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        {isAdmin && (
          <DropdownMenuItem onClick={() => router.push('/admin')}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Admin</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="glass-strong sticky top-0 z-50 w-full border-b border-white/10 shadow-sm backdrop-blur-xl">
      <div className="container flex h-16 items-center px-3 sm:h-20 sm:px-4 md:px-6">
        <div className="hidden items-center gap-12 md:flex">
          <Link
            href="/"
            className="group flex items-center space-x-3"
          >
            <Logo />
            <span className="text-gradient text-2xl font-black transition-transform duration-300 group-hover:scale-105">
              Sproutern
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-semibold">
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative transition-all duration-300 hover:text-primary',
                  pathname === link.href
                    ? 'text-primary after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent'
                    : 'text-foreground/70 hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            ))}
            {moreLinks.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      'group flex items-center gap-1.5 rounded-full border border-primary/10 bg-gradient-to-r from-primary/10 to-accent/10 px-4 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:border-primary/20 hover:from-primary/20 hover:to-accent/20 hover:shadow-sm',
                      moreLinks.some((link) => link.href === pathname)
                        ? 'border-primary/20 bg-primary/15'
                        : '',
                    )}
                  >
                    More
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56"
                >
                  {moreLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.href}
                      asChild
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'w-full cursor-pointer',
                          pathname === link.href
                            ? 'font-medium text-primary'
                            : '',
                        )}
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between md:justify-end">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet
              open={open}
              onOpenChange={setOpen}
            >
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex w-[300px] flex-col overflow-hidden p-0 sm:w-[340px]"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* Header with Logo and Close */}
                <div className="flex items-center justify-between border-b bg-gradient-to-r from-primary/5 to-accent/5 p-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setOpen(false)}
                  >
                    <Logo />
                    <span className="text-lg font-bold">Sproutern</span>
                  </Link>
                </div>

                {/* User Profile Section (if logged in) */}
                {user && (
                  <div className="border-b bg-muted/30 p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage
                          src={user.photoURL || ''}
                          alt={user.displayName || 'User'}
                        />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {getInitials(user.displayName)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold">
                          {user.displayName || 'User'}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <SheetClose asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => router.push('/profile')}
                        >
                          <UserIcon className="mr-1.5 h-4 w-4" />
                          Profile
                        </Button>
                      </SheetClose>
                      {isAdmin && (
                        <SheetClose asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => router.push('/admin')}
                          >
                            <LayoutDashboard className="mr-1.5 h-4 w-4" />
                            Admin
                          </Button>
                        </SheetClose>
                      )}
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="border-b p-3">
                  <div className="grid grid-cols-4 gap-2">
                    <SheetClose asChild>
                      <Link
                        href="/donate"
                        className="flex flex-col items-center gap-1 rounded-lg bg-gradient-to-br from-pink-500/10 to-red-500/10 p-2 text-pink-500 transition-colors hover:from-pink-500/20 hover:to-red-500/20"
                      >
                        <Heart className="h-5 w-5 fill-current" />
                        <span className="text-[10px] font-medium">Donate</span>
                      </Link>
                    </SheetClose>
                    <div className="flex flex-col items-center gap-1 rounded-lg bg-muted/50 p-2 transition-colors hover:bg-muted">
                      <div className="[&>div>button]:h-5 [&>div>button]:w-5 [&>div>button]:p-0">
                        <ThemeToggle />
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        Theme
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-lg bg-muted/50 p-2 transition-colors hover:bg-muted">
                      <GlobalShare />
                      <span className="text-[10px] font-medium text-muted-foreground">
                        Share
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-lg bg-muted/50 p-2 transition-colors hover:bg-muted [&>div>button>span]:hidden [&>div>button]:w-full [&>div>button]:justify-center [&>div>button]:px-0 [&>div]:w-full">
                      <LanguageTranslator />
                      <span className="text-[10px] font-medium text-muted-foreground">
                        Lang
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scrollable Navigation */}
                <div className="flex-1 overflow-y-auto">
                  {MOBILE_MENU_CATEGORIES.map((category) => (
                    <div
                      key={category.title}
                      className="border-b last:border-b-0"
                    >
                      <p className="bg-muted/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {category.title}
                      </p>
                      <div className="p-2">
                        {category.links.map((link) => {
                          const Icon = link.icon;
                          return (
                            <SheetClose
                              asChild
                              key={link.href}
                            >
                              <Link
                                href={link.href}
                                className={cn(
                                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                                  pathname === link.href
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-foreground/70 hover:bg-accent hover:text-foreground',
                                )}
                              >
                                <Icon className="h-4 w-4" />
                                <span>{link.label}</span>
                                {pathname === link.href && (
                                  <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
                                )}
                              </Link>
                            </SheetClose>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto border-t bg-muted/20 p-4">
                  {user ? (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        handleSignOut();
                        setOpen(false);
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  ) : (
                    <p className="text-center text-xs text-muted-foreground">
                      © 2026 Sproutern
                    </p>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 md:hidden"
          >
            <Logo />
            <span className="text-lg font-bold">Sproutern</span>
          </Link>

          {/* Mobile Right Actions - Simplified */}
          <div className="flex items-center gap-1 md:hidden">
            <AdvancedSearch />
            <ThemeToggle />
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <AdvancedSearch />
            <GlobalShare />
            <Link
              href="/donate"
              aria-label="Donate"
              className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Heart className="h-4 w-4 fill-current" />
              <span>Donate</span>
            </Link>
            <ThemeToggle />
            <LanguageTranslator />
          </div>

          {/* Desktop User Menu */}
          <nav className="hidden items-center gap-2 md:flex">
            {loading ? (
              <Skeleton className="h-10 w-24 rounded-md" />
            ) : user ? (
              <UserMenu />
            ) : null}
            {/* Sign In and Sign Up buttons hidden */}
            {/* {!user && (
              <>
                <Button
                  variant="ghost"
                  asChild
                  className="hover:bg-primary/5"
                >
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary shadow-md transition-opacity hover:opacity-90"
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )} */}
          </nav>
        </div>
      </div>
    </header>
  );
}

// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { Menu, LogOut, User as UserIcon, LayoutDashboard, Search } from "lucide-react";
// import { onAuthStateChanged, signOut, type User } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { cn, getInitials } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
// import { auth, db } from "@/lib/firebase";
// import { useToast } from "@/hooks/use-toast";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Separator } from "@/components/ui/separator";
// import { Logo } from "@/components/shared/logo";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

// const tools = [
//   { href: "/tools/cgpa-converter", label: "CGPA Converter" },
//   { href: "/tools/salary-calculator", label: "Salary Calculator" },
//   { href: "/tools/resume-score-checker", label: "Resume Checker" },
//   { href: "/tools/aptitude-test", label: "Aptitude Test" },
//   { href: "/tools/interview-questions", label: "Interview Questions" },
//   { href: "/tools/typing-test", label: "Typing Test" },
//   { href: "/tools/cover-letter-generator", label: "Cover Letter" },
//   { href: "/tools/career-roadmap", label: "Career Roadmap" },
//   { href: "/tools/emi-calculator", label: "EMI Calculator" },
// ];

// const blogCategories = [
//   { href: "/blog/category/interview-prep", label: "Interview Prep" },
//   { href: "/blog/category/resume-writing", label: "Resume Writing" },
//   { href: "/blog/category/high-cpc", label: "Career Advice" },
//   { href: "/blog/category/student-lifestyle", label: "Student Life" },
// ];

// const resources = [
//   { href: "/resources/resume-guide", label: "Resume Guide" },
//   { href: "/resources/resume-templates", label: "Resume Templates" },
//   { href: "/resources/interview-cheatsheet", label: "Interview Cheatsheet" },
//   { href: "/resources/aptitude-formulas", label: "Aptitude Formulas" },
//   { href: "/resources/cover-letters", label: "Cover Letters" },
// ];

// const moreLinks = [
//   { href: "/skill-test", label: "Test" },
//   { href: "/resume-optimizer", label: "Resume AI" },
//   { href: "/donate", label: "Support us" },
//   { href: "/testimonials", label: "Testimonials" },
//   { href: "/about", label: "About" },
//   { href: "/faq", label: "FAQ" },
// ];

// export function Navbar() {
//   const [open, setOpen] = React.useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const { toast } = useToast();
//   const [user, setUser] = React.useState<User | null>(null);
//   const [isAdmin, setIsAdmin] = React.useState(false);
//   const [loading, setLoading] = React.useState(true);
//   const [userType, setUserType] = React.useState<string | null>(null);

//   React.useEffect(() => {
//     if (!auth) {
//       setLoading(false);
//       return;
//     }
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);
//       if (currentUser && db) {
//         try {
//           const userDocRef = doc(db, "users", currentUser.uid);
//           const userDoc = await getDoc(userDocRef);
//           if (userDoc.exists()) {
//             setUserType(userDoc.data().userType);
//             setIsAdmin(userDoc.data().userType === 'admin');
//           }
//         } catch (error) {
//           setIsAdmin(false);
//           console.error("Failed to fetch user role:", error);
//         }
//       } else {
//         setIsAdmin(false);
//         setUserType(null);
//       }
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleSignOut = async () => {
//     if (!auth) return;
//     try {
//       await signOut(auth);
//       toast({ title: "Signed Out", description: "You have been successfully signed out." });
//       router.push("/");
//     } catch (error: any) {
//       toast({ title: "Sign Out Error", description: error.message, variant: "destructive" });
//     }
//   };

//   const UserMenu = () => (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//           <Avatar className="h-9 w-9">
//             <AvatarImage src={user?.photoURL || ''} alt={user?.displayName || 'User'} />
//             <AvatarFallback>{getInitials(user?.displayName)}</AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56" align="end" forceMount>
//         <DropdownMenuLabel className="font-normal">
//           <div className="flex flex-col space-y-1">
//             <p className="text-sm font-medium leading-none">{user?.displayName}</p>
//             <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
//           </div>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem onClick={() => router.push('/profile')}>
//           <UserIcon className="mr-2 h-4 w-4" />
//           <span>Profile</span>
//         </DropdownMenuItem>
//         {isAdmin && (
//           <DropdownMenuItem onClick={() => router.push('/admin')}>
//             <LayoutDashboard className="mr-2 h-4 w-4" />
//             <span>Admin</span>
//           </DropdownMenuItem>
//         )}
//         <DropdownMenuItem onClick={handleSignOut}>
//           <LogOut className="mr-2 h-4 w-4" />
//           <span>Log out</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );

//   return (
//     <header className="w-full border-b bg-background sticky top-0 z-50">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-6">
//           <Link href="/" className="flex items-center space-x-2">
//             <Logo />
//             <span className="font-bold text-xl">Sproutern</span>
//           </Link>

//           <NavigationMenu className="hidden lg:flex">
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild>
//                   <Link href="/internships" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
//                     Internships
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>

//               {(userType === 'startup' || isAdmin) && (
//                 <NavigationMenuItem>
//                   <NavigationMenuLink asChild>
//                     <Link href="/requests" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
//                       Find Interns
//                     </Link>
//                   </NavigationMenuLink>
//                 </NavigationMenuItem>
//               )}

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
//                     {tools.map((tool) => (
//                       <li key={tool.href}>
//                         <NavigationMenuLink asChild>
//                           <Link href={tool.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
//                             <div className="text-sm font-medium leading-none">{tool.label}</div>
//                           </Link>
//                         </NavigationMenuLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[300px] gap-3 p-4">
//                     {blogCategories.map((cat) => (
//                       <li key={cat.href}>
//                         <NavigationMenuLink asChild>
//                           <Link href={cat.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
//                             <div className="text-sm font-medium leading-none">{cat.label}</div>
//                           </Link>
//                         </NavigationMenuLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[300px] gap-3 p-4">
//                     {resources.map((res) => (
//                       <li key={res.href}>
//                         <NavigationMenuLink asChild>
//                           <Link href={res.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
//                             <div className="text-sm font-medium leading-none">{res.label}</div>
//                           </Link>
//                         </NavigationMenuLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>More</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[300px] gap-3 p-4">
//                     {moreLinks.map((link) => (
//                       <li key={link.href}>
//                         <NavigationMenuLink asChild>
//                           <Link href={link.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
//                             <div className="text-sm font-medium leading-none">{link.label}</div>
//                           </Link>
//                         </NavigationMenuLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild>
//                   <Link href="/companies" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
//                     Companies
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild>
//                   <Link href="/off-campus-drives" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
//                     Off-Campus
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon" className="hidden md:flex" aria-label="Search">
//             <Search className="h-5 w-5" />
//           </Button>

//           {loading ? (
//             <Skeleton className="h-10 w-24 rounded-md hidden md:flex" />
//           ) : user ? (
//             <div className="hidden md:flex"><UserMenu /></div>
//           ) : (
//             <div className="hidden md:flex items-center gap-2">
//               <Button variant="ghost" asChild>
//                 <Link href="/signin">Sign In</Link>
//               </Button>
//               <Button asChild>
//                 <Link href="/signup">Sign Up</Link>
//               </Button>
//             </div>
//           )}

//           <Sheet open={open} onOpenChange={setOpen}>
//             <SheetTrigger asChild className="lg:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="w-[300px]">
//               <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setOpen(false)}>
//                 <Logo />
//                 <span className="font-bold text-xl">Sproutern</span>
//               </Link>
//               <nav className="flex flex-col gap-4">
//                 <Link href="/internships" className="text-lg font-medium" onClick={() => setOpen(false)}>Internships</Link>
//                 {(userType === 'startup' || isAdmin) && (
//                   <Link href="/requests" className="text-lg font-medium" onClick={() => setOpen(false)}>Find Interns</Link>
//                 )}
//                 <Link href="/skill-test" className="text-lg font-medium" onClick={() => setOpen(false)}>Test</Link>
//                 <Link href="/resume-optimizer" className="text-lg font-medium" onClick={() => setOpen(false)}>Resume AI</Link>
//                 <Link href="/donate" className="text-lg font-medium" onClick={() => setOpen(false)}>Support us</Link>
//                 <Link href="/testimonials" className="text-lg font-medium" onClick={() => setOpen(false)}>Testimonials</Link>
//                 <Link href="/about" className="text-lg font-medium" onClick={() => setOpen(false)}>About</Link>
//                 <Link href="/faq" className="text-lg font-medium" onClick={() => setOpen(false)}>FAQ</Link>
//                 <Link href="/blog" className="text-lg font-medium" onClick={() => setOpen(false)}>Blog</Link>
//                 <Link href="/tools" className="text-lg font-medium" onClick={() => setOpen(false)}>Tools</Link>
//                 <Link href="/resources" className="text-lg font-medium" onClick={() => setOpen(false)}>Resources</Link>
//                 <Link href="/companies" className="text-lg font-medium" onClick={() => setOpen(false)}>Companies</Link>
//                 <Link href="/off-campus-drives" className="text-lg font-medium" onClick={() => setOpen(false)}>Off-Campus Drives</Link>
//                 {user && <Link href="/profile" className="text-lg font-medium" onClick={() => setOpen(false)}>Profile</Link>}
//                 <Separator className="my-2" />
//                 {user ? (
//                   <Button onClick={() => { handleSignOut(); setOpen(false); }}>
//                     <LogOut className="mr-2 h-4 w-4" /> Sign Out
//                   </Button>
//                 ) : (
//                   <div className="flex flex-col space-y-2">
//                     <SheetClose asChild>
//                       <Button asChild><Link href="/signin">Sign In</Link></Button>
//                     </SheetClose>
//                     <SheetClose asChild>
//                       <Button variant="outline" asChild><Link href="/signup">Sign Up</Link></Button>
//                     </SheetClose>
//                   </div>
//                 )}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }
