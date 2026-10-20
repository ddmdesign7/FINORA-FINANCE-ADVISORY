import React, { useState, useEffect, useRef } from 'react';
import { useRouter, Link } from '../../context/RouterContext';
import {
  ChevronDown,
  Menu,
  X,
  Search,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Shield,
  TrendingUp,
  Calculator
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { industriesData } from '../../data/industries';

export const Header: React.FC = () => {
  const { currentPath, navigate, setIsSearchOpen, setIsCalculatorOpen } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  }, [currentPath]);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
    setIndustriesDropdownOpen(false);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleIndustriesMouseEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesDropdownOpen(true);
    setServicesDropdownOpen(false);
  };

  const handleIndustriesMouseLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesDropdownOpen(false);
    }, 150);
  };

  const isHome = currentPath === '/';

  // Key services for the dropdown
  const dropdownServices = servicesData.slice(0, 8);

  return (
    <>
      {/* Top Bar for trust and direct contact */}
      <div className="bg-[#0B1F33] text-white/80 text-xs border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white/90">
              <Shield className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span>Independent Institutional Fiduciary Advisory</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <Clock className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span>Mon – Fri: 8:00 AM – 6:00 PM EST</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+12128492040" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#155EEF]" />
              <span>+1 (212) 849-2040</span>
            </a>
            <a href="mailto:advisory@finoragroup.com" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#155EEF]" />
              <span>advisory@finoragroup.com</span>
            </a>
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="flex items-center space-x-1 text-[#D6A84F] hover:text-white transition-colors font-medium cursor-pointer"
              title="Open Financial ROI & Valuation Calculator"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>ROI Calculator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-[#E4E7EC] py-3'
            : isHome
            ? 'bg-white/95 backdrop-blur-sm border-b border-[#E4E7EC]/60 py-4'
            : 'bg-white border-b border-[#E4E7EC] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Finora Home">
            <div className="w-10 h-10 rounded-lg bg-[#0B1F33] flex items-center justify-center text-white font-bold text-xl tracking-wider shadow-sm group-hover:bg-[#155EEF] transition-colors">
              <span className="text-[#D6A84F] font-serif font-black">F</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1F33] tracking-tight leading-none">
                FINORA
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#667085] uppercase mt-0.5">
                Finance & Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath === '/'
                  ? 'text-[#155EEF] font-semibold'
                  : 'text-[#17202A] hover:text-[#155EEF] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath === '/about'
                  ? 'text-[#155EEF] font-semibold'
                  : 'text-[#17202A] hover:text-[#155EEF] hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                onClick={() => navigate('/services')}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath.startsWith('/services')
                    ? 'text-[#155EEF] font-semibold'
                    : 'text-[#17202A] hover:text-[#155EEF] hover:bg-slate-50'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#155EEF]' : 'text-[#667085]'}`} />
              </button>

              {/* Services Mega Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[520px] bg-white rounded-xl shadow-xl border border-[#E4E7EC] p-4 pt-3 mt-1 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-[#E4E7EC] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#667085] uppercase tracking-wider">Our Financial Advisory Services</span>
                    <Link to="/services" className="text-xs font-semibold text-[#155EEF] hover:underline flex items-center">
                      View all 12 services <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                  {dropdownServices.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="p-2.5 rounded-lg hover:bg-[#F5F7FA] transition-colors group flex items-start space-x-3"
                    >
                      <div className="text-[11px] font-bold text-[#D6A84F] bg-[#0B1F33] px-1.5 py-0.5 rounded mt-0.5">
                        {service.number}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#17202A] group-hover:text-[#155EEF] transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-[#667085] line-clamp-1">
                          {service.category}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleIndustriesMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}
            >
              <button
                type="button"
                onClick={() => navigate('/industries')}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath.startsWith('/industries')
                    ? 'text-[#155EEF] font-semibold'
                    : 'text-[#17202A] hover:text-[#155EEF] hover:bg-slate-50'
                }`}
                aria-expanded={industriesDropdownOpen}
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180 text-[#155EEF]' : 'text-[#667085]'}`} />
              </button>

              {/* Industries Mega Dropdown */}
              {industriesDropdownOpen && (
                <div className="absolute top-full -left-20 w-[600px] bg-white rounded-xl shadow-xl border border-[#E4E7EC] p-4 pt-3 mt-1 grid grid-cols-3 gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="col-span-3 pb-2 mb-1 border-b border-[#E4E7EC] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#667085] uppercase tracking-wider">Sectors We Specialize In</span>
                    <Link to="/industries" className="text-xs font-semibold text-[#155EEF] hover:underline flex items-center">
                      All 12 Sectors <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                  {industriesData.map((industry) => (
                    <Link
                      key={industry.id}
                      to={`/industries/${industry.slug}`}
                      className="p-2 rounded-lg hover:bg-[#F5F7FA] transition-colors group flex flex-col"
                    >
                      <span className="text-xs font-medium text-[#17202A] group-hover:text-[#155EEF] transition-colors truncate">
                        {industry.name}
                      </span>
                      <span className="text-[10px] text-[#667085] truncate">
                        Specialized Advisory
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/clients"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath === '/clients'
                  ? 'text-[#155EEF] font-semibold'
                  : 'text-[#17202A] hover:text-[#155EEF] hover:bg-slate-50'
              }`}
            >
              Clients
            </Link>

            <Link
              to="/experts"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath.startsWith('/experts')
                  ? 'text-[#155EEF] font-semibold'
                  : 'text-[#17202A] hover:text-[#155EEF] hover:bg-slate-50'
              }`}
            >
              Experts
            </Link>

            <Link
              to="/news"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath.startsWith('/news')
                  ? 'text-[#155EEF] font-semibold'
                  : 'text-[#17202A] hover:text-[#155EEF] hover:bg-slate-50'
              }`}
            >
              News
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPath === '/contact'
                  ? 'text-[#155EEF] font-semibold'
                  : 'text-[#17202A] hover:text-[#155EEF] hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#667085] hover:text-[#0B1F33] hover:bg-slate-100 rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer"
              aria-label="Search site (Cmd+K)"
              title="Search Finora (Cmd+K)"
            >
              <Search className="w-4 h-4" />
              <span className="text-xs bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">⌘K</span>
            </button>

            <Link
              to="/quote"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu & Search Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#667085] hover:text-[#0B1F33] rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#17202A] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E4E7EC] bg-white px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <Link
              to="/"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                currentPath === '/' ? 'bg-[#EFF4FF] text-[#155EEF]' : 'text-[#17202A]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                currentPath === '/about' ? 'bg-[#EFF4FF] text-[#155EEF]' : 'text-[#17202A]'
              }`}
            >
              About Finora
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-[#17202A]"
              >
                <span>Services ({servicesData.length})</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-[#F5F7FA] rounded-lg mt-1">
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-sm font-semibold text-[#155EEF]"
                  >
                    View All Services Overview →
                  </Link>
                  {servicesData.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="block px-3 py-1.5 text-xs text-[#667085] hover:text-[#155EEF]"
                    >
                      {s.number}. {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-[#17202A]"
              >
                <span>Industries ({industriesData.length})</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileIndustriesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-[#F5F7FA] rounded-lg mt-1 grid grid-cols-2 gap-1">
                  <Link
                    to="/industries"
                    className="col-span-2 block px-3 py-2 text-sm font-semibold text-[#155EEF]"
                  >
                    View All Industries Overview →
                  </Link>
                  {industriesData.map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries/${ind.slug}`}
                      className="block px-3 py-1.5 text-xs text-[#667085] hover:text-[#155EEF] truncate"
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/clients"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                currentPath === '/clients' ? 'bg-[#EFF4FF] text-[#155EEF]' : 'text-[#17202A]'
              }`}
            >
              Clients & Case Studies
            </Link>

            <Link
              to="/experts"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                currentPath.startsWith('/experts') ? 'bg-[#EFF4FF] text-[#155EEF]' : 'text-[#17202A]'
              }`}
            >
              Advisory Experts
            </Link>

            <Link
              to="/news"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                currentPath.startsWith('/news') ? 'bg-[#EFF4FF] text-[#155EEF]' : 'text-[#17202A]'
              }`}
            >
              Insights & Academy
            </Link>

            <Link
              to="/contact"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                currentPath === '/contact' ? 'bg-[#EFF4FF] text-[#155EEF]' : 'text-[#17202A]'
              }`}
            >
              Contact Offices
            </Link>

            <div className="pt-4 border-t border-[#E4E7EC] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCalculatorOpen(true);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0B1F33] text-sm font-semibold rounded-lg transition-colors"
              >
                <Calculator className="w-4 h-4 text-[#D6A84F]" />
                <span>Financial ROI Calculator</span>
              </button>

              <Link
                to="/quote"
                className="block text-center w-full px-4 py-3 bg-[#155EEF] text-white text-sm font-semibold rounded-lg shadow-sm"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
