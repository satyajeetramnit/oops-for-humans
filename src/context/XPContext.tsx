'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface XPContextType {
    xp: number;
    level: number;
    addXP: (amount: number) => void;
    nextLevelXP: number;
}

const XPContext = createContext<XPContextType | undefined>(undefined);

export function XPProvider({ children }: { children: React.ReactNode }) {
    // Provider for Gamification System
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [mounted, setMounted] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedXP = localStorage.getItem('oops_academy_xp');
        if (savedXP) {
            const parsedXP = parseInt(savedXP, 10);
            setXp(parsedXP);
            calculateLevel(parsedXP);
        }
        setMounted(true);
    }, []);

    // Save to localStorage whenever XP changes
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('oops_academy_xp', xp.toString());
            calculateLevel(xp);
        }
    }, [xp, mounted]);

    const calculateLevel = (currentXP: number) => {
        // Simple formula: Level = 1 + floor(XP / 100)
        const newLevel = 1 + Math.floor(currentXP / 100);
        setLevel(newLevel);
    };

    const addXP = (amount: number) => {
        setXp((prev) => prev + amount);
    };

    const nextLevelXP = level * 100;

    return (
        <XPContext.Provider value={{ xp, level, addXP, nextLevelXP }}>
            {children}
        </XPContext.Provider>
    );
}

export function useXP() {
    const context = useContext(XPContext);
    if (context === undefined) {
        throw new Error('useXP must be used within an XPProvider');
    }
    return context;
}
