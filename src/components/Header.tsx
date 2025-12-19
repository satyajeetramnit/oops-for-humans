'use client';

import React from 'react';
import { Search } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-4 right-4 z-50">
            <button
                onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                className="p-3 rounded-full bg-paper/50 backdrop-blur-md border border-border-base shadow-sm hover:bg-paper/80 transition-all duration-200 group"
                aria-label="Search"
            >
                <Search size={20} className="text-pencil group-hover:text-accent-blue transition-colors" />
            </button>
        </header>
    );
}
