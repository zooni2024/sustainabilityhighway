import { getPostBySlug, getPostSlugs, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Callout from '@/components/Callout';
import { notFound } from 'next/navigation';
import GuideCard from '@/components/GuideCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    const posts = getPostSlugs();
    return posts.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ''),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const post = getPostBySlug(slug);
        return { title: `${post.meta.title} - SustainabilityHighway` };
    } catch {
        return { title: 'Guide Not Found' };
    }
}

const components = {
    Callout,
};

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post;
    try {
        post = getPostBySlug(slug);
    } catch (e) {
        notFound();
    }

    const allPosts = getAllPosts();
    const relatedPosts = allPosts
        .filter(p => p.slug !== post.slug && p.meta.tags.some(t => post.meta.tags.includes(t)))
        .slice(0, 3);

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <Link href="/library" className="inline-flex items-center text-sm font-medium text-ksa-green-700 hover:text-ksa-teal-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Library
            </Link>

            <article className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3">
                    <header className="mb-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.meta.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-ksa-teal-700 bg-ksa-teal-50 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-ksa-green-900 mb-4 tracking-tight leading-tight">
                            {post.meta.title}
                        </h1>
                        <p className="text-xl text-ksa-green-700/80 leading-relaxed max-w-2xl">
                            {post.meta.description}
                        </p>
                    </header>

                    <div className="prose prose-lg prose-headings:text-ksa-green-900 prose-p:text-ksa-green-800 prose-a:text-ksa-teal-600 max-w-none">
                        <MDXRemote source={post.content} components={components} />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white p-6 rounded-lg border border-ksa-sand-300 shadow-sm sticky top-24">
                        <h3 className="font-bold text-ksa-green-900 mb-4 border-b border-ksa-sand-200 pb-2">Guide Details</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between">
                                <span className="text-gray-500">Framework</span>
                                <span className="font-medium text-ksa-green-800">{post.meta.framework || 'General'}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-500">Difficulty</span>
                                <span className="font-medium text-ksa-green-800">{post.meta.difficulty}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-500">Reading Time</span>
                                <span className="font-medium text-ksa-green-800">{post.meta.readingTime}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-500">Updated</span>
                                <span className="font-medium text-ksa-green-800">{new Date(post.meta.updatedAt).toLocaleDateString()}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>

            {relatedPosts.length > 0 && (
                <section className="mt-20 border-t border-ksa-sand-300 pt-12">
                    <h2 className="text-2xl font-bold text-ksa-green-900 mb-8">Related Guides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map(p => <GuideCard key={p.slug} post={p} />)}
                    </div>
                </section>
            )}
        </div>
    );
}
