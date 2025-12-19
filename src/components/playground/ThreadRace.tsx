'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Lock, Unlock } from 'lucide-react';

export default function ThreadRace() {
    const [thread1Progress, setThread1Progress] = useState(0);
    const [thread2Progress, setThread2Progress] = useState(0);
    const [isRacing, setIsRacing] = useState(false);
    const [useLock, setUseLock] = useState(false);
    const [winner, setWinner] = useState<string | null>(null);
    const [sharedResource, setSharedResource] = useState(0);

    const reset = () => {
        setThread1Progress(0);
        setThread2Progress(0);
        setIsRacing(false);
        setWinner(null);
        setSharedResource(0);
    };

    const startRace = () => {
        if (isRacing) return;
        setIsRacing(true);
        setWinner(null);
        setSharedResource(0);

        const race = async () => {
            let t1 = 0;
            let t2 = 0;

            // Simulate race
            while (t1 < 100 && t2 < 100) {
                // Random increments
                const inc1 = Math.random() * 5;
                const inc2 = Math.random() * 5;

                // If locking is enabled, only one can update the shared resource at a time (simulated)
                // For visual simplicity, we just update progress bars.
                // In a real scenario, this would prevent race conditions on the sharedResource variable.

                t1 = Math.min(t1 + inc1, 100);
                t2 = Math.min(t2 + inc2, 100);

                setThread1Progress(t1);
                setThread2Progress(t2);

                // Simulate updating a shared counter
                if (useLock) {
                    // With lock, updates are atomic (simulated by consistent increments)
                    setSharedResource(prev => prev + 1);
                } else {
                    // Without lock, updates might be "lost" or chaotic (simulated by random jumps)
                    if (Math.random() > 0.5) setSharedResource(prev => prev + 1);
                }

                await new Promise(r => setTimeout(r, 50));
            }

            if (t1 >= 100 && t2 >= 100) setWinner("Draw");
            else if (t1 >= 100) setWinner("Thread 1");
            else setWinner("Thread 2");

            setIsRacing(false);
        };

        race();
    };

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-2xl">
            <h3 className="text-xl font-black mb-4 border-b-2 border-border-base pb-2 text-ink uppercase tracking-tight">Concurrency (Thread Race)</h3>

            <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                    onClick={startRace}
                    disabled={isRacing}
                    className="px-6 py-3 bg-accent-blue text-paper font-black rounded-xl shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2 uppercase tracking-widest text-xs transition-all hover:bg-accent-blue/90"
                >
                    <Play size={18} fill="currentColor" />
                    Start Race
                </button>
                <button
                    onClick={reset}
                    disabled={isRacing}
                    className="px-6 py-3 bg-paper border-2 border-border-base/40 text-pencil font-black rounded-xl shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2 uppercase tracking-widest text-xs hover:bg-pencil/5 transition-all"
                >
                    <RotateCcw size={18} />
                    Reset
                </button>

                <button
                    onClick={() => setUseLock(!useLock)}
                    disabled={isRacing}
                    className={`px-6 py-3 font-black rounded-xl shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-all uppercase tracking-widest text-xs border-2 ${useLock
                        ? 'bg-accent-green/10 text-accent-green border-accent-green/30'
                        : 'bg-accent-red/10 text-accent-red border-accent-red/30'
                        }`}
                >
                    {useLock ? <Lock size={18} /> : <Unlock size={18} />}
                    {useLock ? 'Lock Enabled (Safe)' : 'Lock Disabled (Unsafe)'}
                </button>
            </div>

            <div className="space-y-8">
                {/* Thread 1 */}
                <div className="relative">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-pencil">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_var(--color-accent-blue)]" /> Thread 1</span>
                        <span>{Math.round(thread1Progress)}%</span>
                    </div>
                    <div className="h-4 bg-pencil/5 rounded-full overflow-hidden border-2 border-border-base/10 shadow-inner p-[1px]">
                        <motion.div
                            className="h-full bg-accent-blue rounded-full shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                            style={{ width: `${thread1Progress}%` }}
                        />
                    </div>
                </div>

                {/* Thread 2 */}
                <div className="relative">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-pencil">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_8px_var(--color-accent-purple)]" /> Thread 2</span>
                        <span>{Math.round(thread2Progress)}%</span>
                    </div>
                    <div className="h-4 bg-pencil/5 rounded-full overflow-hidden border-2 border-border-base/10 shadow-inner p-[1px]">
                        <motion.div
                            className="h-full bg-accent-purple rounded-full shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                            style={{ width: `${thread2Progress}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10 p-6 bg-pencil/5 rounded-2xl border-2 border-dashed border-border-base/30 flex flex-col md:flex-row justify-between items-center gap-6 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 -mr-16 -mt-16 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                    <div className="text-[10px] font-black text-pencil/40 uppercase tracking-[0.2em] mb-1">Shared Resource Value</div>
                    <div className="text-4xl font-mono font-black text-ink">{sharedResource}</div>
                </div>

                {winner && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-xl font-black text-accent-green bg-accent-green/10 px-6 py-3 rounded-xl border-2 border-accent-green/20 shadow-sm relative z-10"
                    >
                        🏆 {winner} Finished First!
                    </motion.div>
                )}
            </div>

            <div className="mt-6 p-4 bg-ink/5 rounded-xl border border-border-base/20">
                <p className="text-[11px] text-pencil leading-relaxed">
                    <strong className="text-ink uppercase tracking-widest text-[9px] block mb-1 font-black underline decoration-accent-red/30">Concurrency Logic</strong>
                    <span className="font-bold text-accent-red">Without Lock:</span> Threads access the resource chaotically. The final value might be unpredictable due to a <span className="italic">Race Condition</span>.<br />
                    <span className="font-bold text-accent-green">With Lock:</span> Threads are synchronized. The resource is updated safely using mutual exclusion.
                </p>
            </div>
        </div>
    );
}
