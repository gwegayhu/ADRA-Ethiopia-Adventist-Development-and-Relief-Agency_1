import React, { useState } from 'react';
import { Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/uiCopy';
import { AdraLogo } from './AdraLogo';

interface FooterProps {
  currentLang: Language;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenDonate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const ui = UI_COPY[currentLang] || UI_COPY.en;

  const programHrefs = [
    '#what-we-do',
    '#what-we-do',
    '#what-we-do',
    '#what-we-do',
    '#what-we-do',
    '#what-we-do',
    '#what-we-do',
  ];

  const institutionalHrefs = [
    '#who-we-are',
    '#where-we-work',
    '#programs',
    '#work-with-us',
    '#work-with-us',
    '#work-with-us',
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#00261c] text-stone-300 pt-16 pb-12 border-t border-[#004D3A] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-950/80">
          
          {/* Brand & Purpose Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <AdraLogo
                configuration="vertical"
                color="white"
                size={64}
                alt="ADRA - Adventist Development and Relief Agency"
              />
              <div className="border-l border-emerald-600/40 pl-3">
                <span className="text-lg font-bold tracking-tight text-white font-sans">
                  {ui.common.ethiopia}
                </span>
                <div className="text-[10px] uppercase tracking-widest text-[#f59e0b] font-sans font-bold">
                  {ui.common.countryOffice}
                </div>
              </div>
            </div>

            {/* Official Motto in Kaushan Script at 3-10 degree angle */}
            <div>
              <span className="font-motto text-base text-emerald-300 font-normal">
                {ui.common.motto}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm font-serif">
              {ui.footer.purposeLead}
            </p>

            <div className="text-xs text-stone-400 space-y-1 font-mono">
              <div>{ui.footer.proclamation}</div>
              <div>{ui.footer.acsoInfo}</div>
              <div className="text-stone-400">{ui.footer.addressPhone}</div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">{ui.footer.programsHeading}</div>
            <ul className="space-y-2 text-xs text-stone-300">
              {ui.footer.programsLinks.map((label, idx) => (
                <li key={idx}>
                  <a href={programHrefs[idx] || '#what-we-do'} className="hover:text-emerald-300 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Operations */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">{ui.footer.institutionalHeading}</div>
            <ul className="space-y-2 text-xs text-stone-300">
              {ui.footer.institutionalLinks.map((label, idx) => (
                <li key={idx}>
                  <a href={institutionalHrefs[idx] || '#who-we-are'} className="hover:text-emerald-300 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">{ui.footer.updatesHeading}</div>
            <p className="text-xs text-stone-300 font-medium font-serif">
              {ui.footer.updatesBlurb}
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-700 rounded-lg text-xs text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{ui.footer.subscribedMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={ui.footer.emailPlaceholder}
                    className="w-full px-3 py-2 bg-stone-800/80 border border-stone-600 rounded-lg text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#007B5F] font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#007B5F] hover:bg-[#005944] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{ui.footer.subscribeBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-emerald-200 border border-stone-600 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-[#007B5F] text-[#007B5F]" />
                <span>{ui.footer.directGiftBtn}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright & Accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300 font-medium">
          <div>
            © {new Date().getFullYear()} {ui.footer.copyright}
          </div>
          <div className="flex items-center gap-6">
            <a href="#brand-test" className="text-emerald-300 hover:text-white transition-colors underline-offset-2 hover:underline font-semibold">Brand &amp; Template Guide</a>
            <a href="#who-we-are" className="hover:text-white transition-colors underline-offset-2 hover:underline">{ui.footer.safeguarding}</a>
            <a href="#who-we-are" className="hover:text-white transition-colors underline-offset-2 hover:underline">{ui.footer.whistleblower}</a>
            <a href="#contact" className="hover:text-white transition-colors underline-offset-2 hover:underline">{ui.footer.privacy}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
