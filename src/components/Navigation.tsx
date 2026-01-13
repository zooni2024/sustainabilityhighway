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
        <nav className="bg-white border-b border-ksa-sand-300 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Leaf className="h-6 w-6 text-ksa-gold-600" />
                    <span className="font-bold text-xl text-ksa-green-900 tracking-tight">
                        SustainabilityHighway
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-ksa-gold-600',
                                pathname === item.href
                                    ? 'text-ksa-gold-600'
                                    : 'text-ksa-green-800'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-ksa-green-900"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-ksa-sand-300">
                    <div className="flex flex-col space-y-4 p-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    'text-base font-medium transition-colors hover:text-ksa-gold-600',
                                    pathname === item.href
                                        ? 'text-ksa-gold-600'
                                        : 'text-ksa-green-800'
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
