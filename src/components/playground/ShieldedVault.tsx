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
        <div className="my-8 p-6 bg-paper border-2 border-border-base shadow-sketch rounded-lg">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-border-base pb-2 text-ink">Immutable Objects (The Vault)</h3>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* The Vault */}
                <div className="relative">
                    <motion.div
                        animate={isAttacking ? { x: [-5, 5, -5, 5, 0] } : {}}
                        className={`w-48 h-48 rounded-xl border-4 flex flex-col items-center justify-center relative shadow-xl transition-colors ${vault.isImmutable ? 'bg-ink/90 border-border-base text-paper' : 'bg-accent-yellow/20 border-accent-yellow/50 text-ink'
                            }`}
                    >
                        {vault.isImmutable ? <Shield size={48} className="text-accent-blue mb-2" /> : <Lock size={48} className="text-accent-yellow mb-2" />}
                        <div className="font-bold text-lg uppercase tracking-widest text-[10px] opacity-70">Vault Content</div>
                        <div className="text-xl mt-2 font-mono font-bold">{vault.value}</div>

                        {vault.isImmutable && (
                            <div className="absolute -top-3 -right-3 bg-accent-blue text-paper px-2 py-1 rounded-full text-xs font-bold border-2 border-border-base flex items-center gap-1 shadow-lg">
                                <Shield size={12} /> Immutable
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 w-64">
                    <div className="p-3 bg-pencil/5 rounded border border-border-base/30 text-sm text-center min-h-[60px] flex items-center justify-center font-bold text-ink">
                        {attemptMessage || "Waiting for action..."}
                    </div>

                    <button
                        onClick={tryToChange}
                        disabled={isAttacking}
                        className="px-4 py-2 bg-red-500/10 text-red-600 border-2 border-red-500/50 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 hover:bg-red-500/20 transition-colors"
                    >
                        <Edit2 size={18} />
                        Try to Modify
                    </button>

                    <button
                        onClick={createNewObject}
                        disabled={isAttacking}
                        className="px-4 py-2 bg-green-500/10 text-green-600 border-2 border-green-500/50 font-bold rounded shadow-sketch-sm active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 hover:bg-green-500/20 transition-colors"
                    >
                        <Shield size={18} />
                        Create New (Modified)
                    </button>

                    <div className="text-xs text-pencil text-center italic">
                        *To "change" an immutable object, you must create a NEW one.
                    </div>
                </div>
            </div>
        </div>
    );
}
