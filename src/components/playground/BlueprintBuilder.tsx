'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Check, AlertCircle } from 'lucide-react';

type HouseType = 'Modern' | 'Cottage' | 'Castle';

interface HouseBlueprint {
    walls: boolean;
    roof: boolean;
    type: HouseType | null;
}

export default function BlueprintBuilder() {
    const [blueprint, setBlueprint] = useState<HouseBlueprint>({
        walls: true, // Abstract class provides this
        roof: true,  // Abstract class provides this
        type: null,  // Abstract method - MUST be implemented
    });

    const implementType = (type: HouseType) => {
        setBlueprint(prev => ({ ...prev, type }));
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Blueprint Builder (Abstract Classes)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* The Abstract Class (Blueprint) */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-2 border-blue-200">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-blue-900 mb-2 flex items-center gap-2">
                            <PenTool size={16} /> Abstract Class
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2 text-green-700">
                                <Check size={16} /> Walls (Implemented)
                            </li>
                            <li className="flex items-center gap-2 text-green-700">
                                <Check size={16} /> Roof (Implemented)
                            </li>
                            <li className="flex items-center gap-2 text-red-600 font-bold">
                                <AlertCircle size={16} /> Style (Abstract!)
                            </li>
                        </ul>
                        <p className="mt-4 text-xs text-blue-800 italic">
                            "I know I have walls and a roof, but I don't know what I look like yet!"
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">Implement Subclass:</h4>
                        {(['Modern', 'Cottage', 'Castle'] as HouseType[]).map((type) => (
                            <button
                                key={type}
                                onClick={() => implementType(type)}
                                className={`w-full py-2 px-4 rounded border-2 transition-all font-bold flex items-center justify-between ${blueprint.type === type
                                        ? 'bg-ink text-white border-[var(--card-border)] shadow-sketch-sm'
                                        : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                    }`}
                            >
                                <span>{type} House</span>
                                {blueprint.type === type && <Check size={16} />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 bg-paper border-2 border-dashed border-gray-300 rounded min-h-[300px] flex items-center justify-center relative overflow-hidden">

                    <div className="relative flex flex-col items-center">
                        {/* Roof */}
                        <motion.div
                            animate={{
                                borderBottomColor: blueprint.type === 'Modern' ? '#3b82f6' : blueprint.type === 'Cottage' ? '#eab308' : blueprint.type === 'Castle' ? '#64748b' : '#cbd5e1',
                                scale: blueprint.type ? 1 : 0.9,
                            }}
                            className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[60px] transition-colors duration-500"
                            style={{ borderBottomColor: '#cbd5e1' }} // Default gray
                        />

                        {/* Walls */}
                        <motion.div
                            animate={{
                                backgroundColor: blueprint.type === 'Modern' ? '#eff6ff' : blueprint.type === 'Cottage' ? '#fefce8' : blueprint.type === 'Castle' ? '#f1f5f9' : '#f8fafc',
                                borderColor: blueprint.type ? '#000' : '#cbd5e1',
                            }}
                            className="w-24 h-24 border-4 border-gray-300 bg-gray-50 dark:bg-slate-800/50 flex items-center justify-center transition-colors duration-500"
                        >
                            {!blueprint.type ? (
                                <span className="text-4xl opacity-20">?</span>
                            ) : (
                                <div className="text-center">
                                    <div className="font-bold text-xs uppercase tracking-widest mb-1">{blueprint.type}</div>
                                    <div className="w-8 h-12 bg-black/10 mx-auto rounded-t-full border-2 border-[var(--card-border)]/20" />
                                </div>
                            )}
                        </motion.div>

                        {/* Castle Turrets (Conditional) */}
                        {blueprint.type === 'Castle' && (
                            <>
                                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute -left-8 bottom-0 w-8 h-32 bg-gray-300 border-2 border-[var(--card-border)] z-[-1]" />
                                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute -right-8 bottom-0 w-8 h-32 bg-gray-300 border-2 border-[var(--card-border)] z-[-1]" />
                            </>
                        )}
                    </div>

                    {!blueprint.type && (
                        <div className="absolute bottom-4 text-gray-400 text-sm italic">
                            Incomplete Blueprint. Cannot instantiate.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
