'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarConfig } from '../lib/sidebarConfig';
import { BookOpen, Code, Box, Layers, Zap } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import CommandPalette from './CommandPalette';
import StudentIdCard from './StudentIdCard';

const icons: Record<string, any> = {
    "Core Concepts": BookOpen,
    "Four Pillars of OOPs": Layers,
    "Class Relationships & Design": Box,
    "Advanced OOP Topics": Zap,
    "Design Principles & Patterns": Code,
};

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
    const pathname = usePathname();
    const { language, setLanguage } = useLanguage();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <CommandPalette />

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            <aside className={`
                w-[280px] h-screen bg-paper border-r-2 border-black dark:border-gray-700 
                fixed left-0 top-0 overflow-y-auto p-6 flex flex-col z-50 
                transition-all duration-300 ease-in-out
                md:translate-x-0 
                ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
            `}>
                <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="text-2xl font-black text-ink tracking-tighter hover:text-accent-blue transition-colors">
                        OOPs<span className="font-light">4</span>Humans
                    </Link>
                    <div className="flex gap-2">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
                            </button>
                        )}
                    </div>
                </div>

                <div className="mb-6">
                    <label className="text-xs font-bold uppercase tracking-widest text-pencil mb-2 block">
                        I speak...
                    </label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as Language)}
                        className="w-full p-2 rounded border-2 border-black dark:border-gray-600 bg-white dark:bg-slate-900 text-black dark:text-white font-bold text-sm shadow-sketch-sm focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                    >
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="C++">C++</option>
                        <option value="TypeScript">TypeScript</option>
                    </select>
                </div>

                <nav className="space-y-8 flex-1">
                    {sidebarConfig.map((section, index) => {
                        const Icon = icons[section.title] || BookOpen;
                        return (
                            <div key={index}>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pencil mb-3">
                                    <Icon size={14} />
                                    {section.title}
                                </div>
                                <div className="space-y-1">
                                    {section.items?.map((item, itemIndex) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <Link
                                                key={itemIndex}
                                                href={item.href || '#'}
                                                className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 border-2 ${isActive
                                                    ? 'bg-[var(--card-bg)] border-[var(--card-border)] shadow-sketch-sm translate-x-1 text-accent-blue font-bold'
                                                    : 'border-transparent hover:bg-white/50 dark:hover:bg-white/10 hover:border-black/10 dark:hover:border-white/10'
                                                    }`}
                                            >
                                                {item.title}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                <StudentIdCard />
            </aside>
        </>
    );
}
