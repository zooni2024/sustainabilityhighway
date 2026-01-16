import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1B1B1B] text-[#8C8C8C] font-sans text-sm">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1: About / Logo */}
                    <div className="flex flex-col space-y-6">
                        <Link href="/" className="inline-block group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/icon.png" alt="Sustainability Highway" className="w-16 h-16 mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
                            <h2 className="text-ksa-gold-500 text-xl font-bold uppercase tracking-wider transition-colors">Sustainability<br /><span className="text-white group-hover:text-ksa-gold-500 transition-colors">Highway</span></h2>
                        </Link>
                        <p className="leading-relaxed text-[#8C8C8C]">
                            Leading the way in sustainable construction and green building certification across Saudi Arabia.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded bg-[#2A2A2A] text-white hover:bg-ksa-gold-500 hover:text-[#1B1B1B] transition-all duration-300">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-ksa-gold-500 font-extrabold text-xl mb-6 uppercase tracking-wide border-l-4 border-ksa-gold-500 pl-3">Quick Links</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Our Services', 'Projects', 'News & Events', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-ksa-gold-500 transition-colors flex items-center group">
                                        <span className="mr-2 text-ksa-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-ksa-gold-500 font-extrabold text-xl mb-6 uppercase tracking-wide border-l-4 border-ksa-gold-500 pl-3">Our Services</h3>
                        <ul className="space-y-3">
                            {['Mostadam Certification', 'LEED Consultancy', 'Energy Auditing', 'Environmental Strategy', 'Training'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-ksa-gold-500 transition-colors flex items-center group">
                                        <span className="mr-2 text-ksa-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div>
                        <h3 className="text-ksa-gold-500 font-extrabold text-xl mb-6 uppercase tracking-wide border-l-4 border-ksa-gold-500 pl-3">Contact Us</h3>
                        <div className="space-y-5">
                            <div className="flex items-center space-x-4 group">
                                <div className="p-2 bg-[#2A2A2A] rounded text-ksa-gold-500 group-hover:bg-ksa-gold-500 group-hover:text-[#1B1B1B] transition-colors">
                                    <Mail size={18} className="shrink-0" />
                                </div>
                                <a href="mailto:info@sustainabilityhighway.com" className="group-hover:text-white transition-colors hover:underline">info@sustainabilityhighway.com</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#111111] py-6 border-t border-[#333]">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-[#666]">
                    <p className="mb-2 md:mb-0">
                        © {new Date().getFullYear()} <span className="text-white">Sustainability Highway</span>. All Rights Reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
