'use client';

import { useActionState, useEffect } from 'react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trash2 } from 'lucide-react';
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
import { adminDeleteUser } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

interface User {
  userId: string;
  fullName: string;
  email: string;
}

interface StartupsTableProps {
  initialData: User[];
}

const initialState = { success: '', error: '' };

export function StartupsTable({ initialData: startups }: StartupsTableProps) {
  const { toast } = useToast();
  const [state, formAction] = useActionState(adminDeleteUser, initialState);

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

  if (startups.length === 0) {
    return <p className="text-sm text-muted-foreground">No startups found.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {startups.map((user) => (
          <TableRow key={user.userId}>
            <TableCell className="font-medium">{user.fullName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge variant="secondary">Startup</Badge>
            </TableCell>
            <TableCell className="space-x-2 text-right">
              <Button
                asChild
                variant="outline"
                size="sm"
              >
                <Link href={`/public-profile/${user.userId}`}>
                  <ExternalLink className="mr-2 h-3 w-3" /> View
                </Link>
              </Button>
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
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will delete the startup's user account and
                      their profile data from Firestore. It does NOT delete them
                      from Firebase Authentication. This cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <form action={formAction}>
                      <input
                        type="hidden"
                        name="userId"
                        value={user.userId}
                      />
                      <input
                        type="hidden"
                        name="userType"
                        value="startup"
                      />
                      <AlertDialogAction type="submit">
                        Delete User
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
