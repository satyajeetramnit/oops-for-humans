'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { useState } from 'react';

const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '4px',
                color: '#e2e8f0',
                padding: '0.25rem 0.5rem',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'background 0.2s'
            }}
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
};

export default function MarkdownRenderer({ content }: { content: string }) {
    return (
        <div className="markdown-body">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                    h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mb-6 text-ink" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-[var(--card-border)] pb-2 text-ink" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-8 mb-4 text-ink" {...props} />,
                    h4: ({ node, ...props }) => <h4 className="text-lg font-bold mt-6 mb-3 text-ink" {...props} />,
                    p: ({ node, ...props }) => <p className="mb-5 text-lg leading-relaxed text-ink" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-2 text-ink leading-relaxed" {...props} />,
                    ul: ({ node, ...props }) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }} {...props} />,
                    ol: ({ node, ...props }) => <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }} {...props} />,
                    code: ({ node, className, children, ...props }: any) => {
                        const match = /language-(\w+)/.exec(className || '')
                        const isInline = !match
                        return isInline ? (
                            <code style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '0.2em 0.4em', borderRadius: '4px', color: '#38bdf8', fontFamily: 'monospace' }} {...props}>
                                {children}
                            </code>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    },
                    pre: ({ node, children, ...props }: any) => {
                        // Extract text content from children for copy button
                        let codeText = '';
                        if (children && children.props && children.props.children) {
                            codeText = String(children.props.children).replace(/\n$/, '');
                        }

                        return (
                            <div style={{ position: 'relative', marginBottom: '2rem' }}>
                                <CopyButton text={codeText} />
                                <pre style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', overflowX: 'auto', border: '1px solid var(--border)' }} {...props}>
                                    {children}
                                </pre>
                            </div>
                        )
                    },
                    blockquote: ({ node, ...props }) => <blockquote style={{ borderLeft: '4px solid var(--accent)', background: 'rgba(56, 189, 248, 0.05)', padding: '1rem 1.5rem', borderRadius: '0 8px 8px 0', margin: '0 0 1.5rem 0', fontStyle: 'italic', color: '#94a3b8' }} {...props} />,
                    table: ({ node, ...props }) => <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}><table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border)' }} {...props} /></div>,
                    th: ({ node, ...props }) => <th style={{ padding: '0.75rem', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.05)', fontWeight: '600', textAlign: 'left' }} {...props} />,
                    td: ({ node, ...props }) => <td style={{ padding: '0.75rem', border: '1px solid var(--border)' }} {...props} />,
                    img: ({ node, ...props }) => <img style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', margin: '1.5rem 0' }} {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
