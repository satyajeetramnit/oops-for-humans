'use client';

import React from 'react';
import { Search } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-4 right-4 z-50">
            <button
                onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                className="p-3 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-200 group"
                aria-label="Search"
            >
                <Search size={20} className="text-gray-600 dark:text-gray-400 group-hover:text-accent-blue transition-colors" />
            </button>
        </header>
    );
}
