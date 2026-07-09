import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Target,
  DollarSign,
  Code,
  Briefcase,
  Award,
  Globe,
  GraduationCap,
  Building2,
  Layers,
  Terminal,
  FileCode,
  Rocket,
  Users,
  Settings,
  Smartphone,
  Apple,
  Play,
  Laptop,
  Tablet,
  Package,
  Zap,
  Layout,
  TestTube,
  Store,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mobile App Development: Complete Career Guide',
  description:
    'Start your mobile app development career. Learn iOS, Android, React Native, Flutter, job opportunities, skills required, and salary expectations.',
  keywords: [
    'mobile app development',
    'ios developer',
    'android developer',
    'react native',
    'flutter developer',
    'mobile developer salary',
    'app development career',
    'swift developer',
    'kotlin developer',
    'cross platform development',
  ],
  openGraph: {
    title: 'Mobile App Development: Complete Career Guide',
    description:
      'Master mobile development and build apps for iOS and Android.',
    type: 'article',
    publishedTime: '2025-12-22T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-green-600">
            <Smartphone className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Mobile Development
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Mobile App Development: Complete Career Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Mobile apps power our daily lives. This comprehensive guide covers
            everything you need to become a successful mobile developer for iOS,
            Android, or cross-platform.
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
              <span>26 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#what"
                className="text-primary hover:underline"
              >
                1. Mobile Development Overview
              </a>
            </li>
            <li>
              <a
                href="#platforms"
                className="text-primary hover:underline"
              >
                2. iOS vs Android vs Cross-Platform
              </a>
            </li>
            <li>
              <a
                href="#ios"
                className="text-primary hover:underline"
              >
                3. iOS Development (Swift)
              </a>
            </li>
            <li>
              <a
                href="#android"
                className="text-primary hover:underline"
              >
                4. Android Development (Kotlin)
              </a>
            </li>
            <li>
              <a
                href="#crossplatform"
                className="text-primary hover:underline"
              >
                5. Cross-Platform Frameworks
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                6. Essential Skills
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                7. Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                8. Salary Expectations
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                9. Top Companies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary hover:underline"
              >
                10. Portfolio Projects
              </a>
            </li>
            <li>
              <a
                href="#publishing"
                className="text-primary hover:underline"
              >
                11. App Store Publishing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                12. FAQs
              </a>
            </li>
          </ol>
        </nav>

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
                6+ billion smartphone users globally drive mobile demand
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                React Native and Flutter dominate cross-platform development
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Native iOS (Swift) and Android (Kotlin) still command premium
                salaries
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Salaries range from ₹5-45 LPA in India to $80K-180K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Published apps on stores significantly boost your portfolio
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Overview */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Smartphone className="h-6 w-6 text-primary" />
            1. Mobile Development Overview
          </h2>

          <p>
            <strong>Mobile app development</strong> is the process of creating
            software applications that run on smartphones and tablets. With
            billions of users worldwide, mobile apps are essential for
            businesses and offer exciting career opportunities.
          </p>

          <h3>The Mobile Ecosystem</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-gray-500 py-2 pl-4">
              <p className="font-bold">iOS (Apple)</p>
              <p className="text-muted-foreground">
                iPhone, iPad. Premium market. Higher spending users. Swift
                language. Xcode IDE. ~27% global market share.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Android (Google)</p>
              <p className="text-muted-foreground">
                Samsung, Pixel, etc. Largest market share (~72%). Kotlin/Java.
                Android Studio. More diverse devices.
              </p>
            </div>
          </div>

          <h3>Why Mobile Development?</h3>
          <ul>
            <li>
              <strong>Huge Market:</strong> 6+ billion smartphone users
            </li>
            <li>
              <strong>High Demand:</strong> Every company needs an app
            </li>
            <li>
              <strong>Creative:</strong> Build something millions can use
            </li>
            <li>
              <strong>Well-Paid:</strong> Premium salaries for specialists
            </li>
            <li>
              <strong>Entrepreneurial:</strong> Launch your own app
            </li>
          </ul>
        </section>

        {/* Section 2: Platforms */}
        <section
          id="platforms"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            2. iOS vs Android vs Cross-Platform
          </h2>

          <h3>Development Approaches</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-gray-500">Native iOS</p>
              <p className="mt-1 text-muted-foreground">
                Best performance and UX. Access to all iOS features. Swift
                language. Requires Mac for development.
              </p>
              <p className="mt-2 text-xs text-primary">
                Best for: iOS-focused apps, premium experiences
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">Native Android</p>
              <p className="mt-1 text-muted-foreground">
                Best Android performance. Full platform access. Kotlin/Java.
                Android Studio works on any OS.
              </p>
              <p className="mt-2 text-xs text-primary">
                Best for: Android-focused apps, complex features
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Cross-Platform (React Native, Flutter)
              </p>
              <p className="mt-1 text-muted-foreground">
                One codebase, both platforms. Faster development. Slightly lower
                performance than native.
              </p>
              <p className="mt-2 text-xs text-primary">
                Best for: Startups, MVPs, web developer transition
              </p>
            </div>
          </div>

          <h3>Which Path to Choose?</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">Native iOS</th>
                  <th className="p-3 text-left">Native Android</th>
                  <th className="p-3 text-left">Cross-Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Performance</td>
                  <td className="p-3">⭐⭐⭐</td>
                  <td className="p-3">⭐⭐⭐</td>
                  <td className="p-3">⭐⭐</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Development Speed</td>
                  <td className="p-3">⭐⭐</td>
                  <td className="p-3">⭐⭐</td>
                  <td className="p-3">⭐⭐⭐</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Job Opportunities</td>
                  <td className="p-3">High</td>
                  <td className="p-3">Very High</td>
                  <td className="p-3">Growing Fast</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Learning Curve</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">Easier (if web background)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Recommendation:</strong> If you know JavaScript, start
              with React Native. If you're new, Flutter is beginner-friendly.
              For premium apps or platform-specific features, go native.
            </div>
          </div>
        </section>

        {/* Section 3: iOS */}
        <section
          id="ios"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Apple className="h-6 w-6 text-primary" />
            3. iOS Development (Swift)
          </h2>

          <p>
            iOS development creates apps for iPhone and iPad using Swift
            programming language and Apple's Xcode IDE.
          </p>

          <h3>iOS Development Stack</h3>
          <ul>
            <li>
              <strong>Language:</strong> Swift (modern), Objective-C (legacy)
            </li>
            <li>
              <strong>IDE:</strong> Xcode (requires Mac)
            </li>
            <li>
              <strong>UI Framework:</strong> SwiftUI (modern), UIKit (mature)
            </li>
            <li>
              <strong>Design:</strong> Human Interface Guidelines
            </li>
          </ul>

          <h3>Key iOS Concepts</h3>
          <ul>
            <li>
              <strong>SwiftUI:</strong> Declarative UI framework (2019+)
            </li>
            <li>
              <strong>UIKit:</strong> Imperative UI (older but common in jobs)
            </li>
            <li>
              <strong>Core Data:</strong> Persistent data storage
            </li>
            <li>
              <strong>Combine:</strong> Reactive programming
            </li>
            <li>
              <strong>App Store:</strong> Distribution and monetization
            </li>
          </ul>

          <h3>iOS Requirements</h3>
          <ul>
            <li>Mac computer (required for Xcode)</li>
            <li>iPhone/iPad for testing (simulator available)</li>
            <li>Apple Developer account ($99/year for App Store)</li>
          </ul>
        </section>

        {/* Section 4: Android */}
        <section
          id="android"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Play className="h-6 w-6 text-primary" />
            4. Android Development (Kotlin)
          </h2>

          <p>
            Android development creates apps for the largest mobile platform
            using Kotlin (preferred) or Java with Android Studio.
          </p>

          <h3>Android Development Stack</h3>
          <ul>
            <li>
              <strong>Language:</strong> Kotlin (modern, preferred), Java
              (legacy)
            </li>
            <li>
              <strong>IDE:</strong> Android Studio (any OS)
            </li>
            <li>
              <strong>UI:</strong> Jetpack Compose (modern), XML layouts
              (mature)
            </li>
            <li>
              <strong>Design:</strong> Material Design guidelines
            </li>
          </ul>

          <h3>Key Android Concepts</h3>
          <ul>
            <li>
              <strong>Jetpack Compose:</strong> Modern declarative UI
            </li>
            <li>
              <strong>Activities & Fragments:</strong> Screen management
            </li>
            <li>
              <strong>ViewModel:</strong> UI state management
            </li>
            <li>
              <strong>Room:</strong> Database persistence
            </li>
            <li>
              <strong>Retrofit:</strong> Networking library
            </li>
          </ul>

          <h3>Android Advantages</h3>
          <ul>
            <li>Works on Windows, Mac, or Linux</li>
            <li>Larger global user base</li>
            <li>More device variety for testing</li>
            <li>Lower barrier to publish ($25 one-time)</li>
          </ul>
        </section>

        {/* Section 5: Cross-Platform */}
        <section
          id="crossplatform"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            5. Cross-Platform Frameworks
          </h2>

          <h3>React Native (Most Popular)</h3>
          <div className="not-prose my-6 rounded-lg border p-4 text-sm">
            <p className="font-bold text-blue-500">React Native by Meta</p>
            <p className="mt-1 text-muted-foreground">
              JavaScript/TypeScript. Uses React patterns. Large ecosystem. Huge
              community. Web developers can transition easily.
            </p>
            <p className="mt-2 text-xs">
              <strong>Used by:</strong> Facebook, Instagram, Discord, Shopify
            </p>
          </div>

          <h3>Flutter (Fastest Growing)</h3>
          <div className="not-prose my-6 rounded-lg border p-4 text-sm">
            <p className="font-bold text-cyan-500">Flutter by Google</p>
            <p className="mt-1 text-muted-foreground">
              Dart language. Beautiful UI out of the box. Single codebase for
              mobile, web, and desktop. Fast development with hot reload.
            </p>
            <p className="mt-2 text-xs">
              <strong>Used by:</strong> Google Pay, BMW, Alibaba, eBay
            </p>
          </div>

          <h3>React Native vs Flutter Comparison</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">React Native</th>
                  <th className="p-3 text-left">Flutter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Language</td>
                  <td className="p-3">JavaScript/TypeScript</td>
                  <td className="p-3">Dart</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Learning Curve</td>
                  <td className="p-3">Easier if you know React</td>
                  <td className="p-3">Easier from scratch</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Performance</td>
                  <td className="p-3">Good</td>
                  <td className="p-3">Excellent</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">UI Consistency</td>
                  <td className="p-3">Uses native components</td>
                  <td className="p-3">Custom rendering</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Jobs </td>
                  <td className="p-3">More currently</td>
                  <td className="p-3">Growing rapidly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            6. Essential Skills
          </h2>

          <h3>Technical Skills</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Skill</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Programming Language</td>
                  <td className="p-3">Swift, Kotlin, Dart, or JavaScript</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">UI/UX Understanding</td>
                  <td className="p-3">Design principles, user experience</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">State Management</td>
                  <td className="p-3">Redux, Provider, Bloc patterns</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">API Integration</td>
                  <td className="p-3">REST APIs, GraphQL, networking</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Local Storage</td>
                  <td className="p-3">SQLite, Core Data, shared preferences</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Testing</td>
                  <td className="p-3">
                    Unit tests, UI tests, integration tests
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Platform Guidelines</h3>
          <ul>
            <li>
              <strong>iOS:</strong> Human Interface Guidelines (Apple)
            </li>
            <li>
              <strong>Android:</strong> Material Design (Google)
            </li>
            <li>
              Following guidelines improves user experience and app store
              approval
            </li>
          </ul>
        </section>

        {/* Section 7: Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            7. 12-Month Learning Roadmap
          </h2>

          <h3>Phase 1: Foundations (Months 1-3)</h3>
          <ul>
            <li>
              <strong>Month 1:</strong> Choose your path (iOS, Android, or
              cross-platform). Learn the primary language (Swift, Kotlin, Dart).
            </li>
            <li>
              <strong>Month 2:</strong> Set up development environment. Build
              first simple app (hello world to todo app).
            </li>
            <li>
              <strong>Month 3:</strong> Learn UI fundamentals. SwiftUI, Jetpack
              Compose, or Flutter widgets.
            </li>
          </ul>

          <h3>Phase 2: Core Skills (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> State management and navigation. Complex
              UI layouts.
            </li>
            <li>
              <strong>Month 5:</strong> API integration. Fetch data from
              internet. JSON parsing.
            </li>
            <li>
              <strong>Month 6:</strong> Local storage. Save data on device. User
              preferences.
            </li>
          </ul>

          <h3>Phase 3: Advanced (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Authentication (login, signup). Firebase
              or custom backend.
            </li>
            <li>
              <strong>Month 8:</strong> Push notifications, camera, location.
              Device features.
            </li>
            <li>
              <strong>Month 9:</strong> Testing and debugging. Performance
              optimization.
            </li>
          </ul>

          <h3>Phase 4: Job Ready (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Build complete app. Publish to store.
            </li>
            <li>
              <strong>Month 11:</strong> Build 2-3 portfolio apps. Create
              resume.
            </li>
            <li>
              <strong>Month 12:</strong> Apply for jobs. Interview preparation.
            </li>
          </ul>
        </section>

        {/* Section 8: Salary */}
        <section
          id="salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            8. Salary Expectations
          </h2>

          <h3>India Salary Ranges </h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Entry</th>
                  <th className="p-3 text-left">Mid</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">iOS Developer</td>
                  <td className="p-3">₹6-12 LPA</td>
                  <td className="p-3">₹15-28 LPA</td>
                  <td className="p-3">₹32-55 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Android Developer</td>
                  <td className="p-3">₹5-10 LPA</td>
                  <td className="p-3">₹12-24 LPA</td>
                  <td className="p-3">₹28-50 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">React Native Developer</td>
                  <td className="p-3">₹6-12 LPA</td>
                  <td className="p-3">₹14-26 LPA</td>
                  <td className="p-3">₹30-52 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Flutter Developer</td>
                  <td className="p-3">₹5-10 LPA</td>
                  <td className="p-3">₹12-22 LPA</td>
                  <td className="p-3">₹26-45 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>US Salary Ranges</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Entry</th>
                  <th className="p-3 text-left">Mid</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">iOS Developer</td>
                  <td className="p-3">$85K-115K</td>
                  <td className="p-3">$120K-160K</td>
                  <td className="p-3">$170K-220K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Android Developer</td>
                  <td className="p-3">$80K-110K</td>
                  <td className="p-3">$115K-150K</td>
                  <td className="p-3">$160K-210K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 9: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            9. Top Companies Hiring
          </h2>

          <h3>Big Tech</h3>
          <ul>
            <li>
              <strong>Apple:</strong> iOS platform team (ultimate iOS job)
            </li>
            <li>
              <strong>Google:</strong> Android platform, apps
            </li>
            <li>
              <strong>Meta:</strong> React Native, Facebook, Instagram
            </li>
            <li>
              <strong>Microsoft:</strong> Mobile Office apps
            </li>
          </ul>

          <h3>App-First Companies</h3>
          <ul>
            <li>
              <strong>Uber, Lyft:</strong> Ride-sharing core apps
            </li>
            <li>
              <strong>Spotify:</strong> Music streaming
            </li>
            <li>
              <strong>Airbnb:</strong> Travel booking
            </li>
            <li>
              <strong>DoorDash:</strong> Food delivery
            </li>
          </ul>

          <h3>Indian Mobile-First Companies</h3>
          <ul>
            <li>
              <strong>PhonePe, Paytm:</strong> Fintech payments
            </li>
            <li>
              <strong>Swiggy, Zomato:</strong> Food delivery
            </li>
            <li>
              <strong>Ola:</strong> Ride-sharing
            </li>
            <li>
              <strong>Dream11:</strong> Gaming
            </li>
            <li>
              <strong>Razorpay:</strong> Payments SDK
            </li>
          </ul>
        </section>

        {/* Section 10: Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            10. Portfolio Projects
          </h2>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Todo / Notes App</p>
              <p className="mt-1 text-muted-foreground">
                CRUD operations, local storage, basic UI. Classic first app.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. Weather App</p>
              <p className="mt-1 text-muted-foreground">
                API integration, location services, dynamic UI based on data.
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. E-commerce App</p>
              <p className="mt-1 text-muted-foreground">
                Product catalog, cart, checkout flow. Complex state management.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Social Media App</p>
              <p className="mt-1 text-muted-foreground">
                Authentication, posts, likes, comments. Backend integration.
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. Published App on Store</p>
              <p className="mt-1 text-muted-foreground">
                Take any idea to completion. Go through entire publishing
                process. Real users, real feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Publishing */}
        <section
          id="publishing"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Store className="h-6 w-6 text-primary" />
            11. App Store Publishing
          </h2>

          <h3>Apple App Store</h3>
          <ul>
            <li>
              <strong>Developer Account:</strong> $99/year
            </li>
            <li>
              <strong>Review Process:</strong> Stricter, 1-7 days
            </li>
            <li>
              <strong>Guidelines:</strong> Must follow Human Interface
              Guidelines
            </li>
            <li>
              <strong>Revenue:</strong> 15-30% commission
            </li>
          </ul>

          <h3>Google Play Store</h3>
          <ul>
            <li>
              <strong>Developer Account:</strong> $25 one-time
            </li>
            <li>
              <strong>Review Process:</strong> Faster, usually &lt;1 day
            </li>
            <li>
              <strong>Guidelines:</strong> Must follow Material Design
            </li>
            <li>
              <strong>Revenue:</strong> 15-30% commission
            </li>
          </ul>

          <h3>Publishing Tips</h3>
          <ul>
            <li>Write compelling app descriptions with keywords</li>
            <li>Create attractive screenshots and preview videos</li>
            <li>Test thoroughly before submitting</li>
            <li>Respond to user reviews</li>
          </ul>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            12. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I learn native or cross-platform first?
              </p>
              <p className="mt-2 text-muted-foreground">
                If you're a web developer, React Native. If new to programming,
                Flutter has an easier learning curve. For deep OS integration,
                go native.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do I need a Mac for mobile development?
              </p>
              <p className="mt-2 text-muted-foreground">
                For iOS, yes (Xcode requires Mac). For Android or Flutter/React
                Native (Android only), Windows or Linux works fine.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is Flutter replacing React Native?</p>
              <p className="mt-2 text-muted-foreground">
                Both are growing. Flutter is gaining momentum but React Native
                has larger existing ecosystem. Both have strong futures.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Can I make money from my own apps?</p>
              <p className="mt-2 text-muted-foreground">
                Yes, through in-app purchases, subscriptions, ads, or paid apps.
                However, most apps don't make significant money—treat indie apps
                as portfolio pieces unless you have a real business plan.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            Conclusion: Build Apps People Love
          </h2>

          <p>
            Mobile development offers the chance to create apps that live in
            people's pockets. Whether you choose iOS, Android, or
            cross-platform, the skills you build will be valuable for years to
            come.
          </p>

          <p>
            Pick your platform, build your first app, and iterate. The best
            mobile developers are the ones who ship apps and learn from users.
            Your app could be the next one that millions download.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more development career guides on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/web-development-fundamentals"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Web Development Guide →
              </Link>
              <Link
                href="/tools/career-roadmap"
                className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
              >
                Career Roadmap Tool →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="not-prose mt-12 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Written by Sproutern Career Team</p>
              <p className="text-sm text-muted-foreground">
                Helping students build mobile development careers
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/blog"
                className="rounded-lg bg-muted px-4 py-2 text-sm hover:bg-muted/80"
              >
                ← All Articles
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
