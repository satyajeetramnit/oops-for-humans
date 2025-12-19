'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Type, Apple, Hash, AlertTriangle } from 'lucide-react';

type BoxType = 'String' | 'Integer' | 'Fruit';

export default function MagicBox() {
    const [boxType, setBoxType] = useState<BoxType>('String');
    const [content, setContent] = useState<React.ReactNode | null>(null);
    const [error, setError] = useState('');

    const items = [
        { type: 'String', label: '"Hello"', icon: <Type size={20} />, value: "Hello" },
        { type: 'Integer', label: '42', icon: <Hash size={20} />, value: 42 },
        { type: 'Fruit', label: 'Apple', icon: <Apple size={20} />, value: 'Apple' },
    ];

    const putInBox = (item: typeof items[0]) => {
        if (item.type !== boxType) {
            setError(`Type Error! Cannot put ${item.type} in Box<${boxType}>`);
            setTimeout(() => setError(''), 2000);
            return;
        }
        setContent(
            <div className="flex flex-col items-center gap-1">
                {item.icon}
                <span className="font-bold">{item.label}</span>
            </div>
        );
        setError('');
    };

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Magic Box (Generics)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="space-y-2">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">1. Define Box Type &lt;T&gt;</h4>
                        <div className="flex gap-2">
                            {(['String', 'Integer', 'Fruit'] as BoxType[]).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => { setBoxType(type); setContent(null); setError(''); }}
                                    className={`px-3 py-2 rounded border-2 font-bold text-sm flex-1 transition-all ${boxType === type
                                        ? 'bg-purple-600 text-paper border-border-base shadow-sketch-sm'
                                        : 'bg-paper text-pencil border-border-base/20 hover:bg-pencil/5'
                                        }`}
                                >
                                    &lt;{type}&gt;
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">2. Try to Insert Item</h4>
                        <div className="grid grid-cols-1 gap-2">
                            {items.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => putInBox(item)}
                                    className="w-full py-2 px-4 rounded border-2 bg-paper text-ink border-border-base/20 hover:bg-pencil/5 hover:border-border-base/40 flex items-center gap-3 font-bold transition-all active:scale-95"
                                >
                                    <span className="text-pencil">{item.icon}</span>
                                    <span>{item.label}</span>
                                    <span className="text-xs text-pencil/50 ml-auto uppercase tracking-tighter">({item.type})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 bg-paper border-2 border-dashed border-border-base/30 rounded min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">

                    {/* The Box */}
                    <div className="relative">
                        <div className="w-40 h-40 border-4 border-border-base bg-purple-500/10 rounded-xl flex items-center justify-center shadow-sketch relative z-10">
                            <AnimatePresence mode="wait">
                                {content ? (
                                    <motion.div
                                        key="content"
                                        initial={{ scale: 0, rotate: 180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        exit={{ scale: 0 }}
                                        className="text-purple-600 font-bold"
                                    >
                                        {content}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-purple-300 opacity-50"
                                    >
                                        <Box size={48} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Label */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-ink text-paper px-3 py-1 rounded font-mono text-sm font-bold whitespace-nowrap shadow-lg">
                            Box&lt;{boxType}&gt;
                        </div>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                className="absolute bottom-4 bg-red-500/10 border-2 border-red-500 text-red-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg backdrop-blur-sm"
                            >
                                <AlertTriangle size={20} />
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
