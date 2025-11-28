'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sword, Crosshair, Shield, Zap } from 'lucide-react';

type StrategyType = 'Melee' | 'Ranged' | 'Defensive';

export default function BattleBot() {
    const [strategy, setStrategy] = useState<StrategyType>('Melee');
    const [isAttacking, setIsAttacking] = useState(false);
    const [log, setLog] = useState<string[]>([]);

    const performAction = () => {
        setIsAttacking(true);
        let actionLog = '';

        if (strategy === 'Melee') actionLog = 'Swings Sword! (Melee Strategy)';
        if (strategy === 'Ranged') actionLog = 'Shoots Arrow! (Ranged Strategy)';
        if (strategy === 'Defensive') actionLog = 'Raises Shield! (Defensive Strategy)';

        setLog(prev => [actionLog, ...prev].slice(0, 5));
        setTimeout(() => setIsAttacking(false), 800);
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Battle Bot (Strategy Pattern)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="space-y-2">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">1. Equip Strategy</h4>
                        <div className="flex flex-col gap-2">
                            {(['Melee', 'Ranged', 'Defensive'] as StrategyType[]).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setStrategy(type)}
                                    className={`px-4 py-3 rounded border-2 font-bold text-left flex items-center gap-3 transition-all ${strategy === type
                                            ? 'bg-ink text-white border-[var(--card-border)] shadow-sketch-sm translate-x-2'
                                            : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                        }`}
                                >
                                    {type === 'Melee' && <Sword size={20} />}
                                    {type === 'Ranged' && <Crosshair size={20} />}
                                    {type === 'Defensive' && <Shield size={20} />}
                                    {type} Strategy
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={performAction}
                        disabled={isAttacking}
                        className="w-full py-3 px-4 bg-red-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <Zap size={20} />
                        Execute Strategy
                    </button>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 flex flex-col gap-4">
                    <div className="bg-gray-100 dark:bg-slate-800 border-2 border-[var(--card-border)] rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
                        <Bot size={120} className="text-gray-800" />

                        {/* Weapon Overlay */}
                        <AnimatePresence mode="wait">
                            {strategy === 'Melee' && (
                                <motion.div
                                    key="melee"
                                    initial={{ rotate: -45, x: 40, y: 0 }}
                                    animate={isAttacking ? { rotate: 45, x: 60, y: 20 } : { rotate: -45, x: 40, y: 0 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="absolute"
                                >
                                    <Sword size={80} className="text-blue-600" />
                                </motion.div>
                            )}
                            {strategy === 'Ranged' && (
                                <motion.div
                                    key="ranged"
                                    initial={{ x: 50, y: 0 }}
                                    animate={isAttacking ? { x: 40 } : { x: 50 }}
                                    className="absolute"
                                >
                                    <Crosshair size={80} className="text-green-600" />
                                    {isAttacking && (
                                        <motion.div
                                            initial={{ x: 0, opacity: 1 }}
                                            animate={{ x: 200, opacity: 0 }}
                                            className="absolute top-1/2 left-full w-8 h-1 bg-black"
                                        />
                                    )}
                                </motion.div>
                            )}
                            {strategy === 'Defensive' && (
                                <motion.div
                                    key="defensive"
                                    initial={{ scale: 1, x: 0, y: 0 }}
                                    animate={isAttacking ? { scale: 1.2 } : { scale: 1 }}
                                    className="absolute"
                                >
                                    <Shield size={100} className="text-purple-600 opacity-80" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Log */}
                    <div className="bg-black text-green-400 p-4 rounded font-mono text-xs h-32 overflow-y-auto border-2 border-gray-500">
                        {log.length === 0 && <span className="opacity-50">// Ready for battle...</span>}
                        {log.map((entry, i) => (
                            <div key={i} className="mb-1 border-b border-gray-800 pb-1 last:border-0">
                                &gt; {entry}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
