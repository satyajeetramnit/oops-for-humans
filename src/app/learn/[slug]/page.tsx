import { getMdxContent, getAllSlugs } from '@/lib/mdx';
import { sidebarConfig } from '@/lib/sidebarConfig';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/mdx/MDXComponents';
import { notFound } from 'next/navigation';
import rehypeHighlight from 'rehype-highlight';

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getMdxContent(slug);

    if (!data) {
        return {
            title: 'Page Not Found',
            description: 'The requested object could not be found.'
        };
    }

    return {
        title: data.frontmatter.title,
        description: data.frontmatter.description,
        openGraph: {
            title: data.frontmatter.title,
            description: data.frontmatter.description,
            type: 'article',
            url: `https://oops-for-humans.vercel.app/learn/${slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: data.frontmatter.title,
            description: data.frontmatter.description,
        }
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getMdxContent(slug);

    if (!data) {
        notFound();
    }

    // Find next page logic
    let nextPage = null;
    const allItems = sidebarConfig.flatMap(section => section.items || []);
    const currentIndex = allItems.findIndex(item => item.href === `/learn/${slug}`);

    if (currentIndex !== -1 && currentIndex < allItems.length - 1) {
        nextPage = allItems[currentIndex + 1];
    }

    return (
        <article className="max-w-3xl mx-auto pb-20">
            <div className="mb-8 border-b-2 border-black pb-4">
                <h1 className="text-5xl font-black text-ink mb-2 tracking-tight">{data.frontmatter.title}</h1>
                <p className="text-xl text-pencil font-medium">{data.frontmatter.description}</p>
            </div>

            <div className="prose prose-lg max-w-none">
                <MDXRemote
                    source={data.content}
                    components={MDXComponents}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [rehypeHighlight],
                        },
                    }}
                />
            </div>

            {nextPage && (
                <div className="mt-16 pt-8 border-t-2 border-black dark:border-gray-700">
                    <div className="text-sm font-bold text-pencil uppercase tracking-wider mb-2">Up Next</div>
                    <Link
                        href={nextPage.href || '#'}
                        className="group flex items-center justify-between p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-xl shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 transition-all"
                    >
                        <div>
                            <span className="text-lg font-black text-ink group-hover:text-accent-blue transition-colors">
                                {nextPage.title}
                            </span>
                        </div>
                        <ArrowRight className="text-ink group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            )}
        </article>
    );
}
