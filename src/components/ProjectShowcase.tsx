import React, { useState } from 'react';
import { Search, MapPin, Users, Hammer, BookOpen, Layers, CheckCircle, X, Heart, ExternalLink, Sparkles, AlertCircle, Table, LayoutGrid, Layers3 } from 'lucide-react';
import { Language } from '../types';
import {
  PROJECTS,
  getLocalizedProject,
  getLocalizedSectorName
} from '../data/adraData';
import { UI_COPY } from '../data/uiCopy';
import { TRANSLATIONS, pickLang } from '../data/translations';

interface ProjectShowcaseProps {
  currentLang: Language;
  selectedSectorFilter?: string;
  onOpenDonate: (presetSector?: string) => void;
}

interface RegionalGroup {
  id: string;
  number: number;
  name: Record<Language, string>;
  shortLabel: Record<Language, string>;
  tagline: Record<Language, string>;
  projectNos: number[];
}

const REGIONAL_GROUPS: RegionalGroup[] = [
  {
    id: 'oromia',
    number: 1,
    name: {
      en: 'Oromia Region',
      am: 'የኦሮሚያ ክልል',
      om: 'Naannoo Oromiyaa',
      ti: 'ክልል ኦሮሚያ'
    },
    shortLabel: {
      en: 'Oromia',
      am: 'ኦሮሚያ',
      om: 'Oromiyaa',
      ti: 'ኦሮሚያ'
    },
    tagline: {
      en: 'Formal & TVET education infrastructure integration across Central Rift Valley woredas.',
      am: 'በመካከለኛው ስምጥ ሸለቆ ወረዳዎች የተቀናጀ መደበኛና የቴክኒክ ትምህርት መሰረተ ልማት።',
      om: 'Babal’ina barnoota idilee fi TVET aanaalee Sulula Qiinxamaa Giddugaleessaa.',
      ti: 'ውሁድ ስሩዕን TVETን ትሕተ-ቅርጺ ትምህርቲ ኣብ ወረዳታት ማእከላይ ስንጭሮ።'
    },
    projectNos: [1]
  },
  {
    id: 'somali',
    number: 2,
    name: {
      en: 'Somali Region',
      am: 'የሶማሌ ክልል',
      om: 'Naannoo Somaalee',
      ti: 'ክልል ሶማሌ'
    },
    shortLabel: {
      en: 'Somali',
      am: 'ሶማሌ',
      om: 'Somaalee',
      ti: 'ሶማሌ'
    },
    tagline: {
      en: 'Resilience building, riverine agriculture, emergency nutrition, and WASH throughout Shebele & Korahe zones.',
      am: 'በሸበሌና ቆራሄ ዞኖች የጽናት ግንባታ፣ የወንዝ ዳር ግብርና፣ የአደጋ ስነ-ምግብ እና ንጹህ ውሃ።',
      om: 'Dandamannaa, qonna laga qarqaraa, nyaata yeroo balaa fi WASH Zoonii Shabalee fi Koraheetti.',
      ti: 'ምህናጽ ጽንዓት፣ ሕርሻ ገምገም ሩባ፣ ህጹጽ ኣመጋግባን WASHን ኣብ ዞባታት ሸበሌን ቆራሄን።'
    },
    projectNos: [2, 4, 5, 12, 13, 14]
  },
  {
    id: 'afar',
    number: 3,
    name: {
      en: 'Afar Region',
      am: 'የአፋር ክልል',
      om: 'Naannoo Affaar',
      ti: 'ክልል ዓፋር'
    },
    shortLabel: {
      en: 'Afar',
      am: 'አፋር',
      om: 'Affaar',
      ti: 'ዓፋር'
    },
    tagline: {
      en: 'Post-war reconstruction, livestock pastoral recovery, safe water access, and emergency food relief.',
      am: 'የድህረ-ግጭት መልሶ ግንባታ፣ የእንስሳት እርባታ ማገገም፣ የመጠጥ ውሃ እና አስቸኳይ የምግብ ድጋፍ።',
      om: 'Ijaarsa booda walitti bu’iinsaa, bayyanannaa beeladaa, bishaan qulqulluu fi nyaata.',
      ti: 'ድሕረ-ኲናት መልሶ ግንባታ፣ ምሕዋይ ከብቲ፣ ዝስተ ማይን ህጹጽ መግብን።'
    },
    projectNos: [8, 11]
  },
  {
    id: 'tigray',
    number: 4,
    name: {
      en: 'Tigray Region',
      am: 'የትግራይ ክልል',
      om: 'Naannoo Tigraay',
      ti: 'ክልል ትግራይ'
    },
    shortLabel: {
      en: 'Tigray',
      am: 'ትግራይ',
      om: 'Tigraay',
      ti: 'ትግራይ'
    },
    tagline: {
      en: 'Comprehensive psychosocial support, female livelihood IGA training, and food assistance in Mekelle & Shire.',
      am: 'በመቀሌ እና ሽሬ የተሟላ የስነ-ልቦና ድጋፍ፣ የሴቶች የገቢ ማስገኛ ስልጠና እና የምግብ እርዳታ።',
      om: 'Maqalee fi Shireetti deeggarsa xiin-sammuu, leenjii IGA dubartootaa fi gargaarsa nyaataa.',
      ti: 'ኣብ መቐለን ሽረን ስነ-ኣእምሮኣዊ ድጋፍ፣ ስልጠና ንኣንስትን ሓገዝ መግብን።'
    },
    projectNos: [9, 10]
  },
  {
    id: 'amhara',
    number: 5,
    name: {
      en: 'Amhara Region',
      am: 'የአማራ ክልል',
      om: 'Naannoo Amaaraa',
      ti: 'ክልል ኣምሓራ'
    },
    shortLabel: {
      en: 'Amhara',
      am: 'አማራ',
      om: 'Amaaraa',
      ti: 'ኣምሓራ'
    },
    tagline: {
      en: 'Post-conflict WASH infrastructure rehabilitation and community hygiene across North Wollo.',
      am: 'በሰሜን ወሎ በግጭት የወደሙ የውሃ መሰረተ ልማቶችን መጠገን እና የማህበረሰብ ንጽህና።',
      om: 'Walloo Kaabaatti suphaa bu’uura WASH walitti bu’iinsaan boodaa fi eegumsa qulqullinaa.',
      ti: 'ኣብ ሰሜን ወሎ ዝዓነወ ትሕተ-ቅርጺ WASH ምጽጋንን ጽሬት ሕብረተሰብን።'
    },
    projectNos: [7]
  },
  {
    id: 'gambella',
    number: 6,
    name: {
      en: 'Gambella Region',
      am: 'የጋምቤላ ክልል',
      om: 'Naannoo Gambeellaa',
      ti: 'ክልል ጋምቤላ'
    },
    shortLabel: {
      en: 'Gambella',
      am: 'ጋምቤላ',
      om: 'Gambeellaa',
      ti: 'ጋምቤላ'
    },
    tagline: {
      en: 'Refugee and host community WASH capability strengthening at Kule refugee camp.',
      am: 'በኩሌ የስደተኞች ካምፕ የስደተኞችንና አስተናጋጅ ማህበረሰቡን የውሃና ንጽህና አቅም ማጠናከር።',
      om: 'Kaampii baqattootaa Kuleetti dandeettii WASH baqattootaa fi hawaasaa cimsuu.',
      ti: 'ኣብ ካምፕ ስደተኛታት ኩሌ ዓቕሚ WASH ስደተኛታትን ተቀበልትን ምሕያል።'
    },
    projectNos: [15]
  },
  {
    id: 'multi-region',
    number: 7,
    name: {
      en: 'Multi-Regional & Inter-Regional',
      am: 'ባለብዙ ክልል እና ሀገራዊ ፕሮጀክቶች',
      om: 'Naannoolee Hedduu & Biyyoolessaa',
      ti: 'ብዙሕ-ክልላውን ሃገራውን ፕሮጀክታት'
    },
    shortLabel: {
      en: 'Multi-Region',
      am: 'ባለብዙ ክልል',
      om: 'Naannoolee',
      ti: 'ብዙሕ ክልላት'
    },
    tagline: {
      en: 'Green TVET solar qualification and educational inclusion for children with disabilities.',
      am: 'አረንጓዴ ኃይል የሶላር ሙያ ስልጠና እና ለአካል ጉዳተኛ ህጻናት አካታች ትምህርት።',
      om: 'Leenjii ogummaa aduu TVET fi barnoota hunda hammataa daa’imman qaama miidhamaniif.',
      ti: 'ሞያዊ ብቕዓት ሓምለዋይ ጸዓት TVETን ሓቛፊ ትምህርቲ ንስንኩላን ህጻናትን።'
    },
    projectNos: [3, 6]
  }
];

