import { CourseCard } from '@/components/CourseCard';
import { instituteData } from '@/lib/institute-data';

export const metadata = {
    title: 'Courses - BrightPath Academy',
    description: 'Explore our comprehensive courses designed for your success.',
};

export default function CoursesPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        Our Courses
                    </h1>
                    <p className="text-xl text-gray-600">
                        We offer a wide range of courses to help you achieve your academic and career goals.
                        From school tuition to competitive exams and skill development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {instituteData.courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
