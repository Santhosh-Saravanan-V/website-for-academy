import { Users, Target, Book, Award } from 'lucide-react';
import { instituteData } from '@/lib/institute-data';

export const metadata = {
    title: 'About Us - BrightPath Academy',
    description: 'Learn more about our mission, vision, and values.',
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">About Us</h1>
                    <p className="text-xl max-w-2xl mx-auto text-blue-100">
                        Our mission is to empower students with knowledge and skills for a brighter future.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                            <p className="text-lg text-gray-600">
                                To provide high-quality, accessible, and personalized education to students of all backgrounds.
                                We believe in nurturing talent and fostering a love for learning.
                            </p>
                            <div className="flex items-start space-x-4">
                                <Target className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Excellence</h3>
                                    <p className="text-gray-600">Striving for the best in everything we do.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Users className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Inclusivity</h3>
                                    <p className="text-gray-600">Creating a welcoming environment for everyone.</p>
                                </div>
                            </div>
                        </div>
                        {/* Placeholder for Image */}
                        <div className="relative h-64 md:h-96 w-full rounded-2xl bg-gray-200 overflow-hidden shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                                <Target className="h-20 w-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Features */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <Book className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
                            <p className="text-gray-600">Expert Courses</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">1000+</h3>
                            <p className="text-gray-600">Students Enrolled</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <Award className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">95%</h3>
                            <p className="text-gray-600">Success Rate</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
