// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search, Clock, IndianRupee, Briefcase, User as UserIcon } from "lucide-react";
// import { db } from "@/lib/firebase";
// import { collection, getDocs, orderBy, query } from "firebase/firestore";
// import { Skeleton } from "@/components/ui/skeleton";
// import type { StudentProfileData } from "@/components/profile/edit-student-profile-dialog";
// import { getInitials } from "@/lib/utils";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// interface InternshipRequest {
//     id: string;
//     title: string;
//     desiredSkills: string;
//     workMode: string;
//     duration: string;
//     stipendExpectation: string;
//     postedByUserId: string;
//     studentProfile: StudentProfileData & { fullName?: string, photoURL?: string };
// }

// export default function InternshipRequestsPage() {
//     const [requests, setRequests] = useState<InternshipRequest[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [skillFilter, setSkillFilter] = useState("");

//     useEffect(() => {
//         const fetchRequests = async () => {
//             if (!db) {
//                 setLoading(false);
//                 console.error("Firebase database is not initialized.");
//                 return;
//             }

//             try {
//                 const q = query(collection(db, "internshipRequests"), orderBy("postedAt", "desc"));
//                 const querySnapshot = await getDocs(q);
//                 const requestsData = querySnapshot.docs.map(doc => {
//                     const data = doc.data();
//                     return {
//                         id: doc.id,
//                         ...data
//                     } as InternshipRequest;
//                 });
//                 setRequests(requestsData);
//             } catch (error) {
//                 console.error("Error fetching internship requests:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRequests();
//     }, []);

//     const getTagsFromSkills = (skills: string): string[] => {
//         if (!skills) return [];
//         return skills
//             .split(/,|\n|;/)
//             .map(r => r.trim())
//             .filter(tag => tag.length > 0)
//             .slice(0, 3);
//     };

//     const filteredRequests = requests.filter(request => {
//         const titleMatch =
//             request.title.toLowerCase().includes(searchTerm.toLowerCase());

//         const skillMatch =
//             request.desiredSkills.toLowerCase().includes(skillFilter.toLowerCase());

//         return titleMatch && skillMatch;
//     });

//     if (loading) {
//         return (
//             <div className="container py-12 md:py-20">
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl md:text-5xl font-extrabold">Browse Student Requests</h1>
//                     <p className="mt-4 text-lg text-muted-foreground">Discover ambitious students seeking their next opportunity.</p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {[...Array(6)].map((_, i) => (
//                         <Card key={i}>
//                             <CardHeader className="flex-row gap-4 items-start">
//                                 <Skeleton className="h-12 w-12 rounded-full" />
//                                 <div className="space-y-2">
//                                     <Skeleton className="h-6 w-48 rounded-md" />
//                                     <Skeleton className="h-4 w-32 rounded-md" />
//                                 </div>
//                             </CardHeader>
//                             <CardContent>
//                                 <Skeleton className="h-4 w-24 mb-4 rounded-md" />
//                                 <div className="flex flex-wrap gap-2">
//                                     <Skeleton className="h-6 w-16 rounded-full" />
//                                     <Skeleton className="h-6 w-20 rounded-full" />
//                                     <Skeleton className="h-6 w-24 rounded-full" />
//                                 </div>
//                             </CardContent>
//                             <CardFooter>
//                                 <Skeleton className="h-10 w-full rounded-md" />
//                             </CardFooter>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="container py-12 md:py-20">
//             <div className="text-center mb-12">
//                 <h1 className="text-4xl md:text-5xl font-extrabold">Browse Student Requests</h1>
//                 <p className="mt-4 text-lg text-muted-foreground">Discover ambitious students seeking their next opportunity.</p>
//             </div>

