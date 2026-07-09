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
import {
  FileText,
  Copy,
  CheckCircle,
  GraduationCap,
  Briefcase,
  Globe,
} from 'lucide-react';

type DocumentType = 'lor' | 'sop';
type FormatType = 'us' | 'uk' | 'germany' | 'canada' | 'general';

interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  placeholder: string;
  options?: string[];
}

const formatInfo: Record<
  FormatType,
  { name: string; flag: string; description: string }
> = {
  us: {
    name: 'US Graduate School',
    flag: '🇺🇸',
    description: 'Standard format for US universities',
  },
  uk: {
    name: 'UK UCAS Style',
    flag: '🇬🇧',
    description: 'Formal British academic format',
  },
  germany: {
    name: 'German (Motivationsschreiben)',
    flag: '🇩🇪',
    description: 'Structured German motivation letter',
  },
  canada: {
    name: 'Canadian Format',
    flag: '🇨🇦',
    description: 'Canadian university standard',
  },
  general: {
    name: 'General/International',
    flag: '🌍',
    description: 'Universal format for any country',
  },
};

const lorFields: FieldConfig[] = [
  {
    name: 'studentName',
    label: 'Student Name',
    type: 'text',
    placeholder: 'John Doe',
  },
  {
    name: 'recommenderName',
    label: 'Recommender Name',
    type: 'text',
    placeholder: 'Dr. Jane Smith',
  },
  {
    name: 'recommenderTitle',
    label: 'Recommender Designation',
    type: 'text',
    placeholder: 'Professor, Computer Science',
  },
  {
    name: 'institution',
    label: 'Institution/Company',
    type: 'text',
    placeholder: 'MIT Chennai',
  },
  {
    name: 'relationship',
    label: 'Relationship',
    type: 'text',
    placeholder: 'Professor for 2 years',
  },
  {
    name: 'programApplying',
    label: 'Program Applying For',
    type: 'text',
    placeholder: 'MS in Computer Science',
  },
  {
    name: 'targetUniversity',
    label: 'Target University',
    type: 'text',
    placeholder: 'Stanford University',
  },
  {
    name: 'strengths',
    label: 'Key Strengths',
    type: 'textarea',
    placeholder:
      'Strong analytical skills, excellent problem-solving abilities, leadership qualities',
  },
  {
    name: 'achievements',
    label: 'Notable Achievements',
    type: 'textarea',
    placeholder: 'Led a team project, published research paper, won hackathon',
  },
];

const sopFields: FieldConfig[] = [
  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
  {
    name: 'currentEducation',
    label: 'Current Education',
    type: 'text',
    placeholder: 'B.Tech in Computer Science, MIT Chennai',
  },
  {
    name: 'programApplying',
    label: 'Program Applying For',
    type: 'text',
    placeholder: 'MS in Computer Science',
  },
  {
    name: 'targetUniversity',
    label: 'Target University',
    type: 'text',
    placeholder: 'Stanford University',
  },
  {
    name: 'whyThisField',
    label: 'Why This Field?',
    type: 'textarea',
    placeholder:
      'Interest in AI/ML since school, passion for solving real-world problems',
  },
  {
    name: 'relevantExperience',
    label: 'Relevant Experience',
    type: 'textarea',
    placeholder:
      'Internship at Google, research project on NLP, published paper',
  },
  {
    name: 'whyThisUniversity',
    label: 'Why This University?',
    type: 'textarea',
    placeholder: 'Faculty expertise in AI, research labs, industry connections',
  },
  {
    name: 'careerGoals',
    label: 'Career Goals',
    type: 'textarea',
    placeholder:
      'Become an AI researcher, work on healthcare AI, start a tech company',
  },
  {
    name: 'uniqueQualities',
    label: 'What Makes You Unique?',
    type: 'textarea',
    placeholder: 'Diverse background, leadership experience, publications',
  },
];

