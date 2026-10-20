import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Lock, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="Finora Client Portal | Coming Q3 2026"
        description="The next-generation secure client portal for live financial telemetry, real-time variance monitoring, and data room synchronization."
      />

      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          <Breadcrumbs
            items={[{ label: 'Client Portal' }]}
            className="text-white/60 justify-center [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F] bg-white/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMING Q3 2026</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            The Finora Executive Financial Intelligence Portal.
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            We are engineering a proprietary, bank-grade client cockpit providing real-time 13-week cash flow telemetry, automated tax document vaults, and live variance tracking.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E4E7EC] shadow-sm space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-xl text-[#0B1F33]">
                Upcoming Portal Capabilities:
              </h2>
              <div className="space-y-3">
                {[
                  'Real-time automated bank reconciliation feeds and 13-week rolling cash forecasts.',
                  'Encrypted virtual data room for M&A due diligence, audits, and investor presentations.',
                  'Direct asynchronous messaging with your assigned practice director and senior controllers.',
                  'Interactive EBITDA margin benchmark visualizer comparing your company against industry medians.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#17202A]">
                    <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E4E7EC]">
              {submitted ? (
                <div className="bg-[#12B76A]/10 border border-[#12B76A]/30 p-4 rounded-xl text-center text-xs text-[#17202A] font-semibold">
                  ✓ You are on the priority beta invite list. We will notify you upon launch.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <span className="text-xs font-bold text-[#17202A] uppercase">Join Beta Access Waitlist</span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="corporate.email@company.com"
                      className="px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] flex-grow focus:outline-none focus:border-[#155EEF]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Request Early Access
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
