'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

type Shape = 'Circle' | 'Star' | 'Heart';
type Flavor = 'Choc Chip' | 'Sugar' | 'Gingerbread';

interface Cookie {
    id: number;
    shape: Shape;
    flavor: Flavor;
}

export default function CookieFactory() {
    const [shape, setShape] = useState<Shape>('Circle');
    const [flavor, setFlavor] = useState<Flavor>('Choc Chip');
    const [cookies, setCookies] = useState<Cookie[]>([]);

    const instantiateCookie = () => {
        const newCookie: Cookie = {
            id: Date.now(),
            shape,
            flavor,
        };
        setCookies((prev) => [...prev, newCookie]);
    };

    const clearCookies = () => setCookies([]);

    const getCookieColor = (f: Flavor) => {
        switch (f) {
            case 'Choc Chip': return 'bg-amber-200 border-amber-800 text-amber-900';
            case 'Sugar': return 'bg-pink-100 border-pink-400 text-pink-900';
            case 'Gingerbread': return 'bg-amber-700 border-amber-900 text-white';
        }
    };

    const getCookieShape = (s: Shape) => {
        switch (s) {
            case 'Circle': return 'rounded-full';
            case 'Star': return 'clip-path-star'; // Need custom clip path or SVG
            case 'Heart': return 'clip-path-heart';
        }
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">The Cookie Factory (Class vs Object)</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* The Class (Blueprint) */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-2 border-dashed border-blue-300">
                    <h4 className="font-bold text-blue-800 mb-4 uppercase tracking-wider text-sm">The Blueprint (Class)</h4>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold mb-1">Shape</label>
                            <div className="flex gap-2">
                                {(['Circle', 'Star', 'Heart'] as Shape[]).map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setShape(s)}
                                        className={`px-3 py-1 rounded border-2 transition-all ${shape === s ? 'bg-blue-500 text-white border-[var(--card-border)] shadow-sketch-sm' : 'bg-[var(--card-bg)] border-gray-300'
                                            }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-1">Flavor</label>
                            <div className="flex gap-2">
                                {(['Choc Chip', 'Sugar', 'Gingerbread'] as Flavor[]).map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFlavor(f)}
                                        className={`px-3 py-1 rounded border-2 transition-all ${flavor === f ? 'bg-blue-500 text-white border-[var(--card-border)] shadow-sketch-sm' : 'bg-[var(--card-bg)] border-gray-300'
                                            }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={instantiateCookie}
                            className="w-full mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded border-2 border-[var(--card-border)] shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2"
                        >
                            <Plus size={18} />
                            Instantiate Object
                        </button>
                    </div>
                </div>

                {/* The Objects (Instances) */}
                <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded border-2 border-gray-200 min-h-[200px] relative">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-gray-600 uppercase tracking-wider text-sm">Instances (Objects)</h4>
                        {cookies.length > 0 && (
                            <button onClick={clearCookies} className="text-red-500 hover:bg-red-50 dark:hover:!bg-red-900/40 dark:bg-red-900/20 p-1 rounded">
                                <Trash2 size={16} />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-4 content-start">
                        <AnimatePresence>
                            {cookies.map((cookie) => (
                                <motion.div
                                    key={cookie.id}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className={`w-16 h-16 flex items-center justify-center text-xs font-bold border-2 shadow-sm ${getCookieColor(cookie.flavor)} ${cookie.shape === 'Circle' ? 'rounded-full' : 'rounded-lg'}`}
                                >
                                    {cookie.shape === 'Star' ? '★' : cookie.shape === 'Heart' ? '♥' : '●'}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {cookies.length === 0 && (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 italic text-sm mt-10">
                                No objects created yet.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
