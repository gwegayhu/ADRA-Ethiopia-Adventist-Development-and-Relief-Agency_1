import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, Globe, ChevronDown, ExternalLink, Check } from 'lucide-react';
import { Language } from '../types';
import { AdraLogo } from './AdraLogo';
import { CorePageId } from './SearchModal';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  activePage: CorePageId;
  onNavigatePage: (page: CorePageId, options?: { subSection?: string; pillarId?: string }) => void;
  onOpenDonate: (presetSector?: string, presetAmount?: number) => void;
  onOpenSearch: () => void;
}

type DropdownKey = 'impact' | 'about' | 'media' | null;

const HEADER_LABELS: Record<
  Language,
  {
    home: string;
    international: string;
    waysToGive: string;
    impact: string;
    about: string;
    media: string;
    give: string;
    searchAria: string;
    health: string;
    education: string;
    livelihoods: string;
    emergency: string;
    allImpact: string;
    ourStory: string;
    contactUs: string;
    newsAndBlog: string;
    internationalTitle: string;
    internationalDesc: string;
    visitGlobal: string;
    stayLocal: string;
  }
> = {
  en: {
    home: 'HOME',
    international: 'ADRA INTERNATIONAL',
    waysToGive: 'WAYS TO GIVE',
    impact: 'IMPACT',
    about: 'ABOUT',
    media: 'MEDIA',
    give: 'GIVE',
    searchAria: 'Search site',
    health: 'Health',
    education: 'Education',
    livelihoods: 'Livelihoods',
    emergency: 'Emergency',
    allImpact: 'All 7 Pillars & Ethiopia Map',
    ourStory: 'Our Story',
    contactUs: 'Contact Us',
    newsAndBlog: 'News & Blog',
    internationalTitle: 'ADRA Global Humanitarian Network',
    internationalDesc:
      'ADRA Ethiopia is an autonomous national office within the worldwide Adventist Development and Relief Agency network, serving communities across 130+ countries.',
    visitGlobal: 'Visit ADRA.org',
    stayLocal: 'Stay on ADRA Ethiopia',
  },
  am: {
    home: 'መነሻ',
    international: 'ADRA ዓለም አቀፍ',
    waysToGive: 'የድጋፍ መንገዶች',
    impact: 'ተፅዕኖ',
    about: 'ስለ እኛ',
    media: 'ሚዲያ',
    give: 'ይለግሱ',
    searchAria: 'ፈልግ',
    health: 'ጤና',
    education: 'ትምህርት',
    livelihoods: 'የኑሮ ዋስትና',
    emergency: 'አስቸኳይ ምላሽ',
    allImpact: 'ሁሉም 7 ምሰሶዎች እና ካርታ',
    ourStory: 'ታሪካችን',
    contactUs: 'ያግኙን',
    newsAndBlog: 'ዜና እና ጦማር',
    internationalTitle: 'ዓለም አቀፍ የADRA መረብ',
    internationalDesc:
      'ADRA ኢትዮጵያ በዓለም አቀፉ የADRA መረብ ውስጥ ከ130 በላይ ሀገራትን የሚያገለግል ገለልተኛ ብሔራዊ ቢሮ ነው።',
    visitGlobal: 'ADRA.org ይጎብኙ',
    stayLocal: 'በADRA ኢትዮጵያ ይቆዩ',
  },
  om: {
    home: 'MANA',
    international: 'ADRA ADDUNYAA',
    waysToGive: 'KARAA KENNA',
    impact: 'DHIIBBAA',
    about: 'WAA’EE KEENYA',
    media: 'MIIDIYAA',
    give: 'KENNI',
    searchAria: 'Barbaadi',
    health: 'Fayyaa',
    education: 'Barnoota',
    livelihoods: 'Jireenya',
    emergency: 'Balaa Tasaa',
    allImpact: 'Utubaalee 7 fi Kaartaa',
    ourStory: 'Seenaa Keenya',
    contactUs: 'Nu Qunnamaa',
    newsAndBlog: 'Oduu fi Biloogii',
    internationalTitle: 'Networkii ADRA Addunyaa',
    internationalDesc:
      'ADRA Itoophiyaan biyyoota 130+ keessatti tajaajilu qaama networkii ADRA addunyaati.',
    visitGlobal: 'ADRA.org Daawwadhu',
    stayLocal: 'ADRA Itoophiyaatti Turi',
  },
  ti: {
    home: 'መበገሲ',
    international: 'ADRA ዓለምለኸ',
    waysToGive: 'መንገድታት ሓገዝ',
    impact: 'ጽልዋ',
    about: 'ብዛዕባና',
    media: 'ሚድያ',
    give: 'ለግሱ',
    searchAria: 'ድለዩ',
    health: 'ጥዕና',
    education: 'ትምህርቲ',
    livelihoods: 'መነባብሮ',
    emergency: 'ህጹጽ ምላሽ',
    allImpact: 'ኩሎም 7 ዓንድታትን ካርታን',
    ourStory: 'ታሪኽና',
    contactUs: 'ርኸቡና',
    newsAndBlog: 'ዜናን ብሎግን',
    internationalTitle: 'ዓለምለኻዊ መርበብ ADRA',
    internationalDesc:
      'ADRA ኢትዮጵያ ኣብ ልዕሊ 130 ሃገራት ዝነጥፍ ዓለምለኻዊ መርበብ ADRA ኣካል ዝኾነ ናጻ ቤት ጽሕፈት እዩ።',
    visitGlobal: 'ADRA.org ብጽሑ',
    stayLocal: 'ኣብ ADRA ኢትዮጵያ ጽንሑ',
  },
};

