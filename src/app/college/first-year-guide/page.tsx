import { Metadata } from 'next';
import Link from 'next/link';
import {
  Star,
  BookOpen,
  Users,
  Home,
  Heart,
  Clock,
  Target,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Calendar,
  Coffee,
  Utensils,
  Shirt,
  Laptop,
  Phone,
  DollarSign,
  MapPin,
  MessageSquare,
  Brain,
  Trophy,
  Zap,
  Shield,
  HelpCircle,
  Music,
  Camera,
  Award,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'First Year College Guide | Freshman Survival Tips',
  description:
    'Complete guide for first-year college students covering academics, hostel life, time management, club selection, avoiding common freshman mistakes, and building a strong foundation for career success.',
  keywords:
    'first year college guide, freshman tips, college survival guide, hostel life tips, first year engineering, college freshers guide, first semester tips, college academics',
  openGraph: {
    title: 'First Year College Survival Guide 2025',
    description: 'Everything you need to ace your first year of college.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/college/first-year-guide',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/college/first-year-guide',
  },
};

const monthByMonthGuide = [
  {
    month: 'Month 1',
    title: 'Orientation & Settling In',
    academics: [
      'Attend all orientation sessions',
      'Get class schedule sorted',
      'Buy required textbooks',
      'Understand grading system',
    ],
    social: [
      'Meet your batchmates',
      'Introduce yourself to seniors',
      'Join WhatsApp/Telegram groups',
      'Attend fresher events',
    ],
    practical: [
      'Complete hostel formalities',
      'Set up study space',
      'Learn campus navigation',
      'Open bank account if needed',
    ],
  },
  {
    month: 'Month 2',
    title: 'Building Routine',
    academics: [
      'Establish study routine',
      'Attend all lectures',
      'Start taking notes seriously',
      'Form study groups',
    ],
    social: [
      'Explore clubs and activities',
      'Attend club introductions',
      'Make diverse friends',
      'Start networking with seniors',
    ],
    practical: [
      'Organize your schedule',
      'Set up morning routine',
      'Balance social and study time',
      'Track attendance carefully',
    ],
  },
  {
    month: 'Month 3-4',
    title: 'Finding Your Rhythm',
    academics: [
      'Prepare for mid-terms',
      'Review notes weekly',
      'Visit library regularly',
      'Clear doubts immediately',
    ],
    social: [
      'Join 2-3 clubs max',
      'Participate in events',
      'Build closer friendships',
      'Start LinkedIn profile',
    ],
    practical: [
      'Manage finances better',
      'Develop healthy eating habits',
      'Exercise routine',
      'Laundry and cleaning schedule',
    ],
  },
  {
    month: 'Month 5-6',
    title: 'End Semester Push',
    academics: [
      'Intensive exam preparation',
      'Complete all assignments',
      'Revision schedules',
      'Previous year papers practice',
    ],
    social: [
      'Balance with exam prep',
      'Study group sessions',
      'Limit social activities',
      'Plan vacation activities',
    ],
    practical: [
      'Exam stress management',
      'Healthy sleep schedule',
      'Backup important files',
      'Travel bookings if needed',
    ],
  },
];

const academicTips = [
  {
    tip: 'Never Miss First Lectures',
    description:
      'First classes set the tone and cover syllabus overview. Professors notice attendance from day one.',
    priority: 'High',
  },
  {
    tip: 'CGPA Matters Most in First Year',
    description:
      'First year CGPA is hardest to improve later. Aim for 8+ if aiming for placements or higher studies.',
    priority: 'High',
  },
  {
    tip: 'NCERT Foundation Still Matters',
    description:
      'Many first-year topics build on school concepts. Revise weak areas from school.',
    priority: 'Medium',
  },
  {
    tip: 'Notes Over Everything',
    description:
      'Write notes during lectures. Rewriting notes helps retention. Digital notes are searchable.',
    priority: 'High',
  },
  {
    tip: 'Clear Doubts Immediately',
    description:
      'Confusion compounds. Visit professors during office hours. Form doubt-clearing groups.',
    priority: 'High',
  },
  {
    tip: 'Previous Year Papers Are Gold',
    description:
      'Exam patterns repeat. PYQs show what professors focus on. Start practicing early.',
    priority: 'High',
  },
  {
    tip: 'Labs Are Easy Marks',
    description:
      'Lab internals are scoring. Prepare viva questions. Submit reports on time.',
    priority: 'Medium',
  },
  {
    tip: 'Attendance Is Mandatory',
    description:
      'Most colleges need 75% minimum. Shortage leads to detention. Track from day one.',
    priority: 'High',
  },
  {
    tip: 'Study Groups Work',
    description:
      'Different people understand different things. Explaining helps your own understanding.',
    priority: 'Medium',
  },
  {
    tip: 'Use Library Resources',
    description:
      'Libraries have textbooks, journals, past papers. Digital resources are often free for students.',
    priority: 'Medium',
  },
];

