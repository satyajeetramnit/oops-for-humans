'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Briefcase, Home, Key, Car, Cog } from 'lucide-react';

type RelationshipType = 'Association' | 'Aggregation' | 'Composition';

export default function RelationshipGraph() {
    const [activeType, setActiveType] = useState<RelationshipType>('Association');

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg transition-colors duration-200">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2 text-ink">Class Relationships</h3>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b-2 border-gray-200 dark:border-gray-700">
                {(['Association', 'Aggregation', 'Composition'] as RelationshipType[]).map((type) => (
                    <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`px-4 py-2 font-bold border-b-4 transition-colors ${activeType === type
                            ? 'border-[var(--card-border)] dark:border-blue-500 text-ink dark:text-blue-400'
                            : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="min-h-[300px] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    {activeType === 'Association' && (
                        <motion.div
                            key="association"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="text-center max-w-md">
                                <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400">Association ("Uses-A")</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Two independent objects interacting. No ownership.</p>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-blue-500">
                                        <User size={40} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <span className="font-bold mt-2 text-ink">Doctor</span>
                                </div>

                                <div className="flex flex-col items-center text-gray-400">
                                    <span className="text-xs font-mono mb-1">Treats →</span>
                                    <div className="w-32 h-1 bg-gray-300 dark:bg-gray-600 relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 dark:bg-gray-600 rotate-45" />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center border-4 border-green-500">
                                        <User size={40} className="text-green-600 dark:text-green-400" />
                                    </div>
                                    <span className="font-bold mt-2 text-ink">Patient</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 italic bg-gray-50 dark:bg-slate-800/50 dark:bg-gray-800 px-4 py-2 rounded border border-gray-200 dark:border-gray-700">
                                If the Doctor leaves, the Patient still exists (and vice versa).
                            </p>
                        </motion.div>
                    )}

                    {activeType === 'Aggregation' && (
                        <motion.div
                            key="aggregation"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="text-center max-w-md">
                                <h4 className="font-bold text-lg text-yellow-600 dark:text-yellow-400">Aggregation ("Has-A")</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Weak ownership. Child can exist without Parent.</p>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center border-4 border-yellow-500">
                                        <Briefcase size={48} className="text-yellow-700 dark:text-yellow-500" />
                                    </div>
                                    <span className="font-bold mt-2 text-ink">Department</span>
                                </div>

                                <div className="flex flex-col items-center text-gray-400">
                                    <span className="text-xs font-mono mb-1">Contains ◇</span>
                                    <div className="w-32 h-1 bg-gray-300 dark:bg-gray-600 relative">
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-gray-400 dark:border-gray-500 bg-[var(--card-bg)] dark:bg-gray-800 rotate-45" />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-blue-500">
                                        <User size={40} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <span className="font-bold mt-2 text-ink">Teacher</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 italic bg-gray-50 dark:bg-slate-800/50 dark:bg-gray-800 px-4 py-2 rounded border border-gray-200 dark:border-gray-700">
                                If the Department closes, the Teacher still exists (can join another dept).
                            </p>
                        </motion.div>
                    )}

                    {activeType === 'Composition' && (
                        <motion.div
                            key="composition"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="text-center max-w-md">
                                <h4 className="font-bold text-lg text-red-600 dark:text-red-400">Composition ("Part-Of")</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Strong ownership. Child CANNOT exist without Parent.</p>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center border-4 border-red-500">
                                        <Home size={48} className="text-red-700 dark:text-red-500" />
                                    </div>
                                    <span className="font-bold mt-2 text-ink">House</span>
                                </div>

                                <div className="flex flex-col items-center text-gray-400">
                                    <span className="text-xs font-mono mb-1">Owns ◆</span>
                                    <div className="w-32 h-1 bg-gray-300 dark:bg-gray-600 relative">
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-black dark:bg-[var(--card-bg)] rotate-45" />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 bg-gray-100 dark:bg-slate-800 dark:bg-gray-800 rounded-lg flex items-center justify-center border-4 border-gray-500">
                                        <Key size={40} className="text-gray-600 dark:text-gray-400" />
                                    </div>
                                    <span className="font-bold mt-2 text-ink">Room</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 italic bg-gray-50 dark:bg-slate-800/50 dark:bg-gray-800 px-4 py-2 rounded border border-gray-200 dark:border-gray-700">
                                If the House is destroyed, the Room is destroyed too.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
