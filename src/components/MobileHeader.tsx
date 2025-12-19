'use client';

import React from 'react';
import { Menu, Search } from 'lucide-react';
import Link from 'next/link';

interface MobileHeaderProps {
    onMenuClick: () => void;
}

export default function MobileHeader({ onMenuClick }: MobileHeaderProps) {
    return (
        <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-paper border-b-2 border-border-base z-40 flex items-center justify-between px-4 transition-colors duration-300">
            <button
                onClick={onMenuClick}
                className="p-2 text-ink hover:bg-black/5 dark:hover:bg-white/10 rounded-md transition-colors"
                aria-label="Open Menu"
            >
                <Menu size={24} />
            </button>

            <Link href="/" className="text-xl font-black text-ink tracking-tighter">
                OOPs<span className="font-light">4</span>Humans
            </Link>

            <button
                onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                className="p-2 text-ink hover:bg-black/5 dark:hover:bg-white/10 rounded-md transition-colors"
                aria-label="Search"
            >
                <Search size={24} />
            </button>
        </header>
    );
}
