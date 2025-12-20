import type { Metadata } from "next";
import { Nunito, Fira_Code } from "next/font/google";
import "./globals.css";
import "./highlight-theme.css";


const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oops-for-humans.vercel.app'),
  title: {
    default: "OOPs for Humans Academy",
    template: "%s | OOPs for Humans"
  },
  description: "Master Object-Oriented Programming with interactive toys, real-world analogies, and polyglot code examples. Learn Java, Python, C++, and TypeScript concepts visually.",
  keywords: ["OOP", "Object Oriented Programming", "Learn Coding", "Java", "Python", "TypeScript", "C++", "Programming Concepts", "Interactive Learning"],
  authors: [{ name: "Ankit Raj" }, { name: "Satyajeet Ramnit" }],
  creator: "Ankit Raj, Satyajeet Ramnit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oops-for-humans.vercel.app",
    title: "OOPs for Humans Academy",
    description: "Master OOP concepts with interactive toys and real-world analogies.",
    siteName: "OOPs for Humans",
    images: [
      {
        url: "https://i.ibb.co/Q7sgrkry/oopspreview.png",
        width: 1200,
        height: 630,
        alt: "OOPs for Humans Academy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "OOPs for Humans Academy",
    description: "Master OOP concepts with interactive toys and real-world analogies.",
    images: ["https://i.ibb.co/Q7sgrkry/oopspreview.png"],
    creator: "@AnkitRajCode, @SatyajeetRamnit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { LanguageProvider } from "../context/LanguageContext";
import { XPProvider } from "../context/XPContext";
import { ThemeProvider } from "../components/ThemeProvider";
import Shell from "../components/Shell";

import Script from "next/script";
import { ADSENSE_CLIENT_ID, IS_PRODUCTION, ENABLE_ADSENSE } from "@/config/ads";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen">
        {IS_PRODUCTION && ENABLE_ADSENSE && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <LanguageProvider>
          <XPProvider>
            <ThemeProvider>
              <Shell>
                {children}
              </Shell>
            </ThemeProvider>
          </XPProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
