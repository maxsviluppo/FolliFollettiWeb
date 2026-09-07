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
            
            // Disconnettiamo l'observer: viene eseguito rigorosamente solo una volta per caricamento
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
    // Si ferma e si blocca permanentemente sull'ultimo fotogramma (libro aperto con la frase)
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
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Ombra di contatto e d'appoggio sul piano d'erba */}
        <div className="book-ground-shadow" aria-hidden="true" />
        <div className="book-contact-crease" aria-hidden="true" />

        {/* Video puro in sola visualizzazione: senza comandi di sistema, senza tasti di ingrandimento o menu */}
        <video
          ref={videoRef}
          className="philosophy-video-player"
          muted
          playsInline
          autoPlay={false}
          loop={false}
          preload="auto"
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          poster="/videolibro_first_frame.png"
          onEnded={handleEnded}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/videolibro_transparent.webm" type="video/webm" />
          <source src="/videolibro.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
