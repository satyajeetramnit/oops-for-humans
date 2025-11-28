'use client';

import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { sidebarConfig } from '../lib/sidebarConfig';
import { Search, BookOpen, ArrowRight } from 'lucide-react';

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/50 flex items-start justify-center pt-[20vh] p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
        >
            <div
                className="w-full max-w-lg !bg-white dark:!bg-gray-900 text-black dark:text-white rounded-xl shadow-2xl border-2 border-black dark:border-gray-700 overflow-hidden animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <Command className="w-full">
                    <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-4">
                        <Search className="w-5 h-5 text-gray-500 mr-2" />
                        <Command.Input
                            placeholder="Search lessons..."
                            className="w-full h-14 bg-transparent outline-none text-lg text-ink placeholder:text-gray-400"
                            autoFocus
                        />
                    </div>

                    <Command.List className="max-h-[60vh] overflow-y-auto p-2">
                        <Command.Empty className="p-4 text-center text-gray-500">No results found.</Command.Empty>

                        {sidebarConfig.map((section) => (
                            <Command.Group key={section.title} heading={section.title} className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2 py-2">
                                {section.items?.map((item) => (
                                    <Command.Item
                                        key={item.href}
                                        onSelect={() => runCommand(() => router.push(item.href || '#'))}
                                        className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-medium text-ink cursor-pointer aria-selected:bg-blue-50 dark:aria-selected:bg-blue-900/30 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors"
                                    >
                                        <BookOpen size={16} className="text-gray-400" />
                                        <span>{item.title}</span>
                                        <ArrowRight size={14} className="ml-auto opacity-0 aria-selected:opacity-100" />
                                    </Command.Item>
                                ))}
                            </Command.Group>
                        ))}
                    </Command.List>
                </Command>
            </div>
        </div>
    );
}
