import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  X,
  Heart,
  Share2,
  Check,
  Quote,
  Tag,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Language } from '../types';
import {
  BlogItem,
  SAMPLE_BLOGS,
  getLocalizedBlog,
  getLocalizedBlogCategory
} from '../data/blogsData';
import { UI_COPY } from '../data/uiCopy';

interface BlogsSectionProps {
  currentLang: Language;
  onOpenDonate: (presetSector?: string) => void;
}

const BLOG_CATEGORIES = [
  'All',
  'Water, Sanitation & Hygiene',
  'Education & Protection',
  'Food Security & Livelihoods',
  'Emergency Response & Health',
  'Economic Growth & Enterprise'
] as const;

export const BlogsSection: React.FC<BlogsSectionProps> = ({ currentLang, onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const ui = UI_COPY[currentLang].blogs;
  const common = UI_COPY[currentLang].common;

  const selectedBlog = selectedBlogId
    ? SAMPLE_BLOGS.find((b) => b.id === selectedBlogId) ?? null
    : null;
  const selectedLoc = selectedBlog ? getLocalizedBlog(selectedBlog, currentLang) : null;

  const filteredBlogs = SAMPLE_BLOGS.filter((blog) => {
    const loc = getLocalizedBlog(blog, currentLang);
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      blog.title.toLowerCase().includes(q) ||
      loc.title.toLowerCase().includes(q) ||
      blog.summary.toLowerCase().includes(q) ||
      loc.summary.toLowerCase().includes(q) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      loc.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      blog.author.name.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleShare = (_blog: BlogItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '#blogs');
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleNextBlog = () => {
    if (!selectedBlog) return;
    const currentIndex = SAMPLE_BLOGS.findIndex((b) => b.id === selectedBlog.id);
    const nextIndex = (currentIndex + 1) % SAMPLE_BLOGS.length;
    setSelectedBlogId(SAMPLE_BLOGS[nextIndex].id);
  };

  const handlePrevBlog = () => {
    if (!selectedBlog) return;
    const currentIndex = SAMPLE_BLOGS.findIndex((b) => b.id === selectedBlog.id);
    const prevIndex = (currentIndex - 1 + SAMPLE_BLOGS.length) % SAMPLE_BLOGS.length;
    setSelectedBlogId(SAMPLE_BLOGS[prevIndex].id);
  };

  return (
    <section id="blogs" className="border-b border-stone-200 scroll-mt-20">

      {/* Top Emerald Banner */}
      <div className="bg-[#073826] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/humanitarian_tech_dignity_1792616605305.jpg"
            alt={ui.breadcrumbCurrent}
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans">
            {common.home} &gt; {ui.breadcrumbCurrent}
          </div>

          <div className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
            {ui.kicker}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-3xl">
            {ui.bannerTitle}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-sans">
            {ui.bannerSubtitle}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-12 sm:py-16 bg-[#f9faf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
            {/* Category Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-2 md:pb-0">
              {BLOG_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#006643] text-white shadow-xs'
                        : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
                    }`}
                  >
                    {getLocalizedBlogCategory(cat, currentLang)}
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative min-w-[260px] md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ui.searchPlaceholder}
                className="w-full pl-9 pr-8 py-2 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"
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

          {/* Blog Cards Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 max-w-lg mx-auto shadow-sm">
              <BookOpen className="w-10 h-10 text-emerald-700 mx-auto mb-3 opacity-80" />
              <p className="text-stone-900 font-bold text-lg font-editorial">{ui.emptyTitle}</p>
              <p className="text-stone-500 text-sm mt-1">{ui.emptySub}</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-[#006643] hover:bg-emerald-800 text-white font-bold text-xs rounded-lg cursor-pointer transition-colors"
              >
                {common.resetFilters}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, idx) => {
                const loc = getLocalizedBlog(blog, currentLang);
                const isLead = idx === 0 && selectedCategory === 'All' && !searchQuery;

                return (
                  <div
                    key={blog.id}
                    onClick={() => setSelectedBlogId(blog.id)}
                    className={`bg-white rounded-2xl overflow-hidden border border-emerald-900/30 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between ${
                      isLead ? 'lg:col-span-2 md:col-span-2' : ''
                    }`}
                  >
                    <div>
                      <div className={`relative overflow-hidden bg-stone-100 ${isLead ? 'aspect-[21/10] sm:aspect-[16/7]' : 'aspect-[16/10]'}`}>
                        <img
                          src={blog.image}
                          alt={loc.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                          referrerPolicy="no-referrer"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <div className="absolute top-4 left-4 px-3 py-1 bg-[#073826]/95 backdrop-blur-md text-[#f59e0b] text-xs font-bold rounded-lg uppercase tracking-wider border border-emerald-600/60">
                          {loc.category}
                        </div>

                        <div className="absolute bottom-3 right-4 text-xs font-medium text-white flex items-center gap-1.5 drop-shadow-md">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{loc.readTime}</span>
                        </div>
                      </div>

                      <div className="p-6 sm:p-7 space-y-4">
                        <div className="flex items-center gap-3 text-xs text-stone-700 font-sans">
                          <span className="flex items-center gap-1 font-bold text-emerald-900">
                            <User className="w-3.5 h-3.5" />
                            <span>{blog.author.name}</span>
                          </span>
                          <span className="text-stone-400">·</span>
                          <span className="flex items-center gap-1 font-medium text-stone-600">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{loc.date}</span>
                          </span>
                        </div>

                        <h3 className={`font-bold font-editorial text-stone-900 group-hover:text-[#006643] transition-colors leading-snug ${
                          isLead ? 'text-2xl sm:text-3xl' : 'text-xl'
                        }`}>
                          {loc.title}
                        </h3>

                        <p className="text-stone-700 text-sm leading-relaxed font-sans line-clamp-3">
                          {loc.summary}
                        </p>

                        <div className="pt-2 grid grid-cols-3 gap-2 border-t border-stone-100">
                          {loc.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="bg-stone-50 border border-stone-200/80 rounded-lg p-2 text-center">
                              <div className="text-sm sm:text-base font-extrabold text-[#006643] font-editorial">{m.value}</div>
                              <div className="text-xs text-stone-700 font-sans truncate font-medium">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 sm:px-7 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 overflow-hidden">
                        <Tag className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                        <span className="text-stone-700 font-medium truncate">{loc.tags.slice(0, 2).join(', ')}</span>
                      </div>

                      <div className="font-bold text-[#006643] group-hover:text-emerald-950 flex items-center gap-1 transition-colors shrink-0">
                        <span>{ui.readBlogBtn}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* Full Blog Reader Modal */}
      {selectedBlog && selectedLoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedBlogId(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Sticky Bar */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#006643] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>{ui.modalHeader}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevBlog}
                  title={ui.prevTitle}
                  aria-label={ui.prevTitle}
                  className="p-1.5 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextBlog}
                  title={ui.nextTitle}
                  aria-label={ui.nextTitle}
                  className="p-1.5 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare(selectedBlog)}
                  title={ui.copyTitle}
                  aria-label={ui.copyTitle}
                  className="p-1.5 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors relative cursor-pointer"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-800" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setSelectedBlogId(null)}
                  aria-label={common.close}
                  className="p-1.5 rounded-lg text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src={selectedBlog.image}
                alt={selectedLoc.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-block px-3 py-1 bg-[#f59e0b] text-stone-950 text-xs font-bold rounded-lg uppercase tracking-wider">
                  {selectedLoc.category}
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-editorial text-white leading-tight">
                  {selectedLoc.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-100">
                  <span className="font-bold text-amber-300">{selectedBlog.author.name}</span>
                  <span>·</span>
                  <span>{selectedLoc.date}</span>
                  <span>·</span>
                  <span>{selectedLoc.readTime}</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-10 space-y-8">

              {/* Author Bio Banner */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="w-12 h-12 rounded-full bg-[#006643] text-white flex items-center justify-center font-bold text-lg font-editorial shrink-0 shadow-sm">
                  {selectedBlog.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">{selectedBlog.author.name}</div>
                  <div className="text-xs text-stone-700 font-medium">
                    {selectedLoc.authorRole}
                  </div>
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-4">
                {selectedLoc.metrics.map((metric, i) => (
                  <div key={i} className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                    <div className="text-2xl font-bold text-[#006643] font-editorial">{metric.value}</div>
                    <div className="text-xs text-stone-700 font-semibold mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Pull Quote */}
              {selectedBlog.quote && (
                <div className="relative pl-6 border-l-4 border-[#f59e0b] py-3 bg-amber-50/70 rounded-r-xl pr-4">
                  <Quote className="w-6 h-6 text-[#f59e0b] mb-1 opacity-70" />
                  <p className="text-stone-900 font-editorial text-base sm:text-lg italic leading-relaxed">
                    "{selectedLoc.quoteText}"
                  </p>
                  <div className="text-xs font-bold text-stone-800 mt-2">
                    — {selectedBlog.quote.author}
                  </div>
                </div>
              )}

              {/* Article Paragraphs */}
              <div className="space-y-5 text-stone-800 leading-relaxed font-sans text-base">
                {selectedLoc.content.map((para, pIdx) => (
                  <p key={pIdx}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Tags list */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-stone-700 mr-2 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{ui.topicTagsLabel}</span>
                </span>
                {selectedLoc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-md transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Call to Action Support Box */}
              <div className="p-6 bg-[#073826] rounded-2xl text-white space-y-4 shadow-lg border border-emerald-700">
                <div className="flex items-center gap-2 text-xs font-bold text-[#f59e0b] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>{ui.ctaEyebrow}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-editorial">
                  {ui.ctaHeadingPrefix} {selectedLoc.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-200 max-w-xl leading-relaxed">
                  {ui.ctaDesc}
                </p>
                <button
                  onClick={() => {
                    const cat = selectedBlog.category;
                    setSelectedBlogId(null);
                    onOpenDonate(cat);
                  }}
                  className="px-6 py-3 bg-[#f59e0b] hover:bg-[#d97706] active:bg-[#b45309] text-stone-950 font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4" />
                  <span>{ui.ctaBtn}</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

