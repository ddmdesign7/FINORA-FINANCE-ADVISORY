import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { industriesData } from '../data/industries';
import {
  Building2,
  Cpu,
  HeartPulse,
  Factory,
  Sprout,
  Truck,
  HardHat,
  Zap,
  Radio,
  ShoppingBag,
  Briefcase,
  Globe,
  ArrowRight,
  Search,
  CheckCircle2
} from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIndustries = industriesData.filter(ind =>
    ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ind.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ind.challenges.some(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="Industry Practices | Sector-Specialized Financial Advisory"
        description="Explore Finora's dedicated industry practices across Healthcare, Technology, Real Estate, Manufacturing, Energy, Agriculture, and 6 other critical sectors."
      />

      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[{ label: 'Industries' }]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              <span>SECTOR SPECIALIZATION</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Financial Strategy Grounded in Deep Industry Nuance.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              No two business sectors share identical cash cycles or regulatory mandates. Finora delivers tailored financial architectures designed specifically for your industry's operating physics.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Overview Bar */}
      <section className="py-8 bg-white border-b border-[#E4E7EC] sticky top-[73px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#667085]">
            12 Dedicated Sector Practices
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#667085] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sectors or challenges..."
              className="w-full pl-9 pr-4 py-2 bg-[#F5F7FA] border border-[#E4E7EC] rounded-lg text-xs text-[#17202A] placeholder:text-[#667085] focus:outline-none focus:border-[#155EEF]"
            />
          </div>
        </div>
      </section>

      {/* 12 Industries Grid */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredIndustries.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent flex items-end p-4">
                      <h3 className="font-display font-bold text-xl text-white">
                        {ind.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {ind.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-bold text-[#17202A] uppercase tracking-wider">Common Challenges Solved:</div>
                      {ind.challenges.slice(0, 3).map((chal, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-[#667085]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#155EEF] flex-shrink-0" />
                          <span className="truncate">{chal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E4E7EC]/60 mt-4">
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="text-xs font-bold text-[#155EEF] group-hover:text-[#0D47C2] flex items-center space-x-1 pt-4"
                  >
                    <span>Explore Industry Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0B1F33] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Operating in a Highly Specialized or Hybrid Sector?
          </h2>
          <p className="text-base text-white/75 max-w-xl mx-auto">
            Our multi-disciplinary partners routinely evaluate cross-industry conglomerates and emerging hybrid business models.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/quote"
              className="px-8 py-4 bg-[#155EEF] hover:bg-[#0D47C2] text-white font-semibold text-base rounded-xl shadow-lg transition-colors flex items-center space-x-2"
            >
              <span>Connect with Industry Practice Leaders</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