const generateLOR = (data: Record<string, string>, format: FormatType) => {
  const date = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  if (format === 'uk') {
    return `ACADEMIC REFERENCE

${date}

To the Admissions Committee,

I am pleased to provide this reference for ${data.studentName} in support of their application to the ${data.programApplying} programme at ${data.targetUniversity}.

I have known ${data.studentName} for the duration of their studies as their ${data.relationship} at ${data.institution}. During this time, I have been consistently impressed by their academic abilities and personal qualities.

${data.studentName} has demonstrated exceptional capability in the following areas: ${data.strengths}. These qualities are particularly valuable for success in postgraduate study.

Notable achievements include: ${data.achievements}. These accomplishments reflect their dedication to academic excellence and their ability to work independently and collaboratively.

I can confirm that ${data.studentName} ranks among the top students I have supervised and I commend them to you without reservation.

Yours faithfully,

${data.recommenderName}
${data.recommenderTitle}
${data.institution}`;
  }

  if (format === 'germany') {
    return `GUTACHTEN / REFERENCE LETTER

Datum: ${date}

An die Zulassungskommission / To the Admissions Committee,

Betreff: Empfehlungsschreiben für ${data.studentName}

Sehr geehrte Damen und Herren,

Ich schreibe dieses Empfehlungsschreiben für ${data.studentName}, der/die sich für das ${data.programApplying} Programm an der ${data.targetUniversity} bewirbt.

Als ${data.relationship} an der ${data.institution} hatte ich die Gelegenheit, ${data.studentName} über einen längeren Zeitraum zu betreuen und zu beobachten.

${data.studentName} zeichnet sich durch folgende Stärken aus: ${data.strengths}.

Besonders hervorzuheben sind folgende Leistungen: ${data.achievements}.

Ich bin überzeugt, dass ${data.studentName} alle Voraussetzungen für den erfolgreichen Abschluss des angestrebten Studiums mitbringt und empfehle die Aufnahme nachdrücklich.

Mit freundlichen Grüßen,

${data.recommenderName}
${data.recommenderTitle}
${data.institution}`;
  }

  if (format === 'canada') {
    return `LETTER OF REFERENCE

${date}

To Whom It May Concern:

RE: Letter of Reference for ${data.studentName}

I am writing to recommend ${data.studentName} for admission to the ${data.programApplying} program at ${data.targetUniversity}.

In my capacity as ${data.relationship} at ${data.institution}, I have had the opportunity to observe ${data.studentName}'s academic progress and personal development.

Key Strengths and Competencies:
${data.strengths}

Notable Accomplishments:
${data.achievements}

Based on my experience working with ${data.studentName}, I am confident they will make a valuable contribution to your program and university community. I recommend them highly and without hesitation.

Should you require any additional information, please do not hesitate to contact me.

Respectfully,

${data.recommenderName}
${data.recommenderTitle}
${data.institution}`;
  }

  // US and General format
  return `LETTER OF RECOMMENDATION

To Whom It May Concern,

Date: ${date}

I am writing to strongly recommend ${data.studentName} for admission to the ${data.programApplying} program at ${data.targetUniversity}. I have had the pleasure of knowing ${data.studentName} as their ${data.relationship} at ${data.institution}.

During this time, I have observed ${data.studentName} to be an exceptional individual with remarkable qualities. ${data.studentName} has consistently demonstrated ${data.strengths}.

${data.studentName}'s achievements are noteworthy: ${data.achievements}. These accomplishments reflect their dedication, intellectual curiosity, and ability to excel in challenging environments.

I am confident that ${data.studentName} possesses the academic aptitude, professional skills, and personal qualities necessary to succeed in your program. They have my highest recommendation without reservation.

Please feel free to contact me if you require any additional information.

Sincerely,

${data.recommenderName}
${data.recommenderTitle}
${data.institution}`;
};

