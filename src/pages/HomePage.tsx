import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { StatCounter } from '../components/common/StatCounter';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { Testimonials } from '../components/common/Testimonials';
import { servicesData } from '../data/services';
import { industriesData } from '../data/industries';
import { newsArticlesData } from '../data/news';
import { clientLogos, academyArticles } from '../data/clients';
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Award,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Building,
  Cpu,
  Activity,
  Compass,
  FileText,
  Lock,
  PieChart,
  Users,
  Layers,
  Calculator
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, setIsCalculatorOpen } = useRouter();

  // 6 Services for Home
  const homeServices = servicesData.slice(0, 6);
  // 3 News articles for Home
  const homeArticles = newsArticlesData.slice(0, 3);

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="Finora | Smarter Financial Decisions. Stronger Business Growth."
        description="Finora is a premier financial advisory firm helping businesses navigate financial complexity through strategic planning, accounting, tax advisory, and corporate consulting."
      />

      {/* 10. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F7FA] to-white pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 border-b border-[#E4E7EC]">
        {/* Subtle geometric background accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#155EEF]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#D6A84F]/5 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-[#E4E7EC] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#155EEF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                  Financial Clarity. Business Confidence.
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B1F33] tracking-tight leading-[1.1]">
                Smarter Financial Decisions.{' '}
                <span className="text-[#155EEF]">Stronger Business Growth.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                We help businesses navigate financial complexity through strategic planning, expert advisory and practical solutions designed for sustainable growth.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/quote"
                  className="px-7 py-4 bg-[#155EEF] hover:bg-[#0D47C2] text-white font-semibold text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/services"
                  className="px-7 py-4 bg-white hover:bg-[#F5F7FA] text-[#0B1F33] border border-[#E4E7EC] font-semibold text-base rounded-xl transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Quick trust metrics */}
              <div className="pt-6 border-t border-[#E4E7EC] grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-display font-bold text-[#0B1F33]">$14B+</div>
                  <div className="text-xs text-[#667085]">Transactions Advised</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-[#155EEF]">99.4%</div>
                  <div className="text-xs text-[#667085]">Audit Pass Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-[#D6A84F]">4,500+</div>
                  <div className="text-xs text-[#667085]">Clients Globally</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/80 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
                    alt="Financial advisors and business executives discussing financial data in a modern office"
                    className="w-full h-[420px] sm:h-[480px] object-cover"
                  />
                </div>

                {/* Floating Metric Badge 1 */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-[#E4E7EC] hidden sm:flex items-center space-x-3 max-w-[240px]">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#155EEF] flex-shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#667085]">EBITDA Margin Lift</div>
                    <div className="text-sm font-bold text-[#0B1F33]">+280 bps Median Gain</div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 */}
                <div className="absolute -top-4 -right-4 bg-[#0B1F33] text-white rounded-xl p-3.5 shadow-xl border border-white/10 hidden sm:flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D6A84F] text-[#0B1F33] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Institutional Grade</div>
                    <div className="text-xs font-bold text-[#D6A84F]">Fiduciary Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TRUST SECTION */}
      <section className="py-12 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#667085] mb-8">
            Trusted by ambitious businesses and growing organizations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 items-center justify-center">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-dashed border-[#E4E7EC] bg-[#F5F7FA] hover:bg-white hover:border-[#155EEF]/40 transition-all flex flex-col items-center justify-center text-center group cursor-default"
              >
                <span className="font-display font-extrabold text-sm sm:text-base text-[#0B1F33] tracking-wider group-hover:text-[#155EEF] transition-colors">
                  {logo.symbol}
                </span>
                <span className="text-[10px] text-[#667085] truncate max-w-[110px]">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. ABOUT PREVIEW SECTION */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
                  alt="Finora team collaborating on strategic finance"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="text-xs font-semibold text-[#D6A84F] uppercase tracking-wider">Independent Advisory</div>
                    <div className="text-base font-bold">Unconflicted Counsel Built Strictly for Client Growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="WHO WE ARE"
                heading="Financial Expertise Built Around Your Goals"
                description="Finora combines financial expertise, strategic thinking and practical execution to help businesses make confident decisions and build long-term value."
              />

              {/* Three Feature Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="bg-white p-5 rounded-xl border border-[#E4E7EC] shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#155EEF]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B1F33]">Strategic Thinking</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Clear financial insight designed around your specific corporate milestones.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E4E7EC] shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-[#FBF4E4] flex items-center justify-center text-[#D6A84F]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B1F33]">Personalized Advisory</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Custom-tailored frameworks matched to your industry dynamics and scale.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E4E7EC] shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#155EEF]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B1F33]">Long-Term Partnership</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    We work alongside your executive leadership as your enterprise evolves.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-[#155EEF] hover:text-[#0D47C2] group"
                >
                  <span>Discover Finora's Full Story & Leadership</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SERVICES SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="OUR SERVICES"
              heading="Financial Solutions for Every Stage of Growth"
              description="Comprehensive advisory, accounting, taxation, and treasury management built to deliver institutional clarity."
            />
            <Link
              to="/services"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-[#F5F7FA] hover:bg-[#EFF4FF] hover:text-[#155EEF] text-[#0B1F33] text-sm font-semibold rounded-lg transition-colors border border-[#E4E7EC] self-start md:self-auto"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {homeServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Badge */}
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

                  <p className="text-sm text-[#667085] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E4E7EC] flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm font-semibold text-[#155EEF] group-hover:text-[#0D47C2] flex items-center space-x-1.5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. INDUSTRIES SECTION */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <SectionHeading
              align="center"
              eyebrow="SECTOR SPECIALIZATION"
              heading="Expertise That Understands Your Industry"
              description="Every sector carries unique regulatory frameworks, revenue cycles, and capital dynamics. Explore our tailored industry advisory practices."
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {industriesData.map((industry) => (
              <div
                key={industry.id}
                className="bg-white rounded-xl p-5 border border-[#E4E7EC] shadow-xs hover:border-[#155EEF] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#155EEF] group-hover:bg-[#155EEF] group-hover:text-white transition-colors">
                    <Building className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B1F33] group-hover:text-[#155EEF] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-[#667085] line-clamp-2 leading-relaxed">
                    {industry.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E4E7EC]">
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="text-xs font-semibold text-[#155EEF] hover:underline flex items-center space-x-1"
                  >
                    <span>Explore Sector</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. CORE VALUES (Dark Navy Section) */}
      <section className="py-20 lg:py-28 bg-[#0B1F33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            dark
            eyebrow="OUR FOUNDATION"
            heading="The Principles Behind Our Work"
            description="Our core values guide every client interaction, financial model, and strategic recommendation we deliver."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {[
              {
                title: 'Integrity',
                desc: 'We operate with uncompromising transparency, fiduciary rigor, and statutory accountability.',
                icon: ShieldCheck
              },
              {
                title: 'Excellence',
                desc: 'We maintain the highest institutional standards in every quantitative model and engagement.',
                icon: Award
              },
              {
                title: 'Trust',
                desc: 'We build multi-decade relationships through unwavering consistency, discretion, and reliability.',
                icon: Lock
              },
              {
                title: 'Innovation',
                desc: 'We continuously modernize how financial challenges are solved through technology and data.',
                icon: Zap
              },
              {
                title: 'Partnership',
                desc: 'Your corporate milestones become the direct blueprint for our financial architecture.',
                icon: Users
              }
            ].map((value, idx) => {
              const IconComp = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#132D48] rounded-xl p-6 border border-white/10 space-y-3 hover:border-[#D6A84F]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D6A84F]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {value.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. FINANCIAL ACADEMY */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="FINANCIAL ACADEMY"
              heading="Learn. Grow. Make Better Financial Decisions."
              description="Practical financial education, curriculum guides, and executive briefing notes for entrepreneurs and business leaders."
            />
            <Link
              to="/news"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-[#F5F7FA] hover:bg-[#EFF4FF] hover:text-[#155EEF] text-[#0B1F33] text-sm font-semibold rounded-lg transition-colors border border-[#E4E7EC] self-start md:self-auto"
            >
              <span>Explore Financial Insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {academyArticles.map((article) => (
              <div
                key={article.id}
                className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#155EEF] bg-[#EFF4FF] px-2.5 py-1 rounded">
                      {article.level}
                    </span>
                    <span className="text-xs text-[#667085]">{article.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0B1F33]">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#667085] leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E4E7EC]">
                  <Link
                    to={`/news/${article.slug}`}
                    className="text-xs font-bold text-[#155EEF] hover:underline flex items-center space-x-1"
                  >
                    <span>Read Study Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. STATISTICS SECTION */}
      <section className="py-20 lg:py-24 bg-[#0B1F33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            <StatCounter value="25+" label="Years of Experience" description="Guiding mid-market & enterprise boards" dark />
            <StatCounter value="4,500+" label="Businesses Supported" description="Across scale-ups, funds, and corporations" dark />
            <StatCounter value="18+" label="Markets Served" description="North America, Europe, MENA, and Asia" dark />
            <StatCounter value="150+" label="Professionals & Advisors" description="CPAs, CFAs, tax attorneys, and CFMs" dark />
          </div>
        </div>
      </section>

      {/* 18. BUSINESS GROWTH SECTION */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Financial Visual */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E4E7EC] space-y-6">
                <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#D92D20]" />
                    <div className="w-3 h-3 rounded-full bg-[#D6A84F]" />
                    <div className="w-3 h-3 rounded-full bg-[#12B76A]" />
                    <span className="text-xs font-bold text-[#0B1F33] ml-2">Finora Enterprise Strategy Terminal</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#12B76A] bg-[#12B76A]/10 px-2 py-0.5 rounded">Live Modeling</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#17202A]">Revenue Growth Acceleration</span>
                      <span className="text-[#155EEF] font-bold">+28%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#155EEF] h-full rounded-full w-[78%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#17202A]">Operational Cost Efficiency</span>
                      <span className="text-[#12B76A] font-bold">+19%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#12B76A] h-full rounded-full w-[65%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#17202A]">Corporate Investment Performance</span>
                      <span className="text-[#D6A84F] font-bold">+34%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#D6A84F] h-full rounded-full w-[84%]" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F5F7FA] rounded-xl text-xs text-[#667085] leading-relaxed border border-[#E4E7EC]">
                  *Performance benchmarks represent illustrative median outcomes across audited historical Finora client engagements over 24-month operating horizons.
                </div>
              </div>
            </div>

            {/* Right Column: Approach */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="OUR APPROACH"
                heading="From Financial Complexity to Clear Direction"
                description="We combine forensic accounting, dynamic quantitative modeling, and seasoned C-suite advisory to turn ambiguous ledgers into clear growth trajectories."
              />

              <div className="space-y-4 text-sm text-[#667085] leading-relaxed">
                <p>
                  Most companies struggle not from lack of ambition, but from fragmented financial visibility. Decisions are made on gut feeling rather than cash conversion physics.
                </p>
                <p>
                  Finora embeds alongside your leadership team, designing dynamic rolling forecasts, optimizing your effective tax rate, and structuring debt and equity to protect enterprise valuation.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-sm font-semibold rounded-xl shadow-sm transition-colors flex items-center space-x-2"
                >
                  <span>Explore Our Approach</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-[#0B1F33] border border-[#E4E7EC] text-sm font-semibold rounded-xl transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-[#D6A84F]" />
                  <span>Test ROI Calculator</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 19. TESTIMONIALS & SOCIAL PROOF */}
      <Testimonials />

      {/* 20. NEWS PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="NEWS & PERSPECTIVES"
              heading="Insights for What's Next"
              description="Stay informed with executive briefings on tax reform, corporate finance, and macroeconomic trends."
            />
            <Link
              to="/news"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-white hover:bg-[#EFF4FF] hover:text-[#155EEF] text-[#0B1F33] text-sm font-semibold rounded-lg transition-colors border border-[#E4E7EC] self-start md:self-auto"
            >
              <span>View All Insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {homeArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B1F33] text-white text-xs font-semibold px-2.5 py-1 rounded">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs text-[#667085] flex items-center space-x-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#0B1F33] group-hover:text-[#155EEF] transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#667085] line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E4E7EC]/60 mt-4">
                  <Link
                    to={`/news/${article.slug}`}
                    className="text-xs font-bold text-[#155EEF] group-hover:text-[#0D47C2] flex items-center space-x-1 pt-4"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 21. FINAL HOME CTA (Full-Width Navy) */}
      <section className="py-20 lg:py-28 bg-[#0B1F33] text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#155EEF]/20 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
            PARTNER WITH FINORA
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Ready to Make Your Next Financial Move With Confidence?
          </h2>

          <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Talk with our senior partners and advisors about your goals and discover a tailored strategy built around your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-4 bg-[#155EEF] hover:bg-[#0D47C2] text-white font-semibold text-base rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-base rounded-xl transition-colors flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
