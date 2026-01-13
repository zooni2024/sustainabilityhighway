import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from '@/lib/mdx';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function GuideCard({ post }: { post: Post }) {
    return (
        <Link
            href={`/guides/${post.slug}`}
            className="group block bg-white border border-ksa-nature-200 rounded-none p-8 hover:shadow-[0_20px_50px_rgba(76,175,80,0.1)] hover:border-ksa-nature-500 transition-all duration-500 relative top-0 hover:-top-2"
        >
            <div className="flex flex-col h-full">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ksa-nature-700 mb-4">
                    {post.meta.framework && <span className="bg-ksa-nature-100 px-3 py-1 text-ksa-nature-800">{post.meta.framework}</span>}
                    {post.meta.difficulty && <span className="text-ksa-nature-600/60">{post.meta.difficulty}</span>}
                </div>

                <h3 className="text-2xl font-black text-ksa-green-900 mb-3 group-hover:text-ksa-nature-600 transition-colors leading-tight">
                    {post.meta.title}
                </h3>

                <p className="text-ksa-green-700 text-base mb-6 line-clamp-2 flex-grow leading-relaxed font-light">
                    {post.meta.description}
                </p>

                <div className="flex items-center justify-between text-xs text-ksa-nature-700/60 pt-6 border-t border-ksa-nature-100 mt-auto">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                            <Calendar className="w-3.5 h-3.5 mr-1.5 text-ksa-nature-500" />
                            {format(new Date(post.meta.updatedAt), 'MMM d, yyyy')}
                        </span>
                        <span className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1.5 text-ksa-nature-500" />
                            {post.meta.readingTime}
                        </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-ksa-nature-500 group-hover:translate-x-2 transition-transform duration-500" />
                </div>
            </div>
        </Link>
    );
}
