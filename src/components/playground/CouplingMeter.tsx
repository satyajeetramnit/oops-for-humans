'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Unlink, Layers, Box } from 'lucide-react';

export default function CouplingMeter() {
    const [coupling, setCoupling] = useState<'High' | 'Low'>('High');

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Design Principles (Coupling & Cohesion)</h3>

            <div className="flex gap-4 mb-8">
                <button
                    onClick={() => setCoupling('High')}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${coupling === 'High' ? 'bg-red-100 text-red-800 border-2 border-red-500' : 'bg-[var(--card-bg)] border-2 border-gray-300'
                        }`}
                >
                    <Link size={18} />
                    High Coupling (Bad)
                </button>
                <button
                    onClick={() => setCoupling('Low')}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${coupling === 'Low' ? 'bg-green-100 text-green-800 border-2 border-green-500' : 'bg-[var(--card-bg)] border-2 border-gray-300'
                        }`}
                >
                    <Unlink size={18} />
                    Low Coupling (Good)
                </button>
            </div>

            <div className="relative h-64 bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                {/* Module A */}
                <motion.div
                    animate={coupling === 'High' ? { x: 20, rotate: 5 } : { x: -80, rotate: 0 }}
                    className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg flex flex-col items-center justify-center text-white font-bold z-10"
                >
                    <Box size={32} />
                    <span>Module A</span>
                </motion.div>

                {/* Module B */}
                <motion.div
                    animate={coupling === 'High' ? { x: -20, rotate: -5 } : { x: 80, rotate: 0 }}
                    className="w-32 h-32 bg-purple-500 rounded-lg shadow-lg flex flex-col items-center justify-center text-white font-bold z-10"
                >
                    <Layers size={32} />
                    <span>Module B</span>
                </motion.div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {coupling === 'High' ? (
                        // Tangled mess of lines
                        <g className="stroke-red-500 stroke-4 opacity-50">
                            <path d="M150 120 C 180 120, 180 180, 210 180" fill="none" strokeWidth="4" />
                            <path d="M160 130 C 190 100, 190 200, 220 170" fill="none" strokeWidth="4" />
                            <path d="M155 140 C 185 140, 185 160, 215 160" fill="none" strokeWidth="4" />
                            <path d="M165 150 C 195 110, 195 190, 225 150" fill="none" strokeWidth="4" />
                        </g>
                    ) : (
                        // Single clean interface line
                        <g className="stroke-green-500 stroke-2 border-dashed">
                            <line x1="180" y1="150" x2="220" y2="150" strokeDasharray="5,5" />
                        </g>
                    )}
                </svg>

                {/* Status Text */}
                <div className="absolute bottom-4 text-center">
                    {coupling === 'High' ? (
                        <p className="text-red-600 font-bold">Tangled! Changing A breaks B.</p>
                    ) : (
                        <p className="text-green-600 font-bold">Independent! A and B can evolve separately.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
