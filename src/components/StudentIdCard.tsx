'use client';

import React from 'react';
import { useXP } from '../context/XPContext';
import { Trophy, Star } from 'lucide-react';

export default function StudentIdCard() {
    const { xp, level, nextLevelXP } = useXP();
    const progress = (xp % 100); // Assuming 100 XP per level for now

    return (
        <div className="mt-auto pt-6 border-t-2 border-black dark:border-gray-700">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-black dark:border-gray-600 shadow-sketch-sm transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black">
                            <Trophy size={20} className="text-black" />
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase text-gray-500">Student ID</div>
                            <div className="font-black text-ink">Level {level}</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-bold uppercase text-gray-500">Total XP</div>
                        <div className="font-black text-accent-blue">{xp}</div>
                    </div>
                </div>

                <div className="relative w-full h-3 bg-gray-200 rounded-full border border-black overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-green-400 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="text-[10px] font-bold text-center mt-1 text-gray-500 uppercase tracking-widest">
                    {100 - (xp % 100)} XP to next level
                </div>
            </div>
        </div>
    );
}
