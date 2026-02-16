import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTA() {
    return (
        <section className="bg-blue-600 py-16 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-8">
                    Join hundreds of successful students at BrightPath Academy. Enroll today or book a free demo class.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto font-semibold">
                        <Link href="/contact">
                            Enroll Now
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-blue-700 hover:text-white">
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
