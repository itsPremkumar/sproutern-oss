'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileText, Copy, CheckCircle, Download, Mail } from 'lucide-react';

interface TemplateField {
  name: string;
  label: string;
  type: 'text' | 'date' | 'textarea';
  placeholder: string;
}

interface Template {
  id: string;
  name: string;
  description: string;
  fields: TemplateField[];
  generate: (data: Record<string, string>) => string;
}

const templates: Template[] = [
  {
    id: 'resignation',
    name: 'Resignation Letter',
    description: 'Professional resignation letter for your current job',
    fields: [
      {
        name: 'employeeName',
        label: 'Your Name',
        type: 'text',
        placeholder: 'John Doe',
      },
      {
        name: 'designation',
        label: 'Your Designation',
        type: 'text',
        placeholder: 'Software Engineer',
      },
      {
        name: 'company',
        label: 'Company Name',
        type: 'text',
        placeholder: 'ABC Technologies',
      },
      {
        name: 'managerName',
        label: 'Manager Name',
        type: 'text',
        placeholder: 'Jane Smith',
      },
      {
        name: 'lastWorkingDate',
        label: 'Last Working Date',
        type: 'date',
        placeholder: '',
      },
      {
        name: 'reason',
        label: 'Reason (Optional)',
        type: 'textarea',
        placeholder: 'pursuing higher studies / better opportunities',
      },
    ],
    generate: (data) => `To,
${data.managerName}
${data.company}

Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}

Subject: Resignation from the position of ${data.designation}

Dear ${data.managerName},

I am writing to formally notify you of my resignation from my position as ${data.designation} at ${data.company}. My last working day will be ${new Date(data.lastWorkingDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}.

${data.reason ? `I have decided to move on due to ${data.reason}.` : ''}

I am grateful for the opportunities I have been given during my tenure here. I have learned a lot and grown both professionally and personally. I will ensure a smooth transition of my responsibilities before my departure.

Thank you for your understanding and support.

Sincerely,
${data.employeeName}
${data.designation}`,
  },
  {
    id: 'leave',
    name: 'Leave Application',
    description: 'Formal leave application for office',
    fields: [
      {
        name: 'employeeName',
        label: 'Your Name',
        type: 'text',
        placeholder: 'John Doe',
      },
      {
        name: 'designation',
        label: 'Your Designation',
        type: 'text',
        placeholder: 'Software Engineer',
      },
      {
        name: 'department',
        label: 'Department',
        type: 'text',
        placeholder: 'Engineering',
      },
      {
        name: 'managerName',
        label: 'Manager Name',
        type: 'text',
        placeholder: 'Jane Smith',
      },
      {
        name: 'leaveType',
        label: 'Leave Type',
        type: 'text',
        placeholder: 'Casual / Sick / Annual',
      },
      { name: 'fromDate', label: 'From Date', type: 'date', placeholder: '' },
      { name: 'toDate', label: 'To Date', type: 'date', placeholder: '' },
      {
        name: 'reason',
        label: 'Reason',
        type: 'textarea',
        placeholder: 'personal / medical reasons',
      },
    ],
    generate: (data) => `To,
${data.managerName}
${data.department} Department

Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}

Subject: Application for ${data.leaveType} Leave

Dear ${data.managerName},

I am writing to request ${data.leaveType.toLowerCase()} leave from ${new Date(data.fromDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} to ${new Date(data.toDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} due to ${data.reason}.

I will ensure that all my pending work is completed before my leave begins, and I will be available on phone for any urgent matters if needed.

Kindly approve my leave request.

Thank you.

Sincerely,
${data.employeeName}
${data.designation}
${data.department} Department`,
  },
  {
    id: 'noc',
    name: 'NOC Request Letter',
    description: 'Request for No Objection Certificate',
    fields: [
      {
        name: 'employeeName',
        label: 'Your Name',
        type: 'text',
        placeholder: 'John Doe',
      },
      {
        name: 'employeeId',
        label: 'Employee ID',
        type: 'text',
        placeholder: 'EMP001',
      },
      {
        name: 'designation',
        label: 'Designation',
        type: 'text',
        placeholder: 'Software Engineer',
      },
      {
        name: 'company',
        label: 'Company Name',
        type: 'text',
        placeholder: 'ABC Technologies',
      },
      {
        name: 'hrName',
        label: 'HR Manager Name',
        type: 'text',
        placeholder: 'HR Manager',
      },
      {
        name: 'purpose',
        label: 'Purpose of NOC',
        type: 'textarea',
        placeholder:
          'higher studies / visa application / background verification',
      },
    ],
    generate: (data) => `To,
${data.hrName}
Human Resources Department
${data.company}

Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}

Subject: Request for No Objection Certificate (NOC)

Respected ${data.hrName},

I, ${data.employeeName}, Employee ID: ${data.employeeId}, working as ${data.designation} at ${data.company}, hereby request you to issue a No Objection Certificate (NOC) for the purpose of ${data.purpose}.

I kindly request you to process my request at the earliest and issue the NOC.

Thank you for your cooperation.

Sincerely,
${data.employeeName}
Employee ID: ${data.employeeId}
${data.designation}`,
  },
  {
    id: 'relieving',
    name: 'Relieving Letter Request',
    description: 'Request for relieving letter after resignation',
    fields: [
      {
        name: 'employeeName',
        label: 'Your Name',
        type: 'text',
        placeholder: 'John Doe',
      },
      {
        name: 'employeeId',
        label: 'Employee ID',
        type: 'text',
        placeholder: 'EMP001',
      },
      {
        name: 'designation',
        label: 'Designation',
        type: 'text',
        placeholder: 'Software Engineer',
      },
      {
        name: 'company',
        label: 'Company Name',
        type: 'text',
        placeholder: 'ABC Technologies',
      },
      {
        name: 'hrName',
        label: 'HR Manager Name',
        type: 'text',
        placeholder: 'HR Manager',
      },
      {
        name: 'lastWorkingDate',
        label: 'Last Working Date',
        type: 'date',
        placeholder: '',
      },
    ],
    generate: (data) => `To,
${data.hrName}
Human Resources Department
${data.company}

Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}

Subject: Request for Relieving Letter

Respected ${data.hrName},

I, ${data.employeeName}, Employee ID: ${data.employeeId}, was working as ${data.designation} at ${data.company}. My last working day was ${new Date(data.lastWorkingDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}.

I have completed all the formalities including handover of responsibilities and return of company assets. I kindly request you to issue my relieving letter at the earliest, as I need it for my new employment.

Thank you for your prompt attention to this matter.

Sincerely,
${data.employeeName}
Employee ID: ${data.employeeId}`,
  },
  {
    id: 'experience',
    name: 'Experience Certificate Request',
    description: 'Request for experience/service certificate',
    fields: [
      {
        name: 'employeeName',
        label: 'Your Name',
        type: 'text',
        placeholder: 'John Doe',
      },
      {
        name: 'employeeId',
        label: 'Employee ID',
        type: 'text',
        placeholder: 'EMP001',
      },
      {
        name: 'designation',
        label: 'Designation',
        type: 'text',
        placeholder: 'Software Engineer',
      },
      {
        name: 'company',
        label: 'Company Name',
        type: 'text',
        placeholder: 'ABC Technologies',
      },
      {
        name: 'hrName',
        label: 'HR Manager Name',
        type: 'text',
        placeholder: 'HR Manager',
      },
      {
        name: 'joiningDate',
        label: 'Joining Date',
        type: 'date',
        placeholder: '',
      },
      {
        name: 'lastWorkingDate',
        label: 'Last Working Date',
        type: 'date',
        placeholder: '',
      },
    ],
    generate: (data) => `To,
${data.hrName}
Human Resources Department
${data.company}

Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}

Subject: Request for Experience Certificate

Respected ${data.hrName},

I, ${data.employeeName}, Employee ID: ${data.employeeId}, was employed at ${data.company} as ${data.designation} from ${new Date(data.joiningDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} to ${new Date(data.lastWorkingDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}.

I kindly request you to issue an experience certificate for my tenure at the company. I need this document for my future career prospects.

Thank you for your assistance.

Sincerely,
${data.employeeName}
Employee ID: ${data.employeeId}`,
  },
  {
    id: 'internship-request',
    name: 'Internship Request Email',
    description: 'Cold email template for internship applications',
    fields: [
      {
        name: 'studentName',
        label: 'Your Name',
        type: 'text',
        placeholder: 'John Doe',
      },
      {
        name: 'college',
        label: 'College Name',
        type: 'text',
        placeholder: 'XYZ Engineering College',
      },
      {
        name: 'year',
        label: 'Year/Semester',
        type: 'text',
        placeholder: '3rd Year / 6th Semester',
      },
      {
        name: 'branch',
        label: 'Branch',
        type: 'text',
        placeholder: 'Computer Science',
      },
      {
        name: 'company',
        label: 'Company Name',
        type: 'text',
        placeholder: 'ABC Technologies',
      },
      {
        name: 'role',
        label: 'Desired Role',
        type: 'text',
        placeholder: 'Software Development Intern',
      },
      {
        name: 'skills',
        label: 'Key Skills',
        type: 'textarea',
        placeholder: 'Python, React, Node.js',
      },
    ],
    generate: (data) => `Subject: Application for ${data.role} Position

Dear Hiring Team,

I am ${data.studentName}, a ${data.year} ${data.branch} student at ${data.college}. I am writing to express my interest in the ${data.role} position at ${data.company}.

I have developed skills in ${data.skills} through coursework and personal projects. I am eager to apply my knowledge in a professional environment and contribute to your team.

I have attached my resume for your review. I would welcome the opportunity to discuss how my skills align with your requirements.

Thank you for considering my application. I look forward to hearing from you.

Best regards,
${data.studentName}
${data.branch}, ${data.year}
${data.college}`,
  },
];

