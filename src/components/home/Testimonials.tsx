import { Quote } from 'lucide-react';
import { instituteData } from '@/lib/institute-data';

export function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        What Our Students Say
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {instituteData.testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="relative rounded-2xl bg-gray-50 p-8">
                            <Quote className="h-8 w-8 text-blue-200 mb-4" />
                            <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                {/* <div className="h-10 w-10 rounded-full bg-gray-200 mr-3" /> */}
                                {/* Avatar placeholder if needed, or just initials */}
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
