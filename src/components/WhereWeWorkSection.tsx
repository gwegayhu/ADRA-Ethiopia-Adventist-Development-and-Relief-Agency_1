import React, { useState } from 'react';
import { 
  LifeBuoy, 
  Wheat, 
  Droplets, 
  HeartPulse, 
  GraduationCap, 
  TrendingUp,
  MapPin,
  Building,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { REGIONS_DATA } from '../data/adraData';
import { ActualGISMap } from './ActualGISMap';

interface WhereWeWorkSectionProps {
  currentLang: Language;
  onOpenDonate: (presetSector?: string) => void;
}

export const WhereWeWorkSection: React.FC<WhereWeWorkSectionProps> = ({ currentLang, onOpenDonate }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('somali');

  const selectedRegion = REGIONS_DATA.find((r) => r.id === selectedRegionId) || REGIONS_DATA[0];

  const sectorButtons = [
    { id: 'emergency', icon: <LifeBuoy className="w-4 h-4 text-[#006643]" />, label: 'Emergency Management', labelAm: 'የአደጋ ጊዜ አስተዳደር', labelOm: 'Hoggansa Balaa' },
    { id: 'food-security', icon: <Wheat className="w-4 h-4 text-[#006643]" />, label: 'Food Security & Livelihoods', labelAm: 'የምግብ ዋስትና እና ኑሮ', labelOm: 'Wabii Nyaataa fi Jireenya' },
    { id: 'wash', icon: <Droplets className="w-4 h-4 text-[#006643]" />, label: 'Water, Sanitation & Hygiene', labelAm: 'ውሃ፣ ንፅህናና ሳኒቴሽን', labelOm: 'Bishaan, Qulqullinaa fi Saaniteeshinii' },
    { id: 'health', icon: <HeartPulse className="w-4 h-4 text-[#006643]" />, label: 'Health & Nutrition', labelAm: 'ጤና እና ስነ-ምግብ', labelOm: 'Fayyaa fi Nyaata Madaalawaa' },
    { id: 'education', icon: <GraduationCap className="w-4 h-4 text-[#006643]" />, label: 'Education & Schools', labelAm: 'ትምህርት እና ት/ቤቶች', labelOm: 'Barnootaa fi Manneen Barumsaa' },
    { id: 'economic', icon: <TrendingUp className="w-4 h-4 text-[#006643]" />, label: 'Economic Growth & TVET', labelAm: 'ኢኮኖሚ እድገት እና ቲቪኢቲ', labelOm: 'Guddina Dinagdee fi TVET' }
  ];

  return (
    <section id="where-we-work" className="border-b border-stone-200 scroll-mt-20 bg-stone-50">
      
      {/* Dark Green Banner */}
      <div className="bg-[#073826] text-white py-14 sm:py-16 relative overflow-hidden">
        {/* Background photo overlay using verified public path */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/assets/images/ethiopia_highland_landscape_1792616589925.jpg"
            alt="Where We Work"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="text-xs text-stone-300 font-sans">
            Home &gt; Where We Work
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
              GIS GEOGRAPHIC OPERATIONS · WHERE WE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white">
            {currentLang === 'en' 
              ? selectedRegion.name.replace(' Region', '') 
              : currentLang === 'am' 
              ? selectedRegion.nameAm 
              : currentLang === 'om' && selectedRegion.nameOm 
              ? selectedRegion.nameOm 
              : selectedRegion.name}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 font-sans max-w-2xl leading-relaxed">
            {currentLang === 'en' 
              ? `Operational footprint and community-driven interventions across ${selectedRegion.name.replace(' Region', '')}. Explore live performance numbers, active woredas, and deep solar water stations.` 
              : currentLang === 'am'
              ? `አድራ ኢትዮጵያ በ${selectedRegion.nameAm} ከሚገኙ ማህበረሰቦች ጋር የሚያከናውናቸው የልማትና ሰብዓዊ ስራዎች።`
              : `Bakkeewwan hojii fi bu'aawwan qabatamaa ADRA Itoophiyaan ${selectedRegion.nameOm || selectedRegion.name} keessatti galmeessise.`}
          </p>

          {/* Region Switcher Pills */}
          <div className="pt-3 flex items-center gap-2 overflow-x-auto scrollbar-none pb-2">
            {REGIONS_DATA.map((region) => {
              const isSelected = region.id === selectedRegionId;
              const label =
                currentLang === 'am'
                  ? region.nameAm.replace(' ክልል', '')
                  : currentLang === 'om' && region.nameOm
                  ? region.nameOm.replace('Naannoo ', '')
                  : region.name.replace(' Region', '');
              return (
                <button
                  key={region.id}
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
          
          {/* GIS Map Integration replacing static/placeholder regional map */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006643]">
                  <Compass className="w-4 h-4 text-[#006643]" />
                  <span>Interactive Regional GIS Map</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-editorial mt-0.5">
                  Live Operations & Field Performance Numbers
                </h3>
              </div>
              <div className="text-xs text-stone-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60 font-medium">
                Roll pointer over any point mark to inspect on the left panel · Click to focus
              </div>
            </div>

            {/* Actual GIS Map Component */}
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
                    Operational Field Hub: {selectedRegion.fieldHub}
                  </span>
                  <span className="text-xs bg-emerald-50 text-[#006643] px-2.5 py-1 rounded-full font-bold">
                    Active Operations
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-editorial mt-1">
                  Our Work in {selectedRegion.name.replace(' Region', '')}
                </h3>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans mt-2">
                  {selectedRegion.summary}
                </p>
              </div>

              {/* 4-Stat Grid for This Region */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200">
                <div>
                  <div className="text-[11px] text-stone-700 font-bold uppercase tracking-wider">Beneficiaries</div>
                  <div className="text-lg sm:text-xl font-bold text-[#006643] tabular-nums font-editorial">
                    {selectedRegion.beneficiaries}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-stone-700 font-bold uppercase tracking-wider">Active Projects</div>
                  <div className="text-lg sm:text-xl font-bold text-stone-900 tabular-nums font-editorial">
                    {selectedRegion.activeProjectsCount} Ongoing
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-stone-700 font-bold uppercase tracking-wider">Solar Water Wells</div>
                  <div className="text-lg sm:text-xl font-bold text-amber-900 tabular-nums font-editorial">
                    {selectedRegion.solarWellsCount} Schemes
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-stone-700 font-bold uppercase tracking-wider">Field Woredas</div>
                  <div className="text-lg sm:text-xl font-bold text-stone-900 tabular-nums font-editorial">
                    {selectedRegion.woredasCount} Districts
                  </div>
                </div>
              </div>

              {/* Sectors Active Here */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-stone-900 font-editorial">
                  Programmatic Sectors Active in {selectedRegion.name.replace(' Region', '')}
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
                        {currentLang === 'am' ? sec.labelAm : currentLang === 'om' ? sec.labelOm : sec.label}
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
                  <span>Current Field Projects</span>
                </div>
                <div className="space-y-2">
                  {selectedRegion.activeProjects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-800 flex items-center justify-between gap-3"
                    >
                      <span className="font-medium">{proj}</span>
                      <span className="text-[11px] font-bold text-[#006643] bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Interventions Badges */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Strategic Field Interventions
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRegion.primaryInterventions.map((item, idx) => (
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
                  onClick={() => onOpenDonate()}
                  className="w-full py-3 bg-[#006643] hover:bg-[#073826] active:bg-[#004d32] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Support Projects in {selectedRegion.name.replace(' Region', '')}</span>
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
