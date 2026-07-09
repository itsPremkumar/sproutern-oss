'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
// We can't export metadata from a client component, so we'll wrap this or add it to layout/pageWrapper if strict SEO needed,
// but for now we'll keep the logic here. In Next.js App Router, it's better to keep the page server-side and import a client component.
// However, since we're making the whole page "use client" for interactivity, we usually separate the metadata in a layout or parent.
// For simplicity in this single-file edit, we will omit the metadata export here or acknowledge it won't work in "use client".
// Best practice: Make this a client component `SalaryTracker.tsx` and import it into `page.tsx`.

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Search,
  DollarSign,
  Lock,
  AlertTriangle,
  ShieldCheck,
} from 'lucide-react';
import salaryData from '@/data/salary-bond-data.json';

interface CompanyData {
  company: string;
  role: string;
  ctc: string;
  inHand: string;
  bond: string;
  penalty: string;
  workLifeBalance: number;
  hasShift: boolean;
}

export default function SalaryBondTracker() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<CompanyData[]>(salaryData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = salaryData.filter(
      (item) =>
        item.company.toLowerCase().includes(term) ||
        item.role.toLowerCase().includes(term),
    );
    setData(filtered);
  };

  const getBondColor = (bond: string) => {
    if (bond.toLowerCase().includes('none'))
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    if (bond.includes('1 Year'))
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
          Fresher Salary & <span className="text-red-600">Bond Checker</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Compare CTC vs In-Hand salary and check hidden bond penalties for top
          companies before you sign the offer letter.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Highest Package (Fresher)
              </p>
              <p className="text-2xl font-bold">₹9.5 LPA</p>
              <p className="text-xs text-green-600">Infosys (SP)</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500 opacity-20" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm font-medium text-slate-500">Strict Bonds</p>
              <p className="text-2xl font-bold">₹2 - 10 Lakhs</p>
              <p className="text-xs text-red-600">Penalty Amount</p>
            </div>
            <Lock className="h-8 w-8 text-red-500 opacity-20" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between pt-6">
            <div>
              <p className="text-sm font-medium text-slate-500">
                No Bond Companies
              </p>
              <p className="text-2xl font-bold">5+</p>
              <p className="text-xs text-blue-600">Accenture, Zoho...</p>
            </div>
            <ShieldCheck className="h-8 w-8 text-blue-500 opacity-20" />
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative mx-auto mb-6 max-w-md md:mx-0">
        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search company (e.g. TCS, Accenture)..."
          className="pl-10"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Data Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Company</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>CTC</TableHead>
                <TableHead>In-Hand (Approx)</TableHead>
                <TableHead>Bond Policy</TableHead>
                <TableHead className="text-right">Penalty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {item.company}
                    </TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell className="font-bold text-slate-700 dark:text-slate-300">
                      {item.ctc}
                    </TableCell>
                    <TableCell className="font-semibold text-green-600">
                      {item.inHand}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`border-0 ${getBondColor(item.bond)}`}
                      >
                        {item.bond}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono text-red-500">
                      {item.penalty}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="py-10 text-center text-slate-500"
                  >
                    No companies found matching "{searchTerm}"
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      <div className="mt-8 border-l-4 border-yellow-500 bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
        <strong>Disclaimer:</strong> Salaries and bond policies change
        frequently. These figures are based on recent offer letters (2024-25)
        and student feedback. Always read your specific offer letter carefully.
      </div>
    </div>
  );
}
