import React, { useState, useRef } from 'react';
import { Link } from '../../context/RouterContext';
import { SectionHeading } from './SectionHeading';
import { testimonialsData } from '../../data/clients';
import { TestimonialItem } from '../../types';
import {
  Star,
  ShieldCheck,
  Quote,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  TrendingUp,
  MapPin,
  CheckCircle2,
  SlidersHorizontal,
  ArrowRight,
  Award,
  Sparkles
} from 'lucide-react';

interface TestimonialsProps {
  heading?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  showFilters?: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  heading = 'Trusted by C-Suite Leaders, Founders & Institutional Boards',
  eyebrow = 'CLIENT VERIFICATION & SOCIAL PROOF',
  description = 'Read verified testimonials and quantified outcomes from executives who trust Finora for strategic finance, forensic accounting, capital optimization, and M&A advisory.',
  className = '',
  showFilters = true
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'ticker' | 'cards' | 'spotlight'>('ticker');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speed, setSpeed] = useState<'normal' | 'slow'>('normal');
  const [spotlightIndex, setSpotlightIndex] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Industry filters
  const industries = ['All', 'Technology', 'Manufacturing', 'Healthcare', 'Real Estate', 'Energy', 'Private Equity', 'Transportation'];

  const filteredTestimonials = selectedIndustry === 'All'
    ? testimonialsData
    : testimonialsData.filter(t => t.industry?.toLowerCase() === selectedIndustry.toLowerCase());

  // Split into two lanes for rich dual-lane continuous marquee
  const lane1 = filteredTestimonials.slice(0, Math.ceil(filteredTestimonials.length / 2));
  const lane2 = filteredTestimonials.slice(Math.ceil(filteredTestimonials.length / 2));

  // Duplicated for seamless loop
  const loopLane1 = [...lane1, ...lane1, ...lane1, ...lane1];
  const loopLane2 = lane2.length > 0 ? [...lane2, ...lane2, ...lane2, ...lane2] : loopLane1;

  // Scroll manual carousel
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const currentSpotlight = filteredTestimonials[spotlightIndex] || filteredTestimonials[0] || testimonialsData[0];

  return (
    <section className={`py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden border-b border-[#E4E7EC] ${className}`}>
      {/* Decorative backdrop gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#155EEF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#D6A84F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow={eyebrow}
            heading={heading}
            description={description}
          />

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            {/* View Mode Switcher */}
            <div className="inline-flex items-center bg-white p-1 rounded-xl border border-[#E4E7EC] shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('ticker')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'ticker'
                    ? 'bg-[#0B1F33] text-white shadow-xs'
                    : 'text-[#667085] hover:text-[#0B1F33]'
                }`}
              >
                Scrolling Stream
              </button>
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-[#0B1F33] text-white shadow-xs'
                    : 'text-[#667085] hover:text-[#0B1F33]'
                }`}
              >
                Interactive Grid
              </button>
              <button
                type="button"
                onClick={() => setViewMode('spotlight')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'spotlight'
                    ? 'bg-[#0B1F33] text-white shadow-xs'
                    : 'text-[#667085] hover:text-[#0B1F33]'
                }`}
              >
                Spotlight Story
              </button>
            </div>

            <Link
              to="/clients"
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-white hover:bg-[#EFF4FF] hover:text-[#155EEF] text-[#0B1F33] text-xs font-bold rounded-xl transition-colors border border-[#E4E7EC] shadow-2xs"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Executive Social Proof Trust Ticker Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-white rounded-2xl border border-[#E4E7EC] shadow-xs">
          <div className="flex items-center space-x-3.5 px-2">
            <div className="w-10 h-10 rounded-xl bg-[#12B76A]/10 text-[#12B76A] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-extrabold text-base sm:text-lg text-[#0B1F33]">99.4%</div>
              <div className="text-[11px] text-[#667085] font-medium leading-tight">Executive Satisfaction</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 px-2 border-l border-[#E4E7EC]/80">
            <div className="w-10 h-10 rounded-xl bg-[#155EEF]/10 text-[#155EEF] flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-extrabold text-base sm:text-lg text-[#0B1F33]">$3.8B+</div>
              <div className="text-[11px] text-[#667085] font-medium leading-tight">Transactions & Assets Advised</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 px-2 border-l border-[#E4E7EC]/80">
            <div className="w-10 h-10 rounded-xl bg-[#D6A84F]/10 text-[#D6A84F] flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-extrabold text-base sm:text-lg text-[#0B1F33]">4.95 / 5.0</div>
              <div className="text-[11px] text-[#667085] font-medium leading-tight">Verified Board Rating</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 px-2 border-l border-[#E4E7EC]/80">
            <div className="w-10 h-10 rounded-xl bg-[#7F56D9]/10 text-[#7F56D9] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-extrabold text-base sm:text-lg text-[#0B1F33]">100%</div>
              <div className="text-[11px] text-[#667085] font-medium leading-tight">Clean Audit & QoE Record</div>
            </div>
          </div>
        </div>

        {/* Filter Chips Bar (Shown when showFilters=true) */}
        {showFilters && (
          <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
              <span className="text-xs font-bold text-[#0B1F33] flex items-center space-x-1.5 pr-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#155EEF]" />
                <span>Sector:</span>
              </span>
              {industries.map(ind => (
                <button
                  key={ind}
                  type="button"
                  onClick={() => {
                    setSelectedIndustry(ind);
                    setSpotlightIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedIndustry === ind
                      ? 'bg-[#155EEF] text-white shadow-xs font-semibold'
                      : 'bg-white text-[#667085] hover:text-[#0B1F33] border border-[#E4E7EC]'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            {/* Marquee Playback Controls (Active in Ticker mode) */}
            {viewMode === 'ticker' && (
              <div className="flex items-center space-x-2 text-xs">
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-[#0B1F33] hover:bg-slate-50 transition-colors cursor-pointer"
                  title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 text-[#12B76A]" /> : <Pause className="w-3.5 h-3.5 text-[#D92D20]" />}
                  <span>{isPaused ? 'Resume' : 'Pause'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSpeed(speed === 'normal' ? 'slow' : 'normal')}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-[#E4E7EC] text-[#667085] hover:text-[#0B1F33] transition-colors cursor-pointer"
                >
                  Speed: <strong className="text-[#0B1F33] capitalize">{speed}</strong>
                </button>
              </div>
            )}
          </div>
        )}

        {/* 1. VIEW MODE: CONTINUOUS SCROLLING STREAM (TICKER) */}
        {viewMode === 'ticker' && (
          <div className="space-y-6 overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
            {/* Lane 1: Leftward Scrolling */}
            <div className="relative w-full overflow-hidden py-1">
              {/* Fade gradients on edges for seamless look */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5F7FA] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5F7FA] to-transparent z-10 pointer-events-none" />

              <div
                className={`animate-marquee-left ${speed === 'slow' ? 'speed-slow' : 'speed-normal'} ${
                  isPaused ? 'pause-marquee' : ''
                } flex space-x-6 items-stretch`}
              >
                {loopLane1.map((item, index) => (
                  <div key={`${item.id}-l1-${index}`} className="w-[340px] sm:w-[420px] flex-shrink-0">
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Lane 2: Rightward Scrolling (Alternating flow for dynamic immersion) */}
            <div className="relative w-full overflow-hidden py-1">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5F7FA] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5F7FA] to-transparent z-10 pointer-events-none" />

              <div
                className={`animate-marquee-right ${speed === 'slow' ? 'speed-slow' : 'speed-normal'} ${
                  isPaused ? 'pause-marquee' : ''
                } flex space-x-6 items-stretch`}
              >
                {loopLane2.map((item, index) => (
                  <div key={`${item.id}-l2-${index}`} className="w-[340px] sm:w-[420px] flex-shrink-0">
                    <TestimonialCard item={item} highlightBorder />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-2">
              <span className="text-[11px] text-[#667085] flex items-center justify-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span>Hover over any customer story to pause scrolling • Verified independently by third-party audit</span>
              </span>
            </div>
          </div>
        )}

        {/* 2. VIEW MODE: INTERACTIVE GRID / CAROUSEL WITH ARROWS */}
        {viewMode === 'cards' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#667085]">
                Showing {filteredTestimonials.length} verified executive reviews
              </span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel('left')}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0B1F33] border border-[#E4E7EC] shadow-2xs transition-colors cursor-pointer"
                  aria-label="Previous Stories"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('right')}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0B1F33] border border-[#E4E7EC] shadow-2xs transition-colors cursor-pointer"
                  aria-label="Next Stories"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex items-stretch space-x-6 overflow-x-auto pb-6 pt-1 no-scrollbar scroll-smooth"
            >
              {filteredTestimonials.map((item) => (
                <div key={item.id} className="w-[320px] sm:w-[380px] flex-shrink-0 flex flex-col">
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. VIEW MODE: SPOTLIGHT STORY DEEP-DIVE */}
        {viewMode === 'spotlight' && currentSpotlight && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E4E7EC] shadow-md space-y-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-[#E4E7EC]">
              {/* Executive profile */}
              <div className="flex items-center space-x-5">
                <img
                  src={currentSpotlight.avatar}
                  alt={currentSpotlight.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#155EEF] shadow-sm flex-shrink-0"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1F33]">
                      {currentSpotlight.name}
                    </h3>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-[#12B76A]/10 text-[#12B76A] text-[11px] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Client</span>
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#155EEF]">
                    {currentSpotlight.position} • {currentSpotlight.company}
                  </div>
                  <div className="text-xs text-[#667085] flex items-center space-x-3 mt-1">
                    {currentSpotlight.location && (
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-[#667085]" />
                        <span>{currentSpotlight.location}</span>
                      </span>
                    )}
                    <span>•</span>
                    <span className="bg-[#EFF4FF] text-[#155EEF] font-semibold px-2 py-0.5 rounded text-[11px]">
                      {currentSpotlight.industry}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Metric Badge */}
              {currentSpotlight.metric && (
                <div className="bg-gradient-to-br from-[#0B1F33] to-[#132D48] text-white p-5 rounded-2xl border border-white/10 shadow-sm flex items-center space-x-4 min-w-[220px]">
                  <div className="w-12 h-12 rounded-xl bg-[#D6A84F]/20 text-[#D6A84F] flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-2xl text-[#D6A84F]">
                      {currentSpotlight.metric.value}
                    </div>
                    <div className="text-xs text-white/80 font-medium">
                      {currentSpotlight.metric.label}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quote content */}
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D6A84F] text-[#D6A84F]" />
                ))}
                <span className="text-xs font-bold text-[#0B1F33] ml-2">5.0 / 5.0 Executive Engagement Score</span>
              </div>

              {currentSpotlight.tagline && (
                <h4 className="font-display font-bold text-lg sm:text-xl text-[#0B1F33]">
                  "{currentSpotlight.tagline}"
                </h4>
              )}

              <blockquote className="font-serif italic text-lg sm:text-2xl text-[#17202A] leading-relaxed relative pl-6 border-l-4 border-[#155EEF]">
                "{currentSpotlight.quote}"
              </blockquote>
            </div>

            {/* Bottom details & navigation dots */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E4E7EC]">
              <div className="text-xs text-[#667085]">
                Engagement Scope: <strong className="text-[#0B1F33]">{currentSpotlight.serviceUsed || 'Corporate Financial Advisory'}</strong>
              </div>

              {/* Selector Dots */}
              <div className="flex items-center space-x-2">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSpotlightIndex(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      spotlightIndex === idx ? 'w-8 bg-[#155EEF]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`View story ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Social Proof Conversion Box */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#E4E7EC] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-display font-bold text-base sm:text-lg text-[#0B1F33]">
              Ready to Achieve Predictable, Audited Financial Outcomes?
            </h4>
            <p className="text-xs sm:text-sm text-[#667085]">
              Schedule a confidential strategy session with our senior partners and explore tailored frameworks for your enterprise.
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <Link
              to="/quote"
              className="px-6 py-3 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center space-x-2"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/clients"
              className="px-5 py-3 bg-[#F5F7FA] hover:bg-slate-200 text-[#0B1F33] text-xs sm:text-sm font-semibold rounded-xl transition-colors"
            >
              All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component: High-Fidelity Testimonial Card
