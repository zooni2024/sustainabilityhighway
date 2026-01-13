import { getAllPosts } from '@/lib/mdx';
import LibraryView from '@/components/LibraryView';
import fs from 'fs';
import path from 'path';

export const metadata = {
    title: 'Library - SustainabilityHighway',
    description: 'Browse our extensive collection of sustainability guides.'
};

export default function LibraryPage() {
    const posts = getAllPosts();

    // In a real app, use a proper data fetching layer.
    const taxonomyPath = path.join(process.cwd(), 'content/data/taxonomy.json');
    const taxonomy = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mb-12 text-center">
                <span className="text-ksa-nature-600 font-bold tracking-widest uppercase mb-2 block">The Vault</span>
                <h1 className="text-[28px] font-black text-white mb-2 uppercase">Knowledge Library</h1>
                <p className="text-ksa-green-700 text-lg font-light max-w-2xl mx-auto">Explore our extensive collection of guides, standards, and best practices for sustainable development in the Kingdom.</p>
                <div className="w-24 h-1 bg-ksa-nature-500 mx-auto mt-8"></div>
            </div>
            <LibraryView posts={posts} taxonomy={taxonomy} />
        </div>
    );
}
