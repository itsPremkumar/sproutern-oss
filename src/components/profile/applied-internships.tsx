// //// // worked code

'use client';

import { useEffect, useState, useCallback } from 'react'; // Removed useActionState as server action is gone
import type { User } from 'firebase/auth';
import Link from 'next/link';
import { db, auth } from '@/lib/firebase'; // Ensure 'auth' is imported
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  deleteDoc,
} from 'firebase/firestore'; // Added doc, deleteDoc
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { ExternalLink, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

async function withdrawApplicationClient(
  applicationId: string,
  currentUser: User | null,
): Promise<{ success?: string; error?: string }> {
  console.log('Client-side withdrawApplicationClient called.');
  console.log('Application ID:', applicationId);
  console.log('Current User:', currentUser);

  if (!currentUser || !db) {
    console.log('Error: User not logged in or DB not initialized.');
    return { error: 'You must be logged in.' };
  }

  if (!applicationId) {
    console.log('Error: Application ID is missing.');
    return { error: 'Application ID is missing.' };
  }

  try {
    const applicationRef = doc(db, 'applications', applicationId);
    console.log('Application reference created:', applicationRef.path);

    const appDoc = await getDocs(
      query(
        collection(db, 'applications'),
        where('__name__', '==', applicationId),
      ),
    ); // Fetching doc using getDocs and where for demonstration; getDoc is more direct for a single doc.
    if (appDoc.empty) {
      console.log('Error: Application not found.');
      return { error: 'Application not found.' };
    }

    const appData = appDoc.docs[0].data();
    console.log('Fetched application data:', appData);

    if (appData.studentUserId !== currentUser.uid) {
      console.log(
        'Error: User not authorized to withdraw this application. User ID:',
        currentUser.uid,
        'Application Owner ID:',
        appData.studentUserId,
      );
      return { error: 'You are not authorized to withdraw this application.' };
    }

    await deleteDoc(applicationRef);
    console.log('Application deleted successfully:', applicationId);
    // revalidatePath("/profile"); // This is a server-side function and won't work client-side.
    // Client-side, you would typically refetch data or update local state after deletion.
    return { success: 'Application withdrawn successfully.' };
  } catch (error: any) {
    console.error('Error withdrawing application (client-side):', error);
    return { error: 'Failed to withdraw application.' };
  }
}

interface Application {
  id: string;
  internshipId: string;
  jobTitle: string;
  companyName: string;
  appliedAt: {
    seconds: number;
    nanoseconds: number;
  };
  studentUserId: string; // Added for client-side check
}

interface AppliedInternshipsProps {
  user: User;
}

export function AppliedInternships({ user }: AppliedInternshipsProps) {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  // const [state, formAction] = useActionState(withdrawApplication, initialState); // Removed useActionState
  const [withdrawalState, setWithdrawalState] = useState<{
    success?: string;
    error?: string;
  }>({}); // Manual state for withdrawal
  const studentUserId = user.uid;

  console.log('Component Rendered. User ID:', studentUserId);

  const fetchApplications = useCallback(async () => {
    console.log('Fetching applications for user:', studentUserId);
    setLoading(true);
    try {
      if (!studentUserId || !db) {
        console.log('Skipping fetch: studentUserId or db is null/undefined.');
        setLoading(false);
        return;
      }

      const q = query(
        collection(db, 'applications'),
        where('studentUserId', '==', studentUserId),
        orderBy('appliedAt', 'desc'),
      );
      console.log('Firestore query built:', q);
      const querySnapshot = await getDocs(q);
      console.log(
        'Query snapshot received. Number of documents:',
        querySnapshot.docs.length,
      );
      const appsData = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() }) as Application,
      );
      setApplications(appsData);
      console.log('Applications set to state:', appsData);
    } catch (error: any) {
      console.error('Error fetching applications:', error);
      if (error.code === 'failed-precondition') {
        console.error(
          'This query requires a composite index. Please create the index in your Firestore console.',
        );
        toast({
          title: 'Configuration Needed',
          description:
            'A database index is required to view your applications. See FIREBASE_SETUP.md for details.',
          variant: 'destructive',
          duration: 10000,
        });
      } else {
        toast({
          title: 'Error',
          description: `Failed to fetch applications: ${error.message || 'Unknown error'}`,
          variant: 'destructive',
        });
      }
    } finally {
      setLoading(false);
      console.log('Finished fetching applications. Loading set to false.');
    }
  }, [studentUserId, toast]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  useEffect(() => {
    console.log('Withdrawal state changed:', withdrawalState);
    if (withdrawalState?.success) {
      toast({ title: 'Success', description: withdrawalState.success });
      console.log('Withdrawal successful, refetching applications...');
      fetchApplications(); // Refetch applications after withdrawal
      setWithdrawalState({}); // Clear state after showing toast
    }
    if (withdrawalState?.error) {
      toast({
        title: 'Error',
        description: withdrawalState.error,
        variant: 'destructive',
      });
      setWithdrawalState({}); // Clear state after showing toast
    }
  }, [withdrawalState, toast, fetchApplications]);

  const handleWithdraw = async (applicationId: string) => {
    console.log('Attempting to withdraw application with ID:', applicationId);
    const result = await withdrawApplicationClient(applicationId, user);
    setWithdrawalState(result);
  };

  if (loading) {
    console.log('Displaying skeleton loader.');
    return (
      <div className="space-y-4">
        <Skeleton className="h-16 w-full rounded-lg" />
        <Skeleton className="h-16 w-full rounded-lg" />
      </div>
    );
  }

  if (applications.length === 0) {
    console.log('No applications found. Displaying empty state message.');
    return (
      <div className="py-4 text-center text-muted-foreground">
        <p>You haven't applied to any internships yet.</p>
      </div>
    );
  }

  console.log('Displaying applications list.');
  return (
    <ul className="space-y-4">
      {applications.map((app) => (
        <li
          key={app.id}
          className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:border-primary"
        >
          <Link
            href={`/internships/${app.internshipId}`}
            className="block w-full"
          >
            <div className="space-y-1">
              <h3 className="font-semibold">{app.jobTitle}</h3>
              <p className="text-sm text-muted-foreground">{app.companyName}</p>
              <p className="text-xs text-muted-foreground">
                Applied{' '}
                {formatDistanceToNow(new Date(app.appliedAt.seconds * 1000), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </Link>
          <div className="flex items-center">
            <Link
              href={`/internships/${app.internshipId}`}
              className="p-2"
            >
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </Link>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Withdraw Application?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to withdraw your application for{' '}
                    {app.jobTitle}? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  {/* Changed from form action to onClick handler for client-side function */}
                  <AlertDialogAction onClick={() => handleWithdraw(app.id)}>
                    Withdraw
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </li>
      ))}
    </ul>
  );
}