const SECTORS = ['All', 'Education', 'WASH', 'Health', 'Livelihood', 'Agriculture', 'Emergency'] as const;

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  currentLang,
  selectedSectorFilter,
  onOpenDonate
}) => {
  const [sectorFilter, setSectorFilter] = useState<string>(selectedSectorFilter || 'All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'regional-tables' | 'all-table' | 'cards'>('regional-tables');
  const [selectedRegionTab, setSelectedRegionTab] = useState<string>('all');

  const ui = UI_COPY[currentLang].projects;
  const common = UI_COPY[currentLang].common;
  const nav = TRANSLATIONS[currentLang].nav;
  const projectPrefix = UI_COPY[currentLang].gisMap.projectNumPrefix;

  const selectedProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) ?? null
    : null;
  const selectedLoc = selectedProject ? getLocalizedProject(selectedProject, currentLang) : null;

  const filteredProjects = PROJECTS.filter((proj) => {
    const loc = getLocalizedProject(proj, currentLang);
    const matchesSector =
      sectorFilter === 'All' ||
      proj.sector.toLowerCase().includes(sectorFilter.toLowerCase()) ||
      (proj.sectorCategory && proj.sectorCategory.toLowerCase().includes(sectorFilter.toLowerCase()));

    const matchesStatus =
      statusFilter === 'All' ||
      (statusFilter === 'Active' && proj.status.toLowerCase().includes('active')) ||
      (statusFilter === 'Completed' && proj.status.toLowerCase().includes('completed'));

    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      proj.title.toLowerCase().includes(q) ||
      loc.title.toLowerCase().includes(q) ||
      proj.region.toLowerCase().includes(q) ||
      loc.region.toLowerCase().includes(q) ||
      (proj.woredas_towns && proj.woredas_towns.toLowerCase().includes(q)) ||
      loc.woredas_towns.toLowerCase().includes(q) ||
      (proj.objective && proj.objective.toLowerCase().includes(q)) ||
      loc.objective.toLowerCase().includes(q) ||
      proj.summary.toLowerCase().includes(q) ||
      loc.summary.toLowerCase().includes(q);

    return matchesSector && matchesStatus && matchesSearch;
  });

  return (
    <section id="programs" className="border-b border-stone-200 scroll-mt-20">

      {/* Top Emerald Header Banner */}
      <div className="bg-[#073826] text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/solar_water_desert_1792618997738.jpg"
            alt={nav.programs}
            className="w-full h-full object-cover object-center opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans flex items-center gap-2">
            <span>{common.home}</span>
            <span>&gt;</span>
            <span>{nav.programs}</span>
            <span>&gt;</span>
            <span className="text-amber-400 font-semibold">{ui.breadcrumbSummary}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase font-sans">
              {ui.kicker}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-4xl">
            {currentLang === 'en'
              ? 'Official Portfolio: 15 Verified Projects Across 7 Regions'
              : currentLang === 'am'
              ? 'በ7 ክልሎች የሚተገበሩ 15 ይፋዊ ፕሮጀክቶች'
              : currentLang === 'om'
              ? 'Pirojektoota 15 Naannolee 7 Keessatti Raawwataman'
              : 'ኣብ 7 ክልላት ዝካየዱ ዘለዉ 15 ፕሮጀክትታት'}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-3xl leading-relaxed font-sans">
            {currentLang === 'en'
              ? 'Strict documentation of ADRA Ethiopia Country Office active and completed interventions. Structured per region: Oromia, Somali, Afar, Tigray, Amhara, Gambella, and Multi-Regional operations.'
              : currentLang === 'am'
              ? 'በኦሮሚያ፣ ሶማሌ፣ አፋር፣ ትግራይ፣ አማራ፣ ጋምቤላ እና ባለብዙ ክልል ፕሮጀክቶች የተከፋፈሉ 15 ኦፊሴላዊ የልማት እና ሰብዓዊ ድጋፍ መዝገቦች።'
              : currentLang === 'om'
              ? 'Gabaasa pirojektoota ADRA Itoophiyaa 15 naannolee Oromiyaa, Somaalee, Affaar, Tigraay, Amaaraa, Gambeellaa fi sadarkaa biyyaalessaatti gaggeeffaman.'
              : 'ኣብ ኦሮሚያ፣ ሶማሌ፣ ዓፋር፣ ትግራይ፣ ኣምሓራ፣ ጋምቤላን ሃገራዊ ደረጃን ዝትግበሩ ዘለዉ 15 ፕሮጀክትታት።'}
          </p>

          {/* Portfolio Metrics Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs">
            <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium text-amber-300">
              {ui.badges.documented}
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium text-emerald-200">
              {ui.badges.tables}
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium text-amber-300">
              {ui.badges.activeCompleted}
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium text-emerald-200">
              {ui.badges.beneficiaries}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="projects" className="py-10 sm:py-14 bg-[#f9faf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Master View Mode Switcher and Controls */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">

            {/* View Mode Buttons */}
            <div className="flex items-center bg-stone-200/80 p-1 rounded-xl border border-stone-300 text-xs">
              <button
                onClick={() => setActiveTab('regional-tables')}
                className={`px-3 py-1.5 rounded-lg font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                  activeTab === 'regional-tables'
                    ? 'bg-[#006643] text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <Layers3 className="w-3.5 h-3.5" />
                <span>{ui.tabRegionalTables}</span>
              </button>

              <button
                onClick={() => setActiveTab('all-table')}
                className={`px-3 py-1.5 rounded-lg font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                  activeTab === 'all-table'
                    ? 'bg-[#006643] text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>{ui.tabFullTable}</span>
              </button>

              <button
                onClick={() => setActiveTab('cards')}
                className={`px-3 py-1.5 rounded-lg font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                  activeTab === 'cards'
                    ? 'bg-[#006643] text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{ui.tabCards}</span>
              </button>
            </div>

            {/* Filter Tools & Search */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Status Filter */}
              <div className="flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200 text-xs">
                <button
                  onClick={() => setStatusFilter('All')}
                  className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                    statusFilter === 'All' ? 'bg-white shadow-xs text-stone-900 font-bold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {ui.allStatus}
                </button>
                <button
                  onClick={() => setStatusFilter('Active')}
                  className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                    statusFilter === 'Active' ? 'bg-emerald-700 text-white font-bold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {ui.active10}
                </button>
                <button
                  onClick={() => setStatusFilter('Completed')}
                  className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                    statusFilter === 'Completed' ? 'bg-stone-800 text-white font-bold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {ui.completed5}
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[240px] grow sm:grow-0">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={ui.searchPlaceholder}
                  className="w-full pl-9 pr-8 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label={common.close}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sector Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-stone-200/60">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              {ui.sectorLabel}
            </span>
            {SECTORS.map((sec) => (
              <button
                key={sec}
                onClick={() => setSectorFilter(sec)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  sectorFilter.toLowerCase() === sec.toLowerCase()
                    ? 'bg-[#006643] text-white shadow-xs'
                    : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
                }`}
              >
                {getLocalizedSectorName(sec, currentLang)}
              </button>
            ))}
          </div>

          {/* VIEW MODE 1: DEDICATED REGIONAL TABLES (7 Regions) */}
          {activeTab === 'regional-tables' && (
            <div className="space-y-10">

              {/* Region Quick Navigator Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                <button
                  onClick={() => setSelectedRegionTab('all')}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedRegionTab === 'all'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                  }`}
                >
                  {ui.allRegions15}
                </button>
                {REGIONAL_GROUPS.map((rg) => {
                  const count = rg.projectNos.length;
                  return (
                    <button
                      key={rg.id}
                      onClick={() => setSelectedRegionTab(rg.id)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                        selectedRegionTab === rg.id
                          ? 'bg-[#006643] text-white shadow-xs'
                          : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                      }`}
                    >
                      <span>{pickLang(currentLang, rg.shortLabel)}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        selectedRegionTab === rg.id ? 'bg-emerald-800 text-white' : 'bg-stone-200 text-stone-800'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Render Each Regional Group Table */}
              {REGIONAL_GROUPS
                .filter((rg) => selectedRegionTab === 'all' || selectedRegionTab === rg.id)
                .map((group) => {
                  const groupProjects = filteredProjects.filter((p) => group.projectNos.includes(p.projectNo || 0));

                  if (groupProjects.length === 0 && (searchQuery || sectorFilter !== 'All' || statusFilter !== 'All')) {
                    return null;
                  }

                  const groupName = pickLang(currentLang, group.name);
                  const groupTagline = pickLang(currentLang, group.tagline);
                  const countWord = groupProjects.length === 1 ? ui.projectSingular : ui.projectPlural;

                  return (
                    <div
                      key={group.id}
                      className="bg-white rounded-2xl border border-stone-300 shadow-xs overflow-hidden transition-all"
                    >
                      {/* Region Header Banner */}
                      <div className="px-6 py-4 bg-gradient-to-r from-stone-100 via-stone-50 to-white border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#006643] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                            {group.number}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display">
                                {groupName}
                              </h3>
                              {currentLang === 'en' && (
                                <span className="text-xs text-stone-500 font-medium hidden sm:inline">
                                  ({group.name.am})
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone-600 mt-0.5">
                              {groupTagline}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
                          <span className="text-xs px-2.5 py-1 rounded-md bg-stone-200/80 font-mono font-semibold text-stone-700">
                            {groupProjects.length} {countWord} {ui.listedWord}
                          </span>
                          <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                            {ui.idsPrefix} {group.projectNos.join(', ')}
                          </span>
                        </div>
                      </div>

                      {/* Region Projects Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-stone-50/90 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider text-[11px]">
                            <tr>
                              <th className="py-3 px-3.5 w-12 text-center">{ui.tableHeaders.no}</th>
                              <th className="py-3 px-3.5 w-40">{ui.tableHeaders.sector}</th>
                              <th className="py-3 px-4 min-w-[260px]">{ui.tableHeaders.nameLoc}</th>
                              <th className="py-3 px-4 min-w-[320px]">{ui.tableHeaders.objective}</th>
                              <th className="py-3 px-3.5 min-w-[180px]">{ui.tableHeaders.woredas}</th>
                              <th className="py-3 px-3.5 w-32">{ui.tableHeaders.duration}</th>
                              <th className="py-3 px-3.5 w-32">{ui.tableHeaders.beneficiaries}</th>
                              <th className="py-3 px-3 w-28 text-center">{ui.tableHeaders.status}</th>
                              <th className="py-3 px-3 w-24 text-center">{ui.tableHeaders.dossier}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-200">
                            {groupProjects.length === 0 ? (
                              <tr>
                                <td colSpan={9} className="py-6 text-center text-stone-500 text-xs italic">
                                  {ui.emptyGroup}
                                </td>
                              </tr>
                            ) : (
                              groupProjects.map((p) => {
                                const loc = getLocalizedProject(p, currentLang);
                                const sectorDisplay = p.sectorCategory
                                  ? getLocalizedSectorName(p.sectorCategory, currentLang)
                                  : loc.sector;

                                return (
                                  <tr key={p.id} className="hover:bg-emerald-50/30 transition-colors">
                                    <td className="py-3.5 px-3.5 text-center font-bold text-stone-700 tabular-nums">
                                      <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-900 border border-stone-200 font-mono text-[11px]">
                                        {p.projectNo}
                                      </span>
                                    </td>

                                    <td className="py-3.5 px-3.5">
                                      <span className="font-semibold text-emerald-950 block">
                                        {sectorDisplay}
                                      </span>
                                    </td>

                                    <td className="py-3.5 px-4">
                                      <div className="font-bold text-stone-900 leading-snug">
                                        {loc.title}
                                      </div>
                                      <div className="text-[11px] text-stone-500 flex items-center gap-1 mt-1">
                                        <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                                        <span>{loc.region}</span>
                                      </div>
                                    </td>

                                    <td className="py-3.5 px-4 text-stone-600 leading-relaxed text-[11px]">
                                      <p className="line-clamp-3">
                                        {loc.objective || loc.summary}
                                      </p>
                                    </td>

                                    <td className="py-3.5 px-3.5 text-stone-800 font-medium text-[11px]">
                                      {loc.woredas_towns}
                                    </td>

                                    <td className="py-3.5 px-3.5 font-mono text-[11px] text-stone-700 whitespace-nowrap">
                                      {loc.duration}
                                    </td>

                                    <td className="py-3.5 px-3.5 font-bold text-emerald-900 text-[11px]">
                                      {loc.beneficiaries}
                                    </td>

                                    <td className="py-3.5 px-3 text-center">
                                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-tight whitespace-nowrap ${
                                        p.status.toLowerCase().includes('active')
                                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                          : 'bg-stone-100 text-stone-700 border border-stone-300'
                                      }`}>
                                        {loc.status}
                                      </span>
                                    </td>

                                    <td className="py-3.5 px-3 text-center">
                                      <button
                                        onClick={() => setSelectedProjectId(p.id)}
                                        className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-[#006643] text-stone-700 hover:text-white text-[11px] font-bold border border-stone-200 transition-colors cursor-pointer whitespace-nowrap"
                                      >
                                        {common.details}
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })
                            )}
                          </tbody>
                        </table>
                      </div>

                    </div>
                  );
                })}
            </div>
          )}

          {/* VIEW MODE 2: MASTER SUMMARY TABLE */}
          {activeTab === 'all-table' && (
            <div className="bg-white rounded-2xl border border-stone-300 overflow-hidden shadow-xs mb-8">
              <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    {ui.masterRegistryTitle}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {ui.showingCountTemplate
                      .replace('{shown}', String(filteredProjects.length))
                      .replace('{total}', String(PROJECTS.length))}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {ui.officialRecordBadge}
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-3.5 w-12 text-center">{ui.tableHeaders.no}</th>
                      <th className="py-3 px-3.5 w-36">{ui.tableHeaders.sector}</th>
                      <th className="py-3 px-4 min-w-[260px]">{ui.tableHeaders.nameLoc}</th>
                      <th className="py-3 px-4 min-w-[320px]">{ui.tableHeaders.objective}</th>
                      <th className="py-3 px-3.5 min-w-[180px]">{ui.tableHeaders.woredas}</th>
                      <th className="py-3 px-3.5 w-32">{ui.tableHeaders.duration}</th>
                      <th className="py-3 px-3.5 w-32">{ui.tableHeaders.beneficiaries}</th>
                      <th className="py-3 px-3 w-28 text-center">{ui.tableHeaders.status}</th>
                      <th className="py-3 px-3 w-24 text-center">{ui.tableHeaders.action}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {filteredProjects.map((p) => {
                      const loc = getLocalizedProject(p, currentLang);
                      const sectorDisplay = p.sectorCategory
                        ? getLocalizedSectorName(p.sectorCategory, currentLang)
                        : loc.sector;

                      return (
                        <tr key={p.id} className="hover:bg-stone-50 transition-colors">
                          <td className="py-3.5 px-3.5 text-center font-bold text-stone-700 tabular-nums font-mono">
                            {p.projectNo}
                          </td>
                          <td className="py-3.5 px-3.5">
                            <span className="font-semibold text-emerald-950 block">
                              {sectorDisplay}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-stone-900 leading-snug">
                              {loc.title}
                            </div>
                            <div className="text-[11px] text-stone-500 flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                              <span>{loc.region}</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-stone-600 leading-relaxed text-[11px]">
                            <p className="line-clamp-3">
                              {loc.objective || loc.summary}
                            </p>
                          </td>
                          <td className="py-3.5 px-3.5 text-stone-800 font-medium text-[11px]">
                            {loc.woredas_towns}
                          </td>
                          <td className="py-3.5 px-3.5 font-mono text-[11px] text-stone-700 whitespace-nowrap">
                            {loc.duration}
                          </td>
                          <td className="py-3.5 px-3.5 font-bold text-emerald-900 text-[11px]">
                            {loc.beneficiaries}
                          </td>
                          <td className="py-3.5 px-3 text-center">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-tight whitespace-nowrap ${
                              p.status.toLowerCase().includes('active')
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-stone-100 text-stone-700 border border-stone-300'
                            }`}>
                              {loc.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-3 text-center">
                            <button
                              onClick={() => setSelectedProjectId(p.id)}
                              className="px-2.5 py-1 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200 transition-colors cursor-pointer whitespace-nowrap"
                            >
                              {common.details}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW MODE 3: RESPONSIVE CARDS GRID */}
          {activeTab === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => {
                const loc = getLocalizedProject(proj, currentLang);
                const sectorDisplay = proj.sectorCategory
                  ? getLocalizedSectorName(proj.sectorCategory, currentLang)
                  : loc.sector;

                return (
                  <div
                    key={proj.id}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                        <img
                          src={proj.image}
                          alt={loc.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                          referrerPolicy="no-referrer"
                        />

                        {proj.projectNo && (
                          <div className="absolute top-3 left-3 bg-stone-900/90 text-white backdrop-blur-xs px-2.5 py-0.5 rounded text-[11px] font-mono font-bold shadow-sm">
                            {projectPrefix}{proj.projectNo}
                          </div>
                        )}

                        <div className="absolute top-3 right-3 flex items-center gap-1.5">
                          <div className={`backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                            proj.status.toLowerCase().includes('active')
                              ? 'bg-[#006643] text-white shadow-xs'
                              : 'bg-stone-800/90 text-stone-200'
                          }`}>
                            {loc.status}
                          </div>
                        </div>

                        <div className="absolute bottom-2 left-3 right-3 bg-[#073826]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg text-white text-[11px] font-semibold flex items-center justify-between">
                          <span className="truncate">{sectorDisplay}</span>
                          <span className="text-amber-300 font-mono shrink-0 ml-2">{loc.duration}</span>
                        </div>
                      </div>

                      <div className="p-5 space-y-3">
                        <h3 className="text-base font-bold text-stone-900 font-display leading-snug line-clamp-2">
                          {loc.title}
                        </h3>

                        <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                          {loc.objective || loc.summary}
                        </p>

                        <div className="pt-2 border-t border-stone-200 space-y-1.5 text-xs text-stone-700">
                          <div className="flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                            <div className="leading-tight">
                              <span className="font-semibold text-stone-900">{loc.region}</span>
                              {loc.woredas_towns && (
                                <span className="text-stone-500 text-[11px] block truncate max-w-[280px]">
                                  {loc.woredas_towns}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            <span className="font-bold text-[#006643] tabular-nums">{loc.beneficiaries}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <button
                        onClick={() => setSelectedProjectId(proj.id)}
                        className="w-full py-2.5 px-3 bg-stone-50 hover:bg-[#006643] text-stone-800 hover:text-white border border-stone-200 hover:border-[#006643] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <span>{ui.viewDossierBtn}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center text-stone-500 text-sm bg-white rounded-2xl border border-stone-200 max-w-md mx-auto p-8 shadow-xs">
              <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="font-bold text-stone-800">{ui.emptySearchTitle}</p>
              <p className="text-xs text-stone-500 mt-1">{ui.emptySearchSub}</p>
              <button
                onClick={() => { setSectorFilter('All'); setStatusFilter('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-1.5 bg-[#006643] text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                {common.resetFilters}
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Comprehensive Project Detail Modal */}
      {selectedProject && selectedLoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/75 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProjectId(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-stone-900">
              <img
                src={selectedProject.image}
                alt={selectedLoc.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <button
                onClick={() => setSelectedProjectId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-black text-white transition-colors cursor-pointer"
                aria-label={common.close}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-4 left-4 flex items-center gap-2">
                {selectedProject.projectNo && (
                  <span className="bg-amber-400 text-stone-950 text-xs px-2.5 py-1 rounded font-mono font-bold shadow-md">
                    {projectPrefix}{selectedProject.projectNo}
                  </span>
                )}
                <span className={`text-xs px-3 py-1 rounded font-semibold text-white ${
                  selectedProject.status.toLowerCase().includes('active') ? 'bg-[#006643]' : 'bg-stone-700'
                }`}>
                  {selectedLoc.status}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  {(selectedProject.sectorCategory
                    ? getLocalizedSectorName(selectedProject.sectorCategory, currentLang)
                    : selectedLoc.sector)} &bull; {selectedLoc.region}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold font-editorial leading-tight">
                  {selectedLoc.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">

              {/* Objective Block */}
              {selectedLoc.objective && (
                <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-200 space-y-1.5">
                  <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{ui.modalGoalTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                    {selectedLoc.objective}
                  </p>
                </div>
              )}

              {/* Key Parameters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                <div>
                  <div className="text-stone-500 font-medium">{ui.modalRegionArea}</div>
                  <div className="font-semibold text-stone-900 mt-0.5">{selectedLoc.region}</div>
                </div>
                <div>
                  <div className="text-stone-500 font-medium">{common.duration}</div>
                  <div className="font-semibold text-stone-900 mt-0.5">{selectedLoc.duration}</div>
                </div>
                <div>
                  <div className="text-stone-500 font-medium">{ui.modalBeneficiariesNum}</div>
                  <div className="font-bold text-[#006643] mt-0.5">{selectedLoc.beneficiaries}</div>
                </div>

                {selectedLoc.woredas_towns && (
                  <div className="col-span-2 sm:col-span-3 pt-2 border-t border-stone-200">
                    <div className="text-stone-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      <span>{ui.modalWoredasTitle}</span>
                    </div>
                    <div className="font-semibold text-stone-800 mt-0.5">
                      {selectedLoc.woredas_towns}
                    </div>
                  </div>
                )}

                {selectedProject.partners && selectedProject.partners.length > 0 && (
                  <div className="col-span-2 sm:col-span-3 pt-2 border-t border-stone-200">
                    <div className="text-stone-500 font-medium">{ui.modalPartnersTitle}</div>
                    <div className="font-semibold text-stone-800 mt-0.5">
                      {selectedProject.partners.join(' · ')}
                    </div>
                  </div>
                )}
              </div>

              {/* Hard Components */}
              {selectedLoc.hardComponents && selectedLoc.hardComponents.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <Hammer className="w-4 h-4 text-emerald-700" />
                    <span>{ui.modalHardTitle}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedLoc.hardComponents.map((item, idx) => (
                      <div key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Materials Provisions */}
              {selectedLoc.materialsProvisions && selectedLoc.materialsProvisions.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-700" />
                    <span>{ui.modalMaterialsTitle}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedLoc.materialsProvisions.map((item, idx) => (
                      <div key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Soft Components */}
              {selectedLoc.softComponents && selectedLoc.softComponents.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>{ui.modalSoftTitle}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedLoc.softComponents.map((item, idx) => (
                      <div key={idx} className="p-2.5 bg-emerald-50/50 rounded-lg border border-emerald-100 flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#006643] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Project Goals & Deliverables */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  {ui.modalMilestonesTitle}
                </div>
                <div className="space-y-2">
                  {selectedLoc.goals.map((goal, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const sector = selectedProject.sector.toLowerCase();
                    setSelectedProjectId(null);
                    onOpenDonate(sector);
                  }}
                  className="px-5 py-2.5 bg-[#006643] hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Heart className="w-4 h-4 fill-emerald-200 text-emerald-200" />
                  <span>{ui.supportProgramBtn}</span>
                </button>

                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  {ui.closeDossierBtn}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

