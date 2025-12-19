'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plug, Zap, Lightbulb, Fan, Coffee } from 'lucide-react';

type ApplianceType = 'Lamp' | 'Fan' | 'Toaster';

interface Appliance {
    id: number;
    type: ApplianceType;
    isOn: boolean;
}

export default function UniversalAdapter() {
    const [pluggedItem, setPluggedItem] = useState<Appliance | null>(null);

    const appliances: Record<ApplianceType, { icon: React.ReactNode, color: string, action: string }> = {
        Lamp: { icon: <Lightbulb size={32} />, color: 'bg-yellow-100 border-yellow-400 text-yellow-600', action: 'Lighting up room...' },
        Fan: { icon: <Fan size={32} />, color: 'bg-cyan-100 border-cyan-400 text-cyan-600', action: 'Cooling air...' },
        Toaster: { icon: <Coffee size={32} />, color: 'bg-orange-100 border-orange-400 text-orange-600', action: 'Toasting bread...' },
    };

    const plugIn = (type: ApplianceType) => {
        setPluggedItem({ id: Date.now(), type, isOn: false });
    };

    const togglePower = () => {
        if (pluggedItem) {
            setPluggedItem(prev => prev ? { ...prev, isOn: !prev.isOn } : null);
        }
    };

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Universal Adapter (Interfaces)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Appliance Shelf */}
                <div className="w-full md:w-1/3 space-y-4">
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-pencil">Available Appliances</h4>
                    <div className="grid grid-cols-1 gap-3">
                        {(Object.keys(appliances) as ApplianceType[]).map((type) => (
                            <button
                                key={type}
                                onClick={() => plugIn(type)}
                                className={`p-4 rounded-xl border-2 transition-all flex items-center gap-4 shadow-sm ${pluggedItem?.type === type
                                    ? 'bg-ink text-paper border-border-base shadow-sketch-sm'
                                    : 'bg-paper text-pencil border-border-base/20 hover:bg-pencil/5'
                                    }`}
                            >
                                <div className={`p-2 rounded-lg ${pluggedItem?.type === type ? 'bg-paper/10' : 'bg-pencil/10'}`}>
                                    {appliances[type].icon}
                                </div>
                                <span className="font-bold">{type}</span>
                            </button>
                        ))}
                    </div>

                    <div className="p-4 bg-accent-green/10 border-2 border-accent-green/20 rounded-xl text-xs text-ink leading-relaxed shadow-inner">
                        <strong className="text-accent-green uppercase tracking-widest text-[10px] block mb-1">Interface Logic</strong>
                        <p>
                            All these items implement the <code className="bg-paper px-1 rounded border border-border-base/10 text-accent-purple">Plugable</code> interface. The socket doesn't care what the item is, as long as it fits!
                        </p>
                    </div>
                </div>

                {/* The Socket (Interface) */}
                <div className="w-full md:w-2/3 bg-pencil/5 border-2 border-dashed border-border-base/30 rounded-2xl min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden p-8 shadow-inner">

                    {/* Wall Socket */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-28 h-28 bg-paper border-4 border-border-base/30 rounded-2xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-pencil/5 to-transparent pointer-events-none" />
                        <div className="flex gap-4 mb-3 relative z-10">
                            <div className="w-3 h-8 bg-ink rounded-full border-b-2 border-paper/10 shadow-inner" />
                            <div className="w-3 h-8 bg-ink rounded-full border-b-2 border-paper/10 shadow-inner" />
                        </div>
                        <div className="w-4 h-4 bg-ink rounded-full relative z-10 border-b-2 border-paper/10 shadow-inner" />
                    </div>

                    {/* Plugged Item */}
                    <AnimatePresence mode="wait">
                        {pluggedItem ? (
                            <motion.div
                                key={pluggedItem.type}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                className="flex flex-col items-center mt-28 relative z-20"
                            >
                                {/* Cord */}
                                <div className="w-2.5 h-20 bg-ink mb-[-2px] shadow-lg rounded-full" />

                                {/* Device */}
                                <div className={`p-8 rounded-2xl border-2 border-border-base shadow-sketch flex flex-col items-center gap-6 relative overflow-hidden ${appliances[pluggedItem.type].color.replace('bg-', 'bg-').replace('border-', 'border-').replace('text-', 'text-')}`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-paper/10 to-transparent pointer-events-none" />

                                    <motion.div
                                        animate={pluggedItem.isOn ? {
                                            rotate: pluggedItem.type === 'Fan' ? 360 : 0,
                                            scale: pluggedItem.type === 'Lamp' ? [1, 1.2, 1] : 1,
                                            filter: pluggedItem.type === 'Lamp' && pluggedItem.isOn ? 'drop-shadow(0 0 15px rgba(250,204,21,0.8))' : 'none',
                                        } : {}}
                                        transition={pluggedItem.type === 'Fan' ? { repeat: Infinity, duration: 1, ease: "linear" } : { duration: 0.5 }}
                                    >
                                        {appliances[pluggedItem.type].icon}
                                    </motion.div>

                                    <div className="font-bold text-2xl tracking-tight text-ink">{pluggedItem.type}</div>

                                    <button
                                        onClick={togglePower}
                                        className={`w-full py-3 px-6 rounded-xl font-bold border-2 shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs ${pluggedItem.isOn ? 'bg-accent-red text-paper border-accent-red/50 shadow-red-500/20' : 'bg-accent-green text-paper border-accent-green/50 shadow-green-500/20'
                                            }`}
                                    >
                                        <Zap size={18} fill="currentColor" />
                                        {pluggedItem.isOn ? 'Power Off' : 'Power On'}
                                    </button>
                                </div>

                                {pluggedItem.isOn && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                        className="mt-6 font-mono text-[10px] bg-ink text-accent-green px-4 py-2 rounded-full border border-accent-green/30 shadow-lg uppercase tracking-widest font-bold"
                                    >
                                        {appliances[pluggedItem.type].action}
                                    </motion.div>
                                )}
                            </motion.div>
                        ) : (
                            <div className="mt-36 text-pencil opacity-30 italic flex flex-col items-center gap-4 group">
                                <Plug size={64} className="group-hover:rotate-12 transition-transform duration-500" />
                                <span className="text-sm font-bold uppercase tracking-widest">Select hardware to bridge interface</span>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
