import React, { useState } from 'react';
import { Calculator, Heart, ArrowRight, CheckCircle2, Sparkles, BarChart3 } from 'lucide-react';
import { Language } from '../types';
import { IMPACT_CALCULATOR_OPTIONS } from '../data/adraData';

interface ImpactCalculatorProps {
  currentLang: Language;
  onDonateAmount: (amount: number, currency: 'ETB' | 'USD', title: string) => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ currentLang, onDonateAmount }) => {
  const [currency, setCurrency] = useState<'ETB' | 'USD'>('USD');
  const [selectedIndex, setSelectedIndex] = useState<number>(1); // default to $50 tier

  const currentOption = IMPACT_CALCULATOR_OPTIONS[selectedIndex];

  return (
    <div className="border-b border-emerald-800/50">
      
      {/* Top Emerald Banner matching screenshot 8 & style of Where We Work and AI for Good */}
      <div className="bg-[#073826] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background photo overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/adra_agriculture_food_1792612497905.jpg"
            alt="Our Impact"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/75" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans">
            Home &gt; Our Impact
          </div>
          
          <div className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
            EVALUATED OUTCOMES &amp; METRICS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-2xl">
            {currentLang === 'en' 
              ? 'Measurable Change Across Ethiopia' 
              : currentLang === 'am' 
              ? 'በመላው ኢትዮጵያ የሚለካ ተጨባጭ ለውጥ' 
              : "Itoophiyaa Guutuutti Jijjiirama Safaramuu Danda'u"}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-sans">
            {currentLang === 'en'
              ? 'Independently verified data tracking real improvements in clean water availability, child nutrition, and household incomes nationwide.'
              : currentLang === 'am'
              ? 'በንጹህ ውሃ ተደራሽነት፣ በህጻናት ስነ-ምግብ እና በቤተሰብ ገቢ ላይ የተመዘገቡ ተጨባጭ መሻሻሎችን የሚያሳዩ የተረጋገጡ መረጃዎች።'
              : "Bishaan qulqulluu, nyaata madaalawaa daa'immanii fi galii maatii irratti fooyya'iinsa qabatamaa mul'atu ragaadhaan hordofuu."}
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
              <span>{currentLang === 'en' ? 'Explore Verified Metrics' : 'የተረጋገጡ አሃዞችን ይመልከቱ'}</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-emerald-100 bg-emerald-950/70 px-4 py-2 rounded-full border border-emerald-600/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>92.4% Program Spend Ratio · CHS &amp; EDRMC Certified</span>
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
              <span>{currentLang === 'en' ? 'Direct Accountability' : 'የእርስዎ አስተዋፅኦ'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-[#1b0101]">
              {currentLang === 'en' ? 'See What Your Generosity Builds in Ethiopia' : 'የእርስዎ እርዳታ በኢትዮጵያ የሚያመጣው ለውጥ'}
            </h2>

            <p className="text-[#050504] text-sm sm:text-base leading-relaxed">
              {currentLang === 'en'
                ? 'Because ADRA Ethiopia operates with low overhead and an all-national Ethiopian field staff, over 92% of your contribution directly funds concrete, verifiable community outcomes.'
                : 'አድራ ኢትዮጵያ አነስተኛ የአስተዳደር ወጪ እና 100% የሀገር ውስጥ ባለሙያዎችን ስለሚጠቀም፣ ከእርዳታዎ 92% በላይ በቀጥታ ወደ ማህበረሰብ ልማት ፕሮጀክቶች ይደርሳል።'}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-[#155839]">Full tax receipt and annual audited impact statement provided</span>
            </div>
          </div>

          {/* Right Interactive Calculator Box */}
          <div className="lg:col-span-7 bg-white text-stone-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-stone-200 space-y-6">
            
            {/* Currency toggle */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-800" />
                <span className="font-semibold text-sm text-stone-800">Impact Estimator</span>
              </div>

              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1.5 rounded-md transition-all font-bold ${
                    currency === 'USD' ? 'bg-emerald-800 text-white shadow-xs' : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => setCurrency('ETB')}
                  className={`px-3 py-1.5 rounded-md transition-all font-bold ${
                    currency === 'ETB' ? 'bg-emerald-800 text-white shadow-xs' : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  ETB (ብር)
                </button>
              </div>
            </div>

            {/* Going Market Rate Notice */}
            <div className="flex items-center justify-between text-[11px] px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-100">
              <span>Going Market Exchange: <strong>1 USD ≈ 130.00 ETB</strong> (Official Float Rate)</span>
              <span className="font-mono text-amber-400 font-bold">NBE Interbank</span>
            </div>

            {/* Contribution tier buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {IMPACT_CALCULATOR_OPTIONS.map((opt, idx) => {
                const isSelected = idx === selectedIndex;
                const displayAmount = currency === 'USD' ? `$${opt.amountUsd}` : `${opt.amountEtb.toLocaleString()} ብር`;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className={`py-3 px-2 rounded-xl text-center transition-all ${
                      isSelected
                        ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-600 ring-offset-1'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-900 border border-stone-300'
                    }`}
                  >
                    <div className="text-base sm:text-lg font-bold font-display tabular-nums">
                      {displayAmount}
                    </div>
                    <div className={`text-[11px] uppercase font-bold mt-0.5 line-clamp-1 ${isSelected ? 'text-emerald-100' : 'text-stone-700'}`}>
                      {opt.title.split(' ')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Calculated Outcome Result Box */}
            <div className="bg-emerald-50 border border-emerald-200/80 p-5 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-xs text-emerald-900 font-semibold uppercase tracking-wider">
                <span>Direct Tangible Humanitarian Outcome</span>
                <span className="font-mono">{currentOption.title}</span>
              </div>
              <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-medium">
                "{currentOption.outcome}"
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={() => {
                const amount = currency === 'USD' ? currentOption.amountUsd : currentOption.amountEtb;
                onDonateAmount(amount, currency, currentOption.title);
              }}
              className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-emerald-200 text-emerald-200" />
              <span>
                {currentLang === 'en'
                  ? `Donate ${currency === 'USD' ? `$${currentOption.amountUsd}` : `${currentOption.amountEtb.toLocaleString()} ETB`} to Empower Communities`
                  : `${currency === 'USD' ? `$${currentOption.amountUsd}` : `${currentOption.amountEtb.toLocaleString()} ብር`} ይለግሱ`}
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
