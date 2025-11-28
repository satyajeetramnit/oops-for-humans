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
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Reflection (X-Ray Specs)</h3>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* The Object */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-48 h-48 bg-gray-800 rounded-xl border-4 border-gray-600 flex flex-col items-center justify-center text-white relative shadow-xl">
                        <Lock size={48} className="text-gray-400 mb-2" />
                        <div className="font-bold text-lg">SecretBox</div>
                        <div className="text-xs text-gray-500 mt-2">Private Access Only</div>

                        {/* Overlay for X-Ray effect */}
                        <AnimatePresence>
                            {isScanning && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-green-500 rounded-lg"
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={inspect}
                            disabled={isScanning}
                            className="px-4 py-2 bg-purple-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2"
                        >
                            <Search size={18} />
                            Inspect (Reflect)
                        </button>
                        <button
                            onClick={hack}
                            disabled={!scannedData}
                            className="px-4 py-2 bg-red-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2"
                        >
                            <Unlock size={18} />
                            Hack Private Field
                        </button>
                    </div>
                </div>

                {/* The Reflection Result */}
                <div className="flex-1 w-full">
                    <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-xs border-2 border-gray-500 shadow-inner min-h-[200px]">
                        <div className="flex items-center gap-2 mb-2 text-gray-500 border-b border-gray-700 pb-1">
                            <Eye size={14} />
                            <span>Reflection Output</span>
                        </div>

                        {isScanning ? (
                            <div className="animate-pulse">Scanning class structure...</div>
                        ) : scannedData ? (
                            <div className="space-y-2">
                                <div><span className="text-blue-400">class</span> {scannedData.className} {'{'}</div>
                                <div className="pl-4 space-y-1">
                                    {scannedData.fields.map((f: any) => (
                                        <div key={f.name} className="flex gap-2">
                                            <span className={f.access === 'private' ? 'text-red-400' : 'text-green-400'}>{f.access}</span>
                                            <span className="text-yellow-400">{f.type}</span>
                                            <span>{f.name}</span>
                                            <span className="text-gray-500">=</span>
                                            <span className="text-white">"{f.value}"</span>;
                                        </div>
                                    ))}
                                </div>
                                <div className="pl-4 mt-2 space-y-1 text-gray-500">
                                    {scannedData.methods.map((m: any) => (
                                        <div key={m.name}>
                                            {m.returnType} {m.name};
                                        </div>
                                    ))}
                                </div>
                                <div>{'}'}</div>
                            </div>
                        ) : (
                            <div className="text-gray-600 italic">No data scanned yet.</div>
                        )}
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                        *Reflection allows code to inspect and modify itself at runtime, even bypassing private access modifiers!
                    </p>
                </div>
            </div>
        </div>
    );
}
