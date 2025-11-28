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
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Concurrency (Thread Race)</h3>

            <div className="flex items-center gap-4 mb-6">
                <button
                    onClick={startRace}
                    disabled={isRacing}
                    className="px-4 py-2 bg-blue-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2"
                >
                    <Play size={18} />
                    Start Race
                </button>
                <button
                    onClick={reset}
                    disabled={isRacing}
                    className="px-4 py-2 bg-gray-200 dark:bg-slate-700 text-ink dark:text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2"
                >
                    <RotateCcw size={18} />
                    Reset
                </button>

                <button
                    onClick={() => setUseLock(!useLock)}
                    disabled={isRacing}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${useLock ? 'bg-green-100 text-green-800 border-2 border-green-500' : 'bg-red-100 text-red-800 border-2 border-red-500'
                        }`}
                >
                    {useLock ? <Lock size={18} /> : <Unlock size={18} />}
                    {useLock ? 'Lock Enabled (Safe)' : 'Lock Disabled (Unsafe)'}
                </button>
            </div>

            <div className="space-y-6">
                {/* Thread 1 */}
                <div className="relative">
                    <div className="flex justify-between text-sm font-bold mb-1">
                        <span>Thread 1</span>
                        <span>{Math.round(thread1Progress)}%</span>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden border border-[var(--card-border)]">
                        <motion.div
                            className="h-full bg-blue-500"
                            style={{ width: `${thread1Progress}%` }}
                        />
                    </div>
                </div>

                {/* Thread 2 */}
                <div className="relative">
                    <div className="flex justify-between text-sm font-bold mb-1">
                        <span>Thread 2</span>
                        <span>{Math.round(thread2Progress)}%</span>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden border border-[var(--card-border)]">
                        <motion.div
                            className="h-full bg-purple-500"
                            style={{ width: `${thread2Progress}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-gray-100 dark:bg-slate-800 rounded border-2 border-gray-300 flex justify-between items-center">
                <div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Shared Resource Value</div>
                    <div className="text-2xl font-mono font-bold">{sharedResource}</div>
                </div>

                {winner && (
                    <div className="text-xl font-bold text-green-600 animate-bounce">
                        🏆 {winner} Finished First!
                    </div>
                )}
            </div>

            <p className="mt-4 text-sm text-gray-600">
                <strong>Without Lock:</strong> Threads access the resource chaotically. The final value might be unpredictable (Race Condition).<br />
                <strong>With Lock:</strong> Threads are synchronized. The resource is updated safely.
            </p>
        </div>
    );
}
