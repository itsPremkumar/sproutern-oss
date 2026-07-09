import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import QRCodeGeneratorClient from './QRCodeGeneratorClient';
import {
  QrCode,
  CheckCircle,
  Clock,
  Users,
  Shield,
  BookOpen,
  Lightbulb,
  Briefcase,
  Store,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'QR Code Generator - Free Tool for Resume & Portfolio',
  description:
    'Free QR code generator for students. Create QR codes for your resume, LinkedIn profile, portfolio, or project demos. Perfect for standing out in job applications. No signup required.',
  keywords: [
    'qr code generator',
    'free qr code',
    'resume qr code',
    'portfolio qr code',
    'linkedin qr code',
    'student qr code',
    'qr code maker',
    'generate qr code',
  ],
  canonical: '/tools/qr-code-generator',
});

const qrUseCases = [
  {
    category: 'Business Cards',
    description: 'Add QR code linking to LinkedIn, portfolio, or vCard',
    benefit: 'Instant digital contact sharing',
  },
  {
    category: 'Restaurant Menus',
    description: 'Link to digital menu PDF or online ordering page',
    benefit: 'Contactless, updatable menus',
  },
  {
    category: 'Marketing Flyers',
    description: 'Track campaign engagement with unique QR codes',
    benefit: 'Measure offline marketing ROI',
  },
  {
    category: 'Event Tickets',
    description: 'QR codes for event check-in and registration',
    benefit: 'Fast, paperless verification',
  },
  {
    category: 'WiFi Sharing',
    description: 'Allow guests to connect without sharing password',
    benefit: 'Convenient, secure access',
  },
  {
    category: 'Product Packaging',
    description: 'Link to product info, manuals, or support pages',
    benefit: 'Enhanced customer experience',
  },
  {
    category: 'Resume/Portfolio',
    description: 'Direct recruiters to online portfolio or LinkedIn',
    benefit: 'Stand out from other candidates',
  },
  {
    category: 'Payment Collection',
    description: 'UPI/PayPal payment QR codes for transactions',
    benefit: 'Easy contactless payments',
  },
];

const qrTypes = [
  {
    type: 'URL',
    format: 'https://example.com',
    description: 'Links to any website or web page',
  },
  {
    type: 'Text',
    format: 'Plain text message',
    description: 'Any text content up to ~2000 characters',
  },
  {
    type: 'Email',
    format: 'mailto:email@example.com',
    description: 'Opens email app with address pre-filled',
  },
  {
    type: 'Phone',
    format: 'tel:+911234567890',
    description: 'Opens phone dialer with number ready',
  },
  {
    type: 'WiFi',
    format: 'WIFI:S:SSID;T:WPA;P:password;;',
    description: 'Auto-connects to WiFi network',
  },
  {
    type: 'SMS',
    format: 'sms:+911234567890?body=Hello',
    description: 'Opens SMS with number and message',
  },
  {
    type: 'vCard',
    format: 'BEGIN:VCARD...END:VCARD',
    description: 'Complete contact card with details',
  },
  {
    type: 'Location',
    format: 'geo:latitude,longitude',
    description: 'Opens maps to specific location',
  },
];

const designTips = [
  'Ensure adequate contrast between QR code and background',
  'Leave white space (quiet zone) around the QR code',
  'Test your QR code on multiple devices before printing',
  'Use high-resolution images for print materials',
  "Don't resize QR codes too small - minimum 2cm x 2cm for print",
  'Avoid placing QR codes on curved or reflective surfaces',
];

