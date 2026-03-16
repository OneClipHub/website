import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badRef = useRef<HTMLHeadingElement>(null);
  const goodRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
      });

      tl.fromTo(
        badRef.current?.querySelectorAll('.word'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, ease: 'power2.out' }
      )
        .fromTo(
          goodRef.current?.querySelectorAll('.char'),
          { opacity: 0 },
          { opacity: 1, stagger: 0.02, ease: 'none' },
          '+=0.2'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split(' ').map((word, i, arr) => (
      <React.Fragment key={i}>
        <span className="word inline-block">{word}</span>
        {i !== arr.length - 1 && ' '}
      </React.Fragment>
    ));
  };

  const splitChars = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char opacity-0">{char}</span>
    ));
  };

  return (
    <section ref={containerRef} className="py-40 px-6 max-w-5xl mx-auto relative z-20">
      <div className="flex flex-col gap-16">
        {/* The Bad */}
        <div className="flex flex-col gap-4">
          <div className="text-sm font-mono text-text-secondary uppercase tracking-widest">Most downloaders give you:</div>
          <h3 ref={badRef} className="text-3xl md:text-5xl font-bold text-red-500/60 leading-tight">
            {splitText("Ads, Pop-ups, IP bans, Fake buttons, Malware risk.")}
          </h3>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent"></div>

        {/* The Good */}
        <div className="flex flex-col gap-6">
          <div className="text-sm font-mono text-text-secondary uppercase tracking-widest">OneClip Hub gives you:</div>
          <h2 ref={goodRef} className="text-3xl md:text-5xl font-sans font-bold text-accent-primary leading-tight tracking-tight">
            <div className="block">{splitChars("Speed, Privacy, One click, No sign-up,")}</div>
            <div className="block">{splitChars(" Zero risk, Zero compromise.")}</div>
          </h2>
        </div>
      </div>
    </section>
  );
}
