'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Briefcase, Home, Key, Car, Cog } from 'lucide-react';

type RelationshipType = 'Association' | 'Aggregation' | 'Composition';

export default function RelationshipGraph() {
    const [activeType, setActiveType] = useState<RelationshipType>('Association');

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg transition-colors duration-200">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Class Relationships</h3>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b-2 border-border-base/10">
                {(['Association', 'Aggregation', 'Composition'] as RelationshipType[]).map((type) => (
                    <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`px-4 py-2 font-bold border-b-4 transition-all ${activeType === type
                            ? 'border-accent-blue text-accent-blue'
                            : 'border-transparent text-pencil hover:text-ink hover:bg-pencil/5'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="min-h-[300px] flex flex-col items-center justify-center p-4">
                <AnimatePresence mode="wait">
                    {activeType === 'Association' && (
                        <motion.div
                            key="association"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="text-center max-w-md">
                                <h4 className="font-bold text-lg text-accent-blue">Association ("Uses-A")</h4>
                                <p className="text-sm text-pencil">Two independent objects interacting. No ownership.</p>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center border-4 border-accent-blue shadow-lg">
                                        <User size={40} className="text-accent-blue" />
                                    </div>
                                    <span className="font-bold mt-3 text-ink text-sm">Doctor</span>
                                </div>

                                <div className="flex flex-col items-center text-pencil">
                                    <span className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">Treats →</span>
                                    <div className="w-32 h-1 bg-border-base/30 relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-border-base/30 rotate-45" />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center border-4 border-accent-green shadow-lg">
                                        <User size={40} className="text-accent-green" />
                                    </div>
                                    <span className="font-bold mt-3 text-ink text-sm">Patient</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-pencil uppercase font-bold tracking-widest bg-pencil/5 px-6 py-2 rounded-full border border-border-base/10 shadow-sm text-center max-w-xs leading-relaxed">
                                If the Doctor leaves, the Patient still exists (and vice versa).
                            </p>
                        </motion.div>
                    )}

                    {activeType === 'Aggregation' && (
                        <motion.div
                            key="aggregation"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="text-center max-w-md">
                                <h4 className="font-bold text-lg text-accent-yellow">Aggregation ("Has-A")</h4>
                                <p className="text-sm text-pencil">Weak ownership. Child can exist without Parent.</p>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 bg-accent-yellow/10 rounded-xl flex items-center justify-center border-4 border-accent-yellow shadow-lg">
                                        <Briefcase size={48} className="text-accent-yellow" />
                                    </div>
                                    <span className="font-bold mt-3 text-ink text-sm">Department</span>
                                </div>

                                <div className="flex flex-col items-center text-pencil">
                                    <span className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">Contains ◇</span>
                                    <div className="w-32 h-1 bg-border-base/30 relative">
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-border-base/50 bg-paper rotate-45" />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center border-4 border-accent-blue shadow-lg">
                                        <User size={40} className="text-accent-blue" />
                                    </div>
                                    <span className="font-bold mt-3 text-ink text-sm">Teacher</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-pencil uppercase font-bold tracking-widest bg-pencil/5 px-6 py-2 rounded-full border border-border-base/10 shadow-sm text-center max-w-xs leading-relaxed">
                                If the Department closes, the Teacher still exists (can join another dept).
                            </p>
                        </motion.div>
                    )}

                    {activeType === 'Composition' && (
                        <motion.div
                            key="composition"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="text-center max-w-md">
                                <h4 className="font-bold text-lg text-accent-red">Composition ("Part-Of")</h4>
                                <p className="text-sm text-pencil">Strong ownership. Child CANNOT exist without Parent.</p>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 bg-accent-red/10 rounded-xl flex items-center justify-center border-4 border-accent-red shadow-lg">
                                        <Home size={48} className="text-accent-red" />
                                    </div>
                                    <span className="font-bold mt-3 text-ink text-sm">House</span>
                                </div>

                                <div className="flex flex-col items-center text-pencil">
                                    <span className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">Owns ◆</span>
                                    <div className="w-32 h-1 bg-border-base/30 relative">
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-ink rotate-45" />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 bg-paper rounded-xl flex items-center justify-center border-4 border-border-base shadow-lg">
                                        <Key size={40} className="text-pencil" />
                                    </div>
                                    <span className="font-bold mt-3 text-ink text-sm">Room</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-pencil uppercase font-bold tracking-widest bg-pencil/5 px-6 py-2 rounded-full border border-border-base/10 shadow-sm text-center max-w-xs leading-relaxed">
                                If the House is destroyed, the Room is destroyed too.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
