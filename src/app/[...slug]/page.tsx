import { getContent } from '@/lib/content';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import PageNavigation from '@/components/PageNavigation';
import SidebarAd from '@/components/ads/SidebarAd';
import BottomBannerAd from '@/components/ads/BottomBannerAd';

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
        <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 relative items-start">
                <div className="flex-1 w-full min-w-0">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <MarkdownRenderer content={content} />
                        <BottomBannerAd />
                        <PageNavigation />
                    </div>
                </div>
                <SidebarAd />
            </div>
        </div>
    );
}
