'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Bell, Zap, Volume2 } from 'lucide-react';

type EventType = 'FIRE' | 'SALE' | 'NEWS';

type Listener = {
    id: number;
    name: string;
    listeningTo: EventType[];
    status: string;
};

export default function SignalTower() {
    const [listeners, setListeners] = useState<Listener[]>([
        { id: 1, name: 'Fire Station', listeningTo: ['FIRE'], status: 'Idle' },
        { id: 2, name: 'Shopper', listeningTo: ['SALE'], status: 'Idle' },
        { id: 3, name: 'News Anchor', listeningTo: ['NEWS', 'FIRE'], status: 'Idle' },
    ]);

    const [activeSignal, setActiveSignal] = useState<EventType | null>(null);

    const emitSignal = (type: EventType) => {
        setActiveSignal(type);

        // Notify listeners
        setListeners(prev => prev.map(l => {
            if (l.listeningTo.includes(type)) {
                return { ...l, status: `Reacting to ${type}!` };
            }
            return { ...l, status: 'Idle' };
        }));

        setTimeout(() => {
            setActiveSignal(null);
            setListeners(prev => prev.map(l => ({ ...l, status: 'Idle' })));
        }, 2000);
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Event-Driven Architecture (Signal Tower)</h3>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* The Emitter (Tower) */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-48 bg-gray-800 rounded-t-full border-4 border-gray-600 flex flex-col items-center justify-start pt-8 relative shadow-xl">
                        <Radio size={48} className={`text-white mb-2 ${activeSignal ? 'animate-pulse text-red-400' : ''}`} />

                        {/* Signal Waves */}
                        <AnimatePresence>
                            {activeSignal && (
                                <>
                                    <motion.div
                                        initial={{ scale: 1, opacity: 1 }}
                                        animate={{ scale: 3, opacity: 0 }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                        className="absolute top-8 w-12 h-12 border-4 border-red-500 rounded-full"
                                    />
                                    <motion.div
                                        initial={{ scale: 1, opacity: 1 }}
                                        animate={{ scale: 3, opacity: 0 }}
                                        transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
                                        className="absolute top-8 w-12 h-12 border-4 border-red-500 rounded-full"
                                    />
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => emitSignal('FIRE')}
                            disabled={!!activeSignal}
                            className="px-3 py-2 bg-red-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-1 text-xs"
                        >
                            <Bell size={14} /> FIRE!
                        </button>
                        <button
                            onClick={() => emitSignal('SALE')}
                            disabled={!!activeSignal}
                            className="px-3 py-2 bg-green-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-1 text-xs"
                        >
                            <Zap size={14} /> SALE!
                        </button>
                        <button
                            onClick={() => emitSignal('NEWS')}
                            disabled={!!activeSignal}
                            className="px-3 py-2 bg-blue-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-1 text-xs"
                        >
                            <Volume2 size={14} /> NEWS!
                        </button>
                    </div>
                </div>

                {/* The Listeners */}
                <div className="flex flex-col gap-4 w-full md:w-64">
                    {listeners.map(listener => (
                        <motion.div
                            key={listener.id}
                            animate={listener.status !== 'Idle' ? { scale: 1.05, x: 10 } : { scale: 1, x: 0 }}
                            className={`p-3 rounded border-2 border-[var(--card-border)] shadow-sm flex items-center justify-between transition-colors ${listener.status !== 'Idle' ? 'bg-yellow-100 border-yellow-500' : 'bg-[var(--card-bg)]'
                                }`}
                        >
                            <div>
                                <div className="font-bold text-sm">{listener.name}</div>
                                <div className="text-xs text-gray-500">Listens to: {listener.listeningTo.join(', ')}</div>
                            </div>
                            <div className={`text-xs font-bold px-2 py-1 rounded ${listener.status !== 'Idle' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-gray-300'
                                }`}>
                                {listener.status}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
