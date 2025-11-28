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
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Type Casting (Transformer)</h3>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* Controls */}
                <div className="flex flex-col gap-4">
                    <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded border border-gray-300">
                        <div className="text-xs font-bold text-gray-500 uppercase mb-2">Original Object</div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setCurrentType('Circle'); setViewAs('Circle'); setMessage('Created a Circle.'); setStatus('success'); }}
                                className={`px-3 py-1 rounded text-sm font-bold ${currentType === 'Circle' ? 'bg-blue-500 text-white' : 'bg-[var(--card-bg)] border'}`}
                            >
                                New Circle()
                            </button>
                            <button
                                onClick={() => { setCurrentType('Square'); setViewAs('Square'); setMessage('Created a Square.'); setStatus('success'); }}
                                className={`px-3 py-1 rounded text-sm font-bold ${currentType === 'Square' ? 'bg-red-500 text-white' : 'bg-[var(--card-bg)] border'}`}
                            >
                                New Square()
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button
                            onClick={upcast}
                            className="px-4 py-2 bg-purple-100 text-purple-800 border-2 border-purple-500 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2"
                        >
                            <ArrowUp size={18} />
                            Upcast to Shape
                        </button>
                        <div className="flex gap-2">
                            <button
                                onClick={() => downcast('Circle')}
                                className="flex-1 px-4 py-2 bg-blue-100 text-blue-800 border-2 border-blue-500 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2"
                            >
                                <ArrowDown size={18} />
                                To Circle
                            </button>
                            <button
                                onClick={() => downcast('Square')}
                                className="flex-1 px-4 py-2 bg-red-100 text-red-800 border-2 border-red-500 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2"
                            >
                                <ArrowDown size={18} />
                                To Square
                            </button>
                        </div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="flex flex-col items-center w-64">
                    <div className="w-40 h-40 border-4 border-[var(--card-border)] rounded-xl flex items-center justify-center relative bg-gray-50 dark:bg-slate-800/50 overflow-hidden">
                        <AnimatePresence mode="wait">
                            {viewAs === 'Shape' && (
                                <motion.div
                                    key="shape"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="text-gray-400 font-bold text-2xl"
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
                                    className="w-24 h-24 bg-blue-500"
                                />
                            )}
                            {viewAs === 'Square' && (
                                <motion.div
                                    key="square"
                                    initial={{ opacity: 0, borderRadius: '50%' }}
                                    animate={{ opacity: 1, borderRadius: '0%' }}
                                    exit={{ opacity: 0 }}
                                    className="w-24 h-24 bg-red-500"
                                />
                            )}
                        </AnimatePresence>

                        <div className="absolute top-2 left-2 text-xs font-mono bg-black text-white px-1 rounded">
                            Type: {viewAs}
                        </div>
                    </div>

                    <div className={`mt-4 p-3 rounded w-full text-sm font-bold flex items-center gap-2 ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {status === 'success' ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
}
