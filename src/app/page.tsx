import Link from 'next/link';
import { ArrowRight, Code, BookOpen, Trophy, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">

      {/* Hero Section */}
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-ink mb-4">
          Object-Oriented Programming <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            for Humans
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-pencil font-medium leading-relaxed">
          Master OOP concepts with clear explanations, real-world analogies, and interactive playgrounds. No boring lectures allowed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/learn/what-is-oop"
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-full shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            Start Learning <ArrowRight size={20} />
          </Link>
          <Link
            href="/learn/robot-builder"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-black dark:text-white font-bold text-lg rounded-full border-2 border-black dark:border-gray-600 shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            Try Playground <Zap size={20} className="text-yellow-500" />
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-12">
        <FeatureCard
          icon={<BookOpen size={32} className="text-blue-500" />}
          title="Story-Driven"
          description="Learn through analogies like Cookie Factories, Robot Builders, and Magic Boxes."
        />
        <FeatureCard
          icon={<Code size={32} className="text-purple-500" />}
          title="Polyglot"
          description="See code examples in Java, Python, C++, and TypeScript instantly."
        />
        <FeatureCard
          icon={<Trophy size={32} className="text-yellow-500" />}
          title="Gamified"
          description="Earn XP, level up, and track your progress as you master new concepts."
        />
      </div>

    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-xl shadow-sketch hover:-translate-y-1 transition-transform text-left">
      <div className="mb-4 p-3 bg-gray-100 dark:bg-slate-800 rounded-lg w-fit border-2 border-[var(--card-border)]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-ink">{title}</h3>
      <p className="text-pencil">{description}</p>
    </div>
  );
}
