import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, Globe, ChevronDown, ExternalLink, Check } from 'lucide-react';
import { Language } from '../types';
import { AdraLogo } from './AdraLogo';
import { CorePageId } from './SearchModal';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  activePage: CorePageId;
  onNavigatePage: (
    page: CorePageId,
    options?: { subSection?: string; pillarId?: string; subTab?: string }
  ) => void;
  onOpenDonate: (presetSector?: string, presetAmount?: number) => void;
  onOpenSearch: () => void;
}

type DropdownKey = 'ways-to-give' | 'impact' | 'about' | 'media' | null;

const HEADER_LABELS: Record<
  Language,
  {
    ethiopiaWord: string;
    officeWord: string;
    home: string;
    international: string;
    waysToGive: string;
    impact: string;
    about: string;
    media: string;
    give: string;
    searchAria: string;
    // Ways to Give submenu
    currentAppeal: string;
    giftCatalog: string;
    howItWorks: string;
    aiStewardship: string;
    // Impact submenu
    health: string;
    education: string;
    livelihoods: string;
    emergency: string;
    wash: string;
    cleanEnergy: string;
    peaceBuilding: string;
    whereWeWork: string;
    flagshipInitiatives: string;
    // About submenu
    ourStory: string;
    ourHistory: string;
    leadershipTeam: string;
    governancePolicies: string;
    workWithUs: string;
    contactUs: string;
    // Media submenu
    latestDispatches: string;
    newsAndBlog: string;
    fieldStories: string;
    // International modal
    internationalTitle: string;
    internationalDesc: string;
    visitGlobal: string;
    stayLocal: string;
  }
