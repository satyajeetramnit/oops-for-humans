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
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Unit Testing (Test Runner)</h3>

            <div className="flex items-center gap-4 mb-6">
                <button
                    onClick={runTests}
                    disabled={isRunning}
                    className="px-4 py-2 bg-green-600 text-white font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none disabled:opacity-50 flex items-center gap-2"
                >
                    <Play size={18} />
                    Run Tests
                </button>

                <button
                    onClick={() => setBugMode(!bugMode)}
                    disabled={isRunning}
                    className={`px-4 py-2 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center gap-2 transition-colors ${bugMode ? 'bg-red-100 text-red-800 border-2 border-red-500' : 'bg-gray-100 dark:bg-slate-800 text-gray-800 border-2 border-gray-300'
                        }`}
                >
                    <Bug size={18} />
                    {bugMode ? 'Bug Introduced' : 'No Bugs'}
                </button>
            </div>

            <div className="bg-gray-900 text-gray-200 p-4 rounded-lg font-mono text-sm border-2 border-gray-500 min-h-[200px]">
                <div className="mb-4 flex items-center gap-2 text-gray-400 border-b border-gray-700 pb-2">
                    <Beaker size={16} />
                    <span>Test Suite: CalculatorService</span>
                </div>

                <div className="space-y-2">
                    {tests.map((test) => (
                        <div key={test.id} className="flex items-center gap-3">
                            <div className="w-6 flex justify-center">
                                {test.status === 'pending' && <div className="w-2 h-2 bg-gray-600 rounded-full" />}
                                {test.status === 'running' && (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        className="w-3 h-3 border-2 border-yellow-500 border-t-transparent rounded-full"
                                    />
                                )}
                                {test.status === 'passed' && <CheckCircle size={16} className="text-green-500" />}
                                {test.status === 'failed' && <XCircle size={16} className="text-red-500" />}
                            </div>
                            <span className={`${test.status === 'passed' ? 'text-green-400' :
                                    test.status === 'failed' ? 'text-red-400' :
                                        test.status === 'running' ? 'text-yellow-400' : 'text-gray-500'
                                }`}>
                                {test.name}
                            </span>
                            {test.status === 'failed' && (
                                <span className="text-xs text-red-500 ml-auto">Expected 5, got 0</span>
                            )}
                        </div>
                    ))}
                </div>

                {!isRunning && (passedCount > 0 || failedCount > 0) && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-6 pt-4 border-t border-gray-700 font-bold ${failedCount > 0 ? 'text-red-500' : 'text-green-500'}`}
                    >
                        {failedCount > 0
                            ? `❌ FAILED (${failedCount} failed, ${passedCount} passed)`
                            : `✅ PASSED (${passedCount} tests passed)`}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
