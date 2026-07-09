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

export interface StartupProfileData {
  mission: string;
  details: {
    industry: string;
    founded: string;
    location: string;
    website: string;
    contactEmail: string;
    contactPhone: string;
  };
}

interface EditStartupProfileDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  profileData: StartupProfileData;
  onSave: (newData: StartupProfileData) => void;
}

export function EditStartupProfileDialog({
  isOpen,
  setIsOpen,
  profileData,
  onSave,
}: EditStartupProfileDialogProps) {
  const [mission, setMission] = useState(profileData.mission);
  const [industry, setIndustry] = useState(profileData.details.industry);
  const [founded, setFounded] = useState(profileData.details.founded);
  const [location, setLocation] = useState(profileData.details.location);
  const [website, setWebsite] = useState(profileData.details.website);
  const [contactEmail, setContactEmail] = useState(
    profileData.details.contactEmail,
  );
  const [contactPhone, setContactPhone] = useState(
    profileData.details.contactPhone,
  );

  useEffect(() => {
    if (profileData) {
      setMission(profileData.mission);
      setIndustry(profileData.details.industry);
      setFounded(profileData.details.founded);
      setLocation(profileData.details.location);
      setWebsite(profileData.details.website);
      setContactEmail(profileData.details.contactEmail);
      setContactPhone(profileData.details.contactPhone);
    }
  }, [profileData, isOpen]);

  const handleSave = () => {
    const updatedData: StartupProfileData = {
      mission,
      details: {
        industry,
        founded,
        location,
        website,
        contactEmail,
        contactPhone,
      },
    };
    onSave(updatedData);
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Startup Profile</DialogTitle>
          <DialogDescription>
            Update your company's information. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="mission">Our Mission / About Us</Label>
            <Textarea
              id="mission"
              value={mission}
              onChange={(e) => setMission(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="founded">Year Founded</Label>
              <Input
                id="founded"
                value={founded}
                onChange={(e) => setFounded(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="website">Website URL</Label>
              <Input
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input
                id="contactEmail"
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contactPhone">Contact Phone</Label>
              <Input
                id="contactPhone"
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
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