const hostelTips = [
  {
    tip: 'Choose Roommate Wisely',
    description:
      'If given choice, prefer someone with similar habits. Discuss study hours, sleep time, cleanliness.',
    icon: Users,
  },
  {
    tip: 'Keep Essentials Stocked',
    description:
      'Water, snacks, first-aid, stationery. Midnight hunger is real. Shops close early.',
    icon: Utensils,
  },
  {
    tip: 'Maintain Hygiene',
    description:
      'Clean room weekly. Wash clothes regularly. Messy room = messy mind.',
    icon: Heart,
  },
  {
    tip: 'Lock Your Valuables',
    description:
      'Get a good lock. Keep laptop, phone, documents secure. Dont leave room unlocked.',
    icon: Shield,
  },
  {
    tip: 'Respect Quiet Hours',
    description:
      'Night silence is for everyone. Use headphones. Be considerate of neighbors.',
    icon: Clock,
  },
  {
    tip: 'Mess Card Management',
    description:
      'Dont skip meals. Irregular eating affects health. Pack extras for late nights.',
    icon: Utensils,
  },
  {
    tip: 'Emergency Contacts Ready',
    description:
      'Warden, security, hospital, parents - save all numbers. Share location with family.',
    icon: Phone,
  },
  {
    tip: 'Make Friends on Your Floor',
    description:
      'Neighbors become family. Help each other. Share resources and notes.',
    icon: Users,
  },
];

const clubGuide = [
  {
    type: 'Technical Clubs',
    examples: [
      'Coding Club',
      'Robotics',
      'Electronics',
      'AI/ML',
      'Cyber Security',
    ],
    benefit: 'Build skills, projects for resume, hackathon teams',
    commitment: 'Medium-High',
  },
  {
    type: 'Cultural Clubs',
    examples: ['Music', 'Dance', 'Drama', 'Art', 'Photography'],
    benefit: 'Creative outlet, stress relief, event performances',
    commitment: 'Medium',
  },
  {
    type: 'Sports Clubs',
    examples: ['Cricket', 'Football', 'Basketball', 'Badminton', 'Athletics'],
    benefit: 'Fitness, team spirit, inter-college competitions',
    commitment: 'High',
  },
  {
    type: 'Literary Clubs',
    examples: ['Debate', 'Quiz', 'Creative Writing', 'MUN', 'Public Speaking'],
    benefit: 'Communication skills, confidence, networking',
    commitment: 'Low-Medium',
  },
  {
    type: 'Social Service',
    examples: ['NSS', 'Rotaract', 'Environment', 'Teaching', 'Blood Donation'],
    benefit: 'Social impact, leadership, certificate points',
    commitment: 'Medium',
  },
  {
    type: 'Entrepreneurship',
    examples: ['E-Cell', 'Startup Club', 'Business Club'],
    benefit: 'Business skills, networking, startup exposure',
    commitment: 'Medium-High',
  },
];

