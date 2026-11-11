import React, { useState } from 'react';
import { Calculator, Heart, ArrowRight, CheckCircle2, Sparkles, BarChart3 } from 'lucide-react';
import { Language } from '../types';
import {
  IMPACT_CALCULATOR_OPTIONS,
  MARKET_EXCHANGE_RATE_USD_TO_ETB
} from '../data/adraData';
import { UI_COPY } from '../data/uiCopy';
import { TRANSLATIONS, pickLang } from '../data/translations';

interface ImpactCalculatorProps {
  currentLang: Language;
  onDonateAmount: (amount: number, currency: 'ETB' | 'USD', title: string) => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ currentLang, onDonateAmount }) => {
  const [currency, setCurrency] = useState<'ETB' | 'USD'>('USD');
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const ui = UI_COPY[currentLang].impact;
  const common = UI_COPY[currentLang].common;
  const nav = TRANSLATIONS[currentLang].nav;

  const currentOption = IMPACT_CALCULATOR_OPTIONS[selectedIndex];

  const getLocalizedTierTitle = (opt: typeof IMPACT_CALCULATOR_OPTIONS[number]) =>
    currentLang === 'am'
      ? opt.titleAm
      : currentLang === 'om'
      ? opt.titleOm
      : currentLang === 'ti'
      ? opt.titleTi
      : opt.title;

  const getLocalizedTierOutcome = (opt: typeof IMPACT_CALCULATOR_OPTIONS[number]) =>
    currentLang === 'am'
      ? opt.outcomeAm
      : currentLang === 'om'
      ? opt.outcomeOm
      : currentLang === 'ti'
      ? opt.outcomeTi
      : opt.outcome;

  const currentTitle = getLocalizedTierTitle(currentOption);
  const currentOutcome = getLocalizedTierOutcome(currentOption);

  const formattedCtaAmount =
    currency === 'USD'
      ? `$${currentOption.amountUsd}`
      : `${currentOption.amountEtb.toLocaleString()} ${currentLang === 'am' || currentLang === 'ti' ? 'ብር' : currentLang === 'om' ? 'Birrii' : 'ETB'}`;

  return (
    <div className="border-b border-emerald-800/50">

      {/* Top Emerald Banner */}
      <div className="bg-[#073826] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/adra_agriculture_food_1792612497905.jpg"
            alt={nav.ourImpact}
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans">
            {common.home} &gt; {nav.ourImpact}
          </div>

          <div className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
            {ui.kicker}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-2xl">
            {ui.bannerTitle}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-sans">
            {ui.bannerSubtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#calculator-tool"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('calculator-tool')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-full shadow-xs cursor-pointer transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              <span>{ui.exploreMetricsBtn}</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-emerald-100 bg-emerald-950/70 px-4 py-2 rounded-full border border-emerald-600/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>{ui.spendRatioBadge}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Impact Estimator & Direct Accountability */}
      <section id="calculator-tool" className="py-16 sm:py-20 adra-section-texture text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>{ui.leftEyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-[#1b0101]">
                {ui.leftTitle}
              </h2>

              <p className="text-[#050504] text-sm sm:text-base leading-relaxed">
                {ui.leftDesc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[#155839]">{ui.leftTaxNote}</span>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-7 bg-white text-stone-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-stone-200 space-y-6">

              {/* Currency toggle */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-800" />
                  <span className="font-semibold text-sm text-stone-800">{ui.estimatorTitle}</span>
                </div>

                <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1.5 rounded-md transition-all font-bold cursor-pointer ${
                      currency === 'USD' ? 'bg-emerald-800 text-white shadow-xs' : 'text-stone-700 hover:text-stone-950'
                    }`}
                  >
                    {ui.currencyUsdLabel}
                  </button>
                  <button
                    onClick={() => setCurrency('ETB')}
                    className={`px-3 py-1.5 rounded-md transition-all font-bold cursor-pointer ${
                      currency === 'ETB' ? 'bg-emerald-800 text-white shadow-xs' : 'text-stone-700 hover:text-stone-950'
                    }`}
                  >
                    {ui.currencyEtbLabel}
                  </button>
                </div>
              </div>

              {/* Going Market Rate Notice */}
              <div className="flex items-center justify-between text-[11px] px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-100">
                <span>
                  {ui.marketRatePrefix} <strong>1 USD ≈ {MARKET_EXCHANGE_RATE_USD_TO_ETB}.00 ETB</strong> {ui.marketRateFloat}
                </span>
                <span className="font-mono text-amber-400 font-bold">{ui.nbeBadge}</span>
              </div>

              {/* Contribution tier buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {IMPACT_CALCULATOR_OPTIONS.map((opt, idx) => {
                  const isSelected = idx === selectedIndex;
                  const etbUnit = currentLang === 'om' ? 'Birrii' : 'ብር';
                  const displayAmount =
                    currency === 'USD' ? `$${opt.amountUsd}` : `${opt.amountEtb.toLocaleString()} ${etbUnit}`;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={`py-3 px-2 rounded-xl text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-600 ring-offset-1'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-900 border border-stone-300'
                      }`}
                    >
                      <div className="text-base sm:text-lg font-bold font-display tabular-nums">
                        {displayAmount}
                      </div>
                      <div className={`text-[11px] uppercase font-bold mt-0.5 line-clamp-1 ${isSelected ? 'text-emerald-100' : 'text-stone-700'}`}>
                        {pickLang(currentLang, opt.shortTag)}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Calculated Outcome Result Box */}
              <div className="bg-emerald-50 border border-emerald-200/80 p-5 rounded-xl space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs text-emerald-900 font-semibold uppercase tracking-wider">
                  <span>{ui.outcomeLabel}</span>
                  <span className="font-mono text-right">{currentTitle}</span>
                </div>
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-medium">
                  "{currentOutcome}"
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  const amount = currency === 'USD' ? currentOption.amountUsd : currentOption.amountEtb;
                  onDonateAmount(amount, currency, currentTitle);
                }}
                className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-emerald-200 text-emerald-200" />
                <span>
                  {ui.donateCtaTemplate.replace('{amount}', formattedCtaAmount)}
                </span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

