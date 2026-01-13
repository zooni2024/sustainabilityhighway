import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Frameworks - SustainabilityHighway',
    description: 'Overview of sustainability frameworks used in Saudi Arabia.'
};

export default function FrameworksIndex() {
    const taxonomyPath = path.join(process.cwd(), 'content/data/taxonomy.json');
    const { frameworks } = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-ksa-green-900 mb-8">Sustainability Frameworks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frameworks.map((f: any) => (
                    <Link key={f.slug} href={`/frameworks/${f.slug.toLowerCase()}`} className="block bg-white p-6 rounded-lg shadow-sm border border-ksa-sand-300 hover:border-ksa-teal-500 hover:shadow-md transition-all">
                        <h2 className="text-xl font-bold text-ksa-green-900 mb-2">{f.name}</h2>
                        <p className="text-ksa-green-700 mb-4">{f.description}</p>
                        <span className="text-ksa-teal-600 font-semibold text-sm flex items-center">View Guides <ArrowRight className="w-4 h-4 ml-1" /></span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
