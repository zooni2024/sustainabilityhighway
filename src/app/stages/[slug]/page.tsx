import { getAllPosts } from '@/lib/mdx';
import GuideCard from '@/components/GuideCard';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
    const taxonomyPath = path.join(process.cwd(), 'content/data/taxonomy.json');
    const { stages } = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));
    return stages.map((s: any) => ({ slug: s.slug }));
}

export default async function StageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const taxonomyPath = path.join(process.cwd(), 'content/data/taxonomy.json');
    const { stages } = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));

    const stage = stages.find((s: any) => s.slug === slug);

    if (!stage) notFound();

    const posts = getAllPosts().filter(p => p.meta.stage === stage.name);

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-ksa-green-900 mb-8">{stage.name} Stage Guides</h1>

            <h2 className="text-2xl font-bold text-ksa-green-900 mb-6">Related Guides</h2>
            {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map(post => <GuideCard key={post.slug} post={post} />)}
                </div>
            ) : (
                <p className="text-gray-500 italic">No guides found for this stage yet.</p>
            )}
        </div>
    );
}
