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
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-ksa-green-900 mb-2">Knowledge Library</h1>
                <p className="text-ksa-green-700">Explore our collection of guides, standards, and best practices.</p>
            </div>
            <LibraryView posts={posts} taxonomy={taxonomy} />
        </div>
    );
}
