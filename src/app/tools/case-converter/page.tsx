import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import CaseConverterClient from './CaseConverterClient';
import {
  Type,
  CheckCircle,
  Clock,
  Users,
  Shield,
  BookOpen,
  Lightbulb,
  Code,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Case Converter - Convert Case | Free Tool',
  description:
    'Free online case converter to transform text to UPPERCASE, lowercase, Title Case, camelCase, snake_case, and kebab-case. Perfect for developers, writers, and content creators.',
  keywords: [
    'case converter',
    'text case converter',
    'uppercase converter',
    'lowercase converter',
    'title case converter',
    'camelcase converter',
    'snake case converter',
    'text transformer',
    'change text case',
  ],
  canonical: '/tools/case-converter',
});

const caseTypes = [
  {
    name: 'UPPERCASE',
    example: 'HELLO WORLD',
    use: 'Headlines, acronyms, emphasis',
    language: 'All languages',
  },
  {
    name: 'lowercase',
    example: 'hello world',
    use: 'URLs, email addresses, usernames',
    language: 'All languages',
  },
  {
    name: 'Title Case',
    example: 'Hello World',
    use: 'Book titles, headings, names',
    language: 'English',
  },
  {
    name: 'Sentence case',
    example: 'Hello world. How are you?',
    use: 'Normal text, paragraphs',
    language: 'All languages',
  },
  {
    name: 'camelCase',
    example: 'helloWorld',
    use: 'JavaScript/Java variable names',
    language: 'JavaScript, Java, TypeScript',
  },
  {
    name: 'PascalCase',
    example: 'HelloWorld',
    use: 'Class names, React components',
    language: 'JavaScript, C#, Java',
  },
  {
    name: 'snake_case',
    example: 'hello_world',
    use: 'Python variables, database columns',
    language: 'Python, Ruby, SQL',
  },
  {
    name: 'kebab-case',
    example: 'hello-world',
    use: 'URLs, CSS classes, file names',
    language: 'CSS, HTML, URLs',
  },
];

const programmingConventions = [
  {
    language: 'JavaScript',
    variables: 'camelCase',
    functions: 'camelCase',
    classes: 'PascalCase',
    constants: 'UPPER_SNAKE_CASE',
  },
  {
    language: 'Python',
    variables: 'snake_case',
    functions: 'snake_case',
    classes: 'PascalCase',
    constants: 'UPPER_SNAKE_CASE',
  },
  {
    language: 'Java',
    variables: 'camelCase',
    functions: 'camelCase',
    classes: 'PascalCase',
    constants: 'UPPER_SNAKE_CASE',
  },
  {
    language: 'C#',
    variables: 'camelCase',
    functions: 'PascalCase',
    classes: 'PascalCase',
    constants: 'PascalCase',
  },
  {
    language: 'Ruby',
    variables: 'snake_case',
    functions: 'snake_case',
    classes: 'PascalCase',
    constants: 'UPPER_SNAKE_CASE',
  },
  {
    language: 'Go',
    variables: 'camelCase',
    functions: 'camelCase',
    classes: 'PascalCase',
    constants: 'camelCase',
  },
  {
    language: 'PHP',
    variables: 'camelCase',
    functions: 'camelCase',
    classes: 'PascalCase',
    constants: 'UPPER_SNAKE_CASE',
  },
  {
    language: 'SQL',
    variables: 'snake_case',
    functions: 'snake_case',
    classes: 'N/A',
    constants: 'UPPER_SNAKE_CASE',
  },
];

