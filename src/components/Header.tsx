import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Heart, 
  ChevronDown, 
  Globe, 
  Check, 
  GraduationCap, 
  HeartPulse, 
  Wheat, 
  LifeBuoy, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { AdraLogo } from './AdraLogo';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenDonate: (presetSector?: string, presetAmount?: number) => void;
  onOpenChatbot: () => void;
  onOpenBrandGuide?: () => void;
  onOpenBrandTest?: () => void;
  activeNavTab: string;
  setActiveNavTab: (tab: string) => void;
  whoWeAreSubTab: string;
  setWhoWeAreSubTab: (subTab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenDonate,
  onOpenBrandGuide,
  onOpenBrandTest,
  activeNavTab,
  setActiveNavTab,
  whoWeAreSubTab,
  setWhoWeAreSubTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoWeAreDropdownOpen, setWhoWeAreDropdownOpen] = useState(false);
  const [whatWeDoDropdownOpen, setWhatWeDoDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);

  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLangDropdownRef = useRef<HTMLDivElement>(null);
  const whoWeAreDropdownRef = useRef<HTMLDivElement>(null);
  const whatWeDoDropdownRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (langDropdownRef.current && !langDropdownRef.current.contains(target)) {
        setLangDropdownOpen(false);
      }
      if (mobileLangDropdownRef.current && !mobileLangDropdownRef.current.contains(target)) {
        setMobileLangDropdownOpen(false);
      }
      if (whoWeAreDropdownRef.current && !whoWeAreDropdownRef.current.contains(target)) {
        setWhoWeAreDropdownOpen(false);
      }
      if (whatWeDoDropdownRef.current && !whatWeDoDropdownRef.current.contains(target)) {
        setWhatWeDoDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const whoWeAreSubItems = [
    { id: 'about-us', label: t.whoWeAreSub.aboutUs },
    { id: 'our-history', label: t.whoWeAreSub.ourHistory },
    { id: 'leadership', label: t.whoWeAreSub.leadership },
    { id: 'governance', label: t.whoWeAreSub.governance },
  ];

  // Rich Program pillars with image thumbnails and metrics for the Programs mega-menu
  const programPillars = [
    {
      id: 'education',
      title: t.nav.education || 'Education',
      subtitle: 'SEAQE II & Girls Schooling',
      metric: '85,000+ Enrolled',
      image: '/assets/images/adra_education_girls_1792612496863.jpg',
      icon: <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
    },
    {
      id: 'health',
      title: t.nav.health || 'Health',
      subtitle: 'Nutrition & Maternal CTC',
      metric: '310,000+ Treated',
      image: '/assets/images/adra_emergency_health_1792612497133.jpg',
      icon: <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
    },
    {
      id: 'livelihood',
      title: t.nav.livelihoods || 'Livelihood',
      subtitle: 'Solar Irrigation & VSLAs',
      metric: '68,000+ Farmers',
      image: '/assets/images/adra_agriculture_food_1792612497905.jpg',
      icon: <Wheat className="w-3.5 h-3.5 text-amber-400" />
    },
    {
      id: 'disaster-response',
      title: t.nav.disasterResponse || 'Disaster Response',
      subtitle: '72-Hr Relief & Mobile Cash',
      metric: '550,000+ Supported',
      image: '/assets/images/solar_water_desert_1792618997738.jpg',
      icon: <LifeBuoy className="w-3.5 h-3.5 text-amber-400" />
    }
  ];

  const languageOptions: { id: Language; code: string; label: string; nativeName: string; region: string }[] = [
    { id: 'en', code: 'EN', label: 'English', nativeName: 'English', region: 'Global / International' },
    { id: 'am', code: 'አማ', label: 'Amharic', nativeName: 'አማርኛ', region: 'Ethiopia (Federal)' },
    { id: 'om', code: 'ORO', label: 'Afaan Oromoo', nativeName: 'Afaan Oromoo', region: 'Oromia Region' },
    { id: 'ti', code: 'ትግ', label: 'Tigrinya', nativeName: 'ትግርኛ', region: 'Tigray Region' },
  ];

  const currentOption = languageOptions.find((opt) => opt.id === currentLang) || languageOptions[0];

  const handleNavClick = (tabId: string, targetId?: string) => {
    setActiveNavTab(tabId);
    setMobileMenuOpen(false);
    setWhoWeAreDropdownOpen(false);
    setWhatWeDoDropdownOpen(false);
    const scrollTarget = targetId || tabId;
    const element = document.getElementById(scrollTarget);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProgramDossier = (pillarId: string) => {
    setActiveNavTab('what-we-do');
    setWhatWeDoDropdownOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById('what-we-do');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Dispatch custom event to trigger rich dossier modal in WhatWeDoSection
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('adra-open-area', { detail: pillarId }));
    }, 150);
  };

  const handleSubItemClick = (subId: string) => {
    setWhoWeAreSubTab(subId);
    setActiveNavTab('who-we-are');
    setWhoWeAreDropdownOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById('who-we-are');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#004D3A] border-b border-[#007B5F]/40 shadow-md text-white transition-colors duration-200">
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3 lg:gap-5">
        
        {/* Left Brand Lockup: Official ADRA Logo + Separated Country Office / Ethiopia + Kaushan Motto */}
        <div 
          onClick={() => {
            setActiveNavTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer group shrink-0 border-r border-emerald-600/30 pr-4 2xl:pr-6"
        >
          {/* Official ADRA Logo: Horizontal configuration in White for high contrast, min-size enforced >= 100px */}
          <div className="py-1 px-1.5 transition-transform group-hover:scale-102">
            <AdraLogo
              configuration="horizontal"
              color="white"
              size={118}
              alt="ADRA - Adventist Development and Relief Agency"
            />
          </div>

          {/* Typography Lockup: Country Office / Ethiopia distinctly separated by clear space & divider */}
          <div className="flex flex-col border-l border-emerald-500/40 pl-3 py-0.5">
            <span className="text-[10px] font-bold text-[#f59e0b] tracking-[0.16em] uppercase leading-none font-sans">
              {t.common.countryOffice}
            </span>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight font-sans">
              Ethiopia
            </span>
            {/* Kaushan Script Motto at 3-10 degree angle */}
            <span className="font-motto text-[11px] text-emerald-200/90 font-normal leading-none mt-1 hidden sm:inline-block">
              Justice. Compassion. Love.
            </span>
          </div>
        </div>

        {/* Center / Right Desktop Navigation: Formatted per menu_237eb8fd.jpg */}
        <div className="hidden xl:flex items-stretch gap-3 2xl:gap-5">
          
          {/* Cluster 1: Explore Our Work */}
          <div className="flex flex-col justify-between">
            {/* Top Category Title + Underline extending across */}
            <div>
              <span className="text-[13px] font-bold text-white tracking-tight font-sans">
                {t.nav.exploreOurWork}
              </span>
              <div style={{ width: '720px' }} className="h-px bg-emerald-700/50 mt-1 mb-1.5" />
            </div>

            {/* Bottom Row of Navigation Links: Who We Are | What We Do | Where We Work | AI for Good | Our Impact | Stories | Blog */}
            <div className="flex items-end gap-3.5 2xl:gap-5 pb-0.5">
              
              {/* Item: About Us / Who We Are ⌵ */}
              <div 
                ref={whoWeAreDropdownRef}
                className="relative flex flex-col"
                onMouseEnter={() => setWhoWeAreDropdownOpen(true)}
                onMouseLeave={() => setWhoWeAreDropdownOpen(false)}
              >
                <span className="text-[10px] font-medium text-emerald-200/80 leading-none mb-1">
                  {t.nav.aboutUs}
                </span>
                <button
                  type="button"
                  onClick={() => handleNavClick('who-we-are')}
                  className={`flex items-center gap-1 text-[13px] 2xl:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    activeNavTab === 'who-we-are' ? 'text-amber-300' : 'text-white hover:text-amber-300'
                  }`}
                  aria-expanded={whoWeAreDropdownOpen}
                >
                  <span>{t.nav.whoWeAre}</span>
                  <ChevronDown className={`w-3.5 h-3.5 opacity-80 transition-transform duration-150 ${whoWeAreDropdownOpen ? 'rotate-180 text-amber-300' : ''}`} />
                </button>

                {/* Who We Are Dropdown Menu */}
                {whoWeAreDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-[#052b1d]/98 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-700/60 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3.5 py-1 text-[10px] font-bold text-amber-300/90 uppercase tracking-wider">
                      {t.nav.whoWeAre}
                    </div>
                    {whoWeAreSubItems.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => handleSubItemClick(sub.id)}
                        className={`w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          whoWeAreSubTab === sub.id && activeNavTab === 'who-we-are'
                            ? 'bg-emerald-900/80 text-amber-300 font-bold'
                            : 'text-stone-100 hover:bg-emerald-900/50 hover:text-white'
                        }`}
                      >
                        <span>{sub.label}</span>
                        {whoWeAreSubTab === sub.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Item: Programs / What We Do ⌵ (Rich Programs Mega-Menu for Education, Health, Livelihood, Disaster Response) */}
              <div 
                ref={whatWeDoDropdownRef}
                className="relative flex flex-col"
                onMouseEnter={() => setWhatWeDoDropdownOpen(true)}
                onMouseLeave={() => setWhatWeDoDropdownOpen(false)}
              >
                <span className="text-[10px] font-medium text-emerald-200/80 leading-none mb-1">
                  {t.nav.programs}
                </span>
                <button
                  type="button"
                  onClick={() => handleNavClick('what-we-do')}
                  className={`flex items-center gap-1 text-[13px] 2xl:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    activeNavTab === 'what-we-do' ? 'text-amber-300' : 'text-white hover:text-amber-300'
                  }`}
                  aria-expanded={whatWeDoDropdownOpen}
                >
                  <span>{t.nav.whatWeDo}</span>
                  <ChevronDown className={`w-3.5 h-3.5 opacity-80 transition-transform duration-150 ${whatWeDoDropdownOpen ? 'rotate-180 text-amber-300' : ''}`} />
                </button>

                {/* Rich Programs Mega-Menu Dropdown */}
                {whatWeDoDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[440px] bg-[#052b1d]/98 backdrop-blur-md rounded-2xl shadow-2xl border border-emerald-700/70 p-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-emerald-800/80">
                      <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                        Core Program Pillars &amp; Interventions
                      </div>
                      <span className="text-[10px] text-emerald-300">Click to explore dossier</span>
                    </div>

                    {/* 4 Rich Program Cards Grid: Education, Health, Livelihood, Disaster Response */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {programPillars.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => handleOpenProgramDossier(p.id)}
                          className="group/card p-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/60 hover:border-amber-400/60 transition-all cursor-pointer flex flex-col justify-between"
                        >
                          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden mb-2 bg-stone-900">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105 opacity-90"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-1.5 left-1.5 p-1 rounded-full bg-[#073826]/90 backdrop-blur-xs">
                              {p.icon}
                            </div>
                            <div className="absolute bottom-1 right-1 bg-stone-950/80 text-emerald-300 text-[9px] font-mono px-1.5 py-0.5 rounded">
                              {p.metric}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-bold text-white group-hover/card:text-amber-300 transition-colors">
                              {p.title}
                            </div>
                            <div className="text-[10px] text-stone-300 leading-tight mt-0.5 line-clamp-1">
                              {p.subtitle}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer Links for WASH and TVET */}
                    <div className="pt-3 mt-3 border-t border-emerald-800/80 flex items-center justify-between text-[11px]">
                      <button
                        type="button"
                        onClick={() => handleOpenProgramDossier('wash')}
                        className="text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
                      >
                        • Clean Water &amp; WASH
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenProgramDossier('economic-growth')}
                        className="text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
                      >
                        • Green Energy TVET
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNavClick('what-we-do')}
                        className="font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>All 6 Areas</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Vertical Separator matching menu_237eb8fd.jpg */}
              <div className="h-5 w-px bg-emerald-700/70 self-center mb-0.5" />

              {/* Where We Work */}
              <button
                type="button"
                onClick={() => handleNavClick('where-we-work')}
                className={`text-[13px] 2xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer pb-0.5 ${
                  activeNavTab === 'where-we-work' ? 'text-amber-300 font-bold' : 'text-white/95 hover:text-amber-300'
                }`}
              >
                {t.nav.whereWeWork}
              </button>

              {/* AI for Good */}
              <button
                type="button"
                onClick={() => handleNavClick('ai-for-good')}
                className={`text-[13px] 2xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer pb-0.5 ${
                  activeNavTab === 'ai-for-good' ? 'text-amber-300 font-bold' : 'text-white/95 hover:text-amber-300'
                }`}
              >
                {t.nav.aiForGood}
              </button>

              {/* Our Impact (Bold prominent text matching screenshot) */}
              <button
                type="button"
                onClick={() => handleNavClick('our-impact')}
                className={`text-[13px] 2xl:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer pb-0.5 ${
                  activeNavTab === 'our-impact' ? 'text-amber-300' : 'text-white hover:text-amber-300'
                }`}
              >
                {t.nav.ourImpact}
              </button>

              {/* Stories */}
              <button
                type="button"
                onClick={() => handleNavClick('stories')}
                className={`text-[13px] 2xl:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer pb-0.5 ${
                  activeNavTab === 'stories' ? 'text-amber-300 font-bold' : 'text-white/95 hover:text-amber-300'
                }`}
              >
                {t.nav.stories}
              </button>

              {/* Blog */}
              <button
                type="button"
                onClick={() => handleNavClick('blogs', 'blogs')}
                className="text-[13px] 2xl:text-sm font-bold text-white hover:text-amber-300 transition-colors whitespace-nowrap cursor-pointer pb-0.5"
                style={{ color: '#ffffff' }}
              >
                {t.nav.blog}
              </button>

            </div>
          </div>

          {/* Vertical Separator between Explore Our Work and Connect with Us */}
          <div className="w-px bg-emerald-700/60 my-0.5 self-stretch shrink-0" />

          {/* Cluster 2: Connect with Us */}
          <div className="flex flex-col justify-between">
            {/* Top Category Title + Underline */}
            <div>
              <span className="text-[13px] font-bold text-white tracking-tight font-sans">
                {t.nav.connectWithUs}
              </span>
              <div className="h-px bg-emerald-700/50 w-full mt-1 mb-1.5" />
            </div>

            {/* Bottom Row: Work with Us | Language | Donate */}
            <div className="flex items-end gap-3.5 2xl:gap-4 pb-0.5">
              
              {/* Item: Get Involved / Work with Us */}
              <div className="flex flex-col">
                <span className="text-[10px] font-medium text-emerald-200/80 leading-none mb-1">
                  {t.nav.getInvolved}
                </span>
                <button
                  type="button"
                  onClick={() => handleNavClick('work-with-us')}
                  className={`text-[13px] 2xl:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    activeNavTab === 'work-with-us' ? 'text-amber-300' : 'text-white hover:text-amber-300'
                  }`}
                >
                  {t.nav.workWithUs}
                </button>
              </div>

              {/* Thin Vertical Separator */}
              <div className="h-5 w-px bg-emerald-700/70 self-center mb-0.5" />

              {/* Item: Language / Single Clickable Dropdown Menu */}
              <div className="relative flex flex-col" ref={langDropdownRef}>
                <span className="text-[10px] font-medium text-emerald-200/80 leading-none mb-1">
                  {t.nav.language}
                </span>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 text-[12px] 2xl:text-xs font-semibold text-white hover:text-amber-300 cursor-pointer transition-colors whitespace-nowrap"
                  aria-expanded={langDropdownOpen}
                  aria-haspopup="listbox"
                  aria-label="Select Language"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{currentOption.code} | {currentOption.nativeName}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-stone-300 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180 text-amber-300' : ''}`} />
                </button>

                {/* Dropdown Menu Popup */}
                {langDropdownOpen && (
                  <div 
                    className="absolute right-0 top-full mt-2 w-60 bg-[#04261a]/98 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-600/60 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    role="listbox"
                  >
                    <div className="px-3.5 py-1.5 text-[10px] font-bold text-amber-300/90 uppercase tracking-wider border-b border-emerald-800/80 mb-1">
                      Choose Language / ቋንቋ ይምረጡ
                    </div>

                    {languageOptions.map((opt) => {
                      const isSelected = currentLang === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            onToggleLang(opt.id);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                            isSelected 
                              ? 'bg-emerald-800/90 text-amber-300 font-bold' 
                              : 'text-stone-100 hover:bg-emerald-900/60 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`w-8 h-5.5 rounded flex items-center justify-center text-[10px] font-bold shrink-0 ${
                              isSelected ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-emerald-950/80 text-emerald-200 border border-emerald-700/60'
                            }`}>
                              {opt.code}
                            </span>
                            <div className="flex flex-col">
                              <span className="leading-tight font-medium">{opt.nativeName}</span>
                              <span className="text-[10px] text-stone-300/80 leading-tight font-normal">{opt.label}</span>
                            </div>
                          </div>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Item: Brand Standards & Test Route Buttons */}
              {onOpenBrandGuide && (
                <button
                  type="button"
                  onClick={onOpenBrandGuide}
                  className="px-2.5 py-1.5 bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 hover:text-white border border-emerald-600/50 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0"
                  title="View official ADRA Graphic Standards Manual & Branding Guide"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden 2xl:inline">Brand Standards</span>
                  <span className="2xl:hidden">Brand</span>
                </button>
              )}

              {onOpenBrandTest && (
                <button
                  type="button"
                  onClick={onOpenBrandTest}
                  className="px-2.5 py-1.5 bg-stone-900/70 hover:bg-stone-900 text-amber-300 hover:text-amber-200 border border-amber-400/40 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0"
                  title="Dev Route: Brand Test and Compliance Inspector"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden 2xl:inline">Brand Test View</span>
                  <span className="2xl:hidden">Test</span>
                </button>
              )}

              {/* Item: Donate Button matching Screenshot rounded pill styling */}
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="px-3.5 py-1.5 2xl:px-4 2xl:py-2 bg-[#dce5df] hover:bg-white active:bg-[#c8d4cc] text-[#004D3A] font-bold text-xs 2xl:text-sm rounded-full shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <Heart className="w-3.5 h-3.5 text-[#007B5F]" />
                <span>{t.nav.donate}</span>
              </button>

            </div>
          </div>

        </div>

        {/* Mobile / Tablet Controls (< xl) */}
        <div className="flex xl:hidden items-center gap-2 sm:gap-3">
          
          {/* Quick Mobile Donate Button */}
          <button
            type="button"
            onClick={() => onOpenDonate()}
            className="px-3 py-1.5 bg-[#dce5df] hover:bg-white text-[#052c1e] font-bold text-xs rounded-full shadow-xs flex items-center gap-1 cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 text-[#052c1e]" />
            <span>{t.nav.donate}</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-100 hover:text-amber-300 rounded-lg hover:bg-emerald-900/40 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu (< xl) structured per menu_237eb8fd.jpg */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#083523] border-t border-emerald-800/80 px-6 py-5 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
          
          {/* Section 1: Explore Our Work */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider border-b border-emerald-800/80 pb-1">
              {t.nav.exploreOurWork}
            </div>

            <div className="space-y-2 pl-1">
              {/* Who We Are collapsible */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
                  className="w-full flex items-center justify-between py-1.5 text-sm font-bold text-white hover:text-amber-300"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-emerald-200/80 font-normal">{t.nav.aboutUs}</span>
                    <span>{t.nav.whoWeAre}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileWhoWeAreOpen ? 'rotate-180 text-amber-300' : ''}`} />
                </button>
                {mobileWhoWeAreOpen && (
                  <div className="pl-3 py-1 space-y-1.5 border-l border-emerald-700/60 my-1">
                    {whoWeAreSubItems.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => handleSubItemClick(sub.id)}
                        className="w-full text-left py-1 text-xs text-stone-200 hover:text-amber-300"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* What We Do (Programs) with 4 rich program pillars */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
                  className="w-full flex items-center justify-between py-1.5 text-sm font-bold text-white hover:text-amber-300"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-emerald-200/80 font-normal">{t.nav.programs}</span>
                    <span>{t.nav.whatWeDo}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileWhatWeDoOpen ? 'rotate-180 text-amber-300' : ''}`} />
                </button>
                {mobileWhatWeDoOpen && (
                  <div className="pl-3 py-2 space-y-2 border-l border-emerald-700/60 my-1">
                    {programPillars.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleOpenProgramDossier(p.id)}
                        className="w-full text-left p-2 rounded-lg bg-emerald-900/40 hover:bg-emerald-900/80 flex items-center gap-2.5"
                      >
                        <div className="w-9 h-9 rounded overflow-hidden shrink-0">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-white">{p.title}</span>
                          <span className="text-[10px] text-amber-300">{p.metric}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links matching screenshot */}
              <div className="space-y-1 pt-2 border-t border-emerald-800/60">
                <button
                  type="button"
                  onClick={() => handleNavClick('where-we-work')}
                  className="w-full text-left py-1.5 text-xs font-semibold text-stone-100 hover:text-amber-300"
                >
                  {t.nav.whereWeWork}
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('ai-for-good')}
                  className="w-full text-left py-1.5 text-xs font-semibold text-stone-100 hover:text-amber-300"
                >
                  {t.nav.aiForGood}
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('our-impact')}
                  className="w-full text-left py-1.5 text-xs font-bold text-amber-300 hover:underline"
                >
                  {t.nav.ourImpact}
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('stories')}
                  className="w-full text-left py-1.5 text-xs font-semibold text-stone-100 hover:text-amber-300"
                >
                  {t.nav.stories}
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('blogs', 'blogs')}
                  className="w-full text-left py-1.5 text-xs font-semibold text-stone-100 hover:text-amber-300"
                >
                  {t.nav.blog}
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Connect with Us */}
          <div className="space-y-3 pt-3 border-t border-emerald-800/80">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider border-b border-emerald-800/80 pb-1">
              {t.nav.connectWithUs}
            </div>

            <div className="space-y-3 pl-1">
              {/* Work with Us */}
              <button
                type="button"
                onClick={() => handleNavClick('work-with-us')}
                className="w-full text-left py-1 text-sm font-bold text-white hover:text-amber-300 flex flex-col"
              >
                <span className="text-[10px] text-emerald-200/80 font-normal">{t.nav.getInvolved}</span>
                <span>{t.nav.workWithUs}</span>
              </button>

              {/* Language Selector */}
              <div className="pt-2 border-t border-emerald-800/60 flex items-center justify-between" ref={mobileLangDropdownRef}>
                <div className="flex flex-col">
                  <span className="text-[10px] text-emerald-200/80">{t.nav.language}</span>
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentOption.code} | {currentOption.nativeName}</span>
                  </span>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#032015] border border-emerald-600/60 text-stone-100 text-xs font-semibold cursor-pointer"
                  >
                    <span>Change</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileLangDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileLangDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-[#04261a] rounded-xl shadow-2xl border border-emerald-600 py-1.5 z-50">
                      {languageOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            onToggleLang(opt.id);
                            setMobileLangDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between ${
                            currentLang === opt.id ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-stone-200'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="font-bold text-[11px] text-amber-400">{opt.code}</span>
                            <span>{opt.nativeName}</span>
                          </span>
                          {currentLang === opt.id && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Brand Standards & Brand Test Actions in Mobile Menu */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                {onOpenBrandGuide && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBrandGuide();
                    }}
                    className="py-2 px-2.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/60 rounded-xl text-xs font-bold text-emerald-200 flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Brand Guide</span>
                  </button>
                )}
                {onOpenBrandTest && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBrandTest();
                    }}
                    className="py-2 px-2.5 bg-stone-900/90 hover:bg-stone-800 border border-amber-400/50 rounded-xl text-xs font-bold text-amber-300 flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Brand Test</span>
                  </button>
                )}
              </div>

              {/* Donate Button */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                  className="w-full py-2.5 bg-[#dce5df] hover:bg-white text-[#052c1e] font-bold text-sm rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-[#052c1e]" />
                  <span>{t.nav.donate}</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </header>
  );
};
