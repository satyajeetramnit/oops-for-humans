'use client';

import React from 'react';
import { Copy } from 'lucide-react';

export const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 rounded-md hover:bg-gray-200 text-pencil transition-colors"
            title="Copy code"
        >
            {copied ? <span className="text-xs font-bold text-accent-green">Copied!</span> : <Copy size={16} />}
        </button>
    );
};
