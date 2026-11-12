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
  BarChart3,
  Quote,
  BookOpen,
  Sparkles,
  Briefcase,
  FileText,
  ShieldCheck,
  MapPin,
  Compass
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { UI_COPY } from '../data/uiCopy';
import { AdraLogo } from './AdraLogo';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenDonate: (presetSector?: string, presetAmount?: number) => void;
  onOpenChatbot: () => void;
  activeNavTab: string;
  setActiveNavTab: (tab: string) => void;
  whoWeAreSubTab: string;
  setWhoWeAreSubTab: (subTab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenDonate,
  activeNavTab,
  setActiveNavTab,
  whoWeAreSubTab,
  setWhoWeAreSubTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoWeAreDropdownOpen, setWhoWeAreDropdownOpen] = useState(false);
  const [whatWeDoDropdownOpen, setWhatWeDoDropdownOpen] = useState(false);
  const [whereWeWorkDropdownOpen, setWhereWeWorkDropdownOpen] = useState(false);
  const [ourImpactDropdownOpen, setOurImpactDropdownOpen] = useState(false);
  const [workWithUsDropdownOpen, setWorkWithUsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [mobileWhereWeWorkOpen, setMobileWhereWeWorkOpen] = useState(false);
  const [mobileOurImpactOpen, setMobileOurImpactOpen] = useState(false);
  const [mobileWorkWithUsOpen, setMobileWorkWithUsOpen] = useState(false);

  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLangDropdownRef = useRef<HTMLDivElement>(null);
  const whoWeAreDropdownRef = useRef<HTMLDivElement>(null);
  const whatWeDoDropdownRef = useRef<HTMLDivElement>(null);
  const whereWeWorkDropdownRef = useRef<HTMLDivElement>(null);
  const ourImpactDropdownRef = useRef<HTMLDivElement>(null);
  const workWithUsDropdownRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const ui = UI_COPY[currentLang] || UI_COPY.en;

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
      if (whereWeWorkDropdownRef.current && !whereWeWorkDropdownRef.current.contains(target)) {
        setWhereWeWorkDropdownOpen(false);
      }
      if (ourImpactDropdownRef.current && !ourImpactDropdownRef.current.contains(target)) {
        setOurImpactDropdownOpen(false);
      }
      if (workWithUsDropdownRef.current && !workWithUsDropdownRef.current.contains(target)) {
        setWorkWithUsDropdownOpen(false);
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

  const whereWeWorkSubItems: Record<Language, { id: string; targetId: string; label: string; desc: string; icon: React.ReactNode }[]> = {
    en: [
      { id: 'gis-map', targetId: 'where-we-work', label: 'GIS Map View', desc: 'Regional presence & hubs', icon: <Compass className="w-3.5 h-3.5" /> },
      { id: 'regions', targetId: 'where-we-work', label: '7 Regional Hubs', desc: 'Somali, Oromia, Amhara, Tigray+', icon: <MapPin className="w-3.5 h-3.5" /> },
    ],
    am: [
      { id: 'gis-map', targetId: 'where-we-work', label: 'የGIS ካርታ', desc: 'የክልል ማዕከላትና ተደራሽነት', icon: <Compass className="w-3.5 h-3.5" /> },
      { id: 'regions', targetId: 'where-we-work', label: '7 የክልል ማዕከላት', desc: 'ሶማሌ፣ ኦሮሚያ፣ አማራ፣ ትግራይ+', icon: <MapPin className="w-3.5 h-3.5" /> },
    ],
    om: [
      { id: 'gis-map', targetId: 'where-we-work', label: 'Kaartaa GIS', desc: 'Damee naannoo fi hojii', icon: <Compass className="w-3.5 h-3.5" /> },
      { id: 'regions', targetId: 'where-we-work', label: 'Damee Naannoo 7', desc: 'Somaalee, Oromiyaa, Amaaraa+', icon: <MapPin className="w-3.5 h-3.5" /> },
    ],
    ti: [
      { id: 'gis-map', targetId: 'where-we-work', label: 'ካርታ GIS', desc: 'ማእከላት ክልልን ተበጻሕነትን', icon: <Compass className="w-3.5 h-3.5" /> },
      { id: 'regions', targetId: 'where-we-work', label: '7 ማእከላት ክልል', desc: 'ሶማሌ፣ ኦሮሚያ፣ ኣምሓራ፣ ትግራይ+', icon: <MapPin className="w-3.5 h-3.5" /> },
    ],
  };

  const ourImpactSubItems: Record<Language, { id: string; targetId: string; label: string; desc: string; icon: React.ReactNode }[]> = {
    en: [
      { id: 'impact-overview', targetId: 'our-impact', label: 'Impact Overview', desc: 'Verified results & calculator', icon: <BarChart3 className="w-3.5 h-3.5" /> },
      { id: 'stories', targetId: 'stories', label: t.nav.stories, desc: 'Eyewitness testimonies from field', icon: <Quote className="w-3.5 h-3.5" /> },
      { id: 'blogs', targetId: 'blogs', label: t.nav.blog, desc: 'Articles & progress dispatches', icon: <BookOpen className="w-3.5 h-3.5" /> },
      { id: 'ai-for-good', targetId: 'ai-for-good', label: t.nav.aiForGood, desc: 'Ethical human-first technology', icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
    am: [
      { id: 'impact-overview', targetId: 'our-impact', label: 'የስራ ውጤት', desc: 'የተረጋገጡ ውጤቶችና መተግበሪያ', icon: <BarChart3 className="w-3.5 h-3.5" /> },
      { id: 'stories', targetId: 'stories', label: t.nav.stories, desc: 'የማህበረሰብ እውነተኛ ምስክርነት', icon: <Quote className="w-3.5 h-3.5" /> },
      { id: 'blogs', targetId: 'blogs', label: t.nav.blog, desc: 'የመስክ ጦማርና ዜናዎች', icon: <BookOpen className="w-3.5 h-3.5" /> },
      { id: 'ai-for-good', targetId: 'ai-for-good', label: t.nav.aiForGood, desc: 'ሰብአዊና ስነ-ምግባራዊ ቴክኖሎጂ', icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
    om: [
      { id: 'impact-overview', targetId: 'our-impact', label: 'Dhiibbaa Hojii', desc: 'Buʼaa mirkanaaʼe fi shallaggii', icon: <BarChart3 className="w-3.5 h-3.5" /> },
      { id: 'stories', targetId: 'stories', label: t.nav.stories, desc: 'Ragaa qabatamaa hawaasaa', icon: <Quote className="w-3.5 h-3.5" /> },
      { id: 'blogs', targetId: 'blogs', label: t.nav.blog, desc: 'Barreeffamoota yeroo', icon: <BookOpen className="w-3.5 h-3.5" /> },
      { id: 'ai-for-good', targetId: 'ai-for-good', label: t.nav.aiForGood, desc: 'Teeknooloojii naamusaa', icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
    ti: [
      { id: 'impact-overview', targetId: 'our-impact', label: 'ጽልዋና ሓፈሻዊ', desc: 'ዝተረጋገጹ ውጽኢታትን ሒሳብን', icon: <BarChart3 className="w-3.5 h-3.5" /> },
      { id: 'stories', targetId: 'stories', label: t.nav.stories, desc: 'ናይ ማሕበረሰብ ምስክርነት', icon: <Quote className="w-3.5 h-3.5" /> },
      { id: 'blogs', targetId: 'blogs', label: t.nav.blog, desc: 'እዋናዊ ጽሑፋትን ጸብጻባትን', icon: <BookOpen className="w-3.5 h-3.5" /> },
      { id: 'ai-for-good', targetId: 'ai-for-good', label: t.nav.aiForGood, desc: 'ስነ-ምግባራዊ ቴክኖሎጂ', icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
  };

  const workWithUsSubItems: Record<Language, { id: string; targetId: string; label: string; desc: string; icon: React.ReactNode }[]> = {
    en: [
      { id: 'careers', targetId: 'work-with-us', label: 'Careers & Jobs', desc: 'National & field opportunities', icon: <Briefcase className="w-3.5 h-3.5" /> },
      { id: 'tenders', targetId: 'work-with-us', label: 'Open Tenders', desc: 'Procurement & bid opportunities', icon: <FileText className="w-3.5 h-3.5" /> },
      { id: 'reports', targetId: 'work-with-us', label: 'Annual Reports', desc: 'Audited statutory disclosures', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
      { id: 'contact', targetId: 'contact', label: 'Contact & Hubs', desc: 'HQ in Addis Ababa & 7 hubs', icon: <MapPin className="w-3.5 h-3.5" /> },
    ],
    am: [
      { id: 'careers', targetId: 'work-with-us', label: 'የስራ እድሎች', desc: 'ክፍት የስራ ማስታወቂያዎች', icon: <Briefcase className="w-3.5 h-3.5" /> },
      { id: 'tenders', targetId: 'work-with-us', label: 'ክፍት ጨረታዎች', desc: 'የግዥና የጨረታ ጥሪዎች', icon: <FileText className="w-3.5 h-3.5" /> },
      { id: 'reports', targetId: 'work-with-us', label: 'ዓመታዊ ሪፖርቶች', desc: 'ኦዲት የተደረጉ ሪፖርቶች', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
      { id: 'contact', targetId: 'contact', label: 'አድራሻና ቢሮዎች', desc: 'ዋና መ/ቤትና 7 የክልል ቢሮዎች', icon: <MapPin className="w-3.5 h-3.5" /> },
    ],
    om: [
      { id: 'careers', targetId: 'work-with-us', label: 'Carraa Hojii', desc: 'Hojii biyyoolessaa fi dirree', icon: <Briefcase className="w-3.5 h-3.5" /> },
      { id: 'tenders', targetId: 'work-with-us', label: 'Caalbaasii', desc: 'Bittaa fi caalbaasii banaa', icon: <FileText className="w-3.5 h-3.5" /> },
      { id: 'reports', targetId: 'work-with-us', label: 'Gabaasa Waggaa', desc: 'Gabaasa odiitii seeraa', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
      { id: 'contact', targetId: 'contact', label: 'Qunnamaa & Hub', desc: 'Finfinnee fi damee 7', icon: <MapPin className="w-3.5 h-3.5" /> },
    ],
    ti: [
      { id: 'careers', targetId: 'work-with-us', label: 'ዕድላት ስራሕ', desc: 'ሃገራውን መስካውን ዕድላት', icon: <Briefcase className="w-3.5 h-3.5" /> },
      { id: 'tenders', targetId: 'work-with-us', label: 'ክፍቲ ጨረታታት', desc: 'ናይ ዕዳጋን ጨረታን ጻውዒት', icon: <FileText className="w-3.5 h-3.5" /> },
      { id: 'reports', targetId: 'work-with-us', label: 'ዓመታዊ ጸብጻባት', desc: 'ኦዲት ዝተገብረ ፋይናንስ', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
      { id: 'contact', targetId: 'contact', label: 'ርክብን ማእከላትን', desc: 'ኣዲስ ኣበባን 7 ጨንፈራትን', icon: <MapPin className="w-3.5 h-3.5" /> },
    ],
  };

  // Rich Program pillars with image thumbnails and metrics for the Programs mega-menu
  const programPillars = [
    {
      id: 'education',
      title: t.nav.education || 'Education',
      subtitle: ui.header.pillars.educationSub,
      metric: ui.header.pillars.educationMetric,
      image: '/assets/images/adra_education_girls_1792612496863.jpg',
      icon: <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
    },
    {
      id: 'health',
      title: t.nav.health || 'Health',
      subtitle: ui.header.pillars.healthSub,
      metric: ui.header.pillars.healthMetric,
      image: '/assets/images/adra_emergency_health_1792612497133.jpg',
      icon: <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
    },
    {
      id: 'livelihood',
      title: t.nav.livelihoods || 'Livelihood',
      subtitle: ui.header.pillars.livelihoodSub,
      metric: ui.header.pillars.livelihoodMetric,
      image: '/assets/images/adra_agriculture_food_1792612497905.jpg',
      icon: <Wheat className="w-3.5 h-3.5 text-amber-400" />
    },
    {
      id: 'disaster-response',
      title: t.nav.disasterResponse || 'Disaster Response',
      subtitle: ui.header.pillars.disasterSub,
      metric: ui.header.pillars.disasterMetric,
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
    setWhereWeWorkDropdownOpen(false);
    setOurImpactDropdownOpen(false);
    setWorkWithUsDropdownOpen(false);
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
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200/90 shadow-xs text-stone-900 transition-colors duration-200">
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3 lg:gap-5">
        
        {/* Left Brand Lockup: Official attached ADRA Logo + Separated Country Office / Ethiopia */}
        <div 
          onClick={() => {
            setActiveNavTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0 pr-3 sm:pr-4"
        >
          {/* Official attached ADRA Logo: Direct authentic master asset */}
          <img
            src="/assets/aistudio/17943458034881586714568978738653_a6364af5.png"
            alt="ADRA - Adventist Development and Relief Agency"
            className="h-11 sm:h-12 w-auto object-contain select-none transition-transform group-hover:scale-102"
          />

          {/* Typography Lockup: Country Office / Ethiopia distinctly separated by divider */}
          <div className="flex flex-col border-l border-stone-300 pl-2.5 sm:pl-3 py-0.5">
            <span className="text-[10px] sm:text-[11px] font-bold text-stone-500 tracking-[0.16em] uppercase leading-none font-sans">
              {t.common.countryOffice}
            </span>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#007B5F] leading-tight font-sans mt-0.5">
              {ui.common.ethiopia}
            </span>
          </div>
        </div>

        {/* Center / Right Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
          
          {/* Horizontal Row of Navigation Links: Who We Are | What We Do | Where We Work | Our Impact | Stories | AI for Good | Work with Us */}
          <nav className="flex items-center gap-1 2xl:gap-2">
            
            {/* Item 1: Who We Are ⌵ */}
            <div 
              ref={whoWeAreDropdownRef}
              className="relative"
              onMouseEnter={() => setWhoWeAreDropdownOpen(true)}
              onMouseLeave={() => setWhoWeAreDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => handleNavClick('who-we-are')}
                className={`flex items-center gap-1 text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer px-2.5 py-1.5 rounded-lg ${
                  activeNavTab === 'who-we-are' ? 'text-[#007B5F] font-bold bg-emerald-50' : 'text-stone-700 hover:text-[#007B5F] hover:bg-stone-50'
                }`}
                aria-expanded={whoWeAreDropdownOpen}
              >
                <span>{t.nav.whoWeAre}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${whoWeAreDropdownOpen ? 'rotate-180 text-[#007B5F]' : 'text-stone-400'}`} />
              </button>

              {/* Who We Are Dropdown Menu */}
              {whoWeAreDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3.5 py-1 text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                    {t.nav.whoWeAre}
                  </div>
                  {whoWeAreSubItems.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => handleSubItemClick(sub.id)}
                      className={`w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                        whoWeAreSubTab === sub.id && activeNavTab === 'who-we-are'
                          ? 'bg-emerald-50 text-[#007B5F] font-bold'
                          : 'text-stone-700 hover:bg-stone-50 hover:text-[#007B5F]'
                      }`}
                    >
                      <span>{sub.label}</span>
                      {whoWeAreSubTab === sub.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007B5F]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Item 2: What We Do ⌵ */}
            <div 
              ref={whatWeDoDropdownRef}
              className="relative"
              onMouseEnter={() => setWhatWeDoDropdownOpen(true)}
              onMouseLeave={() => setWhatWeDoDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => handleNavClick('what-we-do')}
                className={`flex items-center gap-1 text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer px-2.5 py-1.5 rounded-lg ${
                  activeNavTab === 'what-we-do' ? 'text-[#007B5F] font-bold bg-emerald-50' : 'text-stone-700 hover:text-[#007B5F] hover:bg-stone-50'
                }`}
                aria-expanded={whatWeDoDropdownOpen}
              >
                <span>{t.nav.whatWeDo}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${whatWeDoDropdownOpen ? 'rotate-180 text-[#007B5F]' : 'text-stone-400'}`} />
              </button>

              {/* Programs Dropdown */}
              {whatWeDoDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-[460px] bg-white rounded-2xl shadow-xl border border-stone-200 p-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100">
                    <div className="text-[11px] font-bold text-[#007B5F] uppercase tracking-wider">
                      {ui.header.megaTitle}
                    </div>
                    <span className="text-[10px] text-stone-400">{ui.header.megaHint}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {programPillars.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleOpenProgramDossier(p.id)}
                        className="group/card p-2 rounded-xl bg-stone-50 hover:bg-emerald-50/70 border border-stone-100 hover:border-emerald-200 transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden mb-2 bg-stone-100">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-1.5 left-1.5 p-1 rounded-full bg-white/90 shadow-2xs">
                            {p.icon}
                          </div>
                          <div className="absolute bottom-1 right-1 bg-stone-900/80 text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                            {p.metric}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-bold text-stone-900 group-hover/card:text-[#007B5F] transition-colors">
                            {p.title}
                          </div>
                          <div className="text-[10px] text-stone-500 leading-tight mt-0.5 line-clamp-1">
                            {p.subtitle}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
                    <button
                      type="button"
                      onClick={() => handleNavClick('what-we-do')}
                      className="font-bold text-[#007B5F] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{ui.header.allSevenAreas}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Item 3: Where We Work */}
            <button
              type="button"
              onClick={() => handleNavClick('where-we-work')}
              className={`text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer px-2.5 py-1.5 rounded-lg ${
                activeNavTab === 'where-we-work' ? 'text-[#007B5F] font-bold bg-emerald-50' : 'text-stone-700 hover:text-[#007B5F] hover:bg-stone-50'
              }`}
            >
              {t.nav.whereWeWork}
            </button>

            {/* Item 4: Our Impact */}
            <button
              type="button"
              onClick={() => handleNavClick('our-impact')}
              className={`text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer px-2.5 py-1.5 rounded-lg ${
                activeNavTab === 'our-impact' ? 'text-[#007B5F] font-bold bg-emerald-50' : 'text-stone-700 hover:text-[#007B5F] hover:bg-stone-50'
              }`}
            >
              {t.nav.ourImpact}
            </button>

            {/* Item 5: Stories */}
            <button
              type="button"
              onClick={() => handleNavClick('stories')}
              className={`text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer px-2.5 py-1.5 rounded-lg ${
                activeNavTab === 'stories' ? 'text-[#007B5F] font-bold bg-emerald-50' : 'text-stone-700 hover:text-[#007B5F] hover:bg-stone-50'
              }`}
            >
              {t.nav.stories}
            </button>

            {/* Item 6: AI for Good */}
            <button
              type="button"
              onClick={() => handleNavClick('ai-for-good')}
              className={`text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer px-2.5 py-1.5 rounded-lg ${
                activeNavTab === 'ai-for-good' ? 'text-[#007B5F] font-bold bg-emerald-50' : 'text-stone-700 hover:text-[#007B5F] hover:bg-stone-50'
              }`}
            >
              {t.nav.aiForGood}
            </button>

            {/* Item 7: Work with Us / Get Involved */}
            <button
              type="button"
              onClick={() => handleNavClick('work-with-us')}
              className={`text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer px-2.5 py-1.5 rounded-lg ${
                activeNavTab === 'work-with-us' ? 'text-[#007B5F] font-bold bg-emerald-50' : 'text-stone-700 hover:text-[#007B5F] hover:bg-stone-50'
              }`}
            >
              {t.nav.workWithUs}
            </button>

            {/* Item 8: Contact */}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer px-2.5 py-1.5 rounded-lg ${
                activeNavTab === 'contact' ? 'text-[#007B5F] font-bold bg-emerald-50' : 'text-stone-700 hover:text-[#007B5F] hover:bg-stone-50'
              }`}
            >
              {t.nav.contact}
            </button>

          </nav>

          {/* Right Action Utilities: Language Switcher Pill + Donate Button + Brand Guide */}
          <div className="flex items-center gap-2.5 2xl:gap-3 shrink-0">
            
            {/* Language Switcher Pill matching media_1792614102673_ff970b3d.png */}
            <div className="relative flex items-center bg-stone-100 p-0.5 rounded-full border border-stone-200 text-xs" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  currentLang === 'en' ? 'bg-[#007B5F] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('am')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  currentLang === 'am' ? 'bg-[#007B5F] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                አማ
              </button>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`px-1.5 py-1 text-xs text-stone-600 hover:text-stone-900 flex items-center gap-0.5 cursor-pointer ${
                  currentLang === 'om' || currentLang === 'ti' ? 'bg-[#007B5F] text-white font-bold rounded-full px-2' : ''
                }`}
                title="Afaan Oromoo, Tigrinya"
              >
                {currentLang === 'om' ? 'ORO' : currentLang === 'ti' ? 'ትግ' : <Globe className="w-3.5 h-3.5 text-stone-500" />}
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              {/* Language Dropdown Menu */}
              {langDropdownOpen && (
                <div 
                  className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  role="listbox"
                >
                  <div className="px-3.5 py-1 text-[10px] font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100 mb-1">
                    {ui.header.chooseLangTitle}
                  </div>
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        onToggleLang(opt.id);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between cursor-pointer ${
                        currentLang === opt.id ? 'bg-emerald-50 text-[#007B5F] font-bold' : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <span>{opt.nativeName} ({opt.code})</span>
                      {currentLang === opt.id && <Check className="w-3.5 h-3.5 text-[#007B5F]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Brand & Template Standards Toggle */}
            <a
              href="#brand-test"
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-stone-600 hover:text-[#007B5F] hover:bg-emerald-50 transition-colors border border-stone-200/80"
              title="Official ADRA Graphic Standards & Cloud Template"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#007B5F]" />
              <span>Brand Standards</span>
            </a>

            {/* Donate Button matching Screenshot rounded amber pill */}
            <button
              type="button"
              onClick={() => onOpenDonate()}
              className="px-5 py-2 bg-[#F59E0B] hover:bg-[#D97706] active:bg-[#B45309] text-white font-bold text-xs 2xl:text-sm rounded-full shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <span>{t.nav.donate}</span>
            </button>

          </div>

        </div>

        {/* Mobile / Tablet Controls (< xl) */}
        <div className="flex xl:hidden items-center gap-2 sm:gap-3">
          
          {/* Quick Mobile Donate Button */}
          <button
            type="button"
            onClick={() => onOpenDonate()}
            className="px-3.5 py-1.5 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-xs rounded-full shadow-xs flex items-center gap-1 cursor-pointer"
          >
            <span>{t.nav.donate}</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-[#007B5F] rounded-lg hover:bg-stone-100 cursor-pointer"
            aria-label={ui.header.toggleMenuAria}
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
                    <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px]">
                      <button
                        type="button"
                        onClick={() => handleOpenProgramDossier('wash')}
                        className="text-stone-200 hover:text-amber-300"
                      >
                        {ui.header.cleanWaterLink}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenProgramDossier('economic-growth')}
                        className="text-stone-200 hover:text-amber-300"
                      >
                        {ui.header.greenEnergyLink}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenProgramDossier('peace-building')}
                        className="text-stone-200 hover:text-amber-300"
                      >
                        {ui.header.peaceBuildingLink}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNavClick('what-we-do')}
                        className="font-bold text-amber-300 hover:underline"
                      >
                        {ui.header.allSevenAreas}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Item 3: Where We Work (Accordion) */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileWhereWeWorkOpen(!mobileWhereWeWorkOpen)}
                  className="w-full flex items-center justify-between py-1.5 text-sm font-bold text-white hover:text-amber-300"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-emerald-200/80 font-normal">
                      {currentLang === 'am' ? 'ክልሎች' : currentLang === 'om' ? 'Bakka' : currentLang === 'ti' ? 'ቦታታት' : 'Presence'}
                    </span>
                    <span>{t.nav.whereWeWork}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileWhereWeWorkOpen ? 'rotate-180 text-amber-300' : ''}`} />
                </button>
                {mobileWhereWeWorkOpen && (
                  <div className="pl-3 py-1 space-y-1 border-l border-emerald-700/60 my-1">
                    {whereWeWorkSubItems[currentLang].map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => handleNavClick(sub.targetId)}
                        className="w-full text-left py-1.5 text-xs text-stone-200 hover:text-amber-300 flex items-center gap-2"
                      >
                        <span className="text-amber-400 shrink-0">{sub.icon}</span>
                        <span>{sub.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Item 4: Our Impact (Accordion) */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileOurImpactOpen(!mobileOurImpactOpen)}
                  className="w-full flex items-center justify-between py-1.5 text-sm font-bold text-white hover:text-amber-300"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-emerald-200/80 font-normal">
                      {currentLang === 'am' ? 'ውጤት' : currentLang === 'om' ? 'Bu\'aa' : currentLang === 'ti' ? 'ጽልዋ' : 'Results'}
                    </span>
                    <span>{t.nav.ourImpact}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileOurImpactOpen ? 'rotate-180 text-amber-300' : ''}`} />
                </button>
                {mobileOurImpactOpen && (
                  <div className="pl-3 py-1 space-y-1 border-l border-emerald-700/60 my-1">
                    {ourImpactSubItems[currentLang].map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => handleNavClick(sub.targetId)}
                        className="w-full text-left py-1.5 text-xs text-stone-200 hover:text-amber-300 flex items-center gap-2"
                      >
                        <span className="text-amber-400 shrink-0">{sub.icon}</span>
                        <span>{sub.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Connect with Us */}
          <div className="space-y-3 pt-3 border-t border-emerald-800/80">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider border-b border-emerald-800/80 pb-1">
              {t.nav.connectWithUs}
            </div>

            <div className="space-y-3 pl-1">
              {/* Item 5: Work with Us (Accordion) */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileWorkWithUsOpen(!mobileWorkWithUsOpen)}
                  className="w-full flex items-center justify-between py-1 text-sm font-bold text-white hover:text-amber-300"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-emerald-200/80 font-normal">{t.nav.getInvolved}</span>
                    <span>{t.nav.workWithUs}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileWorkWithUsOpen ? 'rotate-180 text-amber-300' : ''}`} />
                </button>
                {mobileWorkWithUsOpen && (
                  <div className="pl-3 py-1 space-y-1 border-l border-emerald-700/60 my-1">
                    {workWithUsSubItems[currentLang].map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => handleNavClick(sub.targetId)}
                        className="w-full text-left py-1.5 text-xs text-stone-200 hover:text-amber-300 flex items-center gap-2"
                      >
                        <span className="text-amber-400 shrink-0">{sub.icon}</span>
                        <span>{sub.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

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
                    <span>{ui.header.changeLangBtn}</span>
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

              {/* Donate Button */}
              <div className="pt-1 space-y-2">
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

                <a
                  href="#brand-test"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-2 text-xs font-semibold text-emerald-200 hover:text-white"
                >
                  ADRA Brand &amp; Template Guide
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </header>
  );
};
