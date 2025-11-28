import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <div className="p-6 bg-yellow-100 dark:bg-yellow-900/20 rounded-full border-4 border-black dark:border-yellow-500">
                <AlertTriangle size={64} className="text-black dark:text-yellow-500" />
            </div>

            <h1 className="text-6xl font-black text-ink">404</h1>
            <h2 className="text-2xl font-bold text-pencil">Page Not Found</h2>

            <p className="max-w-md text-lg text-ink/80">
                Oops! It seems this object has been garbage collected or never existed in the heap.
            </p>

            <Link
                href="/"
                className="mt-8 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 transition-all flex items-center gap-2"
            >
                <Home size={20} />
                Return to Main
            </Link>
        </div>
    );
}
