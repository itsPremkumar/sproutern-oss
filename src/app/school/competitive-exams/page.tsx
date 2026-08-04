import { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  BookOpen,
  Target,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertTriangle,
  ExternalLink,
  GraduationCap,
  Award,
  TrendingUp,
  Users,
  Lightbulb,
  Brain,
  Briefcase,
  Globe,
  Building,
  Star,
  HelpCircle,
  FileText,
  DollarSign,
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Competitive Exam Calendar',
  description:
    'Planning guide for major competitive exams including JEE Main, JEE Advanced, NEET UG, GATE, CAT, UPSC, SSC, and banking exams with registration patterns, exam structure, and preparation tips.',
  keywords:
    'competitive exam calendar, exam schedule India, entrance exam dates, registration deadlines, JEE planning guide, NEET planning guide, GATE planning guide, CAT planning guide',
  openGraph: {
    title: 'Competitive Exam Calendar - Planning Guide',
    description:
      'Plan around major exam windows and registration patterns without missing key deadlines.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/school/competitive-exams',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/school/competitive-exams',
  },
};

const engineeringExams = [
  {
    name: 'JEE Main 2025 Session 1',
    date: 'Jan 22-31, 2025',
    registration: 'Nov 2024',
    registrationStatus: 'Closed',
    eligibility: '12th pass/appearing with PCM',
    attempts: '2 per year',
    website: 'https://jeemain.nta.nic.in',
    seats: '~10 lakh applicants',
    topColleges: 'NITs, IIITs, GFTIs',
  },
  {
    name: 'JEE Main 2025 Session 2',
    date: 'Apr 1-15, 2025',
    registration: 'Feb 2025',
    registrationStatus: 'Upcoming',
    eligibility: '12th pass/appearing with PCM',
    attempts: '2 per year',
    website: 'https://jeemain.nta.nic.in',
    seats: '~10 lakh applicants',
    topColleges: 'NITs, IIITs, GFTIs',
  },
  {
    name: 'JEE Advanced 2025',
    date: 'May 18, 2025',
    registration: 'Apr 2025',
    registrationStatus: 'After JEE Main',
    eligibility: 'Top 2.5 lakh in JEE Main',
    attempts: '2 lifetime',
    website: 'https://jeeadv.ac.in',
    seats: '~17,000 seats',
    topColleges: '23 IITs',
  },
  {
    name: 'BITSAT 2025',
    date: 'May 22-26, 2025',
    registration: 'Jan-Apr 2025',
    registrationStatus: 'Ongoing',
    eligibility: '12th with 75% aggregate',
    attempts: 'Unlimited',
    website: 'https://www.bitsadmission.com',
    seats: '~2,500 seats',
    topColleges: 'BITS Pilani, Goa, Hyderabad',
  },
  {
    name: 'VITEEE 2025',
    date: 'Apr 19-30, 2025',
    registration: 'Nov 2024-Mar 2025',
    registrationStatus: 'Open',
    eligibility: '12th with 60% in PCM',
    attempts: 'Unlimited',
    website: 'https://viteee.vit.ac.in',
    seats: '~10,000 seats',
    topColleges: 'VIT Vellore, Chennai',
  },
  {
    name: 'SRMJEEE 2025',
    date: 'Apr 2025',
    registration: 'Oct 2024-Apr 2025',
    registrationStatus: 'Open',
    eligibility: '12th with PCM',
    attempts: 'Unlimited',
    website: 'https://www.srmist.edu.in',
    seats: '~8,000 seats',
    topColleges: 'SRM Chennai, Delhi NCR',
  },
  {
    name: 'COMEDK 2025',
    date: 'May 2025',
    registration: 'Jan-Apr 2025',
    registrationStatus: 'Upcoming',
    eligibility: '12th with 45% in PCM',
    attempts: 'Unlimited',
    website: 'https://www.comedk.org',
    seats: '~20,000 seats',
    topColleges: 'Karnataka private colleges',
  },
  {
    name: 'WBJEE 2025',
    date: 'Apr 2025',
    registration: 'Dec 2024-Jan 2025',
    registrationStatus: 'Closed',
    eligibility: '12th with PCM',
    attempts: 'Unlimited',
    website: 'https://wbjeeb.nic.in',
    seats: '~30,000 seats',
    topColleges: 'Jadavpur, WB engineering colleges',
  },
  {
    name: 'MHT CET 2025',
    date: 'May 2025',
    registration: 'Feb-Mar 2025',
    registrationStatus: 'Upcoming',
    eligibility: '12th with PCM',
    attempts: 'Unlimited',
    website: 'https://cetcell.mahacet.org',
    seats: '~1.5 lakh seats',
    topColleges: 'Maharashtra engineering colleges',
  },
  {
    name: 'KCET 2025',
    date: 'Apr-May 2025',
    registration: 'Feb-Mar 2025',
    registrationStatus: 'Upcoming',
    eligibility: '12th with PCM',
    attempts: 'Unlimited',
    website: 'https://cetonline.karnataka.gov.in',
    seats: '~50,000 seats',
    topColleges: 'Karnataka engineering colleges',
  },
];

