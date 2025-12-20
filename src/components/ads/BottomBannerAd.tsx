'use client';

import React from 'react';
import AdSlot from './AdSlot';
import { AD_SLOTS } from '@/config/ads';

export default function BottomBannerAd() {
    return (
        <div className="mt-12 mb-8">
            <AdSlot
                type="banner"
                slotId={AD_SLOTS.BANNER.slotId}
                format="auto"
                label={AD_SLOTS.BANNER.label}
            >
                {/* Fallback / Custom Content */}
                <div className="w-full h-[200px] flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Recommended Reading</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-center max-w-md">
                        Explore our curated list of programming books and resources to level up your skills.
                    </p>
                </div>
            </AdSlot>
        </div>
    );
}
