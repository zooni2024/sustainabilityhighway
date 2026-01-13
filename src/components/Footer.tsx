import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-ksa-green-950 text-ksa-nature-50 py-16 border-t border-ksa-nature-500/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6 group">
                            <Leaf className="h-8 w-8 text-ksa-nature-600 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="font-black text-2xl text-white tracking-tighter uppercase leading-none">
                                Sustainability<br />Highway
                            </span>
                        </Link>
                        <p className="text-sm text-ksa-nature-50/60 leading-relaxed font-light">
                            Constructing a greener future for Saudi Arabia. Empowering professionals with the knowledge to build sustainably and align with Vision 2030.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-black uppercase tracking-widest text-ksa-nature-500 mb-6 text-sm">Explore</h3>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><Link href="/library" className="hover:text-ksa-nature-500 transition-colors">Digital Library</Link></li>
                            <li><Link href="/frameworks" className="hover:text-ksa-nature-500 transition-colors">KSA Frameworks</Link></li>
                            <li><Link href="/topics" className="hover:text-ksa-nature-500 transition-colors">Core Topics</Link></li>
                            <li><Link href="/stages" className="hover:text-ksa-nature-500 transition-colors">Project Lifecycle</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-black uppercase tracking-widest text-ksa-nature-500 mb-6 text-sm">Resources</h3>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><Link href="/glossary" className="hover:text-ksa-nature-500 transition-colors">Knowledge Glossary</Link></li>
                            <li><Link href="/about" className="hover:text-ksa-nature-500 transition-colors">Our Mission</Link></li>
                            <li><Link href="/contact" className="hover:text-ksa-nature-500 transition-colors">Suggest a Topic</Link></li>
                            <li><Link href="/admin" className="text-ksa-nature-500/50 hover:text-ksa-nature-500 transition-colors">Admin Panel</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-black uppercase tracking-widest text-ksa-nature-500 mb-6 text-sm">Policies</h3>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><Link href="/privacy" className="hover:text-ksa-nature-500 transition-colors">Privacy Statement</Link></li>
                            <li><Link href="/terms" className="hover:text-ksa-nature-500 transition-colors">User Agreement</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 text-center text-xs text-ksa-nature-50/40 uppercase tracking-[0.2em]">
                    <p>&copy; {new Date().getFullYear()} SustainabilityHighway.com. Championing Vision 2030.</p>
                </div>
            </div>
        </footer>
    );
}
