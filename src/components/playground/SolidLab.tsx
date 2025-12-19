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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">SOLID Lab</h3>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b-2 border-border-base/10">
                {(['SRP', 'OCP', 'LSP'] as Tab[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-bold border-b-4 transition-colors ${activeTab === tab
                            ? 'border-border-base text-ink'
                            : 'border-transparent text-pencil/60 hover:text-pencil'
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
                            <h4 className="font-bold text-lg text-ink">Single Responsibility Principle</h4>
                            <p className="text-sm text-pencil">A class should have only one reason to change.</p>
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
                                        <div className="w-24 h-24 bg-ink rounded-xl flex items-center justify-center relative border-4 border-border-base shadow-xl">
                                            <Bot size={40} className="text-paper" />
                                            <div className="absolute -top-2 -right-2 bg-accent-red text-paper p-1.5 rounded-full border-2 border-border-base shadow-lg"><Utensils size={14} /></div>
                                            <div className="absolute -bottom-2 -left-2 bg-accent-blue text-paper p-1.5 rounded-full border-2 border-border-base shadow-lg"><Sparkles size={14} /></div>
                                        </div>
                                        <span className="font-bold mt-3 text-accent-red uppercase tracking-widest text-[10px]">God Bot</span>
                                        <span className="text-[10px] text-pencil font-medium uppercase tracking-tighter opacity-60">(Cooks & Cleans)</span>
                                    </motion.div>
                                ) : (
                                    <>
                                        <motion.div
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="w-20 h-20 bg-accent-red/10 rounded-2xl flex items-center justify-center border-4 border-accent-red/40 shadow-sm relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-br from-paper/20 to-transparent pointer-events-none" />
                                                <Utensils size={32} className="text-accent-red transition-transform group-hover:scale-110" />
                                            </div>
                                            <span className="font-bold mt-3 text-accent-red uppercase tracking-widest text-[10px]">Chef Bot</span>
                                        </motion.div>
                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="w-20 h-20 bg-accent-blue/10 rounded-2xl flex items-center justify-center border-4 border-accent-blue/40 shadow-sm relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-br from-paper/20 to-transparent pointer-events-none" />
                                                <Sparkles size={32} className="text-accent-blue transition-transform group-hover:scale-110" />
                                            </div>
                                            <span className="font-bold mt-3 text-accent-blue uppercase tracking-widest text-[10px]">Cleaner Bot</span>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={() => setSrpRefactored(!srpRefactored)}
                            className="px-8 py-3 bg-ink text-paper font-bold rounded-xl shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-widest text-xs hover:bg-ink/90"
                        >
                            {srpRefactored ? 'Merge Responsibilities (Bad)' : 'Refactor (Good)'}
                        </button>
                    </div>
                )}

                {/* OCP: Open/Closed Principle */}
                {activeTab === 'OCP' && (
                    <div className="flex flex-col items-center gap-8">
                        <div className="text-center max-w-md">
                            <h4 className="font-bold text-lg text-ink">Open/Closed Principle</h4>
                            <p className="text-sm text-pencil">Open for extension, closed for modification.</p>
                        </div>

                        <div className="relative w-48 h-48 flex items-center justify-center bg-pencil/5 border-2 border-dashed border-border-base/20 rounded-full shadow-inner">
                            {/* Base Robot */}
                            <div className="w-24 h-32 bg-pencil/10 border-4 border-border-base rounded-2xl flex flex-col items-center justify-center z-10 relative shadow-sm">
                                <div className="w-16 h-4 bg-ink mb-3 rounded-full opacity-10" />
                                <Bot size={48} className="text-ink/60" />
                                <span className="text-[10px] font-black mt-3 text-ink uppercase tracking-widest opacity-40">Base Bot</span>
                            </div>

                            {/* Extension Slot */}
                            <AnimatePresence>
                                {ocpEquipped && (
                                    <motion.div
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: -30, opacity: 1 }}
                                        exit={{ x: -100, opacity: 0 }}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 z-0"
                                    >
                                        <div className="w-20 h-28 bg-accent-orange border-4 border-border-base rounded-l-2xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-paper/20 to-transparent pointer-events-none" />
                                            <Rocket size={40} className="text-paper transform -rotate-90 drop-shadow-xl" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={() => setOcpEquipped(!ocpEquipped)}
                            className={`px-8 py-3 font-bold rounded-xl shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-widest text-xs border-2 ${ocpEquipped ? 'bg-accent-red/5 text-accent-red border-accent-red/30' : 'bg-accent-green/5 text-accent-green border-accent-green/30'
                                }`}
                        >
                            {ocpEquipped ? 'Remove Extension' : 'Equip Jetpack (Extend)'}
                        </button>
                        <p className="text-[10px] text-pencil font-medium uppercase tracking-widest opacity-40 italic mt-[-10px]">
                            * Base Bot code remains untouched
                        </p>
                    </div>
                )}

                {/* LSP: Liskov Substitution Principle */}
                {activeTab === 'LSP' && (
                    <div className="flex flex-col items-center gap-8">
                        <div className="text-center max-w-md">
                            <h4 className="font-bold text-lg text-ink">Liskov Substitution Principle</h4>
                            <p className="text-sm text-pencil">Subtypes must be substitutable for their base types.</p>
                        </div>

                        <div className="w-full max-w-lg bg-pencil/5 border-2 border-dashed border-border-base/30 rounded-2xl p-8 flex flex-col items-center min-h-[220px] shadow-inner relative overflow-hidden">
                            <div className="absolute top-2 left-4 text-[10px] font-black text-pencil/20 uppercase tracking-widest">Substitution Test Enviroment</div>
                            <div className="font-mono text-xs bg-ink text-accent-green px-4 py-2 rounded-lg mb-8 border border-paper/10 shadow-lg">
                                function <span className="text-accent-blue">makeBirdFly</span>(Bird b) &#123; b.<span className="text-accent-purple">fly</span>(); &#125;
                            </div>

                            <AnimatePresence mode="wait">
                                {lspBird === 'Real' && (
                                    <motion.div
                                        key="real"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: -40, opacity: 1 }}
                                        exit={{ y: -100, opacity: 0 }}
                                        className="flex flex-col items-center text-accent-green"
                                    >
                                        <Bird size={64} className="drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
                                        <span className="font-black flex items-center gap-2 mt-4 uppercase tracking-widest text-sm"><CheckCircle size={20} /> It Flies!</span>
                                    </motion.div>
                                )}
                                {lspBird === 'Rubber' && (
                                    <motion.div
                                        key="rubber"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 40, rotate: 90, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center text-accent-red"
                                    >
                                        <div className="text-6xl drop-shadow-xl">🦆</div>
                                        <span className="font-black flex items-center gap-2 mt-6 uppercase tracking-widest text-sm"><AlertTriangle size={20} /> LSP Crash!</span>
                                        <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70">Rubber ducks violate substitution</span>
                                    </motion.div>
                                )}
                                {!lspBird && (
                                    <div className="text-pencil/30 italic font-medium uppercase tracking-widest text-xs mt-4">Select a Bird Subtype to test...</div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setLspBird('Real')}
                                className="px-6 py-3 bg-paper border-2 border-accent-green text-accent-green font-black rounded-xl hover:bg-accent-green/10 transition-all uppercase tracking-widest text-xs shadow-sketch-sm active:translate-y-0.5 active:shadow-none"
                            >
                                Test Real Duck
                            </button>
                            <button
                                onClick={() => setLspBird('Rubber')}
                                className="px-6 py-3 bg-paper border-2 border-accent-red text-accent-red font-black rounded-xl hover:bg-accent-red/10 transition-all uppercase tracking-widest text-xs shadow-sketch-sm active:translate-y-0.5 active:shadow-none"
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
