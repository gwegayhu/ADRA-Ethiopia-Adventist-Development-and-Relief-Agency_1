import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, FileText, Compass, Heart, Globe } from 'lucide-react';
import { Language } from '../types';
import { FOCUS_AREAS_DATA } from '../data/focusAreasData';
import { SAMPLE_BLOGS, getLocalizedBlog } from '../data/blogsData';
import { REGIONS_DATA, getLocalizedRegion } from '../data/adraData';
import { pickLang } from '../data/translations';

export type CorePageId =
  | 'home'
  | 'impact'
  | 'ways-to-give'
  | 'about'
  | 'media'
  | 'contact'
  | 'brand-test';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onNavigatePage: (page: CorePageId, options?: { subSection?: string; pillarId?: string }) => void;
  onOpenDonate: (presetSector?: string) => void;
}

interface SearchEntry {
  id: string;
  category: string;
  title: string;
  summary: string;
  actionLabel: string;
  onSelect: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onNavigatePage,
  onOpenDonate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const entries: SearchEntry[] = useMemo(() => {
    const list: SearchEntry[] = [
      {
        id: 'page-ways-to-give',
        category: currentLang === 'am' ? 'ገጽ' : 'WAYS TO GIVE',
        title: currentLang === 'am' ? 'የድጋፍ መንገዶች እና የስጦታ ካታሎግ' : 'Ways to Give & Gift Catalog',
        summary:
          currentLang === 'am'
            ? 'ወቅታዊ ጥሪ፣ የስጦታ ካታሎግ እና በቴሌብር/CBE ብር ድጋፍ ማድረግ'
            : 'Support Current Appeal, Gift Catalog, and see how 88%+ directly funds field operations.',
        actionLabel: 'OPEN PAGE',
        onSelect: () => onNavigatePage('ways-to-give'),
      },
      {
        id: 'page-about',
        category: 'ABOUT',
        title: currentLang === 'am' ? 'ታሪካችን እና አስተዳደር (1982–2026)' : 'Our Story, Leadership & Safeguarding',
        summary:
          currentLang === 'am'
            ? 'ከ1982 ዓ.ም ጀምሮ በኢትዮጵያ የሰብዓዊ አገልግሎት ታሪክ እና ACSO #2049'
            : 'Serving humanity across Ethiopia since 1982. Registered ACSO #2049, audited governance & leadership.',
        actionLabel: 'OUR STORY',
        onSelect: () => onNavigatePage('about'),
      },
      {
        id: 'page-contact',
        category: 'ABOUT',
        title: currentLang === 'am' ? 'አድራሻችን እና 7 የክልል ቢሮዎች' : 'Contact Us & Regional Hubs',
        summary: 'Addis Ababa National HQ (Kirkos Sub-City, +251-115-512212) and 7 regional coordination hubs.',
        actionLabel: 'CONTACT US',
        onSelect: () => onNavigatePage('contact'),
      },
    ];

    FOCUS_AREAS_DATA.forEach((area) => {
      list.push({
        id: `pillar-${area.id}`,
        category: 'IMPACT',
        title: pickLang(currentLang, area.title),
        summary: pickLang(currentLang, area.description),
        actionLabel: 'VIEW PILLAR',
        onSelect: () => onNavigatePage('impact', { pillarId: area.id }),
      });
    });

    SAMPLE_BLOGS.forEach((blog) => {
      const loc = getLocalizedBlog(blog, currentLang);
      list.push({
        id: `blog-${blog.id}`,
        category: 'MEDIA',
        title: loc.title,
        summary: loc.summary,
        actionLabel: 'READ ARTICLE',
        onSelect: () => onNavigatePage('media', { subSection: 'blogs' }),
      });
    });

    REGIONS_DATA.forEach((region) => {
      const loc = getLocalizedRegion(region, currentLang);
      list.push({
        id: `region-${region.id}`,
        category: 'WHERE WE WORK',
        title: loc.name,
        summary: loc.summary,
        actionLabel: 'VIEW REGION',
        onSelect: () => onNavigatePage('impact', { subSection: 'where-we-work' }),
      });
    });

    return list;
  }, [currentLang, onNavigatePage]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries.slice(0, 8);
    return entries.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [entries, query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search ADRA Ethiopia"
    >
      <div
        className="bg-white w-full max-w-2xl shadow-2xl border-t-4 border-[#007B5F] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#007B5F] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              currentLang === 'am'
                ? 'ፕሮግራሞችን፣ ዜናዎችን፣ ክልሎችን ይፈልጉ...'
                : currentLang === 'om'
                ? 'Sagantaa, oduu, naannoo barbaadi...'
                : currentLang === 'ti'
                ? 'መደባት፣ ዜናታት፣ ክልላት ድለዩ...'
                : 'Search impact areas, stories, regional hubs, or ways to give...'
            }
            className="w-full text-sm sm:text-base text-[#231F20] placeholder-stone-400 focus:outline-none font-sans"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 text-[#54585A] hover:text-[#231F20] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto divide-y divide-stone-100">
          {filtered.length === 0 ? (
            <div className="p-8 text-center space-y-3">
              <p className="text-sm text-[#54585A] font-serif">
                No matching pages or articles found for &ldquo;{query}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenDonate();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#007B5F] hover:bg-[#00614A] text-white text-xs font-bold uppercase tracking-[0.05em] rounded-full cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Support ADRA Ethiopia</span>
              </button>
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  item.onSelect();
                  onClose();
                }}
                className="w-full text-left px-5 py-4 hover:bg-[#E5F2EF]/60 transition-colors flex items-start justify-between gap-4 cursor-pointer group"
              >
                <div className="space-y-1 min-w-0">
                  <div className="text-[11px] font-bold text-[#007B5F] uppercase tracking-[0.05em] font-sans flex items-center gap-1.5">
                    {item.category === 'IMPACT' ? (
                      <Compass className="w-3 h-3" />
                    ) : item.category === 'MEDIA' ? (
                      <FileText className="w-3 h-3" />
                    ) : (
                      <Globe className="w-3 h-3" />
                    )}
                    <span>{item.category}</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#231F20] group-hover:text-[#007B5F] font-sans truncate">
                    {item.title}
                  </div>
                  <p className="text-xs text-[#54585A] font-serif line-clamp-1">
                    {item.summary}
                  </p>
                </div>
                <span className="shrink-0 self-center text-[11px] font-bold uppercase tracking-[0.05em] text-[#007B5F] flex items-center gap-1 font-sans">
                  <span>{item.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
