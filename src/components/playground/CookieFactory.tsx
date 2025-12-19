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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">The Cookie Factory (Class vs Object)</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* The Class (Blueprint) */}
                <div className="bg-accent-blue/5 p-6 rounded-2xl border-2 border-dashed border-accent-blue/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 -mr-12 -mt-12 rounded-full blur-2xl" />
                    <h4 className="font-bold text-accent-blue mb-4 uppercase tracking-widest text-[10px]">The Blueprint (Class)</h4>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold mb-2 text-pencil uppercase tracking-tighter">Shape</label>
                            <div className="flex gap-2">
                                {(['Circle', 'Star', 'Heart'] as Shape[]).map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setShape(s)}
                                        className={`px-4 py-2 rounded-xl border-2 transition-all font-bold text-sm ${shape === s ? 'bg-accent-blue text-paper border-accent-blue/50 shadow-sketch-sm' : 'bg-paper text-pencil border-border-base/30 hover:bg-pencil/5'
                                            }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold mb-2 text-pencil uppercase tracking-tighter">Flavor</label>
                            <div className="flex gap-2">
                                {(['Choc Chip', 'Sugar', 'Gingerbread'] as Flavor[]).map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFlavor(f)}
                                        className={`px-3 py-2 rounded-xl border-2 transition-all font-bold text-xs ${flavor === f ? 'bg-accent-blue text-paper border-accent-blue/50 shadow-sketch-sm' : 'bg-paper text-pencil border-border-base/30 hover:bg-pencil/5'
                                            }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={instantiateCookie}
                            className="w-full mt-4 bg-accent-green text-paper font-bold py-3 px-4 rounded-xl border-2 border-accent-green/50 shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs hover:bg-accent-green/90"
                        >
                            <Plus size={18} />
                            Instantiate Object
                        </button>
                    </div>
                </div>

                {/* The Objects (Instances) */}
                <div className="bg-pencil/5 p-6 rounded-2xl border-2 border-border-base min-h-[300px] relative shadow-inner overflow-hidden">
                    <div className="flex justify-between items-center mb-6 relative z-10">
                        <h4 className="font-bold text-pencil uppercase tracking-widest text-[10px]">Instances (Objects)</h4>
                        {cookies.length > 0 && (
                            <button onClick={clearCookies} className="text-accent-red hover:bg-accent-red/10 p-2 rounded-lg transition-colors flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest">
                                <Trash2 size={14} />
                                Clear
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-4 content-start relative z-10">
                        <AnimatePresence>
                            {cookies.map((cookie) => (
                                <motion.div
                                    key={cookie.id}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className={`w-20 h-20 flex flex-col items-center justify-center text-[10px] font-bold border-2 shadow-sketch-sm transition-transform hover:scale-110 ${getCookieColor(cookie.flavor)} ${cookie.shape === 'Circle' ? 'rounded-full' : 'rounded-2xl'}`}
                                >
                                    <span className="text-2xl mb-1">{cookie.shape === 'Star' ? '★' : cookie.shape === 'Heart' ? '♥' : '●'}</span>
                                    <span className="opacity-70 px-1 text-center truncate w-full">{cookie.flavor}</span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {cookies.length === 0 && (
                            <div className="w-full h-40 flex flex-col items-center justify-center text-pencil/30 italic text-sm mt-10 gap-2">
                                <div className="w-16 h-16 rounded-full border-4 border-dashed border-pencil/10 flex items-center justify-center">
                                    <span className="text-2xl">?</span>
                                </div>
                                <span className="font-bold uppercase tracking-widest text-[10px]">No objects created yet</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
