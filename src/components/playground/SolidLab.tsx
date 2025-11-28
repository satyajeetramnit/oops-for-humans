'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Utensils, Sparkles, Rocket, Bird, AlertTriangle, CheckCircle } from 'lucide-react';

type Tab = 'SRP' | 'OCP' | 'LSP';

export default function SolidLab() {
    const [activeTab, setActiveTab] = useState<Tab>('SRP');

    // SRP State
    const [srpRefactored, setSrpRefactored] = useState(false);

    // OCP State
    const [ocpEquipped, setOcpEquipped] = useState(false);

    // LSP State
    const [lspBird, setLspBird] = useState<'Real' | 'Rubber' | null>(null);

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">SOLID Lab</h3>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b-2 border-gray-200">
                {(['SRP', 'OCP', 'LSP'] as Tab[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-bold border-b-4 transition-colors ${activeTab === tab
                                ? 'border-[var(--card-border)] text-ink'
                                : 'border-transparent text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="min-h-[300px]">
                {/* SRP: Single Responsibility Principle */}
                {activeTab === 'SRP' && (
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-center max-w-md">
                            <h4 className="font-bold text-lg">Single Responsibility Principle</h4>
                            <p className="text-sm text-gray-600">A class should have only one reason to change.</p>
                        </div>

                        <div className="flex gap-8 items-end h-40">
                            <AnimatePresence mode="wait">
                                {!srpRefactored ? (
                                    <motion.div
                                        key="god-bot"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="w-24 h-24 bg-gray-800 rounded-xl flex items-center justify-center relative border-4 border-[var(--card-border)]">
                                            <Bot size={40} className="text-white" />
                                            <div className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full border-2 border-[var(--card-border)]"><Utensils size={12} /></div>
                                            <div className="absolute -bottom-2 -left-2 bg-blue-500 text-white p-1 rounded-full border-2 border-[var(--card-border)]"><Sparkles size={12} /></div>
                                        </div>
                                        <span className="font-bold mt-2 text-red-600">God Bot</span>
                                        <span className="text-xs text-gray-500">(Cooks & Cleans)</span>
                                    </motion.div>
                                ) : (
                                    <>
                                        <motion.div
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="w-20 h-20 bg-red-100 rounded-xl flex items-center justify-center border-4 border-red-500">
                                                <Utensils size={32} className="text-red-600" />
                                            </div>
                                            <span className="font-bold mt-2 text-red-600">Chef Bot</span>
                                        </motion.div>
                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center border-4 border-blue-500">
                                                <Sparkles size={32} className="text-blue-600" />
                                            </div>
                                            <span className="font-bold mt-2 text-blue-600">Cleaner Bot</span>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={() => setSrpRefactored(!srpRefactored)}
                            className="px-6 py-2 bg-black text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all"
                        >
                            {srpRefactored ? 'Merge Responsibilities (Bad)' : 'Refactor (Good)'}
                        </button>
                    </div>
                )}

                {/* OCP: Open/Closed Principle */}
                {activeTab === 'OCP' && (
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-center max-w-md">
                            <h4 className="font-bold text-lg">Open/Closed Principle</h4>
                            <p className="text-sm text-gray-600">Open for extension, closed for modification.</p>
                        </div>

                        <div className="relative w-40 h-40 flex items-center justify-center">
                            {/* Base Robot */}
                            <div className="w-24 h-32 bg-gray-200 border-4 border-[var(--card-border)] rounded-lg flex flex-col items-center justify-center z-10 relative">
                                <div className="w-16 h-4 bg-black mb-2 rounded-full opacity-20" />
                                <Bot size={48} className="text-gray-600" />
                                <span className="text-xs font-bold mt-2">Base Bot</span>
                            </div>

                            {/* Extension Slot */}
                            <AnimatePresence>
                                {ocpEquipped && (
                                    <motion.div
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: -20, opacity: 1 }}
                                        exit={{ x: -50, opacity: 0 }}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 z-0"
                                    >
                                        <div className="w-16 h-24 bg-orange-500 border-4 border-[var(--card-border)] rounded-l-lg flex items-center justify-center shadow-lg">
                                            <Rocket size={32} className="text-white transform -rotate-90" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={() => setOcpEquipped(!ocpEquipped)}
                            className={`px-6 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all ${ocpEquipped ? 'bg-red-100 text-red-800 border-2 border-red-500' : 'bg-green-100 text-green-800 border-2 border-green-500'
                                }`}
                        >
                            {ocpEquipped ? 'Remove Extension' : 'Equip Jetpack (Extend)'}
                        </button>
                        <p className="text-xs text-gray-400 italic">
                            Note: We added the Jetpack without opening the Base Bot's code!
                        </p>
                    </div>
                )}

                {/* LSP: Liskov Substitution Principle */}
                {activeTab === 'LSP' && (
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-center max-w-md">
                            <h4 className="font-bold text-lg">Liskov Substitution Principle</h4>
                            <p className="text-sm text-gray-600">Subtypes must be substitutable for their base types.</p>
                        </div>

                        <div className="w-full max-w-md bg-gray-50 dark:bg-slate-800/50 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center min-h-[160px]">
                            <div className="font-mono text-xs bg-gray-200 px-2 py-1 rounded mb-4">
                                function makeBirdFly(Bird b) &#123; b.fly(); &#125;
                            </div>

                            <AnimatePresence mode="wait">
                                {lspBird === 'Real' && (
                                    <motion.div
                                        key="real"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: -20, opacity: 1 }}
                                        exit={{ y: -50, opacity: 0 }}
                                        className="flex flex-col items-center text-green-600"
                                    >
                                        <Bird size={48} />
                                        <span className="font-bold flex items-center gap-2"><CheckCircle size={16} /> It Flies!</span>
                                    </motion.div>
                                )}
                                {lspBird === 'Rubber' && (
                                    <motion.div
                                        key="rubber"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 20, rotate: 90, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center text-red-600"
                                    >
                                        <div className="text-4xl">🦆</div>
                                        <span className="font-bold flex items-center gap-2 mt-2"><AlertTriangle size={16} /> Crash!</span>
                                        <span className="text-xs">Rubber ducks can't fly!</span>
                                    </motion.div>
                                )}
                                {!lspBird && (
                                    <div className="text-gray-400 italic">Select a Bird to test...</div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setLspBird('Real')}
                                className="px-4 py-2 bg-[var(--card-bg)] border-2 border-green-500 text-green-700 font-bold rounded hover:bg-green-50 dark:hover:!bg-green-900/40 dark:bg-green-900/20"
                            >
                                Test Real Duck
                            </button>
                            <button
                                onClick={() => setLspBird('Rubber')}
                                className="px-4 py-2 bg-[var(--card-bg)] border-2 border-red-500 text-red-700 font-bold rounded hover:bg-red-50 dark:hover:!bg-red-900/40 dark:bg-red-900/20"
                            >
                                Test Rubber Duck
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
