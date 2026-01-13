import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();
    const baseUrl = 'https://sustainabilityhighway.sa';

    const guides = posts.map(post => ({
        url: `${baseUrl}/guides/${post.slug}`,
        lastModified: new Date(post.meta.updatedAt),
    }));

    const routes = ['', '/library', '/frameworks', '/topics', '/stages', '/glossary', '/about', '/contact'].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));

    return [...routes, ...guides];
}