const medicalExams = [
  {
    name: 'NEET UG 2025',
    date: 'May 4, 2025',
    registration: 'Feb-Mar 2025',
    registrationStatus: 'Upcoming',
    eligibility: '12th with PCB, 50% marks',
    attempts: 'Unlimited',
    website: 'https://neet.nta.nic.in',
    seats: '~1 lakh MBBS, 27k BDS',
    topColleges: 'AIIMS, JIPMER, GMCs',
  },
  {
    name: 'AIIMS INICET 2025',
    date: 'Jan/Jul 2025',
    registration: '2 months before',
    registrationStatus: 'Multiple sessions',
    eligibility: 'MBBS degree holders',
    attempts: 'Unlimited',
    website: 'https://aiimsexams.ac.in',
    seats: 'PG seats at AIIMS',
    topColleges: 'AIIMS institutes',
  },
  {
    name: 'NEET PG 2025',
    date: 'Jun 2025',
    registration: 'Mar-Apr 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'MBBS degree',
    attempts: 'Unlimited',
    website: 'https://nbe.edu.in',
    seats: '~50,000 PG seats',
    topColleges: 'Medical colleges across India',
  },
  {
    name: 'NEET MDS 2025',
    date: 'Mar 2025',
    registration: 'Dec 2024-Jan 2025',
    registrationStatus: 'Closed',
    eligibility: 'BDS degree',
    attempts: 'Unlimited',
    website: 'https://nbe.edu.in',
    seats: '~6,000 seats',
    topColleges: 'Dental colleges',
  },
  {
    name: 'JIPMER 2025',
    date: 'Merged with NEET',
    registration: 'N/A',
    registrationStatus: 'N/A',
    eligibility: 'Through NEET only',
    attempts: 'N/A',
    website: 'https://jipmer.edu.in',
    seats: '~200 MBBS seats',
    topColleges: 'JIPMER Puducherry',
  },
];

const managementExams = [
  {
    name: 'CAT 2025',
    date: 'Nov 24, 2025',
    registration: 'Aug-Sep 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation with 50%',
    attempts: 'Unlimited',
    website: 'https://iimcat.ac.in',
    seats: '~5,000+ IIM seats',
    topColleges: 'IIMs, top B-schools',
  },
  {
    name: 'XAT 2025',
    date: 'Jan 5, 2025',
    registration: 'Aug-Nov 2024',
    registrationStatus: 'Closed',
    eligibility: 'Any graduation',
    attempts: 'Unlimited',
    website: 'https://xatonline.in',
    seats: 'XLRI + 160+ colleges',
    topColleges: 'XLRI, SPJIMR, IMT',
  },
  {
    name: 'SNAP 2025',
    date: 'Dec 2025',
    registration: 'Aug-Nov 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation with 50%',
    attempts: 'Unlimited',
    website: 'https://www.snaptest.org',
    seats: 'Symbiosis colleges',
    topColleges: 'SIBM, SCMHRD',
  },
  {
    name: 'NMAT 2025',
    date: 'Oct-Dec 2025',
    registration: 'Jul-Nov 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation',
    attempts: '3 per year',
    website: 'https://www.nmat.org',
    seats: 'NMIMS + others',
    topColleges: 'NMIMS Mumbai',
  },
  {
    name: 'CMAT 2025',
    date: 'Jan 2025',
    registration: 'Nov-Dec 2024',
    registrationStatus: 'Closed',
    eligibility: 'Any graduation with 50%',
    attempts: 'Unlimited',
    website: 'https://cmat.nta.nic.in',
    seats: 'AICTE colleges',
    topColleges: 'JBIMS, GIM',
  },
  {
    name: 'MAT 2025',
    date: 'Feb, May, Sep, Dec',
    registration: 'Before each session',
    registrationStatus: 'Multiple',
    eligibility: 'Any graduation',
    attempts: 'Unlimited',
    website: 'https://mat.aima.in',
    seats: '600+ MBA colleges',
    topColleges: 'Various colleges',
  },
  {
    name: 'IPMAT 2025 (IIM Indore)',
    date: 'May 2025',
    registration: 'Mar-Apr 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Class 12 pass',
    attempts: 'Once per year',
    website: 'https://www.iimidr.ac.in',
    seats: '~150 seats',
    topColleges: 'IIM Indore 5-year IPM',
  },
];

