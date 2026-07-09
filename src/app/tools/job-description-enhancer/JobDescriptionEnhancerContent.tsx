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
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Sparkles, Copy } from 'lucide-react';

export default function JobDescriptionEnhancerContent() {
  const [jobType, setJobType] = useState('');
  const [originalJD, setOriginalJD] = useState('');
  const [enhancedJD, setEnhancedJD] = useState('');

  const enhanceJD = () => {
    if (!jobType || !originalJD.trim()) {
      alert('Please select job type and enter a job description');
      return;
    }

    const enhancements: any = {
      software: {
        prefix: '🚀 Join Our Innovative Tech Team!\n\n',
        skills:
          '\n\n💡 Key Skills Required:\n• Strong problem-solving and analytical abilities\n• Excellent communication and teamwork skills\n• Passion for learning new technologies\n• Experience with version control (Git)\n• Understanding of software development lifecycle',
        benefits:
          '\n\n🎁 What We Offer:\n• Competitive salary and performance bonuses\n• Flexible work arrangements and remote options\n• Health insurance and wellness programs\n• Learning and development opportunities\n• Modern tech stack and tools\n• Collaborative and inclusive work culture',
        closing:
          "\n\n📩 How to Apply:\nIf you're passionate about technology and want to make an impact, we'd love to hear from you! Send your resume and portfolio to join our team.",
      },
      marketing: {
        prefix: '🎯 Exciting Marketing Opportunity!\n\n',
        skills:
          '\n\n💡 Essential Skills:\n• Creative thinking and strategic planning\n• Strong written and verbal communication\n• Data-driven decision making\n• Social media and digital marketing expertise\n• Project management capabilities',
        benefits:
          '\n\n🎁 Why Join Us:\n• Competitive compensation package\n• Creative freedom and autonomy\n• Professional development budget\n• Flexible working hours\n• Dynamic and supportive team environment\n• Opportunity to work on exciting campaigns',
        closing:
          "\n\n📩 Ready to Make an Impact?\nApply now with your resume and portfolio showcasing your best campaigns. Let's create something amazing together!",
      },
      sales: {
        prefix: '💼 Accelerate Your Sales Career!\n\n',
        skills:
          '\n\n💡 What You Bring:\n• Proven track record in sales\n• Excellent negotiation and closing skills\n• Strong relationship-building abilities\n• Goal-oriented and self-motivated\n• CRM experience (Salesforce, HubSpot, etc.)',
        benefits:
          "\n\n🎁 What's In It For You:\n• Attractive base salary + uncapped commission\n• Performance bonuses and incentives\n• Comprehensive training program\n• Career advancement opportunities\n• Health and wellness benefits\n• Supportive team culture",
        closing:
          "\n\n📩 Apply Today:\nReady to exceed your targets? Send us your resume and let's discuss how you can thrive with our team!",
      },
      design: {
        prefix: '🎨 Creative Design Opportunity!\n\n',
        skills:
          '\n\n💡 Required Skills:\n• Proficiency in design tools (Figma, Adobe Creative Suite)\n• Strong portfolio demonstrating creativity\n• Understanding of UX/UI principles\n• Attention to detail and aesthetics\n• Ability to work with cross-functional teams',
        benefits:
          '\n\n🎁 Perks & Benefits:\n• Competitive salary\n• Creative workspace and latest tools\n• Flexible schedule\n• Professional development opportunities\n• Collaborative and inspiring environment\n• Work on diverse and exciting projects',
        closing:
          "\n\n📩 Show Us Your Creativity:\nApply with your resume and portfolio. We can't wait to see your work!",
      },
    };

    const enhancement = enhancements[jobType] || enhancements.software;
    const enhanced =
      enhancement.prefix +
      originalJD.trim() +
      enhancement.skills +
      enhancement.benefits +
      enhancement.closing;
    setEnhancedJD(enhanced);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(enhancedJD);
    alert('Enhanced job description copied to clipboard!');
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Job Description Enhancer
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-powered tool to optimize job descriptions for better candidates
          </p>
        </div>

        <Card className="mb-6 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Enhance Your Job Description
            </CardTitle>
            <CardDescription>
              Make your job posting more attractive and comprehensive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Job Type</Label>
              <Select
                value={jobType}
                onValueChange={setJobType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="software">Software/Tech</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Original Job Description</Label>
              <Textarea
                placeholder="Paste your job description here..."
                value={originalJD}
                onChange={(e) => setOriginalJD(e.target.value)}
                className="min-h-[200px]"
              />
            </div>

            <Button
              onClick={enhanceJD}
              className="w-full"
              size="lg"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Enhance Job Description
            </Button>
          </CardContent>
        </Card>

        {enhancedJD && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Enhanced Job Description</CardTitle>
              <CardDescription>
                Your optimized job posting ready to attract top talent
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={enhancedJD}
                onChange={(e) => setEnhancedJD(e.target.value)}
                className="min-h-[400px] font-mono text-sm"
              />
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="w-full"
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy to Clipboard
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="prose prose-lg mt-16 max-w-none">
          <h2>Tips for Writing Great Job Descriptions</h2>
          <h3>1. Be Clear and Specific</h3>
          <p>
            Clearly outline the role, responsibilities, and expectations. Avoid
            vague language.
          </p>
          <h3>2. Highlight Company Culture</h3>
          <p>
            Showcase what makes your company unique and why candidates should
            want to work there.
          </p>
          <h3>3. Include Benefits</h3>
          <p>
            List compensation, perks, and growth opportunities to attract
            quality candidates.
          </p>
          <h3>4. Use Inclusive Language</h3>
          <p>
            Ensure your job description is welcoming to all qualified
            candidates.
          </p>
        </div>
      </div>
    </div>
  );
}
