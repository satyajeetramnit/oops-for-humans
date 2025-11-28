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
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Universal Adapter (Interfaces)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Appliance Shelf */}
                <div className="w-full md:w-1/3 space-y-4">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">Available Appliances</h4>
                    <div className="grid grid-cols-1 gap-3">
                        {(Object.keys(appliances) as ApplianceType[]).map((type) => (
                            <button
                                key={type}
                                onClick={() => plugIn(type)}
                                className={`p-3 rounded border-2 transition-all flex items-center gap-3 ${pluggedItem?.type === type
                                        ? 'bg-ink text-white border-[var(--card-border)] shadow-sketch-sm'
                                        : 'bg-[var(--card-bg)] border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                    }`}
                            >
                                {appliances[type].icon}
                                <span className="font-bold">{type}</span>
                            </button>
                        ))}
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 rounded text-sm text-green-900">
                        <strong>Interface Logic:</strong>
                        <p className="mt-1">
                            All these items implement the <code>Plugable</code> interface. The socket doesn't care what the item is, as long as it fits!
                        </p>
                    </div>
                </div>

                {/* The Socket (Interface) */}
                <div className="w-full md:w-2/3 bg-paper border-2 border-dashed border-gray-300 rounded min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden p-8">

                    {/* Wall Socket */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gray-200 border-2 border-[var(--card-border)] rounded-lg flex flex-col items-center justify-center shadow-inner">
                        <div className="flex gap-4 mb-2">
                            <div className="w-2 h-6 bg-black rounded-full" />
                            <div className="w-2 h-6 bg-black rounded-full" />
                        </div>
                        <div className="w-3 h-3 bg-black rounded-full" />
                    </div>

                    {/* Plugged Item */}
                    <AnimatePresence mode="wait">
                        {pluggedItem ? (
                            <motion.div
                                key={pluggedItem.type}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                className="flex flex-col items-center mt-20"
                            >
                                {/* Cord */}
                                <div className="w-2 h-20 bg-black mb-[-2px]" />

                                {/* Device */}
                                <div className={`p-6 rounded-xl border-2 border-[var(--card-border)] shadow-sketch flex flex-col items-center gap-4 ${appliances[pluggedItem.type].color}`}>
                                    <motion.div
                                        animate={pluggedItem.isOn ? {
                                            rotate: pluggedItem.type === 'Fan' ? 360 : 0,
                                            scale: pluggedItem.type === 'Lamp' ? [1, 1.2, 1] : 1,
                                        } : {}}
                                        transition={pluggedItem.type === 'Fan' ? { repeat: Infinity, duration: 1, ease: "linear" } : { duration: 0.5 }}
                                    >
                                        {appliances[pluggedItem.type].icon}
                                    </motion.div>

                                    <div className="font-bold text-xl">{pluggedItem.type}</div>

                                    <button
                                        onClick={togglePower}
                                        className={`w-full py-2 px-4 rounded font-bold border-2 border-[var(--card-border)] shadow-sm active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 ${pluggedItem.isOn ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                                            }`}
                                    >
                                        <Zap size={18} fill="currentColor" />
                                        {pluggedItem.isOn ? 'Turn Off' : 'Turn On'}
                                    </button>
                                </div>

                                {pluggedItem.isOn && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 font-mono text-sm bg-black text-green-400 px-3 py-1 rounded"
                                    >
                                        {appliances[pluggedItem.type].action}
                                    </motion.div>
                                )}
                            </motion.div>
                        ) : (
                            <div className="mt-32 text-gray-400 italic flex flex-col items-center gap-2">
                                <Plug size={48} />
                                <span>Select an appliance to plug in.</span>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
