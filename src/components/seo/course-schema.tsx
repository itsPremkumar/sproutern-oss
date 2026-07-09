/**
 * Course Schema Component
 * Renders JSON-LD schema for educational content
 */

import {
  generateCourseSchema,
  generateLearningPathSchema,
  generateEducationEventSchema,
  type CourseSchemaProps,
  type LearningPathProps,
  type EducationEventProps,
} from '@/lib/seo/course-schema';

interface CourseSchemaComponentProps {
  course: CourseSchemaProps;
}

/**
 * Course Schema - Use on course/guide pages
 */
export function CourseSchema({ course }: CourseSchemaComponentProps) {
  const schema = generateCourseSchema(course);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LearningPathSchemaComponentProps {
  learningPath: LearningPathProps;
}

/**
 * Learning Path Schema - Use on roadmap pages
 */
export function LearningPathSchema({
  learningPath,
}: LearningPathSchemaComponentProps) {
  const schema = generateLearningPathSchema(learningPath);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface EducationEventSchemaComponentProps {
  event: EducationEventProps;
}

/**
 * Education Event Schema - Use on webinar/workshop pages
 */
export function EducationEventSchema({
  event,
}: EducationEventSchemaComponentProps) {
  const schema = generateEducationEventSchema(event);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Re-export types for convenience
export type { CourseSchemaProps, LearningPathProps, EducationEventProps };
