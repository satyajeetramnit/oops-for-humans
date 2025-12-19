'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown, AlertTriangle, CheckCircle } from 'lucide-react';

type ShapeType = 'Shape' | 'Circle' | 'Square';

export default function TypeTransformer() {
    const [currentType, setCurrentType] = useState<ShapeType>('Circle');
    const [viewAs, setViewAs] = useState<ShapeType>('Circle');
    const [message, setMessage] = useState<string>('Object created as a Circle.');
    const [status, setStatus] = useState<'success' | 'error'>('success');

    const upcast = () => {
        if (viewAs === 'Shape') {
            setMessage('Already viewed as Shape (Root).');
            return;
        }
        setViewAs('Shape');
        setMessage('Upcasted to Shape. Specific features hidden.');
        setStatus('success');
    };

    const downcast = (target: ShapeType) => {
        if (viewAs === target) {
            setMessage(`Already viewed as ${target}.`);
            return;
        }

        // Check if safe
        if (currentType === target) {
            setViewAs(target);
            setMessage(`Downcasted safely to ${target}. Features restored!`);
            setStatus('success');
        } else {
            setMessage(`ClassCastException! Cannot cast ${currentType} to ${target}.`);
            setStatus('error');
        }
    };

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Type Casting (Transformer)</h3>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* Controls */}
                <div className="flex flex-col gap-4">
                    <div className="p-4 bg-pencil/5 rounded border border-border-base/30">
                        <div className="text-[10px] font-bold text-pencil opacity-50 uppercase mb-2 tracking-widest">Original Object</div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setCurrentType('Circle'); setViewAs('Circle'); setMessage('Created a Circle.'); setStatus('success'); }}
                                className={`px-4 py-2 rounded text-xs font-bold transition-all shadow-sketch-sm ${currentType === 'Circle' ? 'bg-accent-blue text-paper border-border-base' : 'bg-paper text-pencil border-border-base/20 hover:bg-pencil/5'}`}
                            >
                                new Circle()
                            </button>
                            <button
                                onClick={() => { setCurrentType('Square'); setViewAs('Square'); setMessage('Created a Square.'); setStatus('success'); }}
                                className={`px-4 py-2 rounded text-xs font-bold transition-all shadow-sketch-sm ${currentType === 'Square' ? 'bg-accent-red text-paper border-border-base' : 'bg-paper text-pencil border-border-base/20 hover:bg-pencil/5'}`}
                            >
                                new Square()
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button
                            onClick={upcast}
                            className="px-4 py-2 bg-accent-purple/10 text-accent-purple border-2 border-accent-purple/50 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 hover:bg-accent-purple/20 transition-colors"
                        >
                            <ArrowUp size={18} />
                            Upcast to Shape
                        </button>
                        <div className="flex gap-2">
                            <button
                                onClick={() => downcast('Circle')}
                                className="flex-1 px-4 py-2 bg-accent-blue/10 text-accent-blue border-2 border-accent-blue/50 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 hover:bg-accent-blue/20 transition-colors"
                            >
                                <ArrowDown size={18} />
                                To Circle
                            </button>
                            <button
                                onClick={() => downcast('Square')}
                                className="flex-1 px-4 py-2 bg-accent-red/10 text-accent-red border-2 border-accent-red/50 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 hover:bg-accent-red/20 transition-colors"
                            >
                                <ArrowDown size={18} />
                                To Square
                            </button>
                        </div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="flex flex-col items-center w-64">
                    <div className="w-40 h-40 border-4 border-border-base rounded-xl flex items-center justify-center relative bg-pencil/5 overflow-hidden shadow-inner">
                        <AnimatePresence mode="wait">
                            {viewAs === 'Shape' && (
                                <motion.div
                                    key="shape"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="text-pencil opacity-30 font-bold text-2xl italic tracking-tighter"
                                >
                                    ? Shape
                                </motion.div>
                            )}
                            {viewAs === 'Circle' && (
                                <motion.div
                                    key="circle"
                                    initial={{ opacity: 0, borderRadius: '0%' }}
                                    animate={{ opacity: 1, borderRadius: '50%' }}
                                    exit={{ opacity: 0 }}
                                    className="w-24 h-24 bg-accent-blue shadow-lg border-4 border-paper/20"
                                />
                            )}
                            {viewAs === 'Square' && (
                                <motion.div
                                    key="square"
                                    initial={{ opacity: 0, borderRadius: '50%' }}
                                    animate={{ opacity: 1, borderRadius: '0%' }}
                                    exit={{ opacity: 0 }}
                                    className="w-24 h-24 bg-accent-red shadow-lg border-4 border-paper/20"
                                />
                            )}
                        </AnimatePresence>

                        <div className="absolute top-2 left-2 text-[10px] font-mono bg-ink text-paper px-2 py-0.5 rounded shadow-sm font-bold uppercase tracking-widest">
                            View: {viewAs}
                        </div>
                    </div>

                    <div className={`mt-4 p-3 rounded w-full text-xs font-bold flex items-center gap-2 shadow-sm ${status === 'success' ? 'bg-accent-green/10 text-accent-green border border-accent-green/20' : 'bg-accent-red/10 text-accent-red border border-accent-red/20'
                        }`}>
                        {status === 'success' ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
}