const lawExams = [
  {
    name: 'CLAT 2025',
    date: 'Dec 1, 2025',
    registration: 'Aug-Nov 2025',
    registrationStatus: 'Upcoming',
    eligibility: '12th with 45%',
    attempts: 'Unlimited',
    website: 'https://consortiumofnlus.ac.in',
    seats: '~3,000+ NLU seats',
    topColleges: '24 NLUs',
  },
  {
    name: 'AILET 2025',
    date: 'Dec 2025',
    registration: 'Sep-Nov 2025',
    registrationStatus: 'Upcoming',
    eligibility: '12th with 50%',
    attempts: 'Unlimited',
    website: 'https://nludelhi.ac.in',
    seats: '~110 seats',
    topColleges: 'NLU Delhi',
  },
  {
    name: 'LSAT India 2025',
    date: 'Jan, May 2025',
    registration: 'Multiple windows',
    registrationStatus: 'Multiple',
    eligibility: '12th pass',
    attempts: 'Unlimited',
    website: 'https://www.lsatindia.in',
    seats: '80+ law colleges',
    topColleges: 'Jindal Global, IFIM',
  },
  {
    name: 'DU LLB 2025',
    date: 'Jun 2025',
    registration: 'Apr-May 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation',
    attempts: 'Unlimited',
    website: 'https://nta.ac.in',
    seats: '~2,500 seats',
    topColleges: 'Faculty of Law, DU',
  },
  {
    name: 'MH CET Law 2025',
    date: 'Apr 2025',
    registration: 'Jan-Mar 2025',
    registrationStatus: 'Upcoming',
    eligibility: '12th with 45%',
    attempts: 'Unlimited',
    website: 'https://cetcell.mahacet.org',
    seats: 'Maharashtra law colleges',
    topColleges: 'ILS Pune, GLC Mumbai',
  },
];