interface TestimonialCardProps {
  item: TestimonialItem;
  highlightBorder?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, highlightBorder = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-7 border ${
        highlightBorder ? 'border-[#155EEF]/20 hover:border-[#155EEF]' : 'border-[#E4E7EC] hover:border-[#D6A84F]'
      } shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden`}
    >
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#155EEF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="space-y-4">
        {/* Card Header: Rating & Quantitative Metric Tag */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-1">
            {[...Array(item.rating || 5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D6A84F] text-[#D6A84F]" />
            ))}
          </div>

          {item.metric && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#EFF4FF] border border-[#155EEF]/20 text-[#155EEF] text-xs font-bold">
              <TrendingUp className="w-3 h-3 text-[#155EEF]" />
              <span>{item.metric.value}</span>
            </span>
          )}
        </div>

        {/* Tagline / Headline */}
        {item.tagline && (
          <div className="font-display font-bold text-xs sm:text-sm text-[#0B1F33] line-clamp-2 group-hover:text-[#155EEF] transition-colors">
            {item.tagline}
          </div>
        )}

        {/* Quote body */}
        <p className="text-xs sm:text-sm text-[#475467] leading-relaxed line-clamp-4 relative pl-3.5 border-l-2 border-[#E4E7EC] group-hover:border-[#155EEF] transition-colors">
          "{item.quote}"
        </p>
      </div>

      {/* Card Footer: Executive Profile */}
      <div className="pt-4 mt-4 border-t border-[#F2F4F7] flex items-center justify-between gap-3">
        <div className="flex items-center space-x-3 min-w-0">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-10 h-10 rounded-full object-cover border border-[#E4E7EC] flex-shrink-0 group-hover:scale-105 transition-transform"
          />
          <div className="min-w-0">
            <div className="font-display font-bold text-xs sm:text-sm text-[#0B1F33] truncate">
              {item.name}
            </div>
            <div className="text-[11px] text-[#667085] truncate">
              {item.position}, <strong className="font-semibold text-[#344054]">{item.company}</strong>
            </div>
          </div>
        </div>

        {item.industry && (
          <span className="text-[10px] font-bold text-[#667085] bg-[#F5F7FA] px-2 py-1 rounded border border-[#E4E7EC] flex-shrink-0 hidden sm:inline-block">
            {item.industry}
          </span>
        )}
      </div>
    </div>
  );
};
