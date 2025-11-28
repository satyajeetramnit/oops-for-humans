import { getMdxContent, getAllSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/mdx/MDXComponents';
import { notFound } from 'next/navigation';
import rehypeHighlight from 'rehype-highlight';

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getMdxContent(slug);

    if (!data) {
        notFound();
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
        </article>
    );
}
