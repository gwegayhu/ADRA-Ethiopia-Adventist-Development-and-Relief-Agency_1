import React, { useState, useRef, useEffect } from 'react';
import { Globe, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import { Language } from '../types';
import { AdraLogo } from './AdraLogo';
import { CorePageId } from './SearchModal';

interface FooterProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigatePage: (page: CorePageId, options?: { subSection?: string; pillarId?: string }) => void;
}

const FOOTER_COPY: Record<
  Language,
  {
    orgName: string;
    address: string;
    phone: string;
    giveHeading: string;
    currentAppeal: string;
    giftCatalog: string;
    howItWorks: string;
    impactHeading: string;
    health: string;
    education: string;
    livelihoods: string;
    emergency: string;
    aboutHeading: string;
    ourStory: string;
    contactUs: string;
    mediaHeading: string;
    newsBlog: string;
    stayUpdatedHeading: string;
    emailPlaceholder: string;
    subscribeBtn: string;
    subscribedMsg: string;
    copyright: string;
    reportConcern: string;
    ourPolicies: string;
    languageLabel: string;
  }
> = {
  en: {
    orgName: 'Adventist Development & Relief Agency Ethiopia',
    address: 'Ras Desta Damtew Rd, Kirkos Sub-City, Addis Ababa',
    phone: '+251-115-512212',
    giveHeading: 'GIVE',
    currentAppeal: 'Current Appeal',
    giftCatalog: 'Gift Catalog',
    howItWorks: 'How It Works',
    impactHeading: 'IMPACT',
    health: 'Health',
    education: 'Education',
    livelihoods: 'Livelihoods',
    emergency: 'Emergency',
    aboutHeading: 'ABOUT',
    ourStory: 'Our Story',
    contactUs: 'Contact Us',
    mediaHeading: 'MEDIA',
    newsBlog: 'News & Blog',
    stayUpdatedHeading: 'STAY UPDATED',
    emailPlaceholder: 'Your email address',
    subscribeBtn: 'SUBSCRIBE',
    subscribedMsg: 'Subscribed to ADRA Ethiopia field updates.',
    copyright: '© ADRA Ethiopia 2026',
    reportConcern: 'Report A Concern',
    ourPolicies: 'Our Policies',
    languageLabel: 'Language',
  },
  am: {
    orgName: 'አድቬንቲስት የልማት እና የእርዳታ ድርጅት (ADRA) ኢትዮጵያ',
    address: 'ራስ ደስታ ዳምጠው መንገድ፣ ቂርቆስ ክ/ከተማ፣ አዲስ አበባ',
    phone: '+251-115-512212',
    giveHeading: 'ድጋፍ',
    currentAppeal: 'ወቅታዊ ጥሪ',
    giftCatalog: 'የስጦታ ካታሎግ',
    howItWorks: 'እንዴት እንደሚሰራ',
    impactHeading: 'ተፅዕኖ',
    health: 'ጤና',
    education: 'ትምህርት',
    livelihoods: 'የኑሮ ዋስትና',
    emergency: 'አስቸኳይ ምላሽ',
    aboutHeading: 'ስለ እኛ',
    ourStory: 'ታሪካችን',
    contactUs: 'ያግኙን',
    mediaHeading: 'ሚዲያ',
    newsBlog: 'ዜና እና ጦማር',
    stayUpdatedHeading: 'ወቅታዊ መረጃ ያግኙ',
    emailPlaceholder: 'የኢሜይል አድራሻዎ',
    subscribeBtn: 'ይመዝገቡ',
    subscribedMsg: 'ለADRA ኢትዮጵያ ወቅታዊ መረጃ ተመዝግበዋል።',
    copyright: '© ADRA ኢትዮጵያ 2026',
    reportConcern: 'ቅሬታ ያቅርቡ',
    ourPolicies: 'ፖሊሲዎቻችን',
    languageLabel: 'ቋንቋ',
  },
  om: {
    orgName: 'Adventist Development & Relief Agency Itoophiyaa',
    address: 'Karaa Raas Dastaa Daamxaw, Qirqoos, Finfinnee',
    phone: '+251-115-512212',
    giveHeading: 'KENNI',
    currentAppeal: 'Waamicha Ammaa',
    giftCatalog: 'Kaataaloogii Kenna',
    howItWorks: 'Akkaataa Hojii',
    impactHeading: 'DHIIBBAA',
    health: 'Fayyaa',
    education: 'Barnoota',
    livelihoods: 'Jireenya',
    emergency: 'Balaa Tasaa',
    aboutHeading: 'WAA’EE KEENYA',
    ourStory: 'Seenaa Keenya',
    contactUs: 'Nu Qunnamaa',
    mediaHeading: 'MIIDIYAA',
    newsBlog: 'Oduu fi Biloogii',
    stayUpdatedHeading: 'ODEEFFANNOO HAARAA',
    emailPlaceholder: 'Teessoo imeelii keessan',
    subscribeBtn: 'GALMAA’I',
    subscribedMsg: 'Oduu ADRA Itoophiyaa argachuuf galmooftaniittu.',
    copyright: '© ADRA Itoophiyaa 2026',
    reportConcern: 'Yaaddoo Gabaasi',
    ourPolicies: 'Imaammata Keenya',
    languageLabel: 'Afaan',
  },
  ti: {
    orgName: 'ኣድቬንቲስት ትካል ልምዓትን ረድኤትን (ADRA) ኢትዮጵያ',
    address: 'ጎደና ራስ ደስታ ዳምጠው፣ ቂርቆስ ክ/ከተማ፣ ኣዲስ ኣበባ',
    phone: '+251-115-512212',
    giveHeading: 'ሓገዝ',
    currentAppeal: 'እዋናዊ ጻውዒት',
    giftCatalog: 'ካታሎግ ህያብ',
    howItWorks: 'ከመይ ይሰርሕ',
    impactHeading: 'ጽልዋ',
    health: 'ጥዕና',
    education: 'ትምህርቲ',
    livelihoods: 'መነባብሮ',
    emergency: 'ህጹጽ ምላሽ',
    aboutHeading: 'ብዛዕባና',
    ourStory: 'ታሪኽና',
    contactUs: 'ርኸቡና',
    mediaHeading: 'ሚድያ',
    newsBlog: 'ዜናን ብሎግን',
    stayUpdatedHeading: 'እዋናዊ ሓበሬታ ርኸቡ',
    emailPlaceholder: 'ናይ ኢመይል ኣድራሻኹም',
    subscribeBtn: 'ተመዝገቡ',
    subscribedMsg: 'ናይ ADRA ኢትዮጵያ እዋናዊ ሓበሬታ ተመዝጊብኩም።',
    copyright: '© ADRA ኢትዮጵያ 2026',
    reportConcern: 'ስክፍታ ሓብሩ',
    ourPolicies: 'ፖሊሲታትና',
    languageLabel: 'ቋንቋ',
  },
};

