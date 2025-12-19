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
            color: 'bg-accent-red/10 border-accent-red/40 text-accent-red',
            icon: <Circle size={48} />,
            action: 'Rolling...',
            sound: 'Whoosh!',
        },
        Square: {
            color: 'bg-accent-green/10 border-accent-green/40 text-accent-green',
            icon: <Square size={48} />,
            action: 'Sliding...',
            sound: 'Scrape!',
        },
        Triangle: {
            color: 'bg-accent-purple/10 border-accent-purple/40 text-accent-purple',
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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Shape Shifter (Polymorphism)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="space-y-4">
                        <h4 className="font-bold text-[10px] uppercase tracking-widest text-pencil">Morph Into</h4>
                        <div className="flex gap-2">
                            {(['Circle', 'Square', 'Triangle'] as ShapeType[]).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => {
                                        setCurrentShape(type);
                                        setActionLog([]);
                                    }}
                                    className={`flex-1 py-3 rounded-xl border-2 transition-all flex justify-center items-center ${currentShape === type
                                        ? 'bg-ink text-paper border-border-base shadow-sketch-sm'
                                        : 'bg-paper border-border-base/20 hover:bg-pencil/5'
                                        }`}
                                >
                                    {type === 'Circle' && <Circle size={24} />}
                                    {type === 'Square' && <Square size={24} />}
                                    {type === 'Triangle' && <Triangle size={24} />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-accent-blue/5 border-2 border-accent-blue/20 rounded-xl text-xs text-ink leading-relaxed shadow-inner">
                        <strong className="text-accent-blue uppercase tracking-widest text-[10px] block mb-1">Polymorphism Logic</strong>
                        <p className="opacity-90">
                            The <code>performAction()</code> method behaves differently depending on the current shape form.
                        </p>
                    </div>

                    <button
                        onClick={performAction}
                        className="w-full bg-accent-blue text-paper font-bold py-3 px-4 rounded-xl border-2 border-accent-blue/50 shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs hover:bg-accent-blue/90"
                    >
                        <Play size={20} fill="currentColor" />
                        Call performAction()
                    </button>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 flex flex-col items-center justify-center bg-pencil/5 border-2 border-dashed border-border-base/30 rounded-2xl min-h-[350px] relative overflow-hidden p-8 shadow-inner">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentShape}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className={`w-32 h-32 flex items-center justify-center border-4 shadow-sketch rounded-2xl ${shapes[currentShape].color}`}
                        >
                            {shapes[currentShape].icon}
                        </motion.div>
                    </AnimatePresence>

                    {/* Console Log */}
                    <div className="w-full mt-8 font-mono text-xs bg-slate-950 text-accent-green p-4 rounded-xl border-2 border-border-base shadow-lg min-h-[120px]">
                        <div className="border-b border-white/10 pb-1 mb-2 text-white/30 uppercase tracking-widest text-[10px]">Inheritance Console</div>
                        {actionLog.length === 0 ? (
                            <span className="text-white/20 italic opacity-50">Waiting for action...</span>
                        ) : (
                            actionLog.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mb-1 flex items-start gap-2"
                                >
                                    <span className="text-accent-blue opacity-50">➜</span> {log}
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
