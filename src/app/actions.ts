'use server';

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  orderBy,
  where,
  Timestamp,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ref, deleteObject, getDownloadURL } from 'firebase/storage';
import {
  smartChatbot,
  type SmartChatbotInput,
  type SmartChatbotOutput,
} from '@/ai/flows/smart-chatbot';
import { optimizeResume } from '@/ai/flows/ai-resume-optimizer';
import { enhanceJobDescription } from '@/ai/flows/job-description-enhancer';
import { auth, db, storage } from '@/lib/firebase';
import { adminDb, adminAuth } from '@/lib/firebase-admin'; // Import adminDb and adminAuth
import { rankAndSummarizeApplicant } from '@/ai/flows/applicant-summarizer';
import {
  generateColdEmailFlow,
  type ColdEmailInput,
  type ColdEmailOutput,
} from '@/ai/flows/generate-cold-email';
import {
  generateSOPFlow,
  type SOPInput,
  type SOPOutput,
} from '@/ai/flows/generate-sop-outline';
import {
  generateGitHubReadmeFlow,
  type GitHubReadmeInput,
  type GitHubReadmeOutput,
} from '@/ai/flows/generate-github-readme';
import type {
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase-admin/firestore';
import type {
  StudentProfileData,
  User,
  Internship,
  AllInternshipsState,
} from '@/lib/types';
import type {
  ResumeOptimizerState,
  ApplyState,
  EnhanceDescriptionState,
  AdminStatsState,
  AllUsersState,
  GenericActionState,
  SeparatedUsersState,
  ApplicantRankingAndSummaryState,
  SmartChatbotClientInput,
  SmartChatbotServerResponse,
  ColdEmailState,
  SOPState,
  GitHubReadmeState,
} from '@/lib/types';
import pdf from 'pdf-parse';
import { generateImage } from '@/ai/flows/image-generator';
import { revalidatePath } from 'next/cache';

// import { generateMCQQuestions, type GenerateMCQQuestionsInput } from '@/ai/flows/generate-mcq-questions';
// import { z } from 'zod';

// const actionSchema = z.object({
//   skills: z.string().min(3, 'Please enter at least one skill.'),
//   numberOfQuestions: z.coerce.number().min(1).max(10),
// });

// export async function createQuizAction(prevState: any, formData: FormData) {
//   const validatedFields = actionSchema.safeParse({
//     skills: formData.get('skills'),
//     numberOfQuestions: formData.get('numberOfQuestions'),
//   });

//   if (!validatedFields.success) {
//     return {
//       message: 'Invalid form data. ' + validatedFields.error.flatten().fieldErrors.skills?.join(' ') || '',
//       errors: validatedFields.error.flatten().fieldErrors,
//       data: null,
//     };
//   }

//   try {
//     const input: GenerateMCQQuestionsInput = validatedFields.data;
//     const quizData = await generateMCQQuestions(input);
//     if (!quizData || !quizData.questions || quizData.questions.length === 0) {
//       return {
//         message: 'Could not generate questions for the given skills. Please try different skills.',
//         errors: null,
//         data: null,
//       }
//     }
//     return {
//       message: 'success',
//       errors: null,
//       data: quizData,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       message: 'An unexpected error occurred while generating the quiz. Please try again later.',
//       errors: null,
//       data: null,
//     };
//   }
// }

export async function handleChat(
  input: SmartChatbotClientInput,
): Promise<SmartChatbotServerResponse> {
  console.log('[Server Action] handleChat: Received input on server', {
    userQuery: input.userQuery,
    chatbotName: input.chatbotName,
    userName: input.userName,
    isNewUpload: input.isNewUpload,
    resumeDataUri: input.resumeDataUri
      ? '...data uri present...'
      : '...no data uri...',
    resumeText: input.resumeText
      ? '...resume text present...'
      : '...no resume text...',
  });

  try {
    let conversationResumeText: string | undefined = input.resumeText;
    const isNewUpload = !!input.resumeDataUri;
    let resumeContextForClient: string | undefined;

    if (input.resumeDataUri) {
      console.log(
        '[Server Action] handleChat: New resume uploaded. Parsing PDF...',
      );
      const base64Data = input.resumeDataUri.split(',')[1];
      if (base64Data) {
        const fileBuffer = Buffer.from(base64Data, 'base64');
        const data = await pdf(fileBuffer);
        conversationResumeText = data.text;
        resumeContextForClient = conversationResumeText;
        console.log(
          '[Server Action] handleChat: PDF parsed. Text length:',
          conversationResumeText?.length,
        );
      } else {
        console.error(
          '[Server Action] handleChat: resumeDataUri was present but base64 data was not found.',
        );
      }
    }

    const genkitInput: SmartChatbotInput = {
      userQuery: input.userQuery,
      chatbotName: input.chatbotName,
      userName: input.userName,
      isNewUpload: isNewUpload,
      resumeText: conversationResumeText,
    };
    console.log(
      '[Server Action] handleChat: Preparing to call Genkit flow with input:',
      genkitInput,
    );

    if (!genkitInput.userQuery && !genkitInput.isNewUpload) {
      console.log(
        '[Server Action] handleChat: No user query or new upload. Aborting.',
      );
      throw new Error('Please type a message or upload a resume.');
    }
    const response = await smartChatbot(genkitInput);
    console.log('[Server Action] handleChat: Received response from Genkit.');
    return {
      response: response,
      resumeContext: resumeContextForClient,
    };
  } catch (error: any) {
    console.error('[Server Action] handleChat: Chat handling error:', error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Something went wrong. Please try again.';
    return { error: `I had trouble responding. ${errorMessage}` };
  }
}

export async function handlePasswordReset(
  prevState: GenericActionState,
  formData: FormData,
): Promise<GenericActionState> {
  if (!auth) {
    return { error: 'Authentication service is not configured.' };
  }
  const email = formData.get('email') as string;
  if (!email) {
    return { error: 'Email is required.' };
  }

  try {
    await sendPasswordResetEmail(auth, email);
    return {
      success:
        'If an account exists for this email, a password reset link has been sent.',
    };
  } catch (error: any) {
    console.error('Password reset error:', error); // Return a generic success message to prevent user enumeration attacks
    return {
      success:
        'If an account exists for this email, a password reset link has been sent.',
    };
  }
}

export async function handleResumeOptimization(
  prevState: ResumeOptimizerState,
  formData: FormData,
): Promise<ResumeOptimizerState> {
  const resumeFile = formData.get('resumeFile') as File;
  const jobDescription = formData.get('jobDescription') as string | null;

  if (!resumeFile || resumeFile.size === 0) {
    return { error: 'A PDF resume file is required.' };
  }
  if (resumeFile.type !== 'application/pdf') {
    return { error: 'Invalid file type. Please upload a PDF.' };
  }

  try {
    const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());
    const data = await pdf(fileBuffer);
    const resumeText = data.text;

    if (!resumeText) {
      return {
        error:
          'Could not extract text from the PDF. The file might be empty or image-based.',
      };
    }

    const result = await optimizeResume({
      resumeText,
      jobDescription: jobDescription || undefined,
    });
    return {
      optimizedResumeText: result.optimizedResumeText,
      rating: result.rating,
      feedback: result.feedback,
    };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to optimize resume. Please try again.' };
  }
}

export async function handleApply(
  prevState: ApplyState,
  formData: FormData,
): Promise<ApplyState> {
  if (!db) {
    return { error: 'Database not configured. Cannot apply.' };
  }
  const internshipId = formData.get('internshipId') as string;
  const startupUserId = formData.get('startupUserId') as string;
  const studentUserId = formData.get('studentUserId') as string;
  const studentName = formData.get('studentName') as string;
  const studentEmail = formData.get('studentEmail') as string;

  if (!internshipId || !startupUserId || !studentUserId) {
    return { error: 'Missing required information to apply.' };
  }

  try {
    const internshipDocRef = doc(db, 'internships', internshipId);
    const internshipDoc = await getDoc(internshipDocRef);
    if (!internshipDoc.exists()) {
      return { error: 'Internship does not exist.' };
    }
    const internshipData = internshipDoc.data();

    const applicationsRef = collection(db, 'applications');

    await addDoc(applicationsRef, {
      internshipId,
      jobTitle: internshipData.jobTitle,
      companyName: internshipData.companyName,
      startupUserId,
      studentUserId,
      studentName,
      studentEmail,
      status: 'applied',
      appliedAt: serverTimestamp(),
    }); // Send notification email to startup

    try {
      const notificationResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/notify-startup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            internshipId,
            studentName,
            studentEmail,
            jobTitle: internshipData.jobTitle,
            companyName: internshipData.companyName,
            startupUserId,
          }),
        },
      );

      if (!notificationResponse.ok) {
        const errorData = await notificationResponse.json();
        console.error(
          'Failed to send application notification email:',
          errorData.message,
        );
        // Do not block the application if email fails, but log the error
      }
    } catch (emailError) {
      console.error(
        'Error sending application notification email:',
        emailError,
      );
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting application:', error);
    return {
      error:
        'Failed to submit application. Please ensure your Firestore security rules and indexes are set up correctly.',
    };
  }
}

