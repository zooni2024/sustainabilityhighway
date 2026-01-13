'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Leaf } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
    { name: 'Library', href: '/library' },
    { name: 'Frameworks', href: '/frameworks' },
    { name: 'Topics', href: '/topics' },
    { name: 'Glossary', href: '/glossary' },
    { name: 'About', href: '/about' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-ksa-nature-50/80 backdrop-blur-md border-b border-ksa-nature-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <Leaf className="h-8 w-8 text-ksa-nature-600 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-black text-2xl text-ksa-green-900 tracking-tighter uppercase">
                        Sustainability<span className="text-ksa-nature-600">Highway</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                'text-sm font-black uppercase tracking-widest transition-all hover:text-ksa-nature-600 relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ksa-nature-600 after:transition-all hover:after:w-full',
                                pathname === item.href
                                    ? 'text-ksa-nature-600 after:w-full'
                                    : 'text-ksa-green-900'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-ksa-green-900 border border-ksa-nature-200 rounded-none bg-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-ksa-nature-200 animate-fade-in">
                    <div className="flex flex-col space-y-6 p-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    'text-lg font-black uppercase tracking-widest transition-colors hover:text-ksa-nature-600',
                                    pathname === item.href
                                        ? 'text-ksa-nature-600'
                                        : 'text-ksa-green-900'
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
