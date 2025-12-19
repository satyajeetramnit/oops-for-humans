'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import Header from './Header';
import { usePathname } from 'next/navigation';

export default function Shell({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

            <Sidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />

            <div className="hidden md:block">
                <Header />
            </div>

            <main className={`
                flex-1 
                w-full
                md:ml-[280px] 
                p-4 md:p-8 
                mx-auto
                mt-16 md:mt-0 
                bg-paper
                transition-all duration-300
            `}>
                {children}
            </main>
        </>
    );
}
