import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { expertsData } from '../data/experts';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  Linkedin,
  ArrowRight,
  ChevronRight,
  Briefcase
} from 'lucide-react';

interface ExpertDetailPageProps {
  slug: string;
}

export const ExpertDetailPage: React.FC<ExpertDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const expert = expertsData.find(e => e.slug === slug);

  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingCompany, setBookingCompany] = useState('');
  const [bookingTopic, setBookingTopic] = useState('Tax Strategy');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  if (!expert) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#0B1F33]">Advisor Profile Not Found</h1>
        <p className="text-[#667085]">The practice expert you requested does not exist or has moved.</p>
        <Link to="/experts" className="inline-flex items-center space-x-2 text-[#155EEF] font-bold">
          <span>View All Advisory Experts</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const otherExperts = expertsData
    .filter(e => e.id !== expert.id)
    .slice(0, 3);

  return (
    <div className="space-y-0">
      <SEOHelmet
        title={`${expert.name} - ${expert.position} | Finora`}
        description={`${expert.name} is ${expert.position} at Finora with institutional financial advisory leadership.`}
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Experts', to: '/experts' },
              { label: expert.name }
            ]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
                <span>SENIOR PRACTICE LEADER</span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                {expert.name}
              </h1>
              <div className="text-lg sm:text-xl font-semibold text-[#155EEF]">
                {expert.position}
              </div>
              <p className="text-base text-white/80 leading-relaxed max-w-2xl">
                {expert.fullBio}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl w-64 h-80">
                <img
                  src={expert.portrait}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#0B1F33]/90 text-white text-xs font-bold px-3 py-1 rounded border border-white/10">
                  {expert.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Specializations & Focus Areas */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E4E7EC] shadow-xs space-y-6">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Core Practice Areas & Technical Expertise
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expert.specialization.map((spec, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-[#F5F7FA] p-4 rounded-xl border border-[#E4E7EC]">
                      <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0" />
                      <span className="text-sm font-semibold text-[#17202A]">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Credentials */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E4E7EC] shadow-xs space-y-6">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Education & Professional Credentials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#667085] uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4 text-[#155EEF]" />
                      <span>Academic Background</span>
                    </div>
                    <div className="space-y-2">
                      {expert.education.map((edu, idx) => (
                        <p key={idx} className="text-xs sm:text-sm font-medium text-[#17202A] bg-[#F5F7FA] p-3 rounded-xl border border-[#E4E7EC]">
                          {edu}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#667085] uppercase tracking-wider">
                      <Award className="w-4 h-4 text-[#D6A84F]" />
                      <span>Licenses & Designations</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {expert.certifications.map((cred, idx) => (
                        <span key={idx} className="px-3 py-2 bg-[#EFF4FF] text-[#155EEF] font-bold text-xs rounded-lg border border-[#155EEF]/20">
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Notable Advisory Engagements / Highlights */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E4E7EC] shadow-xs space-y-6">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Representative Advisory Highlights
                </h2>
                <div className="space-y-4">
                  {[
                    'Directed buy-side Quality of Earnings diligence on $185M cross-border manufacturing consolidation.',
                    'Engineered 3-tier corporate treasury liquidity architecture managing over $300M in fiduciary assets.',
                    'Restructured multistate corporate tax nexus, delivering $4.8M in audited state and federal tax savings.'
                  ].map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-[#F5F7FA] border border-[#E4E7EC]">
                      <ShieldCheck className="w-5 h-5 text-[#12B76A] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#17202A] font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Consultation Booking Form */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] shadow-sm space-y-5">
                <h3 className="font-display font-bold text-xl text-[#0B1F33]">
                  Schedule a Consultation
                </h3>
                <p className="text-xs text-[#667085]">
                  Request a confidential 30-minute introductory meeting with {expert.name}.
                </p>

                {bookingSubmitted ? (
                  <div className="bg-[#12B76A]/10 border border-[#12B76A]/30 p-4 rounded-xl space-y-2 text-center">
                    <CheckCircle2 className="w-6 h-6 text-[#12B76A] mx-auto" />
                    <div className="text-sm font-bold text-[#0B1F33]">Request Transmitted</div>
                    <p className="text-xs text-[#667085]">
                      {expert.name}'s executive assistant will reach out within 4 business hours to confirm your calendar invite.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBooking} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#17202A] mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-3.5 py-2.5 bg-[#F5F7FA] border border-[#E4E7EC] rounded-lg text-xs text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#17202A] mb-1">Corporate Email</label>
                      <input
                        type="email"
                        required
                        value={bookingEmail}
                        onChange={(e) => setBookingEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 bg-[#F5F7FA] border border-[#E4E7EC] rounded-lg text-xs text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#17202A] mb-1">Company Name</label>
                      <input
                        type="text"
                        required
                        value={bookingCompany}
                        onChange={(e) => setBookingCompany(e.target.value)}
                        placeholder="Company Ltd"
                        className="w-full px-3.5 py-2.5 bg-[#F5F7FA] border border-[#E4E7EC] rounded-lg text-xs text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#17202A] mb-1">Consultation Topic</label>
                      <select
                        value={bookingTopic}
                        onChange={(e) => setBookingTopic(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#F5F7FA] border border-[#E4E7EC] rounded-lg text-xs text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      >
                        <option value="Tax Strategy">Corporate Tax Strategy</option>
                        <option value="M&A Diligence">M&A / Transaction Diligence</option>
                        <option value="FP&A Modeling">FP&A Modeling & Controllership</option>
                        <option value="Treasury Advisory">Corporate Treasury Advisory</option>
                        <option value="Other Advisory">Other Financial Matter</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-colors flex items-center justify-center space-x-1.5 pt-3 cursor-pointer"
                    >
                      <span>Request Meeting</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Other Advisors */}
              <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-xs space-y-4">
                <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block">
                  Other Practice Leaders
                </span>
                <div className="space-y-3">
                  {otherExperts.map((oth) => (
                    <Link
                      key={oth.id}
                      to={`/experts/${oth.slug}`}
                      className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#EFF4FF] transition-colors flex items-center space-x-3 group"
                    >
                      <img src={oth.portrait} alt={oth.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div className="text-xs font-bold text-[#0B1F33] group-hover:text-[#155EEF]">
                          {oth.name}
                        </div>
                        <div className="text-[11px] text-[#667085] truncate">
                          {oth.position}
                        </div>
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
