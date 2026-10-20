import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Search, X, ArrowRight, Layers, Building2, User, FileText, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/services';
import { industriesData } from '../../data/industries';
import { expertsData } from '../../data/experts';
import { newsArticlesData } from '../../data/news';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigate } = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchedServices = servicesData.filter(
    s => s.title.toLowerCase().includes(cleanQuery) ||
         s.shortDescription.toLowerCase().includes(cleanQuery) ||
         s.category.toLowerCase().includes(cleanQuery)
  );

  const matchedIndustries = industriesData.filter(
    i => i.name.toLowerCase().includes(cleanQuery) ||
         i.shortDescription.toLowerCase().includes(cleanQuery)
  );

  const matchedExperts = expertsData.filter(
    e => e.name.toLowerCase().includes(cleanQuery) ||
         e.position.toLowerCase().includes(cleanQuery) ||
         e.specialization.some(s => s.toLowerCase().includes(cleanQuery))
  );

  const matchedArticles = newsArticlesData.filter(
    a => a.title.toLowerCase().includes(cleanQuery) ||
         a.category.toLowerCase().includes(cleanQuery) ||
         a.tags.some(t => t.toLowerCase().includes(cleanQuery))
  );

  const totalResults = matchedServices.length + matchedIndustries.length + matchedExperts.length + matchedArticles.length;

  const handleSelect = (path: string) => {
    setIsSearchOpen(false);
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B1F33]/80 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#E4E7EC] w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E4E7EC] flex items-center space-x-3 bg-[#F5F7FA]">
          <Search className="w-5 h-5 text-[#155EEF] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search financial services, industries, advisors, or insights..."
            className="w-full bg-transparent text-[#17202A] placeholder:text-[#667085] text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-200 rounded text-[#667085]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2.5 py-1 text-xs font-semibold bg-white border border-[#E4E7EC] rounded-md text-[#667085] hover:text-[#17202A]"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {cleanQuery === '' ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#667085] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span>Popular Inquiries</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Tax Advisory', path: '/services/tax-advisory' },
                  { label: 'Dynamic Cash Flow', path: '/services/financial-management' },
                  { label: 'Technology & SaaS', path: '/industries/technology' },
                  { label: 'M&A Due Diligence', path: '/services/m-and-a-advisory' },
                  { label: 'Corporate Treasury', path: '/services/investment-advisory' },
                  { label: 'Request Consultation', path: '/quote' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(item.path)}
                    className="px-3 py-1.5 bg-[#F5F7FA] hover:bg-[#EFF4FF] hover:text-[#155EEF] border border-[#E4E7EC] text-xs font-medium text-[#17202A] rounded-lg transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center space-y-2">
              <p className="text-sm font-semibold text-[#17202A]">No exact matches found for "{query}"</p>
              <p className="text-xs text-[#667085]">Try searching for terms like "tax", "cash flow", "healthcare", or "consulting".</p>
            </div>
          ) : (
            <>
              {/* Matched Services */}
              {matchedServices.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#667085] uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-[#155EEF]" />
                    <span>Financial Services ({matchedServices.length})</span>
                  </div>
                  <div className="space-y-1">
                    {matchedServices.map(s => (
                      <button
                        key={s.id}
                        onClick={() => handleSelect(`/services/${s.slug}`)}
                        className="w-full text-left p-3 hover:bg-[#F5F7FA] rounded-xl transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="space-y-0.5">
                          <div className="text-sm font-semibold text-[#17202A] group-hover:text-[#155EEF]">
                            {s.title}
                          </div>
                          <div className="text-xs text-[#667085] line-clamp-1">{s.shortDescription}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#155EEF] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Industries */}
              {matchedIndustries.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#E4E7EC]">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#667085] uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5 text-[#D6A84F]" />
                    <span>Industry Practices ({matchedIndustries.length})</span>
                  </div>
                  <div className="space-y-1">
                    {matchedIndustries.map(i => (
                      <button
                        key={i.id}
                        onClick={() => handleSelect(`/industries/${i.slug}`)}
                        className="w-full text-left p-3 hover:bg-[#F5F7FA] rounded-xl transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="space-y-0.5">
                          <div className="text-sm font-semibold text-[#17202A] group-hover:text-[#155EEF]">
                            {i.name}
                          </div>
                          <div className="text-xs text-[#667085] line-clamp-1">{i.shortDescription}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#155EEF] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Experts */}
              {matchedExperts.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#E4E7EC]">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#667085] uppercase tracking-wider">
                    <User className="w-3.5 h-3.5 text-[#155EEF]" />
                    <span>Advisory Experts ({matchedExperts.length})</span>
                  </div>
                  <div className="space-y-1">
                    {matchedExperts.map(e => (
                      <button
                        key={e.id}
                        onClick={() => handleSelect(`/experts/${e.slug}`)}
                        className="w-full text-left p-3 hover:bg-[#F5F7FA] rounded-xl transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <img src={e.portrait} alt={e.name} className="w-8 h-8 rounded-full object-cover" />
                          <div>
                            <div className="text-sm font-semibold text-[#17202A] group-hover:text-[#155EEF]">
                              {e.name}
                            </div>
                            <div className="text-xs text-[#667085]">{e.position}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#155EEF] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Insights */}
              {matchedArticles.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#E4E7EC]">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#667085] uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5 text-[#12B76A]" />
                    <span>Insights & Articles ({matchedArticles.length})</span>
                  </div>
                  <div className="space-y-1">
                    {matchedArticles.map(a => (
                      <button
                        key={a.id}
                        onClick={() => handleSelect(`/news/${a.slug}`)}
                        className="w-full text-left p-3 hover:bg-[#F5F7FA] rounded-xl transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="space-y-0.5">
                          <div className="text-sm font-semibold text-[#17202A] group-hover:text-[#155EEF]">
                            {a.title}
                          </div>
                          <div className="text-xs text-[#667085] line-clamp-1">{a.excerpt}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#155EEF] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F5F7FA] border-t border-[#E4E7EC] flex items-center justify-between text-xs text-[#667085] px-6">
          <span>Navigate with mouse or keyboard</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
