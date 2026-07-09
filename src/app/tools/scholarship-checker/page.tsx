'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  GraduationCap,
  Globe,
  Banknote,
  Target,
  CheckCircle,
  XCircle,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ScholarshipCriteria {
  minPercentage: number;
  maxFamilyIncome: number; // in lakhs, 0 means no limit
  category: string[];
  level: string[];
  gender: string;
  state: string[];
}

interface Scholarship {
  name: string;
  provider: string;
  amount: string;
  type: string;
  eligibility: ScholarshipCriteria;
  deadline: string;
  link: string;
}

const scholarships: Scholarship[] = [
  {
    name: 'National Talent Search Examination (NTSE)',
    provider: 'NCERT',
    amount: '₹1,250-2,000/month',
    type: 'Government',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Class 10'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'November',
    link: 'https://ncert.nic.in/national-talent-examination.php',
  },
  {
    name: 'INSPIRE Scholarship',
    provider: 'Department of Science & Technology',
    amount: '₹80,000/year',
    type: 'Government',
    eligibility: {
      minPercentage: 90,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Class 12', 'Undergraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'Ongoing',
    link: 'https://online-inspire.gov.in/',
  },
  {
    name: 'Central Sector Scheme of Scholarships',
    provider: 'Ministry of Education',
    amount: '₹10,000-20,000/year',
    type: 'Government',
    eligibility: {
      minPercentage: 80,
      maxFamilyIncome: 8,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Undergraduate', 'Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'October-November',
    link: 'https://scholarships.gov.in/',
  },
  {
    name: 'Post-Matric Scholarship for SC Students',
    provider: 'Ministry of Social Justice',
    amount: 'Full tuition + maintenance',
    type: 'Government',
    eligibility: {
      minPercentage: 50,
      maxFamilyIncome: 2.5,
      category: ['SC'],
      level: ['Class 11', 'Class 12', 'Undergraduate', 'Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'September-November',
    link: 'https://scholarships.gov.in/',
  },
  {
    name: 'Post-Matric Scholarship for ST Students',
    provider: 'Ministry of Tribal Affairs',
    amount: 'Full tuition + maintenance',
    type: 'Government',
    eligibility: {
      minPercentage: 50,
      maxFamilyIncome: 2.5,
      category: ['ST'],
      level: ['Class 11', 'Class 12', 'Undergraduate', 'Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'September-November',
    link: 'https://scholarships.gov.in/',
  },
  {
    name: 'Post-Matric Scholarship for OBC Students',
    provider: 'Ministry of Social Justice',
    amount: 'Full tuition + maintenance',
    type: 'Government',
    eligibility: {
      minPercentage: 50,
      maxFamilyIncome: 1.5,
      category: ['OBC'],
      level: ['Class 11', 'Class 12', 'Undergraduate', 'Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'September-November',
    link: 'https://scholarships.gov.in/',
  },
  {
    name: 'Pragati Scholarship for Girls',
    provider: 'AICTE',
    amount: '₹50,000/year',
    type: 'Government',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 8,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Undergraduate'],
      gender: 'Female',
      state: ['All States'],
    },
    deadline: 'December',
    link: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati',
  },
  {
    name: 'Saksham Scholarship',
    provider: 'AICTE',
    amount: '₹50,000/year',
    type: 'Government',
    eligibility: {
      minPercentage: 50,
      maxFamilyIncome: 8,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Undergraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'December',
    link: 'https://www.aicte-india.org/schemes/students-development-schemes/Saksham',
  },
  {
    name: 'GATE Scholarship',
    provider: 'AICTE/MHRD',
    amount: '₹12,400/month',
    type: 'Government',
    eligibility: {
      minPercentage: 0,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'Based on GATE',
    link: 'https://gate.iitd.ac.in/',
  },
  {
    name: 'Prime Minister Research Fellowship',
    provider: 'Ministry of Education',
    amount: '₹70,000-80,000/month',
    type: 'Government',
    eligibility: {
      minPercentage: 80,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['PhD'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'May & October',
    link: 'https://www.pmrf.in/',
  },
  {
    name: 'Reliance Foundation Scholarship',
    provider: 'Reliance Foundation',
    amount: 'Up to ₹6 lakh',
    type: 'Private',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Undergraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'Varies',
    link: 'https://www.scholarships.reliancefoundation.org/',
  },
  {
    name: 'Aditya Birla Scholarship',
    provider: 'Aditya Birla Group',
    amount: '₹1.8-2.65 lakh/year',
    type: 'Corporate',
    eligibility: {
      minPercentage: 85,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Undergraduate', 'Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'August',
    link: 'https://www.adityabirlascholars.net/',
  },
  {
    name: 'Fulbright-Nehru Scholarship',
    provider: 'USIEF',
    amount: 'Full funding (USA)',
    type: 'International',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate', 'PhD'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'May-June',
    link: 'https://www.usief.org.in/',
  },
  {
    name: 'Chevening Scholarship',
    provider: 'UK Government',
    amount: 'Full funding (UK)',
    type: 'International',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'November',
    link: 'https://www.chevening.org/',
  },
  {
    name: 'DAAD Scholarship',
    provider: 'German Academic Exchange',
    amount: '€861-1200/month',
    type: 'International',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate', 'PhD'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'Varies',
    link: 'https://www.daad.de/',
  },
  // Additional International Scholarships
  {
    name: 'CSC Scholarship (China)',
    provider: 'China Scholarship Council',
    amount: 'Full funding + stipend',
    type: 'International',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate', 'PhD'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'December-April',
    link: 'https://www.csc.edu.cn/',
  },
  {
    name: 'Erasmus Mundus (EU)',
    provider: 'European Commission',
    amount: '€1,400/month + tuition',
    type: 'International',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'January-February',
    link: 'https://erasmus-plus.ec.europa.eu/',
  },
  {
    name: 'MEXT Scholarship (Japan)',
    provider: 'Japanese Government',
    amount: '¥143,000-145,000/month',
    type: 'International',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Undergraduate', 'Postgraduate', 'PhD'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'April-May',
    link: 'https://www.studyinjapan.go.jp/en/',
  },
  {
    name: 'Gates Cambridge Scholarship',
    provider: 'Gates Cambridge Trust',
    amount: 'Full funding (UK)',
    type: 'International',
    eligibility: {
      minPercentage: 75,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate', 'PhD'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'October-December',
    link: 'https://www.gatescambridge.org/',
  },
  {
    name: 'Rhodes Scholarship (Oxford)',
    provider: 'Rhodes Trust',
    amount: 'Full funding (UK)',
    type: 'International',
    eligibility: {
      minPercentage: 80,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'July-August',
    link: 'https://www.rhodeshouse.ox.ac.uk/',
  },
  {
    name: 'Korean Government Scholarship',
    provider: 'NIIED Korea',
    amount: 'Full funding + stipend',
    type: 'International',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Undergraduate', 'Postgraduate', 'PhD'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'February-March',
    link: 'https://www.studyinkorea.go.kr/',
  },
  {
    name: 'Swiss Excellence Scholarship',
    provider: 'Swiss Government',
    amount: 'CHF 1,920/month',
    type: 'International',
    eligibility: {
      minPercentage: 70,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate', 'PhD'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'August-November',
    link: 'https://www.sbfi.admin.ch/eskas',
  },
  {
    name: 'Australia Awards',
    provider: 'Australian Government',
    amount: 'Full funding + living',
    type: 'International',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'April-May',
    link: 'https://www.australiaawards.gov.au/',
  },
  {
    name: 'NZ Excellence Awards',
    provider: 'Education NZ',
    amount: 'NZD 10,000-30,000',
    type: 'International',
    eligibility: {
      minPercentage: 60,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['Undergraduate', 'Postgraduate'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'Varies',
    link: 'https://www.studyinnewzealand.govt.nz/',
  },
  {
    name: 'Vanier CGS (Canada)',
    provider: 'Canadian Government',
    amount: 'CAD 50,000/year',
    type: 'International',
    eligibility: {
      minPercentage: 75,
      maxFamilyIncome: 0,
      category: ['General', 'OBC', 'SC', 'ST'],
      level: ['PhD'],
      gender: 'All',
      state: ['All States'],
    },
    deadline: 'September-November',
    link: 'https://vanier.gc.ca/',
  },
];

const states = [
  'All States',
  'Andhra Pradesh',
  'Bihar',
  'Delhi',
  'Gujarat',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Rajasthan',
  'Tamil Nadu',
  'Telangana',
  'Uttar Pradesh',
  'West Bengal',
];

export default function ScholarshipEligibilityChecker() {
  const [formData, setFormData] = useState({
    percentage: '',
    familyIncome: '',
    category: 'General',
    level: 'Undergraduate',
    gender: 'All',
    state: 'All States',
  });
  const [results, setResults] = useState<Scholarship[] | null>(null);
  const [showResults, setShowResults] = useState(false);

  const checkEligibility = () => {
    const eligible = scholarships.filter((scholarship) => {
      const criteria = scholarship.eligibility;

      // Check percentage
      if (
        formData.percentage &&
        parseFloat(formData.percentage) < criteria.minPercentage
      ) {
        return false;
      }

      // Check family income
      if (
        criteria.maxFamilyIncome > 0 &&
        formData.familyIncome &&
        parseFloat(formData.familyIncome) > criteria.maxFamilyIncome
      ) {
        return false;
      }

      // Check category
      if (!criteria.category.includes(formData.category)) {
        return false;
      }

      // Check level
      if (!criteria.level.includes(formData.level)) {
        return false;
      }

      // Check gender
      if (criteria.gender !== 'All' && criteria.gender !== formData.gender) {
        return false;
      }

      return true;
    });

    setResults(eligible);
    setShowResults(true);
  };

  const resetForm = () => {
    setFormData({
      percentage: '',
      familyIncome: '',
      category: 'General',
      level: 'Undergraduate',
      gender: 'All',
      state: 'All States',
    });
    setResults(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Search className="h-4 w-4" />
            Scholarship Finder Tool
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Scholarship Eligibility Checker
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Find scholarships you're eligible for based on your academic
            profile, family income, and category.
          </p>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Enter Your Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="percentage">Academic Percentage (%)</Label>
                  <Input
                    id="percentage"
                    type="number"
                    placeholder="e.g., 85"
                    value={formData.percentage}
                    onChange={(e) =>
                      setFormData({ ...formData, percentage: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="income">Family Income (₹ Lakhs/year)</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="e.g., 5"
                    value={formData.familyIncome}
                    onChange={(e) =>
                      setFormData({ ...formData, familyIncome: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>EWS</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="level">Education Level</Label>
                  <select
                    id="level"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={formData.level}
                    onChange={(e) =>
                      setFormData({ ...formData, level: e.target.value })
                    }
                  >
                    <option>Class 10</option>
                    <option>Class 11</option>
                    <option>Class 12</option>
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                    <option>PhD</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    id="gender"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  >
                    <option>All</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="state">State</Label>
                  <select
                    id="state"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  >
                    {states.map((state) => (
                      <option key={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={checkEligibility}
                    className="flex-1"
                  >
                    Check Eligibility
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetForm}
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {!showResults ? (
              <Card className="p-8 text-center">
                <GraduationCap className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                <h2 className="mb-2 text-xl font-semibold">
                  Find Your Scholarships
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Fill in your details on the left to discover scholarships you
                  may be eligible for.
                </p>
                <div className="flex justify-center gap-4">
                  <Badge variant="outline">15+ Scholarships</Badge>
                  <Badge variant="outline">Government & Private</Badge>
                  <Badge variant="outline">India & Abroad</Badge>
                </div>
              </Card>
            ) : results && results.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-xl font-bold">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    {results.length} Scholarships Found
                  </h2>
                  <Link href="/scholarships">
                    <Button
                      variant="outline"
                      size="sm"
                    >
                      View All Scholarships
                    </Button>
                  </Link>
                </div>

                <div className="grid gap-4">
                  {results.map((scholarship, index) => (
                    <Card
                      key={index}
                      className="transition-shadow hover:shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold">
                              {scholarship.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {scholarship.provider}
                            </p>
                          </div>
                          <Badge
                            variant={
                              scholarship.type === 'Government'
                                ? 'default'
                                : scholarship.type === 'International'
                                  ? 'secondary'
                                  : 'outline'
                            }
                          >
                            {scholarship.type}
                          </Badge>
                        </div>

                        <div className="mb-4 grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Banknote className="h-4 w-4 text-green-600" />
                            <span className="text-sm">
                              {scholarship.amount}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">
                              Deadline: {scholarship.deadline}
                            </span>
                          </div>
                        </div>

                        <Button
                          asChild
                          className="group w-full"
                        >
                          <a
                            href={scholarship.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <Card className="p-8 text-center">
                <XCircle className="mx-auto mb-4 h-16 w-16 text-red-400" />
                <h2 className="mb-2 text-xl font-semibold">
                  No Exact Matches Found
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Try adjusting your criteria or check our complete scholarship
                  database.
                </p>
                <Link href="/scholarships">
                  <Button>View All Scholarships</Button>
                </Link>
              </Card>
            )}

            {/* Tips */}
            <Card className="mt-8 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                      Application Tips
                    </h3>
                    <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>
                        • Apply to multiple scholarships to increase your
                        chances
                      </li>
                      <li>
                        • Keep all documents ready: marksheets, income
                        certificate, caste certificate
                      </li>
                      <li>
                        • Apply before deadlines - late applications are not
                        accepted
                      </li>
                      <li>
                        • Verify eligibility on official websites before
                        applying
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
