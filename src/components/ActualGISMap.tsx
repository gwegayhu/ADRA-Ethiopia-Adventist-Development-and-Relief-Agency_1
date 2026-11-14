import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RegionData, Language } from '../types';
import { getLocalizedRegion } from '../data/adraData';
import { UI_COPY } from '../data/uiCopy';
import {
  Users,
  Layers,
  Compass,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  MapPin,
  Check,
  Sparkles,
  CheckCircle2,
  Building
} from 'lucide-react';

interface ActualGISMapProps {
  regions: RegionData[];
  selectedRegionId: string;
  onSelectRegion: (regionId: string) => void;
  currentLang: Language;
}

const formatMarkerRegionName = (fullName: string, lang: Language): string => {
  if (lang === 'am') return fullName.replace(/^የ/, '').replace(/ ክልል$/, '');
  if (lang === 'om') return fullName.replace(/^Naannoo /, '');
  if (lang === 'ti') return fullName.replace(/^ክልል /, '');
  return fullName.replace(/ Region$/, '');
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
  const CARTO_API_KEY = (import.meta.env.VITE_CARTO_API_KEY || '').trim();

  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);

  const [basemapType, setBasemapType] = useState<'satellite' | 'terrain' | 'carto' | 'osm'>(
    CARTO_API_KEY ? 'carto' : GIS_API_KEY ? 'satellite' : 'osm'
  );
  const [showLayerMenu, setShowLayerMenu] = useState(false);

  const g = UI_COPY[currentLang].gisMap;

  const activeRegion = hoveredRegion || regions.find((r) => r.id === selectedRegionId) || regions[0];
  const locActiveRegion = getLocalizedRegion(activeRegion, currentLang);

  const getTileConfig = (type: 'satellite' | 'terrain' | 'carto' | 'osm') => {
    if (type === 'satellite') {
      const url = GIS_API_KEY
        ? `https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&key=${GIS_API_KEY}`
        : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      return {
        url,
        options: {
          maxZoom: 20,
          subdomains: GIS_API_KEY ? ['0', '1', '2', '3'] : [''],
          attribution: '&copy; Google / Esri World Imagery'
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
          maxZoom: 17,
          subdomains: GIS_API_KEY ? ['0', '1', '2', '3'] : ['a', 'b', 'c'],
          attribution: '&copy; OpenTopoMap & OpenStreetMap'
        }
      };
    }
    if (type === 'carto') {
      if (!CARTO_API_KEY) {
        return {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          options: {
            maxZoom: 19,
            subdomains: ['a', 'b', 'c'],
            attribution: '&copy; OpenStreetMap contributors'
          }
        };
      }

      return {
        url: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${encodeURIComponent(CARTO_API_KEY)}`,
        options: {
          maxZoom: 20,
          subdomains: 'abcd',
          attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
        }
      };
    }
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      options: {
        maxZoom: 19,
        subdomains: ['a', 'b', 'c'],
        attribution: '&copy; OpenStreetMap contributors'
      }
    };
  };

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const initialCenter: [number, number] = [9.145, 40.489673];
    const initialZoom = 6;

    const map = L.map(mapContainerRef.current, {
      center: initialCenter,
      zoom: initialZoom,
      minZoom: 5,
      maxZoom: 20,
      zoomControl: false,
      attributionControl: false
    });

    const ethiopiaBounds = L.latLngBounds([3.4, 33.0], [14.9, 48.0]);
    map.setMaxBounds(ethiopiaBounds.pad(0.3));

    const config = getTileConfig(basemapType);
    const tileLayer = L.tileLayer(config.url, config.options).addTo(map);

    tileLayer.on('tileerror', () => {
      if (basemapType === 'satellite') {
        const fallback = L.tileLayer(
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          { maxZoom: 18 }
        ).addTo(map);
        tileLayerRef.current = fallback;
        fallback.bringToBack();
      } else if (basemapType === 'carto') {
        const fallback = L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          { maxZoom: 19, subdomains: ['a', 'b', 'c'], attribution: '&copy; OpenStreetMap contributors' }
        ).addTo(map);
        tileLayerRef.current = fallback;
        fallback.bringToBack();
      }
    });

    tileLayerRef.current = tileLayer;

    const layersGroup = L.layerGroup().addTo(map);
    layersGroupRef.current = layersGroup;

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

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
      } else if (basemapType === 'carto') {
        const fallback = L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          { maxZoom: 19, subdomains: ['a', 'b', 'c'], attribution: '&copy; OpenStreetMap contributors' }
        ).addTo(map);
        tileLayerRef.current = fallback;
        fallback.bringToBack();
      }
    });

    tileLayerRef.current = newTileLayer;
    newTileLayer.bringToBack();
  }, [basemapType]);

  // Render ONLY Regional Hub markers on Leaflet (no individual project pins)
  useEffect(() => {
    if (!mapInstanceRef.current || !layersGroupRef.current) return;
    const layersGroup = layersGroupRef.current;
    layersGroup.clearLayers();

    regions.forEach((region) => {
      const isSelected = region.id === selectedRegionId;
      const locR = getLocalizedRegion(region, currentLang);
      const displayName = formatMarkerRegionName(locR.name, currentLang);

      const pointHtml = `
        <div class="smart-point-marker relative group cursor-pointer flex items-center justify-center -translate-x-1/2 -translate-y-1/2 select-none">
          <span class="absolute w-10 h-10 rounded-full ${
            isSelected
              ? 'bg-amber-400/50 animate-ping'
              : 'bg-emerald-400/0 group-hover:bg-amber-400/30 group-hover:animate-ping'
          } pointer-events-none transition-all duration-300"></span>

          <div class="relative w-7 h-7 rounded-full flex items-center justify-center shadow-xl border-2 border-white transition-all duration-200 ${
            isSelected
              ? 'bg-[#f59e0b] scale-125 ring-4 ring-amber-300/50 z-30'
              : 'bg-[#006643] group-hover:scale-125 group-hover:bg-[#f59e0b] ring-2 ring-white z-10'
          }">
            <span class="w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-stone-950' : 'bg-white group-hover:bg-stone-950'}"></span>
          </div>

          <div class="absolute left-8 pointer-events-none whitespace-nowrap px-3 py-1 rounded-md text-xs font-bold tracking-tight shadow-md border transition-all duration-200 ${
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
        iconSize: [28, 28],
        iconAnchor: [14, 14]
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
        if (mapInstanceRef.current) {
          mapInstanceRef.current.flyTo(region.gisCoordinates, 7.5, { duration: 0.8 });
        }
      });

      marker.addTo(layersGroup);
    });
  }, [regions, selectedRegionId, currentLang, onSelectRegion]);

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

  const layerOptions: { id: 'satellite' | 'terrain' | 'carto' | 'osm'; label: string; sub: string }[] = [
    { id: 'satellite', label: g.layers.satellite.label, sub: g.layers.satellite.sub },
    { id: 'terrain', label: g.layers.terrain.label, sub: g.layers.terrain.sub },
    { id: 'carto', label: g.layers.carto.label, sub: g.layers.carto.sub },
    { id: 'osm', label: g.layers.osm.label, sub: g.layers.osm.sub }
  ];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-emerald-900/40 bg-stone-900 shadow-2xl">
      <div className="bg-[#073826] text-white px-4 py-3 border-b border-emerald-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-pulse"></div>
          <span className="font-bold tracking-wider uppercase text-amber-400 font-sans">
            {currentLang === 'am'
              ? 'የክልል ማዕከላትና ተደራሽነት'
              : currentLang === 'om'
              ? 'Damee Naannoo fi Hojii'
              : currentLang === 'ti'
              ? 'ማእከላት ክልልን ተበጻሕነትን'
              : 'Regional Field Hubs & Presence'}
          </span>
          <span className="text-emerald-300/80 hidden sm:inline">|</span>
          <span className="text-stone-300 text-xs">
            {currentLang === 'am'
              ? '7 ዋና የክልል ማስተባበሪያ ማዕከላት'
              : currentLang === 'om'
              ? 'Dameewwan Qindeessaa 7'
              : currentLang === 'ti'
              ? '7 ቀንዲ መተሓባበርቲ ማእከላት'
              : '7 Core Regional Coordination Hubs'}
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-mono">
          <div className="flex items-center gap-1.5" title={g.regionsShort}>
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-white font-bold">{regions.length} {currentLang === 'am' ? 'ክልሎች' : currentLang === 'om' ? 'Naannolee' : currentLang === 'ti' ? 'ክልላት' : 'Regions'}</span>
          </div>

          <div className="flex items-center gap-1.5" title={g.beneficiariesShort}>
            <Users className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-white font-bold">345,000+</span>
            <span className="text-stone-300 hidden md:inline text-[10px]">{g.beneficiariesShort}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[580px] bg-stone-900">
        <div className="w-full lg:w-[420px] xl:w-[450px] shrink-0 bg-[#072418] text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-emerald-900/70 p-5 sm:p-6 overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-emerald-900/80">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>{g.regionalHubBadge}</span>
              </span>

              <div className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800/60">
                {activeRegion.gisCoordinates[0].toFixed(2)}°N, {activeRegion.gisCoordinates[1].toFixed(2)}°E
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{locActiveRegion.fieldHub}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-white tracking-tight mt-1">
                {locActiveRegion.name}
              </h3>
              <div className="text-xs text-stone-300 flex items-center gap-2 mt-1">
                <span>{g.capitalLabel} <strong className="text-white font-medium">{locActiveRegion.capital}</strong></span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-sans mt-2">
                {locActiveRegion.summary}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                <div className="text-stone-300 text-xs font-semibold">{g.statBeneficiaries}</div>
                <div className="text-lg font-bold font-mono text-white mt-1">{locActiveRegion.beneficiaries}</div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                <div className="text-stone-300 text-xs font-semibold">
                  {currentLang === 'am' ? 'የመስክ ማስተባበሪያ' : currentLang === 'om' ? 'Qindeessaa Dirree' : currentLang === 'ti' ? 'መተሓባበሪ መስክ' : 'Field Hub'}
                </div>
                <div className="text-sm font-bold font-sans text-amber-300 mt-1 truncate">{locActiveRegion.fieldHub}</div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                <div className="text-stone-300 text-xs font-semibold">{g.statSolarWells}</div>
                <div className="text-lg font-bold font-mono text-sky-300 mt-1">{activeRegion.solarWellsCount}</div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                <div className="text-stone-300 text-xs font-semibold">
                  {currentLang === 'am' ? 'ቁልፍ ዘርፎች' : currentLang === 'om' ? 'Sekteroota Ijoo' : currentLang === 'ti' ? 'ቀንዲ ዘርፍታት' : 'Focus Sectors'}
                </div>
                <div className="text-lg font-bold font-mono text-emerald-300 mt-1">{locActiveRegion.primaryInterventions.length}</div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {currentLang === 'am'
                    ? 'ዋና ዋና የክልሉ የትኩረት አቅጣጫዎች'
                    : currentLang === 'om'
                    ? 'Tarkaanfiiwwan Qulqullinaa Naannichaa'
                    : currentLang === 'ti'
                    ? 'ቀንዲ ናይቲ ክልል ናይ ትኹረት ኣንፈታት'
                    : 'Regional Strategic Priorities'}
                </span>
              </div>
              <div className="space-y-1.5">
                {locActiveRegion.primaryInterventions.map((intervention, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-white/5 border border-white/10 text-xs text-stone-200 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{intervention}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-900/80">
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                {currentLang === 'am' ? 'ሁሉንም ክልሎች ይመልከቱ' : currentLang === 'om' ? 'Naannolee Hunda Filadhu' : currentLang === 'ti' ? 'ኩሎም ክልላት ርአ' : 'View all regions'}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {regions.map((r) => {
                  const isCur = r.id === activeRegion.id;
                  const locR = getLocalizedRegion(r, currentLang);
                  const name = formatMarkerRegionName(locR.name, currentLang);
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => {
                        onSelectRegion(r.id);
                        if (mapInstanceRef.current) {
                          mapInstanceRef.current.flyTo(r.gisCoordinates, 7.5, { duration: 0.8 });
                        }
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                        isCur
                          ? 'bg-[#f59e0b] text-stone-950 border-amber-300 font-bold shadow-md'
                          : 'bg-white/10 hover:bg-white/20 text-stone-300 border-white/10'
                      }`}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-900/80 mt-4">
            <div className="flex items-center justify-between gap-2 text-[11px] text-stone-400">
              <span>{g.zoomPrompt}</span>
              <button
                type="button"
                onClick={handleResetView}
                className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer shrink-0"
              >
                {g.resetViewBtn}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 relative h-[500px] sm:h-[560px] lg:h-auto min-h-[480px] bg-stone-100">
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
            <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-stone-200 overflow-hidden flex flex-col">
              <button
                type="button"
                onClick={handleZoomIn}
                className="w-10 h-10 flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors border-b border-stone-200 cursor-pointer"
                title={g.zoomInAria}
                aria-label={g.zoomInAria}
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                className="w-10 h-10 flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                title={g.zoomOutAria}
                aria-label={g.zoomOutAria}
              >
                <ZoomOut className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleResetView}
              className="w-10 h-10 flex items-center justify-center bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              title={g.resetMapAria}
              aria-label={g.resetMapAria}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowLayerMenu(!showLayerMenu)}
                className={`w-10 h-10 flex items-center justify-center backdrop-blur-md rounded-xl shadow-md border transition-all cursor-pointer ${
                  showLayerMenu
                    ? 'bg-[#006643] text-white border-[#006643]'
                    : 'bg-white/95 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
                title={g.layersMenuAria}
                aria-label={g.layersMenuAria}
              >
                <Layers className="w-4 h-4" />
              </button>

              {showLayerMenu && (
                <div className="absolute right-0 top-12 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-stone-200 p-2 min-w-[210px] z-30 space-y-1 text-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-2 py-1">
                    {g.layersMenuTitle}
                  </div>
                  {layerOptions.map((layer) => (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => {
                        setBasemapType(layer.id);
                        setShowLayerMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
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
                      {basemapType === layer.id && <Check className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="absolute bottom-3 right-3 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-md border border-stone-200 text-xs space-y-1.5 max-w-[220px]">
            <div className="font-bold text-stone-900 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#006643]" />
              <span>{g.guideTitle}</span>
            </div>
            <div className="space-y-1 text-[11px] text-stone-600">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#f59e0b] ring-2 ring-amber-300 shrink-0"></span>
                <span className="font-medium text-stone-900">{g.activeHubLegend}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#006643] shrink-0"></span>
                <span>{g.baseLegend}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
