export interface InterviewRound {
  roundName: string;
  description: string;
  questions?: string[];
  duration?: string; // e.g., "60 minutes"
  mode?: string; // e.g., "Online", "Offline"
  platform?: string; // e.g., "Zoom", "HackerRank"
}

export interface InterviewExperience {
  id: string;
  studentName?: string;
  regNo?: string;
  company: string;
  college?: string;
  role?: string;
  batch: string; // e.g., "2021-2025"
  rounds: InterviewRound[];
  verdict?: 'Selected' | 'Rejected' | 'Pending';
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  tips?: string[];
  content?: string; // Markdown content if rounds are not structured
  date?: string;
  department?: string;
  salary?: string;
  companyLogo?: string;
  studentImage?: string;
  resumeUrl?: string;

  // Optional: Academic Details
  cgpa?: string; // e.g., "8.5" or "85%"
  specialization?: string; // e.g., "AI/ML", "Cybersecurity"

  // Optional: Job Details
  location?: string; // e.g., "Bangalore", "Remote"
  jobType?: string; // e.g., "Full-time", "Internship"
  workMode?: string; // e.g., "On-site", "Remote", "Hybrid"
  joiningDate?: string;

  // Optional: Interview Process
  interviewMode?: string; // e.g., "Online", "Offline", "Hybrid"
  totalDuration?: string; // e.g., "3 weeks", "1 month"
  applicationMethod?: string; // e.g., "Campus Placement", "Referral", "Direct Apply"
  numberOfApplicants?: number;
  numberOfSelected?: number;

  // Optional: Skills & Preparation
  primarySkills?: string[]; // e.g., ["Java", "Python", "React"]
  topicsCovered?: string[]; // e.g., ["DSA", "System Design", "DBMS"]
  preparationTime?: string; // e.g., "3 months"
  resources?: string[]; // e.g., ["LeetCode", "GeeksforGeeks"]
  problemsSolved?: number; // Approximate count
  mockInterviews?: number;

  // Optional: Projects & Experience
  relevantProjects?: string[]; // Brief descriptions
  githubProfile?: string;
  previousInternships?: string[]; // Company names
  certifications?: string[];
  hackathons?: string[];

  // Optional: Contact & Mentorship
  linkedIn?: string;
  willingToMentor?: boolean;
  availableForMockInterview?: boolean;

  // Optional: Additional Insights
  eligibilityCriteria?: string; // e.g., "CGPA > 7.0, No backlogs"
  mistakesToAvoid?: string[];
  whatWorkedWell?: string[];
  companyCulture?: string; // Brief description
  workLifeBalance?: number; // Rating 1-5
  learningOpportunities?: number; // Rating 1-5
}
