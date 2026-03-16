import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto relative z-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-6">Simple, <span className="text-gradient">Transparent</span> Pricing.</h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Start for free, upgrade when you need more power. No hidden fees.
        </p>
      </div>

      {/* Promotional Banner */}
      <div className="mb-12 relative">
        <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary animate-gradient">
          <div className="bg-bg-card rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 animate-gradient"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-accent-primary text-black px-3 py-1 rounded-full text-xs font-bold">LIMITED TIME OFFER</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-2">
                  Get <span className="text-gradient">Premium</span> FREE Until March 29th!
                </h3>
                <p className="text-text-secondary">
                  Unlock unlimited downloads, 4K/8K quality, and all premium features at no cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Free Tier */}
        <div className="relative glass-card p-8 flex flex-col h-full border-white/5 bg-bg-secondary/50 hover:bg-bg-secondary transition-all duration-500 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-y-8 group-hover:translate-y-0"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Explorer</h3>
              <div className="text-4xl font-black mb-1">₹0 <span className="text-lg text-text-secondary font-medium">/ month</span></div>
              <p className="text-sm text-text-secondary">Perfect for casual users.</p>
            </div>

            <div className="flex-1 flex flex-col gap-4 mb-8">
              <FeatureItem text="15 downloads/day" included={true} />
              <FeatureItem text="Up to 1080p" included={true} />
              <FeatureItem text="Single URL mode" included={true} />
              <FeatureItem text="Download history" included={true} />
              <FeatureItem text="Batch & Playlist" included={false} />
              <FeatureItem text="4K / 8K / HDR" included={false} />
              <FeatureItem text="Cloud sync" included={false} />
            </div>

            <Link to="/download" className="w-full py-4 rounded-xl border border-white/10 font-bold text-white hover:bg-white/5 transition-colors btn-magnetic text-center block">
              Download Now
            </Link>
          </div>
        </div>

        {/* Premium Tier */}
        <div className="relative p-[1px] rounded-[2rem] bg-gradient-emerald shadow-[0_0_40px_rgba(0,230,118,0.2)] transform md:-translate-y-4 group hover:shadow-[0_0_60px_rgba(0,230,118,0.4)] transition-shadow duration-500">
          <div className="absolute inset-0 bg-gradient-emerald blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-emerald text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest z-10">
            MOST POPULAR
          </div>
          <div className="bg-bg-card rounded-[2rem] p-8 flex flex-col h-full relative z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none -translate-y-8 group-hover:translate-y-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-accent-primary">Creator</h3>
                <div className="flex items-end gap-2 mb-1">
                  <div className="text-4xl font-black">₹199 <span className="text-lg text-text-secondary font-medium">/ month</span></div>
                  <div className="text-sm text-text-secondary mb-1.5">or ₹1499 / year</div>
                </div>
                <p className="text-sm text-text-secondary">For creators and professionals.</p>
              </div>

              <div className="flex-1 flex flex-col gap-4 mb-8">
                <FeatureItem text="Unlimited downloads" included={true} />
                <FeatureItem text="4K / 8K / HDR" included={true} />
                <FeatureItem text="Batch & Playlist mode" included={true} />
                <FeatureItem text="Trim before download" included={true} />
                <FeatureItem text="Cloud sync" included={true} />
                <FeatureItem text="Image gallery ripping" included={true} />
                <FeatureItem text="Priority support" included={true} />
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-emerald text-black font-bold hover:opacity-90 transition-opacity btn-magnetic glow-cta">
                Get Premium
              </button>
            </div>
          </div>
        </div>

        {/* Affiliate Tier */}
        <div className="relative glass-card p-8 flex flex-col h-full border-white/5 bg-bg-secondary/50 hover:bg-bg-secondary transition-all duration-500 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-y-8 group-hover:translate-y-0"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Partner</h3>
              <div className="text-4xl font-black mb-1">20% <span className="text-lg text-text-secondary font-medium">commission</span></div>
              <p className="text-sm text-text-secondary">Earn money for every paid user you refer.</p>
            </div>

            <div className="flex-1 flex flex-col gap-4 mb-8">
              <FeatureItem text="Custom referral link" included={true} />
              <FeatureItem text="Partner Dashboard" included={true} />
              <FeatureItem text="Recurring payouts" included={true} />
              <FeatureItem text="Marketing assets" included={true} />
            </div>

            <button disabled className="w-full py-4 rounded-xl border border-white/10 font-bold text-white/50 bg-white/5 cursor-not-allowed mt-auto">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text, included }: { text: string, included: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${included ? 'text-white' : 'text-text-secondary/50'}`}>
      {included ? (
        <Check size={18} className="text-accent-primary shrink-0" />
      ) : (
        <X size={18} className="shrink-0" />
      )}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
