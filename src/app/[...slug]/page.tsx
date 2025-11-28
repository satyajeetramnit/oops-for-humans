import { getContent } from '@/lib/content';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import PageNavigation from '@/components/PageNavigation';

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const content = await getContent(slug);

    if (!content) {
        return (
            <div>
                <h1>404 - Topic Not Found</h1>
                <p>The requested topic could not be found in the documentation.</p>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <MarkdownRenderer content={content} />
            <PageNavigation />
        </div>
    );
}
