'use client';

import { useEffect, useState, useTransition, useCallback } from 'react';
import Link from 'next/link';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Pencil, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
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
import { deleteInternshipRequest } from '@/app/actions';

interface InternshipRequest {
  id: string;
  title: string;
  desiredSkills: string;
  workMode: 'Online' | 'Offline' | 'Hybrid';
  duration: string;
  stipendExpectation: string;
  availability: string;
  additionalInfo: string;
  postedAt: any;
}

interface PostedInternshipRequestsProps {
  userId: string;
  isProfileComplete: boolean;
}

export function PostedInternshipRequests({
  userId,
  isProfileComplete,
}: PostedInternshipRequestsProps) {
  const [requests, setRequests] = useState<InternshipRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const { toast } = useToast();
  let [isPending, startTransition] = useTransition();

  const fetchUserRequests = useCallback(async () => {
    setLoading(true);
    try {
      const requestsQuery = query(
        collection(db, 'internshipRequests'),
        where('postedByUserId', '==', userId),
        orderBy('postedAt', 'desc'),
      );

      const querySnapshot = await getDocs(requestsQuery);
      const requestsData: InternshipRequest[] = [];

      querySnapshot.forEach((doc) => {
        requestsData.push({
          id: doc.id,
          ...doc.data(),
        } as InternshipRequest);
      });

      setRequests(requestsData);
    } catch (error) {
      console.error('Error fetching internship requests:', error);
      toast({
        title: 'Error',
        description: 'Failed to load your internship requests.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [userId, toast]);

  useEffect(() => {
    fetchUserRequests();
  }, [fetchUserRequests]);

  const handleDelete = async (requestId: string) => {
    setIsDeleting(requestId);
    startTransition(async () => {
      const result = await deleteInternshipRequest(requestId);
      if (result.success) {
        toast({
          title: 'Success',
          description: 'Internship request deleted successfully.',
        });
        fetchUserRequests(); // Refetch requests after deletion
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to delete internship request.',
          variant: 'destructive',
        });
      }
      setIsDeleting(null);
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <Card>
        <CardContent className="py-8">
          <p className="text-center text-muted-foreground">
            You haven't posted any internship requests yet.
          </p>
          <div className="mt-4 flex justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span tabIndex={0}>
                    <Button
                      variant="outline"
                      asChild
                      disabled={!isProfileComplete}
                    >
                      <Link href="/post-request">Post Your First Request</Link>
                    </Button>
                  </span>
                </TooltipTrigger>
                {!isProfileComplete && (
                  <TooltipContent>
                    <p>Please complete your profile to post a request.</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Internship Requests</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span tabIndex={0}>
                <Button
                  asChild
                  disabled={!isProfileComplete}
                >
                  <Link href="/post-request">Post New Request</Link>
                </Button>
              </span>
            </TooltipTrigger>
            {!isProfileComplete && (
              <TooltipContent>
                <p>Please complete your profile to post a request.</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>

      {requests.map((request) => (
        <Card key={request.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="mb-2 text-xl">{request.title}</CardTitle>
                <CardDescription>
                  Posted{' '}
                  {new Date(request.postedAt?.toDate()).toLocaleDateString()}
                </CardDescription>
              </div>
              <Badge variant="secondary">{request.workMode}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="mb-1 font-semibold">Desired Skills</h3>
                <p className="text-muted-foreground">{request.desiredSkills}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <h3 className="mb-1 font-semibold">Duration</h3>
                  <p className="text-muted-foreground">{request.duration}</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Stipend Expectation</h3>
                  <p className="text-muted-foreground">
                    {request.stipendExpectation}
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Availability</h3>
                  <p className="text-muted-foreground">
                    {request.availability}
                  </p>
                </div>
              </div>

              {request.additionalInfo && (
                <div>
                  <h3 className="mb-1 font-semibold">Additional Information</h3>
                  <p className="text-muted-foreground">
                    {request.additionalInfo}
                  </p>
                </div>
              )}

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href={`/post-request?edit=${request.id}`}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="destructive"
                      size="sm"
                      disabled={isPending && isDeleting === request.id}
                    >
                      {isPending && isDeleting === request.id ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="mr-2 h-4 w-4" />
                      )}
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your internship request.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(request.id)}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
