import React, { useRef, useEffect, useState } from 'react';
import './PhilosophyVideo.css';

export const PhilosophyVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isEnded, setIsEnded] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Assicuriamoci che il video sia inizialmente fermo al primo fotogramma
    video.pause();
    video.currentTime = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Quando la sezione entra nella visuale con lo scroll (soglia ~30%)
          // e non è ancora stata riprodotta in questo caricamento del sito
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            setHasStarted(true);
            
            // Disconnettiamo l'observer: viene eseguito solo una volta per sessione
            observer.disconnect();

            video.currentTime = 0;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch((err) => {
                console.warn("Autoplay video libro:", err);
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleEnded = () => {
    // Si blocca permanentemente sull'ultimo fotogramma dell'animazione
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsEnded(true);
  };

  return (
    <section className="philosophy-video-section" id="filosofia">
      <div 
        ref={containerRef} 
        className={`philosophy-video-container ${hasStarted ? 'book-opened' : 'book-closed'} ${isEnded ? 'animation-completed' : ''}`}
      >
        {/* Doppia ombra d'appoggio per un realistico effetto tridimensionale "appoggiato" sul fondo */}
        <div className="book-ground-shadow" aria-hidden="true" />
        <div className="book-contact-crease" aria-hidden="true" />

        {/* Video trasparente: bloccato sul primo fotogramma finché non arriva lo scroll, poi si ferma sull'ultimo fotogramma */}
        <video
          ref={videoRef}
          className="philosophy-video-player"
          muted
          playsInline
          autoPlay={false}
          loop={false}
          preload="auto"
          poster="/videolibro_first_frame.png"
          onEnded={handleEnded}
        >
          <source src="/videolibro_transparent.webm" type="video/webm" />
          <source src="/videolibro.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
