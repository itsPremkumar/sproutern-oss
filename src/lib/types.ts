import { z } from 'zod';

// --- Form Action States ---

// Generic state for simple success/error actions (e.g., deletions)
export const GenericActionStateSchema = z.object({
  success: z.string().optional(),
  error: z.string().optional(),
});
export type GenericActionState = z.infer<typeof GenericActionStateSchema>;

// Resume Optimizer action state
const ResumeOptimizerStateSchema = z.object({
  optimizedResumeText: z.string().optional(),
  rating: z.number().optional(),
  feedback: z.string().optional(),
  error: z.string().optional(),
});
export type ResumeOptimizerState = z.infer<typeof ResumeOptimizerStateSchema>;

// Application action state
const ApplyStateSchema = z.object({
  success: z.boolean().optional(),
  error: z.string().optional(),
});
export type ApplyState = z.infer<typeof ApplyStateSchema>;

// Job Description Enhancer action state
const EnhanceDescriptionStateSchema = z.object({
  enhancedDescription: z.string().optional(),
  error: z.string().optional(),
});
export type EnhanceDescriptionState = z.infer<
  typeof EnhanceDescriptionStateSchema
>;

// Applicant Summarizer action state
const ApplicantSummaryStateSchema = z.object({
  summary: z.string().optional(),
  error: z.string().optional(),
});
export type ApplicantSummaryState = z.infer<typeof ApplicantSummaryStateSchema>;

// Applicant Rank and Summary action state
export const ApplicantRankingAndSummaryStateSchema = z.object({
  summary: z.string().optional(),
  suitabilityScore: z.number().optional(),
  error: z.string().optional(),
});
export type ApplicantRankingAndSummaryState = z.infer<
  typeof ApplicantRankingAndSummaryStateSchema
>;

// --- Admin Action States ---

const AdminStatsDataSchema = z.object({
  totalUsers: z.number(),
  totalStudents: z.number(),
  totalStartups: z.number(),
  totalAdmins: z.number(),
  totalInternships: z.number(),
  totalApplications: z.number(),
});
export type AdminStatsData = z.infer<typeof AdminStatsDataSchema>;

export const AdminStatsStateSchema = z.object({
  stats: AdminStatsDataSchema.optional(),
  error: z.string().optional(),
});
export type AdminStatsState = z.infer<typeof AdminStatsStateSchema>;

const UserSchema = z.object({
  userId: z.string(),
  fullName: z.string(),
  email: z.string(),
  userType: z.enum(['student', 'startup', 'admin']),
});
export type User = z.infer<typeof UserSchema>;

export const AllUsersStateSchema = z.object({
  users: z.array(UserSchema).optional(),
  error: z.string().optional(),
});
export type AllUsersState = z.infer<typeof AllUsersStateSchema>;

export const SeparatedUsersStateSchema = z.object({
  students: z.array(UserSchema).optional(),
  startups: z.array(UserSchema).optional(),
  admins: z.array(UserSchema).optional(),
  error: z.string().optional(),
});
export type SeparatedUsersState = z.infer<typeof SeparatedUsersStateSchema>;

const InternshipSchema = z.object({
  id: z.string(),
  jobTitle: z.string(),
  companyName: z.string(),
  requiredSkills: z.array(z.string()).default([]),
  postedAt: z
    .object({ seconds: z.number(), nanoseconds: z.number() })
    .nullable(),
});
export type Internship = z.infer<typeof InternshipSchema>;

export const AllInternshipsStateSchema = z.object({
  internships: z.array(InternshipSchema).optional(),
  error: z.string().optional(),
});
export type AllInternshipsState = z.infer<typeof AllInternshipsStateSchema>;

// --- Profile Data Schemas ---

export const StudentProfileDataSchema = z.object({
  id: z.string().optional(),
  userId: z.string().optional(), // Added this line
  fullName: z.string().optional(), // Added this line
  skills: z.array(z.string()).default([]),
  experience: z
    .array(
      z.object({
        title: z.string(),
        company: z.string(),
        description: z.string(),
      }),
    )
    .default([]),
  education: z
    .object({
      degree: z.string(),
      university: z.string(),
      year: z.string(),
    })
    .optional(),
  resumeUrl: z.string().optional(),
  resumeFileName: z.string().optional(),
  dob: z.string().optional(),
  age: z.number().optional(),
  gender: z.string().optional(),
  phoneNumber: z.string().optional(),
  department: z.string().optional(),
  yearOfStudy: z.string().optional(),
  studyingStatus: z.string().optional(),
  cgpa: z.number().optional(),
});
export type StudentProfileData = z.infer<typeof StudentProfileDataSchema>;

// --- Smart Chatbot Types ---
export interface SmartChatbotClientInput {
  userQuery: string;
  chatbotName: string;
  userName?: string;
  isNewUpload: boolean;
  resumeDataUri?: string;
  resumeText?: string;
}

// The actual output type from the smart-chatbot flow
export interface SmartChatbotOutput {
  botResponse: string;
}

export interface SmartChatbotServerResponse {
  response?: SmartChatbotOutput;
  resumeContext?: string;
  error?: string;
}

// --- AI Tool Action States ---
export type ColdEmailState = {
  data?: {
    subject: string;
    body: string;
  };
  error?: string;
};

export type SOPState = {
  data?: {
    title: string;
    sections: {
      title: string;
      content: string;
      tips: string;
    }[];
  };
  error?: string;
};

export type GitHubReadmeState = {
  data?: {
    markdown: string;
  };
  error?: string;
};
