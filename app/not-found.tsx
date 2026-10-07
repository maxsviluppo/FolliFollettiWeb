import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '4rem 1.5rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Pagina non trovata</h1>
      <p style={{ marginBottom: '1.5rem', color: '#4a5c38' }}>
        La pagina che cerchi non esiste o è stata spostata.
      </p>
      <Link href="/" style={{ color: '#3d7a22', fontWeight: 700 }}>
        Torna alla home
      </Link>
    </main>
  );
}
