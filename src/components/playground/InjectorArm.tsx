'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Zap, Battery, Fuel } from 'lucide-react';

type EngineType = 'Electric' | 'Gas' | 'Hybrid';

export default function InjectorArm() {
    const [engine, setEngine] = useState<EngineType | null>(null);
    const [isDriving, setIsDriving] = useState(false);

    const injectEngine = (type: EngineType) => {
        setIsDriving(false);
        setEngine(type);
    };

    const drive = () => {
        if (!engine) return;
        setIsDriving(true);
        setTimeout(() => setIsDriving(false), 2000);
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Dependency Injection (The Injector)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Injector Controls */}
                <div className="w-full md:w-1/3 space-y-4">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">1. Inject Dependency</h4>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => injectEngine('Electric')}
                            className={`px-4 py-3 rounded border-2 font-bold text-left flex items-center gap-3 transition-all ${engine === 'Electric' ? 'bg-blue-100 border-blue-500' : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                }`}
                        >
                            <Battery size={20} className="text-blue-600" />
                            Electric Engine
                        </button>
                        <button
                            onClick={() => injectEngine('Gas')}
                            className={`px-4 py-3 rounded border-2 font-bold text-left flex items-center gap-3 transition-all ${engine === 'Gas' ? 'bg-orange-100 border-orange-500' : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                }`}
                        >
                            <Fuel size={20} className="text-orange-600" />
                            Gas Engine
                        </button>
                        <button
                            onClick={() => injectEngine('Hybrid')}
                            className={`px-4 py-3 rounded border-2 font-bold text-left flex items-center gap-3 transition-all ${engine === 'Hybrid' ? 'bg-green-100 border-green-500' : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                }`}
                        >
                            <Zap size={20} className="text-green-600" />
                            Hybrid Engine
                        </button>
                    </div>
                </div>

                {/* Car Visualization */}
                <div className="w-full md:w-2/3 flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-800 border-2 border-[var(--card-border)] rounded-xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                        {/* Car Body */}
                        <div className="w-64 h-32 bg-black rounded-3xl relative flex items-center justify-center">
                            <div className="absolute top-0 left-8 w-40 h-16 bg-black -mt-10 rounded-t-3xl border-4 border-b-0 border-gray-800" />

                            {/* Engine Slot */}
                            <div className="w-24 h-24 bg-gray-800 rounded-lg border-2 border-dashed border-gray-500 flex items-center justify-center overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {engine ? (
                                        <motion.div
                                            key={engine}
                                            initial={{ y: -50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 50, opacity: 0 }}
                                            className="flex flex-col items-center"
                                        >
                                            {engine === 'Electric' && <Battery size={40} className="text-blue-400" />}
                                            {engine === 'Gas' && <Fuel size={40} className="text-orange-400" />}
                                            {engine === 'Hybrid' && <Zap size={40} className="text-green-400" />}
                                            <span className="text-[10px] text-white font-bold mt-1">{engine}</span>
                                        </motion.div>
                                    ) : (
                                        <span className="text-xs text-gray-500 text-center px-2">No Engine</span>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Wheels */}
                            <motion.div
                                animate={isDriving ? { rotate: 360 } : { rotate: 0 }}
                                transition={isDriving ? { repeat: Infinity, duration: 0.5, ease: "linear" } : {}}
                                className="absolute -bottom-6 left-8 w-16 h-16 bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center"
                            >
                                <Settings size={30} className="text-gray-500" />
                            </motion.div>
                            <motion.div
                                animate={isDriving ? { rotate: 360 } : { rotate: 0 }}
                                transition={isDriving ? { repeat: Infinity, duration: 0.5, ease: "linear" } : {}}
                                className="absolute -bottom-6 right-8 w-16 h-16 bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center"
                            >
                                <Settings size={30} className="text-gray-500" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Road */}
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-300">
                        {isDriving && (
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: "-100%" }}
                                transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                                className="flex gap-20"
                            >
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-10 h-2 bg-[var(--card-bg)]/50 mt-1" />)}
                            </motion.div>
                        )}
                    </div>

                    <button
                        onClick={drive}
                        disabled={!engine || isDriving}
                        className="mt-12 px-8 py-2 bg-red-600 text-white font-bold rounded-full shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed z-20"
                    >
                        {isDriving ? 'Vroom...' : 'Start Car'}
                    </button>
                </div>
            </div>
        </div>
    );
}
