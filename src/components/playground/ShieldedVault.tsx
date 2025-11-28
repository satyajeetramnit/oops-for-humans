'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Edit2, AlertOctagon } from 'lucide-react';

type VaultState = {
    value: string;
    isImmutable: boolean;
};

export default function ShieldedVault() {
    const [vault, setVault] = useState<VaultState>({
        value: 'Gold Bars',
        isImmutable: true,
    });

    const [attemptMessage, setAttemptMessage] = useState<string>('');
    const [isAttacking, setIsAttacking] = useState(false);

    const tryToChange = () => {
        setIsAttacking(true);
        setAttemptMessage('Attempting to modify...');

        setTimeout(() => {
            if (vault.isImmutable) {
                setAttemptMessage('Access Denied! Object is Immutable.');
            } else {
                setVault(prev => ({ ...prev, value: 'Stolen!' }));
                setAttemptMessage('Success! Object modified.');
            }
            setIsAttacking(false);
        }, 1000);
    };

    const createNewObject = () => {
        setVault({ value: 'Diamonds', isImmutable: true });
        setAttemptMessage('Created NEW object with different value.');
    };

    return (
        <div className="my-8 p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[var(--card-border)] pb-2">Immutable Objects (The Vault)</h3>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* The Vault */}
                <div className="relative">
                    <motion.div
                        animate={isAttacking ? { x: [-5, 5, -5, 5, 0] } : {}}
                        className={`w-48 h-48 rounded-xl border-4 flex flex-col items-center justify-center relative shadow-xl transition-colors ${vault.isImmutable ? 'bg-gray-800 border-gray-600 text-white' : 'bg-yellow-100 border-yellow-500 text-yellow-900'
                            }`}
                    >
                        {vault.isImmutable ? <Shield size={48} className="text-blue-400 mb-2" /> : <Lock size={48} className="text-yellow-600 mb-2" />}
                        <div className="font-bold text-lg">Vault Content</div>
                        <div className="text-xl mt-2 font-mono">{vault.value}</div>

                        {vault.isImmutable && (
                            <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold border-2 border-[var(--card-border)] flex items-center gap-1">
                                <Shield size={12} /> Immutable
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 w-64">
                    <div className="p-3 bg-gray-50 dark:bg-slate-800/50 rounded border text-sm text-center min-h-[60px] flex items-center justify-center font-bold">
                        {attemptMessage || "Waiting for action..."}
                    </div>

                    <button
                        onClick={tryToChange}
                        disabled={isAttacking}
                        className="px-4 py-2 bg-red-100 text-red-800 border-2 border-red-500 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2"
                    >
                        <Edit2 size={18} />
                        Try to Modify
                    </button>

                    <button
                        onClick={createNewObject}
                        disabled={isAttacking}
                        className="px-4 py-2 bg-green-100 text-green-800 border-2 border-green-500 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2"
                    >
                        <Shield size={18} />
                        Create New (Modified)
                    </button>

                    <div className="text-xs text-gray-500 text-center">
                        *To "change" an immutable object, you must create a NEW one.
                    </div>
                </div>
            </div>
        </div>
    );
}
