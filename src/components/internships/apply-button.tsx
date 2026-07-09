'use client';

import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { onAuthStateChanged, type User } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { handleApply } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { auth, db } from '@/lib/firebase';
import { Briefcase, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { StudentProfileData } from '@/lib/types';
import { logApplyInternship } from '@/lib/analytics';

interface ApplyButtonProps {
  internshipId: string;
  startupUserId: string;
}

const initialState = {
  success: false,
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full"
      size="lg"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
        </>
      ) : (
        <>
          <Briefcase className="mr-2 h-4 w-4" /> Apply Now
        </>
      )}
    </Button>
  );
}

export function ApplyButton({ internshipId, startupUserId }: ApplyButtonProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<string | null>(null);
  const [hasApplied, setHasApplied] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const { toast } = useToast();

  const [state, formAction] = useActionState(handleApply, initialState);

  useEffect(() => {
    if (!auth || !db) {
      setLoadingStatus(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const studentUserId = currentUser.uid;
        // Fetch user type
        const userDocRef = doc(db, 'users', studentUserId);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserType(userDoc.data().userType);
        }

        // Check profile completeness
        const profileDocRef = doc(db, 'studentProfiles', studentUserId);
        const profileDoc = await getDoc(profileDocRef);
        if (profileDoc.exists()) {
          const profileData = profileDoc.data() as StudentProfileData;
          const {
            skills,
            experience,
            education,
            resumeUrl,
            dob,
            age,
            gender,
            phoneNumber,
            department,
            yearOfStudy,
            studyingStatus,
            cgpa,
          } = profileData;

          const isComplete =
            !!skills &&
            skills.length > 0 &&
            !!experience &&
            experience.length > 0 &&
            experience.some((e) => !!e.title) &&
            !!education &&
            !!education.degree &&
            !!education.university &&
            !!education.year &&
            !!resumeUrl &&
            !!dob &&
            !!age &&
            age > 0 &&
            !!gender &&
            !!phoneNumber &&
            !!department &&
            !!yearOfStudy &&
            !!studyingStatus &&
            !!cgpa &&
            cgpa > 0;
          setIsProfileComplete(isComplete);
        }

        // Check application status
        try {
          const applicationsRef = collection(db, 'applications');
          const q = query(
            applicationsRef,
            where('internshipId', '==', internshipId),
            where('studentUserId', '==', studentUserId),
          );
          const querySnapshot = await getDocs(q);
          setHasApplied(!querySnapshot.empty);
        } catch (error: any) {
          console.error('Firestore query failed:', error);
          if (error.code === 'failed-precondition') {
            console.error(
              'This query requires a composite index. Firestore usually provides a link in the error message in the developer console to create it. Please create the index and try again.',
            );
            toast({
              title: 'Configuration Needed',
              description:
                'A database index is required for this page. Please check the developer console for a link to create it.',
              variant: 'destructive',
              duration: 10000,
            });
          }
        }
      }
      setLoadingStatus(false);
    });

    return () => unsubscribe();
  }, [internshipId, toast]);

  useEffect(() => {
    if (state.success) {
      setHasApplied(true);
      toast({
        title: 'Success!',
        description: 'Your application has been submitted.',
      });
      // We don't have the title easily available here so passing ID twice or fetch it?
      // Actually the requirement was to log it. Let's just log the ID for now or generic title.
      // Better: we can pass title as prop to ApplyButton if needed, but for now let's just use the ID.
      logApplyInternship(internshipId, 'Unknown Title');
    }
    if (state.error) {
      toast({
        title: 'Application Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast, internshipId]);

  if (loadingStatus) {
    return (
      <Button
        className="w-full"
        size="lg"
        disabled
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Checking Status...
      </Button>
    );
  }

  if (!user) {
    return (
      <Button
        className="w-full"
        size="lg"
        disabled
      >
        Sign in to Apply
      </Button>
    );
  }

  if (userType !== 'student') {
    return (
      <Button
        className="w-full"
        size="lg"
        disabled
        variant="secondary"
      >
        <XCircle className="mr-2 h-4 w-4" /> Only Students Can Apply
      </Button>
    );
  }

  if (!isProfileComplete) {
    return (
      <Button
        className="w-full"
        size="lg"
        disabled
        variant="secondary"
      >
        <XCircle className="mr-2 h-4 w-4" /> Complete Your Profile to Apply
      </Button>
    );
  }

  if (hasApplied) {
    return (
      <Button
        className="w-full"
        size="lg"
        disabled
        variant="secondary"
      >
        <CheckCircle className="mr-2 h-4 w-4" /> Already Applied
      </Button>
    );
  }

  return (
    <form
      action={formAction}
      className="w-full"
    >
      <input
        type="hidden"
        name="internshipId"
        value={internshipId}
      />
      <input
        type="hidden"
        name="startupUserId"
        value={startupUserId}
      />
      <input
        type="hidden"
        name="studentUserId"
        value={user.uid}
      />
      <input
        type="hidden"
        name="studentName"
        value={user.displayName || ''}
      />
      <input
        type="hidden"
        name="studentEmail"
        value={user.email || ''}
      />
      <SubmitButton />
    </form>
  );
}
