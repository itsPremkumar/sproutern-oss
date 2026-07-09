// "use client";

// import { TestimonialsHeader } from "@/components/testimonials/testimonials-header";
// import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid";

// const testimonials = [
//   {
//     name: "Alice Johnson",
//     role: "Frontend Developer",
//     company: "TechCorp",
//     feedback:
//       "This platform helped me quickly assess my React and TypeScript skills. The quizzes are spot on and the explanations are incredibly detailed!",
//     rating: 6,
//     avatarUrl: "https://i.pravatar.cc/150?img=1",
//     featured: true,
//   },
//   {
//     name: "Brian Lee",
//     role: "Full Stack Engineer",
//     company: "StartupXYZ",
//     feedback:
//       "I love the personalized quizzes. The explanations after each answer are super helpful and have significantly improved my coding skills.",
//     rating: 5,
//     avatarUrl: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     name: "Sara Kim",
//     role: "UI/UX Designer",
//     company: "DesignStudio",
//     feedback:
//       "A great way to test and improve my web development knowledge. The interface is beautiful and the content is always up-to-date. Highly recommended!",
//     rating: 5,
//     avatarUrl: "https://i.pravatar.cc/150?img=5",
//   },
//   {
//     name: "Michael Chen",
//     role: "Software Architect",
//     company: "Enterprise Solutions",
//     feedback:
//       "The depth of questions and real-world scenarios make this platform invaluable for staying current with modern development practices.",
//     rating: 5,
//     avatarUrl: "https://i.pravatar.cc/150?img=7",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "DevOps Engineer",
//     company: "CloudTech",
//     feedback:
//       "Perfect for preparing for technical interviews. The variety of topics covered is impressive and the difficulty progression is well thought out.",
//     rating: 5,
//     avatarUrl: "https://i.pravatar.cc/150?img=9",
//   },
//   {
//     name: "David Park",
//     role: "Mobile Developer",
//     company: "AppInnovate",
//     feedback:
//       "As someone transitioning from mobile to web development, this platform bridged the knowledge gap perfectly. Excellent resource!",
//     rating: 5,
//     avatarUrl: "https://i.pravatar.cc/150?img=11",
//   },
// ];

// export default function TestimonialsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />

//       <div className="relative">
//         {/* Header Section */}
//         <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
//           <TestimonialsHeader />
//         </section>

//         {/* Testimonials Grid */}
//         <section className="pb-20 px-4 sm:px-6 lg:px-8">
//           <TestimonialsGrid testimonials={testimonials} />
//         </section>
//       </div>
//     </div>
//   );
// }

'use client';

import { TestimonialsHeader } from '@/components/testimonials/testimonials-header';
import { TestimonialsGrid } from '@/components/testimonials/testimonials-grid';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    company: 'TechCorp',
    feedback:
      'This platform helped me quickly assess my React and TypeScript skills. The quizzes are spot on and the explanations are incredibly detailed!',
    rating: 6,
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    featured: true,
    category: 'student', // 👈 added
  },
  {
    name: 'Brian Lee',
    role: 'Full Stack Engineer',
    company: 'StartupXYZ',
    feedback:
      'I love the personalized quizzes. The explanations after each answer are super helpful and have significantly improved my coding skills.',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    category: 'startup',
  },
  {
    name: 'Sara Kim',
    role: 'UI/UX Designer',
    company: 'DesignStudio',
    feedback:
      'A great way to test and improve my web development knowledge. The interface is beautiful and the content is always up-to-date. Highly recommended!',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    category: 'student',
  },
  {
    name: 'Michael Chen',
    role: 'Software Architect',
    company: 'Enterprise Solutions',
    feedback:
      'The depth of questions and real-world scenarios make this platform invaluable for staying current with modern development practices.',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/150?img=7',
    category: 'startup',
  },
  {
    name: 'Emily Rodriguez',
    role: 'DevOps Engineer',
    company: 'CloudTech',
    feedback:
      'Perfect for preparing for technical interviews. The variety of topics covered is impressive and the difficulty progression is well thought out.',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    category: 'student',
  },
  {
    name: 'David Park',
    role: 'Mobile Developer',
    company: 'AppInnovate',
    feedback:
      'As someone transitioning from mobile to web development, this platform bridged the knowledge gap perfectly. Excellent resource!',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
    category: 'startup',
  },
];

export default function TestimonialsPage() {
  const studentTestimonials = testimonials.filter(
    (t) => t.category === 'student',
  );
  const startupTestimonials = testimonials.filter(
    (t) => t.category === 'startup',
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="relative">
        {/* Header Section */}
        <section className="px-4 pb-12 pt-20 sm:px-6 lg:px-8">
          <TestimonialsHeader />
        </section>

        {/* Students Testimonials */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Student Testimonials
          </h2>
          <TestimonialsGrid testimonials={studentTestimonials} />
        </section>

        {/* Startups Testimonials */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Startup Testimonials
          </h2>
          <TestimonialsGrid testimonials={startupTestimonials} />
        </section>
      </div>
    </div>
  );
}
