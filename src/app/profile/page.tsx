'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { auth, db } from '@/lib/firebase';
import StudentProfile from '@/components/profile/student-profile';
import StartupProfile from '@/components/profile/startup-profile';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      console.warn('Firebase is not configured. Redirecting to sign-in.');
      router.push('/signin');
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (db) {
          const userId = currentUser.uid;
          const userDocRef = doc(db, 'users', userId);
          try {
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
              setUserType(userDoc.data().userType);
            } else {
              // This can happen if a user doc creation fails on sign-up.
              // Default to 'student' as a safe fallback.
              console.warn(
                'User document not found in Firestore. Defaulting to student.',
              );
              setUserType('student');
            }
          } catch (error) {
            console.error('Error fetching user type:', error);
            // If fetching fails (e.g., offline), default to student and let the app continue.
            // The profile components themselves can show cached data if available.
            setUserType('student');
          } finally {
            // This is critical: ensure loading is set to false only after
            // the async operation (getDoc) is complete.
            setLoading(false);
          }
        } else {
          // If db isn't configured, stop loading.
          setLoading(false);
        }
      } else {
        router.push('/signin');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="container py-12">
        <div className="mb-8 flex items-center space-x-4">
          <Skeleton className="h-24 w-24 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container py-8 md:py-12">
        {userType === 'startup' ? (
          <StartupProfile user={user} />
        ) : (
          <StudentProfile user={user} />
        )}
      </div>
    </div>
  );
}
