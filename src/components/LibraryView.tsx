'use client';

import { useState, useMemo } from 'react';
import { Post } from '@/lib/mdx';
import GuideCard from './GuideCard';
import { Search, X } from 'lucide-react';

type Taxonomy = {
    frameworks: { slug: string; name: string }[];
    topics: { slug: string; name: string }[];
    stages: { slug: string; name: string }[];
};

export default function LibraryView({ posts, taxonomy }: { posts: Post[]; taxonomy: Taxonomy }) {
    const [search, setSearch] = useState('');
    const [framework, setFramework] = useState('');
    const [topic, setTopic] = useState('');
    const [stage, setStage] = useState('');
    const [sort, setSort] = useState<'newest' | 'oldest' | 'az'>('newest');

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = post.meta.title.toLowerCase().includes(search.toLowerCase()) ||
                post.meta.description.toLowerCase().includes(search.toLowerCase());
            const matchesFramework = framework ? post.meta.framework === framework : true;
            const matchesTopic = topic ? post.meta.topic === topic : true;
            const matchesStage = stage ? post.meta.stage === stage : true;
            return matchesSearch && matchesFramework && matchesTopic && matchesStage;
        }).sort((a, b) => {
            if (sort === 'newest') return new Date(b.meta.updatedAt).getTime() - new Date(a.meta.updatedAt).getTime();
            if (sort === 'oldest') return new Date(a.meta.updatedAt).getTime() - new Date(b.meta.updatedAt).getTime();
            if (sort === 'az') return a.meta.title.localeCompare(b.meta.title);
            return 0;
        });
    }, [posts, search, framework, topic, stage, sort]);

    const clearFilters = () => {
        setSearch('');
        setFramework('');
        setTopic('');
        setStage('');
    };

    return (
        <div>
            {/* Filters */}
            <div className="bg-white p-8 rounded-none border border-ksa-nature-200 mb-12 shadow-[0_10px_30px_rgba(76,175,80,0.05)]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="md:col-span-4 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ksa-nature-500" />
                        <input
                            type="text"
                            placeholder="Search the highway knowledge..."
                            className="w-full pl-12 pr-4 py-3 border border-ksa-nature-200 rounded-none focus:ring-1 focus:ring-ksa-nature-500 focus:border-ksa-nature-500 outline-none transition-all placeholder:text-ksa-nature-200 font-medium"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ksa-nature-600 block px-1">Framework</label>
                        <select
                            className="w-full p-3 border border-ksa-nature-200 rounded-none bg-ksa-nature-50 text-ksa-green-900 font-bold text-sm outline-none focus:border-ksa-nature-500 transition-colors"
                            value={framework}
                            onChange={(e) => setFramework(e.target.value)}
                        >
                            <option value="">All Frameworks</option>
                            {taxonomy.frameworks.map(f => (<option key={f.slug} value={f.name}>{f.name}</option>))}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ksa-nature-600 block px-1">Topical Focus</label>
                        <select
                            className="w-full p-3 border border-ksa-nature-200 rounded-none bg-ksa-nature-50 text-ksa-green-900 font-bold text-sm outline-none focus:border-ksa-nature-500 transition-colors"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        >
                            <option value="">All Topics</option>
                            {taxonomy.topics.map(t => (<option key={t.slug} value={t.name}>{t.name}</option>))}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ksa-nature-600 block px-1">Project Stage</label>
                        <select
                            className="w-full p-3 border border-ksa-nature-200 rounded-none bg-ksa-nature-50 text-ksa-green-900 font-bold text-sm outline-none focus:border-ksa-nature-500 transition-colors"
                            value={stage}
                            onChange={(e) => setStage(e.target.value)}
                        >
                            <option value="">All Stages</option>
                            {taxonomy.stages.map(s => (<option key={s.slug} value={s.name}>{s.name}</option>))}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ksa-nature-600 block px-1">Sort By</label>
                        <select
                            className="w-full p-3 border border-ksa-nature-200 rounded-none bg-ksa-nature-50 text-ksa-green-900 font-bold text-sm outline-none focus:border-ksa-nature-500 transition-colors"
                            value={sort}
                            onChange={(e) => setSort(e.target.value as any)}
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="az">A-Z Name</option>
                        </select>
                    </div>
                </div>

                {(framework || topic || stage || search) && (
                    <div className="flex justify-end pt-4 border-t border-ksa-nature-100">
                        <button
                            onClick={clearFilters}
                            className="text-xs font-black uppercase tracking-widest text-red-600 hover:text-red-800 flex items-center transition-colors"
                        >
                            <X className="w-4 h-4 mr-2" /> Reset All Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Results */}
            <div className="mb-4 text-sm text-ksa-green-700">
                Showing {filteredPosts.length} result{filteredPosts.length !== 1 && 's'}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map(post => (
                    <GuideCard key={post.slug} post={post} />
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No guides found matching your criteria.
                </div>
            )}
        </div>
    );
}
