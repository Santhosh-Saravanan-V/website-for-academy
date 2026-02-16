import { Award, Users, TrendingUp, Calendar } from 'lucide-react';

const features = [
    {
        name: 'Expert Faculty',
        description: 'Learn from the best minds in the industry with years of teaching experience.',
        icon: Award,
    },
    {
        name: 'Personalized Attention',
        description: 'Small batch sizes ensure every student gets the guidance they need.',
        icon: Users,
    },
    {
        name: 'Proven Track Record',
        description: 'Consistent top results in board exams and competitive entrance tests.',
        icon: TrendingUp,
    },
    {
        name: 'Flexible Timings',
        description: 'Morning and evening batches to suit your school and college schedule.',
        icon: Calendar,
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Choose BrightPath?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We focus on holistic development and academic excellence.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div key={feature.name} className="flex flex-col items-center text-center p-6 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white mb-4">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
