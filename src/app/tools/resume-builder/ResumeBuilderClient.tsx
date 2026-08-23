'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  Plus,
  Trash2,
  Download,
  Eye,
  Sparkles,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from 'lucide-react';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
}

export default function ResumeBuilderClient() {
  const [activeTab, setActiveTab] = useState('personal');
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    summary: '',
  });

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<string>('');
  const [certifications, setCertifications] = useState<string>('');

  // Generate unique ID
  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Experience handlers
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: generateId(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      },
    ]);
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: string | boolean,
  ) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      ),
    );
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  // Education handlers
  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: generateId(),
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
      },
    ]);
  };

  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string,
  ) => {
    setEducation(
      education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu,
      ),
    );
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  // Project handlers
  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: generateId(),
        name: '',
        description: '',
        technologies: '',
        link: '',
      },
    ]);
  };

  const updateProject = (id: string, field: keyof Project, value: string) => {
    setProjects(
      projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj,
      ),
    );
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  // Generate resume preview
  const generateResumeHTML = () => {
    const skillsList = skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const certList = certifications
      .split('\n')
      .map((c) => c.trim())
      .filter(Boolean);

    // Sanitize function to prevent XSS
    const escapeHtml = (unsafe: string) => {
      return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    return `
      <div style="max-width: 800px; margin: 0 auto; padding: 40px; font-family: 'Arial', sans-serif; line-height: 1.6;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563eb; padding-bottom: 20px;">
          <h2 style="margin: 0; font-size: 28px; color: #1f2937;">${escapeHtml(personalInfo.fullName || 'Your Name')}</h2>
          <div style="margin-top: 10px; color: #6b7280; font-size: 14px;">
            ${personalInfo.email ? `<span>📧 ${escapeHtml(personalInfo.email)}</span>` : ''}
            ${personalInfo.phone ? ` | <span>📱 ${escapeHtml(personalInfo.phone)}</span>` : ''}
            ${personalInfo.location ? ` | <span>📍 ${escapeHtml(personalInfo.location)}</span>` : ''}
          </div>
          <div style="margin-top: 5px; color: #6b7280; font-size: 14px;">
            ${personalInfo.linkedin ? `<span>LinkedIn: ${escapeHtml(personalInfo.linkedin)}</span>` : ''}
            ${personalInfo.github ? ` | <span>GitHub: ${escapeHtml(personalInfo.github)}</span>` : ''}
          </div>
        </div>

        ${
          personalInfo.summary
            ? `
        <!-- Summary -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 16px; color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 10px;">PROFESSIONAL SUMMARY</h2>
          <p style="color: #374151; margin: 0;">${escapeHtml(personalInfo.summary)}</p>
        </div>
        `
            : ''
        }

        ${
          education.length > 0
            ? `
        <!-- Education -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 16px; color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 10px;">EDUCATION</h2>
          ${education
            .map(
              (edu) => `
            <div style="margin-bottom: 15px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="margin: 0; font-size: 15px; color: #1f2937;">${escapeHtml(edu.institution)}</h3>
                <span style="color: #6b7280; font-size: 13px;">${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)}</span>
              </div>
              <p style="margin: 2px 0; color: #374151;">${escapeHtml(edu.degree)} in ${escapeHtml(edu.field)}</p>
              ${edu.gpa ? `<p style="margin: 2px 0; color: #6b7280; font-size: 13px;">GPA/CGPA: ${escapeHtml(edu.gpa)}</p>` : ''}
            </div>
          `,
            )
            .join('')}
        </div>
        `
            : ''
        }

        ${
          experiences.length > 0
            ? `
        <!-- Experience -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 16px; color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 10px;">EXPERIENCE</h2>
          ${experiences
            .map(
              (exp) => `
            <div style="margin-bottom: 15px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <h3 style="margin: 0; font-size: 15px; color: #1f2937;">${escapeHtml(exp.position)}</h3>
                <span style="color: #6b7280; font-size: 13px;">${escapeHtml(exp.startDate)} - ${exp.current ? 'Present' : escapeHtml(exp.endDate)}</span>
              </div>
              <p style="margin: 2px 0; color: #374151; font-weight: 500;">${escapeHtml(exp.company)}</p>
              <p style="margin: 5px 0; color: #4b5563; font-size: 14px;">${escapeHtml(exp.description)}</p>
            </div>
          `,
            )
            .join('')}
        </div>
        `
            : ''
        }

        ${
          projects.length > 0
            ? `
        <!-- Projects -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 16px; color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 10px;">PROJECTS</h2>
          ${projects
            .map(
              (proj) => `
            <div style="margin-bottom: 15px;">
              <h3 style="margin: 0; font-size: 15px; color: #1f2937;">${escapeHtml(proj.name)}</h3>
              <p style="margin: 5px 0; color: #4b5563; font-size: 14px;">${escapeHtml(proj.description)}</p>
              ${proj.technologies ? `<p style="margin: 2px 0; color: #6b7280; font-size: 13px;"><strong>Technologies:</strong> ${escapeHtml(proj.technologies)}</p>` : ''}
            </div>
          `,
            )
            .join('')}
        </div>
        `
            : ''
        }

        ${
          skillsList.length > 0
            ? `
        <!-- Skills -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 16px; color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 10px;">SKILLS</h2>
          <p style="color: #374151; margin: 0;">${skillsList.map((s) => escapeHtml(s)).join(' • ')}</p>
        </div>
        `
            : ''
        }

        ${
          certList.length > 0
            ? `
        <!-- Certifications -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 16px; color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 10px;">CERTIFICATIONS</h2>
          <ul style="margin: 0; padding-left: 20px; color: #374151;">
            ${certList.map((cert) => `<li>${escapeHtml(cert)}</li>`).join('')}
          </ul>
        </div>
        `
            : ''
        }
      </div>
    `;
  };

  const downloadResume = () => {
    const resumeHTML = generateResumeHTML();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${personalInfo.fullName || 'Resume'} - Resume</title>
            <style>
              @media print {
                body { margin: 0; }
                @page { margin: 0.5in; }
              }
            </style>
          </head>
          <body>
            ${resumeHTML}
            <script>
              setTimeout(() => {
                window.print();
              }, 500);
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form Section */}
      <div>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="mb-6 grid h-auto grid-cols-2 sm:grid-cols-5">
            <TabsTrigger
              value="personal"
              className="text-xs"
            >
              <User className="mr-1 hidden h-4 w-4 sm:inline" />
              Personal
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="text-xs"
            >
              <GraduationCap className="mr-1 hidden h-4 w-4 sm:inline" />
              Education
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="text-xs"
            >
              <Briefcase className="mr-1 hidden h-4 w-4 sm:inline" />
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="text-xs"
            >
              <Code className="mr-1 hidden h-4 w-4 sm:inline" />
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="text-xs"
            >
              <Award className="mr-1 hidden h-4 w-4 sm:inline" />
              Skills
            </TabsTrigger>
          </TabsList>

          {/* Personal Info Tab */}
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Add your contact details and professional summary
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={personalInfo.fullName}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          fullName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={personalInfo.email}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      placeholder="+91 9876543210"
                      value={personalInfo.phone}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="Bangalore, India"
                      value={personalInfo.location}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          location: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input
                      id="linkedin"
                      placeholder="linkedin.com/in/johndoe"
                      value={personalInfo.linkedin}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          linkedin: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="github">GitHub Profile</Label>
                    <Input
                      id="github"
                      placeholder="github.com/johndoe"
                      value={personalInfo.github}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          github: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                      id="summary"
                      placeholder="A brief 2-3 sentence summary of your skills and experience..."
                      rows={4}
                      value={personalInfo.summary}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          summary: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
                <CardDescription>
                  Add your educational qualifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="relative rounded-lg border p-4"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 text-destructive"
                      onClick={() => removeEducation(edu.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label>Institution Name</Label>
                        <Input
                          placeholder="MIT Chennai"
                          value={edu.institution}
                          onChange={(e) =>
                            updateEducation(
                              edu.id,
                              'institution',
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <div>
                        <Label>Degree</Label>
                        <Input
                          placeholder="B.Tech"
                          value={edu.degree}
                          onChange={(e) =>
                            updateEducation(edu.id, 'degree', e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label>Field of Study</Label>
                        <Input
                          placeholder="Computer Science"
                          value={edu.field}
                          onChange={(e) =>
                            updateEducation(edu.id, 'field', e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label>Start Date</Label>
                        <Input
                          placeholder="Aug 2021"
                          value={edu.startDate}
                          onChange={(e) =>
                            updateEducation(edu.id, 'startDate', e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label>End Date</Label>
                        <Input
                          placeholder="May 2025"
                          value={edu.endDate}
                          onChange={(e) =>
                            updateEducation(edu.id, 'endDate', e.target.value)
                          }
                        />
                      </div>
                      <div className="col-span-2">
                        <Label>GPA/CGPA (Optional)</Label>
                        <Input
                          placeholder="8.5/10"
                          value={edu.gpa}
                          onChange={(e) =>
                            updateEducation(edu.id, 'gpa', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button
                  onClick={addEducation}
                  variant="outline"
                  className="w-full"
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Education
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Work Experience
                </CardTitle>
                <CardDescription>
                  Add your internships and work experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative rounded-lg border p-4"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 text-destructive"
                      onClick={() => removeExperience(exp.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label>Company Name</Label>
                        <Input
                          placeholder="TCS"
                          value={exp.company}
                          onChange={(e) =>
                            updateExperience(exp.id, 'company', e.target.value)
                          }
                        />
                      </div>
                      <div className="col-span-2">
                        <Label>Position/Role</Label>
                        <Input
                          placeholder="Software Engineering Intern"
                          value={exp.position}
                          onChange={(e) =>
                            updateExperience(exp.id, 'position', e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label>Start Date</Label>
                        <Input
                          placeholder="Jan 2024"
                          value={exp.startDate}
                          onChange={(e) =>
                            updateExperience(
                              exp.id,
                              'startDate',
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <div>
                        <Label>End Date</Label>
                        <Input
                          placeholder="May 2024"
                          value={exp.endDate}
                          onChange={(e) =>
                            updateExperience(exp.id, 'endDate', e.target.value)
                          }
                          disabled={exp.current}
                        />
                      </div>
                      <div className="col-span-2">
                        <Label>Description</Label>
                        <Textarea
                          placeholder="Describe your responsibilities and achievements..."
                          value={exp.description}
                          onChange={(e) =>
                            updateExperience(
                              exp.id,
                              'description',
                              e.target.value,
                            )
                          }
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button
                  onClick={addExperience}
                  variant="outline"
                  className="w-full"
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Experience
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Projects
                </CardTitle>
                <CardDescription>
                  Add your personal or academic projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="relative rounded-lg border p-4"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 text-destructive"
                      onClick={() => removeProject(proj.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="grid gap-4">
                      <div>
                        <Label>Project Name</Label>
                        <Input
                          placeholder="E-commerce Website"
                          value={proj.name}
                          onChange={(e) =>
                            updateProject(proj.id, 'name', e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Textarea
                          placeholder="Describe what you built and its impact..."
                          value={proj.description}
                          onChange={(e) =>
                            updateProject(
                              proj.id,
                              'description',
                              e.target.value,
                            )
                          }
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label>Technologies Used</Label>
                        <Input
                          placeholder="React, Node.js, MongoDB"
                          value={proj.technologies}
                          onChange={(e) =>
                            updateProject(
                              proj.id,
                              'technologies',
                              e.target.value,
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button
                  onClick={addProject}
                  variant="outline"
                  className="w-full"
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Project
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Skills & Certifications
                </CardTitle>
                <CardDescription>
                  Add your technical skills and certifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="skills">Technical Skills</Label>
                  <Textarea
                    id="skills"
                    placeholder="Python, Java, React, SQL, Git, AWS (comma-separated)"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    rows={3}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Separate skills with commas
                  </p>
                </div>
                <div>
                  <Label htmlFor="certifications">Certifications</Label>
                  <Textarea
                    id="certifications"
                    placeholder="AWS Certified Cloud Practitioner&#10;Google Data Analytics Certificate&#10;..."
                    value={certifications}
                    onChange={(e) => setCertifications(e.target.value)}
                    rows={4}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    One certification per line
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Preview Section */}
      <div className="h-fit lg:sticky lg:top-4">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Resume Preview
              </CardTitle>
              <CardDescription>See your resume in real-time</CardDescription>
            </div>
            <Button onClick={downloadResume}>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </CardHeader>
          <CardContent>
            <div
              className="min-h-[600px] overflow-auto rounded-lg border bg-white p-4 text-sm text-gray-900"
              dangerouslySetInnerHTML={{ __html: generateResumeHTML() }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
