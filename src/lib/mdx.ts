import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/guides');

export type PostMeta = {
    title: string;
    description: string;
    publishedAt: string;
    updatedAt: string;
    tags: string[];
    framework?: string;
    topic?: string;
    stage?: string;
    difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
    readingTime?: string;
};

export type Post = {
    slug: string;
    meta: PostMeta;
    content: string;
};

export function getPostSlugs() {
    if (!fs.existsSync(contentDirectory)) return [];
    return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        meta: {
            title: data.title || 'Untitled',
            description: data.description || '',
            publishedAt: data.publishedAt ? new Date(data.publishedAt).toISOString() : new Date().toISOString(),
            updatedAt: data.updatedAt ? new Date(data.updatedAt).toISOString() : new Date().toISOString(),
            tags: data.tags || [],
            framework: data.framework,
            topic: data.topic,
            stage: data.stage,
            difficulty: data.difficulty || 'Intermediate',
            readingTime: data.readingTime || '5 min read',
        },
        content,
    };
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .sort((post1, post2) => (post1.meta.updatedAt > post2.meta.updatedAt ? -1 : 1));
    return posts;
}

export function getAllTags(): string[] {
    const posts = getAllPosts();
    const tags = new Set<string>();
    posts.forEach(post => post.meta.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
}