const governmentExams = [
  {
    name: 'UPSC CSE 2025',
    date: 'Prelims: May 25, 2025',
    registration: 'Feb-Mar 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation, 21-32 years',
    attempts: '6 (Gen), 9 (OBC)',
    website: 'https://upsc.gov.in',
    seats: '~1,000 IAS/IPS/IFS',
    topColleges: 'LBSNAA (training)',
  },
  {
    name: 'SSC CGL 2025',
    date: 'Apr-May 2025',
    registration: 'Mar 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation',
    attempts: 'Till age limit',
    website: 'https://ssc.nic.in',
    seats: '~10,000+ posts',
    topColleges: 'Various ministries',
  },
  {
    name: 'SSC CHSL 2025',
    date: 'Mar 2025',
    registration: 'Nov-Dec 2024',
    registrationStatus: 'Closed',
    eligibility: '12th pass',
    attempts: 'Till age limit',
    website: 'https://ssc.nic.in',
    seats: '~5,000+ posts',
    topColleges: 'LDC, PA, DEO posts',
  },
  {
    name: 'IBPS PO 2025',
    date: 'Oct-Nov 2025',
    registration: 'Aug 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation',
    attempts: 'Till age limit',
    website: 'https://ibps.in',
    seats: '~4,000+ posts',
    topColleges: 'Public sector banks',
  },
  {
    name: 'IBPS Clerk 2025',
    date: 'Aug-Sep 2025',
    registration: 'Jun-Jul 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation',
    attempts: 'Till age limit',
    website: 'https://ibps.in',
    seats: '~5,000+ posts',
    topColleges: 'Public sector banks',
  },
  {
    name: 'SBI PO 2025',
    date: 'Jun-Jul 2025',
    registration: 'Apr-May 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation',
    attempts: 'Till age limit',
    website: 'https://sbi.co.in',
    seats: '~2,000+ posts',
    topColleges: 'State Bank of India',
  },
  {
    name: 'RBI Grade B 2025',
    date: 'Apr 2025',
    registration: 'Feb-Mar 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Any graduation with 60%',
    attempts: 'Till age limit',
    website: 'https://rbi.org.in',
    seats: '~300+ posts',
    topColleges: 'Reserve Bank of India',
  },
  {
    name: 'NDA 2025',
    date: 'Apr, Sep 2025',
    registration: 'Jan, Jun 2025',
    registrationStatus: 'Multiple',
    eligibility: '12th with PCM (Army/Navy)',
    attempts: 'Till age limit',
    website: 'https://upsc.gov.in',
    seats: '~400 seats',
    topColleges: 'NDA, IMA, INA',
  },
];

const scholarshipExams = [
  {
    name: 'NTSE Stage 1 2025',
    date: 'Nov 2025',
    registration: 'Aug-Sep 2025',
    registrationStatus: 'Upcoming',
    eligibility: 'Class 10 students',
    attempts: 'Once',
    website: 'https://ncert.nic.in',
    award: '₹1,250/month till PhD',
    topColleges: 'Scholarship',
  },
  {
    name: 'NTSE Stage 2 2025',
    date: 'May 2025',
    registration: 'After Stage 1',
    registrationStatus: 'For qualifiers',
    eligibility: 'Stage 1 qualifiers',
    attempts: 'Once',
    website: 'https://ncert.nic.in',
    award: '₹1,250/month till PhD',
    topColleges: 'Scholarship',
  },
  {
    name: 'KVPY 2025',
    date: 'Merged with INSPIRE',
    registration: 'N/A',
    registrationStatus: 'Discontinued',
    eligibility: 'Merged with INSPIRE',
    attempts: 'N/A',
    website: 'https://online-inspire.gov.in',
    award: 'N/A',
    topColleges: 'N/A',
  },
  {
    name: 'INSPIRE 2025',
    date: 'After 12th results',
    registration: 'After results',
    registrationStatus: 'Result-based',
    eligibility: 'Top 1% in 12th boards',
    attempts: 'Once',
    website: 'https://online-inspire.gov.in',
    award: '₹80,000/year',
    topColleges: 'Science UG',
  },
  {
    name: 'Math Olympiad (RMO/INMO)',
    date: 'Oct-Apr',
    registration: 'Aug-Sep',
    registrationStatus: 'Annual',
    eligibility: 'High school students',
    attempts: 'Annual',
    website: 'https://olympiads.hbcse.tifr.res.in',
    award: 'Recognition + IMO selection',
    topColleges: 'Olympiad',
  },
  {
    name: 'Science Olympiad (NSO/NSE)',
    date: 'Nov-Feb',
    registration: 'Jul-Sep',
    registrationStatus: 'Annual',
    eligibility: 'School students',
    attempts: 'Annual',
    website: 'https://olympiads.hbcse.tifr.res.in',
    award: 'Recognition + selection',
    topColleges: 'Olympiad',
  },
];

