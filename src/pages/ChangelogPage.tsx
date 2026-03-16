import React from 'react';

export default function ChangelogPage() {
  return (
    <div className="min-h-[80vh] pt-40 pb-20 px-6 max-w-4xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6">Changelogs</h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Track updates, improvements, and new features in OneClip Hub.
        </p>
      </div>

      <div className="glass-card p-8 md:p-12 border-white/5 bg-bg-secondary/50">
        <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-emerald text-black flex items-center justify-center font-black text-2xl">
            v1.0
          </div>
          <div>
            <h2 className="text-3xl font-bold">Initial Release</h2>
            <div className="text-text-secondary font-mono text-sm mt-1">October 2026</div>
          </div>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none">
          <p className="text-lg text-text-secondary mb-8">
            The first official release of OneClip Hub — a powerful, self-contained desktop media downloader for Windows.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-accent-primary">✨</span> What's New
          </h3>
          <p className="text-text-secondary mb-6">This is the initial public release. All core features are live:</p>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-accent-primary">🚀</span> Downloading
              </h4>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Unified media downloader with smart platform auto-detection</li>
                <li>Download from YouTube, Instagram, TikTok, Twitter/X, Pinterest, Facebook, Vimeo, SoundCloud & 100s more</li>
                <li>4K / HDR support with AV1, VP9, HEVC codecs</li>
                <li>Video extraction to MP4, WEBM</li>
                <li>Granular format selection (resolution, codec, file size, framerate)</li>
                <li>1-Click Quick Download for instant max-quality grabbing</li>
                <li>Audio extraction to MP3, M4A, WAV</li>
                <li>Age-restricted & private content support via browser cookie import</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-accent-primary">📋</span> Playlists & Batch
              </h4>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Full YouTube playlist & channel parsing with selective sync</li>
                <li>Mass batch downloading from mixed-platform URL lists</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-accent-primary">🖼️</span> Image Galleries
              </h4>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Pinterest board & Instagram carousel extraction</li>
                <li>Visual masonry grid preview before downloading</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-accent-primary">⚙️</span> Core Engine
              </h4>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Bundled yt-dlp, ffmpeg, and gallery-dl — zero external dependencies</li>
                <li>Real-time WebSocket progress updates (speed, ETA, file size)</li>
                <li>Custom filename templates with dynamic variables</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-accent-primary">☁️</span> Cloud Sync
              </h4>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Download history log (searchable)</li>
                <li>Favorites Vault for bookmarking URLs</li>
                <li>Optional Supabase cross-device sync</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-accent-primary">📦</span> Installation
              </h4>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Download OneClipHub-Setup-1.0.0.exe below</li>
                <li>Run the installer</li>
                <li>Launch and start downloading — no additional setup needed ✅</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-8">
              <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
                <span>⚠️</span> Disclaimer
              </h4>
              <p className="text-red-400/80 text-sm">
                For personal, offline use only. Please respect the Terms of Service of platforms you download from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
