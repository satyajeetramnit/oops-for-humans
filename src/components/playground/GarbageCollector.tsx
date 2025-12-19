'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Box, RefreshCw } from 'lucide-react';

type MemoryObject = {
    id: number;
    type: 'Stack' | 'Heap';
    referenced: boolean;
};

export default function GarbageCollector() {
    const [objects, setObjects] = useState<MemoryObject[]>([]);
    const [nextId, setNextId] = useState(1);
    const [isCollecting, setIsCollecting] = useState(false);

    const createObject = () => {
        if (objects.length >= 8) return;
        setObjects(prev => [
            ...prev,
            { id: nextId, type: 'Heap', referenced: true }
        ]);
        setNextId(prev => prev + 1);
    };

    const removeReference = (id: number) => {
        setObjects(prev => prev.map(obj =>
            obj.id === id ? { ...obj, referenced: false } : obj
        ));
    };

    const runGC = () => {
        setIsCollecting(true);
        setTimeout(() => {
            setObjects(prev => prev.filter(obj => obj.referenced));
            setIsCollecting(false);
        }, 1500);
    };

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Memory Management (Garbage Collector)</h3>

            <div className="flex gap-4 mb-6">
                <button
                    onClick={createObject}
                    disabled={objects.length >= 8 || isCollecting}
                    className="px-4 py-2 bg-accent-blue text-paper font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 transition-colors"
                >
                    + New Object
                </button>
                <button
                    onClick={runGC}
                    disabled={isCollecting}
                    className="px-4 py-2 bg-green-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2 hover:bg-green-700 transition-colors"
                >
                    <Trash2 size={18} />
                    Run GC
                </button>
            </div>

            <div className="bg-pencil/5 p-6 rounded-lg border-2 border-border-base/30 min-h-[200px] relative overflow-hidden">
                <div className="absolute top-2 right-2 text-xs font-bold text-pencil/40 uppercase tracking-widest">Heap Memory</div>

                {isCollecting && (
                    <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 1.5, ease: "linear" }}
                        className="absolute inset-y-0 w-2 bg-green-500/50 z-10 blur-sm"
                    />
                )}

                <div className="flex flex-wrap gap-4">
                    <AnimatePresence>
                        {objects.map((obj) => (
                            <motion.div
                                key={obj.id}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className={`w-20 h-20 rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-colors relative ${obj.referenced
                                    ? 'bg-paper border-border-base shadow-sm'
                                    : 'bg-pencil/20 border-border-base/50 text-pencil/50'
                                    }`}
                                onClick={() => !isCollecting && removeReference(obj.id)}
                            >
                                <Box size={24} className={obj.referenced ? 'text-ink' : 'text-pencil/50'} />
                                <span className={`text-xs font-bold mt-1 ${obj.referenced ? 'text-ink' : 'text-pencil/50'}`}>Obj #{obj.id}</span>
                                {obj.referenced ? (
                                    <div className="absolute -top-2 -right-2 bg-accent-blue text-paper text-[10px] px-1 rounded font-bold">Ref</div>
                                ) : (
                                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1 rounded font-bold">No Ref</div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {objects.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center text-pencil/30 italic font-bold">
                        Heap is empty. Create objects!
                    </div>
                )}
            </div>

            <p className="mt-4 text-sm text-pencil">
                1. Click <strong className="text-ink">+ New Object</strong> to allocate memory.
                <br />
                2. Click an object to <strong className="text-ink">remove its reference</strong> (simulate variable going out of scope).
                <br />
                3. Click <strong className="text-ink">Run GC</strong> to clean up unreferenced objects.
            </p>
        </div>
    );
}
