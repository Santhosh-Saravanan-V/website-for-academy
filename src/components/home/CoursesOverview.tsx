import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { instituteData } from '@/lib/institute-data';
import { CourseCard } from '@/components/CourseCard';

export function CoursesOverview() {
    // Show only top 3 courses for overview
    const featuredCourses = instituteData.courses.slice(0, 3);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Popular Courses
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Explore our wide range of courses designed to help you succeed.
                        </p>
                    </div>
                    <Button asChild variant="ghost" className="hidden md:inline-flex">
                        <Link href="/courses">View All Courses &rarr;</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button asChild variant="ghost">
                        <Link href="/courses">View All Courses &rarr;</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
