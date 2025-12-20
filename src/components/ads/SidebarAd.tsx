'use client';

import React from 'react';
import AdSlot from './AdSlot';
import { AD_SLOTS } from '@/config/ads';

export default function SidebarAd() {
    return (
        <div className="hidden lg:block w-[300px] shrink-0 sticky top-4 h-fit ml-8">
            <AdSlot
                type="sidebar"
                slotId={AD_SLOTS.SIDEBAR.slotId}
                width={AD_SLOTS.SIDEBAR.width}
                height={AD_SLOTS.SIDEBAR.height}
                label={AD_SLOTS.SIDEBAR.label}
            >
                {/* Fallback / Custom Content */}
                <div className="flex flex-col items-center justify-center h-[600px] w-full bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
                    <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-2">Master OOPs</h3>
                    <p className="text-sm text-center text-slate-600 dark:text-slate-400 px-4">
                        Unlock the full potential of Object-Oriented Programming with our premium course.
                    </p>
                    <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-bold transition-colors">
                        Get Started
                    </button>
                </div>
            </AdSlot>
        </div>
    );
}