export async function handleEnhanceDescription(
  prevState: EnhanceDescriptionState,
  formData: FormData,
): Promise<EnhanceDescriptionState> {
  const jobTitle = formData.get('jobTitle') as string;
  const description = formData.get('description') as string;

  if (!jobTitle || !description) {
    return {
      error:
        'Job title and a draft description are required to generate a new one.',
    };
  }

  try {
    const result = await enhanceJobDescription({
      jobTitle,
      jobDescription: description,
    });
    return { enhancedDescription: result.enhancedDescription };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to enhance description. Please try again.' };
  }
}

export async function handleApplicantSummary(
  studentUserId: string,
  internshipId: string,
): Promise<ApplicantRankingAndSummaryState> {
  if (!db) {
    return { error: 'Database not configured.' };
  }
  if (!studentUserId || !internshipId) {
    return { error: 'Missing required information to generate summary.' };
  }

  try {
    const studentProfileDocRef = doc(db, 'studentProfiles', studentUserId);
    const internshipDocRef = doc(db, 'internships', internshipId);

    const [studentProfileDoc, internshipDoc] = await Promise.all([
      getDoc(studentProfileDocRef),
      getDoc(internshipDocRef),
    ]);

    if (!studentProfileDoc.exists()) {
      return { error: 'This student has not filled out their profile yet.' };
    }
    const studentProfile = studentProfileDoc.data() as StudentProfileData;

    if (!internshipDoc.exists()) {
      return { error: 'Internship details not found.' };
    }
    const internshipData = internshipDoc.data();
    const internship = {
      jobTitle: internshipData.jobTitle,
      description: internshipData.description,
      requirements: internshipData.requirements,
    };

    let resumeText: string | undefined = undefined;
    if (studentProfile.resumeUrl && studentProfile.resumeFileName) {
      try {
        const httpsReference = ref(
          storage,
          `resumes/${studentUserId}/${studentProfile.resumeFileName}`,
        );
        const downloadUrl = await getDownloadURL(httpsReference);
        const response = await fetch(downloadUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch resume: ${response.statusText}`);
        }
        const fileBuffer = await response.arrayBuffer();
        const data = await pdf(Buffer.from(fileBuffer));
        resumeText = data.text;
      } catch (e) {
        console.warn(
          'Could not fetch or parse resume for the given student:',
          e instanceof Error ? e.message : e,
        );
        resumeText = 'Could not retrieve resume from storage.';
      }
    }

    const result = await rankAndSummarizeApplicant({
      studentProfile: { ...studentProfile, resumeText },
      internship,
    });
    return {
      summary: result.summary,
      suitabilityScore: result.suitabilityScore,
    };
  } catch (error) {
    console.error('Error generating applicant summary and ranking:', error);
    return {
      error:
        'Failed to generate AI analysis. The model may be overloaded. Please try again.',
    };
  }
}

// Admin & Deletion Actions

export async function getAdminStats(): Promise<AdminStatsState> {
  if (!adminDb) return { error: 'Admin database connection failed.' };
  try {
    const usersSnap = await adminDb.collection('users').get();
    const internshipsSnap = await adminDb.collection('internships').get();
    const applicationsSnap = await adminDb.collection('applications').get();

    let totalStudents = 0;
    let totalStartups = 0;
    let totalAdmins = 0;

    usersSnap.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const user = doc.data();
      if (user.userType === 'student') totalStudents++;
      else if (user.userType === 'startup') totalStartups++;
      else if (user.userType === 'admin') totalAdmins++;
    });

    return {
      stats: {
        totalUsers: usersSnap.size,
        totalStudents,
        totalStartups,
        totalAdmins,
        totalInternships: internshipsSnap.size,
        totalApplications: applicationsSnap.size,
      },
    };
  } catch (error: any) {
    console.error('Error fetching admin stats:', error);
    const errorMessage =
      'Failed to fetch admin statistics. This is likely due to missing admin permissions in your Firestore Security Rules. Ensure you are logged in as an admin and the rules grant you read access.';
    return { error: errorMessage };
  }
}

export async function getAllUsersAndSeparateByType(): Promise<SeparatedUsersState> {
  if (!adminDb) return { error: 'Admin database connection failed.' };
  try {
    const usersSnap = await adminDb.collection('users').get();
    const allUsers: User[] = usersSnap.docs.map(
      (doc: QueryDocumentSnapshot<DocumentData>) =>
        ({ ...doc.data(), userId: doc.id }) as User,
    );

    const students = allUsers.filter((u) => u.userType === 'student');
    const startups = allUsers.filter((u) => u.userType === 'startup');
    const admins = allUsers.filter((u) => u.userType === 'admin');

    return { students, startups, admins };
  } catch (error: any) {
    console.error('Error fetching users:', error);
    return {
      error: `Failed to fetch users. This may be due to missing permissions in your Firestore security rules.`,
    };
  }
}

export async function getAllInternships(): Promise<AllInternshipsState> {
  if (!adminDb) return { error: 'Admin database connection failed.' };
  try {
    const internshipsSnap = await adminDb
      .collection('internships')
      .orderBy('postedAt', 'desc')
      .get();
    const internships = internshipsSnap.docs.map(
      (doc: QueryDocumentSnapshot<DocumentData>) => {
        const data = doc.data();
        const postedAtTimestamp = data.postedAt as Timestamp;
        const plainPostedAt = postedAtTimestamp
          ? {
              seconds: postedAtTimestamp.seconds,
              nanoseconds: postedAtTimestamp.nanoseconds,
            }
          : null;

        return {
          id: doc.id,
          ...data,
          postedAt: plainPostedAt,
        };
      },
    ) as Internship[];
    return { internships };
  } catch (error) {
    console.error('Error fetching all internships:', error);
    return {
      error:
        'Failed to fetch internships. This may be due to missing permissions or a missing index.',
    };
  }
}

export async function deleteInternshipRequest(
  requestId: string,
): Promise<GenericActionState> {
  if (!auth?.currentUser || !db) {
    return { error: 'Unauthorized access or database not configured.' };
  }

  try {
    const requestDocRef = doc(db, 'internshipRequests', requestId);
    const requestDoc = await getDoc(requestDocRef);

    if (!requestDoc.exists()) {
      return { error: 'Internship request not found.' };
    }

    if (requestDoc.data().postedByUserId !== auth.currentUser.uid) {
      return { error: 'You are not authorized to delete this request.' };
    }

    await deleteDoc(requestDocRef);
    revalidatePath('/profile');
    return { success: 'Internship request deleted successfully.' };
  } catch (error) {
    console.error('Error deleting internship request:', error);
    return { error: 'Failed to delete internship request.' };
  }
}

// Admin Deletion Actions
export async function adminDeleteInternship(
  prevState: GenericActionState,
  formData: FormData,
): Promise<GenericActionState> {
  if (!auth?.currentUser || !adminDb) return { error: 'Unauthorized access.' };
  const internshipId = formData.get('internshipId') as string;
  if (!internshipId) return { error: 'Internship ID is missing.' };

  try {
    const userDoc = await adminDb
      .collection('users')
      .doc(auth?.currentUser?.uid)
      .get();
    if (!userDoc.exists || userDoc.data()?.userType !== 'admin') {
      return { error: 'Unauthorized. Admin access required.' };
    }

    await adminDb.collection('internships').doc(internshipId).delete();
    revalidatePath('/admin');
    return { success: 'Internship deleted by admin.' };
  } catch (error) {
    console.error('Admin error deleting internship:', error);
    return { error: 'Failed to delete internship.' };
  }
}

export async function adminDeleteUser(
  prevState: GenericActionState,
  formData: FormData,
): Promise<GenericActionState> {
  // Check both auth and adminDb for initial authorization/db connection
  if (!auth?.currentUser || !adminDb || !adminAuth)
    return { error: 'Unauthorized access or admin services not configured.' };

  const userId = formData.get('userId') as string;
  const userType = formData.get('userType') as 'student' | 'startup';
  if (!userId || !userType) return { error: 'User ID or type is missing.' };
  try {
    const userDoc = await adminDb
      .collection('users')
      .doc(auth?.currentUser?.uid)
      .get();
    if (!userDoc.exists || userDoc.data()?.userType !== 'admin') {
      return { error: 'Unauthorized. Admin access required.' };
    } // Now that we've confirmed adminAuth is available, use it.

    await adminAuth.deleteUser(userId); // Then delete from Firestore

    const userProfileRef = adminDb
      .collection(
        userType === 'student' ? 'studentProfiles' : 'startupProfiles',
      )
      .doc(userId);
    const userRef = adminDb.collection('users').doc(userId);
    const batch = adminDb.batch();
    batch.delete(userProfileRef);
    batch.delete(userRef);
    await batch.commit();

    revalidatePath('/admin');
    return { success: 'User deleted completely from Auth and Firestore.' };
  } catch (error: any) {
    console.error('Admin error deleting user:', error);
    return { error: 'Failed to delete user.' };
  }
}

export async function generateColdEmailAction(
  prevState: ColdEmailState,
  formData: FormData,
): Promise<ColdEmailState> {
  const input: ColdEmailInput = {
    senderName: formData.get('senderName') as string,
    senderCollege: (formData.get('senderCollege') as string) || undefined,
    recipientName: (formData.get('recipientName') as string) || undefined,
    companyName: formData.get('companyName') as string,
    role: formData.get('role') as string,
    emailType: formData.get('emailType') as any,
    specificContext: (formData.get('specificContext') as string) || undefined,
    tone: (formData.get('tone') as any) || 'professional',
  };

  try {
    const result = await generateColdEmailFlow(input);
    return { data: result };
  } catch (error: any) {
    console.error('Error generating cold email:', error);
    return { error: 'Failed to generate email. Please try again.' };
  }
}

export async function generateSOPAction(
  prevState: SOPState,
  formData: FormData,
): Promise<SOPState> {
  const input: SOPInput = {
    targetDegree: formData.get('targetDegree') as string,
    targetUniversity: (formData.get('targetUniversity') as string) || undefined,
    background: formData.get('background') as string,
    motivation: formData.get('motivation') as string,
    experiences: formData.get('experiences') as string,
    futureGoals: formData.get('futureGoals') as string,
  };

  try {
    const result = await generateSOPFlow(input);
    return { data: result };
  } catch (error: any) {
    console.error('Error generating SOP:', error);
    return { error: 'Failed to generate SOP outline. Please try again.' };
  }
}

export async function generateGitHubReadmeAction(
  prevState: GitHubReadmeState,
  formData: FormData,
): Promise<GitHubReadmeState> {
  const skillsString = formData.get('skills') as string;
  const skills = skillsString
    ? skillsString.split(',').map((s) => s.trim())
    : [];

  const input: GitHubReadmeInput = {
    fullName: formData.get('fullName') as string,
    title: formData.get('title') as string,
    currentWork: (formData.get('currentWork') as string) || undefined,
    learning: (formData.get('learning') as string) || undefined,
    skills: skills,
    funFact: (formData.get('funFact') as string) || undefined,
    style: (formData.get('style') as any) || 'creative',
    socials: {
      github: (formData.get('github') as string) || undefined,
      twitter: (formData.get('twitter') as string) || undefined,
      linkedin: (formData.get('linkedin') as string) || undefined,
      portfolio: (formData.get('portfolio') as string) || undefined,
    },
  };

  try {
    const result = await generateGitHubReadmeFlow(input);
    return { data: result };
  } catch (error: any) {
    console.error('Error generating README:', error);
    return { error: 'Failed to generate README. Please try again.' };
  }
}
