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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Dependency Injection (The Injector)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Injector Controls */}
                <div className="w-full md:w-1/3 space-y-4">
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-pencil">1. Inject Dependency</h4>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => injectEngine('Electric')}
                            className={`px-4 py-3 rounded-xl border-2 font-bold text-left flex items-center gap-3 transition-all ${engine === 'Electric' ? 'bg-accent-blue/10 border-accent-blue text-accent-blue shadow-sketch-sm' : 'bg-paper border-border-base/30 text-pencil hover:bg-pencil/5'
                                }`}
                        >
                            <Battery size={20} />
                            Electric Engine
                        </button>
                        <button
                            onClick={() => injectEngine('Gas')}
                            className={`px-4 py-3 rounded-xl border-2 font-bold text-left flex items-center gap-3 transition-all ${engine === 'Gas' ? 'bg-accent-orange/10 border-accent-orange text-accent-orange shadow-sketch-sm' : 'bg-paper border-border-base/30 text-pencil hover:bg-pencil/5'
                                }`}
                        >
                            <Fuel size={20} />
                            Gas Engine
                        </button>
                        <button
                            onClick={() => injectEngine('Hybrid')}
                            className={`px-4 py-3 rounded-xl border-2 font-bold text-left flex items-center gap-3 transition-all ${engine === 'Hybrid' ? 'bg-accent-green/10 border-accent-green text-accent-green shadow-sketch-sm' : 'bg-paper border-border-base/30 text-pencil hover:bg-pencil/5'
                                }`}
                        >
                            <Zap size={20} />
                            Hybrid Engine
                        </button>
                    </div>
                </div>

                {/* Car Visualization */}
                <div className="w-full md:w-2/3 flex flex-col items-center justify-center bg-pencil/5 border-2 border-border-base rounded-2xl p-8 relative overflow-hidden shadow-inner">
                    <div className="relative z-10">
                        {/* Car Body */}
                        <div className="w-64 h-32 bg-ink rounded-3xl relative flex items-center justify-center shadow-2xl border-4 border-border-base/20">
                            <div className="absolute top-0 left-8 w-40 h-16 bg-ink -mt-10 rounded-t-3xl border-4 border-b-0 border-border-base/20" />

                            {/* Engine Slot */}
                            <div className="w-24 h-24 bg-paper/5 rounded-xl border-2 border-dashed border-paper/20 flex items-center justify-center overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {engine ? (
                                        <motion.div
                                            key={engine}
                                            initial={{ y: -50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 50, opacity: 0 }}
                                            className="flex flex-col items-center"
                                        >
                                            {engine === 'Electric' && <Battery size={40} className="text-accent-blue" />}
                                            {engine === 'Gas' && <Fuel size={40} className="text-accent-orange" />}
                                            {engine === 'Hybrid' && <Zap size={40} className="text-accent-green" />}
                                            <span className="text-[10px] text-paper font-bold mt-2 uppercase tracking-widest">{engine}</span>
                                        </motion.div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-1 opacity-20">
                                            <Settings size={24} className="text-paper animate-spin-slow" />
                                            <span className="text-[8px] text-paper font-bold uppercase tracking-tighter">Empty Slot</span>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Wheels */}
                            <motion.div
                                animate={isDriving ? { rotate: 360 } : { rotate: 0 }}
                                transition={isDriving ? { repeat: Infinity, duration: 0.5, ease: "linear" } : {}}
                                className="absolute -bottom-6 left-8 w-16 h-16 bg-ink rounded-full border-4 border-border-base/30 flex items-center justify-center shadow-lg"
                            >
                                <Settings size={30} className="text-pencil opacity-40" />
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-paper/10 animate-spin-slow" />
                            </motion.div>
                            <motion.div
                                animate={isDriving ? { rotate: 360 } : { rotate: 0 }}
                                transition={isDriving ? { repeat: Infinity, duration: 0.5, ease: "linear" } : {}}
                                className="absolute -bottom-6 right-8 w-16 h-16 bg-ink rounded-full border-4 border-border-base/30 flex items-center justify-center shadow-lg"
                            >
                                <Settings size={30} className="text-pencil opacity-40" />
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-paper/10 animate-spin-slow" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Road */}
                    <div className="absolute bottom-4 left-4 right-4 h-1 bg-border-base/10 rounded-full overflow-hidden">
                        {isDriving && (
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: "-100%" }}
                                transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                                className="flex gap-20"
                            >
                                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="w-12 h-1 bg-accent-blue/40 rounded-full" />)}
                            </motion.div>
                        )}
                    </div>

                    <button
                        onClick={drive}
                        disabled={!engine || isDriving}
                        className="mt-16 px-10 py-3 bg-accent-red text-paper font-bold rounded-full shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed z-20 transition-all uppercase tracking-widest text-xs hover:bg-accent-red/90"
                    >
                        {isDriving ? 'Engine Roaring...' : 'Ignition'}
                    </button>
                </div>
            </div>
        </div>
    );
}
