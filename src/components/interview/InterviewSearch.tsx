'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { InterviewExperience } from '@/types/interview';
import { Search, Share2, X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { toCompanySlug } from '@/lib/company-slug';

interface Props {
  experiences: InterviewExperience[];
}

export function InterviewSearch({ experiences }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [verdictFilter, setVerdictFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [batchFilter, setBatchFilter] = useState<string>('all');
  const [salaryMin, setSalaryMin] = useState<string>('');
  const [salaryMax, setSalaryMax] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('date-desc');

  // Extract unique values for filters
  const uniqueRoles = useMemo(
    () => [...new Set(experiences.map((e) => e.role).filter(Boolean))].sort(),
    [experiences],
  );
  const uniqueDepartments = useMemo(
    () =>
      [...new Set(experiences.map((e) => e.department).filter(Boolean))].sort(),
    [experiences],
  );
  const uniqueBatches = useMemo(
    () => [...new Set(experiences.map((e) => e.batch).filter(Boolean))].sort(),
    [experiences],
  );

  // Derived state for filtered results
  const filteredExperiences = useMemo(() => {
    let filtered = experiences.filter((exp) => {
      const matchesSearch =
        searchQuery === '' ||
        exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (exp.studentName &&
          exp.studentName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (exp.role &&
          exp.role.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (exp.content &&
          exp.content.toLowerCase().includes(searchQuery.toLowerCase())) ||
        exp.rounds.some((r) =>
          r.questions?.some((q) =>
            q.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        );

      const matchesVerdict =
        verdictFilter === 'all' || exp.verdict === verdictFilter;
      const matchesDifficulty =
        difficultyFilter === 'all' || exp.difficulty === difficultyFilter;
      const matchesRole = roleFilter === 'all' || exp.role === roleFilter;
      const matchesDepartment =
        departmentFilter === 'all' || exp.department === departmentFilter;
      const matchesBatch = batchFilter === 'all' || exp.batch === batchFilter;

      // Salary filter
      const salaryNum = exp.salary
        ? parseFloat(exp.salary.replace(/[^0-9.]/g, ''))
        : 0;
      const matchesSalaryMin = !salaryMin || salaryNum >= parseFloat(salaryMin);
      const matchesSalaryMax = !salaryMax || salaryNum <= parseFloat(salaryMax);

      return (
        matchesSearch &&
        matchesVerdict &&
        matchesDifficulty &&
        matchesRole &&
        matchesDepartment &&
        matchesBatch &&
        matchesSalaryMin &&
        matchesSalaryMax
      );
    });

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return (
            new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
          );
        case 'date-asc':
          return (
            new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime()
          );
        case 'salary-desc':
          return (
            parseFloat((b.salary || '0').replace(/[^0-9.]/g, '')) -
            parseFloat((a.salary || '0').replace(/[^0-9.]/g, ''))
          );
        case 'salary-asc':
          return (
            parseFloat((a.salary || '0').replace(/[^0-9.]/g, '')) -
            parseFloat((b.salary || '0').replace(/[^0-9.]/g, ''))
          );
        case 'company':
          return a.company.localeCompare(b.company);
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    experiences,
    searchQuery,
    verdictFilter,
    difficultyFilter,
    roleFilter,
    departmentFilter,
    batchFilter,
    salaryMin,
    salaryMax,
    sortBy,
  ]);

  // Group by company for the default view
  const companies = useMemo(() => {
    return filteredExperiences.reduce(
      (acc, exp) => {
        if (!acc[exp.company]) {
          acc[exp.company] = { count: 0, logo: exp.companyLogo };
        }
        acc[exp.company].count++;
        if (!acc[exp.company].logo && exp.companyLogo) {
          acc[exp.company].logo = exp.companyLogo;
        }
        return acc;
      },
      {} as Record<string, { count: number; logo?: string }>,
    );
  }, [filteredExperiences]);

  const sortedCompanies = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  const isSearching =
    searchQuery !== '' ||
    verdictFilter !== 'all' ||
    difficultyFilter !== 'all' ||
    roleFilter !== 'all' ||
    departmentFilter !== 'all' ||
    batchFilter !== 'all' ||
    salaryMin !== '' ||
    salaryMax !== '';

  const clearAllFilters = () => {
    setSearchQuery('');
    setVerdictFilter('all');
    setDifficultyFilter('all');
    setRoleFilter('all');
    setDepartmentFilter('all');
    setBatchFilter('all');
    setSalaryMin('');
    setSalaryMax('');
    setSortBy('date-desc');
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Bar */}
      <div className="space-y-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="relative w-full flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <Input
              placeholder="Search by company, student, role, or keywords..."
              className="w-full pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-wrap gap-2 md:w-auto">
            <Select
              value={verdictFilter}
              onValueChange={setVerdictFilter}
            >
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Verdict" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Verdicts</SelectItem>
                <SelectItem value="Selected">Selected</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={difficultyFilter}
              onValueChange={setDifficultyFilter}
            >
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  More Filters
                  {(roleFilter !== 'all' ||
                    departmentFilter !== 'all' ||
                    batchFilter !== 'all' ||
                    salaryMin ||
                    salaryMax) && (
                    <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                      {
                        [
                          roleFilter !== 'all',
                          departmentFilter !== 'all',
                          batchFilter !== 'all',
                          salaryMin || salaryMax,
                        ].filter(Boolean).length
                      }
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Role
                    </Label>
                    <Select
                      value={roleFilter}
                      onValueChange={setRoleFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Roles" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        {uniqueRoles.map((role) => (
                          <SelectItem
                            key={role}
                            value={role || ''}
                          >
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Department
                    </Label>
                    <Select
                      value={departmentFilter}
                      onValueChange={setDepartmentFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Departments" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        {uniqueDepartments.map((dept) => (
                          <SelectItem
                            key={dept}
                            value={dept || ''}
                          >
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Batch
                    </Label>
                    <Select
                      value={batchFilter}
                      onValueChange={setBatchFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Batches" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Batches</SelectItem>
                        {uniqueBatches.map((batch) => (
                          <SelectItem
                            key={batch}
                            value={batch}
                          >
                            {batch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Salary Range (LPA)
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={salaryMin}
                        onChange={(e) => setSalaryMin(e.target.value)}
                        className="w-full"
                      />
                      <span className="text-gray-500">-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={salaryMax}
                        onChange={(e) => setSalaryMax(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Select
              value={sortBy}
              onValueChange={setSortBy}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-desc">Latest First</SelectItem>
                <SelectItem value="date-asc">Oldest First</SelectItem>
                <SelectItem value="salary-desc">Highest Salary</SelectItem>
                <SelectItem value="salary-asc">Lowest Salary</SelectItem>
                <SelectItem value="company">Company A-Z</SelectItem>
              </SelectContent>
            </Select>

            {isSearching && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearAllFilters}
                title="Clear All Filters"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {isSearching && (
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="text-gray-500">Active filters:</span>
            {verdictFilter !== 'all' && (
              <span className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-blue-800">
                Verdict: {verdictFilter}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => setVerdictFilter('all')}
                />
              </span>
            )}
            {difficultyFilter !== 'all' && (
              <span className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-blue-800">
                Difficulty: {difficultyFilter}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => setDifficultyFilter('all')}
                />
              </span>
            )}
            {roleFilter !== 'all' && (
              <span className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-blue-800">
                Role: {roleFilter}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => setRoleFilter('all')}
                />
              </span>
            )}
            {departmentFilter !== 'all' && (
              <span className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-blue-800">
                Dept: {departmentFilter}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => setDepartmentFilter('all')}
                />
              </span>
            )}
            {batchFilter !== 'all' && (
              <span className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-blue-800">
                Batch: {batchFilter}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => setBatchFilter('all')}
                />
              </span>
            )}
            {(salaryMin || salaryMax) && (
              <span className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-blue-800">
                Salary: {salaryMin || '0'}-{salaryMax || '∞'} LPA
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => {
                    setSalaryMin('');
                    setSalaryMax('');
                  }}
                />
              </span>
            )}
          </div>
        )}

        <div className="mt-4 border-t border-gray-200 pt-4 text-center">
          <h3 className="font-semibold text-gray-800">
            Contribute to the fututre interview attend students
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Did you have a recent interview? Help fellow students by sharing
            your experience. Your story can make a difference.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:from-blue-700 hover:to-indigo-700 md:w-auto">
              <Share2 className="mr-2 h-4 w-4" />
              Share Your Experience
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Your Interview Experience</DialogTitle>
              <DialogDescription>
                Help the students by sharing your interview journey. Follow the
                steps below to contribute.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  1. Get the Submission Templates
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Download our templates to get started. You can either fill out
                  the JSON file directly or use the guide to structure your
                  submission in a document.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/data/interview-experiences.json"
                    download
                    className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-center font-bold text-white transition-colors duration-200 hover:bg-blue-600"
                  >
                    Download JSON Template
                  </a>
                  <a
                    href="/interview-submission-guide.md"
                    download
                    className="flex-1 rounded-lg bg-green-500 px-4 py-2 text-center font-bold text-white transition-colors duration-200 hover:bg-green-600"
                  >
                    Download Submission Guide
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  2. Send Us Your Experience
                </h3>
                <p className="text-sm text-gray-600">
                  Once you've documented your experience, please send the file
                  (Word/PDF/JSON) to:
                </p>
                <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                  <a
                    href="mailto:support@sproutern.com"
                    className="text-lg font-bold text-blue-600 hover:underline"
                  >
                    support@sproutern.com
                  </a>
                  <p className="mt-1 text-xs text-gray-500">
                    Subject: Interview Experience - [Your Name] - [Company]
                  </p>
                </div>
              </div>

              <p className="border-t border-gray-200 pt-4 text-xs text-gray-500">
                * We will review your submission and publish it within 24 hours.
                Thank you for contributing!
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Results */}
      {isSearching ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Found {filteredExperiences.length} results
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredExperiences.map((exp) => (
              <Link
                key={exp.id}
                href={`/interview-experiences/${toCompanySlug(exp.company)}/${exp.id}`}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <div className="flex-1 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {exp.companyLogo && (
                        <img
                          src={exp.companyLogo}
                          alt={exp.company}
                          className="h-6 w-6 rounded-full object-cover"
                        />
                      )}
                      <span className="rounded bg-blue-50 px-2 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                        {exp.company}
                      </span>
                    </div>
                    <span
                      className={`rounded px-2 py-1 text-xs font-medium ${
                        exp.verdict === 'Selected'
                          ? 'bg-green-100 text-green-800'
                          : exp.verdict === 'Rejected'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {exp.verdict}
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    {exp.studentName}
                  </h3>
                  <p className="mb-3 text-sm text-gray-500">{exp.role}</p>

                  <div className="mt-auto flex items-center space-x-2 text-xs text-gray-400">
                    <span>{exp.batch}</span>
                    <span>•</span>
                    <span>{exp.difficulty}</span>
                    <span>•</span>
                    <span className="font-semibold text-green-600">
                      {exp.salary}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredExperiences.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-500">
                No experiences found matching your criteria.
              </p>
              <Button
                variant="link"
                onClick={clearAllFilters}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedCompanies.map(([company, data]) => (
            <Link
              key={company}
              href={`/interview-experiences/${toCompanySlug(company)}`}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
                  {data.logo ? (
                    <img
                      src={data.logo}
                      alt={company}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-blue-600">
                      {company.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                  {company}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {data.count} {data.count === 1 ? 'Experience' : 'Experiences'}
                </p>
              </div>
              <div className="border-t border-gray-100 bg-gray-50 px-6 py-3">
                <span className="flex items-center justify-center text-xs font-medium uppercase tracking-wider text-blue-600 group-hover:text-blue-700">
                  View Details &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
