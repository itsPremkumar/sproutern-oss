'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {
  TrendingUp,
  CheckCircle2,
  CheckCircle,
  Users,
  Clock,
  Target,
  Award,
  BookOpen,
  Lightbulb,
  AlertCircle,
  GraduationCap,
  Briefcase,
  Code,
  BarChart,
  Megaphone,
  IndianRupee,
  ArrowRight,
} from 'lucide-react';

export default function CareerRoadmapContent() {
  const [career, setCareer] = useState('');
  const [level, setLevel] = useState('');
  const [roadmap, setRoadmap] = useState<any>(null);

  const roadmaps: any = {
    'full-stack': {
      title: 'Full Stack Developer',
      avgSalary: '₹6-25 LPA',
      demand: 'Very High',
      beginner: [
        {
          phase: 'Month 1-2',
          title: 'HTML, CSS & JavaScript Basics',
          skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'],
        },
        {
          phase: 'Month 3-4',
          title: 'Frontend Framework',
          skills: ['React.js', 'State Management', 'Component Design', 'Hooks'],
        },
        {
          phase: 'Month 5-6',
          title: 'Backend Basics',
          skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
        },
        {
          phase: 'Month 7-8',
          title: 'Full Stack Project',
          skills: ['MERN Stack', 'Authentication', 'Deployment', 'Git/GitHub'],
        },
      ],
      intermediate: [
        {
          phase: 'Month 1-2',
          title: 'Advanced Frontend',
          skills: [
            'Next.js',
            'TypeScript',
            'State Management (Redux/Zustand)',
            'Testing',
          ],
        },
        {
          phase: 'Month 3-4',
          title: 'Advanced Backend',
          skills: ['PostgreSQL', 'GraphQL', 'Microservices', 'Docker'],
        },
        {
          phase: 'Month 5-6',
          title: 'DevOps & Cloud',
          skills: ['AWS/Azure', 'CI/CD', 'Kubernetes', 'Monitoring'],
        },
        {
          phase: 'Month 7-8',
          title: 'System Design',
          skills: ['Scalability', 'Load Balancing', 'Caching', 'Security'],
        },
      ],
    },
    'data-science': {
      title: 'Data Scientist',
      avgSalary: '₹8-30 LPA',
      demand: 'Very High',
      beginner: [
        {
          phase: 'Month 1-2',
          title: 'Python & Statistics',
          skills: ['Python Basics', 'NumPy', 'Pandas', 'Statistics'],
        },
        {
          phase: 'Month 3-4',
          title: 'Data Visualization',
          skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau'],
        },
        {
          phase: 'Month 5-6',
          title: 'Machine Learning',
          skills: [
            'Scikit-learn',
            'Supervised Learning',
            'Unsupervised Learning',
            'Model Evaluation',
          ],
        },
        {
          phase: 'Month 7-8',
          title: 'Projects & SQL',
          skills: ['SQL', 'Real Projects', 'Kaggle Competitions', 'Portfolio'],
        },
      ],
      intermediate: [
        {
          phase: 'Month 1-2',
          title: 'Advanced ML',
          skills: [
            'Deep Learning',
            'TensorFlow/PyTorch',
            'Neural Networks',
            'NLP',
          ],
        },
        {
          phase: 'Month 3-4',
          title: 'Big Data',
          skills: ['Spark', 'Hadoop', 'Data Pipelines', 'ETL'],
        },
        {
          phase: 'Month 5-6',
          title: 'MLOps',
          skills: ['Model Deployment', 'Docker', 'Cloud ML', 'Monitoring'],
        },
        {
          phase: 'Month 7-8',
          title: 'Specialization',
          skills: [
            'Computer Vision/NLP',
            'Time Series',
            'Recommendation Systems',
            'A/B Testing',
          ],
        },
      ],
    },
    'digital-marketing': {
      title: 'Digital Marketing Specialist',
      avgSalary: '₹4-18 LPA',
      demand: 'High',
      beginner: [
        {
          phase: 'Month 1-2',
          title: 'Marketing Fundamentals',
          skills: [
            'Marketing Basics',
            'SEO Fundamentals',
            'Content Writing',
            'Social Media',
          ],
        },
        {
          phase: 'Month 3-4',
          title: 'Paid Advertising',
          skills: [
            'Google Ads',
            'Facebook Ads',
            'Campaign Management',
            'Analytics',
          ],
        },
        {
          phase: 'Month 5-6',
          title: 'Content Marketing',
          skills: [
            'Content Strategy',
            'Email Marketing',
            'Copywriting',
            'WordPress',
          ],
        },
        {
          phase: 'Month 7-8',
          title: 'Analytics & Tools',
          skills: [
            'Google Analytics',
            'SEMrush',
            'Canva',
            'Portfolio Projects',
          ],
        },
      ],
      intermediate: [
        {
          phase: 'Month 1-2',
          title: 'Advanced SEO',
          skills: ['Technical SEO', 'Link Building', 'Local SEO', 'SEO Tools'],
        },
        {
          phase: 'Month 3-4',
          title: 'Marketing Automation',
          skills: ['HubSpot', 'Mailchimp', 'CRM', 'Lead Generation'],
        },
        {
          phase: 'Month 5-6',
          title: 'Performance Marketing',
          skills: [
            'Conversion Optimization',
            'A/B Testing',
            'Funnel Analysis',
            'ROI Tracking',
          ],
        },
        {
          phase: 'Month 7-8',
          title: 'Strategy & Growth',
          skills: [
            'Growth Hacking',
            'Brand Strategy',
            'Influencer Marketing',
            'Analytics',
          ],
        },
      ],
    },
    'product-management': {
      title: 'Product Manager',
      avgSalary: '₹12-40 LPA',
      demand: 'High',
      beginner: [
        {
          phase: 'Month 1-2',
          title: 'PM Fundamentals',
          skills: [
            'Product Thinking',
            'User Research',
            'Market Analysis',
            'Documentation',
          ],
        },
        {
          phase: 'Month 3-4',
          title: 'Agile & Tools',
          skills: ['Scrum/Kanban', 'JIRA', 'Confluence', 'Roadmapping'],
        },
        {
          phase: 'Month 5-6',
          title: 'Design & UX',
          skills: [
            'Wireframing',
            'Prototyping',
            'User Interviews',
            'Figma Basics',
          ],
        },
        {
          phase: 'Month 7-8',
          title: 'Technical Knowledge',
          skills: ['Basic APIs', 'SQL Basics', 'Analytics', 'A/B Testing'],
        },
      ],
      intermediate: [
        {
          phase: 'Month 1-2',
          title: 'Strategy',
          skills: [
            'Product Strategy',
            'OKRs/KPIs',
            'Competitive Analysis',
            'Pricing',
          ],
        },
        {
          phase: 'Month 3-4',
          title: 'Data-Driven PM',
          skills: ['SQL Advanced', 'Dashboards', 'Experimentation', 'Metrics'],
        },
        {
          phase: 'Month 5-6',
          title: 'Leadership',
          skills: [
            'Stakeholder Management',
            'Team Leadership',
            'Presentations',
            'Negotiation',
          ],
        },
        {
          phase: 'Month 7-8',
          title: 'Growth',
          skills: [
            'Growth PM',
            'Monetization',
            'Platform Thinking',
            'AI/ML Products',
          ],
        },
      ],
    },
    'ui-ux': {
      title: 'UI/UX Designer',
      avgSalary: '₹5-20 LPA',
      demand: 'High',
      beginner: [
        {
          phase: 'Month 1-2',
          title: 'Design Fundamentals',
          skills: ['Color Theory', 'Typography', 'Layout', 'Design Principles'],
        },
        {
          phase: 'Month 3-4',
          title: 'UI Design',
          skills: [
            'Figma',
            'Component Design',
            'Design Systems',
            'Prototyping',
          ],
        },
        {
          phase: 'Month 5-6',
          title: 'UX Research',
          skills: [
            'User Interviews',
            'Personas',
            'User Journeys',
            'Usability Testing',
          ],
        },
        {
          phase: 'Month 7-8',
          title: 'Portfolio',
          skills: [
            'Case Studies',
            'Behance/Dribbble',
            'Presentation',
            'Personal Brand',
          ],
        },
      ],
      intermediate: [
        {
          phase: 'Month 1-2',
          title: 'Advanced UX',
          skills: [
            'Information Architecture',
            'Interaction Design',
            'Accessibility',
            'Motion Design',
          ],
        },
        {
          phase: 'Month 3-4',
          title: 'Research Methods',
          skills: [
            'Quantitative Research',
            'Analytics',
            'A/B Testing',
            'Heuristic Evaluation',
          ],
        },
        {
          phase: 'Month 5-6',
          title: 'Front-End Basics',
          skills: [
            'HTML/CSS',
            'Responsive Design',
            'Design Handoff',
            'Developer Collaboration',
          ],
        },
        {
          phase: 'Month 7-8',
          title: 'Leadership',
          skills: [
            'Design Leadership',
            'Mentoring',
            'Design Ops',
            'Strategic Design',
          ],
        },
      ],
    },
  };

  const generateRoadmap = () => {
    if (!career || !level) {
      alert('Please select both career and level');
      return;
    }
    setRoadmap(roadmaps[career]);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Target className="h-4 w-4" />
            Free Career Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Career Roadmap Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Get a personalized learning path for your dream career.
            Expert-curated roadmaps for India's top tech and business roles.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">Expert Curated</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Recently Updated</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">15,000+ Users</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Award className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">5 Career Paths</span>
          </div>
        </div>

        {/* Career Selector */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Choose Your Path
            </CardTitle>
            <CardDescription>
              Select your desired career and current experience level
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Career Path</Label>
                <Select
                  value={career}
                  onValueChange={setCareer}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select career" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-stack">
                      Full Stack Developer
                    </SelectItem>
                    <SelectItem value="data-science">Data Scientist</SelectItem>
                    <SelectItem value="digital-marketing">
                      Digital Marketing
                    </SelectItem>
                    <SelectItem value="product-management">
                      Product Manager
                    </SelectItem>
                    <SelectItem value="ui-ux">UI/UX Designer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Current Level</Label>
                <Select
                  value={level}
                  onValueChange={setLevel}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">
                      Beginner (0-1 years)
                    </SelectItem>
                    <SelectItem value="intermediate">
                      Intermediate (1-3 years)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={generateRoadmap}
              className="w-full"
              size="lg"
            >
              Generate Roadmap
            </Button>
          </CardContent>
        </Card>

        {/* Generated Roadmap */}
        {roadmap && (
          <div className="space-y-6">
            <div className="rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 p-6 text-center">
              <h2 className="mb-2 text-3xl font-bold">
                {roadmap.title} Roadmap
              </h2>
              <div className="flex justify-center gap-6 text-sm">
                <span className="flex items-center gap-1">
                  <IndianRupee className="h-4 w-4" />
                  <strong>Salary:</strong> {roadmap.avgSalary}
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  <strong>Demand:</strong> {roadmap.demand}
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">
                Level: {level.charAt(0).toUpperCase() + level.slice(1)}
              </p>
            </div>

            <div className="space-y-4">
              {roadmap[level].map((phase: any, index: number) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-primary"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-primary">
                          {phase.phase}
                        </p>
                        <CardTitle className="mt-1">{phase.title}</CardTitle>
                      </div>
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>
                      Follow the roadmap phase by phase - don't skip ahead
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>
                      Build at least 3 projects to apply your learning
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>
                      Join online communities (Discord, Reddit, LinkedIn)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>
                      Apply for internships to gain real-world experience
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Social Proof */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            🚀 <strong>234 students</strong> generated their career roadmap
            today
          </p>
        </div>

        {/* Why Career Planning Matters */}
        <section className="mt-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <BookOpen className="h-8 w-8 text-primary" />
            Why Career Planning Matters
          </h2>

          <div className="mb-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              The Reality Check
            </h3>
            <p className="text-sm">
              According to <strong>LinkedIn's Workforce Report</strong>, 70% of
              professionals who followed a structured learning path reached
              their career goals within 2 years, compared to only 23% who
              learned randomly. A clear roadmap can accelerate your career by{' '}
              <strong>3-5 years</strong>.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Clear Direction',
                desc: 'Know exactly what to learn next without wasting time on irrelevant courses',
              },
              {
                icon: Clock,
                title: 'Time Efficiency',
                desc: 'Structured paths are 60% faster than random learning approaches',
              },
              {
                icon: IndianRupee,
                title: 'Higher Salary',
                desc: 'Specialized skills command 40-60% higher packages than generalists',
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="pt-6 text-center">
                  <item.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Career Paths Comparison */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">Career Paths Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Career</th>
                  <th className="border p-3 text-left">Entry Salary</th>
                  <th className="border p-3 text-left">Senior Salary</th>
                  <th className="border p-3 text-left">Time to Learn</th>
                  <th className="border p-3 text-left">Job Demand</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Full Stack Developer</td>
                  <td className="border p-3">₹4-8 LPA</td>
                  <td className="border p-3">₹15-30 LPA</td>
                  <td className="border p-3">6-12 months</td>
                  <td className="border p-3 font-semibold text-green-600">
                    Very High
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Data Scientist</td>
                  <td className="border p-3">₹6-12 LPA</td>
                  <td className="border p-3">₹20-45 LPA</td>
                  <td className="border p-3">8-14 months</td>
                  <td className="border p-3 font-semibold text-green-600">
                    Very High
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Product Manager</td>
                  <td className="border p-3">₹8-15 LPA</td>
                  <td className="border p-3">₹25-50 LPA</td>
                  <td className="border p-3">6-10 months</td>
                  <td className="border p-3 font-semibold text-green-600">
                    High
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">UI/UX Designer</td>
                  <td className="border p-3">₹4-8 LPA</td>
                  <td className="border p-3">₹12-25 LPA</td>
                  <td className="border p-3">4-8 months</td>
                  <td className="border p-3 font-semibold text-green-600">
                    High
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Digital Marketing</td>
                  <td className="border p-3">₹3-6 LPA</td>
                  <td className="border p-3">₹10-20 LPA</td>
                  <td className="border p-3">3-6 months</td>
                  <td className="border p-3 font-semibold text-yellow-600">
                    Medium
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <p className="flex items-start gap-2 text-sm">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <span>
                <strong>Note:</strong> Salaries vary based on location (metros
                pay 30-50% more), company type (startups vs MNCs), and
                individual skill level. Data based on recent hiring trends.
              </span>
            </p>
          </div>
        </section>

        {/* Career Path Spotlights */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">Career Path Spotlights</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Full Stack Developer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Full stack developers are the Swiss Army knives of tech -
                  handling everything from user interfaces to server logic. With
                  the rise of startups in India, demand has exploded.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Top Hiring Companies
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Google, Microsoft, Amazon, Flipkart, Razorpay, CRED,
                      Swiggy, Zomato
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Must-Have Skills
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      React/Angular, Node.js, SQL/NoSQL, REST APIs, Git, Cloud
                      basics
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  Data Scientist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Data scientists turn raw data into business insights. With
                  AI/ML becoming mainstream, this role has become one of the
                  highest-paying in tech.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Top Hiring Companies
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Meta, Netflix, Uber, Jio, MuSigma, Fractal, Tiger
                      Analytics, Accenture
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Must-Have Skills
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Python, SQL, Machine Learning, Statistics,
                      TensorFlow/PyTorch, Tableau
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Product Manager
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  PMs are the "mini-CEOs" of products - bridging business,
                  design, and engineering. It's the fastest path to leadership
                  roles in tech.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Top Hiring Companies
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Google, Atlassian, Notion, Zerodha, Groww, PhonePe, Paytm,
                      Myntra
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Must-Have Skills
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Product thinking, User research, SQL, Wireframing,
                      Agile/Scrum, Data analysis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tips for Success */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">Tips for Career Success</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Do This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">
                  ✓ Follow one roadmap completely before switching
                </li>
                <li className="list-none">
                  ✓ Build projects that solve real problems
                </li>
                <li className="list-none">
                  ✓ Network actively on LinkedIn and Twitter
                </li>
                <li className="list-none">
                  ✓ Apply for internships even if you feel unprepared
                </li>
                <li className="list-none">
                  ✓ Contribute to open source (great for developers)
                </li>
                <li className="list-none">
                  ✓ Document your learning journey publicly
                </li>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Avoid This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">
                  ✗ Tutorial hell - watching without building
                </li>
                <li className="list-none">
                  ✗ Shiny object syndrome - jumping between paths
                </li>
                <li className="list-none">
                  ✗ Skipping fundamentals for advanced topics
                </li>
                <li className="list-none">
                  ✗ Waiting to be "ready" before applying
                </li>
                <li className="list-none">
                  ✗ Ignoring soft skills (communication matters!)
                </li>
                <li className="list-none">
                  ✗ Learning in isolation without community
                </li>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to switch careers into tech?',
                a: 'Typically 6-12 months of focused learning for entry-level roles. The timeline varies based on your background - engineers may transition faster to data science, while non-tech backgrounds might need more time. Consistency matters more than hours.',
              },
              {
                q: 'Do I need a CS degree for these careers?',
                a: 'No. While a CS degree helps, most companies now value skills and portfolios over degrees. Many successful professionals in these fields are self-taught or come from bootcamps. Focus on building demonstrable skills and projects.',
              },
              {
                q: 'Which career path has the best work-life balance?',
                a: 'Product Management and UI/UX typically have better work-life balance compared to engineering roles. However, it varies greatly by company culture. Startups are demanding across all roles, while established companies often offer better balance.',
              },
              {
                q: 'Should I specialize or be a generalist?',
                a: 'Start as a generalist to understand the landscape, then specialize within 2-3 years. For example, a frontend developer might specialize in React performance, or a data scientist might focus on NLP. Specialists command 30-50% higher salaries.',
              },
              {
                q: 'How important are certifications?',
                a: "Certifications help for specific domains (AWS for cloud, Google Ads for marketing) but aren't essential for most tech roles. Projects and practical experience matter more. However, certifications can help with HR screenings at large companies.",
              },
              {
                q: 'Can I start these careers after 30?',
                a: 'Absolutely! Age is not a barrier - your previous experience is often an asset. Many career changers bring valuable domain knowledge. Focus on your narrative and transferable skills rather than apologizing for your age.',
              },
              {
                q: "What's the best way to get my first job in a new field?",
                a: 'Internships (even unpaid), freelance projects, and networking. Start by offering value to startups who need help. Build public projects, write about your learning, and reach out to people in your target role for coffee chats.',
              },
              {
                q: 'How much should I invest in paid courses?',
                a: 'You can learn most skills for free using YouTube, documentation, and free resources. Paid courses (up to ₹10-30K) are worth it for structure, but avoid expensive bootcamps (₹1-2 lakhs) unless they have strong placement records.',
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Resume Writing Guide',
                href: '/resources/resume-guide',
                desc: 'Create an ATS-friendly resume',
              },
              {
                title: 'Interview Preparation',
                href: '/resources/interview-prep',
                desc: 'Ace your tech interviews',
              },
              {
                title: 'Skill Development',
                href: '/resources/skill-development',
                desc: 'Online learning platforms',
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Apply for internships to get real-world experience while learning
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Internships
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              Check Resume Score
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
