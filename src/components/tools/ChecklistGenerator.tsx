'use client';

import { useState, useRef } from 'react';
import {
  CheckSquare,
  Printer,
  Download,
  Plus,
  Trash2,
  FileText,
  Briefcase,
  GraduationCap,
  ClipboardList,
  RefreshCw,
  CheckCircle2,
  Circle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

interface ChecklistTemplate {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

const CHECKLIST_TEMPLATES: ChecklistTemplate[] = [
  {
    id: 'interview-prep',
    name: 'Interview Preparation',
    icon: <Briefcase className="h-5 w-5" />,
    description: 'Complete checklist for interview day',
    items: [
      'Research the company thoroughly',
      'Review job description and requirements',
      'Prepare 5 questions to ask interviewer',
      'Practice common interview questions',
      'Prepare STAR method examples',
      'Test your laptop/webcam (for virtual)',
      'Iron and lay out professional attire',
      'Print multiple copies of resume',
      'Gather required documents/certificates',
      'Note down interview time and location',
      'Plan your route and departure time',
      'Get 8 hours of sleep the night before',
      'Eat a healthy breakfast',
      'Arrive 15 minutes early',
      'Bring a notebook and pen',
      'Turn off phone before interview',
      'Send thank-you email within 24 hours',
    ],
  },
  {
    id: 'resume-checklist',
    name: 'Resume Checklist',
    icon: <FileText className="h-5 w-5" />,
    description: 'Ensure your resume is complete',
    items: [
      'Contact information at the top',
      'Professional email address',
      'LinkedIn profile URL included',
      'Clear objective/summary statement',
      'Keywords from job description used',
      'Quantified achievements with numbers',
      'Action verbs start each bullet point',
      'Education section with GPA (if good)',
      'Relevant skills section included',
      'Projects with technologies listed',
      'Certifications and courses added',
      'No spelling or grammar errors',
      'Consistent formatting throughout',
      'One page length (for freshers)',
      'PDF format for submission',
      'ATS-friendly (no tables/graphics)',
      'Tailored to specific job role',
    ],
  },
  {
    id: 'placement-prep',
    name: 'Placement Season',
    icon: <GraduationCap className="h-5 w-5" />,
    description: 'Campus placement preparation',
    items: [
      'Update resume with latest projects',
      'Create LinkedIn profile',
      'Practice aptitude questions daily',
      'Revise DSA concepts',
      'Complete at least 100 coding problems',
      'Practice verbal reasoning',
      'Prepare for group discussions',
      'Mock interviews with friends',
      'Gather all academic documents',
      'Get passport-size photos',
      'Prepare 1-minute self-introduction',
      'Research target companies',
      'Note down company-specific patterns',
      'Prepare domain-specific knowledge',
      'Review CGPA and backlog requirements',
      'Join placement preparation groups',
      'Complete company application forms',
      'Practice typing speed (if required)',
    ],
  },
  {
    id: 'first-day-job',
    name: 'First Day at Job',
    icon: <CheckCircle2 className="h-5 w-5" />,
    description: 'First day work checklist',
    items: [
      'Confirm start date, time, and location',
      'Know who to report to',
      'Prepare required documents',
      'Professional attire ready',
      'Reach 15-20 minutes early',
      'Bring necessary stationery',
      'Carry lunch/snacks',
      'Save HR and manager contact',
      'Complete joining formalities',
      'Set up email and systems',
      'Introduce yourself to team',
      'Note important names and roles',
      'Understand team structure',
      'Review company policies',
      'Locate restrooms and cafeteria',
      'Note working hours and breaks',
      'Ask about first week expectations',
    ],
  },
  {
    id: 'scholarship-app',
    name: 'Scholarship Application',
    icon: <ClipboardList className="h-5 w-5" />,
    description: 'Documents for scholarship',
    items: [
      'Latest marksheets (all semesters)',
      'Income certificate of parents',
      'Caste certificate (if applicable)',
      'Domicile certificate',
      'Aadhaar card copy',
      'Bank passbook first page copy',
      'Passport-size photographs',
      'Bonafide certificate from college',
      'Fee receipt copies',
      'Statement of Purpose (SOP)',
      'Letter of Recommendation',
      'Research proposal (if required)',
      'Resume/CV',
      'Achievement certificates',
      'Community service proof (if any)',
      'Application form filled completely',
      'Deadline noted and submission done early',
    ],
  },
  {
    id: 'study-abroad',
    name: 'Study Abroad',
    icon: <GraduationCap className="h-5 w-5" />,
    description: 'Complete study abroad checklist',
    items: [
      'Research universities and programs',
      'Check eligibility requirements',
      'Take required exams (GRE/GMAT/IELTS)',
      'Prepare Statement of Purpose',
      'Request Letters of Recommendation',
      'Gather academic transcripts',
      'Get documents attested if needed',
      'Apply for financial aid/scholarships',
      'Submit university applications',
      'Pay application fees',
      'Track application status',
      'Accept admission offer',
      'Apply for student visa',
      'Book visa interview slot',
      'Prepare for visa interview',
      'Get medical examination done',
      'Arrange accommodation',
      'Book flight tickets',
      'Open international bank account',
      'Buy health insurance',
      'Inform embassy of arrival',
    ],
  },
];

export default function ChecklistGenerator() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<string>('interview-prep');
  const [customItems, setCustomItems] = useState<ChecklistItem[]>([]);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [newItem, setNewItem] = useState('');
  const [checklistTitle, setChecklistTitle] = useState('');
  const printRef = useRef<HTMLDivElement>(null);

  const currentTemplate = CHECKLIST_TEMPLATES.find(
    (t) => t.id === selectedTemplate,
  );

  const loadTemplate = (templateId: string) => {
    const template = CHECKLIST_TEMPLATES.find((t) => t.id === templateId);
    if (template) {
      const items: ChecklistItem[] = template.items.map((item, index) => ({
        id: `${templateId}-${index}`,
        text: item,
        checked: false,
      }));
      setChecklist(items);
      setChecklistTitle(template.name);
      setSelectedTemplate(templateId);
    }
  };

  const addCustomItem = () => {
    if (!newItem.trim()) return;
    const item: ChecklistItem = {
      id: `custom-${Date.now()}`,
      text: newItem.trim(),
      checked: false,
    };
    setChecklist([...checklist, item]);
    setNewItem('');
  };

  const toggleItem = (id: string) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setChecklist(checklist.filter((item) => item.id !== id));
  };

  const resetChecklist = () => {
    setChecklist(checklist.map((item) => ({ ...item, checked: false })));
  };

  const printChecklist = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const styles = `
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        h1 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 24px;
        }
        .item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        .checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid #333;
          border-radius: 4px;
          flex-shrink: 0;
        }
        .text {
          flex: 1;
          font-size: 14px;
          line-height: 1.5;
        }
        .footer {
          margin-top: 40px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        @media print {
          body { padding: 20px; }
        }
      </style>
    `;

    const itemsHtml = checklist
      .map(
        (item) => `
      <div class="item">
        <div class="checkbox"></div>
        <span class="text">${item.text}</span>
      </div>
    `,
      )
      .join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${checklistTitle || 'Checklist'} - Sproutern</title>
          ${styles}
        </head>
        <body>
          <h1>✓ ${checklistTitle || 'My Checklist'}</h1>
          ${itemsHtml}
          <div class="footer">
            Generated by Sproutern | sproutern.dpdns.org
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  const completedCount = checklist.filter((item) => item.checked).length;
  const progress =
    checklist.length > 0 ? (completedCount / checklist.length) * 100 : 0;

  return (
    <div className="space-y-8">
      {/* Template Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Choose a Template
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CHECKLIST_TEMPLATES.map((template) => (
              <button
                key={template.id}
                onClick={() => loadTemplate(template.id)}
                className={`rounded-lg border-2 p-4 text-left transition-all hover:shadow-md ${
                  selectedTemplate === template.id && checklist.length > 0
                    ? 'border-primary bg-primary/5'
                    : 'border-muted hover:border-primary/50'
                }`}
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    {template.icon}
                  </div>
                  <h3 className="font-semibold">{template.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
                <p className="mt-2 text-xs text-primary">
                  {template.items.length} items
                </p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Checklist */}
      {checklist.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex-1">
                <Input
                  value={checklistTitle}
                  onChange={(e) => setChecklistTitle(e.target.value)}
                  className="border-none px-0 text-xl font-bold focus-visible:ring-0"
                  placeholder="Checklist Title"
                />
                <div className="mt-2 flex items-center gap-4">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="whitespace-nowrap text-sm text-muted-foreground">
                    {completedCount}/{checklist.length} completed
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetChecklist}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
                <Button
                  size="sm"
                  onClick={printChecklist}
                >
                  <Printer className="mr-2 h-4 w-4" />
                  Print
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Add Custom Item */}
            <div className="mb-6 flex gap-2">
              <Input
                placeholder="Add custom item..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
              />
              <Button
                onClick={addCustomItem}
                disabled={!newItem.trim()}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Checklist Items */}
            <div
              ref={printRef}
              className="space-y-2"
            >
              {checklist.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-3 rounded-lg border p-3 transition-all ${
                    item.checked
                      ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'
                      : 'border-muted bg-background hover:border-primary/30'
                  }`}
                >
                  <Checkbox
                    id={item.id}
                    checked={item.checked}
                    onCheckedChange={() => toggleItem(item.id)}
                    className="mt-0.5"
                  />
                  <label
                    htmlFor={item.id}
                    className={`flex-1 cursor-pointer text-sm ${
                      item.checked ? 'text-muted-foreground line-through' : ''
                    }`}
                  >
                    {item.text}
                  </label>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-muted-foreground hover:text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {checklist.length === 0 && (
        <Card className="py-12 text-center">
          <CardContent>
            <CheckSquare className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-bold">Select a Template</h3>
            <p className="text-muted-foreground">
              Choose a template above to create your printable checklist.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">How to Use This Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                1
              </span>
              <span>
                Select a template that matches your needs (Interview, Resume,
                Placement, etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2
              </span>
              <span>Add any custom items specific to your situation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3
              </span>
              <span>Click Print to generate a clean, printable checklist</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4
              </span>
              <span>
                Check off items as you complete them to track your progress
              </span>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
