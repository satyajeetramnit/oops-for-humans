'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu, Zap, Settings } from 'lucide-react';

type Part = 'Head' | 'Body' | 'Arms' | 'Legs';

interface RobotParts {
    head: boolean;
    body: boolean;
    arms: boolean;
    legs: boolean;
}

export default function RobotAssemblyLine() {
    const [parts, setParts] = useState<RobotParts>({
        head: false,
        body: false,
        arms: false,
        legs: false,
    });
    const [isBuilding, setIsBuilding] = useState(false);
    const [builtRobot, setBuiltRobot] = useState<RobotParts | null>(null);

    const togglePart = (part: keyof RobotParts) => {
        setParts(prev => ({ ...prev, [part]: !prev[part] }));
    };

    const buildRobot = () => {
        setIsBuilding(true);
        setBuiltRobot(null);

        // Simulate assembly time
        setTimeout(() => {
            setBuiltRobot({ ...parts });
            setIsBuilding(false);
        }, 1500);
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Robot Assembly Line (Constructors)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Constructor Parameters */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="space-y-2">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">Select Parts (Parameters)</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {(Object.keys(parts) as Array<keyof RobotParts>).map((part) => (
                                <button
                                    key={part}
                                    onClick={() => togglePart(part)}
                                    className={`px-3 py-2 rounded border-2 transition-all flex items-center justify-center gap-2 ${parts[part]
                                            ? 'bg-ink text-white border-[var(--card-border)] shadow-sketch-sm'
                                            : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                        }`}
                                >
                                    {parts[part] && <Settings size={14} />}
                                    <span className="capitalize">{part}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-orange-50 border-2 border-orange-200 rounded text-sm text-orange-900 font-mono">
                        <strong>Code:</strong>
                        <div className="mt-2">
                            new Robot({Object.entries(parts).filter(([_, v]) => v).map(([k]) => k).join(', ') || '...'});
                        </div>
                    </div>

                    <button
                        onClick={buildRobot}
                        disabled={isBuilding}
                        className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded border-2 border-[var(--card-border)] shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isBuilding ? 'Assembling...' : 'Call Constructor'}
                    </button>
                </div>

                {/* Assembly Line */}
                <div className="w-full md:w-2/3 bg-paper border-2 border-dashed border-gray-300 rounded min-h-[300px] relative overflow-hidden flex items-center justify-center">

                    {/* Conveyor Belt */}
                    <div className="absolute bottom-0 w-full h-4 bg-gray-300 border-t-2 border-[var(--card-border)]" />

                    <AnimatePresence mode="wait">
                        {isBuilding ? (
                            <motion.div
                                key="building"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                className="flex flex-col items-center"
                            >
                                <Settings size={48} className="animate-spin text-gray-400" />
                                <span className="mt-2 font-bold text-gray-500">Constructing...</span>
                            </motion.div>
                        ) : builtRobot ? (
                            <motion.div
                                key="robot"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="relative flex flex-col items-center mb-4"
                            >
                                {/* Robot Visualization */}
                                {builtRobot.head && (
                                    <div className="w-16 h-14 bg-gray-200 border-2 border-[var(--card-border)] rounded-t-xl flex items-center justify-center relative z-20">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center">
                                    {builtRobot.arms && (
                                        <div className="w-8 h-24 bg-gray-300 border-2 border-[var(--card-border)] rounded-l-lg mr-[-2px] z-0 origin-top-right rotate-12" />
                                    )}

                                    {builtRobot.body && (
                                        <div className="w-20 h-28 bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-lg z-10 flex items-center justify-center">
                                            <Cpu size={32} className="text-orange-500" />
                                        </div>
                                    )}

                                    {builtRobot.arms && (
                                        <div className="w-8 h-24 bg-gray-300 border-2 border-[var(--card-border)] rounded-r-lg ml-[-2px] z-0 origin-top-left -rotate-12" />
                                    )}
                                </div>

                                {builtRobot.legs && (
                                    <div className="flex gap-2 mt-[-2px] z-0">
                                        <div className="w-6 h-20 bg-gray-400 border-2 border-[var(--card-border)] rounded-b-lg" />
                                        <div className="w-6 h-20 bg-gray-400 border-2 border-[var(--card-border)] rounded-b-lg" />
                                    </div>
                                )}

                                {!builtRobot.head && !builtRobot.body && !builtRobot.legs && !builtRobot.arms && (
                                    <div className="text-red-500 font-bold">Ghost Robot (No parts!)</div>
                                )}
                            </motion.div>
                        ) : (
                            <div className="text-gray-400 italic">Ready to build.</div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
