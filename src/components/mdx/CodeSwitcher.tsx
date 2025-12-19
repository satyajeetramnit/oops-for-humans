'use client';

import React from 'react';
import { useLanguage, Language } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CodeSwitcher({ children }: { children: React.ReactNode }) {
    const { language } = useLanguage();

    // Filter children to find the one matching the current language
    const content = React.Children.toArray(children).find((child: any) => {
        return child.props && child.props.lang === language;
    });

    // Fallback: If no specific language content, try to find a default or show nothing
    // For now, we'll just show what we found.

    return (
        <div className="my-6 border-2 border-border-base rounded-lg overflow-hidden shadow-sketch relative">
            <div className="bg-paper border-b-2 border-border-base px-4 py-2 flex justify-between items-center">
                <div className="font-mono text-sm font-bold text-ink">
                    {language} Example
                </div>
                <div className="text-xs text-pencil">
                    Switch language in Navbar
                </div>
            </div>
            <div className="p-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={language}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {content || (
                            <div className="p-4 text-gray-400 italic text-sm">
                                No {language} example available for this section.
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