const generateSOP = (data: Record<string, string>, format: FormatType) => {
  if (format === 'uk') {
    return `PERSONAL STATEMENT

${data.programApplying} at ${data.targetUniversity}

From an early age, I have been fascinated by the possibilities within my chosen field. Currently completing ${data.currentEducation}, I am applying for the ${data.programApplying} programme to further develop my expertise and contribute to cutting-edge research.

MOTIVATION AND ACADEMIC INTEREST
${data.whyThisField}

ACADEMIC BACKGROUND AND EXPERIENCE
My academic journey has been characterised by a commitment to excellence and practical application. ${data.relevantExperience}

WHY ${data.targetUniversity.toUpperCase()}?
I have researched extensively the opportunities available at ${data.targetUniversity}, and I am particularly drawn to the institution because: ${data.whyThisUniversity}

FUTURE ASPIRATIONS
Upon completion of this programme, ${data.careerGoals}. I am confident that ${data.targetUniversity} will provide the foundation necessary to achieve these goals.

WHAT I OFFER
${data.uniqueQualities}

I am committed to making a meaningful contribution to ${data.targetUniversity}'s academic community whilst developing myself both personally and professionally.

${data.name}`;
  }

  if (format === 'germany') {
    return `MOTIVATIONSSCHREIBEN

${data.programApplying} an der ${data.targetUniversity}

Sehr geehrte Damen und Herren,

Mit großem Interesse bewerbe ich mich für das ${data.programApplying} Programm an der ${data.targetUniversity}. Derzeit absolviere ich ${data.currentEducation} und möchte meine akademische Laufbahn an Ihrer renommierten Institution fortsetzen.

MOTIVATION FÜR DAS STUDIENFACH
${data.whyThisField}

AKADEMISCHER HINTERGRUND UND PRAKTISCHE ERFAHRUNG
${data.relevantExperience}

Diese Erfahrungen haben meine Kompetenzen gestärkt und mein Engagement für dieses Fachgebiet vertieft.

WARUM ${data.targetUniversity.toUpperCase()}?
${data.whyThisUniversity}

Das Programm entspricht perfekt meinen akademischen Interessen und beruflichen Zielen.

KARRIEREZIELE
${data.careerGoals}

Ich bin überzeugt, dass das ${data.programApplying} Programm mir das notwendige Wissen und die Fähigkeiten vermitteln wird, um diese Ziele zu erreichen.

MEINE STÄRKEN
${data.uniqueQualities}

Ich freue mich auf die Möglichkeit, Teil Ihrer akademischen Gemeinschaft zu werden.

Mit freundlichen Grüßen,
${data.name}`;
  }

  if (format === 'canada') {
    return `STATEMENT OF INTENT

Application for: ${data.programApplying} at ${data.targetUniversity}

INTRODUCTION
As a candidate currently pursuing ${data.currentEducation}, I am writing to express my strong interest in the ${data.programApplying} program at ${data.targetUniversity}.

MOTIVATION FOR GRADUATE STUDY
${data.whyThisField}

RELEVANT BACKGROUND AND QUALIFICATIONS
Throughout my academic career, I have sought opportunities to develop both theoretical knowledge and practical skills. ${data.relevantExperience}

These experiences have prepared me well for the rigours of graduate study and research.

FIT WITH ${data.targetUniversity.toUpperCase()}
${data.whyThisUniversity}

The program's strengths align well with my research interests and career objectives.

CAREER OBJECTIVES
${data.careerGoals}

I believe that studying at ${data.targetUniversity} will provide me with the necessary expertise to achieve these goals and contribute meaningfully to the field.

UNIQUE CONTRIBUTIONS
${data.uniqueQualities}

I look forward to the opportunity to contribute to and learn from the vibrant academic community at ${data.targetUniversity}.

Respectfully submitted,
${data.name}`;
  }

  // US and General format
  return `STATEMENT OF PURPOSE

${data.programApplying} at ${data.targetUniversity}

My journey into the world of technology and computer science began with a simple curiosity that has since evolved into a deep passion. Currently pursuing ${data.currentEducation}, I am writing to express my strong interest in the ${data.programApplying} program at ${data.targetUniversity}.

WHY THIS FIELD?
${data.whyThisField}

ACADEMIC AND PROFESSIONAL BACKGROUND
Throughout my academic journey, I have actively sought opportunities to expand my knowledge and gain practical experience. ${data.relevantExperience}

These experiences have not only strengthened my technical skills but also reinforced my commitment to pursuing advanced studies in this field.

WHY ${data.targetUniversity.toUpperCase()}?
${data.whyThisUniversity}

The program's emphasis on research and innovation aligns perfectly with my academic interests and career aspirations.

CAREER GOALS
Looking ahead, ${data.careerGoals}. I believe that the ${data.programApplying} program at ${data.targetUniversity} will provide me with the knowledge, skills, and network necessary to achieve these goals.

WHAT I BRING
${data.uniqueQualities}

I am confident that my background, skills, and determination make me a strong candidate for this program. I am excited about the opportunity to contribute to and learn from the academic community at ${data.targetUniversity}.

Thank you for considering my application.

Sincerely,
${data.name}`;
};

