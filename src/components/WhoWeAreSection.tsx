import React, { useState } from 'react';
import {
  User,
  Shield,
  Clock,
  BookOpen,
  Users,
  Filter
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, pickLang } from '../data/translations';
import { UI_COPY } from '../data/uiCopy';
import { TEAM_CATEGORIES } from '../data/teamData';
import { WellBeingTriangle } from './WellBeingTriangle';

interface WhoWeAreSectionProps {
  currentLang: Language;
  subTab: string;
  setSubTab: (tab: string) => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ currentLang, subTab, setSubTab }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const ui = UI_COPY[currentLang] || UI_COPY.en;
  const common = ui.common;
  const w = ui.whoWeAre;

  const [selectedLeadershipCategory, setSelectedLeadershipCategory] = useState<string>('all');

  const whoWeAreSubItems = [
    { id: 'about-us', label: w.subLabels.aboutUs, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'our-history', label: w.subLabels.ourHistory, icon: <Clock className="w-4 h-4" /> },
    { id: 'leadership', label: w.subLabels.leadership, icon: <Users className="w-4 h-4" /> },
    { id: 'governance', label: w.subLabels.governance, icon: <Shield className="w-4 h-4" /> },
  ];

  const sectionTitles: Record<string, Record<Language, string>> = {
    'about-us': {
      en: 'Serving communities in Ethiopia with justice and compassion',
      am: 'የኢትዮጵያን ማህበረሰቦች በፍትህ እና በርህራሄ ማገልገል',
      om: 'Hawaasa Itoophiyaa haqa, gara-laafinaa fi jaalalaan tajaajiluu',
      ti: 'ንሕብረተሰብ ኢትዮጵያ ብፍትሕን ርሕራሐን ምግልጋል'
    },
    'our-history': {
      en: 'Our history in Ethiopia',
      am: 'በኢትዮጵያ ያለን ታሪክ',
      om: 'Seenaa keenya Itoophiyaa keessatti',
      ti: 'ኣብ ኢትዮጵያ ዘሎና ታሪኽ'
    },
    leadership: {
      en: 'Leadership & Dedicated Team',
      am: 'አመራር እና የስራ ቡድን',
      om: 'Hoggansa fi Garee Hojii Keenyaa',
      ti: 'መርሕነትን ጻዕራም ጉጅለን'
    },
    governance: {
      en: 'Governance & Safeguarding',
      am: 'አስተዳደር እና ደህንነት ጥበቃ',
      om: 'Bulchiinsa fi Eegumsa Seeraa',
      ti: 'ምሕደራን ድሕንነትን'
    }
  };

  const sectionSubtitles: Record<string, Record<Language, string>> = {
    'about-us': {
      en: 'ADRA Ethiopia is an autonomous non-profit organization, part of the worldwide Adventist Development and Relief Agency network.',
      am: 'አድራ ኢትዮጵያ በዓለም አቀፉ የአድቬንቲስት የእርዳታና ልማት ድርጅት (ADRA) ኔትወርክ ስር የሚገኝ ገለልተኛ መንግስታዊ ያልሆነ ድርጅት ነው።',
      om: "ADRA Itoophiyaan dhaabbata miti-mootummaa of danda'ee fi qaama networkii gargaarsa namoomaa fi misoomaa ADRA addunyaati.",
      ti: 'ኣድራ ኢትዮጵያ ኣካል ዓለምለኻዊ መርበብ ኣድራ ኮይኑ ናጻ ዘይመንግስታዊ ትካል እዩ።'
    },
    'our-history': {
      en: "A timeline of ADRA Ethiopia's journey of humanitarian service since 1982.",
      am: 'ከ1982 ዓ.ም ጀምሮ የአድራ ኢትዮጵያ የሰብዓዊ አገልግሎት ጉዞ የጊዜ ሰሌዳ።',
      om: 'Bara 1982 eegalee imala fi gumaacha tajaajila namoomaa ADRA Itoophiyaa.',
      ti: 'ካብ 1982 ጀሚሩ ናይ ኣድራ ኢትዮጵያ ሰብኣዊ ኣገልግሎት መገሻ።'
    },
    leadership: {
      en: 'Restructured into 5 specialized categories, guiding ADRA Ethiopia with local expertise and humanitarian integrity.',
      am: 'በ5 ዘርፎች የተዋቀረ፣ አድራ ኢትዮጵያን በሀገር በቀል እውቀት እና በሰብዓዊ ታማኝነት የሚመራ ቡድን።',
      om: "Garee ADRA Itoophiyaa ramaddii 5n qindaa'ee beekumsa ogummaa naannoo fi amanamummaa olaanaatiin geggeessu.",
      ti: 'ንኣድራ ኢትዮጵያ ብ5 ዘፈራት ተወዲቡ ብናይ ከባቢ ፍልጠትን ሰብኣዊ ተኣማንነትን ዝመርሕ ጉጅለ።'
    },
    governance: {
      en: 'Adhering to strict Ethiopian statutory standards, safeguarding policies, and independent audits.',
      am: 'ጥብቅ የኢትዮጵያ የህግ ደረጃዎችን፣ የደህንነት ፖሊሲዎችን እና ገለልተኛ ኦዲቶችን ማክበር።',
      om: 'Ulaagaalee heeraa fi seera qabeessummaa Itoophiyaa, imaammata eegumsa namoomaa fi odiitii walabaa guutummaatti kabajuu.',
      ti: 'ጥብቂ ናይ ኢትዮጵያ ሕጋዊ መዐቀኒታት፣ ፖሊሲታት ድሕንነትን ናጻ ኦዲትን ምኽባር።'
    }
  };

  const displayedCategories =
    selectedLeadershipCategory === 'all'
      ? TEAM_CATEGORIES
      : TEAM_CATEGORIES.filter((c) => c.id === selectedLeadershipCategory);

  const activeSubLabel = whoWeAreSubItems.find((item) => item.id === subTab)?.label || w.subLabels.aboutUs;

  return (
    <section id="who-we-are" className="border-b border-stone-200 bg-white scroll-mt-20">
      <div className="bg-[#004D3A] text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/ethiopia_highland_landscape_1792616589925.jpg"
            alt={sectionTitles[subTab]?.[currentLang] || sectionTitles[subTab]?.en}
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004D3A] via-[#004D3A]/90 to-[#004D3A]/80" />
          <div className="absolute bottom-2 right-4 text-[9px] font-sans text-white/75 select-none">
            {common.photoCredit}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-left">
          <div className="text-xs text-emerald-300 font-sans flex items-center gap-2">
            <span>{common.home}</span>
            <span>&gt;</span>
            <span className="font-semibold text-white">{t.nav.whoWeAre}</span>
            <span>&gt;</span>
            <span className="text-[#f59e0b] font-medium">{activeSubLabel}</span>
          </div>

          <div className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
            {t.hero.kicker} — {t.nav.whoWeAre}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-sans leading-tight text-white max-w-3xl">
            {sectionTitles[subTab]?.[currentLang] || sectionTitles[subTab]?.en}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl font-serif leading-relaxed">
            {sectionSubtitles[subTab]?.[currentLang] || sectionSubtitles[subTab]?.en}
          </p>
        </div>
      </div>

      <div className="bg-[#f4f9f6] border-b border-stone-200 sticky top-24 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-none py-2.5">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider shrink-0 mr-1 hidden md:inline font-sans">
              {w.sectionsPrefix}
            </span>
            {whoWeAreSubItems.map((item) => {
              const isActive = subTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSubTab(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer font-sans ${
                    isActive
                      ? 'bg-[#007B5F] text-white shadow-xs'
                      : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {subTab === 'about-us' && (
            <div className="space-y-10">
              <div className="max-w-3xl space-y-5 text-base sm:text-lg text-stone-800 leading-relaxed font-serif text-left">
                <p>{w.aboutP1}</p>
                <p>{w.aboutP2}</p>
              </div>

              <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                <div className="p-6 bg-[#f4f9f6] rounded-2xl border border-[#007B5F]/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-motto text-2xl text-[#007B5F]">{w.values.justiceTitle}</span>
                    <span className="text-[10px] font-bold text-stone-400 font-sans uppercase">{w.values.justiceBadge}</span>
                  </div>
                  <p className="text-sm text-stone-600 font-serif leading-relaxed">{w.values.justiceDesc}</p>
                </div>

                <div className="p-6 bg-[#f4f9f6] rounded-2xl border border-[#007B5F]/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-motto text-2xl text-[#007B5F]">{w.values.compassionTitle}</span>
                    <span className="text-[10px] font-bold text-stone-400 font-sans uppercase">{w.values.compassionBadge}</span>
                  </div>
                  <p className="text-sm text-stone-600 font-serif leading-relaxed">{w.values.compassionDesc}</p>
                </div>

                <div className="p-6 bg-[#f4f9f6] rounded-2xl border border-[#007B5F]/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-motto text-2xl text-[#007B5F]">{w.values.loveTitle}</span>
                    <span className="text-[10px] font-bold text-stone-400 font-sans uppercase">{w.values.loveBadge}</span>
                  </div>
                  <p className="text-sm text-stone-600 font-serif leading-relaxed">{w.values.loveDesc}</p>
                </div>
              </div>

              <WellBeingTriangle
                currentLang={currentLang}
                onExploreSector={(sectorId) => {
                  const targetArea = sectorId === 'livelihoods' ? 'livelihood' : sectorId;
                  window.dispatchEvent(new CustomEvent('adra-open-area', { detail: targetArea }));
                  const el = document.getElementById('what-we-do');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          )}

          {subTab === 'our-history' && (
            <div className="max-w-3xl space-y-8">
              <div className="relative border-l-2 border-[#006643] ml-4 pl-6 space-y-10">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-white ring-2 ring-[#006643]" />
                  <div className="text-xs font-bold text-[#006643] font-mono">{w.history.m1982Tag}</div>
                  <h4 className="text-xl font-bold text-stone-900 font-editorial mt-0.5">{w.history.m1982Title}</h4>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{w.history.m1982Desc}</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-white ring-2 ring-[#006643]" />
                  <div className="text-xs font-bold text-[#006643] font-mono">{w.history.m1992Tag}</div>
                  <h4 className="text-xl font-bold text-stone-900 font-editorial mt-0.5">{w.history.m1992Title}</h4>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{w.history.m1992Desc}</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-white ring-2 ring-[#006643]" />
                  <div className="text-xs font-bold text-[#006643] font-mono">{w.history.m2006Tag}</div>
                  <h4 className="text-xl font-bold text-stone-900 font-editorial mt-0.5">{w.history.m2006Title}</h4>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{w.history.m2006Desc}</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-white ring-2 ring-[#006643]" />
                  <div className="text-xs font-bold text-[#006643] font-mono">{w.history.mNowTag}</div>
                  <h4 className="text-xl font-bold text-stone-900 font-editorial mt-0.5">{w.history.mNowTitle}</h4>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{w.history.mNowDesc}</p>
                </div>
              </div>
            </div>
          )}

          {subTab === 'leadership' && (
            <div className="space-y-10">
              <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-stone-200">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mr-2">
                  <Filter className="w-3.5 h-3.5 text-[#006643]" />
                  <span>{w.categoriesLabel}</span>
                </div>

                <button
                  onClick={() => setSelectedLeadershipCategory('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedLeadershipCategory === 'all'
                      ? 'bg-[#006643] text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {w.allTiersBtn}
                </button>

                {TEAM_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedLeadershipCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedLeadershipCategory === cat.id
                        ? 'bg-[#006643] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    <span>{pickLang(currentLang, cat.title)}</span>
                    <span className="ml-1 opacity-75 font-mono text-[11px]">(4)</span>
                  </button>
                ))}
              </div>

              <div className="space-y-12">
                {displayedCategories.map((cat, catIdx) => (
                  <div key={cat.id} className="space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-stone-100">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-emerald-100 text-[#006643] flex items-center justify-center font-bold text-xs">
                          {catIdx + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-editorial">
                          {pickLang(currentLang, cat.title)}
                        </h3>
                        <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-md font-bold">
                          {w.membersCount}
                        </span>
                      </div>
                      <p className="text-xs text-stone-700 font-sans max-w-md font-medium">
                        {pickLang(currentLang, cat.description)}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {cat.members.map((member) => (
                        <div
                          key={member.id}
                          className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-3.5 shadow-2xs hover:shadow-md transition-shadow group flex flex-col justify-between"
                        >
                          <div>
                            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#006643] group-hover:scale-105 transition-transform">
                              <User className="w-8 h-8 text-[#006643]" />
                            </div>

                            <div className="mt-3">
                              <h4 className="text-base font-bold text-stone-900 font-editorial">{member.name}</h4>
                              <div className="text-xs font-bold text-[#006643] mt-0.5">{pickLang(currentLang, member.role)}</div>
                              {member.credentials && (
                                <div className="text-[11px] text-stone-600 font-bold font-mono mt-0.5">
                                  {pickLang(currentLang, member.credentials)}
                                </div>
                              )}
                            </div>
                          </div>

                          <p className="text-xs text-stone-700 leading-relaxed font-sans pt-2 border-t border-stone-200 text-left">
                            {pickLang(currentLang, member.bio)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {subTab === 'governance' && (
            <div className="max-w-3xl space-y-6">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-stone-900 font-editorial">{w.governance.heading}</h4>
                <p className="text-sm text-stone-700 leading-relaxed font-sans">{w.governance.legalText}</p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium">
                  <strong>{w.governance.officeBannerLabel}</strong> {w.governance.officeBannerText}
                </div>
              </div>

              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs sm:text-sm text-stone-700 font-sans">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <Shield className="w-4 h-4 text-[#006643]" />
                  <span>{w.governance.commitmentsLabel}</span>
                </div>
                <ul className="space-y-2 list-disc pl-5">
                  {w.governance.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

