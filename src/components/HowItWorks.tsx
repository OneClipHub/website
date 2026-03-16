import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      const triggers = cards.map(card =>
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(10px)',
            ease: 'none',
          }),
        }),
      );

      return () => triggers.forEach(t => t.kill());
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-bg-primary z-20">
      {/* Card 1: Paste */}
      <div
        ref={el => cardsRef.current[0] = el}
        className="min-h-[100svh] w-full flex items-center justify-center bg-bg-primary"
      >
        <div className="max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 glass-card aspect-[4/3] lg:aspect-square w-full max-w-sm lg:max-w-md mx-auto flex flex-col items-center justify-center p-4 lg:p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-emerald opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <img
              src="/dashboard.png"
              alt="Paste URL"
              className="w-full h-full object-contain object-center rounded-xl shadow-2xl relative z-10 border border-white/5"
              loading="lazy"
              decoding="async"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="text-accent-primary font-mono text-sm tracking-widest">STEP 01</div>
            <h2 className="text-5xl md:text-7xl font-black">Paste Any URL</h2>
            <p className="text-xl text-text-secondary">
              YouTube, Instagram, TikTok, Pinterest — 6+ platforms auto-detected instantly. Just paste the link, and OneClip Hub handles the rest.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2: Choose */}
      <div
        ref={el => cardsRef.current[1] = el}
        className="min-h-[100svh] w-full flex items-center justify-center bg-bg-primary"
      >
        <div className="max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 glass-card aspect-[4/3] lg:aspect-square w-full max-w-sm lg:max-w-md mx-auto flex flex-col items-center justify-center p-4 lg:p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-emerald opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <img
              src="/format-selector.png"
              alt="Choose Quality"
              className="w-full h-full object-contain object-center rounded-xl shadow-2xl relative z-10 border border-white/5"
              loading="lazy"
              decoding="async"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="text-accent-secondary font-mono text-sm tracking-widest">STEP 02</div>
            <h2 className="text-5xl md:text-7xl font-black">Choose Your Quality</h2>
            <p className="text-xl text-text-secondary">
              4K, 8K, HDR, audio-only — full control over format, codec, and resolution. Extract exactly what you need, nothing more.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3: Download */}
      <div
        ref={el => cardsRef.current[2] = el}
        className="min-h-[100svh] w-full flex items-center justify-center bg-bg-primary"
      >
        <div className="max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 glass-card aspect-[4/3] lg:aspect-square w-full max-w-sm lg:max-w-md mx-auto flex flex-col items-center justify-center p-4 lg:p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-emerald opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <img
              src="/batch-download.png"
              alt="Download Queue"
              className="w-full h-full object-contain object-center rounded-xl shadow-2xl relative z-10 border border-white/5"
              loading="lazy"
              decoding="async"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="text-accent-primary font-mono text-sm tracking-widest">STEP 03</div>
            <h2 className="text-5xl md:text-7xl font-black">Download Instantly</h2>
            <p className="text-xl text-text-secondary">
              Native desktop speed. No browser. No cloud relay. Straight to your machine with real-time WebSocket progress tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