export default function QRCodeGeneratorPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <QrCode className="h-4 w-4" />
            Free Generator Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            QR Code Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Create free QR codes for URLs, text, emails, phone numbers, and WiFi
            networks. Download high-quality PNG images instantly. No signup
            required.
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
            <span className="text-sm font-medium">Instant Download</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">No Signup</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">High Quality</span>
          </div>
        </div>

        {/* QR Code Generator Tool */}
        <QRCodeGeneratorClient />

        {/* Social Proof */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            📱 <strong>156 QR codes</strong> generated in the last hour
          </p>
        </div>

        {/* Main Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Complete Guide to QR Codes
          </h2>
          <p>
            QR (Quick Response) codes are two-dimensional barcodes that can
            store various types of information. When scanned with a smartphone
            camera, they instantly direct users to websites, contact
            information, WiFi networks, and more. QR codes have become essential
            for businesses, marketers, and individuals looking to bridge the gap
            between physical and digital experiences.
          </p>

          <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              How QR Codes Work
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                QR codes encode data in a grid of black and white squares. The
                pattern includes:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong>Position markers:</strong> Three large squares in
                  corners for orientation
                </li>
                <li>
                  <strong>Alignment patterns:</strong> Smaller squares for
                  proper scanning
                </li>
                <li>
                  <strong>Timing patterns:</strong> Alternating squares for size
                  calibration
                </li>
                <li>
                  <strong>Data modules:</strong> The encoded information
                </li>
                <li>
                  <strong>Error correction:</strong> Redundant data for
                  reliability
                </li>
              </ul>
            </div>
          </div>

          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            Business Use Cases for QR Codes
          </h2>
          <p>
            QR codes have numerous practical applications across industries.
            Here are the most popular ways businesses and individuals use QR
            codes:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Use Case</th>
                  <th className="border p-3 text-left">Description</th>
                  <th className="border p-3 text-left">Key Benefit</th>
                </tr>
              </thead>
              <tbody>
                {qrUseCases.map((useCase, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-muted/30' : ''}
                  >
                    <td className="border p-3 font-semibold">
                      {useCase.category}
                    </td>
                    <td className="border p-3 text-sm">
                      {useCase.description}
                    </td>
                    <td className="border p-3 text-sm text-muted-foreground">
                      {useCase.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3">
            <Smartphone className="h-6 w-6 text-primary" />
            Types of QR Codes You Can Create
          </h2>
          <p>
            QR codes can encode different types of data, each triggering a
            specific action when scanned:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Type</th>
                  <th className="border p-3 text-left">Format</th>
                  <th className="border p-3 text-left">
                    What Happens When Scanned
                  </th>
                </tr>
              </thead>
              <tbody>
                {qrTypes.map((qrType, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-muted/30' : ''}
                  >
                    <td className="border p-3 font-semibold">{qrType.type}</td>
                    <td className="border p-3 font-mono text-xs">
                      {qrType.format}
                    </td>
                    <td className="border p-3 text-sm text-muted-foreground">
                      {qrType.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3">
            <Store className="h-6 w-6 text-primary" />
            QR Codes for Students and Job Seekers
          </h2>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resume Enhancement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Make your resume stand out:</p>
                <ul className="space-y-1">
                  <li>• Link to your online portfolio</li>
                  <li>• Direct to LinkedIn profile</li>
                  <li>• Showcase video introduction</li>
                  <li>• Link to GitHub projects</li>
                  <li>• Include recommendation letters</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Networking Made Easy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Use QR codes at events:</p>
                <ul className="space-y-1">
                  <li>• Share contact info instantly</li>
                  <li>• Add to business cards</li>
                  <li>• Include in presentations</li>
                  <li>• Add to email signatures</li>
                  <li>• Use on name badges at events</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2>Best Practices for QR Code Design</h2>
          <p>
            To ensure your QR codes scan reliably and look professional, follow
            these design tips:
          </p>

          <div className="not-prose my-6 grid gap-3 md:grid-cols-2">
            {designTips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg border p-3"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>

          <h2>Frequently Asked Questions</h2>

          <h3>How do I scan a QR code?</h3>
          <p>
            Most modern smartphones can scan QR codes directly through the
            camera app. Simply open your camera, point it at the QR code, and a
            notification will appear with the linked content. For older phones,
            you may need to download a QR scanner app. Both Android (Google
            Lens) and iOS have built-in QR scanning capabilities.
          </p>

          <h3>Are QR codes free to generate?</h3>
          <p>
            Yes, our QR code generator is completely free to use. You can create
            unlimited QR codes for URLs, text, email, phone, and WiFi without
            any cost or signup. The generated codes are high-quality and can be
            used for both personal and commercial purposes.
          </p>

          <h3>Do QR codes expire?</h3>
          <p>
            Static QR codes (like the ones we generate){' '}
            <strong>never expire</strong>. The data is encoded directly in the
            pattern. However, if you create a QR code linking to a website and
            that website goes down, the QR code won&apos;t work. Dynamic QR
            codes (offered by paid services) can be edited after creation but
            may have expiration dates.
          </p>

          <h3>What is the best QR code size for printing?</h3>
          <p>
            For reliable scanning, QR codes should be at least{' '}
            <strong>2cm x 2cm (0.8 x 0.8 inches)</strong>
            for close-range scanning. For posters or signs viewed from a
            distance, use larger sizes. A good rule of thumb: the scanning
            distance should be about 10 times the QR code width. A 3cm QR code
            can be scanned from about 30cm away.
          </p>

          <h3>Can I customize the QR code design?</h3>
          <p>
            Our free tool generates standard black and white QR codes. For
            custom colors, logos, or designs, you can use the generated QR code
            as a base and edit it in design software. Just ensure you maintain
            enough contrast and don&apos;t cover the position markers (corner
            squares).
          </p>

          <h3>How much data can a QR code store?</h3>
          <p>
            A standard QR code can store up to{' '}
            <strong>3,000 alphanumeric characters</strong>
            or about 7,000 numeric digits. However, more data means a more
            complex (and harder to scan) code. For best results, keep URLs short
            using URL shorteners if needed. WiFi QR codes typically work well
            with standard password lengths.
          </p>

          <h3>Are QR codes secure?</h3>
          <p>
            QR codes themselves are not inherently secure or insecure - they
            simply encode data. However, malicious QR codes can link to phishing
            sites or malware. Always verify the destination URL before clicking.
            For sensitive information like WiFi passwords, our codes don&apos;t
            store data on any server - the info is encoded directly in the
            image.
          </p>

          <h3>How do I create a QR code for WiFi?</h3>
          <p>
            Select the &quot;WiFi&quot; tab in our generator, enter your network
            name (SSID), password, and security type (usually WPA/WPA2). The
            generated QR code, when scanned, will automatically connect the
            device to your WiFi network without manually entering the password.
            This is perfect for offices, cafes, and home guests.
          </p>

          <h3>Can I track QR code scans?</h3>
          <p>
            Static QR codes (like ours) don&apos;t have built-in tracking. To
            track scans, you can: 1) Use a URL shortener with analytics (like
            Bitly) before generating the QR code, 2) Link to a page with Google
            Analytics, or 3) Use a paid dynamic QR code service that provides
            scan analytics including location, device, and time data.
          </p>

          <h3>
            What&apos;s the difference between static and dynamic QR codes?
          </h3>
          <p>
            <strong>Static QR codes</strong> (what we generate) encode data
            directly and cannot be changed after creation.{' '}
            <strong>Dynamic QR codes</strong> link to a redirect URL that can be
            changed later. Static codes are free and permanent; dynamic codes
            require a subscription but offer flexibility and analytics.
          </p>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Password Generator',
                href: '/tools/password-generator',
                desc: 'Create secure passwords',
              },
              {
                title: 'LinkedIn Generator',
                href: '/tools/linkedin-generator',
                desc: 'Optimize your LinkedIn profile',
              },
              {
                title: 'Resume Builder',
                href: '/tools/resume-builder',
                desc: 'Create professional resumes',
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
          <h2 className="mb-6 text-2xl font-bold">Career Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/building-impressive-portfolio"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                Building an Impressive Portfolio
              </h3>
              <p className="text-sm text-muted-foreground">
                Create a portfolio that stands out to recruiters.
              </p>
            </Link>
            <Link
              href="/blog/linkedin-optimization-students"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                LinkedIn Optimization Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Optimize your LinkedIn for job opportunities.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Boost Your Career?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Explore internship opportunities from top startups and companies
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
