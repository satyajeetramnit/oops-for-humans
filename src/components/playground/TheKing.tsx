'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, UserPlus, AlertTriangle } from 'lucide-react';

export default function TheKing() {
    const [kingInstance, setKingInstance] = useState<{ id: number; name: string } | null>(null);
    const [attempts, setAttempts] = useState<string[]>([]);

    const getInstance = () => {
        if (!kingInstance) {
            // Create the first and only instance
            const newKing = { id: Date.now(), name: 'King Arthur' };
            setKingInstance(newKing);
            setAttempts(prev => [...prev, `Created new instance: ${newKing.name} (ID: ${newKing.id})`]);
        } else {
            // Return existing instance
            setAttempts(prev => [...prev, `Returned existing instance: ${kingInstance.name} (ID: ${kingInstance.id})`]);
        }
    };

    const reset = () => {
        setKingInstance(null);
        setAttempts([]);
    };

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">The King (Singleton Pattern)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="bg-accent-yellow/5 p-5 rounded-2xl border-2 border-accent-yellow/20 shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-accent-yellow/5 -mr-8 -mt-8 rounded-full blur-xl" />
                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-accent-yellow mb-3">Laws of the Land</h4>
                        <p className="text-xs italic text-ink/80 leading-relaxed">
                            "There can be only ONE King in the Kingdom instance!"
                        </p>
                    </div>

                    <button
                        onClick={getInstance}
                        className="w-full py-4 px-4 bg-ink text-paper font-black rounded-xl shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs hover:bg-ink/90"
                    >
                        <UserPlus size={20} />
                        Get King Instance
                    </button>

                    <button
                        onClick={reset}
                        className="w-full py-3 px-4 bg-paper border-2 border-border-base/40 text-pencil font-black rounded-xl hover:bg-pencil/5 transition-all text-[10px] uppercase tracking-[0.2em]"
                    >
                        Abdicate Throne
                    </button>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 flex flex-col gap-6">
                    {/* The Throne Room */}
                    <div className="bg-pencil/5 border-2 border-dashed border-border-base/30 rounded-2xl min-h-[250px] flex items-center justify-center relative overflow-hidden shadow-inner p-8">
                        <div className="absolute top-4 left-6 text-[10px] font-black text-pencil/20 uppercase tracking-[0.3em]">The Royal Court</div>

                        <AnimatePresence>
                            {kingInstance ? (
                                <motion.div
                                    initial={{ scale: 0, y: 50, rotate: -5 }}
                                    animate={{ scale: 1, y: 0, rotate: 0 }}
                                    exit={{ scale: 0, opacity: 0, rotate: 5 }}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="w-28 h-28 bg-accent-yellow/20 rounded-full border-4 border-accent-yellow/40 flex items-center justify-center shadow-2xl mb-4 relative transition-transform group-hover:scale-110">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-yellow/20 to-transparent rounded-full animate-pulse" />
                                        <Crown size={56} className="text-accent-yellow drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                                    </div>
                                    <span className="font-black text-xl text-ink uppercase tracking-widest">{kingInstance.name}</span>
                                    <span className="font-mono text-[10px] text-pencil font-bold mt-2 opacity-50 px-3 py-1 bg-pencil/10 rounded-full">UUID: {kingInstance.id}</span>
                                </motion.div>
                            ) : (
                                <div className="text-pencil opacity-10 font-black text-3xl uppercase tracking-[0.4em] transform -rotate-12">Empty Throne</div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Log */}
                    <div className="bg-ink text-accent-green p-5 rounded-2xl font-mono text-xs h-40 overflow-y-auto border-2 border-border-base shadow-lg shadow-black/20">
                        <div className="border-b border-paper/10 pb-2 mb-3 text-paper/30 uppercase tracking-widest text-[10px] font-black">Kingdom Access Log</div>
                        {attempts.length === 0 && <span className="opacity-30 italic font-medium">// Waiting for constructor call...</span>}
                        {attempts.map((log, i) => (
                            <div key={i} className="mb-2 border-b border-paper/5 pb-2 last:border-0 flex gap-3 items-start">
                                <span className="text-accent-blue font-black opacity-40">[{attempts.length - i}]</span>
                                <span className="opacity-90">{log}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
