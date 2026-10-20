import React from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { SEOHelmet } from '../components/common/SEOHelmet';
import { Home, ArrowRight, Search, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { setIsSearchOpen } = useRouter();

  return (
    <div className="py-24 sm:py-32 bg-[#F5F7FA] min-h-[70vh] flex items-center justify-center">
      <SEOHelmet
        title="404 — Page Not Found | Finora"
        description="The requested page could not be located on the Finora financial advisory platform."
      />
      <div className="max-w-xl mx-auto px-4 text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-[#E4E7EC] shadow-sm">
        <span className="font-display font-black text-6xl sm:text-7xl text-[#155EEF]">
          404
        </span>

        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#0B1F33]">
            Financial Record Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
            The page you are attempting to access has either moved, been archived, or the URL contains a slight typo.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full sm:w-auto px-6 py-3 bg-[#F5F7FA] hover:bg-slate-200 text-[#0B1F33] border border-[#E4E7EC] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#155EEF]" />
            <span>Search Advisory Site</span>
          </button>
        </div>
      </div>
    </div>
  );
};
