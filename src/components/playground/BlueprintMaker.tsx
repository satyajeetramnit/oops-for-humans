'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, User, Box, Activity } from 'lucide-react';

type DiagramType = 'Class' | 'Sequence' | 'UseCase';

export default function BlueprintMaker() {
    const [activeDiagram, setActiveDiagram] = useState<DiagramType>('Class');

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">UML Blueprint Maker</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="flex flex-col gap-2 w-full md:w-48">
                    <button
                        onClick={() => setActiveDiagram('Class')}
                        className={`p-3 rounded font-bold text-left flex items-center gap-2 ${activeDiagram === 'Class' ? 'bg-blue-100 text-blue-800 border-2 border-blue-500' : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:!bg-slate-600'}`}
                    >
                        <Box size={18} /> Class Diagram
                    </button>
                    <button
                        onClick={() => setActiveDiagram('Sequence')}
                        className={`p-3 rounded font-bold text-left flex items-center gap-2 ${activeDiagram === 'Sequence' ? 'bg-purple-100 text-purple-800 border-2 border-purple-500' : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:!bg-slate-600'}`}
                    >
                        <Activity size={18} /> Sequence Diagram
                    </button>
                    <button
                        onClick={() => setActiveDiagram('UseCase')}
                        className={`p-3 rounded font-bold text-left flex items-center gap-2 ${activeDiagram === 'UseCase' ? 'bg-green-100 text-green-800 border-2 border-green-500' : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:!bg-slate-600'}`}
                    >
                        <User size={18} /> Use Case Diagram
                    </button>
                </div>

                {/* Canvas */}
                <div className="flex-1 bg-gray-50 dark:bg-slate-800/50 border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden">
                    {activeDiagram === 'Class' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch p-0 w-48">
                                <div className="bg-blue-100 p-2 border-b-2 border-[var(--card-border)] font-bold text-center">Car</div>
                                <div className="p-2 border-b-2 border-[var(--card-border)] text-xs font-mono">
                                    - speed: int<br />
                                    - color: String
                                </div>
                                <div className="p-2 text-xs font-mono">
                                    + drive(): void<br />
                                    + stop(): void
                                </div>
                            </div>
                            <ArrowRight className="rotate-90 text-gray-400" size={32} />
                            <div className="bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch p-0 w-48">
                                <div className="bg-yellow-100 p-2 border-b-2 border-[var(--card-border)] font-bold text-center">Engine</div>
                                <div className="p-2 border-b-2 border-[var(--card-border)] text-xs font-mono">
                                    - horsepower: int
                                </div>
                                <div className="p-2 text-xs font-mono">
                                    + start(): void
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 text-xs bg-blue-500 text-white px-2 py-1 rounded">Shows Structure</div>
                        </motion.div>
                    )}

                    {activeDiagram === 'Sequence' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full max-w-md"
                        >
                            <div className="flex justify-between mb-4">
                                <div className="flex flex-col items-center">
                                    <User size={32} />
                                    <div className="font-bold text-sm">User</div>
                                    <div className="w-0.5 h-48 bg-gray-300 mt-2 relative"></div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 bg-black rounded"></div>
                                    <div className="font-bold text-sm">System</div>
                                    <div className="w-0.5 h-48 bg-gray-300 mt-2 relative"></div>
                                </div>
                            </div>

                            <div className="absolute top-24 left-12 right-12">
                                <div className="relative h-8">
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-black"></div>
                                    <ArrowRight className="absolute -top-2.5 right-0" size={16} />
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-mono">login()</div>
                                </div>
                                <div className="relative h-8 mt-8">
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-black border-dashed"></div>
                                    <ArrowRight className="absolute -top-2.5 left-0 rotate-180" size={16} />
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-mono">success</div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 text-xs bg-purple-500 text-white px-2 py-1 rounded">Shows Interactions</div>
                        </motion.div>
                    )}

                    {activeDiagram === 'UseCase' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-8"
                        >
                            <div className="flex flex-col items-center">
                                <User size={48} />
                                <div className="font-bold">Customer</div>
                            </div>

                            <div className="border-2 border-[var(--card-border)] rounded-3xl p-8 relative w-64 h-64 flex flex-col items-center justify-center gap-4">
                                <div className="absolute -top-3 left-4 bg-[var(--card-bg)] px-2 font-bold text-sm">ATM System</div>

                                <div className="border border-[var(--card-border)] rounded-full px-4 py-2 bg-[var(--card-bg)] shadow-sm text-sm">Withdraw Cash</div>
                                <div className="border border-[var(--card-border)] rounded-full px-4 py-2 bg-[var(--card-bg)] shadow-sm text-sm">Check Balance</div>

                                <svg className="absolute inset-0 pointer-events-none">
                                    <line x1="-30" y1="128" x2="40" y2="100" stroke="black" strokeWidth="1" />
                                    <line x1="-30" y1="128" x2="40" y2="150" stroke="black" strokeWidth="1" />
                                </svg>
                            </div>
                            <div className="absolute top-4 right-4 text-xs bg-green-500 text-white px-2 py-1 rounded">Shows Functionality</div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
