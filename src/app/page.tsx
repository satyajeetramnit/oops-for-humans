import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--accent), #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Object-Oriented Programming for Humans
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem' }}>
        Master OOP concepts with clear explanations, real-world analogies, and interactive examples.
      </p>
      <Link 
        href="/core-concepts" 
        style={{ 
          display: 'inline-block', 
          padding: '1rem 2rem', 
          background: 'var(--accent)', 
          color: '#0f172a', 
          fontWeight: 'bold', 
          borderRadius: '8px', 
          transition: 'transform 0.2s' 
        }}
      >
        Start Learning
      </Link>
    </div>
  );
}
