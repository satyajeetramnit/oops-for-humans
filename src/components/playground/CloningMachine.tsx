'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, AlertTriangle, CheckCircle } from 'lucide-react';

type Sheep = {
    id: number;
    name: string;
    woolColor: string;
    dna: { code: string }; // Nested object to demonstrate reference copy vs deep copy
};

export default function CloningMachine() {
    const [original, setOriginal] = useState<Sheep>({
        id: 1,
        name: 'Dolly',
        woolColor: 'White',
        dna: { code: 'ATCG' },
    });

    const [clone, setClone] = useState<Sheep | null>(null);
    const [mode, setMode] = useState<'Shallow' | 'Deep'>('Shallow');

    const createClone = () => {
        if (mode === 'Shallow') {
            // Shallow Copy: Copy primitives, share references
            const newSheep = { ...original, id: 2, name: 'Dolly Clone' };
            // In a real shallow copy, newSheep.dna would refer to original.dna
            // We simulate this behavior in the UI
            setClone(newSheep);
        } else {
            // Deep Copy: Copy everything recursively
            const newSheep = JSON.parse(JSON.stringify(original));
            newSheep.id = 2;
            newSheep.name = 'Dolly Clone';
            setClone(newSheep);
        }
    };

    const mutateDNA = () => {
        // Mutate original DNA
        const newCode = original.dna.code === 'ATCG' ? 'MUTATED' : 'ATCG';
        setOriginal({ ...original, dna: { code: newCode } });

        // If Shallow Copy, clone's DNA should also "change" (visually indicated)
        if (mode === 'Shallow' && clone) {
            setClone(prev => prev ? { ...prev, dna: { code: newCode } } : null);
        }
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Object Cloning (Shallow vs Deep)</h3>

            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => { setMode('Shallow'); setClone(null); }}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${mode === 'Shallow' ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-500' : 'bg-[var(--card-bg)] border-2 border-gray-300'
                        }`}
                >
                    <Copy size={18} />
                    Shallow Copy
                </button>
                <button
                    onClick={() => { setMode('Deep'); setClone(null); }}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${mode === 'Deep' ? 'bg-blue-100 text-blue-800 border-2 border-blue-500' : 'bg-[var(--card-bg)] border-2 border-gray-300'
                        }`}
                >
                    <Copy size={18} />
                    Deep Copy
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* Original Sheep */}
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-[var(--card-border)] relative">
                        <span className="text-4xl">🐑</span>
                        <div className="absolute -bottom-8 bg-black text-white px-2 py-1 rounded text-xs font-bold">Original</div>
                    </div>
                    <div className="mt-10 p-2 bg-gray-100 dark:bg-slate-800 rounded border border-gray-300 text-xs font-mono">
                        DNA: {original.dna.code}
                    </div>
                    <button
                        onClick={mutateDNA}
                        className="mt-2 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded hover:bg-red-600"
                    >
                        Mutate DNA
                    </button>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                    <button
                        onClick={createClone}
                        className="px-4 py-2 bg-green-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none"
                    >
                        Clone!
                    </button>
                </div>

                {/* Cloned Sheep */}
                <div className="flex flex-col items-center min-w-[128px]">
                    <AnimatePresence mode="wait">
                        {clone ? (
                            <motion.div
                                key="clone"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-dashed border-[var(--card-border)] relative">
                                    <span className="text-4xl">🐑</span>
                                    <div className="absolute -bottom-8 bg-black text-white px-2 py-1 rounded text-xs font-bold">Clone</div>
                                </div>
                                <div className={`mt-10 p-2 rounded border text-xs font-mono transition-colors ${mode === 'Shallow' && original.dna.code !== 'ATCG' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-gray-100 dark:bg-slate-800 border-gray-300'
                                    }`}>
                                    DNA: {clone.dna.code}
                                </div>
                                {mode === 'Shallow' && original.dna.code !== 'ATCG' && (
                                    <div className="mt-2 text-xs text-red-600 font-bold flex items-center gap-1">
                                        <AlertTriangle size={12} /> Affected by Mutation!
                                    </div>
                                )}
                                {mode === 'Deep' && original.dna.code !== 'ATCG' && (
                                    <div className="mt-2 text-xs text-green-600 font-bold flex items-center gap-1">
                                        <CheckCircle size={12} /> Safe from Mutation!
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <div className="w-32 h-32 border-4 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-300">
                                Empty
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-slate-800/50 rounded border border-gray-200 text-sm">
                <p>
                    <strong>{mode} Copy:</strong>
                    {mode === 'Shallow'
                        ? " Copies the object, but nested objects (like DNA) are shared references. Changing the original's DNA changes the clone's DNA too!"
                        : " Recursively copies everything. The clone is completely independent."}
                </p>
            </div>
        </div>
    );
}
