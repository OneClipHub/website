import { Linkedin, Instagram, Code, Palette, Megaphone, Github } from 'lucide-react';

export default function SocialsPage() {
  return (
    <div className="min-h-[80vh] pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6">Meet the <span className="text-gradient">Team</span></h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          The core team behind OneClip Hub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
        {/* Team Member 1 - Harshil */}
        <div className="glass-card p-8 flex flex-col h-full border-white/5 bg-bg-secondary/50 hover:bg-bg-secondary transition-colors duration-300">
          <div className="w-24 h-24 rounded-full bg-gradient-emerald p-1 mb-6 mx-auto overflow-hidden">
            <img src="/harshil.png" alt="Harshil Bhatnagar" className="w-full h-full rounded-full object-cover object-center" loading="lazy" decoding="async" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-1">Harshil Bhatnagar</h2>
          <p className="text-accent-primary text-sm font-mono text-center mb-6 flex items-center justify-center gap-2">
            <Code size={14} /> Co-founder & Developer
          </p>
          <p className="text-text-secondary text-center text-sm mb-8 flex-1">
            Love to fix bugs and solve real life problems by creating products through coding.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/harshil-bhatnagar-086a79360/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-[#0077b5] hover:text-white transition-all duration-300 btn-magnetic">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/urs.bhatnagar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300 btn-magnetic">
              <Instagram size={18} />
            </a>
            <a href="https://github.com/itsmebhatnagar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-white hover:text-black transition-all duration-300 btn-magnetic">
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Team Member 2 - Divyansh (Uplifted) */}
        <div className="glass-card p-8 flex flex-col h-full border-white/5 bg-bg-secondary/50 hover:bg-bg-secondary transition-all duration-300 md:-translate-y-6 md:scale-105 shadow-2xl shadow-accent-primary/10">
          <div className="w-24 h-24 rounded-full bg-gradient-emerald p-1 mb-6 mx-auto overflow-hidden">
            <img src="/divyansh.png" alt="Divyansh Saxena" className="w-full h-full rounded-full object-cover object-center" loading="lazy" decoding="async" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-1">Divyansh Saxena</h2>
          <p className="text-accent-primary text-sm font-mono text-center mb-6 flex items-center justify-center gap-2">
            <Code size={14} /> Founder & Developer
          </p>
          <p className="text-text-secondary text-center text-sm mb-8 flex-1">
            The mind behind OneClip Hub — from the first line of code to the final design, obsessed with building tools that are fast, private, and beautiful.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/itz-mickeyyyy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-[#0077b5] hover:text-white transition-all duration-300 btn-magnetic">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/itz_mickeyyyy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300 btn-magnetic">
              <Instagram size={18} />
            </a>
            <a href="https://github.com/Divyansh-2903" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-white hover:text-black transition-all duration-300 btn-magnetic">
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Team Member 3 - Harshita */}
        <div className="glass-card p-8 flex flex-col h-full border-white/5 bg-bg-secondary/50 hover:bg-bg-secondary transition-colors duration-300">
          <div className="w-24 h-24 rounded-full bg-gradient-emerald p-1 mb-6 mx-auto overflow-hidden">
            <img src="/harshita.png" alt="Harshita Bhargava" className="w-full h-full rounded-full object-cover object-center" loading="lazy" decoding="async" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-1">Harshita Bhargava</h2>
          <p className="text-accent-primary text-sm font-mono text-center mb-6 flex items-start justify-center gap-2 max-w-[200px] mx-auto">
            <Megaphone size={14} className="shrink-0 mt-0.5" /> 
            <span className="text-left">Social Media Manager & Growth Expert</span>
          </p>
          <p className="text-text-secondary text-center text-sm mb-8 flex-1">
            Building the OneClip Hub community from the ground up — crafting content, driving growth, and making sure the internet knows we exist.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/harshita-bhargava-950527395/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-[#0077b5] hover:text-white transition-all duration-300 btn-magnetic">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/areyyrharshii/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300 btn-magnetic">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
