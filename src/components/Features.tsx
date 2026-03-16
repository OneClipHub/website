import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Cloud, HardDrive, Lock, ShieldCheck, Terminal, Youtube, Instagram, Image as ImageIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto relative z-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-6">Built for <span className="text-gradient">Power Users</span>.</h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Three core engines working in harmony to deliver the ultimate downloading experience.
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card 1: Large Span - Format Control */}
        <div className="glass-card p-8 flex flex-col lg:col-span-2 relative overflow-hidden group min-h-[450px]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between relative z-20 gap-4">
            <div>
              <h3 className="text-3xl font-bold mb-2">Total Format Control.</h3>
              <p className="text-text-secondary max-w-md">Extract up to 8K video, choose specific codecs, or rip pristine audio directly from any post.</p>
            </div>
            <span className="text-xs font-mono text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full border border-accent-primary/20 shrink-0 self-start sm:self-auto">CONFIGURABLE</span>
          </div>

          <div className="flex-1 relative w-full mt-8 flex justify-center lg:justify-end items-end">
            <div className="relative w-full sm:w-[85%] lg:w-[75%] rounded-t-2xl overflow-hidden shadow-2xl border border-white/10 border-b-0 group-hover:-translate-y-2 transition-transform duration-500 will-change-transform">
              <img src="/format-selector.png" alt="Extraction Config" className="w-full h-auto object-cover object-top" loading="lazy" decoding="async" style={{ imageRendering: 'auto' }} />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-secondary to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Card 2: Small Span - Batch Mode */}
        <div className="glass-card p-8 flex flex-col lg:col-span-1 relative overflow-hidden group min-h-[450px]">
          <div className="mb-6 relative z-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Batch Mode.</h3>
              <span className="text-xs font-mono text-accent-secondary bg-accent-secondary/10 px-3 py-1 rounded-full border border-accent-secondary/20 flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse"></span>
                LIVE
              </span>
            </div>
            <p className="text-text-secondary text-sm">Paste dozens of URLs at once. The engine processes them concurrently, saving you hours.</p>
          </div>

          <div className="flex-1 relative w-full mt-4 flex justify-center items-center">
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.03] transition-transform duration-500 will-change-transform">
              <img src="/batch-download.png" alt="Batch Download" className="w-full h-auto object-cover object-left-top" loading="lazy" decoding="async" style={{ imageRendering: 'auto' }} />
            </div>
          </div>
        </div>

        {/* Card 3: Full Width - Privacy Protocol */}
        <div className="glass-card p-8 flex flex-col md:flex-row gap-8 lg:col-span-3 relative overflow-hidden group">
          <div className="flex flex-col justify-center md:w-1/3">
            <div className="mb-4">
              <span className="text-xs font-mono text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full border border-accent-primary/20 mb-6 inline-block">PRIVACY VERIFIED</span>
              <h3 className="text-3xl font-bold mb-4">Your Data.<br />Your Machine.</h3>
              <p className="text-text-secondary">OneClip Hub runs perfectly locally. Your files are downloaded directly to your hard drive. Zero tracking, zero middleman servers.</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:pl-8 md:border-l md:border-white/5 place-content-center">
            <PrivacyItem icon={<HardDrive size={24} />} text="Local Storage" active={true} />
            <PrivacyItem icon={<Cloud size={24} />} text="Cloud Optional" active={true} />
            <PrivacyItem icon={<Lock size={24} />} text="Cookies: On-Device" active={true} />
            <PrivacyItem icon={<ShieldCheck size={24} />} text="Zero Uploads" active={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyItem({ icon, text, active }: { icon: React.ReactNode, text: string, active: boolean }) {
  return (
    <div className="flex items-center gap-4 bg-bg-secondary/50 border border-white/5 rounded-xl p-4 transition-all duration-300 hover:bg-bg-secondary hover:border-accent-primary/30 group">
      <div className={`text-${active ? 'accent-primary' : 'text-secondary'} transition-colors duration-300`}>
        {icon}
      </div>
      <span className="font-medium text-white">{text}</span>
      <div className="ml-auto">
        <CheckCircle2 size={18} className={`text-${active ? 'accent-primary' : 'text-secondary/30'} transition-colors duration-300`} />
      </div>
    </div>
  );
}
