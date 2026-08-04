/**
 * Course Schema Generator
 * Generates JSON-LD schema for educational content
 *
 * @see https://schema.org/Course
 * @see https://developers.google.com/search/docs/appearance/structured-data/course
 */

export interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  providerUrl?: string;
  courseUrl: string;
  imageUrl?: string;
  // Course details
  duration?: string; // ISO 8601 duration format, e.g., "PT2H" for 2 hours
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  language?: string;
  // Pricing
  isFree?: boolean;
  price?: number;
  currency?: string;
  // Ratings
  ratingValue?: number;
  ratingCount?: number;
  // Additional
  skills?: string[];
  prerequisites?: string[];
  syllabus?: string[];
  instructor?: {
    name: string;
    url?: string;
    image?: string;
  };
}

/**
 * Generate Course schema for educational content
 */
export function generateCourseSchema(props: CourseSchemaProps): object {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: props.name,
    description: props.description,
    url: props.courseUrl,
    provider: {
      '@type': 'Organization',
      name: props.provider || 'Sproutern',
      url: props.providerUrl || 'https://sproutern.dpdns.org',
      logo: 'https://sproutern.dpdns.org/logo.jpg',
    },
    inLanguage: props.language || 'en',
  };

  // Image
  if (props.imageUrl) {
    schema.image = props.imageUrl;
  }

  // Duration
  if (props.duration) {
    schema.timeRequired = props.duration;
  }

  // Difficulty level
  if (props.difficulty) {
    schema.educationalLevel = props.difficulty;
  }

  // Instructor
  if (props.instructor) {
    schema.instructor = {
      '@type': 'Person',
      name: props.instructor.name,
      url: props.instructor.url,
      image: props.instructor.image,
    };
  }

  // Skills learned
  if (props.skills && props.skills.length > 0) {
    schema.teaches = props.skills;
  }

  // Prerequisites
  if (props.prerequisites && props.prerequisites.length > 0) {
    schema.coursePrerequisites = props.prerequisites;
  }

  // Syllabus
  if (props.syllabus && props.syllabus.length > 0) {
    schema.syllabusSections = props.syllabus.map((topic, index) => ({
      '@type': 'Syllabus',
      name: topic,
      position: index + 1,
    }));
  }

  // Pricing
  if (props.isFree) {
    schema.isAccessibleForFree = true;
    schema.offers = {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    };
  } else if (props.price !== undefined) {
    schema.offers = {
      '@type': 'Offer',
      price: props.price,
      priceCurrency: props.currency || 'USD',
      availability: 'https://schema.org/InStock',
    };
  }

  // Ratings
  if (props.ratingValue && props.ratingCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: props.ratingValue,
      ratingCount: props.ratingCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return schema;
}

/**
 * Generate Learning Path schema (collection of courses)
 */
export interface LearningPathProps {
  name: string;
  description: string;
  url: string;
  courses: Array<{
    name: string;
    url: string;
    position: number;
  }>;
  duration?: string;
  difficulty?: string;
}

export function generateLearningPathSchema(props: LearningPathProps): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: props.name,
    description: props.description,
    url: props.url,
    numberOfItems: props.courses.length,
    itemListElement: props.courses.map((course) => ({
      '@type': 'ListItem',
      position: course.position,
      item: {
        '@type': 'Course',
        name: course.name,
        url: course.url,
      },
    })),
  };
}

/**
 * Generate Education Event schema (webinars, workshops)
 */
export interface EducationEventProps {
  name: string;
  description: string;
  startDate: string; // ISO 8601
  endDate?: string;
  url: string;
  location?: 'Online' | string;
  organizer?: string;
  isFree?: boolean;
  price?: number;
}

export function generateEducationEventSchema(
  props: EducationEventProps,
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    name: props.name,
    description: props.description,
    startDate: props.startDate,
    endDate: props.endDate || props.startDate,
    url: props.url,
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'VirtualLocation',
      url: props.url,
    },
    organizer: {
      '@type': 'Organization',
      name: props.organizer || 'Sproutern',
      url: 'https://sproutern.dpdns.org',
    },
    offers: {
      '@type': 'Offer',
      price: props.isFree ? 0 : props.price || 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}

/**
 * Pre-built course schemas for Sproutern content
 */
export const SPROUTERN_COURSES = {
  resumeGuide: generateCourseSchema({
    name: 'Resume Writing for Freshers',
    description:
      'Learn how to create an ATS-friendly resume that gets you interviews. Covers format, content, and optimization tips.',
    courseUrl: 'https://sproutern.dpdns.org/resources/resume-guide',
    isFree: true,
    difficulty: 'Beginner',
    duration: 'PT1H',
    skills: [
      'Resume Writing',
      'ATS Optimization',
      'Cover Letter',
      'Professional Formatting',
    ],
  }),

  interviewPrep: generateCourseSchema({
    name: 'Interview Preparation Guide',
    description:
      'Complete interview preparation covering technical and HR rounds for freshers and experienced professionals.',
    courseUrl: 'https://sproutern.dpdns.org/resources/interview-prep',
    isFree: true,
    difficulty: 'Intermediate',
    duration: 'PT3H',
    skills: [
      'Interview Skills',
      'Communication',
      'Technical Problem Solving',
      'Behavioral Questions',
    ],
  }),

  careerRoadmap: generateCourseSchema({
    name: 'Career Roadmap for Students',
    description:
      'Step-by-step guide to building a successful career from college to your first job.',
    courseUrl: 'https://sproutern.dpdns.org/roadmaps',
    isFree: true,
    difficulty: 'Beginner',
    duration: 'PT2H',
    skills: [
      'Career Planning',
      'Skill Development',
      'Networking',
      'Job Search',
    ],
  }),
};
