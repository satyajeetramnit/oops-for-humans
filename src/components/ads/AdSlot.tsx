'use client';

import React, { useEffect, useState } from 'react';
import { ADSENSE_CLIENT_ID, IS_PRODUCTION, ENABLE_ADSENSE } from '@/config/ads';

type AdType = 'sidebar' | 'inline' | 'banner';

interface AdSlotProps {
    type: AdType;
    slotId?: string;
    format?: string;
    layoutKey?: string;
    width?: number;
    height?: number;
    className?: string;
    label?: string;
    children?: React.ReactNode; // For custom ad content/fallback
}

export default function AdSlot({
    type,
    slotId,
    format = 'auto',
    layoutKey,
    width,
    height,
    className = '',
    label = 'Advertisement',
    children
}: AdSlotProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (IS_PRODUCTION && ENABLE_ADSENSE && slotId) {
            try {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) {
                console.error('AdSense error:', err);
            }
        }
    }, [slotId]);

    // Construct style for fixed size ads
    const style: React.CSSProperties = {
        display: 'block',
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
    };

    if (!isMounted) return null;

    const showAdSense = IS_PRODUCTION && ENABLE_ADSENSE && slotId;

    return (
        <div className={`ad-container my-6 flex flex-col items-center justify-center ${className}`}>
            {label && (
                <div className="w-full text-center mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                        {label}
                    </span>
                </div>
            )}

            <div className={`
                relative overflow-hidden rounded-lg
                ${!showAdSense ? 'bg-gray-100 dark:bg-slate-800/50 border-2 border-dashed border-gray-200 dark:border-slate-700' : ''}
            `}
                style={style}
            >
                {showAdSense ? (
                    <ins
                        className="adsbygoogle"
                        style={{ display: 'block', ...style }}
                        data-ad-client={ADSENSE_CLIENT_ID}
                        data-ad-slot={slotId}
                        data-ad-format={format}
                        data-full-width-responsive="true"
                        data-ad-layout-key={layoutKey}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center min-h-[100px]">
                        {children || (
                            <div className="text-gray-400 dark:text-gray-500">
                                <p className="font-mono text-xs mb-2">Ad Space ({type})</p>
                                <p className="text-xs opacity-75">Visible in Production</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
