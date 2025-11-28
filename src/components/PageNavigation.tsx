'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarConfig, SidebarItem } from '../lib/sidebarConfig';

export default function PageNavigation() {
    const pathname = usePathname();

    // Flatten the config to find prev/next
    const flatItems: { title: string; href: string }[] = [];

    const traverse = (items: SidebarItem[]) => {
        for (const item of items) {
            if (item.href) {
                flatItems.push({ title: item.title, href: item.href });
            }
            if (item.items) {
                traverse(item.items);
            }
        }
    };

    traverse(sidebarConfig);

    const currentIndex = flatItems.findIndex(item => item.href === pathname);

    if (currentIndex === -1) return null;

    const prevItem = currentIndex > 0 ? flatItems[currentIndex - 1] : null;
    const nextItem = currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)'
        }}>
            {prevItem ? (
                <Link href={prevItem.href} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textDecoration: 'none',
                    color: '#94a3b8'
                }}>
                    <span style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>← Previous</span>
                    <span style={{ color: 'var(--accent)', fontWeight: '500' }}>{prevItem.title}</span>
                </Link>
            ) : <div />}

            {nextItem ? (
                <Link href={nextItem.href} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    textDecoration: 'none',
                    color: '#94a3b8'
                }}>
                    <span style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>Next →</span>
                    <span style={{ color: 'var(--accent)', fontWeight: '500' }}>{nextItem.title}</span>
                </Link>
            ) : <div />}
        </div>
    );
}
