import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-ksa-green-900 text-ksa-sand-200 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Leaf className="h-6 w-6 text-ksa-teal-500" />
                            <span className="font-bold text-xl text-white tracking-tight">
                                SustainabilityHighway
                            </span>
                        </Link>
                        <p className="text-sm text-ksa-sand-300 leading-relaxed">
                            Empowering Saudi Arabia's construction industry with sustainability knowledge and frameworks aligned with Vision 2030.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/library" className="hover:text-ksa-teal-500 transition-colors">Library</Link></li>
                            <li><Link href="/frameworks" className="hover:text-ksa-teal-500 transition-colors">Frameworks</Link></li>
                            <li><Link href="/topics" className="hover:text-ksa-teal-500 transition-colors">Topics</Link></li>
                            <li><Link href="/stages" className="hover:text-ksa-teal-500 transition-colors">Project Stages</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/glossary" className="hover:text-ksa-teal-500 transition-colors">Glossary</Link></li>
                            <li><Link href="/about" className="hover:text-ksa-teal-500 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-ksa-teal-500 transition-colors">Suggest a Topic</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy" className="hover:text-ksa-teal-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-ksa-teal-500 transition-colors">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-ksa-green-800 mt-12 pt-8 text-center text-sm text-ksa-sand-300">
                    <p>&copy; {new Date().getFullYear()} SustainabilityHighway. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
