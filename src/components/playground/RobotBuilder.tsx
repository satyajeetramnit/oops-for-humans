'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Shield, Zap, Rocket } from 'lucide-react';
import { useXP } from '../../context/XPContext';

type RobotType = 'Basic' | 'Warrior' | 'Flying';

export default function RobotBuilder() {
    const [selectedType, setSelectedType] = useState<RobotType>('Basic');
    const { addXP } = useXP();

    const robotConfig = {
        Basic: {
            head: true,
            body: true,
            legs: true,
            weapon: false,
            wings: false,
            color: 'bg-pencil/10 border-border-base/40 text-pencil',
            description: 'The Parent Class. Has basic movement and sensors.',
        },
        Warrior: {
            head: true,
            body: true,
            legs: true,
            weapon: true,
            wings: false,
            color: 'bg-accent-red/10 border-accent-red/40 text-accent-red',
            description: 'Inherits from Basic. Adds a Weapon (Method Overriding/Extension).',
        },
        Flying: {
            head: true,
            body: true,
            legs: true,
            weapon: false,
            wings: true,
            color: 'bg-accent-blue/10 border-accent-blue/40 text-accent-blue',
            description: 'Inherits from Basic. Adds Wings.',
        },
    };

    const currentConfig = robotConfig[selectedType];

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Robot Builder (Inheritance)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-4">
                    <div className="space-y-2">
                        <h4 className="font-bold text-[10px] uppercase tracking-widest text-pencil">Select Class</h4>
                        <div className="flex flex-col gap-2">
                            {(['Basic', 'Warrior', 'Flying'] as RobotType[]).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => {
                                        setSelectedType(type);
                                        addXP(10);
                                    }}
                                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center justify-between ${selectedType === type
                                        ? 'bg-ink text-paper border-border-base shadow-sketch-sm'
                                        : 'bg-paper border-border-base/20 hover:bg-pencil/5'
                                        }`}
                                >
                                    <span className="font-bold text-sm">{type} Robot</span>
                                    {selectedType === type && <div className="w-2 h-2 bg-accent-green rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-accent-blue/5 border-2 border-accent-blue/20 rounded-xl text-xs text-ink leading-relaxed shadow-inner">
                        <strong className="text-accent-blue uppercase tracking-widest text-[10px] block mb-1">Inheritance Logic</strong>
                        <p className="opacity-90">{currentConfig.description}</p>
                    </div>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 flex items-center justify-center bg-pencil/5 border-2 border-dashed border-border-base/30 rounded-2xl min-h-[350px] relative overflow-hidden shadow-inner">
                    <div className="relative flex flex-col items-center">
                        {/* Head */}
                        <motion.div
                            key={`head-${selectedType}`}
                            initial={{ scale: 0, y: -20 }} animate={{ scale: 1, y: 0 }}
                            className={`w-16 h-16 rounded-t-2xl border-2 flex items-center justify-center mb-1 z-10 shadow-sm ${currentConfig.color}`}
                        >
                            <Bot size={32} />
                        </motion.div>

                        {/* Body */}
                        <div className="relative flex items-center justify-center">
                            {/* Wings (Flying Only) */}
                            {currentConfig.wings && (
                                <motion.div
                                    initial={{ scale: 0, x: -20 }} animate={{ scale: 1, x: 0 }}
                                    className="absolute -left-14 text-accent-blue"
                                >
                                    <Rocket size={44} className="rotate-[-45deg] drop-shadow-xl" />
                                </motion.div>
                            )}
                            {currentConfig.wings && (
                                <motion.div
                                    initial={{ scale: 0, x: 20 }} animate={{ scale: 1, x: 0 }}
                                    className="absolute -right-14 text-accent-blue"
                                >
                                    <Rocket size={44} className="rotate-[45deg] drop-shadow-xl" />
                                </motion.div>
                            )}

                            <motion.div
                                key={`body-${selectedType}`}
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                className={`w-24 h-32 rounded-xl border-2 flex items-center justify-center z-10 shadow-sm ${currentConfig.color}`}
                            >
                                <div className="w-16 h-20 border-2 border-border-base/10 rounded-lg bg-paper/20 shadow-inner" />
                            </motion.div>

                            {/* Weapon (Warrior Only) */}
                            {currentConfig.weapon && (
                                <motion.div
                                    initial={{ scale: 0, x: 20, rotate: 12 }} animate={{ scale: 1, x: 0, rotate: 0 }}
                                    className="absolute -right-12 top-4 text-accent-red bg-paper p-2 rounded-2xl border-2 border-accent-red/30 shadow-sketch-sm"
                                >
                                    <Zap size={28} fill="currentColor" />
                                </motion.div>
                            )}
                        </div>

                        {/* Legs */}
                        <div className="flex gap-2 mt-1">
                            <motion.div
                                key={`leg1-${selectedType}`}
                                initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                                className={`w-8 h-20 rounded-b-xl border-2 shadow-sm ${currentConfig.color}`}
                            />
                            <motion.div
                                key={`leg2-${selectedType}`}
                                initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                                className={`w-8 h-20 rounded-b-xl border-2 shadow-sm ${currentConfig.color}`}
                            />
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-pencil/10 to-transparent" />
                </div>
            </div>
        </div>
    );
}
