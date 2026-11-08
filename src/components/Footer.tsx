import React, { useState } from 'react';
import { Mail, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenDonate }) => {
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
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Purpose Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 bg-white rounded-lg px-2 py-1 flex items-center justify-center shadow-xs">
                <img
                  src="/assets/aistudio/image_8111643e.png"
                  alt="ADRA Logo"
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  ADRA Ethiopia
                </span>
                <div className="text-[11px] uppercase tracking-widest text-amber-400">
                  Relief & Development Agency
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              The Adventist Development and Relief Agency (ADRA) Ethiopia is an autonomous non-profit organization established in 1982, dedicated to serving humanity with justice, compassion, and love.
            </p>

            <div className="text-xs text-stone-300 space-y-1 font-medium">
              <div>Registered under Civil Society Organizations Proclamation #1113/2019</div>
              <div>ACSO Registration Certificate No: 2049 · 42+ Years (Since 1982)</div>
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
              <li><a href="#tenders" className="hover:text-emerald-300 transition-colors">Public Tenders & RFPs</a></li>
              <li><a href="#tenders" className="hover:text-emerald-300 transition-colors">Careers & Job Openings</a></li>
              <li><a href="#tenders" className="hover:text-emerald-300 transition-colors">Annual Reports & Audits</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Field Updates</div>
            <p className="text-xs text-stone-300 font-medium">
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
                    className="w-full px-3 py-2 bg-stone-800 border border-stone-600 rounded-lg text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe to Dispatches</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-emerald-300 border border-stone-600 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-emerald-400 text-emerald-300" />
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
