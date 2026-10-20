import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { expertsData } from '../data/experts';
import { ArrowRight, Search, Award, GraduationCap, ShieldCheck, Mail, Linkedin } from 'lucide-react';

export const ExpertsPage: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const specialties = ['All', 'Tax Advisory', 'M&A & Valuation', 'Corporate FP&A', 'Real Estate', 'Healthcare', 'Risk & Audit'];

  const filteredExperts = expertsData.filter(expert => {
    const matchesSpec = selectedSpecialty === 'All' ||
      expert.specialization.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase())) ||
      expert.position.toLowerCase().includes(selectedSpecialty.toLowerCase());

    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.shortBio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.specialization.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSpec && matchesSearch;
  });

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="Advisory Experts & Partners | Finora Leadership"
        description="Meet Finora's senior partners, CPAs, CFAs, and industry practice leaders driving quantitative excellence across corporate finance and taxation."
      />

      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[{ label: 'Advisory Experts' }]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              <span>PRACTICE LEADERSHIP</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Advisors With Real C-Suite and Institutional Experience.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Our partners and practice leads bring decades of tier-1 investment banking, Big 4 forensic accounting, and corporate CFO backgrounds directly to your board.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-[#E4E7EC] sticky top-[73px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedSpecialty === spec
                    ? 'bg-[#0B1F33] text-white'
                    : 'bg-[#F5F7FA] text-[#667085] hover:bg-slate-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#667085] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search advisors..."
              className="w-full pl-9 pr-4 py-2 bg-[#F5F7FA] border border-[#E4E7EC] rounded-lg text-xs text-[#17202A] placeholder:text-[#667085] focus:outline-none focus:border-[#155EEF]"
            />
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredExperts.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border border-[#E4E7EC] p-8">
              <p className="text-base font-semibold text-[#17202A]">No advisors match your search criteria.</p>
              <button
                onClick={() => { setSelectedSpecialty('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-[#155EEF] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredExperts.map((expert) => (
                <div
                  key={expert.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={expert.portrait}
                        alt={expert.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-[#0B1F33] text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm">
                        {expert.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-display font-bold text-lg text-[#0B1F33] group-hover:text-[#155EEF] transition-colors">
                        {expert.name}
                      </h3>

                      <div className="text-xs font-semibold text-[#155EEF]">
                        {expert.position}
                      </div>

                      <p className="text-xs text-[#667085] line-clamp-3 leading-relaxed">
                        {expert.shortBio}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1">
                        {expert.specialization.slice(0, 2).map((s, idx) => (
                          <span key={idx} className="text-[10px] bg-[#F5F7FA] text-[#667085] px-2 py-0.5 rounded border border-[#E4E7EC]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#E4E7EC]/60 mt-4">
                    <Link
                      to={`/experts/${expert.slug}`}
                      className="text-xs font-bold text-[#155EEF] group-hover:text-[#0D47C2] flex items-center space-x-1 pt-4"
                    >
                      <span>View Full Profile & Bio</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
            Schedule a Direct Advisory Session with a Practice Director.
          </h2>
          <p className="text-base text-white/75 max-w-xl mx-auto">
            Our practice leads are available for confidential consultations regarding corporate tax strategy, capital raising, or controllership audits.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/quote"
              className="px-8 py-4 bg-[#155EEF] hover:bg-[#0D47C2] text-white font-semibold text-base rounded-xl shadow-lg transition-colors flex items-center space-x-2"
            >
              <span>Request Advisory Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
