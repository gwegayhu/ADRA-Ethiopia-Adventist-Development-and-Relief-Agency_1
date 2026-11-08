import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, MapPin, Calendar, Heart, ArrowUpRight } from 'lucide-react';
import { Story, Language } from '../types';
import { STORIES } from '../data/adraData';

interface StoriesSectionProps {
  currentLang: Language;
  onOpenDonate: (presetSector?: string) => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({ currentLang, onOpenDonate }) => {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const [readFullStoryModal, setReadFullStoryModal] = useState<Story | null>(null);

  const activeStory = STORIES[activeStoryIdx];

  const nextStory = () => {
    setActiveStoryIdx((prev) => (prev + 1) % STORIES.length);
  };

  const prevStory = () => {
    setActiveStoryIdx((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span className="inline-block w-2 h-0.5 bg-emerald-700" />
              <span>{currentLang === 'en' ? 'Voices from the Field' : 'የተጠቃሚዎች ምስክርነት'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display">
              {currentLang === 'en' ? 'Stories of Restored Dignity & Hope' : 'የተለወጡ ህይወቶች እውነተኛ ታሪኮች'}
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base">
              Real accounts of resilience from Ethiopian mothers, students, farmers, and certified youth.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevStory}
              className="p-2.5 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 transition-colors shadow-2xs"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-stone-500 px-2 tabular-nums">
              {activeStoryIdx + 1} / {STORIES.length}
            </span>
            <button
              onClick={nextStory}
              className="p-2.5 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 transition-colors shadow-2xs"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Story Split Showcase */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={activeStory.image}
                alt={activeStory.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <div className="font-bold text-lg">{activeStory.name}</div>
                <div className="text-xs text-stone-200">{activeStory.role} · {activeStory.location}</div>
              </div>
            </div>

            {/* Quote & Narrative Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-stone-700 border-b border-stone-200 pb-3">
                  <span className="font-bold text-[#006643] uppercase tracking-wider">{activeStory.sector}</span>
                  <span className="flex items-center gap-1 font-semibold text-stone-700">
                    <MapPin className="w-3.5 h-3.5 text-[#006643]" />
                    <span>{activeStory.location}</span>
                  </span>
                </div>

                {/* Big Editorial Quote */}
                <div className="relative">
                  <Quote className="w-10 h-10 text-emerald-100 absolute -top-4 -left-2 -z-0 select-none" />
                  <blockquote className="text-lg sm:text-xl font-medium text-stone-900 italic leading-relaxed relative z-10 font-serif">
                    "{currentLang === 'en' ? activeStory.quote : activeStory.quoteAm}"
                  </blockquote>
                </div>

                {/* Beneficiary Attribution */}
                <div className="hidden lg:block pt-2">
                  <div className="text-lg font-bold text-stone-900 font-display">
                    {activeStory.name}
                  </div>
                  <div className="text-xs text-stone-700 font-semibold">
                    {activeStory.role}
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed line-clamp-3 font-normal">
                  {activeStory.fullStory}
                </p>

              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setReadFullStoryModal(activeStory)}
                  className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Case Narrative</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenDonate()}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 fill-emerald-200 text-emerald-200" />
                  <span>Support More Stories Like {activeStory.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Story Selector Mini Thumbnails */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STORIES.map((s, idx) => {
            const isSelected = idx === activeStoryIdx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStoryIdx(idx)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-white border-emerald-700 shadow-xs ring-1 ring-emerald-700'
                    : 'bg-white/60 hover:bg-white border-stone-200 text-stone-600'
                }`}
              >
                <div className="text-xs font-bold text-stone-900 font-display line-clamp-1">{s.name}</div>
                <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{s.location}</div>
                <div className="text-[10px] text-emerald-800 font-semibold mt-1">{s.sector.split(' ')[0]}</div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Full Story Modal */}
      {readFullStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">{readFullStoryModal.sector}</span>
                <h3 className="text-xl font-bold text-stone-900 font-display mt-0.5">{readFullStoryModal.name}</h3>
                <div className="text-xs text-stone-500">{readFullStoryModal.role} · {readFullStoryModal.location}</div>
              </div>
              <button
                onClick={() => setReadFullStoryModal(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md"
              >
                ✕
              </button>
            </div>

            <div className="text-stone-700 text-sm leading-relaxed space-y-3">
              <p className="font-serif italic text-stone-900 border-l-2 border-emerald-600 pl-3 py-1">
                "{readFullStoryModal.quote}"
              </p>
              <p>{readFullStoryModal.fullStory}</p>
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setReadFullStoryModal(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setReadFullStoryModal(null);
                  onOpenDonate();
                }}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-emerald-200 text-emerald-200" />
                <span>Support Similar Interventions</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
