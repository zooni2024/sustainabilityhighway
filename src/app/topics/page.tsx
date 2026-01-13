import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { ArrowRight, Zap } from 'lucide-react';

export default function TopicsIndex() {
    const taxonomyPath = path.join(process.cwd(), 'content/data/taxonomy.json');
    const { topics } = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-ksa-green-900 mb-8">Sustainability Topics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((t: any) => (
                    <Link key={t.slug} href={`/topics/${t.slug}`} className="block bg-white p-6 rounded-lg shadow-sm border border-ksa-sand-300 hover:border-ksa-teal-500 hover:shadow-md transition-all">
                        <Zap className="w-8 h-8 text-ksa-gold-600 mb-4" />
                        <h2 className="text-xl font-bold text-ksa-green-900 mb-2">{t.name}</h2>
                        <span className="text-ksa-teal-600 font-semibold text-sm flex items-center mt-4">View Guides <ArrowRight className="w-4 h-4 ml-1" /></span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