const LANGUAGES: { id: Language; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'am', label: 'አማርኛ' },
  { id: 'om', label: 'Afaan Oromoo' },
  { id: 'ti', label: 'ትግርኛ' },
];

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onToggleLang,
  onNavigatePage,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const c = FOOTER_COPY[currentLang] || FOOTER_COPY.en;
  const isEthiopic = currentLang === 'am' || currentLang === 'ti';

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const headingCls = `text-sm font-bold text-white font-sans mb-3 ${
    isEthiopic ? '' : 'uppercase tracking-[0.05em]'
  }`;

  const linkCls =
    'block text-sm text-white/90 hover:text-white hover:underline underline-offset-4 transition-colors font-sans py-1 cursor-pointer text-left';

  return (
    <footer className="w-full text-left">
      {/* Main Footer (#54585A Dark Grey per ADRA Graphic Standards Manual) */}
      <div className="bg-[#54585A] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Column 1: White ADRA Vertical Logo, Org Name, Address, Phone, White Circular Social Icons */}
            <div className="space-y-4">
              <div>
                <AdraLogo
                  configuration="vertical"
                  color="white"
                  size={68}
                  alt="ADRA - Adventist Development and Relief Agency"
                />
              </div>

              <div className="text-base font-bold text-white font-sans leading-snug">
                {c.orgName}
              </div>

              <div className="text-sm text-white/90 font-sans space-y-1">
                <div>{c.address}</div>
                <div>{c.phone}</div>
              </div>

              {/* White Circular Social Icons (Facebook, Instagram, X, YouTube) */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com/ADRAInternational"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white text-[#54585A] hover:bg-[#E5F2EF] hover:text-[#007B5F] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.5-1.5h1.6V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.5V14h2.7v8h3.3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/adrainternational"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white text-[#54585A] hover:bg-[#E5F2EF] hover:text-[#007B5F] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://x.com/ADRAIntl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-8 h-8 rounded-full bg-white text-[#54585A] hover:bg-[#E5F2EF] hover:text-[#007B5F] flex items-center justify-center transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@ADRAInternational"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white text-[#54585A] hover:bg-[#E5F2EF] hover:text-[#007B5F] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.2V8.8L15.6 12 10 15.2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: GIVE & IMPACT */}
            <div className="space-y-8">
              <div>
                <h3 className={headingCls}>{c.giveHeading}</h3>
                <ul className="space-y-0.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('ways-to-give', { subSection: 'current-appeal' })}
                      className={linkCls}
                    >
                      {c.currentAppeal}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('ways-to-give', { subSection: 'gift-catalog' })}
                      className={linkCls}
                    >
                      {c.giftCatalog}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('ways-to-give', { subSection: 'how-it-works' })}
                      className={linkCls}
                    >
                      {c.howItWorks}
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={headingCls}>{c.impactHeading}</h3>
                <ul className="space-y-0.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('impact', { pillarId: 'health' })}
                      className={linkCls}
                    >
                      {c.health}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('impact', { pillarId: 'education' })}
                      className={linkCls}
                    >
                      {c.education}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('impact', { pillarId: 'livelihood' })}
                      className={linkCls}
                    >
                      {c.livelihoods}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('impact', { pillarId: 'disaster-response' })}
                      className={linkCls}
                    >
                      {c.emergency}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: ABOUT & MEDIA */}
            <div className="space-y-8">
              <div>
                <h3 className={headingCls}>{c.aboutHeading}</h3>
                <ul className="space-y-0.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('about')}
                      className={linkCls}
                    >
                      {c.ourStory}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('contact')}
                      className={linkCls}
                    >
                      {c.contactUs}
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={headingCls}>{c.mediaHeading}</h3>
                <ul className="space-y-0.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigatePage('media')}
                      className={linkCls}
                    >
                      {c.newsBlog}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: STAY UPDATED */}
            <div>
              <h3 className={headingCls}>{c.stayUpdatedHeading}</h3>
              {subscribed ? (
                <div className="p-3 bg-[#007B5F] text-white text-xs font-sans flex items-center gap-2 rounded-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{c.subscribedMsg}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={c.emailPlaceholder}
                    aria-label={c.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white text-[#231F20] placeholder-[#54585A]/70 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#007B5F]"
                  />
                  <button
                    type="submit"
                    className={`w-full py-2.5 bg-[#007B5F] hover:bg-[#00614A] text-white font-bold text-xs font-sans flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                    }`}
                  >
                    <span>{c.subscribeBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Bottom Bar (#007B5F ADRA Green) */}
      <div className="bg-[#007B5F] text-white py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans">
          <div className="text-white/95 font-medium">{c.copyright}</div>

          <div className="flex flex-wrap items-center gap-3 text-white/95">
            <button
              type="button"
              onClick={() => onNavigatePage('contact')}
              className="hover:underline underline-offset-4 cursor-pointer"
            >
              {c.reportConcern}
            </button>
            <span aria-hidden="true" className="text-white/50">
              |
            </span>
            <button
              type="button"
              onClick={() => onNavigatePage('about', { subSection: 'governance' })}
              className="hover:underline underline-offset-4 cursor-pointer"
            >
              {c.ourPolicies}
            </button>
            <span aria-hidden="true" className="text-white/50">
              |
            </span>

            {/* 🌐 Language Switcher Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-1.5 hover:underline underline-offset-4 cursor-pointer"
                aria-expanded={langMenuOpen}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{c.languageLabel}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 bottom-full mb-2 w-44 bg-white text-[#231F20] shadow-xl border border-stone-200 py-1 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.id}
                      type="button"
                      onClick={() => {
                        onToggleLang(lang.id);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between cursor-pointer font-sans ${
                        currentLang === lang.id
                          ? 'bg-[#E5F2EF] text-[#007B5F] font-bold'
                          : 'text-[#231F20] hover:bg-stone-50'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {currentLang === lang.id && <Check className="w-3.5 h-3.5 text-[#007B5F]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