const timeManagement = [
  {
    time: '6:00 AM',
    activity: 'Wake up, freshen up',
    tips: 'Early morning = productive day. Avoid snoozing.',
  },
  {
    time: '6:30 AM',
    activity: 'Exercise/Yoga',
    tips: '30 mins physical activity boosts concentration.',
  },
  {
    time: '7:30 AM',
    activity: 'Breakfast',
    tips: 'Never skip breakfast. Energy for the day.',
  },
  {
    time: '8:00 AM',
    activity: 'Classes begin',
    tips: 'Reach 5 mins early. Front bench = focus.',
  },
  {
    time: '1:00 PM',
    activity: 'Lunch break',
    tips: 'Eat well due. Short power nap if needed.',
  },
  {
    time: '2:00 PM',
    activity: 'Afternoon classes',
    tips: 'Post-lunch drowsiness is real. Coffee helps.',
  },
  {
    time: '5:00 PM',
    activity: 'Club activities/Sports',
    tips: 'Physical activity after classes. Refreshes mind.',
  },
  {
    time: '7:00 PM',
    activity: 'Dinner',
    tips: 'Light dinner. Heavy meals affect sleep.',
  },
  {
    time: '8:00 PM',
    activity: 'Self-study',
    tips: 'Prime study time. 2-3 hours focused study.',
  },
  {
    time: '11:00 PM',
    activity: 'Leisure/Preparation',
    tips: 'Next day prep. Light reading. Social media limit.',
  },
  {
    time: '11:30 PM',
    activity: 'Sleep',
    tips: '7-8 hours sleep is non-negotiable for memory.',
  },
];

const commonMistakes = [
  {
    mistake: 'Skipping Classes Regularly',
    why: 'Attendance shortage, missing concepts, professors remember faces. Once habit forms, hard to break.',
    solution: 'Set non-negotiable rule for first month. No proxy, no excuses.',
  },
  {
    mistake: 'Ignoring CGPA in First Year',
    why: 'First year has highest weight in cumulative CGPA. Poor start is very hard to recover from.',
    solution: 'Treat first year as foundation. Aim for 8+ even if its harder.',
  },
  {
    mistake: 'Too Many Clubs',
    why: 'Spreading thin. Academics suffer. No deep involvement anywhere. Burnout risk.',
    solution:
      'Join 2-3 clubs maximum. Go deep, not wide. Quality over quantity.',
  },
  {
    mistake: 'All-Nighters Before Exams',
    why: 'Sleep is when memory consolidates. Last-minute cramming forgets fast. Health suffers.',
    solution:
      'Start revision early. Never pull all-nighters. Trust prepared brain.',
  },
  {
    mistake: 'Not Building Network Early',
    why: 'Seniors have notes, advice, referrals. Batchmates become colleagues. Network is net worth.',
    solution:
      'Talk to seniors. Help batchmates. Attend all social events initially.',
  },
  {
    mistake: 'Only Hanging Out With School Friends',
    why: 'Comfort zone limits growth. Diverse friendships expose to new ideas. College is fresh start.',
    solution:
      'Make effort to meet new people. Join activities outside comfort zone.',
  },
  {
    mistake: 'Ignoring Health & Fitness',
    why: 'Sedentary lifestyle, mess food, stress - health declines fast. Affects academics and mood.',
    solution: 'Exercise daily. Sleep 7-8 hours. Eat healthy. Join sports club.',
  },
  {
    mistake: 'Being in Room All Time',
    why: 'Isolation affects mental health. Miss opportunities. Become invisible to others.',
    solution: 'Study in library. Join activities. Have meals with others.',
  },
  {
    mistake: 'Not Asking for Help',
    why: 'Pretending to know costs more than asking. Everyone was clueless once. No stupid questions.',
    solution: 'Ask seniors. Ask professors. Ask classmates. Google. Forums.',
  },
  {
    mistake: 'Comparing With Others',
    why: 'Everyone has different backgrounds. Comparison is thief of joy. Focus on own growth.',
    solution:
      'Track own progress. Compete with yesterday self. Celebrate small wins.',
  },
];

