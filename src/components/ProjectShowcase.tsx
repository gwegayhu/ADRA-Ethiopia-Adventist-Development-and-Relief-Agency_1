import React, { useState } from 'react';
import { Search, MapPin, Users, Hammer, BookOpen, Layers, CheckCircle, X, Heart, ExternalLink, Sparkles, AlertCircle, Building2, Table, LayoutGrid, Layers3 } from 'lucide-react';
import { Project, Language } from '../types';
import { PROJECTS } from '../data/adraData';

interface ProjectShowcaseProps {
  currentLang: Language;
  selectedSectorFilter?: string;
  onOpenDonate: (presetSector?: string) => void;
}

interface RegionalGroup {
  id: string;
  number: number;
  name: string;
  nameAm: string;
  tagline: string;
  projectNos: number[];
}

const REGIONAL_GROUPS: RegionalGroup[] = [
  {
    id: 'oromia',
    number: 1,
    name: 'Oromia Region',
    nameAm: 'የኦሮሚያ ክልል',
    tagline: 'Formal & TVET education infrastructure integration across Central Rift Valley woredas.',
    projectNos: [1]
  },
  {
    id: 'somali',
    number: 2,
    name: 'Somali Region',
    nameAm: 'የሶማሌ ክልል',
    tagline: 'Resilience building, riverine agriculture, emergency nutrition, and WASH throughout Shebele & Korahe zones.',
    projectNos: [2, 4, 5, 12, 13, 14]
  },
  {
    id: 'afar',
    number: 3,
    name: 'Afar Region',
    nameAm: 'የአፋር ክልል',
    tagline: 'Post-war reconstruction, livestock pastoral recovery, safe water access, and emergency food relief.',
    projectNos: [8, 11]
  },
  {
    id: 'tigray',
    number: 4,
    name: 'Tigray Region',
    nameAm: 'የትግራይ ክልል',
    tagline: 'Comprehensive psychosocial support, female livelihood IGA training, and food assistance in Mekelle & Shire.',
    projectNos: [9, 10]
  },
  {
    id: 'amhara',
    number: 5,
    name: 'Amhara Region',
    nameAm: 'የአማራ ክልል',
    tagline: 'Post-conflict WASH infrastructure rehabilitation and community hygiene across North Wollo.',
    projectNos: [7]
  },
  {
    id: 'gambella',
    number: 6,
    name: 'Gambella Region',
    nameAm: 'የጋምቤላ ክልል',
    tagline: 'Refugee and host community WASH capability strengthening at Kule refugee camp.',
    projectNos: [15]
  },
  {
    id: 'multi-region',
    number: 7,
    name: 'Multi-Regional & Inter-Regional Projects',
    nameAm: 'ባለብዙ ክልል እና ሀገራዊ ፕሮጀክቶች',
    tagline: 'Green TVET solar qualification and educational inclusion for children with disabilities.',
    projectNos: [3, 6]
  }
];

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ 
  currentLang, 
  selectedSectorFilter, 
  onOpenDonate 
}) => {
  const [sectorFilter, setSectorFilter] = useState<string>(selectedSectorFilter || 'All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'regional-tables' | 'all-table' | 'cards'>('regional-tables');
  const [selectedRegionTab, setSelectedRegionTab] = useState<string>('all');

  const sectors = ['All', 'Education', 'WASH', 'Health', 'Livelihood', 'Agriculture', 'Emergency'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesSector = sectorFilter === 'All' || 
      proj.sector.toLowerCase().includes(sectorFilter.toLowerCase()) || 
      (proj.sectorCategory && proj.sectorCategory.toLowerCase().includes(sectorFilter.toLowerCase()));
    
    const matchesStatus = statusFilter === 'All' || 
      (statusFilter === 'Active' && proj.status.toLowerCase().includes('active')) ||
      (statusFilter === 'Completed' && proj.status.toLowerCase().includes('completed'));
    
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (proj.woredas_towns && proj.woredas_towns.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (proj.objective && proj.objective.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSector && matchesStatus && matchesSearch;
  });

  return (
    <section id="programs" className="border-b border-stone-200 scroll-mt-20">
      
      {/* Top Emerald Header Banner */}
      <div className="bg-[#073826] text-white py-14 sm:py-18 relative overflow-hidden">
        {/* Background photo overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/solar_water_desert_1792618997738.jpg"
            alt="ADRA Programs"
            className="w-full h-full object-cover object-center opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans flex items-center gap-2">
            <span>Home</span>
            <span>&gt;</span>
            <span>Programs</span>
            <span>&gt;</span>
            <span className="text-amber-400 font-semibold">Official Country Office Project Summary</span>
          </div>
          
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase font-sans">
              ADRA ETHIOPIA COUNTRY OFFICE PROJECT SUMMARY
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
            <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium">
              <span className="text-amber-400 font-bold">15</span> Documented Projects (1–15)
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium">
              <span className="text-emerald-300 font-bold">7</span> Dedicated Regional Tables
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium">
              <span className="text-amber-400 font-bold">10</span> Active &amp; <span className="text-stone-300 font-bold">5</span> Recently Completed
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-medium">
              <span className="text-emerald-300 font-bold">345,000+</span> Direct Beneficiaries
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="projects" className="py-10 sm:py-14 bg-[#f9faf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Master View Mode Switcher and Controls */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
            
            {/* View Mode Buttons (Regional Tables / All Projects Table / Cards) */}
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
                <span>Regional Tables (7 Regions)</span>
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
                <span>Full Summary Table</span>
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
                <span>Cards Grid</span>
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
                  All Status
                </button>
                <button
                  onClick={() => setStatusFilter('Active')}
                  className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                    statusFilter === 'Active' ? 'bg-emerald-700 text-white font-bold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Active (10)
                </button>
                <button
                  onClick={() => setStatusFilter('Completed')}
                  className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                    statusFilter === 'Completed' ? 'bg-stone-800 text-white font-bold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Completed (5)
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[240px] grow sm:grow-0">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search project name, woredas, goals..."
                  className="w-full pl-9 pr-8 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
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
              Sector:
            </span>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSectorFilter(sec)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  sectorFilter.toLowerCase() === sec.toLowerCase()
                    ? 'bg-[#006643] text-white shadow-xs'
                    : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* VIEW MODE 1: DEDICATED REGIONAL TABLES (The 7 Regions strictly defined) */}
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
                  All 7 Regions (15 Projects)
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
                      <span>{rg.name.replace(' Region', '').replace(' Projects', '')}</span>
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
                .filter(rg => selectedRegionTab === 'all' || selectedRegionTab === rg.id)
                .map((group) => {
                  // Filter projects that belong to this region and match the global search/filters
                  const groupProjects = filteredProjects.filter(p => group.projectNos.includes(p.projectNo || 0));

                  if (groupProjects.length === 0 && (searchQuery || sectorFilter !== 'All' || statusFilter !== 'All')) {
                    return null; // hide empty regions when filtered out
                  }

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
                                {group.name}
                              </h3>
                              <span className="text-xs text-stone-500 font-medium hidden sm:inline">
                                ({group.nameAm})
                              </span>
                            </div>
                            <p className="text-xs text-stone-600 mt-0.5">
                              {group.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
                          <span className="text-xs px-2.5 py-1 rounded-md bg-stone-200/80 font-mono font-semibold text-stone-700">
                            {groupProjects.length} {groupProjects.length === 1 ? 'Project' : 'Projects'} Listed
                          </span>
                          <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                            IDs: {group.projectNos.join(', ')}
                          </span>
                        </div>
                      </div>

                      {/* Region Projects Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-stone-50/90 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider text-[11px]">
                            <tr>
                              <th className="py-3 px-3.5 w-12 text-center">No</th>
                              <th className="py-3 px-3.5 w-40">Sector / Area</th>
                              <th className="py-3 px-4 min-w-[260px]">Project Name &amp; Location</th>
                              <th className="py-3 px-4 min-w-[320px]">Project Goal / Objective</th>
                              <th className="py-3 px-3.5 min-w-[180px]">Location / Woredas &amp; Towns</th>
                              <th className="py-3 px-3.5 w-32">Duration</th>
                              <th className="py-3 px-3.5 w-32">Beneficiaries</th>
                              <th className="py-3 px-3 w-28 text-center">Status</th>
                              <th className="py-3 px-3 w-24 text-center">Dossier</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-200">
                            {groupProjects.length === 0 ? (
                              <tr>
                                <td colSpan={9} className="py-6 text-center text-stone-500 text-xs italic">
                                  No projects in this region match the active search/filters.
                                </td>
                              </tr>
                            ) : (
                              groupProjects.map((p) => (
                                <tr key={p.id} className="hover:bg-emerald-50/30 transition-colors">
                                  <td className="py-3.5 px-3.5 text-center font-bold text-stone-700 tabular-nums">
                                    <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-900 border border-stone-200 font-mono text-[11px]">
                                      {p.projectNo}
                                    </span>
                                  </td>
                                  
                                  <td className="py-3.5 px-3.5">
                                    <span className="font-semibold text-emerald-950 block">
                                      {p.sectorCategory || p.sector}
                                    </span>
                                  </td>

                                  <td className="py-3.5 px-4">
                                    <div className="font-bold text-stone-900 leading-snug">
                                      {p.title}
                                    </div>
                                    <div className="text-[11px] text-stone-500 flex items-center gap-1 mt-1">
                                      <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                                      <span>{p.region}</span>
                                    </div>
                                  </td>

                                  <td className="py-3.5 px-4 text-stone-600 leading-relaxed text-[11px]">
                                    <p className="line-clamp-3">
                                      {p.objective || p.summary}
                                    </p>
                                  </td>

                                  <td className="py-3.5 px-3.5 text-stone-800 font-medium text-[11px]">
                                    {p.woredas_towns || p.region}
                                  </td>

                                  <td className="py-3.5 px-3.5 font-mono text-[11px] text-stone-700 whitespace-nowrap">
                                    {p.duration}
                                  </td>

                                  <td className="py-3.5 px-3.5 font-bold text-emerald-900 text-[11px]">
                                    {p.beneficiaries}
                                  </td>

                                  <td className="py-3.5 px-3 text-center">
                                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-tight whitespace-nowrap ${
                                      p.status.toLowerCase().includes('active')
                                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                        : 'bg-stone-100 text-stone-700 border border-stone-300'
                                    }`}>
                                      {p.status}
                                    </span>
                                  </td>

                                  <td className="py-3.5 px-3 text-center">
                                    <button
                                      onClick={() => setSelectedProject(p)}
                                      className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-[#006643] text-stone-700 hover:text-white text-[11px] font-bold border border-stone-200 transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                      Details
                                    </button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>

                    </div>
                  );
                })}
            </div>
          )}

          {/* VIEW MODE 2: MASTER SUMMARY TABLE (ALL 15 PROJECTS IN ONE SORTED REGISTER) */}
          {activeTab === 'all-table' && (
            <div className="bg-white rounded-2xl border border-stone-300 overflow-hidden shadow-xs mb-8">
              <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    ADRA Ethiopia Master Projects Registry
                  </h3>
                  <p className="text-xs text-stone-500">
                    Showing {filteredProjects.length} of {PROJECTS.length} verified operations across Ethiopia
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Official Country Office Record
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-3.5 w-12 text-center">No</th>
                      <th className="py-3 px-3.5 w-36">Sector / Area</th>
                      <th className="py-3 px-4 min-w-[260px]">Project Name &amp; Location</th>
                      <th className="py-3 px-4 min-w-[320px]">Project Goal / Objective</th>
                      <th className="py-3 px-3.5 min-w-[180px]">Location / Woredas &amp; Towns</th>
                      <th className="py-3 px-3.5 w-32">Duration</th>
                      <th className="py-3 px-3.5 w-32">Beneficiaries</th>
                      <th className="py-3 px-3 w-28 text-center">Status</th>
                      <th className="py-3 px-3 w-24 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {filteredProjects.map((p) => (
                      <tr key={p.id} className="hover:bg-stone-50 transition-colors">
                        <td className="py-3.5 px-3.5 text-center font-bold text-stone-700 tabular-nums font-mono">
                          {p.projectNo}
                        </td>
                        <td className="py-3.5 px-3.5">
                          <span className="font-semibold text-emerald-950 block">
                            {p.sectorCategory || p.sector}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-stone-900 leading-snug">
                            {p.title}
                          </div>
                          <div className="text-[11px] text-stone-500 flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                            <span>{p.region}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-stone-600 leading-relaxed text-[11px]">
                          <p className="line-clamp-3">
                            {p.objective || p.summary}
                          </p>
                        </td>
                        <td className="py-3.5 px-3.5 text-stone-800 font-medium text-[11px]">
                          {p.woredas_towns || p.region}
                        </td>
                        <td className="py-3.5 px-3.5 font-mono text-[11px] text-stone-700 whitespace-nowrap">
                          {p.duration}
                        </td>
                        <td className="py-3.5 px-3.5 font-bold text-emerald-900 text-[11px]">
                          {p.beneficiaries}
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-tight whitespace-nowrap ${
                            p.status.toLowerCase().includes('active')
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-stone-100 text-stone-700 border border-stone-300'
                          }`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <button
                            onClick={() => setSelectedProject(p)}
                            className="px-2.5 py-1 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200 transition-colors cursor-pointer whitespace-nowrap"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW MODE 3: RESPONSIVE CARDS GRID */}
          {activeTab === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Project No Badge */}
                      {proj.projectNo && (
                        <div className="absolute top-3 left-3 bg-stone-900/90 text-white backdrop-blur-xs px-2.5 py-0.5 rounded text-[11px] font-mono font-bold shadow-sm">
                          Project #{proj.projectNo}
                        </div>
                      )}

                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        <div className={`backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                          proj.status.toLowerCase().includes('active')
                            ? 'bg-[#006643] text-white shadow-xs' 
                            : 'bg-stone-800/90 text-stone-200'
                        }`}>
                          {proj.status}
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-3 right-3 bg-[#073826]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg text-white text-[11px] font-semibold flex items-center justify-between">
                        <span className="truncate">{proj.sectorCategory || proj.sector}</span>
                        <span className="text-amber-300 font-mono shrink-0 ml-2">{proj.duration}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <h3 className="text-base font-bold text-stone-900 font-display leading-snug line-clamp-2">
                        {proj.title}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {proj.objective || proj.summary}
                      </p>

                      {/* Metadata items */}
                      <div className="pt-2 border-t border-stone-200 space-y-1.5 text-xs text-stone-700">
                        <div className="flex items-start gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                          <div className="leading-tight">
                            <span className="font-semibold text-stone-900">{proj.region}</span>
                            {proj.woredas_towns && (
                              <span className="text-stone-500 text-[11px] block truncate max-w-[280px]">
                                {proj.woredas_towns}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span className="font-bold text-[#006643] tabular-nums">{proj.beneficiaries}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="w-full py-2.5 px-3 bg-stone-50 hover:bg-[#006643] text-stone-800 hover:text-white border border-stone-200 hover:border-[#006643] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span>View Project Dossier</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center text-stone-500 text-sm bg-white rounded-2xl border border-stone-200 max-w-md mx-auto p-8 shadow-xs">
              <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="font-bold text-stone-800">No projects match your filter</p>
              <p className="text-xs text-stone-500 mt-1">Try resetting the sector or search keyword.</p>
              <button
                onClick={() => { setSectorFilter('All'); setStatusFilter('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-1.5 bg-[#006643] text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Comprehensive Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/75 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-stone-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-black text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-4 left-4 flex items-center gap-2">
                {selectedProject.projectNo && (
                  <span className="bg-amber-400 text-stone-950 text-xs px-2.5 py-1 rounded font-mono font-bold shadow-md">
                    Project #{selectedProject.projectNo}
                  </span>
                )}
                <span className={`text-xs px-3 py-1 rounded font-semibold text-white ${
                  selectedProject.status.toLowerCase().includes('active') ? 'bg-[#006643]' : 'bg-stone-700'
                }`}>
                  {selectedProject.status}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  {selectedProject.sectorCategory || selectedProject.sector} &bull; {selectedProject.region}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold font-editorial leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Objective Block */}
              {selectedProject.objective && (
                <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-200 space-y-1.5">
                  <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Project Goal &amp; Objective</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                    {selectedProject.objective}
                  </p>
                </div>
              )}

              {/* Key Parameters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                <div>
                  <div className="text-stone-500 font-medium">Region / Primary Area</div>
                  <div className="font-semibold text-stone-900 mt-0.5">{selectedProject.region}</div>
                </div>
                <div>
                  <div className="text-stone-500 font-medium">Duration</div>
                  <div className="font-semibold text-stone-900 mt-0.5">{selectedProject.duration}</div>
                </div>
                <div>
                  <div className="text-stone-500 font-medium">Beneficiaries Number</div>
                  <div className="font-bold text-[#006643] mt-0.5">{selectedProject.beneficiaries}</div>
                </div>
                
                {selectedProject.woredas_towns && (
                  <div className="col-span-2 sm:col-span-3 pt-2 border-t border-stone-200">
                    <div className="text-stone-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      <span>Target Woredas &amp; Towns</span>
                    </div>
                    <div className="font-semibold text-stone-800 mt-0.5">
                      {selectedProject.woredas_towns}
                    </div>
                  </div>
                )}

                {selectedProject.partners && selectedProject.partners.length > 0 && (
                  <div className="col-span-2 sm:col-span-3 pt-2 border-t border-stone-200">
                    <div className="text-stone-500 font-medium">Funding &amp; Institutional Partners</div>
                    <div className="font-semibold text-stone-800 mt-0.5">
                      {selectedProject.partners.join(' · ')}
                    </div>
                  </div>
                )}
              </div>

              {/* Hard Components (if present, as in Project 1 ATJK / SEAQE II) */}
              {selectedProject.hardComponents && selectedProject.hardComponents.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <Hammer className="w-4 h-4 text-emerald-700" />
                    <span>Hard Components (Infrastructure &amp; Constructions)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.hardComponents.map((item, idx) => (
                      <div key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Materials Provisions (if present) */}
              {selectedProject.materialsProvisions && selectedProject.materialsProvisions.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-700" />
                    <span>Materials Provisions</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.materialsProvisions.map((item, idx) => (
                      <div key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Soft Components (Capacity Building & Campaigns) */}
              {selectedProject.softComponents && selectedProject.softComponents.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>Soft Components (Capacity Building &amp; Awareness Campaigns)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.softComponents.map((item, idx) => (
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
                  Key Milestones &amp; Program Results
                </div>
                <div className="space-y-2">
                  {selectedProject.goals.map((goal, idx) => (
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
                    setSelectedProject(null);
                    onOpenDonate(sector);
                  }}
                  className="px-5 py-2.5 bg-[#006643] hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Heart className="w-4 h-4 fill-emerald-200 text-emerald-200" />
                  <span>Support this Program</span>
                </button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
