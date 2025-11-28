'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake, FileJson, Database, RefreshCw } from 'lucide-react';

type Hero = {
    name: string;
    power: string;
    level: number;
};

export default function FreezeRay() {
    const [hero, setHero] = useState<Hero>({
        name: 'SuperDev',
        power: 'Coding',
        level: 99,
    });

    const [serializedData, setSerializedData] = useState<string | null>(null);
    const [format, setFormat] = useState<'JSON' | 'Binary'>('JSON');
    const [isFrozen, setIsFrozen] = useState(false);

    const freeze = () => {
        setIsFrozen(true);
        setTimeout(() => {
            if (format === 'JSON') {
                setSerializedData(JSON.stringify(hero, null, 2));
            } else {
                // Simulate binary data
                setSerializedData("01010011 01110101 01110000 01100101 01110010 01000100 01100101 01110110");
            }
        }, 1000);
    };

    const thaw = () => {
        setIsFrozen(false);
        setSerializedData(null);
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Serialization (The Freeze Ray)</h3>

            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => { setFormat('JSON'); thaw(); }}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${format === 'JSON' ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-500' : 'bg-[var(--card-bg)] border-2 border-gray-300'
                        }`}
                >
                    <FileJson size={18} />
                    JSON Format
                </button>
                <button
                    onClick={() => { setFormat('Binary'); thaw(); }}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${format === 'Binary' ? 'bg-blue-100 text-blue-800 border-2 border-blue-500' : 'bg-[var(--card-bg)] border-2 border-gray-300'
                        }`}
                >
                    <Database size={18} />
                    Binary Format
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* Live Object */}
                <div className="flex flex-col items-center">
                    <AnimatePresence>
                        {!isFrozen && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="w-40 h-48 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-4 relative border-4 border-[var(--card-border)]"
                            >
                                <span className="text-4xl mb-2">🦸</span>
                                <div className="font-bold text-lg">{hero.name}</div>
                                <div className="text-xs opacity-90">Power: {hero.power}</div>
                                <div className="text-xs opacity-90">Level: {hero.level}</div>
                                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold border-2 border-[var(--card-border)]">
                                    Live
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {isFrozen && (
                        <div className="w-40 h-48 border-4 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 font-bold">
                            Gone
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                    <button
                        onClick={freeze}
                        disabled={isFrozen}
                        className="px-4 py-2 bg-cyan-500 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2"
                    >
                        <Snowflake size={18} />
                        Freeze (Serialize)
                    </button>
                    <button
                        onClick={thaw}
                        disabled={!isFrozen}
                        className="px-4 py-2 bg-orange-500 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2"
                    >
                        <RefreshCw size={18} />
                        Thaw (Deserialize)
                    </button>
                </div>

                {/* Serialized Data */}
                <div className="flex flex-col items-center w-48">
                    <AnimatePresence>
                        {isFrozen && serializedData && (
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 20, opacity: 0 }}
                                className="w-full bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs border-2 border-gray-500 shadow-inner overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mb-2 text-gray-500 border-b border-gray-700 pb-1">
                                    {format === 'JSON' ? <FileJson size={14} /> : <Database size={14} />}
                                    <span>{format} Data</span>
                                </div>
                                <pre className="whitespace-pre-wrap break-all">
                                    {serializedData}
                                </pre>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {!isFrozen && (
                        <div className="w-full h-32 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 font-bold text-xs text-center p-4">
                            Waiting for data...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
