import { useEffect, useState, useRef, useCallback } from 'react';
import './BloomingBranchV2.css';

interface BloomingBranchV2Props {
  className?: string;
}

const TOTAL_FRAMES = 16;
const FRAME_DURATION_MS = 200; // Riproduzione lenta e delicata (200ms per frame, ~3.2s totali)

export default function BloomingBranchV2({ className = '' }: BloomingBranchV2Props) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [useOriginalBg, setUseOriginalBg] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  // Pre-caricamento di tutti i frame in memoria per evitare sfarfallii o ritardi
  useEffect(() => {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const imgClean = new Image();
      imgClean.src = `/blooming-frames/frame_${i}.png`;
      const imgOrig = new Image();
      imgOrig.src = `/blooming-frames-orig/frame_${i}.png`;
    }
  }, []);

  const startSingleLoop = useCallback(() => {
    setCurrentFrame(0);
    setIsFinished(false);
    setIsPlaying(true);
  }, []);

  // IntersectionObserver: avvia il ciclo singolo appena l'utente scorre verso la transizione
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          startSingleLoop();
        }
      },
      { threshold: 0.15, rootMargin: '50px 0px 50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startSingleLoop]);

  // Avanzamento lento dei frame fino al frame 15, poi stop definitivo
  useEffect(() => {
    if (!isPlaying) return;

    if (currentFrame >= TOTAL_FRAMES - 1) {
      setIsPlaying(false);
      setIsFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentFrame((prev) => {
        if (prev >= TOTAL_FRAMES - 1) {
          setIsPlaying(false);
          setIsFinished(true);
          return TOTAL_FRAMES - 1;
        }
        return prev + 1;
      });
    }, FRAME_DURATION_MS);

    return () => clearTimeout(timer);
  }, [isPlaying, currentFrame]);

  const frameSrc = useOriginalBg
    ? `/blooming-frames-orig/frame_${currentFrame}.png`
    : `/blooming-frames/frame_${currentFrame}.png`;

  return (
    <div
      ref={containerRef}
      className={`blooming-branch ${className} ${isFinished ? 'is-finished' : ''}`}
      aria-label="Decorazione ramo fiorito in smarginatura a sinistra"
      onClick={() => {
        // Cliccando sul ramo è possibile far ripartire la lenta fioritura
        startSingleLoop();
      }}
      title="Clicca per rivedere la fioritura lenta del ramo"
    >
      <div className="blooming-branch__inner">
        <img
          src={frameSrc}
          alt={`Fioritura ramo - frame ${currentFrame + 1} di ${TOTAL_FRAMES}`}
          className={`blooming-branch__img ${useOriginalBg ? 'with-dark-bg' : ''}`}
          loading="eager"
          decoding="async"
        />

        {/* Indicatore discreto per riprodurre o commutare sfondo originale se desiderato */}
        <div className="blooming-branch__controls" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="blooming-branch__replay-btn"
            onClick={startSingleLoop}
            aria-label="Rivedi animazione fioritura"
            title="Rivedi animazione fioritura"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            <span>{isFinished ? 'Rivedi' : 'In fiore...'}</span>
          </button>

          <button
            type="button"
            className="blooming-branch__mode-btn"
            onClick={() => setUseOriginalBg((prev) => !prev)}
            title={useOriginalBg ? 'Passa a trasparente' : 'Mostra fondo nero originale'}
          >
            {useOriginalBg ? 'Trasparente' : 'Originale'}
          </button>
        </div>
      </div>
    </div>
  );
}
