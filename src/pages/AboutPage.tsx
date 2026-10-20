import React from 'react';
import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { StatCounter } from '../components/common/StatCounter';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { expertsData } from '../data/experts';
import {
  ShieldCheck,
  Award,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Globe,
  MapPin,
  Building2,
  Users,
  Compass,
  FileCheck
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const leadershipTeam = expertsData.slice(0, 4);

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="About Us | Principles, Governance & Leadership"
        description="Learn about Finora's mission, fiduciary heritage, global advisory board, and commitment to independent corporate financial excellence."
      />

      {/* Page Header */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[{ label: 'About Finora' }]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              <span>OUR HERITAGE & VISION</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              A Financial Advisory Firm Built on Principles and Results.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Founded on the belief that mid-market businesses deserve the same sophisticated financial intelligence as Fortune 50 enterprises, Finora empowers leadership teams with uncompromised clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Story Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="OUR STORY"
                heading="Founded on Fiduciary Rigor and Quantitative Precision"
                description="For more than two decades, we have bridged the critical gap between raw operational data and executive decision-making."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#667085] leading-relaxed">
                <p>
                  Finora was established by veteran corporate CFOs and investment bankers who recognized a systematic failure in traditional accounting services. Most accounting firms look backward — reporting historic numbers with zero forward-looking strategy.
                </p>
                <p>
                  We built Finora to be forward-looking. We treat financial data as a steering wheel, not a rearview mirror. By uniting forensic accounting, advanced FP&A modeling, corporate taxation, and transaction advisory, we provide our clients with the strategic muscle needed to scale profitably.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E4E7EC]">
                <div className="space-y-1">
                  <div className="text-2xl font-display font-bold text-[#0B1F33]">100%</div>
                  <div className="text-xs text-[#667085]">Independent Fiduciary</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-display font-bold text-[#155EEF]">$14B+</div>
                  <div className="text-xs text-[#667085]">Advised Volume</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Finora executive advisory session"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-[#F5F7FA] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E4E7EC] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EFF4FF] flex items-center justify-center text-[#155EEF]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0B1F33]">Our Mission</h3>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                To eliminate financial ambiguity for growing businesses by delivering institutional-grade financial strategy, meticulous tax planning, and strategic guidance that accelerates enterprise value.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E4E7EC] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FBF4E4] flex items-center justify-center text-[#D6A84F]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0B1F33]">Our Vision</h3>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                To be the world’s most trusted independent financial advisory firm, renowned for quantitative excellence, integrity, and transformative client success stories across global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Engagement Methodology */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="HOW WE WORK"
            heading="The Finora Strategic Framework"
            description="Our proven 4-stage engagement roadmap guarantees data integrity, rapid value identification, and seamless executive execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                step: '01',
                title: 'Financial Discovery & Forensic Audit',
                desc: 'Comprehensive review of historical ledgers, chart of accounts, tax structures, and working capital cycles to baseline operational health.'
              },
              {
                step: '02',
                title: 'Quantitative Strategic Blueprint',
                desc: 'Development of dynamic 3-statement models, 13-week cash flow trajectories, tax optimization pathways, and capital allocation benchmarks.'
              },
              {
                step: '03',
                title: 'Execution & Process Modernization',
                desc: 'Implementation of automated ERP workflows, invoice cycle acceleration, tax structuring filings, and banking relationship restructuring.'
              },
              {
                step: '04',
                title: 'Ongoing Fiduciary Governance',
                desc: 'Continuous board-level reporting, monthly executive variance reviews, covenant compliance tracking, and strategic transaction readiness.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] relative space-y-4 hover:border-[#155EEF] transition-colors"
              >
                <span className="font-display font-black text-3xl text-[#D6A84F]">
                  {item.step}
                </span>
                <h4 className="font-display font-bold text-lg text-[#0B1F33]">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Showcase */}
      <section id="leadership" className="py-20 lg:py-28 bg-[#F5F7FA] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="OUR LEADERSHIP"
              heading="Led by Industry Veterans"
              description="Meet the partners and practice leaders directing Finora's global financial advisory teams."
            />
            <Link
              to="/experts"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-white hover:bg-[#EFF4FF] hover:text-[#155EEF] text-[#0B1F33] text-sm font-semibold rounded-lg transition-colors border border-[#E4E7EC] self-start md:self-auto"
            >
              <span>View All 8 Practice Experts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((expert) => (
              <div
                key={expert.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-xs group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={expert.portrait}
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#0B1F33] text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                    {expert.category}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="font-display font-bold text-base text-[#0B1F33]">
                    {expert.name}
                  </h4>
                  <div className="text-xs text-[#155EEF] font-semibold">
                    {expert.position}
                  </div>
                  <p className="text-xs text-[#667085] line-clamp-2">
                    {expert.shortBio}
                  </p>
                  <div className="pt-2 border-t border-[#E4E7EC]">
                    <Link
                      to={`/experts/${expert.slug}`}
                      className="text-xs font-bold text-[#155EEF] hover:underline flex items-center space-x-1"
                    >
                      <span>View Full Profile</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Locations */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="GLOBAL REACH"
            heading="Serving Clients Across 4 Strategic Financial Hubs"
            description="Our international network provides local regulatory mastery combined with worldwide capital access."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { city: 'New York', address: '450 Lexington Ave, 32nd Fl, NY 10017', role: 'Global Headquarters & Americas Advisory', phone: '+1 (212) 849-2040' },
              { city: 'London', address: '25 Bank Street, Canary Wharf, E14 5JP', role: 'European Capital Markets & Cross-Border Tax', phone: '+44 20 7946 0912' },
              { city: 'Dubai', address: 'DIFC Gate Precinct 4, Level 5, Dubai', role: 'Middle East & Sovereign Wealth Advisory', phone: '+971 4 312 8800' },
              { city: 'Lagos', address: 'Victoria Island Financial Center, Lagos', role: 'Sub-Saharan Emerging Market Practice', phone: '+234 1 279 4000' }
            ].map((loc, idx) => (
              <div key={idx} className="p-6 bg-[#F5F7FA] rounded-2xl border border-[#E4E7EC] space-y-3">
                <div className="flex items-center space-x-2 text-[#155EEF]">
                  <MapPin className="w-5 h-5" />
                  <span className="font-display font-bold text-lg text-[#0B1F33]">{loc.city}</span>
                </div>
                <div className="text-xs font-semibold text-[#D6A84F]">{loc.role}</div>
                <div className="text-xs text-[#667085] leading-relaxed">{loc.address}</div>
                <div className="text-xs font-medium text-[#17202A] pt-2 border-t border-[#E4E7EC]">{loc.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final About CTA */}
      <section className="py-20 bg-[#0B1F33] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Experience the Finora Difference on Your Balance Sheet.
          </h2>
          <p className="text-base text-white/75 max-w-xl mx-auto">
            Schedule an exploratory consultation with our senior advisory team to review your financial roadmap.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/quote"
              className="px-8 py-4 bg-[#155EEF] hover:bg-[#0D47C2] text-white font-semibold text-base rounded-xl shadow-lg transition-colors flex items-center space-x-2"
            >
              <span>Schedule Strategy Session</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
