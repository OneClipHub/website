import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Play, Zap, Menu, X, ChevronDown, Monitor, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out px-6 py-3 rounded-full flex items-center justify-between md:justify-center gap-4 md:gap-8 w-[90%] md:w-auto max-w-7xl ${scrolled
          ? 'bg-[#0a0c10]/70 backdrop-blur-xl border border-border-emerald shadow-lg'
          : 'bg-transparent border border-transparent'
          }`}
      >
        <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-emerald shrink-0">
            <Play size={14} className="text-black ml-0.5" fill="currentColor" />
            <Download size={14} className="absolute -bottom-1 -right-1 text-accent-primary bg-bg-primary rounded-full p-0.5" />
          </div>
          <span className="font-bold text-lg tracking-tight whitespace-nowrap">OneClip Hub</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
          {isHome ? (
            <>
              <a href="#features" className="hover:text-white transition-colors hover:-translate-y-[1px]">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors hover:-translate-y-[1px]">Pricing</a>
            </>
          ) : (
            <>
              <Link to="/#features" className="hover:text-white transition-colors hover:-translate-y-[1px]">Features</Link>
              <Link to="/#pricing" className="hover:text-white transition-colors hover:-translate-y-[1px]">Pricing</Link>
            </>
          )}
          <Link to="/download" className="hover:text-white transition-colors hover:-translate-y-[1px]">Download</Link>
          <Link to="/changelog" className="hover:text-white transition-colors hover:-translate-y-[1px]">Changelog</Link>
          <Link to="/socials" className="hover:text-white transition-colors hover:-translate-y-[1px]">Team</Link>
        </div>

        <div className={`hidden md:flex relative transition-all duration-300 ease-in-out ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="flex items-center h-10 bg-gradient-emerald rounded-full glow-cta btn-magnetic min-w-[140px]">
            <Link to="/download" className="flex-1 flex items-center justify-center gap-2 text-black px-6 h-full font-bold text-sm hover:bg-black/5 transition-colors rounded-full whitespace-nowrap">
              <Zap size={16} fill="currentColor" />
              Download Now
            </Link>
          </div>
        </div>

        <button
          className="md:hidden text-text-secondary hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] bg-[#0a0c10]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 z-40 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 text-lg font-medium text-text-secondary">
              {isHome ? (
                <>
                  <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Features</a>
                  <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Pricing</a>
                </>
              ) : (
                <>
                  <Link to="/#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Features</Link>
                  <Link to="/#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Pricing</Link>
                </>
              )}
              <Link to="/download" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Download</Link>
              <Link to="/changelog" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Changelog</Link>
              <Link to="/socials" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Team</Link>
            </div>

            <Link to="/download" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-gradient-emerald text-black px-5 py-3 rounded-xl font-semibold text-base w-full">
              <Zap size={18} fill="currentColor" />
              Download Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
