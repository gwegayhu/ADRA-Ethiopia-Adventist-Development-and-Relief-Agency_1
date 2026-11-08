import React, { useState } from 'react';
import { 
  Droplets, 
  GraduationCap, 
  Sprout, 
  HeartPulse, 
  Zap, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { Sector, Language } from '../types';
import { SECTORS } from '../data/adraData';

interface FocusAreasProps {
  currentLang: Language;
  onSelectSectorForDonation: (sectorId: string) => void;
  onFilterProjectsBySector: (sectorTitle: string) => void;
}

export const FocusAreas: React.FC<FocusAreasProps> = ({ 
  currentLang, 
  onSelectSectorForDonation,
  onFilterProjectsBySector 
}) => {
  const [activeSectorId, setActiveSectorId] = useState<string>(SECTORS[0].id);

  const activeSector = SECTORS.find((s) => s.id === activeSectorId) || SECTORS[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Droplets': return <Droplets className="w-5 h-5 text-sky-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-600" />;
      case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-orange-600" />;
      default: return <Droplets className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="focus-areas" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span className="inline-block w-2 h-0.5 bg-emerald-700" />
            <span>{currentLang === 'en' ? 'Core Humanitarian Programs' : 'ዋና የሰብአዊ እና ልማት ፕሮግራሞች'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display">
            {currentLang === 'en' 
              ? 'Our 6 Pillars of Sustainable Community Transformation' 
              : 'ዘላቂ የማህበረሰብ ለውጥ 6 የልማት ምሰሶዎች'}
          </h2>
          <p className="mt-3 text-base text-stone-700 leading-relaxed font-normal">
            {currentLang === 'en'
              ? 'Over 80% of ADRA Ethiopia’s budget funds sustainable, community-led programs that construct durable infrastructure and foster economic self-reliance across Ethiopia.'
              : 'ከአድራ ኢትዮጵያ በጀት ከ80% በላይ የሚሆነው ዘላቂ መሠረተ-ልማቶችን ለመገንባት እና የህብረተሰቡን ራስን በራስ የማስተዳደር አቅም ለማሳደግ የሚውል ነው።'}
          </p>
        </div>

        {/* Sector Navigation Selector (Interactive Functional Tabs) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-stone-100 rounded-xl mb-10 border border-stone-200">
          {SECTORS.map((sector) => {
            const isSelected = sector.id === activeSectorId;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`flex items-center gap-2.5 px-3.5 py-3 rounded-lg text-left transition-all ${
                  isSelected 
                    ? 'bg-white text-stone-900 shadow-sm border border-stone-200 font-bold' 
                    : 'text-stone-700 hover:text-stone-950 hover:bg-white/80 font-semibold'
                }`}
              >
                <div className="shrink-0">{getIcon(sector.iconName)}</div>
                <span className="text-xs sm:text-sm line-clamp-1">
                  {currentLang === 'en' ? sector.title.split(' ')[0] : sector.titleAm.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Showcase Container */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <img
                src={activeSector.image}
                alt={activeSector.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:hidden" />
              
              {/* Floating verified badge in visual */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-md shadow-xs text-xs font-semibold text-emerald-900 border border-stone-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>{activeSector.activeProjectsCount} Active Field Interventions</span>
              </div>

              {/* Bottom tag on mobile */}
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Verified Impact</div>
                <div className="text-sm font-semibold">{activeSector.keyStats}</div>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                    {getIcon(activeSector.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                      {currentLang === 'en' ? activeSector.title : activeSector.titleAm}
                    </h3>
                    <div className="text-xs font-medium text-emerald-800">
                      {activeSector.keyStats}
                    </div>
                  </div>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {activeSector.description}
                </p>

                {/* Highlight Points */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    {currentLang === 'en' ? 'Core Methodologies & Field Activities' : 'ቁልፍ የተግባር መስኮች'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeSector.highlightPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectSectorForDonation(activeSector.id)}
                    className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2 shadow-2xs"
                  >
                    <Heart className="w-3.5 h-3.5 fill-emerald-200 text-emerald-200" />
                    <span>Support This Sector</span>
                  </button>

                  <button
                    onClick={() => onFilterProjectsBySector(activeSector.title)}
                    className="px-4 py-2.5 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-800" />
                  </button>
                </div>

                <div className="text-xs text-stone-700 font-medium flex items-center gap-1">
                  <span>UN SDG Alignment: Clean Water, Good Health, Zero Hunger</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
