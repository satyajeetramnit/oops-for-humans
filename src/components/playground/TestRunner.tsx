'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Play, Beaker, Bug } from 'lucide-react';

type TestCase = {
    id: number;
    name: string;
    status: 'pending' | 'running' | 'passed' | 'failed';
};

export default function TestRunner() {
    const [tests, setTests] = useState<TestCase[]>([
        { id: 1, name: 'should_add_numbers', status: 'pending' },
        { id: 2, name: 'should_handle_null', status: 'pending' },
        { id: 3, name: 'should_throw_error', status: 'pending' },
        { id: 4, name: 'should_save_user', status: 'pending' },
    ]);
    const [isRunning, setIsRunning] = useState(false);
    const [bugMode, setBugMode] = useState(false);

    const resetTests = () => {
        setTests(prev => prev.map(t => ({ ...t, status: 'pending' })));
        setIsRunning(false);
    };

    const runTests = async () => {
        if (isRunning) return;
        setIsRunning(true);
        resetTests();

        // Run tests sequentially
        for (let i = 0; i < tests.length; i++) {
            setTests(prev => prev.map((t, idx) => idx === i ? { ...t, status: 'running' } : t));

            await new Promise(r => setTimeout(r, 800)); // Simulate test duration

            setTests(prev => prev.map((t, idx) => {
                if (idx === i) {
                    // If bug mode is on, fail the 3rd test
                    if (bugMode && i === 2) return { ...t, status: 'failed' };
                    return { ...t, status: 'passed' };
                }
                return t;
            }));
        }
        setIsRunning(false);
    };

    const passedCount = tests.filter(t => t.status === 'passed').length;
    const failedCount = tests.filter(t => t.status === 'failed').length;

    return (
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Unit Testing (Test Runner)</h3>

            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={runTests}
                    disabled={isRunning}
                    className="px-6 py-3 bg-accent-green text-paper font-black rounded-xl shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2 uppercase tracking-widest text-xs transition-all hover:bg-accent-green/90"
                >
                    <Play size={18} fill="currentColor" />
                    Launch Runner
                </button>

                <button
                    onClick={() => setBugMode(!bugMode)}
                    disabled={isRunning}
                    className={`px-6 py-3 font-black rounded-xl shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-all uppercase tracking-widest text-xs border-2 ${bugMode ? 'bg-accent-red text-paper border-accent-red/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'bg-paper text-pencil border-border-base/30 hover:bg-pencil/5'
                        }`}
                >
                    <Bug size={18} />
                    {bugMode ? 'Logic Bug Active' : 'Stable Build'}
                </button>
            </div>

            <div className="bg-slate-950/90 text-slate-100 p-6 rounded-2xl font-mono text-sm border-2 border-border-base shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl pointer-events-none" />

                <div className="mb-6 flex items-center gap-3 text-slate-400 border-b border-white/10 pb-3">
                    <Beaker size={18} />
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px]">TestSuite::CalculatorService</span>
                    <div className="ml-auto flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-red/40" />
                        <div className="w-2 h-2 rounded-full bg-accent-yellow/40" />
                        <div className="w-2 h-2 rounded-full bg-accent-green/40" />
                    </div>
                </div>

                <div className="space-y-3">
                    {tests.map((test) => (
                        <div key={test.id} className="flex items-center gap-4 group">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                {test.status === 'pending' && <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" />}
                                {test.status === 'running' && (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        className="w-4 h-4 border-2 border-accent-yellow border-t-transparent rounded-full"
                                    />
                                )}
                                {test.status === 'passed' && <CheckCircle size={18} className="text-accent-green" />}
                                {test.status === 'failed' && <XCircle size={18} className="text-accent-red" />}
                            </div>
                            <span className={`font-medium transition-colors ${test.status === 'passed' ? 'text-accent-green' :
                                test.status === 'failed' ? 'text-accent-red' :
                                    test.status === 'running' ? 'text-accent-yellow' : 'text-slate-500'
                                }`}>
                                {test.name}<span className="text-slate-700 text-[10px] ml-2 font-black">()</span>
                            </span>
                            {test.status === 'failed' && (
                                <span className="text-[10px] font-black text-accent-red ml-auto bg-accent-red/10 px-2 py-1 rounded-full uppercase tracking-tighter shadow-sm border border-accent-red/20">
                                    Expected 5, got 0
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {!isRunning && (passedCount > 0 || failedCount > 0) && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-8 pt-6 border-t border-white/10 font-black uppercase tracking-[0.2em] text-center text-xs ${failedCount > 0 ? 'text-accent-red' : 'text-accent-green'}`}
                    >
                        {failedCount > 0
                            ? `Build Failed: ${failedCount} Failed / ${passedCount} Passed`
                            : `Build Success: All ${passedCount} Tests Clear`}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
