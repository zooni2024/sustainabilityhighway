import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { ArrowRight, Layers } from 'lucide-react';

export default function StagesIndex() {
    const taxonomyPath = path.join(process.cwd(), 'content/data/taxonomy.json');
    const { stages } = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-ksa-green-900 mb-8">Project Stages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stages.map((s: any) => (
                    <Link key={s.slug} href={`/stages/${s.slug}`} className="block bg-white p-6 rounded-lg shadow-sm border border-ksa-sand-300 hover:border-ksa-teal-500 hover:shadow-md transition-all">
                        <Layers className="w-8 h-8 text-ksa-teal-600 mb-4" />
                        <h2 className="text-xl font-bold text-ksa-green-900 mb-2">{s.name}</h2>
                        <span className="text-ksa-teal-600 font-semibold text-sm flex items-center mt-4">View Guides <ArrowRight className="w-4 h-4 ml-1" /></span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
