'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Smile, Circle, Package } from 'lucide-react';

type ToyType = 'Car' | 'Doll' | 'Ball';

export default function ToyFactory() {
    const [selectedType, setSelectedType] = useState<ToyType>('Car');
    const [producedToy, setProducedToy] = useState<{ type: ToyType; id: number } | null>(null);
    const [isProducing, setIsProducing] = useState(false);

    const orderToy = () => {
        setIsProducing(true);
        setProducedToy(null);

        // Simulate factory work
        setTimeout(() => {
            setProducedToy({ type: selectedType, id: Date.now() });
            setIsProducing(false);
        }, 1500);
    };

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Toy Factory (Factory Pattern)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="space-y-2">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">1. Select Toy Type</h4>
                        <div className="flex flex-col gap-2">
                            {(['Car', 'Doll', 'Ball'] as ToyType[]).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={`px-4 py-3 rounded border-2 font-bold text-left flex items-center gap-3 transition-all ${selectedType === type
                                        ? 'bg-ink text-paper border-border-base shadow-sketch-sm translate-x-2'
                                        : 'bg-paper text-pencil border-border-base/20 hover:bg-pencil/5'
                                        }`}
                                >
                                    {type === 'Car' && <Car size={20} />}
                                    {type === 'Doll' && <Smile size={20} />}
                                    {type === 'Ball' && <Circle size={20} />}
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={orderToy}
                        disabled={isProducing}
                        className="w-full py-3 px-4 bg-accent-blue text-paper font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <Package size={20} />
                        {isProducing ? 'Manufacturing...' : 'Order Toy'}
                    </button>
                </div>

                {/* Visualization */}
                <div className="w-full md:w-2/3 bg-pencil/5 border-2 border-border-base rounded-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">

                    {/* Conveyor Belt Background */}
                    <div className="absolute bottom-0 w-full h-12 bg-ink/80 border-t-4 border-border-base" />

                    {/* Factory Door */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-32 bg-pencil/30 border-r-4 border-border-base" />

                    <AnimatePresence mode="wait">
                        {isProducing ? (
                            <motion.div
                                key="producing"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                className="flex flex-col items-center"
                            >
                                <div className="text-4xl animate-bounce">⚙️</div>
                                <span className="font-bold text-pencil mt-2">Factory is working...</span>
                            </motion.div>
                        ) : producedToy ? (
                            <motion.div
                                key="toy"
                                initial={{ x: -200, rotate: -360 }}
                                animate={{ x: 0, rotate: 0 }}
                                className="flex flex-col items-center z-10"
                            >
                                <div className="w-32 h-32 bg-paper rounded-xl border-4 border-border-base shadow-xl flex items-center justify-center relative">
                                    {producedToy.type === 'Car' && <Car size={64} className="text-red-500" />}
                                    {producedToy.type === 'Doll' && <Smile size={64} className="text-pink-500" />}
                                    {producedToy.type === 'Ball' && <Circle size={64} className="text-blue-500" />}

                                    {/* Tag */}
                                    <div className="absolute -top-3 -right-3 bg-accent-yellow text-paper text-xs font-bold px-2 py-1 rounded border-2 border-border-base transform rotate-12">
                                        NEW!
                                    </div>
                                </div>
                                <div className="mt-4 bg-paper px-4 py-2 rounded border-2 border-border-base shadow-sm text-center">
                                    <div className="font-bold text-lg text-ink">It's a {producedToy.type}!</div>
                                    <div className="text-xs text-pencil font-mono">ID: {producedToy.id}</div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="text-pencil/40 font-bold text-xl uppercase tracking-widest">Waiting for Order...</div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
