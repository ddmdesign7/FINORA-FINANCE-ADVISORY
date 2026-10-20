import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms' | 'cookies';
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies'>(initialTab);

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="Legal Policies & Fiduciary Compliance | Finora"
        description="Review Finora's Privacy Policy, Terms of Engagement, and Cookie Policies."
      />

      {/* Header */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[{ label: 'Legal & Fiduciary Compliance' }]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Governance, Terms & Privacy Disclosures
          </h1>
          <p className="text-sm text-white/75">
            Effective Date: January 1, 2026 • Last Reviewed: Q1 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Tab Switcher */}
          <div className="flex border-b border-[#E4E7EC] bg-white rounded-xl p-1.5 shadow-xs gap-1">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'privacy' ? 'bg-[#0B1F33] text-white' : 'text-[#667085] hover:bg-slate-100'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'terms' ? 'bg-[#0B1F33] text-white' : 'text-[#667085] hover:bg-slate-100'
              }`}
            >
              Terms of Engagement
            </button>
            <button
              onClick={() => setActiveTab('cookies')}
              className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'cookies' ? 'bg-[#0B1F33] text-white' : 'text-[#667085] hover:bg-slate-100'
              }`}
            >
              Cookie Policy
            </button>
          </div>

          {/* Tab Content Cards */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E4E7EC] shadow-xs text-[#17202A] text-sm leading-relaxed space-y-6">
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Client Data Confidentiality & Privacy Policy
                </h2>
                <p className="text-[#667085]">
                  At Finora Finance & Advisory ("Finora", "we", "our"), protecting the sensitive financial information of our corporate clients, family offices, and executive leadership teams is foundational to our fiduciary duty.
                </p>

                <h3 className="font-display font-bold text-lg text-[#0B1F33]">1. Information We Collect</h3>
                <p className="text-[#667085]">
                  In the course of advisory engagements, we collect corporate financial statements, general ledger exports, capitalization tables, tax records, employee census data, and strategic business plans solely for analytical modeling and advisory purposes.
                </p>

                <h3 className="font-display font-bold text-lg text-[#0B1F33]">2. Strict Non-Disclosure & Fiduciary Standard</h3>
                <p className="text-[#667085]">
                  We never monetize, share, sell, or disclose client data to third-party commercial brokers or advertisers. All advisory staff and practice leaders are bound by non-disclosure covenants and strict professional codes of conduct.
                </p>

                <h3 className="font-display font-bold text-lg text-[#0B1F33]">3. Encryption & Storage Security</h3>
                <p className="text-[#667085]">
                  All client document uploads, financial spreadsheets, and modeling artifacts are protected using AES-256 bit encryption at rest and TLS 1.3 protocol in transit.
                </p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="space-y-6">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Terms of Professional Advisory Engagement
                </h2>
                <p className="text-[#667085]">
                  These Terms of Engagement govern the delivery of professional consulting, financial management, tax advisory, and accounting services provided by Finora.
                </p>

                <h3 className="font-display font-bold text-lg text-[#0B1F33]">1. Scope of Advisory Services</h3>
                <p className="text-[#667085]">
                  Finora delivers management consulting, strategic forecasting, tax structuring, and transaction diligence. Unless explicitly specified in a formal engagement letter signed by a managing partner, our analytical models represent management advisory tools rather than statutory external audits.
                </p>

                <h3 className="font-display font-bold text-lg text-[#0B1F33]">2. Client Responsibilities & Data Accuracy</h3>
                <p className="text-[#667085]">
                  Advisory outputs rely on the completeness and accuracy of financial information provided by client management. Clients remain solely responsible for the timely provision of source records and statutory tax return signatures.
                </p>

                <h3 className="font-display font-bold text-lg text-[#0B1F33]">3. Intellectual Property</h3>
                <p className="text-[#667085]">
                  Custom models, dashboards, and deliverables developed specifically for the client become the property of the client upon settlement of professional fee invoices.
                </p>
              </div>
            )}

            {activeTab === 'cookies' && (
              <div className="space-y-6">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Cookie & Tracking Transparency Policy
                </h2>
                <p className="text-[#667085]">
                  Our digital properties use minimal, privacy-centric cookies necessary to ensure secure navigation, responsive application performance, and command search indexing.
                </p>

                <h3 className="font-display font-bold text-lg text-[#0B1F33]">1. Essential Cookies</h3>
                <p className="text-[#667085]">
                  Strictly required for session state, navigation persistence, and securing form intake transmissions.
                </p>

                <h3 className="font-display font-bold text-lg text-[#0B1F33]">2. No Third-Party Ad Trackers</h3>
                <p className="text-[#667085]">
                  Finora does not deploy intrusive behavioral advertising cookies or third-party retargeting pixels across our corporate site.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
