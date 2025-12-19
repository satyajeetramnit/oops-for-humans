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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">News Station (Observer Pattern)</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Publisher (News Station) */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="bg-red-500/10 border-2 border-red-500/50 p-4 rounded-xl shadow-inner">
                        <h4 className="font-bold text-[10px] uppercase tracking-widest text-red-600 mb-4 flex items-center gap-2">
                            <Radio size={16} /> Publisher
                        </h4>
                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                value={news}
                                onChange={(e) => setNews(e.target.value)}
                                placeholder="Type Breaking News..."
                                className="bg-paper border-2 border-border-base/50 rounded-lg px-3 py-2 text-sm text-ink focus:outline-none focus:border-red-500 transition-colors shadow-sm"
                            />
                            <button
                                onClick={broadcast}
                                disabled={!news.trim() || subscribers.length === 0}
                                className="bg-red-600 text-paper font-bold py-2 rounded-lg shadow-sketch-sm active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:bg-red-700"
                            >
                                <Send size={16} /> Broadcast
                            </button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-bold text-[10px] uppercase tracking-widest text-pencil">Add Subscribers:</h4>
                        <div className="flex gap-2">
                            <button onClick={() => addSubscriber('Phone')} className="flex-1 p-3 bg-paper border-2 border-border-base/30 rounded-xl hover:bg-pencil/5 transition-all text-pencil hover:text-ink hover:border-border-base shadow-sm"><Smartphone size={24} className="mx-auto" /></button>
                            <button onClick={() => addSubscriber('TV')} className="flex-1 p-3 bg-paper border-2 border-border-base/30 rounded-xl hover:bg-pencil/5 transition-all text-pencil hover:text-ink hover:border-border-base shadow-sm"><Tv size={24} className="mx-auto" /></button>
                            <button onClick={() => addSubscriber('Email')} className="flex-1 p-3 bg-paper border-2 border-border-base/30 rounded-xl hover:bg-pencil/5 transition-all text-pencil hover:text-ink hover:border-border-base shadow-sm"><Mail size={24} className="mx-auto" /></button>
                        </div>
                    </div>
                </div>

                {/* Subscribers */}
                <div className="w-full md:w-2/3 bg-pencil/5 border-2 border-dashed border-border-base/30 rounded-2xl p-6 min-h-[350px] shadow-inner relative overflow-hidden">
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-pencil opacity-50 mb-6 text-center">
                        Active Subscribers ({subscribers.length})
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                        <AnimatePresence>
                            {subscribers.map((sub) => (
                                <motion.div
                                    key={sub.id}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="bg-paper border-2 border-border-base rounded-xl p-4 shadow-sketch-sm relative group transition-all hover:shadow-lg"
                                >
                                    <button
                                        onClick={() => removeSubscriber(sub.id)}
                                        className="absolute top-2 right-2 text-pencil/30 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 size={16} />
                                    </button>

                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`p-2 rounded-full shadow-sm ${sub.type === 'Phone' ? 'bg-accent-blue/10 text-accent-blue' :
                                            sub.type === 'TV' ? 'bg-accent-purple/10 text-accent-purple' :
                                                'bg-accent-yellow/10 text-accent-yellow'
                                            }`}>
                                            {sub.type === 'Phone' && <Smartphone size={18} />}
                                            {sub.type === 'TV' && <Tv size={18} />}
                                            {sub.type === 'Email' && <Mail size={18} />}
                                        </div>
                                        <span className="font-bold text-xs text-ink">{sub.type} Subscriber</span>
                                    </div>

                                    <div className={`text-xs p-3 rounded-lg border-2 shadow-inner min-h-[50px] flex items-center transition-all ${sub.message ? 'bg-accent-green/10 border-accent-green/30 text-ink font-bold leading-relaxed' : 'bg-pencil/5 border-border-base/10 text-pencil/50 italic'
                                        }`}>
                                        {sub.message ? `"${sub.message}"` : "Waiting for news..."}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {subscribers.length === 0 && (
                            <div className="col-span-full h-48 flex flex-col items-center justify-center text-pencil/30 italic gap-2">
                                <Send size={32} className="opacity-20 translate-y-2" />
                                <span className="text-sm font-bold uppercase tracking-widest translate-y-2">No subscribers connected</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
