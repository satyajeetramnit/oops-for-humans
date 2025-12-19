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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Global Scoreboard (Static vs Non-Static)</h3>

            <div className="flex flex-col gap-6">
                {/* Control Panel */}
                <div className="flex items-center justify-between bg-pencil/5 p-4 rounded-xl border-2 border-border-base/20 shadow-inner">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-[10px] uppercase tracking-widest text-pencil">Variable Type:</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsStatic(true)}
                                className={`px-4 py-2 rounded-lg border-2 transition-all font-bold text-xs uppercase tracking-wider ${isStatic ? 'bg-accent-blue text-paper border-accent-blue/50 shadow-sketch-sm' : 'bg-paper text-pencil border-border-base/10 hover:bg-pencil/5'
                                    }`}
                            >
                                static score
                            </button>
                            <button
                                onClick={() => setIsStatic(false)}
                                className={`px-4 py-2 rounded-lg border-2 transition-all font-bold text-xs uppercase tracking-wider ${!isStatic ? 'bg-accent-purple text-paper border-accent-purple/50 shadow-sketch-sm' : 'bg-paper text-pencil border-border-base/10 hover:bg-pencil/5'
                                    }`}
                            >
                                int score
                            </button>
                        </div>
                    </div>

                    <div className="text-[10px] font-mono font-bold bg-ink text-paper px-3 py-1.5 rounded-full border border-paper/10 shadow-lg uppercase tracking-widest">
                        {isStatic ? 'Shared by ALL' : 'Unique to EACH'}
                    </div>
                </div>

                {/* Visualization Area */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-8">

                    {/* The Static Variable (Floating above) */}
                    <motion.div
                        animate={{
                            y: isStatic ? 0 : -20,
                            opacity: isStatic ? 1 : 0.3,
                            scale: isStatic ? 1 : 0.8
                        }}
                        className="absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-full z-10"
                    >
                        <div className="bg-accent-blue/10 border-2 border-accent-blue text-accent-blue px-6 py-4 rounded-2xl shadow-sketch flex flex-col items-center min-w-[150px]">
                            <div className="flex items-center gap-2 font-black text-[10px] uppercase mb-2 tracking-widest">
                                <Globe size={14} /> Static Memory
                            </div>
                            <div className="text-4xl font-black font-mono">{globalScore}</div>
                        </div>
                        {isStatic && <div className="w-0.5 h-10 bg-accent-blue/50 mx-auto border-dashed border-l-2" />} {/* Connector line */}
                    </motion.div>

                    {/* Players (Instances) */}
                    {players.map((player) => (
                        <div key={player.id} className="bg-paper border-2 border-border-base rounded-2xl p-6 flex flex-col items-center relative mt-16 md:mt-2 shadow-sm transition-all hover:shadow-lg group">
                            {/* Connection Line to Static */}
                            {isStatic && (
                                <motion.div
                                    initial={{ height: 0 }} animate={{ height: '3rem' }}
                                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 bg-accent-blue/30 border-l-2 border-dashed border-accent-blue/40"
                                />
                            )}

                            <div className="w-16 h-16 bg-pencil/10 rounded-full border-2 border-border-base flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-inner">
                                <User size={32} className="text-ink opacity-70" />
                            </div>

                            <h4 className="font-bold text-lg mb-4 text-ink">{player.name}</h4>

                            <div className={`w-full p-4 rounded-xl border-2 mb-6 font-mono text-center text-3xl font-black transition-all ${isStatic
                                ? 'bg-pencil/5 border-border-base/10 text-pencil/40'
                                : 'bg-accent-purple/10 border-accent-purple/30 text-accent-purple'
                                }`}>
                                {isStatic ? (
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-pencil font-sans font-black uppercase tracking-widest mb-1 opacity-40">Static Redir</span>
                                        {globalScore}
                                    </div>
                                ) : (
                                    player.localScore
                                )}
                            </div>

                            <button
                                onClick={() => incrementScore(player.id)}
                                className={`w-full py-3 rounded-xl font-bold border-2 shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-widest text-xs ${isStatic ? 'bg-accent-blue text-paper border-accent-blue/50 hover:bg-accent-blue/90' : 'bg-accent-purple text-paper border-accent-purple/50 hover:bg-accent-purple/90'
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
