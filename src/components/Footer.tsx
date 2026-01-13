import Link from 'next/link';
import { Leaf, Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-ksa-green-950 text-white border-t-4 border-ksa-gold-500 font-sans relative overflow-hidden">
            {/* Background Pattern (Optional subtle texture) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
                {/* Top Section: Logos & About */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
                    <div className="md:w-1/3">
                        <Link href="/" className="flex items-center space-x-3 mb-6 group">
                            <div className="bg-gradient-to-br from-ksa-gold-400 to-ksa-gold-600 p-2 rounded-lg shadow-lg group-hover:shadow-ksa-gold-500/20 transition-all duration-300">
                                <Leaf className="h-8 w-8 text-ksa-green-950" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl tracking-tight leading-none text-white">
                                    Sustainability
                                </span>
                                <span className="font-light text-lg tracking-[0.2em] text-ksa-gold-400 uppercase">
                                    Highway
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                            Empowering Saudi Arabia's construction sector with sustainable practices.
                            Aligned with <span className="text-ksa-gold-400 font-semibold">Vision 2030</span> to build a greener future.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-ksa-green-950 hover:bg-ksa-gold-500 hover:border-ksa-gold-500 transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
                        <div>
                            <h3 className="text-lg font-bold text-ksa-gold-500 mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-ksa-gold-500">
                                Explore
                            </h3>
                            <ul className="space-y-4">
                                {['Digital Library', 'KSA Frameworks', 'Core Topics', 'Project Lifecycle'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-300 hover:text-ksa-gold-400 transition-colors flex items-center group">
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-ksa-gold-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-ksa-gold-500 mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-ksa-gold-500">
                                Resources
                            </h3>
                            <ul className="space-y-4">
                                {['Glossary', 'Events', 'Case Studies', 'Interactive Map'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-300 hover:text-ksa-gold-400 transition-colors flex items-center group">
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-ksa-gold-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="text-lg font-bold text-ksa-gold-500 mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-ksa-gold-500">
                                Contact Us
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-ksa-gold-500 shrink-0 mt-1" />
                                    <span>Riyadh, Saudi Arabia<br />King Fahd Road</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-ksa-gold-500 shrink-0" />
                                    <a href="mailto:info@sustainabilityhighway.com" className="hover:text-ksa-gold-400">info@sustainabilityhighway.com</a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-ksa-gold-500 shrink-0" />
                                    <span>+966 11 000 0000</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-800 py-10 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-ksa-green-900/50 p-6 rounded-2xl border border-white/5">
                        <div className="md:w-1/2">
                            <h4 className="text-xl font-bold text-white mb-2">Subscribe to our Newsletter</h4>
                            <p className="text-gray-400 text-sm">Stay updated with the latest in sustainable construction and Vision 2030 initiatives.</p>
                        </div>
                        <div className="flex w-full md:w-auto flex-1 max-w-md gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 rounded-lg bg-ksa-green-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-ksa-gold-500 focus:ring-1 focus:ring-ksa-gold-500 transition-all"
                            />
                            <button className="bg-ksa-gold-500 text-ksa-green-950 font-bold px-6 py-3 rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-ksa-gold-500/20">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Sustainability Highway. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-ksa-gold-500 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-ksa-gold-500 transition-colors">Terms of Use</Link>
                        <Link href="/sitemap" className="hover:text-ksa-gold-500 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