const LANGUAGE_OPTIONS: { id: Language; code: string; native: string }[] = [
  { id: 'en', code: 'EN', native: 'English' },
  { id: 'am', code: 'አማ', native: 'አማርኛ' },
  { id: 'om', code: 'ORO', native: 'Afaan Oromoo' },
  { id: 'ti', code: 'ትግ', native: 'ትግርኛ' },
];

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  activePage,
  onNavigatePage,
  onOpenDonate,
  onOpenSearch,
}) => {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [intlModalOpen, setIntlModalOpen] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const labels = HEADER_LABELS[currentLang] || HEADER_LABELS.en;
  const isEthiopic = currentLang === 'am' || currentLang === 'ti';

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (navContainerRef.current && !navContainerRef.current.contains(target)) {
        setOpenDropdown(null);
      }
      if (langRef.current && !langRef.current.contains(target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const handleLinkAction = (page: CorePageId, options?: { subSection?: string; pillarId?: string }) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    onNavigatePage(page, options);
  };

  const navTextCls = isEthiopic
    ? 'font-sans text-sm font-semibold tracking-normal'
    : 'font-sans text-[14px] font-medium uppercase tracking-[0.05em]';

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b-2 border-[#007B5F]">
        {/* Top Utility Bar (#007B5F Full Width) */}
        <div className="bg-[#007B5F] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-between min-h-[34px]">
            {/* Left Utility Tabs: HOME | ADRA INTERNATIONAL */}
            <div className="flex items-stretch flex-wrap">
              <button
                type="button"
                onClick={() => handleLinkAction('home')}
                className={`px-3.5 py-1.5 text-[11px] sm:text-xs font-bold font-sans transition-colors cursor-pointer whitespace-nowrap ${
                  isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                } ${
                  !intlModalOpen
                    ? 'bg-white text-[#007B5F]'
                    : 'text-white hover:bg-[#00614A]'
                }`}
              >
                {labels.home}
              </button>

              <button
                type="button"
                onClick={() => setIntlModalOpen(true)}
                className={`px-3.5 py-1.5 text-[11px] sm:text-xs font-bold font-sans transition-colors cursor-pointer whitespace-nowrap ${
                  isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                } ${
                  intlModalOpen
                    ? 'bg-white text-[#007B5F]'
                    : 'text-white hover:bg-[#00614A]'
                }`}
              >
                {labels.international}
              </button>
            </div>

            {/* Right Utility: Compact Language Selector */}
            <div className="relative flex items-center" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((prev) => !prev)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-[#00614A] transition-colors cursor-pointer whitespace-nowrap font-sans"
                aria-expanded={langOpen}
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span>{LANGUAGE_OPTIONS.find((l) => l.id === currentLang)?.code || 'EN'}</span>
                <ChevronDown className="w-3 h-3 shrink-0" />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-0.5 w-44 bg-white text-[#231F20] shadow-lg border border-stone-200 py-1 z-50">
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        onToggleLang(opt.id);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between cursor-pointer font-sans ${
                        currentLang === opt.id
                          ? 'bg-[#E5F2EF] text-[#007B5F] font-bold'
                          : 'text-[#231F20] hover:bg-stone-50'
                      }`}
                    >
                      <span>{opt.native}</span>
                      {currentLang === opt.id && <Check className="w-3.5 h-3.5 text-[#007B5F]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          ref={navContainerRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] sm:h-[82px] flex items-center justify-between gap-4"
        >
          {/* Left: Official ADRA Vertical Logo (No country name baked into artwork) */}
          <button
            type="button"
            onClick={() => handleLinkAction('home')}
            className="flex items-center shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#007B5F] rounded"
            aria-label="ADRA Home"
          >
            <AdraLogo
              configuration="vertical"
              color="green"
              size={58}
              alt="ADRA - Adventist Development and Relief Agency"
            />
          </button>

          {/* Right: Desktop Navigation Links + GIVE Pill CTA + Search Icon */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-wrap justify-end">
            <nav className="flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
              {/* WAYS TO GIVE */}
              <button
                type="button"
                onClick={() => handleLinkAction('ways-to-give')}
                className={`${navTextCls} py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  activePage === 'ways-to-give'
                    ? 'text-[#00614A] font-bold underline underline-offset-8 decoration-2 decoration-[#007B5F]'
                    : 'text-[#007B5F] hover:text-[#00614A]'
                }`}
              >
                {labels.waysToGive}
              </button>

              {/* IMPACT (with Dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('impact')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (openDropdown === 'impact') {
                      handleLinkAction('impact');
                    } else {
                      setOpenDropdown('impact');
                    }
                  }}
                  aria-expanded={openDropdown === 'impact'}
                  className={`${navTextCls} py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    activePage === 'impact'
                      ? 'text-[#00614A] font-bold underline underline-offset-8 decoration-2 decoration-[#007B5F]'
                      : 'text-[#007B5F] hover:text-[#00614A]'
                  }`}
                >
                  {labels.impact}
                </button>

                {openDropdown === 'impact' && (
                  <div className="absolute left-0 top-full pt-1 z-50">
                    <div className="w-56 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] border-t border-stone-200 py-2">
                      {[
                        { id: 'health', label: labels.health },
                        { id: 'education', label: labels.education },
                        { id: 'livelihood', label: labels.livelihoods },
                        { id: 'disaster-response', label: labels.emergency },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleLinkAction('impact', { pillarId: item.id })}
                          className="w-full text-left px-6 py-3.5 text-[15px] font-medium font-sans text-[#231F20] hover:bg-[#E5F2EF]/60 hover:text-[#007B5F] transition-colors cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ))}
                      <div className="border-t border-stone-100 mt-1 pt-1">
                        <button
                          type="button"
                          onClick={() => handleLinkAction('impact')}
                          className="w-full text-left px-6 py-3 text-xs font-bold uppercase tracking-[0.05em] font-sans text-[#007B5F] hover:bg-[#E5F2EF]/60 transition-colors cursor-pointer"
                        >
                          {labels.allImpact}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ABOUT (with Dropdown: Our Story, Contact Us) */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (openDropdown === 'about') {
                      handleLinkAction('about');
                    } else {
                      setOpenDropdown('about');
                    }
                  }}
                  aria-expanded={openDropdown === 'about'}
                  className={`${navTextCls} py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    activePage === 'about' || activePage === 'contact'
                      ? 'text-[#00614A] font-bold underline underline-offset-8 decoration-2 decoration-[#007B5F]'
                      : 'text-[#007B5F] hover:text-[#00614A]'
                  }`}
                >
                  {labels.about}
                </button>

                {openDropdown === 'about' && (
                  <div className="absolute left-0 top-full pt-1 z-50">
                    <div className="w-52 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] border-t border-stone-200 py-2">
                      <button
                        type="button"
                        onClick={() => handleLinkAction('about')}
                        className="w-full text-left px-6 py-3.5 text-[15px] font-medium font-sans text-[#231F20] hover:bg-[#E5F2EF]/60 hover:text-[#007B5F] transition-colors cursor-pointer"
                      >
                        {labels.ourStory}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleLinkAction('contact')}
                        className="w-full text-left px-6 py-3.5 text-[15px] font-medium font-sans text-[#231F20] hover:bg-[#E5F2EF]/60 hover:text-[#007B5F] transition-colors cursor-pointer"
                      >
                        {labels.contactUs}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* MEDIA (with Dropdown: News & Blog) */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('media')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (openDropdown === 'media') {
                      handleLinkAction('media');
                    } else {
                      setOpenDropdown('media');
                    }
                  }}
                  aria-expanded={openDropdown === 'media'}
                  className={`${navTextCls} py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    activePage === 'media'
                      ? 'text-[#00614A] font-bold underline underline-offset-8 decoration-2 decoration-[#007B5F]'
                      : 'text-[#007B5F] hover:text-[#00614A]'
                  }`}
                >
                  {labels.media}
                </button>

                {openDropdown === 'media' && (
                  <div className="absolute left-0 top-full pt-1 z-50">
                    <div className="w-52 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] border-t border-stone-200 py-2">
                      <button
                        type="button"
                        onClick={() => handleLinkAction('media')}
                        className="w-full text-left px-6 py-3.5 text-[15px] font-medium font-sans text-[#231F20] hover:bg-[#E5F2EF]/60 hover:text-[#007B5F] transition-colors cursor-pointer"
                      >
                        {labels.newsAndBlog}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Primary Pill CTA: GIVE (#007B5F) */}
            <button
              type="button"
              onClick={() => onOpenDonate()}
              className={`px-8 py-2.5 bg-[#007B5F] hover:bg-[#00614A] active:bg-[#004D3A] text-white font-bold rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer font-sans text-sm ${
                isEthiopic ? '' : 'uppercase tracking-[0.05em]'
              }`}
            >
              {labels.give}
            </button>

            {/* Green Magnifying Glass Search Icon */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label={labels.searchAria}
              className="p-2 text-[#007B5F] hover:text-[#00614A] transition-colors shrink-0 cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[2.4]" />
            </button>
          </div>

          {/* Mobile Controls (< lg) */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label={labels.searchAria}
              className="p-2 text-[#007B5F] hover:bg-[#E5F2EF] rounded-full cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            <button
              type="button"
              onClick={() => onOpenDonate()}
              className={`px-5 py-2 bg-[#007B5F] hover:bg-[#00614A] text-white font-bold text-xs rounded-full cursor-pointer font-sans ${
                isEthiopic ? '' : 'uppercase tracking-[0.05em]'
              }`}
            >
              {labels.give}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#007B5F] hover:bg-[#E5F2EF] rounded-md cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-5 py-4 shadow-xl space-y-1 max-h-[75vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => handleLinkAction('ways-to-give')}
              className={`w-full text-left py-3 px-2 border-b border-stone-100 text-[#007B5F] font-bold font-sans text-sm ${
                isEthiopic ? '' : 'uppercase tracking-[0.05em]'
              }`}
            >
              {labels.waysToGive}
            </button>

            {/* Mobile IMPACT */}
            <div className="border-b border-stone-100">
              <button
                type="button"
                onClick={() => setMobileExpanded(mobileExpanded === 'impact' ? null : 'impact')}
                className={`w-full flex items-center justify-between py-3 px-2 text-[#007B5F] font-bold font-sans text-sm ${
                  isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                }`}
              >
                <span>{labels.impact}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpanded === 'impact' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileExpanded === 'impact' && (
                <div className="pl-4 pb-3 space-y-1">
                  {[
                    { id: 'health', label: labels.health },
                    { id: 'education', label: labels.education },
                    { id: 'livelihood', label: labels.livelihoods },
                    { id: 'disaster-response', label: labels.emergency },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleLinkAction('impact', { pillarId: item.id })}
                      className="block w-full text-left py-2 text-sm text-[#231F20] hover:text-[#007B5F] font-sans"
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleLinkAction('impact')}
                    className="block w-full text-left py-2 text-xs font-bold uppercase tracking-[0.05em] text-[#007B5F] font-sans"
                  >
                    {labels.allImpact}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile ABOUT */}
            <div className="border-b border-stone-100">
              <button
                type="button"
                onClick={() => setMobileExpanded(mobileExpanded === 'about' ? null : 'about')}
                className={`w-full flex items-center justify-between py-3 px-2 text-[#007B5F] font-bold font-sans text-sm ${
                  isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                }`}
              >
                <span>{labels.about}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpanded === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileExpanded === 'about' && (
                <div className="pl-4 pb-3 space-y-1">
                  <button
                    type="button"
                    onClick={() => handleLinkAction('about')}
                    className="block w-full text-left py-2 text-sm text-[#231F20] hover:text-[#007B5F] font-sans"
                  >
                    {labels.ourStory}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkAction('contact')}
                    className="block w-full text-left py-2 text-sm text-[#231F20] hover:text-[#007B5F] font-sans"
                  >
                    {labels.contactUs}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile MEDIA */}
            <div>
              <button
                type="button"
                onClick={() => setMobileExpanded(mobileExpanded === 'media' ? null : 'media')}
                className={`w-full flex items-center justify-between py-3 px-2 text-[#007B5F] font-bold font-sans text-sm ${
                  isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                }`}
              >
                <span>{labels.media}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpanded === 'media' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileExpanded === 'media' && (
                <div className="pl-4 pb-2 space-y-1">
                  <button
                    type="button"
                    onClick={() => handleLinkAction('media')}
                    className="block w-full text-left py-2 text-sm text-[#231F20] hover:text-[#007B5F] font-sans"
                  >
                    {labels.newsAndBlog}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ADRA International Utility Network Modal */}
      {intlModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIntlModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white max-w-lg w-full p-6 sm:p-8 shadow-2xl border-t-4 border-[#007B5F] space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <AdraLogo configuration="horizontal" color="green" size={38} />
              <button
                type="button"
                onClick={() => setIntlModalOpen(false)}
                aria-label="Close"
                className="p-1.5 text-[#54585A] hover:text-[#231F20] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-xl font-bold text-[#007B5F] font-sans">
              {labels.internationalTitle}
            </h3>

            <p className="text-sm sm:text-base text-[#231F20] font-serif leading-relaxed">
              {labels.internationalDesc}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://adra.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#007B5F] hover:bg-[#00614A] text-white font-bold text-xs uppercase tracking-[0.05em] rounded-full font-sans"
              >
                <span>{labels.visitGlobal}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setIntlModalOpen(false)}
                className="px-6 py-2.5 border border-[#54585A] text-[#54585A] hover:bg-stone-100 font-bold text-xs uppercase tracking-[0.05em] rounded-full cursor-pointer font-sans"
              >
                {labels.stayLocal}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