const firstWeekChecklist = [
  {
    item: 'Get ID card and library card',
    category: 'Documents',
    priority: 'Day 1',
  },
  {
    item: 'Complete hostel registration',
    category: 'Hostel',
    priority: 'Day 1',
  },
  {
    item: 'Locate important places - library, canteen, admin office',
    category: 'Campus',
    priority: 'Day 1-2',
  },
  {
    item: 'Buy essential stationery',
    category: 'Supplies',
    priority: 'Day 1-3',
  },
  { item: 'Set up study space in room', category: 'Hostel', priority: 'Day 2' },
  {
    item: 'Introduce yourself to neighbors',
    category: 'Social',
    priority: 'Day 1-3',
  },
  {
    item: 'Attend all orientation sessions',
    category: 'Academic',
    priority: 'As scheduled',
  },
  {
    item: 'Join class WhatsApp/Telegram groups',
    category: 'Social',
    priority: 'Day 1',
  },
  { item: 'Explore campus thoroughly', category: 'Campus', priority: 'Week 1' },
  {
    item: 'Register for courses/subjects',
    category: 'Academic',
    priority: 'As required',
  },
  {
    item: 'Meet academic advisor/faculty mentor',
    category: 'Academic',
    priority: 'Week 1',
  },
  {
    item: 'Understand mess timings and rules',
    category: 'Hostel',
    priority: 'Day 1',
  },
  {
    item: 'Know emergency contacts and procedures',
    category: 'Safety',
    priority: 'Day 1',
  },
  {
    item: 'Set up bank account if needed',
    category: 'Finance',
    priority: 'Week 1-2',
  },
];

const skillsToDevelop = [
  {
    skill: 'Time Management',
    why: 'College has no hand-holding. You manage your own schedule.',
    how: 'Use calendar apps. Set deadlines. Track habits.',
  },
  {
    skill: 'Note-Taking',
    why: 'College lectures are fast. Information dense. No repeat classes.',
    how: 'Learn Cornell method. Use digital tools. Review same day.',
  },
  {
    skill: 'Self-Discipline',
    why: 'No parents to monitor. Easy to slack. Success needs discipline.',
    how: 'Set rules. Follow schedule. Build habits.',
  },
  {
    skill: 'Communication',
    why: 'Presentations, viva, interviews - all need speaking skills.',
    how: 'Join debate club. Speak in class. Practice with friends.',
  },
  {
    skill: 'Digital Literacy',
    why: 'College uses LMS, online submissions, digital resources.',
    how: 'Learn MS Office. Google Suite. Basic research skills.',
  },
  {
    skill: 'Problem Solving',
    why: 'Engineering is about solving problems. Real world is ambiguous.',
    how: 'Practice puzzles. Competitive coding. Analytical thinking.',
  },
  {
    skill: 'Networking',
    why: 'Opportunities come through people. Jobs, projects, advice.',
    how: 'Talk to seniors. Attend events. LinkedIn profile.',
  },
  {
    skill: 'Financial Literacy',
    why: 'Managing money, budgeting, understanding salary structures.',
    how: 'Track expenses. Learn about taxes. Start SIP if possible.',
  },
];

const faqs = [
  {
    question: 'How important is first year CGPA?',
    answer:
      'Very important! First year CGPA has highest weight in cumulative average. Many companies have 7.0-7.5 cutoff. Higher studies need good CGPA. First year is base - hard to improve later. Aim for 8+ if targeting top companies or MS abroad.',
  },
  {
    question: 'Should I join coaching for competitive exams in first year?',
    answer:
      'For JEE/NEET droppers, focus on college first. For GATE/CAT aspirants, first year is too early - focus on academics. Build foundation first. Second-third year is better for competitive prep. Exception: coding practice can start from day 1.',
  },
  {
    question: 'How to deal with homesickness?',
    answer:
      'Very common in first few weeks. Stay busy. Call family regularly but not too often. Make friends. Join activities. It gets better after a month. If severe, talk to counselor. Everyone goes through it.',
  },
  {
    question: 'Should I buy a laptop in first year?',
    answer:
      'Yes, laptops are essential for most courses. Wait first month to understand requirements. Budget laptops work for most. For CS/Design - invest in good specs. Many students manage with college labs initially.',
  },
  {
    question: 'How to balance academics and social life?',
    answer:
      'Block study hours (3-4 hours daily). Weekend flexibility. Join 2-3 clubs max. Avoid time-wasting activities. Quality social time > quantity. Study groups combine both. First semester - prioritize academics slightly more.',
  },
  {
    question: 'What if I dont like my branch/course?',
    answer:
      'Give it one semester. Every branch has boring and interesting parts. Branch change is possible in some colleges (after 1st year, needs good CGPA). Minor degrees are option. Skills matter more than branch for many careers.',
  },
  {
    question: 'How to make friends in college?',
    answer:
      'Be approachable. Smile. Say yes to activities. Join clubs. Study in groups. Eat together. Help others. Attend events. Initiate conversations. Quality matters more than quantity. True friendships take time.',
  },
  {
    question: 'Is it okay to take backlogs in first year?',
    answer:
      'Avoid if possible. Backlogs compound (you study new subjects + clear old). Some companies reject students with backlogs. However, one backlog is not career-ending - focus on clearing immediately and improving.',
  },
  {
    question: 'How much money do I need monthly?',
    answer:
      'Depends on location and lifestyle. Average: ₹10-15k (basic) to ₹20-30k (comfortable). Hostel mess: ₹3-5k. Canteen/outside: ₹3-5k. Stationery/prints: ₹500-1k. Outings/entertainment: ₹2-5k. Emergency buffer: ₹2-3k.',
  },
  {
    question: 'Should I learn coding in first year?',
    answer:
      'Yes, if youre in CS/IT/ECE or targeting software roles. Start with one language (Python/C++). Focus on basics and DSA. 1-2 hours daily is enough. For non-CS branches, basic programming helps but not mandatory.',
  },
];

