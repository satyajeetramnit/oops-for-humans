'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Smartphone, Tv, Mail, Send, Trash2 } from 'lucide-react';

type SubscriberType = 'Phone' | 'TV' | 'Email';

interface Subscriber {
    id: number;
    type: SubscriberType;
    message: string | null;
}

export default function NewsStation() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [news, setNews] = useState('');
    const [isBroadcasting, setIsBroadcasting] = useState(false);

    const addSubscriber = (type: SubscriberType) => {
        setSubscribers(prev => [...prev, { id: Date.now(), type, message: null }]);
    };

    const removeSubscriber = (id: number) => {
        setSubscribers(prev => prev.filter(sub => sub.id !== id));
    };

    const broadcast = () => {
        if (!news.trim()) return;
        setIsBroadcasting(true);

        // Update all subscribers
        setSubscribers(prev => prev.map(sub => ({ ...sub, message: news })));

        setTimeout(() => setIsBroadcasting(false), 1000);
        setNews('');
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">News Station (Observer Pattern)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Publisher (News Station) */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-200">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-red-900 mb-2 flex items-center gap-2">
                            <Radio size={16} /> Publisher
                        </h4>
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                value={news}
                                onChange={(e) => setNews(e.target.value)}
                                placeholder="Type Breaking News..."
                                className="border-2 border-red-300 rounded px-2 py-1 focus:outline-none focus:border-red-500"
                            />
                            <button
                                onClick={broadcast}
                                disabled={!news.trim() || subscribers.length === 0}
                                className="bg-red-600 text-white font-bold py-2 rounded shadow-sm active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <Send size={16} /> Broadcast
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-pencil">Add Subscribers:</h4>
                        <div className="flex gap-2">
                            <button onClick={() => addSubscriber('Phone')} className="p-2 bg-[var(--card-bg)] border-2 border-gray-300 rounded hover:bg-[var(--card-hover)] dark:bg-slate-800/50"><Smartphone size={20} /></button>
                            <button onClick={() => addSubscriber('TV')} className="p-2 bg-[var(--card-bg)] border-2 border-gray-300 rounded hover:bg-[var(--card-hover)] dark:bg-slate-800/50"><Tv size={20} /></button>
                            <button onClick={() => addSubscriber('Email')} className="p-2 bg-[var(--card-bg)] border-2 border-gray-300 rounded hover:bg-[var(--card-hover)] dark:bg-slate-800/50"><Mail size={20} /></button>
                        </div>
                    </div>
                </div>

                {/* Subscribers */}
                <div className="w-full md:w-2/3 bg-gray-50 dark:bg-slate-800/50 border-2 border-dashed border-gray-300 rounded p-4 min-h-[300px]">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4 text-center">
                        Subscribers List ({subscribers.length})
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AnimatePresence>
                            {subscribers.map((sub) => (
                                <motion.div
                                    key={sub.id}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded p-3 shadow-sm relative group"
                                >
                                    <button
                                        onClick={() => removeSubscriber(sub.id)}
                                        className="absolute top-1 right-1 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 size={14} />
                                    </button>

                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`p-2 rounded-full ${sub.type === 'Phone' ? 'bg-blue-100 text-blue-600' :
                                                sub.type === 'TV' ? 'bg-purple-100 text-purple-600' :
                                                    'bg-yellow-100 text-yellow-600'
                                            }`}>
                                            {sub.type === 'Phone' && <Smartphone size={16} />}
                                            {sub.type === 'TV' && <Tv size={16} />}
                                            {sub.type === 'Email' && <Mail size={16} />}
                                        </div>
                                        <span className="font-bold text-sm">{sub.type} Subscriber</span>
                                    </div>

                                    <div className={`text-xs p-2 rounded border ${sub.message ? 'bg-green-50 dark:bg-green-900/20 border-green-200 text-green-800' : 'bg-gray-50 dark:bg-slate-800/50 border-gray-100 text-gray-400 italic'
                                        }`}>
                                        {sub.message ? `"${sub.message}"` : "Waiting for news..."}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {subscribers.length === 0 && (
                            <div className="col-span-full text-center text-gray-300 italic mt-10">
                                No subscribers yet.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
