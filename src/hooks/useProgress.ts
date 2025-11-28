'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useProgress() {
    const pathname = usePathname();
    const [visitedPages, setVisitedPages] = useState<string[]>([]);
    const [xp, setXp] = useState(0);

    useEffect(() => {
        const stored = localStorage.getItem('oops_visited_pages');
        if (stored) {
            const pages = JSON.parse(stored);
            setVisitedPages(pages);
            setXp(pages.length * 10);
        }
    }, []);

    useEffect(() => {
        if (pathname && !visitedPages.includes(pathname) && pathname.startsWith('/learn/')) {
            const newPages = [...visitedPages, pathname];
            setVisitedPages(newPages);
            setXp(newPages.length * 10);
            localStorage.setItem('oops_visited_pages', JSON.stringify(newPages));
        }
    }, [pathname, visitedPages]);

    return { xp, level: Math.floor(xp / 50) + 1, progress: (xp % 50) / 50 * 100 };
}