//             <div className="mb-12 max-w-3xl mx-auto bg-card p-4 rounded-lg border shadow-sm">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="relative">
//                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                         <Input
//                             type="search"
//                             placeholder="Search by request title..."
//                             className="w-full pl-10"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                     </div>
//                     <div className="relative">
//                         <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                         <Input
//                             type="search"
//                             placeholder="Filter by desired skills..."
//                             className="w-full pl-10"
//                             value={skillFilter}
//                             onChange={(e) => setSkillFilter(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredRequests.length > 0 ? filteredRequests.map((request) => (
//                     <Link key={request.id} href={`/public-profile/${request.postedByUserId}`} className="flex h-full">
//                         <Card className="flex flex-col w-full hover:border-primary transition-colors">
//                             <CardHeader className="flex-row gap-4 items-start">
//                                 <Avatar className="h-12 w-12">
//                                   <AvatarImage src={request.studentProfile?.photoURL} alt={request.studentProfile?.fullName || 'Student'} />
//                                   <AvatarFallback>{getInitials(request.studentProfile?.fullName)}</AvatarFallback>
//                                 </Avatar>
//                                 <div>
//                                     <CardTitle className="text-lg">{request.studentProfile?.fullName}</CardTitle>
//                                     <CardDescription className="font-medium text-sm">{request.title}</CardDescription>
//                                 </div>
//                             </CardHeader>
//                             <CardContent className="flex-grow space-y-4">
//                                 <div className="space-y-2 text-sm text-muted-foreground">
//                                     {request.stipendExpectation && (
//                                         <div className="flex items-center gap-2">
//                                             <IndianRupee className="h-4 w-4" /> {request.stipendExpectation}
//                                         </div>
//                                     )}
//                                     {request.duration && (
//                                         <div className="flex items-center gap-2">
//                                             <Clock className="h-4 w-4" /> {request.duration}
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div className="flex flex-wrap gap-2">
//                                     {getTagsFromSkills(request.desiredSkills).map(tag => (
//                                         <Badge key={tag} variant="secondary">{tag}</Badge>
//                                     ))}
//                                 </div>
//                             </CardContent>
//                             <CardFooter>
//                                 <Button className="w-full" asChild>
//                                     <div>
//                                         <UserIcon className="mr-2 h-4 w-4" /> View Profile
//                                     </div>
//                                 </Button>
//                             </CardFooter>
//                         </Card>
//                     </Link>
//                 )) : (
//                     <div className="text-muted-foreground text-center col-span-full py-8">
//                         <p className="mb-2 text-lg font-semibold">No student requests found</p>
//                         <p>Your search did not match any requests. Try adjusting your filters.</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  Clock,
  IndianRupee,
  Briefcase,
  User as UserIcon,
} from 'lucide-react';
import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  getDoc,
} from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import type { StudentProfileData } from '@/components/profile/edit-student-profile-dialog';
import { getInitials } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface InternshipRequest {
  id: string;
  title: string;
  desiredSkills: string;
  workMode: string;
  duration: string;
  stipendExpectation: string;
  postedByUserId: string;
  studentProfile: StudentProfileData & { fullName?: string; photoURL?: string };
}

export default function InternshipRequestsPage() {
  const [requests, setRequests] = useState<InternshipRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      if (!db) {
        setLoading(false);
        console.error('Firebase database is not initialized.');
        return;
      }

      try {
        const q = query(
          collection(db, 'internshipRequests'),
          orderBy('postedAt', 'desc'),
        );
        const querySnapshot = await getDocs(q);

        const requestsData: InternshipRequest[] = [];

        for (const reqDoc of querySnapshot.docs) {
          const data = reqDoc.data() as Omit<
            InternshipRequest,
            'id' | 'studentProfile'
          >;
          const postedByUserId = data.postedByUserId;

          // Fetch user profile from "users" collection
          let profileData: Partial<
            StudentProfileData & { fullName?: string; photoURL?: string }
          > = {};
          if (postedByUserId) {
            const userDocRef = doc(db, 'users', postedByUserId);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
              const userData = userDocSnap.data();
              profileData = {
                fullName: (userData.fullName as string) || '',
                photoURL: (userData.photoURL as string) || '',
                ...userData,
              };
            }
          }

          // Push with explicit type assertion to satisfy TypeScript
          requestsData.push({
            id: reqDoc.id,
            ...data,
            studentProfile: profileData as StudentProfileData & {
              fullName?: string;
              photoURL?: string;
            },
          } as InternshipRequest);
        }

        setRequests(requestsData);
      } catch (error) {
        console.error('Error fetching internship requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const getTagsFromSkills = (skills: string): string[] => {
    if (!skills) return [];
    return skills
      .split(/,|\n|;/)
      .map((r) => r.trim())
      .filter((tag) => tag.length > 0)
      .slice(0, 3);
  };

  const filteredRequests = requests.filter((request) => {
    const titleMatch = request.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const skillMatch = request.desiredSkills
      .toLowerCase()
      .includes(skillFilter.toLowerCase());
    return titleMatch && skillMatch;
  });

  if (loading) {
    return (
      <div className="container py-12 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Browse Student Requests
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover ambitious students seeking their next opportunity.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex-row items-start gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-48 rounded-md" />
                  <Skeleton className="h-4 w-32 rounded-md" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="mb-4 h-4 w-24 rounded-md" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full rounded-md" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          Browse Student Requests
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover ambitious students seeking their next opportunity.
        </p>
      </div>

      <div className="mx-auto mb-12 max-w-3xl rounded-lg border bg-card p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by request title..."
              className="w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Filter by desired skills..."
              className="w-full pl-10"
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <Link
              key={request.id}
              href={`/public-profile/${request.postedByUserId}`}
              className="flex h-full"
            >
              <Card className="flex w-full flex-col transition-colors hover:border-primary">
                <CardHeader className="flex-row items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={request.studentProfile?.photoURL}
                      alt={request.studentProfile?.fullName || 'Student'}
                    />
                    <AvatarFallback>
                      {getInitials(request.studentProfile?.fullName)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">
                      {request.studentProfile?.fullName}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium">
                      {request.title}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {request.stipendExpectation && (
                      <div className="flex items-center gap-2">
                        <IndianRupee className="h-4 w-4" />{' '}
                        {request.stipendExpectation}
                      </div>
                    )}
                    {request.duration && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" /> {request.duration}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getTagsFromSkills(request.desiredSkills).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    asChild
                  >
                    <div>
                      <UserIcon className="mr-2 h-4 w-4" /> View Profile
                    </div>
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-8 text-center text-muted-foreground">
            <p className="mb-2 text-lg font-semibold">
              No student requests found
            </p>
            <p>
              Your search did not match any requests. Try adjusting your
              filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
