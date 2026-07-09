'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  IndianRupee,
  Building2,
  TrendingUp,
  Users,
  Search,
  Briefcase,
  GraduationCap,
  MapPin,
} from 'lucide-react';

interface SalaryData {
  company: string;
  logo?: string;
  roles: {
    title: string;
    fresherSalary: { min: number; max: number; avg: number };
    experience1to3?: { min: number; max: number; avg: number };
    bond?: string;
    workLocation: string[];
  }[];
  industry: string;
  type: 'Product' | 'Service' | 'Startup' | 'MNC';
}

const salaryDatabase: SalaryData[] = [
  {
    company: 'TCS',
    industry: 'IT Services',
    type: 'Service',
    roles: [
      {
        title: 'System Engineer',
        fresherSalary: { min: 350000, max: 400000, avg: 370000 },
        experience1to3: { min: 500000, max: 700000, avg: 600000 },
        bond: '2 years service agreement',
        workLocation: ['Chennai', 'Hyderabad', 'Pune', 'Bangalore', 'Mumbai'],
      },
      {
        title: 'Digital Specialist',
        fresherSalary: { min: 700000, max: 900000, avg: 800000 },
        experience1to3: { min: 900000, max: 1200000, avg: 1000000 },
        bond: '2 years',
        workLocation: ['Bangalore', 'Hyderabad', 'Chennai'],
      },
    ],
  },
  {
    company: 'Infosys',
    industry: 'IT Services',
    type: 'Service',
    roles: [
      {
        title: 'Systems Engineer',
        fresherSalary: { min: 340000, max: 400000, avg: 360000 },
        experience1to3: { min: 500000, max: 700000, avg: 580000 },
        bond: '1 year',
        workLocation: ['Mysore', 'Bangalore', 'Pune', 'Hyderabad'],
      },
      {
        title: 'Specialist Programmer',
        fresherSalary: { min: 650000, max: 800000, avg: 720000 },
        bond: '1 year',
        workLocation: ['Bangalore', 'Hyderabad'],
      },
    ],
  },
  {
    company: 'Wipro',
    industry: 'IT Services',
    type: 'Service',
    roles: [
      {
        title: 'Project Engineer',
        fresherSalary: { min: 350000, max: 400000, avg: 375000 },
        experience1to3: { min: 480000, max: 650000, avg: 550000 },
        bond: 'No bond',
        workLocation: ['Bangalore', 'Chennai', 'Hyderabad', 'Pune'],
      },
    ],
  },
  {
    company: 'Cognizant',
    industry: 'IT Services',
    type: 'Service',
    roles: [
      {
        title: 'Programmer Analyst Trainee',
        fresherSalary: { min: 400000, max: 450000, avg: 420000 },
        experience1to3: { min: 550000, max: 750000, avg: 650000 },
        bond: '2 years',
        workLocation: ['Chennai', 'Hyderabad', 'Pune', 'Kolkata'],
      },
      {
        title: 'GenC Pro',
        fresherSalary: { min: 650000, max: 750000, avg: 700000 },
        bond: '2 years',
        workLocation: ['Chennai', 'Bangalore'],
      },
    ],
  },
  {
    company: 'Accenture',
    industry: 'Consulting',
    type: 'MNC',
    roles: [
      {
        title: 'Associate Software Engineer',
        fresherSalary: { min: 450000, max: 550000, avg: 490000 },
        experience1to3: { min: 650000, max: 900000, avg: 780000 },
        bond: 'No bond',
        workLocation: ['Bangalore', 'Mumbai', 'Hyderabad', 'Chennai', 'Pune'],
      },
    ],
  },
  {
    company: 'Microsoft',
    industry: 'Technology',
    type: 'Product',
    roles: [
      {
        title: 'Software Engineer',
        fresherSalary: { min: 1800000, max: 2500000, avg: 2100000 },
        experience1to3: { min: 2500000, max: 4000000, avg: 3200000 },
        bond: 'No bond',
        workLocation: ['Hyderabad', 'Bangalore'],
      },
    ],
  },
  {
    company: 'Google',
    industry: 'Technology',
    type: 'Product',
    roles: [
      {
        title: 'Software Engineer L3',
        fresherSalary: { min: 2000000, max: 3500000, avg: 2700000 },
        experience1to3: { min: 3500000, max: 5500000, avg: 4500000 },
        bond: 'No bond',
        workLocation: ['Bangalore', 'Hyderabad'],
      },
    ],
  },
  {
    company: 'Amazon',
    industry: 'E-commerce/Tech',
    type: 'Product',
    roles: [
      {
        title: 'SDE-1',
        fresherSalary: { min: 1500000, max: 2200000, avg: 1800000 },
        experience1to3: { min: 2200000, max: 3500000, avg: 2800000 },
        bond: 'No bond',
        workLocation: ['Bangalore', 'Hyderabad', 'Chennai'],
      },
    ],
  },
  {
    company: 'Flipkart',
    industry: 'E-commerce',
    type: 'Product',
    roles: [
      {
        title: 'SDE-1',
        fresherSalary: { min: 1600000, max: 2200000, avg: 1900000 },
        experience1to3: { min: 2200000, max: 3200000, avg: 2700000 },
        bond: 'No bond',
        workLocation: ['Bangalore'],
      },
    ],
  },
  {
    company: 'Goldman Sachs',
    industry: 'Finance',
    type: 'MNC',
    roles: [
      {
        title: 'Analyst',
        fresherSalary: { min: 1500000, max: 2000000, avg: 1750000 },
        experience1to3: { min: 2200000, max: 3000000, avg: 2600000 },
        bond: 'No bond',
        workLocation: ['Bangalore', 'Hyderabad'],
      },
    ],
  },
  {
    company: 'Morgan Stanley',
    industry: 'Finance',
    type: 'MNC',
    roles: [
      {
        title: 'Technology Analyst',
        fresherSalary: { min: 1400000, max: 1800000, avg: 1600000 },
        experience1to3: { min: 2000000, max: 2800000, avg: 2400000 },
        bond: 'No bond',
        workLocation: ['Mumbai', 'Bangalore'],
      },
    ],
  },
  {
    company: 'Deloitte',
    industry: 'Consulting',
    type: 'MNC',
    roles: [
      {
        title: 'Analyst',
        fresherSalary: { min: 700000, max: 1000000, avg: 850000 },
        experience1to3: { min: 1000000, max: 1500000, avg: 1250000 },
        bond: 'No bond',
        workLocation: ['Bangalore', 'Hyderabad', 'Mumbai'],
      },
    ],
  },
  {
    company: 'Capgemini',
    industry: 'IT Services',
    type: 'Service',
    roles: [
      {
        title: 'Associate Consultant',
        fresherSalary: { min: 380000, max: 450000, avg: 410000 },
        experience1to3: { min: 550000, max: 750000, avg: 650000 },
        bond: 'No bond',
        workLocation: ['Mumbai', 'Pune', 'Bangalore', 'Chennai'],
      },
    ],
  },
  {
    company: 'Adobe',
    industry: 'Technology',
    type: 'Product',
    roles: [
      {
        title: 'Computer Scientist',
        fresherSalary: { min: 1600000, max: 2200000, avg: 1900000 },
        experience1to3: { min: 2400000, max: 3500000, avg: 3000000 },
        bond: 'No bond',
        workLocation: ['Noida', 'Bangalore'],
      },
    ],
  },
  {
    company: 'Oracle',
    industry: 'Technology',
    type: 'Product',
    roles: [
      {
        title: 'Applications Engineer',
        fresherSalary: { min: 1200000, max: 1600000, avg: 1400000 },
        experience1to3: { min: 1800000, max: 2500000, avg: 2100000 },
        bond: 'No bond',
        workLocation: ['Bangalore', 'Hyderabad'],
      },
    ],
  },
];

