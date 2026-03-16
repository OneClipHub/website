import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Download, Github, LayoutGrid, Play, Settings, History, Star, Search, ChevronDown, Smartphone, Monitor } from 'lucide-react';

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          titleLine1Ref.current?.querySelectorAll('.word'),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          '-=0.6'
        )
        .fromTo(
          titleLine2Ref.current?.querySelectorAll('.word'),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          '-=0.6'
        )
        .fromTo(
          mockupRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          buttonsRef.current?.children,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
          '-=0.8'
        );

      // Floating animation loop
      gsap.to(mockupRef.current, {
        y: -8,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string, className: string = "") => {
    return text.split(' ').map((word, i) => (
      <span key={i} className={`word inline-block mr-3 ${className}`}>{word}</span>
    ));
  };

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* The Orb Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80vh] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(0,230,118,0.6) 0%, rgba(198,241,53,0.2) 30%, rgba(0,230,118,0.05) 60%, transparent 70%)'
        }}
      />

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
        <div ref={badgeRef} className="relative group">
          {/* Glow effect behind badge */}
          <div className="absolute inset-0 bg-gradient-emerald blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
          
          {/* Badge container */}
          <div className="relative flex items-center gap-2 bg-bg-card/90 border border-border-emerald/50 rounded-full px-5 py-2 backdrop-blur-md shadow-lg shadow-accent-primary/10 hover:shadow-accent-primary/20 transition-all duration-300 hover:scale-[1.02]">
            {/* Status indicator with gradient */}
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary animate-pulse shadow-lg shadow-accent-primary/50"></div>
            </div>
            
            {/* Text with gradient effect */}
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
              Now Live on
            </span>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-emerald">
              Windows
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-2" ref={titleLine1Ref}>
          {splitText("Stop Losing Content")}
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic leading-[1.1] mb-8" ref={titleLine2Ref}>
          {splitText("to the Internet.", "text-gradient")}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mb-10 px-4">
          Download any video, audio, or image in 4K/8K — from multiple platforms in One click.
        </p>

        <div ref={buttonsRef} className={`flex flex-col sm:flex-row items-center gap-4 mb-16 sm:mb-20 w-full sm:w-auto px-4 sm:px-0 transition-all duration-300 ${scrolled ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <div className="relative z-50 w-full sm:w-auto">
            <div className="flex items-center bg-gradient-emerald rounded-full glow-cta btn-magnetic p-[1px] w-full sm:w-auto">
              <Link to="/download" className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-black px-6 py-4 font-bold text-base sm:text-lg hover:bg-black/5 transition-colors rounded-l-full">
                <Download size={20} />
                Download for Windows
              </Link>
              <div className="w-px h-8 bg-black/20"></div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-black px-4 py-4 font-bold text-lg hover:bg-black/5 transition-colors rounded-r-full flex items-center justify-center shrink-0"
              >
                <ChevronDown size={20} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-full bg-bg-card border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
              <Link to="/download" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-white">
                <Monitor size={18} className="text-accent-primary shrink-0" />
                <div className="text-sm font-medium">Windows Desktop</div>
              </Link>
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 text-white/50 border-t border-white/5 cursor-not-allowed">
                <div className="flex items-center gap-3">
                  <Smartphone size={18} className="text-text-secondary/50 shrink-0" />
                  <div className="text-sm font-medium">Android App</div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-sm shrink-0">Soon</span>
              </div>
            </div>
          </div>

          <a href="https://github.com/Divyansh-2903/One-Clip-Hub" className="flex items-center justify-center gap-2 bg-transparent border border-text-secondary/30 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg btn-magnetic hover:bg-white/5 w-full sm:w-auto">
            <Github size={20} />
            View on GitHub
          </a>
        </div>

        {/* Authentic Product Screenshot */}
        <div ref={mockupRef} className="relative w-full max-w-5xl mx-auto mt-8">
          <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl glass-card border border-white/10 p-2 sm:p-3 group">
            {/* Subtle internal glow effect */}
            <div className="absolute inset-0 bg-gradient-emerald opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>

            <img
              src="/dashboard.png"
              alt="OneClip Hub Dashboard"
              className="w-full h-auto rounded-xl sm:rounded-[1.5rem] shadow-inner border border-white/5 relative z-10 will-change-transform"
              loading="eager"
              decoding="async"
              priority
              style={{ imageRendering: 'auto' }}
            />
          </div>
          {/* Ambient Depth Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-primary/20 blur-[120px] -z-10 opacity-60 pointer-events-none"></div>
        </div>
      </div>

      {/* Platform Marquee */}
      <div className="absolute bottom-0 w-full overflow-hidden py-4 border-t border-white/5 bg-bg-primary/50 backdrop-blur-sm z-40" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex animate-marquee items-center gap-12 text-text-secondary/50 font-medium text-sm uppercase tracking-widest">
          {Array(4).fill(['YouTube', 'Instagram', 'TikTok', 'X', 'Pinterest', 'Facebook', 'Vimeo', 'SoundCloud']).flat().map((platform, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50"></span>
              {platform}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {Array(4).fill(['YouTube', 'Instagram', 'TikTok', 'X', 'Pinterest', 'Facebook', 'Vimeo', 'SoundCloud']).flat().map((platform, i) => (
            <span key={`duplicate-${i}`} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50"></span>
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