const pgExams = [
  {
    name: 'GATE 2025',
    date: 'Feb 1-16, 2025',
    registration: 'Aug-Oct 2024',
    registrationStatus: 'Closed',
    eligibility: 'Graduating/Graduated in engineering',
    attempts: 'Unlimited',
    website: 'https://gate2025.iitr.ac.in',
    seats: 'MTech admissions + PSU jobs',
    topColleges: 'IITs, NITs, PSUs',
  },
  {
    name: 'UGC NET 2025',
    date: 'Jun, Dec 2025',
    registration: '3 months before',
    registrationStatus: 'Multiple',
    eligibility: 'PG degree with 55%',
    attempts: 'Unlimited',
    website: 'https://ugcnet.nta.nic.in',
    seats: 'JRF + Asst. Prof eligibility',
    topColleges: 'Universities',
  },
  {
    name: 'CSIR NET 2025',
    date: 'Jun, Dec 2025',
    registration: '3 months before',
    registrationStatus: 'Multiple',
    eligibility: 'MSc in sciences',
    attempts: 'Unlimited',
    website: 'https://csirnet.nta.nic.in',
    seats: 'JRF + Lecturership',
    topColleges: 'Research institutes',
  },
  {
    name: 'IIT JAM 2025',
    date: 'Feb 2025',
    registration: 'Sep-Oct 2024',
    registrationStatus: 'Closed',
    eligibility: 'BSc in relevant subject',
    attempts: 'Unlimited',
    website: 'https://jam2025.iitd.ac.in',
    seats: 'MSc at IITs',
    topColleges: 'IITs, IISc',
  },
];

const examCategories = [
  'Engineering',
  'Medical',
  'Management',
  'Law',
  'Government',
  'Scholarships',
  'Postgraduate',
];

const preparationTips = [
  {
    exam: 'JEE Main/Advanced',
    tips: [
      'Start from Class 11',
      'Focus on NCERT + advanced books',
      'Solve 5000+ problems',
      'Give weekly mock tests',
      'Revise formulas daily',
    ],
    timeNeeded: '2 years ideal',
  },
  {
    exam: 'NEET UG',
    tips: [
      'NCERT is Bible',
      'Biology needs memorization',
      'Physics numericals practice',
      'Solve 10 years PYQs',
      'Focus on NCERT diagrams',
    ],
    timeNeeded: '2 years ideal',
  },
  {
    exam: 'CAT',
    tips: [
      'Start 6 months before',
      'VARC needs reading habit',
      'Quant needs shortcuts',
      'DILR needs practice',
      '100+ mocks recommended',
    ],
    timeNeeded: '6-12 months',
  },
  {
    exam: 'UPSC CSE',
    tips: [
      'Prelims - wide coverage',
      'Mains - answer writing practice',
      'Current affairs daily',
      'Optional subject mastery',
      'Interview personality development',
    ],
    timeNeeded: '1-2 years minimum',
  },
  {
    exam: 'GATE',
    tips: [
      'Focus on core subjects',
      'Previous year questions',
      'Virtual calculators practice',
      'Standard textbooks',
      'Subject-wise preparation',
    ],
    timeNeeded: '6-12 months',
  },
];

const faqs = [
  {
    question: 'How many times can I appear for JEE Main?',
    answer:
      'JEE Main is conducted twice a year (January and April sessions). You can appear for both sessions in the same year. After 12th, you have 3 consecutive years to appear, giving you 6 attempts total.',
  },
  {
    question: 'Can I give both JEE and NEET in the same year?',
    answer:
      'Technically yes, but not recommended. Physics and Chemistry overlap, but JEE requires Mathematics while NEET requires Biology. The depth and approach differ significantly. Choose one and focus completely.',
  },
  {
    question: 'What is the validity of GATE score?',
    answer:
      'GATE score is valid for 3 years from the date of result announcement. It can be used for MTech admissions, PSU recruitments, and some private sector jobs.',
  },
  {
    question: 'Is coaching necessary for competitive exams?',
    answer:
      'Not mandatory but helpful for structured preparation. Many toppers are self-taught using online resources. Coaching provides guidance and peer competition. Choose based on your learning style and self-discipline.',
  },
  {
    question: 'What is the difference between JEE Main and JEE Advanced?',
    answer:
      'JEE Main is for admission to NITs, IIITs, GFTIs and acts as qualifier for JEE Advanced. JEE Advanced is only for IIT admission. Top 2.5 lakh JEE Main rankers are eligible for JEE Advanced. Advanced is significantly harder.',
  },
  {
    question: 'Can I appear for CAT while doing graduation?',
    answer:
      'Yes! You can appear for CAT in your final year of graduation. B-schools give provisional admission subject to graduation completion. Many students prepare during final year itself.',
  },
  {
    question: 'What is age limit for UPSC CSE?',
    answer:
      'Minimum 21 years, Maximum 32 years for General category. Age relaxation: 3 years for OBC, 5 years for SC/ST. Attempts: 6 for General, 9 for OBC, unlimited for SC/ST (till age limit).',
  },
  {
    question: 'Is NTSE worth preparing for?',
    answer:
      'Absolutely! NTSE scholars get ₹1,250/month from Class 11 till PhD. More importantly, NTSE preparation builds strong foundation for JEE/NEET. The recognition also helps in college applications.',
  },
  {
    question: 'What if I miss registration deadline?',
    answer:
      'Unfortunately, late registrations are usually not accepted. Mark calendars well in advance. For major exams, registration opens 3-4 months before. Set reminders and register early to avoid last-minute technical issues.',
  },
  {
    question: 'Can I change exam center after registration?',
    answer:
      'Most exams allow center preference during registration. Some exams allow correction window to change centers. Once admit card is issued, center change is usually not possible. Choose wisely during registration.',
  },
];