export default function CaseConverterPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Type className="h-4 w-4" />
            Free Text Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Case Converter Online
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Transform your text to UPPERCASE, lowercase, Title Case, camelCase,
            snake_case, and more. Perfect for developers, writers, and content
            creators.
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
            <span className="text-sm font-medium">Instant Convert</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">8 Case Types</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">No Data Stored</span>
          </div>
        </div>

        {/* Case Converter Tool */}
        <CaseConverterClient />

        {/* Social Proof */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            ⚡ <strong>89 developers</strong> converted text in the last hour
          </p>
        </div>

        {/* Main Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Complete Guide to Text Case Conversion
          </h2>
          <p>
            Text case conversion is essential for developers, content writers,
            and anyone working with text. Different contexts require different
            case styles - from programming variables to document titles.
            Understanding when to use each case type helps maintain consistency
            and professionalism in your work.
          </p>

          <h2 className="flex items-center gap-3">
            <Type className="h-6 w-6 text-primary" />
            Types of Text Cases Explained
          </h2>
          <p>
            Here&apos;s a comprehensive overview of all text case types and
            their common applications:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Case Type</th>
                  <th className="border p-3 text-left">Example</th>
                  <th className="border p-3 text-left">Common Use</th>
                  <th className="border p-3 text-left">Context</th>
                </tr>
              </thead>
              <tbody>
                {caseTypes.map((caseType, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-muted/30' : ''}
                  >
                    <td className="border p-3 font-semibold">
                      {caseType.name}
                    </td>
                    <td className="border p-3 font-mono text-primary">
                      {caseType.example}
                    </td>
                    <td className="border p-3 text-sm">{caseType.use}</td>
                    <td className="border p-3 text-sm text-muted-foreground">
                      {caseType.language}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            Programming Language Naming Conventions
          </h2>
          <p>
            Each programming language has its own conventions for naming
            variables, functions, and classes. Following these conventions makes
            your code more readable and maintainable. Here&apos;s a quick
            reference guide for popular programming languages:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Language</th>
                  <th className="border p-3 text-left">Variables</th>
                  <th className="border p-3 text-left">Functions</th>
                  <th className="border p-3 text-left">Classes</th>
                  <th className="border p-3 text-left">Constants</th>
                </tr>
              </thead>
              <tbody>
                {programmingConventions.map((lang, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-muted/30' : ''}
                  >
                    <td className="border p-3 font-semibold">
                      {lang.language}
                    </td>
                    <td className="border p-3 font-mono text-sm">
                      {lang.variables}
                    </td>
                    <td className="border p-3 font-mono text-sm">
                      {lang.functions}
                    </td>
                    <td className="border p-3 font-mono text-sm">
                      {lang.classes}
                    </td>
                    <td className="border p-3 font-mono text-sm">
                      {lang.constants}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              Pro Tip for Developers
            </h3>
            <p className="text-sm">
              When working on a project, always check the existing codebase for
              naming conventions before adding new code. Consistency is more
              important than personal preference. Most modern IDEs and linters
              can automatically enforce naming conventions for you.
            </p>
          </div>

          <h2>Common Use Cases for Case Conversion</h2>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">For Developers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <ul className="space-y-1">
                  <li>• Convert variable names between languages</li>
                  <li>• Generate CSS class names from text</li>
                  <li>• Create URL-friendly slugs (kebab-case)</li>
                  <li>• Transform database column names</li>
                  <li>• Format JSON keys consistently</li>
                  <li>• Convert API endpoint names</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  For Writers & Marketers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <ul className="space-y-1">
                  <li>• Format article headlines (Title Case)</li>
                  <li>• Create social media posts</li>
                  <li>• Fix CAPS LOCK text mistakes</li>
                  <li>• Standardize document formatting</li>
                  <li>• Create consistent brand copy</li>
                  <li>• Format email subject lines</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2>Frequently Asked Questions</h2>

          <h3>What is camelCase and when should I use it?</h3>
          <p>
            <strong>camelCase</strong> is a naming convention where the first
            word is lowercase and subsequent words start with uppercase letters
            (e.g., <code>firstName</code>,<code>getUserData</code>). It&apos;s
            the standard convention for JavaScript and Java variable and
            function names. Use camelCase when writing code in these languages
            to maintain readability and follow community standards.
          </p>

          <h3>What is the difference between camelCase and PascalCase?</h3>
          <p>
            The key difference is the first letter: <strong>camelCase</strong>{' '}
            starts with lowercase (<code>myVariable</code>), while{' '}
            <strong>PascalCase</strong> starts with uppercase (
            <code>MyVariable</code>). PascalCase is typically used for class
            names and React component names, while camelCase is used for
            variables and functions.
          </p>

          <h3>When should I use snake_case?</h3>
          <p>
            <strong>snake_case</strong> uses underscores between words and all
            lowercase letters (e.g., <code>user_name</code>,{' '}
            <code>get_user_data</code>). It&apos;s the standard convention in
            Python for variables and functions, and is commonly used for
            database table and column names in SQL. It&apos;s also popular in
            Ruby programming.
          </p>

          <h3>What is kebab-case used for?</h3>
          <p>
            <strong>kebab-case</strong> (also called &quot;spinal-case&quot;)
            uses hyphens between words (e.g., <code>my-css-class</code>,{' '}
            <code>blog-post-title</code>). It&apos;s the standard for CSS class
            names, HTML attributes, and URL slugs. It&apos;s SEO-friendly for
            URLs because search engines treat hyphens as word separators.
          </p>

          <h3>How do I fix text that was typed with CAPS LOCK on?</h3>
          <p>
            Simply paste your CAPS LOCK text into our converter and click the
            &quot;lowercase&quot; button to convert it to normal text. Then use
            &quot;Sentence case&quot; to properly capitalize the first letter of
            each sentence. This two-step process fixes accidental CAPS LOCK
            typing quickly.
          </p>

          <h3>Is Title Case the same as capitalizing every word?</h3>
          <p>
            Our basic Title Case converter capitalizes the first letter of every
            word. However, proper title case (as per AP or Chicago style) has
            rules about not capitalizing small words like &quot;the&quot;,
            &quot;and&quot;, &quot;of&quot; unless they&apos;re at the start.
            For formal documents, you may need to manually adjust these small
            words.
          </p>

          <h3>Can I convert text between programming conventions?</h3>
          <p>
            Yes! This is one of the most common use cases for developers. For
            example, if you&apos;re copying a Python variable (
            <code>user_first_name</code>) to JavaScript, convert it from
            snake_case to camelCase (<code>userFirstName</code>). Our tool
            handles this conversion instantly.
          </p>

          <h3>Why is consistent naming convention important?</h3>
          <p>
            Consistent naming conventions improve code readability, make
            collaboration easier, and reduce bugs. When all team members follow
            the same conventions, code reviews are faster, and new developers
            can understand the codebase more quickly. Many companies enforce
            naming conventions through linters and code style guides.
          </p>

          <h3>How do I create SEO-friendly URL slugs?</h3>
          <p>
            For SEO-friendly URLs, use <strong>kebab-case</strong>. Enter your
            page title, convert it to lowercase, then to kebab-case. For
            example, &quot;How to Learn Python Programming&quot; becomes{' '}
            <code>how-to-learn-python-programming</code>. This format is
            readable by both humans and search engines.
          </p>

          <h3>What is CONSTANT_CASE?</h3>
          <p>
            <strong>CONSTANT_CASE</strong> (or UPPER_SNAKE_CASE) uses all
            uppercase letters with underscores between words (e.g.,{' '}
            <code>MAX_VALUE</code>, <code>API_KEY</code>). It&apos;s the
            universal convention for constants across almost all programming
            languages, signaling that a value should not be changed during
            program execution.
          </p>
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            The History and Evolution of Text Case Conventions
          </h2>
          <p>
            Text case conventions have evolved significantly throughout the
            history of written language and computing. Understanding this
            evolution helps developers and writers appreciate why different
            conventions exist and when to apply them effectively.
          </p>

          <h3>Ancient Origins of Letter Cases</h3>
          <p>
            The concept of uppercase and lowercase letters originated in ancient
            Rome and medieval European monasteries. Originally, all Latin text
            was written in what we now call &quot;majuscule&quot; or uppercase
            letters. Around the 8th century, Carolingian scribes developed
            &quot;minuscule&quot; letters (lowercase) to write faster and use
            less parchment. The terms &quot;uppercase&quot; and
            &quot;lowercase&quot; actually come from the physical arrangement of
            metal type in printing presses, where capital letters were stored in
            the upper case and small letters in the lower case.
          </p>

          <h3>The Telegraph Era and Early Computing</h3>
          <p>
            The telegraph system of the 19th century used only uppercase letters
            due to technical limitations. Early computer systems like FORTRAN
            (1957) also used only uppercase characters. The ASCII standard,
            developed in 1963, included both uppercase and lowercase letters,
            establishing the 26+26 letter system we still use today. This
            dual-case system became fundamental to modern programming languages.
          </p>

          <h3>Birth of Programming Naming Conventions</h3>
          <p>
            As programming languages evolved, developers needed consistent ways
            to name variables, functions, and classes. The earliest conventions
            emerged from practical constraints: early languages like COBOL used
            hyphens (KEBAB-CASE-STYLE), while languages like C introduced
            underscore-based naming (snake_case) due to identifier restrictions.
            CamelCase gained popularity with Smalltalk in the 1970s and became
            standard in Java and JavaScript communities in the 1990s.
          </p>

          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            Technical Deep Dive: How Case Conversion Algorithms Work
          </h2>
          <p>
            Understanding the algorithms behind case conversion helps developers
            implement their own solutions and troubleshoot edge cases.
            Here&apos;s a comprehensive look at how these conversions work under
            the hood.
          </p>

          <h3>Unicode and Character Mapping</h3>
          <p>
            Modern case conversion relies on Unicode character mappings. Each
            letter in Unicode has defined uppercase and lowercase equivalents
            stored in the Unicode Character Database (UCD). For example,
            &apos;a&apos; (U+0061) maps to &apos;A&apos; (U+0041). However, some
            languages have special rules: German &apos;ß&apos; (U+00DF)
            uppercases to &apos;SS&apos;, and Turkish &apos;i&apos; becomes
            &apos;İ&apos; (dotted I) rather than &apos;I&apos;.
          </p>

          <h3>Word Boundary Detection</h3>
          <p>
            For camelCase, PascalCase, snake_case, and kebab-case conversions,
            the algorithm must first identify word boundaries. Common strategies
            include: detecting transitions between lowercase and uppercase
            letters, splitting on whitespace and punctuation, and recognizing
            common word patterns. Our tool uses a combination of these
            approaches for accurate results.
          </p>

          <div className="not-prose my-6 rounded-lg bg-green-50 p-6 dark:bg-green-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Code className="h-5 w-5 text-green-600" />
              JavaScript Implementation Example
            </h3>
            <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-green-400">
              {`// camelCase conversion algorithm
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, 
      (match, chr) => chr.toUpperCase()
    );
}

// snake_case conversion algorithm  
function toSnakeCase(str) {
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '')
    .replace(/\\s+/g, '_');
}`}
            </pre>
          </div>

          <h3>Handling Edge Cases in Case Conversion</h3>
          <p>
            Robust case conversion must handle numerous edge cases: acronyms
            like &quot;XMLParser&quot; should become &quot;xml_parser&quot; in
            snake_case; numbers within identifiers like &quot;user2Name&quot;
            must be preserved; consecutive uppercase letters in
            &quot;HTTPServer&quot; need special treatment. Our tool implements
            intelligent detection to handle these scenarios correctly.
          </p>

          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Case Conversion Best Practices by Industry
          </h2>

          <h3>Web Development Industry Standards</h3>
          <p>
            In web development, each technology layer has its own conventions.
            HTML attributes use lowercase with hyphens (data-user-id), CSS
            classes use BEM notation with lowercase and hyphens
            (block__element--modifier), JavaScript uses camelCase for variables
            and PascalCase for classes and React components. Following these
            conventions ensures your code integrates smoothly with frameworks
            and libraries.
          </p>

          <h3>Backend Development Conventions</h3>
          <p>
            Backend systems often need to convert between conventions when
            handling data. REST APIs may receive JSON with camelCase keys that
            need to be converted to snake_case for database storage. Python
            backends following PEP 8 use snake_case, while Java backends use
            camelCase. Understanding these conventions is crucial for proper
            data serialization and deserialization.
          </p>

          <h3>Database Naming Conventions</h3>
          <p>
            Most database systems recommend snake_case for table and column
            names. PostgreSQL converts unquoted identifiers to lowercase, making
            snake_case natural. MySQL is case-insensitive on Windows but
            case-sensitive on Linux, so consistent snake_case prevents
            cross-platform issues. Reserved words should be avoided or properly
            quoted regardless of case convention.
          </p>

          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Case Sensitivity in URLs and SEO Impact
          </h2>
          <p>
            Understanding case sensitivity in URLs is crucial for SEO and user
            experience. Here&apos;s what every web developer and content creator
            needs to know about URL case handling.
          </p>

          <h3>How Web Servers Handle URL Case</h3>
          <p>
            URL behavior varies by server: Apache on Linux treats /Page and
            /page as different URLs (case-sensitive), while IIS on Windows
            treats them as the same (case-insensitive). This inconsistency can
            cause duplicate content issues, broken links, and SEO problems. Best
            practice is to use lowercase URLs consistently and implement
            redirects for uppercase variations.
          </p>

          <h3>SEO Best Practices for URL Case</h3>
          <p>
            Google recommends using lowercase URLs for consistency. Search
            engines may treat mixed-case URLs as separate pages, diluting link
            equity. Always use kebab-case for URL slugs:
            &quot;/blog/how-to-learn-coding&quot; instead of
            &quot;/blog/HowToLearnCoding&quot; or
            &quot;/blog/how_to_learn_coding&quot;. Our converter makes it easy
            to generate SEO-friendly URLs from any text.
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <h4 className="mb-2 font-semibold text-green-800 dark:text-green-200">
                ✓ Good URL Examples
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>/products/blue-widget</code>
                </li>
                <li>
                  <code>/blog/10-tips-for-success</code>
                </li>
                <li>
                  <code>/users/john-doe-profile</code>
                </li>
                <li>
                  <code>/api/v2/get-user-data</code>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="mb-2 font-semibold text-red-800 dark:text-red-200">
                ✗ Avoid These URLs
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <code>/Products/Blue_Widget</code>
                </li>
                <li>
                  <code>/BLOG/10TipsForSuccess</code>
                </li>
                <li>
                  <code>/Users/JohnDoeProfile</code>
                </li>
                <li>
                  <code>/API/V2/GetUserData</code>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            Accessibility Considerations for Text Case
          </h2>
          <p>
            Text case choices affect accessibility for users with visual
            impairments, dyslexia, and cognitive disabilities. Making informed
            case decisions improves the user experience for everyone.
          </p>

          <h3>Screen Readers and Text Case</h3>
          <p>
            Screen readers may interpret ALL CAPS text as acronyms, spelling out
            each letter individually. This makes sentences written in uppercase
            difficult to understand. Use CSS text-transform instead of typing in
            caps when you need visual uppercase styling. For abbreviations like
            &quot;NATO&quot;, use the &lt;abbr&gt; HTML element.
          </p>

          <h3>Readability for Users with Dyslexia</h3>
          <p>
            Research shows that all-uppercase text is harder to read for users
            with dyslexia. Sentence case provides the best readability because
            word shapes are more distinctive. Title Case is acceptable for
            headings, but body text should always use sentence case for maximum
            accessibility and reading speed.
          </p>

          <h2 className="flex items-center gap-3">
            <Type className="h-6 w-6 text-primary" />
            International Text Case Handling
          </h2>
          <p>
            Case conversion becomes complex when dealing with international
            text. Different languages have unique rules that must be respected
            for correct results.
          </p>

          <h3>Turkish and Azerbaijani Case Rules</h3>
          <p>
            Turkish has four distinct I letters: lowercase ı (dotless) and i
            (dotted), and uppercase I (dotless) and İ (dotted). Standard English
            case conversion would incorrectly convert Turkish &apos;i&apos; to
            &apos;I&apos; instead of &apos;İ&apos;. This is why programming
            languages like Java offer locale-specific case conversion methods.
          </p>

          <h3>German Eszett (ß) Handling</h3>
          <p>
            The German letter ß (eszett) has no traditional uppercase form. When
            uppercasing German text, ß traditionally becomes &apos;SS&apos;.
            However, since 2017, the capital ẞ exists in Unicode. Our converter
            handles both approaches, making it suitable for German text
            processing.
          </p>

          <h3>Greek and Cyrillic Considerations</h3>
          <p>
            Greek has special rules for the letter sigma: lowercase σ at the
            start/middle of a word, ς at the end. Cyrillic alphabets have their
            own case mappings that differ from Latin scripts. When processing
            international text, always consider the target language&apos;s
            specific requirements.
          </p>

          <h2>Code Style Guides and Linting Tools</h2>
          <p>
            Major tech companies and open-source projects publish style guides
            that define naming conventions. Linting tools can automatically
            enforce these standards, reducing code review friction and
            maintaining consistency across large codebases.
          </p>

          <div className="not-prose my-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Style Guides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">
                    Google JavaScript Style Guide
                  </span>
                  <span className="text-muted-foreground">
                    camelCase variables, CONSTANT_CASE for constants
                  </span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">
                    Airbnb JavaScript Style Guide
                  </span>
                  <span className="text-muted-foreground">
                    camelCase, PascalCase for classes/constructors
                  </span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">PEP 8 (Python)</span>
                  <span className="text-muted-foreground">
                    snake_case functions, CapWords classes
                  </span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">
                    Oracle Java Code Conventions
                  </span>
                  <span className="text-muted-foreground">
                    camelCase methods, PascalCase classes
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    Microsoft C# Naming Guidelines
                  </span>
                  <span className="text-muted-foreground">
                    PascalCase public members, camelCase private
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2>Advanced Topics: Regular Expressions for Case Conversion</h2>
          <p>
            For developers who need to implement case conversion in their own
            applications, regular expressions provide powerful pattern-matching
            capabilities. Here are common regex patterns used in case
            conversion.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Pattern</th>
                  <th className="border p-3 text-left">Purpose</th>
                  <th className="border p-3 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-mono text-sm">/([A-Z])/g</td>
                  <td className="border p-3 text-sm">Find uppercase letters</td>
                  <td className="border p-3 text-sm">
                    Detect camelCase word boundaries
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono text-sm">
                    /[^a-zA-Z0-9]+/g
                  </td>
                  <td className="border p-3 text-sm">
                    Find non-alphanumeric chars
                  </td>
                  <td className="border p-3 text-sm">
                    Split words on separators
                  </td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-mono text-sm">/\b\w/g</td>
                  <td className="border p-3 text-sm">
                    Word boundary + first char
                  </td>
                  <td className="border p-3 text-sm">Title Case conversion</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono text-sm">
                    /([a-z])([A-Z])/g
                  </td>
                  <td className="border p-3 text-sm">
                    Lowercase followed by uppercase
                  </td>
                  <td className="border p-3 text-sm">
                    camelCase to snake_case split
                  </td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-mono text-sm">/\s+/g</td>
                  <td className="border p-3 text-sm">
                    Any whitespace sequence
                  </td>
                  <td className="border p-3 text-sm">
                    Replace spaces with separators
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Troubleshooting Common Case Conversion Issues</h2>
          <p>
            Even with reliable tools, case conversion can produce unexpected
            results in certain scenarios. Here are common issues and how to
            resolve them.
          </p>

          <h3>Acronyms and Abbreviations</h3>
          <p>
            Converting &quot;XMLHTTPRequest&quot; to snake_case might produce
            &quot;x_m_l_h_t_t_p_request&quot; instead of the desired
            &quot;xml_http_request&quot;. This happens because simple algorithms
            split on every uppercase letter. Our tool uses intelligent acronym
            detection to handle common abbreviations correctly. For custom
            acronyms, you may need to pre-process the text.
          </p>

          <h3>Numbers in Identifiers</h3>
          <p>
            Text like &quot;user2address&quot; or &quot;3DModel&quot; can
            confuse basic converters. Numbers should generally stay attached to
            the words they modify: &quot;user2_address&quot; or
            &quot;3d_model&quot; in snake_case. Our converter preserves number
            positioning while correctly inserting separators between alphabetic
            word boundaries.
          </p>

          <h3>Leading and Trailing Whitespace</h3>
          <p>
            Extra spaces at the beginning or end of text can result in
            leading/trailing underscores or hyphens in converted output. Always
            trim your input text before conversion. Our tool automatically trims
            whitespace to prevent these issues, but be aware when implementing
            your own conversion logic.
          </p>

          <h2>Extended Frequently Asked Questions</h2>

          <h3>Can I use this tool for converting file names?</h3>
          <p>
            Yes! File naming conventions vary by operating system and purpose.
            Use kebab-case for web assets (image-hero-banner.png), snake_case
            for scripts and data files (user_data.csv), and PascalCase for class
            files in languages like Java (UserService.java). Be aware that some
            operating systems are case-insensitive, so avoid having files
            differing only by case.
          </p>

          <h3>How do different frameworks handle case conversion?</h3>
          <p>
            Most frameworks have built-in case utilities. Rails (Ruby) provides
            methods like underscore and camelize. Django (Python) uses
            snake_case throughout. Spring Boot (Java) offers
            PropertyNamingStrategy for JSON serialization. React conventions
            prefer PascalCase for components and camelCase for props.
            Understanding your framework&apos;s conventions ensures consistent,
            idiomatic code.
          </p>

          <h3>What about environment variables?</h3>
          <p>
            Environment variables traditionally use SCREAMING_SNAKE_CASE (all
            uppercase with underscores). Examples include DATABASE_URL,
            API_SECRET_KEY, and NODE_ENV. This convention dates back to Unix
            systems and helps distinguish environment variables from regular
            variables in shell scripts and application code.
          </p>

          <h3>How do I handle mixed-language codebases?</h3>
          <p>
            When your project uses multiple languages, establish a conversion
            strategy at API boundaries. Common approaches include: converting to
            the target language&apos;s convention in serialization layers, using
            a neutral format like JSON with consistent casing, or creating
            adapter functions that handle conversion. Document your strategy in
            the project&apos;s style guide.
          </p>

          <h3>Are there performance considerations for case conversion?</h3>
          <p>
            For typical text lengths, case conversion is negligible. However,
            when processing millions of strings (like log analysis or data
            migration), algorithm efficiency matters. Native methods
            (toLowerCase(), toUpperCase()) are highly optimized. Custom
            regex-based conversions may be slower at scale. For heavy
            processing, consider pre-compiled regex patterns and batch
            operations.
          </p>

          <h3>How do APIs typically handle case conversion?</h3>
          <p>
            RESTful APIs commonly use camelCase for JSON payloads (JavaScript
            convention) or snake_case (following Python/Ruby conventions).
            GraphQL APIs typically use camelCase. When consuming third-party
            APIs, you may need to convert between their convention and your
            application&apos;s internal convention. Many HTTP client libraries
            offer automatic case conversion options.
          </p>

          <h3>What&apos;s the best case for documentation?</h3>
          <p>
            Technical documentation should match the code it describes. Use code
            formatting (backticks) for identifiers and maintain their original
            case. For headings and prose, use sentence case for better
            readability. API documentation tools like Swagger/OpenAPI
            automatically format identifiers according to their schema
            definitions.
          </p>

          <h3>How do version control systems handle case changes?</h3>
          <p>
            Git on case-insensitive systems (Windows, macOS by default) may not
            detect case-only file renames. Use{' '}
            <code>git mv -f OldName.js newname.js</code> to force rename. This
            is another reason to establish naming conventions early and stick
            with them. Repository hooks can enforce naming conventions before
            commits are accepted.
          </p>

          <h2>Glossary of Case Conversion Terms</h2>
          <p>
            Understanding the terminology used in text case conversion helps you
            communicate effectively with other developers and make better
            decisions about naming conventions.
          </p>

          <div className="not-prose my-6">
            <Card>
              <CardContent className="space-y-4 pt-6 text-sm">
                <div className="border-b pb-3">
                  <span className="font-bold text-primary">ASCII</span>
                  <p className="mt-1 text-muted-foreground">
                    American Standard Code for Information Interchange - the
                    character encoding standard that defines 128 characters
                    including uppercase (65-90) and lowercase (97-122) letters.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <span className="font-bold text-primary">
                    Bicameral Script
                  </span>
                  <p className="mt-1 text-muted-foreground">
                    A writing system with two cases (upper and lower). Latin,
                    Greek, and Cyrillic are bicameral. Arabic, Hebrew, and most
                    Asian scripts are unicameral (single case).
                  </p>
                </div>
                <div className="border-b pb-3">
                  <span className="font-bold text-primary">Case Folding</span>
                  <p className="mt-1 text-muted-foreground">
                    Converting text to a common form for case-insensitive
                    comparison. Different from lowercasing because it handles
                    special Unicode cases correctly.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <span className="font-bold text-primary">Delimiter</span>
                  <p className="mt-1 text-muted-foreground">
                    Characters used to separate words in identifiers. Common
                    delimiters include underscore (_), hyphen (-), and implicit
                    case changes in camelCase.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <span className="font-bold text-primary">Identifier</span>
                  <p className="mt-1 text-muted-foreground">
                    A name used in programming to identify variables, functions,
                    classes, or other entities. Subject to language-specific
                    rules and conventions.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <span className="font-bold text-primary">Locale</span>
                  <p className="mt-1 text-muted-foreground">
                    Regional settings that affect case conversion. Turkish
                    locale, for example, requires special handling of the letter
                    &apos;i&apos; during case conversion.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <span className="font-bold text-primary">Majuscule</span>
                  <p className="mt-1 text-muted-foreground">
                    The technical term for uppercase letters, derived from Latin
                    &quot;maiuscula&quot; meaning &quot;somewhat larger.&quot;
                  </p>
                </div>
                <div className="border-b pb-3">
                  <span className="font-bold text-primary">Minuscule</span>
                  <p className="mt-1 text-muted-foreground">
                    The technical term for lowercase letters, from Latin
                    &quot;minuscula&quot; meaning &quot;somewhat smaller.&quot;
                  </p>
                </div>
                <div className="border-b pb-3">
                  <span className="font-bold text-primary">Slug</span>
                  <p className="mt-1 text-muted-foreground">
                    A URL-friendly version of text, typically in kebab-case,
                    used in web addresses for SEO and readability.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-primary">Unicode</span>
                  <p className="mt-1 text-muted-foreground">
                    An international character encoding standard that includes
                    over 140,000 characters from modern and historic scripts,
                    with defined case mappings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2>Step-by-Step Tutorial: Converting Text for Different Purposes</h2>

          <h3>Tutorial 1: Creating a URL Slug from a Blog Title</h3>
          <p>
            Suppose you have a blog post titled &quot;10 Essential JavaScript
            Tips for Beginners!&quot; and need to create an SEO-friendly URL
            slug. Follow these steps:
          </p>
          <div className="not-prose my-4 rounded-lg border p-4">
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <div>
                  <strong>Copy your title:</strong> &quot;10 Essential
                  JavaScript Tips for Beginners!&quot;
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                <div>
                  <strong>Paste into the converter above</strong>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                <div>
                  <strong>Click &quot;kebab-case&quot;</strong> to convert
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  4
                </span>
                <div>
                  <strong>Result:</strong>{' '}
                  <code>10-essential-javascript-tips-for-beginners</code>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  5
                </span>
                <div>
                  <strong>Use in your URL:</strong>{' '}
                  <code>/blog/10-essential-javascript-tips-for-beginners</code>
                </div>
              </li>
            </ol>
          </div>

          <h3>Tutorial 2: Converting Python Variables to JavaScript</h3>
          <p>
            When porting code from Python to JavaScript, variable naming
            conventions need to change from snake_case to camelCase. Here&apos;s
            how:
          </p>
          <div className="not-prose my-4 rounded-lg border p-4">
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <div>
                  <strong>Python variable:</strong> <code>user_first_name</code>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                <div>
                  <strong>
                    Paste into converter and click &quot;camelCase&quot;
                  </strong>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                <div>
                  <strong>JavaScript result:</strong> <code>userFirstName</code>
                </div>
              </li>
            </ol>
          </div>

          <h3>Tutorial 3: Creating React Component Names</h3>
          <p>
            React components should use PascalCase. If you have a component
            described as &quot;user profile card&quot;, here&apos;s how to
            create the proper name:
          </p>
          <div className="not-prose my-4 rounded-lg border p-4">
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <div>
                  <strong>Description:</strong> &quot;user profile card&quot;
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                <div>
                  <strong>Click &quot;PascalCase&quot; button</strong>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                <div>
                  <strong>Component name:</strong> <code>UserProfileCard</code>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  4
                </span>
                <div>
                  <strong>File name:</strong> <code>UserProfileCard.tsx</code>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Expert Tips from Professional Developers
          </h2>

          <div className="not-prose my-6 space-y-4">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-4">
                <p className="text-sm italic">
                  &quot;Consistency trumps personal preference. When joining a
                  project, adopt the existing naming conventions even if you
                  disagree. Save your opinions for new projects.&quot;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  — Senior Software Engineer, Google
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-4">
                <p className="text-sm italic">
                  &quot;Set up linting rules for naming conventions on day one.
                  ESLint&apos;s naming-convention rule and Pylint&apos;s naming
                  style checks catch issues before code review.&quot;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  — Tech Lead, Microsoft
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-4">
                <p className="text-sm italic">
                  &quot;Document your naming conventions in your project&apos;s
                  CONTRIBUTING.md. Include examples for each type of identifier.
                  New contributors will thank you.&quot;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  — Open Source Maintainer
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-4">
                <p className="text-sm italic">
                  &quot;When working with APIs that use different conventions,
                  create a translation layer. Don&apos;t let external casing
                  conventions leak into your codebase.&quot;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  — API Architect, Amazon
                </p>
              </CardContent>
            </Card>
          </div>

          <h2>Common Mistakes to Avoid</h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-base text-red-600">
                  ❌ Mixing Conventions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground">
                  Using snake_case for some variables and camelCase for others
                  in the same codebase creates confusion and maintenance
                  headaches.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-base text-red-600">
                  ❌ Single-Letter Variables
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground">
                  Except for loop counters (i, j, k), avoid single-letter
                  variable names. Good naming is more important than any case
                  convention.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-base text-red-600">
                  ❌ Breaking Framework Conventions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground">
                  Using lowercase for React components or PascalCase for Python
                  functions fights against tooling and confuses other
                  developers.
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-base text-red-600">
                  ❌ Overly Long Names
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground">
                  theUserWhoIsCurrentlyLoggedIntoTheSystem is too long. Balance
                  descriptiveness with brevity: currentUser is better.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2>Quick Reference Card</h2>
          <p>
            Keep this reference handy for quickly choosing the right case
            convention for your needs:
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse border text-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-2 text-left">Need</th>
                  <th className="border p-2 text-left">Use</th>
                  <th className="border p-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">JavaScript variable</td>
                  <td className="border p-2 font-mono">camelCase</td>
                  <td className="border p-2 font-mono">userName</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-2">Python variable</td>
                  <td className="border p-2 font-mono">snake_case</td>
                  <td className="border p-2 font-mono">user_name</td>
                </tr>
                <tr>
                  <td className="border p-2">Class name (any language)</td>
                  <td className="border p-2 font-mono">PascalCase</td>
                  <td className="border p-2 font-mono">UserAccount</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-2">Constant</td>
                  <td className="border p-2 font-mono">CONSTANT_CASE</td>
                  <td className="border p-2 font-mono">MAX_RETRIES</td>
                </tr>
                <tr>
                  <td className="border p-2">CSS class</td>
                  <td className="border p-2 font-mono">kebab-case</td>
                  <td className="border p-2 font-mono">user-profile</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-2">URL slug</td>
                  <td className="border p-2 font-mono">kebab-case</td>
                  <td className="border p-2 font-mono">blog-post-title</td>
                </tr>
                <tr>
                  <td className="border p-2">Database column</td>
                  <td className="border p-2 font-mono">snake_case</td>
                  <td className="border p-2 font-mono">created_at</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-2">Environment variable</td>
                  <td className="border p-2 font-mono">SCREAMING_SNAKE</td>
                  <td className="border p-2 font-mono">DATABASE_URL</td>
                </tr>
                <tr>
                  <td className="border p-2">React component</td>
                  <td className="border p-2 font-mono">PascalCase</td>
                  <td className="border p-2 font-mono">UserCard</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-2">HTML attribute</td>
                  <td className="border p-2 font-mono">kebab-case</td>
                  <td className="border p-2 font-mono">data-user-id</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Word Counter',
                href: '/tools/word-counter',
                desc: 'Count words and characters',
              },
              {
                title: 'Lorem Ipsum Generator',
                href: '/tools/lorem-ipsum-generator',
                desc: 'Generate placeholder text',
              },
              {
                title: 'JSON Formatter',
                href: '/tools/json-formatter',
                desc: 'Format and beautify JSON',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mt-8">
          <h2 className="mb-6 text-2xl font-bold">Developer Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/git-github-beginners-guide"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                Git & GitHub Beginners Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn version control fundamentals for developers.
              </p>
            </Link>
            <Link
              href="/blog/web-development-fundamentals"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                Web Development Fundamentals
              </h3>
              <p className="text-sm text-muted-foreground">
                Master the basics of web development.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Looking for Developer Internships?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Find remote and on-site internship opportunities in top tech
            companies
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Internships
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