export default function LorSopGeneratorClient() {
  const [docType, setDocType] = useState<DocumentType>('lor');
  const [format, setFormat] = useState<FormatType>('us');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [generatedText, setGeneratedText] = useState('');
  const [copied, setCopied] = useState(false);

  const fields = docType === 'lor' ? lorFields : sopFields;

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleGenerate = () => {
    const text =
      docType === 'lor'
        ? generateLOR(formData, format)
        : generateSOP(formData, format);
    setGeneratedText(text);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDocTypeChange = (value: DocumentType) => {
    setDocType(value);
    setFormData({});
    setGeneratedText('');
  };

  return (
    <div className="space-y-8">
      {/* International Format Selection */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            🌍 International Document Formats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Select a format based on your target country. Each format follows
            country-specific academic conventions.
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {(Object.keys(formatInfo) as FormatType[]).map((key) => (
              <button
                key={key}
                onClick={() => setFormat(key)}
                className={`rounded-lg border p-3 text-left transition-all ${
                  format === key
                    ? 'border-primary bg-primary/10 ring-2 ring-primary'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="text-lg">{formatInfo[key].flag}</div>
                <div className="text-sm font-medium">
                  {formatInfo[key].name}
                </div>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Selected: <strong>{formatInfo[format].description}</strong>
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Generate Document
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Document Type</Label>
              <div className="mt-2 flex gap-2">
                <Button
                  variant={docType === 'lor' ? 'default' : 'outline'}
                  onClick={() => handleDocTypeChange('lor')}
                  className="flex-1"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  LOR
                </Button>
                <Button
                  variant={docType === 'sop' ? 'default' : 'outline'}
                  onClick={() => handleDocTypeChange('sop')}
                  className="flex-1"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  SOP
                </Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {docType === 'lor'
                  ? 'Letter of Recommendation - Written by a professor/employer recommending you'
                  : 'Statement of Purpose - Your personal essay for university applications'}
              </p>
            </div>

            {fields.map((field) => (
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
                    rows={3}
                  />
                ) : field.type === 'select' ? (
                  <Select
                    value={formData[field.name] || ''}
                    onValueChange={(value) =>
                      handleInputChange(field.name, value)
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((opt) => (
                        <SelectItem
                          key={opt}
                          value={opt}
                        >
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    className="mt-1"
                    type="text"
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
              <FileText className="mr-2 h-4 w-4" />
              Generate {formatInfo[format].flag}{' '}
              {docType === 'lor' ? 'LOR' : 'SOP'}
            </Button>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                Preview
                {generatedText && (
                  <Badge variant="secondary">{formatInfo[format].name}</Badge>
                )}
              </span>
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
              <div className="max-h-[600px] overflow-y-auto whitespace-pre-wrap rounded-lg bg-muted p-4 font-mono text-sm">
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

      {/* Format Tips */}
      <Card>
        <CardHeader>
          <CardTitle>📝 Format-Specific Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-4">
              <div className="mb-2 text-lg">🇺🇸 US</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Direct and achievement-focused</li>
                <li>• Quantify accomplishments</li>
                <li>• 500-1000 words for SOP</li>
                <li>• Personal anecdotes welcome</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 text-lg">🇬🇧 UK</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• More formal academic tone</li>
                <li>• 4000 characters for UCAS</li>
                <li>• Focus on subject passion</li>
                <li>• Reference: "programme" not "program"</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 text-lg">🇩🇪 Germany</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Very structured format</li>
                <li>• Include earliest start date</li>
                <li>• Bilingual accepted at many unis</li>
                <li>• Formal salutations required</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 text-lg">🇨🇦 Canada</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Similar to US but more modest</li>
                <li>• Research fit is crucial</li>
                <li>• Mention supervisor interest</li>
                <li>• Community involvement valued</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
