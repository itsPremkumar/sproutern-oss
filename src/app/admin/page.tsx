import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Briefcase,
  LayoutDashboard,
  Building,
  UserCheck,
  ShieldCheck,
} from 'lucide-react';
import { AdminStats } from '@/app/admin/admin-stats';
import { StudentsTable } from '@/app/admin/students-table';
import { StartupsTable } from '@/app/admin/startups-table';
import { AdminsTable } from '@/app/admin/admins-table';
import { InternshipsTable } from '@/app/admin/internships-table';
import {
  getAdminStats,
  getAllUsersAndSeparateByType,
  getAllInternships,
} from '@/app/actions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Sproutern',
  description: 'Administrative dashboard for Sproutern management',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  // Fetch all data on the server
  const statsData = await getAdminStats();
  const usersData = await getAllUsersAndSeparateByType();
  const internshipsData = await getAllInternships();

  const allErrors = [
    statsData.error,
    usersData.error,
    internshipsData.error,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container py-8 md:py-12">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2 text-3xl font-bold">
              <LayoutDashboard /> Admin Dashboard
            </h1>
          </div>

          {allErrors.length > 0 && (
            <Alert variant="destructive">
              <AlertTitle>Error Loading Data</AlertTitle>
              <AlertDescription>
                <p>
                  There was an error fetching some of the administrative data.
                  This is often caused by a missing Firebase setup step.
                </p>
                <ul className="mt-2 list-disc pl-5">
                  {allErrors.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm">
                  Please ensure you have configured your **Firestore Security
                  Rules** and **Indexes** correctly, as outlined in the
                  `FIREBASE_SETUP.md` file.
                </p>
              </AlertDescription>
            </Alert>
          )}

          {statsData.stats && <AdminStats stats={statsData.stats} />}

          <Tabs
            defaultValue="students"
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="students">
                <UserCheck className="mr-2 h-4 w-4" />
                Students ({usersData.students?.length || 0})
              </TabsTrigger>
              <TabsTrigger value="startups">
                <Building className="mr-2 h-4 w-4" />
                Startups ({usersData.startups?.length || 0})
              </TabsTrigger>
              <TabsTrigger value="admins">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Admins ({usersData.admins?.length || 0})
              </TabsTrigger>
              <TabsTrigger value="internships">
                <Briefcase className="mr-2 h-4 w-4" />
                Internships ({internshipsData.internships?.length || 0})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="students">
              <Card>
                <CardHeader>
                  <CardTitle>All Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <StudentsTable initialData={usersData.students || []} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="startups">
              <Card>
                <CardHeader>
                  <CardTitle>All Startups</CardTitle>
                </CardHeader>
                <CardContent>
                  <StartupsTable initialData={usersData.startups || []} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="admins">
              <Card>
                <CardHeader>
                  <CardTitle>All Admins</CardTitle>
                </CardHeader>
                <CardContent>
                  <AdminsTable initialData={usersData.admins || []} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="internships">
              <Card>
                <CardHeader>
                  <CardTitle>All Internships</CardTitle>
                </CardHeader>
                <CardContent>
                  <InternshipsTable
                    initialData={internshipsData.internships || []}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
