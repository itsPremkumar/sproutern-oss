'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  BookOpen,
  Target,
  RotateCcw,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

interface JobRole {
  name: string;
  requiredSkills: string[];
  description: string;
}

const predefinedRoles: JobRole[] = [
  {
    name: 'Software Developer (Frontend)',
    requiredSkills: [
      'JavaScript',
      'React',
      'HTML/CSS',
      'TypeScript',
      'Git',
      'Responsive Design',
      'API Integration',
      'State Management',
    ],
    description: 'Build user interfaces and frontend applications',
  },
  {
    name: 'Software Developer (Backend)',
    requiredSkills: [
      'Python/Java/Node.js',
      'Database (SQL/NoSQL)',
      'REST APIs',
      'System Design',
      'Git',
      'Cloud Services (AWS/Azure)',
      'Microservices',
      'Security',
    ],
    description: 'Develop server-side applications and APIs',
  },
  {
    name: 'Full Stack Developer',
    requiredSkills: [
      'JavaScript/TypeScript',
      'React/Next.js',
      'Node.js/Python',
      'Database',
      'REST APIs',
      'Git',
      'Cloud Services',
      'DevOps Basics',
    ],
    description: 'Work on both frontend and backend systems',
  },
  {
    name: 'Data Scientist',
    requiredSkills: [
      'Python',
      'Machine Learning',
      'Statistics',
      'SQL',
      'Data Visualization',
      'Pandas/NumPy',
      'Jupyter Notebooks',
      'Deep Learning',
    ],
    description: 'Analyze data and build predictive models',
  },
  {
    name: 'Product Manager',
    requiredSkills: [
      'Product Strategy',
      'User Research',
      'Agile/Scrum',
      'Data Analysis',
      'Stakeholder Management',
      'Roadmap Planning',
      'A/B Testing',
      'Communication',
    ],
    description: 'Lead product development and strategy',
  },
  {
    name: 'UI/UX Designer',
    requiredSkills: [
      'Figma/Adobe XD',
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Usability Testing',
      'Visual Design',
      'Interaction Design',
    ],
    description: 'Design user interfaces and experiences',
  },
  {
    name: 'Digital Marketing Specialist',
    requiredSkills: [
      'SEO',
      'Google Analytics',
      'Social Media Marketing',
      'Content Marketing',
      'PPC Advertising',
      'Email Marketing',
      'Marketing Automation',
      'Data Analysis',
    ],
    description: 'Drive online marketing campaigns and growth',
  },
  {
    name: 'DevOps Engineer',
    requiredSkills: [
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Cloud (AWS/Azure/GCP)',
      'Linux',
      'Infrastructure as Code',
      'Monitoring',
      'Scripting (Bash/Python)',
    ],
    description: 'Manage infrastructure and deployment pipelines',
  },
];

