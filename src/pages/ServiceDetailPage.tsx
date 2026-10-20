import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { servicesData } from '../data/services';
import { expertsData } from '../data/experts';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  FileSpreadsheet,
  Download,
  Calendar,
  Phone,
  Mail,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#0B1F33]">Service Practice Not Found</h1>
        <p className="text-[#667085]">The financial service practice you requested does not exist or has been relocated.</p>
        <Link to="/services" className="inline-flex items-center space-x-2 text-[#155EEF] font-bold">
          <span>View All Available Services</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // Find a related practice leader
  const practiceLeader = expertsData.find(e =>
    e.specialization.some(spec => service.title.toLowerCase().includes(spec.toLowerCase()) || service.category.toLowerCase().includes(spec.toLowerCase()))
  ) || expertsData[0];

  // Related services
  const relatedServices = servicesData
    .filter(s => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  const fallbackServices = relatedServices.length >= 2
    ? relatedServices
    : servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="space-y-0">
      <SEOHelmet
        title={`${service.title} | Finora Advisory Practice`}
        description={service.shortDescription}
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Services', to: '/services' },
              { label: service.title }
            ]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-display font-black text-2xl text-[#D6A84F] bg-white/10 px-2.5 py-0.5 rounded">
                {service.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
                {service.category}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Body (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Practice Overview Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E4E7EC] shadow-xs space-y-6">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Practice Overview & Scope
                </h2>
                <div className="text-sm sm:text-base text-[#667085] leading-relaxed space-y-4">
                  <p>{service.overview}</p>
                </div>

                <div className="pt-6 border-t border-[#E4E7EC]">
                  <h3 className="font-display font-bold text-lg text-[#0B1F33] mb-4">
                    Core Capabilities & Engagement Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.whatWeDo.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 bg-[#F5F7FA] p-3.5 rounded-xl border border-[#E4E7EC]">
                        <CheckCircle2 className="w-4 h-4 text-[#12B76A] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-[#17202A]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scope & Methodology Deliverables Breakdown */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E4E7EC] shadow-xs space-y-6">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Engagement Methodology & Lifecycle
                </h2>
                <div className="space-y-4">
                  {[
                    { phase: 'Phase 1: Baseline Architecture', desc: 'Ledger reconciliation, system inventory, historical variance audit, and data cleansing.' },
                    { phase: 'Phase 2: Strategy & Governance Model', desc: 'Drafting of formal financial policies, KPI scorecards, tax positions, and board reporting decks.' },
                    { phase: 'Phase 3: Execution & Integration', desc: 'Direct execution alongside client team, automating reporting schedules and bank syndication.' },
                    { phase: 'Phase 4: Ongoing Review & Fiduciary Oversight', desc: 'Monthly close reviews, rolling forecast re-benchmarking, and statutory audit readiness.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#0B1F33] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                        0{idx + 1}
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-[#0B1F33]">{item.phase}</div>
                        <div className="text-xs text-[#667085]">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Impact Banner */}
              <div className="bg-[#0B1F33] rounded-2xl p-8 text-white space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#D6A84F] uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Demonstrated Client Impact</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  Measurable Operational and Valuation Outcomes
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Engagements in our {service.title} practice typically generate an immediate 3x to 8x ROI in working capital recovery, tax minimization, and accelerated deal closure timelines within the first 6 to 12 months.
                </p>
                <div className="pt-2">
                  <Link
                    to="/clients"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#D6A84F] hover:underline"
                  >
                    <span>Read Verified Client Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Consultation Proposal Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] shadow-sm space-y-5">
                <h3 className="font-display font-bold text-xl text-[#0B1F33]">
                  Request Engagement Proposal
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Speak directly with the practice director for {service.title} to receive a customized scope of work and fee schedule.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-2.5 text-xs text-[#17202A]">
                    <Phone className="w-4 h-4 text-[#155EEF]" />
                    <a href="tel:+12128492040" className="hover:underline font-medium">+1 (212) 849-2040</a>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs text-[#17202A]">
                    <Mail className="w-4 h-4 text-[#155EEF]" />
                    <a href="mailto:advisory@finoragroup.com" className="hover:underline font-medium">advisory@finoragroup.com</a>
                  </div>
                </div>

                <Link
                  to="/quote"
                  className="w-full py-3.5 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm transition-colors flex items-center justify-center space-x-2 block text-center"
                >
                  <span>Request Advisory Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Practice Leader Card */}
              {practiceLeader && (
                <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-xs space-y-4">
                  <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block">
                    Practice Leader
                  </span>
                  <div className="flex items-center space-x-3">
                    <img
                      src={practiceLeader.portrait}
                      alt={practiceLeader.name}
                      className="w-14 h-14 rounded-full object-cover border border-[#E4E7EC]"
                    />
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#0B1F33]">
                        {practiceLeader.name}
                      </h4>
                      <div className="text-xs text-[#155EEF] font-semibold">
                        {practiceLeader.position}
                      </div>
                      <div className="text-[11px] text-[#667085]">
                        {practiceLeader.category}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#667085] line-clamp-3 leading-relaxed">
                    {practiceLeader.shortBio}
                  </p>
                  <Link
                    to={`/experts/${practiceLeader.slug}`}
                    className="text-xs font-bold text-[#155EEF] hover:underline flex items-center space-x-1"
                  >
                    <span>View Advisor Bio</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* Related Services */}
              <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-xs space-y-4">
                <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block">
                  Complementary Practices
                </span>
                <div className="space-y-3">
                  {fallbackServices.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/services/${rel.slug}`}
                      className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#EFF4FF] transition-colors block group"
                    >
                      <div className="text-xs font-bold text-[#0B1F33] group-hover:text-[#155EEF]">
                        {rel.title}
                      </div>
                      <div className="text-[11px] text-[#667085] line-clamp-1 mt-0.5">
                        {rel.shortDescription}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
