import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { servicesData } from '../data/services';
import { ArrowRight, Search, CheckCircle2, Shield, TrendingUp, Filter } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Corporate Finance', 'Tax & Compliance', 'Operations & Accounting', 'Transaction Advisory'];

  const filteredServices = servicesData.filter(service => {
    const matchesCat = selectedCategory === 'All' ||
      (selectedCategory === 'Corporate Finance' && (service.category.includes('Corporate') || service.category.includes('Strategic') || service.category.includes('Treasury') || service.category.includes('Growth'))) ||
      (selectedCategory === 'Tax & Compliance' && (service.category.includes('Tax') || service.category.includes('Risk') || service.category.includes('Governance'))) ||
      (selectedCategory === 'Operations & Accounting' && (service.category.includes('Accounting') || service.category.includes('Payroll') || service.category.includes('Operations'))) ||
      (selectedCategory === 'Transaction Advisory' && (service.category.includes('M&A') || service.category.includes('Valuation') || service.category.includes('Transaction')));

    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="Our Services | Comprehensive Financial & Strategic Advisory"
        description="Explore Finora's 12 specialized practice areas: Financial Management, Tax Advisory, M&A Due Diligence, Forensic Accounting, Payroll, and Investment Advisory."
      />

      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[{ label: 'Services' }]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              <span>OUR ADVISORY PRACTICES</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Institutional Financial Capabilities for Ambitious Enterprises.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              From day-to-day controllership to multi-hundred million dollar cross-border acquisitions, Finora provides the quantitative expertise and fiduciary execution your business requires.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-[#E4E7EC] sticky top-[73px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B1F33] text-white'
                    : 'bg-[#F5F7FA] text-[#667085] hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#667085] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter services..."
              className="w-full pl-9 pr-4 py-2 bg-[#F5F7FA] border border-[#E4E7EC] rounded-lg text-xs text-[#17202A] placeholder:text-[#667085] focus:outline-none focus:border-[#155EEF]"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border border-[#E4E7EC] p-8">
              <p className="text-base font-semibold text-[#17202A]">No services match your filter criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-[#155EEF] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-extrabold text-2xl text-[#D6A84F]">
                        {service.number}
                      </span>
                      <span className="text-[11px] font-semibold text-[#667085] bg-[#F5F7FA] px-2.5 py-1 rounded-md">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-[#0B1F33] group-hover:text-[#155EEF] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      <div className="text-[11px] font-bold text-[#17202A] uppercase tracking-wider">Key Deliverables:</div>
                      {service.whatWeDo.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-[#667085]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#12B76A] flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E4E7EC] flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-sm font-semibold text-[#155EEF] group-hover:text-[#0D47C2] flex items-center space-x-1.5"
                    >
                      <span>Explore Practice Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0B1F33] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Need a Custom Multi-Disciplinary Advisory Engagement?
          </h2>
          <p className="text-base text-white/75 max-w-xl mx-auto">
            We frequently assemble customized cross-functional teams combining tax, FP&A modeling, and transaction support tailored to your unique situation.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/quote"
              className="px-8 py-4 bg-[#155EEF] hover:bg-[#0D47C2] text-white font-semibold text-base rounded-xl shadow-lg transition-colors flex items-center space-x-2"
            >
              <span>Request Custom Engagement Proposal</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