export default function HrTemplatesClient() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<string>('resignation');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [generatedText, setGeneratedText] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const currentTemplate =
    templates.find((t) => t.id === selectedTemplate) || templates[0];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleGenerate = () => {
    const text = currentTemplate.generate(formData);
    setGeneratedText(text);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTemplateChange = (value: string) => {
    setSelectedTemplate(value);
    setFormData({});
    setGeneratedText('');
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Generate Template
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Select Template</Label>
            <Select
              value={selectedTemplate}
              onValueChange={handleTemplateChange}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {templates.map((t) => (
                  <SelectItem
                    key={t.id}
                    value={t.id}
                  >
                    {t.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="mt-1 text-xs text-muted-foreground">
              {currentTemplate.description}
            </p>
          </div>

          {currentTemplate.fields.map((field) => (
            <div key={field.name}>
              <Label>{field.label}</Label>
              {field.type === 'textarea' ? (
                <Textarea
                  className="mt-1"
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                />
              ) : (
                <Input
                  className="mt-1"
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                />
              )}
            </div>
          ))}

          <Button
            onClick={handleGenerate}
            className="w-full"
          >
            <Mail className="mr-2 h-4 w-4" />
            Generate {currentTemplate.name}
          </Button>
        </CardContent>
      </Card>

      {/* Preview Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Preview</span>
            {generatedText && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {generatedText ? (
            <div className="whitespace-pre-wrap rounded-lg bg-muted p-4 font-mono text-sm">
              {generatedText}
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center text-muted-foreground">
              <p>Fill the form and click Generate to see preview</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
