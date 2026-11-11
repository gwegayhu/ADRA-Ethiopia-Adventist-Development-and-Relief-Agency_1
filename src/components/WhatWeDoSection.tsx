import React, { useState, useEffect } from 'react';
import {
  LifeBuoy,
  Wheat,
  Droplets,
  HeartPulse,
  GraduationCap,
  TrendingUp,
  ArrowUpRight,
  X,
  CheckCircle,
  Heart,
  Compass,
  MapPin,
  Users,
  Sparkles,
  Quote,
  Building,
  Leaf,
  Handshake
} from 'lucide-react';
import { Language } from '../types';
import { FOCUS_AREAS_DATA, FocusAreaData } from '../data/focusAreasData';
import { UI_COPY } from '../data/uiCopy';
import { TRANSLATIONS, pickLang } from '../data/translations';

interface WhatWeDoSectionProps {
  currentLang: Language;
  onOpenDonate: (presetSector?: string) => void;
}

const AREA_ICONS: Record<FocusAreaData['id'], React.ReactNode> = {
  education: <GraduationCap className="w-5 h-5 text-[#007B5F]" />,
  health: <HeartPulse className="w-5 h-5 text-[#007B5F]" />,
  livelihood: <Wheat className="w-5 h-5 text-[#007B5F]" />,
  'disaster-response': <LifeBuoy className="w-5 h-5 text-[#007B5F]" />,
  wash: <Droplets className="w-5 h-5 text-[#007B5F]" />,
  'economic-growth': <TrendingUp className="w-5 h-5 text-[#007B5F]" />,
  'peace-building': <Handshake className="w-5 h-5 text-[#007B5F]" />
};

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ currentLang, onOpenDonate }) => {
  const [selectedAreaId, setSelectedAreaId] = useState<FocusAreaData['id'] | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [modalTab, setModalTab] = useState<'overview' | 'impact' | 'story'>('overview');

  const t = UI_COPY[currentLang].whatWeDo;
  const c = UI_COPY[currentLang].common;
  const nav = TRANSLATIONS[currentLang].nav;

  const selectedArea = selectedAreaId
    ? FOCUS_AREAS_DATA.find((a) => a.id === selectedAreaId) ?? null
    : null;

  useEffect(() => {
    const handleOpenAreaEvent = (e: CustomEvent<string>) => {
      const rawId = e.detail;
      const normalizedId =
        rawId === 'livelihoods' ? 'livelihood' :
        rawId === 'disaster' ? 'disaster-response' :
        rawId;
      const target = FOCUS_AREAS_DATA.find((a) => a.id === normalizedId);
      if (target) {
        setModalTab('overview');
        setSelectedAreaId(target.id);
        document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('adra-open-area' as any, handleOpenAreaEvent);
    return () => window.removeEventListener('adra-open-area' as any, handleOpenAreaEvent);
  }, []);

  const filteredAreas = activeFilter === 'all'
    ? FOCUS_AREAS_DATA
    : FOCUS_AREAS_DATA.filter((a) => a.id === activeFilter);

  const filterTabs = [
    { id: 'all', label: t.tabs.all },
    { id: 'wash', label: t.tabs.wash },
    { id: 'health', label: t.tabs.health },
    { id: 'livelihood', label: t.tabs.livelihood },
    { id: 'education', label: t.tabs.education },
    { id: 'disaster-response', label: t.tabs.disaster },
    { id: 'economic-growth', label: t.tabs.energy },
    { id: 'peace-building', label: t.tabs.peace }
  ];

  return (
    <section id="what-we-do" className="border-b border-stone-200 scroll-mt-20">

      {/* Top Emerald Banner */}
      <div className="bg-[#004D3A] text-white py-16 sm:py-20 relative overflow-hidden text-left">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/adra_hero_community_1792612495148.jpg"
            alt={nav.whatWeDo}
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004D3A] via-[#004D3A]/90 to-[#004D3A]/75" />

          <div className="absolute bottom-2 right-4 text-[9px] font-sans text-white/70 select-none">
            {c.photoCredit}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans flex items-center gap-2">
            <span>{c.home}</span>
            <span>&gt;</span>
            <span className="text-white font-semibold">{nav.whatWeDo}</span>
            <span>·</span>
            <span className="font-motto text-sm text-emerald-200">{c.motto}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
              {t.kicker}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-sans leading-tight text-white max-w-3xl">
            {t.bannerTitle}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-serif">
            {t.bannerSubtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#focus-areas-grid"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('focus-areas-grid')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-full shadow-xs cursor-pointer transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>{t.exploreCta}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Focus Areas Content */}
      <div id="focus-areas-grid" className="py-16 sm:py-20 bg-[#f4f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header with Filter Pills */}
          <div className="flex flex-col gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="text-xs font-bold tracking-widest text-[#007B5F] uppercase mb-2">
                {t.pillarsEyebrow}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight font-editorial leading-tight">
                {t.pillarsTitle}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                {t.pillarsSubtitle}
              </p>
            </div>

            {/* Program Quick Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#007B5F] text-white shadow-xs'
                      : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAreas.map((area, idx) => {
              const title = pickLang(currentLang, area.title);
              const tagline = pickLang(currentLang, area.tagline);
              const description = pickLang(currentLang, area.description);
              const metrics = pickLang(currentLang, area.metrics);
              const isFeaturedFullRow = filteredAreas.length === 7 && idx === 6;

              if (isFeaturedFullRow) {
                return (
                  <div
                    key={area.id}
                    onClick={() => {
                      setModalTab('overview');
                      setSelectedAreaId(area.id);
                    }}
                    className="md:col-span-2 lg:col-span-3 bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all group cursor-pointer grid grid-cols-1 md:grid-cols-12"
                  >
                    {/* Left Image Pane */}
                    <div className="md:col-span-5 relative aspect-[16/10] md:aspect-auto md:min-h-[260px] overflow-hidden bg-stone-100">
                      <img
                        src={area.image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs border border-stone-200">
                        {AREA_ICONS[area.id]}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 max-w-[90%] truncate bg-[#073826]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                        {tagline}
                      </div>
                    </div>

                    {/* Right Copy & Stats Pane */}
                    <div className="md:col-span-7 flex flex-col justify-between">
                      <div className="p-6 sm:p-8 space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-editorial group-hover:text-[#007B5F] transition-colors">
                            {title}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-[#007B5F] transition-colors shrink-0 mt-1" />
                        </div>

                        <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                          {description}
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                          {area.stats.map((st, sIdx) => (
                            <div key={sIdx} className="bg-stone-50 px-3 py-2 rounded-xl border border-stone-200/80">
                              <div className="text-sm sm:text-base font-bold text-[#007B5F] font-editorial">
                                {pickLang(currentLang, st.value)}
                              </div>
                              <div className="text-[11px] text-stone-600 font-medium leading-tight">
                                {pickLang(currentLang, st.label)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="px-6 sm:px-8 py-4 border-t border-stone-100 flex items-center justify-between text-xs bg-stone-50/50">
                        <div className="font-semibold text-[#007B5F] flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{metrics}</span>
                        </div>
                        <span className="font-bold text-amber-600 group-hover:underline whitespace-nowrap">{c.exploreArrow} &rarr;</span>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={area.id}
                  onClick={() => {
                    setModalTab('overview');
                    setSelectedAreaId(area.id);
                  }}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container with circular icon badge */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={area.image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs border border-stone-200">
                        {AREA_ICONS[area.id]}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 max-w-[90%] truncate bg-[#073826]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                        {tagline}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-stone-900 font-editorial group-hover:text-[#007B5F] transition-colors flex items-center gap-1.5">
                          <span>{title}</span>
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-[#007B5F] transition-colors shrink-0" />
                      </div>

                      <p className="text-sm text-stone-700 leading-relaxed font-sans line-clamp-3">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Proof Tag + Read Dossier CTA */}
                  <div className="px-6 pb-5 pt-1 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div className="font-semibold text-[#007B5F] flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate max-w-[190px]">{metrics}</span>
                    </div>
                    <span className="font-bold text-amber-600 group-hover:underline whitespace-nowrap">{c.exploreArrow} &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cross-Cutting Themes Panel */}
          <div className="mt-16 bg-white rounded-2xl border border-stone-200/90 p-8 sm:p-10 shadow-xs space-y-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007B5F] mb-2 font-sans">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>{t.crossEyebrow}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-editorial">
                {t.crossTitle}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {t.crossSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Theme 1: Environmental Awareness & Climate Action */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-stone-50 to-white border border-emerald-100/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 font-editorial">
                      {t.envTitle}
                    </h4>
                    <div className="text-xs text-emerald-800 font-semibold">{t.envSub}</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {t.envIntro}
                </p>

                <ul className="space-y-2.5 text-xs text-stone-700">
                  {t.envBullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>{item.title}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Theme 2: Gender Mainstreaming & Disability Inclusion */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/70 via-stone-50 to-white border border-amber-100/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 font-editorial">
                      {t.genderTitle}
                    </h4>
                    <div className="text-xs text-amber-800 font-semibold">{t.genderSub}</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {t.genderIntro}
                </p>

                <ul className="space-y-2.5 text-xs text-stone-700">
                  {t.genderBullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>{item.title}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Rich Program Dossier Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6 max-h-[92vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-stone-200">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  {AREA_ICONS[selectedArea.id]}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#007B5F] uppercase tracking-wider">
                    {t.modalFlagshipBadge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-editorial mt-0.5">
                    {pickLang(currentLang, selectedArea.title)}
                  </h3>
                  <div className="text-xs text-amber-600 font-semibold mt-0.5">
                    {pickLang(currentLang, selectedArea.tagline)}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAreaId(null)}
                className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
                aria-label={c.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Sub-Tabs */}
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2 overflow-x-auto">
              <button
                type="button"
                onClick={() => setModalTab('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  modalTab === 'overview'
                    ? 'bg-[#007B5F] text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {t.tabOverview}
              </button>
              <button
                type="button"
                onClick={() => setModalTab('impact')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  modalTab === 'impact'
                    ? 'bg-[#007B5F] text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {t.tabImpact}
              </button>
              <button
                type="button"
                onClick={() => setModalTab('story')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  modalTab === 'story'
                    ? 'bg-[#007B5F] text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {t.tabStory}
              </button>
            </div>

            {/* Modal Body Tab 1: Overview */}
            {modalTab === 'overview' && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                    <img
                      src={selectedArea.image}
                      alt={pickLang(currentLang, selectedArea.title)}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {selectedArea.secondaryImage && (
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 hidden sm:block">
                      <img
                        src={selectedArea.secondaryImage}
                        alt={pickLang(currentLang, selectedArea.title)}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    {t.narrativeLabel}
                  </div>
                  <p className="text-stone-800 text-sm leading-relaxed font-sans">
                    {pickLang(currentLang, selectedArea.fullNarrative)}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {selectedArea.stats.map((s, idx) => (
                    <div key={idx} className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                      <div className="text-lg sm:text-xl font-bold text-[#007B5F] font-editorial">
                        {pickLang(currentLang, s.value)}
                      </div>
                      <div className="text-[11px] text-stone-600 font-medium leading-tight mt-0.5">
                        {pickLang(currentLang, s.label)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Body Tab 2: Key Interventions */}
            {modalTab === 'impact' && (
              <div className="space-y-5">
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    {t.verifiedInterventions}
                  </div>
                  <div className="space-y-2.5">
                    {pickLang(currentLang, selectedArea.details).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800">
                        <CheckCircle className="w-4 h-4 text-[#007B5F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/80">
                    <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#007B5F]" />
                      <span>{t.activeWoredasLabel}</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {pickLang(currentLang, selectedArea.activeWoredas)}
                    </p>
                  </div>

                  <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80">
                    <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                      <Building className="w-3.5 h-3.5 text-amber-700" />
                      <span>{t.partnersLabel}</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {pickLang(currentLang, selectedArea.partners).join(' · ')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Body Tab 3: Spotlight Story */}
            {modalTab === 'story' && selectedArea.spotlightStory && (
              <div className="space-y-5">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                  <img
                    src={selectedArea.image}
                    alt={pickLang(currentLang, selectedArea.spotlightStory.author)}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <div className="text-xs font-bold text-amber-300">
                        {pickLang(currentLang, selectedArea.spotlightStory.location)}
                      </div>
                      <div className="text-sm font-semibold">
                        {pickLang(currentLang, selectedArea.spotlightStory.author)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                  <Quote className="w-6 h-6 text-[#007B5F] opacity-60" />
                  <p className="text-sm sm:text-base text-stone-800 italic leading-relaxed font-editorial">
                    &ldquo;{pickLang(currentLang, selectedArea.spotlightStory.quote)}&rdquo;
                  </p>
                  <div className="text-xs font-bold text-[#007B5F] pt-1 border-t border-stone-200">
                    — {pickLang(currentLang, selectedArea.spotlightStory.author)} · {pickLang(currentLang, selectedArea.spotlightStory.location)}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  const secId = selectedArea.id;
                  setSelectedAreaId(null);
                  onOpenDonate(secId);
                }}
                className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-lg flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                <span>{t.supportTelebirrBtn}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedAreaId(null)}
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold rounded-lg cursor-pointer"
              >
                {t.closeDossierBtn}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
