'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface StudentProfileData {
  skills: string[];
  experience: { title: string; company: string; description: string }[];
  education: { degree: string; university: string; year: string };
  resumeUrl?: string;
  resumeViewers?: string[];
  resumeFileName?: string;
  // New fields
  dob: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other' | '';
  phoneNumber: string;
  department: string;
  yearOfStudy: string;
  studyingStatus: 'Studying' | 'Passed Out' | '';
  cgpa: number;
}

interface EditStudentProfileDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  profileData: StudentProfileData;
  onSave: (newData: StudentProfileData) => void;
}

export function EditStudentProfileDialog({
  isOpen,
  setIsOpen,
  profileData,
  onSave,
}: EditStudentProfileDialogProps) {
  const [skills, setSkills] = useState(profileData.skills?.join(', ') || '');
  const [experienceTitle, setExperienceTitle] = useState(
    profileData.experience?.[0]?.title || '',
  );
  const [experienceCompany, setExperienceCompany] = useState(
    profileData.experience?.[0]?.company || '',
  );
  const [experienceDesc, setExperienceDesc] = useState(
    profileData.experience?.[0]?.description || '',
  );
  const [educationDegree, setEducationDegree] = useState(
    profileData.education?.degree || '',
  );
  const [educationUniversity, setEducationUniversity] = useState(
    profileData.education?.university || '',
  );
  const [educationYear, setEducationYear] = useState(
    profileData.education?.year || '',
  );

  // New fields state (typed properly to match union)
  const [dob, setDob] = useState(profileData.dob || '');
  const [age, setAge] = useState(profileData.age || 0);
  const [gender, setGender] = useState<StudentProfileData['gender']>(
    profileData.gender || '',
  );
  const [phoneNumber, setPhoneNumber] = useState(profileData.phoneNumber || '');
  const [department, setDepartment] = useState(profileData.department || '');
  const [yearOfStudy, setYearOfStudy] = useState(profileData.yearOfStudy || '');
  const [studyingStatus, setStudyingStatus] = useState<
    StudentProfileData['studyingStatus']
  >(profileData.studyingStatus || '');
  const [cgpa, setCgpa] = useState(profileData.cgpa || 0);

  useEffect(() => {
    if (profileData) {
      setSkills(profileData.skills?.join(', ') || '');
      setExperienceTitle(profileData.experience?.[0]?.title || '');
      setExperienceCompany(profileData.experience?.[0]?.company || '');
      setExperienceDesc(profileData.experience?.[0]?.description || '');
      setEducationDegree(profileData.education?.degree || '');
      setEducationUniversity(profileData.education?.university || '');
      setEducationYear(profileData.education?.year || '');
      setDob(profileData.dob || '');
      setAge(profileData.age || 0);
      setGender(profileData.gender || ('' as StudentProfileData['gender']));
      setPhoneNumber(profileData.phoneNumber || '');
      setDepartment(profileData.department || '');
      setYearOfStudy(profileData.yearOfStudy || '');
      setStudyingStatus(
        profileData.studyingStatus ||
          ('' as StudentProfileData['studyingStatus']),
      );
      setCgpa(profileData.cgpa || 0);
    }
  }, [profileData, isOpen]);

  useEffect(() => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      setAge(calculatedAge > 0 ? calculatedAge : 0);
    }
  }, [dob]);

  const handleSave = () => {
    const updatedData: StudentProfileData = {
      ...profileData,
      skills: skills
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      experience: [
        {
          title: experienceTitle,
          company: experienceCompany,
          description: experienceDesc,
        },
        ...(profileData.experience?.slice(1) || []),
      ],
      education: {
        degree: educationDegree,
        university: educationUniversity,
        year: educationYear,
      },
      dob,
      age,
      gender,
      phoneNumber,
      department,
      yearOfStudy,
      studyingStatus,
      cgpa,
    };
    onSave(updatedData);
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Student Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={age}
                readOnly
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                onValueChange={(value) =>
                  setGender(value as StudentProfileData['gender'])
                }
                value={gender}
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g., 9876543210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="studyingStatus">Studying Status</Label>
              <Select
                onValueChange={(value) =>
                  setStudyingStatus(
                    value as StudentProfileData['studyingStatus'],
                  )
                }
                value={studyingStatus}
              >
                <SelectTrigger id="studyingStatus">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Studying">Studying</SelectItem>
                  <SelectItem value="Passed Out">Passed Out</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cgpa">Current CGPA</Label>
              <Input
                id="cgpa"
                type="number"
                step="0.01"
                min="0"
                max="10"
                value={cgpa}
                onChange={(e) => setCgpa(parseFloat(e.target.value) || 0)}
                placeholder="e.g., 8.5"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="e.g., Information Technology"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="yearOfStudy">Year of Study</Label>
              <Input
                id="yearOfStudy"
                value={yearOfStudy}
                onChange={(e) => setYearOfStudy(e.target.value)}
                placeholder="e.g., 3rd Year, Final Year"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="skills">Skills</Label>
            <Input
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="React, TypeScript, Figma..."
            />
            <p className="text-xs text-muted-foreground">
              Enter skills separated by commas.
            </p>
          </div>
          <div className="grid gap-2">
            <Label>Latest Experience</Label>
            <Input
              value={experienceTitle}
              onChange={(e) => setExperienceTitle(e.target.value)}
              placeholder="Job Title"
            />
            <Input
              value={experienceCompany}
              onChange={(e) => setExperienceCompany(e.target.value)}
              placeholder="Company"
            />
            <Textarea
              value={experienceDesc}
              onChange={(e) => setExperienceDesc(e.target.value)}
              placeholder="Description..."
            />
          </div>
          <div className="grid gap-2">
            <Label>Education</Label>
            <Input
              value={educationDegree}
              onChange={(e) => setEducationDegree(e.target.value)}
              placeholder="Degree, e.g., B.Tech in IT"
            />
            <Input
              value={educationUniversity}
              onChange={(e) => setEducationUniversity(e.target.value)}
              placeholder="University"
            />
            <Input
              value={educationYear}
              onChange={(e) => setEducationYear(e.target.value)}
              placeholder="Graduation Year"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={handleSave}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
