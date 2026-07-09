'use client';

import { useActionState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDistanceToNow } from 'date-fns';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { adminDeleteInternship } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

interface Internship {
  id: string;
  jobTitle: string;
  companyName: string;
  postedAt: {
    seconds: number;
  } | null;
}

interface InternshipsTableProps {
  initialData: Internship[];
}

const initialState = { success: '', error: '' };

export function InternshipsTable({
  initialData: internships,
}: InternshipsTableProps) {
  const { toast } = useToast();
  const [state, formAction] = useActionState(
    adminDeleteInternship,
    initialState,
  );

  useEffect(() => {
    if (state?.success) {
      toast({ title: 'Success', description: state.success });
    }
    if (state?.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  if (internships.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No internships found.</p>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Job Title</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Posted</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {internships.map((internship) => (
          <TableRow key={internship.id}>
            <TableCell className="font-medium">{internship.jobTitle}</TableCell>
            <TableCell>{internship.companyName}</TableCell>
            <TableCell>
              {internship.postedAt
                ? formatDistanceToNow(
                    new Date(internship.postedAt.seconds * 1000),
                    { addSuffix: true },
                  )
                : 'N/A'}
            </TableCell>
            <TableCell className="text-right">
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
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete the internship posting. This
                      action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <form action={formAction}>
                      <input
                        type="hidden"
                        name="internshipId"
                        value={internship.id}
                      />
                      <AlertDialogAction type="submit">
                        Delete
                      </AlertDialogAction>
                    </form>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
