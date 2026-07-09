import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import {
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { StudentProfileData } from '@/lib/types';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const internshipId = searchParams.get('internshipId');

  if (!internshipId) {
    return NextResponse.json(
      { error: 'Internship ID is required.' },
      { status: 400 },
    );
  }

  try {
    // 1. Fetch internship details
    const internshipRef = doc(db, 'internships', internshipId);
    const internshipSnap = await getDoc(internshipRef);

    if (!internshipSnap.exists()) {
      return NextResponse.json(
        { error: 'Internship not found.' },
        { status: 404 },
      );
    }

    const internshipData = internshipSnap.data();
    const requiredSkills: string[] = internshipData.requiredSkills || []; // Assuming internship has a 'requiredSkills' array

    // 2. Query student profiles
    // For simplicity, let's fetch all student profiles and filter in memory for now.
    // In a real-world scenario, you'd use more advanced Firestore queries or a dedicated search service.
    const studentsCollectionRef = collection(db, 'studentProfiles');
    const studentQuerySnapshot = await getDocs(studentsCollectionRef);

    const matchedStudents: StudentProfileData[] = [];

    studentQuerySnapshot.docs.forEach((docSnap) => {
      const studentProfile = docSnap.data() as StudentProfileData;
      // Basic matching logic: check if student has any of the required skills
      const studentSkills: string[] = studentProfile.skills || []; // Assuming student profile has a 'skills' array

      const hasMatchingSkill = requiredSkills.some((skill) =>
        studentSkills.some((studentSkill) =>
          studentSkill.toLowerCase().includes(skill.toLowerCase()),
        ),
      );

      if (hasMatchingSkill) {
        matchedStudents.push({ id: docSnap.id, ...studentProfile });
      }
    });

    return NextResponse.json({ matchedStudents });
  } catch (error) {
    console.error('Error matching students:', error);
    return NextResponse.json(
      { error: 'Failed to match students.' },
      { status: 500 },
    );
  }
}
