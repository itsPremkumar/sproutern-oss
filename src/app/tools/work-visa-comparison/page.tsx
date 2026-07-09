'use client';

import { useState } from 'react';
import {
  Briefcase,
  Globe,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
  Info,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const workVisas = [
  {
    country: 'USA',
    visa: 'H-1B',
    type: 'Specialty Occupation',
    duration: '3 years (extendable to 6)',
    processing: '2-6 months (Premium: 15 days)',
    cost: '$460 - $5,000+',
    requirements: [
      'Bachelor’s degree or higher',
      'Job offer from US employer',
      'Employer must file petition',
      'Lottery system (capped)',
    ],
    pros: [
      'Dual intent (can apply for Green Card)',
      'Spouse can work (H-4 EAD)',
    ],
    cons: ['Lottery system is uncertain', 'Tied to employer'],
  },
  {
    country: 'USA',
    visa: 'O-1A',
    type: 'Individuals with Extraordinary Ability',
    duration: '3 years (unlimited 1-year extensions)',
    processing: '2-3 months (Premium: 15 days)',
    cost: '$460+',
    requirements: [
      'Evidence of extraordinary ability',
      'Awards, publications, high salary',
      'Job offer in field',
    ],
    pros: ['No cap/lottery', 'Unlimited extensions', 'Flexible employers'],
    cons: ['Very high bar for approval', 'Complex application'],
  },
  {
    country: 'UK',
    visa: 'Skilled Worker',
    type: 'General Work Visa',
    duration: 'Up to 5 years',
    processing: '3 weeks (outside UK)',
    cost: '£625 - £1,423 + Health Surcharge',
    requirements: [
      'Job offer from sponsored employer',
      'Minimum salary threshold',
      'B1 English proficiency',
    ],
    pros: ['Path to settlement (ILR)', 'Spouse can work', 'No cap'],
    cons: ['High healthcare surcharge', 'Tied to employer'],
  },
  {
    country: 'Germany',
    visa: 'EU Blue Card',
    type: 'Highly Qualified Worker',
    duration: 'Duration of contract + 3 months (max 4 years)',
    processing: '1-3 months',
    cost: '€110',
    requirements: [
      'University degree',
      'Job offer with min. salary (€56,800 or €44,304)',
      'Related to qualification',
    ],
    pros: [
      'Fast track to PR (21-33 months)',
      'Move to other EU countries',
      'Family reunification',
    ],
    cons: ['Strict salary thresholds', 'Degree recognition needed'],
  },
  {
    country: 'Canada',
    visa: 'Express Entry',
    type: 'Permanent Residence',
    duration: 'Indefinite (PR)',
    processing: '6 months',
    cost: 'CAD 1,365 + Biometrics',
    requirements: [
      'Points based (CRS score)',
      'Age, education, experience, language',
      'ECA for foreign degrees',
    ],
    pros: [
      'Direct PR status',
      'Live anywhere in Canada',
      'No job offer needed (for some streams)',
    ],
    cons: ['Competitive points system', 'Proof of funds required'],
  },
  {
    country: 'Australia',
    visa: 'Temporary Skill Shortage (482)',
    type: 'Sponsored Work Visa',
    duration: '2 to 4 years',
    processing: '35 - 75 days',
    cost: 'AUD 1,330 - 2,770',
    requirements: [
      'Job offer from sponsor',
      '2 years work experience',
      'Skills assessment',
    ],
    pros: ['Path to PR (186 visa)', 'Family can join'],
    cons: ['Tied to employer', 'High cost'],
  },
  {
    country: 'Australia',
    visa: 'Subclass 189/190',
    type: 'Skilled Independent/Nominated',
    duration: 'Indefinite (PR)',
    processing: '3 - 12 months',
    cost: 'AUD 4,240',
    requirements: [
      'Points test (65+)',
      'Under 45 years age',
      'Skills assessment',
      'EOI invitation',
    ],
    pros: ['Direct PR', 'Medicare access', 'Live anywhere (189)'],
    cons: ['Very competitive', 'Long wait times', 'High cost'],
  },
  {
    country: 'Netherlands',
    visa: 'Highly Skilled Migrant',
    type: 'Knowledge Migrant',
    duration: 'Same as contract (max 5 years)',
    processing: '2 weeks',
    cost: '€350',
    requirements: [
      'Employer is recognized sponsor',
      'Salary threshold met',
      'Contract agreement',
    ],
    pros: [
      '30% tax ruling eligible',
      'Fast processing',
      'Family reunification',
    ],
    cons: ['Tied to employer', 'Sponsor requirement'],
  },
  {
    country: 'UAE',
    visa: 'Golden Visa',
    type: 'Long-term Residence',
    duration: '5 or 10 years',
    processing: 'Varies',
    cost: 'AED 2,800 - 3,800',
    requirements: [
      'Talents/Professionals/Investors',
      'Min salary AED 30,000/month (Professionals)',
      'Bachelor degree equivalent',
    ],
    pros: ['Self-sponsored', 'Long residency', 'Family sponsorship'],
    cons: ['High salary requirement', 'Health insurance needed'],
  },
  {
    country: 'Singapore',
    visa: 'Employment Pass',
    type: 'Professional Work Pass',
    duration: '2 years (renewable)',
    processing: '10 business days',
    cost: 'SGD 105',
    requirements: [
      'Job offer',
      'Min salary SGD 5,000/month',
      'COMPASS framework points',
    ],
    pros: ['Low income tax', 'Fast processing', 'Path to PR'],
    cons: ['Very high cost of living', 'Strict COMPASS scoring'],
  },
];

export default function WorkVisaComparisonPage() {
  const [filterCountry, setFilterCountry] = useState('All');
  const content = toolsSEOContent['work-visa-comparison'];

  const countries = [
    'All',
    ...Array.from(new Set(workVisas.map((v) => v.country))),
  ];

  const filteredVisas =
    filterCountry === 'All'
      ? workVisas
      : workVisas.filter((v) => v.country === filterCountry);

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">
            <Globe className="mr-1 h-3 w-3" />
            Global Careers
          </Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Work Visa Comparison Tool
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Compare work visa requirements, costs, and benefits for top
            destinations like USA, UK, Germany, Canada, and more.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-lg border bg-card p-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-muted-foreground" />
            <span className="font-semibold">Filter by Destination:</span>
          </div>
          <Select
            value={filterCountry}
            onValueChange={setFilterCountry}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem
                  key={country}
                  value={country}
                >
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Visa Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVisas.map((visa, index) => (
            <Card
              key={index}
              className="flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="outline">{visa.country}</Badge>
                  {visa.visa.includes('Blue Card') ||
                  visa.visa.includes('H-1B') ? (
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                      Top Choice
                    </Badge>
                  ) : null}
                </div>
                <CardTitle className="text-2xl">{visa.visa}</CardTitle>
                <p className="text-sm text-muted-foreground">{visa.type}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 text-sm">
                <div className="grid grid-cols-2 gap-4 rounded-lg bg-muted/50 p-3">
                  <div>
                    <div className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> Process
                    </div>
                    <div className="font-medium">{visa.processing}</div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <DollarSign className="h-3 w-3" /> Cost
                    </div>
                    <div className="font-medium">{visa.cost}</div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Requirements:</h4>
                  <ul className="space-y-1">
                    {visa.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4">
                  <div className="mb-4">
                    <h4 className="mb-2 flex items-center gap-2 font-semibold text-green-600">
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {visa.pros.map((pro, i) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-semibold text-red-600">
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {visa.cons.map((con, i) => (
                        <li key={i}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="work-visa-comparison" // Note: This needs to be added to tool-seo-content.ts eventually
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
