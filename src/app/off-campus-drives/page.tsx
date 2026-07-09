import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Briefcase, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata = getPageSEO('offCampusDrives');

// Mock data - Replace with actual database queries
const upcomingDrives = [
  {
    id: 1,
    company: 'TCS',
    role: 'Assistant Systems Engineer',
    batch: '2024, 2025',
    location: 'Pan India',
    lastDate: '2025-02-15',
    salary: '₹3.36 LPA',
    type: 'Off-Campus',
    link: '/companies/tcs',
  },
  {
    id: 2,
    company: 'Infosys',
    role: 'Systems Engineer',
    batch: '2024, 2025',
    location: 'Multiple Locations',
    lastDate: '2025-02-20',
    salary: '₹3.6 LPA',
    type: 'Off-Campus',
    link: '/companies/infosys',
  },
  {
    id: 3,
    company: 'Wipro',
    role: 'Project Engineer (NLTH)',
    batch: '2025',
    location: 'Pan India',
    lastDate: '2025-02-10',
    salary: '₹3.5 LPA',
    type: 'Off-Campus',
    link: '/companies/wipro',
  },
];

export default function OffCampusDrivesPage() {
  const schemas = getPageSchema('offCampusDrives');
  return (
    <div className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Off-Campus Placement Drives 2025
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Latest off-campus hiring opportunities for freshers. Apply directly
            to top companies without campus placements.
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-8 rounded-lg bg-secondary p-4">
          <p className="text-sm text-muted-foreground">
            🔔 <strong>Pro Tip:</strong> Bookmark this page and check daily for
            new opportunities. Most drives have limited seats!
          </p>
        </div>

        {/* Drives List */}
        <div className="space-y-6">
          {upcomingDrives.map((drive) => (
            <Card
              key={drive.id}
              className="transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="mb-2 text-2xl">
                      {drive.company}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {drive.role}
                    </CardDescription>
                  </div>
                  <Badge className="w-fit">{drive.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Salary</p>
                      <p className="font-semibold">{drive.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{drive.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Last Date</p>
                      <p className="font-semibold">
                        {new Date(drive.lastDate).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Eligible Batch
                      </p>
                      <p className="font-semibold">{drive.batch}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    asChild
                    className="flex-1"
                  >
                    <Link href={drive.link}>
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                  >
                    <Link href={`${drive.link}/interview-questions`}>
                      Interview Prep
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>What are Off-Campus Placement Drives?</h2>
          <p>
            Off-campus placement drives are recruitment processes conducted by
            companies outside of college campuses. These drives are open to all
            eligible candidates, regardless of whether their college has a
            placement cell or tie-up with the company.
          </p>

          <h2>Top Companies Conducting Off-Campus Drives in 2025</h2>
          <h3>1. TCS (Tata Consultancy Services)</h3>
          <p>
            TCS conducts the TCS NQT (National Qualifier Test) for off-campus
            hiring. The exam is held multiple times a year and is open to all
            engineering graduates.
          </p>
          <ul>
            <li>Role: Assistant Systems Engineer, Systems Engineer</li>
            <li>Salary: ₹3.36 - ₹7 LPA</li>
            <li>
              Eligibility: 60% throughout academics (10th, 12th, Graduation)
            </li>
          </ul>

          <h3>2. Infosys</h3>
          <p>
            Infosys regularly conducts off-campus drives through their careers
            portal. They hire for Systems Engineer and Digital Specialist roles.
          </p>
          <ul>
            <li>Role: Systems Engineer, Digital Specialist Engineer</li>
            <li>Salary: ₹3.6 - ₹6.5 LPA</li>
            <li>Eligibility: 60% or 6.0 CGPA throughout</li>
          </ul>

          <h3>3. Wipro</h3>
          <p>
            Wipro's NLTH (National Level Talent Hunt) is one of the largest
            off-campus hiring programs in India.
          </p>
          <ul>
            <li>Role: Project Engineer</li>
            <li>Salary: ₹3.5 - ₹4.5 LPA</li>
            <li>Eligibility: 60% or 6.0 CGPA, no active backlogs</li>
          </ul>

          <h2>How to Prepare for Off-Campus Drives?</h2>
          <h3>1. Build a Strong Resume</h3>
          <p>
            Use our{' '}
            <Link href="/tools/resume-score-checker">Resume Score Checker</Link>{' '}
            to ensure your resume is ATS-friendly and highlights your skills
            effectively.
          </p>

          <h3>2. Practice Aptitude Tests</h3>
          <p>
            Most off-campus drives start with an online aptitude test covering
            quantitative, logical, and verbal reasoning.
          </p>

          <h3>3. Prepare for Technical Interviews</h3>
          <p>
            Review core subjects like Data Structures, Algorithms, DBMS, and
            Operating Systems. Check company-specific interview questions on our{' '}
            <Link href="/companies">Companies</Link> page.
          </p>

          <h3>4. Improve Communication Skills</h3>
          <p>
            HR rounds focus on communication, confidence, and cultural fit.
            Practice common HR questions and work on your English speaking
            skills.
          </p>

          <h2>Eligibility Criteria for Off-Campus Drives</h2>
          <p>While criteria vary by company, most off-campus drives require:</p>
          <ul>
            <li>
              Minimum 60% marks or 6.0 CGPA throughout 10th, 12th, and
              graduation
            </li>
            <li>No active backlogs at the time of application</li>
            <li>Graduation year: 2023, 2024, or 2025 (varies by company)</li>
            <li>Age limit: Usually under 28 years</li>
            <li>No prior work experience (for fresher roles)</li>
          </ul>

          <h2>Tips to Increase Your Chances</h2>
          <ul>
            <li>Apply early - most drives are first-come-first-served</li>
            <li>Keep all documents ready (mark sheets, ID proof, resume)</li>
            <li>Follow company career pages on LinkedIn for instant updates</li>
            <li>
              Join Telegram groups and WhatsApp communities for drive alerts
            </li>
            <li>Practice coding on platforms like LeetCode, HackerRank</li>
            <li>Prepare a 2-minute introduction about yourself</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <h3>Can I apply to multiple off-campus drives simultaneously?</h3>
          <p>
            Yes, you can apply to as many companies as you want. There's no
            restriction on applying to multiple drives.
          </p>

          <h3>Do I need to pay for off-campus drive registrations?</h3>
          <p>
            Legitimate companies never charge for registration. Be cautious of
            scams asking for payment.
          </p>

          <h3>What if I have a gap year?</h3>
          <p>
            Some companies accept gap years if you have a valid reason. Check
            individual company policies.
          </p>
        </div>
      </div>
    </div>
  );
}
