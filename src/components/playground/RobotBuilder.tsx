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
            color: 'bg-gray-200 border-gray-400',
            description: 'The Parent Class. Has basic movement and sensors.',
        },
        Warrior: {
            head: true,
            body: true,
            legs: true,
            weapon: true,
            wings: false,
            color: 'bg-red-100 border-red-400',
            description: 'Inherits from Basic. Adds a Weapon (Method Overriding/Extension).',
        },
        Flying: {
            head: true,
            body: true,
            legs: true,
            weapon: false,
            wings: true,
            color: 'bg-sky-100 border-sky-400',
            description: 'Inherits from Basic. Adds Wings.',
        },
    };

    const currentConfig = robotConfig[selectedType];

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Robot Builder (Inheritance)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-4">
                    <div className="space-y-2">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">Select Class</h4>
                        {(['Basic', 'Warrior', 'Flying'] as RobotType[]).map((type) => (
                            <button
                                key={type}
                                onClick={() => {
                                    setSelectedType(type);
                                    addXP(10);
                                }}
                                className={`w-full text-left px-4 py-3 rounded border-2 transition-all flex items-center justify-between ${selectedType === type
                                    ? 'bg-ink text-white border-[var(--card-border)] shadow-sketch-sm'
                                    : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                    }`}
                            >
                                <span className="font-bold">{type} Robot</span>
                                {selectedType === type && <div className="w-2 h-2 bg-green-400 rounded-full" />}
                            </button>
                        ))}
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 rounded text-sm text-blue-900">
                        <strong>Inheritance Logic:</strong>
                        <p className="mt-1">{currentConfig.description}</p>
                    </div>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 flex items-center justify-center bg-paper border-2 border-dashed border-gray-300 rounded min-h-[300px] relative overflow-hidden">
                    <div className="relative flex flex-col items-center">
                        {/* Head */}
                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className={`w-16 h-16 rounded-t-xl border-2 border-[var(--card-border)] flex items-center justify-center mb-1 z-10 ${currentConfig.color}`}
                        >
                            <Bot size={32} className="text-ink" />
                        </motion.div>

                        {/* Body */}
                        <div className="relative flex items-center justify-center">
                            {/* Wings (Flying Only) */}
                            {currentConfig.wings && (
                                <motion.div
                                    initial={{ scale: 0, x: -20 }} animate={{ scale: 1, x: 0 }}
                                    className="absolute -left-12 text-sky-500"
                                >
                                    <Rocket size={40} className="rotate-[-45deg]" />
                                </motion.div>
                            )}
                            {currentConfig.wings && (
                                <motion.div
                                    initial={{ scale: 0, x: 20 }} animate={{ scale: 1, x: 0 }}
                                    className="absolute -right-12 text-sky-500"
                                >
                                    <Rocket size={40} className="rotate-[45deg]" />
                                </motion.div>
                            )}

                            <motion.div
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                className={`w-24 h-32 rounded-lg border-2 border-[var(--card-border)] flex items-center justify-center z-10 ${currentConfig.color}`}
                            >
                                <div className="w-16 h-20 border-2 border-[var(--card-border)]/10 rounded bg-[var(--card-bg)]/50" />
                            </motion.div>

                            {/* Weapon (Warrior Only) */}
                            {currentConfig.weapon && (
                                <motion.div
                                    initial={{ scale: 0, x: 20 }} animate={{ scale: 1, x: 0 }}
                                    className="absolute -right-10 top-4 text-red-600 bg-[var(--card-bg)] p-1 rounded-full border-2 border-[var(--card-border)] shadow-sm"
                                >
                                    <Zap size={24} fill="currentColor" />
                                </motion.div>
                            )}
                        </div>

                        {/* Legs */}
                        <div className="flex gap-2 mt-1">
                            <motion.div
                                initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                                className={`w-8 h-20 rounded-b-lg border-2 border-[var(--card-border)] ${currentConfig.color}`}
                            />
                            <motion.div
                                initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                                className={`w-8 h-20 rounded-b-lg border-2 border-[var(--card-border)] ${currentConfig.color}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
