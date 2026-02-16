import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { instituteData } from '@/lib/institute-data';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
    title: 'Contact Us - BrightPath Academy',
    description: 'Get in touch with us for admissions and enquiries.',
};

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600">
                        Have questions? We're here to help. Reach out to us via phone, email, or visit our campus.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-xl shadow-md p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <MapPin className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Our Location</h3>
                                        <p className="text-gray-600 mt-1">{instituteData.contact.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Phone className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone Number</h3>
                                        <p className="text-gray-600 mt-1">{instituteData.contact.phone}</p>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Sat 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Mail className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email Address</h3>
                                        <p className="text-gray-600 mt-1">{instituteData.contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-xl h-64 md:h-80 w-full overflow-hidden shadow-md relative">
                            {/* <iframe src={instituteData.contact.mapUrl} width="100%" height="100%" loading="lazy"></iframe> */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-medium">
                                Google Maps Integration Pending
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
