'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  Briefcase,
  GraduationCap,
  Code,
  TrendingUp,
} from 'lucide-react';

type ProfileType = 'student' | 'fresher' | 'professional' | 'career-changer';
type Industry = 'tech' | 'finance' | 'marketing' | 'consulting' | 'other';

interface GeneratedContent {
  headlines: string[];
  summary: string;
  tips: string[];
}

const headlineTemplates: Record<ProfileType, string[]> = {
  student: [
    '{role} Student at {college} | {skills} | {interest}',
    "Aspiring {role} | {skills} Enthusiast | {college} '{year}",
    '{college} | {role} | Building skills in {skills}',
    'Future {role} | {skills} | Open to Internships',
    '{skills} Student | Seeking {role} Opportunities | {college}',
  ],
  fresher: [
    '{role} | {skills} | Recent Graduate from {college}',
    'Entry-level {role} | {skills} | Open to Opportunities',
    '{college} Graduate | {role} | {skills}',
    'Passionate {role} | {skills} | Ready to Contribute',
    '{skills} Specialist | {role} | Fresh Perspective, Strong Foundation',
  ],
  professional: [
    '{role} at {company} | {skills} | {years}+ Years Experience',
    '{role} | {skills} Expert | Helping {audience} achieve {goal}',
    'Senior {role} | {skills} | {company}',
    '{role} @ {company} | {skills} | {interest}',
    '{skills} {role} | Building {product} at {company}',
  ],
  'career-changer': [
    'Transitioning to {role} | Background in {previous} | {skills}',
    'Former {previous} → {role} | {skills} | Unique Perspective',
    '{role} (Career Transition) | {skills} | Ex-{previous}',
    'Pivoting to {role} | {skills} | Bringing {previous} Experience',
    '{previous} turned {role} | {skills} | Fresh Approach',
  ],
};

const summaryTemplates: Record<ProfileType, string> = {
  student: `I'm a {role} student at {college}, passionate about {interest}. Currently building expertise in {skills} through coursework and personal projects.

🎯 What I'm looking for: {goal}

💡 What drives me: {motivation}

🛠️ Skills: {skillsList}

Feel free to connect if you're hiring interns or want to discuss {interest}!`,

  fresher: `Recent {college} graduate with a focus on {role}. I bring fresh perspectives, strong fundamentals in {skills}, and an eagerness to learn and contribute.

🎯 Career Goal: {goal}

📚 Education: {degree} from {college}

🛠️ Technical Skills: {skillsList}

💼 Open to: Entry-level {role} positions

Let's connect! I'm excited to start my professional journey.`,

  professional: `{role} with {years}+ years of experience in {industry}. I specialize in {skills} and have helped {achievement}.

🎯 What I do: {description}

💡 Expertise: {skillsList}

🏆 Key Achievement: {achievement}

Currently at {company}, focused on {focus}.

Let's connect to discuss {interest} or explore collaboration opportunities.`,

  'career-changer': `Transitioning from {previous} to {role}, bringing a unique combination of {previousSkills} experience and newly developed {skills} expertise.

🔄 Why the transition: {motivation}

📚 Learning Journey: {learning}

🛠️ Transferable Skills: {skillsList}

🎯 Goal: {goal}

Open to opportunities where I can leverage my diverse background to add unique value.`,
};

