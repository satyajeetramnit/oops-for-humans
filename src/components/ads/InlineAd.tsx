'use client';

import React from 'react';
import AdSlot from './AdSlot';
import { AD_SLOTS } from '@/config/ads';

export default function InlineAd() {
    return (
        <AdSlot
            type="inline"
            slotId={AD_SLOTS.INLINE.slotId}
            format="fluid"
            layoutKey={AD_SLOTS.INLINE.layoutKey}
            label={AD_SLOTS.INLINE.label}
            className="my-8"
        >
            {/* Fallback / Custom Content */}
            <div className="w-full p-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg flex items-center justify-between gap-4">
                <div className="text-left">
                    <h4 className="font-bold text-amber-800 dark:text-amber-200">Support OOPs4Humans</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">Keep the content free and high-quality!</p>
                </div>
                <button className="whitespace-nowrap px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md text-sm font-bold transition-colors">
                    Buy me a coffee
                </button>
            </div>
        </AdSlot>
    );
}
