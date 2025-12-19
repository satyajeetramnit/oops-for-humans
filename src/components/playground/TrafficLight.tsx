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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Traffic Light (Enums)</h3>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* The Traffic Light */}
                <div className="w-32 bg-ink p-4 rounded-xl border-4 border-border-base shadow-xl flex flex-col gap-4 items-center">
                    <div className={`w-20 h-20 rounded-full border-4 border-border-base/30 transition-all duration-300 ${lightState === 'RED' ? 'bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.8)] border-red-400' : 'bg-red-900/20'}`} />
                    <div className={`w-20 h-20 rounded-full border-4 border-border-base/30 transition-all duration-300 ${lightState === 'YELLOW' ? 'bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.8)] border-yellow-300' : 'bg-yellow-900/20'}`} />
                    <div className={`w-20 h-20 rounded-full border-4 border-border-base/30 transition-all duration-300 ${lightState === 'GREEN' ? 'bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.8)] border-green-400' : 'bg-green-900/20'}`} />
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">Set Enum State:</h4>
                    {(['RED', 'YELLOW', 'GREEN'] as TrafficLightState[]).map((state) => (
                        <button
                            key={state}
                            onClick={() => setLightState(state)}
                            className={`px-6 py-3 rounded border-2 font-bold transition-all ${lightState === state
                                ? 'bg-ink text-paper border-border-base scale-105 shadow-sketch-sm'
                                : 'bg-paper text-pencil border-border-base/20 hover:bg-pencil/5'
                                }`}
                        >
                            TrafficLight.{state}
                        </button>
                    ))}
                </div>
            </div>

            {/* The Road */}
            <div className="mt-8 relative h-24 bg-pencil/10 border-t-4 border-b-4 border-border-base overflow-hidden">
                {/* Stop Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-paper border-l-2 border-r-2 border-dashed border-pencil/30" />

                {/* Car */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 text-accent-blue"
                    style={{ left: `${carPosition}%` }}
                    animate={{
                        left: lightState === 'RED' && carPosition < 45 ? '45%' : `${carPosition}%`
                    }}
                    transition={{ type: 'spring', stiffness: 50 }}
                >
                    <Car size={48} className="drop-shadow-sm" />
                    {lightState === 'RED' && carPosition >= 40 && carPosition <= 50 && (
                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-600 font-bold text-[10px] bg-paper px-2 py-0.5 rounded border border-red-500 shadow-sm uppercase tracking-widest"
                        >
                            STOP!
                        </motion.div>
                    )}
                </motion.div>
            </div>

            <div className="mt-2 text-center text-[10px] text-pencil uppercase tracking-widest font-bold">
                Current Enum State: <span className="text-ink">TrafficLight.{lightState}</span>
            </div>
        </div>
    );
}
