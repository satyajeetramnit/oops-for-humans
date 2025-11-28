import type { Metadata } from "next";
import { Nunito, Fira_Code } from "next/font/google";
import "./globals.css";
import 'highlight.js/styles/atom-one-dark-reasonable.css';


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
  title: "OOPs for Humans Academy",
  description: "Master OOP concepts with interactive toys and real-world analogies.",
};

import { LanguageProvider } from "../context/LanguageContext";
import { XPProvider } from "../context/XPContext";
import { ThemeProvider } from "../components/ThemeProvider";
import Shell from "../components/Shell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${firaCode.variable}`}>
      <body className="flex min-h-screen">
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
