import React, { useState } from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import {
  ArrowRight,
  Shield,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  CheckCircle2,
  Calculator
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setIsCalculatorOpen } = useRouter();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('loading');
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
    }, 600);
  };

  return (
    <footer className="bg-[#0B1F33] text-white pt-16 lg:pt-20 pb-12 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter & Executive Briefing Card */}
        <div className="bg-[#132D48] rounded-2xl p-6 sm:p-10 mb-16 border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[#D6A84F] text-xs font-bold uppercase tracking-widest">
              Executive Financial Intelligence
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
              Stay ahead of market shifts with the Finora Quarterly Brief.
            </h3>
            <p className="text-white/70 text-sm mt-2">
              Curated strategic insights on corporate taxation, liquidity benchmarks, M&A trends, and macroeconomic policy delivered directly to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[340px]">
            {newsletterStatus === 'success' ? (
              <div className="bg-[#12B76A]/20 border border-[#12B76A]/40 text-white rounded-xl p-4 flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#12B76A] flex-shrink-0" />
                <span className="text-sm">Thank you for subscribing. Check your inbox for the latest briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter corporate email address"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#155EEF] flex-grow"
                    required
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="px-6 py-3 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-sm font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap flex items-center justify-center space-x-1.5"
                  >
                    <span>{newsletterStatus === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {newsletterStatus === 'error' && (
                  <p className="text-[#D92D20] text-xs">Please enter a valid email address.</p>
                )}
                <p className="text-[11px] text-white/50">
                  Strictly confidential. No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-lg group-hover:bg-[#155EEF] transition-colors">
                <span className="text-[#D6A84F] font-serif font-black">F</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl text-white tracking-tight leading-none">
                  FINORA
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#D6A84F] uppercase mt-0.5">
                  Finance & Advisory
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-xs leading-relaxed">
              Smarter Financial Decisions. Stronger Business Growth. Empowering ambitious businesses, family offices, and executives worldwide through quantitative rigor and strategic clarity.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-white/60">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/15 hover:text-white rounded-lg transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/15 hover:text-white rounded-lg transition-colors" aria-label="X Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/15 hover:text-white rounded-lg transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/15 hover:text-white rounded-lg transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/15 hover:text-white rounded-lg transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About Finora</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Leadership</Link></li>
              <li><Link to="/experts" className="hover:text-white transition-colors">Advisory Experts</Link></li>
              <li><Link to="/clients" className="hover:text-white transition-colors">Clients & Stories</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Global Offices</Link></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/services/financial-management" className="hover:text-white transition-colors">Financial Management</Link></li>
              <li><Link to="/services/tax-advisory" className="hover:text-white transition-colors">Tax Advisory</Link></li>
              <li><Link to="/services/investment-advisory" className="hover:text-white transition-colors">Investment Advisory</Link></li>
              <li><Link to="/services/accounting" className="hover:text-white transition-colors">Accounting & Reporting</Link></li>
              <li><Link to="/services/business-advisory" className="hover:text-white transition-colors">Business Advisory</Link></li>
              <li><Link to="/services/payroll-services" className="hover:text-white transition-colors">Payroll Services</Link></li>
              <li><Link to="/services" className="text-[#D6A84F] hover:underline pt-1 inline-block">All 12 Services →</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Industries</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/industries/healthcare" className="hover:text-white transition-colors">Healthcare & MedTech</Link></li>
              <li><Link to="/industries/technology" className="hover:text-white transition-colors">Technology & SaaS</Link></li>
              <li><Link to="/industries/real-estate" className="hover:text-white transition-colors">Real Estate & REITs</Link></li>
              <li><Link to="/industries/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link to="/industries/agriculture" className="hover:text-white transition-colors">Agriculture & AgTech</Link></li>
              <li><Link to="/industries/energy" className="hover:text-white transition-colors">Energy & Renewables</Link></li>
              <li><Link to="/industries" className="text-[#D6A84F] hover:underline pt-1 inline-block">All 12 Sectors →</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources & Global Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Resources & Hubs</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/news" className="hover:text-white transition-colors">Financial Academy</Link></li>
              <li><Link to="/clients" className="hover:text-white transition-colors">Case Studies Library</Link></li>
              <li>
                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="hover:text-white transition-colors text-left flex items-center space-x-1 text-[#D6A84F]"
                >
                  <Calculator className="w-3 h-3" />
                  <span>ROI Growth Calculator</span>
                </button>
              </li>
              <li><Link to="/quote" className="hover:text-white transition-colors">Request Consultation</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">Finora Client Portal</Link></li>
            </ul>

            <div className="pt-2 text-[11px] text-white/60 space-y-1">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-[#D6A84F]" />
                <span>New York • London • Dubai • Lagos</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Phone className="w-3 h-3 text-[#155EEF]" />
                <span>+1 (212) 849-2040</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5 text-[#D6A84F]" />
            <span>© 2026 Finora Finance & Advisory. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/404" className="hover:text-white transition-colors">System Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