export function SkillsGapAnalyzer() {
  const [currentSkills, setCurrentSkills] = useState<Skill[]>([]);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] =
    useState<Skill['level']>('intermediate');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [customRequirements, setCustomRequirements] = useState('');
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [gapAnalysis, setGapAnalysis] = useState<{
    missing: string[];
    existing: string[];
    recommendations: {
      skill: string;
      priority: 'high' | 'medium' | 'low';
      resources: string[];
    }[];
  } | null>(null);

  const addSkill = () => {
    if (
      newSkillName.trim() &&
      !currentSkills.some(
        (s) => s.name.toLowerCase() === newSkillName.toLowerCase(),
      )
    ) {
      setCurrentSkills([
        ...currentSkills,
        { name: newSkillName.trim(), level: newSkillLevel },
      ]);
      setNewSkillName('');
    }
  };

  const removeSkill = (index: number) => {
    setCurrentSkills(currentSkills.filter((_, i) => i !== index));
  };

  const analyzeGap = () => {
    let requiredSkills: string[] = [];

    if (selectedRole) {
      const role = predefinedRoles.find((r) => r.name === selectedRole);
      if (role) {
        requiredSkills = role.requiredSkills;
      }
    } else if (customRequirements) {
      requiredSkills = customRequirements
        .split(/[,\n]/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
    }

    if (requiredSkills.length === 0) {
      return;
    }

    const currentSkillNames = currentSkills.map((s) => s.name.toLowerCase());
    const requiredSkillNames = requiredSkills.map((s) => s.toLowerCase());

    const missing = requiredSkillNames.filter(
      (req) =>
        !currentSkillNames.some(
          (current) =>
            current.includes(req.toLowerCase()) ||
            req.toLowerCase().includes(current),
        ),
    );

    const existing = requiredSkillNames.filter((req) =>
      currentSkillNames.some(
        (current) =>
          current.includes(req.toLowerCase()) ||
          req.toLowerCase().includes(current),
      ),
    );

    // Generate recommendations with priority
    const recommendations = missing
      .map((skill) => {
        let priority: 'high' | 'medium' | 'low' = 'medium';
        const skillLower = skill.toLowerCase();

        // High priority: Core technical skills
        if (
          skillLower.includes('javascript') ||
          skillLower.includes('python') ||
          skillLower.includes('react') ||
          skillLower.includes('database') ||
          skillLower.includes('api') ||
          skillLower.includes('git')
        ) {
          priority = 'high';
        }
        // Low priority: Nice-to-have or advanced skills
        else if (
          skillLower.includes('advanced') ||
          skillLower.includes('expert') ||
          skillLower.includes('optional') ||
          skillLower.includes('bonus')
        ) {
          priority = 'low';
        }

        const resources = getLearningResources(skill);

        return { skill, priority, resources };
      })
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });

    setGapAnalysis({ missing, existing, recommendations });
    setAnalysisComplete(true);
  };

  const getLearningResources = (skill: string): string[] => {
    const skillLower = skill.toLowerCase();
    const resources: string[] = [];

    if (skillLower.includes('javascript') || skillLower.includes('js')) {
      resources.push(
        'MDN JavaScript Guide',
        'JavaScript.info',
        'FreeCodeCamp JavaScript Course',
      );
    } else if (skillLower.includes('react')) {
      resources.push(
        'React Official Docs',
        'React Tutorial by React.dev',
        'Build projects on GitHub',
      );
    } else if (skillLower.includes('python')) {
      resources.push(
        'Python.org Tutorial',
        'Real Python',
        'Automate the Boring Stuff',
      );
    } else if (skillLower.includes('database') || skillLower.includes('sql')) {
      resources.push(
        'SQLBolt',
        'Mode Analytics SQL Tutorial',
        'PostgreSQL Tutorial',
      );
    } else if (skillLower.includes('git')) {
      resources.push(
        'Git Official Docs',
        'Atlassian Git Tutorials',
        'GitHub Learning Lab',
      );
    } else if (skillLower.includes('api') || skillLower.includes('rest')) {
      resources.push(
        'REST API Tutorial',
        'Postman Learning Center',
        'Build REST APIs with Node.js',
      );
    } else if (skillLower.includes('cloud') || skillLower.includes('aws')) {
      resources.push(
        'AWS Free Tier',
        'AWS Training',
        'Cloud Practitioner Certification',
      );
    } else if (skillLower.includes('docker')) {
      resources.push(
        'Docker Official Docs',
        'Docker Tutorial for Beginners',
        'Play with Docker',
      );
    } else {
      resources.push(
        'Search on Coursera/Udemy',
        'Find YouTube tutorials',
        'Join relevant communities',
      );
    }

    return resources;
  };

  const reset = () => {
    setCurrentSkills([]);
    setSelectedRole('');
    setCustomRequirements('');
    setAnalysisComplete(false);
    setGapAnalysis(null);
  };

  if (analysisComplete && gapAnalysis) {
    const matchPercentage = Math.round(
      (gapAnalysis.existing.length /
        (gapAnalysis.existing.length + gapAnalysis.missing.length)) *
        100,
    );

    return (
      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
          <CardContent className="pb-8 pt-8">
            <Target className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-2 text-3xl font-bold">
              Skills Gap Analysis Complete!
            </h2>
            <div className="mb-2 text-5xl font-bold text-primary">
              {matchPercentage}%
            </div>
            <p className="text-muted-foreground">
              Skill Match - {gapAnalysis.existing.length} of{' '}
              {gapAnalysis.existing.length + gapAnalysis.missing.length}{' '}
              required skills
            </p>
          </CardContent>
        </Card>

        {/* Existing Skills */}
        {gapAnalysis.existing.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Skills You Already Have ({gapAnalysis.existing.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {gapAnalysis.existing.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="default"
                    className="bg-green-500"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Missing Skills */}
        {gapAnalysis.missing.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <AlertCircle className="h-5 w-5" />
                Skills to Develop ({gapAnalysis.missing.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {gapAnalysis.recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="rounded-lg border p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold">{rec.skill}</span>
                      <Badge
                        variant={
                          rec.priority === 'high'
                            ? 'destructive'
                            : rec.priority === 'medium'
                              ? 'default'
                              : 'secondary'
                        }
                      >
                        {rec.priority.toUpperCase()} Priority
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <p className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <BookOpen className="h-4 w-4" />
                        Learning Resources:
                      </p>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        {rec.resources.map((resource, j) => (
                          <li key={j}>{resource}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Plan */}
        <Card className="bg-blue-50 dark:bg-blue-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Recommended Action Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-inside list-decimal space-y-3">
              <li>
                <strong>Focus on High Priority Skills First:</strong> Start with
                core technical skills that are most critical for the role.
              </li>
              <li>
                <strong>Set Learning Goals:</strong> Aim to learn 2-3 skills per
                month. Break down each skill into smaller milestones.
              </li>
              <li>
                <strong>Practice with Projects:</strong> Build real projects
                using the skills you're learning. Add them to your portfolio.
              </li>
              <li>
                <strong>Track Progress:</strong> Re-run this analysis monthly to
                see your improvement.
              </li>
              <li>
                <strong>Get Feedback:</strong> Share your projects with peers or
                mentors for constructive feedback.
              </li>
            </ol>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button
            onClick={reset}
            variant="outline"
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Analyze Another Role
          </Button>
          <Button
            onClick={() => window.print()}
            variant="outline"
            className="gap-2"
          >
            Print Report
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Current Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle>Your Current Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter skill name (e.g., JavaScript, Python, React)"
              value={newSkillName}
              onChange={(e) => setNewSkillName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            />
            <Select
              value={newSkillLevel}
              onValueChange={(v) => setNewSkillLevel(v as Skill['level'])}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={addSkill}>Add</Button>
          </div>

          {currentSkills.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Your Skills ({currentSkills.length}):
              </p>
              <div className="flex flex-wrap gap-2">
                {currentSkills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="flex items-center gap-2 py-1.5"
                  >
                    {skill.name}
                    <span className="text-xs opacity-70">({skill.level})</span>
                    <button
                      onClick={() => removeSkill(i)}
                      className="ml-1 hover:text-destructive"
                    >
                      <XCircle className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Job Requirements Section */}
      <Card>
        <CardHeader>
          <CardTitle>Target Job Requirements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Select a Job Role (or enter custom requirements below)
            </label>
            <Select
              value={selectedRole}
              onValueChange={(v) => {
                setSelectedRole(v);
                setCustomRequirements('');
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a role..." />
              </SelectTrigger>
              <SelectContent>
                {predefinedRoles.map((role) => (
                  <SelectItem
                    key={role.name}
                    value={role.name}
                  >
                    {role.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedRole && (
              <p className="mt-2 text-sm text-muted-foreground">
                {
                  predefinedRoles.find((r) => r.name === selectedRole)
                    ?.description
                }
              </p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OR
              </span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Enter Custom Job Requirements
            </label>
            <Textarea
              placeholder="Enter required skills separated by commas or new lines (e.g., JavaScript, React, Node.js, MongoDB)"
              value={customRequirements}
              onChange={(e) => {
                setCustomRequirements(e.target.value);
                setSelectedRole('');
              }}
              rows={4}
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Separate skills with commas or new lines
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Analyze Button */}
      <Button
        onClick={analyzeGap}
        className="w-full gap-2"
        size="lg"
        disabled={
          currentSkills.length === 0 ||
          (!selectedRole && !customRequirements.trim())
        }
      >
        <Search className="h-5 w-5" />
        Analyze Skills Gap
        <ArrowRight className="h-5 w-5" />
      </Button>

      {/* Info Card */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <TrendingUp className="mt-0.5 h-5 w-5 text-primary" />
            <div className="space-y-2">
              <p className="font-medium">How to Use This Tool</p>
              <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                <li>
                  Add all your current skills with their proficiency levels
                </li>
                <li>Select a job role or enter custom job requirements</li>
                <li>
                  Click "Analyze Skills Gap" to see what you need to learn
                </li>
                <li>
                  Get personalized learning recommendations for each missing
                  skill
                </li>
                <li>Use the action plan to prioritize your learning journey</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