> = {
  en: {
    ethiopiaWord: 'ETHIOPIA',
    officeWord: 'OFFICE',
    home: 'HOME',
    international: 'ADRA INTERNATIONAL',
    waysToGive: 'WAYS TO GIVE',
    impact: 'IMPACT',
    about: 'ABOUT',
    media: 'MEDIA',
    give: 'GIVE',
    searchAria: 'Search site',
    currentAppeal: 'Current Appeal',
    giftCatalog: 'Gift Catalog',
    howItWorks: 'How It Works',
    aiStewardship: 'AI & Accountability',
    health: 'Health',
    education: 'Education',
    livelihoods: 'Livelihoods',
    emergency: 'Emergency',
    wash: 'Clean Water (WASH)',
    cleanEnergy: 'Renewable Energy & Growth',
    peaceBuilding: 'Peace Building',
    whereWeWork: 'Regional Hubs & GIS Map',
    flagshipInitiatives: 'Flagship Initiatives',
    ourStory: 'Our Story',
    ourHistory: 'Our History (Since 1982)',
    leadershipTeam: 'Leadership & Team',
    governancePolicies: 'Governance & Policies',
    workWithUs: 'Tenders, Careers & Reports',
    contactUs: 'Contact Us',
    latestDispatches: 'Latest Dispatches',
    newsAndBlog: 'News & Blog',
    fieldStories: 'Stories from the Field',
    internationalTitle: 'ADRA Global Humanitarian Network',
    internationalDesc:
      'ADRA Ethiopia is an autonomous national office within the worldwide Adventist Development and Relief Agency network, serving communities across 130+ countries.',
    visitGlobal: 'Visit ADRA.org',
    stayLocal: 'Stay on ADRA Ethiopia',
  },
  am: {
    ethiopiaWord: 'ኢትዮጵያ',
    officeWord: 'ቢሮ',
    home: 'መነሻ',
    international: 'ADRA ዓለም አቀፍ',
    waysToGive: 'የድጋፍ መንገዶች',
    impact: 'ተፅዕኖ',
    about: 'ስለ እኛ',
    media: 'ሚዲያ',
    give: 'ይለግሱ',
    searchAria: 'ፈልግ',
    currentAppeal: 'ወቅታዊ ጥሪ',
    giftCatalog: 'የስጦታ ካታሎግ',
    howItWorks: 'እንዴት እንደሚሰራ',
    aiStewardship: 'AI እና ተጠያቂነት',
    health: 'ጤና',
    education: 'ትምህርት',
    livelihoods: 'የኑሮ ዋስትና',
    emergency: 'አስቸኳይ ምላሽ',
    wash: 'ንጹህ ውሃ (WASH)',
    cleanEnergy: 'ታዳሽ ኃይል እና ኢኮኖሚ',
    peaceBuilding: 'ሰላም ግንባታ',
    whereWeWork: 'የክልል ማዕከላት እና GIS ካርታ',
    flagshipInitiatives: 'ዋና ዋና ፕሮግራሞች',
    ourStory: 'ታሪካችን',
    ourHistory: 'ጉዟችን (ከ1982 ጀምሮ)',
    leadershipTeam: 'አመራር እና የስራ ቡድን',
    governancePolicies: 'አስተዳደር እና ፖሊሲዎች',
    workWithUs: 'ጨረታዎች እና የስራ እድሎች',
    contactUs: 'ያግኙን',
    latestDispatches: 'የቅርብ ጊዜ ዘገባዎች',
    newsAndBlog: 'ዜና እና ጦማር',
    fieldStories: 'የመስክ ታሪኮች',
    internationalTitle: 'ዓለም አቀፍ የADRA መረብ',
    internationalDesc:
      'ADRA ኢትዮጵያ በዓለም አቀፉ የADRA መረብ ውስጥ ከ130 በላይ ሀገራትን የሚያገለግል ገለልተኛ ብሔራዊ ቢሮ ነው።',
    visitGlobal: 'ADRA.org ይጎብኙ',
    stayLocal: 'በADRA ኢትዮጵያ ይቆዩ',
  },
  om: {
    ethiopiaWord: 'ITOOPHIYAA',
    officeWord: 'WAAJJIRA',
    home: 'MANA',
    international: 'ADRA ADDUNYAA',
    waysToGive: 'KARAA KENNA',
    impact: 'DHIIBBAA',
    about: 'WAA’EE KEENYA',
    media: 'MIIDIYAA',
    give: 'KENNI',
    searchAria: 'Barbaadi',
    currentAppeal: 'Waamicha Ammaa',
    giftCatalog: 'Kaataaloogii Kenna',
    howItWorks: 'Akkaataa Hojii',
    aiStewardship: 'AI fi Itti Gaafatamummaa',
    health: 'Fayyaa',
    education: 'Barnoota',
    livelihoods: 'Jireenya',
    emergency: 'Balaa Tasaa',
    wash: 'Bishaan Qulqulluu (WASH)',
    cleanEnergy: 'Anniisaa Haaromsamaa',
    peaceBuilding: 'Ijaarsa Nagaa',
    whereWeWork: 'Damee Naannoo & Kaartaa GIS',
    flagshipInitiatives: 'Sagantaalee Ijoo',
    ourStory: 'Seenaa Keenya',
    ourHistory: 'Seenaa Hojii (1982 irraa)',
    leadershipTeam: 'Hoggansa fi Garee',
    governancePolicies: 'Bulchiinsa fi Imaammata',
    workWithUs: 'Caalbaasii fi Carraa Hojii',
    contactUs: 'Nu Qunnamaa',
    latestDispatches: 'Oduu Haaraa',
    newsAndBlog: 'Oduu fi Biloogii',
    fieldStories: 'Seenaa Dirree',
    internationalTitle: 'Networkii ADRA Addunyaa',
    internationalDesc:
      'ADRA Itoophiyaan biyyoota 130+ keessatti tajaajilu qaama networkii ADRA addunyaati.',
    visitGlobal: 'ADRA.org Daawwadhu',
    stayLocal: 'ADRA Itoophiyaatti Turi',
  },
  ti: {
    ethiopiaWord: 'ኢትዮጵያ',
    officeWord: 'ቤት ጽሕፈት',
    home: 'መበገሲ',
    international: 'ADRA ዓለምለኸ',
    waysToGive: 'መንገድታት ሓገዝ',
    impact: 'ጽልዋ',
    about: 'ብዛዕባና',
    media: 'ሚድያ',
    give: 'ለግሱ',
    searchAria: 'ድለዩ',
    currentAppeal: 'እዋናዊ ጻውዒት',
    giftCatalog: 'ካታሎግ ህያብ',
    howItWorks: 'ከመይ ይሰርሕ',
    aiStewardship: 'AIን ተሓታትነትን',
    health: 'ጥዕና',
    education: 'ትምህርቲ',
    livelihoods: 'መነባብሮ',
    emergency: 'ህጹጽ ምላሽ',
    wash: 'ጽሩይ ማይ (WASH)',
    cleanEnergy: 'ታዳሽ ጸዓትን ልምዓትን',
    peaceBuilding: 'ህንጸት ሰላም',
    whereWeWork: 'ማእከላት ክልልን ካርታ GISን',
    flagshipInitiatives: 'ቀንዲ መደባት',
    ourStory: 'ታሪኽና',
    ourHistory: 'ጉዕዞና (ካብ 1982)',
    leadershipTeam: 'መርሕነትን ጉጅለን',
    governancePolicies: 'ምሕደራን ፖሊሲታትን',
    workWithUs: 'ጨረታታትን ዕድላት ስራሕን',
    contactUs: 'ርኸቡና',
    latestDispatches: 'እዋናዊ ጸብጻባት',
    newsAndBlog: 'ዜናን ብሎግን',
    fieldStories: 'ዛንታታት መስኪ',
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
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleLinkAction = (
    page: CorePageId,
    options?: { subSection?: string; pillarId?: string; subTab?: string }
  ) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    onNavigatePage(page, options);
  };

  const menuDefinitions: {
    key: Exclude<DropdownKey, null>;
    label: string;
    isActive: boolean;
    widthClass: string;
    items: {
      id: string;
      label: string;
      dividerBefore?: boolean;
      accent?: boolean;
      action: () => void;
    }[];
  }[] = [
    {
      key: 'ways-to-give',
      label: labels.waysToGive,
      isActive: activePage === 'ways-to-give',
      widthClass: 'w-56',
      items: [
        {
          id: 'current-appeal',
          label: labels.currentAppeal,
          action: () => handleLinkAction('ways-to-give', { subSection: 'current-appeal' }),
        },
        {
          id: 'gift-catalog',
          label: labels.giftCatalog,
          action: () => handleLinkAction('ways-to-give', { subSection: 'gift-catalog' }),
        },
        {
          id: 'how-it-works',
          label: labels.howItWorks,
          action: () => handleLinkAction('ways-to-give', { subSection: 'how-it-works' }),
        },
        {
          id: 'ai-for-good',
          label: labels.aiStewardship,
          dividerBefore: true,
          action: () => handleLinkAction('ways-to-give', { subSection: 'ai-for-good' }),
        },
      ],
    },
    {
      key: 'impact',
      label: labels.impact,
      isActive: activePage === 'impact',
      widthClass: 'w-64',
      items: [
        {
          id: 'health',
          label: labels.health,
          action: () => handleLinkAction('impact', { pillarId: 'health', subSection: 'focus-areas-grid' }),
        },
        {
          id: 'education',
          label: labels.education,
          action: () => handleLinkAction('impact', { pillarId: 'education', subSection: 'focus-areas-grid' }),
        },
        {
          id: 'livelihood',
          label: labels.livelihoods,
          action: () => handleLinkAction('impact', { pillarId: 'livelihood', subSection: 'focus-areas-grid' }),
        },
        {
          id: 'disaster-response',
          label: labels.emergency,
          action: () => handleLinkAction('impact', { pillarId: 'disaster-response', subSection: 'focus-areas-grid' }),
        },
        {
          id: 'wash',
          label: labels.wash,
          dividerBefore: true,
          action: () => handleLinkAction('impact', { pillarId: 'wash', subSection: 'focus-areas-grid' }),
        },
        {
          id: 'economic-growth',
          label: labels.cleanEnergy,
          action: () => handleLinkAction('impact', { pillarId: 'economic-growth', subSection: 'focus-areas-grid' }),
        },
        {
          id: 'peace-building',
          label: labels.peaceBuilding,
          action: () => handleLinkAction('impact', { pillarId: 'peace-building', subSection: 'focus-areas-grid' }),
        },
        {
          id: 'where-we-work',
          label: labels.whereWeWork,
          dividerBefore: true,
          accent: true,
          action: () => handleLinkAction('impact', { subSection: 'where-we-work' }),
        },
        {
          id: 'programs',
          label: labels.flagshipInitiatives,
          action: () => handleLinkAction('impact', { subSection: 'programs' }),
        },
      ],
    },
    {
      key: 'about',
      label: labels.about,
      isActive: activePage === 'about' || activePage === 'contact',
      widthClass: 'w-60',
      items: [
        {
          id: 'our-story',
          label: labels.ourStory,
          action: () => handleLinkAction('about', { subTab: 'about-us', subSection: 'who-we-are' }),
        },
        {
          id: 'our-history',
          label: labels.ourHistory,
          action: () => handleLinkAction('about', { subTab: 'our-history', subSection: 'who-we-are' }),
        },
        {
          id: 'leadership',
          label: labels.leadershipTeam,
          action: () => handleLinkAction('about', { subTab: 'leadership', subSection: 'who-we-are' }),
        },
        {
          id: 'governance',
          label: labels.governancePolicies,
          action: () => handleLinkAction('about', { subTab: 'governance', subSection: 'who-we-are' }),
        },
        {
          id: 'work-with-us',
          label: labels.workWithUs,
          dividerBefore: true,
          action: () => handleLinkAction('about', { subSection: 'work-with-us' }),
        },
        {
          id: 'contact',
          label: labels.contactUs,
          dividerBefore: true,
          accent: true,
          action: () => handleLinkAction('contact', { subSection: 'contact' }),
        },
      ],
    },
    {
      key: 'media',
      label: labels.media,
      isActive: activePage === 'media',
      widthClass: 'w-56',
      items: [
        {
          id: 'latest-news',
          label: labels.latestDispatches,
          action: () => handleLinkAction('media', { subSection: 'latest-news' }),
        },
        {
          id: 'blogs',
          label: labels.newsAndBlog,
          action: () => handleLinkAction('media', { subSection: 'blogs' }),
        },
        {
          id: 'stories',
          label: labels.fieldStories,
          action: () => handleLinkAction('media', { subSection: 'stories' }),
        },
      ],
    },
  ];

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
          {/* Left: Official ADRA Vertical Logo + Separate ETHIOPIA OFFICE text outside clear space */}
          <button
            type="button"
            onClick={() => handleLinkAction('home')}
            className="flex items-center gap-3 sm:gap-3.5 shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#007B5F] rounded"
            aria-label="ADRA Ethiopia Office Home"
          >
            <AdraLogo
              configuration="vertical"
              color="green"
              size={56}
              alt="ADRA - Adventist Development and Relief Agency"
            />
            <div className="border-l border-stone-300 pl-3 sm:pl-3.5 py-0.5 flex flex-col text-left shrink-0">
              <span className="text-sm sm:text-base font-bold text-[#007B5F] leading-none font-sans tracking-tight">
                {labels.ethiopiaWord}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#54585A] leading-none font-sans uppercase tracking-[0.05em] mt-1">
                {labels.officeWord}
              </span>
            </div>
          </button>

          {/* Right: Desktop Navigation Links (Hover + Click Dropdowns) + GIVE Pill CTA + Search Icon */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 flex-wrap justify-end">
            <nav className="flex items-center gap-5 xl:gap-7" aria-label="Main navigation">
              {menuDefinitions.map((menu) => {
                const isOpen = openDropdown === menu.key;
                return (
                  <div
                    key={menu.key}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(menu.key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((prev) => (prev === menu.key ? null : menu.key))
                      }
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`${navTextCls} py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer inline-flex items-center gap-1 ${
                        menu.isActive || isOpen
                          ? 'text-[#00614A] font-bold underline underline-offset-8 decoration-2 decoration-[#007B5F]'
                          : 'text-[#007B5F] hover:text-[#00614A]'
                      }`}
                    >
                      <span>{menu.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="absolute left-0 top-full pt-1 z-50">
                        <div
                          className={`${menu.widthClass} bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] border-t border-stone-200 py-2`}
                          role="menu"
                        >
                          {menu.items.map((item) => (
                            <React.Fragment key={item.id}>
                              {item.dividerBefore && (
                                <div className="my-1 border-t border-stone-100" />
                              )}
                              <button
                                type="button"
                                role="menuitem"
                                onClick={item.action}
                                className={`w-full text-left px-5 py-2.5 text-[14px] font-sans transition-colors cursor-pointer ${
                                  item.accent
                                    ? 'font-bold text-[#007B5F] hover:bg-[#E5F2EF]/60'
                                    : 'font-medium text-[#231F20] hover:bg-[#E5F2EF]/60 hover:text-[#007B5F]'
                                }`}
                              >
                                {item.label}
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
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
          <div className="flex lg:hidden items-center gap-2">
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
              className={`px-4 py-2 bg-[#007B5F] hover:bg-[#00614A] text-white font-bold text-xs rounded-full cursor-pointer font-sans ${
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

        {/* Mobile Drawer Menu (< lg) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-5 py-4 shadow-xl space-y-1 max-h-[75vh] overflow-y-auto">
            {menuDefinitions.map((menu, idx) => {
              const isOpen = mobileExpanded === menu.key;
              return (
                <div
                  key={menu.key}
                  className={idx < menuDefinitions.length - 1 ? 'border-b border-stone-100' : ''}
                >
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(isOpen ? null : menu.key)}
                    className={`w-full flex items-center justify-between py-3 px-2 text-[#007B5F] font-bold font-sans text-sm ${
                      isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                    }`}
                  >
                    <span>{menu.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pl-4 pb-3 space-y-1">
                      {menu.items.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={item.action}
                          className={`block w-full text-left py-2 text-sm font-sans ${
                            item.accent
                              ? 'font-bold text-[#007B5F]'
                              : 'text-[#231F20] hover:text-[#007B5F]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
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
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-[#007B5F] font-sans">
                {labels.internationalTitle}
              </h3>
              <button
                type="button"
                onClick={() => setIntlModalOpen(false)}
                aria-label="Close"
                className="p-1.5 -mt-1 -mr-1 text-[#54585A] hover:text-[#231F20] cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

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