export function LinkedInGenerator() {
  const [profileType, setProfileType] = useState<ProfileType>('student');
  const [formData, setFormData] = useState({
    role: '',
    college: '',
    company: '',
    skills: '',
    interest: '',
    year: '',
    years: '',
    goal: '',
    motivation: '',
    previous: '',
    achievement: '',
    degree: '',
    industry: '',
  });
  const [generated, setGenerated] = useState<GeneratedContent | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const generateContent = () => {
    const templates = headlineTemplates[profileType];
    const headlines = templates.map((template) => {
      let result = template;
      Object.entries(formData).forEach(([key, value]) => {
        result = result.replace(
          new RegExp(`{${key}}`, 'g'),
          value || `[${key}]`,
        );
      });
      return result;
    });

    let summary = summaryTemplates[profileType];
    Object.entries(formData).forEach(([key, value]) => {
      summary = summary.replace(
        new RegExp(`{${key}}`, 'g'),
        value || `[${key}]`,
      );
    });

    // Create skillsList from skills
    const skillsList = formData.skills
      .split(',')
      .map((s) => s.trim())
      .join(' • ');
    summary = summary.replace(/{skillsList}/g, skillsList || '[skills]');

    const tips = getTips(profileType);

    setGenerated({ headlines, summary, tips });
  };

  const getTips = (type: ProfileType): string[] => {
    const commonTips = [
      'Use a professional headshot with good lighting',
      'Add relevant keywords for searchability',
      'Keep headline under 120 characters',
      'Update your profile URL to your name',
    ];

    const typeTips: Record<ProfileType, string[]> = {
      student: [
        'Include expected graduation year',
        'Highlight internships and projects',
        'Join relevant LinkedIn groups',
        'Request recommendations from professors',
      ],
      fresher: [
        'Highlight academic projects and achievements',
        'Get recommendations from internship supervisors',
        'Showcase certifications and courses',
        'Be active: like, comment, and share industry content',
      ],
      professional: [
        'Quantify achievements with numbers',
        'Get recommendations from colleagues and managers',
        'Share industry insights regularly',
        'Use action verbs in your experience section',
      ],
      'career-changer': [
        'Emphasize transferable skills',
        'Share your career transition story',
        'Get certifications in your new field',
        'Connect with people in your target industry',
      ],
    };

    return [...typeTips[type], ...commonTips];
  };

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copySummary = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const getRequiredFields = (): {
    field: string;
    label: string;
    placeholder: string;
  }[] => {
    const common = [
      {
        field: 'role',
        label: 'Target Role',
        placeholder: 'e.g., Software Engineer, Data Analyst',
      },
      {
        field: 'skills',
        label: 'Key Skills (comma separated)',
        placeholder: 'e.g., Python, SQL, Machine Learning',
      },
    ];

    switch (profileType) {
      case 'student':
        return [
          ...common,
          {
            field: 'college',
            label: 'College/University',
            placeholder: 'e.g., IIT Delhi, VIT',
          },
          {
            field: 'year',
            label: 'Graduation Year',
            placeholder: 'e.g., 2025',
          },
          {
            field: 'interest',
            label: 'Interest/Focus Area',
            placeholder: 'e.g., AI/ML, Web Development',
          },
          {
            field: 'goal',
            label: "What you're looking for",
            placeholder: 'e.g., Summer internship in tech',
          },
          {
            field: 'motivation',
            label: 'What drives you',
            placeholder: 'e.g., Solving real-world problems with code',
          },
        ];
      case 'fresher':
        return [
          ...common,
          {
            field: 'college',
            label: 'College/University',
            placeholder: 'e.g., NIT Trichy',
          },
          {
            field: 'degree',
            label: 'Degree',
            placeholder: 'e.g., B.Tech in Computer Science',
          },
          {
            field: 'goal',
            label: 'Career Goal',
            placeholder: 'e.g., Become a product-focused developer',
          },
        ];
      case 'professional':
        return [
          ...common,
          {
            field: 'company',
            label: 'Current Company',
            placeholder: 'e.g., Google, TCS',
          },
          {
            field: 'years',
            label: 'Years of Experience',
            placeholder: 'e.g., 5',
          },
          {
            field: 'industry',
            label: 'Industry',
            placeholder: 'e.g., Tech, Finance',
          },
          {
            field: 'achievement',
            label: 'Key Achievement',
            placeholder: 'e.g., Scaled platform to 1M users',
          },
          {
            field: 'interest',
            label: 'Interest/Focus',
            placeholder: 'e.g., Building scalable systems',
          },
        ];
      case 'career-changer':
        return [
          ...common,
          {
            field: 'previous',
            label: 'Previous Role/Industry',
            placeholder: 'e.g., Teacher, Marketing Manager',
          },
          {
            field: 'motivation',
            label: 'Why the transition',
            placeholder: 'e.g., Passion for building products',
          },
          {
            field: 'goal',
            label: 'Career Goal',
            placeholder: 'e.g., Land first developer role',
          },
        ];
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Type Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Select Your Profile Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              {
                type: 'student' as ProfileType,
                icon: GraduationCap,
                label: 'Student',
              },
              {
                type: 'fresher' as ProfileType,
                icon: Sparkles,
                label: 'Fresher',
              },
              {
                type: 'professional' as ProfileType,
                icon: Briefcase,
                label: 'Professional',
              },
              {
                type: 'career-changer' as ProfileType,
                icon: TrendingUp,
                label: 'Career Changer',
              },
            ].map(({ type, icon: Icon, label }) => (
              <button
                key={type}
                onClick={() => setProfileType(type)}
                className={`rounded-lg border p-4 text-center transition-all ${
                  profileType === type
                    ? 'border-primary bg-primary/10'
                    : 'hover:border-primary/50'
                }`}
              >
                <Icon className="mx-auto mb-2 h-6 w-6" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {getRequiredFields().map(({ field, label, placeholder }) => (
            <div key={field}>
              <label className="text-sm font-medium">{label}</label>
              <input
                type="text"
                placeholder={placeholder}
                value={formData[field as keyof typeof formData]}
                onChange={(e) => handleInputChange(field, e.target.value)}
                className="mt-1 w-full rounded-md border p-2"
              />
            </div>
          ))}
          <Button
            onClick={generateContent}
            className="w-full gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Generate Headlines & Summary
          </Button>
        </CardContent>
      </Card>

      {/* Generated Content */}
      {generated && (
        <>
          {/* Headlines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code className="h-5 w-5" />
                Generated Headlines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {generated.headlines.map((headline, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg bg-muted p-3"
                >
                  <p className="mr-3 flex-1 text-sm">{headline}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(headline, i)}
                  >
                    {copiedIndex === i ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Summary */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Generated Summary</CardTitle>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copySummary(generated.summary)}
                className="gap-2"
              >
                {copiedSummary ? (
                  <>
                    <Check className="h-4 w-4 text-green-600" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap rounded-lg bg-muted p-4 font-sans text-sm">
                {generated.summary}
              </pre>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Profile Optimization Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {generated.tips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
