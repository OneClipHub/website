import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Play, Instagram } from 'lucide-react';

const DiscordIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#07080b] rounded-t-[4rem] pt-24 pb-8 px-6 mt-32 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Left: Logo & Description */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-emerald">
                <Play size={14} className="text-black ml-0.5" fill="currentColor" />
                <Download size={14} className="absolute -bottom-1 -right-1 text-accent-primary bg-[#07080b] rounded-full p-0.5" />
              </div>
              <span className="font-bold text-xl tracking-tight">OneClip Hub</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              The ultimate media downloader for Windows. Speed. Privacy. Power.
            </p>
          </div>

          {/* Center: Product */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2">Product</h4>
            <Link to="/#features" className="text-text-secondary hover:text-accent-primary transition-colors text-sm w-fit">Features</Link>
            <Link to="/#pricing" className="text-text-secondary hover:text-accent-primary transition-colors text-sm w-fit">Pricing</Link>
            <Link to="/changelog" className="text-text-secondary hover:text-accent-primary transition-colors text-sm w-fit">Changelog</Link>
          </div>

          {/* Center: Resources */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2">Resources</h4>
            <Link to="/privacy" className="text-text-secondary hover:text-accent-primary transition-colors text-sm w-fit">Privacy Policy</Link>
            <Link to="/terms" className="text-text-secondary hover:text-accent-primary transition-colors text-sm w-fit">Terms of Service</Link>
            <Link to="/eula" className="text-text-secondary hover:text-accent-primary transition-colors text-sm w-fit">EULA</Link>
            <Link to="/support" className="text-text-secondary hover:text-accent-primary transition-colors text-sm w-fit">Support</Link>
          </div>

          {/* Right: Connect */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2">Connect</h4>
            <div className="flex gap-4">
              <SocialIcon href="https://discord.gg/qqaHfKFAut" icon={<DiscordIcon size={20} />} />
              <SocialIcon href="https://www.instagram.com/onecliphub/" icon={<Instagram size={20} />} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="text-text-secondary text-sm">
            © 2026 OneClip Hub. Made with <span className="text-red-500">❤️</span> in India by One Clip Hub Team
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="text-text-secondary hover:text-accent-primary transition-colors text-sm w-fit">
      {children}
    </a>
  );
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a href={href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-black transition-all duration-300 btn-magnetic">
      {icon}
    </a>
  );
}
