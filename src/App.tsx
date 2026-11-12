/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import {
  MissionMottoSection,
  FeaturedBandSection,
  ImpactFourPillarsBand,
  LatestNewsGridSection,
} from './components/HomeTemplateSections';
import { WaysToGivePage } from './components/WaysToGivePage';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { WhereWeWorkSection } from './components/WhereWeWorkSection';
import { StoriesFromField } from './components/StoriesFromField';
import { BlogsSection } from './components/BlogsSection';
import { AIForGoodSection } from './components/AIForGoodSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TendersAndCareers } from './components/TendersAndCareers';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { ChatbotModal } from './components/ChatbotModal';
import { SearchModal, CorePageId } from './components/SearchModal';
import { BrandTestView } from './components/brand/BrandTestView';
import { Language } from './types';
import { UI_COPY } from './data/uiCopy';
import { MessageSquare, WifiOff, X } from 'lucide-react';

const parseHashToPage = (hash: string): CorePageId => {
  const clean = hash.toLowerCase();
  if (clean.includes('brand-test')) return 'brand-test';
  if (clean.includes('/impact') || clean === '#impact') return 'impact';
  if (clean.includes('/ways-to-give') || clean === '#ways-to-give') return 'ways-to-give';
  if (clean.includes('/about') || clean === '#about' || clean === '#who-we-are') return 'about';
  if (clean.includes('/media') || clean === '#media' || clean === '#blogs' || clean === '#stories') return 'media';
  if (clean.includes('/contact') || clean === '#contact') return 'contact';
  return 'home';
};

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    return (localStorage.getItem('adra-lang') as Language) || 'en';
  });
  const [activePage, setActivePage] = useState<CorePageId>(() =>
    parseHashToPage(window.location.hash)
  );
  const [activeImpactPillar, setActiveImpactPillar] = useState<string | undefined>(undefined);
  const [whoWeAreSubTab, setWhoWeAreSubTab] = useState<string>('about-us');

  // Network & PWA Resilience state
  const [isOffline, setIsOffline] = useState<boolean>(() => !navigator.onLine);
  const [isSimulatedOffline, setIsSimulatedOffline] = useState<boolean>(false);
  const [dismissOfflineBanner, setDismissOfflineBanner] = useState<boolean>(false);

  // Modals
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateInitialSector, setDonateInitialSector] = useState<string | undefined>(undefined);
  const [donateInitialAmount, setDonateInitialAmount] = useState<number | undefined>(undefined);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = currentLang;
    localStorage.setItem('adra-lang', currentLang);
  }, [currentLang]);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(parseHashToPage(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  const handleNavigatePage = useCallback(
    (page: CorePageId, options?: { subSection?: string; pillarId?: string }) => {
      setActivePage(page);
      if (page === 'home') {
        window.location.hash = '';
      } else if (page === 'brand-test') {
        window.location.hash = 'brand-test';
      } else {
        window.location.hash = `/${page}`;
      }

      if (page === 'about' && options?.subSection) {
        setWhoWeAreSubTab(options.subSection);
      }

      if (page === 'impact' && options?.pillarId) {
        setActiveImpactPillar(options.pillarId);
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('adra-open-area', { detail: options.pillarId }));
        }, 120);
        return;
      }

      if (options?.subSection) {
        setTimeout(() => {
          const el = document.getElementById(options.subSection!);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    []
  );

  const handleNavigateToSection = useCallback(
    (sectionId: string) => {
      const cleanId = sectionId.replace(/^#/, '');
      if (cleanId === 'who-we-are' || cleanId === 'work-with-us') {
        handleNavigatePage('about', { subSection: cleanId });
      } else if (cleanId === 'what-we-do' || cleanId === 'where-we-work' || cleanId === 'programs') {
        handleNavigatePage('impact', { subSection: cleanId });
      } else if (cleanId === 'our-impact' || cleanId === 'impact-calculator' || cleanId === 'ai-for-good') {
        handleNavigatePage('ways-to-give', { subSection: cleanId });
      } else if (cleanId === 'blogs' || cleanId === 'stories') {
        handleNavigatePage('media', { subSection: cleanId });
      } else if (cleanId === 'contact') {
        handleNavigatePage('contact', { subSection: 'contact' });
      } else {
        handleNavigatePage('home');
      }
    },
    [handleNavigatePage]
  );

  const activeOffline = isOffline || isSimulatedOffline;
  const appUi = (UI_COPY[currentLang] || UI_COPY.en).app;

  if (activePage === 'brand-test') {
    return (
      <div className="min-h-screen flex flex-col bg-white text-[#231F20] font-sans text-left">
        <BrandTestView
          onBack={() => handleNavigatePage('home')}
          currentLang={currentLang}
          onLanguageChange={handleToggleLang}
          isOffline={activeOffline}
          onToggleOfflineSimulator={() => setIsSimulatedOffline((prev) => !prev)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#231F20] font-sans selection:bg-[#007B5F] selection:text-white text-left">
      {/* Offline Banner for Low-Bandwidth PWA Resilience */}
      {activeOffline && !dismissOfflineBanner && (
        <aside
          aria-label={appUi.offlineBannerAria}
          className="bg-[#54585A] text-white py-2 px-4 text-xs font-sans border-b border-stone-600 sticky top-0 z-50 shadow-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <WifiOff className="w-4 h-4 text-amber-300 shrink-0" />
              <span>
                <strong>{appUi.offlineActive}</strong> {appUi.offlineMsg}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setDismissOfflineBanner(true)}
              className="p-1 text-stone-300 hover:text-white cursor-pointer"
              aria-label={appUi.dismissOfflineAria}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* Global Template Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
        onOpenDonate={handleOpenDonate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Core Page Router Content */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            <Hero
              currentLang={currentLang}
              onExploreImpact={(pillarId) => handleNavigatePage('impact', { pillarId })}
              onOpenDonate={(sector) => handleOpenDonate(sector)}
            />

            <MissionMottoSection
              currentLang={currentLang}
              onAboutClick={() => handleNavigatePage('about')}
            />

            <FeaturedBandSection
              currentLang={currentLang}
              onNavigatePage={handleNavigatePage}
              onOpenDonate={handleOpenDonate}
            />

            <ImpactFourPillarsBand
              currentLang={currentLang}
              onSelectPillar={(pillarId) => handleNavigatePage('impact', { pillarId })}
              onViewAllPillars={() => handleNavigatePage('impact', { subSection: 'what-we-do' })}
            />

            <LatestNewsGridSection
              currentLang={currentLang}
              onOpenDonate={(sector) => handleOpenDonate(sector)}
              onViewAllMedia={() => handleNavigatePage('media')}
              maxCards={2}
            />
          </>
        )}

        {activePage === 'impact' && (
          <>
            <ImpactFourPillarsBand
              currentLang={currentLang}
              activePillarId={activeImpactPillar}
              onSelectPillar={(pillarId) => {
                setActiveImpactPillar(pillarId);
                window.dispatchEvent(new CustomEvent('adra-open-area', { detail: pillarId }));
              }}
              onViewAllPillars={() => {
                setActiveImpactPillar(undefined);
                document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <WhatWeDoSection
              currentLang={currentLang}
              onOpenDonate={handleOpenDonate}
            />

            <WhereWeWorkSection
              currentLang={currentLang}
              onOpenDonate={handleOpenDonate}
            />

            <div id="programs" className="scroll-mt-20">
              <ProjectShowcase
                currentLang={currentLang}
                onOpenDonate={handleOpenDonate}
              />
            </div>
          </>
        )}

        {activePage === 'ways-to-give' && (
          <>
            <WaysToGivePage
              currentLang={currentLang}
              onOpenDonate={handleOpenDonate}
            />
            <AIForGoodSection
              currentLang={currentLang}
              onOpenChatbot={() => setIsChatbotOpen(true)}
            />
          </>
        )}

        {activePage === 'about' && (
          <>
            <WhoWeAreSection
              currentLang={currentLang}
              subTab={whoWeAreSubTab}
              setSubTab={setWhoWeAreSubTab}
            />
            <div id="work-with-us" className="scroll-mt-20">
              <TendersAndCareers currentLang={currentLang} />
            </div>
          </>
        )}

        {activePage === 'media' && (
          <>
            <LatestNewsGridSection
              currentLang={currentLang}
              onOpenDonate={(sector) => handleOpenDonate(sector)}
              maxCards={4}
            />
            <BlogsSection
              currentLang={currentLang}
              onOpenDonate={handleOpenDonate}
            />
            <StoriesFromField
              currentLang={currentLang}
              onOpenDonate={handleOpenDonate}
            />
          </>
        )}

        {activePage === 'contact' && (
          <ContactSection currentLang={currentLang} />
        )}
      </main>

      {/* Global ADRA Template Footer */}
      <Footer
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onNavigatePage={handleNavigatePage}
      />

      {/* Floating ADRA AI Action Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsChatbotOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#007B5F] hover:bg-[#00614A] active:bg-[#004D3A] text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/25"
          aria-label={appUi.openAdraAiAria}
        >
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="text-xs font-bold tracking-[0.05em] uppercase font-sans">
            ADRA AI
          </span>
        </button>
      </div>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        currentLang={currentLang}
        onNavigatePage={handleNavigatePage}
        onOpenDonate={handleOpenDonate}
      />

      {/* ADRA AI Modal */}
      <ChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        currentLang={currentLang}
        onNavigateToSection={handleNavigateToSection}
        onOpenDonate={handleOpenDonate}
      />

      {/* Donation Modal (TeleBirr / CBE Birr / International) */}
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
