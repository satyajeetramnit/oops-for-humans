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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Robot Assembly Line (Constructors)</h3>

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
                                        ? 'bg-ink text-paper border-border-base shadow-sketch-sm'
                                        : 'bg-paper border-border-base/20 hover:bg-pencil/5'
                                        }`}
                                >
                                    {parts[part] && <Settings size={14} />}
                                    <span className="capitalize">{part}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-pencil/5 border-2 border-border-base/20 rounded text-sm text-pencil font-mono">
                        <strong className="text-ink">Code:</strong>
                        <div className="mt-2 text-ink/70">
                            new Robot({Object.entries(parts).filter(([_, v]) => v).map(([k]) => k).join(', ') || '...'});
                        </div>
                    </div>

                    <button
                        onClick={buildRobot}
                        disabled={isBuilding}
                        className="w-full bg-accent-orange text-paper font-bold py-3 px-4 rounded-xl border-2 border-accent-orange/50 shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-xs hover:bg-accent-orange/90"
                    >
                        {isBuilding ? 'Assembling...' : 'Call Constructor'}
                    </button>
                </div>

                {/* Assembly Line */}
                <div className="w-full md:w-2/3 bg-paper border-2 border-dashed border-border-base/30 rounded min-h-[300px] relative overflow-hidden flex items-center justify-center">

                    {/* Conveyor Belt */}
                    <div className="absolute bottom-0 w-full h-4 bg-pencil/20 border-t-2 border-border-base" />

                    <AnimatePresence mode="wait">
                        {isBuilding ? (
                            <motion.div
                                key="building"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                className="flex flex-col items-center"
                            >
                                <Settings size={48} className="animate-spin text-pencil/40" />
                                <span className="mt-2 font-bold text-pencil">Constructing...</span>
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
                                    <div className="w-16 h-14 bg-pencil/10 border-2 border-border-base rounded-t-xl flex items-center justify-center relative z-20">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center">
                                    {builtRobot.arms && (
                                        <div className="w-8 h-24 bg-pencil/20 border-2 border-border-base rounded-l-lg mr-[-2px] z-0 origin-top-right rotate-12" />
                                    )}

                                    {builtRobot.body && (
                                        <div className="w-20 h-28 bg-paper border-2 border-border-base rounded-lg z-10 flex items-center justify-center">
                                            <Cpu size={32} className="text-orange-500" />
                                        </div>
                                    )}

                                    {builtRobot.arms && (
                                        <div className="w-8 h-24 bg-pencil/20 border-2 border-border-base rounded-r-lg ml-[-2px] z-0 origin-top-left -rotate-12" />
                                    )}
                                </div>

                                {builtRobot.legs && (
                                    <div className="flex gap-2 mt-[-2px] z-0">
                                        <div className="w-6 h-20 bg-pencil/30 border-2 border-border-base rounded-b-lg" />
                                        <div className="w-6 h-20 bg-pencil/30 border-2 border-border-base rounded-b-lg" />
                                    </div>
                                )}

                                {!builtRobot.head && !builtRobot.body && !builtRobot.legs && !builtRobot.arms && (
                                    <div className="text-red-500 font-bold">Ghost Robot (No parts!)</div>
                                )}
                            </motion.div>
                        ) : (
                            <div className="text-pencil/50 italic">Ready to build.</div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
