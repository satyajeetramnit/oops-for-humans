'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, AlertOctagon } from 'lucide-react';

// The Enum
type TrafficLightState = 'RED' | 'YELLOW' | 'GREEN';

export default function TrafficLight() {
    const [lightState, setLightState] = useState<TrafficLightState>('RED');
    const [carPosition, setCarPosition] = useState(0); // 0 to 100%

    // Car Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (lightState === 'GREEN') {
            interval = setInterval(() => {
                setCarPosition((prev) => (prev >= 100 ? -20 : prev + 2));
            }, 50);
        } else if (lightState === 'YELLOW') {
            interval = setInterval(() => {
                setCarPosition((prev) => {
                    // Slow down if near stop line (50%)
                    if (prev > 40 && prev < 50) return prev + 0.5;
                    if (prev >= 100) return -20;
                    return prev + 1;
                });
            }, 50);
        }
        return () => clearInterval(interval);
    }, [lightState]);

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Traffic Light (Enums)</h3>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* The Traffic Light */}
                <div className="w-32 bg-gray-800 p-4 rounded-xl border-4 border-[var(--card-border)] shadow-xl flex flex-col gap-4 items-center">
                    <div className={`w-20 h-20 rounded-full border-4 border-[var(--card-border)] transition-all duration-300 ${lightState === 'RED' ? 'bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.8)]' : 'bg-red-900/30'}`} />
                    <div className={`w-20 h-20 rounded-full border-4 border-[var(--card-border)] transition-all duration-300 ${lightState === 'YELLOW' ? 'bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.8)]' : 'bg-yellow-900/30'}`} />
                    <div className={`w-20 h-20 rounded-full border-4 border-[var(--card-border)] transition-all duration-300 ${lightState === 'GREEN' ? 'bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.8)]' : 'bg-green-900/30'}`} />
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">Set Enum State:</h4>
                    {(['RED', 'YELLOW', 'GREEN'] as TrafficLightState[]).map((state) => (
                        <button
                            key={state}
                            onClick={() => setLightState(state)}
                            className={`px-6 py-3 rounded border-2 font-bold transition-all ${lightState === state
                                    ? 'bg-ink text-white border-[var(--card-border)] scale-105 shadow-sketch-sm'
                                    : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                }`}
                        >
                            TrafficLight.{state}
                        </button>
                    ))}
                </div>
            </div>

            {/* The Road */}
            <div className="mt-8 relative h-24 bg-gray-200 border-t-4 border-b-4 border-[var(--card-border)] overflow-hidden">
                {/* Stop Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-[var(--card-bg)] border-l-2 border-r-2 border-dashed border-gray-400" />

                {/* Car */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 text-blue-600"
                    style={{ left: `${carPosition}%` }}
                    animate={{
                        left: lightState === 'RED' && carPosition < 45 ? '45%' : `${carPosition}%`
                    }}
                    transition={{ type: 'spring', stiffness: 50 }}
                >
                    <Car size={48} />
                    {lightState === 'RED' && carPosition >= 40 && carPosition <= 50 && (
                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-600 font-bold text-xs bg-[var(--card-bg)] px-1 rounded border border-red-500"
                        >
                            STOP!
                        </motion.div>
                    )}
                </motion.div>
            </div>

            <div className="mt-2 text-center text-xs text-gray-500 font-mono">
                Current State: <span className="font-bold text-ink">TrafficLight.{lightState}</span>
            </div>
        </div>
    );
}