const formatSalary = (amount: number) => {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  }
  return `₹${(amount / 1000).toFixed(0)}K`;
};

export default function SalaryInsightsClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredData = salaryDatabase.filter((company) => {
    const matchesSearch =
      company.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || company.type === selectedType;
    return matchesSearch && matchesType;
  });

  const typeColors: Record<string, string> = {
    Product:
      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Service: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Startup:
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    MNC: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search company or industry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Product', 'Service', 'MNC', 'Startup'].map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType(type)}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Avg Fresher (Service)
                </p>
                <p className="text-xl font-bold text-blue-600">₹3.5-4L</p>
              </div>
              <Briefcase className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Avg Fresher (Product)
                </p>
                <p className="text-xl font-bold text-green-600">₹18-25L</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Top Paying</p>
                <p className="text-xl font-bold text-purple-600">Google</p>
              </div>
              <Building2 className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Companies Listed
                </p>
                <p className="text-xl font-bold">{salaryDatabase.length}</p>
              </div>
              <Users className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Company Cards */}
      <div className="space-y-4">
        {filteredData.map((company) => (
          <Card
            key={company.company}
            className="overflow-hidden"
          >
            <CardHeader className="bg-muted/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{company.company}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {company.industry}
                    </p>
                  </div>
                </div>
                <Badge className={typeColors[company.type]}>
                  {company.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {company.roles.map((role, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="font-semibold">{role.title}</h4>
                      {role.bond && (
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {role.bond}
                        </Badge>
                      )}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950">
                        <div className="mb-1 flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">
                            Fresher Salary
                          </span>
                        </div>
                        <p className="text-lg font-bold text-green-700 dark:text-green-400">
                          {formatSalary(role.fresherSalary.min)} -{' '}
                          {formatSalary(role.fresherSalary.max)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Avg: {formatSalary(role.fresherSalary.avg)}
                        </p>
                      </div>
                      {role.experience1to3 && (
                        <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                          <div className="mb-1 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium">
                              1-3 Years Exp
                            </span>
                          </div>
                          <p className="text-lg font-bold text-blue-700 dark:text-blue-400">
                            {formatSalary(role.experience1to3.min)} -{' '}
                            {formatSalary(role.experience1to3.max)}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Avg: {formatSalary(role.experience1to3.avg)}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {role.workLocation.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          No companies found matching your search.
        </div>
      )}
    </div>
  );
}
