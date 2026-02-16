'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { instituteData } from '@/lib/institute-data';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 px-4 md:px-6 lg:py-32">
            <div className="container mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                            <BookOpen className="mr-2 h-4 w-4" />
                            New Batches Starting Soon
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            Unlock Your Potential with{' '}
                            <span className="text-blue-600">Expert Coaching</span>
                        </h1>
                        <p className="text-lg text-gray-600 sm:text-xl">
                            {instituteData.description}
                            Join {instituteData.name} and take the first step towards a successful career.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <Button asChild size="lg" className="w-full sm:w-auto">
                                <Link href="/courses">
                                    Explore Courses
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto group">
                                <Link href="/contact">
                                    Book a Free Demo
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
                                ))}
                            </div>
                            <p>Trusted by 1000+ students</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
                    >
                        {/* Placeholder for Hero Image - using a colored div for now or an SVG pattern */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 opacity-10 blur-3xl" />
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-200 shadow-2xl">
                            <div className="flex h-full items-center justify-center bg-blue-50">
                                <BookOpen className="h-32 w-32 text-blue-200" />
                                <span className="sr-only">Learning Illustration</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