export default function FirstYearGuidePage() {
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
        name: 'College',
        item: 'https://sproutern.dpdns.org/college',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'First Year Guide',
        item: 'https://sproutern.dpdns.org/college/first-year-guide',
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
            <Star className="mr-1 h-3 w-3" />
            Essential Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            First Year College Survival Guide
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Everything you need to ace your first year - from academics to
            hostel life, clubs to career prep. Start your college journey right!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#academics">Academics</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <a href="#hostel">Hostel Tips</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <a href="#mistakes">Avoid Mistakes</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold">50+</p>
              <p className="text-xs text-muted-foreground">Actionable Tips</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Target className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold">8+</p>
              <p className="text-xs text-muted-foreground">Target CGPA</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Trophy className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold">2-3</p>
              <p className="text-xs text-muted-foreground">Clubs to Join</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Clock className="h-8 w-8 text-orange-600" />
            <div>
              <p className="text-2xl font-bold">7-8h</p>
              <p className="text-xs text-muted-foreground">Sleep Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Month by Month Guide */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calendar className="h-4 w-4" />
            Month-by-Month
          </div>
          <h2 className="mb-2 text-3xl font-bold">First Semester Roadmap</h2>
          <p className="text-muted-foreground">What to focus on each month</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {monthByMonthGuide.map((month, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="mb-1 text-xl font-bold text-primary">
                  {month.month}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {month.title}
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      Academics
                    </h4>
                    <ul className="space-y-1">
                      {month.academics.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs"
                        >
                          <CheckCircle className="mt-0.5 h-3 w-3 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                      <Users className="h-4 w-4 text-purple-600" />
                      Social
                    </h4>
                    <ul className="space-y-1">
                      {month.social.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs"
                        >
                          <CheckCircle className="mt-0.5 h-3 w-3 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                      <Target className="h-4 w-4 text-orange-600" />
                      Practical
                    </h4>
                    <ul className="space-y-1">
                      {month.practical.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs"
                        >
                          <CheckCircle className="mt-0.5 h-3 w-3 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Academic Tips */}
      <section
        id="academics"
        className="container bg-muted/30 py-12"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <BookOpen className="h-4 w-4" />
            Academics
          </div>
          <h2 className="mb-2 text-3xl font-bold">Academic Success Tips</h2>
          <p className="text-muted-foreground">
            How to maintain good CGPA while enjoying college
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {academicTips.map((tip, i) => (
            <Card
              key={i}
              className={
                tip.priority === 'High' ? 'border-l-4 border-l-red-500' : ''
              }
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{tip.tip}</h3>
                  <Badge
                    variant={
                      tip.priority === 'High' ? 'destructive' : 'secondary'
                    }
                  >
                    {tip.priority}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hostel Tips */}
      <section
        id="hostel"
        className="container py-12"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
            <Home className="h-4 w-4" />
            Hostel Life
          </div>
          <h2 className="mb-2 text-3xl font-bold">Hostel Survival Tips</h2>
          <p className="text-muted-foreground">
            Make your hostel feel like home
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {hostelTips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-start gap-3 p-4">
                <div className="rounded-lg bg-green-50 p-2 dark:bg-green-950">
                  <tip.icon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{tip.tip}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Club Guide */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
            <Trophy className="h-4 w-4" />
            Extra-Curriculars
          </div>
          <h2 className="mb-2 text-3xl font-bold">Club Selection Guide</h2>
          <p className="text-muted-foreground">
            Which clubs to join (and how many)
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clubGuide.map((club, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">{club.type}</h3>
                <div className="mb-3 flex flex-wrap gap-1">
                  {club.examples.map((ex, j) => (
                    <Badge
                      key={j}
                      variant="outline"
                      className="text-xs"
                    >
                      {ex}
                    </Badge>
                  ))}
                </div>
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-medium">Benefit:</span> {club.benefit}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Commitment:</span>{' '}
                  <span className="text-primary">{club.commitment}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Card className="mx-auto max-w-2xl border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
            <CardContent className="flex items-center gap-3 p-4">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-600" />
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Golden Rule:</strong> Join maximum 2-3 clubs. Going deep
                in 2 clubs is better than surface-level involvement in 5.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Time Management */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-950 dark:text-orange-300">
            <Clock className="h-4 w-4" />
            Time Management
          </div>
          <h2 className="mb-2 text-3xl font-bold">Ideal Daily Schedule</h2>
          <p className="text-muted-foreground">
            Sample routine for a productive day
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background">
            <thead>
              <tr className="bg-muted">
                <th className="w-24 p-3 text-left font-semibold">Time</th>
                <th className="p-3 text-left font-semibold">Activity</th>
                <th className="p-3 text-left font-semibold">Tips</th>
              </tr>
            </thead>
            <tbody>
              {timeManagement.map((slot, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-muted/50"
                >
                  <td className="p-3 font-mono font-medium text-primary">
                    {slot.time}
                  </td>
                  <td className="p-3 font-medium">{slot.activity}</td>
                  <td className="p-3 text-sm text-muted-foreground">
                    {slot.tips}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Common Mistakes */}
      <section
        id="mistakes"
        className="container bg-red-50/50 py-12 dark:bg-red-950/20"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-950 dark:text-red-300">
            <AlertTriangle className="h-4 w-4" />
            Avoid These
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Common First Year Mistakes
          </h2>
          <p className="text-muted-foreground">Learn from others experience</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {commonMistakes.map((item, i) => (
            <Card
              key={i}
              className="border-red-200 dark:border-red-900"
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 dark:bg-red-900">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-red-700 dark:text-red-300">
                      {item.mistake}
                    </h3>
                    <p className="mb-2 mt-1 text-sm text-muted-foreground">
                      {item.why}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-green-600">
                        Solution:
                      </span>{' '}
                      {item.solution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* First Week Checklist */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Target className="h-4 w-4" />
            Checklist
          </div>
          <h2 className="mb-2 text-3xl font-bold">First Week Checklist</h2>
          <p className="text-muted-foreground">
            Things to complete in your first week
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardContent className="space-y-3 p-6">
              {firstWeekChecklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted/50"
                >
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded"
                  />
                  <div className="flex-1">
                    <span className="font-medium">{item.item}</span>
                    <Badge
                      variant="outline"
                      className="ml-2 text-xs"
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {item.priority}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills to Develop */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Skills to Develop in First Year
          </h2>
          <p className="text-muted-foreground">
            Beyond academics - life skills that matter
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillsToDevelop.map((skill, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-2 font-bold">{skill.skill}</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-medium">Why:</span> {skill.why}
                </p>
                <p className="text-sm">
                  <span className="font-medium text-primary">How:</span>{' '}
                  {skill.how}
                </p>
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
            <GraduationCap className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Need More Guidance?</h2>
            <p className="mb-6 opacity-90">
              Explore our tools and resources to make your college journey
              successful.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/college/semester-planner">
                  Semester Planner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/tools/cgpa-converter">CGPA Calculator</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
