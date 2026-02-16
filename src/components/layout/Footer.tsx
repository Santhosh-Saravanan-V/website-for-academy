import Link from 'next/link';
import { BookOpen, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { instituteData } from '@/lib/institute-data';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <BookOpen className="h-6 w-6 text-blue-500" />
                            <span className="text-xl font-bold text-white">{instituteData.name}</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            {instituteData.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Courses', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm hover:text-blue-500 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                                <span className="text-sm">{instituteData.contact.address}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                                <span className="text-sm">{instituteData.contact.phone}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                                <span className="text-sm">{instituteData.contact.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-sky-500 transition-colors"><Twitter className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {instituteData.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
