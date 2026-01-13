import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from '@/lib/mdx';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function GuideCard({ post }: { post: Post }) {
    return (
        <Link
            href={`/guides/${post.slug}`}
            className="group block bg-white border border-ksa-sand-300 rounded-none p-8 hover:shadow-xl hover:border-ksa-gold-500 transition-all duration-300 relative top-0 hover:-top-1"
        >
            <div className="flex flex-col h-full">
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-ksa-gold-600 mb-4">
                    {post.meta.framework && <span className="bg-ksa-sand-200 px-2 py-1">{post.meta.framework}</span>}
                    {post.meta.difficulty && <span className="text-ksa-green-700/60">{post.meta.difficulty}</span>}
                </div>

                <h3 className="text-xl font-bold text-ksa-green-900 mb-3 group-hover:text-ksa-gold-600 transition-colors">
                    {post.meta.title}
                </h3>

                <p className="text-ksa-green-700 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed">
                    {post.meta.description}
                </p>

                <div className="flex items-center justify-between text-xs text-ksa-green-700/50 pt-6 border-t border-ksa-sand-200 mt-auto">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {format(new Date(post.meta.updatedAt), 'MMM d, yyyy')}
                        </span>
                        <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.meta.readingTime}
                        </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ksa-gold-500 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
