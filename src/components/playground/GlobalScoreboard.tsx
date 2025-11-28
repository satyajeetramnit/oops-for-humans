'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Globe, Lock } from 'lucide-react';

export default function GlobalScoreboard() {
    const [isStatic, setIsStatic] = useState(true);
    const [globalScore, setGlobalScore] = useState(0);
    const [players, setPlayers] = useState([
        { id: 1, name: 'Player 1', localScore: 0 },
        { id: 2, name: 'Player 2', localScore: 0 },
        { id: 3, name: 'Player 3', localScore: 0 },
    ]);

    // Reset scores when toggling mode
    useEffect(() => {
        setGlobalScore(0);
        setPlayers(prev => prev.map(p => ({ ...p, localScore: 0 })));
    }, [isStatic]);

    const incrementScore = (playerId: number) => {
        if (isStatic) {
            setGlobalScore(prev => prev + 10);
        } else {
            setPlayers(prev => prev.map(p =>
                p.id === playerId ? { ...p, localScore: p.localScore + 10 } : p
            ));
        }
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Global Scoreboard (Static vs Non-Static)</h3>

            <div className="flex flex-col gap-6">
                {/* Control Panel */}
                <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-800 p-4 rounded border-2 border-gray-300">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-sm uppercase tracking-wider text-pencil">Variable Type:</span>
                        <button
                            onClick={() => setIsStatic(true)}
                            className={`px-4 py-2 rounded border-2 transition-all font-bold ${isStatic ? 'bg-blue-600 text-white border-[var(--card-border)] shadow-sketch-sm' : 'bg-[var(--card-bg)] text-gray-500 border-gray-300'
                                }`}
                        >
                            static int score
                        </button>
                        <button
                            onClick={() => setIsStatic(false)}
                            className={`px-4 py-2 rounded border-2 transition-all font-bold ${!isStatic ? 'bg-purple-600 text-white border-[var(--card-border)] shadow-sketch-sm' : 'bg-[var(--card-bg)] text-gray-500 border-gray-300'
                                }`}
                        >
                            int score
                        </button>
                    </div>

                    <div className="text-sm font-mono bg-[var(--card-bg)] px-3 py-1 rounded border border-gray-300">
                        {isStatic ? 'Shared by ALL instances' : 'Unique to EACH instance'}
                    </div>
                </div>

                {/* Visualization Area */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

                    {/* The Static Variable (Floating above) */}
                    <motion.div
                        animate={{
                            y: isStatic ? 0 : -20,
                            opacity: isStatic ? 1 : 0.3,
                            scale: isStatic ? 1 : 0.8
                        }}
                        className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full z-10"
                    >
                        <div className="bg-blue-100 border-2 border-blue-500 text-blue-900 px-6 py-3 rounded-lg shadow-sketch flex flex-col items-center">
                            <div className="flex items-center gap-2 font-bold text-sm uppercase mb-1">
                                <Globe size={16} /> Static Memory
                            </div>
                            <div className="text-3xl font-black font-mono">{globalScore}</div>
                        </div>
                        {isStatic && <div className="w-0.5 h-8 bg-blue-500 mx-auto" />} {/* Connector line */}
                    </motion.div>

                    {/* Players (Instances) */}
                    {players.map((player) => (
                        <div key={player.id} className="bg-paper border-2 border-[var(--card-border)] rounded-lg p-4 flex flex-col items-center relative mt-12 md:mt-0">
                            {/* Connection Line to Static */}
                            {isStatic && (
                                <motion.div
                                    initial={{ height: 0 }} animate={{ height: '2rem' }}
                                    className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 bg-blue-300 border-l-2 border-dashed border-blue-400"
                                />
                            )}

                            <div className="w-16 h-16 bg-gray-200 rounded-full border-2 border-[var(--card-border)] flex items-center justify-center mb-3">
                                <User size={32} className="text-ink" />
                            </div>

                            <h4 className="font-bold text-lg mb-2">{player.name}</h4>

                            <div className={`w-full p-3 rounded border-2 mb-4 font-mono text-center text-xl font-bold transition-colors ${isStatic
                                    ? 'bg-gray-100 dark:bg-slate-800 border-gray-300 text-gray-400'
                                    : 'bg-purple-100 border-purple-400 text-purple-900'
                                }`}>
                                {isStatic ? (
                                    <span className="text-xs text-gray-500 font-sans font-normal block mb-1">(Reads Static)</span>
                                ) : (
                                    player.localScore
                                )}
                                {isStatic ? globalScore : ''}
                            </div>

                            <button
                                onClick={() => incrementScore(player.id)}
                                className={`w-full py-2 rounded font-bold border-2 border-[var(--card-border)] shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all ${isStatic ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-purple-500 text-white hover:bg-purple-600'
                                    }`}
                            >
                                +10 Points
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
