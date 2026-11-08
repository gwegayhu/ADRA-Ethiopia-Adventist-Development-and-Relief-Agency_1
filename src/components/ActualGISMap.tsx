import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RegionData, Language, GISProject } from '../types';
import { GIS_PROJECTS_DATA } from '../data/adraData';
import { 
  Users, 
  Droplets, 
  Building2, 
  Layers, 
  Compass, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  MapPin, 
  Check, 
  Activity, 
  ArrowRight,
  Sparkles,
  Calendar,
  Layers3,
  Search,
  Filter,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface ActualGISMapProps {
  regions: RegionData[];
  selectedRegionId: string;
  onSelectRegion: (regionId: string) => void;
  currentLang: Language;
}

// Sector visual color mappings for GIS pins
const SECTOR_COLORS: Record<string, { bg: string; border: string; text: string; pinBg: string }> = {
  'Education': { bg: 'bg-blue-500', border: 'border-blue-400', text: 'text-blue-300', pinBg: '#3b82f6' },
  'Livelihood': { bg: 'bg-amber-500', border: 'border-amber-400', text: 'text-amber-300', pinBg: '#f59e0b' },
  'WASH': { bg: 'bg-cyan-500', border: 'border-cyan-400', text: 'text-cyan-300', pinBg: '#06b6d4' },
  'Integrated Agriculture and Health': { bg: 'bg-emerald-500', border: 'border-emerald-400', text: 'text-emerald-300', pinBg: '#10b981' },
  'Health (Psycho-social Support)': { bg: 'bg-rose-500', border: 'border-rose-400', text: 'text-rose-300', pinBg: '#f43f5e' },
  'Emergency Food Assistance': { bg: 'bg-orange-500', border: 'border-orange-400', text: 'text-orange-300', pinBg: '#f97316' },
  'Emergency Food Assistance / Livelihood': { bg: 'bg-orange-600', border: 'border-orange-400', text: 'text-orange-300', pinBg: '#ea580c' },
  'Agriculture': { bg: 'bg-lime-500', border: 'border-lime-400', text: 'text-lime-300', pinBg: '#84cc16' },
  'Nutrition': { bg: 'bg-purple-500', border: 'border-purple-400', text: 'text-purple-300', pinBg: '#a855f7' }
};

export const ActualGISMap: React.FC<ActualGISMapProps> = ({
  regions,
  selectedRegionId,
  onSelectRegion,
  currentLang
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layersGroupRef = useRef<L.LayerGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const GIS_API_KEY = (import.meta.env.VITE_GIS_MAP_API_KEY || import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '').trim();

  // Active Map View Mode: 'projects' (15 Projects) vs 'regions' (7 Hubs)
  const [viewMode, setViewMode] = useState<'projects' | 'regions'>('projects');

  // Active Project Selection and Hover
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  // Active Region Hover for regions view
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);

  // Filters for GIS Projects
  const [sectorFilter, setSectorFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Ongoing' | 'Recently Completed'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Basemap tile selection
  const [basemapType, setBasemapType] = useState<'satellite' | 'terrain' | 'carto' | 'osm'>(
    GIS_API_KEY ? 'satellite' : 'carto'
  );
  const [showLayerMenu, setShowLayerMenu] = useState(false);

  // Filter projects
  const filteredProjects = GIS_PROJECTS_DATA.filter((proj) => {
    const matchesSector = sectorFilter === 'All' || proj.sector.toLowerCase().includes(sectorFilter.toLowerCase());
    const matchesStatus = statusFilter === 'All' || proj.status === statusFilter;
    const matchesSearch = 
      proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.objective.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.sector.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesStatus && matchesSearch;
  });

  // Current active project in inspection panel
  const activeProjectId = hoveredProjectId || selectedProjectId;
  const activeProject = GIS_PROJECTS_DATA.find((p) => p.id === activeProjectId) || GIS_PROJECTS_DATA[0];

  // Active region for regional mode
  const activeRegion = hoveredRegion || regions.find((r) => r.id === selectedRegionId) || regions[0];

  // Tile configuration helper
  const getTileConfig = (type: 'satellite' | 'terrain' | 'carto' | 'osm') => {
    if (type === 'satellite') {
      const url = GIS_API_KEY
        ? `https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&key=${GIS_API_KEY}`
        : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      return {
        url,
        options: {
          maxZoom: 20,
          subdomains: GIS_API_KEY ? ['0', '1', '2', '3'] : ['a', 'b', 'c']
        }
      };
    }

    if (type === 'terrain') {
      const url = GIS_API_KEY
        ? `https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}&key=${GIS_API_KEY}`
        : 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
      return {
        url,
        options: {
          maxZoom: 18,
          subdomains: GIS_API_KEY ? ['0', '1', '2', '3'] : ['a', 'b', 'c']
        }
      };
    }

    if (type === 'osm') {
      return {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        options: {
          maxZoom: 18,
          subdomains: 'abc'
        }
      };
    }

    // Default 'carto'
    return {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      options: {
        maxZoom: 19,
        subdomains: 'abcd'
      }
    };
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Center of Ethiopia
    const ethiopiaCenter: [number, number] = [9.145, 40.489];
    const map = L.map(mapContainerRef.current, {
      center: ethiopiaCenter,
      zoom: 6,
      minZoom: 5,
      maxZoom: 18,
      zoomControl: false,
      scrollWheelZoom: true,
      attributionControl: false
    });

    const config = getTileConfig(basemapType);
    const tileLayer = L.tileLayer(config.url, config.options).addTo(map);

    tileLayer.on('tileerror', () => {
      if (basemapType !== 'carto') {
        setBasemapType('carto');
      }
    });

    tileLayerRef.current = tileLayer;

    // LayerGroup for markers
    const layersGroup = L.layerGroup().addTo(map);
    layersGroupRef.current = layersGroup;
    mapInstanceRef.current = map;

    // Fit Ethiopia geographic bounds
    const ethiopiaBounds = L.latLngBounds([3.4, 33.0], [14.9, 48.0]);
    map.fitBounds(ethiopiaBounds, { padding: [30, 30] });

    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    const handleResize = () => {
      map.invalidateSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Basemap when basemapType changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const config = getTileConfig(basemapType);
    const newTileLayer = L.tileLayer(config.url, config.options).addTo(map);

    newTileLayer.on('tileerror', () => {
      if (basemapType === 'satellite') {
        const fallback = L.tileLayer(
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          { maxZoom: 18 }
        ).addTo(map);
        tileLayerRef.current = fallback;
        fallback.bringToBack();
      }
    });

    tileLayerRef.current = newTileLayer;
    newTileLayer.bringToBack();
  }, [basemapType]);

  // Render Leaflet Markers: Projects Mode or Regional Hubs Mode
  useEffect(() => {
    if (!mapInstanceRef.current || !layersGroupRef.current) return;
    const layersGroup = layersGroupRef.current;
    layersGroup.clearLayers();

    if (viewMode === 'projects') {
      // Plot the 15 verified projects with exact coordinates
      filteredProjects.forEach((proj) => {
        const isSelected = proj.id === activeProjectId;
        const colorConfig = SECTOR_COLORS[proj.sector] || {
          bg: 'bg-emerald-500',
          border: 'border-emerald-400',
          text: 'text-emerald-300',
          pinBg: '#006643'
        };

        const isOngoing = proj.status === 'Ongoing';

        // Pin marker HTML
        const markerHtml = `
          <div class="gis-project-pin relative group cursor-pointer flex items-center justify-center -translate-x-1/2 -translate-y-1/2 select-none">
            <!-- Ripple Wave -->
            <span class="absolute w-9 h-9 rounded-full ${
              isSelected 
                ? 'bg-amber-400/50 animate-ping' 
                : 'bg-emerald-400/0 group-hover:bg-amber-400/30 group-hover:animate-ping'
            } pointer-events-none transition-all duration-300"></span>

            <!-- Core Pin Badge -->
            <div class="relative min-w-[28px] h-7 px-1.5 rounded-full flex items-center justify-center shadow-xl border-2 transition-all duration-200 ${
              isSelected
                ? 'bg-[#f59e0b] border-white scale-125 z-40 ring-4 ring-amber-400/40'
                : 'border-white text-white group-hover:scale-115 group-hover:bg-[#f59e0b] group-hover:text-stone-950 z-20'
            }" style="background-color: ${isSelected ? '#f59e0b' : colorConfig.pinBg};">
              <span class="font-mono font-black text-[11px] ${isSelected ? 'text-stone-950' : 'text-white group-hover:text-stone-950'}">
                #${proj.id}
              </span>
            </div>

            <!-- Floating Label Pill -->
            <div class="absolute left-8 pointer-events-none whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-bold tracking-tight shadow-lg border transition-all duration-200 ${
              isSelected
                ? 'bg-[#073826] text-amber-300 border-[#f59e0b] scale-105 z-40 opacity-100'
                : 'bg-white/95 text-stone-900 border-stone-200 opacity-90 group-hover:opacity-100 group-hover:bg-[#073826] group-hover:text-amber-300 group-hover:border-[#f59e0b] group-hover:scale-105 z-20'
            }">
              <div class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full ${isOngoing ? 'bg-emerald-400' : 'bg-stone-400'}"></span>
                <span class="max-w-[200px] truncate">${proj.name}</span>
              </div>
            </div>
          </div>
        `;

        const customIcon = L.divIcon({
          html: markerHtml,
          className: 'leaflet-gis-project-icon',
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const marker = L.marker(proj.coordinates, { icon: customIcon });

        marker.on('mouseover', () => {
          setHoveredProjectId(proj.id);
        });

        marker.on('mouseout', () => {
          setHoveredProjectId(null);
        });

        marker.on('click', () => {
          setSelectedProjectId(proj.id);
          setHoveredProjectId(null);
          if (mapInstanceRef.current) {
            mapInstanceRef.current.flyTo(proj.coordinates, 8.5, { duration: 0.8 });
          }
        });

        marker.addTo(layersGroup);
      });

    } else {
      // Plot regional hubs
      regions.forEach((region) => {
        const isSelected = region.id === selectedRegionId;
        const displayName =
          currentLang === 'am'
            ? region.nameAm.replace(' ክልል', '')
            : currentLang === 'om' && region.nameOm
            ? region.nameOm.replace('Naannoo ', '')
            : region.name.replace(' Region', '');

        const pointHtml = `
          <div class="smart-point-marker relative group cursor-pointer flex items-center justify-center -translate-x-1/2 -translate-y-1/2 select-none">
            <span class="absolute w-8 h-8 rounded-full ${
              isSelected 
                ? 'bg-amber-400/40 animate-ping' 
                : 'bg-emerald-400/0 group-hover:bg-amber-400/30 group-hover:animate-ping'
            } pointer-events-none transition-all duration-300"></span>

            <div class="relative w-5 h-5 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
              isSelected
                ? 'bg-[#f59e0b] scale-125 ring-3 ring-amber-300 z-30'
                : 'bg-[#006643] group-hover:scale-125 group-hover:bg-[#f59e0b] ring-2 ring-white z-10'
            }">
              <span class="w-2 h-2 rounded-full ${isSelected ? 'bg-stone-950' : 'bg-white group-hover:bg-stone-950'}"></span>
            </div>

            <div class="absolute left-6 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded-md text-[11px] font-bold tracking-tight shadow-md border transition-all duration-200 ${
              isSelected
                ? 'bg-[#073826] text-amber-300 border-[#f59e0b] scale-105 z-30'
                : 'bg-white/95 text-stone-900 border-stone-200/90 group-hover:bg-[#073826] group-hover:text-amber-300 group-hover:border-[#f59e0b] group-hover:scale-105 z-10'
            }">
              <span>${displayName}</span>
            </div>
          </div>
        `;

        const customIcon = L.divIcon({
          html: pointHtml,
          className: 'leaflet-smart-point-icon',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        const marker = L.marker(region.gisCoordinates, { icon: customIcon });

        marker.on('mouseover', () => {
          setHoveredRegion(region);
        });

        marker.on('mouseout', () => {
          setHoveredRegion(null);
        });

        marker.on('click', () => {
          onSelectRegion(region.id);
          setHoveredRegion(null);
        });

        marker.addTo(layersGroup);
      });
    }
  }, [viewMode, filteredProjects, activeProjectId, regions, selectedRegionId, currentLang]);

  // Pan to project when selectedProjectId changes
  const handleSelectProject = (proj: GISProject) => {
    setSelectedProjectId(proj.id);
    setHoveredProjectId(null);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(proj.coordinates, 8, {
        duration: 0.9,
        easeLinearity: 0.25
      });
    }
  };

  const handleResetView = () => {
    if (!mapInstanceRef.current) return;
    const ethiopiaBounds = L.latLngBounds([3.4, 33.0], [14.9, 48.0]);
    mapInstanceRef.current.fitBounds(ethiopiaBounds, { padding: [30, 30] });
  };

  const handleZoomIn = () => {
    if (mapInstanceRef.current) mapInstanceRef.current.zoomIn();
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) mapInstanceRef.current.zoomOut();
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-emerald-900/40 bg-stone-900 shadow-2xl">
      
      {/* Top HUD Operations Bar */}
      <div className="bg-[#073826] text-white px-4 py-3 border-b border-emerald-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-pulse"></div>
          <span className="font-bold tracking-wider uppercase text-amber-400 font-sans">
            ADRA Ethiopia GIS Operations
          </span>
          <span className="text-emerald-300/80 hidden sm:inline">|</span>
          
          {/* Mode Switcher Pill */}
          <div className="flex items-center bg-stone-950/60 p-0.5 rounded-lg border border-emerald-700/60 text-[11px]">
            <button
              onClick={() => setViewMode('projects')}
              className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'projects'
                  ? 'bg-[#f59e0b] text-stone-950 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Building2 className="w-3 h-3" />
              <span>15 Official Projects</span>
            </button>
            <button
              onClick={() => setViewMode('regions')}
              className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'regions'
                  ? 'bg-[#006643] text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Compass className="w-3 h-3" />
              <span>7 Regional Hubs</span>
            </button>
          </div>
        </div>

        {/* Aggregated National Operational Numbers */}
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-mono">
          <div className="flex items-center gap-1.5" title="Total Projects in Portfolio">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-white font-bold">15 Projects</span>
            <span className="text-stone-300 hidden md:inline text-[10px]">(10 Active, 5 Done)</span>
          </div>

          <div className="flex items-center gap-1.5" title="Total Direct Beneficiaries">
            <Users className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-white font-bold">345,000+</span>
            <span className="text-stone-300 hidden md:inline text-[10px]">Beneficiaries</span>
          </div>

          <div className="flex items-center gap-1.5" title="Federal Regions Covered">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-white font-bold">7</span>
            <span className="text-stone-300 hidden md:inline text-[10px]">Regions</span>
          </div>
        </div>
      </div>

      {/* Main Workspace: Left Information Panel + Right GIS Map */}
      <div className="flex flex-col lg:flex-row min-h-[620px] sm:min-h-[680px] bg-stone-900">
        
        {/* DEDICATED LEFT-SIDE SMART INFORMATION PANEL */}
        <div className="w-full lg:w-[420px] xl:w-[460px] shrink-0 bg-[#072418] text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-emerald-900/70 p-5 sm:p-6 overflow-y-auto">
          
          {viewMode === 'projects' ? (
            /* PROJECT INSPECTION PANEL (Strict 15 projects data) */
            <div className="space-y-4">
              
              {/* Header Strip with Sector & Status */}
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-emerald-900/80">
                <div className="flex items-center gap-2">
                  <span className="bg-[#f59e0b] text-stone-950 font-mono font-black text-xs px-2.5 py-0.5 rounded shadow-sm">
                    Project #{activeProject.id}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    activeProject.status === 'Ongoing'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-stone-500/20 text-stone-300 border-stone-500/40'
                  }`}>
                    {activeProject.status}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800/60">
                  {activeProject.coordinates[0].toFixed(2)}°N, {activeProject.coordinates[1].toFixed(2)}°E
                </div>
              </div>

              {/* Sector Pill & Title */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {activeProject.sector}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-editorial text-white leading-snug">
                  {activeProject.name}
                </h3>
              </div>

              {/* Location Strip */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Target Location &amp; Woredas</span>
                </div>
                <div className="text-xs text-white font-medium pl-5 leading-relaxed">
                  {activeProject.location}
                </div>
              </div>

              {/* Objective Block */}
              <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800/80 space-y-1">
                <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Project Goal / Objective</span>
                </div>
                <p className="text-xs text-stone-200 leading-relaxed font-sans">
                  {activeProject.objective}
                </p>
              </div>

              {/* Duration & Beneficiaries 2-Card Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-stone-300 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    <span>Duration</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-white mt-1 leading-snug">
                    {activeProject.duration}
                  </div>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-stone-300 text-xs font-semibold">
                    <Users className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Beneficiaries</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-amber-300 mt-1 leading-snug">
                    {activeProject.beneficiaries}
                  </div>
                </div>
              </div>

              {/* Quick Jump Buttons for All 15 Projects */}
              <div className="pt-2 border-t border-emerald-900/80">
                <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2">
                  <span className="font-bold uppercase tracking-wider">Quick Project Selector:</span>
                  <span className="text-emerald-400 font-mono">15 Operations</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {GIS_PROJECTS_DATA.map((p) => {
                    const isCur = p.id === activeProject.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => handleSelectProject(p)}
                        onMouseEnter={() => setHoveredProjectId(p.id)}
                        onMouseLeave={() => setHoveredProjectId(null)}
                        className={`py-1.5 px-2 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center border ${
                          isCur
                            ? 'bg-[#f59e0b] text-stone-950 border-amber-300 shadow-md scale-105'
                            : 'bg-white/10 hover:bg-white/20 text-stone-300 border-white/10 hover:border-amber-400/50'
                        }`}
                        title={`${p.name} - ${p.location}`}
                      >
                        <span>#{p.id}</span>
                        <span className="text-[9px] font-sans font-normal opacity-75">
                          {p.status === 'Ongoing' ? 'Act' : 'Done'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          ) : (
            /* REGIONAL HUBS INSPECTION PANEL */
            <div className="space-y-4">
              
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-emerald-900/80">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Regional Field Hub</span>
                </span>

                <div className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800/60">
                  {activeRegion.gisCoordinates[0].toFixed(2)}°N, {activeRegion.gisCoordinates[1].toFixed(2)}°E
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeRegion.fieldHub}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-white tracking-tight mt-1">
                  {activeRegion.name}
                </h3>
                <div className="text-xs text-stone-300 flex items-center gap-2 mt-1">
                  <span>Capital: <strong className="text-white font-medium">{activeRegion.capital}</strong></span>
                </div>
              </div>

              {/* 4-Card Regional Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                  <div className="text-stone-300 text-xs font-semibold">Beneficiaries</div>
                  <div className="text-lg font-bold font-mono text-white mt-1">{activeRegion.beneficiaries}</div>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                  <div className="text-stone-300 text-xs font-semibold">Projects</div>
                  <div className="text-lg font-bold font-mono text-white mt-1">{activeRegion.activeProjectsCount}</div>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                  <div className="text-stone-300 text-xs font-semibold">Solar Wells</div>
                  <div className="text-lg font-bold font-mono text-sky-300 mt-1">{activeRegion.solarWellsCount}</div>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                  <div className="text-stone-300 text-xs font-semibold">Woredas</div>
                  <div className="text-lg font-bold font-mono text-rose-300 mt-1">{activeRegion.woredasCount}</div>
                </div>
              </div>

              {/* Projects in this Region */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Projects Operating Here:
                </div>
                <div className="space-y-1">
                  {activeRegion.activeProjects.map((pName, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-white/5 border border-white/10 text-xs text-stone-200 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{pName}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Footer Navigation Strip */}
          <div className="pt-4 border-t border-emerald-900/80">
            <div className="flex items-center justify-between text-[11px] text-stone-400">
              <span>* Click any point marker on the map to zoom &amp; inspect</span>
              <button
                onClick={handleResetView}
                className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer"
              >
                Reset Ethiopia View
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: UNCLUTTERED GIS MAP CANVAS */}
        <div className="flex-1 relative h-[520px] sm:h-[600px] lg:h-auto min-h-[500px] bg-stone-100">
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* Floating Top-Left: Filter Chips on Map */}
          {viewMode === 'projects' && (
            <div className="absolute top-3 left-3 z-10 hidden sm:flex items-center gap-1.5 bg-stone-900/85 backdrop-blur-md p-1.5 rounded-xl border border-stone-700 shadow-lg text-xs">
              <span className="text-stone-400 font-bold px-1 text-[11px]">Filter:</span>
              <button
                onClick={() => setStatusFilter('All')}
                className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] transition-all cursor-pointer ${
                  statusFilter === 'All' ? 'bg-[#f59e0b] text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
                }`}
              >
                All (15)
              </button>
              <button
                onClick={() => setStatusFilter('Ongoing')}
                className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] transition-all cursor-pointer ${
                  statusFilter === 'Ongoing' ? 'bg-emerald-600 text-white font-bold' : 'text-stone-300 hover:text-white'
                }`}
              >
                Ongoing (10)
              </button>
              <button
                onClick={() => setStatusFilter('Recently Completed')}
                className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] transition-all cursor-pointer ${
                  statusFilter === 'Recently Completed' ? 'bg-stone-700 text-white font-bold' : 'text-stone-300 hover:text-white'
                }`}
              >
                Completed (5)
              </button>
            </div>
          )}

          {/* Floating Top-Right: Navigation & Basemap Switcher */}
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
            
            {/* Zoom Controls */}
            <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-stone-200 overflow-hidden flex flex-col">
              <button
                onClick={handleZoomIn}
                className="w-11 h-11 flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors border-b border-stone-200 cursor-pointer"
                title="Zoom In"
                aria-label="Zoom in map"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="w-11 h-11 flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                title="Zoom Out"
                aria-label="Zoom out map"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
            </div>

            {/* Reset View Button */}
            <button
              onClick={handleResetView}
              className="w-11 h-11 flex items-center justify-center bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              title="Reset View to Full Ethiopia"
              aria-label="Reset map view"
            >
              <RotateCcw className="w-5 h-5" />
            </button>

            {/* Basemap Switcher Menu */}
            <div className="relative">
              <button
                onClick={() => setShowLayerMenu(!showLayerMenu)}
                className={`w-11 h-11 flex items-center justify-center backdrop-blur-md rounded-xl shadow-md border transition-all cursor-pointer ${
                  showLayerMenu
                    ? 'bg-[#006643] text-white border-[#006643]'
                    : 'bg-white/95 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
                title="Select GIS Basemap Layer"
                aria-label="Toggle basemap layer menu"
              >
                <Layers className="w-5 h-5" />
              </button>

              {showLayerMenu && (
                <div className="absolute right-0 top-12 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-stone-200 p-2 min-w-[220px] z-30 space-y-1 text-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-2 py-1">
                    GIS Imagery Layers
                  </div>
                  {[
                    { id: 'satellite', label: 'Satellite Hybrid (GIS)', sub: 'High-Res Aerial + Labels' },
                    { id: 'terrain', label: 'Topographic Relief', sub: 'Elevation & Contours' },
                    { id: 'carto', label: 'Clean Humanitarian', sub: 'Voyager GIS Vector' },
                    { id: 'osm', label: 'OpenStreetMap', sub: 'Standard Humanitarian' }
                  ].map((layer) => (
                    <button
                      key={layer.id}
                      onClick={() => {
                        setBasemapType(layer.id as any);
                        setShowLayerMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                        basemapType === layer.id
                          ? 'bg-[#006643] text-white font-semibold'
                          : 'hover:bg-stone-100 text-stone-800'
                      }`}
                    >
                      <div>
                        <div className="text-[11px] leading-tight font-medium">{layer.label}</div>
                        <div className={`text-[10px] ${basemapType === layer.id ? 'text-emerald-200' : 'text-stone-400'}`}>
                          {layer.sub}
                        </div>
                      </div>
                      {basemapType === layer.id && <Check className="w-4 h-4 shrink-0" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Floating Bottom-Right: Smart Project Legend */}
          <div className="absolute bottom-3 right-3 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-md border border-stone-200 text-xs space-y-1.5 max-w-[220px]">
            <div className="font-bold text-stone-900 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#006643]" />
              <span>GIS Map Guide</span>
            </div>
            {viewMode === 'projects' ? (
              <div className="space-y-1 text-[11px] text-stone-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b] ring-2 ring-amber-300"></span>
                  <span className="font-medium text-stone-900">Selected Project (#1–#15)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span>Ongoing Interventions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-500"></span>
                  <span>Recently Completed</span>
                </div>
              </div>
            ) : (
              <div className="space-y-1 text-[11px] text-stone-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
                  <span>Active Hub</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#006643]"></span>
                  <span>Regional Coordination Base</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
