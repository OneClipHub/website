import React from 'react';
import { Download, Monitor, Smartphone, CheckCircle2 } from 'lucide-react';

export default function DownloadPage() {
  return (
    <div className="min-h-[80vh] pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-7xl font-black mb-6">Get <span className="text-gradient">OneClip Hub</span></h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Choose your platform and start downloading without limits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Desktop App Card */}
        <div className="relative p-[1px] rounded-[2rem] bg-gradient-emerald shadow-[0_0_40px_rgba(0,230,118,0.2)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-emerald text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest z-10">
            RECOMMENDED
          </div>
          <div className="bg-bg-card rounded-[2rem] p-8 flex flex-col h-full relative z-0">
            <div className="w-16 h-16 rounded-2xl bg-bg-secondary border border-white/5 flex items-center justify-center mb-6 text-accent-primary">
              <Monitor size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-2">Windows Desktop</h2>
            <p className="text-text-secondary mb-8">
              The full-featured desktop experience. Bundled with yt-dlp and FFmpeg. 
              No external dependencies required.
            </p>
            
            <div className="flex flex-col gap-3 mb-8 flex-1">
              <div className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-accent-primary" /> 4K/8K/HDR Support</div>
              <div className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-accent-primary" /> Batch & Playlist Mode</div>
              <div className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-accent-primary" /> Image Gallery Ripping</div>
              <div className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-accent-primary" /> 100% Offline Capable</div>
            </div>

            <a 
              href="https://github.com/Divyansh-2903/One-Clip-Hub/releases/download/Release/OneClip.Hub.Setup.1.0.0.exe"
              className="w-full py-4 rounded-xl bg-gradient-emerald text-black font-bold hover:opacity-90 transition-opacity btn-magnetic glow-cta flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download for Windows
            </a>
            <div className="text-center mt-4 text-xs text-text-secondary">
              v1.0.0 • Windows 10/11 (64-bit)
            </div>
          </div>
        </div>

        {/* Mobile App Card */}
        <div className="glass-card p-8 flex flex-col h-full border-white/5 bg-bg-secondary/50 hover:bg-bg-secondary transition-colors duration-300">
          <div className="w-16 h-16 rounded-2xl bg-bg-primary border border-white/5 flex items-center justify-center mb-6 text-text-secondary">
            <Smartphone size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Android App</h2>
          <p className="text-text-secondary mb-8">
            Download on the go. A lightweight version of OneClip Hub optimized for mobile devices.
          </p>
          
          <div className="flex flex-col gap-3 mb-8 flex-1">
            <div className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-text-secondary" /> Up to 4K Support</div>
            <div className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-text-secondary" /> Audio Extraction</div>
            <div className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-text-secondary" /> Background Downloading</div>
            <div className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-text-secondary" /> Share Menu Integration</div>
          </div>

          <button 
            disabled
            className="w-full py-4 rounded-xl border border-white/10 font-bold text-white/50 bg-white/5 cursor-not-allowed flex items-center justify-center gap-2"
          >
            Coming Soon
          </button>
          <div className="text-center mt-4 text-xs text-text-secondary">
            Coming Soon • Android 8.0+
          </div>
        </div>
      </div>
    </div>
  );
}
