import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                paper: "var(--paper)",
                ink: "var(--ink)",
                pencil: "var(--pencil)",
                "accent-blue": "var(--accent-blue)",
                "accent-yellow": "var(--accent-yellow)",
            },
            fontFamily: {
                nunito: ["var(--font-nunito)"],
                "fira-code": ["var(--font-fira-code)"],
            },
            boxShadow: {
                "sketch": "2px 2px 0px 0px #000000",
                "sketch-sm": "1px 1px 0px 0px #000000",
                "sketch-lg": "4px 4px 0px 0px #000000",
            },
        },
    },
    plugins: [],
};
export default config;
