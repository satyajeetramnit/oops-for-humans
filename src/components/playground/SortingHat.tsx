'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trash2, List, Layers, Map as MapIcon, Plus } from 'lucide-react';

type CollectionType = 'List' | 'Set' | 'Map';

interface Item {
    id: number;
    value: string;
    key?: string; // For Map
}

export default function SortingHat() {
    const [collectionType, setCollectionType] = useState<CollectionType>('List');
    const [items, setItems] = useState<Item[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [inputKey, setInputKey] = useState('');
    const [message, setMessage] = useState('');

    const addItem = () => {
        if (!inputValue.trim()) return;

        const newItem: Item = {
            id: Date.now(),
            value: inputValue.trim(),
            key: collectionType === 'Map' ? inputKey.trim() : undefined,
        };

        if (collectionType === 'Map' && !newItem.key) {
            setMessage('Maps need a Key!');
            return;
        }

        if (collectionType === 'Set') {
            if (items.some(item => item.value === newItem.value)) {
                setMessage(`Duplicate "${newItem.value}" rejected by Set!`);
                return;
            }
        }

        if (collectionType === 'Map') {
            if (items.some(item => item.key === newItem.key)) {
                setMessage(`Key "${newItem.key}" updated in Map!`);
                setItems(prev => prev.map(item => item.key === newItem.key ? newItem : item));
                setInputValue('');
                setInputKey('');
                return;
            }
        }

        setItems(prev => [...prev, newItem]);
        setInputValue('');
        setInputKey('');
        setMessage('');
    };

    const clearItems = () => {
        setItems([]);
        setMessage('');
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">The Sorting Hat (Collections)</h3>

            <div className="flex flex-col gap-6">
                {/* Type Selector */}
                <div className="flex justify-center gap-4">
                    {(['List', 'Set', 'Map'] as CollectionType[]).map((type) => (
                        <button
                            key={type}
                            onClick={() => { setCollectionType(type); setItems([]); setMessage(''); }}
                            className={`px-4 py-2 rounded-full border-2 font-bold transition-all flex items-center gap-2 ${collectionType === type
                                ? 'bg-purple-600 text-white border-[var(--card-border)] shadow-sketch-sm scale-110'
                                : 'bg-[var(--card-bg)] text-gray-500 dark:text-gray-400 border-gray-300 hover:bg-[var(--card-hover)] dark:bg-slate-800/50'
                                }`}
                        >
                            {type === 'List' && <List size={18} />}
                            {type === 'Set' && <Layers size={18} />}
                            {type === 'Map' && <MapIcon size={18} />}
                            {type}
                        </button>
                    ))}
                </div>

                <div className="text-center text-sm font-mono bg-gray-100 dark:bg-slate-800 p-2 rounded border border-gray-300">
                    {collectionType === 'List' && "List: Ordered collection. Duplicates allowed."}
                    {collectionType === 'Set' && "Set: Unique items only. No duplicates!"}
                    {collectionType === 'Map' && "Map: Key-Value pairs. Keys must be unique."}
                </div>

                {/* Input Area */}
                <div className="flex gap-2 items-end justify-center bg-paper p-4 rounded-lg border-2 border-dashed border-gray-300">
                    {collectionType === 'Map' && (
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold uppercase text-pencil">Key</label>
                            <input
                                type="text"
                                value={inputKey}
                                onChange={(e) => setInputKey(e.target.value)}
                                className="border-2 border-[var(--card-border)] rounded px-2 py-1 w-24 focus:outline-none focus:shadow-sketch-sm transition-shadow"
                                placeholder="Key"
                            />
                        </div>
                    )}

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase text-pencil">Value</label>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addItem()}
                            className="border-2 border-[var(--card-border)] rounded px-2 py-1 w-40 focus:outline-none focus:shadow-sketch-sm transition-shadow"
                            placeholder="Value"
                        />
                    </div>

                    <button
                        onClick={addItem}
                        className="bg-black dark:bg-slate-700 text-white p-2 rounded border-2 border-[var(--card-border)] hover:bg-gray-800 dark:hover:bg-slate-600 active:scale-95 transition-transform"
                    >
                        <Plus size={20} />
                    </button>
                </div>

                {/* Message Area */}
                <AnimatePresence>
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-center text-red-500 font-bold text-sm"
                        >
                            {message}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Collection Display */}
                <div className="min-h-[200px] bg-gray-50 dark:bg-slate-800/50 border-2 border-[var(--card-border)] rounded-lg p-4 relative">
                    <div className="absolute top-2 right-2">
                        <button onClick={clearItems} className="text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center content-start h-full">
                        <AnimatePresence>
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ scale: 0, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0 }}
                                    layout
                                    className={`px-4 py-2 rounded-lg border-2 border-[var(--card-border)] shadow-sm font-bold flex items-center gap-2 ${collectionType === 'List' ? 'bg-blue-100 text-blue-900' :
                                        collectionType === 'Set' ? 'bg-green-100 text-green-900' :
                                            'bg-orange-100 text-orange-900'
                                        }`}
                                >
                                    {collectionType === 'List' && <span className="text-xs bg-black/10 px-1 rounded mr-1">#{index}</span>}

                                    {collectionType === 'Map' ? (
                                        <>
                                            <span className="font-mono text-sm opacity-70">{item.key}</span>
                                            <span className="text-xs">➜</span>
                                            <span>{item.value}</span>
                                        </>
                                    ) : (
                                        item.value
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {items.length === 0 && (
                            <div className="w-full h-full flex items-center justify-center text-gray-300 italic">
                                Collection is empty
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
