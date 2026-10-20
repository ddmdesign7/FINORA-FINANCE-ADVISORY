import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  FileCheck,
  Calendar,
  Building,
  DollarSign,
  TrendingUp,
  Sparkles,
  Layers
} from 'lucide-react';

export const QuotePage: React.FC = () => {
  const [step, setStep] = useState(1);

  // Form states
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [revenueRange, setRevenueRange] = useState('$5M - $25M');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Financial Management']);
  const [timeline, setTimeline] = useState('Immediate (Next 30 Days)');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    } else {
      setIsSubmitted(true);
    }
  };

  const servicesList = [
    'Financial Management & FP&A',
    'Corporate Tax Advisory',
    'Accounting & Controllership',
    'Investment & Treasury',
    'Business Advisory',
    'Payroll Services',
    'Risk Management & Audit',
    'Financial Planning & Forecasting',
    'M&A Due Diligence',
    'Forensic Accounting',
    'Valuation & Modelling',
    'Corporate Governance'
  ];

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="Request a Consultation & Scope Proposal | Finora"
        description="Submit your enterprise parameters to receive a customized advisory proposal, scoping roadmap, and fee schedule."
      />

      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[{ label: 'Request Consultation' }]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              <span>ADVISORY SCOPE BUILDER</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Request a Custom Advisory Proposal.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Complete our structured intake in 2 minutes to receive an institutional proposal tailored to your enterprise scale and strategic priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Step Intake Area */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Progress Bar */}
          {!isSubmitted && (
            <div className="bg-white rounded-2xl p-4 sm:p-6 mb-8 border border-[#E4E7EC] shadow-xs flex items-center justify-between">
              {[
                { s: 1, label: 'Company Parameters' },
                { s: 2, label: 'Practice Needs' },
                { s: 3, label: 'Executive Details' }
              ].map((st) => (
                <div key={st.s} className="flex items-center space-x-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      step >= st.s
                        ? 'bg-[#155EEF] text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {st.s}
                  </div>
                  <span className={`text-xs font-medium hidden sm:inline ${step >= st.s ? 'text-[#0B1F33] font-semibold' : 'text-[#667085]'}`}>
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Form Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E4E7EC] shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#12B76A]/10 text-[#12B76A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                    Proposal Request Confirmed
                  </h2>
                  <p className="text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#17202A]">{contactName || 'Executive'}</strong>. A dedicated practice director at Finora has been assigned to <strong className="text-[#17202A]">{companyName || 'your organization'}</strong>.
                  </p>
                </div>

                <div className="bg-[#F5F7FA] p-6 rounded-2xl text-left border border-[#E4E7EC] space-y-3 max-w-md mx-auto text-xs">
                  <div className="font-bold text-[#0B1F33] uppercase">Engagement Summary:</div>
                  <div className="flex justify-between text-[#667085]">
                    <span>Revenue Scale:</span>
                    <span className="font-semibold text-[#17202A]">{revenueRange}</span>
                  </div>
                  <div className="flex justify-between text-[#667085]">
                    <span>Selected Practices:</span>
                    <span className="font-semibold text-[#17202A]">{selectedServices.length} Selected</span>
                  </div>
                  <div className="flex justify-between text-[#667085]">
                    <span>Target Timeline:</span>
                    <span className="font-semibold text-[#17202A]">{timeline}</span>
                  </div>
                  <div className="flex justify-between text-[#667085]">
                    <span>Assigned Office:</span>
                    <span className="font-semibold text-[#17202A]">New York HQ</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/"
                    className="w-full sm:w-auto px-6 py-3 bg-[#0B1F33] text-white text-xs font-bold uppercase tracking-wider rounded-xl"
                  >
                    Return to Homepage
                  </Link>
                  <Link
                    to="/news"
                    className="w-full sm:w-auto px-6 py-3 bg-[#F5F7FA] text-[#17202A] border border-[#E4E7EC] text-xs font-bold uppercase tracking-wider rounded-xl"
                  >
                    Explore Insights
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNext} className="space-y-6">
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#155EEF] uppercase">Step 1 of 3</span>
                      <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                        Enterprise Information & Revenue Scale
                      </h2>
                      <p className="text-xs text-[#667085]">Help us understand the size and operating structure of your business.</p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Company / Entity Name *</label>
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Apex Industrial Systems"
                          className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Corporate Website</label>
                        <input
                          type="text"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="https://company.com"
                          className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#17202A] mb-2">Annual Revenue Range</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['< $2M', '$2M - $10M', '$10M - $50M', '$50M+'].map((range) => (
                            <button
                              type="button"
                              key={range}
                              onClick={() => setRevenueRange(range)}
                              className={`p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                                revenueRange === range
                                  ? 'bg-[#0B1F33] text-white border-[#0B1F33]'
                                  : 'bg-[#F5F7FA] text-[#667085] border-[#E4E7EC] hover:bg-slate-200'
                              }`}
                            >
                              {range}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#155EEF] uppercase">Step 2 of 3</span>
                      <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                        Select Practice Areas of Interest
                      </h2>
                      <p className="text-xs text-[#667085]">Select all financial practices that apply to your engagement.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {servicesList.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-[#EFF4FF] border-[#155EEF] text-[#155EEF] font-semibold'
                                : 'bg-[#F5F7FA] border-[#E4E7EC] text-[#17202A] hover:bg-slate-100'
                            }`}
                          >
                            <span>{srv}</span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-[#155EEF]" />}
                          </button>
                        );
                      })}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17202A] mb-2">Target Engagement Timeline</label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      >
                        <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                        <option value="Q2 / Q3 Strategic Planning">Next Fiscal Quarter</option>
                        <option value="Preparing for Transaction (6-12 Months)">Preparing for Transaction / M&A</option>
                        <option value="Exploring General Fit">Exploratory / Ongoing</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#155EEF] uppercase">Step 3 of 3</span>
                      <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                        Executive Contact Coordinates
                      </h2>
                      <p className="text-xs text-[#667085]">Where should we transmit the customized scope document?</p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Executive Full Name *</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Rachel Sterling"
                          className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Corporate Email *</label>
                          <input
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder="rsterling@company.com"
                            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Direct Phone</label>
                          <input
                            type="tel"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Specific Objectives or Current Pain Points</label>
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Any specific challenges regarding multi-state tax, DSO, debt covenant or accounting software..."
                          className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Navigation Buttons */}
                <div className="pt-4 border-t border-[#E4E7EC] flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-5 py-2.5 bg-[#F5F7FA] hover:bg-slate-200 text-[#17202A] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                  ) : <div />}

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow transition-colors flex items-center space-x-2 cursor-pointer"
                  >
                    <span>{step === 3 ? 'Generate & Submit Proposal' : 'Continue to Next Step'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
