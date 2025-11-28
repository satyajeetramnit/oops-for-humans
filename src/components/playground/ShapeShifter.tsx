'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Square, Circle, Triangle, Play } from 'lucide-react';

type ShapeType = 'Circle' | 'Square' | 'Triangle';

export default function ShapeShifter() {
    const [currentShape, setCurrentShape] = useState<ShapeType>('Circle');
    const [actionLog, setActionLog] = useState<string[]>([]);

    const shapes = {
        Circle: {
            color: 'bg-rose-100 border-rose-400 text-rose-600',
            icon: <Circle size={48} />,
            action: 'Rolling...',
            sound: 'Whoosh!',
        },
        Square: {
            color: 'bg-emerald-100 border-emerald-400 text-emerald-600',
            icon: <Square size={48} />,
            action: 'Sliding...',
            sound: 'Scrape!',
        },
        Triangle: {
            color: 'bg-violet-100 border-violet-400 text-violet-600',
            icon: <Triangle size={48} />,
            action: 'Spinning...',
            sound: 'Zip!',
        },
    };

    const performAction = () => {
        const shape = shapes[currentShape];
        const log = `[${currentShape}] ${shape.action} (${shape.sound})`;
        setActionLog((prev) => [log, ...prev].slice(0, 3));
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Shape Shifter (Polymorphism)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="space-y-2">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">Morph Into</h4>
                        <div className="flex gap-2">
                            {(['Circle', 'Square', 'Triangle'] as ShapeType[]).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => {
                                        setCurrentShape(type);
                                        setActionLog([]);
                                    }}
                                    className={`flex-1 py-2 rounded border-2 transition-all flex justify-center ${currentShape === type
                                            ? 'bg-ink text-white border-[var(--card-border)] shadow-sketch-sm'
                                            : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                        }`}
                                >
                                    {type === 'Circle' && <Circle size={20} />}
                                    {type === 'Square' && <Square size={20} />}
                                    {type === 'Triangle' && <Triangle size={20} />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-purple-50 border-2 border-purple-200 rounded text-sm text-purple-900">
                        <strong>Polymorphism Logic:</strong>
                        <p className="mt-1">
                            The <code>performAction()</code> method behaves differently depending on the current shape form.
                        </p>
                    </div>

                    <button
                        onClick={performAction}
                        className="w-full bg-purple-500 text-white font-bold py-3 px-4 rounded border-2 border-[var(--card-border)] shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2"
                    >
                        <Play size={20} fill="currentColor" />
                        Call performAction()
                    </button>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 flex flex-col items-center justify-center bg-paper border-2 border-dashed border-gray-300 rounded min-h-[300px] relative overflow-hidden p-8">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentShape}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className={`w-32 h-32 flex items-center justify-center border-4 shadow-sketch rounded-xl ${shapes[currentShape].color}`}
                        >
                            {shapes[currentShape].icon}
                        </motion.div>
                    </AnimatePresence>

                    {/* Console Log */}
                    <div className="w-full mt-8 font-mono text-xs bg-black text-green-400 p-4 rounded border-2 border-gray-500 shadow-inner min-h-[100px]">
                        <div className="border-b border-gray-700 pb-1 mb-2 text-gray-500 uppercase tracking-widest text-[10px]">Console Output</div>
                        {actionLog.length === 0 ? (
                            <span className="text-gray-600 opacity-50">Waiting for action...</span>
                        ) : (
                            actionLog.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mb-1"
                                >
                                    <span className="text-blue-400">➜</span> {log}
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
