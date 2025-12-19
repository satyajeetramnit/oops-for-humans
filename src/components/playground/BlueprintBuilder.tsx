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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Blueprint Builder (Abstract Classes)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* The Abstract Class (Blueprint) */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="bg-accent-blue/10 p-4 rounded border-2 border-accent-blue/20">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-accent-blue mb-2 flex items-center gap-2">
                            <PenTool size={16} /> Abstract Class
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2 text-green-600">
                                <Check size={16} /> Walls (Implemented)
                            </li>
                            <li className="flex items-center gap-2 text-green-600">
                                <Check size={16} /> Roof (Implemented)
                            </li>
                            <li className="flex items-center gap-2 text-red-500 font-bold">
                                <AlertCircle size={16} /> Style (Abstract!)
                            </li>
                        </ul>
                        <p className="mt-4 text-xs text-accent-blue/80 italic">
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
                                    ? 'bg-ink text-paper border-border-base shadow-sketch-sm'
                                    : 'bg-paper text-pencil border-border-base/20 hover:bg-pencil/5'
                                    }`}
                            >
                                <span>{type} House</span>
                                {blueprint.type === type && <Check size={16} />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 bg-paper border-2 border-dashed border-border-base/30 rounded min-h-[300px] flex items-center justify-center relative overflow-hidden">

                    <div className="relative flex flex-col items-center">
                        {/* Roof */}
                        <motion.div
                            animate={{
                                borderBottomColor: blueprint.type === 'Modern' ? '#3b82f6' : blueprint.type === 'Cottage' ? '#eab308' : blueprint.type === 'Castle' ? '#64748b' : 'var(--border-base)',
                                scale: blueprint.type ? 1 : 0.9,
                            }}
                            className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[60px] transition-colors duration-500"
                            style={{ borderBottomColor: 'var(--border-base)' }} // Default theme border
                        />

                        {/* Walls */}
                        <motion.div
                            animate={{
                                backgroundColor: blueprint.type === 'Modern' ? '#eff6ff' : blueprint.type === 'Cottage' ? '#fefce8' : blueprint.type === 'Castle' ? '#f1f5f9' : 'transparent',
                                borderColor: blueprint.type ? 'var(--ink)' : 'var(--border-base)',
                            }}
                            className="w-24 h-24 border-4 border-border-base/30 bg-pencil/5 flex items-center justify-center transition-colors duration-500"
                        >
                            {!blueprint.type ? (
                                <span className="text-4xl text-pencil/30 font-bold">?</span>
                            ) : (
                                <div className="text-center">
                                    <div className="font-bold text-xs uppercase tracking-widest mb-1 text-ink">{blueprint.type}</div>
                                    <div className="w-8 h-12 bg-ink/10 mx-auto rounded-t-full border-2 border-border-base/20" />
                                </div>
                            )}
                        </motion.div>

                        {/* Castle Turrets (Conditional) */}
                        {blueprint.type === 'Castle' && (
                            <>
                                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute -left-8 bottom-0 w-8 h-32 bg-pencil/20 border-2 border-border-base z-[-1]" />
                                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute -right-8 bottom-0 w-8 h-32 bg-pencil/20 border-2 border-border-base z-[-1]" />
                            </>
                        )}
                    </div>

                    {!blueprint.type && (
                        <div className="absolute bottom-4 text-pencil/50 text-sm italic">
                            Incomplete Blueprint. Cannot instantiate.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
