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
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">The King (Singleton Pattern)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-2 border-yellow-200">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-yellow-900 mb-2">Rule of the Kingdom</h4>
                        <p className="text-sm italic text-yellow-800">
                            "There can be only ONE King!"
                        </p>
                    </div>

                    <button
                        onClick={getInstance}
                        className="w-full py-3 px-4 bg-black text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2"
                    >
                        <UserPlus size={20} />
                        Call King.getInstance()
                    </button>

                    <button
                        onClick={reset}
                        className="w-full py-2 px-4 bg-[var(--card-bg)] border-2 border-gray-300 text-gray-500 font-bold rounded hover:bg-[var(--card-hover)] dark:bg-slate-800/50 transition-colors text-sm"
                    >
                        Reset (Kill the King)
                    </button>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 flex flex-col gap-4">
                    {/* The Throne Room */}
                    <div className="bg-paper border-2 border-dashed border-gray-300 rounded min-h-[200px] flex items-center justify-center relative overflow-hidden">
                        <AnimatePresence>
                            {kingInstance ? (
                                <motion.div
                                    initial={{ scale: 0, y: 50 }}
                                    animate={{ scale: 1, y: 0 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-24 h-24 bg-yellow-100 rounded-full border-4 border-yellow-500 flex items-center justify-center shadow-lg mb-2">
                                        <Crown size={48} className="text-yellow-600" />
                                    </div>
                                    <span className="font-bold text-lg">{kingInstance.name}</span>
                                    <span className="font-mono text-xs text-gray-500">ID: {kingInstance.id}</span>
                                </motion.div>
                            ) : (
                                <div className="text-gray-300 font-bold text-2xl uppercase tracking-widest">Empty Throne</div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Log */}
                    <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs h-40 overflow-y-auto border-2 border-[var(--card-border)]">
                        {attempts.length === 0 && <span className="opacity-50">// System Log waiting...</span>}
                        {attempts.map((log, i) => (
                            <div key={i} className="mb-1 border-b border-gray-800 pb-1 last:border-0">
                                <span className="text-gray-500">[{i + 1}]</span> {log}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
