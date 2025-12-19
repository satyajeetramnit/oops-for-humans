'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Lock, Unlock, Eye } from 'lucide-react';

type SecretBox = {
    id: number;
    content: string;
    isPrivate: boolean;
};

export default function XRaySpecs() {
    const [box, setBox] = useState<SecretBox>({
        id: 42,
        content: 'Top Secret Plans',
        isPrivate: true,
    });

    const [isScanning, setIsScanning] = useState(false);
    const [scannedData, setScannedData] = useState<any>(null);

    const inspect = () => {
        setIsScanning(true);
        setTimeout(() => {
            // Simulate Reflection: Accessing private fields
            setScannedData({
                className: 'SecretBox',
                fields: [
                    { name: 'id', type: 'int', value: box.id, access: 'public' },
                    { name: 'content', type: 'String', value: box.content, access: 'private' },
                    { name: 'isPrivate', type: 'boolean', value: box.isPrivate, access: 'private' },
                ],
                methods: [
                    { name: 'open()', returnType: 'void' },
                    { name: 'lock()', returnType: 'void' },
                ]
            });
            setIsScanning(false);
        }, 1500);
    };

    const hack = () => {
        // Simulate Reflection: Modifying private field
        setBox(prev => ({ ...prev, content: 'HACKED!' }));
        if (scannedData) {
            setScannedData((prev: any) => ({
                ...prev,
                fields: prev.fields.map((f: any) => f.name === 'content' ? { ...f, value: 'HACKED!' } : f)
            }));
        }
    };

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Reflection (X-Ray Specs)</h3>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* The Object */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-48 h-48 bg-ink/90 rounded-xl border-4 border-border-base flex flex-col items-center justify-center text-paper relative shadow-xl overflow-hidden">
                        <Lock size={48} className="text-pencil opacity-50 mb-2" />
                        <div className="font-bold text-lg">SecretBox</div>
                        <div className="text-xs text-pencil/60 mt-2 uppercase tracking-widest font-bold">Private Access Only</div>

                        {/* Overlay for X-Ray effect */}
                        <AnimatePresence>
                            {isScanning && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.3 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-green-500 z-10"
                                />
                            )}
                        </AnimatePresence>

                        {/* Scan Line */}
                        {isScanning && (
                            <motion.div
                                initial={{ y: -100 }}
                                animate={{ y: 200 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-1 bg-green-400 z-20 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                            />
                        )}
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={inspect}
                            disabled={isScanning}
                            className="px-4 py-2 bg-purple-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2 hover:bg-purple-700 transition-colors"
                        >
                            <Search size={18} />
                            Inspect (Reflect)
                        </button>
                        <button
                            onClick={hack}
                            disabled={!scannedData}
                            className="px-4 py-2 bg-red-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2 hover:bg-red-700 transition-colors"
                        >
                            <Unlock size={18} />
                            Hack Private Field
                        </button>
                    </div>
                </div>

                {/* The Reflection Result */}
                <div className="flex-1 w-full">
                    <div className="bg-ink text-green-400 p-4 rounded-lg font-mono text-xs border-2 border-border-base shadow-inner min-h-[220px]">
                        <div className="flex items-center gap-2 mb-2 text-pencil border-b border-border-base/20 pb-1">
                            <Eye size={14} />
                            <span className="uppercase tracking-widest text-[10px] font-bold">Reflection Output</span>
                        </div>

                        {isScanning ? (
                            <div className="animate-pulse text-green-500">Scanning class structure...</div>
                        ) : scannedData ? (
                            <div className="space-y-2">
                                <div><span className="text-accent-blue">class</span> {scannedData.className} {'{'}</div>
                                <div className="pl-4 space-y-1">
                                    {scannedData.fields.map((f: any) => (
                                        <div key={f.name} className="flex flex-wrap gap-2">
                                            <span className={f.access === 'private' ? 'text-red-400 font-bold' : 'text-green-400'}>{f.access}</span>
                                            <span className="text-accent-yellow">{f.type}</span>
                                            <span className="text-paper">{f.name}</span>
                                            <span className="text-pencil/40">=</span>
                                            <span className="text-white">"{f.value}"</span>;
                                        </div>
                                    ))}
                                </div>
                                <div className="pl-4 mt-2 space-y-1 text-pencil/50">
                                    {scannedData.methods.map((m: any) => (
                                        <div key={m.name}>
                                            <span className="text-accent-yellow">{m.returnType}</span> {m.name};
                                        </div>
                                    ))}
                                </div>
                                <div>{'}'}</div>
                            </div>
                        ) : (
                            <div className="text-pencil/30 italic flex items-center justify-center h-full pt-12 text-sm">No data scanned yet.</div>
                        )}
                    </div>
                    <p className="mt-2 text-xs text-pencil">
                        *Reflection allows code to inspect and modify itself at runtime, even bypassing private access modifiers!
                    </p>
                </div>
            </div>
        </div>
    );
}
