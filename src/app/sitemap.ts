import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
    const slugs = getAllSlugs();
    const baseUrl = 'https://oops4humans.vercel.app';

    const learnRoutes = slugs.map((slug) => ({
        url: `${baseUrl}/learn/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...learnRoutes,
    ];
}
