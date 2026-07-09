import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  Briefcase,
  Building,
  FileText,
  UserCheck,
  ShieldCheck,
} from 'lucide-react';

export interface AdminStatsData {
  totalUsers: number;
  totalStudents: number;
  totalStartups: number;
  totalAdmins: number;
  totalInternships: number;
  totalApplications: number;
}

interface AdminStatsProps {
  stats: AdminStatsData;
}

export function AdminStats({ stats }: AdminStatsProps) {
  const statItems = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: <Users className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: 'Students',
      value: stats.totalStudents,
      icon: <UserCheck className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: 'Startups',
      value: stats.totalStartups,
      icon: <Building className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: 'Admins',
      value: stats.totalAdmins,
      icon: <ShieldCheck className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: 'Internships',
      value: stats.totalInternships,
      icon: <Briefcase className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: 'Applications',
      value: stats.totalApplications,
      icon: <FileText className="h-6 w-6 text-muted-foreground" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
      {statItems.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
