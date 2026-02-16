import Link from 'next/link';
import { Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseProps {
    id: string;
    title: string;
    description: string;
    duration: string;
    features: string[];
    price: string;
}

export function CourseCard({ course }: { course: CourseProps }) {
    return (
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{course.description}</p>
            </div>

            <div className="mb-6 flex items-center text-sm text-gray-500">
                <Clock className="mr-2 h-4 w-4" />
                {course.duration}
            </div>

            <ul className="mb-6 flex-1 space-y-2">
                {course.features.slice(0, 3).map((feature) => ( // Show top 3 features
                    <li key={feature} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-lg font-bold text-blue-600">{course.price}</span>
                <Button asChild variant="outline" size="sm">
                    <Link href={`/courses`}>View Details</Link>
                </Button>
            </div>
        </div>
    );
}
