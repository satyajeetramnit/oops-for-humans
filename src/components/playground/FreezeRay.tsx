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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Serialization (The Freeze Ray)</h3>

            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => { setFormat('JSON'); thaw(); }}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${format === 'JSON' ? 'bg-accent-yellow/20 text-accent-yellow border-2 border-accent-yellow/50' : 'bg-paper text-pencil border-2 border-border-base/20'
                        }`}
                >
                    <FileJson size={18} />
                    JSON Format
                </button>
                <button
                    onClick={() => { setFormat('Binary'); thaw(); }}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${format === 'Binary' ? 'bg-accent-blue/20 text-accent-blue border-2 border-accent-blue/50' : 'bg-paper text-pencil border-2 border-border-base/20'
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
                                className="w-40 h-48 bg-gradient-to-br from-accent-red to-accent-orange/70 flex flex-col items-center justify-center text-paper p-4 relative border-4 border-border-base shadow-xl rounded-xl"
                            >
                                <span className="text-4xl mb-2">🦸</span>
                                <div className="font-bold text-lg">{hero.name}</div>
                                <div className="text-xs opacity-90">Power: {hero.power}</div>
                                <div className="text-xs opacity-90">Level: {hero.level}</div>
                                <div className="absolute -top-3 -right-3 bg-accent-green text-paper px-2 py-1 rounded-full text-[10px] font-bold border-2 border-border-base shadow-lg uppercase tracking-widest">
                                    Live
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {isFrozen && (
                        <div className="w-40 h-48 border-4 border-dashed border-border-base/20 rounded-xl flex items-center justify-center text-pencil/30 font-bold uppercase tracking-widest">
                            Gone
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                    <button
                        onClick={freeze}
                        disabled={isFrozen}
                        className="px-4 py-2 bg-accent-blue text-paper font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2 hover:bg-accent-blue/90 transition-colors"
                    >
                        <Snowflake size={18} />
                        Freeze (Serialize)
                    </button>
                    <button
                        onClick={thaw}
                        disabled={!isFrozen}
                        className="px-4 py-2 bg-accent-purple text-paper font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2 hover:bg-accent-purple/90 transition-colors"
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
                                className="w-full bg-ink text-accent-green p-4 rounded-lg font-mono text-xs border-2 border-border-base/30 shadow-inner overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mb-2 text-pencil opacity-50 border-b border-border-base/10 pb-1">
                                    {format === 'JSON' ? <FileJson size={14} /> : <Database size={14} />}
                                    <span className="uppercase tracking-widest text-[10px] font-bold">{format} Data</span>
                                </div>
                                <pre className="whitespace-pre-wrap break-all">
                                    {serializedData}
                                </pre>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {!isFrozen && (
                        <div className="w-full h-32 border-4 border-dashed border-border-base/10 rounded-lg flex items-center justify-center text-pencil/20 font-bold text-[10px] text-center p-4 uppercase tracking-widest leading-relaxed">
                            Waiting for serialization...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
