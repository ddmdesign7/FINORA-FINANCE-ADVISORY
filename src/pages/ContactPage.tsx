import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEOHelmet } from '../components/common/SEOHelmet';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Globe,
  Shield,
  MessageSquare
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [office, setOffice] = useState('New York (Americas HQ)');
  const [topic, setTopic] = useState('Strategic Financial Advisory');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setMessage('');
    }, 700);
  };

  const offices = [
    {
      city: 'New York (Americas HQ)',
      address: '450 Lexington Avenue, 32nd Floor, New York, NY 10017',
      phone: '+1 (212) 849-2040',
      email: 'ny.advisory@finoragroup.com',
      hours: 'Mon – Fri: 8:00 AM – 6:00 PM EST'
    },
    {
      city: 'London (European Advisory)',
      address: '25 Bank Street, Canary Wharf, London, E14 5JP',
      phone: '+44 20 7946 0912',
      email: 'london.advisory@finoragroup.com',
      hours: 'Mon – Fri: 8:30 AM – 5:30 PM GMT'
    },
    {
      city: 'Dubai (MENA Practice)',
      address: 'DIFC Gate Precinct 4, Level 5, Dubai, United Arab Emirates',
      phone: '+971 4 312 8800',
      email: 'dubai.advisory@finoragroup.com',
      hours: 'Mon – Fri: 9:00 AM – 6:00 PM GST'
    },
    {
      city: 'Lagos (Sub-Saharan Practice)',
      address: 'Victoria Island Financial Center, 14 Adeola Odeku, Lagos',
      phone: '+234 1 279 4000',
      email: 'lagos.advisory@finoragroup.com',
      hours: 'Mon – Fri: 8:30 AM – 5:30 PM WAT'
    }
  ];

  return (
    <div className="space-y-0">
      <SEOHelmet
        title="Contact Our Global Offices | Finora Advisory"
        description="Get in touch with Finora's financial advisors in New York, London, Dubai, and Lagos for strategic counsel and consultation."
      />

      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white pt-12 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#155EEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[{ label: 'Contact Us' }]}
            className="text-white/60 [&_span]:text-white [&_a]:text-white/70"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D6A84F]">
              <span>CONNECT WITH US</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Start a Conversation With Our Partners.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Whether you are preparing for a major capital event, seeking tax optimization, or restructuring controllership, we are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Office Locations */}
      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E4E7EC] shadow-xs space-y-6">
              <div className="space-y-2">
                <h2 className="font-display font-bold text-2xl text-[#0B1F33]">
                  Direct Executive Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-[#667085]">
                  Please complete the form below. Inquiries are routed directly to practice directors and answered within one business day.
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-[#12B76A]/10 border border-[#12B76A]/30 p-8 rounded-2xl text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-[#12B76A] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0B1F33]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] max-w-md mx-auto">
                    Thank you for reaching out to Finora. An executive director will review your inquiry and contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-5 py-2 bg-[#0B1F33] text-white text-xs font-semibold rounded-lg"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Johnathan Davis"
                        className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jdavis@company.com"
                        className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Davis Enterprises Corp"
                        className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Target Hub Office</label>
                      <select
                        value={office}
                        onChange={(e) => setOffice(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      >
                        <option value="New York (Americas HQ)">New York (Americas HQ)</option>
                        <option value="London (European Advisory)">London (European Advisory)</option>
                        <option value="Dubai (MENA Practice)">Dubai (MENA Practice)</option>
                        <option value="Lagos (Sub-Saharan Practice)">Lagos (Sub-Saharan Practice)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Advisory Interest</label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                      >
                        <option value="Strategic Financial Advisory">Financial Management & Strategy</option>
                        <option value="Corporate Tax Advisory">Corporate Tax & Structuring</option>
                        <option value="M&A Due Diligence">M&A / Transaction Diligence</option>
                        <option value="Controllership & Accounting">Accounting & Controllership</option>
                        <option value="Treasury & Investment">Investment & Treasury Advisory</option>
                        <option value="Other Advisory">Other Financial Matters</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17202A] mb-1.5">Message / Context Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your company's current stage, revenue scale, and objectives..."
                      className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#E4E7EC] rounded-xl text-xs sm:text-sm text-[#17202A] focus:outline-none focus:border-[#155EEF]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-[#155EEF] hover:bg-[#0D47C2] text-white font-semibold text-sm rounded-xl shadow transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>{status === 'loading' ? 'Transmitting...' : 'Submit Confidential Inquiry'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#667085] text-center">
                    Protected by client non-disclosure & strict fiduciary data confidentiality.
                  </p>
                </form>
              )}
            </div>

            {/* Right Global Offices (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-[#0B1F33]">
                  Global Advisory Hubs
                </h3>
                <p className="text-xs text-[#667085]">
                  Connect directly with regional practice coordinators.
                </p>
              </div>

              <div className="space-y-4">
                {offices.map((off, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-[#E4E7EC] shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-[#0B1F33]">
                      <MapPin className="w-4 h-4 text-[#155EEF]" />
                      <span className="font-display font-bold text-sm">{off.city}</span>
                    </div>

                    <p className="text-xs text-[#667085]">{off.address}</p>

                    <div className="pt-2 border-t border-[#E4E7EC] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <a href={`tel:${off.phone}`} className="text-[#155EEF] hover:underline flex items-center space-x-1">
                        <Phone className="w-3 h-3" />
                        <span>{off.phone}</span>
                      </a>
                      <div className="text-[#667085] flex items-center space-x-1 truncate">
                        <Mail className="w-3 h-3 text-[#D6A84F]" />
                        <span className="truncate">{off.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
