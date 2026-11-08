/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import { Language } from './types';
import { MessageSquare, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeNavTab, setActiveNavTab] = useState<string>('home');
  const [whoWeAreSubTab, setWhoWeAreSubTab] = useState<string>('about-us');

  // Modals
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateInitialSector, setDonateInitialSector] = useState<string | undefined>(undefined);
  const [donateInitialAmount, setDonateInitialAmount] = useState<number | undefined>(undefined);
  
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

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

  const handleNavigateToSection = (sectionId: string) => {
    setActiveNavTab(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9faf9] text-stone-900 font-sans selection:bg-[#006643] selection:text-white">
      {/* Header conforming exactly to the attached screenshots */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenDonate={handleOpenDonate}
        onOpenChatbot={() => setIsChatbotOpen(true)}
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
      />

      {/* Floating Action AI Chatbot Trigger (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Subtle prompt teaser */}
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#006643] hover:bg-[#073826] active:bg-[#042418] text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-emerald-600/40"
          aria-label="Open ADRA AI Chatbot"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-amber-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#f59e0b] rounded-full ring-2 ring-[#006643]" />
          </div>
          <span className="text-xs font-bold tracking-wide hidden sm:inline font-sans">
            Ask ADRA AI Assistant
          </span>
        </button>
      </div>

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
