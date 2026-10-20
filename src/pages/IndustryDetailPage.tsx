import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { industriesData } from '../data/industries';
import { expertsData } from '../data/experts';
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Building2,
  ShieldAlert,
  TrendingUp,
  Phone,
  Mail,
  ChevronRight,
  Layers
} from 'lucide-react';

interface IndustryDetailPageProps {
  slug: string;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const industry = industriesData.find(i => i.slug === slug);

  if (!industry) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#0B1F33]">Industry Practice Not Found</h1>
        <p className="text-[#667085]">The industry sector practice you requested does not exist or has been relocated.</p>
        <Link to="/industries" className="inline-flex items-center space-x-2 text-[#155EEF] font-bold">
          <span>View All Industry Practices</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // Find practice leader
  const practiceLeader = expertsData.find(e =>
    e.shortBio.toLowerCase().includes(industry.name.toLowerCase()) ||
    e.specialization.some(s => s.toLowerCase().includes(industry.name.toLowerCase()))
  ) || expertsData[1];

  // Other industries
  const otherIndustries = industriesData
    .filter(i => i.id !== industry.id)
    .slice(0, 3);

  return (
    <div className="space-y-0">
      <SEOHelmet
        title={`${industry.name} Financial Advisory Practice | Finora`}
        description={industry.shortDescription}
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Industries', to: '/industries' },
              { label: industry.name }
            ]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
                <span>SECTOR PRACTICE GROUP</span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                {industry.name} Advisory Practice
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                {industry.shortDescription}
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Sector Dynamics Overview */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E4E7EC] shadow-xs space-y-6">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Sector Dynamics & Market Landscape
                </h2>
                <div className="text-sm sm:text-base text-[#667085] leading-relaxed space-y-4">
                  <p>{industry.overview}</p>
                </div>
              </div>

              {/* Challenges vs Solutions Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Critical Sector Friction */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] shadow-xs space-y-4">
                  <div className="flex items-center space-x-2 text-[#D92D20]">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-display font-bold text-lg text-[#0B1F33]">
                      Sector Friction Points
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {industry.challenges.map((chal, idx) => (
                      <div key={idx} className="space-y-1 text-xs sm:text-sm">
                        <div className="font-bold text-[#0B1F33] flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D92D20] flex-shrink-0" />
                          <span>{chal.title}</span>
                        </div>
                        <p className="text-[#667085] pl-3.5 leading-relaxed">{chal.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Finora Strategic Framework */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] shadow-xs space-y-4">
                  <div className="flex items-center space-x-2 text-[#12B76A]">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-display font-bold text-lg text-[#0B1F33]">
                      Finora Solutions
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {industry.solutions.map((sol, idx) => (
                      <div key={idx} className="space-y-1 text-xs sm:text-sm">
                        <div className="font-bold text-[#0B1F33] flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#12B76A] flex-shrink-0" />
                          <span>{sol.title}</span>
                        </div>
                        <p className="text-[#667085] pl-6 leading-relaxed">{sol.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case in Point Banner */}
              <div className="bg-[#0B1F33] rounded-2xl p-8 text-white space-y-4">
                <span className="text-xs font-bold text-[#D6A84F] uppercase tracking-wider">
                  Verified Case Study Available
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  See How We Transformed a Mid-Market Leader in {industry.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Discover the exact financial modeling frameworks and controllership overhauls we deployed to unlock millions in working capital.
                </p>
                <div className="pt-2">
                  <Link
                    to="/clients"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#D6A84F] hover:underline"
                  >
                    <span>Read Full Client Transformation Case Study</span>
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
                  Consult an Industry Partner
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Connect directly with advisors who understand the specific tax codes and unit economics of {industry.name}.
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
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Practice Leader Card */}
              {practiceLeader && (
                <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-xs space-y-4">
                  <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block">
                    Sector Practice Director
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

              {/* Other Related Industries */}
              <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-xs space-y-4">
                <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block">
                  Other Sector Practices
                </span>
                <div className="space-y-3">
                  {otherIndustries.map((oth) => (
                    <Link
                      key={oth.id}
                      to={`/industries/${oth.slug}`}
                      className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#EFF4FF] transition-colors block group"
                    >
                      <div className="text-xs font-bold text-[#0B1F33] group-hover:text-[#155EEF]">
                        {oth.name}
                      </div>
                      <div className="text-[11px] text-[#667085] line-clamp-1 mt-0.5">
                        {oth.shortDescription}
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