export default function CompetitiveExamsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sproutern.dpdns.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'School',
        item: 'https://sproutern.dpdns.org/school',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Competitive Exams',
        item: 'https://sproutern.dpdns.org/school/competitive-exams',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-20">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Calendar className="mr-1 h-3 w-3" />
            Evergreen planning guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Competitive Exam Calendar
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Plan around JEE, NEET, GATE, CAT, UPSC, and other major exams using
            recurring registration windows, eligibility context, and
            preparation guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#engineering">Engineering Exams</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <a href="#medical">Medical Exams</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <a href="#government">Government Exams</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Calendar className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold">50+</p>
              <p className="text-xs text-muted-foreground">Exams Covered</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Target className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold">Yearly</p>
              <p className="text-xs text-muted-foreground">Planning windows</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Award className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold">7</p>
              <p className="text-xs text-muted-foreground">Categories</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Users className="h-8 w-8 text-orange-600" />
            <div>
              <p className="text-2xl font-bold">1Cr+</p>
              <p className="text-xs text-muted-foreground">
                Students Appear Yearly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container py-4">
        <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
          <CardContent className="flex items-start gap-3 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div>
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Important Notice
              </p>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Dates are indicative based on previous years patterns. Always
                verify on official exam websites. Dates may change due to
                various factors.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Category Filter */}
      <section className="container py-6">
        <div className="flex flex-wrap justify-center gap-2">
          {examCategories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
            >
              <Badge
                variant="outline"
                className="cursor-pointer px-3 py-1 text-sm hover:bg-primary/10"
              >
                {cat}
              </Badge>
            </a>
          ))}
        </div>
      </section>

      {/* Engineering Exams */}
      <section
        id="engineering"
        className="container py-12"
      >
        <div className="mb-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <Building className="h-4 w-4" />
            Engineering Entrance Exams
          </div>
          <h2 className="text-2xl font-bold">Engineering Entrance Exams</h2>
          <p className="text-muted-foreground">
            JEE, BITSAT, VITEEE and other engineering entrance exams
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold">Exam</th>
                <th className="p-3 text-left font-semibold">Exam Date</th>
                <th className="p-3 text-left font-semibold">Registration</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Top Colleges</th>
                <th className="p-3 text-center font-semibold">Link</th>
              </tr>
            </thead>
            <tbody>
              {engineeringExams.map((exam, i) => (
                <tr
                  key={i}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-3 font-medium">{exam.name}</td>
                  <td className="p-3">{exam.date}</td>
                  <td className="p-3">{exam.registration}</td>
                  <td className="p-3">
                    <Badge
                      variant={
                        exam.registrationStatus === 'Closed'
                          ? 'destructive'
                          : exam.registrationStatus === 'Open' ||
                              exam.registrationStatus === 'Ongoing'
                            ? 'default'
                            : 'outline'
                      }
                    >
                      {exam.registrationStatus}
                    </Badge>
                  </td>
                  <td className="p-3 text-muted-foreground">
                    {exam.topColleges}
                  </td>
                  <td className="p-3 text-center">
                    <a
                      href={exam.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Medical Exams */}
      <section
        id="medical"
        className="container bg-muted/30 py-12"
      >
        <div className="mb-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
            <Award className="h-4 w-4" />
            Medical Entrance Exams
          </div>
          <h2 className="text-2xl font-bold">Medical Entrance Exams</h2>
          <p className="text-muted-foreground">
            NEET and other medical entrance exams
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold">Exam</th>
                <th className="p-3 text-left font-semibold">Exam Date</th>
                <th className="p-3 text-left font-semibold">Registration</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Seats/Info</th>
                <th className="p-3 text-center font-semibold">Link</th>
              </tr>
            </thead>
            <tbody>
              {medicalExams.map((exam, i) => (
                <tr
                  key={i}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-3 font-medium">{exam.name}</td>
                  <td className="p-3">{exam.date}</td>
                  <td className="p-3">{exam.registration}</td>
                  <td className="p-3">
                    <Badge
                      variant={
                        exam.registrationStatus === 'Closed' ||
                        exam.registrationStatus === 'N/A'
                          ? 'destructive'
                          : 'outline'
                      }
                    >
                      {exam.registrationStatus}
                    </Badge>
                  </td>
                  <td className="p-3 text-muted-foreground">{exam.seats}</td>
                  <td className="p-3 text-center">
                    <a
                      href={exam.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Management Exams */}
      <section
        id="management"
        className="container py-12"
      >
        <div className="mb-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-950 dark:text-amber-300">
            <TrendingUp className="h-4 w-4" />
            Management Entrance Exams
          </div>
          <h2 className="text-2xl font-bold">MBA Entrance Exams</h2>
          <p className="text-muted-foreground">
            CAT, XAT, SNAP and other MBA entrance exams
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold">Exam</th>
                <th className="p-3 text-left font-semibold">Exam Date</th>
                <th className="p-3 text-left font-semibold">Registration</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Top Colleges</th>
                <th className="p-3 text-center font-semibold">Link</th>
              </tr>
            </thead>
            <tbody>
              {managementExams.map((exam, i) => (
                <tr
                  key={i}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-3 font-medium">{exam.name}</td>
                  <td className="p-3">{exam.date}</td>
                  <td className="p-3">{exam.registration}</td>
                  <td className="p-3">
                    <Badge
                      variant={
                        exam.registrationStatus === 'Closed'
                          ? 'destructive'
                          : 'outline'
                      }
                    >
                      {exam.registrationStatus}
                    </Badge>
                  </td>
                  <td className="p-3 text-muted-foreground">
                    {exam.topColleges}
                  </td>
                  <td className="p-3 text-center">
                    <a
                      href={exam.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Law Exams */}
      <section
        id="law"
        className="container bg-muted/30 py-12"
      >
        <div className="mb-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
            <FileText className="h-4 w-4" />
            Law Entrance Exams
          </div>
          <h2 className="text-2xl font-bold">Law Entrance Exams</h2>
          <p className="text-muted-foreground">
            CLAT, AILET, LSAT and other law entrance exams
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold">Exam</th>
                <th className="p-3 text-left font-semibold">Exam Date</th>
                <th className="p-3 text-left font-semibold">Registration</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Top Colleges</th>
                <th className="p-3 text-center font-semibold">Link</th>
              </tr>
            </thead>
            <tbody>
              {lawExams.map((exam, i) => (
                <tr
                  key={i}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-3 font-medium">{exam.name}</td>
                  <td className="p-3">{exam.date}</td>
                  <td className="p-3">{exam.registration}</td>
                  <td className="p-3">
                    <Badge
                      variant={
                        exam.registrationStatus === 'Closed'
                          ? 'destructive'
                          : 'outline'
                      }
                    >
                      {exam.registrationStatus}
                    </Badge>
                  </td>
                  <td className="p-3 text-muted-foreground">
                    {exam.topColleges}
                  </td>
                  <td className="p-3 text-center">
                    <a
                      href={exam.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Government Exams */}
      <section
        id="government"
        className="container py-12"
      >
        <div className="mb-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-950 dark:text-red-300">
            <Briefcase className="h-4 w-4" />
            Government Exams
          </div>
          <h2 className="text-2xl font-bold">Government Job Exams</h2>
          <p className="text-muted-foreground">
            UPSC, SSC, Banking and other government exams
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold">Exam</th>
                <th className="p-3 text-left font-semibold">Exam Date</th>
                <th className="p-3 text-left font-semibold">Registration</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Posts</th>
                <th className="p-3 text-center font-semibold">Link</th>
              </tr>
            </thead>
            <tbody>
              {governmentExams.map((exam, i) => (
                <tr
                  key={i}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-3 font-medium">{exam.name}</td>
                  <td className="p-3">{exam.date}</td>
                  <td className="p-3">{exam.registration}</td>
                  <td className="p-3">
                    <Badge
                      variant={
                        exam.registrationStatus === 'Closed'
                          ? 'destructive'
                          : 'outline'
                      }
                    >
                      {exam.registrationStatus}
                    </Badge>
                  </td>
                  <td className="p-3 text-muted-foreground">{exam.seats}</td>
                  <td className="p-3 text-center">
                    <a
                      href={exam.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Scholarship Exams */}
      <section
        id="scholarships"
        className="container bg-muted/30 py-12"
      >
        <div className="mb-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
            <DollarSign className="h-4 w-4" />
            Scholarship Exams
          </div>
          <h2 className="text-2xl font-bold">Scholarship & Olympiad Exams</h2>
          <p className="text-muted-foreground">
            NTSE, INSPIRE, Olympiads and other scholarship exams
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scholarshipExams.map((exam, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-2 font-bold">{exam.name}</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-muted-foreground">Date:</span>{' '}
                    {exam.date}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Registration:</span>{' '}
                    {exam.registration}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Eligibility:</span>{' '}
                    {exam.eligibility}
                  </p>
                  <p className="font-medium text-green-600">{exam.award}</p>
                </div>
                <Badge
                  variant={
                    exam.registrationStatus === 'Discontinued' ||
                    exam.registrationStatus === 'N/A'
                      ? 'destructive'
                      : 'outline'
                  }
                  className="mt-2"
                >
                  {exam.registrationStatus}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PG Exams */}
      <section
        id="postgraduate"
        className="container py-12"
      >
        <div className="mb-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
            <GraduationCap className="h-4 w-4" />
            Postgraduate Exams
          </div>
          <h2 className="text-2xl font-bold">Postgraduate Entrance Exams</h2>
          <p className="text-muted-foreground">
            GATE, NET, JAM and other PG entrance exams
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold">Exam</th>
                <th className="p-3 text-left font-semibold">Exam Date</th>
                <th className="p-3 text-left font-semibold">Registration</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">For</th>
                <th className="p-3 text-center font-semibold">Link</th>
              </tr>
            </thead>
            <tbody>
              {pgExams.map((exam, i) => (
                <tr
                  key={i}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-3 font-medium">{exam.name}</td>
                  <td className="p-3">{exam.date}</td>
                  <td className="p-3">{exam.registration}</td>
                  <td className="p-3">
                    <Badge
                      variant={
                        exam.registrationStatus === 'Closed'
                          ? 'destructive'
                          : 'outline'
                      }
                    >
                      {exam.registrationStatus}
                    </Badge>
                  </td>
                  <td className="p-3 text-muted-foreground">{exam.seats}</td>
                  <td className="p-3 text-center">
                    <a
                      href={exam.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Lightbulb className="h-4 w-4" />
            Preparation Tips
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Exam-wise Preparation Strategies
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preparationTips.map((exam, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">{exam.exam}</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  Time Needed:{' '}
                  <span className="font-medium text-primary">
                    {exam.timeNeeded}
                  </span>
                </p>
                <ul className="space-y-2">
                  {exam.tips.map((tip, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <HelpCircle className="h-4 w-4" />
            FAQs
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="mb-2 flex items-start gap-2 font-semibold">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="pl-8 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Clock className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">
              Track Your Exam Countdown
            </h2>
            <p className="mb-6 opacity-90">
              Never miss a registration. Set reminders for your target exams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/tools/exam-countdown">
                  Exam Countdown Timer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/scholarships">Explore Scholarships</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
