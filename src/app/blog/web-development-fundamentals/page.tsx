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
  Layout,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Database,
  GitBranch,
  Zap,
  Package,
  Paintbrush,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Development Fundamentals: Complete Beginners Guide',
  description:
    'Learn web development from scratch. Master HTML, CSS, JavaScript, responsive design, and build your first websites with this comprehensive beginners guide.',
  keywords: [
    'web development',
    'learn web development',
    'html css javascript',
    'frontend development',
    'web developer salary',
    'web development roadmap',
    'beginner web development',
    'full stack web development',
    'web development tutorial',
    'become web developer',
  ],
  openGraph: {
    title: 'Web Development Fundamentals: Complete Beginners Guide',
    description:
      'Master web development from HTML basics to your first portfolio.',
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
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <Code className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Web Development
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Web Development Fundamentals: Complete Beginners Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Web development is one of the most accessible and in-demand tech
            skills. This comprehensive guide will take you from complete
            beginner to building your first websites.
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
              <span>28 min read</span>
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
                1. What is Web Development?
              </a>
            </li>
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                2. Frontend vs Backend vs Full Stack
              </a>
            </li>
            <li>
              <a
                href="#html"
                className="text-primary hover:underline"
              >
                3. HTML Fundamentals
              </a>
            </li>
            <li>
              <a
                href="#css"
                className="text-primary hover:underline"
              >
                4. CSS Essentials
              </a>
            </li>
            <li>
              <a
                href="#javascript"
                className="text-primary hover:underline"
              >
                5. JavaScript Basics
              </a>
            </li>
            <li>
              <a
                href="#responsive"
                className="text-primary hover:underline"
              >
                6. Responsive Design
              </a>
            </li>
            <li>
              <a
                href="#frameworks"
                className="text-primary hover:underline"
              >
                7. Frameworks & Libraries
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                8. Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                9. Salary Expectations
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
                href="#resources"
                className="text-primary hover:underline"
              >
                11. Learning Resources
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
        <div className="not-prose mb-10 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-600" />
              <span>
                HTML, CSS, and JavaScript are the three pillars of web
                development
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-600" />
              <span>
                You can learn the basics and build websites in 3-6 months
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-600" />
              <span>
                React is the most popular JavaScript framework for jobs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-600" />
              <span>
                Salaries range from ₹4-40 LPA in India to $60K-150K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-600" />
              <span>
                A portfolio of projects is essential for landing your first job
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Web Development */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            1. What is Web Development?
          </h2>

          <p>
            <strong>Web development</strong> is the process of building and
            maintaining websites and web applications. It encompasses everything
            from creating simple static pages to complex web apps like Facebook
            or Google.
          </p>

          <h3>How the Web Works (Simplified)</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">1. You Type a URL</p>
              <p className="text-muted-foreground">
                Your browser sends a request to a server asking for a webpage.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">2. Server Responds</p>
              <p className="text-muted-foreground">
                The server sends back HTML, CSS, and JavaScript files.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">3. Browser Renders</p>
              <p className="text-muted-foreground">
                Your browser interprets the code and displays the webpage.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">4. Interactive</p>
              <p className="text-muted-foreground">
                JavaScript enables clicks, forms, and dynamic content.
              </p>
            </div>
          </div>

          <h3>Why Learn Web Development?</h3>
          <ul>
            <li>
              <strong>High Demand:</strong> Every business needs a web presence
            </li>
            <li>
              <strong>Accessible:</strong> Free resources, no degree required
            </li>
            <li>
              <strong>Creative:</strong> Build things people actually use
            </li>
            <li>
              <strong>Remote-Friendly:</strong> Work from anywhere
            </li>
            <li>
              <strong>Well-Paid:</strong> Competitive salaries globally
            </li>
          </ul>
        </section>

        {/* Section 2: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            2. Frontend vs Backend vs Full Stack
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Layout className="h-5 w-5 text-blue-500" />
                <p className="font-bold text-blue-500">Frontend Development</p>
              </div>
              <p className="text-muted-foreground">
                What users see and interact with. Building the visual interface
                and user experience. The "client-side."
              </p>
              <p className="mt-2 text-xs text-primary">
                Technologies: HTML, CSS, JavaScript, React, Vue
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Server className="h-5 w-5 text-green-500" />
                <p className="font-bold text-green-500">Backend Development</p>
              </div>
              <p className="text-muted-foreground">
                Server-side logic, databases, APIs. The "behind the scenes" that
                powers the application.
              </p>
              <p className="mt-2 text-xs text-primary">
                Technologies: Node.js, Python, Java, databases
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Layers className="h-5 w-5 text-purple-500" />
                <p className="font-bold text-purple-500">
                  Full Stack Development
                </p>
              </div>
              <p className="text-muted-foreground">
                Both frontend and backend. Can build complete applications
                independently. Most versatile role.
              </p>
              <p className="mt-2 text-xs text-primary">
                Technologies: All of the above
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Recommendation:</strong> Start with frontend. It's more
              visual and immediately rewarding. Add backend later to become full
              stack.
            </div>
          </div>
        </section>

        {/* Section 3: HTML */}
        <section
          id="html"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            3. HTML Fundamentals
          </h2>

          <p>
            <strong>HTML (HyperText Markup Language)</strong> is the structure
            of web pages. It defines the content—headings, paragraphs, images,
            links, and more.
          </p>

          <h3>Core HTML Concepts</h3>
          <ul>
            <li>
              <strong>Elements:</strong> &lt;p&gt;, &lt;h1&gt;, &lt;div&gt;,
              &lt;img&gt;
            </li>
            <li>
              <strong>Attributes:</strong> id, class, src, href, alt
            </li>
            <li>
              <strong>Semantic HTML:</strong> &lt;header&gt;, &lt;nav&gt;,
              &lt;main&gt;, &lt;footer&gt;
            </li>
            <li>
              <strong>Forms:</strong> &lt;input&gt;, &lt;button&gt;,
              &lt;select&gt;
            </li>
          </ul>

          <h3>Essential HTML Elements</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Element</th>
                  <th className="p-3 text-left">Purpose</th>
                  <th className="p-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono">&lt;h1&gt;-&lt;h6&gt;</td>
                  <td className="p-3">Headings (h1 most important)</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">&lt;p&gt;</td>
                  <td className="p-3">Paragraphs of text</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">&lt;a&gt;</td>
                  <td className="p-3">Links to other pages</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">&lt;img&gt;</td>
                  <td className="p-3">Display images</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">&lt;div&gt;</td>
                  <td className="p-3">Generic container</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">&lt;ul&gt;, &lt;ol&gt;</td>
                  <td className="p-3">Unordered/ordered lists</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">&lt;form&gt;</td>
                  <td className="p-3">User input forms</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Semantic HTML (Accessibility & SEO)</h3>
          <p>
            Use semantic elements instead of generic divs. They help screen
            readers and search engines understand your content.
          </p>
          <ul>
            <li>
              <code>&lt;header&gt;</code> - Page or section header
            </li>
            <li>
              <code>&lt;nav&gt;</code> - Navigation links
            </li>
            <li>
              <code>&lt;main&gt;</code> - Main content area
            </li>
            <li>
              <code>&lt;article&gt;</code> - Self-contained content
            </li>
            <li>
              <code>&lt;section&gt;</code> - Thematic grouping
            </li>
            <li>
              <code>&lt;footer&gt;</code> - Page or section footer
            </li>
          </ul>
        </section>

        {/* Section 4: CSS */}
        <section
          id="css"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Palette className="h-6 w-6 text-primary" />
            4. CSS Essentials
          </h2>

          <p>
            <strong>CSS (Cascading Style Sheets)</strong> controls the visual
            presentation—colors, fonts, layouts, spacing, and animations.
          </p>

          <h3>Core CSS Concepts</h3>
          <ul>
            <li>
              <strong>Selectors:</strong> Target elements (class, id, element)
            </li>
            <li>
              <strong>Properties:</strong> What to change (color, font-size)
            </li>
            <li>
              <strong>Values:</strong> How to change it (red, 16px)
            </li>
            <li>
              <strong>Box Model:</strong> Margin, border, padding, content
            </li>
            <li>
              <strong>Flexbox:</strong> One-dimensional layouts
            </li>
            <li>
              <strong>Grid:</strong> Two-dimensional layouts
            </li>
          </ul>

          <h3>Essential CSS Properties</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Property</th>
                  <th className="p-3 text-left">Purpose</th>
                  <th className="p-3 text-left">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono">color</td>
                  <td className="p-3">Text color</td>
                  <td className="p-3">Typography</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">font-size</td>
                  <td className="p-3">Text size</td>
                  <td className="p-3">Typography</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">margin / padding</td>
                  <td className="p-3">Spacing</td>
                  <td className="p-3">Box Model</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">display: flex</td>
                  <td className="p-3">Flexible layouts</td>
                  <td className="p-3">Layout</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">display: grid</td>
                  <td className="p-3">Grid layouts</td>
                  <td className="p-3">Layout</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">position</td>
                  <td className="p-3">Element positioning</td>
                  <td className="p-3">Layout</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Modern CSS Layout: Flexbox & Grid</h3>
          <p>
            Master Flexbox and Grid—they're the most important CSS skills for
            modern layouts. Flexbox for rows/columns, Grid for complex layouts.
          </p>
        </section>

        {/* Section 5: JavaScript */}
        <section
          id="javascript"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            5. JavaScript Basics
          </h2>

          <p>
            <strong>JavaScript</strong> adds interactivity and dynamic behavior
            to websites. It's the programming language of the web.
          </p>

          <h3>Core JavaScript Concepts</h3>
          <ul>
            <li>
              <strong>Variables:</strong> let, const (avoid var)
            </li>
            <li>
              <strong>Data Types:</strong> string, number, boolean, array,
              object
            </li>
            <li>
              <strong>Functions:</strong> Reusable blocks of code
            </li>
            <li>
              <strong>DOM Manipulation:</strong> Interact with HTML elements
            </li>
            <li>
              <strong>Events:</strong> Respond to clicks, inputs, etc.
            </li>
            <li>
              <strong>Async JavaScript:</strong> Fetch data, promises,
              async/await
            </li>
          </ul>

          <h3>JavaScript Learning Path</h3>
          <ol>
            <li>Variables, data types, operators</li>
            <li>Control flow (if/else, loops)</li>
            <li>Functions and scope</li>
            <li>Arrays and objects</li>
            <li>DOM manipulation and events</li>
            <li>Fetch API and async programming</li>
            <li>ES6+ features (arrow functions, destructuring)</li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Practice Tip:</strong> Build small interactive projects as
              you learn—a calculator, todo list, or quiz app. Learning by doing
              is essential for JavaScript.
            </div>
          </div>
        </section>

        {/* Section 6: Responsive Design */}
        <section
          id="responsive"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Smartphone className="h-6 w-6 text-primary" />
            6. Responsive Design
          </h2>

          <p>
            <strong>Responsive design</strong> ensures websites work on all
            screen sizes—phones, tablets, and desktops. It's a must-have skill.
          </p>

          <h3>Key Techniques</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">Media Queries</p>
              <p className="mt-1 text-muted-foreground">
                Apply different CSS rules based on screen size. @media
                (max-width: 768px) {}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">Flexible Units</p>
              <p className="mt-1 text-muted-foreground">
                Use %, rem, em, vw instead of fixed pixels. Elements scale with
                the screen.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Mobile-First Approach</p>
              <p className="mt-1 text-muted-foreground">
                Design for mobile first, then add styles for larger screens.
                Modern best practice.
              </p>
            </div>
          </div>

          <h3>Breakpoints to Know</h3>
          <ul>
            <li>
              <strong>Mobile:</strong> &lt; 768px
            </li>
            <li>
              <strong>Tablet:</strong> 768px - 1024px
            </li>
            <li>
              <strong>Desktop:</strong> 1024px+
            </li>
            <li>
              <strong>Large Desktop:</strong> 1280px+
            </li>
          </ul>
        </section>

        {/* Section 7: Frameworks */}
        <section
          id="frameworks"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Package className="h-6 w-6 text-primary" />
            7. Frameworks & Libraries
          </h2>

          <h3>CSS Frameworks</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-500">
                Tailwind CSS (Most Popular)
              </p>
              <p className="mt-1 text-muted-foreground">
                Utility-first CSS. Fast development, consistent design. Modern
                standard for many projects.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Bootstrap</p>
              <p className="mt-1 text-muted-foreground">
                Component-based framework. Quick prototyping. Still widely used
                but less popular with new projects.
              </p>
            </div>
          </div>

          <h3>JavaScript Frameworks</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">React (Most Jobs)</p>
              <p className="mt-1 text-muted-foreground">
                Most popular frontend framework. Component-based. Huge
                ecosystem. Learn this for most job opportunities.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">Vue.js</p>
              <p className="mt-1 text-muted-foreground">
                Progressive framework. Easier learning curve than React. Popular
                in Asia and many startups.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-500">Angular</p>
              <p className="mt-1 text-muted-foreground">
                Full framework by Google. Enterprise-focused. Steeper learning
                curve but powerful.
              </p>
            </div>
          </div>

          <h3>Full-Stack Frameworks</h3>
          <ul>
            <li>
              <strong>Next.js:</strong> React framework for production (most
              popular)
            </li>
            <li>
              <strong>Nuxt.js:</strong> Vue framework for production
            </li>
            <li>
              <strong>Remix:</strong> Modern React framework
            </li>
          </ul>
        </section>

        {/* Section 8: Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            8. 12-Month Learning Roadmap
          </h2>

          <h3>Phase 1: Foundations (Months 1-3)</h3>
          <ul>
            <li>
              <strong>Month 1:</strong> HTML fundamentals—structure, elements,
              semantic HTML, forms.
            </li>
            <li>
              <strong>Month 2:</strong> CSS essentials—styling, box model,
              Flexbox, Grid, responsive design.
            </li>
            <li>
              <strong>Month 3:</strong> JavaScript basics—variables, functions,
              DOM manipulation, events.
            </li>
          </ul>

          <h3>Phase 2: Intermediate (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Advanced JavaScript—async/await, APIs,
              ES6+ features.
            </li>
            <li>
              <strong>Month 5:</strong> Git and GitHub. Version control
              workflow. Deploy first projects.
            </li>
            <li>
              <strong>Month 6:</strong> React fundamentals—components, props,
              state, hooks.
            </li>
          </ul>

          <h3>Phase 3: Frameworks (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Advanced React—routing, forms, state
              management.
            </li>
            <li>
              <strong>Month 8:</strong> Next.js or backend basics (Node.js).
              Full stack concepts.
            </li>
            <li>
              <strong>Month 9:</strong> Database basics—SQL or MongoDB. Connect
              frontend to backend.
            </li>
          </ul>

          <h3>Phase 4: Job Ready (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Build 3-4 portfolio projects. Different
              types (landing page, app, full stack).
            </li>
            <li>
              <strong>Month 11:</strong> Polish portfolio. Create resume. Start
              applying.
            </li>
            <li>
              <strong>Month 12:</strong> Interview prep—coding challenges,
              explain your projects.
            </li>
          </ul>
        </section>

        {/* Section 9: Salary */}
        <section
          id="salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            9. Salary Expectations
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
                  <td className="p-3">Frontend Developer</td>
                  <td className="p-3">₹4-8 LPA</td>
                  <td className="p-3">₹10-20 LPA</td>
                  <td className="p-3">₹22-45 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Backend Developer</td>
                  <td className="p-3">₹5-10 LPA</td>
                  <td className="p-3">₹12-25 LPA</td>
                  <td className="p-3">₹28-55 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Full Stack Developer</td>
                  <td className="p-3">₹6-12 LPA</td>
                  <td className="p-3">₹15-30 LPA</td>
                  <td className="p-3">₹35-70 LPA</td>
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
                  <td className="p-3">Frontend Developer</td>
                  <td className="p-3">$60K-85K</td>
                  <td className="p-3">$90K-130K</td>
                  <td className="p-3">$140K-180K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Full Stack Developer</td>
                  <td className="p-3">$70K-100K</td>
                  <td className="p-3">$110K-150K</td>
                  <td className="p-3">$160K-220K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 10: Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            10. Portfolio Projects to Build
          </h2>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Personal Portfolio Website</p>
              <p className="mt-1 text-muted-foreground">
                Showcase yourself. About, projects, contact. Must-have for job
                applications.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. Landing Page Clone</p>
              <p className="mt-1 text-muted-foreground">
                Recreate a real company's landing page. Practice layout,
                responsiveness, and attention to detail.
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. Todo App (React)</p>
              <p className="mt-1 text-muted-foreground">
                CRUD operations, local storage, filtering. Classic first React
                project.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Weather App</p>
              <p className="mt-1 text-muted-foreground">
                Fetch data from API, display weather info. Practice async
                JavaScript.
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. E-commerce Store</p>
              <p className="mt-1 text-muted-foreground">
                Product listings, cart, checkout. Full stack with user auth and
                payment integration.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">6. Social Media Clone</p>
              <p className="mt-1 text-muted-foreground">
                Posts, likes, follows, real-time updates. Complex state
                management and database design.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            11. Learning Resources
          </h2>

          <h3>Free Courses</h3>
          <ul>
            <li>
              <strong>freeCodeCamp:</strong> Complete curriculum, certifications
            </li>
            <li>
              <strong>The Odin Project:</strong> Full stack path, project-based
            </li>
            <li>
              <strong>MDN Web Docs:</strong> Best reference documentation
            </li>
            <li>
              <strong>JavaScript.info:</strong> Deep JavaScript tutorial
            </li>
          </ul>

          <h3>Paid Courses</h3>
          <ul>
            <li>
              <strong>Udemy - Colt Steele:</strong> Web Developer Bootcamp
            </li>
            <li>
              <strong>Scrimba:</strong> Interactive coding tutorials
            </li>
            <li>
              <strong>Frontend Masters:</strong> Expert-led courses
            </li>
          </ul>

          <h3>Practice Platforms</h3>
          <ul>
            <li>
              <strong>Frontend Mentor:</strong> Real-world design challenges
            </li>
            <li>
              <strong>CSS Battles:</strong> CSS puzzles
            </li>
            <li>
              <strong>Codewars:</strong> JavaScript challenges
            </li>
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
                How long does it take to become a web developer?
              </p>
              <p className="mt-2 text-muted-foreground">
                3-6 months for basics and first projects. 12-18 months for
                job-ready skills with dedicated practice.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do I need a degree to become a web developer?
              </p>
              <p className="mt-2 text-muted-foreground">
                No. Skills and portfolio matter more. Many successful developers
                are self-taught or bootcamp graduates.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I learn React or Vue?</p>
              <p className="mt-2 text-muted-foreground">
                React has more jobs globally. Vue is easier to learn and popular
                in certain regions. Can't go wrong with either.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is web development saturated?</p>
              <p className="mt-2 text-muted-foreground">
                Entry-level is competitive, but demand remains strong.
                Differentiate with projects, specialized skills, or niche focus.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            Conclusion: Start Building
          </h2>

          <p>
            Web development is one of the most accessible paths into tech. With
            free resources, a laptop, and dedication, you can build real
            websites and launch a rewarding career.
          </p>

          <p>
            Start with HTML and CSS today. Build something simple. Add
            JavaScript. Keep building. Every website you create teaches you
            something new. The journey of a thousand sites begins with a single
            &lt;html&gt; tag.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more web development career guides on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/python-full-stack-developer-guide"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Python Full Stack Guide →
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
                Helping students start their web development journey
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
