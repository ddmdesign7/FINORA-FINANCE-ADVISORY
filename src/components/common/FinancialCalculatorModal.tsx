import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { X, Calculator, ArrowRight, TrendingUp, DollarSign, ShieldAlert, Sparkles } from 'lucide-react';

export const FinancialCalculatorModal: React.FC = () => {
  const { isCalculatorOpen, setIsCalculatorOpen, navigate } = useRouter();

  // Inputs
  const [annualRevenue, setAnnualRevenue] = useState(15000000); // $15M default
  const [ebitdaMargin, setEbitdaMargin] = useState(14); // 14%
  const [currentDSO, setCurrentDSO] = useState(58); // 58 days
  const [industryMultiple, setIndustryMultiple] = useState(8.5); // 8.5x EBITDA

  if (!isCalculatorOpen) return null;

  // Quantitative Calculations
  const currentEBITDA = annualRevenue * (ebitdaMargin / 100);
  const currentValuation = currentEBITDA * industryMultiple;

  // Potential with Finora Advisory Benchmarks
  // 1. Margin expansion of +2.8% (280 bps)
  const improvedMargin = ebitdaMargin + 2.8;
  const improvedEBITDA = annualRevenue * (improvedMargin / 100);
  const incrementalEBITDA = improvedEBITDA - currentEBITDA;

  // 2. DSO reduction of 16 days freed into cash
  const targetDSO = Math.max(30, currentDSO - 16);
  const dsoDaysSaved = currentDSO - targetDSO;
  const workingCapitalUnlocked = (annualRevenue / 365) * dsoDaysSaved;

  // 3. Enterprise Value expansion
  const improvedValuation = improvedEBITDA * (industryMultiple + 1.2); // multiple expansion from cleaner reporting
  const valuationCreation = improvedValuation - currentValuation;

  const handleBookConsultation = () => {
    setIsCalculatorOpen(false);
    navigate('/quote');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B1F33]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#E4E7EC] w-full max-w-3xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0B1F33] text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#155EEF] flex items-center justify-center text-white">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Enterprise Financial ROI & Valuation Calculator
              </h3>
              <p className="text-xs text-white/70">
                Simulate working capital liberation and enterprise value expansion with Finora advisory.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCalculatorOpen(false)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Calculator Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Sliders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Annual Revenue */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#17202A]">Annual Corporate Revenue</span>
                <span className="text-[#155EEF] font-bold">${(annualRevenue / 1000000).toFixed(1)}M</span>
              </div>
              <input
                type="range"
                min="2000000"
                max="100000000"
                step="1000000"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#155EEF]"
              />
              <div className="flex justify-between text-[10px] text-[#667085]">
                <span>$2M</span>
                <span>$50M</span>
                <span>$100M+</span>
              </div>
            </div>

            {/* Current EBITDA Margin */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#17202A]">Current EBITDA Margin</span>
                <span className="text-[#155EEF] font-bold">{ebitdaMargin}% (${((annualRevenue * (ebitdaMargin / 100)) / 1000000).toFixed(2)}M)</span>
              </div>
              <input
                type="range"
                min="3"
                max="40"
                step="1"
                value={ebitdaMargin}
                onChange={(e) => setEbitdaMargin(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#155EEF]"
              />
              <div className="flex justify-between text-[10px] text-[#667085]">
                <span>3%</span>
                <span>20%</span>
                <span>40%</span>
              </div>
            </div>

            {/* Current DSO */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#17202A]">Days Sales Outstanding (DSO)</span>
                <span className="text-[#155EEF] font-bold">{currentDSO} Days</span>
              </div>
              <input
                type="range"
                min="30"
                max="95"
                step="1"
                value={currentDSO}
                onChange={(e) => setCurrentDSO(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#155EEF]"
              />
              <div className="flex justify-between text-[10px] text-[#667085]">
                <span>30 Days</span>
                <span>60 Days</span>
                <span>95 Days</span>
              </div>
            </div>

            {/* Target EBITDA Exit Multiple */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#17202A]">Sector EBITDA Multiple</span>
                <span className="text-[#155EEF] font-bold">{industryMultiple}x Multiple</span>
              </div>
              <input
                type="range"
                min="4"
                max="18"
                step="0.5"
                value={industryMultiple}
                onChange={(e) => setIndustryMultiple(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#155EEF]"
              />
              <div className="flex justify-between text-[10px] text-[#667085]">
                <span>4x</span>
                <span>10x</span>
                <span>18x</span>
              </div>
            </div>
          </div>

          {/* Quantified Estimated Impact Cards */}
          <div className="bg-[#F5F7FA] rounded-xl p-5 sm:p-6 border border-[#E4E7EC] space-y-4">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0B1F33] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#D6A84F]" />
              <span>Projected Finora Strategic Impact & Value Creation</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#E4E7EC] space-y-1">
                <span className="text-[11px] font-semibold text-[#667085] uppercase">Working Capital Freed</span>
                <div className="text-2xl font-display font-extrabold text-[#12B76A]">
                  ${(workingCapitalUnlocked / 1000).toLocaleString('en-US', { maximumFractionDigits: 0 })}k
                </div>
                <p className="text-[11px] text-[#667085]">
                  Via 16-day DSO compression & invoice cycle automation.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E4E7EC] space-y-1">
                <span className="text-[11px] font-semibold text-[#667085] uppercase">Annual EBITDA Gain</span>
                <div className="text-2xl font-display font-extrabold text-[#155EEF]">
                  +${(incrementalEBITDA / 1000).toLocaleString('en-US', { maximumFractionDigits: 0 })}k/yr
                </div>
                <p className="text-[11px] text-[#667085]">
                  Through 280 bps cost rationalization & tax optimization.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E4E7EC] space-y-1">
                <span className="text-[11px] font-semibold text-[#667085] uppercase">Valuation Expansion</span>
                <div className="text-2xl font-display font-extrabold text-[#0B1F33]">
                  +${(valuationCreation / 1000000).toFixed(2)}M
                </div>
                <p className="text-[11px] text-[#667085]">
                  Higher normalized EBITDA + audited multi-multiple expansion.
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-[#667085]">
              *Illustrative financial simulation based on historical Finora client medians.
            </p>
            <button
              onClick={handleBookConsultation}
              className="w-full sm:w-auto px-6 py-3 bg-[#155EEF] hover:bg-[#0D47C2] text-white text-sm font-semibold rounded-lg shadow transition-colors flex items-center justify-center space-x-2"
            >
              <span>Build Custom Financial Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
