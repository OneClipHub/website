import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src', 'pages', 'ChangelogPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const v11JSX = `
      {/* V1.1 Update */}
      <div className="glass-card flex flex-col p-8 md:p-12 border-white/5 bg-bg-secondary/50 mb-12 relative overflow-hidden">
        {/* Glow behind the badge */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6 relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-emerald text-black flex items-center justify-center font-black text-2xl shadow-[0_0_30px_rgba(0,230,118,0.3)]">
            v1.1
          </div>
          <div>
            <h2 className="text-3xl font-bold">The Polish & Power Update</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-accent-primary/20 text-accent-primary text-xs font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">Latest Release</span>
              <div className="text-text-secondary font-mono text-sm">March 2026</div>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none relative">
          <p className="text-lg text-text-secondary mb-10 leading-relaxed border-l-2 border-accent-primary/50 pl-4">
            Honestly, v1.0 was about getting the core experience right. This update is about making it feel finished — the kind of app you're proud to show someone. We've gone through nearly every corner of the app, fixed what was rough, and added the features you kept asking for.
          </p>

          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-primary/10 text-accent-primary shadow-[0_0_15px_rgba(0,230,118,0.2)]">✨</span> 
            What's New
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>Trim Before Download (Experimental)</h4>
              <p className="text-text-secondary text-sm leading-relaxed">You can now trim your media right inside OneClip Hub before the download even starts. No more downloading a full 2-hour video just to grab a 30-second clip. We've also fixed some early bugs around clip accuracy and how segments get merged — it's much more reliable now, though we're still calling it experimental while we keep fine-tuning it.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>"Ask Where to Save" Toggle</h4>
              <p className="text-text-secondary text-sm leading-relaxed">A lot of you wanted more control over where files land. You can now flip a toggle in Settings — either let the app automatically route everything to your default folder, or have it ask you every time. Your call.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>Recently Completed Dashboard</h4>
              <p className="text-text-secondary text-sm leading-relaxed">There's now a dedicated section on the Dashboard that shows everything you've finished downloading in the current session. Hit Play directly from there to open the file in your default media player — no hunting through folders.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>Legal Docs via External Links</h4>
              <p className="text-text-secondary text-sm leading-relaxed">Our Terms of Service, Privacy Policy, and EULA now live at external download links instead of being baked into the installer. This means you'll always get the most current version, and you can actually print them if you need to.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>Global Toast Notifications</h4>
              <p className="text-text-secondary text-sm leading-relaxed">No matter which page you're on, the app will now pop up a notification the moment a download finishes. Small thing, genuinely useful.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>Post-Download Folder Popup</h4>
              <p className="text-text-secondary text-sm leading-relaxed">When a download or batch completes, a quick popup gives you a one-click button to open the destination folder directly. No more manually navigating there every time.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>Audio Conversion — WAV & MP3</h4>
              <p className="text-text-secondary text-sm leading-relaxed">You can now convert your downloaded audio directly to WAV or MP3 from within the app. Whether you need an uncompressed WAV for professional editing or a lightweight MP3 for everyday use, it's handled automatically after the download completes.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">🎨</span> 
            UI & Experience
          </h3>
          <div className="space-y-4 mb-12">
            <div className="pl-4 border-l-2 border-white/10">
              <h4 className="text-white font-bold mb-1">Cinematic Onboarding</h4>
              <p className="text-text-secondary text-sm">First time launching the app? You'll now go through a 4-slide onboarding flow — Welcome, How It Works, Choose Your Folder, then Sign In or start your free trial. It's clean, fast, and sets the right tone.</p>
            </div>
            <div className="pl-4 border-l-2 border-white/10">
              <h4 className="text-white font-bold mb-1">Smarter Format Dropdown</h4>
              <p className="text-text-secondary text-sm">The video format menu now stays hidden until after you've picked your resolution — then it slides in. Keeps things less cluttered and more intuitive.</p>
            </div>
            <div className="pl-4 border-l-2 border-white/10">
              <h4 className="text-white font-bold mb-1">Simplified Format Selector</h4>
              <p className="text-text-secondary text-sm">The format selector has been cleaned up and made more straightforward. Fewer steps, less confusion — pick what you want and go.</p>
            </div>
            <div className="pl-4 border-l-2 border-white/10">
              <h4 className="text-white font-bold mb-1">Your Inputs Are Saved Now</h4>
              <p className="text-text-secondary text-sm">If you're mid-setup and navigate away to another page, the app now remembers your URL and quality settings when you come back. No more re-entering everything from scratch.</p>
            </div>
            <div className="pl-4 border-l-2 border-white/10">
              <h4 className="text-white font-bold mb-1">Cleaner Interface Scaling</h4>
              <p className="text-text-secondary text-sm">Replaced the finicky zoom slider with four clean presets — 80%, 100%, 115%, and 130%. Much more predictable.</p>
            </div>
            <div className="pl-4 border-l-2 border-white/10">
              <h4 className="text-white font-bold mb-1">No More Black Bars</h4>
              <p className="text-text-secondary text-sm">There was a rendering bug where scaling below 100% would leave black bars around the window. That's gone. The app fills your screen properly at every size now.</p>
            </div>
            <div className="pl-4 border-l-2 border-white/10">
              <h4 className="text-white font-bold mb-1">Logo Follows Your Accent Color</h4>
              <p className="text-text-secondary text-sm">The app logo in the sidebar and taskbar now picks up whatever accent color you've chosen. A small detail that makes a big difference in how cohesive everything feels.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]">🛡️</span> 
            Security & Stability
          </h3>
          <div className="space-y-4 mb-12 bg-black/20 p-6 rounded-2xl border border-white/5">
            <div>
              <h4 className="text-white font-bold mb-1">Security Hardening</h4>
              <p className="text-text-secondary text-sm">Several patches have gone in to better protect user credentials, lock down the internal database, and make sure payment and authentication flows are properly encrypted end-to-end.</p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-4">
              <h4 className="text-white font-bold mb-1">Spaces in File Paths — Finally Fixed</h4>
              <p className="text-text-secondary text-sm">If your Windows username, folder name, or project path had a space in it (like Vibe Coding Projects), yt-dlp would silently fail. That's fully resolved now — paths with spaces work exactly as expected.</p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-4">
              <h4 className="text-white font-bold mb-1">Audio Always Included</h4>
              <p className="text-text-secondary text-sm">Some downloads were coming out as video-only with no audio track — a frustrating and inconsistent bug. The audio and video streams now merge reliably every single time.</p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-4">
              <h4 className="text-white font-bold mb-1">Smoother Scrolling on Long Lists</h4>
              <p className="text-text-secondary text-sm">Added stagger animation limits to the Favorites and History tabs so scrolling through large lists no longer causes any lag or jank.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]">🗑️</span> 
            Removed
          </h3>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
              <div>
                <h4 className="text-white font-bold mb-1 line-through decoration-red-500/50">Filename Tab Removed from Settings</h4>
                <p className="text-text-secondary text-sm">The filename template configuration has been removed from the Settings page for now. We felt it added unnecessary complexity at this stage and want to bring it back in a cleaner, more intentional way later.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
              <div>
                <h4 className="text-white font-bold mb-1 line-through decoration-red-500/50">Engines Tab Hidden from Settings</h4>
                <p className="text-text-secondary text-sm">The Engines tab has been temporarily hidden. Engine management is being reworked — we're building a proper engine updater and will re-introduce it once it's done right, not just done.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-accent-primary font-medium italic">Thanks for sticking with OneClip Hub through the early rough edges — this one's for you. More coming in v1.2.0.</p>
          </div>
        </div>
      </div>
`;

// Insert it right after the closing </div> of the intro text (around line 12)
// Before the existing glass-card for v1.0
content = content.replace(
  /(\s*)<div className="glass-card p-8 md:p-12 border-white\/5 bg-bg-secondary\/50">/,
  `$1${v11JSX}\n$1<div className="glass-card p-8 md:p-12 border-white/5 bg-bg-secondary/50">`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added v1.1.0 to ChangelogPage.tsx');
