import React from 'react';
import { Mail, MessageSquare, Instagram, Github } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-[80vh] pt-40 pb-20 px-6 max-w-4xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6">How can we <span className="text-gradient">help?</span></h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Choose the best way to get in touch with our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Discord Community */}
        <a href="https://discord.gg/qqaHfKFAut" target="_blank" rel="noopener noreferrer" className="glass-card p-8 flex flex-col items-center text-center hover:bg-bg-secondary transition-colors duration-300 group">
          <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Discord Community</h2>
          <p className="text-text-secondary mb-6 flex-1">
            Join our active community for instant support, feature requests, and discussions with other users.
          </p>
          <span className="text-accent-primary font-medium flex items-center gap-2">
            Join Server &rarr;
          </span>
        </a>

        {/* Email Support */}
        <a href="mailto:onecliphub@gmail.com" className="glass-card p-8 flex flex-col items-center text-center hover:bg-bg-secondary transition-colors duration-300 group">
          <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
            <Mail size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Email Queries</h2>
          <p className="text-text-secondary mb-6 flex-1">
            For official queries, business partnerships, or account-related issues, send us an email.
          </p>
          <span className="text-accent-primary font-medium flex items-center gap-2">
            onecliphub@gmail.com &rarr;
          </span>
        </a>

        {/* Issue Reporting - GitHub */}
        <a href="https://github.com/Divyansh-2903/One-Clip-Hub/issues" target="_blank" rel="noopener noreferrer" className="glass-card p-8 flex flex-col items-center text-center hover:bg-bg-secondary transition-colors duration-300 group">
          <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
            <Github size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Issue Reporting</h2>
          <p className="text-text-secondary mb-6 flex-1">
            Found a bug? Report it directly on our GitHub repository so our developers can track and fix it.
          </p>
          <span className="text-accent-primary font-medium flex items-center gap-2">
            Open an Issue &rarr;
          </span>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/onecliphub/" target="_blank" rel="noopener noreferrer" className="glass-card p-8 flex flex-col items-center text-center hover:bg-bg-secondary transition-colors duration-300 group">
          <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
            <Instagram size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Social Media</h2>
          <p className="text-text-secondary mb-6 flex-1">
            Follow us for updates, tips, and reach out via direct messages for quick questions.
          </p>
          <span className="text-accent-primary font-medium flex items-center gap-2">
            @onecliphub &rarr;
          </span>
        </a>
      </div>
    </div>
  );
}
