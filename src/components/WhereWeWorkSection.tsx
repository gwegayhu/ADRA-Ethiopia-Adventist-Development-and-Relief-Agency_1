import React, { useState } from 'react';
import {
  LifeBuoy,
  Wheat,
  Droplets,
  HeartPulse,
  GraduationCap,
  TrendingUp,
  Building,
  Compass,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { REGIONS_DATA, getLocalizedRegion } from '../data/adraData';
import { UI_COPY } from '../data/uiCopy';
import { TRANSLATIONS } from '../data/translations';
import { ActualGISMap } from './ActualGISMap';

interface WhereWeWorkSectionProps {
  currentLang: Language;
  onOpenDonate: (presetSector?: string) => void;
}

const formatRegionPillLabel = (fullName: string, lang: Language): string => {
  if (lang === 'am') return fullName.replace(/^የ/, '').replace(/ ክልል$/, '');
  if (lang === 'om') return fullName.replace(/^Naannoo /, '');
  if (lang === 'ti') return fullName.replace(/^ክልል /, '');
  return fullName.replace(/ Region$/, '');
};

export const WhereWeWorkSection: React.FC<WhereWeWorkSectionProps> = ({ currentLang, onOpenDonate }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('somali');

  const selectedRegion = REGIONS_DATA.find((r) => r.id === selectedRegionId) || REGIONS_DATA[0];
  const locRegion = getLocalizedRegion(selectedRegion, currentLang);

  const www = UI_COPY[currentLang].whereWeWork;
  const c = UI_COPY[currentLang].common;
  const nav = TRANSLATIONS[currentLang].nav;

  const pillLabel = formatRegionPillLabel(locRegion.name, currentLang);
  const regionForAmBe = locRegion.name.replace(/^የ/, '');
  const bannerSubtitle = www.bannerSubtitleTemplate.replace(
    '{region}',
    currentLang === 'am' ? regionForAmBe : locRegion.name
  );

  const sectorButtons = [
    { id: 'emergency', icon: <LifeBuoy className="w-4 h-4 text-[#006643]" />, label: www.sectorButtons.emergency },
    { id: 'food-security', icon: <Wheat className="w-4 h-4 text-[#006643]" />, label: www.sectorButtons.foodSecurity },
    { id: 'wash', icon: <Droplets className="w-4 h-4 text-[#006643]" />, label: www.sectorButtons.wash },
    { id: 'health', icon: <HeartPulse className="w-4 h-4 text-[#006643]" />, label: www.sectorButtons.health },
    { id: 'education', icon: <GraduationCap className="w-4 h-4 text-[#006643]" />, label: www.sectorButtons.education },
    { id: 'economic', icon: <TrendingUp className="w-4 h-4 text-[#006643]" />, label: www.sectorButtons.economic }
  ];

  const sectorsHeading =
    currentLang === 'am' || currentLang === 'ti'
      ? `${www.sectorsHeadingPrefix} (${pillLabel})`
      : currentLang === 'om' && locRegion.name.startsWith('Naannoo ')
      ? `${www.sectorsHeadingPrefix} ${locRegion.name.replace(/^Naannoo /, '')}`
      : `${www.sectorsHeadingPrefix} ${locRegion.name}`;

  const supportRegionBtnText =
    currentLang === 'am'
      ? `${www.supportRegionPrefix}${regionForAmBe}`
      : `${www.supportRegionPrefix} ${locRegion.name}`;

  const ourWorkInTitle =
    currentLang === 'am'
      ? `${www.ourWorkInPrefix}${regionForAmBe}`
      : `${www.ourWorkInPrefix} ${locRegion.name}`;

  return (
    <section id="where-we-work" className="border-b border-stone-200 scroll-mt-20 bg-stone-50">

      {/* Dark Green Banner */}
      <div className="bg-[#073826] text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/assets/images/ethiopia_highland_landscape_1792616589925.jpg"
            alt={nav.whereWeWork}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="text-xs text-stone-300 font-sans">
            {c.home} &gt; {nav.whereWeWork}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
              {www.kicker}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white">
            {locRegion.name}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 font-sans max-w-2xl leading-relaxed">
            {bannerSubtitle}
          </p>

          {/* Region Switcher Pills */}
          <div className="pt-3 flex items-center gap-2 overflow-x-auto scrollbar-none pb-2">
            {REGIONS_DATA.map((region) => {
              const isSelected = region.id === selectedRegionId;
              const rLoc = getLocalizedRegion(region, currentLang);
              const label = formatRegionPillLabel(rLoc.name, currentLang);
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setSelectedRegionId(region.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#f59e0b] text-stone-950 font-bold shadow-xs'
                      : 'bg-white/10 hover:bg-white/20 text-stone-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* GIS Map Integration */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006643]">
                  <Compass className="w-4 h-4 text-[#006643]" />
                  <span>{www.gisSubheading}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-editorial mt-0.5">
                  {www.gisHeading}
                </h3>
              </div>
              <div className="text-xs text-stone-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60 font-medium">
                {www.gisHint}
              </div>
            </div>

            <ActualGISMap
              regions={REGIONS_DATA}
              selectedRegionId={selectedRegionId}
              onSelectRegion={(id) => setSelectedRegionId(id)}
              currentLang={currentLang}
            />
          </div>

          {/* Regional Deep Dive Details Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs">

            {/* Left 7 Columns: Narrative, Key Figures, and Active Sectors */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-wider text-[#006643] font-bold">
                    {www.fieldHubLabel} {locRegion.fieldHub}
                  </span>
                  <span className="text-xs bg-emerald-50 text-[#006643] px-2.5 py-1 rounded-full font-bold whitespace-nowrap">
                    {www.activeOpsBadge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-editorial mt-1">
                  {ourWorkInTitle}
                </h3>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans mt-2">
                  {locRegion.summary}
                </p>
              </div>

              {/* 4-Stat Grid for This Region */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200">
                <div>
                  <div className="text-[11px] text-stone-700 font-bold uppercase tracking-wider">{www.statBeneficiaries}</div>
                  <div className="text-lg sm:text-xl font-bold text-[#006643] tabular-nums font-editorial">
                    {locRegion.beneficiaries}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-stone-700 font-bold uppercase tracking-wider">{www.statActiveProjects}</div>
                  <div className="text-lg sm:text-xl font-bold text-stone-900 tabular-nums font-editorial">
                    {selectedRegion.activeProjectsCount} {www.statOngoingUnit}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-stone-700 font-bold uppercase tracking-wider">{www.statSolarWells}</div>
                  <div className="text-lg sm:text-xl font-bold text-amber-900 tabular-nums font-editorial">
                    {selectedRegion.solarWellsCount} {www.statSchemesUnit}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-stone-700 font-bold uppercase tracking-wider">{www.statWoredas}</div>
                  <div className="text-lg sm:text-xl font-bold text-stone-900 tabular-nums font-editorial">
                    {selectedRegion.woredasCount} {www.statDistrictsUnit}
                  </div>
                </div>
              </div>

              {/* Sectors Active Here */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-stone-900 font-editorial">
                  {sectorsHeading}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {sectorButtons.map((sec) => (
                    <div
                      key={sec.id}
                      onClick={() => onOpenDonate(sec.id)}
                      className="p-3 rounded-xl border border-stone-200 hover:border-[#006643] bg-stone-50/70 hover:bg-white transition-all cursor-pointer flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        {sec.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-stone-800 group-hover:text-[#006643] transition-colors">
                        {sec.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Active Field Projects & Primary Interventions */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-stone-200 lg:pl-8">

              {/* Ongoing Projects in this Region */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700">
                  <Building className="w-4 h-4 text-[#006643]" />
                  <span>{www.currentProjectsLabel}</span>
                </div>
                <div className="space-y-2">
                  {locRegion.activeProjects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-800 flex items-center justify-between gap-3"
                    >
                      <span className="font-medium">{proj}</span>
                      <span className="text-[11px] font-bold text-[#006643] bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0">
                        {c.active}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Interventions Badges */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  {www.strategicInterventionsLabel}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {locRegion.primaryInterventions.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-stone-100 text-stone-800 px-3 py-1.5 rounded-lg border border-stone-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Regional Support CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenDonate()}
                  className="w-full py-3 bg-[#006643] hover:bg-[#073826] active:bg-[#004d32] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <span>{supportRegionBtnText}</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
