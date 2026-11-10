import React, { useState } from 'react';
import { Mail, Heart, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { AdraLogo } from './AdraLogo';

interface FooterProps {
  currentLang: Language;
  onOpenDonate: () => void;
  onOpenBrandGuide?: () => void;
  onOpenBrandTest?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenDonate, onOpenBrandGuide, onOpenBrandTest }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
                configuration="horizontal"
                color="white"
                size={135}
                alt="ADRA - Adventist Development and Relief Agency"
              />
              <div className="border-l border-emerald-600/40 pl-3">
                <span className="text-lg font-bold tracking-tight text-white font-sans">
                  Ethiopia
                </span>
                <div className="text-[10px] uppercase tracking-widest text-[#f59e0b] font-sans font-bold">
                  Country Office
                </div>
              </div>
            </div>

            {/* Official Motto in Kaushan Script at 3-10 degree angle */}
            <div>
              <span className="font-motto text-base text-emerald-300 font-normal">
                Justice. Compassion. Love.
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm font-serif">
              "To serve humanity so all may live as God intended." — Official portal of ADRA Ethiopia, the global humanitarian arm of the Seventh-day Adventist Church, delivering community development, clean water, healthcare, and emergency response since 1982.
            </p>

            <div className="text-xs text-stone-400 space-y-1 font-mono">
              <div>Registered under Civil Society Organizations Proclamation #1113/2019</div>
              <div>ACSO Registration Certificate No: 2049 · 42+ Years in Ethiopia</div>
              <div className="text-stone-400">Ras Desta Damtew Rd, Addis Ababa Ethiopia · Phone: +251-115-512212</div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Programs & Focus</div>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#focus-areas" className="hover:text-emerald-300 transition-colors">Clean Water & WASH</a></li>
              <li><a href="#focus-areas" className="hover:text-emerald-300 transition-colors">Education & Child Protection</a></li>
              <li><a href="#focus-areas" className="hover:text-emerald-300 transition-colors">Agriculture & Food Security</a></li>
              <li><a href="#focus-areas" className="hover:text-emerald-300 transition-colors">Community Therapeutic Care</a></li>
              <li><a href="#focus-areas" className="hover:text-emerald-300 transition-colors">Green Energy TVET II</a></li>
              <li><a href="#focus-areas" className="hover:text-emerald-300 transition-colors">Emergency Disaster Response</a></li>
            </ul>
          </div>

          {/* Governance & Operations */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Institutional</div>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#about" className="hover:text-emerald-300 transition-colors">Our History Since 1982</a></li>
              <li><a href="#where-we-work" className="hover:text-emerald-300 transition-colors">Where We Work (8 Regions)</a></li>
              <li><a href="#projects" className="hover:text-emerald-300 transition-colors">Active Projects Directory</a></li>
              <li><a href="#tenders" className="hover:text-emerald-300 transition-colors">Public Tenders &amp; RFPs</a></li>
              <li><a href="#tenders" className="hover:text-emerald-300 transition-colors">Careers &amp; Job Openings</a></li>
              <li><a href="#tenders" className="hover:text-emerald-300 transition-colors">Annual Reports &amp; Audits</a></li>
              {onOpenBrandGuide && (
                <li>
                  <button
                    onClick={onOpenBrandGuide}
                    className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors cursor-pointer font-bold text-left pt-1"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Brand Standards Manual</span>
                  </button>
                </li>
              )}
              {onOpenBrandTest && (
                <li>
                  <button
                    onClick={onOpenBrandTest}
                    className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors cursor-pointer font-medium text-left"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Brand Test Route (/brand-test)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Field Updates</div>
            <p className="text-xs text-stone-300 font-medium font-serif">
              Receive quarterly programmatic dispatches and certified audit releases directly from Ethiopia.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-700 rounded-lg text-xs text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you. You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 bg-stone-800/80 border border-stone-600 rounded-lg text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#007B5F] font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#007B5F] hover:bg-[#005944] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Subscribe to Dispatches</span>
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
                <span>Make a Direct Gift</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright & Accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300 font-medium">
          <div>
            © {new Date().getFullYear()} ADRA Ethiopia (Adventist Development and Relief Agency). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors underline-offset-2 hover:underline">Safeguarding Policy</a>
            <a href="#about" className="hover:text-white transition-colors underline-offset-2 hover:underline">Whistleblower Integrity</a>
            <a href="#contact" className="hover:text-white transition-colors underline-offset-2 hover:underline">Privacy Notice</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
