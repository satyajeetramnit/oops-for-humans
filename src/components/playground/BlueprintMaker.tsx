'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, User, Box, Activity } from 'lucide-react';

type DiagramType = 'Class' | 'Sequence' | 'UseCase';

export default function BlueprintMaker() {
    const [activeDiagram, setActiveDiagram] = useState<DiagramType>('Class');

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">UML Blueprint Maker</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="flex flex-col gap-2 w-full md:w-48">
                    <button
                        onClick={() => setActiveDiagram('Class')}
                        className={`p-3 rounded font-bold text-left flex items-center gap-2 transition-colors ${activeDiagram === 'Class' ? 'bg-accent-blue/20 text-accent-blue border-2 border-accent-blue/50' : 'bg-pencil/5 text-pencil hover:bg-pencil/10'}`}
                    >
                        <Box size={18} /> Class Diagram
                    </button>
                    <button
                        onClick={() => setActiveDiagram('Sequence')}
                        className={`p-3 rounded font-bold text-left flex items-center gap-2 transition-colors ${activeDiagram === 'Sequence' ? 'bg-purple-500/20 text-purple-600 border-2 border-purple-500/50' : 'bg-pencil/5 text-pencil hover:bg-pencil/10'}`}
                    >
                        <Activity size={18} /> Sequence Diagram
                    </button>
                    <button
                        onClick={() => setActiveDiagram('UseCase')}
                        className={`p-3 rounded font-bold text-left flex items-center gap-2 transition-colors ${activeDiagram === 'UseCase' ? 'bg-green-500/20 text-green-600 border-2 border-green-500/50' : 'bg-pencil/5 text-pencil hover:bg-pencil/10'}`}
                    >
                        <User size={18} /> Use Case Diagram
                    </button>
                </div>

                {/* Canvas */}
                <div className="flex-1 bg-pencil/5 border-2 border-dashed border-border-base/30 rounded-lg p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden">
                    {activeDiagram === 'Class' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="bg-paper border-2 border-border-base shadow-sketch p-0 w-48">
                                <div className="bg-accent-blue/10 p-2 border-b-2 border-border-base font-bold text-center text-ink">Car</div>
                                <div className="p-2 border-b-2 border-border-base text-xs font-mono text-pencil">
                                    - speed: int<br />
                                    - color: String
                                </div>
                                <div className="p-2 text-xs font-mono text-pencil">
                                    + drive(): void<br />
                                    + stop(): void
                                </div>
                            </div>
                            <ArrowRight className="rotate-90 text-pencil/40" size={32} />
                            <div className="bg-paper border-2 border-border-base shadow-sketch p-0 w-48">
                                <div className="bg-accent-yellow/10 p-2 border-b-2 border-border-base font-bold text-center text-ink">Engine</div>
                                <div className="p-2 border-b-2 border-border-base text-xs font-mono text-pencil">
                                    - horsepower: int
                                </div>
                                <div className="p-2 text-xs font-mono text-pencil">
                                    + start(): void
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 text-xs bg-accent-blue text-paper px-2 py-1 rounded font-bold">Shows Structure</div>
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
                                    <User size={32} className="text-ink" />
                                    <div className="font-bold text-sm text-ink">User</div>
                                    <div className="w-0.5 h-48 bg-border-base/30 mt-2 relative"></div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 bg-ink rounded"></div>
                                    <div className="font-bold text-sm text-ink">System</div>
                                    <div className="w-0.5 h-48 bg-border-base/30 mt-2 relative"></div>
                                </div>
                            </div>

                            <div className="absolute top-24 left-12 right-12">
                                <div className="relative h-8">
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-ink"></div>
                                    <ArrowRight className="absolute -top-2.5 right-0 text-ink" size={16} />
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-mono text-pencil">login()</div>
                                </div>
                                <div className="relative h-8 mt-8">
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-ink border-dashed"></div>
                                    <ArrowRight className="absolute -top-2.5 left-0 rotate-180 text-ink" size={16} />
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-mono text-pencil">success</div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 text-xs bg-purple-500 text-paper px-2 py-1 rounded font-bold">Shows Interactions</div>
                        </motion.div>
                    )}

                    {activeDiagram === 'UseCase' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-8"
                        >
                            <div className="flex flex-col items-center">
                                <User size={48} className="text-ink" />
                                <div className="font-bold text-ink">Customer</div>
                            </div>

                            <div className="border-2 border-border-base rounded-3xl p-8 relative w-64 h-64 flex flex-col items-center justify-center gap-4 bg-paper shadow-sketch">
                                <div className="absolute -top-3 left-4 bg-paper border border-border-base/20 px-2 font-bold text-sm text-pencil">ATM System</div>

                                <div className="border border-border-base rounded-full px-4 py-2 bg-paper shadow-sm text-sm text-ink font-bold">Withdraw Cash</div>
                                <div className="border border-border-base rounded-full px-4 py-2 bg-paper shadow-sm text-sm text-ink font-bold">Check Balance</div>

                                <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-30">
                                    <line x1="-30" y1="128" x2="40" y2="100" stroke="currentColor" strokeWidth="2" className="text-ink" />
                                    <line x1="-30" y1="128" x2="40" y2="150" stroke="currentColor" strokeWidth="2" className="text-ink" />
                                </svg>
                            </div>
                            <div className="absolute top-4 right-4 text-xs bg-green-600 text-paper px-2 py-1 rounded font-bold">Shows Functionality</div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
