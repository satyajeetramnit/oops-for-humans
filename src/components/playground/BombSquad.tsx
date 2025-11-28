'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bomb, Scissors, ShieldCheck, AlertTriangle, RefreshCw } from 'lucide-react';

export default function BombSquad() {
    const [timeLeft, setTimeLeft] = useState(10);
    const [isExploded, setIsExploded] = useState(false);
    const [isDefused, setIsDefused] = useState(false);
    const [useTryCatch, setUseTryCatch] = useState(false);
    const [wires, setWires] = useState([
        { id: 1, color: 'bg-red-500', safe: false },
        { id: 2, color: 'bg-blue-500', safe: true },
        { id: 3, color: 'bg-green-500', safe: false },
        { id: 4, color: 'bg-yellow-500', safe: false },
    ]);

    // Timer
    useEffect(() => {
        if (timeLeft > 0 && !isExploded && !isDefused) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !isExploded && !isDefused) {
            setIsExploded(true);
        }
    }, [timeLeft, isExploded, isDefused]);

    const cutWire = (safe: boolean) => {
        if (isExploded || isDefused) return;

        if (safe) {
            setIsDefused(true);
        } else {
            // Unsafe wire!
            if (useTryCatch) {
                // Caught the exception!
                alert("Exception Caught! The bomb almost exploded, but the catch block saved it.");
            } else {
                // Crash!
                setIsExploded(true);
            }
        }
    };

    const resetGame = () => {
        setTimeLeft(10);
        setIsExploded(false);
        setIsDefused(false);
        // Shuffle safe wire
        const newWires = wires.map(w => ({ ...w, safe: false }));
        const randomSafeIndex = Math.floor(Math.random() * 4);
        newWires[randomSafeIndex].safe = true;
        setWires(newWires);
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Bomb Squad (Exception Handling)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded border-2 border-gray-300">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil mb-2">Safety Mode</h4>
                        <button
                            onClick={() => setUseTryCatch(!useTryCatch)}
                            className={`w-full py-3 px-4 rounded border-2 transition-all flex items-center justify-between font-bold ${useTryCatch
                                ? 'bg-green-100 border-green-500 text-green-800 shadow-sketch-sm'
                                : 'bg-[var(--card-bg)] border-gray-300 text-gray-400'
                                }`}
                        >
                            <span>try-catch Block</span>
                            {useTryCatch ? <ShieldCheck size={20} /> : <div className="w-5 h-5 border-2 border-gray-300 rounded" />}
                        </button>
                        <p className="text-xs mt-2 text-gray-500">
                            {useTryCatch
                                ? "Enabled: Cutting a wrong wire will throw an exception, but we will CATCH it."
                                : "Disabled: Cutting a wrong wire will CRASH the program (Explode)."}
                        </p>
                    </div>

                    <button
                        onClick={resetGame}
                        className="w-full bg-gray-800 dark:bg-slate-700 text-white font-bold py-3 px-4 rounded border-2 border-[var(--card-border)] shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2"
                    >
                        <RefreshCw size={18} />
                        Reset Bomb
                    </button>
                </div>

                {/* The Bomb */}
                <div className={`w-full md:w-2/3 border-2 border-[var(--card-border)] rounded-xl min-h-[300px] relative overflow-hidden flex flex-col items-center justify-center p-8 transition-colors duration-500 ${isExploded ? 'bg-red-600' : isDefused ? 'bg-green-100' : 'bg-gray-900'
                    }`}>

                    {/* Timer Display */}
                    <div className="bg-black border-4 border-gray-600 rounded px-6 py-2 mb-8 shadow-lg">
                        <span className={`font-mono text-5xl font-black tracking-widest ${isExploded ? 'text-red-600' : isDefused ? 'text-green-500' : 'text-red-500 animate-pulse'
                            }`}>
                            {isExploded ? 'BOOM' : isDefused ? 'SAFE' : `00:${timeLeft.toString().padStart(2, '0')}`}
                        </span>
                    </div>

                    {/* Wires */}
                    {!isExploded && !isDefused && (
                        <div className="flex gap-4">
                            {wires.map((wire) => (
                                <motion.button
                                    key={wire.id}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => cutWire(wire.safe)}
                                    className={`w-4 h-32 ${wire.color} border-2 border-white/50 rounded-full shadow-lg relative group`}
                                >
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                                        <Scissors size={24} />
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    )}

                    {/* Status Messages */}
                    <AnimatePresence>
                        {isExploded && (
                            <motion.div
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                className="absolute inset-0 flex items-center justify-center bg-red-600/90 backdrop-blur-sm"
                            >
                                <div className="text-center text-white">
                                    <AlertTriangle size={64} className="mx-auto mb-4" />
                                    <h2 className="text-4xl font-black uppercase">System Crash!</h2>
                                    <p className="font-mono mt-2">Uncaught Exception: ExplosionError</p>
                                </div>
                            </motion.div>
                        )}

                        {isDefused && (
                            <motion.div
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                className="absolute inset-0 flex items-center justify-center bg-green-500/90 backdrop-blur-sm"
                            >
                                <div className="text-center text-white">
                                    <ShieldCheck size={64} className="mx-auto mb-4" />
                                    <h2 className="text-4xl font-black uppercase">Bomb Defused!</h2>
                                    <p className="font-mono mt-2">Program executed successfully.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
