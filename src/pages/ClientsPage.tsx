import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { caseStudiesData, testimonialsData, clientLogos } from '../data/clients';
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  ShieldCheck,
  Building,
  Quote,
  Star
} from 'lucide-react';

export const ClientsPage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string>('all');

  const filteredCaseStudies = selectedCase === 'all'
    ? caseStudiesData
    : caseStudiesData.filter(c => c.id === selectedCase);

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="Clients & Case Studies | Proven Financial Transformation"
        description="Explore in-depth case studies and verified client stories documenting how Finora has transformed mid-market balance sheets, raised institutional capital, and optimized taxes."
      />

      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[{ label: 'Clients & Case Studies' }]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              <span>QUANTIFIED CLIENT IMPACT</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Real Transformations. Measurable Financial Results.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Discover how our forensic modeling, controllership overhauls, and tax strategies have delivered tangible ROI for growing companies and family offices worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Client Logos */}
      <section className="py-12 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#667085] mb-8">
            Representative Enterprise Clients & Portfolio Organizations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-center">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-dashed border-[#E4E7EC] bg-[#F5F7FA] flex flex-col items-center justify-center text-center group"
              >
                <span className="font-display font-extrabold text-base text-[#0B1F33]">
                  {logo.symbol}
                </span>
                <span className="text-[10px] text-[#667085] truncate max-w-[120px]">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Deep Dive */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            align="center"
            eyebrow="IN-DEPTH CASE STUDIES"
            heading="Explore How We Solve High-Stakes Financial Challenges"
            description="Examine the exact challenges, quantitative strategies, and multi-million dollar outcomes achieved for our clients."
          />

          <div className="space-y-16">
            {filteredCaseStudies.map((study, idx) => (
              <div
                key={study.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E4E7EC] shadow-sm space-y-0"
              >
                {/* Header Strip */}
                <div className="bg-[#0B1F33] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D6A84F] bg-white/10 px-2.5 py-0.5 rounded">
                        {study.number}
                      </span>
                      <span className="text-xs text-white/70">{study.clientIndustry}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80">{study.subtitle}</p>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-xl text-xs text-white/90 self-start sm:self-auto">
                    <span className="font-semibold block text-[#D6A84F]">Client Scale</span>
                    {study.clientScale}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-10 space-y-8">
                  {/* Key Metrics Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F5F7FA] p-6 rounded-2xl border border-[#E4E7EC]">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center sm:text-left space-y-1">
                        <div className="font-display font-black text-3xl sm:text-4xl text-[#155EEF]">
                          {metric.value}
                        </div>
                        <div className="text-xs font-bold text-[#0B1F33] uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge, Strategy, Solution 3-Column */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[#D92D20] uppercase tracking-wider block">
                        The Challenge
                      </span>
                      <h4 className="font-display font-bold text-base text-[#0B1F33]">Operational Friction</h4>
                      <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[#155EEF] uppercase tracking-wider block">
                        Finora Strategy
                      </span>
                      <h4 className="font-display font-bold text-base text-[#0B1F33]">Quantitative Modeling</h4>
                      <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {study.strategy}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[#12B76A] uppercase tracking-wider block">
                        The Solution
                      </span>
                      <h4 className="font-display font-bold text-base text-[#0B1F33]">Fiduciary Execution</h4>
                      <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Verified Results List */}
                  <div className="pt-4 border-t border-[#E4E7EC] space-y-3">
                    <h4 className="font-display font-bold text-base text-[#0B1F33]">
                      Verified Quantitative Outcomes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {study.results.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#17202A]">
                          <CheckCircle2 className="w-4 h-4 text-[#12B76A] flex-shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Executive Testimonial Quote */}
                  {study.testimonialQuote && (
                    <div className="bg-[#EFF4FF] rounded-2xl p-6 border border-[#155EEF]/20 flex items-start space-x-4">
                      <Quote className="w-8 h-8 text-[#155EEF] flex-shrink-0" />
                      <div className="space-y-2">
                        <p className="font-serif italic text-sm sm:text-base text-[#0B1F33]">
                          "{study.testimonialQuote}"
                        </p>
                        <div className="text-xs font-bold text-[#0B1F33]">
                          {study.testimonialAuthor} — <span className="text-[#667085] font-normal">{study.testimonialRole}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            align="center"
            eyebrow="CLIENT TESTIMONIALS"
            heading="Endorsements From Executive Leadership"
            description="Read verified feedback from founders, CFOs, and managing directors who rely on Finora."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-[#D6A84F]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#0B1F33] leading-relaxed italic font-serif">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E7EC] flex items-center space-x-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#E4E7EC]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#0B1F33]">{test.name}</div>
                    <div className="text-[11px] text-[#667085]">{test.position}, {test.company}</div>
                  </div>
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
            Ready to Write Your Organization's Growth Story?
          </h2>
          <p className="text-base text-white/75 max-w-xl mx-auto">
            Contact our senior partners to benchmark your current metrics and build a custom financial transformation roadmap.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/quote"
              className="px-8 py-4 bg-[#155EEF] hover:bg-[#0D47C2] text-white font-semibold text-base rounded-xl shadow-lg transition-colors flex items-center space-x-2"
            >
              <span>Request Strategic Audit Proposal</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
