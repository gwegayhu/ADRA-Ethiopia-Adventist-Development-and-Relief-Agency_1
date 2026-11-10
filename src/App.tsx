/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { WhereWeWorkSection } from './components/WhereWeWorkSection';
import { StoriesFromField } from './components/StoriesFromField';
import { BlogsSection } from './components/BlogsSection';
import { AIForGoodSection } from './components/AIForGoodSection';
import { ImpactCalculator } from './components/ImpactCalculator';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TendersAndCareers } from './components/TendersAndCareers';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { ChatbotModal } from './components/ChatbotModal';
import { BrandStandardsModal } from './components/BrandStandardsModal';
import { BrandTestView } from './components/brand/BrandTestView';
import { Language } from './types';
import { MessageSquare, Heart, Sparkles, ShieldCheck, WifiOff, Wifi, Gauge, X } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    return (localStorage.getItem('adra-lang') as Language) || 'en';
  });
  const [activeNavTab, setActiveNavTab] = useState<string>('home');
  const [whoWeAreSubTab, setWhoWeAreSubTab] = useState<string>('about-us');
  const [currentView, setCurrentView] = useState<'portal' | 'brand-test'>('portal');

  // Network & PWA Resilience state
  const [isOffline, setIsOffline] = useState<boolean>(() => !navigator.onLine);
  const [isSimulatedOffline, setIsSimulatedOffline] = useState<boolean>(false);
  const [dismissOfflineBanner, setDismissOfflineBanner] = useState<boolean>(false);
  const [isDataSaver, setIsDataSaver] = useState<boolean>(() => {
    return localStorage.getItem('adra-data-saver') === 'true';
  });

  // Modals
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateInitialSector, setDonateInitialSector] = useState<string | undefined>(undefined);
  const [donateInitialAmount, setDonateInitialAmount] = useState<number | undefined>(undefined);
  
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isBrandGuideOpen, setIsBrandGuideOpen] = useState(false);

  // Sync language with HTML lang attribute and localStorage
  useEffect(() => {
    document.documentElement.lang = currentLang;
    localStorage.setItem('adra-lang', currentLang);
  }, [currentLang]);

  // Sync hash route (#/brand-test or #brand-test)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('brand-test')) {
        setCurrentView('brand-test');
      } else if (currentView === 'brand-test') {
        setCurrentView('portal');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentView]);

  // Online / offline listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setDismissOfflineBanner(false);
    };
    const handleOffline = () => {
      setIsOffline(true);
      setDismissOfflineBanner(false);
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleToggleLang = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleToggleDataSaver = () => {
    setIsDataSaver((prev) => {
      const next = !prev;
      localStorage.setItem('adra-data-saver', String(next));
      return next;
    });
  };

  const handleOpenBrandTest = () => {
    window.location.hash = '#/brand-test';
    setCurrentView('brand-test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortal = () => {
    window.location.hash = '';
    setCurrentView('portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDonate = (presetSector?: string, presetAmount?: number) => {
    setDonateInitialSector(presetSector);
    setDonateInitialAmount(presetAmount);
    setIsDonateOpen(true);
  };

  const handleCloseDonate = () => {
    setIsDonateOpen(false);
    setDonateInitialSector(undefined);
    setDonateInitialAmount(undefined);
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (currentView !== 'portal') {
      setCurrentView('portal');
      window.location.hash = '';
    }
    setActiveNavTab(sectionId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const activeOffline = isOffline || isSimulatedOffline;

  return (
    <div className={`min-h-screen flex flex-col bg-[#f9faf9] text-stone-900 font-sans selection:bg-[#007B5F] selection:text-white text-left ${isDataSaver ? 'adra-data-saver' : ''}`}>
      {/* Offline Banner matching PWA Low-Bandwidth Resilience requirements */}
      {activeOffline && !dismissOfflineBanner && (
        <aside 
          aria-label="Offline status banner"
          className="bg-[#54585A] text-white py-2 px-4 text-xs font-sans border-b border-stone-600 transition-all sticky top-0 z-50 shadow-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <WifiOff className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Offline Mode Active:</strong> You are browsing cached application resources. Forms and donation pledges are safely queued until network reconnects.
              </span>
              {isSimulatedOffline && (
                <span className="px-2 py-0.5 bg-amber-400 text-stone-900 font-bold rounded text-[10px] uppercase tracking-wider">
                  Simulation
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {isSimulatedOffline ? (
                <button
                  type="button"
                  onClick={() => setIsSimulatedOffline(false)}
                  className="px-2 py-0.5 bg-stone-700 hover:bg-stone-600 rounded text-[11px] font-medium text-amber-200 cursor-pointer"
                >
                  End Simulation
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => setDismissOfflineBanner(true)}
                className="p-1 text-stone-300 hover:text-white cursor-pointer"
                aria-label="Dismiss offline banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {currentView === 'brand-test' ? (
        /* Dedicated /brand-test Route: Demonstrates Logo variants, Color matrix with contrast ratios, 4-language typography scales, and signature devices */
        <BrandTestView
          onBack={handleBackToPortal}
          currentLang={currentLang}
          onLanguageChange={handleToggleLang}
          isOffline={activeOffline}
          onToggleOfflineSimulator={() => setIsSimulatedOffline((prev) => !prev)}
        />
      ) : (
        <>
          {/* Header conforming strictly to official ADRA Graphic Standards */}
          <Header
            currentLang={currentLang}
            onToggleLang={handleToggleLang}
            onOpenDonate={handleOpenDonate}
            onOpenChatbot={() => setIsChatbotOpen(true)}
            onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
            onOpenBrandTest={handleOpenBrandTest}
            activeNavTab={activeNavTab}
            setActiveNavTab={setActiveNavTab}
            whoWeAreSubTab={whoWeAreSubTab}
            setWhoWeAreSubTab={setWhoWeAreSubTab}
          />

          {/* Main Page Layout */}
          <main className="flex-grow">
            {/* Hero Section matching Screenshot 1 */}
            <Hero
              currentLang={currentLang}
              onOpenDonate={() => handleOpenDonate()}
              onExploreClick={() => handleNavigateToSection('what-we-do')}
              onPartnerClick={() => handleNavigateToSection('contact')}
            />

            {/* Who We Are Section matching Screenshots 4, 5, 6 with sub-navigation */}
            <WhoWeAreSection
              currentLang={currentLang}
              subTab={whoWeAreSubTab}
              setSubTab={setWhoWeAreSubTab}
            />

            {/* What We Do Section matching Screenshot 2 (6 core areas with circular badges) */}
            <WhatWeDoSection
              currentLang={currentLang}
              onOpenDonate={handleOpenDonate}
            />

            {/* Where We Work Section matching Screenshot 7 (Regional views + interactive SVG map) */}
            <WhereWeWorkSection
              currentLang={currentLang}
              onOpenDonate={handleOpenDonate}
            />

            {/* Programs / Flagship Humanitarian & Development Initiatives */}
            <div id="programs" className="scroll-mt-20">
              <div id="get-involved">
                <ProjectShowcase
                  currentLang={currentLang}
                  onOpenDonate={handleOpenDonate}
                />
              </div>
            </div>

            {/* Our Impact & See Your Impact Calculator */}
            <div id="our-impact" className="scroll-mt-20">
              <ImpactCalculator
                currentLang={currentLang}
                onDonateAmount={(amount) => handleOpenDonate(undefined, amount)}
              />
            </div>

            {/* Stories - Latest from the Field matching Screenshot 3 */}
            <StoriesFromField
              currentLang={currentLang}
              onOpenDonate={handleOpenDonate}
            />

            {/* Blogs Section - 5 rich field dispatches across Ethiopia */}
            <BlogsSection
              currentLang={currentLang}
              onOpenDonate={handleOpenDonate}
            />

            {/* AI for Good Section matching Screenshots 8 and 9 */}
            <AIForGoodSection
              currentLang={currentLang}
              onOpenChatbot={() => setIsChatbotOpen(true)}
            />

            {/* Work with Us / Tenders, RFPs, Careers & Publications */}
            <div id="work-with-us" className="scroll-mt-20">
              <TendersAndCareers
                currentLang={currentLang}
              />
            </div>

            {/* Contact Headquarters & Regional Coordination Hubs */}
            <ContactSection
              currentLang={currentLang}
            />
          </main>

          {/* Institutional Footer */}
          <Footer
            currentLang={currentLang}
            onOpenDonate={() => handleOpenDonate()}
            onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
            onOpenBrandTest={handleOpenBrandTest}
          />
        </>
      )}

      {/* Floating Action Triggers (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Data Saver Mode Indicator & Toggle */}
        <button
          onClick={handleToggleDataSaver}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold shadow-md transition-all cursor-pointer border ${
            isDataSaver
              ? 'bg-amber-100 text-amber-900 border-amber-300'
              : 'bg-white/95 text-stone-700 hover:text-stone-900 border-stone-200'
          }`}
          title="Toggle Data Saver Mode for low-bandwidth mobile connections"
        >
          <Gauge className="w-3.5 h-3.5 text-stone-600" />
          <span>Data Saver: {isDataSaver ? 'ON' : 'OFF'}</span>
        </button>

        {/* Brand Test Route Direct Trigger */}
        <button
          onClick={currentView === 'brand-test' ? handleBackToPortal : handleOpenBrandTest}
          className="group flex items-center gap-2 px-3.5 py-2 bg-[#231F20] hover:bg-black text-amber-300 hover:text-amber-200 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer border border-amber-400/40"
          aria-label="Toggle Brand Test and Design System Inspection View"
          title="Inspect ADRA Design System & Graphic Standards Compliance"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-[11px] font-bold tracking-wide font-sans">
            {currentView === 'brand-test' ? 'Exit Test View' : 'Brand Test (/brand-test)'}
          </span>
        </button>

        {/* Brand Standards Guide Trigger */}
        <button
          onClick={() => setIsBrandGuideOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-stone-50 active:bg-stone-100 text-[#007B5F] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#007B5F]/30"
          aria-label="Open ADRA Brand Standards & Style Guide"
          title="Open official ADRA Graphic Standards Manual"
        >
          <ShieldCheck className="w-4 h-4 text-[#007B5F]" />
          <span className="text-[11px] font-bold tracking-wide font-sans text-stone-800">
            Brand Standards
          </span>
        </button>

        {/* AI Assistant Trigger */}
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#007B5F] hover:bg-[#004D3A] active:bg-[#003326] text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-emerald-400/30"
          aria-label="Open ADRA AI Chatbot"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-amber-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#f59e0b] rounded-full ring-2 ring-[#007B5F]" />
          </div>
          <span className="text-xs font-bold tracking-wide hidden sm:inline font-sans">
            Ask ADRA AI Assistant
          </span>
        </button>
      </div>

      {/* Brand Standards Manual Modal */}
      <BrandStandardsModal
        isOpen={isBrandGuideOpen}
        onClose={() => setIsBrandGuideOpen(false)}
      />

      {/* Chatbot Modal - linking information sources across all website contents */}
      <ChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        currentLang={currentLang}
        onNavigateToSection={handleNavigateToSection}
        onOpenDonate={handleOpenDonate}
      />

      {/* Donation Modal - linked directly with TeleBirr & CBE Birr Apps */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={handleCloseDonate}
        currentLang={currentLang}
        initialSector={donateInitialSector}
        initialAmount={donateInitialAmount}
      />
    </div>
  );
}
