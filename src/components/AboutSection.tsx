import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Award, CheckCircle, Scale, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span className="inline-block w-2 h-0.5 bg-emerald-700" />
            <span>{currentLang === 'en' ? 'Institutional Identity & Legacy' : 'ስለ አድራ ኢትዮጵያ'}</span>
            <span className="text-stone-300">|</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-bold font-mono">
              Reg. Certificate No. 2049
            </span>
            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-bold font-mono">
              42+ Years of Impact (Since 1982)
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-display">
            {currentLang === 'en'
              ? 'Serving Humanity with Justice, Compassion & Love'
              : 'በፍትህ፣ በርህራሄ እና በፍቅር ሰብአዊነትን ማገልገል'}
          </h2>
          <div className="mt-2 text-lg font-bold text-[#006643] italic">
            Slogan: &ldquo;Justice, Compassion, Love&rdquo;
          </div>
          <p className="mt-3 text-base text-stone-700 leading-relaxed font-normal">
            Operating for over 42 years (since 1982) as a non-profit, non-political, non-governmental organization registered under certificate number 2049. Operating across Oromia, Somali, Afar, Dire Dawa, Tigray, Sidama (Southern Ethiopia), and Gambella regions, managing 4.7 to 5.1 Million USD per annum.
          </p>

          {/* Quick Institutional Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200 text-xs">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-stone-500 font-semibold">Established</div>
              <div className="text-lg font-bold text-stone-900 font-mono">1982 (42+ Yrs)</div>
              <div className="text-[11px] text-emerald-700">Continuous Service</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-stone-500 font-semibold">Annual Portfolio</div>
              <div className="text-lg font-bold text-[#006643] font-mono">$4.7M – $5.1M</div>
              <div className="text-[11px] text-emerald-700">USD Managed / Year</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-stone-500 font-semibold">Legal Registration</div>
              <div className="text-lg font-bold text-stone-900 font-mono">Cert. #2049</div>
              <div className="text-[11px] text-stone-600">FDRE ACSO Licensed</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-stone-500 font-semibold">Operational Reach</div>
              <div className="text-lg font-bold text-stone-900 font-mono">7 Regions</div>
              <div className="text-[11px] text-stone-600">Oromia to Somali</div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars: Purpose, Values, Governance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="p-6 sm:p-8 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Our Purpose & Vision</h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              To serve humanity so that all may live as God intended—free from poverty, food insecurity, and avoidable disease, actively participating in flourishing community life with peace and dignity.
            </p>
            <div className="text-xs font-bold text-emerald-900">
              Upholding human dignity regardless of ethnicity, religion, or gender.
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Values: Justice, Compassion, Love</h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              We operate under three unwavering principles: <strong>Justice</strong> in defending the marginalized and vulnerable, <strong>Compassion</strong> in immediate crisis intervention, and unconditional <strong>Love</strong> in long-term capacity building.
            </p>
            <div className="text-xs font-bold text-amber-900">
              Official Slogan: &ldquo;Justice, Compassion, Love&rdquo;
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Autonomous Local Governance</h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Operating for over 42 years as an independent, non-political NGO under certificate number 2049, governed by local leadership in direct coordination with federal ministries and regional bureaus.
            </p>
            <div className="text-xs font-bold text-stone-900">
              Managing $4.7M to $5.1M USD annually with audited transparency.
            </div>
          </div>

        </div>

        {/* Core Operational Sectors Strip per user brief */}
        <div className="p-6 sm:p-8 bg-emerald-950 text-white rounded-2xl mb-16 space-y-4 shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="text-xs font-bold tracking-widest text-amber-400 uppercase font-sans">
                CORE VALUES &amp; PROGRAMMATIC SECTORS
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-editorial mt-1">
                7 Integrated Development &amp; Humanitarian Pillars
              </h3>
            </div>
            <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-emerald-300 border border-white/20">
              4.7 – 5.1 Million USD / Year
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-2">
            {[
              { name: 'Food Security', desc: 'Resilient Agribusiness' },
              { name: 'Health', desc: 'CMAM & Maternal Care' },
              { name: 'Economic Growth', desc: 'VSLA & Micro-enterprises' },
              { name: 'Education', desc: 'SEAQE II & TVET' },
              { name: 'Emergency Management', desc: '72hr Crisis Response' },
              { name: 'WASH', desc: '20+ Yrs Solar Boreholes' },
              { name: 'Renewable Energy', desc: 'Green Solar Academies' }
            ].map((sec, idx) => (
              <div key={idx} className="p-3 bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 transition-colors text-center">
                <div className="text-xs font-bold text-amber-300 font-display">{sec.name}</div>
                <div className="text-[10px] text-stone-300 mt-1">{sec.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Timeline Milestone Cards */}
        <div className="bg-stone-50 p-6 sm:p-10 rounded-2xl border border-stone-200 space-y-8">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-bold text-emerald-900 tracking-wider">Historical Milestones</div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display mt-1">
              Four Decades of Humanitarian Service in Ethiopia
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="space-y-2 border-l-2 border-emerald-700 pl-4 py-1">
              <div className="text-sm font-bold text-emerald-900 font-mono">1982</div>
              <div className="text-sm font-bold text-stone-900">Famine Relief & Legetaffo Shelter</div>
              <p className="text-xs text-stone-700 leading-relaxed">
                ADRA starts emergency shelter and life-saving grain assistance in Legetaffo during severe Ethiopian drought.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-emerald-700 pl-4 py-1">
              <div className="text-sm font-bold text-emerald-900 font-mono">1992</div>
              <div className="text-sm font-bold text-stone-900">Addis Ababa Land Allocation</div>
              <p className="text-xs text-stone-700 leading-relaxed">
                Ethiopian government awards land in Addis Ababa (Kirkos) to construct warehouse and facilities in recognition of famine work.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-emerald-700 pl-4 py-1">
              <div className="text-sm font-bold text-emerald-900 font-mono">2006</div>
              <div className="text-sm font-bold text-stone-900">Pioneering CTC in Somali Region</div>
              <p className="text-xs text-stone-700 leading-relaxed">
                In partnership with USAID, launched Community Therapeutic Care treating acute malnutrition without hospitalization.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-emerald-700 pl-4 py-1">
              <div className="text-sm font-bold text-emerald-900 font-mono">2026</div>
              <div className="text-sm font-bold text-stone-900">Green Energy TVET & Modern WASH</div>
              <p className="text-xs text-stone-700 leading-relaxed">
                Operating solar vocational academies and deep solar water boreholes reaching over 1.25 million people annually.
              </p>
            </div>

          </div>
        </div>

        {/* Financial Transparency & Stewardship Guarantee */}
        <div className="mt-12 p-6 sm:p-8 bg-emerald-950 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase font-semibold text-amber-400 tracking-wider">
              <Award className="w-4 h-4" />
              <span>Audited Financial Stewardship</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display">
              92.4% of every birr goes straight into the field
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Every project undergoes dual independent financial audits conforming to Ethiopian Civil Society Organizations Authority (ACSO) and international donor transparency protocols.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-amber-400 font-display tabular-nums">92.4%</div>
              <div className="text-[11px] text-stone-300 mt-0.5">Program Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white font-display tabular-nums">5.1%</div>
              <div className="text-[11px] text-stone-300 mt-0.5">Field Oversight</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white font-display tabular-nums">2.5%</div>
              <div className="text-[11px] text-stone-300 mt-0.5">Admin & Audit</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
