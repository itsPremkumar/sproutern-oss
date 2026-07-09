'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface User {
  userId: string;
  fullName: string;
  email: string;
}

interface AdminsTableProps {
  initialData: User[];
}

export function AdminsTable({ initialData: admins }: AdminsTableProps) {
  if (admins.length === 0) {
    return <p className="text-sm text-muted-foreground">No admins found.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {admins.map((user) => (
          <TableRow key={user.userId}>
            <TableCell className="font-medium">{user.fullName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge variant="destructive">Admin</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
